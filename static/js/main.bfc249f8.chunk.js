(this.webpackJsonpHPACAR=this.webpackJsonpHPACAR||[]).push([[0],{166:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(38),o=n.n(i),c=(n(76),n(77),n(0)),l=n(5),s=n(3),m=n(4),d=n(6),u="#F2F0E9",h="rgb(255, 255, 255, 0.4)",p="#E48F65",f="8px",g="14px",b="16px",y="40px",v="8px",w="12px",j="20px",O="d-dinregular",x="open_sanslight",E="demoderegular",k="sliceregular",M=n(39),C=n.n(M),S=n(20),R={container:{display:"flex",flexDirection:"column",alignSelf:"center",alignItems:"center",marginTop:j},title:{fontFamily:E,color:u,letterSpacing:"0px",fontSize:y},body:{color:u,fontFamily:x,fontSize:g,textAlign:"center",marginTop:w},img:{marginTop:w,width:"100%"},tada:{animationName:d.a.keyframes(S.tada,"tada"),animationDuration:"10s",animationFillMode:"forwards",animationTimingFunction:"ease-in-out",animationIterationCount:"1"}},F=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){var e=[R.title,R.tada];return r.a.createElement("div",{style:R.container},r.a.createElement("div",{style:e},"LIARBIRDS"),r.a.createElement("div",{style:R.body},"We have been at a loss of crowds due to the pandemic. Physical isolation prevails and our entire social exchange has been mediated through a two-dimensional window. Boids of Paradise is an augmented encounter mediated by Instagram that modifies one\u2019s space with a swarm of digital creatures. This crowd of creatures augments the participant\u2019s digital environment and interacts with them by carrying out coordinated behaviors. In the moment of interaction, they become the participant\u2019s companion as well as independent digital creatures that operate at the intersection of space, time, and state."),r.a.createElement("img",{style:R.img,src:C.a,alt:"title"}))}}]),n}(r.a.Component),I=Object(d.a)(F),T=n(8),D=n(68),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(Math.random()*(e+1-t))+t},_=function e(){Object(c.a)(this,e);var t=new T.Color(Math.random(1),Math.random(1),Math.random(1)),n=new T.ConeGeometry(5,10,10),a=new T.MeshLambertMaterial({color:t.getHex(),wireframe:!0});this.mesh=new T.Mesh(n,a);var r=A(200,500),i=T.Math.degToRad(A(360)),o=T.Math.degToRad(A(180));this.mesh.position.x=Math.sin(i)*Math.cos(o)*r,this.mesh.position.y=Math.sin(i)*Math.sin(o)*r,this.mesh.position.z=Math.cos(i)*r},P=n.n(D)()(T),z=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={},a.ref=r.a.createRef(),a.scene=new T.Scene,a.camera=new T.PerspectiveCamera(50,window.innerWidth/window.innerHeight,.1,2e3),a.renderer=new T.WebGLRenderer,a.agents=[],a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.renderer.setSize(window.innerWidth,window.innerHeight),this.ref.current.appendChild(this.renderer.domElement);new T.Color("rgba(188, 141, 190, 1)");var t=new T.AmbientLight("0x404040");this.scene.add(t);for(var n=0;n<100;n++){var a=new _;this.agents.push(a),this.scene.add(a.mesh)}console.log(this.agents.length),this.camera.position.set(200,200,200);var r=new P(this.camera);r.enablePan=!0,r.autoRotate=!0,r.autoRotateSpeed=.25,r.enabled=!0,r.enableKeys=!0;!function t(){requestAnimationFrame(t),r.update(),e.renderer.render(e.scene,e.camera)}()}},{key:"render",value:function(){return r.a.createElement("div",{ref:this.ref})}}]),n}(r.a.Component),H=(Object(d.a)(z),{container:{display:"flex",color:u,flexDirection:"column",alignSelf:"center",alignItems:"center",backgroundColor:h,fontFamily:k,padding:w,borderRadius:"10px",fontSize:b,marginTop:j,letterSpacing:"0.8px"},pulse:{animationName:d.a.keyframes(S.pulse,"pulse"),animationDuration:"10s",animationFillMode:"forwards",animationTimingFunction:"ease-in-out",animationIterationCount:"5"}}),L=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){var e=[H.container,H.pulse];return r.a.createElement("a",{href:"https://www.instagram.com/ar/2488677321439619/",target:"_blank",style:e},"Open with Instagram")}}]),n}(r.a.Component),B=Object(d.a)(L),W=n(69),G=n.n(W),J=n(70),K=n.n(J),N={container:{display:"flex",flexDirection:"row",alignSelf:"center",justifyContent:"center",marginTop:j,width:"100%"},poster:{width:"calc(100%/2 - 4%)",marginRight:v}},q=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:N.container},r.a.createElement("img",{style:N.poster,src:G.a,alt:"postcard_back"}),r.a.createElement("img",{style:N.poster,src:K.a,alt:"hyde_park"}))}}]),n}(r.a.Component),Q=Object(d.a)(q),U={container:{fontFamily:O,fontSize:f,color:u,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:w,marginBottom:v},link:{color:p}},V=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:U.container},r.a.createElement("div",{style:U.developed},"Developed by Silkcube"),r.a.createElement("div",null,r.a.createElement("span",null,"\xa9\xa0"),r.a.createElement("a",{style:U.link,target:"_blank",rel:"noopener noreferrer",href:"https://amaykataria.com"},"Amay Kataria"),r.a.createElement("span",{style:U.developed},"\xa0|\xa0"),r.a.createElement("a",{style:U.link,target:"_blank",rel:"noopener noreferrer",href:"https://philipmulliken.com"},"Phil Mulliken"),r.a.createElement("span",{style:U.developed},", 2020\xa0")))}}]),n}(r.a.Component),X=Object(d.a)(V),Y={container:{marginLeft:j,marginRight:j,display:"flex",flexDirection:"column",alignItems:"center"}},Z=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:Y.container},r.a.createElement(I,null),r.a.createElement(B,null),r.a.createElement(Q,null),r.a.createElement(X,null))}}]),n}(r.a.Component),$=Object(d.a)(Z),ee=n(32);o.a.render(r.a.createElement(ee.a,null,r.a.createElement($,null)),document.getElementById("root"))},39:function(e,t,n){e.exports=n.p+"static/media/front_page.2814188b.jpg"},69:function(e,t,n){e.exports=n.p+"static/media/postcard_back.696cc2ce.jpg"},70:function(e,t,n){e.exports=n.p+"static/media/hyde_park.6f9b0da7.jpg"},71:function(e,t,n){e.exports=n(166)},76:function(e,t,n){},77:function(e,t,n){}},[[71,1,2]]]);
//# sourceMappingURL=main.bfc249f8.chunk.js.map