import{S as F,e as G,s as H,m as g,F as T,o as U,g as m,N as k,h as j,G as z,j as w,an as v,p as b,ay as B,w as A,u as I,k as E,H as J,B as K,C as L,al as M,t as O,x as P,a6 as Q,E as N}from"./index-86f847d0.js";import"./Button-787144df.js";import{B as R}from"./BlockTitle-913ace04.js";function V(a){let e;return{c(){e=O(a[4])},m(t,s){j(t,e,s)},p(t,s){s&16&&P(e,t[4])},d(t){t&&E(e)}}}function W(a){let e,t,s,l,f,o,c;return t=new R({props:{show_label:a[6],info:a[5],$$slots:{default:[V]},$$scope:{ctx:a}}}),{c(){e=g("label"),T(t.$$.fragment),s=U(),l=g("input"),m(l,"type","number"),m(l,"min",a[1]),m(l,"max",a[2]),m(l,"step",a[8]),l.disabled=a[3],m(l,"class","svelte-pjtc3"),m(e,"class","block svelte-pjtc3"),k(e,"container",a[7])},m(i,u){j(i,e,u),z(t,e,null),w(e,s),w(e,l),v(l,a[0]),f=!0,o||(c=[b(l,"input",a[13]),b(l,"keypress",a[9]),b(l,"blur",a[11]),b(l,"focus",a[12])],o=!0)},p(i,[u]){const _={};u&64&&(_.show_label=i[6]),u&32&&(_.info=i[5]),u&65552&&(_.$$scope={dirty:u,ctx:i}),t.$set(_),(!f||u&2)&&m(l,"min",i[1]),(!f||u&4)&&m(l,"max",i[2]),(!f||u&256)&&m(l,"step",i[8]),(!f||u&8)&&(l.disabled=i[3]),u&1&&B(l.value)!==i[0]&&v(l,i[0]),(!f||u&128)&&k(e,"container",i[7])},i(i){f||(A(t.$$.fragment,i),f=!0)},o(i){I(t.$$.fragment,i),f=!1},d(i){i&&E(e),J(t),o=!1,K(c)}}}function X(a,e,t){let{value:s=0}=e,{minimum:l=void 0}=e,{maximum:f=void 0}=e,{value_is_output:o=!1}=e,{disabled:c=!1}=e,{label:i}=e,{info:u=void 0}=e,{show_label:_=!0}=e,{container:h=!0}=e,{step:d=1}=e;const r=L();function C(){!isNaN(s)&&s!==null&&(r("change",s),o||r("input"))}M(()=>{t(10,o=!1)});async function D(n){await Q(),n.key==="Enter"&&(n.preventDefault(),r("submit"))}function S(n){N.call(this,a,n)}function q(n){N.call(this,a,n)}function y(){s=B(this.value),t(0,s)}return a.$$set=n=>{"value"in n&&t(0,s=n.value),"minimum"in n&&t(1,l=n.minimum),"maximum"in n&&t(2,f=n.maximum),"value_is_output"in n&&t(10,o=n.value_is_output),"disabled"in n&&t(3,c=n.disabled),"label"in n&&t(4,i=n.label),"info"in n&&t(5,u=n.info),"show_label"in n&&t(6,_=n.show_label),"container"in n&&t(7,h=n.container),"step"in n&&t(8,d=n.step)},a.$$.update=()=>{a.$$.dirty&1&&C()},[s,l,f,c,i,u,_,h,d,D,o,S,q,y]}class x extends F{constructor(e){super(),G(this,e,X,W,H,{value:0,minimum:1,maximum:2,value_is_output:10,disabled:3,label:4,info:5,show_label:6,container:7,step:8})}}export{x as N};
//# sourceMappingURL=Number-3361afda.js.map
