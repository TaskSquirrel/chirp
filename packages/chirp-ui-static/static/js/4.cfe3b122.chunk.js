(this["webpackJsonpchirp-ui"]=this["webpackJsonpchirp-ui"]||[]).push([[4],{70:function(e,t,a){e.exports={item:"Search_item__1UHFg",clickable:"Search_clickable__2cYX7",heading:"Search_heading__3WmIa",sub:"Search_sub__2Ty6a"}},71:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(5),u=a(1),l=a(0),i=a.n(l),o=a(13),s=a(6),m=a(70),h=a.n(m),p=a(10);t.default=function(){var e=Object(l.useState)(""),t=Object(u.a)(e,2),a=t[0],n=t[1],m=Object(l.useState)(""),b=Object(u.a)(m,2),d=b[0],v=b[1],f=Object(l.useState)(""),g=Object(u.a)(f,2),O=g[0],j=g[1],E=Object(l.useState)(5),S=Object(u.a)(E,2),k=S[0],_=S[1],w=Object(l.useState)(!0),y=Object(u.a)(w,2),x=y[0],N=y[1],C=Object(l.useState)([]),T=Object(u.a)(C,2),D=T[0],F=T[1],J=Object(o.g)().push,q=Object(p.a)(),z=q.token,A=q.user.done;return Object(l.useEffect)((function(){(function(){var e=Object(r.a)(c.a.mark((function e(){var t,n,r,u,l,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new Date(Number(O)),n=O?Math.round(t.getTime()):void 0,r=k||void 0,e.next=6,Object(s.a)("/search",{method:"POST",headers:z?{Authorization:"Bearer ".concat(z)}:null,data:{q:a,timestamp:n,limit:r,username:d,following:x}});case 6:u=e.sent,l=u.data,i=l.status,o=l.items,"OK"===i&&D&&F(o),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}})()()}),[a,d,O,k,x]),A?i.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},i.a.createElement("input",{type:"text",placeholder:"Search",value:a,onChange:function(e){n(e.target.value)}}),i.a.createElement("input",{type:"text",placeholder:"From user",value:d,onChange:function(e){v(e.target.value)}}),i.a.createElement("input",{type:"number",placeholder:"Timestamp (in seconds)",value:O,onChange:function(e){j(e.target.value)}}),i.a.createElement("input",{type:"number",value:k,onChange:function(e){_(Number(e.target.value))}}),i.a.createElement("label",null,i.a.createElement("input",{type:"checkbox",checked:x,onChange:function(e){N(e.target.checked)}}),i.a.createElement("span",null,"Following only")),i.a.createElement("div",null,0===D.length?i.a.createElement("h2",null,"No results!"):D.map((function(e){var t=e.id,a=e.username,n=e.timestamp,c=e.content,r=new Date(1e3*n);return i.a.createElement("div",{key:"".concat(t),className:h.a.item},i.a.createElement("div",{className:h.a.clickable,onClick:function(){J("/tweet/".concat(t))}},i.a.createElement("h3",{className:h.a.heading},a),i.a.createElement("p",null,c)),i.a.createElement("div",null,n),i.a.createElement("div",{className:h.a.sub},r.toString()))})))):null}}}]);
//# sourceMappingURL=4.cfe3b122.chunk.js.map