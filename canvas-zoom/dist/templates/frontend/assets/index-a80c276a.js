import{S as ge,e as be,s as de,y as we,o as N,Q as Le,h as A,p as O,w as B,r as P,u as S,v as Q,k as C,a0 as Me,a1 as Ve,C as Xe,a5 as qe,F as M,G as V,H as X,a6 as Te,R as le,E as te,I as Z,m as E,g as d,K as R,N as F,j as z,ap as We,O as ke,M as T,B as Ke,t as ve,x as je,Z as Oe,ad as Pe,V as Qe,W as Ue}from"./index-86f847d0.js";import{n as ne,B as Ze}from"./Button-787144df.js";import{B as Je}from"./BlockLabel-ce6e65ef.js";import{I as Ye}from"./IconButton-bb8f3ba7.js";import{E as ye}from"./Empty-b31d83ce.js";import{S as pe}from"./ShareButton-f61d5255.js";import{M as xe}from"./ModifyUpload-43c7fb39.js";import{D as $e}from"./Download-9973fb36.js";import{I as Be}from"./Image-fae2e9c1.js";import{u as el}from"./utils-c3e3db58.js";async function ll(l){return l?`<div style="display: flex; flex-wrap: wrap; gap: 16px">${(await Promise.all(l.map(async([e,n])=>e===null?"":await el(e.data,"url")))).map(e=>`<img src="${e}" style="height: 400px" />`).join("")}</div>`:""}const{window:De}=qe;function ie(l,t,e){const n=l.slice();return n[39]=t[e][0],n[40]=t[e][1],n[42]=e,n}function oe(l,t,e){const n=l.slice();return n[39]=t[e],n[43]=t,n[42]=e,n}function ae(l){let t,e;return t=new Je({props:{show_label:l[0],Icon:Be,label:l[1]||"Gallery"}}),{c(){M(t.$$.fragment)},m(n,i){V(t,n,i),e=!0},p(n,i){const r={};i[0]&1&&(r.show_label=n[0]),i[0]&2&&(r.label=n[1]||"Gallery"),t.$set(r)},i(n){e||(B(t.$$.fragment,n),e=!0)},o(n){S(t.$$.fragment,n),e=!1},d(n){X(t,n)}}}function tl(l){let t,e,n,i,r,_,o=l[11]!==null&&l[6]&&re(l),a=l[8]&&_e(l),b=Z(l[10]),s=[];for(let c=0;c<b.length;c+=1)s[c]=he(ie(l,b,c));return{c(){o&&o.c(),t=N(),e=E("div"),n=E("div"),a&&a.c(),i=N();for(let c=0;c<s.length;c+=1)s[c].c();d(n,"class","grid-container svelte-1b19cri"),R(n,"--grid-cols",l[3]),R(n,"--grid-rows",l[4]),R(n,"--object-fit",l[7]),R(n,"height",l[5]),F(n,"pt-6",l[0]),d(e,"class","grid-wrap svelte-1b19cri"),we(()=>l[34].call(e)),F(e,"fixed-height",!l[5]||l[5]=="auto")},m(c,f){o&&o.m(c,f),A(c,t,f),A(c,e,f),z(e,n),a&&a.m(n,null),z(n,i);for(let m=0;m<s.length;m+=1)s[m]&&s[m].m(n,null);r=We(e,l[34].bind(e)),_=!0},p(c,f){if(c[11]!==null&&c[6]?o?(o.p(c,f),f[0]&2112&&B(o,1)):(o=re(c),o.c(),B(o,1),o.m(t.parentNode,t)):o&&(P(),S(o,1,1,()=>{o=null}),Q()),c[8]?a?(a.p(c,f),f[0]&256&&B(a,1)):(a=_e(c),a.c(),B(a,1),a.m(n,i)):a&&(P(),S(a,1,1,()=>{a=null}),Q()),f[0]&3072){b=Z(c[10]);let m;for(m=0;m<b.length;m+=1){const k=ie(c,b,m);s[m]?s[m].p(k,f):(s[m]=he(k),s[m].c(),s[m].m(n,null))}for(;m<s.length;m+=1)s[m].d(1);s.length=b.length}(!_||f[0]&8)&&R(n,"--grid-cols",c[3]),(!_||f[0]&16)&&R(n,"--grid-rows",c[4]),(!_||f[0]&128)&&R(n,"--object-fit",c[7]),(!_||f[0]&32)&&R(n,"height",c[5]),(!_||f[0]&1)&&F(n,"pt-6",c[0]),(!_||f[0]&32)&&F(e,"fixed-height",!c[5]||c[5]=="auto")},i(c){_||(B(o),B(a),_=!0)},o(c){S(o),S(a),_=!1},d(c){c&&(C(t),C(e)),o&&o.d(c),a&&a.d(),ke(s,c),r()}}}function nl(l){let t,e;return t=new ye({props:{unpadded_box:!0,size:"large",$$slots:{default:[il]},$$scope:{ctx:l}}}),{c(){M(t.$$.fragment)},m(n,i){V(t,n,i),e=!0},p(n,i){const r={};i[1]&8192&&(r.$$scope={dirty:i,ctx:n}),t.$set(r)},i(n){e||(B(t.$$.fragment,n),e=!0)},o(n){S(t.$$.fragment,n),e=!1},d(n){X(t,n)}}}function re(l){let t,e,n,i,r,_,o,a,b,s,c,f,m,k,L,v=l[9]&&se(l);i=new xe({props:{absolute:!1}}),i.$on("clear",l[26]);let G=l[10][l[11]][1]&&fe(l),H=Z(l[10]),I=[];for(let g=0;g<H.length;g+=1)I[g]=ue(oe(l,H,g));return{c(){t=E("div"),e=E("div"),v&&v.c(),n=N(),M(i.$$.fragment),r=N(),_=E("img"),s=N(),G&&G.c(),c=N(),f=E("div");for(let g=0;g<I.length;g+=1)I[g].c();d(e,"class","icon-buttons svelte-1b19cri"),d(_,"data-testid","detailed-image"),T(_.src,o=l[10][l[11]][0].data)||d(_,"src",o),d(_,"alt",a=l[10][l[11]][1]||""),d(_,"title",b=l[10][l[11]][1]||null),R(_,"height","calc(100% - "+(l[10][l[11]][1]?"80px":"60px")+")"),d(_,"class","svelte-1b19cri"),F(_,"with-caption",!!l[10][l[11]][1]),d(f,"class","thumbnails scroll-hide svelte-1b19cri"),d(f,"data-testid","container_el"),d(t,"class","preview svelte-1b19cri")},m(g,D){A(g,t,D),z(t,e),v&&v.m(e,null),z(e,n),V(i,e,null),z(t,r),z(t,_),z(t,s),G&&G.m(t,null),z(t,c),z(t,f);for(let j=0;j<I.length;j+=1)I[j]&&I[j].m(f,null);l[30](f),m=!0,k||(L=[O(_,"click",l[27]),O(t,"keydown",l[18])],k=!0)},p(g,D){if(g[9]?v?(v.p(g,D),D[0]&512&&B(v,1)):(v=se(g),v.c(),B(v,1),v.m(e,n)):v&&(P(),S(v,1,1,()=>{v=null}),Q()),(!m||D[0]&3072&&!T(_.src,o=g[10][g[11]][0].data))&&d(_,"src",o),(!m||D[0]&3072&&a!==(a=g[10][g[11]][1]||""))&&d(_,"alt",a),(!m||D[0]&3072&&b!==(b=g[10][g[11]][1]||null))&&d(_,"title",b),(!m||D[0]&3072)&&R(_,"height","calc(100% - "+(g[10][g[11]][1]?"80px":"60px")+")"),(!m||D[0]&3072)&&F(_,"with-caption",!!g[10][g[11]][1]),g[10][g[11]][1]?G?G.p(g,D):(G=fe(g),G.c(),G.m(t,c)):G&&(G.d(1),G=null),D[0]&7168){H=Z(g[10]);let j;for(j=0;j<H.length;j+=1){const w=oe(g,H,j);I[j]?I[j].p(w,D):(I[j]=ue(w),I[j].c(),I[j].m(f,null))}for(;j<I.length;j+=1)I[j].d(1);I.length=H.length}},i(g){m||(B(v),B(i.$$.fragment,g),m=!0)},o(g){S(v),S(i.$$.fragment,g),m=!1},d(g){g&&C(t),v&&v.d(),X(i),G&&G.d(),ke(I,g),l[30](null),k=!1,Ke(L)}}}function se(l){let t,e,n,i;return e=new Ye({props:{Icon:$e,label:l[16]("common.download")}}),{c(){t=E("a"),M(e.$$.fragment),d(t,"href",n=me(l[2][l[11]])),d(t,"target",window.__is_colab__?"_blank":null),d(t,"download","image"),d(t,"class","svelte-1b19cri")},m(r,_){A(r,t,_),V(e,t,null),i=!0},p(r,_){const o={};_[0]&65536&&(o.label=r[16]("common.download")),e.$set(o),(!i||_[0]&2052&&n!==(n=me(r[2][r[11]])))&&d(t,"href",n)},i(r){i||(B(e.$$.fragment,r),i=!0)},o(r){S(e.$$.fragment,r),i=!1},d(r){r&&C(t),X(e)}}}function fe(l){let t,e=l[10][l[11]][1]+"",n;return{c(){t=E("div"),n=ve(e),d(t,"class","caption svelte-1b19cri")},m(i,r){A(i,t,r),z(t,n)},p(i,r){r[0]&3072&&e!==(e=i[10][i[11]][1]+"")&&je(n,e)},d(i){i&&C(t)}}}function ue(l){let t,e,n,i,r,_,o=l[42],a,b;const s=()=>l[28](t,o),c=()=>l[28](null,o);function f(){return l[29](l[42])}return{c(){t=E("button"),e=E("img"),_=N(),T(e.src,n=l[39][0].data)||d(e,"src",n),d(e,"title",i=l[39][1]||null),d(e,"alt",r=l[39][1]||null),d(e,"class","svelte-1b19cri"),d(t,"class","thumbnail-item thumbnail-small svelte-1b19cri"),F(t,"selected",l[11]===l[42])},m(m,k){A(m,t,k),z(t,e),z(t,_),s(),a||(b=O(t,"click",f),a=!0)},p(m,k){l=m,k[0]&1024&&!T(e.src,n=l[39][0].data)&&d(e,"src",n),k[0]&1024&&i!==(i=l[39][1]||null)&&d(e,"title",i),k[0]&1024&&r!==(r=l[39][1]||null)&&d(e,"alt",r),o!==l[42]&&(c(),o=l[42],s()),k[0]&2048&&F(t,"selected",l[11]===l[42])},d(m){m&&C(t),c(),a=!1,b()}}}function _e(l){let t,e,n;return e=new pe({props:{value:l[10],formatter:ll}}),e.$on("share",l[31]),e.$on("error",l[32]),{c(){t=E("div"),M(e.$$.fragment),d(t,"class","icon-button svelte-1b19cri")},m(i,r){A(i,t,r),V(e,t,null),n=!0},p(i,r){const _={};r[0]&1024&&(_.value=i[10]),e.$set(_)},i(i){n||(B(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){i&&C(t),X(e)}}}function ce(l){let t,e=l[40]+"",n;return{c(){t=E("div"),n=ve(e),d(t,"class","caption-label svelte-1b19cri")},m(i,r){A(i,t,r),z(t,n)},p(i,r){r[0]&1024&&e!==(e=i[40]+"")&&je(n,e)},d(i){i&&C(t)}}}function he(l){let t,e,n,i,r,_,o,a,b=l[40]&&ce(l);function s(){return l[33](l[42])}return{c(){t=E("button"),e=E("img"),r=N(),b&&b.c(),_=N(),d(e,"alt",n=l[40]||""),T(e.src,i=typeof l[39]=="string"?l[39]:l[39].data)||d(e,"src",i),d(e,"class","svelte-1b19cri"),d(t,"class","thumbnail-item thumbnail-lg svelte-1b19cri"),F(t,"selected",l[11]===l[42])},m(c,f){A(c,t,f),z(t,e),z(t,r),b&&b.m(t,null),z(t,_),o||(a=O(t,"click",s),o=!0)},p(c,f){l=c,f[0]&1024&&n!==(n=l[40]||"")&&d(e,"alt",n),f[0]&1024&&!T(e.src,i=typeof l[39]=="string"?l[39]:l[39].data)&&d(e,"src",i),l[40]?b?b.p(l,f):(b=ce(l),b.c(),b.m(t,_)):b&&(b.d(1),b=null),f[0]&2048&&F(t,"selected",l[11]===l[42])},d(c){c&&C(t),b&&b.d(),o=!1,a()}}}function il(l){let t,e;return t=new Be({}),{c(){M(t.$$.fragment)},m(n,i){V(t,n,i),e=!0},i(n){e||(B(t.$$.fragment,n),e=!0)},o(n){S(t.$$.fragment,n),e=!1},d(n){X(t,n)}}}function ol(l){let t,e,n,i,r,_,o;we(l[25]);let a=l[0]&&ae(l);const b=[nl,tl],s=[];function c(f,m){return f[2]===null||f[10]===null||f[10].length===0?0:1}return e=c(l),n=s[e]=b[e](l),{c(){a&&a.c(),t=N(),n.c(),i=Le()},m(f,m){a&&a.m(f,m),A(f,t,m),s[e].m(f,m),A(f,i,m),r=!0,_||(o=O(De,"resize",l[25]),_=!0)},p(f,m){f[0]?a?(a.p(f,m),m[0]&1&&B(a,1)):(a=ae(f),a.c(),B(a,1),a.m(t.parentNode,t)):a&&(P(),S(a,1,1,()=>{a=null}),Q());let k=e;e=c(f),e===k?s[e].p(f,m):(P(),S(s[k],1,1,()=>{s[k]=null}),Q(),n=s[e],n?n.p(f,m):(n=s[e]=b[e](f),n.c()),B(n,1),n.m(i.parentNode,i))},i(f){r||(B(a),B(n),r=!0)},o(f){S(a),S(n),r=!1},d(f){f&&(C(t),C(i)),a&&a.d(f),s[e].d(f),_=!1,o()}}}function al(l){return typeof l=="object"&&l!==null&&"data"in l}function me(l){return al(l)?l.data:typeof l=="string"?l:""}function rl(l,t,e){let n,i,r;Me(l,Ve,u=>e(16,r=u));let{show_label:_=!0}=t,{label:o}=t,{root:a=""}=t,{root_url:b=null}=t,{value:s=null}=t,{grid_cols:c=[2]}=t,{grid_rows:f=void 0}=t,{height:m="auto"}=t,{preview:k}=t,{allow_preview:L=!0}=t,{object_fit:v="cover"}=t,{show_share_button:G=!1}=t,{show_download_button:H=!1}=t;const I=Xe();let g=!0,D=null,j=s,w=k&&s?.length?0:null,W=w;function U(u){const K=u.target,y=u.clientX,p=K.offsetWidth/2;y<p?e(11,w=n):e(11,w=i)}function J(u){switch(u.code){case"Escape":u.preventDefault(),e(11,w=null);break;case"ArrowLeft":u.preventDefault(),e(11,w=n);break;case"ArrowRight":u.preventDefault(),e(11,w=i);break}}let h=[],q;async function Ge(u){if(typeof u!="number")return;await Te(),h[u].focus();const{left:K,width:y}=q.getBoundingClientRect(),{left:$,width:p}=h[u].getBoundingClientRect(),ee=$-K+p/2-y/2+q.scrollLeft;q?.scrollTo({left:ee<0?0:ee,behavior:"smooth"})}let Y=0,x=0;function Ie(){e(15,x=De.innerHeight)}const Se=()=>e(11,w=null),ze=u=>U(u);function Ee(u,K){le[u?"unshift":"push"](()=>{h[K]=u,e(12,h)})}const He=u=>e(11,w=u);function Ae(u){le[u?"unshift":"push"](()=>{q=u,e(13,q)})}function Ce(u){te.call(this,l,u)}function Ne(u){te.call(this,l,u)}const Re=u=>e(11,w=u);function Fe(){Y=this.clientHeight,e(14,Y)}return l.$$set=u=>{"show_label"in u&&e(0,_=u.show_label),"label"in u&&e(1,o=u.label),"root"in u&&e(19,a=u.root),"root_url"in u&&e(20,b=u.root_url),"value"in u&&e(2,s=u.value),"grid_cols"in u&&e(3,c=u.grid_cols),"grid_rows"in u&&e(4,f=u.grid_rows),"height"in u&&e(5,m=u.height),"preview"in u&&e(21,k=u.preview),"allow_preview"in u&&e(6,L=u.allow_preview),"object_fit"in u&&e(7,v=u.object_fit),"show_share_button"in u&&e(8,G=u.show_share_button),"show_download_button"in u&&e(9,H=u.show_download_button)},l.$$.update=()=>{l.$$.dirty[0]&4194308&&e(22,g=s==null||s.length==0?!0:g),l.$$.dirty[0]&1572868&&e(10,D=s===null?null:s.map(u=>Array.isArray(u)?[ne(u[0],a,b),u[1]]:[ne(u,a,b),null])),l.$$.dirty[0]&14682116&&j!==s&&(g?(e(11,w=k&&s?.length?0:null),e(22,g=!1)):e(11,w=w!==null&&s!==null&&w<s.length?w:null),e(23,j=s)),l.$$.dirty[0]&3072&&(n=((w??0)+(D?.length??0)-1)%(D?.length??0)),l.$$.dirty[0]&3072&&(i=((w??0)+1)%(D?.length??0)),l.$$.dirty[0]&16780288&&w!==W&&(e(24,W=w),w!==null&&I("select",{index:w,value:D?.[w][1]})),l.$$.dirty[0]&2112&&L&&Ge(w)},[_,o,s,c,f,m,L,v,G,H,D,w,h,q,Y,x,r,U,J,a,b,k,g,j,W,Ie,Se,ze,Ee,He,Ae,Ce,Ne,Re,Fe]}class sl extends ge{constructor(t){super(),be(this,t,rl,ol,de,{show_label:0,label:1,root:19,root_url:20,value:2,grid_cols:3,grid_rows:4,height:5,preview:21,allow_preview:6,object_fit:7,show_share_button:8,show_download_button:9},null,[-1,-1])}}function fl(l){let t,e,n,i;const r=[l[0]];let _={};for(let o=0;o<r.length;o+=1)_=Oe(_,r[o]);return t=new Pe({props:_}),n=new sl({props:{label:l[2],value:l[8],show_label:l[1],root:l[3],root_url:l[4],grid_cols:l[12],grid_rows:l[13],height:l[14],preview:l[15],object_fit:l[17],allow_preview:l[16],show_share_button:l[18],show_download_button:l[19]}}),n.$on("select",l[21]),n.$on("share",l[22]),n.$on("error",l[23]),{c(){M(t.$$.fragment),e=N(),M(n.$$.fragment)},m(o,a){V(t,o,a),A(o,e,a),V(n,o,a),i=!0},p(o,a){const b=a&1?Qe(r,[Ue(o[0])]):{};t.$set(b);const s={};a&4&&(s.label=o[2]),a&256&&(s.value=o[8]),a&2&&(s.show_label=o[1]),a&8&&(s.root=o[3]),a&16&&(s.root_url=o[4]),a&4096&&(s.grid_cols=o[12]),a&8192&&(s.grid_rows=o[13]),a&16384&&(s.height=o[14]),a&32768&&(s.preview=o[15]),a&131072&&(s.object_fit=o[17]),a&65536&&(s.allow_preview=o[16]),a&262144&&(s.show_share_button=o[18]),a&524288&&(s.show_download_button=o[19]),n.$set(s)},i(o){i||(B(t.$$.fragment,o),B(n.$$.fragment,o),i=!0)},o(o){S(t.$$.fragment,o),S(n.$$.fragment,o),i=!1},d(o){o&&C(e),X(t,o),X(n,o)}}}function ul(l){let t,e;return t=new Ze({props:{visible:l[7],variant:"solid",padding:!1,elem_id:l[5],elem_classes:l[6],container:l[9],scale:l[10],min_width:l[11],allow_overflow:!1,height:typeof l[14]=="number"?l[14]:void 0,$$slots:{default:[fl]},$$scope:{ctx:l}}}),{c(){M(t.$$.fragment)},m(n,i){V(t,n,i),e=!0},p(n,[i]){const r={};i&128&&(r.visible=n[7]),i&32&&(r.elem_id=n[5]),i&64&&(r.elem_classes=n[6]),i&512&&(r.container=n[9]),i&1024&&(r.scale=n[10]),i&2048&&(r.min_width=n[11]),i&16384&&(r.height=typeof n[14]=="number"?n[14]:void 0),i&18870559&&(r.$$scope={dirty:i,ctx:n}),t.$set(r)},i(n){e||(B(t.$$.fragment,n),e=!0)},o(n){S(t.$$.fragment,n),e=!1},d(n){X(t,n)}}}function _l(l,t,e){let{loading_status:n}=t,{show_label:i}=t,{label:r}=t,{root:_}=t,{root_url:o}=t,{elem_id:a=""}=t,{elem_classes:b=[]}=t,{visible:s=!0}=t,{value:c=null}=t,{container:f=!0}=t,{scale:m=null}=t,{min_width:k=void 0}=t,{grid_cols:L=[2]}=t,{grid_rows:v=void 0}=t,{height:G="auto"}=t,{preview:H}=t,{allow_preview:I=!0}=t,{object_fit:g="cover"}=t,{show_share_button:D=!1}=t,{show_download_button:j=!1}=t,{gradio:w}=t;const W=h=>w.dispatch("select",h.detail),U=h=>w.dispatch("share",h.detail),J=h=>w.dispatch("error",h.detail);return l.$$set=h=>{"loading_status"in h&&e(0,n=h.loading_status),"show_label"in h&&e(1,i=h.show_label),"label"in h&&e(2,r=h.label),"root"in h&&e(3,_=h.root),"root_url"in h&&e(4,o=h.root_url),"elem_id"in h&&e(5,a=h.elem_id),"elem_classes"in h&&e(6,b=h.elem_classes),"visible"in h&&e(7,s=h.visible),"value"in h&&e(8,c=h.value),"container"in h&&e(9,f=h.container),"scale"in h&&e(10,m=h.scale),"min_width"in h&&e(11,k=h.min_width),"grid_cols"in h&&e(12,L=h.grid_cols),"grid_rows"in h&&e(13,v=h.grid_rows),"height"in h&&e(14,G=h.height),"preview"in h&&e(15,H=h.preview),"allow_preview"in h&&e(16,I=h.allow_preview),"object_fit"in h&&e(17,g=h.object_fit),"show_share_button"in h&&e(18,D=h.show_share_button),"show_download_button"in h&&e(19,j=h.show_download_button),"gradio"in h&&e(20,w=h.gradio)},[n,i,r,_,o,a,b,s,c,f,m,k,L,v,G,H,I,g,D,j,w,W,U,J]}class cl extends ge{constructor(t){super(),be(this,t,_l,ul,de,{loading_status:0,show_label:1,label:2,root:3,root_url:4,elem_id:5,elem_classes:6,visible:7,value:8,container:9,scale:10,min_width:11,grid_cols:12,grid_rows:13,height:14,preview:15,allow_preview:16,object_fit:17,show_share_button:18,show_download_button:19,gradio:20})}}const Gl=cl;export{Gl as default};
//# sourceMappingURL=index-a80c276a.js.map