import{ag as x,V as y,ah as Rt,ai as Ht,g as lt,aj as Ot,af as F,Q as T,ad as $t,$ as Bt,ak as Ft,al as ut,am as Kt,L as Vt,an as pt,K as qt,ao as H,ap as Ut,aq as zt,ar as dt,as as mt,at as O,au as Wt,a4 as jt,a6 as Gt,H as Qt,av as Xt,aw as Q,ax as X,G as Jt,j as Yt}from"./framework.f98c6945.js";const Zt="http://www.w3.org/2000/svg",S=typeof document!="undefined"?document:null,J=S&&S.createElement("template"),kt={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const o=e?S.createElementNS(Zt,t):S.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:t=>S.createTextNode(t),createComment:t=>S.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>S.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,o,r){const i=n?n.previousSibling:e.lastChild;if(o&&(o===r||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{J.innerHTML=s?`<svg>${t}</svg>`:t;const a=J.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function te(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ee(t,e,n){const s=t.style,o=y(n);if(n&&!o){for(const r in n)$(s,r,n[r]);if(e&&!y(e))for(const r in e)n[r]==null&&$(s,r,"")}else{const r=s.display;o?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Y=/\s*!important$/;function $(t,e,n){if(T(n))n.forEach(s=>$(t,e,s));else if(e.startsWith("--"))t.setProperty(e,n);else{const s=ne(t,e);Y.test(n)?t.setProperty(F(s),n.replace(Y,""),"important"):t[s]=n}}const Z=["Webkit","Moz","ms"],D={};function ne(t,e){const n=D[e];if(n)return n;let s=$t(e);if(s!=="filter"&&s in t)return D[e]=s;s=Bt(s);for(let o=0;o<Z.length;o++){const r=Z[o]+s;if(r in t)return D[e]=r}return e}const k="http://www.w3.org/1999/xlink";function se(t,e,n,s,o){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(k,e.slice(6,e.length)):t.setAttributeNS(k,e,n);else{const r=Ft(e);n==null||r&&!ut(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function oe(t,e,n,s,o,r,i){if(e==="innerHTML"||e==="textContent"){s&&i(s,o,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=ut(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let P=Date.now,gt=!1;if(typeof window!="undefined"){P()>document.createEvent("Event").timeStamp&&(P=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);gt=!!(t&&Number(t[1])<=53)}let B=0;const re=Promise.resolve(),ie=()=>{B=0},ae=()=>B||(re.then(ie),B=P());function v(t,e,n,s){t.addEventListener(e,n,s)}function ce(t,e,n,s){t.removeEventListener(e,n,s)}function fe(t,e,n,s,o=null){const r=t._vei||(t._vei={}),i=r[e];if(s&&i)i.value=s;else{const[a,l]=le(e);if(s){const f=r[e]=ue(s,o);v(t,a,f,l)}else i&&(ce(t,a,i,l),r[e]=void 0)}}const tt=/(?:Once|Passive|Capture)$/;function le(t){let e;if(tt.test(t)){e={};let n;for(;n=t.match(tt);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[F(t.slice(2)),e]}function ue(t,e){const n=s=>{const o=s.timeStamp||P();(gt||o>=n.attached-1)&&Kt(pe(s,n.value),e,5,[s])};return n.value=t,n.attached=ae(),n}function pe(t,e){if(T(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>o=>!o._stopped&&s&&s(o))}else return e}const et=/^on[a-z]/,de=(t,e,n,s,o=!1,r,i,a,l)=>{e==="class"?te(t,s,o):e==="style"?ee(t,n,s):Rt(e)?Ht(e)||fe(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):me(t,e,s,o))?oe(t,e,s,r,i,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),se(t,e,s,o))};function me(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&et.test(e)&&lt(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||et.test(e)&&y(n)?!1:e in t}const h="transition",N="animation",ht=(t,{slots:e})=>Vt(pt,Ct(t),e);ht.displayName="Transition";const vt={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ge=ht.props=x({},pt.props,vt),b=(t,e=[])=>{T(t)?t.forEach(n=>n(...e)):t&&t(...e)},nt=t=>t?T(t)?t.some(e=>e.length>1):t.length>1:!1;function Ct(t){const e={};for(const c in t)c in vt||(e[c]=t[c]);if(t.css===!1)return e;const{name:n="v",type:s,duration:o,enterFromClass:r=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:f=i,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,A=he(o),Lt=A&&A[0],yt=A&&A[1],{onBeforeEnter:K,onEnter:V,onEnterCancelled:q,onLeave:U,onLeaveCancelled:Pt,onBeforeAppear:xt=K,onAppear:It=V,onAppearCancelled:Dt=q}=e,I=(c,m,C)=>{E(c,m?u:a),E(c,m?f:i),C&&C()},z=(c,m)=>{E(c,_),E(c,p),m&&m()},W=c=>(m,C)=>{const j=c?It:V,G=()=>I(m,c,C);b(j,[m,G]),st(()=>{E(m,c?l:r),g(m,c?u:a),nt(j)||ot(m,s,Lt,G)})};return x(e,{onBeforeEnter(c){b(K,[c]),g(c,r),g(c,i)},onBeforeAppear(c){b(xt,[c]),g(c,l),g(c,f)},onEnter:W(!1),onAppear:W(!0),onLeave(c,m){const C=()=>z(c,m);g(c,d),Et(),g(c,p),st(()=>{E(c,d),g(c,_),nt(U)||ot(c,s,yt,C)}),b(U,[c,C])},onEnterCancelled(c){I(c,!1),b(q,[c])},onAppearCancelled(c){I(c,!0),b(Dt,[c])},onLeaveCancelled(c){z(c),b(Pt,[c])}})}function he(t){if(t==null)return null;if(qt(t))return[R(t.enter),R(t.leave)];{const e=R(t);return[e,e]}}function R(t){return H(t)}function g(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function E(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function st(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ve=0;function ot(t,e,n,s){const o=t._endId=++ve,r=()=>{o===t._endId&&s()};if(n)return setTimeout(r,n);const{type:i,timeout:a,propCount:l}=bt(t,e);if(!i)return s();const f=i+"end";let u=0;const d=()=>{t.removeEventListener(f,p),r()},p=_=>{_.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(f,p)}function bt(t,e){const n=window.getComputedStyle(t),s=A=>(n[A]||"").split(", "),o=s(h+"Delay"),r=s(h+"Duration"),i=rt(o,r),a=s(N+"Delay"),l=s(N+"Duration"),f=rt(a,l);let u=null,d=0,p=0;e===h?i>0&&(u=h,d=i,p=r.length):e===N?f>0&&(u=N,d=f,p=l.length):(d=Math.max(i,f),u=d>0?i>f?h:N:null,p=u?u===h?r.length:l.length:0);const _=u===h&&/\b(transform|all)(,|$)/.test(n[h+"Property"]);return{type:u,timeout:d,propCount:p,hasTransform:_}}function rt(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>it(n)+it(t[s])))}function it(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Et(){return document.body.offsetHeight}const St=new WeakMap,Tt=new WeakMap,Ce={name:"TransitionGroup",props:x({},ge,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Yt(),s=Wt();let o,r;return jt(()=>{if(!o.length)return;const i=t.moveClass||`${t.name||"v"}-move`;if(!Te(o[0].el,n.vnode.el,i))return;o.forEach(be),o.forEach(Ee);const a=o.filter(Se);Et(),a.forEach(l=>{const f=l.el,u=f.style;g(f,i),u.transform=u.webkitTransform=u.transitionDuration="";const d=f._moveCb=p=>{p&&p.target!==f||(!p||/transform$/.test(p.propertyName))&&(f.removeEventListener("transitionend",d),f._moveCb=null,E(f,i))};f.addEventListener("transitionend",d)})}),()=>{const i=Gt(t),a=Ct(i);let l=i.tag||Qt;o=r,r=e.default?Xt(e.default()):[];for(let f=0;f<r.length;f++){const u=r[f];u.key!=null&&Q(u,X(u,a,s,n))}if(o)for(let f=0;f<o.length;f++){const u=o[f];Q(u,X(u,a,s,n)),St.set(u,u.el.getBoundingClientRect())}return Jt(l,null,r)}}},Pe=Ce;function be(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function Ee(t){Tt.set(t,t.el.getBoundingClientRect())}function Se(t){const e=St.get(t),n=Tt.get(t),s=e.left-n.left,o=e.top-n.top;if(s||o){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${o}px)`,r.transitionDuration="0s",t}}function Te(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(i=>{i.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(i=>i&&s.classList.add(i)),s.style.display="none";const o=e.nodeType===1?e:e.parentNode;o.appendChild(s);const{hasTransform:r}=bt(s);return o.removeChild(s),r}const w=t=>{const e=t.props["onUpdate:modelValue"];return T(e)?n=>Ut(e,n):e};function _e(t){t.target.composing=!0}function at(t){const e=t.target;e.composing&&(e.composing=!1,Ae(e,"input"))}function Ae(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const xe={created(t,{modifiers:{lazy:e,trim:n,number:s}},o){t._assign=w(o);const r=s||o.props&&o.props.type==="number";v(t,e?"change":"input",i=>{if(i.target.composing)return;let a=t.value;n?a=a.trim():r&&(a=H(a)),t._assign(a)}),n&&v(t,"change",()=>{t.value=t.value.trim()}),e||(v(t,"compositionstart",_e),v(t,"compositionend",at),v(t,"change",at))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:o}},r){if(t._assign=w(r),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(o||t.type==="number")&&H(t.value)===e))return;const i=e==null?"":e;t.value!==i&&(t.value=i)}},Ie={deep:!0,created(t,e,n){t._assign=w(n),v(t,"change",()=>{const s=t._modelValue,o=_t(t),r=t.checked,i=t._assign;if(T(s)){const a=dt(s,o),l=a!==-1;if(r&&!l)i(s.concat(o));else if(!r&&l){const f=[...s];f.splice(a,1),i(f)}}else if(mt(s)){const a=new Set(s);r?a.add(o):a.delete(o),i(a)}else i(At(t,r))})},mounted:ct,beforeUpdate(t,e,n){t._assign=w(n),ct(t,e,n)}};function ct(t,{value:e,oldValue:n},s){t._modelValue=e,T(e)?t.checked=dt(e,s.props.value)>-1:mt(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=O(e,At(t,!0)))}const De={created(t,{value:e},n){t.checked=O(e,n.props.value),t._assign=w(n),v(t,"change",()=>{t._assign(_t(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=w(s),e!==n&&(t.checked=O(e,s.props.value))}};function _t(t){return"_value"in t?t._value:t.value}function At(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const we=["ctrl","shift","alt","meta"],Ne={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>we.some(n=>t[`${n}Key`]&&!e.includes(n))},Re=(t,e)=>(n,...s)=>{for(let o=0;o<e.length;o++){const r=Ne[e[o]];if(r&&r(n,e))return}return t(n,...s)},Me={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},He=(t,e)=>n=>{if(!("key"in n))return;const s=F(n.key);if(e.some(o=>o===s||Me[o]===s))return t(n)},Oe={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):M(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),M(t,!0),s.enter(t)):s.leave(t,()=>{M(t,!1)}):M(t,e))},beforeUnmount(t,{value:e}){M(t,e)}};function M(t,e){t.style.display=e?t._vod:"none"}const wt=x({patchProp:de},kt);let L,ft=!1;function Nt(){return L||(L=zt(wt))}function Le(){return L=ft?L:Ot(wt),ft=!0,L}const $e=(...t)=>{Nt().render(...t)},Be=(...t)=>{const e=Nt().createApp(...t),{mount:n}=e;return e.mount=s=>{const o=Mt(s);if(!o)return;const r=e._component;!lt(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.innerHTML="";const i=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},e},Fe=(...t)=>{const e=Le().createApp(...t),{mount:n}=e;return e.mount=s=>{const o=Mt(s);if(o)return n(o,!0,o instanceof SVGElement)},e};function Mt(t){return y(t)?document.querySelector(t):t}export{ht as T,Re as a,Ie as b,De as c,xe as d,Pe as e,Fe as f,Be as g,$e as r,Oe as v,He as w};