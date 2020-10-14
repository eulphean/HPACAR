// Agent.js
// Class that wraps the SceneObject. Holds the soft body that movies around in the physics world. 
// TODO: Disable collision, Make the bodies Kinematic (only velocies affect them), Turn off rotation on spheres. 

const Reactive = require('Reactive'); 
const Diagnostics = require('Diagnostics');
const Utility = require('./Utility.js');
const CANNON = require('cannon');

export default class Agent {
    constructor(sceneObject, t) {
        // Scene object. 
        this.sceneObject = sceneObject; 
        this.targetObject = t; 

        // Agent behavior. 
        this.position = Utility.getLastPosition(sceneObject);
        this.velocity = Reactive.vector(0, 1, 0); 
        this.acceleration = Reactive.vector(0, 0, 0); 
        this.rotation = Reactive.quaternionFromAngleAxis(0, Reactive.vector(0, 1, 0));

        // Tweak this control how the Agent moves.
        this.maxSpeed = 0.5; 
        this.maxForce = 0.1;
        
        // Tolerance for reaching a point.
        this.arriveTolerance = 2; 
        this.slowDownTolerance = 5; 
        
        // Store target position. 
        this.target = Utility.getLastPosition(this.targetObject); 
    }

    // Function declaration. 
    update() {
        // Calculate steering forces for the target. 
        this.seek(); 
        
        // Update current position based on velocity. 
        this.updatePosition(); 
        
        // Rotate the object first, then update the position. 
        this.syncRotation();

        // Sync current position with the Scene object's transform. 
        this.syncPosition(); 
    }

    // Calculate new target. 
    calcTarget() {
        let wanderD = 20; // Max wander distance
        let wanderR = 5;
        let thetaChange = 5; 
        let wanderTheta = Utility.random(-thetaChange, thetaChange); 

        let newTarget = new CANNON.Vec3(this.velocity.x.pinLastValue(), this.velocity.y.pinLastValue(), this.velocity.z.pinLastValue()); 
        let pos = new CANNON.Vec3(this.position.x.pinLastValue(), this.position.y.pinLastValue(), this.position.z.pinLastValue());
        newTarget.normalize(); // Get the heading of the agent. 
        newTarget.scale(wanderD, newTarget); // Scale it.
        newTarget.vadd(pos, newTarget); // Make it relative to current position.

        let azimuth = Utility.azimuth(newTarget); 
        let inclination = Utility.inclination(newTarget); // [TODO] Use this to tilt the head of the Agent

        // Calculate New Target. 
        let xPos = wanderR * Math.cos(azimuth + wanderTheta);
        let yPos = wanderR * Math.sin(azimuth + wanderTheta);
        let zPos = wanderR * Math.cos(inclination); 
        let pOffset = new CANNON.Vec3(xPos, yPos, zPos); 
        newTarget.vadd(pOffset, newTarget); // With respect to current position 
        
        // TODO: Optimize this dirty logic to give a dimension box in the beginning. 
        // Use this dirty logic to set bounds on the agent. 
        if (newTarget.y < 0) {
            //newTarget = Reactive.vector(newTarget.x.pinLastValue(), 0, newTarget.z.pinLastValue()); 
            newTarget.y = 0; 
        }
        if (newTarget.y > 40) {
            //newTarget = Reactive.vector(newTarget.x.pinLastValue(), 20, newTarget.z.pinLastValue()); 
            newTarget.y = 40; 
        }

        if (newTarget.x < -40) {
            //newTarget = Reactive.vector(-20, newTarget.y.pinLastValue(), newTarget.z.pinLastValue()); 
            newTarget.x = -40; 
        } 

        if (newTarget.x > 40) {
            //newTarget = Reactive.vector(20, newTarget.y.pinLastValue(), newTarget.z.pinLastValue()); 
            newTarget.x = 40;
        }

        if (newTarget.z < -40) {
            //newTarget = Reactive.vector(newTarget.x.pinLastValue(), newTarget.y.pinLastValue(), -20); 
            newTarget.z = -40; 
        } 

        if (newTarget.z > 40) {
            //newTarget = Reactive.vector(newTarget.x.pinLastValue(), newTarget.y.pinLastValue(), 20); 
            newTarget.z = 40; 
        }

        // Update target sphere's position to the target
        this.target = Reactive.vector(newTarget.x, newTarget.y, newTarget.z); 


        // Set target object's position to this
        this.targetObject.transform.x = this.target.x.pinLastValue(); 
        this.targetObject.transform.y = this.target.y.pinLastValue(); 
        this.targetObject.transform.z = this.target.z.pinLastValue(); 
    }

    seek() {
        let d = this.target.sub(this.position).magnitude();
        let vDesired; 

        let logic = d.lt(Reactive.val(this.arriveTolerance)); 
        // Have arrived? 
        if (logic.pinLastValue()) {
            this.calcTarget();
        } else  {
            // Calculate desired force. 
            vDesired = this.target.sub(this.position);
            vDesired = vDesired.normalize(); // Changes the vector in place. 
            vDesired = vDesired.mul(this.maxSpeed);

            // Slow down logic (Arrival logic)
            // Logic for slowing down. 
            logic = d.lt(Reactive.val(this.slowDownTolerance)).and(d.gt(Reactive.val(this.arriveTolerance))); 
            if (logic.pinLastValue()) {
                // // Diagnostics.log('Slowing down'); 
                let newMaxSpeed = Utility.map_range(d.pinLastValue(), this.arriveTolerance, this.slowDownTolerance, 0.1, this.maxSpeed); 
                vDesired = vDesired.mul(newMaxSpeed); 
            }
            else {
                // Usual scaling. 
                vDesired = vDesired.mul(this.maxSpeed); 
            }

            let vSteer = vDesired.sub(this.velocity); 
            vSteer = vSteer.clamp(-this.maxForce, this.maxForce); 

            // Apply force. 
            this.acceleration = this.acceleration.add(vSteer); 
        }
    }

    updatePosition() {
        this.velocity = this.velocity.add(this.acceleration); 
        this.velocity = this.velocity.clamp(-this.maxSpeed, this.maxSpeed); 

        // Update position. 
        this.position = this.position.add(this.velocity); 
        this.acceleration = this.acceleration.mul(0); // Reset acceleration.
    }

    syncPosition() {
        // this.sceneObject.transform = transform; 
        this.sceneObject.transform.x = this.position.x.pinLastValue(); 
        this.sceneObject.transform.y = this.position.y.pinLastValue(); 
        this.sceneObject.transform.z = this.position.z.pinLastValue(); 
    }

    syncRotation() {
        let v = new CANNON.Vec3(this.velocity.x.pinLastValue(), this.velocity.y.pinLastValue(), this.velocity.z.pinLastValue()); 
        let azimuth = Utility.azimuth(v); 
        let inclination = Utility.inclination(v);

        // Yaw / Roll (rotate around Z-axis)
        let r = Utility.axisRotation(0, 0, 1, azimuth - Math.PI/2); 
        this.sceneObject.transform.rotation = r; 

        // Pitch (rotate by Elevation around X-axis)
        r = r.mul(Utility.axisRotation(1, 0, 0, Math.PI/2 - inclination)); 
        this.sceneObject.transform.rotation = r;  
    }
}
