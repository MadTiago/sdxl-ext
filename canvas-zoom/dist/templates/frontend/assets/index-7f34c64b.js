import{S as W,e as X,s as Z,F as y,o as j,Q as p,G as B,h as A,w as h,r as C,u as b,v as F,k as E,H as q,a0 as x,a1 as $,C as ee,m as P,g as w,j as te,E as M,M as G,ae as le,p as O,b as ae,n as L,B as ne,af as m,Z as se,ad as oe,V as ie,W as ue}from"./index-86f847d0.js";import{B as re,n as _e}from"./Button-787144df.js";import{B as fe}from"./BlockLabel-ce6e65ef.js";import{I as ce}from"./IconButton-bb8f3ba7.js";import{E as de}from"./Empty-b31d83ce.js";import{S as he}from"./ShareButton-f61d5255.js";import{u as me}from"./utils-c3e3db58.js";import{D as be}from"./Download-9973fb36.js";import{M as K,l as we}from"./utils-d4f1cc79.js";function Q(n){let e,a,t,l=n[4]&&T(n),s=n[5]&&V(n);return{c(){e=P("div"),l&&l.c(),a=j(),s&&s.c(),w(e,"class","icon-buttons svelte-pq78xp")},m(u,o){A(u,e,o),l&&l.m(e,null),te(e,a),s&&s.m(e,null),t=!0},p(u,o){u[4]?l?(l.p(u,o),o&16&&h(l,1)):(l=T(u),l.c(),h(l,1),l.m(e,a)):l&&(C(),b(l,1,1,()=>{l=null}),F()),u[5]?s?(s.p(u,o),o&32&&h(s,1)):(s=V(u),s.c(),h(s,1),s.m(e,null)):s&&(C(),b(s,1,1,()=>{s=null}),F())},i(u){t||(h(l),h(s),t=!0)},o(u){b(l),b(s),t=!1},d(u){u&&E(e),l&&l.d(),s&&s.d()}}}function T(n){let e,a,t,l,s;return a=new ce({props:{Icon:be,label:n[6]("common.download")}}),{c(){e=P("a"),y(a.$$.fragment),w(e,"href",t=n[0].data),w(e,"target",window.__is_colab__?"_blank":null),w(e,"download",l=n[0].name)},m(u,o){A(u,e,o),B(a,e,null),s=!0},p(u,o){const i={};o&64&&(i.label=u[6]("common.download")),a.$set(i),(!s||o&1&&t!==(t=u[0].data))&&w(e,"href",t),(!s||o&1&&l!==(l=u[0].name))&&w(e,"download",l)},i(u){s||(h(a.$$.fragment,u),s=!0)},o(u){b(a.$$.fragment,u),s=!1},d(u){u&&E(e),q(a)}}}function V(n){let e,a;return e=new he({props:{formatter:n[11],value:n[0]}}),e.$on("error",n[12]),e.$on("share",n[13]),{c(){y(e.$$.fragment)},m(t,l){B(e,t,l),a=!0},p(t,l){const s={};l&1&&(s.value=t[0]),e.$set(s)},i(t){a||(h(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){q(e,t)}}}function ge(n){let e,a,t,l,s,u;return{c(){e=P("audio"),e.controls=!0,w(e,"preload","metadata"),G(e.src,a=n[0]?.data)||w(e,"src",a),w(e,"data-testid",t=`${n[1]}-audio`),w(e,"class","svelte-pq78xp")},m(o,i){A(o,e,i),s||(u=[le(l=we.call(null,e,{autoplay:n[3]})),O(e,"play",n[9]),O(e,"pause",n[10]),O(e,"ended",n[7])],s=!0)},p(o,i){i&1&&!G(e.src,a=o[0]?.data)&&w(e,"src",a),i&2&&t!==(t=`${o[1]}-audio`)&&w(e,"data-testid",t),l&&ae(l.update)&&i&8&&l.update.call(null,{autoplay:o[3]})},i:L,o:L,d(o){o&&E(e),s=!1,ne(u)}}}function ke(n){let e,a;return e=new de({props:{size:"small",$$slots:{default:[ve]},$$scope:{ctx:n}}}),{c(){y(e.$$.fragment)},m(t,l){B(e,t,l),a=!0},p(t,l){const s={};l&32768&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){a||(h(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){q(e,t)}}}function ve(n){let e,a;return e=new K({}),{c(){y(e.$$.fragment)},m(t,l){B(e,t,l),a=!0},i(t){a||(h(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){q(e,t)}}}function Se(n){let e,a,t,l,s,u,o;e=new fe({props:{show_label:n[2],Icon:K,float:!1,label:n[1]||n[6]("audio.audio")}});let i=n[0]!==null&&Q(n);const g=[ke,ge],c=[];function k(_,d){return _[0]===null?0:1}return l=k(n),s=c[l]=g[l](n),{c(){y(e.$$.fragment),a=j(),i&&i.c(),t=j(),s.c(),u=p()},m(_,d){B(e,_,d),A(_,a,d),i&&i.m(_,d),A(_,t,d),c[l].m(_,d),A(_,u,d),o=!0},p(_,[d]){const v={};d&4&&(v.show_label=_[2]),d&66&&(v.label=_[1]||_[6]("audio.audio")),e.$set(v),_[0]!==null?i?(i.p(_,d),d&1&&h(i,1)):(i=Q(_),i.c(),h(i,1),i.m(t.parentNode,t)):i&&(C(),b(i,1,1,()=>{i=null}),F());let S=l;l=k(_),l===S?c[l].p(_,d):(C(),b(c[S],1,1,()=>{c[S]=null}),F(),s=c[l],s?s.p(_,d):(s=c[l]=g[l](_),s.c()),h(s,1),s.m(u.parentNode,u))},i(_){o||(h(e.$$.fragment,_),h(i),h(s),o=!0)},o(_){b(e.$$.fragment,_),b(i),b(s),o=!1},d(_){_&&(E(a),E(t),E(u)),q(e,_),i&&i.d(_),c[l].d(_)}}}function ye(n,e,a){let t;x(n,$,f=>a(6,t=f));let{value:l=null}=e,{label:s}=e,{name:u}=e,{show_label:o=!0}=e,{autoplay:i}=e,{show_download_button:g=!0}=e,{show_share_button:c=!1}=e;const k=ee();function _(){k("stop"),k("end")}function d(f){M.call(this,n,f)}function v(f){M.call(this,n,f)}const S=async f=>f?`<audio controls src="${await me(f.data,"url")}"></audio>`:"";function N(f){M.call(this,n,f)}function D(f){M.call(this,n,f)}return n.$$set=f=>{"value"in f&&a(0,l=f.value),"label"in f&&a(1,s=f.label),"name"in f&&a(8,u=f.name),"show_label"in f&&a(2,o=f.show_label),"autoplay"in f&&a(3,i=f.autoplay),"show_download_button"in f&&a(4,g=f.show_download_button),"show_share_button"in f&&a(5,c=f.show_share_button)},n.$$.update=()=>{n.$$.dirty&257&&l&&k("change",{name:u,data:l?.data})},[l,s,o,i,g,c,t,_,u,d,v,S,N,D]}class Be extends W{constructor(e){super(),X(this,e,ye,Se,Z,{value:0,label:1,name:8,show_label:2,autoplay:3,show_download_button:4,show_share_button:5})}}function qe(n){let e,a,t,l;const s=[n[11]];let u={};for(let o=0;o<s.length;o+=1)u=se(u,s[o]);return e=new oe({props:u}),t=new Be({props:{autoplay:n[12],show_label:n[7],show_download_button:n[13],show_share_button:n[14],value:n[16],name:n[16]?.name||"audio_file",label:n[6]}}),t.$on("share",n[21]),t.$on("error",n[22]),{c(){y(e.$$.fragment),a=j(),y(t.$$.fragment)},m(o,i){B(e,o,i),A(o,a,i),B(t,o,i),l=!0},p(o,i){const g=i&2048?ie(s,[ue(o[11])]):{};e.$set(g);const c={};i&4096&&(c.autoplay=o[12]),i&128&&(c.show_label=o[7]),i&8192&&(c.show_download_button=o[13]),i&16384&&(c.show_share_button=o[14]),i&65536&&(c.value=o[16]),i&65536&&(c.name=o[16]?.name||"audio_file"),i&64&&(c.label=o[6]),t.$set(c)},i(o){l||(h(e.$$.fragment,o),h(t.$$.fragment,o),l=!0)},o(o){b(e.$$.fragment,o),b(t.$$.fragment,o),l=!1},d(o){o&&E(a),q(e,o),q(t,o)}}}function Ae(n){let e,a;return e=new re({props:{variant:n[3]==="interactive"&&n[4]===null&&n[5]==="upload"?"dashed":"solid",border_mode:n[17]?"focus":"base",padding:!1,elem_id:n[0],elem_classes:n[1],visible:n[2],container:n[8],scale:n[9],min_width:n[10],$$slots:{default:[qe]},$$scope:{ctx:n}}}),{c(){y(e.$$.fragment)},m(t,l){B(e,t,l),a=!0},p(t,[l]){const s={};l&56&&(s.variant=t[3]==="interactive"&&t[4]===null&&t[5]==="upload"?"dashed":"solid"),l&1&&(s.elem_id=t[0]),l&2&&(s.elem_classes=t[1]),l&4&&(s.visible=t[2]),l&256&&(s.container=t[8]),l&512&&(s.scale=t[9]),l&1024&&(s.min_width=t[10]),l&8517824&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){a||(h(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){q(e,t)}}}function Ee(n,e,a){let{elem_id:t=""}=e,{elem_classes:l=[]}=e,{visible:s=!0}=e,{mode:u}=e,{value:o=null}=e,{source:i}=e,{label:g}=e,{root:c}=e,{show_label:k}=e,{root_url:_}=e,{container:d=!0}=e,{scale:v=null}=e,{min_width:S=void 0}=e,{loading_status:N}=e,{autoplay:D=!1}=e,{show_download_button:f=!0}=e,{show_share_button:H=!1}=e,{gradio:I}=e,J=null,z,R;const U=r=>I.dispatch("share",r.detail),Y=r=>I.dispatch("error",r.detail);return n.$$set=r=>{"elem_id"in r&&a(0,t=r.elem_id),"elem_classes"in r&&a(1,l=r.elem_classes),"visible"in r&&a(2,s=r.visible),"mode"in r&&a(3,u=r.mode),"value"in r&&a(4,o=r.value),"source"in r&&a(5,i=r.source),"label"in r&&a(6,g=r.label),"root"in r&&a(18,c=r.root),"show_label"in r&&a(7,k=r.show_label),"root_url"in r&&a(19,_=r.root_url),"container"in r&&a(8,d=r.container),"scale"in r&&a(9,v=r.scale),"min_width"in r&&a(10,S=r.min_width),"loading_status"in r&&a(11,N=r.loading_status),"autoplay"in r&&a(12,D=r.autoplay),"show_download_button"in r&&a(13,f=r.show_download_button),"show_share_button"in r&&a(14,H=r.show_share_button),"gradio"in r&&a(15,I=r.gradio)},n.$$.update=()=>{n.$$.dirty&786448&&a(16,z=_e(o,c,_)),n.$$.dirty&1081360&&JSON.stringify(o)!==JSON.stringify(J)&&(a(20,J=o),I.dispatch("change"))},[t,l,s,u,o,i,g,k,d,v,S,N,D,f,H,I,z,R,c,_,J,U,Y]}class Ie extends W{constructor(e){super(),X(this,e,Ee,Ae,Z,{elem_id:0,elem_classes:1,visible:2,mode:3,value:4,source:5,label:6,root:18,show_label:7,root_url:19,container:8,scale:9,min_width:10,loading_status:11,autoplay:12,show_download_button:13,show_share_button:14,gradio:15})}get elem_id(){return this.$$.ctx[0]}set elem_id(e){this.$$set({elem_id:e}),m()}get elem_classes(){return this.$$.ctx[1]}set elem_classes(e){this.$$set({elem_classes:e}),m()}get visible(){return this.$$.ctx[2]}set visible(e){this.$$set({visible:e}),m()}get mode(){return this.$$.ctx[3]}set mode(e){this.$$set({mode:e}),m()}get value(){return this.$$.ctx[4]}set value(e){this.$$set({value:e}),m()}get source(){return this.$$.ctx[5]}set source(e){this.$$set({source:e}),m()}get label(){return this.$$.ctx[6]}set label(e){this.$$set({label:e}),m()}get root(){return this.$$.ctx[18]}set root(e){this.$$set({root:e}),m()}get show_label(){return this.$$.ctx[7]}set show_label(e){this.$$set({show_label:e}),m()}get root_url(){return this.$$.ctx[19]}set root_url(e){this.$$set({root_url:e}),m()}get container(){return this.$$.ctx[8]}set container(e){this.$$set({container:e}),m()}get scale(){return this.$$.ctx[9]}set scale(e){this.$$set({scale:e}),m()}get min_width(){return this.$$.ctx[10]}set min_width(e){this.$$set({min_width:e}),m()}get loading_status(){return this.$$.ctx[11]}set loading_status(e){this.$$set({loading_status:e}),m()}get autoplay(){return this.$$.ctx[12]}set autoplay(e){this.$$set({autoplay:e}),m()}get show_download_button(){return this.$$.ctx[13]}set show_download_button(e){this.$$set({show_download_button:e}),m()}get show_share_button(){return this.$$.ctx[14]}set show_share_button(e){this.$$set({show_share_button:e}),m()}get gradio(){return this.$$.ctx[15]}set gradio(e){this.$$set({gradio:e}),m()}}const Pe=Ie;export{Pe as default};
//# sourceMappingURL=index-7f34c64b.js.map
