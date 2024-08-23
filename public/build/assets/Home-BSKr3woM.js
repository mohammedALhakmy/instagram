import{j as ce,k as c,l as I,p as O,m as Ne,q as Ve,s as Pe,h as R,v as se,x as Ae,y as _,z as b,F as Z,A as Be,o as P,f as Y,a as L,u as A,w as B,c as Te,B as G,g as Re,C as q,Z as je,b as p,D as Ce,i as Oe,t as D,d as $e}from"./app-B8o5NAov.js";import{_ as ze,a as Ue,D as Fe,b as Xe}from"./MainLayout-Dc_XR2o0.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";/**
 * Vue 3 Carousel 0.3.3
 * (c) 2024
 * @license MIT
 */const g={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},Le={itemsToShow:{default:g.itemsToShow,type:Number},itemsToScroll:{default:g.itemsToScroll,type:Number},wrapAround:{default:g.wrapAround,type:Boolean},throttle:{default:g.throttle,type:Number},snapAlign:{default:g.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:g.transition,type:Number},breakpoints:{default:g.breakpoints,type:Object},autoplay:{default:g.autoplay,type:Number},pauseAutoplayOnHover:{default:g.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:g.mouseDrag,type:Boolean},touchDrag:{default:g.touchDrag,type:Boolean},dir:{default:g.dir,validator(t){return["rtl","ltr"].includes(t)}},i18n:{default:g.i18n,type:Object},settings:{default(){return{}},type:Object}};function He({config:t,slidesCount:l}){const{snapAlign:e,wrapAround:r,itemsToShow:a=1}=t;if(r)return Math.max(l-1,0);let u;switch(e){case"start":u=l-a;break;case"end":u=l-1;break;case"center":case"center-odd":u=l-Math.ceil((a-.5)/2);break;case"center-even":u=l-Math.ceil(a/2);break;default:u=0;break}return Math.max(u,0)}function We({config:t,slidesCount:l}){const{wrapAround:e,snapAlign:r,itemsToShow:a=1}=t;let u=0;if(e||a>l)return u;switch(r){case"start":u=0;break;case"end":u=a-1;break;case"center":case"center-odd":u=Math.floor((a-1)/2);break;case"center-even":u=Math.floor((a-2)/2);break;default:u=0;break}return u}function ae({val:t,max:l,min:e}){return l<e?t:Math.min(Math.max(t,e),l)}function Ye({config:t,currentSlide:l,slidesCount:e}){const{snapAlign:r,wrapAround:a,itemsToShow:u=1}=t;let f=l;switch(r){case"center":case"center-odd":f-=(u-1)/2;break;case"center-even":f-=(u-2)/2;break;case"end":f-=u-1;break}return a?f:ae({val:f,max:e-u,min:0})}function Me(t){return t?t.reduce((l,e)=>{var r;return e.type===Z?[...l,...Me(e.children)]:((r=e.type)===null||r===void 0?void 0:r.name)==="CarouselSlide"?[...l,e]:l},[]):[]}function re({val:t,max:l,min:e=0}){return t>l?re({val:t-(l+1),max:l,min:e}):t<e?re({val:t+(l+1),max:l,min:e}):t}function Ge(t,l){let e;return l?function(...r){const a=this;e||(t.apply(a,r),e=!0,setTimeout(()=>e=!1,l))}:t}function qe(t,l){let e;return function(...r){e&&clearTimeout(e),e=setTimeout(()=>{t(...r),e=null},l)}}function Ze(t="",l={}){return Object.entries(l).reduce((e,[r,a])=>e.replace(`{${r}}`,String(a)),t)}var Je=ce({name:"ARIA",setup(){const t=b("config",I(Object.assign({},g))),l=b("currentSlide",c(0)),e=b("slidesCount",c(0));return()=>_("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Ze(t.i18n.itemXofY,{currentSlide:l.value+1,slidesCount:e.value}))}}),Ke=ce({name:"Carousel",props:Le,setup(t,{slots:l,emit:e,expose:r}){var a;const u=c(null),f=c([]),S=c(0),v=c(0),s=I(Object.assign({},g));let h=Object.assign({},g),y;const n=c((a=t.modelValue)!==null&&a!==void 0?a:0),d=c(0),o=c(0),w=c(0),T=c(0);let V,J;O("config",s),O("slidesCount",v),O("currentSlide",n),O("maxSlide",w),O("minSlide",T),O("slideWidth",S);function K(){y=Object.assign({},t.breakpoints),h=Object.assign(Object.assign(Object.assign({},h),t),{i18n:Object.assign(Object.assign({},h.i18n),t.i18n),breakpoints:void 0}),ve(h)}function z(){if(!y||!Object.keys(y).length)return;const i=Object.keys(y).map(m=>Number(m)).sort((m,C)=>+C-+m);let x=Object.assign({},h);i.some(m=>{const C=window.matchMedia(`(min-width: ${m}px)`).matches;return C&&(x=Object.assign(Object.assign({},x),y[m])),C}),ve(x)}function ve(i){Object.entries(i).forEach(([x,m])=>s[x]=m)}const fe=qe(()=>{z(),U(),j()},16);function j(){if(!u.value)return;const i=u.value.getBoundingClientRect();S.value=i.width/s.itemsToShow}function U(){v.value<=0||(o.value=Math.ceil((v.value-1)/2),w.value=He({config:s,slidesCount:v.value}),T.value=We({config:s,slidesCount:v.value}),s.wrapAround||(n.value=ae({val:n.value,max:w.value,min:T.value})))}Ne(()=>{Ve(()=>j()),setTimeout(()=>j(),1e3),z(),he(),window.addEventListener("resize",fe,{passive:!0}),e("init")}),Pe(()=>{J&&clearTimeout(J),V&&clearInterval(V),window.removeEventListener("resize",fe,{passive:!0})});let k=!1;const F={x:0,y:0},X={x:0,y:0},N=I({x:0,y:0}),H=c(!1),Q=c(!1),Ee=()=>{H.value=!0},De=()=>{H.value=!1};function me(i){["INPUT","TEXTAREA","SELECT"].includes(i.target.tagName)||(k=i.type==="touchstart",k||i.preventDefault(),!(!k&&i.button!==0||M.value)&&(F.x=k?i.touches[0].clientX:i.clientX,F.y=k?i.touches[0].clientY:i.clientY,document.addEventListener(k?"touchmove":"mousemove",pe,!0),document.addEventListener(k?"touchend":"mouseup",ge,!0)))}const pe=Ge(i=>{Q.value=!0,X.x=k?i.touches[0].clientX:i.clientX,X.y=k?i.touches[0].clientY:i.clientY;const x=X.x-F.x,m=X.y-F.y;N.y=m,N.x=x},s.throttle);function ge(){const i=s.dir==="rtl"?-1:1,x=Math.sign(N.x)*.4,m=Math.round(N.x/S.value+x)*i;if(m&&!k){const C=ke=>{window.removeEventListener("click",C,!0)};window.addEventListener("click",C,!0)}E(n.value-m),N.x=0,N.y=0,Q.value=!1,document.removeEventListener(k?"touchmove":"mousemove",pe,!0),document.removeEventListener(k?"touchend":"mouseup",ge,!0)}function he(){!s.autoplay||s.autoplay<=0||(V=setInterval(()=>{s.pauseAutoplayOnHover&&H.value||W()},s.autoplay))}function xe(){V&&(clearInterval(V),V=null),he()}const M=c(!1);function E(i){const x=s.wrapAround?i:ae({val:i,max:w.value,min:T.value});n.value===x||M.value||(e("slide-start",{slidingToIndex:i,currentSlideIndex:n.value,prevSlideIndex:d.value,slidesCount:v.value}),M.value=!0,d.value=n.value,n.value=x,J=setTimeout(()=>{if(s.wrapAround){const m=re({val:x,max:w.value,min:0});m!==n.value&&(n.value=m,e("loop",{currentSlideIndex:n.value,slidingToIndex:i}))}e("update:modelValue",n.value),e("slide-end",{currentSlideIndex:n.value,prevSlideIndex:d.value,slidesCount:v.value}),M.value=!1,xe()},s.transition))}function W(){E(n.value+s.itemsToScroll)}function ee(){E(n.value-s.itemsToScroll)}const we={slideTo:E,next:W,prev:ee};O("nav",we),O("isSliding",M);const Se=R(()=>Ye({config:s,currentSlide:n.value,slidesCount:v.value}));O("slidesToScroll",Se);const Ie=R(()=>{const i=s.dir==="rtl"?-1:1,x=Se.value*S.value*i;return{transform:`translateX(${N.x-x}px)`,transition:`${M.value?s.transition:0}ms`,margin:s.wrapAround?`0 -${v.value*S.value}px`:"",width:"100%"}});function be(){K(),z(),U(),j(),xe()}Object.keys(Le).forEach(i=>{["modelValue"].includes(i)||se(()=>t[i],be)}),se(()=>t.modelValue,i=>{i!==n.value&&E(Number(i))}),se(v,U),e("before-init"),K();const _e={config:s,slidesCount:v,slideWidth:S,next:W,prev:ee,slideTo:E,currentSlide:n,maxSlide:w,minSlide:T,middleSlide:o};r({updateBreakpointsConfigs:z,updateSlidesData:U,updateSlideWidth:j,initDefaultConfigs:K,restartCarousel:be,slideTo:E,next:W,prev:ee,nav:we,data:_e});const te=l.default||l.slides,ne=l.addons,ye=I(_e);return()=>{const i=Me(te==null?void 0:te(ye)),x=(ne==null?void 0:ne(ye))||[];i.forEach((le,ie)=>le.props.index=ie);let m=i;if(s.wrapAround){const le=i.map((oe,$)=>Ae(oe,{index:-i.length+$,isClone:!0,key:`clone-before-${$}`})),ie=i.map((oe,$)=>Ae(oe,{index:i.length+$,isClone:!0,key:`clone-after-${$}`}));m=[...le,...i,...ie]}f.value=i,v.value=Math.max(i.length,1);const C=_("ol",{class:"carousel__track",style:Ie.value,onMousedownCapture:s.mouseDrag?me:null,onTouchstartPassiveCapture:s.touchDrag?me:null},m),ke=_("div",{class:"carousel__viewport"},C);return _("section",{ref:u,class:{carousel:!0,"is-sliding":M.value,"is-dragging":Q.value,"is-hover":H.value,"carousel--rtl":s.dir==="rtl"},dir:s.dir,"aria-label":s.i18n.ariaGallery,tabindex:"0",onMouseenter:Ee,onMouseleave:De},[ke,x,_(Je)])}}}),ue;(function(t){t.arrowUp="arrowUp",t.arrowDown="arrowDown",t.arrowRight="arrowRight",t.arrowLeft="arrowLeft"})(ue||(ue={}));const Qe={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function et(t){return t in ue}const de=t=>{const l=b("config",I(Object.assign({},g))),e=String(t.name),r=`icon${e.charAt(0).toUpperCase()+e.slice(1)}`;if(!e||typeof e!="string"||!et(e))return;const a=Qe[e],u=_("path",{d:a}),f=l.i18n[r]||t.title||e,S=_("title",f);return _("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":f},[S,u])};de.props={name:String,title:String};const tt=(t,{slots:l,attrs:e})=>{const{next:r,prev:a}=l||{},u=b("config",I(Object.assign({},g))),f=b("maxSlide",c(1)),S=b("minSlide",c(1)),v=b("currentSlide",c(1)),s=b("nav",{}),{dir:h,wrapAround:y,i18n:n}=u,d=h==="rtl",o=_("button",{type:"button",class:["carousel__prev",!y&&v.value<=S.value&&"carousel__prev--disabled",e==null?void 0:e.class],"aria-label":n.ariaPreviousSlide,onClick:s.prev},(a==null?void 0:a())||_(de,{name:d?"arrowRight":"arrowLeft"})),w=_("button",{type:"button",class:["carousel__next",!y&&v.value>=f.value&&"carousel__next--disabled",e==null?void 0:e.class],"aria-label":n.ariaNextSlide,onClick:s.next},(r==null?void 0:r())||_(de,{name:d?"arrowLeft":"arrowRight"}));return[o,w]};var nt=ce({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(t,{slots:l}){const e=b("config",I(Object.assign({},g))),r=b("currentSlide",c(0)),a=b("slidesToScroll",c(0)),u=b("isSliding",c(!1)),f=R(()=>t.index===r.value),S=R(()=>t.index===r.value-1),v=R(()=>t.index===r.value+1),s=R(()=>{const h=Math.floor(a.value),y=Math.ceil(a.value+e.itemsToShow-1);return t.index>=h&&t.index<=y});return()=>{var h;return _("li",{style:{width:`${100/e.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":t.isClone,"carousel__slide--visible":s.value,"carousel__slide--active":f.value,"carousel__slide--prev":S.value,"carousel__slide--next":v.value,"carousel__slide--sliding":u.value},"aria-hidden":!s.value},(h=l.default)===null||h===void 0?void 0:h.call(l,{isActive:f.value,isClone:t.isClone,isPrev:S.value,isNext:v.value,isSliding:u.value,isVisible:s.value}))}}});const lt={class:"mx-auto lg:pl-0 md:pl-[80px] pl-0"},it=p("div",{class:"absolute z-[-1] -top-[5px] left-[4px] rounded-full rotate-45 w-[64px] h-[64px] contrast-[1.3] bg-gradient-to-t from-yellow-300 to-purple-500 via-red-500"},[p("div",{class:"rounded-full ml-[3px] mt-[3px] w-[58px] h-[58px] bg-white"})],-1),ot=["src"],st={class:"text-xs mt-2 w-[60px] truncate text-ellipsis overflow-hidden"},at={class:"flex items-center justify-between py-2"},rt={class:"flex items-center"},ut=["src"],dt={class:"ml-4 font-extrabold text-[15px]"},ct={class:"flex items-center text-[15px] text-gray-500"},vt=p("span",{class:"-mt-5 ml-2 mr-[5px] text-[35px]"},".",-1),ft={class:"bg-black rounded-lg w-full min-h-[300px] flex items-center"},mt=["src"],pt={class:"text-black font-extrabold py-1"},gt={class:"text-black font-extrabold"},ht=["onClick"],xt=p("div",{class:"pb-20"},null,-1),_t={__name:"Home",props:{posts:Object,allUser:Object},setup(t){let l=c(window.innerWidth),e=c(0),r=c(null),a=c(!1);const u=t,{posts:f,allUsers:S}=Be(u);Ne(()=>{window.addEventListener("resize",()=>{l.value=window.innerWidth})}),c(null);const v=n=>{q.post("/comments",{post_id:n.post.id,user_id:n.user.id,comment:n.comment},{onFinish:()=>h(n)})},s=n=>{let d=!1,o=null;for(let w=0;w<n.post.likes.length;w++){const T=n.post.likes[w];T.user_id===n.user.id&&T.post_id===n.post.id&&(d=!0,o=T.id)}d?q.delete("/likes/"+o,{onFinish:()=>h(n)}):q.post("/likes",{post_id:n.post.id},{onFinish:()=>h(n)})},h=n=>{for(let d=0;d<f.value.data.length;d++){const o=f.value.data[d];o.id===n.post.id&&(r.value=o)}},y=n=>{let d="";n.deleteType==="Post"?d=`/posts/${n.id}`:d=`/comments/${n.id}`,q.delete(d,{onFinish:()=>h(n),onError:o=>{console.log("Error deleting item:",o)}}),n.deleteType==="Post"&&(a.value=!1)};return(n,d)=>(P(),Y(Z,null,[L(A(je),{title:"Instagram"}),L(ze,null,{default:B(()=>[p("div",lt,[L(A(Ke),{modelValue:A(e),"onUpdate:modelValue":d[0]||(d[0]=o=>G(e)?e.value=o:e=o),class:"max-w-[700px] mx-auto","items-to-show":n.wWidth>=768?8:6,"items-to-scroll":4,"wrap-around":!0,transition:500,snapAlign:"start"},{addons:B(()=>[L(A(tt))]),default:B(()=>[(P(!0),Y(Z,null,Ce(t.allUser,o=>(P(),Te(A(nt),{key:o},{default:B(()=>[L(A(Oe),{href:n.route("users.show",{id:o.id}),class:"relative mx-auto text-center mt-4 px-2 cursor-pointer"},{default:B(()=>[it,p("img",{class:"rounded-full w-[56px] h-[56px] -mt-[1px]",src:o.file},null,8,ot),p("div",st,D(o.name),1)]),_:2},1032,["href"])]),_:2},1024))),128))]),_:1},8,["modelValue","items-to-show"]),(P(!0),Y(Z,null,Ce(A(f).data,o=>(P(),Y("div",{id:"Posts",class:"px-4 max-w-[600px] mx-auto mt-10",key:o},[p("div",at,[p("div",rt,[L(A(Oe),{class:"flex items-center",href:n.route("users.show",{id:o.user.id})},{default:B(()=>[p("img",{src:o.user.file,class:"rounded-full w-[38px] h-[38px]",alt:""},null,8,ut),p("div",dt,D(o.user.name),1)]),_:2},1032,["href"]),p("div",ct,[vt,p("div",null,D(o.created_at),1)])]),L(Fe,{class:"cursor-pointer",size:27})]),p("div",ft,[p("img",{class:"mx-auto w-full",src:o.file,alt:""},null,8,mt)]),L(Xe,{post:o,onLike:d[1]||(d[1]=w=>s(w))},null,8,["post"]),p("div",pt,D(o.likes.length)+" likes",1),p("div",null,[p("span",gt,D(o.user.name),1),$e(" "+D(o.text),1)]),p("button",{onClick:w=>{G(r)?r.value=o:r=o,G(a)?a.value=!0:a=!0},class:"text-gray-500 font-extrabold py-1"}," View all "+D(o.comments.length)+" comments ",9,ht)]))),128)),xt])]),_:1}),A(a)?(P(),Te(Ue,{key:0,post:A(r),onAddComment:d[2]||(d[2]=o=>v(o)),onUpdateLike:d[3]||(d[3]=o=>n.updateComment(o)),onDeleteSelected:d[4]||(d[4]=o=>y(o)),onCloseOverlay:d[5]||(d[5]=o=>G(a)?a.value=!1:a=!1)},null,8,["post"])):Re("",!0)],64))}};export{_t as default};
