import{S as E,e as F,s as G,I as j,F as H,o as C,m as v,g as b,G as I,h as p,w as U,u as y,k as w,H as z,O as A,C as K,al as L,t as B,x as N,N as k,j as g,p as q,B as M}from"./index-86f847d0.js";import"./Button-787144df.js";import{B as P}from"./BlockTitle-913ace04.js";function O(l,e,t){const s=l.slice();return s[13]=e[t],s[15]=t,s}function Q(l){let e;return{c(){e=B(l[3])},m(t,s){p(t,e,s)},p(t,s){s&8&&N(e,t[3])},d(t){t&&w(e)}}}function S(l){let e,t,s,_,c,a=l[13][0]+"",n,o,f,u;function h(){return l[10](l[13])}function m(...d){return l[11](l[15],l[13],...d)}return{c(){e=v("label"),t=v("input"),_=C(),c=v("span"),n=B(a),o=C(),t.disabled=l[2],t.checked=s=l[0].includes(l[13][1]),b(t,"type","checkbox"),b(t,"name","test"),b(t,"class","svelte-1qxcj04"),b(c,"class","ml-2 svelte-1qxcj04"),b(e,"class","svelte-1qxcj04"),k(e,"disabled",l[2]),k(e,"selected",l[0].includes(l[13][1]))},m(d,r){p(d,e,r),g(e,t),g(e,_),g(e,c),g(c,n),g(e,o),f||(u=[q(t,"change",h),q(t,"input",m)],f=!0)},p(d,r){l=d,r&4&&(t.disabled=l[2]),r&3&&s!==(s=l[0].includes(l[13][1]))&&(t.checked=s),r&2&&a!==(a=l[13][0]+"")&&N(n,a),r&4&&k(e,"disabled",l[2]),r&3&&k(e,"selected",l[0].includes(l[13][1]))},d(d){d&&w(e),f=!1,M(u)}}}function R(l){let e,t,s,_;e=new P({props:{show_label:l[5],info:l[4],$$slots:{default:[Q]},$$scope:{ctx:l}}});let c=j(l[1]),a=[];for(let n=0;n<c.length;n+=1)a[n]=S(O(l,c,n));return{c(){H(e.$$.fragment),t=C(),s=v("div");for(let n=0;n<a.length;n+=1)a[n].c();b(s,"class","wrap svelte-1qxcj04"),b(s,"data-testid","checkbox-group")},m(n,o){I(e,n,o),p(n,t,o),p(n,s,o);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(s,null);_=!0},p(n,[o]){const f={};if(o&32&&(f.show_label=n[5]),o&16&&(f.info=n[4]),o&65544&&(f.$$scope={dirty:o,ctx:n}),e.$set(f),o&199){c=j(n[1]);let u;for(u=0;u<c.length;u+=1){const h=O(n,c,u);a[u]?a[u].p(h,o):(a[u]=S(h),a[u].c(),a[u].m(s,null))}for(;u<a.length;u+=1)a[u].d(1);a.length=c.length}},i(n){_||(U(e.$$.fragment,n),_=!0)},o(n){y(e.$$.fragment,n),_=!1},d(n){n&&(w(t),w(s)),z(e,n),A(a,n)}}}function V(l,e,t){let{value:s=[]}=e,_=s.slice(),{value_is_output:c=!1}=e,{choices:a}=e,{disabled:n=!1}=e,{label:o}=e,{info:f=void 0}=e,{show_label:u}=e;const h=K();function m(i){s.includes(i)?s.splice(s.indexOf(i),1):s.push(i),t(0,s)}function d(){h("change",s),c||h("input")}L(()=>{t(8,c=!1)});const r=i=>m(i[1]),J=(i,T,D)=>h("select",{index:i,value:T[1],selected:D.currentTarget.checked});return l.$$set=i=>{"value"in i&&t(0,s=i.value),"value_is_output"in i&&t(8,c=i.value_is_output),"choices"in i&&t(1,a=i.choices),"disabled"in i&&t(2,n=i.disabled),"label"in i&&t(3,o=i.label),"info"in i&&t(4,f=i.info),"show_label"in i&&t(5,u=i.show_label)},l.$$.update=()=>{l.$$.dirty&513&&JSON.stringify(s)!==JSON.stringify(_)&&(t(9,_=s.slice()),d())},[s,a,n,o,f,u,h,m,c,_,r,J]}class Z extends E{constructor(e){super(),F(this,e,V,R,G,{value:0,value_is_output:8,choices:1,disabled:2,label:3,info:4,show_label:5})}}export{Z as C};
//# sourceMappingURL=Checkboxgroup-869b9fd7.js.map
