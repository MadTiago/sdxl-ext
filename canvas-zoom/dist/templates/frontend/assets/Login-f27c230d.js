import{S as P,e as R,s as U,m as x,F as w,g as F,N as X,h as b,G as k,w as h,u as S,k as d,H as N,a0 as A,a1 as E,t as C,o as $,j as I,x as D,R as j,U as q,X as z}from"./index-86f847d0.js";import{S as J}from"./StaticForm-cd6e7d87.js";import{I as B}from"./InteractiveTextbox-71ea29d2.js";import{a as K}from"./Button-787144df.js";import"./Textbox-f64efc5d.js";import{S as M}from"./StaticColumn-3568af55.js";import"./BlockTitle-913ace04.js";import"./Info-3b437bc2.js";import"./Check-a538cf8e.js";import"./Copy-cccab438.js";function G(i){let e,s;return{c(){e=x("p"),s=C(i[0]),F(e,"class","auth svelte-1ogxbi0")},m(l,t){b(l,e,t),I(e,s)},p(l,t){t&1&&D(s,l[0])},d(l){l&&d(e)}}}function H(i){let e,s=i[6]("login.enable_cookies")+"",l;return{c(){e=x("p"),l=C(s),F(e,"class","auth svelte-1ogxbi0")},m(t,f){b(t,e,f),I(e,l)},p(t,f){f&64&&s!==(s=t[6]("login.enable_cookies")+"")&&D(l,s)},d(t){t&&d(e)}}}function O(i){let e,s=i[6]("login.incorrect_credentials")+"",l;return{c(){e=x("p"),l=C(s),F(e,"class","creds svelte-1ogxbi0")},m(t,f){b(t,e,f),I(e,l)},p(t,f){f&64&&s!==(s=t[6]("login.incorrect_credentials")+"")&&D(l,s)},d(t){t&&d(e)}}}function Q(i){let e,s,l,t,f,m;function v(a){i[9](a)}let p={label:"username",lines:1,show_label:!0,max_lines:1};i[3]!==void 0&&(p.value=i[3]),e=new B({props:p}),j.push(()=>q(e,"value",v)),e.$on("submit",i[7]);function g(a){i[10](a)}let c={label:"password",lines:1,show_label:!0,max_lines:1,type:"password"};return i[4]!==void 0&&(c.value=i[4]),t=new B({props:c}),j.push(()=>q(t,"value",g)),t.$on("submit",i[7]),{c(){w(e.$$.fragment),l=$(),w(t.$$.fragment)},m(a,u){k(e,a,u),b(a,l,u),k(t,a,u),m=!0},p(a,u){const _={};!s&&u&8&&(s=!0,_.value=a[3],z(()=>s=!1)),e.$set(_);const o={};!f&&u&16&&(f=!0,o.value=a[4],z(()=>f=!1)),t.$set(o)},i(a){m||(h(e.$$.fragment,a),h(t.$$.fragment,a),m=!0)},o(a){S(e.$$.fragment,a),S(t.$$.fragment,a),m=!1},d(a){a&&d(l),N(e,a),N(t,a)}}}function V(i){let e=i[6]("login.login")+"",s;return{c(){s=C(e)},m(l,t){b(l,s,t)},p(l,t){t&64&&e!==(e=l[6]("login.login")+"")&&D(s,e)},d(l){l&&d(s)}}}function W(i){let e,s=i[6]("login.login")+"",l,t,f,m,v,p,g,c,a,u=i[0]&&G(i),_=i[2]&&H(i),o=i[5]&&O(i);return p=new J({props:{$$slots:{default:[Q]},$$scope:{ctx:i}}}),c=new K({props:{size:"lg",variant:"primary",$$slots:{default:[V]},$$scope:{ctx:i}}}),c.$on("click",i[7]),{c(){e=x("h2"),l=C(s),t=$(),u&&u.c(),f=$(),_&&_.c(),m=$(),o&&o.c(),v=$(),w(p.$$.fragment),g=$(),w(c.$$.fragment),F(e,"class","svelte-1ogxbi0")},m(n,r){b(n,e,r),I(e,l),b(n,t,r),u&&u.m(n,r),b(n,f,r),_&&_.m(n,r),b(n,m,r),o&&o.m(n,r),b(n,v,r),k(p,n,r),b(n,g,r),k(c,n,r),a=!0},p(n,r){(!a||r&64)&&s!==(s=n[6]("login.login")+"")&&D(l,s),n[0]?u?u.p(n,r):(u=G(n),u.c(),u.m(f.parentNode,f)):u&&(u.d(1),u=null),n[2]?_?_.p(n,r):(_=H(n),_.c(),_.m(m.parentNode,m)):_&&(_.d(1),_=null),n[5]?o?o.p(n,r):(o=O(n),o.c(),o.m(v.parentNode,v)):o&&(o.d(1),o=null);const L={};r&2072&&(L.$$scope={dirty:r,ctx:n}),p.$set(L);const T={};r&2112&&(T.$$scope={dirty:r,ctx:n}),c.$set(T)},i(n){a||(h(p.$$.fragment,n),h(c.$$.fragment,n),a=!0)},o(n){S(p.$$.fragment,n),S(c.$$.fragment,n),a=!1},d(n){n&&(d(e),d(t),d(f),d(m),d(v),d(g)),u&&u.d(n),_&&_.d(n),o&&o.d(n),N(p,n),N(c,n)}}}function Y(i){let e,s,l;return s=new M({props:{variant:"panel",min_width:480,$$slots:{default:[W]},$$scope:{ctx:i}}}),{c(){e=x("div"),w(s.$$.fragment),F(e,"class","wrap svelte-1ogxbi0"),X(e,"min-h-screen",i[1])},m(t,f){b(t,e,f),k(s,e,null),l=!0},p(t,[f]){const m={};f&2173&&(m.$$scope={dirty:f,ctx:t}),s.$set(m),(!l||f&2)&&X(e,"min-h-screen",t[1])},i(t){l||(h(s.$$.fragment,t),l=!0)},o(t){S(s.$$.fragment,t),l=!1},d(t){t&&d(e),N(s)}}}function Z(i,e,s){let l;A(i,E,o=>s(6,l=o));let{root:t}=e,{auth_message:f}=e,{app_mode:m}=e,{space_id:v}=e,p="",g="",c=!1;const a=async()=>{const o=new FormData;o.append("username",p),o.append("password",g);let n=await fetch(t+"/login",{method:"POST",body:o});n.status===400?(s(5,c=!0),s(3,p=""),s(4,g="")):n.status==200&&location.reload()};function u(o){p=o,s(3,p)}function _(o){g=o,s(4,g)}return i.$$set=o=>{"root"in o&&s(8,t=o.root),"auth_message"in o&&s(0,f=o.auth_message),"app_mode"in o&&s(1,m=o.app_mode),"space_id"in o&&s(2,v=o.space_id)},[f,m,v,p,g,c,l,a,t,u,_]}class ue extends P{constructor(e){super(),R(this,e,Z,Y,U,{root:8,auth_message:0,app_mode:1,space_id:2})}}export{ue as default};
//# sourceMappingURL=Login-f27c230d.js.map
