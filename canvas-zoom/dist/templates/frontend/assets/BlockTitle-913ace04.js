import{S as h,e as g,s as k,a8 as w,m as $,o as B,Q as I,g as d,N as _,h as c,aa as N,ab as S,ac as j,w as r,r as q,u as m,v,k as p,F as C,G as F,H as G,t as H,x as Q}from"./index-86f847d0.js";import{I as T}from"./Info-3b437bc2.js";import"./Button-787144df.js";function b(a){let e,l;return e=new T({props:{$$slots:{default:[z]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},m(n,o){F(e,n,o),l=!0},p(n,o){const u={};o&10&&(u.$$scope={dirty:o,ctx:n}),e.$set(u)},i(n){l||(r(e.$$.fragment,n),l=!0)},o(n){m(e.$$.fragment,n),l=!1},d(n){G(e,n)}}}function z(a){let e;return{c(){e=H(a[1])},m(l,n){c(l,e,n)},p(l,n){n&2&&Q(e,l[1])},d(l){l&&p(e)}}}function A(a){let e,l,n,o;const u=a[2].default,f=w(u,a,a[3],null);let s=a[1]&&b(a);return{c(){e=$("span"),f&&f.c(),l=B(),s&&s.c(),n=I(),d(e,"data-testid","block-info"),d(e,"class","svelte-1gfkn6j"),_(e,"sr-only",!a[0]),_(e,"hide",!a[0]),_(e,"has-info",a[1]!=null)},m(t,i){c(t,e,i),f&&f.m(e,null),c(t,l,i),s&&s.m(t,i),c(t,n,i),o=!0},p(t,[i]){f&&f.p&&(!o||i&8)&&N(f,u,t,t[3],o?j(u,t[3],i,null):S(t[3]),null),(!o||i&1)&&_(e,"sr-only",!t[0]),(!o||i&1)&&_(e,"hide",!t[0]),(!o||i&2)&&_(e,"has-info",t[1]!=null),t[1]?s?(s.p(t,i),i&2&&r(s,1)):(s=b(t),s.c(),r(s,1),s.m(n.parentNode,n)):s&&(q(),m(s,1,1,()=>{s=null}),v())},i(t){o||(r(f,t),r(s),o=!0)},o(t){m(f,t),m(s),o=!1},d(t){t&&(p(e),p(l),p(n)),f&&f.d(t),s&&s.d(t)}}}function D(a,e,l){let{$$slots:n={},$$scope:o}=e,{show_label:u=!0}=e,{info:f=void 0}=e;return a.$$set=s=>{"show_label"in s&&l(0,u=s.show_label),"info"in s&&l(1,f=s.info),"$$scope"in s&&l(3,o=s.$$scope)},[u,f,n,o]}class L extends h{constructor(e){super(),g(this,e,D,A,k,{show_label:0,info:1})}}export{L as B};
//# sourceMappingURL=BlockTitle-913ace04.js.map