import{S as F,e as G,s as H,I as C,a8 as J,m as S,o as p,g,N as I,h as v,j as k,J as L,az as O,aa as M,ab as Q,ac as R,w,u as y,k as j,ax as B,a0 as N,C as U,Y as P,Q as z,aB as A,t as X,p as V,x as Y,R as W,U as Z,F as x,G as $,X as ee,H as te}from"./index-86f847d0.js";function D(s,e,l){const t=s.slice();return t[14]=e[l],t[16]=l,t}function le(s){let e,l=s[14].name+"",t,c,u,n;function i(){return s[12](s[14],s[16])}return{c(){e=S("button"),t=X(l),c=p(),g(e,"class","svelte-kqij2n")},m(_,m){v(_,e,m),k(e,t),k(e,c),u||(n=V(e,"click",i),u=!0)},p(_,m){s=_,m&8&&l!==(l=s[14].name+"")&&Y(t,l)},d(_){_&&j(e),u=!1,n()}}}function se(s){let e,l=s[14].name+"",t,c;return{c(){e=S("button"),t=X(l),c=p(),g(e,"class","selected svelte-kqij2n")},m(u,n){v(u,e,n),k(e,t),k(e,c)},p(u,n){n&8&&l!==(l=u[14].name+"")&&Y(t,l)},d(u){u&&j(e)}}}function E(s,e){let l,t;function c(i,_){return i[14].id===i[4]?se:le}let u=c(e),n=u(e);return{key:s,first:null,c(){l=z(),n.c(),t=z(),this.first=l},m(i,_){v(i,l,_),n.m(i,_),v(i,t,_)},p(i,_){e=i,u===(u=c(e))&&n?n.p(e,_):(n.d(1),n=u(e),n&&(n.c(),n.m(t.parentNode,t)))},d(i){i&&(j(l),j(t)),n.d(i)}}}function ne(s){let e,l,t=[],c=new Map,u,n,i,_=C(s[3]);const m=a=>a[14].id;for(let a=0;a<_.length;a+=1){let r=D(s,_,a),d=m(r);c.set(d,t[a]=E(d,r))}const b=s[11].default,f=J(b,s,s[10],null);return{c(){e=S("div"),l=S("div");for(let a=0;a<t.length;a+=1)t[a].c();u=p(),f&&f.c(),g(l,"class","tab-nav scroll-hide svelte-kqij2n"),g(e,"class",n="tabs "+s[2].join(" ")+" svelte-kqij2n"),g(e,"id",s[1]),I(e,"hide",!s[0])},m(a,r){v(a,e,r),k(e,l);for(let d=0;d<t.length;d+=1)t[d]&&t[d].m(l,null);k(e,u),f&&f.m(e,null),i=!0},p(a,[r]){r&408&&(_=C(a[3]),t=L(t,r,m,1,a,_,c,l,O,E,null,D)),f&&f.p&&(!i||r&1024)&&M(f,b,a,a[10],i?R(b,a[10],r,null):Q(a[10]),null),(!i||r&4&&n!==(n="tabs "+a[2].join(" ")+" svelte-kqij2n"))&&g(e,"class",n),(!i||r&2)&&g(e,"id",a[1]),(!i||r&5)&&I(e,"hide",!a[0])},i(a){i||(w(f,a),i=!0)},o(a){y(f,a),i=!1},d(a){a&&j(e);for(let r=0;r<t.length;r+=1)t[r].d();f&&f.d(a)}}}const ie={};function ae(s,e,l){let t,c,{$$slots:u={},$$scope:n}=e,{visible:i=!0}=e,{elem_id:_="id"}=e,{elem_classes:m=[]}=e,{selected:b}=e,f=[];const a=B(!1);N(s,a,o=>l(4,c=o));const r=B(0);N(s,r,o=>l(13,t=o));const d=U();P(ie,{register_tab:o=>(f.push({name:o.name,id:o.id}),a.update(h=>h??o.id),l(3,f),f.length-1),unregister_tab:o=>{const h=f.findIndex(q=>q.id===o.id);f.splice(h,1),a.update(q=>q===o.id?f[h]?.id||f[f.length-1]?.id:q)},selected_tab:a,selected_tab_index:r});function T(o){l(9,b=o),A(a,c=o,c),A(r,t=f.findIndex(h=>h.id===o),t),d("change")}const K=(o,h)=>{T(o.id),d("select",{value:o.name,index:h})};return s.$$set=o=>{"visible"in o&&l(0,i=o.visible),"elem_id"in o&&l(1,_=o.elem_id),"elem_classes"in o&&l(2,m=o.elem_classes),"selected"in o&&l(9,b=o.selected),"$$scope"in o&&l(10,n=o.$$scope)},s.$$.update=()=>{s.$$.dirty&512&&b!==null&&T(b)},[i,_,m,f,c,a,r,d,T,b,n,u,K]}class ce extends F{constructor(e){super(),G(this,e,ae,ne,H,{visible:0,elem_id:1,elem_classes:2,selected:9})}}function _e(s){let e;const l=s[5].default,t=J(l,s,s[9],null);return{c(){t&&t.c()},m(c,u){t&&t.m(c,u),e=!0},p(c,u){t&&t.p&&(!e||u&512)&&M(t,l,c,c[9],e?R(l,c[9],u,null):Q(c[9]),null)},i(c){e||(w(t,c),e=!0)},o(c){y(t,c),e=!1},d(c){t&&t.d(c)}}}function ue(s){let e,l,t;function c(n){s[6](n)}let u={visible:s[1],elem_id:s[2],elem_classes:s[3],$$slots:{default:[_e]},$$scope:{ctx:s}};return s[0]!==void 0&&(u.selected=s[0]),e=new ce({props:u}),W.push(()=>Z(e,"selected",c)),e.$on("change",s[7]),e.$on("select",s[8]),{c(){x(e.$$.fragment)},m(n,i){$(e,n,i),t=!0},p(n,[i]){const _={};i&2&&(_.visible=n[1]),i&4&&(_.elem_id=n[2]),i&8&&(_.elem_classes=n[3]),i&512&&(_.$$scope={dirty:i,ctx:n}),!l&&i&1&&(l=!0,_.selected=n[0],ee(()=>l=!1)),e.$set(_)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){te(e,n)}}}function de(s,e,l){let{$$slots:t={},$$scope:c}=e;const u=U();let{visible:n=!0}=e,{elem_id:i=""}=e,{elem_classes:_=[]}=e,{selected:m}=e,{gradio:b}=e;function f(d){m=d,l(0,m)}const a=()=>b.dispatch("change"),r=d=>b.dispatch("select",d.detail);return s.$$set=d=>{"visible"in d&&l(1,n=d.visible),"elem_id"in d&&l(2,i=d.elem_id),"elem_classes"in d&&l(3,_=d.elem_classes),"selected"in d&&l(0,m=d.selected),"gradio"in d&&l(4,b=d.gradio),"$$scope"in d&&l(9,c=d.$$scope)},s.$$.update=()=>{s.$$.dirty&1&&u("prop_change",{selected:m})},[m,n,i,_,b,t,f,a,r,c]}class oe extends F{constructor(e){super(),G(this,e,de,ue,H,{visible:1,elem_id:2,elem_classes:3,selected:0,gradio:4})}}const re=oe;export{re as S,ie as T};
//# sourceMappingURL=StaticTabs-23796641.js.map
