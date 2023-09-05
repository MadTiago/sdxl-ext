import{S as O,e as F,s as N,F as k,o as R,Q as T,G as v,h as S,w as b,r as U,u as w,v as V,k as E,H as C,a0 as H,a1 as J,D as P,m as z,g as h,j as B,R as Q,Z as W,ad as Z,V as K,W as Y}from"./index-86f847d0.js";import{B as y,n as p}from"./Button-787144df.js";import{B as X}from"./BlockLabel-ce6e65ef.js";import{E as x}from"./Empty-b31d83ce.js";import{F as j}from"./File-a3647127.js";import{I as $}from"./IconButton-bb8f3ba7.js";import{D as ee}from"./Download-9973fb36.js";import{b as le,a as D}from"./babylonjs.loaders.min-3a988886.js";function I(s){let l,a,e,t,n,o,_,u,d;return t=new $({props:{Icon:ee,label:s[4]("common.download")}}),{c(){l=z("div"),a=z("div"),e=z("a"),k(t.$$.fragment),_=R(),u=z("canvas"),h(e,"href",n=s[0].data),h(e,"target",window.__is_colab__?"_blank":null),h(e,"download",o=window.__is_colab__?null:s[0].orig_name||s[0].name),h(a,"class","download svelte-120jzta"),h(u,"class","svelte-120jzta"),h(l,"class","model3D svelte-120jzta")},m(f,c){S(f,l,c),B(l,a),B(a,e),v(t,e,null),B(l,_),B(l,u),s[9](u),d=!0},p(f,c){const i={};c&16&&(i.label=f[4]("common.download")),t.$set(i),(!d||c&1&&n!==(n=f[0].data))&&h(e,"href",n),(!d||c&1&&o!==(o=window.__is_colab__?null:f[0].orig_name||f[0].name))&&h(e,"download",o)},i(f){d||(b(t.$$.fragment,f),d=!0)},o(f){w(t.$$.fragment,f),d=!1},d(f){f&&E(l),C(t),s[9](null)}}}function ne(s){let l,a,e,t;l=new X({props:{show_label:s[2],Icon:j,label:s[1]||s[4]("3D_model.3d_model")}});let n=s[0]&&I(s);return{c(){k(l.$$.fragment),a=R(),n&&n.c(),e=T()},m(o,_){v(l,o,_),S(o,a,_),n&&n.m(o,_),S(o,e,_),t=!0},p(o,[_]){const u={};_&4&&(u.show_label=o[2]),_&18&&(u.label=o[1]||o[4]("3D_model.3d_model")),l.$set(u),o[0]?n?(n.p(o,_),_&1&&b(n,1)):(n=I(o),n.c(),b(n,1),n.m(e.parentNode,e)):n&&(U(),w(n,1,1,()=>{n=null}),V())},i(o){t||(b(l.$$.fragment,o),b(n),t=!0)},o(o){w(l.$$.fragment,o),w(n),t=!1},d(o){o&&(E(a),E(e)),C(l,o),n&&n.d(o)}}}function te(s,l,a){let e,t,n;H(s,J,r=>a(4,n=r));let{value:o}=l,{clearColor:_=[0,0,0,0]}=l,{label:u=""}=l,{show_label:d}=l;le.OBJFileLoader.IMPORT_VERTEX_COLORS=!0;let f,c,i,m=!1;P(()=>{i=new D.Engine(f,!0),window.addEventListener("resize",()=>{i?.resize()}),a(6,m=!0)});function L(){c&&!c.isDisposed&&(c.dispose(),i?.stopRenderLoop(),i?.dispose(),i=null,i=new D.Engine(f,!0),window.addEventListener("resize",()=>{i?.resize()})),g()}function g(){if(c=new D.Scene(i),c.createDefaultCameraOrLight(),c.clearColor=new D.Color4(..._),i?.runRenderLoop(()=>{c.render()}),!o)return;let r;if(o.is_file)r=o.data;else{let q=o.data,A=D.Tools.DecodeBase64(q),G=new Blob([A]);r=URL.createObjectURL(G)}D.SceneLoader.ShowLoadingScreen=!1,D.SceneLoader.Append("",r,c,()=>{c.createDefaultCamera(!0,!0,!0)},void 0,void 0,"."+o.name.split(".")[1])}function M(r){Q[r?"unshift":"push"](()=>{f=r,a(3,f)})}return s.$$set=r=>{"value"in r&&a(0,o=r.value),"clearColor"in r&&a(5,_=r.clearColor),"label"in r&&a(1,u=r.label),"show_label"in r&&a(2,d=r.show_label)},s.$$.update=()=>{s.$$.dirty&1&&a(8,{data:e,name:t}=o||{data:void 0,name:void 0},e,(a(7,t),a(0,o))),s.$$.dirty&456&&f&&m&&e!=null&&t&&L()},[o,u,d,f,n,_,m,t,e,M]}class ae extends O{constructor(l){super(),F(this,l,te,ne,N,{value:0,clearColor:5,label:1,show_label:2})}}function oe(s){let l,a,e,t;return l=new X({props:{show_label:s[7],Icon:j,label:s[6]||"3D Model"}}),e=new x({props:{unpadded_box:!0,size:"large",$$slots:{default:[re]},$$scope:{ctx:s}}}),{c(){k(l.$$.fragment),a=R(),k(e.$$.fragment)},m(n,o){v(l,n,o),S(n,a,o),v(e,n,o),t=!0},p(n,o){const _={};o&128&&(_.show_label=n[7]),o&64&&(_.label=n[6]||"3D Model"),l.$set(_);const u={};o&16384&&(u.$$scope={dirty:o,ctx:n}),e.$set(u)},i(n){t||(b(l.$$.fragment,n),b(e.$$.fragment,n),t=!0)},o(n){w(l.$$.fragment,n),w(e.$$.fragment,n),t=!1},d(n){n&&E(a),C(l,n),C(e,n)}}}function se(s){let l,a;return l=new ae({props:{value:s[11],clearColor:s[4],label:s[6],show_label:s[7]}}),{c(){k(l.$$.fragment)},m(e,t){v(l,e,t),a=!0},p(e,t){const n={};t&2048&&(n.value=e[11]),t&16&&(n.clearColor=e[4]),t&64&&(n.label=e[6]),t&128&&(n.show_label=e[7]),l.$set(n)},i(e){a||(b(l.$$.fragment,e),a=!0)},o(e){w(l.$$.fragment,e),a=!1},d(e){C(l,e)}}}function re(s){let l,a;return l=new j({}),{c(){k(l.$$.fragment)},m(e,t){v(l,e,t),a=!0},i(e){a||(b(l.$$.fragment,e),a=!0)},o(e){w(l.$$.fragment,e),a=!1},d(e){C(l,e)}}}function ie(s){let l,a,e,t,n,o;const _=[s[5]];let u={};for(let i=0;i<_.length;i+=1)u=W(u,_[i]);l=new Z({props:u});const d=[se,oe],f=[];function c(i,m){return i[3]?0:1}return e=c(s),t=f[e]=d[e](s),{c(){k(l.$$.fragment),a=R(),t.c(),n=T()},m(i,m){v(l,i,m),S(i,a,m),f[e].m(i,m),S(i,n,m),o=!0},p(i,m){const L=m&32?K(_,[Y(i[5])]):{};l.$set(L);let g=e;e=c(i),e===g?f[e].p(i,m):(U(),w(f[g],1,1,()=>{f[g]=null}),V(),t=f[e],t?t.p(i,m):(t=f[e]=d[e](i),t.c()),b(t,1),t.m(n.parentNode,n))},i(i){o||(b(l.$$.fragment,i),b(t),o=!0)},o(i){w(l.$$.fragment,i),w(t),o=!1},d(i){i&&(E(a),E(n)),C(l,i),f[e].d(i)}}}function fe(s){let l,a;return l=new y({props:{visible:s[2],variant:s[3]===null?"dashed":"solid",border_mode:"base",padding:!1,elem_id:s[0],elem_classes:s[1],container:s[8],scale:s[9],min_width:s[10],$$slots:{default:[ie]},$$scope:{ctx:s}}}),{c(){k(l.$$.fragment)},m(e,t){v(l,e,t),a=!0},p(e,[t]){const n={};t&4&&(n.visible=e[2]),t&8&&(n.variant=e[3]===null?"dashed":"solid"),t&1&&(n.elem_id=e[0]),t&2&&(n.elem_classes=e[1]),t&256&&(n.container=e[8]),t&512&&(n.scale=e[9]),t&1024&&(n.min_width=e[10]),t&18680&&(n.$$scope={dirty:t,ctx:e}),l.$set(n)},i(e){a||(b(l.$$.fragment,e),a=!0)},o(e){w(l.$$.fragment,e),a=!1},d(e){C(l,e)}}}function _e(s,l,a){let{elem_id:e=""}=l,{elem_classes:t=[]}=l,{visible:n=!0}=l,{value:o=null}=l,{root:_}=l,{root_url:u}=l,{clearColor:d}=l,{loading_status:f}=l,{label:c}=l,{show_label:i}=l,{container:m=!0}=l,{scale:L=null}=l,{min_width:g=void 0}=l,M;return s.$$set=r=>{"elem_id"in r&&a(0,e=r.elem_id),"elem_classes"in r&&a(1,t=r.elem_classes),"visible"in r&&a(2,n=r.visible),"value"in r&&a(3,o=r.value),"root"in r&&a(12,_=r.root),"root_url"in r&&a(13,u=r.root_url),"clearColor"in r&&a(4,d=r.clearColor),"loading_status"in r&&a(5,f=r.loading_status),"label"in r&&a(6,c=r.label),"show_label"in r&&a(7,i=r.show_label),"container"in r&&a(8,m=r.container),"scale"in r&&a(9,L=r.scale),"min_width"in r&&a(10,g=r.min_width)},s.$$.update=()=>{s.$$.dirty&12296&&a(11,M=p(o,_,u))},[e,t,n,o,d,f,c,i,m,L,g,M,_,u]}class ue extends O{constructor(l){super(),F(this,l,_e,fe,N,{elem_id:0,elem_classes:1,visible:2,value:3,root:12,root_url:13,clearColor:4,loading_status:5,label:6,show_label:7,container:8,scale:9,min_width:10})}}const ve=ue;export{ve as default};
//# sourceMappingURL=index-c1ca7360.js.map
