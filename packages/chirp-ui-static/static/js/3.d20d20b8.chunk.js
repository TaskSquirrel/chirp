(this["webpackJsonpchirp-ui"]=this["webpackJsonpchirp-ui"]||[]).push([[3],{68:function(e,t,n){e.exports={backdrop:"Modal_backdrop__3NJnA"}},69:function(e,t,n){e.exports={modal:"ViewTweet_modal__30tbZ"}},72:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(5),u=n(1),o=n(0),i=n.n(o),l=n(13),s=n(3),d=n(68),p=n.n(d),b=function(e){var t=e.children,n=e.show,a=e.onBackdropClick;return n?i.a.createElement("div",{className:p.a.backdrop,onClick:function(e){e.target===e.currentTarget&&a()}},t):null},f=n(10),m=n(6),h=n(69),v=n.n(h);t.default=function(){var e=Object(o.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],d=Object(o.useState)(!1),p=Object(u.a)(d,2),h=p[0],k=p[1],E=Object(o.useState)(null),O=Object(u.a)(E,2),j=O[0],w=O[1],x=Object(o.useState)(!1),_=Object(u.a)(x,2),S=_[0],g=_[1],C=Object(l.h)().id,D=Object(f.a)(),B=D.token,J=D.user,N=J.done,T=J.authenticated,y=J.name,A=function(){return!(!j||!N)&&(!!(T&&y&&B)&&j.username===y)},K=function(){A()&&function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.a)("/item/".concat(C),{method:"DELETE",headers:{Authorization:"Bearer ".concat(B)}});case 3:if(t=e.sent,"OK"===t.data.status){e.next=9;break}throw new Error;case 9:g(!0);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),a(!0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}()()},L=function(){g(!1)};Object(o.useEffect)((function(){n||function(){var e=Object(c.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.a)("/item/".concat(C));case 3:if(t=e.sent,"OK"!==(n=t.data).status){e.next=9;break}w(n.item),e.next=10;break;case 9:throw new Error;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),a(!0);case 15:return e.prev=15,k(!0),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})));return function(){return e.apply(this,arguments)}}()()}),[C,n]);var z=function(e){var t=e.username,n=e.timestamp,a=e.content,r=new Date(1e3*n);return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(s.b,{to:"/user/".concat(t)},i.a.createElement("h3",null,t)),A()?i.a.createElement("button",{onClick:K},"Delete"):null),i.a.createElement("div",null,r.toString()),i.a.createElement("div",null,a),i.a.createElement(b,{show:S,onBackdropClick:L},i.a.createElement("div",{className:v.a.modal},"Deleted")))};return N?h?n||null===j?i.a.createElement(l.a,{to:"/not-found"}):z(j):i.a.createElement("div",null,"Loading..."):null}}}]);
//# sourceMappingURL=3.d20d20b8.chunk.js.map