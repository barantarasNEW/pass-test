"use strict";(self.webpackChunkpass_test=self.webpackChunkpass_test||[]).push([[917],{6917:function(r,e,n){n.r(e),n.d(e,{default:function(){return A}});var t=n(1413),s=n(9439),a=n(2791),i=n(6072),o=n(4695),d=n(9230),u=n(1582),c=n(4294),l=n(890),g=n(6151),m=n(6934),f=(0,m.ZP)("div")((function(r){return{width:75,height:5,backgroundColor:r.backgroundColor,borderRadius:30,transition:"background-color 0.3s"}})),v=n(184),p=function(r){var e=r.colors;return(0,v.jsxs)(u.Z,{spacing:{xs:1,sm:2},direction:"row",children:[(0,v.jsx)(f,{backgroundColor:e[0]}),(0,v.jsx)(f,{backgroundColor:e[1]}),(0,v.jsx)(f,{backgroundColor:e[2]})]})},Z=n(6727),h=n(6203);(0,Z.i_)({mixed:{required:function(){return h.Z.t("validation:required")}},string:{min:function(r){var e=r.min;return h.Z.t("validation:min",{min:e})}}});var w=/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_])[\w\W]+$/,b=/(?=.*\d)(?=.*[a-zA-Z])|(?=.*\d)(?=.*[^\w\s])|(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9\s])/,y={password:""},x=(0,Z.Ry)().shape({password:(0,Z.Z_)().required().min(8).test("password-strength","easy",(function(r){return!!w.test(r)||(b.test(r)?this.createError({message:"medium"}):void 0)}))}),j=["gray","gray","gray"],k=["red","red","red"],C=["red","gray","gray"],z=["#dbdb3e","#dbdb3e","gray"],_=["green","green","green"],q=(0,m.ZP)("section")((function(){return{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})),A=function(){var r=(0,d.$G)().t,e=(0,a.useState)(j),n=(0,s.Z)(e,2),m=n[0],f=n[1],Z=(0,a.useState)("Easy"),h=(0,s.Z)(Z,2),w=h[0],b=h[1],A=(0,i.cI)({mode:"onChange",resolver:(0,o.X)(x),defaultValues:y}),E=A.register,S=A.formState,I=S.errors,P=S.isValid,R=A.reset,V=A.watch;return(0,a.useEffect)((function(){if(P)return f(_),void b(r("validation:strong"));f((function(){var e,n,t=null===(e=I.password)||void 0===e?void 0:e.message;return"min"===(null===(n=I.password)||void 0===n?void 0:n.type)?(b(r("validation:min")),k):"easy"===t?(b(r("validation:easy")),C):"medium"===t?(b(r("validation:medium")),z):(b(r("validation:required")),j)}))}),[I.password,P,r]),(0,v.jsx)(q,{children:(0,v.jsxs)(u.Z,{spacing:{xs:2},alignItems:"center",justifyContent:"center",children:[(0,v.jsx)(c.Z,(0,t.Z)((0,t.Z)({},E("password")),{},{type:"password",name:"password",size:"medium",autoFocus:!0})),(0,v.jsx)(p,{colors:m}),(0,v.jsx)(l.Z,{variant:"subtitle1",color:m[1],align:"center",children:w}),(0,v.jsx)(g.Z,{variant:"contained",disabled:!V("password").length,onClick:function(){return R()},children:r("clear")})]})})}}}]);
//# sourceMappingURL=917.a7072c1a.chunk.js.map