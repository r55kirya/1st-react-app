(this["webpackJsonpbig-tennis-omsk"]=this["webpackJsonpbig-tennis-omsk"]||[]).push([[0],{103:function(e,t,n){e.exports={heading:"Start_heading__JaRZG"}},104:function(e,t,n){e.exports={row:"PlaygroundsList_row__n-Dx3"}},106:function(e,t,n){e.exports={row:"PlaygroundCard_row__2An8Q"}},107:function(e,t,n){e.exports={heading:"Coaches_heading__VtyTd"}},108:function(e,t,n){e.exports={heading:"Tournaments_heading__2iqf0"}},109:function(e,t,n){e.exports={row:"Navbar_row__eQtr9"}},118:function(e,t,n){},119:function(e,t,n){},239:function(e,t,n){"use strict";n.r(t);var r=n(2),s=n(0),a=n.n(s),c=n(44),i=n.n(c),o=(n(118),n(119),n(103)),d=n.n(o),u=function(){return Object(r.jsx)("div",{className:d.a.heading,children:"start"})},j=n(104),l=n.n(j),h=n(45),p=n(46),b=n(49),g=n(48),O=n(19),x=n(106),m=n.n(x),f=n(14),y=function(e){return Object(r.jsx)("div",{className:m.a.row,children:e.playgrounds.map((function(e){return Object(r.jsxs)(f.b,{to:"/playground/"+e.id,children:[Object(r.jsxs)("div",{children:[e.id," "]}),Object(r.jsxs)("div",{children:[e.name," "]})]},e.id)}))})},v=n(68),_=n(23),I="SET_PLAYGROUNDS",w="TOGGLE_IS_FETCHING",L={playgroundsList:[],isFetching:!1},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:var n=Object(_.a)(Object(_.a)({},e),{},{playgroundsList:t.arr});return n;case w:var r=Object(_.a)(Object(_.a)({},e),{},{isFetching:t.isFetching});return r;default:return e}},F=n.p+"static/media/preloader.0cc9112a.gif",P=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).items=[{id:1,name:"OOO Green Isle",adress:"\u0421\u0442\u0430\u0440\u043e\u0437\u0430\u0433\u043e\u0440\u043e\u0434\u043d\u0430\u044f \u0420\u043e\u0449\u0430, 10",phone:"8-966-555-83-69","photos ":[]},{id:2,name:"OOO Sfera",adress:"\u200b\u041e\u043c\u0441\u043a\u0430\u044f, 225/3",phone:"8-966-555-74-55","photos ":[]},{id:3,name:"OOO Shar",adress:"\u200b\u041e\u043c\u0441\u043a\u0430\u044f, 01/3",phone:"8-966-777-74-55","photos ":[]},{id:4,name:"BigBabyTennis",adress:"Gusarova 27",phone:"8-966-111-74-22","photos ":[]}],e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.toggleIsFetching(!0),v.get("https://social-network.samuraijs.com/api/1.0/users").then((function(t){e.props.toggleIsFetching(!1),e.props.setPlaygroundsList(e.items)}))}},{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:this.props.isFetching?Object(r.jsx)("img",{src:F,alt:""}):Object(r.jsx)(y,{playgrounds:this.props.playgrounds})})}}]),n}(a.a.Component),S=Object(O.b)((function(e){return{playgrounds:e.playgroundsListPage.playgroundsList,isFetching:e.playgroundsListPage.isFetching}}),{setPlaygroundsList:function(e){return{type:I,arr:e}},toggleIsFetching:function(e){return{type:w,isFetching:e}}})(P),k=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"text"}),Object(r.jsx)("button",{children:"\u043f\u043e\u0438\u0441\u043a"}),Object(r.jsx)("div",{className:l.a.row,children:Object(r.jsx)(S,{})})]})},C=n(107),T=n.n(C),G=function(){return Object(r.jsx)("div",{className:T.a.heading,children:"Coaches"})},A=n(108),D=n.n(A),E=n.p+"static/media/anons1.d54035be.jpg",B=n.p+"static/media/anons2.2654d485.jpg",J=function(){return Object(r.jsxs)("div",{className:D.a.heading,children:[Object(r.jsx)("img",{src:E,alt:"gg"}),Object(r.jsx)("img",{src:B,alt:"gg"})]})},M=n(7),R=n(109),Q=n.n(R),U=function(){return Object(r.jsxs)("div",{className:Q.a.row,children:[Object(r.jsx)(f.b,{to:"/start",children:"Start"}),Object(r.jsx)(f.b,{to:"/playgroundslist",children:"Playgrounds"}),Object(r.jsx)(f.b,{to:"/coaches",children:"Coaches"}),Object(r.jsx)(f.b,{to:"/tournaments",children:"Tournaments"}),Object(r.jsx)(f.b,{to:"/login",children:"Login"})]})},Y=function(e){return Object(r.jsx)("div",{children:e.playgroundNumber})},q="SET_PLAYGROUND_INFO",H={playgroundInfo:[]},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:var n=Object(_.a)(Object(_.a)({},e),{},{playgroundInfo:t.arr});return n;default:return e}},Z=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).items=[{userId:1,fullName:"petya"},{userId:2,fullName:"vasya"},{userId:4,fullName:"ivan"}],e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.setPlaygroundInfo(this.items)}},{key:"render",value:function(){return Object(r.jsx)(Y,{playgroundInfo:this.props.playgroundInfo,playgroundNumber:Number(this.props.match.params.userId)})}}]),n}(a.a.Component),z=Object(M.e)(Z),K=Object(O.b)((function(e){return{playgroundInfo:e.playgroundPage.playgroundInfo}}),{setPlaygroundInfo:function(e){return{type:q,arr:e}}})(z),W=n(241),X=n(240),$=Object(X.a)({form:"login"})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(W.a,{placeholder:"Login",name:"login",component:"input",type:"text"})}),Object(r.jsx)("div",{children:Object(r.jsx)(W.a,{placeholder:"Password",name:"password",component:"input",type:"password"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(W.a,{component:"input",name:"rememberMe",type:"checkbox"})," remember me"]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})})),ee=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)($,{onSubmit:function(e){console.log(e)}})]})},te=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(U,{}),Object(r.jsx)(M.a,{path:"/start",children:Object(r.jsx)(u,{})}),Object(r.jsx)(M.a,{path:"/playgroundslist",children:Object(r.jsx)(k,{})}),Object(r.jsx)(M.a,{path:"/coaches",children:Object(r.jsx)(G,{})}),Object(r.jsx)(M.a,{path:"/tournaments",children:Object(r.jsx)(J,{})}),Object(r.jsx)(M.a,{path:"/playground/:userId?",children:Object(r.jsx)(K,{})}),Object(r.jsx)(M.a,{path:"/login",children:Object(r.jsx)(ee,{})})]})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,243)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))},re=n(8),se=n(242),ae=n(111),ce=Object(re.c)({playgroundsListPage:N,playgroundPage:V,form:se.a}),ie=Object(re.d)(ce,Object(re.a)(ae.a));window.store=ie;var oe=ie;i.a.render(Object(r.jsx)(f.a,{children:Object(r.jsx)(O.a,{store:oe,children:Object(r.jsx)(te,{})})}),document.getElementById("root")),ne()}},[[239,1,2]]]);
//# sourceMappingURL=main.017b4a14.chunk.js.map