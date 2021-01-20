/*! For license information please see 8.3a7c5c1e.chunk.js.LICENSE.txt */
(this["webpackJsonpbig-tennis-omsk"]=this["webpackJsonpbig-tennis-omsk"]||[]).push([[8],{187:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===s)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},188:function(e,t,r){e.exports={reg:"CreateField_reg__3eGJB",error:"CreateField_error__24uO8",errorMessage:"CreateField_errorMessage__2Wuzi",per:"CreateField_per__2oi5L",title:"CreateField_title__3sCCV"}},192:function(e,t,r){"use strict";r.d(t,"c",(function(){return d})),r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return f}));var n=r(0),a=r(47),s=r(1),i=r(183),c=function(e){var t=e.as,r=e.errors,n=e.name,a=e.message,c=e.render,l=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t.indexOf(r=s[n])>=0||(a[r]=e[r]);return a}(e,["as","errors","name","message","render"]),o=Object(i.c)(),u=Object(i.a)(r||o.errors,n);if(!u)return null;var j=u.message,b=u.types,d=Object.assign({},l,{children:j||a});return Object(s.isValidElement)(t)?Object(s.cloneElement)(t,d):c?c({message:j||a,messages:b}):Object(s.createElement)(t||s.Fragment,d)},l=r(187),o=r.n(l),u=r(188),j=r.n(u),b=function(e){var t,r=e.view,s=e.errors,i=e.name,l=e.children;return Object(n.jsxs)("div",{className:o()((t={},Object(a.a)(t,j.a.reg,"reg"===r),Object(a.a)(t,j.a.per,"per"===r),Object(a.a)(t,j.a.error,s[i]),t)),children:[l,Object(n.jsx)(c,{errors:s,name:i,render:function(e){var t=e.message;return Object(n.jsx)("div",{className:j.a.errorMessage,children:t})}})]})},d=function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0;return Object(n.jsx)(b,{errors:a,name:e,view:"reg",children:Object(n.jsx)("input",{name:e,placeholder:t,type:r,ref:s})})},O=function(e,t,r,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5?arguments[5]:void 0;return Object(n.jsxs)(b,{errors:s,name:t,view:"per",children:[Object(n.jsx)("div",{className:j.a.title,children:r}),Object(n.jsx)("input",{name:t,type:e,ref:i,defaultValue:a})]})},f=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3?arguments[3]:void 0;return Object(n.jsxs)(b,{errors:r,name:e,view:"per",children:[Object(n.jsx)("div",{className:j.a.title,children:t}),Object(n.jsx)("textarea",{name:e,ref:a})]})}},204:function(e,t,r){e.exports={btn:"PersonalForCoach_btn__q-kPo"}},212:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(196),s=r(183),i=r(1),c=r(59),l=r(192),o=r(204),u=r.n(o),j=function(){var e=Object(s.b)(),t=e.register,r=e.errors,o=e.handleSubmit,j=e.watch,b=Object(i.useState)([]),d=Object(a.a)(b,2),O=d[0],f=d[1],p=Object(i.useState)(null),h=Object(a.a)(p,2),g=h[0],m=h[1];return Object(i.useEffect)((function(){c.a.getUsers().then((function(e){f(e)}))}),[f]),Object(i.useEffect)((function(){var e=j("test");e.length&&(e=j("test")[0],m(URL.createObjectURL(e)))})),Object(n.jsxs)("form",{onSubmit:o((function(e){console.log(e)})),children:[Object(n.jsx)("input",{name:"test",type:"file",ref:t}),Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:g,alt:""})}),Object(l.a)("text","firstname","\u0418\u043c\u044f:",O.length?O[0].name:null,r,t({required:"zapolni padla"})),Object(l.a)("text","secondname","\u0424\u0430\u043c\u0438\u043b\u0438\u044f:",O.length?O[0].username:null,r,t({required:"zapolni padla"})),Object(l.b)("cost","\u0426\u0435\u043d\u044b:",r,t({required:"zapolni padla"})),Object(l.a)("text","phone","\u0422\u0435\u043b\u0435\u0444\u043e\u043d:",O.length?O[0].phone:null,r,t({required:"zapolni padla"})),Object(l.a)("text","studentAge","\u0412\u043e\u0437\u0440\u0430\u0441\u0442 \u0443\u0447\u0435\u043d\u0438\u043a\u043e\u0432:",O.length?O[0].id:null,r,t({required:"zapolni padla"})),Object(l.a)("text","rackets","\u0420\u0430\u043a\u0435\u0442\u043a\u0438 \u0434\u043b\u044f \u0443\u0447\u0435\u043d\u0438\u043a\u043e\u0432:",null,r,t),Object(l.a)("text","vk","\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435:",null,r,t),Object(l.a)("text","instagram","Instagram:",null,r,t),Object(l.b)("about","\u041e \u0441\u0435\u0431\u0435:",r,t({required:"zapolni padla"})),Object(n.jsx)("button",{className:u.a.btn,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})};t.default=function(){return Object(n.jsxs)("div",{children:["\u041b\u041a \u0442\u0440\u0435\u043d\u0435\u0440\u0430",Object(n.jsx)(j,{}),Object(n.jsx)("div",{children:"\u0441\u043e\u0446\u0441\u0435\u0442\u0438"}),Object(n.jsx)("div",{children:"\u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0438"})]})}}}]);
//# sourceMappingURL=8.3a7c5c1e.chunk.js.map