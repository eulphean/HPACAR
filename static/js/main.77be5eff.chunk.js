(this.webpackJsonpHPACAR=this.webpackJsonpHPACAR||[]).push([[0],{167:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(39),o=n.n(r),c=(n(77),n(78),n(0)),l=n(5),m=n(3),d=n(4),s=n(7),p="#F2F0E9",h="rgb(255, 255, 255, 0.4)",u="#E48F65",g="14px",f="16px",w="20px",b="32px",x="36px",y="40px",v="68px",j="72px",O="8px",E="12px",k="20px",S="28px",T="36px",M="52px",C="64px",z="92px",R="d-dinregular",F="open_sanslight",I="demoderegular",H="sliceregular",A=n(6),D=n(40),_=n.n(D),L=n(21),P={container:{display:"flex",flexDirection:"column",alignSelf:"center",alignItems:"center",marginTop:k,"@media (min-width: 768px)":{marginTop:T},"@media (min-width: 600px) and (orientation: landscape)":{marginTop:M},"@media (min-width: 1024px)":{marginTop:C}},title:{fontFamily:I,color:p,letterSpacing:"0px",fontSize:y,"@media (min-width: 768px)":{fontSize:v},"@media (min-width: 600px) and (orientation: landscape)":{fontSize:j},"@media (min-width: 1024px)":{fontSize:j}},body:{color:p,fontFamily:F,fontSize:g,textAlign:"center",marginTop:E,"@media (min-width: 768px)":{marginTop:k,fontSize:f},"@media (min-width: 1024px)":{fontSize:w}},img:Object(A.a)({marginTop:E,width:"100%","@media (min-width: 768px)":{marginTop:k},"@media (min-width: 768px) and (orientation: landscape)":{marginTop:S}},"@media (min-width: 768px)",{marginTop:S}),tada:{animationName:s.a.keyframes(L.tada,"tada"),animationDuration:"10s",animationFillMode:"forwards",animationTimingFunction:"ease-in-out",animationIterationCount:"1"}},B=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){var e=[P.title,P.tada];return i.a.createElement("div",{style:P.container},i.a.createElement("div",{style:e},"LIARBIRDS"),i.a.createElement("div",{style:P.body},"We have been at a loss of crowds due to the pandemic. Physical isolation prevails and our entire social exchange has been mediated through a two-dimensional window. Boids of Paradise is an augmented encounter mediated by Instagram that modifies one\u2019s space with a swarm of digital creatures. This crowd of creatures augments the participant\u2019s digital environment and interacts with them by carrying out coordinated behaviors. In the moment of interaction, they become the participant\u2019s companion as well as independent digital creatures that operate at the intersection of space, time, and state."),i.a.createElement("img",{style:P.img,src:_.a,alt:"title"}))}}]),n}(i.a.Component),W=Object(s.a)(B),G=n(9),J=n(69),K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(Math.random()*(e+1-t))+t},N=function e(){Object(c.a)(this,e);var t=new G.Color(Math.random(1),Math.random(1),Math.random(1)),n=new G.ConeGeometry(5,10,10),a=new G.MeshLambertMaterial({color:t.getHex(),wireframe:!0});this.mesh=new G.Mesh(n,a);var i=K(200,500),r=G.Math.degToRad(K(360)),o=G.Math.degToRad(K(180));this.mesh.position.x=Math.sin(r)*Math.cos(o)*i,this.mesh.position.y=Math.sin(r)*Math.sin(o)*i,this.mesh.position.z=Math.cos(r)*i},q=n.n(J)()(G),Q=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={},a.ref=i.a.createRef(),a.scene=new G.Scene,a.camera=new G.PerspectiveCamera(50,window.innerWidth/window.innerHeight,.1,2e3),a.renderer=new G.WebGLRenderer,a.agents=[],a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.renderer.setSize(window.innerWidth,window.innerHeight),this.ref.current.appendChild(this.renderer.domElement);new G.Color("rgba(188, 141, 190, 1)");var t=new G.AmbientLight("0x404040");this.scene.add(t);for(var n=0;n<100;n++){var a=new N;this.agents.push(a),this.scene.add(a.mesh)}console.log(this.agents.length),this.camera.position.set(200,200,200);var i=new q(this.camera);i.enablePan=!0,i.autoRotate=!0,i.autoRotateSpeed=.25,i.enabled=!0,i.enableKeys=!0;!function t(){requestAnimationFrame(t),i.update(),e.renderer.render(e.scene,e.camera)}()}},{key:"render",value:function(){return i.a.createElement("div",{ref:this.ref})}}]),n}(i.a.Component),U=(Object(s.a)(Q),{container:{display:"flex",flexDirection:"column",alignSelf:"center",alignItems:"center",textAlign:"center",color:p,width:"55%",backgroundColor:h,fontFamily:H,padding:E,borderRadius:"10px",fontSize:w,marginTop:k,letterSpacing:"0.8px",lineHeight:k,"@media (min-width: 768px)":{fontSize:b,marginTop:S,lineHeight:S,width:"45%"},"@media (min-width: 1024px)":{fontSize:x,marginTop:T,lineHeight:T,width:"40%"},"@media (min-width: 1200px)":{fontSize:x,marginTop:T,lineHeight:T,width:"30%"}},pulse:{animationName:s.a.keyframes(L.pulse,"flash"),animationDuration:"2s",animationFillMode:"forwards",animationTimingFunction:"linear",animationIterationCount:"infinite"}}),V=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){var e=[U.container,U.pulse];return i.a.createElement("a",{href:"https://www.instagram.com/ar/2488677321439619/",target:"_blank",style:e},"Open with Instagram")}}]),n}(i.a.Component),X=Object(s.a)(V),Y=n(70),Z=n.n(Y),$=n(71),ee=n.n($),te={container:{display:"flex",flexDirection:"row",alignSelf:"center",justifyContent:"center",marginTop:k,width:"100%",height:"100%","@media (min-width: 768px)":{marginTop:S},"@media (min-width: 1024px)":{marginTop:T}},poster:{width:"calc(100%/2 - 4%)",height:"100%",marginRight:O}},ne=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{style:te.container},i.a.createElement("img",{style:te.poster,src:Z.a,alt:"postcard_back"}),i.a.createElement("img",{style:te.poster,src:ee.a,alt:"hyde_park"}))}}]),n}(i.a.Component),ae=Object(s.a)(ne),ie={container:{fontFamily:R,fontSize:g,color:p,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:k,marginBottom:O,lineHeight:k,"@media (min-width: 768px)":{fontSize:f},"@media (min-width: 1024px)":{marginTop:S,fontSize:w,lineHeight:S,marginBottom:S}},link:{color:u}},re=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{style:ie.container},i.a.createElement("div",{style:ie.developed},"Developed by Silkcube"),i.a.createElement("div",null,i.a.createElement("span",null,"\xa9\xa0"),i.a.createElement("a",{style:ie.link,target:"_blank",rel:"noopener noreferrer",href:"https://amaykataria.com"},"Amay Kataria"),i.a.createElement("span",{style:ie.developed},"\xa0|\xa0"),i.a.createElement("a",{style:ie.link,target:"_blank",rel:"noopener noreferrer",href:"https://philipmulliken.com"},"Phil Mulliken"),i.a.createElement("span",{style:ie.developed},", 2020\xa0")))}}]),n}(i.a.Component),oe=Object(s.a)(re),ce={container:{marginLeft:k,marginRight:k,display:"flex",flexDirection:"column",alignItems:"center","@media (min-width: 768px)":{marginLeft:C,marginRight:C},"@media (min-width: 600px) and (orientation: landscape)":{marginLeft:z,marginRight:z},"@media (min-width: 1024px)":{marginLeft:z,marginRight:z}}},le=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{style:ce.container},i.a.createElement(W,null),i.a.createElement(X,null),i.a.createElement(ae,null),i.a.createElement(oe,null))}}]),n}(i.a.Component),me=Object(s.a)(le),de=n(33);o.a.render(i.a.createElement(de.a,null,i.a.createElement(me,null)),document.getElementById("root"))},40:function(e,t,n){e.exports=n.p+"static/media/front_page.2814188b.jpg"},70:function(e,t,n){e.exports=n.p+"static/media/postcard_back.696cc2ce.jpg"},71:function(e,t,n){e.exports=n.p+"static/media/hyde_park.6f9b0da7.jpg"},72:function(e,t,n){e.exports=n(167)},77:function(e,t,n){},78:function(e,t,n){}},[[72,1,2]]]);
//# sourceMappingURL=main.77be5eff.chunk.js.map