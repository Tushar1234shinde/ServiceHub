function Dy(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var No=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Iy(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var r=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,r.get?r:{enumerable:!0,get:function(){return t[i]}})}),n}var Pv={exports:{}},Rc={},Lv={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var So=Symbol.for("react.element"),Oy=Symbol.for("react.portal"),Uy=Symbol.for("react.fragment"),Fy=Symbol.for("react.strict_mode"),ky=Symbol.for("react.profiler"),zy=Symbol.for("react.provider"),By=Symbol.for("react.context"),Vy=Symbol.for("react.forward_ref"),Hy=Symbol.for("react.suspense"),Gy=Symbol.for("react.memo"),jy=Symbol.for("react.lazy"),qp=Symbol.iterator;function Wy(t){return t===null||typeof t!="object"?null:(t=qp&&t[qp]||t["@@iterator"],typeof t=="function"?t:null)}var Nv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dv=Object.assign,Iv={};function oa(t,e,n){this.props=t,this.context=e,this.refs=Iv,this.updater=n||Nv}oa.prototype.isReactComponent={};oa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};oa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ov(){}Ov.prototype=oa.prototype;function wh(t,e,n){this.props=t,this.context=e,this.refs=Iv,this.updater=n||Nv}var Th=wh.prototype=new Ov;Th.constructor=wh;Dv(Th,oa.prototype);Th.isPureReactComponent=!0;var Yp=Array.isArray,Uv=Object.prototype.hasOwnProperty,bh={current:null},Fv={key:!0,ref:!0,__self:!0,__source:!0};function kv(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Uv.call(e,i)&&!Fv.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:So,type:t,key:s,ref:a,props:r,_owner:bh.current}}function Xy(t,e){return{$$typeof:So,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ch(t){return typeof t=="object"&&t!==null&&t.$$typeof===So}function $y(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Kp=/\/+/g;function ou(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$y(""+t.key):e.toString(36)}function El(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case So:case Oy:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+ou(a,0):i,Yp(r)?(n="",t!=null&&(n=t.replace(Kp,"$&/")+"/"),El(r,e,n,"",function(c){return c})):r!=null&&(Ch(r)&&(r=Xy(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Kp,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Yp(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+ou(s,o);a+=El(s,e,n,l,r)}else if(l=Wy(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+ou(s,o++),a+=El(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Do(t,e,n){if(t==null)return t;var i=[],r=0;return El(t,i,"","",function(s){return e.call(n,s,r++)}),i}function qy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var hn={current:null},wl={transition:null},Yy={ReactCurrentDispatcher:hn,ReactCurrentBatchConfig:wl,ReactCurrentOwner:bh};function zv(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:Do,forEach:function(t,e,n){Do(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Do(t,function(){e++}),e},toArray:function(t){return Do(t,function(e){return e})||[]},only:function(t){if(!Ch(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=oa;$e.Fragment=Uy;$e.Profiler=ky;$e.PureComponent=wh;$e.StrictMode=Fy;$e.Suspense=Hy;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yy;$e.act=zv;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Dv({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=bh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Uv.call(e,l)&&!Fv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:So,type:t.type,key:r,ref:s,props:i,_owner:a}};$e.createContext=function(t){return t={$$typeof:By,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zy,_context:t},t.Consumer=t};$e.createElement=kv;$e.createFactory=function(t){var e=kv.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:Vy,render:t}};$e.isValidElement=Ch;$e.lazy=function(t){return{$$typeof:jy,_payload:{_status:-1,_result:t},_init:qy}};$e.memo=function(t,e){return{$$typeof:Gy,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=wl.transition;wl.transition={};try{t()}finally{wl.transition=e}};$e.unstable_act=zv;$e.useCallback=function(t,e){return hn.current.useCallback(t,e)};$e.useContext=function(t){return hn.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return hn.current.useDeferredValue(t)};$e.useEffect=function(t,e){return hn.current.useEffect(t,e)};$e.useId=function(){return hn.current.useId()};$e.useImperativeHandle=function(t,e,n){return hn.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return hn.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return hn.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return hn.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return hn.current.useReducer(t,e,n)};$e.useRef=function(t){return hn.current.useRef(t)};$e.useState=function(t){return hn.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return hn.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return hn.current.useTransition()};$e.version="18.3.1";Lv.exports=$e;var $=Lv.exports;const vn=Rv($),Ky=Dy({__proto__:null,default:vn},[$]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zy=$,Jy=Symbol.for("react.element"),Qy=Symbol.for("react.fragment"),eS=Object.prototype.hasOwnProperty,tS=Zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nS={key:!0,ref:!0,__self:!0,__source:!0};function Bv(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)eS.call(e,i)&&!nS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Jy,type:t,key:s,ref:a,props:r,_owner:tS.current}}Rc.Fragment=Qy;Rc.jsx=Bv;Rc.jsxs=Bv;Pv.exports=Rc;var M=Pv.exports,Sd={},Vv={exports:{}},Dn={},Hv={exports:{}},Gv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,V){var K=I.length;I.push(V);e:for(;0<K;){var ie=K-1>>>1,F=I[ie];if(0<r(F,V))I[ie]=V,I[K]=F,K=ie;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var V=I[0],K=I.pop();if(K!==V){I[0]=K;e:for(var ie=0,F=I.length,pe=F>>>1;ie<pe;){var Ie=2*(ie+1)-1,nt=I[Ie],Q=Ie+1,ae=I[Q];if(0>r(nt,K))Q<F&&0>r(ae,nt)?(I[ie]=ae,I[Q]=K,ie=Q):(I[ie]=nt,I[Ie]=K,ie=Ie);else if(Q<F&&0>r(ae,K))I[ie]=ae,I[Q]=K,ie=Q;else break e}}return V}function r(I,V){var K=I.sortIndex-V.sortIndex;return K!==0?K:I.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,h=null,u=3,g=!1,v=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var V=n(c);V!==null;){if(V.callback===null)i(c);else if(V.startTime<=I)i(c),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(c)}}function S(I){if(y=!1,_(I),!v)if(n(l)!==null)v=!0,j(C);else{var V=n(c);V!==null&&L(S,V.startTime-I)}}function C(I,V){v=!1,y&&(y=!1,d(x),x=-1),g=!0;var K=u;try{for(_(V),h=n(l);h!==null&&(!(h.expirationTime>V)||I&&!R());){var ie=h.callback;if(typeof ie=="function"){h.callback=null,u=h.priorityLevel;var F=ie(h.expirationTime<=V);V=t.unstable_now(),typeof F=="function"?h.callback=F:h===n(l)&&i(l),_(V)}else i(l);h=n(l)}if(h!==null)var pe=!0;else{var Ie=n(c);Ie!==null&&L(S,Ie.startTime-V),pe=!1}return pe}finally{h=null,u=K,g=!1}}var b=!1,A=null,x=-1,w=5,N=-1;function R(){return!(t.unstable_now()-N<w)}function D(){if(A!==null){var I=t.unstable_now();N=I;var V=!0;try{V=A(!0,I)}finally{V?U():(b=!1,A=null)}}else b=!1}var U;if(typeof p=="function")U=function(){p(D)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,H=q.port2;q.port1.onmessage=D,U=function(){H.postMessage(null)}}else U=function(){m(D,0)};function j(I){A=I,b||(b=!0,U())}function L(I,V){x=m(function(){I(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,j(C))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(u){case 1:case 2:case 3:var V=3;break;default:V=u}var K=u;u=V;try{return I()}finally{u=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,V){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var K=u;u=I;try{return V()}finally{u=K}},t.unstable_scheduleCallback=function(I,V,K){var ie=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ie+K:ie):K=ie,I){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=K+F,I={id:f++,callback:V,priorityLevel:I,startTime:K,expirationTime:F,sortIndex:-1},K>ie?(I.sortIndex=K,e(c,I),n(l)===null&&I===n(c)&&(y?(d(x),x=-1):y=!0,L(S,K-ie))):(I.sortIndex=F,e(l,I),v||g||(v=!0,j(C))),I},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(I){var V=u;return function(){var K=u;u=V;try{return I.apply(this,arguments)}finally{u=K}}}})(Gv);Hv.exports=Gv;var iS=Hv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rS=$,Nn=iS;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jv=new Set,Ka={};function es(t,e){Gs(t,e),Gs(t+"Capture",e)}function Gs(t,e){for(Ka[t]=e,t=0;t<e.length;t++)jv.add(e[t])}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Md=Object.prototype.hasOwnProperty,sS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zp={},Jp={};function aS(t){return Md.call(Jp,t)?!0:Md.call(Zp,t)?!1:sS.test(t)?Jp[t]=!0:(Zp[t]=!0,!1)}function oS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function lS(t,e,n,i){if(e===null||typeof e>"u"||oS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Kt[t]=new pn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Kt[e]=new pn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Kt[t]=new pn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Kt[t]=new pn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Kt[t]=new pn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Kt[t]=new pn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Kt[t]=new pn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Kt[t]=new pn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Kt[t]=new pn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ah=/[\-:]([a-z])/g;function Rh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ah,Rh);Kt[e]=new pn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ah,Rh);Kt[e]=new pn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ah,Rh);Kt[e]=new pn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Kt[t]=new pn(t,1,!1,t.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Kt[t]=new pn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ph(t,e,n,i){var r=Kt.hasOwnProperty(e)?Kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(lS(e,n,r,i)&&(n=null),i||r===null?aS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Gi=rS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Io=Symbol.for("react.element"),ys=Symbol.for("react.portal"),Ss=Symbol.for("react.fragment"),Lh=Symbol.for("react.strict_mode"),Ed=Symbol.for("react.profiler"),Wv=Symbol.for("react.provider"),Xv=Symbol.for("react.context"),Nh=Symbol.for("react.forward_ref"),wd=Symbol.for("react.suspense"),Td=Symbol.for("react.suspense_list"),Dh=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),$v=Symbol.for("react.offscreen"),Qp=Symbol.iterator;function _a(t){return t===null||typeof t!="object"?null:(t=Qp&&t[Qp]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Object.assign,lu;function Da(t){if(lu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);lu=e&&e[1]||""}return`
`+lu+t}var cu=!1;function uu(t,e){if(!t||cu)return"";cu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{cu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Da(t):""}function cS(t){switch(t.tag){case 5:return Da(t.type);case 16:return Da("Lazy");case 13:return Da("Suspense");case 19:return Da("SuspenseList");case 0:case 2:case 15:return t=uu(t.type,!1),t;case 11:return t=uu(t.type.render,!1),t;case 1:return t=uu(t.type,!0),t;default:return""}}function bd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ss:return"Fragment";case ys:return"Portal";case Ed:return"Profiler";case Lh:return"StrictMode";case wd:return"Suspense";case Td:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xv:return(t.displayName||"Context")+".Consumer";case Wv:return(t._context.displayName||"Context")+".Provider";case Nh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dh:return e=t.displayName||null,e!==null?e:bd(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return bd(t(e))}catch{}}return null}function uS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bd(e);case 8:return e===Lh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dS(t){var e=qv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Oo(t){t._valueTracker||(t._valueTracker=dS(t))}function Yv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=qv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cd(t,e){var n=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function em(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Kv(t,e){e=e.checked,e!=null&&Ph(t,"checked",e,!1)}function Ad(t,e){Kv(t,e);var n=yr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Rd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Rd(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Rd(t,e,n){(e!=="number"||Hl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ia=Array.isArray;function Ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Pd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function nm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Ia(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function Zv(t,e){var n=yr(e.value),i=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function im(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ld(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Uo,Qv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Uo=Uo||document.createElement("div"),Uo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Uo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Za(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fS=["Webkit","ms","Moz","O"];Object.keys(Va).forEach(function(t){fS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Va[e]=Va[t]})});function e0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Va.hasOwnProperty(t)&&Va[t]?(""+e).trim():e+"px"}function t0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=e0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var hS=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nd(t,e){if(e){if(hS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Dd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Id=null;function Ih(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Od=null,Is=null,Os=null;function rm(t){if(t=wo(t)){if(typeof Od!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Ic(e),Od(t.stateNode,t.type,e))}}function n0(t){Is?Os?Os.push(t):Os=[t]:Is=t}function i0(){if(Is){var t=Is,e=Os;if(Os=Is=null,rm(t),e)for(t=0;t<e.length;t++)rm(e[t])}}function r0(t,e){return t(e)}function s0(){}var du=!1;function a0(t,e,n){if(du)return t(e,n);du=!0;try{return r0(t,e,n)}finally{du=!1,(Is!==null||Os!==null)&&(s0(),i0())}}function Ja(t,e){var n=t.stateNode;if(n===null)return null;var i=Ic(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Ud=!1;if(Fi)try{var xa={};Object.defineProperty(xa,"passive",{get:function(){Ud=!0}}),window.addEventListener("test",xa,xa),window.removeEventListener("test",xa,xa)}catch{Ud=!1}function pS(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Ha=!1,Gl=null,jl=!1,Fd=null,mS={onError:function(t){Ha=!0,Gl=t}};function gS(t,e,n,i,r,s,a,o,l){Ha=!1,Gl=null,pS.apply(mS,arguments)}function vS(t,e,n,i,r,s,a,o,l){if(gS.apply(this,arguments),Ha){if(Ha){var c=Gl;Ha=!1,Gl=null}else throw Error(ne(198));jl||(jl=!0,Fd=c)}}function ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function o0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sm(t){if(ts(t)!==t)throw Error(ne(188))}function _S(t){var e=t.alternate;if(!e){if(e=ts(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return sm(r),t;if(s===i)return sm(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function l0(t){return t=_S(t),t!==null?c0(t):null}function c0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=c0(t);if(e!==null)return e;t=t.sibling}return null}var u0=Nn.unstable_scheduleCallback,am=Nn.unstable_cancelCallback,xS=Nn.unstable_shouldYield,yS=Nn.unstable_requestPaint,Nt=Nn.unstable_now,SS=Nn.unstable_getCurrentPriorityLevel,Oh=Nn.unstable_ImmediatePriority,d0=Nn.unstable_UserBlockingPriority,Wl=Nn.unstable_NormalPriority,MS=Nn.unstable_LowPriority,f0=Nn.unstable_IdlePriority,Pc=null,pi=null;function ES(t){if(pi&&typeof pi.onCommitFiberRoot=="function")try{pi.onCommitFiberRoot(Pc,t,void 0,(t.current.flags&128)===128)}catch{}}var ei=Math.clz32?Math.clz32:bS,wS=Math.log,TS=Math.LN2;function bS(t){return t>>>=0,t===0?32:31-(wS(t)/TS|0)|0}var Fo=64,ko=4194304;function Oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Oa(o):(s&=a,s!==0&&(i=Oa(s)))}else a=n&~r,a!==0?i=Oa(a):s!==0&&(i=Oa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ei(e),r=1<<n,i|=t[n],e&=~r;return i}function CS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function AS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ei(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=CS(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function kd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function h0(){var t=Fo;return Fo<<=1,!(Fo&4194240)&&(Fo=64),t}function fu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Mo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ei(e),t[e]=n}function RS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ei(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Uh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ei(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function p0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var m0,Fh,g0,v0,_0,zd=!1,zo=[],dr=null,fr=null,hr=null,Qa=new Map,eo=new Map,ir=[],PS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function om(t,e){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Qa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(e.pointerId)}}function ya(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=wo(e),e!==null&&Fh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function LS(t,e,n,i,r){switch(e){case"focusin":return dr=ya(dr,t,e,n,i,r),!0;case"dragenter":return fr=ya(fr,t,e,n,i,r),!0;case"mouseover":return hr=ya(hr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Qa.set(s,ya(Qa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,eo.set(s,ya(eo.get(s)||null,t,e,n,i,r)),!0}return!1}function x0(t){var e=Br(t.target);if(e!==null){var n=ts(e);if(n!==null){if(e=n.tag,e===13){if(e=o0(n),e!==null){t.blockedOn=e,_0(t.priority,function(){g0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Id=i,n.target.dispatchEvent(i),Id=null}else return e=wo(n),e!==null&&Fh(e),t.blockedOn=n,!1;e.shift()}return!0}function lm(t,e,n){Tl(t)&&n.delete(e)}function NS(){zd=!1,dr!==null&&Tl(dr)&&(dr=null),fr!==null&&Tl(fr)&&(fr=null),hr!==null&&Tl(hr)&&(hr=null),Qa.forEach(lm),eo.forEach(lm)}function Sa(t,e){t.blockedOn===e&&(t.blockedOn=null,zd||(zd=!0,Nn.unstable_scheduleCallback(Nn.unstable_NormalPriority,NS)))}function to(t){function e(r){return Sa(r,t)}if(0<zo.length){Sa(zo[0],t);for(var n=1;n<zo.length;n++){var i=zo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(dr!==null&&Sa(dr,t),fr!==null&&Sa(fr,t),hr!==null&&Sa(hr,t),Qa.forEach(e),eo.forEach(e),n=0;n<ir.length;n++)i=ir[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)x0(n),n.blockedOn===null&&ir.shift()}var Us=Gi.ReactCurrentBatchConfig,$l=!0;function DS(t,e,n,i){var r=lt,s=Us.transition;Us.transition=null;try{lt=1,kh(t,e,n,i)}finally{lt=r,Us.transition=s}}function IS(t,e,n,i){var r=lt,s=Us.transition;Us.transition=null;try{lt=4,kh(t,e,n,i)}finally{lt=r,Us.transition=s}}function kh(t,e,n,i){if($l){var r=Bd(t,e,n,i);if(r===null)Mu(t,e,i,ql,n),om(t,i);else if(LS(r,t,e,n,i))i.stopPropagation();else if(om(t,i),e&4&&-1<PS.indexOf(t)){for(;r!==null;){var s=wo(r);if(s!==null&&m0(s),s=Bd(t,e,n,i),s===null&&Mu(t,e,i,ql,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Mu(t,e,i,null,n)}}var ql=null;function Bd(t,e,n,i){if(ql=null,t=Ih(i),t=Br(t),t!==null)if(e=ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=o0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ql=t,null}function y0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(SS()){case Oh:return 1;case d0:return 4;case Wl:case MS:return 16;case f0:return 536870912;default:return 16}default:return 16}}var ar=null,zh=null,bl=null;function S0(){if(bl)return bl;var t,e=zh,n=e.length,i,r="value"in ar?ar.value:ar.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return bl=r.slice(t,1<i?1-i:void 0)}function Cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bo(){return!0}function cm(){return!1}function In(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bo:cm,this.isPropagationStopped=cm,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),e}var la={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bh=In(la),Eo=Tt({},la,{view:0,detail:0}),OS=In(Eo),hu,pu,Ma,Lc=Tt({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ma&&(Ma&&t.type==="mousemove"?(hu=t.screenX-Ma.screenX,pu=t.screenY-Ma.screenY):pu=hu=0,Ma=t),hu)},movementY:function(t){return"movementY"in t?t.movementY:pu}}),um=In(Lc),US=Tt({},Lc,{dataTransfer:0}),FS=In(US),kS=Tt({},Eo,{relatedTarget:0}),mu=In(kS),zS=Tt({},la,{animationName:0,elapsedTime:0,pseudoElement:0}),BS=In(zS),VS=Tt({},la,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),HS=In(VS),GS=Tt({},la,{data:0}),dm=In(GS),jS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},XS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $S(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=XS[t])?!!e[t]:!1}function Vh(){return $S}var qS=Tt({},Eo,{key:function(t){if(t.key){var e=jS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?WS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vh,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),YS=In(qS),KS=Tt({},Lc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fm=In(KS),ZS=Tt({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vh}),JS=In(ZS),QS=Tt({},la,{propertyName:0,elapsedTime:0,pseudoElement:0}),eM=In(QS),tM=Tt({},Lc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nM=In(tM),iM=[9,13,27,32],Hh=Fi&&"CompositionEvent"in window,Ga=null;Fi&&"documentMode"in document&&(Ga=document.documentMode);var rM=Fi&&"TextEvent"in window&&!Ga,M0=Fi&&(!Hh||Ga&&8<Ga&&11>=Ga),hm=" ",pm=!1;function E0(t,e){switch(t){case"keyup":return iM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function w0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ms=!1;function sM(t,e){switch(t){case"compositionend":return w0(e);case"keypress":return e.which!==32?null:(pm=!0,hm);case"textInput":return t=e.data,t===hm&&pm?null:t;default:return null}}function aM(t,e){if(Ms)return t==="compositionend"||!Hh&&E0(t,e)?(t=S0(),bl=zh=ar=null,Ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return M0&&e.locale!=="ko"?null:e.data;default:return null}}var oM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!oM[t.type]:e==="textarea"}function T0(t,e,n,i){n0(i),e=Yl(e,"onChange"),0<e.length&&(n=new Bh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ja=null,no=null;function lM(t){U0(t,0)}function Nc(t){var e=Ts(t);if(Yv(e))return t}function cM(t,e){if(t==="change")return e}var b0=!1;if(Fi){var gu;if(Fi){var vu="oninput"in document;if(!vu){var gm=document.createElement("div");gm.setAttribute("oninput","return;"),vu=typeof gm.oninput=="function"}gu=vu}else gu=!1;b0=gu&&(!document.documentMode||9<document.documentMode)}function vm(){ja&&(ja.detachEvent("onpropertychange",C0),no=ja=null)}function C0(t){if(t.propertyName==="value"&&Nc(no)){var e=[];T0(e,no,t,Ih(t)),a0(lM,e)}}function uM(t,e,n){t==="focusin"?(vm(),ja=e,no=n,ja.attachEvent("onpropertychange",C0)):t==="focusout"&&vm()}function dM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nc(no)}function fM(t,e){if(t==="click")return Nc(e)}function hM(t,e){if(t==="input"||t==="change")return Nc(e)}function pM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ii=typeof Object.is=="function"?Object.is:pM;function io(t,e){if(ii(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Md.call(e,r)||!ii(t[r],e[r]))return!1}return!0}function _m(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xm(t,e){var n=_m(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_m(n)}}function A0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?A0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function R0(){for(var t=window,e=Hl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Hl(t.document)}return e}function Gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mM(t){var e=R0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&A0(n.ownerDocument.documentElement,n)){if(i!==null&&Gh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=xm(n,s);var a=xm(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gM=Fi&&"documentMode"in document&&11>=document.documentMode,Es=null,Vd=null,Wa=null,Hd=!1;function ym(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hd||Es==null||Es!==Hl(i)||(i=Es,"selectionStart"in i&&Gh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wa&&io(Wa,i)||(Wa=i,i=Yl(Vd,"onSelect"),0<i.length&&(e=new Bh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Es)))}function Vo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},_u={},P0={};Fi&&(P0=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function Dc(t){if(_u[t])return _u[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in P0)return _u[t]=e[n];return t}var L0=Dc("animationend"),N0=Dc("animationiteration"),D0=Dc("animationstart"),I0=Dc("transitionend"),O0=new Map,Sm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(t,e){O0.set(t,e),es(e,[t])}for(var xu=0;xu<Sm.length;xu++){var yu=Sm[xu],vM=yu.toLowerCase(),_M=yu[0].toUpperCase()+yu.slice(1);Er(vM,"on"+_M)}Er(L0,"onAnimationEnd");Er(N0,"onAnimationIteration");Er(D0,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(I0,"onTransitionEnd");Gs("onMouseEnter",["mouseout","mouseover"]);Gs("onMouseLeave",["mouseout","mouseover"]);Gs("onPointerEnter",["pointerout","pointerover"]);Gs("onPointerLeave",["pointerout","pointerover"]);es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));es("onBeforeInput",["compositionend","keypress","textInput","paste"]);es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ua));function Mm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,vS(i,e,void 0,t),t.currentTarget=null}function U0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Mm(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Mm(r,o,c),s=l}}}if(jl)throw t=Fd,jl=!1,Fd=null,t}function gt(t,e){var n=e[$d];n===void 0&&(n=e[$d]=new Set);var i=t+"__bubble";n.has(i)||(F0(e,t,2,!1),n.add(i))}function Su(t,e,n){var i=0;e&&(i|=4),F0(n,t,i,e)}var Ho="_reactListening"+Math.random().toString(36).slice(2);function ro(t){if(!t[Ho]){t[Ho]=!0,jv.forEach(function(n){n!=="selectionchange"&&(xM.has(n)||Su(n,!1,t),Su(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ho]||(e[Ho]=!0,Su("selectionchange",!1,e))}}function F0(t,e,n,i){switch(y0(e)){case 1:var r=DS;break;case 4:r=IS;break;default:r=kh}n=r.bind(null,e,n,t),r=void 0,!Ud||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Mu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Br(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}a0(function(){var c=s,f=Ih(n),h=[];e:{var u=O0.get(t);if(u!==void 0){var g=Bh,v=t;switch(t){case"keypress":if(Cl(n)===0)break e;case"keydown":case"keyup":g=YS;break;case"focusin":v="focus",g=mu;break;case"focusout":v="blur",g=mu;break;case"beforeblur":case"afterblur":g=mu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=FS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=JS;break;case L0:case N0:case D0:g=BS;break;case I0:g=eM;break;case"scroll":g=OS;break;case"wheel":g=nM;break;case"copy":case"cut":case"paste":g=HS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=fm}var y=(e&4)!==0,m=!y&&t==="scroll",d=y?u!==null?u+"Capture":null:u;y=[];for(var p=c,_;p!==null;){_=p;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,d!==null&&(S=Ja(p,d),S!=null&&y.push(so(p,S,_)))),m)break;p=p.return}0<y.length&&(u=new g(u,v,null,n,f),h.push({event:u,listeners:y}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",u&&n!==Id&&(v=n.relatedTarget||n.fromElement)&&(Br(v)||v[ki]))break e;if((g||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?Br(v):null,v!==null&&(m=ts(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=c),g!==v)){if(y=um,S="onMouseLeave",d="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=fm,S="onPointerLeave",d="onPointerEnter",p="pointer"),m=g==null?u:Ts(g),_=v==null?u:Ts(v),u=new y(S,p+"leave",g,n,f),u.target=m,u.relatedTarget=_,S=null,Br(f)===c&&(y=new y(d,p+"enter",v,n,f),y.target=_,y.relatedTarget=m,S=y),m=S,g&&v)t:{for(y=g,d=v,p=0,_=y;_;_=ss(_))p++;for(_=0,S=d;S;S=ss(S))_++;for(;0<p-_;)y=ss(y),p--;for(;0<_-p;)d=ss(d),_--;for(;p--;){if(y===d||d!==null&&y===d.alternate)break t;y=ss(y),d=ss(d)}y=null}else y=null;g!==null&&Em(h,u,g,y,!1),v!==null&&m!==null&&Em(h,m,v,y,!0)}}e:{if(u=c?Ts(c):window,g=u.nodeName&&u.nodeName.toLowerCase(),g==="select"||g==="input"&&u.type==="file")var C=cM;else if(mm(u))if(b0)C=hM;else{C=dM;var b=uM}else(g=u.nodeName)&&g.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(C=fM);if(C&&(C=C(t,c))){T0(h,C,n,f);break e}b&&b(t,u,c),t==="focusout"&&(b=u._wrapperState)&&b.controlled&&u.type==="number"&&Rd(u,"number",u.value)}switch(b=c?Ts(c):window,t){case"focusin":(mm(b)||b.contentEditable==="true")&&(Es=b,Vd=c,Wa=null);break;case"focusout":Wa=Vd=Es=null;break;case"mousedown":Hd=!0;break;case"contextmenu":case"mouseup":case"dragend":Hd=!1,ym(h,n,f);break;case"selectionchange":if(gM)break;case"keydown":case"keyup":ym(h,n,f)}var A;if(Hh)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Ms?E0(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(M0&&n.locale!=="ko"&&(Ms||x!=="onCompositionStart"?x==="onCompositionEnd"&&Ms&&(A=S0()):(ar=f,zh="value"in ar?ar.value:ar.textContent,Ms=!0)),b=Yl(c,x),0<b.length&&(x=new dm(x,t,null,n,f),h.push({event:x,listeners:b}),A?x.data=A:(A=w0(n),A!==null&&(x.data=A)))),(A=rM?sM(t,n):aM(t,n))&&(c=Yl(c,"onBeforeInput"),0<c.length&&(f=new dm("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=A))}U0(h,e)})}function so(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ja(t,n),s!=null&&i.unshift(so(t,s,r)),s=Ja(t,e),s!=null&&i.push(so(t,s,r))),t=t.return}return i}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Em(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ja(n,s),l!=null&&a.unshift(so(n,l,o))):r||(l=Ja(n,s),l!=null&&a.push(so(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var yM=/\r\n?/g,SM=/\u0000|\uFFFD/g;function wm(t){return(typeof t=="string"?t:""+t).replace(yM,`
`).replace(SM,"")}function Go(t,e,n){if(e=wm(e),wm(t)!==e&&n)throw Error(ne(425))}function Kl(){}var Gd=null,jd=null;function Wd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xd=typeof setTimeout=="function"?setTimeout:void 0,MM=typeof clearTimeout=="function"?clearTimeout:void 0,Tm=typeof Promise=="function"?Promise:void 0,EM=typeof queueMicrotask=="function"?queueMicrotask:typeof Tm<"u"?function(t){return Tm.resolve(null).then(t).catch(wM)}:Xd;function wM(t){setTimeout(function(){throw t})}function Eu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),to(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);to(e)}function pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function bm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ca=Math.random().toString(36).slice(2),di="__reactFiber$"+ca,ao="__reactProps$"+ca,ki="__reactContainer$"+ca,$d="__reactEvents$"+ca,TM="__reactListeners$"+ca,bM="__reactHandles$"+ca;function Br(t){var e=t[di];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ki]||n[di]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=bm(t);t!==null;){if(n=t[di])return n;t=bm(t)}return e}t=n,n=t.parentNode}return null}function wo(t){return t=t[di]||t[ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Ic(t){return t[ao]||null}var qd=[],bs=-1;function wr(t){return{current:t}}function vt(t){0>bs||(t.current=qd[bs],qd[bs]=null,bs--)}function mt(t,e){bs++,qd[bs]=t.current,t.current=e}var Sr={},sn=wr(Sr),yn=wr(!1),$r=Sr;function js(t,e){var n=t.type.contextTypes;if(!n)return Sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Sn(t){return t=t.childContextTypes,t!=null}function Zl(){vt(yn),vt(sn)}function Cm(t,e,n){if(sn.current!==Sr)throw Error(ne(168));mt(sn,e),mt(yn,n)}function k0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,uS(t)||"Unknown",r));return Tt({},n,i)}function Jl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,$r=sn.current,mt(sn,t),mt(yn,yn.current),!0}function Am(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=k0(t,e,$r),i.__reactInternalMemoizedMergedChildContext=t,vt(yn),vt(sn),mt(sn,t)):vt(yn),mt(yn,n)}var Ri=null,Oc=!1,wu=!1;function z0(t){Ri===null?Ri=[t]:Ri.push(t)}function CM(t){Oc=!0,z0(t)}function Tr(){if(!wu&&Ri!==null){wu=!0;var t=0,e=lt;try{var n=Ri;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ri=null,Oc=!1}catch(r){throw Ri!==null&&(Ri=Ri.slice(t+1)),u0(Oh,Tr),r}finally{lt=e,wu=!1}}return null}var Cs=[],As=0,Ql=null,ec=0,kn=[],zn=0,qr=null,Li=1,Ni="";function Or(t,e){Cs[As++]=ec,Cs[As++]=Ql,Ql=t,ec=e}function B0(t,e,n){kn[zn++]=Li,kn[zn++]=Ni,kn[zn++]=qr,qr=t;var i=Li;t=Ni;var r=32-ei(i)-1;i&=~(1<<r),n+=1;var s=32-ei(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Li=1<<32-ei(e)+r|n<<r|i,Ni=s+t}else Li=1<<s|n<<r|i,Ni=t}function jh(t){t.return!==null&&(Or(t,1),B0(t,1,0))}function Wh(t){for(;t===Ql;)Ql=Cs[--As],Cs[As]=null,ec=Cs[--As],Cs[As]=null;for(;t===qr;)qr=kn[--zn],kn[zn]=null,Ni=kn[--zn],kn[zn]=null,Li=kn[--zn],kn[zn]=null}var Ln=null,Pn=null,xt=!1,Zn=null;function V0(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ln=t,Pn=pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ln=t,Pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qr!==null?{id:Li,overflow:Ni}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ln=t,Pn=null,!0):!1;default:return!1}}function Yd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kd(t){if(xt){var e=Pn;if(e){var n=e;if(!Rm(t,e)){if(Yd(t))throw Error(ne(418));e=pr(n.nextSibling);var i=Ln;e&&Rm(t,e)?V0(i,n):(t.flags=t.flags&-4097|2,xt=!1,Ln=t)}}else{if(Yd(t))throw Error(ne(418));t.flags=t.flags&-4097|2,xt=!1,Ln=t}}}function Pm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ln=t}function jo(t){if(t!==Ln)return!1;if(!xt)return Pm(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wd(t.type,t.memoizedProps)),e&&(e=Pn)){if(Yd(t))throw H0(),Error(ne(418));for(;e;)V0(t,e),e=pr(e.nextSibling)}if(Pm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pn=pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pn=null}}else Pn=Ln?pr(t.stateNode.nextSibling):null;return!0}function H0(){for(var t=Pn;t;)t=pr(t.nextSibling)}function Ws(){Pn=Ln=null,xt=!1}function Xh(t){Zn===null?Zn=[t]:Zn.push(t)}var AM=Gi.ReactCurrentBatchConfig;function Ea(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function Wo(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Lm(t){var e=t._init;return e(t._payload)}function G0(t){function e(d,p){if(t){var _=d.deletions;_===null?(d.deletions=[p],d.flags|=16):_.push(p)}}function n(d,p){if(!t)return null;for(;p!==null;)e(d,p),p=p.sibling;return null}function i(d,p){for(d=new Map;p!==null;)p.key!==null?d.set(p.key,p):d.set(p.index,p),p=p.sibling;return d}function r(d,p){return d=_r(d,p),d.index=0,d.sibling=null,d}function s(d,p,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<p?(d.flags|=2,p):_):(d.flags|=2,p)):(d.flags|=1048576,p)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,p,_,S){return p===null||p.tag!==6?(p=Lu(_,d.mode,S),p.return=d,p):(p=r(p,_),p.return=d,p)}function l(d,p,_,S){var C=_.type;return C===Ss?f(d,p,_.props.children,S,_.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===er&&Lm(C)===p.type)?(S=r(p,_.props),S.ref=Ea(d,p,_),S.return=d,S):(S=Il(_.type,_.key,_.props,null,d.mode,S),S.ref=Ea(d,p,_),S.return=d,S)}function c(d,p,_,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==_.containerInfo||p.stateNode.implementation!==_.implementation?(p=Nu(_,d.mode,S),p.return=d,p):(p=r(p,_.children||[]),p.return=d,p)}function f(d,p,_,S,C){return p===null||p.tag!==7?(p=Xr(_,d.mode,S,C),p.return=d,p):(p=r(p,_),p.return=d,p)}function h(d,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Lu(""+p,d.mode,_),p.return=d,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Io:return _=Il(p.type,p.key,p.props,null,d.mode,_),_.ref=Ea(d,null,p),_.return=d,_;case ys:return p=Nu(p,d.mode,_),p.return=d,p;case er:var S=p._init;return h(d,S(p._payload),_)}if(Ia(p)||_a(p))return p=Xr(p,d.mode,_,null),p.return=d,p;Wo(d,p)}return null}function u(d,p,_,S){var C=p!==null?p.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:o(d,p,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Io:return _.key===C?l(d,p,_,S):null;case ys:return _.key===C?c(d,p,_,S):null;case er:return C=_._init,u(d,p,C(_._payload),S)}if(Ia(_)||_a(_))return C!==null?null:f(d,p,_,S,null);Wo(d,_)}return null}function g(d,p,_,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(_)||null,o(p,d,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Io:return d=d.get(S.key===null?_:S.key)||null,l(p,d,S,C);case ys:return d=d.get(S.key===null?_:S.key)||null,c(p,d,S,C);case er:var b=S._init;return g(d,p,_,b(S._payload),C)}if(Ia(S)||_a(S))return d=d.get(_)||null,f(p,d,S,C,null);Wo(p,S)}return null}function v(d,p,_,S){for(var C=null,b=null,A=p,x=p=0,w=null;A!==null&&x<_.length;x++){A.index>x?(w=A,A=null):w=A.sibling;var N=u(d,A,_[x],S);if(N===null){A===null&&(A=w);break}t&&A&&N.alternate===null&&e(d,A),p=s(N,p,x),b===null?C=N:b.sibling=N,b=N,A=w}if(x===_.length)return n(d,A),xt&&Or(d,x),C;if(A===null){for(;x<_.length;x++)A=h(d,_[x],S),A!==null&&(p=s(A,p,x),b===null?C=A:b.sibling=A,b=A);return xt&&Or(d,x),C}for(A=i(d,A);x<_.length;x++)w=g(A,d,x,_[x],S),w!==null&&(t&&w.alternate!==null&&A.delete(w.key===null?x:w.key),p=s(w,p,x),b===null?C=w:b.sibling=w,b=w);return t&&A.forEach(function(R){return e(d,R)}),xt&&Or(d,x),C}function y(d,p,_,S){var C=_a(_);if(typeof C!="function")throw Error(ne(150));if(_=C.call(_),_==null)throw Error(ne(151));for(var b=C=null,A=p,x=p=0,w=null,N=_.next();A!==null&&!N.done;x++,N=_.next()){A.index>x?(w=A,A=null):w=A.sibling;var R=u(d,A,N.value,S);if(R===null){A===null&&(A=w);break}t&&A&&R.alternate===null&&e(d,A),p=s(R,p,x),b===null?C=R:b.sibling=R,b=R,A=w}if(N.done)return n(d,A),xt&&Or(d,x),C;if(A===null){for(;!N.done;x++,N=_.next())N=h(d,N.value,S),N!==null&&(p=s(N,p,x),b===null?C=N:b.sibling=N,b=N);return xt&&Or(d,x),C}for(A=i(d,A);!N.done;x++,N=_.next())N=g(A,d,x,N.value,S),N!==null&&(t&&N.alternate!==null&&A.delete(N.key===null?x:N.key),p=s(N,p,x),b===null?C=N:b.sibling=N,b=N);return t&&A.forEach(function(D){return e(d,D)}),xt&&Or(d,x),C}function m(d,p,_,S){if(typeof _=="object"&&_!==null&&_.type===Ss&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Io:e:{for(var C=_.key,b=p;b!==null;){if(b.key===C){if(C=_.type,C===Ss){if(b.tag===7){n(d,b.sibling),p=r(b,_.props.children),p.return=d,d=p;break e}}else if(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===er&&Lm(C)===b.type){n(d,b.sibling),p=r(b,_.props),p.ref=Ea(d,b,_),p.return=d,d=p;break e}n(d,b);break}else e(d,b);b=b.sibling}_.type===Ss?(p=Xr(_.props.children,d.mode,S,_.key),p.return=d,d=p):(S=Il(_.type,_.key,_.props,null,d.mode,S),S.ref=Ea(d,p,_),S.return=d,d=S)}return a(d);case ys:e:{for(b=_.key;p!==null;){if(p.key===b)if(p.tag===4&&p.stateNode.containerInfo===_.containerInfo&&p.stateNode.implementation===_.implementation){n(d,p.sibling),p=r(p,_.children||[]),p.return=d,d=p;break e}else{n(d,p);break}else e(d,p);p=p.sibling}p=Nu(_,d.mode,S),p.return=d,d=p}return a(d);case er:return b=_._init,m(d,p,b(_._payload),S)}if(Ia(_))return v(d,p,_,S);if(_a(_))return y(d,p,_,S);Wo(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,p!==null&&p.tag===6?(n(d,p.sibling),p=r(p,_),p.return=d,d=p):(n(d,p),p=Lu(_,d.mode,S),p.return=d,d=p),a(d)):n(d,p)}return m}var Xs=G0(!0),j0=G0(!1),tc=wr(null),nc=null,Rs=null,$h=null;function qh(){$h=Rs=nc=null}function Yh(t){var e=tc.current;vt(tc),t._currentValue=e}function Zd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Fs(t,e){nc=t,$h=Rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xn=!0),t.firstContext=null)}function Hn(t){var e=t._currentValue;if($h!==t)if(t={context:t,memoizedValue:e,next:null},Rs===null){if(nc===null)throw Error(ne(308));Rs=t,nc.dependencies={lanes:0,firstContext:t}}else Rs=Rs.next=t;return e}var Vr=null;function Kh(t){Vr===null?Vr=[t]:Vr.push(t)}function W0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Kh(e)):(n.next=r.next,r.next=n),e.interleaved=n,zi(t,i)}function zi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tr=!1;function Zh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function X0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ii(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,zi(t,n)}return r=i.interleaved,r===null?(e.next=e,Kh(i)):(e.next=r.next,r.next=e),i.interleaved=e,zi(t,n)}function Al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Uh(t,n)}}function Nm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ic(t,e,n,i){var r=t.updateQueue;tr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,f=c=l=null,o=s;do{var u=o.lane,g=o.eventTime;if((i&u)===u){f!==null&&(f=f.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,y=o;switch(u=e,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(g,h,u);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,u=typeof v=="function"?v.call(g,h,u):v,u==null)break e;h=Tt({},h,u);break e;case 2:tr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[o]:u.push(o))}else g={eventTime:g,lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=g,l=h):f=f.next=g,a|=u;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;u=o,o=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Kr|=a,t.lanes=a,t.memoizedState=h}}function Dm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var To={},mi=wr(To),oo=wr(To),lo=wr(To);function Hr(t){if(t===To)throw Error(ne(174));return t}function Jh(t,e){switch(mt(lo,e),mt(oo,t),mt(mi,To),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ld(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ld(e,t)}vt(mi),mt(mi,e)}function $s(){vt(mi),vt(oo),vt(lo)}function $0(t){Hr(lo.current);var e=Hr(mi.current),n=Ld(e,t.type);e!==n&&(mt(oo,t),mt(mi,n))}function Qh(t){oo.current===t&&(vt(mi),vt(oo))}var St=wr(0);function rc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Tu=[];function ep(){for(var t=0;t<Tu.length;t++)Tu[t]._workInProgressVersionPrimary=null;Tu.length=0}var Rl=Gi.ReactCurrentDispatcher,bu=Gi.ReactCurrentBatchConfig,Yr=0,Mt=null,Ft=null,jt=null,sc=!1,Xa=!1,co=0,RM=0;function Jt(){throw Error(ne(321))}function tp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ii(t[n],e[n]))return!1;return!0}function np(t,e,n,i,r,s){if(Yr=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Rl.current=t===null||t.memoizedState===null?DM:IM,t=n(i,r),Xa){s=0;do{if(Xa=!1,co=0,25<=s)throw Error(ne(301));s+=1,jt=Ft=null,e.updateQueue=null,Rl.current=OM,t=n(i,r)}while(Xa)}if(Rl.current=ac,e=Ft!==null&&Ft.next!==null,Yr=0,jt=Ft=Mt=null,sc=!1,e)throw Error(ne(300));return t}function ip(){var t=co!==0;return co=0,t}function ci(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Mt.memoizedState=jt=t:jt=jt.next=t,jt}function Gn(){if(Ft===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var e=jt===null?Mt.memoizedState:jt.next;if(e!==null)jt=e,Ft=t;else{if(t===null)throw Error(ne(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},jt===null?Mt.memoizedState=jt=t:jt=jt.next=t}return jt}function uo(t,e){return typeof e=="function"?e(t):e}function Cu(t){var e=Gn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Ft,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((Yr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,Mt.lanes|=f,Kr|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ii(i,e.memoizedState)||(xn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,Kr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Au(t){var e=Gn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ii(s,e.memoizedState)||(xn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function q0(){}function Y0(t,e){var n=Mt,i=Gn(),r=e(),s=!ii(i.memoizedState,r);if(s&&(i.memoizedState=r,xn=!0),i=i.queue,rp(J0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||jt!==null&&jt.memoizedState.tag&1){if(n.flags|=2048,fo(9,Z0.bind(null,n,i,r,e),void 0,null),Wt===null)throw Error(ne(349));Yr&30||K0(n,e,r)}return r}function K0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Z0(t,e,n,i){e.value=n,e.getSnapshot=i,Q0(e)&&e_(t)}function J0(t,e,n){return n(function(){Q0(e)&&e_(t)})}function Q0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ii(t,n)}catch{return!0}}function e_(t){var e=zi(t,1);e!==null&&ti(e,t,1,-1)}function Im(t){var e=ci();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:uo,lastRenderedState:t},e.queue=t,t=t.dispatch=NM.bind(null,Mt,t),[e.memoizedState,t]}function fo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function t_(){return Gn().memoizedState}function Pl(t,e,n,i){var r=ci();Mt.flags|=t,r.memoizedState=fo(1|e,n,void 0,i===void 0?null:i)}function Uc(t,e,n,i){var r=Gn();i=i===void 0?null:i;var s=void 0;if(Ft!==null){var a=Ft.memoizedState;if(s=a.destroy,i!==null&&tp(i,a.deps)){r.memoizedState=fo(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=fo(1|e,n,s,i)}function Om(t,e){return Pl(8390656,8,t,e)}function rp(t,e){return Uc(2048,8,t,e)}function n_(t,e){return Uc(4,2,t,e)}function i_(t,e){return Uc(4,4,t,e)}function r_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function s_(t,e,n){return n=n!=null?n.concat([t]):null,Uc(4,4,r_.bind(null,e,t),n)}function sp(){}function a_(t,e){var n=Gn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&tp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function o_(t,e){var n=Gn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&tp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function l_(t,e,n){return Yr&21?(ii(n,e)||(n=h0(),Mt.lanes|=n,Kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xn=!0),t.memoizedState=n)}function PM(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=bu.transition;bu.transition={};try{t(!1),e()}finally{lt=n,bu.transition=i}}function c_(){return Gn().memoizedState}function LM(t,e,n){var i=vr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},u_(t))d_(e,n);else if(n=W0(t,e,n,i),n!==null){var r=cn();ti(n,t,i,r),f_(n,e,i)}}function NM(t,e,n){var i=vr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(u_(t))d_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ii(o,a)){var l=e.interleaved;l===null?(r.next=r,Kh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=W0(t,e,r,i),n!==null&&(r=cn(),ti(n,t,i,r),f_(n,e,i))}}function u_(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function d_(t,e){Xa=sc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function f_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Uh(t,n)}}var ac={readContext:Hn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},DM={readContext:Hn,useCallback:function(t,e){return ci().memoizedState=[t,e===void 0?null:e],t},useContext:Hn,useEffect:Om,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pl(4194308,4,r_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pl(4,2,t,e)},useMemo:function(t,e){var n=ci();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ci();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=LM.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=ci();return t={current:t},e.memoizedState=t},useState:Im,useDebugValue:sp,useDeferredValue:function(t){return ci().memoizedState=t},useTransition:function(){var t=Im(!1),e=t[0];return t=PM.bind(null,t[1]),ci().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=ci();if(xt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Wt===null)throw Error(ne(349));Yr&30||K0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Om(J0.bind(null,i,s,t),[t]),i.flags|=2048,fo(9,Z0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ci(),e=Wt.identifierPrefix;if(xt){var n=Ni,i=Li;n=(i&~(1<<32-ei(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=RM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},IM={readContext:Hn,useCallback:a_,useContext:Hn,useEffect:rp,useImperativeHandle:s_,useInsertionEffect:n_,useLayoutEffect:i_,useMemo:o_,useReducer:Cu,useRef:t_,useState:function(){return Cu(uo)},useDebugValue:sp,useDeferredValue:function(t){var e=Gn();return l_(e,Ft.memoizedState,t)},useTransition:function(){var t=Cu(uo)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:q0,useSyncExternalStore:Y0,useId:c_,unstable_isNewReconciler:!1},OM={readContext:Hn,useCallback:a_,useContext:Hn,useEffect:rp,useImperativeHandle:s_,useInsertionEffect:n_,useLayoutEffect:i_,useMemo:o_,useReducer:Au,useRef:t_,useState:function(){return Au(uo)},useDebugValue:sp,useDeferredValue:function(t){var e=Gn();return Ft===null?e.memoizedState=t:l_(e,Ft.memoizedState,t)},useTransition:function(){var t=Au(uo)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:q0,useSyncExternalStore:Y0,useId:c_,unstable_isNewReconciler:!1};function Yn(t,e){if(t&&t.defaultProps){e=Tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fc={isMounted:function(t){return(t=t._reactInternals)?ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=cn(),r=vr(t),s=Ii(i,r);s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,r),e!==null&&(ti(e,t,r,i),Al(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=cn(),r=vr(t),s=Ii(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,r),e!==null&&(ti(e,t,r,i),Al(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),i=vr(t),r=Ii(n,i);r.tag=2,e!=null&&(r.callback=e),e=mr(t,r,i),e!==null&&(ti(e,t,i,n),Al(e,t,i))}};function Um(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!io(n,i)||!io(r,s):!0}function h_(t,e,n){var i=!1,r=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Hn(s):(r=Sn(e)?$r:sn.current,i=e.contextTypes,s=(i=i!=null)?js(t,r):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Fm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Fc.enqueueReplaceState(e,e.state,null)}function Qd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Zh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Hn(s):(s=Sn(e)?$r:sn.current,r.context=js(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Jd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Fc.enqueueReplaceState(r,r.state,null),ic(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function qs(t,e){try{var n="",i=e;do n+=cS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ru(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ef(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var UM=typeof WeakMap=="function"?WeakMap:Map;function p_(t,e,n){n=Ii(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){lc||(lc=!0,df=i),ef(t,e)},n}function m_(t,e,n){n=Ii(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ef(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ef(t,e),typeof i!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function km(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new UM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=KM.bind(null,t,e,n),e.then(t,t))}function zm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ii(-1,1),e.tag=2,mr(n,e,1))),n.lanes|=1),t)}var FM=Gi.ReactCurrentOwner,xn=!1;function ln(t,e,n,i){e.child=t===null?j0(e,null,n,i):Xs(e,t.child,n,i)}function Vm(t,e,n,i,r){n=n.render;var s=e.ref;return Fs(e,r),i=np(t,e,n,i,s,r),n=ip(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(xt&&n&&jh(e),e.flags|=1,ln(t,e,i,r),e.child)}function Hm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!hp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,g_(t,e,s,i,r)):(t=Il(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:io,n(a,i)&&t.ref===e.ref)return Bi(t,e,r)}return e.flags|=1,t=_r(s,i),t.ref=e.ref,t.return=e,e.child=t}function g_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(io(s,i)&&t.ref===e.ref)if(xn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(xn=!0);else return e.lanes=t.lanes,Bi(t,e,r)}return tf(t,e,n,i,r)}function v_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},mt(Ls,Cn),Cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,mt(Ls,Cn),Cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,mt(Ls,Cn),Cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,mt(Ls,Cn),Cn|=i;return ln(t,e,r,n),e.child}function __(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function tf(t,e,n,i,r){var s=Sn(n)?$r:sn.current;return s=js(e,s),Fs(e,r),n=np(t,e,n,i,s,r),i=ip(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(xt&&i&&jh(e),e.flags|=1,ln(t,e,n,r),e.child)}function Gm(t,e,n,i,r){if(Sn(n)){var s=!0;Jl(e)}else s=!1;if(Fs(e,r),e.stateNode===null)Ll(t,e),h_(e,n,i),Qd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Hn(c):(c=Sn(n)?$r:sn.current,c=js(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Fm(e,a,i,c),tr=!1;var u=e.memoizedState;a.state=u,ic(e,i,a,r),l=e.memoizedState,o!==i||u!==l||yn.current||tr?(typeof f=="function"&&(Jd(e,n,f,i),l=e.memoizedState),(o=tr||Um(e,n,o,i,u,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,X0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Yn(e.type,o),a.props=c,h=e.pendingProps,u=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Hn(l):(l=Sn(n)?$r:sn.current,l=js(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||u!==l)&&Fm(e,a,i,l),tr=!1,u=e.memoizedState,a.state=u,ic(e,i,a,r);var v=e.memoizedState;o!==h||u!==v||yn.current||tr?(typeof g=="function"&&(Jd(e,n,g,i),v=e.memoizedState),(c=tr||Um(e,n,c,i,u,v,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return nf(t,e,n,i,s,r)}function nf(t,e,n,i,r,s){__(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Am(e,n,!1),Bi(t,e,s);i=e.stateNode,FM.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Xs(e,t.child,null,s),e.child=Xs(e,null,o,s)):ln(t,e,o,s),e.memoizedState=i.state,r&&Am(e,n,!0),e.child}function x_(t){var e=t.stateNode;e.pendingContext?Cm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cm(t,e.context,!1),Jh(t,e.containerInfo)}function jm(t,e,n,i,r){return Ws(),Xh(r),e.flags|=256,ln(t,e,n,i),e.child}var rf={dehydrated:null,treeContext:null,retryLane:0};function sf(t){return{baseLanes:t,cachePool:null,transitions:null}}function y_(t,e,n){var i=e.pendingProps,r=St.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),mt(St,r&1),t===null)return Kd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Bc(a,i,0,null),t=Xr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=sf(n),e.memoizedState=rf,t):ap(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return kM(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=_r(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=_r(o,s):(s=Xr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?sf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=rf,i}return s=t.child,t=s.sibling,i=_r(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ap(t,e){return e=Bc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xo(t,e,n,i){return i!==null&&Xh(i),Xs(e,t.child,null,n),t=ap(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kM(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Ru(Error(ne(422))),Xo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Bc({mode:"visible",children:i.children},r,0,null),s=Xr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Xs(e,t.child,null,a),e.child.memoizedState=sf(a),e.memoizedState=rf,s);if(!(e.mode&1))return Xo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=Ru(s,i,void 0),Xo(t,e,a,i)}if(o=(a&t.childLanes)!==0,xn||o){if(i=Wt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,zi(t,r),ti(i,t,r,-1))}return fp(),i=Ru(Error(ne(421))),Xo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ZM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Pn=pr(r.nextSibling),Ln=e,xt=!0,Zn=null,t!==null&&(kn[zn++]=Li,kn[zn++]=Ni,kn[zn++]=qr,Li=t.id,Ni=t.overflow,qr=e),e=ap(e,i.children),e.flags|=4096,e)}function Wm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Zd(t.return,e,n)}function Pu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function S_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wm(t,n,e);else if(t.tag===19)Wm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(mt(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&rc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Pu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&rc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Pu(e,!0,n,null,s);break;case"together":Pu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=_r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function zM(t,e,n){switch(e.tag){case 3:x_(e),Ws();break;case 5:$0(e);break;case 1:Sn(e.type)&&Jl(e);break;case 4:Jh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;mt(tc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(mt(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?y_(t,e,n):(mt(St,St.current&1),t=Bi(t,e,n),t!==null?t.sibling:null);mt(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return S_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),mt(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,v_(t,e,n)}return Bi(t,e,n)}var M_,af,E_,w_;M_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};af=function(){};E_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Hr(mi.current);var s=null;switch(n){case"input":r=Cd(t,r),i=Cd(t,i),s=[];break;case"select":r=Tt({},r,{value:void 0}),i=Tt({},i,{value:void 0}),s=[];break;case"textarea":r=Pd(t,r),i=Pd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Kl)}Nd(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ka.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ka.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};w_=function(t,e,n,i){n!==i&&(e.flags|=4)};function wa(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function BM(t,e,n){var i=e.pendingProps;switch(Wh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return Sn(e.type)&&Zl(),Qt(e),null;case 3:return i=e.stateNode,$s(),vt(yn),vt(sn),ep(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(jo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zn!==null&&(pf(Zn),Zn=null))),af(t,e),Qt(e),null;case 5:Qh(e);var r=Hr(lo.current);if(n=e.type,t!==null&&e.stateNode!=null)E_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Qt(e),null}if(t=Hr(mi.current),jo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[di]=e,i[ao]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<Ua.length;r++)gt(Ua[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":em(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":nm(i,s),gt("invalid",i)}Nd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Go(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Go(i.textContent,o,t),r=["children",""+o]):Ka.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&gt("scroll",i)}switch(n){case"input":Oo(i),tm(i,s,!0);break;case"textarea":Oo(i),im(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Kl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[di]=e,t[ao]=i,M_(t,e,!1,!1),e.stateNode=t;e:{switch(a=Dd(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ua.length;r++)gt(Ua[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":em(t,i),r=Cd(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Tt({},i,{value:void 0}),gt("invalid",t);break;case"textarea":nm(t,i),r=Pd(t,i),gt("invalid",t);break;default:r=i}Nd(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?t0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Za(t,l):typeof l=="number"&&Za(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ka.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&Ph(t,s,l,a))}switch(n){case"input":Oo(t),tm(t,i,!1);break;case"textarea":Oo(t),im(t);break;case"option":i.value!=null&&t.setAttribute("value",""+yr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Kl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(t&&e.stateNode!=null)w_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Hr(lo.current),Hr(mi.current),jo(e)){if(i=e.stateNode,n=e.memoizedProps,i[di]=e,(s=i.nodeValue!==n)&&(t=Ln,t!==null))switch(t.tag){case 3:Go(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Go(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[di]=e,e.stateNode=i}return Qt(e),null;case 13:if(vt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&Pn!==null&&e.mode&1&&!(e.flags&128))H0(),Ws(),e.flags|=98560,s=!1;else if(s=jo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[di]=e}else Ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qt(e),s=!1}else Zn!==null&&(pf(Zn),Zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?kt===0&&(kt=3):fp())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return $s(),af(t,e),t===null&&ro(e.stateNode.containerInfo),Qt(e),null;case 10:return Yh(e.type._context),Qt(e),null;case 17:return Sn(e.type)&&Zl(),Qt(e),null;case 19:if(vt(St),s=e.memoizedState,s===null)return Qt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)wa(s,!1);else{if(kt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=rc(t),a!==null){for(e.flags|=128,wa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return mt(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&Nt()>Ys&&(e.flags|=128,i=!0,wa(s,!1),e.lanes=4194304)}else{if(!i)if(t=rc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!xt)return Qt(e),null}else 2*Nt()-s.renderingStartTime>Ys&&n!==1073741824&&(e.flags|=128,i=!0,wa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,n=St.current,mt(St,i?n&1|2:n&1),e):(Qt(e),null);case 22:case 23:return dp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Cn&1073741824&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function VM(t,e){switch(Wh(e),e.tag){case 1:return Sn(e.type)&&Zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $s(),vt(yn),vt(sn),ep(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qh(e),null;case 13:if(vt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(St),null;case 4:return $s(),null;case 10:return Yh(e.type._context),null;case 22:case 23:return dp(),null;case 24:return null;default:return null}}var $o=!1,nn=!1,HM=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ct(t,e,i)}else n.current=null}function of(t,e,n){try{n()}catch(i){Ct(t,e,i)}}var Xm=!1;function GM(t,e){if(Gd=$l,t=R0(),Gh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,h=t,u=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(g=h.firstChild)!==null;)u=h,h=g;for(;;){if(h===t)break t;if(u===n&&++c===r&&(o=a),u===s&&++f===i&&(l=a),(g=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(jd={focusedElem:t,selectionRange:n},$l=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,m=v.memoizedState,d=e.stateNode,p=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:Yn(e.type,y),m);d.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(S){Ct(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return v=Xm,Xm=!1,v}function $a(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&of(e,n,s)}r=r.next}while(r!==i)}}function kc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function lf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function T_(t){var e=t.alternate;e!==null&&(t.alternate=null,T_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[di],delete e[ao],delete e[$d],delete e[TM],delete e[bM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function b_(t){return t.tag===5||t.tag===3||t.tag===4}function $m(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||b_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Kl));else if(i!==4&&(t=t.child,t!==null))for(cf(t,e,n),t=t.sibling;t!==null;)cf(t,e,n),t=t.sibling}function uf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(uf(t,e,n),t=t.sibling;t!==null;)uf(t,e,n),t=t.sibling}var $t=null,Kn=!1;function $i(t,e,n){for(n=n.child;n!==null;)C_(t,e,n),n=n.sibling}function C_(t,e,n){if(pi&&typeof pi.onCommitFiberUnmount=="function")try{pi.onCommitFiberUnmount(Pc,n)}catch{}switch(n.tag){case 5:nn||Ps(n,e);case 6:var i=$t,r=Kn;$t=null,$i(t,e,n),$t=i,Kn=r,$t!==null&&(Kn?(t=$t,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$t.removeChild(n.stateNode));break;case 18:$t!==null&&(Kn?(t=$t,n=n.stateNode,t.nodeType===8?Eu(t.parentNode,n):t.nodeType===1&&Eu(t,n),to(t)):Eu($t,n.stateNode));break;case 4:i=$t,r=Kn,$t=n.stateNode.containerInfo,Kn=!0,$i(t,e,n),$t=i,Kn=r;break;case 0:case 11:case 14:case 15:if(!nn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&of(n,e,a),r=r.next}while(r!==i)}$i(t,e,n);break;case 1:if(!nn&&(Ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Ct(n,e,o)}$i(t,e,n);break;case 21:$i(t,e,n);break;case 22:n.mode&1?(nn=(i=nn)||n.memoizedState!==null,$i(t,e,n),nn=i):$i(t,e,n);break;default:$i(t,e,n)}}function qm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new HM),e.forEach(function(i){var r=JM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Wn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:$t=o.stateNode,Kn=!1;break e;case 3:$t=o.stateNode.containerInfo,Kn=!0;break e;case 4:$t=o.stateNode.containerInfo,Kn=!0;break e}o=o.return}if($t===null)throw Error(ne(160));C_(s,a,r),$t=null,Kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ct(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)A_(e,t),e=e.sibling}function A_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wn(e,t),ai(t),i&4){try{$a(3,t,t.return),kc(3,t)}catch(y){Ct(t,t.return,y)}try{$a(5,t,t.return)}catch(y){Ct(t,t.return,y)}}break;case 1:Wn(e,t),ai(t),i&512&&n!==null&&Ps(n,n.return);break;case 5:if(Wn(e,t),ai(t),i&512&&n!==null&&Ps(n,n.return),t.flags&32){var r=t.stateNode;try{Za(r,"")}catch(y){Ct(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Kv(r,s),Dd(o,a);var c=Dd(o,s);for(a=0;a<l.length;a+=2){var f=l[a],h=l[a+1];f==="style"?t0(r,h):f==="dangerouslySetInnerHTML"?Qv(r,h):f==="children"?Za(r,h):Ph(r,f,h,c)}switch(o){case"input":Ad(r,s);break;case"textarea":Zv(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ds(r,!!s.multiple,g,!1):u!==!!s.multiple&&(s.defaultValue!=null?Ds(r,!!s.multiple,s.defaultValue,!0):Ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[ao]=s}catch(y){Ct(t,t.return,y)}}break;case 6:if(Wn(e,t),ai(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Ct(t,t.return,y)}}break;case 3:if(Wn(e,t),ai(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{to(e.containerInfo)}catch(y){Ct(t,t.return,y)}break;case 4:Wn(e,t),ai(t);break;case 13:Wn(e,t),ai(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(cp=Nt())),i&4&&qm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(nn=(c=nn)||f,Wn(e,t),nn=c):Wn(e,t),ai(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(xe=t,f=t.child;f!==null;){for(h=xe=f;xe!==null;){switch(u=xe,g=u.child,u.tag){case 0:case 11:case 14:case 15:$a(4,u,u.return);break;case 1:Ps(u,u.return);var v=u.stateNode;if(typeof v.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){Ct(i,n,y)}}break;case 5:Ps(u,u.return);break;case 22:if(u.memoizedState!==null){Km(h);continue}}g!==null?(g.return=u,xe=g):Km(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=e0("display",a))}catch(y){Ct(t,t.return,y)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){Ct(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Wn(e,t),ai(t),i&4&&qm(t);break;case 21:break;default:Wn(e,t),ai(t)}}function ai(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(b_(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Za(r,""),i.flags&=-33);var s=$m(t);uf(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=$m(t);cf(t,o,a);break;default:throw Error(ne(161))}}catch(l){Ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jM(t,e,n){xe=t,R_(t)}function R_(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||$o;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||nn;o=$o;var c=nn;if($o=a,(nn=l)&&!c)for(xe=r;xe!==null;)a=xe,l=a.child,a.tag===22&&a.memoizedState!==null?Zm(r):l!==null?(l.return=a,xe=l):Zm(r);for(;s!==null;)xe=s,R_(s),s=s.sibling;xe=r,$o=o,nn=c}Ym(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):Ym(t)}}function Ym(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nn||kc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!nn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Yn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Dm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dm(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&to(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}nn||e.flags&512&&lf(e)}catch(u){Ct(e,e.return,u)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Km(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Zm(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kc(4,e)}catch(l){Ct(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{lf(e)}catch(l){Ct(e,s,l)}break;case 5:var a=e.return;try{lf(e)}catch(l){Ct(e,a,l)}}}catch(l){Ct(e,e.return,l)}if(e===t){xe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,xe=o;break}xe=e.return}}var WM=Math.ceil,oc=Gi.ReactCurrentDispatcher,op=Gi.ReactCurrentOwner,Vn=Gi.ReactCurrentBatchConfig,Qe=0,Wt=null,Ut=null,Yt=0,Cn=0,Ls=wr(0),kt=0,ho=null,Kr=0,zc=0,lp=0,qa=null,_n=null,cp=0,Ys=1/0,Ai=null,lc=!1,df=null,gr=null,qo=!1,or=null,cc=0,Ya=0,ff=null,Nl=-1,Dl=0;function cn(){return Qe&6?Nt():Nl!==-1?Nl:Nl=Nt()}function vr(t){return t.mode&1?Qe&2&&Yt!==0?Yt&-Yt:AM.transition!==null?(Dl===0&&(Dl=h0()),Dl):(t=lt,t!==0||(t=window.event,t=t===void 0?16:y0(t.type)),t):1}function ti(t,e,n,i){if(50<Ya)throw Ya=0,ff=null,Error(ne(185));Mo(t,n,i),(!(Qe&2)||t!==Wt)&&(t===Wt&&(!(Qe&2)&&(zc|=n),kt===4&&rr(t,Yt)),Mn(t,i),n===1&&Qe===0&&!(e.mode&1)&&(Ys=Nt()+500,Oc&&Tr()))}function Mn(t,e){var n=t.callbackNode;AS(t,e);var i=Xl(t,t===Wt?Yt:0);if(i===0)n!==null&&am(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&am(n),e===1)t.tag===0?CM(Jm.bind(null,t)):z0(Jm.bind(null,t)),EM(function(){!(Qe&6)&&Tr()}),n=null;else{switch(p0(i)){case 1:n=Oh;break;case 4:n=d0;break;case 16:n=Wl;break;case 536870912:n=f0;break;default:n=Wl}n=F_(n,P_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function P_(t,e){if(Nl=-1,Dl=0,Qe&6)throw Error(ne(327));var n=t.callbackNode;if(ks()&&t.callbackNode!==n)return null;var i=Xl(t,t===Wt?Yt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=uc(t,i);else{e=i;var r=Qe;Qe|=2;var s=N_();(Wt!==t||Yt!==e)&&(Ai=null,Ys=Nt()+500,Wr(t,e));do try{qM();break}catch(o){L_(t,o)}while(!0);qh(),oc.current=s,Qe=r,Ut!==null?e=0:(Wt=null,Yt=0,e=kt)}if(e!==0){if(e===2&&(r=kd(t),r!==0&&(i=r,e=hf(t,r))),e===1)throw n=ho,Wr(t,0),rr(t,i),Mn(t,Nt()),n;if(e===6)rr(t,i);else{if(r=t.current.alternate,!(i&30)&&!XM(r)&&(e=uc(t,i),e===2&&(s=kd(t),s!==0&&(i=s,e=hf(t,s))),e===1))throw n=ho,Wr(t,0),rr(t,i),Mn(t,Nt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Ur(t,_n,Ai);break;case 3:if(rr(t,i),(i&130023424)===i&&(e=cp+500-Nt(),10<e)){if(Xl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Xd(Ur.bind(null,t,_n,Ai),e);break}Ur(t,_n,Ai);break;case 4:if(rr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ei(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*WM(i/1960))-i,10<i){t.timeoutHandle=Xd(Ur.bind(null,t,_n,Ai),i);break}Ur(t,_n,Ai);break;case 5:Ur(t,_n,Ai);break;default:throw Error(ne(329))}}}return Mn(t,Nt()),t.callbackNode===n?P_.bind(null,t):null}function hf(t,e){var n=qa;return t.current.memoizedState.isDehydrated&&(Wr(t,e).flags|=256),t=uc(t,e),t!==2&&(e=_n,_n=n,e!==null&&pf(e)),t}function pf(t){_n===null?_n=t:_n.push.apply(_n,t)}function XM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ii(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rr(t,e){for(e&=~lp,e&=~zc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ei(e),i=1<<n;t[n]=-1,e&=~i}}function Jm(t){if(Qe&6)throw Error(ne(327));ks();var e=Xl(t,0);if(!(e&1))return Mn(t,Nt()),null;var n=uc(t,e);if(t.tag!==0&&n===2){var i=kd(t);i!==0&&(e=i,n=hf(t,i))}if(n===1)throw n=ho,Wr(t,0),rr(t,e),Mn(t,Nt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ur(t,_n,Ai),Mn(t,Nt()),null}function up(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(Ys=Nt()+500,Oc&&Tr())}}function Zr(t){or!==null&&or.tag===0&&!(Qe&6)&&ks();var e=Qe;Qe|=1;var n=Vn.transition,i=lt;try{if(Vn.transition=null,lt=1,t)return t()}finally{lt=i,Vn.transition=n,Qe=e,!(Qe&6)&&Tr()}}function dp(){Cn=Ls.current,vt(Ls)}function Wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,MM(n)),Ut!==null)for(n=Ut.return;n!==null;){var i=n;switch(Wh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Zl();break;case 3:$s(),vt(yn),vt(sn),ep();break;case 5:Qh(i);break;case 4:$s();break;case 13:vt(St);break;case 19:vt(St);break;case 10:Yh(i.type._context);break;case 22:case 23:dp()}n=n.return}if(Wt=t,Ut=t=_r(t.current,null),Yt=Cn=e,kt=0,ho=null,lp=zc=Kr=0,_n=qa=null,Vr!==null){for(e=0;e<Vr.length;e++)if(n=Vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Vr=null}return t}function L_(t,e){do{var n=Ut;try{if(qh(),Rl.current=ac,sc){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}sc=!1}if(Yr=0,jt=Ft=Mt=null,Xa=!1,co=0,op.current=null,n===null||n.return===null){kt=1,ho=e,Ut=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Yt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var u=f.alternate;u?(f.updateQueue=u.updateQueue,f.memoizedState=u.memoizedState,f.lanes=u.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=zm(a);if(g!==null){g.flags&=-257,Bm(g,a,o,s,e),g.mode&1&&km(s,c,e),e=g,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){km(s,c,e),fp();break e}l=Error(ne(426))}}else if(xt&&o.mode&1){var m=zm(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Bm(m,a,o,s,e),Xh(qs(l,o));break e}}s=l=qs(l,o),kt!==4&&(kt=2),qa===null?qa=[s]:qa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=p_(s,l,e);Nm(s,d);break e;case 1:o=l;var p=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(gr===null||!gr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=m_(s,o,e);Nm(s,S);break e}}s=s.return}while(s!==null)}I_(n)}catch(C){e=C,Ut===n&&n!==null&&(Ut=n=n.return);continue}break}while(!0)}function N_(){var t=oc.current;return oc.current=ac,t===null?ac:t}function fp(){(kt===0||kt===3||kt===2)&&(kt=4),Wt===null||!(Kr&268435455)&&!(zc&268435455)||rr(Wt,Yt)}function uc(t,e){var n=Qe;Qe|=2;var i=N_();(Wt!==t||Yt!==e)&&(Ai=null,Wr(t,e));do try{$M();break}catch(r){L_(t,r)}while(!0);if(qh(),Qe=n,oc.current=i,Ut!==null)throw Error(ne(261));return Wt=null,Yt=0,kt}function $M(){for(;Ut!==null;)D_(Ut)}function qM(){for(;Ut!==null&&!xS();)D_(Ut)}function D_(t){var e=U_(t.alternate,t,Cn);t.memoizedProps=t.pendingProps,e===null?I_(t):Ut=e,op.current=null}function I_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=VM(n,e),n!==null){n.flags&=32767,Ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{kt=6,Ut=null;return}}else if(n=BM(n,e,Cn),n!==null){Ut=n;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=t}while(e!==null);kt===0&&(kt=5)}function Ur(t,e,n){var i=lt,r=Vn.transition;try{Vn.transition=null,lt=1,YM(t,e,n,i)}finally{Vn.transition=r,lt=i}return null}function YM(t,e,n,i){do ks();while(or!==null);if(Qe&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(RS(t,s),t===Wt&&(Ut=Wt=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qo||(qo=!0,F_(Wl,function(){return ks(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Vn.transition,Vn.transition=null;var a=lt;lt=1;var o=Qe;Qe|=4,op.current=null,GM(t,n),A_(n,t),mM(jd),$l=!!Gd,jd=Gd=null,t.current=n,jM(n),yS(),Qe=o,lt=a,Vn.transition=s}else t.current=n;if(qo&&(qo=!1,or=t,cc=r),s=t.pendingLanes,s===0&&(gr=null),ES(n.stateNode),Mn(t,Nt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(lc)throw lc=!1,t=df,df=null,t;return cc&1&&t.tag!==0&&ks(),s=t.pendingLanes,s&1?t===ff?Ya++:(Ya=0,ff=t):Ya=0,Tr(),null}function ks(){if(or!==null){var t=p0(cc),e=Vn.transition,n=lt;try{if(Vn.transition=null,lt=16>t?16:t,or===null)var i=!1;else{if(t=or,or=null,cc=0,Qe&6)throw Error(ne(331));var r=Qe;for(Qe|=4,xe=t.current;xe!==null;){var s=xe,a=s.child;if(xe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(xe=c;xe!==null;){var f=xe;switch(f.tag){case 0:case 11:case 15:$a(8,f,s)}var h=f.child;if(h!==null)h.return=f,xe=h;else for(;xe!==null;){f=xe;var u=f.sibling,g=f.return;if(T_(f),f===c){xe=null;break}if(u!==null){u.return=g,xe=u;break}xe=g}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}xe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,xe=a;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$a(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,xe=d;break e}xe=s.return}}var p=t.current;for(xe=p;xe!==null;){a=xe;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,xe=_;else e:for(a=p;xe!==null;){if(o=xe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:kc(9,o)}}catch(C){Ct(o,o.return,C)}if(o===a){xe=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,xe=S;break e}xe=o.return}}if(Qe=r,Tr(),pi&&typeof pi.onPostCommitFiberRoot=="function")try{pi.onPostCommitFiberRoot(Pc,t)}catch{}i=!0}return i}finally{lt=n,Vn.transition=e}}return!1}function Qm(t,e,n){e=qs(n,e),e=p_(t,e,1),t=mr(t,e,1),e=cn(),t!==null&&(Mo(t,1,e),Mn(t,e))}function Ct(t,e,n){if(t.tag===3)Qm(t,t,n);else for(;e!==null;){if(e.tag===3){Qm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(gr===null||!gr.has(i))){t=qs(n,t),t=m_(e,t,1),e=mr(e,t,1),t=cn(),e!==null&&(Mo(e,1,t),Mn(e,t));break}}e=e.return}}function KM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,Wt===t&&(Yt&n)===n&&(kt===4||kt===3&&(Yt&130023424)===Yt&&500>Nt()-cp?Wr(t,0):lp|=n),Mn(t,e)}function O_(t,e){e===0&&(t.mode&1?(e=ko,ko<<=1,!(ko&130023424)&&(ko=4194304)):e=1);var n=cn();t=zi(t,e),t!==null&&(Mo(t,e,n),Mn(t,n))}function ZM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),O_(t,n)}function JM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),O_(t,n)}var U_;U_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yn.current)xn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xn=!1,zM(t,e,n);xn=!!(t.flags&131072)}else xn=!1,xt&&e.flags&1048576&&B0(e,ec,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ll(t,e),t=e.pendingProps;var r=js(e,sn.current);Fs(e,n),r=np(null,e,i,t,r,n);var s=ip();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Sn(i)?(s=!0,Jl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zh(e),r.updater=Fc,e.stateNode=r,r._reactInternals=e,Qd(e,i,t,n),e=nf(null,e,i,!0,s,n)):(e.tag=0,xt&&s&&jh(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ll(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=eE(i),t=Yn(i,t),r){case 0:e=tf(null,e,i,t,n);break e;case 1:e=Gm(null,e,i,t,n);break e;case 11:e=Vm(null,e,i,t,n);break e;case 14:e=Hm(null,e,i,Yn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),tf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Gm(t,e,i,r,n);case 3:e:{if(x_(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,X0(t,e),ic(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=qs(Error(ne(423)),e),e=jm(t,e,i,n,r);break e}else if(i!==r){r=qs(Error(ne(424)),e),e=jm(t,e,i,n,r);break e}else for(Pn=pr(e.stateNode.containerInfo.firstChild),Ln=e,xt=!0,Zn=null,n=j0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ws(),i===r){e=Bi(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return $0(e),t===null&&Kd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Wd(i,r)?a=null:s!==null&&Wd(i,s)&&(e.flags|=32),__(t,e),ln(t,e,a,n),e.child;case 6:return t===null&&Kd(e),null;case 13:return y_(t,e,n);case 4:return Jh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Xs(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Vm(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,mt(tc,i._currentValue),i._currentValue=a,s!==null)if(ii(s.value,a)){if(s.children===r.children&&!yn.current){e=Bi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ii(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Zd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Zd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Fs(e,n),r=Hn(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=Yn(i,e.pendingProps),r=Yn(i.type,r),Hm(t,e,i,r,n);case 15:return g_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Ll(t,e),e.tag=1,Sn(i)?(t=!0,Jl(e)):t=!1,Fs(e,n),h_(e,i,r),Qd(e,i,r,n),nf(null,e,i,!0,t,n);case 19:return S_(t,e,n);case 22:return v_(t,e,n)}throw Error(ne(156,e.tag))};function F_(t,e){return u0(t,e)}function QM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,i){return new QM(t,e,n,i)}function hp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function eE(t){if(typeof t=="function")return hp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nh)return 11;if(t===Dh)return 14}return 2}function _r(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Il(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")hp(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Ss:return Xr(n.children,r,s,e);case Lh:a=8,r|=8;break;case Ed:return t=Bn(12,n,e,r|2),t.elementType=Ed,t.lanes=s,t;case wd:return t=Bn(13,n,e,r),t.elementType=wd,t.lanes=s,t;case Td:return t=Bn(19,n,e,r),t.elementType=Td,t.lanes=s,t;case $v:return Bc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Wv:a=10;break e;case Xv:a=9;break e;case Nh:a=11;break e;case Dh:a=14;break e;case er:a=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Bn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Xr(t,e,n,i){return t=Bn(7,t,i,e),t.lanes=n,t}function Bc(t,e,n,i){return t=Bn(22,t,i,e),t.elementType=$v,t.lanes=n,t.stateNode={isHidden:!1},t}function Lu(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function Nu(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fu(0),this.expirationTimes=fu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function pp(t,e,n,i,r,s,a,o,l){return t=new tE(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zh(s),t}function nE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function k_(t){if(!t)return Sr;t=t._reactInternals;e:{if(ts(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(Sn(n))return k0(t,n,e)}return e}function z_(t,e,n,i,r,s,a,o,l){return t=pp(n,i,!0,t,r,s,a,o,l),t.context=k_(null),n=t.current,i=cn(),r=vr(n),s=Ii(i,r),s.callback=e??null,mr(n,s,r),t.current.lanes=r,Mo(t,r,i),Mn(t,i),t}function Vc(t,e,n,i){var r=e.current,s=cn(),a=vr(r);return n=k_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ii(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=mr(r,e,a),t!==null&&(ti(t,r,a,s),Al(t,r,a)),a}function dc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function eg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mp(t,e){eg(t,e),(t=t.alternate)&&eg(t,e)}function iE(){return null}var B_=typeof reportError=="function"?reportError:function(t){console.error(t)};function gp(t){this._internalRoot=t}Hc.prototype.render=gp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Vc(t,e,null,null)};Hc.prototype.unmount=gp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zr(function(){Vc(null,t,null,null)}),e[ki]=null}};function Hc(t){this._internalRoot=t}Hc.prototype.unstable_scheduleHydration=function(t){if(t){var e=v0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ir.length&&e!==0&&e<ir[n].priority;n++);ir.splice(n,0,t),n===0&&x0(t)}};function vp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function tg(){}function rE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=dc(a);s.call(c)}}var a=z_(e,i,t,0,null,!1,!1,"",tg);return t._reactRootContainer=a,t[ki]=a.current,ro(t.nodeType===8?t.parentNode:t),Zr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=dc(l);o.call(c)}}var l=pp(t,0,!1,null,null,!1,!1,"",tg);return t._reactRootContainer=l,t[ki]=l.current,ro(t.nodeType===8?t.parentNode:t),Zr(function(){Vc(e,l,n,i)}),l}function jc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=dc(a);o.call(l)}}Vc(e,a,t,r)}else a=rE(n,e,t,r,i);return dc(a)}m0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Oa(e.pendingLanes);n!==0&&(Uh(e,n|1),Mn(e,Nt()),!(Qe&6)&&(Ys=Nt()+500,Tr()))}break;case 13:Zr(function(){var i=zi(t,1);if(i!==null){var r=cn();ti(i,t,1,r)}}),mp(t,1)}};Fh=function(t){if(t.tag===13){var e=zi(t,134217728);if(e!==null){var n=cn();ti(e,t,134217728,n)}mp(t,134217728)}};g0=function(t){if(t.tag===13){var e=vr(t),n=zi(t,e);if(n!==null){var i=cn();ti(n,t,e,i)}mp(t,e)}};v0=function(){return lt};_0=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};Od=function(t,e,n){switch(e){case"input":if(Ad(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ic(i);if(!r)throw Error(ne(90));Yv(i),Ad(i,r)}}}break;case"textarea":Zv(t,n);break;case"select":e=n.value,e!=null&&Ds(t,!!n.multiple,e,!1)}};r0=up;s0=Zr;var sE={usingClientEntryPoint:!1,Events:[wo,Ts,Ic,n0,i0,up]},Ta={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aE={bundleType:Ta.bundleType,version:Ta.version,rendererPackageName:Ta.rendererPackageName,rendererConfig:Ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=l0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ta.findFiberByHostInstance||iE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yo.isDisabled&&Yo.supportsFiber)try{Pc=Yo.inject(aE),pi=Yo}catch{}}Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sE;Dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vp(e))throw Error(ne(200));return nE(t,e,null,n)};Dn.createRoot=function(t,e){if(!vp(t))throw Error(ne(299));var n=!1,i="",r=B_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=pp(t,1,!1,null,null,n,!1,i,r),t[ki]=e.current,ro(t.nodeType===8?t.parentNode:t),new gp(e)};Dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=l0(e),t=t===null?null:t.stateNode,t};Dn.flushSync=function(t){return Zr(t)};Dn.hydrate=function(t,e,n){if(!Gc(e))throw Error(ne(200));return jc(null,t,e,!0,n)};Dn.hydrateRoot=function(t,e,n){if(!vp(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=B_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=z_(e,null,t,1,n??null,r,!1,s,a),t[ki]=e.current,ro(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Hc(e)};Dn.render=function(t,e,n){if(!Gc(e))throw Error(ne(200));return jc(null,t,e,!1,n)};Dn.unmountComponentAtNode=function(t){if(!Gc(t))throw Error(ne(40));return t._reactRootContainer?(Zr(function(){jc(null,null,t,!1,function(){t._reactRootContainer=null,t[ki]=null})}),!0):!1};Dn.unstable_batchedUpdates=up;Dn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Gc(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return jc(t,e,n,!1,i)};Dn.version="18.3.1-next-f1338f8080-20240426";function V_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(V_)}catch(t){console.error(t)}}V_(),Vv.exports=Dn;var oE=Vv.exports,ng=oE;Sd.createRoot=ng.createRoot,Sd.hydrateRoot=ng.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function po(){return po=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},po.apply(this,arguments)}var lr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(lr||(lr={}));const ig="popstate";function lE(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return mf("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:fc(r)}return uE(e,n,null,t)}function Et(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function _p(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function cE(){return Math.random().toString(36).substr(2,8)}function rg(t,e){return{usr:t.state,key:t.key,idx:e}}function mf(t,e,n,i){return n===void 0&&(n=null),po({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ua(e):e,{state:n,key:e&&e.key||i||cE()})}function fc(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ua(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function uE(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=lr.Pop,l=null,c=f();c==null&&(c=0,a.replaceState(po({},a.state,{idx:c}),""));function f(){return(a.state||{idx:null}).idx}function h(){o=lr.Pop;let m=f(),d=m==null?null:m-c;c=m,l&&l({action:o,location:y.location,delta:d})}function u(m,d){o=lr.Push;let p=mf(y.location,m,d);c=f()+1;let _=rg(p,c),S=y.createHref(p);try{a.pushState(_,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;r.location.assign(S)}s&&l&&l({action:o,location:y.location,delta:1})}function g(m,d){o=lr.Replace;let p=mf(y.location,m,d);c=f();let _=rg(p,c),S=y.createHref(p);a.replaceState(_,"",S),s&&l&&l({action:o,location:y.location,delta:0})}function v(m){let d=r.location.origin!=="null"?r.location.origin:r.location.href,p=typeof m=="string"?m:fc(m);return p=p.replace(/ $/,"%20"),Et(d,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,d)}let y={get action(){return o},get location(){return t(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(ig,h),l=m,()=>{r.removeEventListener(ig,h),l=null}},createHref(m){return e(r,m)},createURL:v,encodeLocation(m){let d=v(m);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:u,replace:g,go(m){return a.go(m)}};return y}var sg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(sg||(sg={}));function dE(t,e,n){return n===void 0&&(n="/"),fE(t,e,n)}function fE(t,e,n,i){let r=typeof e=="string"?ua(e):e,s=Ks(r.pathname||"/",n);if(s==null)return null;let a=H_(t);hE(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=wE(s);o=ME(a[l],c)}return o}function H_(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(Et(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=xr([i,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(Et(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),H_(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:yE(c,s.index),routesMeta:f})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of G_(s.path))r(s,a,l)}),e}function G_(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=G_(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function hE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:SE(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const pE=/^:[\w-]+$/,mE=3,gE=2,vE=1,_E=10,xE=-2,ag=t=>t==="*";function yE(t,e){let n=t.split("/"),i=n.length;return n.some(ag)&&(i+=xE),e&&(i+=gE),n.filter(r=>!ag(r)).reduce((r,s)=>r+(pE.test(s)?mE:s===""?vE:_E),i)}function SE(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function ME(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",h=gf({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),u=l.route;if(!h)return null;Object.assign(r,h.params),a.push({params:r,pathname:xr([s,h.pathname]),pathnameBase:RE(xr([s,h.pathnameBase])),route:u}),h.pathnameBase!=="/"&&(s=xr([s,h.pathnameBase]))}return a}function gf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=EE(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,f,h)=>{let{paramName:u,isOptional:g}=f;if(u==="*"){let y=o[h]||"";a=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=o[h];return g&&!v?c[u]=void 0:c[u]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function EE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),_p(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function wE(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return _p(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ks(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const TE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bE=t=>TE.test(t);function CE(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ua(t):t,s;if(n)if(bE(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),_p(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=og(n.substring(1),"/"):s=og(n,e)}else s=e;return{pathname:s,search:PE(i),hash:LE(r)}}function og(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Du(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function AE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function xp(t,e){let n=AE(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function yp(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=ua(t):(r=po({},t),Et(!r.pathname||!r.pathname.includes("?"),Du("?","pathname","search",r)),Et(!r.pathname||!r.pathname.includes("#"),Du("#","pathname","hash",r)),Et(!r.search||!r.search.includes("#"),Du("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let h=e.length-1;if(!i&&a.startsWith("..")){let u=a.split("/");for(;u[0]==="..";)u.shift(),h-=1;r.pathname=u.join("/")}o=h>=0?e[h]:"/"}let l=CE(r,o),c=a&&a!=="/"&&a.endsWith("/"),f=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const xr=t=>t.join("/").replace(/\/\/+/g,"/"),RE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),PE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,LE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function NE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const j_=["post","put","patch","delete"];new Set(j_);const DE=["get",...j_];new Set(DE);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mo(){return mo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},mo.apply(this,arguments)}const Wc=$.createContext(null),W_=$.createContext(null),ji=$.createContext(null),Xc=$.createContext(null),br=$.createContext({outlet:null,matches:[],isDataRoute:!1}),X_=$.createContext(null);function IE(t,e){let{relative:n}=e===void 0?{}:e;da()||Et(!1);let{basename:i,navigator:r}=$.useContext(ji),{hash:s,pathname:a,search:o}=$c(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:xr([i,a])),r.createHref({pathname:l,search:o,hash:s})}function da(){return $.useContext(Xc)!=null}function fa(){return da()||Et(!1),$.useContext(Xc).location}function $_(t){$.useContext(ji).static||$.useLayoutEffect(t)}function ha(){let{isDataRoute:t}=$.useContext(br);return t?$E():OE()}function OE(){da()||Et(!1);let t=$.useContext(Wc),{basename:e,future:n,navigator:i}=$.useContext(ji),{matches:r}=$.useContext(br),{pathname:s}=fa(),a=JSON.stringify(xp(r,n.v7_relativeSplatPath)),o=$.useRef(!1);return $_(()=>{o.current=!0}),$.useCallback(function(c,f){if(f===void 0&&(f={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let h=yp(c,JSON.parse(a),s,f.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:xr([e,h.pathname])),(f.replace?i.replace:i.push)(h,f.state,f)},[e,i,a,s,t])}function $c(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=$.useContext(ji),{matches:r}=$.useContext(br),{pathname:s}=fa(),a=JSON.stringify(xp(r,i.v7_relativeSplatPath));return $.useMemo(()=>yp(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function UE(t,e){return FE(t,e)}function FE(t,e,n,i){da()||Et(!1);let{navigator:r}=$.useContext(ji),{matches:s}=$.useContext(br),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=fa(),f;if(e){var h;let m=typeof e=="string"?ua(e):e;l==="/"||(h=m.pathname)!=null&&h.startsWith(l)||Et(!1),f=m}else f=c;let u=f.pathname||"/",g=u;if(l!=="/"){let m=l.replace(/^\//,"").split("/");g="/"+u.replace(/^\//,"").split("/").slice(m.length).join("/")}let v=dE(t,{pathname:g}),y=HE(v&&v.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:xr([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:xr([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&y?$.createElement(Xc.Provider,{value:{location:mo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:lr.Pop}},y):y}function kE(){let t=XE(),e=NE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),n?$.createElement("pre",{style:r},n):null,null)}const zE=$.createElement(kE,null);class BE extends $.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?$.createElement(br.Provider,{value:this.props.routeContext},$.createElement(X_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function VE(t){let{routeContext:e,match:n,children:i}=t,r=$.useContext(Wc);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),$.createElement(br.Provider,{value:e},i)}function HE(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let f=a.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);f>=0||Et(!1),a=a.slice(0,Math.min(a.length,f+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<a.length;f++){let h=a[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=f),h.route.id){let{loaderData:u,errors:g}=n,v=h.route.loader&&u[h.route.id]===void 0&&(!g||g[h.route.id]===void 0);if(h.route.lazy||v){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((f,h,u)=>{let g,v=!1,y=null,m=null;n&&(g=o&&h.route.id?o[h.route.id]:void 0,y=h.route.errorElement||zE,l&&(c<0&&u===0?(qE("route-fallback"),v=!0,m=null):c===u&&(v=!0,m=h.route.hydrateFallbackElement||null)));let d=e.concat(a.slice(0,u+1)),p=()=>{let _;return g?_=y:v?_=m:h.route.Component?_=$.createElement(h.route.Component,null):h.route.element?_=h.route.element:_=f,$.createElement(VE,{match:h,routeContext:{outlet:f,matches:d,isDataRoute:n!=null},children:_})};return n&&(h.route.ErrorBoundary||h.route.errorElement||u===0)?$.createElement(BE,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var q_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(q_||{}),Y_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Y_||{});function GE(t){let e=$.useContext(Wc);return e||Et(!1),e}function jE(t){let e=$.useContext(W_);return e||Et(!1),e}function WE(t){let e=$.useContext(br);return e||Et(!1),e}function K_(t){let e=WE(),n=e.matches[e.matches.length-1];return n.route.id||Et(!1),n.route.id}function XE(){var t;let e=$.useContext(X_),n=jE(),i=K_();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function $E(){let{router:t}=GE(q_.UseNavigateStable),e=K_(Y_.UseNavigateStable),n=$.useRef(!1);return $_(()=>{n.current=!0}),$.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,mo({fromRouteId:e},s)))},[t,e])}const lg={};function qE(t,e,n){lg[t]||(lg[t]=!0)}function YE(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function vf(t){let{to:e,replace:n,state:i,relative:r}=t;da()||Et(!1);let{future:s,static:a}=$.useContext(ji),{matches:o}=$.useContext(br),{pathname:l}=fa(),c=ha(),f=yp(e,xp(o,s.v7_relativeSplatPath),l,r==="path"),h=JSON.stringify(f);return $.useEffect(()=>c(JSON.parse(h),{replace:n,state:i,relative:r}),[c,h,r,n,i]),null}function Fa(t){Et(!1)}function KE(t){let{basename:e="/",children:n=null,location:i,navigationType:r=lr.Pop,navigator:s,static:a=!1,future:o}=t;da()&&Et(!1);let l=e.replace(/^\/*/,"/"),c=$.useMemo(()=>({basename:l,navigator:s,static:a,future:mo({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=ua(i));let{pathname:f="/",search:h="",hash:u="",state:g=null,key:v="default"}=i,y=$.useMemo(()=>{let m=Ks(f,l);return m==null?null:{location:{pathname:m,search:h,hash:u,state:g,key:v},navigationType:r}},[l,f,h,u,g,v,r]);return y==null?null:$.createElement(ji.Provider,{value:c},$.createElement(Xc.Provider,{children:n,value:y}))}function ZE(t){let{children:e,location:n}=t;return UE(_f(e),n)}new Promise(()=>{});function _f(t,e){e===void 0&&(e=[]);let n=[];return $.Children.forEach(t,(i,r)=>{if(!$.isValidElement(i))return;let s=[...e,r];if(i.type===$.Fragment){n.push.apply(n,_f(i.props.children,s));return}i.type!==Fa&&Et(!1),!i.props.index||!i.props.children||Et(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=_f(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hc(){return hc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},hc.apply(this,arguments)}function Z_(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function JE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function QE(t,e){return t.button===0&&(!e||e==="_self")&&!JE(t)}const e1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],t1=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],n1="6";try{window.__reactRouterVersion=n1}catch{}const i1=$.createContext({isTransitioning:!1}),r1="startTransition",cg=Ky[r1];function s1(t){let{basename:e,children:n,future:i,window:r}=t,s=$.useRef();s.current==null&&(s.current=lE({window:r,v5Compat:!0}));let a=s.current,[o,l]=$.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},f=$.useCallback(h=>{c&&cg?cg(()=>l(h)):l(h)},[l,c]);return $.useLayoutEffect(()=>a.listen(f),[a,f]),$.useEffect(()=>YE(i),[i]),$.createElement(KE,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const a1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",o1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qc=$.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:f,viewTransition:h}=e,u=Z_(e,e1),{basename:g}=$.useContext(ji),v,y=!1;if(typeof c=="string"&&o1.test(c)&&(v=c,a1))try{let _=new URL(window.location.href),S=c.startsWith("//")?new URL(_.protocol+c):new URL(c),C=Ks(S.pathname,g);S.origin===_.origin&&C!=null?c=C+S.search+S.hash:y=!0}catch{}let m=IE(c,{relative:r}),d=u1(c,{replace:a,state:o,target:l,preventScrollReset:f,relative:r,viewTransition:h});function p(_){i&&i(_),_.defaultPrevented||d(_)}return $.createElement("a",hc({},u,{href:v||m,onClick:y||s?i:p,ref:n,target:l}))}),l1=$.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:a=!1,style:o,to:l,viewTransition:c,children:f}=e,h=Z_(e,t1),u=$c(l,{relative:h.relative}),g=fa(),v=$.useContext(W_),{navigator:y,basename:m}=$.useContext(ji),d=v!=null&&d1(u)&&c===!0,p=y.encodeLocation?y.encodeLocation(u).pathname:u.pathname,_=g.pathname,S=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;r||(_=_.toLowerCase(),S=S?S.toLowerCase():null,p=p.toLowerCase()),S&&m&&(S=Ks(S,m)||S);const C=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let b=_===p||!a&&_.startsWith(p)&&_.charAt(C)==="/",A=S!=null&&(S===p||!a&&S.startsWith(p)&&S.charAt(p.length)==="/"),x={isActive:b,isPending:A,isTransitioning:d},w=b?i:void 0,N;typeof s=="function"?N=s(x):N=[s,b?"active":null,A?"pending":null,d?"transitioning":null].filter(Boolean).join(" ");let R=typeof o=="function"?o(x):o;return $.createElement(qc,hc({},h,{"aria-current":w,className:N,ref:n,style:R,to:l,viewTransition:c}),typeof f=="function"?f(x):f)});var xf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(xf||(xf={}));var ug;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ug||(ug={}));function c1(t){let e=$.useContext(Wc);return e||Et(!1),e}function u1(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=ha(),c=fa(),f=$c(t,{relative:a});return $.useCallback(h=>{if(QE(h,n)){h.preventDefault();let u=i!==void 0?i:fc(c)===fc(f);l(t,{replace:u,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,f,i,r,n,t,s,a,o])}function d1(t,e){e===void 0&&(e={});let n=$.useContext(i1);n==null&&Et(!1);let{basename:i}=c1(xf.useViewTransitionState),r=$c(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Ks(n.currentLocation.pathname,i)||n.currentLocation.pathname,a=Ks(n.nextLocation.pathname,i)||n.nextLocation.pathname;return gf(r.pathname,a)!=null||gf(r.pathname,s)!=null}/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=t=>{const e=h1(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Iu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},m1=$.createContext({}),g1=()=>$.useContext(m1),v1=$.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>{const{size:c=24,strokeWidth:f=2,absoluteStrokeWidth:h=!1,color:u="currentColor",className:g=""}=g1()??{},v=i??h?Number(n??f)*24/Number(e??c):n??f;return $.createElement("svg",{ref:l,...Iu,width:e??c??Iu.width,height:e??c??Iu.height,stroke:t??u,strokeWidth:v,className:J_("lucide",g,r),...!s&&!p1(o)&&{"aria-hidden":"true"},...o},[...a.map(([y,m])=>$.createElement(y,m)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=(t,e)=>{const n=$.forwardRef(({className:i,...r},s)=>$.createElement(v1,{ref:s,iconNode:e,className:J_(`lucide-${f1(dg(t))}`,`lucide-${t}`,i),...r}));return n.displayName=dg(t),n};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],x1=rt("arrow-right",_1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],cr=rt("badge-check",y1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],M1=rt("box",S1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Q_=rt("briefcase",E1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],T1=rt("camera",w1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],ex=rt("chevron-left",b1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],tx=rt("chevron-right",C1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Ou=rt("circle-check-big",A1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],P1=rt("eye",R1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]],N1=rt("frame",L1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=[["path",{d:"M2 3v18",key:"pzttux"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2",key:"btr8bg"}],["path",{d:"M22 3v18",key:"6jf3v"}]],I1=rt("gallery-horizontal",D1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],U1=rt("globe",O1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9",key:"1hayfq"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"15ts47"}]],k1=rt("hammer",F1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],B1=rt("heart",z1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],H1=rt("house",V1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],j1=rt("info",G1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],X1=rt("link-2",W1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],q1=rt("mail",$1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],K1=rt("map-pin",Y1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],J1=rt("message-circle",Z1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]],ew=rt("paintbrush",Q1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],nw=rt("phone",tw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],rw=rt("quote",iw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],nx=rt("search",sw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ow=rt("settings",aw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],cw=rt("shield-check",lw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}]],dw=rt("square-dashed-bottom",uw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],ix=rt("star",fw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],rx=rt("user-plus",hw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],mw=rt("wrench",pw),gw="http://localhost:8080";function vw(t){return t?{Authorization:`Bearer ${t}`}:{}}function _w(t={}){const e=Object.entries(t).filter(([,n])=>n!=null&&`${n}`.trim()!=="");return e.length===0?"":`?${new URLSearchParams(e).toString()}`}async function Lt(t,{method:e="GET",body:n,token:i}={}){const r=await fetch(`${gw}${t}`,{method:e,headers:{"Content-Type":"application/json",...vw(i)},body:n?JSON.stringify(n):void 0});if(!r.ok){const s=await r.json().catch(()=>({}));throw new Error(s.message||"Request failed")}return r.status===204?null:r.json()}const Ot={register:t=>Lt("/auth/register",{method:"POST",body:t}),login:t=>Lt("/auth/login",{method:"POST",body:t}),refresh:t=>Lt("/auth/refresh",{method:"POST",body:t}),getServices:t=>Lt(`/services${_w(t)}`),getMyServices:t=>Lt("/services/mine",{token:t}),createService:(t,e)=>Lt("/services",{method:"POST",body:t,token:e}),updateService:(t,e,n)=>Lt(`/services/${t}`,{method:"PUT",body:e,token:n}),createOrder:(t,e)=>Lt("/orders",{method:"POST",body:t,token:e}),getOrders:t=>Lt("/orders",{token:t}),updateOrderStatus:(t,e,n)=>Lt(`/orders/${t}/status`,{method:"PUT",body:e,token:n}),createPayment:(t,e)=>Lt("/payments/create",{method:"POST",body:t,token:e}),releasePayment:(t,e)=>Lt("/payments/release",{method:"POST",body:t,token:e}),createReview:(t,e)=>Lt("/reviews",{method:"POST",body:t,token:e}),getUsers:t=>Lt("/admin/users",{token:t}),approveVendor:(t,e)=>Lt(`/admin/vendors/${t}/approve`,{method:"PATCH",token:e}),getTransactions:t=>Lt("/admin/transactions",{token:t}),getVendorAnalytics:t=>Lt("/vendors/me/analytics",{token:t}),getSavedServices:t=>Lt("/clients/me/saved-services",{token:t}),getSavedServiceIds:t=>Lt("/clients/me/saved-service-ids",{token:t}),saveService:(t,e)=>Lt(`/clients/me/saved-services/${t}`,{method:"POST",token:e}),unsaveService:(t,e)=>Lt(`/clients/me/saved-services/${t}`,{method:"DELETE",token:e})},sx=$.createContext(null),pc="marketplace-auth";function xw(){const t=localStorage.getItem(pc);if(!t)return null;try{return JSON.parse(t)}catch{return localStorage.removeItem(pc),null}}function yw({children:t}){const[e,n]=$.useState(xw);$.useEffect(()=>{e?localStorage.setItem(pc,JSON.stringify(e)):localStorage.removeItem(pc)},[e]);const i=$.useMemo(()=>({user:(e==null?void 0:e.user)||null,token:(e==null?void 0:e.accessToken)||null,isAuthenticated:!!(e!=null&&e.accessToken),async login(r){const s=await Ot.login(r);n({user:{id:s.userId,name:s.name,email:s.email,role:s.role,status:s.status,verified:!!s.verified,profileImage:s.profileImage||null},accessToken:s.accessToken,refreshToken:s.refreshToken})},async register(r){const s=await Ot.register(r);n({user:{id:s.userId,name:s.name,email:s.email,role:s.role,status:s.status,verified:!!s.verified,profileImage:s.profileImage||null},accessToken:s.accessToken,refreshToken:s.refreshToken})},logout(){n(null)}}),[e]);return M.jsx(sx.Provider,{value:i,children:t})}function ns(){return $.useContext(sx)}function Sw(){const{user:t,logout:e}=ns(),n=ha(),[i,r]=$.useState(!1);return M.jsxs("header",{className:"topbar",children:[M.jsxs(qc,{to:"/",className:"brand",children:[M.jsx("span",{className:"brand-mark",children:"S"}),M.jsx("span",{children:"ServiceHub"})]}),M.jsx("button",{className:"menu-toggle",onClick:()=>r(s=>!s),"aria-label":"Toggle menu",children:i?"Close":"Menu"}),M.jsxs("nav",{className:`nav-links ${i?"open":""}`,children:[M.jsxs("a",{href:"#home",className:"nav-link",onClick:()=>r(!1),children:[M.jsx(H1,{size:15})," Home"]}),M.jsxs("a",{href:"#gallery",className:"nav-link",onClick:()=>r(!1),children:[M.jsx(I1,{size:15})," Gallery"]}),M.jsxs("a",{href:"#services",className:"nav-link",onClick:()=>r(!1),children:[M.jsx(Q_,{size:15})," Services"]}),M.jsxs("a",{href:"#about",className:"nav-link",onClick:()=>r(!1),children:[M.jsx(j1,{size:15})," About Us"]}),M.jsxs("a",{href:"#settings",className:"nav-link",onClick:()=>r(!1),children:[M.jsx(ow,{size:15})," Settings"]}),t&&M.jsx(l1,{to:"/dashboard",className:({isActive:s})=>`nav-link ${s?"active":""}`,onClick:()=>r(!1),children:"Dashboard"})]}),M.jsx("div",{className:"topbar-meta",children:t?M.jsxs(M.Fragment,{children:[M.jsxs("span",{className:"user-chip",children:[t.role," | ",t.name]}),M.jsx("button",{className:"ghost-button",onClick:e,children:"Logout"})]}):M.jsx("button",{className:"login-button",onClick:()=>{r(!1),n("/login")},children:"Login"})})]})}function Mw(){return M.jsxs("footer",{className:"site-footer",children:[M.jsxs("div",{className:"page footer-grid",children:[M.jsxs("div",{children:[M.jsxs("div",{className:"footer-brand",children:[M.jsx("span",{className:"brand-mark",children:M.jsx(Q_,{size:16})}),M.jsx("strong",{children:"ServiceHub"})]}),M.jsx("p",{children:"Connecting clients with trusted professionals for home and office services."}),M.jsxs("div",{className:"social-links",children:[M.jsx("a",{href:"#","aria-label":"Website",children:M.jsx(U1,{size:16})}),M.jsx("a",{href:"#","aria-label":"Community",children:M.jsx(J1,{size:16})}),M.jsx("a",{href:"#","aria-label":"Gallery",children:M.jsx(T1,{size:16})}),M.jsx("a",{href:"#","aria-label":"Links",children:M.jsx(X1,{size:16})})]})]}),M.jsxs("div",{children:[M.jsx("h4",{children:"Quick Links"}),M.jsxs("ul",{children:[M.jsx("li",{children:M.jsx("a",{href:"#home",children:"Home"})}),M.jsx("li",{children:M.jsx("a",{href:"#gallery",children:"Gallery"})}),M.jsx("li",{children:M.jsx("a",{href:"#vendors",children:"Vendors"})}),M.jsx("li",{children:M.jsx("a",{href:"#services",children:"Services"})})]})]}),M.jsxs("div",{children:[M.jsx("h4",{children:"Contact"}),M.jsxs("ul",{className:"contact-list",children:[M.jsxs("li",{children:[M.jsx(K1,{size:15})," 123 Service Street, Business District"]}),M.jsxs("li",{children:[M.jsx(nw,{size:15})," +1 (555) 123-4567"]}),M.jsxs("li",{children:[M.jsx(q1,{size:15})," contact@servicehub.com"]})]})]})]}),M.jsx("div",{className:"footer-bottom",children:"Copyright 2026 ServiceHub. All rights reserved."})]})}function Ew({children:t}){const{user:e}=ns();return e?t:M.jsx(vf,{to:"/login",replace:!0})}function ww({order:t,children:e}){return M.jsxs("article",{className:"card order-card",children:[M.jsxs("div",{className:"order-header",children:[M.jsxs("div",{children:[M.jsx("span",{className:`status-chip ${t.status.toLowerCase()}`,children:t.status.replace("_"," ")}),M.jsx("h3",{children:t.serviceTitle})]}),M.jsxs("strong",{children:["$",t.price]})]}),M.jsxs("p",{children:["Client: ",t.clientName]}),M.jsxs("p",{children:["Vendor: ",t.vendorName]}),t.preferredDate&&M.jsxs("p",{children:["Preferred Date: ",new Date(t.preferredDate).toLocaleDateString()]}),t.workSubmission&&M.jsxs("p",{className:"submission-note",children:["Submission: ",t.workSubmission]}),M.jsx("div",{className:"action-row",children:e})]})}const Uu={title:"",description:"",price:"",category:""},fg={orderId:"",rating:5,comment:""},Tw=["Painting","Window Making","Plastering","POP / False Ceiling","PVC / Modular Work","Renovation","Maintenance, repairs, cleaning, and installation services"];function bw(){const{user:t,token:e}=ns(),[n,i]=$.useState([]),[r,s]=$.useState([]),[a,o]=$.useState([]),[l,c]=$.useState([]),[f,h]=$.useState(null),[u,g]=$.useState([]),[v,y]=$.useState(Uu),[m,d]=$.useState(null),[p,_]=$.useState(fg),[S,C]=$.useState("ALL"),[b,A]=$.useState(""),[x,w]=$.useState(""),[N,R]=$.useState(!0);async function D(){try{w(""),R(!0);const F=await Ot.getOrders(e);if(i(F),t.role==="VENDOR"){const[pe,Ie]=await Promise.all([Ot.getMyServices(e),Ot.getVendorAnalytics(e)]);c(pe),h(Ie)}if(t.role==="CLIENT"){const pe=await Ot.getSavedServices(e);g(pe)}if(t.role==="ADMIN"){const[pe,Ie]=await Promise.all([Ot.getUsers(e),Ot.getTransactions(e)]);s(pe),o(Ie)}}catch(F){w(F.message)}finally{R(!1)}}$.useEffect(()=>{D()},[]);const U=$.useMemo(()=>S==="ALL"?n:n.filter(F=>F.status===S),[n,S]),q=$.useMemo(()=>n.filter(F=>F.status==="COMPLETED"||F.status==="APPROVED"),[n]),H=$.useMemo(()=>r.filter(F=>F.role==="VENDOR"&&!F.verified).length,[r]);async function j(F,pe,Ie=""){try{A(""),w(""),await Ot.updateOrderStatus(F,{status:pe,submissionNote:Ie},e),A(pe==="APPROVED"?"Work approved. Admin can release escrow now.":`Order #${F} updated to ${pe}.`),await D()}catch(nt){w(nt.message)}}async function L(F){F.preventDefault();const pe={...v,price:Number(v.price)};if(!pe.title||!pe.description||!pe.category||Number.isNaN(pe.price)||pe.price<=0){w("Please provide valid service details with a positive price.");return}try{A(""),w(""),m?(await Ot.updateService(m,pe,e),A("Service updated.")):(await Ot.createService(pe,e),A("Service created.")),y(Uu),d(null),await D()}catch(Ie){w(Ie.message)}}function I(F){d(F.id),y({title:F.title,description:F.description,price:F.price,category:F.category})}async function V(F){if(F.preventDefault(),!p.orderId){w("Select an order to review.");return}try{A(""),w(""),await Ot.createReview({...p,orderId:Number(p.orderId),rating:Number(p.rating)},e),_(fg),A("Review submitted.")}catch(pe){w(pe.message)}}async function K(F){try{A(""),w(""),await Ot.approveVendor(F,e),A("Vendor verified with blue check."),await D()}catch(pe){w(pe.message)}}async function ie(F){try{A(""),w(""),await Ot.releasePayment({orderId:F},e),A(`Escrow released for order #${F}.`),await D()}catch(pe){w(pe.message)}}return M.jsxs("main",{className:"page",children:[M.jsxs("section",{className:"dashboard-header",children:[M.jsxs("div",{children:[M.jsx("span",{className:"eyebrow",children:t.role}),M.jsxs("h1",{className:"vendor-name-row",children:[M.jsx("span",{children:t.name}),t.role==="VENDOR"&&t.verified&&M.jsx(cr,{size:18,className:"verified-badge-inline","aria-label":"Verified vendor"})]}),M.jsxs("p",{children:["Status: ",t.status]}),t.role==="VENDOR"&&M.jsx("p",{className:"subtle",children:t.verified?"Your profile shows the blue verified badge to all users.":"You can publish services now. Admin verification only adds the blue badge."})]}),M.jsxs("div",{className:"stats-grid mini",children:[M.jsxs("article",{className:"card stat-card",children:[M.jsx("strong",{children:n.length}),M.jsx("span",{children:"Total orders"})]}),t.role==="VENDOR"&&M.jsxs("article",{className:"card stat-card",children:[M.jsx("strong",{children:l.length}),M.jsx("span",{children:"Your services"})]}),t.role==="ADMIN"&&M.jsxs("article",{className:"card stat-card",children:[M.jsx("strong",{children:H}),M.jsx("span",{children:"Unverified vendors"})]}),t.role==="CLIENT"&&M.jsxs("article",{className:"card stat-card",children:[M.jsx("strong",{children:u.length}),M.jsx("span",{children:"Saved services"})]})]})]}),b&&M.jsx("p",{className:"notice",children:b}),x&&M.jsx("p",{className:"error",children:x}),M.jsx("section",{className:"card filters-row compact",children:M.jsxs("label",{children:["Order status",M.jsxs("select",{value:S,onChange:F=>C(F.target.value),children:[M.jsx("option",{value:"ALL",children:"All statuses"}),["PAID","IN_PROGRESS","SUBMITTED","APPROVED","COMPLETED","CANCELLED","DISPUTE"].map(F=>M.jsx("option",{value:F,children:F},F))]})]})}),t.role==="VENDOR"&&f&&M.jsxs("section",{className:"card analytics-panel",children:[M.jsx("h2",{children:"Vendor analytics"}),M.jsxs("div",{className:"stats-grid",children:[M.jsxs("article",{className:"card stat-card",children:[M.jsx("strong",{children:f.totalOrders}),M.jsx("span",{children:"Total orders"})]}),M.jsxs("article",{className:"card stat-card",children:[M.jsx("strong",{children:f.activeOrders}),M.jsx("span",{children:"Active orders"})]}),M.jsxs("article",{className:"card stat-card",children:[M.jsx("strong",{children:f.completedOrders}),M.jsx("span",{children:"Completed orders"})]}),M.jsxs("article",{className:"card stat-card",children:[M.jsxs("strong",{children:["$",f.averageOrderValue]}),M.jsx("span",{children:"Avg order value"})]}),M.jsxs("article",{className:"card stat-card",children:[M.jsxs("strong",{children:["$",f.grossOrderValue]}),M.jsx("span",{children:"Gross pipeline"})]}),M.jsxs("article",{className:"card stat-card",children:[M.jsxs("strong",{children:["$",f.completedOrderValue]}),M.jsx("span",{children:"Realized revenue"})]})]})]}),t.role==="VENDOR"&&M.jsxs("section",{className:"card form-card",children:[M.jsx("h2",{children:m?"Edit service":"Create service"}),M.jsxs("form",{onSubmit:L,children:[M.jsx("input",{placeholder:"Title",value:v.title,onChange:F=>y({...v,title:F.target.value})}),M.jsx("textarea",{placeholder:"Description",value:v.description,onChange:F=>y({...v,description:F.target.value})}),M.jsx("input",{placeholder:"Price",value:v.price,onChange:F=>y({...v,price:F.target.value})}),M.jsxs("select",{value:v.category,onChange:F=>y({...v,category:F.target.value}),children:[M.jsx("option",{value:"",children:"Select category"}),Tw.map(F=>M.jsx("option",{value:F,children:F},F))]}),M.jsxs("div",{className:"action-row",children:[M.jsx("button",{className:"primary-button",type:"submit",children:m?"Save changes":"Publish service"}),m&&M.jsx("button",{className:"ghost-button",type:"button",onClick:()=>{d(null),y(Uu)},children:"Cancel edit"})]})]}),l.length>0&&M.jsx("div",{className:"stack-list",children:l.map(F=>M.jsxs("div",{className:"list-item",children:[M.jsxs("span",{children:[F.title," ($",F.price,")",F.vendorVerified&&M.jsx(cr,{size:15,className:"verified-badge-inline","aria-label":"Verified vendor"})]}),M.jsx("button",{className:"ghost-button",type:"button",onClick:()=>I(F),children:"Edit"})]},F.id))})]}),N&&M.jsx("p",{className:"subtle",children:"Loading dashboard..."}),!N&&U.length===0&&M.jsx("p",{className:"subtle",children:"No orders found for this filter."}),M.jsx("section",{className:"grid",children:U.map(F=>M.jsxs(ww,{order:F,children:[t.role==="VENDOR"&&F.status==="PAID"&&M.jsx("button",{className:"primary-button",onClick:()=>j(F.id,"IN_PROGRESS"),children:"Accept order"}),t.role==="VENDOR"&&F.status==="IN_PROGRESS"&&M.jsx("button",{className:"primary-button",onClick:()=>j(F.id,"SUBMITTED","Work delivered through dashboard"),children:"Submit work"}),t.role==="CLIENT"&&F.status==="SUBMITTED"&&M.jsx("button",{className:"primary-button",onClick:()=>j(F.id,"APPROVED"),children:"Approve work"}),t.role==="ADMIN"&&F.status==="APPROVED"&&M.jsx("button",{className:"primary-button",onClick:()=>ie(F.id),children:"Release escrow"})]},F.id))}),t.role==="CLIENT"&&M.jsxs(M.Fragment,{children:[M.jsxs("section",{className:"card form-card",children:[M.jsx("h2",{children:"Leave review"}),M.jsxs("form",{onSubmit:V,children:[M.jsxs("select",{value:p.orderId,onChange:F=>_({...p,orderId:F.target.value}),children:[M.jsx("option",{value:"",children:"Select order"}),q.map(F=>M.jsxs("option",{value:F.id,children:["#",F.id," - ",F.serviceTitle]},F.id))]}),M.jsx("select",{value:p.rating,onChange:F=>_({...p,rating:F.target.value}),children:[5,4,3,2,1].map(F=>M.jsxs("option",{value:F,children:[F," stars"]},F))}),M.jsx("textarea",{placeholder:"Feedback",value:p.comment,onChange:F=>_({...p,comment:F.target.value})}),M.jsx("button",{className:"primary-button",type:"submit",children:"Submit review"})]})]}),M.jsxs("section",{className:"card admin-card",children:[M.jsx("h2",{children:"Saved services"}),M.jsxs("div",{className:"stack-list",children:[u.length===0&&M.jsx("p",{className:"subtle",children:"No saved services yet. Save from Marketplace to shortlist options."}),u.map(F=>M.jsxs("div",{className:"list-item vertical",children:[M.jsxs("span",{children:[F.title," ($",F.price,")"]}),M.jsxs("small",{className:"vendor-inline-name",children:[F.category," by ",F.vendorName,F.vendorVerified&&M.jsx(cr,{size:14,className:"verified-badge-inline","aria-label":"Verified vendor"})]})]},F.id))]})]})]}),t.role==="ADMIN"&&M.jsxs(M.Fragment,{children:[M.jsxs("section",{className:"card admin-card",children:[M.jsx("h2",{children:"User supervision"}),M.jsx("div",{className:"stack-list",children:r.map(F=>M.jsxs("div",{className:"list-item",children:[M.jsxs("span",{className:"vendor-inline-name",children:[F.name," (",F.role,") - ",F.status,F.role==="VENDOR"&&F.verified&&M.jsx(cr,{size:15,className:"verified-badge-inline","aria-label":"Verified vendor"})]}),F.role==="VENDOR"&&!F.verified&&M.jsx("button",{className:"primary-button",onClick:()=>K(F.id),children:"Give blue check"})]},F.id))})]}),M.jsxs("section",{className:"card admin-card",children:[M.jsx("h2",{children:"Transaction ledger"}),M.jsx("div",{className:"stack-list",children:a.map(F=>M.jsxs("div",{className:"list-item vertical",children:[M.jsxs("span",{children:[F.type," $",F.amount," [",F.referenceId,"]"]}),M.jsx("small",{children:F.description})]},F.id))})]})]})]})}function Cw(){const{login:t}=ns(),e=ha(),[n,i]=$.useState({email:"",password:""}),[r,s]=$.useState(""),[a,o]=$.useState(!1);async function l(c){c.preventDefault();try{s(""),o(!0),await t(n),e("/dashboard")}catch(f){s(f.message)}finally{o(!1)}}return M.jsx("main",{className:"page narrow auth-page",children:M.jsxs("form",{className:"card form-card auth-card",onSubmit:l,children:[M.jsx("span",{className:"eyebrow",children:"Sign In"}),M.jsx("h1",{children:"Welcome back"}),M.jsx("p",{className:"subtle",children:"Sign in to continue as a client, vendor, or admin."}),M.jsx("input",{placeholder:"Email",type:"email",value:n.email,onChange:c=>i({...n,email:c.target.value}),required:!0}),M.jsx("input",{placeholder:"Password",type:"password",value:n.password,onChange:c=>i({...n,password:c.target.value}),required:!0}),r&&M.jsx("p",{className:"error",children:r}),M.jsx("button",{className:"primary-button",type:"submit",disabled:a,children:a?"Signing in...":"Sign in"}),M.jsx("div",{className:"auth-divider","aria-hidden":"true"}),M.jsxs("div",{className:"auth-switch",children:[M.jsx("span",{children:"New here?"}),M.jsx(qc,{className:"ghost-button auth-link-button",to:"/register",children:"Create account"})]})]})})}function Aw({service:t,onPrimaryAction:e,actionLabel:n,actionDisabled:i,bookingInProgress:r,onSaveAction:s,isSaved:a,saveInProgress:o}){return M.jsxs("article",{className:"card service-card",children:[M.jsxs("div",{className:"service-head",children:[M.jsx("span",{className:"eyebrow",children:t.category}),M.jsxs("span",{className:"subtle",children:["Published ",new Date(t.createdAt).toLocaleDateString()]})]}),M.jsx("h3",{children:t.title}),M.jsx("p",{children:t.description}),M.jsx("div",{className:"service-footer",children:M.jsxs("div",{children:[M.jsxs("strong",{children:["$",t.price]}),M.jsxs("span",{className:"vendor-inline-name",children:["by ",t.vendorName,t.vendorVerified&&M.jsx(cr,{size:15,className:"verified-badge-inline","aria-label":"Verified vendor"})]})]})}),t.vendorVerified&&M.jsxs("p",{className:"verified-chip",children:[M.jsx(cr,{size:14})," Verified vendor"]}),M.jsx("p",{className:"quote-note",children:"Upfront quote, no hidden costs."}),M.jsxs("div",{className:"service-actions",children:[e&&M.jsx("button",{className:"primary-button",onClick:()=>e(t),disabled:i||r,children:r?"Booking...":n}),s&&M.jsx("button",{className:"ghost-button",onClick:()=>s(t),disabled:o,children:o?"Updating...":a?"Saved":"Save"})]})]})}function Rw({onExplore:t,onJoin:e}){return M.jsx("section",{className:"page",children:M.jsxs("article",{className:"cta-banner",children:[M.jsxs("div",{children:[M.jsx("h2",{children:"Need quality work done by verified professionals?"}),M.jsx("p",{children:"Join thousands of clients managing projects with escrow safety."}),M.jsxs("div",{className:"cta-points",children:[M.jsxs("span",{children:[M.jsx(Ou,{size:16})," Verified Vendors"]}),M.jsxs("span",{children:[M.jsx(Ou,{size:16})," Quality Guaranteed"]}),M.jsxs("span",{children:[M.jsx(Ou,{size:16})," Transparent Pricing"]})]})]}),M.jsxs("div",{className:"cta-actions",children:[M.jsxs("button",{className:"primary-button",onClick:t,children:[M.jsx(nx,{size:16})," Explore Services"]}),M.jsxs("button",{className:"ghost-button hero-outline",onClick:e,children:[M.jsx(rx,{size:16})," Join as Vendor"]})]})]})})}const Pw=[{id:"painting",title:"Painting",description:"Interior & exterior painting services",image:"https://images.unsplash.com/photo-1573546005910-cf18cae9f39c?auto=format&fit=crop&w=900&q=80",icon:ew},{id:"window-making",title:"Window Making",description:"Custom windows & door frames",image:"https://images.unsplash.com/photo-1758923530724-1ad597412421?auto=format&fit=crop&w=900&q=80",icon:N1},{id:"plastering",title:"Plastering",description:"Wall plastering & finishing",image:"https://images.unsplash.com/photo-1766961980272-921bba4240bc?auto=format&fit=crop&w=900&q=80",icon:dw},{id:"pop",title:"POP / False Ceiling",description:"Modern false ceiling designs",image:"https://images.unsplash.com/photo-1714462187247-add7ed99e5d2?auto=format&fit=crop&w=900&q=80",icon:M1},{id:"pvc-modular",title:"PVC / Modular Work",description:"Modular kitchen & furniture",image:"https://images.unsplash.com/photo-1736390800504-d3963b553aa3?auto=format&fit=crop&w=900&q=80",icon:k1},{id:"renovation",title:"Renovation",description:"Complete home & office renovation",image:"https://images.unsplash.com/photo-1768321902290-54497eeb9cf6?auto=format&fit=crop&w=900&q=80",icon:mw},{id:"maintenance",title:"Maintenance Services",description:"Maintenance, repairs, cleaning, and installation services",image:"https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",icon:cw}],Lw=["Painting: Interior & exterior painting services","Window Making: Custom windows & door frames","Plastering: Wall plastering & finishing","POP / False Ceiling: Modern false ceiling designs","PVC / Modular Work: Modular kitchen & furniture","Renovation: Complete home & office renovation","Maintenance, repairs, cleaning, and installation services"];function Nw(){return M.jsx("section",{className:"section-strip",id:"services-categories",children:M.jsxs("div",{className:"page section-block",children:[M.jsxs("div",{className:"section-headline",children:[M.jsx("h2",{children:"Work Categories"}),M.jsx("p",{children:"Explore professional services for construction and interior improvement."})]}),M.jsx("ul",{className:"category-text-list",children:Lw.map(t=>M.jsx("li",{children:t},t))}),M.jsx("div",{className:"category-grid",children:Pw.map(t=>{const e=t.icon;return M.jsxs("article",{className:"category-tile image-card",children:[M.jsx("div",{className:"category-image-wrap",children:M.jsx("img",{src:t.image,alt:t.title,className:"category-image"})}),M.jsxs("div",{className:"category-body",children:[M.jsx("div",{className:"category-icon",children:M.jsx(e,{size:18})}),M.jsx("h3",{children:t.title}),M.jsx("p",{children:t.description})]})]},t.id)})})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sp="183",Dw=0,hg=1,Iw=2,Ol=1,Ow=2,ka=3,Mr=0,En=1,Pi=2,Oi=0,zs=1,pg=2,mg=3,gg=4,Uw=5,kr=100,Fw=101,kw=102,zw=103,Bw=104,Vw=200,Hw=201,Gw=202,jw=203,yf=204,Sf=205,Ww=206,Xw=207,$w=208,qw=209,Yw=210,Kw=211,Zw=212,Jw=213,Qw=214,Mf=0,Ef=1,wf=2,Zs=3,Tf=4,bf=5,Cf=6,Af=7,ax=0,eT=1,tT=2,gi=0,ox=1,lx=2,cx=3,ux=4,dx=5,fx=6,hx=7,px=300,Jr=301,Js=302,Fu=303,ku=304,Yc=306,Rf=1e3,Di=1001,Pf=1002,qt=1003,nT=1004,Ko=1005,rn=1006,zu=1007,Gr=1008,Rn=1009,mx=1010,gx=1011,go=1012,Mp=1013,_i=1014,fi=1015,Vi=1016,Ep=1017,wp=1018,vo=1020,vx=35902,_x=35899,xx=1021,yx=1022,Qn=1023,Hi=1026,jr=1027,Sx=1028,Tp=1029,Qs=1030,bp=1031,Cp=1033,Ul=33776,Fl=33777,kl=33778,zl=33779,Lf=35840,Nf=35841,Df=35842,If=35843,Of=36196,Uf=37492,Ff=37496,kf=37488,zf=37489,Bf=37490,Vf=37491,Hf=37808,Gf=37809,jf=37810,Wf=37811,Xf=37812,$f=37813,qf=37814,Yf=37815,Kf=37816,Zf=37817,Jf=37818,Qf=37819,eh=37820,th=37821,nh=36492,ih=36494,rh=36495,sh=36283,ah=36284,oh=36285,lh=36286,iT=3200,Mx=0,rT=1,sr="",Fn="srgb",ea="srgb-linear",mc="linear",ot="srgb",as=7680,vg=519,sT=512,aT=513,oT=514,Ap=515,lT=516,cT=517,Rp=518,uT=519,_g=35044,xg="300 es",hi=2e3,_o=2001;function dT(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function gc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function fT(){const t=gc("canvas");return t.style.display="block",t}const yg={};function Sg(...t){const e="THREE."+t.shift();console.log(e,...t)}function Ex(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Fe(...t){t=Ex(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function tt(...t){t=Ex(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function vc(...t){const e=t.join(" ");e in yg||(yg[e]=!0,Fe(...t))}function hT(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const pT={[Mf]:Ef,[wf]:Cf,[Tf]:Af,[Zs]:bf,[Ef]:Mf,[Cf]:wf,[Af]:Tf,[bf]:Zs};class pa{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bu=Math.PI/180,ch=180/Math.PI;function bo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[t&255]+en[t>>8&255]+en[t>>16&255]+en[t>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[n&63|128]+en[n>>8&255]+"-"+en[n>>16&255]+en[n>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function mT(t,e){return(t%e+e)%e}function Vu(t,e,n){return(1-n)*t+n*e}function ba(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function mn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,n=0){Ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ma{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],u=s[a+0],g=s[a+1],v=s[a+2],y=s[a+3];if(h!==y||l!==u||c!==g||f!==v){let m=l*u+c*g+f*v+h*y;m<0&&(u=-u,g=-g,v=-v,y=-y,m=-m);let d=1-o;if(m<.9995){const p=Math.acos(m),_=Math.sin(p);d=Math.sin(d*p)/_,o=Math.sin(o*p)/_,l=l*d+u*o,c=c*d+g*o,f=f*d+v*o,h=h*d+y*o}else{l=l*d+u*o,c=c*d+g*o,f=f*d+v*o,h=h*d+y*o;const p=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=p,c*=p,f*=p,h*=p}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[a],u=s[a+1],g=s[a+2],v=s[a+3];return e[n]=o*v+f*h+l*g-c*u,e[n+1]=l*v+f*u+c*h-o*g,e[n+2]=c*v+f*g+o*u-l*h,e[n+3]=f*v-o*h-l*u-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),h=o(s/2),u=l(i/2),g=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=u*f*h+c*g*v,this._y=c*g*h-u*f*v,this._z=c*f*v+u*g*h,this._w=c*f*h-u*g*v;break;case"YXZ":this._x=u*f*h+c*g*v,this._y=c*g*h-u*f*v,this._z=c*f*v-u*g*h,this._w=c*f*h+u*g*v;break;case"ZXY":this._x=u*f*h-c*g*v,this._y=c*g*h+u*f*v,this._z=c*f*v+u*g*h,this._w=c*f*h-u*g*v;break;case"ZYX":this._x=u*f*h-c*g*v,this._y=c*g*h+u*f*v,this._z=c*f*v-u*g*h,this._w=c*f*h+u*g*v;break;case"YZX":this._x=u*f*h+c*g*v,this._y=c*g*h+u*f*v,this._z=c*f*v-u*g*h,this._w=c*f*h-u*g*v;break;case"XZY":this._x=u*f*h-c*g*v,this._y=c*g*h-u*f*v,this._z=c*f*v+u*g*h,this._w=c*f*h+u*g*v;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],h=n[10],u=i+o+h;if(u>0){const g=.5/Math.sqrt(u+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>h){const g=2*Math.sqrt(1+i-o-h);this._w=(f-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>h){const g=2*Math.sqrt(1+o-i-h);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+h-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Mg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Mg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*f,this.y=i+l*f+o*c-s*h,this.z=r+l*h+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hu.copy(this).projectOnVector(e),this.sub(Hu)}reflect(e){return this.sub(Hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hu=new G,Mg=new ma;class Be{constructor(e,n,i,r,s,a,o,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],h=i[7],u=i[2],g=i[5],v=i[8],y=r[0],m=r[3],d=r[6],p=r[1],_=r[4],S=r[7],C=r[2],b=r[5],A=r[8];return s[0]=a*y+o*p+l*C,s[3]=a*m+o*_+l*b,s[6]=a*d+o*S+l*A,s[1]=c*y+f*p+h*C,s[4]=c*m+f*_+h*b,s[7]=c*d+f*S+h*A,s[2]=u*y+g*p+v*C,s[5]=u*m+g*_+v*b,s[8]=u*d+g*S+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*a-o*c,u=o*l-f*s,g=c*s-a*l,v=n*h+i*u+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=h*y,e[1]=(r*c-f*i)*y,e[2]=(o*i-r*a)*y,e[3]=u*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=g*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Gu.makeScale(e,n)),this}rotate(e){return this.premultiply(Gu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Gu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gu=new Be,Eg=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wg=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gT(){const t={enabled:!0,workingColorSpace:ea,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ot&&(r.r=Ui(r.r),r.g=Ui(r.g),r.b=Ui(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(r.r=Bs(r.r),r.g=Bs(r.g),r.b=Bs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===sr?mc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return vc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return vc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ea]:{primaries:e,whitePoint:i,transfer:mc,toXYZ:Eg,fromXYZ:wg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Eg,fromXYZ:wg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),t}const Je=gT();function Ui(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Bs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let os;class vT{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{os===void 0&&(os=gc("canvas")),os.width=e.width,os.height=e.height;const r=os.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=os}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=gc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ui(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ui(n[i]/255)*255):n[i]=Ui(n[i]);return{data:n,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _T=0;class Pp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_T++}),this.uuid=bo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ju(r[a].image)):s.push(ju(r[a]))}else s=ju(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ju(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?vT.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}let xT=0;const Wu=new G;class un extends pa{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Di,r=Di,s=rn,a=Gr,o=Qn,l=Rn,c=un.DEFAULT_ANISOTROPY,f=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=bo(),this.name="",this.source=new Pp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wu).x}get height(){return this.source.getSize(Wu).y}get depth(){return this.source.getSize(Wu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Fe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Fe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==px)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rf:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case Pf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rf:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case Pf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=px;un.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,n=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],u=l[1],g=l[5],v=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+y)<.1&&Math.abs(v+m)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,S=(g+1)/2,C=(d+1)/2,b=(f+u)/4,A=(h+y)/4,x=(v+m)/4;return _>S&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=b/i,s=A/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=x/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=x/s),this.set(i,r,s,n),this}let p=Math.sqrt((m-v)*(m-v)+(h-y)*(h-y)+(u-f)*(u-f));return Math.abs(p)<.001&&(p=1),this.x=(m-v)/p,this.y=(h-y)/p,this.z=(u-f)/p,this.w=Math.acos((c+g+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yT extends pa{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new un(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Pp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends yT{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class wx extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ST extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wt{constructor(e,n,i,r,s,a,o,l,c,f,h,u,g,v,y,m){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,h,u,g,v,y,m)}set(e,n,i,r,s,a,o,l,c,f,h,u,g,v,y,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=f,d[10]=h,d[14]=u,d[3]=g,d[7]=v,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ls.setFromMatrixColumn(e,0).length(),s=1/ls.setFromMatrixColumn(e,1).length(),a=1/ls.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=a*f,g=a*h,v=o*f,y=o*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=g+v*c,n[5]=u-y*c,n[9]=-o*l,n[2]=y-u*c,n[6]=v+g*c,n[10]=a*l}else if(e.order==="YXZ"){const u=l*f,g=l*h,v=c*f,y=c*h;n[0]=u+y*o,n[4]=v*o-g,n[8]=a*c,n[1]=a*h,n[5]=a*f,n[9]=-o,n[2]=g*o-v,n[6]=y+u*o,n[10]=a*l}else if(e.order==="ZXY"){const u=l*f,g=l*h,v=c*f,y=c*h;n[0]=u-y*o,n[4]=-a*h,n[8]=v+g*o,n[1]=g+v*o,n[5]=a*f,n[9]=y-u*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const u=a*f,g=a*h,v=o*f,y=o*h;n[0]=l*f,n[4]=v*c-g,n[8]=u*c+y,n[1]=l*h,n[5]=y*c+u,n[9]=g*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const u=a*l,g=a*c,v=o*l,y=o*c;n[0]=l*f,n[4]=y-u*h,n[8]=v*h+g,n[1]=h,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=g*h+v,n[10]=u-y*h}else if(e.order==="XZY"){const u=a*l,g=a*c,v=o*l,y=o*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=u*h+y,n[5]=a*f,n[9]=g*h-v,n[2]=v*h-g,n[6]=o*f,n[10]=y*h+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(MT,e,ET)}lookAt(e,n,i){const r=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),qi.crossVectors(i,Tn),qi.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),qi.crossVectors(i,Tn)),qi.normalize(),Zo.crossVectors(Tn,qi),r[0]=qi.x,r[4]=Zo.x,r[8]=Tn.x,r[1]=qi.y,r[5]=Zo.y,r[9]=Tn.y,r[2]=qi.z,r[6]=Zo.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],h=i[5],u=i[9],g=i[13],v=i[2],y=i[6],m=i[10],d=i[14],p=i[3],_=i[7],S=i[11],C=i[15],b=r[0],A=r[4],x=r[8],w=r[12],N=r[1],R=r[5],D=r[9],U=r[13],q=r[2],H=r[6],j=r[10],L=r[14],I=r[3],V=r[7],K=r[11],ie=r[15];return s[0]=a*b+o*N+l*q+c*I,s[4]=a*A+o*R+l*H+c*V,s[8]=a*x+o*D+l*j+c*K,s[12]=a*w+o*U+l*L+c*ie,s[1]=f*b+h*N+u*q+g*I,s[5]=f*A+h*R+u*H+g*V,s[9]=f*x+h*D+u*j+g*K,s[13]=f*w+h*U+u*L+g*ie,s[2]=v*b+y*N+m*q+d*I,s[6]=v*A+y*R+m*H+d*V,s[10]=v*x+y*D+m*j+d*K,s[14]=v*w+y*U+m*L+d*ie,s[3]=p*b+_*N+S*q+C*I,s[7]=p*A+_*R+S*H+C*V,s[11]=p*x+_*D+S*j+C*K,s[15]=p*w+_*U+S*L+C*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],u=e[10],g=e[14],v=e[3],y=e[7],m=e[11],d=e[15],p=l*g-c*u,_=o*g-c*h,S=o*u-l*h,C=a*g-c*f,b=a*u-l*f,A=a*h-o*f;return n*(y*p-m*_+d*S)-i*(v*p-m*C+d*b)+r*(v*_-y*C+d*A)-s*(v*S-y*b+m*A)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],u=e[10],g=e[11],v=e[12],y=e[13],m=e[14],d=e[15],p=n*o-i*a,_=n*l-r*a,S=n*c-s*a,C=i*l-r*o,b=i*c-s*o,A=r*c-s*l,x=f*y-h*v,w=f*m-u*v,N=f*d-g*v,R=h*m-u*y,D=h*d-g*y,U=u*d-g*m,q=p*U-_*D+S*R+C*N-b*w+A*x;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/q;return e[0]=(o*U-l*D+c*R)*H,e[1]=(r*D-i*U-s*R)*H,e[2]=(y*A-m*b+d*C)*H,e[3]=(u*b-h*A-g*C)*H,e[4]=(l*N-a*U-c*w)*H,e[5]=(n*U-r*N+s*w)*H,e[6]=(m*S-v*A-d*_)*H,e[7]=(f*A-u*S+g*_)*H,e[8]=(a*D-o*N+c*x)*H,e[9]=(i*N-n*D-s*x)*H,e[10]=(v*b-y*S+d*p)*H,e[11]=(h*S-f*b-g*p)*H,e[12]=(o*w-a*R-l*x)*H,e[13]=(n*R-i*w+r*x)*H,e[14]=(y*_-v*C-m*p)*H,e[15]=(f*C-h*_+u*p)*H,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,h=o+o,u=s*c,g=s*f,v=s*h,y=a*f,m=a*h,d=o*h,p=l*c,_=l*f,S=l*h,C=i.x,b=i.y,A=i.z;return r[0]=(1-(y+d))*C,r[1]=(g+S)*C,r[2]=(v-_)*C,r[3]=0,r[4]=(g-S)*b,r[5]=(1-(u+d))*b,r[6]=(m+p)*b,r[7]=0,r[8]=(v+_)*A,r[9]=(m-p)*A,r[10]=(1-(u+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=ls.set(r[0],r[1],r[2]).length();const o=ls.set(r[4],r[5],r[6]).length(),l=ls.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Xn.copy(this);const c=1/a,f=1/o,h=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=f,Xn.elements[5]*=f,Xn.elements[6]*=f,Xn.elements[8]*=h,Xn.elements[9]*=h,Xn.elements[10]*=h,n.setFromRotationMatrix(Xn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=hi,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),u=(n+e)/(n-e),g=(i+r)/(i-r);let v,y;if(l)v=s/(a-s),y=a*s/(a-s);else if(o===hi)v=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===_o)v=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=hi,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),u=-(n+e)/(n-e),g=-(i+r)/(i-r);let v,y;if(l)v=1/(a-s),y=a/(a-s);else if(o===hi)v=-2/(a-s),y=-(a+s)/(a-s);else if(o===_o)v=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ls=new G,Xn=new wt,MT=new G(0,0,0),ET=new G(1,1,1),qi=new G,Zo=new G,Tn=new G,Tg=new wt,bg=new ma;class xi{constructor(e=0,n=0,i=0,r=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],h=r[2],u=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Tg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return bg.setFromEuler(this),this.setFromQuaternion(bg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class Tx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wT=0;const Cg=new G,cs=new ma,Ei=new wt,Jo=new G,Ca=new G,TT=new G,bT=new ma,Ag=new G(1,0,0),Rg=new G(0,1,0),Pg=new G(0,0,1),Lg={type:"added"},CT={type:"removed"},us={type:"childadded",child:null},Xu={type:"childremoved",child:null};class dn extends pa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wT++}),this.uuid=bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new G,n=new xi,i=new ma,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new Be}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return cs.setFromAxisAngle(e,n),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,n){return cs.setFromAxisAngle(e,n),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(Ag,e)}rotateY(e){return this.rotateOnAxis(Rg,e)}rotateZ(e){return this.rotateOnAxis(Pg,e)}translateOnAxis(e,n){return Cg.copy(e).applyQuaternion(this.quaternion),this.position.add(Cg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ag,e)}translateY(e){return this.translateOnAxis(Rg,e)}translateZ(e){return this.translateOnAxis(Pg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Jo.copy(e):Jo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Ca,Jo,this.up):Ei.lookAt(Jo,Ca,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),cs.setFromRotationMatrix(Ei),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lg),us.child=e,this.dispatchEvent(us),us.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(CT),Xu.child=e,this.dispatchEvent(Xu),Xu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lg),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,e,TT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,bT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),h=a(e.shapes),u=a(e.skeletons),g=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}dn.DEFAULT_UP=new G(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class za extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AT={type:"move"};class $u{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new za,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new za,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new za,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),d=this._getHandJoint(c,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),g=.02,v=.005;c.inputState.pinching&&u>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(AT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new za;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const bx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function qu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=mT(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=qu(a,s,e+1/3),this.g=qu(a,s,e),this.b=qu(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,n=Fn){function i(s){s!==void 0&&parseFloat(s)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Fe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Fn){const i=bx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return Je.workingToColorSpace(tn.copy(this),e),Math.round(qe(tn.r*255,0,255))*65536+Math.round(qe(tn.g*255,0,255))*256+Math.round(qe(tn.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.workingToColorSpace(tn.copy(this),n);const i=tn.r,r=tn.g,s=tn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Je.workingColorSpace){return Je.workingToColorSpace(tn.copy(this),n),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Fn){Je.workingToColorSpace(tn.copy(this),e);const n=tn.r,i=tn.g,r=tn.b;return e!==Fn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+n,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Yi),e.getHSL(Qo);const i=Vu(Yi.h,Qo.h,n),r=Vu(Yi.s,Qo.s,n),s=Vu(Yi.l,Qo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Ye;Ye.NAMES=bx;class RT extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const $n=new G,wi=new G,Yu=new G,Ti=new G,ds=new G,fs=new G,Ng=new G,Ku=new G,Zu=new G,Ju=new G,Qu=new At,ed=new At,td=new At;class Jn{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),$n.subVectors(e,n),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){$n.subVectors(r,n),wi.subVectors(i,n),Yu.subVectors(e,n);const a=$n.dot($n),o=$n.dot(wi),l=$n.dot(Yu),c=wi.dot(wi),f=wi.dot(Yu),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,g=(c*l-o*f)*u,v=(a*f-o*l)*u;return s.set(1-g-v,v,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ti.x),l.addScaledVector(a,Ti.y),l.addScaledVector(o,Ti.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Qu.setScalar(0),ed.setScalar(0),td.setScalar(0),Qu.fromBufferAttribute(e,n),ed.fromBufferAttribute(e,i),td.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Qu,s.x),a.addScaledVector(ed,s.y),a.addScaledVector(td,s.z),a}static isFrontFacing(e,n,i,r){return $n.subVectors(i,n),wi.subVectors(e,n),$n.cross(wi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),$n.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ds.subVectors(r,i),fs.subVectors(s,i),Ku.subVectors(e,i);const l=ds.dot(Ku),c=fs.dot(Ku);if(l<=0&&c<=0)return n.copy(i);Zu.subVectors(e,r);const f=ds.dot(Zu),h=fs.dot(Zu);if(f>=0&&h<=f)return n.copy(r);const u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(ds,a);Ju.subVectors(e,s);const g=ds.dot(Ju),v=fs.dot(Ju);if(v>=0&&g<=v)return n.copy(s);const y=g*c-l*v;if(y<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(fs,o);const m=f*v-g*h;if(m<=0&&h-f>=0&&g-v>=0)return Ng.subVectors(s,r),o=(h-f)/(h-f+(g-v)),n.copy(r).addScaledVector(Ng,o);const d=1/(m+y+u);return a=y*d,o=u*d,n.copy(i).addScaledVector(ds,a).addScaledVector(fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Co{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qn):qn.fromBufferAttribute(s,a),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),el.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),el.copy(i.boundingBox)),el.applyMatrix4(e.matrixWorld),this.union(el)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Aa),tl.subVectors(this.max,Aa),hs.subVectors(e.a,Aa),ps.subVectors(e.b,Aa),ms.subVectors(e.c,Aa),Ki.subVectors(ps,hs),Zi.subVectors(ms,ps),Rr.subVectors(hs,ms);let n=[0,-Ki.z,Ki.y,0,-Zi.z,Zi.y,0,-Rr.z,Rr.y,Ki.z,0,-Ki.x,Zi.z,0,-Zi.x,Rr.z,0,-Rr.x,-Ki.y,Ki.x,0,-Zi.y,Zi.x,0,-Rr.y,Rr.x,0];return!nd(n,hs,ps,ms,tl)||(n=[1,0,0,0,1,0,0,0,1],!nd(n,hs,ps,ms,tl))?!1:(nl.crossVectors(Ki,Zi),n=[nl.x,nl.y,nl.z],nd(n,hs,ps,ms,tl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bi=[new G,new G,new G,new G,new G,new G,new G,new G],qn=new G,el=new Co,hs=new G,ps=new G,ms=new G,Ki=new G,Zi=new G,Rr=new G,Aa=new G,tl=new G,nl=new G,Pr=new G;function nd(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Pr.fromArray(t,s);const o=r.x*Math.abs(Pr.x)+r.y*Math.abs(Pr.y)+r.z*Math.abs(Pr.z),l=e.dot(Pr),c=n.dot(Pr),f=i.dot(Pr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const It=new G,il=new Ke;let PT=0;class ni{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PT++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=_g,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)il.fromBufferAttribute(this,n),il.applyMatrix3(e),this.setXY(n,il.x,il.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix3(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix4(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyNormalMatrix(e),this.setXYZ(n,It.x,It.y,It.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.transformDirection(e),this.setXYZ(n,It.x,It.y,It.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ba(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ba(n,this.array)),n}setX(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ba(n,this.array)),n}setY(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ba(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ba(n,this.array)),n}setW(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_g&&(e.usage=this.usage),e}}class Cx extends ni{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ax extends ni{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class fn extends ni{constructor(e,n,i){super(new Float32Array(e),n,i)}}const LT=new Co,Ra=new G,id=new G;class Kc{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):LT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ra.subVectors(e,this.center);const n=Ra.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ra,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ra.copy(e.center).add(id)),this.expandByPoint(Ra.copy(e.center).sub(id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let NT=0;const Un=new wt,rd=new dn,gs=new G,bn=new Co,Pa=new Co,Gt=new G;class On extends pa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NT++}),this.uuid=bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dT(e)?Ax:Cx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return rd.lookAt(e),rd.updateMatrix(),this.applyMatrix4(rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Co);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Pa.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(bn.min,Pa.min),bn.expandByPoint(Gt),Gt.addVectors(bn.max,Pa.max),bn.expandByPoint(Gt)):(bn.expandByPoint(Pa.min),bn.expandByPoint(Pa.max))}bn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Gt.fromBufferAttribute(o,c),l&&(gs.fromBufferAttribute(e,c),Gt.add(gs)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new G,l[x]=new G;const c=new G,f=new G,h=new G,u=new Ke,g=new Ke,v=new Ke,y=new G,m=new G;function d(x,w,N){c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,w),h.fromBufferAttribute(i,N),u.fromBufferAttribute(s,x),g.fromBufferAttribute(s,w),v.fromBufferAttribute(s,N),f.sub(c),h.sub(c),g.sub(u),v.sub(u);const R=1/(g.x*v.y-v.x*g.y);isFinite(R)&&(y.copy(f).multiplyScalar(v.y).addScaledVector(h,-g.y).multiplyScalar(R),m.copy(h).multiplyScalar(g.x).addScaledVector(f,-v.x).multiplyScalar(R),o[x].add(y),o[w].add(y),o[N].add(y),l[x].add(m),l[w].add(m),l[N].add(m))}let p=this.groups;p.length===0&&(p=[{start:0,count:e.count}]);for(let x=0,w=p.length;x<w;++x){const N=p[x],R=N.start,D=N.count;for(let U=R,q=R+D;U<q;U+=3)d(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const _=new G,S=new G,C=new G,b=new G;function A(x){C.fromBufferAttribute(r,x),b.copy(C);const w=o[x];_.copy(w),_.sub(C.multiplyScalar(C.dot(w))).normalize(),S.crossVectors(b,w);const R=S.dot(l[x])<0?-1:1;a.setXYZW(x,_.x,_.y,_.z,R)}for(let x=0,w=p.length;x<w;++x){const N=p[x],R=N.start,D=N.count;for(let U=R,q=R+D;U<q;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ni(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,g=i.count;u<g;u++)i.setXYZ(u,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,f=new G,h=new G;if(e)for(let u=0,g=e.count;u<g;u+=3){const v=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,m),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,g=n.count;u<g;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,h=o.normalized,u=new c.constructor(l.length*f);let g=0,v=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?g=l[y]*o.data.stride+o.offset:g=l[y]*f;for(let d=0;d<f;d++)u[v++]=c[g++]}return new ni(u,f,h)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new On,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,h=c.length;f<h;f++){const u=c[f],g=e(u,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){const g=c[h];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let u=0,g=h.length;u<g;u++)f.push(h[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let DT=0;class ga extends pa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DT++}),this.uuid=bo(),this.name="",this.type="Material",this.blending=zs,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yf,this.blendDst=Sf,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Fe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Fe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(i.blending=this.blending),this.side!==Mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yf&&(i.blendSrc=this.blendSrc),this.blendDst!==Sf&&(i.blendDst=this.blendDst),this.blendEquation!==kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ci=new G,sd=new G,rl=new G,Ji=new G,ad=new G,sl=new G,od=new G;class Rx{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){sd.copy(e).add(n).multiplyScalar(.5),rl.copy(n).sub(e).normalize(),Ji.copy(this.origin).sub(sd);const s=e.distanceTo(n)*.5,a=-this.direction.dot(rl),o=Ji.dot(this.direction),l=-Ji.dot(rl),c=Ji.lengthSq(),f=Math.abs(1-a*a);let h,u,g,v;if(f>0)if(h=a*l-o,u=a*o-l,v=s*f,h>=0)if(u>=-v)if(u<=v){const y=1/f;h*=y,u*=y,g=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=s,h=Math.max(0,-(a*u+o)),g=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(a*u+o)),g=-h*h+u*(u+2*l)+c;else u<=-v?(h=Math.max(0,-(-a*s+o)),u=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+u*(u+2*l)+c):u<=v?(h=0,u=Math.min(Math.max(-s,-l),s),g=u*(u+2*l)+c):(h=Math.max(0,-(a*s+o)),u=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+u*(u+2*l)+c);else u=a>0?-s:s,h=Math.max(0,-(a*u+o)),g=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(sd).addScaledVector(rl,u),g}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,a=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,a=(e.min.y-u.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,i,r,s){ad.subVectors(n,e),sl.subVectors(i,e),od.crossVectors(ad,sl);let a=this.direction.dot(od),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ji.subVectors(this.origin,e);const l=o*this.direction.dot(sl.crossVectors(Ji,sl));if(l<0)return null;const c=o*this.direction.dot(ad.cross(Ji));if(c<0||l+c>a)return null;const f=-o*Ji.dot(od);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lp extends ga{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=ax,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dg=new wt,Lr=new Rx,al=new Kc,Ig=new G,ol=new G,ll=new G,cl=new G,ld=new G,ul=new G,Og=new G,dl=new G;class ri extends dn{constructor(e=new On,n=new Lp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ul.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],h=s[l];f!==0&&(ld.fromBufferAttribute(h,e),a?ul.addScaledVector(ld,f):ul.addScaledVector(ld.sub(n),f))}n.add(ul)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),al.copy(i.boundingSphere),al.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(al.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(al,Ig)===null||Lr.origin.distanceToSquared(Ig)>(e.far-e.near)**2))&&(Dg.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(Dg),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,u=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=u.length;v<y;v++){const m=u[v],d=a[m.materialIndex],p=Math.max(m.start,g.start),_=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let S=p,C=_;S<C;S+=3){const b=o.getX(S),A=o.getX(S+1),x=o.getX(S+2);r=fl(this,d,e,i,c,f,h,b,A,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,g.start),y=Math.min(o.count,g.start+g.count);for(let m=v,d=y;m<d;m+=3){const p=o.getX(m),_=o.getX(m+1),S=o.getX(m+2);r=fl(this,a,e,i,c,f,h,p,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,y=u.length;v<y;v++){const m=u[v],d=a[m.materialIndex],p=Math.max(m.start,g.start),_=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let S=p,C=_;S<C;S+=3){const b=S,A=S+1,x=S+2;r=fl(this,d,e,i,c,f,h,b,A,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let m=v,d=y;m<d;m+=3){const p=m,_=m+1,S=m+2;r=fl(this,a,e,i,c,f,h,p,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function IT(t,e,n,i,r,s,a,o){let l;if(e.side===En?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Mr,o),l===null)return null;dl.copy(o),dl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(dl);return c<n.near||c>n.far?null:{distance:c,point:dl.clone(),object:t}}function fl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,ol),t.getVertexPosition(l,ll),t.getVertexPosition(c,cl);const f=IT(t,e,n,i,ol,ll,cl,Og);if(f){const h=new G;Jn.getBarycoord(Og,ol,ll,cl,h),r&&(f.uv=Jn.getInterpolatedAttribute(r,o,l,c,h,new Ke)),s&&(f.uv1=Jn.getInterpolatedAttribute(s,o,l,c,h,new Ke)),a&&(f.normal=Jn.getInterpolatedAttribute(a,o,l,c,h,new G),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new G,materialIndex:0};Jn.getNormal(ol,ll,cl,u.normal),f.face=u,f.barycoord=h}return f}class OT extends un{constructor(e=null,n=1,i=1,r,s,a,o,l,c=qt,f=qt,h,u){super(null,a,o,l,c,f,r,s,h,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cd=new G,UT=new G,FT=new Be;class Fr{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=cd.subVectors(i,n).cross(UT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(cd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||FT.getNormalMatrix(e),r=this.coplanarPoint(cd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new Kc,kT=new Ke(.5,.5),hl=new G;class Np{constructor(e=new Fr,n=new Fr,i=new Fr,r=new Fr,s=new Fr,a=new Fr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],h=s[5],u=s[6],g=s[7],v=s[8],y=s[9],m=s[10],d=s[11],p=s[12],_=s[13],S=s[14],C=s[15];if(r[0].setComponents(c-a,g-f,d-v,C-p).normalize(),r[1].setComponents(c+a,g+f,d+v,C+p).normalize(),r[2].setComponents(c+o,g+h,d+y,C+_).normalize(),r[3].setComponents(c-o,g-h,d-y,C-_).normalize(),i)r[4].setComponents(l,u,m,S).normalize(),r[5].setComponents(c-l,g-u,d-m,C-S).normalize();else if(r[4].setComponents(c-l,g-u,d-m,C-S).normalize(),n===hi)r[5].setComponents(c+l,g+u,d+m,C+S).normalize();else if(n===_o)r[5].setComponents(l,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){Nr.center.set(0,0,0);const n=kT.distanceTo(e.center);return Nr.radius=.7071067811865476+n,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(hl.x=r.normal.x>0?e.max.x:e.min.x,hl.y=r.normal.y>0?e.max.y:e.min.y,hl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Px extends ga{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ug=new wt,uh=new Rx,pl=new Kc,ml=new G;class zT extends dn{constructor(e=new On,n=new Px){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(r),pl.radius+=s,e.ray.intersectsSphere(pl)===!1)return;Ug.copy(r).invert(),uh.copy(e.ray).applyMatrix4(Ug);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let v=u,y=g;v<y;v++){const m=c.getX(v);ml.fromBufferAttribute(h,m),Fg(ml,m,l,r,e,n,this)}}else{const u=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=u,y=g;v<y;v++)ml.fromBufferAttribute(h,v),Fg(ml,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Fg(t,e,n,i,r,s,a){const o=uh.distanceSqToPoint(t);if(o<n){const l=new G;uh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Lx extends un{constructor(e=[],n=Jr,i,r,s,a,o,l,c,f){super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xo extends un{constructor(e,n,i=_i,r,s,a,o=qt,l=qt,c,f=Hi,h=1){if(f!==Hi&&f!==jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:h};super(u,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class BT extends xo{constructor(e,n=_i,i=Jr,r,s,a=qt,o=qt,l,c=Hi){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Nx extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ao extends On{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],h=[];let u=0,g=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(f,3)),this.setAttribute("uv",new fn(h,2));function v(y,m,d,p,_,S,C,b,A,x,w){const N=S/A,R=C/x,D=S/2,U=C/2,q=b/2,H=A+1,j=x+1;let L=0,I=0;const V=new G;for(let K=0;K<j;K++){const ie=K*R-U;for(let F=0;F<H;F++){const pe=F*N-D;V[y]=pe*p,V[m]=ie*_,V[d]=q,c.push(V.x,V.y,V.z),V[y]=0,V[m]=0,V[d]=b>0?1:-1,f.push(V.x,V.y,V.z),h.push(F/A),h.push(1-K/x),L+=1}}for(let K=0;K<x;K++)for(let ie=0;ie<A;ie++){const F=u+ie+H*K,pe=u+ie+H*(K+1),Ie=u+(ie+1)+H*(K+1),nt=u+(ie+1)+H*K;l.push(F,pe,nt),l.push(pe,Ie,nt),I+=6}o.addGroup(g,I,w),g+=I,u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Dp extends On{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),f(),this.setAttribute("position",new fn(s,3)),this.setAttribute("normal",new fn(s.slice(),3)),this.setAttribute("uv",new fn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(p){const _=new G,S=new G,C=new G;for(let b=0;b<n.length;b+=3)g(n[b+0],_),g(n[b+1],S),g(n[b+2],C),l(_,S,C,p)}function l(p,_,S,C){const b=C+1,A=[];for(let x=0;x<=b;x++){A[x]=[];const w=p.clone().lerp(S,x/b),N=_.clone().lerp(S,x/b),R=b-x;for(let D=0;D<=R;D++)D===0&&x===b?A[x][D]=w:A[x][D]=w.clone().lerp(N,D/R)}for(let x=0;x<b;x++)for(let w=0;w<2*(b-x)-1;w++){const N=Math.floor(w/2);w%2===0?(u(A[x][N+1]),u(A[x+1][N]),u(A[x][N])):(u(A[x][N+1]),u(A[x+1][N+1]),u(A[x+1][N]))}}function c(p){const _=new G;for(let S=0;S<s.length;S+=3)_.x=s[S+0],_.y=s[S+1],_.z=s[S+2],_.normalize().multiplyScalar(p),s[S+0]=_.x,s[S+1]=_.y,s[S+2]=_.z}function f(){const p=new G;for(let _=0;_<s.length;_+=3){p.x=s[_+0],p.y=s[_+1],p.z=s[_+2];const S=m(p)/2/Math.PI+.5,C=d(p)/Math.PI+.5;a.push(S,1-C)}v(),h()}function h(){for(let p=0;p<a.length;p+=6){const _=a[p+0],S=a[p+2],C=a[p+4],b=Math.max(_,S,C),A=Math.min(_,S,C);b>.9&&A<.1&&(_<.2&&(a[p+0]+=1),S<.2&&(a[p+2]+=1),C<.2&&(a[p+4]+=1))}}function u(p){s.push(p.x,p.y,p.z)}function g(p,_){const S=p*3;_.x=e[S+0],_.y=e[S+1],_.z=e[S+2]}function v(){const p=new G,_=new G,S=new G,C=new G,b=new Ke,A=new Ke,x=new Ke;for(let w=0,N=0;w<s.length;w+=9,N+=6){p.set(s[w+0],s[w+1],s[w+2]),_.set(s[w+3],s[w+4],s[w+5]),S.set(s[w+6],s[w+7],s[w+8]),b.set(a[N+0],a[N+1]),A.set(a[N+2],a[N+3]),x.set(a[N+4],a[N+5]),C.copy(p).add(_).add(S).divideScalar(3);const R=m(C);y(b,N+0,p,R),y(A,N+2,_,R),y(x,N+4,S,R)}}function y(p,_,S,C){C<0&&p.x===1&&(a[_]=p.x-1),S.x===0&&S.z===0&&(a[_]=C/2/Math.PI+.5)}function m(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dp(e.vertices,e.indices,e.radius,e.detail)}}class Ip extends Dp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Ip(e.radius,e.detail)}}class Zc extends On{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,h=e/o,u=n/l,g=[],v=[],y=[],m=[];for(let d=0;d<f;d++){const p=d*u-a;for(let _=0;_<c;_++){const S=_*h-s;v.push(S,-p,0),y.push(0,0,1),m.push(_/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let p=0;p<o;p++){const _=p+c*d,S=p+c*(d+1),C=p+1+c*(d+1),b=p+1+c*d;g.push(_,S,b),g.push(S,C,b)}this.setIndex(g),this.setAttribute("position",new fn(v,3)),this.setAttribute("normal",new fn(y,3)),this.setAttribute("uv",new fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Op extends On{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],f=[],h=[],u=new G,g=new G,v=new G;for(let y=0;y<=i;y++){const m=a+y/i*o;for(let d=0;d<=r;d++){const p=d/r*s;g.x=(e+n*Math.cos(m))*Math.cos(p),g.y=(e+n*Math.cos(m))*Math.sin(p),g.z=n*Math.sin(m),c.push(g.x,g.y,g.z),u.x=e*Math.cos(p),u.y=e*Math.sin(p),v.subVectors(g,u).normalize(),f.push(v.x,v.y,v.z),h.push(d/r),h.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=r;m++){const d=(r+1)*y+m-1,p=(r+1)*(y-1)+m-1,_=(r+1)*(y-1)+m,S=(r+1)*y+m;l.push(d,p,S),l.push(p,_,S)}this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(f,3)),this.setAttribute("uv",new fn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Op(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function ta(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=ta(t[n]);for(const r in i)e[r]=i[r]}return e}function VT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Dx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const HT={clone:ta,merge:on};var GT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends ga{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GT,this.fragmentShader=jT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ta(e.uniforms),this.uniformsGroups=VT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class WT extends yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class XT extends ga{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mx,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $T extends XT{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class qT extends ga{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YT extends ga{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ix extends dn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const ud=new wt,kg=new G,zg=new G;class KT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Np,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;kg.setFromMatrixPosition(e.matrixWorld),n.position.copy(kg),zg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(zg),n.updateMatrixWorld(),ud.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ud,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===_o||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ud)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const gl=new G,vl=new ma,oi=new G;class Ox extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(gl,vl,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gl,vl,oi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(gl,vl,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gl,vl,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new G,Bg=new Ke,Vg=new Ke;class An extends Ox{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ch*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ch*2*Math.atan(Math.tan(Bu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,n){return this.getViewBounds(e,Bg,Vg),n.subVectors(Vg,Bg)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Bu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class ZT extends KT{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0}}class Hg extends Ix{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new ZT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Ux extends Ox{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class JT extends Ix{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const vs=-90,_s=1;class QT extends dn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(vs,_s,e,n);r.layers=this.layers,this.add(r);const s=new An(vs,_s,e,n);s.layers=this.layers,this.add(s);const a=new An(vs,_s,e,n);a.layers=this.layers,this.add(a);const o=new An(vs,_s,e,n);o.layers=this.layers,this.add(o);const l=new An(vs,_s,e,n);l.layers=this.layers,this.add(l);const c=new An(vs,_s,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_o)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(h,u,g),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class eb extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Gg(t,e,n,i){const r=tb(i);switch(n){case xx:return t*e;case Sx:return t*e/r.components*r.byteLength;case Tp:return t*e/r.components*r.byteLength;case Qs:return t*e*2/r.components*r.byteLength;case bp:return t*e*2/r.components*r.byteLength;case yx:return t*e*3/r.components*r.byteLength;case Qn:return t*e*4/r.components*r.byteLength;case Cp:return t*e*4/r.components*r.byteLength;case Ul:case Fl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case kl:case zl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nf:case If:return Math.max(t,16)*Math.max(e,8)/4;case Lf:case Df:return Math.max(t,8)*Math.max(e,8)/2;case Of:case Uf:case kf:case zf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ff:case Bf:case Vf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case jf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case $f:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case qf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Yf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Kf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Zf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Jf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Qf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case eh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case th:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case nh:case ih:case rh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case sh:case ah:return Math.ceil(t/4)*Math.ceil(e/4)*8;case oh:case lh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function tb(t){switch(t){case Rn:case mx:return{byteLength:1,components:1};case go:case gx:case Vi:return{byteLength:2,components:1};case Ep:case wp:return{byteLength:2,components:4};case _i:case Mp:case fi:return{byteLength:4,components:1};case vx:case _x:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sp}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function nb(t){const e=new WeakMap;function n(o,l){const c=o.array,f=o.usage,h=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,f),o.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,f);else{h.sort((g,v)=>g.start-v.start);let u=0;for(let g=1;g<h.length;g++){const v=h[u],y=h[g];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++u,h[u]=y)}h.length=u+1;for(let g=0,v=h.length;g<v;g++){const y=h[g];t.bufferSubData(c,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var ib=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ab=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ob=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ub=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,db=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,fb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Eb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,bb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ab=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Db="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ib=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ob=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ub=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$b=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Kb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tC=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_C=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,SC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,MC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,NC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,UC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,BC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,VC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,HC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,XC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$C=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,KC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,JC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,fA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_A=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,SA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,EA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,CA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,LA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:ib,alphahash_pars_fragment:rb,alphamap_fragment:sb,alphamap_pars_fragment:ab,alphatest_fragment:ob,alphatest_pars_fragment:lb,aomap_fragment:cb,aomap_pars_fragment:ub,batching_pars_vertex:db,batching_vertex:fb,begin_vertex:hb,beginnormal_vertex:pb,bsdfs:mb,iridescence_fragment:gb,bumpmap_pars_fragment:vb,clipping_planes_fragment:_b,clipping_planes_pars_fragment:xb,clipping_planes_pars_vertex:yb,clipping_planes_vertex:Sb,color_fragment:Mb,color_pars_fragment:Eb,color_pars_vertex:wb,color_vertex:Tb,common:bb,cube_uv_reflection_fragment:Cb,defaultnormal_vertex:Ab,displacementmap_pars_vertex:Rb,displacementmap_vertex:Pb,emissivemap_fragment:Lb,emissivemap_pars_fragment:Nb,colorspace_fragment:Db,colorspace_pars_fragment:Ib,envmap_fragment:Ob,envmap_common_pars_fragment:Ub,envmap_pars_fragment:Fb,envmap_pars_vertex:kb,envmap_physical_pars_fragment:Yb,envmap_vertex:zb,fog_vertex:Bb,fog_pars_vertex:Vb,fog_fragment:Hb,fog_pars_fragment:Gb,gradientmap_pars_fragment:jb,lightmap_pars_fragment:Wb,lights_lambert_fragment:Xb,lights_lambert_pars_fragment:$b,lights_pars_begin:qb,lights_toon_fragment:Kb,lights_toon_pars_fragment:Zb,lights_phong_fragment:Jb,lights_phong_pars_fragment:Qb,lights_physical_fragment:eC,lights_physical_pars_fragment:tC,lights_fragment_begin:nC,lights_fragment_maps:iC,lights_fragment_end:rC,logdepthbuf_fragment:sC,logdepthbuf_pars_fragment:aC,logdepthbuf_pars_vertex:oC,logdepthbuf_vertex:lC,map_fragment:cC,map_pars_fragment:uC,map_particle_fragment:dC,map_particle_pars_fragment:fC,metalnessmap_fragment:hC,metalnessmap_pars_fragment:pC,morphinstance_vertex:mC,morphcolor_vertex:gC,morphnormal_vertex:vC,morphtarget_pars_vertex:_C,morphtarget_vertex:xC,normal_fragment_begin:yC,normal_fragment_maps:SC,normal_pars_fragment:MC,normal_pars_vertex:EC,normal_vertex:wC,normalmap_pars_fragment:TC,clearcoat_normal_fragment_begin:bC,clearcoat_normal_fragment_maps:CC,clearcoat_pars_fragment:AC,iridescence_pars_fragment:RC,opaque_fragment:PC,packing:LC,premultiplied_alpha_fragment:NC,project_vertex:DC,dithering_fragment:IC,dithering_pars_fragment:OC,roughnessmap_fragment:UC,roughnessmap_pars_fragment:FC,shadowmap_pars_fragment:kC,shadowmap_pars_vertex:zC,shadowmap_vertex:BC,shadowmask_pars_fragment:VC,skinbase_vertex:HC,skinning_pars_vertex:GC,skinning_vertex:jC,skinnormal_vertex:WC,specularmap_fragment:XC,specularmap_pars_fragment:$C,tonemapping_fragment:qC,tonemapping_pars_fragment:YC,transmission_fragment:KC,transmission_pars_fragment:ZC,uv_pars_fragment:JC,uv_pars_vertex:QC,uv_vertex:eA,worldpos_vertex:tA,background_vert:nA,background_frag:iA,backgroundCube_vert:rA,backgroundCube_frag:sA,cube_vert:aA,cube_frag:oA,depth_vert:lA,depth_frag:cA,distance_vert:uA,distance_frag:dA,equirect_vert:fA,equirect_frag:hA,linedashed_vert:pA,linedashed_frag:mA,meshbasic_vert:gA,meshbasic_frag:vA,meshlambert_vert:_A,meshlambert_frag:xA,meshmatcap_vert:yA,meshmatcap_frag:SA,meshnormal_vert:MA,meshnormal_frag:EA,meshphong_vert:wA,meshphong_frag:TA,meshphysical_vert:bA,meshphysical_frag:CA,meshtoon_vert:AA,meshtoon_frag:RA,points_vert:PA,points_frag:LA,shadow_vert:NA,shadow_frag:DA,sprite_vert:IA,sprite_frag:OA},he={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},ui={basic:{uniforms:on([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:on([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:on([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:on([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:on([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:on([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:on([he.points,he.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:on([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:on([he.common,he.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:on([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:on([he.sprite,he.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:on([he.common,he.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:on([he.lights,he.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ui.physical={uniforms:on([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const _l={r:0,b:0,g:0},Dr=new xi,UA=new wt;function FA(t,e,n,i,r,s){const a=new Ye(0);let o=r===!0?0:1,l,c,f=null,h=0,u=null;function g(p){let _=p.isScene===!0?p.background:null;if(_&&_.isTexture){const S=p.backgroundBlurriness>0;_=e.get(_,S)}return _}function v(p){let _=!1;const S=g(p);S===null?m(a,o):S&&S.isColor&&(m(S,1),_=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(p,_){const S=g(_);S&&(S.isCubeTexture||S.mapping===Yc)?(c===void 0&&(c=new ri(new Ao(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:ta(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Dr.copy(_.backgroundRotation),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(UA.makeRotationFromEuler(Dr)),c.material.toneMapped=Je.getTransfer(S.colorSpace)!==ot,(f!==S||h!==S.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,u=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ri(new Zc(2,2),new yi({name:"BackgroundMaterial",uniforms:ta(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Je.getTransfer(S.colorSpace)!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,f=S,h=S.version,u=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function m(p,_){p.getRGB(_l,Dx(t)),n.buffers.color.setClear(_l.r,_l.g,_l.b,_,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(p,_=1){a.set(p),o=_,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,m(a,o)},render:v,addToRenderList:y,dispose:d}}function kA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(R,D,U,q,H){let j=!1;const L=h(R,q,U,D);s!==L&&(s=L,c(s.object)),j=g(R,q,U,H),j&&v(R,q,U,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,S(R,D,U,q),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(R){return t.bindVertexArray(R)}function f(R){return t.deleteVertexArray(R)}function h(R,D,U,q){const H=q.wireframe===!0;let j=i[D.id];j===void 0&&(j={},i[D.id]=j);const L=R.isInstancedMesh===!0?R.id:0;let I=j[L];I===void 0&&(I={},j[L]=I);let V=I[U.id];V===void 0&&(V={},I[U.id]=V);let K=V[H];return K===void 0&&(K=u(l()),V[H]=K),K}function u(R){const D=[],U=[],q=[];for(let H=0;H<n;H++)D[H]=0,U[H]=0,q[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:q,object:R,attributes:{},index:null}}function g(R,D,U,q){const H=s.attributes,j=D.attributes;let L=0;const I=U.getAttributes();for(const V in I)if(I[V].location>=0){const ie=H[V];let F=j[V];if(F===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(F=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(F=R.instanceColor)),ie===void 0||ie.attribute!==F||F&&ie.data!==F.data)return!0;L++}return s.attributesNum!==L||s.index!==q}function v(R,D,U,q){const H={},j=D.attributes;let L=0;const I=U.getAttributes();for(const V in I)if(I[V].location>=0){let ie=j[V];ie===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor));const F={};F.attribute=ie,ie&&ie.data&&(F.data=ie.data),H[V]=F,L++}s.attributes=H,s.attributesNum=L,s.index=q}function y(){const R=s.newAttributes;for(let D=0,U=R.length;D<U;D++)R[D]=0}function m(R){d(R,0)}function d(R,D){const U=s.newAttributes,q=s.enabledAttributes,H=s.attributeDivisors;U[R]=1,q[R]===0&&(t.enableVertexAttribArray(R),q[R]=1),H[R]!==D&&(t.vertexAttribDivisor(R,D),H[R]=D)}function p(){const R=s.newAttributes,D=s.enabledAttributes;for(let U=0,q=D.length;U<q;U++)D[U]!==R[U]&&(t.disableVertexAttribArray(U),D[U]=0)}function _(R,D,U,q,H,j,L){L===!0?t.vertexAttribIPointer(R,D,U,H,j):t.vertexAttribPointer(R,D,U,q,H,j)}function S(R,D,U,q){y();const H=q.attributes,j=U.getAttributes(),L=D.defaultAttributeValues;for(const I in j){const V=j[I];if(V.location>=0){let K=H[I];if(K===void 0&&(I==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),I==="instanceColor"&&R.instanceColor&&(K=R.instanceColor)),K!==void 0){const ie=K.normalized,F=K.itemSize,pe=e.get(K);if(pe===void 0)continue;const Ie=pe.buffer,nt=pe.type,Q=pe.bytesPerElement,ae=nt===t.INT||nt===t.UNSIGNED_INT||K.gpuType===Mp;if(K.isInterleavedBufferAttribute){const de=K.data,ze=de.stride,Ne=K.offset;if(de.isInstancedInterleavedBuffer){for(let Oe=0;Oe<V.locationSize;Oe++)d(V.location+Oe,de.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Oe=0;Oe<V.locationSize;Oe++)m(V.location+Oe);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let Oe=0;Oe<V.locationSize;Oe++)_(V.location+Oe,F/V.locationSize,nt,ie,ze*Q,(Ne+F/V.locationSize*Oe)*Q,ae)}else{if(K.isInstancedBufferAttribute){for(let de=0;de<V.locationSize;de++)d(V.location+de,K.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let de=0;de<V.locationSize;de++)m(V.location+de);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let de=0;de<V.locationSize;de++)_(V.location+de,F/V.locationSize,nt,ie,F*Q,F/V.locationSize*de*Q,ae)}}else if(L!==void 0){const ie=L[I];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(V.location,ie);break;case 3:t.vertexAttrib3fv(V.location,ie);break;case 4:t.vertexAttrib4fv(V.location,ie);break;default:t.vertexAttrib1fv(V.location,ie)}}}}p()}function C(){w();for(const R in i){const D=i[R];for(const U in D){const q=D[U];for(const H in q){const j=q[H];for(const L in j)f(j[L].object),delete j[L];delete q[H]}}delete i[R]}}function b(R){if(i[R.id]===void 0)return;const D=i[R.id];for(const U in D){const q=D[U];for(const H in q){const j=q[H];for(const L in j)f(j[L].object),delete j[L];delete q[H]}}delete i[R.id]}function A(R){for(const D in i){const U=i[D];for(const q in U){const H=U[q];if(H[R.id]===void 0)continue;const j=H[R.id];for(const L in j)f(j[L].object),delete j[L];delete H[R.id]}}}function x(R){for(const D in i){const U=i[D],q=R.isInstancedMesh===!0?R.id:0,H=U[q];if(H!==void 0){for(const j in H){const L=H[j];for(const I in L)f(L[I].object),delete L[I];delete H[j]}delete U[q],Object.keys(U).length===0&&delete i[D]}}}function w(){N(),a=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:p}}function zA(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function a(c,f,h){h!==0&&(t.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function o(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=f[v];n.update(g,i,1)}function l(c,f,h,u){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<c.length;v++)a(c[v],f[v],u[v]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,f,0,u,0,h);let v=0;for(let y=0;y<h;y++)v+=f[y]*u[y];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function BA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Qn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===Vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Rn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==fi&&!x)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Fe("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),b=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:g,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:S,maxSamples:C,samples:b}}function VA(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Fr,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const g=h.length!==0||u||i!==0||r;return r=u,i=h.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){n=f(h,u,0)},this.setState=function(h,u,g){const v=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,d=t.get(h);if(!r||v===null||v.length===0||s&&!m)s?f(null):c();else{const p=s?0:i,_=p*4;let S=d.clippingState||null;l.value=S,S=f(v,u,_,g);for(let C=0;C!==_;++C)S[C]=n[C];d.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,u,g,v){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const d=g+y*4,p=u.matrixWorldInverse;o.getNormalMatrix(p),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,S=g;_!==y;++_,S+=4)a.copy(h[_]).applyMatrix4(p,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const ur=4,jg=[.125,.215,.35,.446,.526,.582],zr=20,HA=256,La=new Ux,Wg=new Ye;let dd=null,fd=0,hd=0,pd=!1;const GA=new G;class Xg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=GA}=s;dd=this._renderer.getRenderTarget(),fd=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dd,fd,hd),this._renderer.xr.enabled=pd,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Jr||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dd=this._renderer.getRenderTarget(),fd=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Vi,format:Qn,colorSpace:ea,depthBuffer:!1},r=$g(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$g(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jA(s)),this._blurMaterial=XA(s,e,n),this._ggxMaterial=WA(s,e,n)}return r}_compileMaterial(e){const n=new ri(new On,e);this._renderer.compile(n,La)}_sceneToCubeUV(e,n,i,r,s){const l=new An(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,g=h.toneMapping;h.getClearColor(Wg),h.toneMapping=gi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ri(new Ao,new Lp({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(Wg),d=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[_],s.y,s.z)):S===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[_]));const C=this._cubeSize;xs(r,S*C,_>2?C:0,C,C),h.setRenderTarget(r),d&&h.render(y,l),h.render(e,l)}h.toneMapping=g,h.autoClear=u,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Jr||e.mapping===Js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;xs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,La)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),u=0+c*1.25,g=h*u,{_lodMax:v}=this,y=this._sizeLods[i],m=3*y*(i>v-ur?i-v+ur:0),d=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=g,l.mipInt.value=v-n,xs(s,m,d,3*y,2*y),r.setRenderTarget(s),r.render(o,La),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,xs(e,m,d,3*y,2*y),r.setRenderTarget(e),r.render(o,La)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&tt("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[r];h.material=c;const u=c.uniforms,g=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*zr-1),y=s/v,m=isFinite(s)?1+Math.floor(f*y):zr;m>zr&&Fe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zr}`);const d=[];let p=0;for(let A=0;A<zr;++A){const x=A/y,w=Math.exp(-x*x/2);d.push(w),A===0?p+=w:A<m&&(p+=2*w)}for(let A=0;A<d.length;A++)d[A]=d[A]/p;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=d,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=v,u.mipInt.value=_-i;const S=this._sizeLods[r],C=3*S*(r>_-ur?r-_+ur:0),b=4*(this._cubeSize-S);xs(n,C,b,3*S,2*S),l.setRenderTarget(n),l.render(h,La)}}function jA(t){const e=[],n=[],i=[];let r=t;const s=t-ur+1+jg.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-ur?l=jg[a-t+ur-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),f=-c,h=1+c,u=[f,f,h,f,h,h,f,f,h,h,f,h],g=6,v=6,y=3,m=2,d=1,p=new Float32Array(y*v*g),_=new Float32Array(m*v*g),S=new Float32Array(d*v*g);for(let b=0;b<g;b++){const A=b%3*2/3-1,x=b>2?0:-1,w=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];p.set(w,y*v*b),_.set(u,m*v*b);const N=[b,b,b,b,b,b];S.set(N,d*v*b)}const C=new On;C.setAttribute("position",new ni(p,y)),C.setAttribute("uv",new ni(_,m)),C.setAttribute("faceIndex",new ni(S,d)),i.push(new ri(C,null)),r>ur&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function $g(t,e,n){const i=new vi(t,e,n);return i.texture.mapping=Yc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function WA(t,e,n){return new yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:HA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function XA(t,e,n){const i=new Float32Array(zr),r=new G(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function qg(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Yg(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Jc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class kx extends vi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Lx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ao(5,5,5),s=new yi({name:"CubemapFromEquirect",uniforms:ta(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Oi});s.uniforms.tEquirect.value=n;const a=new ri(r,s),o=n.minFilter;return n.minFilter===Gr&&(n.minFilter=rn),new QT(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function $A(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,g=!1){return u==null?null:g?a(u):s(u)}function s(u){if(u&&u.isTexture){const g=u.mapping;if(g===Fu||g===ku)if(e.has(u)){const v=e.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const y=new kx(v.height);return y.fromEquirectangularTexture(t,u),e.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const g=u.mapping,v=g===Fu||g===ku,y=g===Jr||g===Js;if(v||y){let m=n.get(u);const d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new Xg(t)),m=v?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{const p=u.image;return v&&p&&p.height>0||y&&p&&l(p)?(i===null&&(i=new Xg(t)),m=v?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",f),m.texture):null}}}return u}function o(u,g){return g===Fu?u.mapping=Jr:g===ku&&(u.mapping=Js),u}function l(u){let g=0;const v=6;for(let y=0;y<v;y++)u[y]!==void 0&&g++;return g===v}function c(u){const g=u.target;g.removeEventListener("dispose",c);const v=e.get(g);v!==void 0&&(e.delete(g),v.dispose())}function f(u){const g=u.target;g.removeEventListener("dispose",f);const v=n.get(g);v!==void 0&&(n.delete(g),v.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function qA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&vc("WebGLRenderer: "+i+" extension not supported."),r}}}function YA(t,e,n,i){const r={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",a),delete r[u.id];const g=s.get(u);g&&(e.remove(g),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(h,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,n.memory.geometries++),u}function l(h){const u=h.attributes;for(const g in u)e.update(u[g],t.ARRAY_BUFFER)}function c(h){const u=[],g=h.index,v=h.attributes.position;let y=0;if(v===void 0)return;if(g!==null){const p=g.array;y=g.version;for(let _=0,S=p.length;_<S;_+=3){const C=p[_+0],b=p[_+1],A=p[_+2];u.push(C,b,b,A,A,C)}}else{const p=v.array;y=v.version;for(let _=0,S=p.length/3-1;_<S;_+=3){const C=_+0,b=_+1,A=_+2;u.push(C,b,b,A,A,C)}}const m=new(v.count>=65535?Ax:Cx)(u,1);m.version=y;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function f(h){const u=s.get(h);if(u){const g=h.index;g!==null&&u.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function KA(t,e,n){let i;function r(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,g){t.drawElements(i,g,s,u*a),n.update(g,i,1)}function c(u,g,v){v!==0&&(t.drawElementsInstanced(i,g,s,u*a,v),n.update(g,i,v))}function f(u,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,u,0,v);let m=0;for(let d=0;d<v;d++)m+=g[d];n.update(m,i,1)}function h(u,g,v,y){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<u.length;d++)c(u[d]/a,g[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,u,0,y,0,v);let d=0;for(let p=0;p<v;p++)d+=g[p]*y[p];n.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function ZA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function JA(t,e,n){const i=new WeakMap,r=new At;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let u=i.get(o);if(u===void 0||u.count!==h){let N=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var g=N;u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let C=o.attributes.position.count*S,b=1;C>e.maxTextureSize&&(b=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*b*4*h),x=new wx(A,C,b,h);x.type=fi,x.needsUpdate=!0;const w=S*4;for(let R=0;R<h;R++){const D=d[R],U=p[R],q=_[R],H=C*b*4*R;for(let j=0;j<D.count;j++){const L=j*w;v===!0&&(r.fromBufferAttribute(D,j),A[H+L+0]=r.x,A[H+L+1]=r.y,A[H+L+2]=r.z,A[H+L+3]=0),y===!0&&(r.fromBufferAttribute(U,j),A[H+L+4]=r.x,A[H+L+5]=r.y,A[H+L+6]=r.z,A[H+L+7]=0),m===!0&&(r.fromBufferAttribute(q,j),A[H+L+8]=r.x,A[H+L+9]=r.y,A[H+L+10]=r.z,A[H+L+11]=q.itemSize===4?r.w:1)}}u={count:h,texture:x,size:new Ke(C,b)},i.set(o,u),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const y=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function QA(t,e,n,i,r){let s=new WeakMap;function a(c){const f=r.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const g=c.skeleton;s.get(g)!==f&&(g.update(),s.set(g,f))}return u}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:a,dispose:o}}const eR={[ox]:"LINEAR_TONE_MAPPING",[lx]:"REINHARD_TONE_MAPPING",[cx]:"CINEON_TONE_MAPPING",[ux]:"ACES_FILMIC_TONE_MAPPING",[fx]:"AGX_TONE_MAPPING",[hx]:"NEUTRAL_TONE_MAPPING",[dx]:"CUSTOM_TONE_MAPPING"};function tR(t,e,n,i,r){const s=new vi(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new vi(e,n,{type:Vi,depthBuffer:!1,stencilBuffer:!1}),o=new On;o.setAttribute("position",new fn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new fn([0,2,0,0,2,0],2));const l=new WT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ri(o,l),f=new Ux(-1,1,1,-1,0,1);let h=null,u=null,g=!1,v,y=null,m=[],d=!1;this.setSize=function(p,_){s.setSize(p,_),a.setSize(p,_);for(let S=0;S<m.length;S++){const C=m[S];C.setSize&&C.setSize(p,_)}},this.setEffects=function(p){m=p,d=m.length>0&&m[0].isRenderPass===!0;const _=s.width,S=s.height;for(let C=0;C<m.length;C++){const b=m[C];b.setSize&&b.setSize(_,S)}},this.begin=function(p,_){if(g||p.toneMapping===gi&&m.length===0)return!1;if(y=_,_!==null){const S=_.width,C=_.height;(s.width!==S||s.height!==C)&&this.setSize(S,C)}return d===!1&&p.setRenderTarget(s),v=p.toneMapping,p.toneMapping=gi,!0},this.hasRenderPass=function(){return d},this.end=function(p,_){p.toneMapping=v,g=!0;let S=s,C=a;for(let b=0;b<m.length;b++){const A=m[b];if(A.enabled!==!1&&(A.render(p,C,S,_),A.needsSwap!==!1)){const x=S;S=C,C=x}}if(h!==p.outputColorSpace||u!==p.toneMapping){h=p.outputColorSpace,u=p.toneMapping,l.defines={},Je.getTransfer(h)===ot&&(l.defines.SRGB_TRANSFER="");const b=eR[u];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,p.setRenderTarget(y),p.render(c,f),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const zx=new un,dh=new xo(1,1),Bx=new wx,Vx=new ST,Hx=new Lx,Kg=[],Zg=[],Jg=new Float32Array(16),Qg=new Float32Array(9),ev=new Float32Array(4);function va(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Kg[r];if(s===void 0&&(s=new Float32Array(r),Kg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Qc(t,e){let n=Zg[e];n===void 0&&(n=new Int32Array(e),Zg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function nR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function iR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function rR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function sR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function aR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(zt(n,i))return;ev.set(i),t.uniformMatrix2fv(this.addr,!1,ev),Bt(n,i)}}function oR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(zt(n,i))return;Qg.set(i),t.uniformMatrix3fv(this.addr,!1,Qg),Bt(n,i)}}function lR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(zt(n,i))return;Jg.set(i),t.uniformMatrix4fv(this.addr,!1,Jg),Bt(n,i)}}function cR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function uR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function dR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function fR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function hR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function pR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function mR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function gR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function vR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(dh.compareFunction=n.isReversedDepthBuffer()?Rp:Ap,s=dh):s=zx,n.setTexture2D(e||s,r)}function _R(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Vx,r)}function xR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Hx,r)}function yR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Bx,r)}function SR(t){switch(t){case 5126:return nR;case 35664:return iR;case 35665:return rR;case 35666:return sR;case 35674:return aR;case 35675:return oR;case 35676:return lR;case 5124:case 35670:return cR;case 35667:case 35671:return uR;case 35668:case 35672:return dR;case 35669:case 35673:return fR;case 5125:return hR;case 36294:return pR;case 36295:return mR;case 36296:return gR;case 35678:case 36198:case 36298:case 36306:case 35682:return vR;case 35679:case 36299:case 36307:return _R;case 35680:case 36300:case 36308:case 36293:return xR;case 36289:case 36303:case 36311:case 36292:return yR}}function MR(t,e){t.uniform1fv(this.addr,e)}function ER(t,e){const n=va(e,this.size,2);t.uniform2fv(this.addr,n)}function wR(t,e){const n=va(e,this.size,3);t.uniform3fv(this.addr,n)}function TR(t,e){const n=va(e,this.size,4);t.uniform4fv(this.addr,n)}function bR(t,e){const n=va(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function CR(t,e){const n=va(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function AR(t,e){const n=va(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function RR(t,e){t.uniform1iv(this.addr,e)}function PR(t,e){t.uniform2iv(this.addr,e)}function LR(t,e){t.uniform3iv(this.addr,e)}function NR(t,e){t.uniform4iv(this.addr,e)}function DR(t,e){t.uniform1uiv(this.addr,e)}function IR(t,e){t.uniform2uiv(this.addr,e)}function OR(t,e){t.uniform3uiv(this.addr,e)}function UR(t,e){t.uniform4uiv(this.addr,e)}function FR(t,e,n){const i=this.cache,r=e.length,s=Qc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=dh:a=zx;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function kR(t,e,n){const i=this.cache,r=e.length,s=Qc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Vx,s[a])}function zR(t,e,n){const i=this.cache,r=e.length,s=Qc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Hx,s[a])}function BR(t,e,n){const i=this.cache,r=e.length,s=Qc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Bx,s[a])}function VR(t){switch(t){case 5126:return MR;case 35664:return ER;case 35665:return wR;case 35666:return TR;case 35674:return bR;case 35675:return CR;case 35676:return AR;case 5124:case 35670:return RR;case 35667:case 35671:return PR;case 35668:case 35672:return LR;case 35669:case 35673:return NR;case 5125:return DR;case 36294:return IR;case 36295:return OR;case 36296:return UR;case 35678:case 36198:case 36298:case 36306:case 35682:return FR;case 35679:case 36299:case 36307:return kR;case 35680:case 36300:case 36308:case 36293:return zR;case 36289:case 36303:case 36311:case 36292:return BR}}class HR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=SR(n.type)}}class GR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=VR(n.type)}}class jR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const md=/(\w+)(\])?(\[|\.)?/g;function tv(t,e){t.seq.push(e),t.map[e.id]=e}function WR(t,e,n){const i=t.name,r=i.length;for(md.lastIndex=0;;){const s=md.exec(i),a=md.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){tv(n,c===void 0?new HR(o,t,e):new GR(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new jR(o),tv(n,h)),n=h}}}class Bl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);WR(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function nv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const XR=37297;let $R=0;function qR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const iv=new Be;function YR(t){Je._getMatrix(iv,Je.workingColorSpace,t);const e=`mat3( ${iv.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case mc:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function rv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+qR(t.getShaderSource(e),o)}else return s}function KR(t,e){const n=YR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const ZR={[ox]:"Linear",[lx]:"Reinhard",[cx]:"Cineon",[ux]:"ACESFilmic",[fx]:"AgX",[hx]:"Neutral",[dx]:"Custom"};function JR(t,e){const n=ZR[e];return n===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const xl=new G;function QR(){Je.getLuminanceCoefficients(xl);const t=xl.x.toFixed(4),e=xl.y.toFixed(4),n=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eP(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ba).join(`
`)}function tP(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function nP(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ba(t){return t!==""}function sv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function av(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iP=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(t){return t.replace(iP,sP)}const rP=new Map;function sP(t,e){let n=Ve[e];if(n===void 0){const i=rP.get(e);if(i!==void 0)n=Ve[i],Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fh(n)}const aP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ov(t){return t.replace(aP,oP)}function oP(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const lP={[Ol]:"SHADOWMAP_TYPE_PCF",[ka]:"SHADOWMAP_TYPE_VSM"};function cP(t){return lP[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uP={[Jr]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE",[Yc]:"ENVMAP_TYPE_CUBE_UV"};function dP(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":uP[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const fP={[Js]:"ENVMAP_MODE_REFRACTION"};function hP(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":fP[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pP={[ax]:"ENVMAP_BLENDING_MULTIPLY",[eT]:"ENVMAP_BLENDING_MIX",[tT]:"ENVMAP_BLENDING_ADD"};function mP(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":pP[t.combine]||"ENVMAP_BLENDING_NONE"}function gP(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function vP(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=cP(n),c=dP(n),f=hP(n),h=mP(n),u=gP(n),g=eP(n),v=tP(s),y=r.createProgram();let m,d,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ba).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ba).join(`
`),d.length>0&&(d+=`
`)):(m=[lv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),d=[lv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gi?"#define TONE_MAPPING":"",n.toneMapping!==gi?Ve.tonemapping_pars_fragment:"",n.toneMapping!==gi?JR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,KR("linearToOutputTexel",n.outputColorSpace),QR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ba).join(`
`)),a=fh(a),a=sv(a,n),a=av(a,n),o=fh(o),o=sv(o,n),o=av(o,n),a=ov(a),o=ov(o),n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===xg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===xg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=p+m+a,S=p+d+o,C=nv(r,r.VERTEX_SHADER,_),b=nv(r,r.FRAGMENT_SHADER,S);r.attachShader(y,C),r.attachShader(y,b),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(R){if(t.debug.checkShaderErrors){const D=r.getProgramInfoLog(y)||"",U=r.getShaderInfoLog(C)||"",q=r.getShaderInfoLog(b)||"",H=D.trim(),j=U.trim(),L=q.trim();let I=!0,V=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(I=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,C,b);else{const K=rv(r,C,"vertex"),ie=rv(r,b,"fragment");tt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+K+`
`+ie)}else H!==""?Fe("WebGLProgram: Program Info Log:",H):(j===""||L==="")&&(V=!1);V&&(R.diagnostics={runnable:I,programLog:H,vertexShader:{log:j,prefix:m},fragmentShader:{log:L,prefix:d}})}r.deleteShader(C),r.deleteShader(b),x=new Bl(r,y),w=nP(r,y)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(y,XR)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$R++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=b,this}let _P=0;class xP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new yP(e),n.set(e,i)),i}}class yP{constructor(e){this.id=_P++,this.code=e,this.usedTimes=0}}function SP(t,e,n,i,r,s){const a=new Tx,o=new xP,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,w,N,R,D){const U=R.fog,q=D.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,L=e.get(x.envMap||H,j),I=L&&L.mapping===Yc?L.image.height:null,V=g[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Fe("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const K=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ie=K!==void 0?K.length:0;let F=0;q.morphAttributes.position!==void 0&&(F=1),q.morphAttributes.normal!==void 0&&(F=2),q.morphAttributes.color!==void 0&&(F=3);let pe,Ie,nt,Q;if(V){const at=ui[V];pe=at.vertexShader,Ie=at.fragmentShader}else pe=x.vertexShader,Ie=x.fragmentShader,o.update(x),nt=o.getVertexShaderID(x),Q=o.getFragmentShaderID(x);const ae=t.getRenderTarget(),de=t.state.buffers.depth.getReversed(),ze=D.isInstancedMesh===!0,Ne=D.isBatchedMesh===!0,Oe=!!x.map,Vt=!!x.matcap,Ze=!!L,st=!!x.aoMap,dt=!!x.lightMap,He=!!x.bumpMap,Rt=!!x.normalMap,O=!!x.displacementMap,Dt=!!x.emissiveMap,it=!!x.metalnessMap,ht=!!x.roughnessMap,be=x.anisotropy>0,P=x.clearcoat>0,E=x.dispersion>0,z=x.iridescence>0,ee=x.sheen>0,te=x.transmission>0,J=be&&!!x.anisotropyMap,Se=P&&!!x.clearcoatMap,ce=P&&!!x.clearcoatNormalMap,Pe=P&&!!x.clearcoatRoughnessMap,De=z&&!!x.iridescenceMap,re=z&&!!x.iridescenceThicknessMap,oe=ee&&!!x.sheenColorMap,Me=ee&&!!x.sheenRoughnessMap,we=!!x.specularMap,ve=!!x.specularColorMap,Ge=!!x.specularIntensityMap,k=te&&!!x.transmissionMap,ue=te&&!!x.thicknessMap,le=!!x.gradientMap,ye=!!x.alphaMap,se=x.alphaTest>0,Z=!!x.alphaHash,Ee=!!x.extensions;let Ue=gi;x.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Ue=t.toneMapping);const pt={shaderID:V,shaderType:x.type,shaderName:x.name,vertexShader:pe,fragmentShader:Ie,defines:x.defines,customVertexShaderID:nt,customFragmentShaderID:Q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Ne,batchingColor:Ne&&D._colorsTexture!==null,instancing:ze,instancingColor:ze&&D.instanceColor!==null,instancingMorph:ze&&D.morphTexture!==null,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ea,alphaToCoverage:!!x.alphaToCoverage,map:Oe,matcap:Vt,envMap:Ze,envMapMode:Ze&&L.mapping,envMapCubeUVHeight:I,aoMap:st,lightMap:dt,bumpMap:He,normalMap:Rt,displacementMap:O,emissiveMap:Dt,normalMapObjectSpace:Rt&&x.normalMapType===rT,normalMapTangentSpace:Rt&&x.normalMapType===Mx,metalnessMap:it,roughnessMap:ht,anisotropy:be,anisotropyMap:J,clearcoat:P,clearcoatMap:Se,clearcoatNormalMap:ce,clearcoatRoughnessMap:Pe,dispersion:E,iridescence:z,iridescenceMap:De,iridescenceThicknessMap:re,sheen:ee,sheenColorMap:oe,sheenRoughnessMap:Me,specularMap:we,specularColorMap:ve,specularIntensityMap:Ge,transmission:te,transmissionMap:k,thicknessMap:ue,gradientMap:le,opaque:x.transparent===!1&&x.blending===zs&&x.alphaToCoverage===!1,alphaMap:ye,alphaTest:se,alphaHash:Z,combine:x.combine,mapUv:Oe&&v(x.map.channel),aoMapUv:st&&v(x.aoMap.channel),lightMapUv:dt&&v(x.lightMap.channel),bumpMapUv:He&&v(x.bumpMap.channel),normalMapUv:Rt&&v(x.normalMap.channel),displacementMapUv:O&&v(x.displacementMap.channel),emissiveMapUv:Dt&&v(x.emissiveMap.channel),metalnessMapUv:it&&v(x.metalnessMap.channel),roughnessMapUv:ht&&v(x.roughnessMap.channel),anisotropyMapUv:J&&v(x.anisotropyMap.channel),clearcoatMapUv:Se&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ce&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(x.sheenRoughnessMap.channel),specularMapUv:we&&v(x.specularMap.channel),specularColorMapUv:ve&&v(x.specularColorMap.channel),specularIntensityMapUv:Ge&&v(x.specularIntensityMap.channel),transmissionMapUv:k&&v(x.transmissionMap.channel),thicknessMapUv:ue&&v(x.thicknessMap.channel),alphaMapUv:ye&&v(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Rt||be),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!q.attributes.uv&&(Oe||ye),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||q.attributes.normal===void 0&&Rt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:de,skinning:D.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:F,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Oe&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===ot,decodeVideoTextureEmissive:Dt&&x.emissiveMap.isVideoTexture===!0&&Je.getTransfer(x.emissiveMap.colorSpace)===ot,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pi,flipSided:x.side===En,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ee&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&x.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return pt.vertexUv1s=l.has(1),pt.vertexUv2s=l.has(2),pt.vertexUv3s=l.has(3),l.clear(),pt}function m(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)w.push(N),w.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(d(w,x),p(w,x),w.push(t.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function d(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function p(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),x.push(a.mask)}function _(x){const w=g[x.type];let N;if(w){const R=ui[w];N=HT.clone(R.uniforms)}else N=x.uniforms;return N}function S(x,w){let N=f.get(w);return N!==void 0?++N.usedTimes:(N=new vP(t,w,x,r),c.push(N),f.set(w,N)),N}function C(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function A(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:_,acquireProgram:S,releaseProgram:C,releaseShaderCache:b,programs:c,dispose:A}}function MP(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function EP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function cv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function uv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(u){let g=0;return u.isInstancedMesh&&(g+=2),u.isSkinnedMesh&&(g+=1),g}function o(u,g,v,y,m,d){let p=t[e];return p===void 0?(p={id:u.id,object:u,geometry:g,material:v,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:d},t[e]=p):(p.id=u.id,p.object=u,p.geometry=g,p.material=v,p.materialVariant=a(u),p.groupOrder=y,p.renderOrder=u.renderOrder,p.z=m,p.group=d),e++,p}function l(u,g,v,y,m,d){const p=o(u,g,v,y,m,d);v.transmission>0?i.push(p):v.transparent===!0?r.push(p):n.push(p)}function c(u,g,v,y,m,d){const p=o(u,g,v,y,m,d);v.transmission>0?i.unshift(p):v.transparent===!0?r.unshift(p):n.unshift(p)}function f(u,g){n.length>1&&n.sort(u||EP),i.length>1&&i.sort(g||cv),r.length>1&&r.sort(g||cv)}function h(){for(let u=e,g=t.length;u<g;u++){const v=t[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function wP(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new uv,t.set(i,[a])):r>=s.length?(a=new uv,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function TP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new Ye};break;case"SpotLight":n={position:new G,direction:new G,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function bP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let CP=0;function AP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function RP(t){const e=new TP,n=bP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const r=new G,s=new wt,a=new wt;function o(c){let f=0,h=0,u=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let g=0,v=0,y=0,m=0,d=0,p=0,_=0,S=0,C=0,b=0,A=0;c.sort(AP);for(let w=0,N=c.length;w<N;w++){const R=c[w],D=R.color,U=R.intensity,q=R.distance;let H=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Qs?H=R.shadow.map.texture:H=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)f+=D.r*U,h+=D.g*U,u+=D.b*U;else if(R.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(R.sh.coefficients[j],U);A++}else if(R.isDirectionalLight){const j=e.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const L=R.shadow,I=n.get(R);I.shadowIntensity=L.intensity,I.shadowBias=L.bias,I.shadowNormalBias=L.normalBias,I.shadowRadius=L.radius,I.shadowMapSize=L.mapSize,i.directionalShadow[g]=I,i.directionalShadowMap[g]=H,i.directionalShadowMatrix[g]=R.shadow.matrix,p++}i.directional[g]=j,g++}else if(R.isSpotLight){const j=e.get(R);j.position.setFromMatrixPosition(R.matrixWorld),j.color.copy(D).multiplyScalar(U),j.distance=q,j.coneCos=Math.cos(R.angle),j.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),j.decay=R.decay,i.spot[y]=j;const L=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,L.updateMatrices(R),R.castShadow&&b++),i.spotLightMatrix[y]=L.matrix,R.castShadow){const I=n.get(R);I.shadowIntensity=L.intensity,I.shadowBias=L.bias,I.shadowNormalBias=L.normalBias,I.shadowRadius=L.radius,I.shadowMapSize=L.mapSize,i.spotShadow[y]=I,i.spotShadowMap[y]=H,S++}y++}else if(R.isRectAreaLight){const j=e.get(R);j.color.copy(D).multiplyScalar(U),j.halfWidth.set(R.width*.5,0,0),j.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=j,m++}else if(R.isPointLight){const j=e.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity),j.distance=R.distance,j.decay=R.decay,R.castShadow){const L=R.shadow,I=n.get(R);I.shadowIntensity=L.intensity,I.shadowBias=L.bias,I.shadowNormalBias=L.normalBias,I.shadowRadius=L.radius,I.shadowMapSize=L.mapSize,I.shadowCameraNear=L.camera.near,I.shadowCameraFar=L.camera.far,i.pointShadow[v]=I,i.pointShadowMap[v]=H,i.pointShadowMatrix[v]=R.shadow.matrix,_++}i.point[v]=j,v++}else if(R.isHemisphereLight){const j=e.get(R);j.skyColor.copy(R.color).multiplyScalar(U),j.groundColor.copy(R.groundColor).multiplyScalar(U),i.hemi[d]=j,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=u;const x=i.hash;(x.directionalLength!==g||x.pointLength!==v||x.spotLength!==y||x.rectAreaLength!==m||x.hemiLength!==d||x.numDirectionalShadows!==p||x.numPointShadows!==_||x.numSpotShadows!==S||x.numSpotMaps!==C||x.numLightProbes!==A)&&(i.directional.length=g,i.spot.length=y,i.rectArea.length=m,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=p,i.directionalShadowMap.length=p,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=p,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,x.directionalLength=g,x.pointLength=v,x.spotLength=y,x.rectAreaLength=m,x.hemiLength=d,x.numDirectionalShadows=p,x.numPointShadows=_,x.numSpotShadows=S,x.numSpotMaps=C,x.numLightProbes=A,i.version=CP++)}function l(c,f){let h=0,u=0,g=0,v=0,y=0;const m=f.matrixWorldInverse;for(let d=0,p=c.length;d<p;d++){const _=c[d];if(_.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(_.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),g++}else if(_.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(_.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function dv(t){const e=new RP(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function a(f){i.push(f)}function o(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function PP(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new dv(t),e.set(r,[o])):s>=a.length?(o=new dv(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const LP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,DP=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],IP=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],fv=new wt,Na=new G,gd=new G;function OP(t,e,n){let i=new Np;const r=new Ke,s=new Ke,a=new At,o=new qT,l=new YT,c={},f=n.maxTextureSize,h={[Mr]:En,[En]:Mr,[Pi]:Pi},u=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:LP,fragmentShader:NP}),g=u.clone();g.defines.HORIZONTAL_PASS=1;const v=new On;v.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ri(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ol;let d=this.type;this.render=function(b,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Ow&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ol);const w=t.getRenderTarget(),N=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),D=t.state;D.setBlending(Oi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const U=d!==this.type;U&&A.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(H=>H.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,H=b.length;q<H;q++){const j=b[q],L=j.shadow;if(L===void 0){Fe("WebGLShadowMap:",j,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const I=L.getFrameExtents();r.multiply(I),s.copy(L.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/I.x),r.x=s.x*I.x,L.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/I.y),r.y=s.y*I.y,L.mapSize.y=s.y));const V=t.state.buffers.depth.getReversed();if(L.camera._reversedDepth=V,L.map===null||U===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===ka){if(j.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new vi(r.x,r.y,{format:Qs,type:Vi,minFilter:rn,magFilter:rn,generateMipmaps:!1}),L.map.texture.name=j.name+".shadowMap",L.map.depthTexture=new xo(r.x,r.y,fi),L.map.depthTexture.name=j.name+".shadowMapDepth",L.map.depthTexture.format=Hi,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=qt,L.map.depthTexture.magFilter=qt}else j.isPointLight?(L.map=new kx(r.x),L.map.depthTexture=new BT(r.x,_i)):(L.map=new vi(r.x,r.y),L.map.depthTexture=new xo(r.x,r.y,_i)),L.map.depthTexture.name=j.name+".shadowMap",L.map.depthTexture.format=Hi,this.type===Ol?(L.map.depthTexture.compareFunction=V?Rp:Ap,L.map.depthTexture.minFilter=rn,L.map.depthTexture.magFilter=rn):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=qt,L.map.depthTexture.magFilter=qt);L.camera.updateProjectionMatrix()}const K=L.map.isWebGLCubeRenderTarget?6:1;for(let ie=0;ie<K;ie++){if(L.map.isWebGLCubeRenderTarget)t.setRenderTarget(L.map,ie),t.clear();else{ie===0&&(t.setRenderTarget(L.map),t.clear());const F=L.getViewport(ie);a.set(s.x*F.x,s.y*F.y,s.x*F.z,s.y*F.w),D.viewport(a)}if(j.isPointLight){const F=L.camera,pe=L.matrix,Ie=j.distance||F.far;Ie!==F.far&&(F.far=Ie,F.updateProjectionMatrix()),Na.setFromMatrixPosition(j.matrixWorld),F.position.copy(Na),gd.copy(F.position),gd.add(DP[ie]),F.up.copy(IP[ie]),F.lookAt(gd),F.updateMatrixWorld(),pe.makeTranslation(-Na.x,-Na.y,-Na.z),fv.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),L._frustum.setFromProjectionMatrix(fv,F.coordinateSystem,F.reversedDepth)}else L.updateMatrices(j);i=L.getFrustum(),S(A,x,L.camera,j,this.type)}L.isPointLightShadow!==!0&&this.type===ka&&p(L,x),L.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(w,N,R)};function p(b,A){const x=e.update(y);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new vi(r.x,r.y,{format:Qs,type:Vi})),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(A,null,x,u,y,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(A,null,x,g,y,null)}function _(b,A,x,w){let N=null;const R=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)N=R;else if(N=x.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const D=N.uuid,U=A.uuid;let q=c[D];q===void 0&&(q={},c[D]=q);let H=q[U];H===void 0&&(H=N.clone(),q[U]=H,A.addEventListener("dispose",C)),N=H}if(N.visible=A.visible,N.wireframe=A.wireframe,w===ka?N.side=A.shadowSide!==null?A.shadowSide:A.side:N.side=A.shadowSide!==null?A.shadowSide:h[A.side],N.alphaMap=A.alphaMap,N.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,N.map=A.map,N.clipShadows=A.clipShadows,N.clippingPlanes=A.clippingPlanes,N.clipIntersection=A.clipIntersection,N.displacementMap=A.displacementMap,N.displacementScale=A.displacementScale,N.displacementBias=A.displacementBias,N.wireframeLinewidth=A.wireframeLinewidth,N.linewidth=A.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const D=t.properties.get(N);D.light=x}return N}function S(b,A,x,w,N){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&N===ka)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const U=e.update(b),q=b.material;if(Array.isArray(q)){const H=U.groups;for(let j=0,L=H.length;j<L;j++){const I=H[j],V=q[I.materialIndex];if(V&&V.visible){const K=_(b,V,w,N);b.onBeforeShadow(t,b,A,x,U,K,I),t.renderBufferDirect(x,null,U,K,b,I),b.onAfterShadow(t,b,A,x,U,K,I)}}}else if(q.visible){const H=_(b,q,w,N);b.onBeforeShadow(t,b,A,x,U,H,null),t.renderBufferDirect(x,null,U,H,b,null),b.onAfterShadow(t,b,A,x,U,H,null)}}const D=b.children;for(let U=0,q=D.length;U<q;U++)S(D[U],A,x,w,N)}function C(b){b.target.removeEventListener("dispose",C);for(const x in c){const w=c[x],N=b.target.uuid;N in w&&(w[N].dispose(),delete w[N])}}}function UP(t,e){function n(){let k=!1;const ue=new At;let le=null;const ye=new At(0,0,0,0);return{setMask:function(se){le!==se&&!k&&(t.colorMask(se,se,se,se),le=se)},setLocked:function(se){k=se},setClear:function(se,Z,Ee,Ue,pt){pt===!0&&(se*=Ue,Z*=Ue,Ee*=Ue),ue.set(se,Z,Ee,Ue),ye.equals(ue)===!1&&(t.clearColor(se,Z,Ee,Ue),ye.copy(ue))},reset:function(){k=!1,le=null,ye.set(-1,0,0,0)}}}function i(){let k=!1,ue=!1,le=null,ye=null,se=null;return{setReversed:function(Z){if(ue!==Z){const Ee=e.get("EXT_clip_control");Z?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),ue=Z;const Ue=se;se=null,this.setClear(Ue)}},getReversed:function(){return ue},setTest:function(Z){Z?ae(t.DEPTH_TEST):de(t.DEPTH_TEST)},setMask:function(Z){le!==Z&&!k&&(t.depthMask(Z),le=Z)},setFunc:function(Z){if(ue&&(Z=pT[Z]),ye!==Z){switch(Z){case Mf:t.depthFunc(t.NEVER);break;case Ef:t.depthFunc(t.ALWAYS);break;case wf:t.depthFunc(t.LESS);break;case Zs:t.depthFunc(t.LEQUAL);break;case Tf:t.depthFunc(t.EQUAL);break;case bf:t.depthFunc(t.GEQUAL);break;case Cf:t.depthFunc(t.GREATER);break;case Af:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ye=Z}},setLocked:function(Z){k=Z},setClear:function(Z){se!==Z&&(se=Z,ue&&(Z=1-Z),t.clearDepth(Z))},reset:function(){k=!1,le=null,ye=null,se=null,ue=!1}}}function r(){let k=!1,ue=null,le=null,ye=null,se=null,Z=null,Ee=null,Ue=null,pt=null;return{setTest:function(at){k||(at?ae(t.STENCIL_TEST):de(t.STENCIL_TEST))},setMask:function(at){ue!==at&&!k&&(t.stencilMask(at),ue=at)},setFunc:function(at,Si,Mi){(le!==at||ye!==Si||se!==Mi)&&(t.stencilFunc(at,Si,Mi),le=at,ye=Si,se=Mi)},setOp:function(at,Si,Mi){(Z!==at||Ee!==Si||Ue!==Mi)&&(t.stencilOp(at,Si,Mi),Z=at,Ee=Si,Ue=Mi)},setLocked:function(at){k=at},setClear:function(at){pt!==at&&(t.clearStencil(at),pt=at)},reset:function(){k=!1,ue=null,le=null,ye=null,se=null,Z=null,Ee=null,Ue=null,pt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},h={},u=new WeakMap,g=[],v=null,y=!1,m=null,d=null,p=null,_=null,S=null,C=null,b=null,A=new Ye(0,0,0),x=0,w=!1,N=null,R=null,D=null,U=null,q=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,L=0;const I=t.getParameter(t.VERSION);I.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(I)[1]),j=L>=1):I.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),j=L>=2);let V=null,K={};const ie=t.getParameter(t.SCISSOR_BOX),F=t.getParameter(t.VIEWPORT),pe=new At().fromArray(ie),Ie=new At().fromArray(F);function nt(k,ue,le,ye){const se=new Uint8Array(4),Z=t.createTexture();t.bindTexture(k,Z),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ee=0;Ee<le;Ee++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,ye,0,t.RGBA,t.UNSIGNED_BYTE,se):t.texImage2D(ue+Ee,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,se);return Z}const Q={};Q[t.TEXTURE_2D]=nt(t.TEXTURE_2D,t.TEXTURE_2D,1),Q[t.TEXTURE_CUBE_MAP]=nt(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[t.TEXTURE_2D_ARRAY]=nt(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Q[t.TEXTURE_3D]=nt(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(t.DEPTH_TEST),a.setFunc(Zs),He(!1),Rt(hg),ae(t.CULL_FACE),st(Oi);function ae(k){f[k]!==!0&&(t.enable(k),f[k]=!0)}function de(k){f[k]!==!1&&(t.disable(k),f[k]=!1)}function ze(k,ue){return h[k]!==ue?(t.bindFramebuffer(k,ue),h[k]=ue,k===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ue),k===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ne(k,ue){let le=g,ye=!1;if(k){le=u.get(ue),le===void 0&&(le=[],u.set(ue,le));const se=k.textures;if(le.length!==se.length||le[0]!==t.COLOR_ATTACHMENT0){for(let Z=0,Ee=se.length;Z<Ee;Z++)le[Z]=t.COLOR_ATTACHMENT0+Z;le.length=se.length,ye=!0}}else le[0]!==t.BACK&&(le[0]=t.BACK,ye=!0);ye&&t.drawBuffers(le)}function Oe(k){return v!==k?(t.useProgram(k),v=k,!0):!1}const Vt={[kr]:t.FUNC_ADD,[Fw]:t.FUNC_SUBTRACT,[kw]:t.FUNC_REVERSE_SUBTRACT};Vt[zw]=t.MIN,Vt[Bw]=t.MAX;const Ze={[Vw]:t.ZERO,[Hw]:t.ONE,[Gw]:t.SRC_COLOR,[yf]:t.SRC_ALPHA,[Yw]:t.SRC_ALPHA_SATURATE,[$w]:t.DST_COLOR,[Ww]:t.DST_ALPHA,[jw]:t.ONE_MINUS_SRC_COLOR,[Sf]:t.ONE_MINUS_SRC_ALPHA,[qw]:t.ONE_MINUS_DST_COLOR,[Xw]:t.ONE_MINUS_DST_ALPHA,[Kw]:t.CONSTANT_COLOR,[Zw]:t.ONE_MINUS_CONSTANT_COLOR,[Jw]:t.CONSTANT_ALPHA,[Qw]:t.ONE_MINUS_CONSTANT_ALPHA};function st(k,ue,le,ye,se,Z,Ee,Ue,pt,at){if(k===Oi){y===!0&&(de(t.BLEND),y=!1);return}if(y===!1&&(ae(t.BLEND),y=!0),k!==Uw){if(k!==m||at!==w){if((d!==kr||S!==kr)&&(t.blendEquation(t.FUNC_ADD),d=kr,S=kr),at)switch(k){case zs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pg:t.blendFunc(t.ONE,t.ONE);break;case mg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:tt("WebGLState: Invalid blending: ",k);break}else switch(k){case zs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pg:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case mg:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gg:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",k);break}p=null,_=null,C=null,b=null,A.set(0,0,0),x=0,m=k,w=at}return}se=se||ue,Z=Z||le,Ee=Ee||ye,(ue!==d||se!==S)&&(t.blendEquationSeparate(Vt[ue],Vt[se]),d=ue,S=se),(le!==p||ye!==_||Z!==C||Ee!==b)&&(t.blendFuncSeparate(Ze[le],Ze[ye],Ze[Z],Ze[Ee]),p=le,_=ye,C=Z,b=Ee),(Ue.equals(A)===!1||pt!==x)&&(t.blendColor(Ue.r,Ue.g,Ue.b,pt),A.copy(Ue),x=pt),m=k,w=!1}function dt(k,ue){k.side===Pi?de(t.CULL_FACE):ae(t.CULL_FACE);let le=k.side===En;ue&&(le=!le),He(le),k.blending===zs&&k.transparent===!1?st(Oi):st(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const ye=k.stencilWrite;o.setTest(ye),ye&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Dt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):de(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(k){N!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),N=k)}function Rt(k){k!==Dw?(ae(t.CULL_FACE),k!==R&&(k===hg?t.cullFace(t.BACK):k===Iw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):de(t.CULL_FACE),R=k}function O(k){k!==D&&(j&&t.lineWidth(k),D=k)}function Dt(k,ue,le){k?(ae(t.POLYGON_OFFSET_FILL),(U!==ue||q!==le)&&(U=ue,q=le,a.getReversed()&&(ue=-ue),t.polygonOffset(ue,le))):de(t.POLYGON_OFFSET_FILL)}function it(k){k?ae(t.SCISSOR_TEST):de(t.SCISSOR_TEST)}function ht(k){k===void 0&&(k=t.TEXTURE0+H-1),V!==k&&(t.activeTexture(k),V=k)}function be(k,ue,le){le===void 0&&(V===null?le=t.TEXTURE0+H-1:le=V);let ye=K[le];ye===void 0&&(ye={type:void 0,texture:void 0},K[le]=ye),(ye.type!==k||ye.texture!==ue)&&(V!==le&&(t.activeTexture(le),V=le),t.bindTexture(k,ue||Q[k]),ye.type=k,ye.texture=ue)}function P(){const k=K[V];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{t.compressedTexImage2D(...arguments)}catch(k){tt("WebGLState:",k)}}function z(){try{t.compressedTexImage3D(...arguments)}catch(k){tt("WebGLState:",k)}}function ee(){try{t.texSubImage2D(...arguments)}catch(k){tt("WebGLState:",k)}}function te(){try{t.texSubImage3D(...arguments)}catch(k){tt("WebGLState:",k)}}function J(){try{t.compressedTexSubImage2D(...arguments)}catch(k){tt("WebGLState:",k)}}function Se(){try{t.compressedTexSubImage3D(...arguments)}catch(k){tt("WebGLState:",k)}}function ce(){try{t.texStorage2D(...arguments)}catch(k){tt("WebGLState:",k)}}function Pe(){try{t.texStorage3D(...arguments)}catch(k){tt("WebGLState:",k)}}function De(){try{t.texImage2D(...arguments)}catch(k){tt("WebGLState:",k)}}function re(){try{t.texImage3D(...arguments)}catch(k){tt("WebGLState:",k)}}function oe(k){pe.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),pe.copy(k))}function Me(k){Ie.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),Ie.copy(k))}function we(k,ue){let le=c.get(ue);le===void 0&&(le=new WeakMap,c.set(ue,le));let ye=le.get(k);ye===void 0&&(ye=t.getUniformBlockIndex(ue,k.name),le.set(k,ye))}function ve(k,ue){const ye=c.get(ue).get(k);l.get(ue)!==ye&&(t.uniformBlockBinding(ue,ye,k.__bindingPointIndex),l.set(ue,ye))}function Ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},V=null,K={},h={},u=new WeakMap,g=[],v=null,y=!1,m=null,d=null,p=null,_=null,S=null,C=null,b=null,A=new Ye(0,0,0),x=0,w=!1,N=null,R=null,D=null,U=null,q=null,pe.set(0,0,t.canvas.width,t.canvas.height),Ie.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:de,bindFramebuffer:ze,drawBuffers:Ne,useProgram:Oe,setBlending:st,setMaterial:dt,setFlipSided:He,setCullFace:Rt,setLineWidth:O,setPolygonOffset:Dt,setScissorTest:it,activeTexture:ht,bindTexture:be,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:z,texImage2D:De,texImage3D:re,updateUBOMapping:we,uniformBlockBinding:ve,texStorage2D:ce,texStorage3D:Pe,texSubImage2D:ee,texSubImage3D:te,compressedTexSubImage2D:J,compressedTexSubImage3D:Se,scissor:oe,viewport:Me,reset:Ge}}function FP(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,f=new WeakMap;let h;const u=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,E){return g?new OffscreenCanvas(P,E):gc("canvas")}function y(P,E,z){let ee=1;const te=be(P);if((te.width>z||te.height>z)&&(ee=z/Math.max(te.width,te.height)),ee<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const J=Math.floor(ee*te.width),Se=Math.floor(ee*te.height);h===void 0&&(h=v(J,Se));const ce=E?v(J,Se):h;return ce.width=J,ce.height=Se,ce.getContext("2d").drawImage(P,0,0,J,Se),Fe("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+J+"x"+Se+")."),ce}else return"data"in P&&Fe("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),P;return P}function m(P){return P.generateMipmaps}function d(P){t.generateMipmap(P)}function p(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(P,E,z,ee,te=!1){if(P!==null){if(t[P]!==void 0)return t[P];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=E;if(E===t.RED&&(z===t.FLOAT&&(J=t.R32F),z===t.HALF_FLOAT&&(J=t.R16F),z===t.UNSIGNED_BYTE&&(J=t.R8)),E===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.R8UI),z===t.UNSIGNED_SHORT&&(J=t.R16UI),z===t.UNSIGNED_INT&&(J=t.R32UI),z===t.BYTE&&(J=t.R8I),z===t.SHORT&&(J=t.R16I),z===t.INT&&(J=t.R32I)),E===t.RG&&(z===t.FLOAT&&(J=t.RG32F),z===t.HALF_FLOAT&&(J=t.RG16F),z===t.UNSIGNED_BYTE&&(J=t.RG8)),E===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.RG8UI),z===t.UNSIGNED_SHORT&&(J=t.RG16UI),z===t.UNSIGNED_INT&&(J=t.RG32UI),z===t.BYTE&&(J=t.RG8I),z===t.SHORT&&(J=t.RG16I),z===t.INT&&(J=t.RG32I)),E===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.RGB8UI),z===t.UNSIGNED_SHORT&&(J=t.RGB16UI),z===t.UNSIGNED_INT&&(J=t.RGB32UI),z===t.BYTE&&(J=t.RGB8I),z===t.SHORT&&(J=t.RGB16I),z===t.INT&&(J=t.RGB32I)),E===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),z===t.UNSIGNED_INT&&(J=t.RGBA32UI),z===t.BYTE&&(J=t.RGBA8I),z===t.SHORT&&(J=t.RGBA16I),z===t.INT&&(J=t.RGBA32I)),E===t.RGB&&(z===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),E===t.RGBA){const Se=te?mc:Je.getTransfer(ee);z===t.FLOAT&&(J=t.RGBA32F),z===t.HALF_FLOAT&&(J=t.RGBA16F),z===t.UNSIGNED_BYTE&&(J=Se===ot?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(P,E){let z;return P?E===null||E===_i||E===vo?z=t.DEPTH24_STENCIL8:E===fi?z=t.DEPTH32F_STENCIL8:E===go&&(z=t.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===_i||E===vo?z=t.DEPTH_COMPONENT24:E===fi?z=t.DEPTH_COMPONENT32F:E===go&&(z=t.DEPTH_COMPONENT16),z}function C(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==qt&&P.minFilter!==rn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function b(P){const E=P.target;E.removeEventListener("dispose",b),x(E),E.isVideoTexture&&f.delete(E)}function A(P){const E=P.target;E.removeEventListener("dispose",A),N(E)}function x(P){const E=i.get(P);if(E.__webglInit===void 0)return;const z=P.source,ee=u.get(z);if(ee){const te=ee[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(P),Object.keys(ee).length===0&&u.delete(z)}i.remove(P)}function w(P){const E=i.get(P);t.deleteTexture(E.__webglTexture);const z=P.source,ee=u.get(z);delete ee[E.__cacheKey],a.memory.textures--}function N(P){const E=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let te=0;te<E.__webglFramebuffer[ee].length;te++)t.deleteFramebuffer(E.__webglFramebuffer[ee][te]);else t.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)t.deleteFramebuffer(E.__webglFramebuffer[ee]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=P.textures;for(let ee=0,te=z.length;ee<te;ee++){const J=i.get(z[ee]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(z[ee])}i.remove(P)}let R=0;function D(){R=0}function U(){const P=R;return P>=r.maxTextures&&Fe("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),R+=1,P}function q(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function H(P,E){const z=i.get(P);if(P.isVideoTexture&&it(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&z.__version!==P.version){const ee=P.image;if(ee===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(z,P,E);return}}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+E)}function j(P,E){const z=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){Q(z,P,E);return}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+E)}function L(P,E){const z=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){Q(z,P,E);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+E)}function I(P,E){const z=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&z.__version!==P.version){ae(z,P,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+E)}const V={[Rf]:t.REPEAT,[Di]:t.CLAMP_TO_EDGE,[Pf]:t.MIRRORED_REPEAT},K={[qt]:t.NEAREST,[nT]:t.NEAREST_MIPMAP_NEAREST,[Ko]:t.NEAREST_MIPMAP_LINEAR,[rn]:t.LINEAR,[zu]:t.LINEAR_MIPMAP_NEAREST,[Gr]:t.LINEAR_MIPMAP_LINEAR},ie={[sT]:t.NEVER,[uT]:t.ALWAYS,[aT]:t.LESS,[Ap]:t.LEQUAL,[oT]:t.EQUAL,[Rp]:t.GEQUAL,[lT]:t.GREATER,[cT]:t.NOTEQUAL};function F(P,E){if(E.type===fi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===rn||E.magFilter===zu||E.magFilter===Ko||E.magFilter===Gr||E.minFilter===rn||E.minFilter===zu||E.minFilter===Ko||E.minFilter===Gr)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,V[E.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,V[E.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,V[E.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,K[E.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,K[E.minFilter]),E.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,ie[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===qt||E.minFilter!==Ko&&E.minFilter!==Gr||E.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function pe(P,E){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",b));const ee=E.source;let te=u.get(ee);te===void 0&&(te={},u.set(ee,te));const J=q(E);if(J!==P.__cacheKey){te[J]===void 0&&(te[J]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,z=!0),te[J].usedTimes++;const Se=te[P.__cacheKey];Se!==void 0&&(te[P.__cacheKey].usedTimes--,Se.usedTimes===0&&w(E)),P.__cacheKey=J,P.__webglTexture=te[J].texture}return z}function Ie(P,E,z){return Math.floor(Math.floor(P/z)/E)}function nt(P,E,z,ee){const J=P.updateRanges;if(J.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,z,ee,E.data);else{J.sort((re,oe)=>re.start-oe.start);let Se=0;for(let re=1;re<J.length;re++){const oe=J[Se],Me=J[re],we=oe.start+oe.count,ve=Ie(Me.start,E.width,4),Ge=Ie(oe.start,E.width,4);Me.start<=we+1&&ve===Ge&&Ie(Me.start+Me.count-1,E.width,4)===ve?oe.count=Math.max(oe.count,Me.start+Me.count-oe.start):(++Se,J[Se]=Me)}J.length=Se+1;const ce=t.getParameter(t.UNPACK_ROW_LENGTH),Pe=t.getParameter(t.UNPACK_SKIP_PIXELS),De=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let re=0,oe=J.length;re<oe;re++){const Me=J[re],we=Math.floor(Me.start/4),ve=Math.ceil(Me.count/4),Ge=we%E.width,k=Math.floor(we/E.width),ue=ve,le=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(t.UNPACK_SKIP_ROWS,k),n.texSubImage2D(t.TEXTURE_2D,0,Ge,k,ue,le,z,ee,E.data)}P.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ce),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(t.UNPACK_SKIP_ROWS,De)}}function Q(P,E,z){let ee=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=t.TEXTURE_3D);const te=pe(P,E),J=E.source;n.bindTexture(ee,P.__webglTexture,t.TEXTURE0+z);const Se=i.get(J);if(J.version!==Se.__version||te===!0){n.activeTexture(t.TEXTURE0+z);const ce=Je.getPrimaries(Je.workingColorSpace),Pe=E.colorSpace===sr?null:Je.getPrimaries(E.colorSpace),De=E.colorSpace===sr||ce===Pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let re=y(E.image,!1,r.maxTextureSize);re=ht(E,re);const oe=s.convert(E.format,E.colorSpace),Me=s.convert(E.type);let we=_(E.internalFormat,oe,Me,E.colorSpace,E.isVideoTexture);F(ee,E);let ve;const Ge=E.mipmaps,k=E.isVideoTexture!==!0,ue=Se.__version===void 0||te===!0,le=J.dataReady,ye=C(E,re);if(E.isDepthTexture)we=S(E.format===jr,E.type),ue&&(k?n.texStorage2D(t.TEXTURE_2D,1,we,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,we,re.width,re.height,0,oe,Me,null));else if(E.isDataTexture)if(Ge.length>0){k&&ue&&n.texStorage2D(t.TEXTURE_2D,ye,we,Ge[0].width,Ge[0].height);for(let se=0,Z=Ge.length;se<Z;se++)ve=Ge[se],k?le&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,ve.width,ve.height,oe,Me,ve.data):n.texImage2D(t.TEXTURE_2D,se,we,ve.width,ve.height,0,oe,Me,ve.data);E.generateMipmaps=!1}else k?(ue&&n.texStorage2D(t.TEXTURE_2D,ye,we,re.width,re.height),le&&nt(E,re,oe,Me)):n.texImage2D(t.TEXTURE_2D,0,we,re.width,re.height,0,oe,Me,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,we,Ge[0].width,Ge[0].height,re.depth);for(let se=0,Z=Ge.length;se<Z;se++)if(ve=Ge[se],E.format!==Qn)if(oe!==null)if(k){if(le)if(E.layerUpdates.size>0){const Ee=Gg(ve.width,ve.height,E.format,E.type);for(const Ue of E.layerUpdates){const pt=ve.data.subarray(Ue*Ee/ve.data.BYTES_PER_ELEMENT,(Ue+1)*Ee/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,Ue,ve.width,ve.height,1,oe,pt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,ve.width,ve.height,re.depth,oe,ve.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,we,ve.width,ve.height,re.depth,0,ve.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?le&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,ve.width,ve.height,re.depth,oe,Me,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,we,ve.width,ve.height,re.depth,0,oe,Me,ve.data)}else{k&&ue&&n.texStorage2D(t.TEXTURE_2D,ye,we,Ge[0].width,Ge[0].height);for(let se=0,Z=Ge.length;se<Z;se++)ve=Ge[se],E.format!==Qn?oe!==null?k?le&&n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,ve.width,ve.height,oe,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,se,we,ve.width,ve.height,0,ve.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?le&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,ve.width,ve.height,oe,Me,ve.data):n.texImage2D(t.TEXTURE_2D,se,we,ve.width,ve.height,0,oe,Me,ve.data)}else if(E.isDataArrayTexture)if(k){if(ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,we,re.width,re.height,re.depth),le)if(E.layerUpdates.size>0){const se=Gg(re.width,re.height,E.format,E.type);for(const Z of E.layerUpdates){const Ee=re.data.subarray(Z*se/re.data.BYTES_PER_ELEMENT,(Z+1)*se/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,re.width,re.height,1,oe,Me,Ee)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,oe,Me,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,we,re.width,re.height,re.depth,0,oe,Me,re.data);else if(E.isData3DTexture)k?(ue&&n.texStorage3D(t.TEXTURE_3D,ye,we,re.width,re.height,re.depth),le&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,oe,Me,re.data)):n.texImage3D(t.TEXTURE_3D,0,we,re.width,re.height,re.depth,0,oe,Me,re.data);else if(E.isFramebufferTexture){if(ue)if(k)n.texStorage2D(t.TEXTURE_2D,ye,we,re.width,re.height);else{let se=re.width,Z=re.height;for(let Ee=0;Ee<ye;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,we,se,Z,0,oe,Me,null),se>>=1,Z>>=1}}else if(Ge.length>0){if(k&&ue){const se=be(Ge[0]);n.texStorage2D(t.TEXTURE_2D,ye,we,se.width,se.height)}for(let se=0,Z=Ge.length;se<Z;se++)ve=Ge[se],k?le&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,oe,Me,ve):n.texImage2D(t.TEXTURE_2D,se,we,oe,Me,ve);E.generateMipmaps=!1}else if(k){if(ue){const se=be(re);n.texStorage2D(t.TEXTURE_2D,ye,we,se.width,se.height)}le&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe,Me,re)}else n.texImage2D(t.TEXTURE_2D,0,we,oe,Me,re);m(E)&&d(ee),Se.__version=J.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ae(P,E,z){if(E.image.length!==6)return;const ee=pe(P,E),te=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+z);const J=i.get(te);if(te.version!==J.__version||ee===!0){n.activeTexture(t.TEXTURE0+z);const Se=Je.getPrimaries(Je.workingColorSpace),ce=E.colorSpace===sr?null:Je.getPrimaries(E.colorSpace),Pe=E.colorSpace===sr||Se===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const De=E.isCompressedTexture||E.image[0].isCompressedTexture,re=E.image[0]&&E.image[0].isDataTexture,oe=[];for(let Z=0;Z<6;Z++)!De&&!re?oe[Z]=y(E.image[Z],!0,r.maxCubemapSize):oe[Z]=re?E.image[Z].image:E.image[Z],oe[Z]=ht(E,oe[Z]);const Me=oe[0],we=s.convert(E.format,E.colorSpace),ve=s.convert(E.type),Ge=_(E.internalFormat,we,ve,E.colorSpace),k=E.isVideoTexture!==!0,ue=J.__version===void 0||ee===!0,le=te.dataReady;let ye=C(E,Me);F(t.TEXTURE_CUBE_MAP,E);let se;if(De){k&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,Ge,Me.width,Me.height);for(let Z=0;Z<6;Z++){se=oe[Z].mipmaps;for(let Ee=0;Ee<se.length;Ee++){const Ue=se[Ee];E.format!==Qn?we!==null?k?le&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee,0,0,Ue.width,Ue.height,we,Ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee,Ge,Ue.width,Ue.height,0,Ue.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee,0,0,Ue.width,Ue.height,we,ve,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee,Ge,Ue.width,Ue.height,0,we,ve,Ue.data)}}}else{if(se=E.mipmaps,k&&ue){se.length>0&&ye++;const Z=be(oe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,Ge,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(re){k?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,oe[Z].width,oe[Z].height,we,ve,oe[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ge,oe[Z].width,oe[Z].height,0,we,ve,oe[Z].data);for(let Ee=0;Ee<se.length;Ee++){const pt=se[Ee].image[Z].image;k?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee+1,0,0,pt.width,pt.height,we,ve,pt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee+1,Ge,pt.width,pt.height,0,we,ve,pt.data)}}else{k?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,we,ve,oe[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ge,we,ve,oe[Z]);for(let Ee=0;Ee<se.length;Ee++){const Ue=se[Ee];k?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee+1,0,0,we,ve,Ue.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee+1,Ge,we,ve,Ue.image[Z])}}}m(E)&&d(t.TEXTURE_CUBE_MAP),J.__version=te.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function de(P,E,z,ee,te,J){const Se=s.convert(z.format,z.colorSpace),ce=s.convert(z.type),Pe=_(z.internalFormat,Se,ce,z.colorSpace),De=i.get(E),re=i.get(z);if(re.__renderTarget=E,!De.__hasExternalTextures){const oe=Math.max(1,E.width>>J),Me=Math.max(1,E.height>>J);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,J,Pe,oe,Me,E.depth,0,Se,ce,null):n.texImage2D(te,J,Pe,oe,Me,0,Se,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Dt(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,te,re.__webglTexture,0,O(E)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,te,re.__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ze(P,E,z){if(t.bindRenderbuffer(t.RENDERBUFFER,P),E.depthBuffer){const ee=E.depthTexture,te=ee&&ee.isDepthTexture?ee.type:null,J=S(E.stencilBuffer,te),Se=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Dt(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,O(E),J,E.width,E.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,O(E),J,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,J,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,P)}else{const ee=E.textures;for(let te=0;te<ee.length;te++){const J=ee[te],Se=s.convert(J.format,J.colorSpace),ce=s.convert(J.type),Pe=_(J.internalFormat,Se,ce,J.colorSpace);Dt(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,O(E),Pe,E.width,E.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,O(E),Pe,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Pe,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ne(P,E,z){const ee=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(E.depthTexture);if(te.__renderTarget=E,(!te.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ee){if(te.__webglInit===void 0&&(te.__webglInit=!0,E.depthTexture.addEventListener("dispose",b)),te.__webglTexture===void 0){te.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),F(t.TEXTURE_CUBE_MAP,E.depthTexture);const De=s.convert(E.depthTexture.format),re=s.convert(E.depthTexture.type);let oe;E.depthTexture.format===Hi?oe=t.DEPTH_COMPONENT24:E.depthTexture.format===jr&&(oe=t.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,oe,E.width,E.height,0,De,re,null)}}else H(E.depthTexture,0);const J=te.__webglTexture,Se=O(E),ce=ee?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,Pe=E.depthTexture.format===jr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(E.depthTexture.format===Hi)Dt(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Pe,ce,J,0,Se):t.framebufferTexture2D(t.FRAMEBUFFER,Pe,ce,J,0);else if(E.depthTexture.format===jr)Dt(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Pe,ce,J,0,Se):t.framebufferTexture2D(t.FRAMEBUFFER,Pe,ce,J,0);else throw new Error("Unknown depthTexture format")}function Oe(P){const E=i.get(P),z=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const ee=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ee){const te=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ee.removeEventListener("dispose",te)};ee.addEventListener("dispose",te),E.__depthDisposeCallback=te}E.__boundDepthTexture=ee}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(z)for(let ee=0;ee<6;ee++)Ne(E.__webglFramebuffer[ee],P,ee);else{const ee=P.texture.mipmaps;ee&&ee.length>0?Ne(E.__webglFramebuffer[0],P,0):Ne(E.__webglFramebuffer,P,0)}else if(z){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]===void 0)E.__webglDepthbuffer[ee]=t.createRenderbuffer(),ze(E.__webglDepthbuffer[ee],P,!1);else{const te=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,J)}}else{const ee=P.texture.mipmaps;if(ee&&ee.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),ze(E.__webglDepthbuffer,P,!1);else{const te=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,J)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Vt(P,E,z){const ee=i.get(P);E!==void 0&&de(ee.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&Oe(P)}function Ze(P){const E=P.texture,z=i.get(P),ee=i.get(E);P.addEventListener("dispose",A);const te=P.textures,J=P.isWebGLCubeRenderTarget===!0,Se=te.length>1;if(Se||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=E.version,a.memory.textures++),J){z.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[ce]=[];for(let Pe=0;Pe<E.mipmaps.length;Pe++)z.__webglFramebuffer[ce][Pe]=t.createFramebuffer()}else z.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)z.__webglFramebuffer[ce]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(Se)for(let ce=0,Pe=te.length;ce<Pe;ce++){const De=i.get(te[ce]);De.__webglTexture===void 0&&(De.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&Dt(P)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ce=0;ce<te.length;ce++){const Pe=te[ce];z.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[ce]);const De=s.convert(Pe.format,Pe.colorSpace),re=s.convert(Pe.type),oe=_(Pe.internalFormat,De,re,Pe.colorSpace,P.isXRRenderTarget===!0),Me=O(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,oe,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,z.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),ze(z.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),F(t.TEXTURE_CUBE_MAP,E);for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)de(z.__webglFramebuffer[ce][Pe],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Pe);else de(z.__webglFramebuffer[ce],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(E)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let ce=0,Pe=te.length;ce<Pe;ce++){const De=te[ce],re=i.get(De);let oe=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(oe=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,re.__webglTexture),F(oe,De),de(z.__webglFramebuffer,P,De,t.COLOR_ATTACHMENT0+ce,oe,0),m(De)&&d(oe)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,ee.__webglTexture),F(ce,E),E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)de(z.__webglFramebuffer[Pe],P,E,t.COLOR_ATTACHMENT0,ce,Pe);else de(z.__webglFramebuffer,P,E,t.COLOR_ATTACHMENT0,ce,0);m(E)&&d(ce),n.unbindTexture()}P.depthBuffer&&Oe(P)}function st(P){const E=P.textures;for(let z=0,ee=E.length;z<ee;z++){const te=E[z];if(m(te)){const J=p(P),Se=i.get(te).__webglTexture;n.bindTexture(J,Se),d(J),n.unbindTexture()}}}const dt=[],He=[];function Rt(P){if(P.samples>0){if(Dt(P)===!1){const E=P.textures,z=P.width,ee=P.height;let te=t.COLOR_BUFFER_BIT;const J=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(P),ce=E.length>1;if(ce)for(let De=0;De<E.length;De++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Pe=P.texture.mipmaps;Pe&&Pe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let De=0;De<E.length;De++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[De]);const re=i.get(E[De]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,re,0)}t.blitFramebuffer(0,0,z,ee,0,0,z,ee,te,t.NEAREST),l===!0&&(dt.length=0,He.length=0,dt.push(t.COLOR_ATTACHMENT0+De),P.depthBuffer&&P.resolveDepthBuffer===!1&&(dt.push(J),He.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,He)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,dt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let De=0;De<E.length;De++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,Se.__webglColorRenderbuffer[De]);const re=i.get(E[De]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function O(P){return Math.min(r.maxSamples,P.samples)}function Dt(P){const E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function it(P){const E=a.render.frame;f.get(P)!==E&&(f.set(P,E),P.update())}function ht(P,E){const z=P.colorSpace,ee=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==ea&&z!==sr&&(Je.getTransfer(z)===ot?(ee!==Qn||te!==Rn)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",z)),E}function be(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=D,this.setTexture2D=H,this.setTexture2DArray=j,this.setTexture3D=L,this.setTextureCube=I,this.rebindTextures=Vt,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Dt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function kP(t,e){function n(i,r=sr){let s;const a=Je.getTransfer(r);if(i===Rn)return t.UNSIGNED_BYTE;if(i===Ep)return t.UNSIGNED_SHORT_4_4_4_4;if(i===wp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===vx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===_x)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===mx)return t.BYTE;if(i===gx)return t.SHORT;if(i===go)return t.UNSIGNED_SHORT;if(i===Mp)return t.INT;if(i===_i)return t.UNSIGNED_INT;if(i===fi)return t.FLOAT;if(i===Vi)return t.HALF_FLOAT;if(i===xx)return t.ALPHA;if(i===yx)return t.RGB;if(i===Qn)return t.RGBA;if(i===Hi)return t.DEPTH_COMPONENT;if(i===jr)return t.DEPTH_STENCIL;if(i===Sx)return t.RED;if(i===Tp)return t.RED_INTEGER;if(i===Qs)return t.RG;if(i===bp)return t.RG_INTEGER;if(i===Cp)return t.RGBA_INTEGER;if(i===Ul||i===Fl||i===kl||i===zl)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ul)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ul)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===kl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lf||i===Nf||i===Df||i===If)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Lf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Df)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===If)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Of||i===Uf||i===Ff||i===kf||i===zf||i===Bf||i===Vf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Of||i===Uf)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ff)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===kf)return s.COMPRESSED_R11_EAC;if(i===zf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Bf)return s.COMPRESSED_RG11_EAC;if(i===Vf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Hf||i===Gf||i===jf||i===Wf||i===Xf||i===$f||i===qf||i===Yf||i===Kf||i===Zf||i===Jf||i===Qf||i===eh||i===th)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Hf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$f)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===eh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===th)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nh||i===ih||i===rh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===nh)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ih)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sh||i===ah||i===oh||i===lh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===sh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ah)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const zP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Nx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new yi({vertexShader:zP,fragmentShader:BP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ri(new Zc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HP extends pa{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,u=null,g=null,v=null;const y=typeof XRWebGLBinding<"u",m=new VP,d={},p=n.getContextAttributes();let _=null,S=null;const C=[],b=[],A=new Ke;let x=null;const w=new An;w.viewport=new At;const N=new An;N.viewport=new At;const R=[w,N],D=new eb;let U=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ae=C[Q];return ae===void 0&&(ae=new $u,C[Q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Q){let ae=C[Q];return ae===void 0&&(ae=new $u,C[Q]=ae),ae.getGripSpace()},this.getHand=function(Q){let ae=C[Q];return ae===void 0&&(ae=new $u,C[Q]=ae),ae.getHandSpace()};function H(Q){const ae=b.indexOf(Q.inputSource);if(ae===-1)return;const de=C[ae];de!==void 0&&(de.update(Q.inputSource,Q.frame,c||a),de.dispatchEvent({type:Q.type,data:Q.inputSource}))}function j(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",L);for(let Q=0;Q<C.length;Q++){const ae=b[Q];ae!==null&&(b[Q]=null,C[Q].disconnect(ae))}U=null,q=null,m.reset();for(const Q in d)delete d[Q];e.setRenderTarget(_),g=null,u=null,h=null,r=null,S=null,nt.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:g},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",j),r.addEventListener("inputsourceschange",L),p.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,ze=null,Ne=null;p.depth&&(Ne=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,de=p.stencil?jr:Hi,ze=p.stencil?vo:_i);const Oe={colorFormat:n.RGBA8,depthFormat:Ne,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(Oe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new vi(u.textureWidth,u.textureHeight,{format:Qn,type:Rn,depthTexture:new xo(u.textureWidth,u.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const de={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,de),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),S=new vi(g.framebufferWidth,g.framebufferHeight,{format:Qn,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),nt.setContext(r),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function L(Q){for(let ae=0;ae<Q.removed.length;ae++){const de=Q.removed[ae],ze=b.indexOf(de);ze>=0&&(b[ze]=null,C[ze].disconnect(de))}for(let ae=0;ae<Q.added.length;ae++){const de=Q.added[ae];let ze=b.indexOf(de);if(ze===-1){for(let Oe=0;Oe<C.length;Oe++)if(Oe>=b.length){b.push(de),ze=Oe;break}else if(b[Oe]===null){b[Oe]=de,ze=Oe;break}if(ze===-1)break}const Ne=C[ze];Ne&&Ne.connect(de)}}const I=new G,V=new G;function K(Q,ae,de){I.setFromMatrixPosition(ae.matrixWorld),V.setFromMatrixPosition(de.matrixWorld);const ze=I.distanceTo(V),Ne=ae.projectionMatrix.elements,Oe=de.projectionMatrix.elements,Vt=Ne[14]/(Ne[10]-1),Ze=Ne[14]/(Ne[10]+1),st=(Ne[9]+1)/Ne[5],dt=(Ne[9]-1)/Ne[5],He=(Ne[8]-1)/Ne[0],Rt=(Oe[8]+1)/Oe[0],O=Vt*He,Dt=Vt*Rt,it=ze/(-He+Rt),ht=it*-He;if(ae.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ht),Q.translateZ(it),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ne[10]===-1)Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const be=Vt+it,P=Ze+it,E=O-ht,z=Dt+(ze-ht),ee=st*Ze/P*be,te=dt*Ze/P*be;Q.projectionMatrix.makePerspective(E,z,ee,te,be,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ie(Q,ae){ae===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ae.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ae=Q.near,de=Q.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(de=m.depthFar)),D.near=N.near=w.near=ae,D.far=N.far=w.far=de,(U!==D.near||q!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),U=D.near,q=D.far),D.layers.mask=Q.layers.mask|6,w.layers.mask=D.layers.mask&-5,N.layers.mask=D.layers.mask&-3;const ze=Q.parent,Ne=D.cameras;ie(D,ze);for(let Oe=0;Oe<Ne.length;Oe++)ie(Ne[Oe],ze);Ne.length===2?K(D,w,N):D.projectionMatrix.copy(w.projectionMatrix),F(Q,D,ze)};function F(Q,ae,de){de===null?Q.matrix.copy(ae.matrixWorld):(Q.matrix.copy(de.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ae.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ch*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&g===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(Q){return d[Q]};let pe=null;function Ie(Q,ae){if(f=ae.getViewerPose(c||a),v=ae,f!==null){const de=f.views;g!==null&&(e.setRenderTargetFramebuffer(S,g.framebuffer),e.setRenderTarget(S));let ze=!1;de.length!==D.cameras.length&&(D.cameras.length=0,ze=!0);for(let Ze=0;Ze<de.length;Ze++){const st=de[Ze];let dt=null;if(g!==null)dt=g.getViewport(st);else{const Rt=h.getViewSubImage(u,st);dt=Rt.viewport,Ze===0&&(e.setRenderTargetTextures(S,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(S))}let He=R[Ze];He===void 0&&(He=new An,He.layers.enable(Ze),He.viewport=new At,R[Ze]=He),He.matrix.fromArray(st.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(st.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(dt.x,dt.y,dt.width,dt.height),Ze===0&&(D.matrix.copy(He.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),ze===!0&&D.cameras.push(He)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){h=i.getBinding();const Ze=h.getDepthInformation(de[0]);Ze&&Ze.isValid&&Ze.texture&&m.init(Ze,r.renderState)}if(Ne&&Ne.includes("camera-access")&&y){e.state.unbindTexture(),h=i.getBinding();for(let Ze=0;Ze<de.length;Ze++){const st=de[Ze].camera;if(st){let dt=d[st];dt||(dt=new Nx,d[st]=dt);const He=h.getCameraImage(st);dt.sourceTexture=He}}}}for(let de=0;de<C.length;de++){const ze=b[de],Ne=C[de];ze!==null&&Ne!==void 0&&Ne.update(ze,ae,c||a)}pe&&pe(Q,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),v=null}const nt=new Fx;nt.setAnimationLoop(Ie),this.setAnimationLoop=function(Q){pe=Q},this.dispose=function(){}}}const Ir=new xi,GP=new wt;function jP(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Dx(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,p,_,S){d.isMeshBasicMaterial?s(m,d):d.isMeshLambertMaterial?(s(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),f(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(m,d),u(m,d),d.isMeshPhysicalMaterial&&g(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),y(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,p,_):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===En&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===En&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const p=e.get(d),_=p.envMap,S=p.envMapRotation;_&&(m.envMap.value=_,Ir.copy(S),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),m.envMapRotation.value.setFromMatrix4(GP.makeRotationFromEuler(Ir)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,p,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*p,m.scale.value=_*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,p){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===En&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=p.texture,m.transmissionSamplerSize.value.set(p.width,p.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const p=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(p.matrixWorld),m.nearDistance.value=p.shadow.camera.near,m.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function WP(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(p,_){const S=_.program;i.uniformBlockBinding(p,S)}function c(p,_){let S=r[p.id];S===void 0&&(v(p),S=f(p),r[p.id]=S,p.addEventListener("dispose",m));const C=_.program;i.updateUBOMapping(p,C);const b=e.render.frame;s[p.id]!==b&&(u(p),s[p.id]=b)}function f(p){const _=h();p.__bindingPointIndex=_;const S=t.createBuffer(),C=p.__size,b=p.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function h(){for(let p=0;p<o;p++)if(a.indexOf(p)===-1)return a.push(p),p;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(p){const _=r[p.id],S=p.uniforms,C=p.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let b=0,A=S.length;b<A;b++){const x=Array.isArray(S[b])?S[b]:[S[b]];for(let w=0,N=x.length;w<N;w++){const R=x[w];if(g(R,b,w,C)===!0){const D=R.__offset,U=Array.isArray(R.value)?R.value:[R.value];let q=0;for(let H=0;H<U.length;H++){const j=U[H],L=y(j);typeof j=="number"||typeof j=="boolean"?(R.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,D+q,R.__data)):j.isMatrix3?(R.__data[0]=j.elements[0],R.__data[1]=j.elements[1],R.__data[2]=j.elements[2],R.__data[3]=0,R.__data[4]=j.elements[3],R.__data[5]=j.elements[4],R.__data[6]=j.elements[5],R.__data[7]=0,R.__data[8]=j.elements[6],R.__data[9]=j.elements[7],R.__data[10]=j.elements[8],R.__data[11]=0):(j.toArray(R.__data,q),q+=L.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,D,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(p,_,S,C){const b=p.value,A=_+"_"+S;if(C[A]===void 0)return typeof b=="number"||typeof b=="boolean"?C[A]=b:C[A]=b.clone(),!0;{const x=C[A];if(typeof b=="number"||typeof b=="boolean"){if(x!==b)return C[A]=b,!0}else if(x.equals(b)===!1)return x.copy(b),!0}return!1}function v(p){const _=p.uniforms;let S=0;const C=16;for(let A=0,x=_.length;A<x;A++){const w=Array.isArray(_[A])?_[A]:[_[A]];for(let N=0,R=w.length;N<R;N++){const D=w[N],U=Array.isArray(D.value)?D.value:[D.value];for(let q=0,H=U.length;q<H;q++){const j=U[q],L=y(j),I=S%C,V=I%L.boundary,K=I+V;S+=V,K!==0&&C-K<L.storage&&(S+=C-K),D.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=L.storage}}}const b=S%C;return b>0&&(S+=C-b),p.__size=S,p.__cache={},this}function y(p){const _={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(_.boundary=4,_.storage=4):p.isVector2?(_.boundary=8,_.storage=8):p.isVector3||p.isColor?(_.boundary=16,_.storage=12):p.isVector4?(_.boundary=16,_.storage=16):p.isMatrix3?(_.boundary=48,_.storage=48):p.isMatrix4?(_.boundary=64,_.storage=64):p.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Fe("WebGLRenderer: Unsupported uniform value type.",p),_}function m(p){const _=p.target;_.removeEventListener("dispose",m);const S=a.indexOf(_.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const p in r)t.deleteBuffer(r[p]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}const XP=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let li=null;function $P(){return li===null&&(li=new OT(XP,16,16,Qs,Vi),li.name="DFG_LUT",li.minFilter=rn,li.magFilter=rn,li.wrapS=Di,li.wrapT=Di,li.generateMipmaps=!1,li.needsUpdate=!0),li}class qP{constructor(e={}){const{canvas:n=fT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:g=Rn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const y=g,m=new Set([Cp,bp,Tp]),d=new Set([Rn,_i,go,vo,Ep,wp]),p=new Uint32Array(4),_=new Int32Array(4);let S=null,C=null;const b=[],A=[];let x=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let N=!1;this._outputColorSpace=Fn;let R=0,D=0,U=null,q=-1,H=null;const j=new At,L=new At;let I=null;const V=new Ye(0);let K=0,ie=n.width,F=n.height,pe=1,Ie=null,nt=null;const Q=new At(0,0,ie,F),ae=new At(0,0,ie,F);let de=!1;const ze=new Np;let Ne=!1,Oe=!1;const Vt=new wt,Ze=new G,st=new At,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function Rt(){return U===null?pe:1}let O=i;function Dt(T,B){return n.getContext(T,B)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Sp}`),n.addEventListener("webglcontextlost",Ee,!1),n.addEventListener("webglcontextrestored",Ue,!1),n.addEventListener("webglcontextcreationerror",pt,!1),O===null){const B="webgl2";if(O=Dt(B,T),O===null)throw Dt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw tt("WebGLRenderer: "+T.message),T}let it,ht,be,P,E,z,ee,te,J,Se,ce,Pe,De,re,oe,Me,we,ve,Ge,k,ue,le,ye;function se(){it=new qA(O),it.init(),ue=new kP(O,it),ht=new BA(O,it,e,ue),be=new UP(O,it),ht.reversedDepthBuffer&&u&&be.buffers.depth.setReversed(!0),P=new ZA(O),E=new MP,z=new FP(O,it,be,E,ht,ue,P),ee=new $A(w),te=new nb(O),le=new kA(O,te),J=new YA(O,te,P,le),Se=new QA(O,J,te,le,P),ve=new JA(O,ht,z),oe=new VA(E),ce=new SP(w,ee,it,ht,le,oe),Pe=new jP(w,E),De=new wP,re=new PP(it),we=new FA(w,ee,be,Se,v,l),Me=new OP(w,Se,ht),ye=new WP(O,P,ht,be),Ge=new zA(O,it,P),k=new KA(O,it,P),P.programs=ce.programs,w.capabilities=ht,w.extensions=it,w.properties=E,w.renderLists=De,w.shadowMap=Me,w.state=be,w.info=P}se(),y!==Rn&&(x=new tR(y,n.width,n.height,r,s));const Z=new HP(w,O);this.xr=Z,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=it.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=it.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(T){T!==void 0&&(pe=T,this.setSize(ie,F,!1))},this.getSize=function(T){return T.set(ie,F)},this.setSize=function(T,B,Y=!0){if(Z.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=T,F=B,n.width=Math.floor(T*pe),n.height=Math.floor(B*pe),Y===!0&&(n.style.width=T+"px",n.style.height=B+"px"),x!==null&&x.setSize(n.width,n.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(ie*pe,F*pe).floor()},this.setDrawingBufferSize=function(T,B,Y){ie=T,F=B,pe=Y,n.width=Math.floor(T*Y),n.height=Math.floor(B*Y),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(y===Rn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(j)},this.getViewport=function(T){return T.copy(Q)},this.setViewport=function(T,B,Y,X){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,B,Y,X),be.viewport(j.copy(Q).multiplyScalar(pe).round())},this.getScissor=function(T){return T.copy(ae)},this.setScissor=function(T,B,Y,X){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,B,Y,X),be.scissor(L.copy(ae).multiplyScalar(pe).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(T){be.setScissorTest(de=T)},this.setOpaqueSort=function(T){Ie=T},this.setTransparentSort=function(T){nt=T},this.getClearColor=function(T){return T.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,Y=!0){let X=0;if(T){let W=!1;if(U!==null){const me=U.texture.format;W=m.has(me)}if(W){const me=U.texture.type,_e=d.has(me),ge=we.getClearColor(),Te=we.getClearAlpha(),Ae=ge.r,ke=ge.g,je=ge.b;_e?(p[0]=Ae,p[1]=ke,p[2]=je,p[3]=Te,O.clearBufferuiv(O.COLOR,0,p)):(_[0]=Ae,_[1]=ke,_[2]=je,_[3]=Te,O.clearBufferiv(O.COLOR,0,_))}else X|=O.COLOR_BUFFER_BIT}B&&(X|=O.DEPTH_BUFFER_BIT),Y&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ee,!1),n.removeEventListener("webglcontextrestored",Ue,!1),n.removeEventListener("webglcontextcreationerror",pt,!1),we.dispose(),De.dispose(),re.dispose(),E.dispose(),ee.dispose(),Se.dispose(),le.dispose(),ye.dispose(),ce.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Bp),Z.removeEventListener("sessionend",Vp),Cr.stop()};function Ee(T){T.preventDefault(),Sg("WebGLRenderer: Context Lost."),N=!0}function Ue(){Sg("WebGLRenderer: Context Restored."),N=!1;const T=P.autoReset,B=Me.enabled,Y=Me.autoUpdate,X=Me.needsUpdate,W=Me.type;se(),P.autoReset=T,Me.enabled=B,Me.autoUpdate=Y,Me.needsUpdate=X,Me.type=W}function pt(T){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function at(T){const B=T.target;B.removeEventListener("dispose",at),Si(B)}function Si(T){Mi(T),E.remove(T)}function Mi(T){const B=E.get(T).programs;B!==void 0&&(B.forEach(function(Y){ce.releaseProgram(Y)}),T.isShaderMaterial&&ce.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,Y,X,W,me){B===null&&(B=dt);const _e=W.isMesh&&W.matrixWorld.determinant()<0,ge=Cy(T,B,Y,X,W);be.setMaterial(X,_e);let Te=Y.index,Ae=1;if(X.wireframe===!0){if(Te=J.getWireframeAttribute(Y),Te===void 0)return;Ae=2}const ke=Y.drawRange,je=Y.attributes.position;let Re=ke.start*Ae,ct=(ke.start+ke.count)*Ae;me!==null&&(Re=Math.max(Re,me.start*Ae),ct=Math.min(ct,(me.start+me.count)*Ae)),Te!==null?(Re=Math.max(Re,0),ct=Math.min(ct,Te.count)):je!=null&&(Re=Math.max(Re,0),ct=Math.min(ct,je.count));const Pt=ct-Re;if(Pt<0||Pt===1/0)return;le.setup(W,X,ge,Y,Te);let bt,ut=Ge;if(Te!==null&&(bt=te.get(Te),ut=k,ut.setIndex(bt)),W.isMesh)X.wireframe===!0?(be.setLineWidth(X.wireframeLinewidth*Rt()),ut.setMode(O.LINES)):ut.setMode(O.TRIANGLES);else if(W.isLine){let Zt=X.linewidth;Zt===void 0&&(Zt=1),be.setLineWidth(Zt*Rt()),W.isLineSegments?ut.setMode(O.LINES):W.isLineLoop?ut.setMode(O.LINE_LOOP):ut.setMode(O.LINE_STRIP)}else W.isPoints?ut.setMode(O.POINTS):W.isSprite&&ut.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)vc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))ut.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Zt=W._multiDrawStarts,Ce=W._multiDrawCounts,wn=W._multiDrawCount,et=Te?te.get(Te).bytesPerElement:1,jn=E.get(X).currentProgram.getUniforms();for(let si=0;si<wn;si++)jn.setValue(O,"_gl_DrawID",si),ut.render(Zt[si]/et,Ce[si])}else if(W.isInstancedMesh)ut.renderInstances(Re,Pt,W.count);else if(Y.isInstancedBufferGeometry){const Zt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ce=Math.min(Y.instanceCount,Zt);ut.renderInstances(Re,Pt,Ce)}else ut.render(Re,Pt)};function zp(T,B,Y){T.transparent===!0&&T.side===Pi&&T.forceSinglePass===!1?(T.side=En,T.needsUpdate=!0,Lo(T,B,Y),T.side=Mr,T.needsUpdate=!0,Lo(T,B,Y),T.side=Pi):Lo(T,B,Y)}this.compile=function(T,B,Y=null){Y===null&&(Y=T),C=re.get(Y),C.init(B),A.push(C),Y.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(C.pushLight(W),W.castShadow&&C.pushShadow(W))}),T!==Y&&T.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(C.pushLight(W),W.castShadow&&C.pushShadow(W))}),C.setupLights();const X=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const me=W.material;if(me)if(Array.isArray(me))for(let _e=0;_e<me.length;_e++){const ge=me[_e];zp(ge,Y,W),X.add(ge)}else zp(me,Y,W),X.add(me)}),C=A.pop(),X},this.compileAsync=function(T,B,Y=null){const X=this.compile(T,B,Y);return new Promise(W=>{function me(){if(X.forEach(function(_e){E.get(_e).currentProgram.isReady()&&X.delete(_e)}),X.size===0){W(T);return}setTimeout(me,10)}it.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let su=null;function by(T){su&&su(T)}function Bp(){Cr.stop()}function Vp(){Cr.start()}const Cr=new Fx;Cr.setAnimationLoop(by),typeof self<"u"&&Cr.setContext(self),this.setAnimationLoop=function(T){su=T,Z.setAnimationLoop(T),T===null?Cr.stop():Cr.start()},Z.addEventListener("sessionstart",Bp),Z.addEventListener("sessionend",Vp),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const Y=Z.enabled===!0&&Z.isPresenting===!0,X=x!==null&&(U===null||Y)&&x.begin(w,U);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(B),B=Z.getCamera()),T.isScene===!0&&T.onBeforeRender(w,T,B,U),C=re.get(T,A.length),C.init(B),A.push(C),Vt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ze.setFromProjectionMatrix(Vt,hi,B.reversedDepth),Oe=this.localClippingEnabled,Ne=oe.init(this.clippingPlanes,Oe),S=De.get(T,b.length),S.init(),b.push(S),Z.enabled===!0&&Z.isPresenting===!0){const _e=w.xr.getDepthSensingMesh();_e!==null&&au(_e,B,-1/0,w.sortObjects)}au(T,B,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(Ie,nt),He=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,He&&we.addToRenderList(S,T),this.info.render.frame++,Ne===!0&&oe.beginShadows();const W=C.state.shadowsArray;if(Me.render(W,T,B),Ne===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&x.hasRenderPass())===!1){const _e=S.opaque,ge=S.transmissive;if(C.setupLights(),B.isArrayCamera){const Te=B.cameras;if(ge.length>0)for(let Ae=0,ke=Te.length;Ae<ke;Ae++){const je=Te[Ae];Gp(_e,ge,T,je)}He&&we.render(T);for(let Ae=0,ke=Te.length;Ae<ke;Ae++){const je=Te[Ae];Hp(S,T,je,je.viewport)}}else ge.length>0&&Gp(_e,ge,T,B),He&&we.render(T),Hp(S,T,B)}U!==null&&D===0&&(z.updateMultisampleRenderTarget(U),z.updateRenderTargetMipmap(U)),X&&x.end(w),T.isScene===!0&&T.onAfterRender(w,T,B),le.resetDefaultState(),q=-1,H=null,A.pop(),A.length>0?(C=A[A.length-1],Ne===!0&&oe.setGlobalState(w.clippingPlanes,C.state.camera)):C=null,b.pop(),b.length>0?S=b[b.length-1]:S=null};function au(T,B,Y,X){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)C.pushLight(T),T.castShadow&&C.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ze.intersectsSprite(T)){X&&st.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Vt);const _e=Se.update(T),ge=T.material;ge.visible&&S.push(T,_e,ge,Y,st.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ze.intersectsObject(T))){const _e=Se.update(T),ge=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),st.copy(T.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),st.copy(_e.boundingSphere.center)),st.applyMatrix4(T.matrixWorld).applyMatrix4(Vt)),Array.isArray(ge)){const Te=_e.groups;for(let Ae=0,ke=Te.length;Ae<ke;Ae++){const je=Te[Ae],Re=ge[je.materialIndex];Re&&Re.visible&&S.push(T,_e,Re,Y,st.z,je)}}else ge.visible&&S.push(T,_e,ge,Y,st.z,null)}}const me=T.children;for(let _e=0,ge=me.length;_e<ge;_e++)au(me[_e],B,Y,X)}function Hp(T,B,Y,X){const{opaque:W,transmissive:me,transparent:_e}=T;C.setupLightsView(Y),Ne===!0&&oe.setGlobalState(w.clippingPlanes,Y),X&&be.viewport(j.copy(X)),W.length>0&&Po(W,B,Y),me.length>0&&Po(me,B,Y),_e.length>0&&Po(_e,B,Y),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Gp(T,B,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[X.id]===void 0){const Re=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[X.id]=new vi(1,1,{generateMipmaps:!0,type:Re?Vi:Rn,minFilter:Gr,samples:Math.max(4,ht.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const me=C.state.transmissionRenderTarget[X.id],_e=X.viewport||j;me.setSize(_e.z*w.transmissionResolutionScale,_e.w*w.transmissionResolutionScale);const ge=w.getRenderTarget(),Te=w.getActiveCubeFace(),Ae=w.getActiveMipmapLevel();w.setRenderTarget(me),w.getClearColor(V),K=w.getClearAlpha(),K<1&&w.setClearColor(16777215,.5),w.clear(),He&&we.render(Y);const ke=w.toneMapping;w.toneMapping=gi;const je=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),C.setupLightsView(X),Ne===!0&&oe.setGlobalState(w.clippingPlanes,X),Po(T,Y,X),z.updateMultisampleRenderTarget(me),z.updateRenderTargetMipmap(me),it.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ct=0,Pt=B.length;ct<Pt;ct++){const bt=B[ct],{object:ut,geometry:Zt,material:Ce,group:wn}=bt;if(Ce.side===Pi&&ut.layers.test(X.layers)){const et=Ce.side;Ce.side=En,Ce.needsUpdate=!0,jp(ut,Y,X,Zt,Ce,wn),Ce.side=et,Ce.needsUpdate=!0,Re=!0}}Re===!0&&(z.updateMultisampleRenderTarget(me),z.updateRenderTargetMipmap(me))}w.setRenderTarget(ge,Te,Ae),w.setClearColor(V,K),je!==void 0&&(X.viewport=je),w.toneMapping=ke}function Po(T,B,Y){const X=B.isScene===!0?B.overrideMaterial:null;for(let W=0,me=T.length;W<me;W++){const _e=T[W],{object:ge,geometry:Te,group:Ae}=_e;let ke=_e.material;ke.allowOverride===!0&&X!==null&&(ke=X),ge.layers.test(Y.layers)&&jp(ge,B,Y,Te,ke,Ae)}}function jp(T,B,Y,X,W,me){T.onBeforeRender(w,B,Y,X,W,me),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(w,B,Y,X,T,me),W.transparent===!0&&W.side===Pi&&W.forceSinglePass===!1?(W.side=En,W.needsUpdate=!0,w.renderBufferDirect(Y,B,X,W,T,me),W.side=Mr,W.needsUpdate=!0,w.renderBufferDirect(Y,B,X,W,T,me),W.side=Pi):w.renderBufferDirect(Y,B,X,W,T,me),T.onAfterRender(w,B,Y,X,W,me)}function Lo(T,B,Y){B.isScene!==!0&&(B=dt);const X=E.get(T),W=C.state.lights,me=C.state.shadowsArray,_e=W.state.version,ge=ce.getParameters(T,W.state,me,B,Y),Te=ce.getProgramCacheKey(ge);let Ae=X.programs;X.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,X.fog=B.fog;const ke=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;X.envMap=ee.get(T.envMap||X.environment,ke),X.envMapRotation=X.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Ae===void 0&&(T.addEventListener("dispose",at),Ae=new Map,X.programs=Ae);let je=Ae.get(Te);if(je!==void 0){if(X.currentProgram===je&&X.lightsStateVersion===_e)return Xp(T,ge),je}else ge.uniforms=ce.getUniforms(T),T.onBeforeCompile(ge,w),je=ce.acquireProgram(ge,Te),Ae.set(Te,je),X.uniforms=ge.uniforms;const Re=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Re.clippingPlanes=oe.uniform),Xp(T,ge),X.needsLights=Ry(T),X.lightsStateVersion=_e,X.needsLights&&(Re.ambientLightColor.value=W.state.ambient,Re.lightProbe.value=W.state.probe,Re.directionalLights.value=W.state.directional,Re.directionalLightShadows.value=W.state.directionalShadow,Re.spotLights.value=W.state.spot,Re.spotLightShadows.value=W.state.spotShadow,Re.rectAreaLights.value=W.state.rectArea,Re.ltc_1.value=W.state.rectAreaLTC1,Re.ltc_2.value=W.state.rectAreaLTC2,Re.pointLights.value=W.state.point,Re.pointLightShadows.value=W.state.pointShadow,Re.hemisphereLights.value=W.state.hemi,Re.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Re.spotLightMatrix.value=W.state.spotLightMatrix,Re.spotLightMap.value=W.state.spotLightMap,Re.pointShadowMatrix.value=W.state.pointShadowMatrix),X.currentProgram=je,X.uniformsList=null,je}function Wp(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Bl.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Xp(T,B){const Y=E.get(T);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function Cy(T,B,Y,X,W){B.isScene!==!0&&(B=dt),z.resetTextureUnits();const me=B.fog,_e=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?B.environment:null,ge=U===null?w.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ea,Te=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ae=ee.get(X.envMap||_e,Te),ke=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,je=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Re=!!Y.morphAttributes.position,ct=!!Y.morphAttributes.normal,Pt=!!Y.morphAttributes.color;let bt=gi;X.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(bt=w.toneMapping);const ut=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Zt=ut!==void 0?ut.length:0,Ce=E.get(X),wn=C.state.lights;if(Ne===!0&&(Oe===!0||T!==H)){const Ht=T===H&&X.id===q;oe.setState(X,T,Ht)}let et=!1;X.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==wn.state.version||Ce.outputColorSpace!==ge||W.isBatchedMesh&&Ce.batching===!1||!W.isBatchedMesh&&Ce.batching===!0||W.isBatchedMesh&&Ce.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ce.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ce.instancing===!1||!W.isInstancedMesh&&Ce.instancing===!0||W.isSkinnedMesh&&Ce.skinning===!1||!W.isSkinnedMesh&&Ce.skinning===!0||W.isInstancedMesh&&Ce.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ce.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ce.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ce.instancingMorph===!1&&W.morphTexture!==null||Ce.envMap!==Ae||X.fog===!0&&Ce.fog!==me||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==oe.numPlanes||Ce.numIntersection!==oe.numIntersection)||Ce.vertexAlphas!==ke||Ce.vertexTangents!==je||Ce.morphTargets!==Re||Ce.morphNormals!==ct||Ce.morphColors!==Pt||Ce.toneMapping!==bt||Ce.morphTargetsCount!==Zt)&&(et=!0):(et=!0,Ce.__version=X.version);let jn=Ce.currentProgram;et===!0&&(jn=Lo(X,B,W));let si=!1,Ar=!1,is=!1;const ft=jn.getUniforms(),Xt=Ce.uniforms;if(be.useProgram(jn.program)&&(si=!0,Ar=!0,is=!0),X.id!==q&&(q=X.id,Ar=!0),si||H!==T){be.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ft.setValue(O,"projectionMatrix",T.projectionMatrix),ft.setValue(O,"viewMatrix",T.matrixWorldInverse);const Xi=ft.map.cameraPosition;Xi!==void 0&&Xi.setValue(O,Ze.setFromMatrixPosition(T.matrixWorld)),ht.logarithmicDepthBuffer&&ft.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ft.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),H!==T&&(H=T,Ar=!0,is=!0)}if(Ce.needsLights&&(wn.state.directionalShadowMap.length>0&&ft.setValue(O,"directionalShadowMap",wn.state.directionalShadowMap,z),wn.state.spotShadowMap.length>0&&ft.setValue(O,"spotShadowMap",wn.state.spotShadowMap,z),wn.state.pointShadowMap.length>0&&ft.setValue(O,"pointShadowMap",wn.state.pointShadowMap,z)),W.isSkinnedMesh){ft.setOptional(O,W,"bindMatrix"),ft.setOptional(O,W,"bindMatrixInverse");const Ht=W.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),ft.setValue(O,"boneTexture",Ht.boneTexture,z))}W.isBatchedMesh&&(ft.setOptional(O,W,"batchingTexture"),ft.setValue(O,"batchingTexture",W._matricesTexture,z),ft.setOptional(O,W,"batchingIdTexture"),ft.setValue(O,"batchingIdTexture",W._indirectTexture,z),ft.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&ft.setValue(O,"batchingColorTexture",W._colorsTexture,z));const Wi=Y.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&ve.update(W,Y,jn),(Ar||Ce.receiveShadow!==W.receiveShadow)&&(Ce.receiveShadow=W.receiveShadow,ft.setValue(O,"receiveShadow",W.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&B.environment!==null&&(Xt.envMapIntensity.value=B.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=$P()),Ar&&(ft.setValue(O,"toneMappingExposure",w.toneMappingExposure),Ce.needsLights&&Ay(Xt,is),me&&X.fog===!0&&Pe.refreshFogUniforms(Xt,me),Pe.refreshMaterialUniforms(Xt,X,pe,F,C.state.transmissionRenderTarget[T.id]),Bl.upload(O,Wp(Ce),Xt,z)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Bl.upload(O,Wp(Ce),Xt,z),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ft.setValue(O,"center",W.center),ft.setValue(O,"modelViewMatrix",W.modelViewMatrix),ft.setValue(O,"normalMatrix",W.normalMatrix),ft.setValue(O,"modelMatrix",W.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ht=X.uniformsGroups;for(let Xi=0,rs=Ht.length;Xi<rs;Xi++){const $p=Ht[Xi];ye.update($p,jn),ye.bind($p,jn)}}return jn}function Ay(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Ry(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(T,B,Y){const X=E.get(T);X.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),E.get(T.texture).__webglTexture=B,E.get(T.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){const Y=E.get(T);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0};const Py=O.createFramebuffer();this.setRenderTarget=function(T,B=0,Y=0){U=T,R=B,D=Y;let X=null,W=!1,me=!1;if(T){const ge=E.get(T);if(ge.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(O.FRAMEBUFFER,ge.__webglFramebuffer),j.copy(T.viewport),L.copy(T.scissor),I=T.scissorTest,be.viewport(j),be.scissor(L),be.setScissorTest(I),q=-1;return}else if(ge.__webglFramebuffer===void 0)z.setupRenderTarget(T);else if(ge.__hasExternalTextures)z.rebindTextures(T,E.get(T.texture).__webglTexture,E.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ke=T.depthTexture;if(ge.__boundDepthTexture!==ke){if(ke!==null&&E.has(ke)&&(T.width!==ke.image.width||T.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(T)}}const Te=T.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(me=!0);const Ae=E.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ae[B])?X=Ae[B][Y]:X=Ae[B],W=!0):T.samples>0&&z.useMultisampledRTT(T)===!1?X=E.get(T).__webglMultisampledFramebuffer:Array.isArray(Ae)?X=Ae[Y]:X=Ae,j.copy(T.viewport),L.copy(T.scissor),I=T.scissorTest}else j.copy(Q).multiplyScalar(pe).floor(),L.copy(ae).multiplyScalar(pe).floor(),I=de;if(Y!==0&&(X=Py),be.bindFramebuffer(O.FRAMEBUFFER,X)&&be.drawBuffers(T,X),be.viewport(j),be.scissor(L),be.setScissorTest(I),W){const ge=E.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,ge.__webglTexture,Y)}else if(me){const ge=B;for(let Te=0;Te<T.textures.length;Te++){const Ae=E.get(T.textures[Te]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Te,Ae.__webglTexture,Y,ge)}}else if(T!==null&&Y!==0){const ge=E.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ge.__webglTexture,Y)}q=-1},this.readRenderTargetPixels=function(T,B,Y,X,W,me,_e,ge=0){if(!(T&&T.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=E.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){be.bindFramebuffer(O.FRAMEBUFFER,Te);try{const Ae=T.textures[ge],ke=Ae.format,je=Ae.type;if(T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ge),!ht.textureFormatReadable(ke)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(je)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-X&&Y>=0&&Y<=T.height-W&&O.readPixels(B,Y,X,W,ue.convert(ke),ue.convert(je),me)}finally{const Ae=U!==null?E.get(U).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(T,B,Y,X,W,me,_e,ge=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=E.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te)if(B>=0&&B<=T.width-X&&Y>=0&&Y<=T.height-W){be.bindFramebuffer(O.FRAMEBUFFER,Te);const Ae=T.textures[ge],ke=Ae.format,je=Ae.type;if(T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ge),!ht.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Re),O.bufferData(O.PIXEL_PACK_BUFFER,me.byteLength,O.STREAM_READ),O.readPixels(B,Y,X,W,ue.convert(ke),ue.convert(je),0);const ct=U!==null?E.get(U).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,ct);const Pt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await hT(O,Pt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Re),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,me),O.deleteBuffer(Re),O.deleteSync(Pt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,Y=0){const X=Math.pow(2,-Y),W=Math.floor(T.image.width*X),me=Math.floor(T.image.height*X),_e=B!==null?B.x:0,ge=B!==null?B.y:0;z.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,_e,ge,W,me),be.unbindTexture()};const Ly=O.createFramebuffer(),Ny=O.createFramebuffer();this.copyTextureToTexture=function(T,B,Y=null,X=null,W=0,me=0){let _e,ge,Te,Ae,ke,je,Re,ct,Pt;const bt=T.isCompressedTexture?T.mipmaps[me]:T.image;if(Y!==null)_e=Y.max.x-Y.min.x,ge=Y.max.y-Y.min.y,Te=Y.isBox3?Y.max.z-Y.min.z:1,Ae=Y.min.x,ke=Y.min.y,je=Y.isBox3?Y.min.z:0;else{const Xt=Math.pow(2,-W);_e=Math.floor(bt.width*Xt),ge=Math.floor(bt.height*Xt),T.isDataArrayTexture?Te=bt.depth:T.isData3DTexture?Te=Math.floor(bt.depth*Xt):Te=1,Ae=0,ke=0,je=0}X!==null?(Re=X.x,ct=X.y,Pt=X.z):(Re=0,ct=0,Pt=0);const ut=ue.convert(B.format),Zt=ue.convert(B.type);let Ce;B.isData3DTexture?(z.setTexture3D(B,0),Ce=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(z.setTexture2DArray(B,0),Ce=O.TEXTURE_2D_ARRAY):(z.setTexture2D(B,0),Ce=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);const wn=O.getParameter(O.UNPACK_ROW_LENGTH),et=O.getParameter(O.UNPACK_IMAGE_HEIGHT),jn=O.getParameter(O.UNPACK_SKIP_PIXELS),si=O.getParameter(O.UNPACK_SKIP_ROWS),Ar=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,bt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,bt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ae),O.pixelStorei(O.UNPACK_SKIP_ROWS,ke),O.pixelStorei(O.UNPACK_SKIP_IMAGES,je);const is=T.isDataArrayTexture||T.isData3DTexture,ft=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){const Xt=E.get(T),Wi=E.get(B),Ht=E.get(Xt.__renderTarget),Xi=E.get(Wi.__renderTarget);be.bindFramebuffer(O.READ_FRAMEBUFFER,Ht.__webglFramebuffer),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let rs=0;rs<Te;rs++)is&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,E.get(T).__webglTexture,W,je+rs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,E.get(B).__webglTexture,me,Pt+rs)),O.blitFramebuffer(Ae,ke,_e,ge,Re,ct,_e,ge,O.DEPTH_BUFFER_BIT,O.NEAREST);be.bindFramebuffer(O.READ_FRAMEBUFFER,null),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||E.has(T)){const Xt=E.get(T),Wi=E.get(B);be.bindFramebuffer(O.READ_FRAMEBUFFER,Ly),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ny);for(let Ht=0;Ht<Te;Ht++)is?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xt.__webglTexture,W,je+Ht):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Xt.__webglTexture,W),ft?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Wi.__webglTexture,me,Pt+Ht):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Wi.__webglTexture,me),W!==0?O.blitFramebuffer(Ae,ke,_e,ge,Re,ct,_e,ge,O.COLOR_BUFFER_BIT,O.NEAREST):ft?O.copyTexSubImage3D(Ce,me,Re,ct,Pt+Ht,Ae,ke,_e,ge):O.copyTexSubImage2D(Ce,me,Re,ct,Ae,ke,_e,ge);be.bindFramebuffer(O.READ_FRAMEBUFFER,null),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ft?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Ce,me,Re,ct,Pt,_e,ge,Te,ut,Zt,bt.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(Ce,me,Re,ct,Pt,_e,ge,Te,ut,bt.data):O.texSubImage3D(Ce,me,Re,ct,Pt,_e,ge,Te,ut,Zt,bt):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,me,Re,ct,_e,ge,ut,Zt,bt.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,me,Re,ct,bt.width,bt.height,ut,bt.data):O.texSubImage2D(O.TEXTURE_2D,me,Re,ct,_e,ge,ut,Zt,bt);O.pixelStorei(O.UNPACK_ROW_LENGTH,wn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,et),O.pixelStorei(O.UNPACK_SKIP_PIXELS,jn),O.pixelStorei(O.UNPACK_SKIP_ROWS,si),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ar),me===0&&B.generateMipmaps&&O.generateMipmap(Ce),be.unbindTexture()},this.initRenderTarget=function(T){E.get(T).__webglFramebuffer===void 0&&z.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?z.setTextureCube(T,0):T.isData3DTexture?z.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?z.setTexture2DArray(T,0):z.setTexture2D(T,0),be.unbindTexture()},this.resetState=function(){R=0,D=0,U=null,be.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}function YP(){const t=$.useRef(null);return $.useEffect(()=>{const e=t.current;if(!e)return;const n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=new RT,r=new qP({alpha:!0,antialias:!0});r.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),r.setClearColor(0,0),e.appendChild(r.domElement);const s=new An(42,1,.1,100);s.position.set(0,0,8);const a=new za;i.add(a);const o=new JT(16777215,1.2),l=new Hg(6220500,10,30,2);l.position.set(4,4,6);const c=new Hg(6333946,8,30,2);c.position.set(-5,-3,5),i.add(o,l,c);const f=new Ip(1.55,1),h=new $T({color:10479077,emissive:887691,emissiveIntensity:.35,metalness:.2,roughness:.24,transparent:!0,opacity:.82,wireframe:!0}),u=new ri(f,h);a.add(u);const g=new Op(2.4,.08,16,120),v=new Lp({color:6333946,transparent:!0,opacity:.7}),y=new ri(g,v);y.rotation.x=Math.PI/2.5,y.rotation.y=Math.PI/7,a.add(y);const m=140,d=new Float32Array(m*3);for(let N=0;N<m;N+=1){const R=N*3,D=2.8+Math.random()*2.2,U=Math.random()*Math.PI*2,q=Math.acos(2*Math.random()-1);d[R]=D*Math.sin(q)*Math.cos(U),d[R+1]=D*Math.sin(q)*Math.sin(U),d[R+2]=D*Math.cos(q)}const p=new On;p.setAttribute("position",new ni(d,3));const _=new Px({color:16777215,size:.06,transparent:!0,opacity:.9}),S=new zT(p,_);a.add(S);const C={x:0,y:0};let b=0;const A=()=>{const{clientWidth:N,clientHeight:R}=e;!N||!R||(r.setSize(N,R,!1),s.aspect=N/R,s.updateProjectionMatrix())},x=N=>{const R=e.getBoundingClientRect();C.x=(N.clientX-R.left)/R.width*2-1,C.y=-((N.clientY-R.top)/R.height*2-1)},w=()=>{b=window.requestAnimationFrame(w),n||(u.rotation.x+=.0035,u.rotation.y+=.0045,y.rotation.z+=.003,S.rotation.y-=9e-4,S.rotation.x+=6e-4),a.rotation.x+=(C.y*.28-a.rotation.x)*.04,a.rotation.y+=(C.x*.4-a.rotation.y)*.04,r.render(i,s)};return A(),w(),window.addEventListener("resize",A),e.addEventListener("pointermove",x),()=>{window.cancelAnimationFrame(b),window.removeEventListener("resize",A),e.removeEventListener("pointermove",x),e.removeChild(r.domElement),f.dispose(),h.dispose(),g.dispose(),v.dispose(),p.dispose(),_.dispose(),r.dispose()}},[]),M.jsx("div",{className:"hero-scene",ref:t,"aria-hidden":"true"})}function KP({servicesCount:t,vendorsCount:e,savedCount:n,onFindVendors:i,onBecomeVendor:r}){return M.jsxs("section",{className:"market-hero",id:"home",children:[M.jsx("div",{className:"market-hero-overlay"}),M.jsx("div",{className:"market-hero-content page",children:M.jsxs("div",{className:"market-hero-inner",children:[M.jsxs("div",{className:"hero-copy",children:[M.jsx("p",{className:"hero-kicker",children:"Service Marketplace"}),M.jsx("h1",{children:"Find Trusted Professionals for Your Home & Office Work"}),M.jsx("p",{children:"Connect with verified vendors for painting, POP work, window making, plastering, renovations, and more. Quality work, reliable service, transparent pricing."}),M.jsxs("div",{className:"hero-actions",children:[M.jsxs("button",{className:"primary-button",onClick:i,children:[M.jsx(nx,{size:18}),"Find Vendors"]}),M.jsxs("button",{className:"hero-white-button",onClick:r,children:[M.jsx(rx,{size:18}),"Become a Vendor"]})]}),M.jsxs("div",{className:"hero-stats",children:[M.jsxs("article",{children:[M.jsx("strong",{children:t}),M.jsx("span",{children:"Published Services"})]}),M.jsxs("article",{children:[M.jsx("strong",{children:e}),M.jsx("span",{children:"Active Vendors"})]}),M.jsxs("article",{children:[M.jsx("strong",{children:n}),M.jsx("span",{children:"Saved by You"})]})]})]}),M.jsxs("div",{className:"hero-visual",children:[M.jsx(YP,{}),M.jsxs("div",{className:"hero-visual-card",children:[M.jsx("span",{className:"hero-visual-label",children:"Live platform energy"}),M.jsx("strong",{children:"3D motion layer"}),M.jsx("p",{children:"Interactive Three.js background reacting to cursor movement."})]})]})]})})]})}function Ns(){return Ns=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ns.apply(this,arguments)}function ZP(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,hh(t,e)}function hh(t,e){return hh=Object.setPrototypeOf||function(i,r){return i.__proto__=r,i},hh(t,e)}var Up=function(t){ZP(e,t);function e(){var i;return i=t.call(this)||this,i.state={columns:[],childRefs:[],hasDistributed:!1},i}var n=e.prototype;return n.componentDidUpdate=function(){!this.state.hasDistributed&&!this.props.sequential&&this.distributeChildren()},e.getDerivedStateFromProps=function(r,s){var a=r.children,o=r.columnsCount,l=o!==s.columns.length;return s&&a===s.children&&!l?null:Ns({},e.getEqualCountColumns(a,o),{children:a,hasDistributed:!1})},n.shouldComponentUpdate=function(r){return r.children!==this.state.children||r.columnsCount!==this.props.columnsCount},n.distributeChildren=function(){var r=this,s=this.props,a=s.children,o=s.columnsCount,l=Array(o).fill(0),c=this.state.childRefs.every(function(u){return u.current.getBoundingClientRect().height});if(c){var f=Array.from({length:o},function(){return[]}),h=0;vn.Children.forEach(a,function(u){if(u&&vn.isValidElement(u)){var g=r.state.childRefs[h].current.getBoundingClientRect().height,v=l.indexOf(Math.min.apply(Math,l));l[v]+=g,f[v].push(u),h++}}),this.setState(function(u){return Ns({},u,{columns:f,hasDistributed:!0})})}},e.getEqualCountColumns=function(r,s){var a=Array.from({length:s},function(){return[]}),o=0,l=[];return vn.Children.forEach(r,function(c){if(c&&vn.isValidElement(c)){var f=vn.createRef();l.push(f),a[o%s].push(vn.createElement("div",{style:{display:"flex",justifyContent:"stretch"},key:o,ref:f},c)),o++}}),{columns:a,childRefs:l}},n.renderColumns=function(){var r=this.props,s=r.gutter,a=r.itemTag,o=r.itemStyle;return this.state.columns.map(function(l,c){return vn.createElement(a,{key:c,style:Ns({display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:s},o)},l.map(function(f){return f}))})},n.render=function(){var r=this.props,s=r.gutter,a=r.className,o=r.style,l=r.containerTag;return vn.createElement(l,{style:Ns({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:s},o),className:a},this.renderColumns())},e}(vn.Component);Up.propTypes={};Up.defaultProps={columnsCount:3,gutter:"0",className:null,style:{},containerTag:"div",itemTag:"div",itemStyle:{},sequential:!1};var JP=1,QP="10px",Gx=typeof window<"u"?$.useLayoutEffect:$.useEffect,e2=function(){var e=$.useState(!1),n=e[0],i=e[1];return Gx(function(){i(!0)},[]),n},t2=function(){var e=e2(),n=$.useState(typeof window<"u"?window.innerWidth:0),i=n[0],r=n[1],s=$.useCallback(function(){e&&r(window.innerWidth)},[e]);return Gx(function(){if(e)return window.addEventListener("resize",s),s(),function(){return window.removeEventListener("resize",s)}},[e,s]),i},jx=function(e){var n=e.columnsCountBreakPoints,i=n===void 0?{350:1,750:2,900:3}:n,r=e.gutterBreakPoints,s=r===void 0?{}:r,a=e.children,o=e.className,l=o===void 0?null:o,c=e.style,f=c===void 0?null:c,h=t2(),u=$.useCallback(function(y,m){var d=Object.keys(y).sort(function(_,S){return _-S}),p=d.length>0?y[d[0]]:m;return d.forEach(function(_){_<h&&(p=y[_])}),p},[h]),g=$.useMemo(function(){return u(i,JP)},[u,i]),v=$.useMemo(function(){return u(s,QP)},[u,s]);return vn.createElement("div",{className:l,style:f},vn.Children.map(a,function(y,m){return vn.cloneElement(y,{key:m,columnsCount:g,gutter:v})}))};jx.propTypes={};const n2=[{id:1,title:"Modern Living Room Paint",vendor:"John Builders",description:"Complete interior painting with premium finish",image:"https://images.unsplash.com/photo-1573546005910-cf18cae9f39c?auto=format&fit=crop&w=900&q=80",likes:156,views:1234},{id:2,title:"Luxury False Ceiling",vendor:"Elite Interiors",description:"Designer POP false ceiling with LED lighting",image:"https://images.unsplash.com/photo-1714462187247-add7ed99e5d2?auto=format&fit=crop&w=900&q=80",likes:203,views:2145},{id:3,title:"Custom Window Installation",vendor:"Modern Windows Co.",description:"Aluminum windows with modern design",image:"https://images.unsplash.com/photo-1758923530724-1ad597412421?auto=format&fit=crop&w=900&q=80",likes:189,views:1856},{id:4,title:"Wall Plastering Project",vendor:"Perfect Plaster",description:"Smooth plastering and finishing work",image:"https://images.unsplash.com/photo-1766961980272-921bba4240bc?auto=format&fit=crop&w=900&q=80",likes:142,views:1423}];function i2(){return M.jsxs("section",{className:"page section-block",id:"gallery",children:[M.jsxs("div",{className:"section-headline",children:[M.jsx("h2",{children:"Recent Vendor Works"}),M.jsx("p",{children:"Explore latest project examples published by professionals."})]}),M.jsx(jx,{columnsCountBreakPoints:{350:1,760:2,1020:3},children:M.jsx(Up,{gutter:"16px",children:n2.map(t=>M.jsxs("article",{className:"work-card",children:[M.jsxs("div",{className:"work-image-wrap",children:[M.jsx("img",{src:t.image,alt:t.title,className:"work-image"}),M.jsxs("div",{className:"work-overlay",children:[M.jsxs("span",{children:[M.jsx(B1,{size:14})," ",t.likes]}),M.jsxs("span",{children:[M.jsx(P1,{size:14})," ",t.views]})]})]}),M.jsxs("div",{className:"work-body",children:[M.jsx("h3",{children:t.title}),M.jsxs("p",{className:"work-vendor",children:["by ",t.vendor]}),M.jsx("p",{children:t.description})]})]},t.id))})})]})}var Wx={},Xx={},eu={},$x={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};t.default=e})($x);var r2="Expected a function",hv=NaN,s2="[object Symbol]",a2=/^\s+|\s+$/g,o2=/^[-+]0x[0-9a-f]+$/i,l2=/^0b[01]+$/i,c2=/^0o[0-7]+$/i,u2=parseInt,d2=typeof No=="object"&&No&&No.Object===Object&&No,f2=typeof self=="object"&&self&&self.Object===Object&&self,h2=d2||f2||Function("return this")(),p2=Object.prototype,m2=p2.toString,g2=Math.max,v2=Math.min,vd=function(){return h2.Date.now()};function _2(t,e,n){var i,r,s,a,o,l,c=0,f=!1,h=!1,u=!0;if(typeof t!="function")throw new TypeError(r2);e=pv(e)||0,ph(n)&&(f=!!n.leading,h="maxWait"in n,s=h?g2(pv(n.maxWait)||0,e):s,u="trailing"in n?!!n.trailing:u);function g(b){var A=i,x=r;return i=r=void 0,c=b,a=t.apply(x,A),a}function v(b){return c=b,o=setTimeout(d,e),f?g(b):a}function y(b){var A=b-l,x=b-c,w=e-A;return h?v2(w,s-x):w}function m(b){var A=b-l,x=b-c;return l===void 0||A>=e||A<0||h&&x>=s}function d(){var b=vd();if(m(b))return p(b);o=setTimeout(d,y(b))}function p(b){return o=void 0,u&&i?g(b):(i=r=void 0,a)}function _(){o!==void 0&&clearTimeout(o),c=0,i=l=r=o=void 0}function S(){return o===void 0?a:p(vd())}function C(){var b=vd(),A=m(b);if(i=arguments,r=this,l=b,A){if(o===void 0)return v(l);if(h)return o=setTimeout(d,e),g(l)}return o===void 0&&(o=setTimeout(d,e)),a}return C.cancel=_,C.flush=S,C}function ph(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function x2(t){return!!t&&typeof t=="object"}function y2(t){return typeof t=="symbol"||x2(t)&&m2.call(t)==s2}function pv(t){if(typeof t=="number")return t;if(y2(t))return hv;if(ph(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=ph(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(a2,"");var n=l2.test(t);return n||c2.test(t)?u2(t.slice(2),n?2:8):o2.test(t)?hv:+t}var S2=_2,qx={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",a=0;a<arguments.length;a++){var o=arguments[a];o&&(s=r(s,i(o)))}return s}function i(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var a="";for(var o in s)e.call(s,o)&&s[o]&&(a=r(a,o));return a}function r(s,a){return a?s?s+" "+a:s+a:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(qx);var tu=qx.exports,fe={},Fp={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n($);function n(r){return r&&r.__esModule?r:{default:r}}var i={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(s){return e.default.createElement("ul",{style:{display:"block"}},s)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(s){return e.default.createElement("button",null,s+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,asNavFor:null,unslick:!1};t.default=i})(Fp);Object.defineProperty(fe,"__esModule",{value:!0});fe.checkSpecKeys=fe.checkNavigable=fe.changeSlide=fe.canUseDOM=fe.canGoNext=void 0;fe.clamp=Kx;fe.extractObject=void 0;fe.filterSettings=U2;fe.validSettings=fe.swipeStart=fe.swipeMove=fe.swipeEnd=fe.slidesOnRight=fe.slidesOnLeft=fe.slideHandler=fe.siblingDirection=fe.safePreventDefault=fe.lazyStartIndex=fe.lazySlidesOnRight=fe.lazySlidesOnLeft=fe.lazyEndIndex=fe.keyHandler=fe.initializedState=fe.getWidth=fe.getTrackLeft=fe.getTrackCSS=fe.getTrackAnimateCSS=fe.getTotalSlides=fe.getSwipeDirection=fe.getSlideCount=fe.getRequiredLazySlides=fe.getPreClones=fe.getPostClones=fe.getOnDemandLazySlides=fe.getNavigableIndexes=fe.getHeight=void 0;var M2=Yx($),E2=Yx(Fp);function Yx(t){return t&&t.__esModule?t:{default:t}}function yo(t){"@babel/helpers - typeof";return yo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},yo(t)}function mv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function _t(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?mv(Object(n),!0).forEach(function(i){w2(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mv(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function w2(t,e,n){return(e=T2(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function T2(t){var e=b2(t,"string");return yo(e)=="symbol"?e:e+""}function b2(t,e){if(yo(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(yo(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Kx(t,e,n){return Math.max(e,Math.min(t,n))}var Vs=fe.safePreventDefault=function(e){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(e._reactName)||e.preventDefault()},Zx=fe.getOnDemandLazySlides=function(e){for(var n=[],i=Jx(e),r=Qx(e),s=i;s<r;s++)e.lazyLoadedList.indexOf(s)<0&&n.push(s);return n};fe.getRequiredLazySlides=function(e){for(var n=[],i=Jx(e),r=Qx(e),s=i;s<r;s++)n.push(s);return n};var Jx=fe.lazyStartIndex=function(e){return e.currentSlide-C2(e)},Qx=fe.lazyEndIndex=function(e){return e.currentSlide+A2(e)},C2=fe.lazySlidesOnLeft=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},A2=fe.lazySlidesOnRight=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},mh=fe.getWidth=function(e){return e&&e.offsetWidth||0},ey=fe.getHeight=function(e){return e&&e.offsetHeight||0},ty=fe.getSwipeDirection=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i,r,s,a;return i=e.startX-e.curX,r=e.startY-e.curY,s=Math.atan2(r,i),a=Math.round(s*180/Math.PI),a<0&&(a=360-Math.abs(a)),a<=45&&a>=0||a<=360&&a>=315?"left":a>=135&&a<=225?"right":n===!0?a>=35&&a<=135?"up":"down":"vertical"},ny=fe.canGoNext=function(e){var n=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(n=!1),n};fe.extractObject=function(e,n){var i={};return n.forEach(function(r){return i[r]=e[r]}),i};fe.initializedState=function(e){var n=M2.default.Children.count(e.children),i=e.listRef,r=Math.ceil(mh(i)),s=e.trackRef&&e.trackRef.node,a=Math.ceil(mh(s)),o;if(e.vertical)o=r;else{var l=e.centerMode&&parseInt(e.centerPadding)*2;typeof e.centerPadding=="string"&&e.centerPadding.slice(-1)==="%"&&(l*=r/100),o=Math.ceil((r-l)/e.slidesToShow)}var c=i&&ey(i.querySelector('[data-index="0"]')),f=c*e.slidesToShow,h=e.currentSlide===void 0?e.initialSlide:e.currentSlide;e.rtl&&e.currentSlide===void 0&&(h=n-1-e.initialSlide);var u=e.lazyLoadedList||[],g=Zx(_t(_t({},e),{},{currentSlide:h,lazyLoadedList:u}));u=u.concat(g);var v={slideCount:n,slideWidth:o,listWidth:r,trackWidth:a,currentSlide:h,slideHeight:c,listHeight:f,lazyLoadedList:u};return e.autoplaying===null&&e.autoplay&&(v.autoplaying="playing"),v};fe.slideHandler=function(e){var n=e.waitForAnimate,i=e.animating,r=e.fade,s=e.infinite,a=e.index,o=e.slideCount,l=e.lazyLoad,c=e.currentSlide,f=e.centerMode,h=e.slidesToScroll,u=e.slidesToShow,g=e.useCSS,v=e.lazyLoadedList;if(n&&i)return{};var y=a,m,d,p,_={},S={},C=s?a:Kx(a,0,o-1);if(r){if(!s&&(a<0||a>=o))return{};a<0?y=a+o:a>=o&&(y=a-o),l&&v.indexOf(y)<0&&(v=v.concat(y)),_={animating:!0,currentSlide:y,lazyLoadedList:v,targetSlide:y},S={animating:!1,targetSlide:y}}else m=y,y<0?(m=y+o,s?o%h!==0&&(m=o-o%h):m=0):!ny(e)&&y>c?y=m=c:f&&y>=o?(y=s?o:o-1,m=s?0:o-1):y>=o&&(m=y-o,s?o%h!==0&&(m=0):m=o-u),!s&&y+u>=o&&(m=o-u),d=xc(_t(_t({},e),{},{slideIndex:y})),p=xc(_t(_t({},e),{},{slideIndex:m})),s||(d===p&&(y=m),d=p),l&&(v=v.concat(Zx(_t(_t({},e),{},{currentSlide:y})))),g?(_={animating:!0,currentSlide:m,trackStyle:iy(_t(_t({},e),{},{left:d})),lazyLoadedList:v,targetSlide:C},S={animating:!1,currentSlide:m,trackStyle:_c(_t(_t({},e),{},{left:p})),swipeLeft:null,targetSlide:C}):_={currentSlide:m,trackStyle:_c(_t(_t({},e),{},{left:p})),lazyLoadedList:v,targetSlide:C};return{state:_,nextState:S}};fe.changeSlide=function(e,n){var i,r,s,a,o,l=e.slidesToScroll,c=e.slidesToShow,f=e.slideCount,h=e.currentSlide,u=e.targetSlide,g=e.lazyLoad,v=e.infinite;if(a=f%l!==0,i=a?0:(f-h)%l,n.message==="previous")s=i===0?l:c-i,o=h-s,g&&!v&&(r=h-s,o=r===-1?f-1:r),v||(o=u-l);else if(n.message==="next")s=i===0?l:i,o=h+s,g&&!v&&(o=(h+l)%f+i),v||(o=u+l);else if(n.message==="dots")o=n.index*n.slidesToScroll;else if(n.message==="children"){if(o=n.index,v){var y=N2(_t(_t({},e),{},{targetSlide:o}));o>n.currentSlide&&y==="left"?o=o-f:o<n.currentSlide&&y==="right"&&(o=o+f)}}else n.message==="index"&&(o=Number(n.index));return o};fe.keyHandler=function(e,n,i){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":e.keyCode===37?i?"next":"previous":e.keyCode===39?i?"previous":"next":""};fe.swipeStart=function(e,n,i){return e.target.tagName==="IMG"&&Vs(e),!n||!i&&e.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}};fe.swipeMove=function(e,n){var i=n.scrolling,r=n.animating,s=n.vertical,a=n.swipeToSlide,o=n.verticalSwiping,l=n.rtl,c=n.currentSlide,f=n.edgeFriction,h=n.edgeDragged,u=n.onEdge,g=n.swiped,v=n.swiping,y=n.slideCount,m=n.slidesToScroll,d=n.infinite,p=n.touchObject,_=n.swipeEvent,S=n.listHeight,C=n.listWidth;if(!i){if(r)return Vs(e);s&&a&&o&&Vs(e);var b,A={},x=xc(n);p.curX=e.touches?e.touches[0].pageX:e.clientX,p.curY=e.touches?e.touches[0].pageY:e.clientY,p.swipeLength=Math.round(Math.sqrt(Math.pow(p.curX-p.startX,2)));var w=Math.round(Math.sqrt(Math.pow(p.curY-p.startY,2)));if(!o&&!v&&w>10)return{scrolling:!0};o&&(p.swipeLength=w);var N=(l?-1:1)*(p.curX>p.startX?1:-1);o&&(N=p.curY>p.startY?1:-1);var R=Math.ceil(y/m),D=ty(n.touchObject,o),U=p.swipeLength;return d||(c===0&&(D==="right"||D==="down")||c+1>=R&&(D==="left"||D==="up")||!ny(n)&&(D==="left"||D==="up"))&&(U=p.swipeLength*f,h===!1&&u&&(u(D),A.edgeDragged=!0)),!g&&_&&(_(D),A.swiped=!0),s?b=x+U*(S/C)*N:l?b=x-U*N:b=x+U*N,o&&(b=x+U*N),A=_t(_t({},A),{},{touchObject:p,swipeLeft:b,trackStyle:_c(_t(_t({},n),{},{left:b}))}),Math.abs(p.curX-p.startX)<Math.abs(p.curY-p.startY)*.8||p.swipeLength>10&&(A.swiping=!0,Vs(e)),A}};fe.swipeEnd=function(e,n){var i=n.dragging,r=n.swipe,s=n.touchObject,a=n.listWidth,o=n.touchThreshold,l=n.verticalSwiping,c=n.listHeight,f=n.swipeToSlide,h=n.scrolling,u=n.onSwipe,g=n.targetSlide,v=n.currentSlide,y=n.infinite;if(!i)return r&&Vs(e),{};var m=l?c/o:a/o,d=ty(s,l),p={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(h||!s.swipeLength)return p;if(s.swipeLength>m){Vs(e),u&&u(d);var _,S,C=y?v:g;switch(d){case"left":case"up":S=C+vv(n),_=f?gv(n,S):S,p.currentDirection=0;break;case"right":case"down":S=C-vv(n),_=f?gv(n,S):S,p.currentDirection=1;break;default:_=C}p.triggerSlideHandler=_}else{var b=xc(n);p.trackStyle=iy(_t(_t({},n),{},{left:b}))}return p};var R2=fe.getNavigableIndexes=function(e){for(var n=e.infinite?e.slideCount*2:e.slideCount,i=e.infinite?e.slidesToShow*-1:0,r=e.infinite?e.slidesToShow*-1:0,s=[];i<n;)s.push(i),i=r+e.slidesToScroll,r+=Math.min(e.slidesToScroll,e.slidesToShow);return s},gv=fe.checkNavigable=function(e,n){var i=R2(e),r=0;if(n>i[i.length-1])n=i[i.length-1];else for(var s in i){if(n<i[s]){n=r;break}r=i[s]}return n},vv=fe.getSlideCount=function(e){var n=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var i,r=e.listRef,s=r.querySelectorAll&&r.querySelectorAll(".slick-slide")||[];if(Array.from(s).every(function(l){if(e.vertical){if(l.offsetTop+ey(l)/2>e.swipeLeft*-1)return i=l,!1}else if(l.offsetLeft-n+mh(l)/2>e.swipeLeft*-1)return i=l,!1;return!0}),!i)return 0;var a=e.rtl===!0?e.slideCount-e.currentSlide:e.currentSlide,o=Math.abs(i.dataset.index-a)||1;return o}else return e.slidesToScroll},kp=fe.checkSpecKeys=function(e,n){return n.reduce(function(i,r){return i&&e.hasOwnProperty(r)},!0)?null:console.error("Keys Missing:",e)},_c=fe.getTrackCSS=function(e){kp(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,i;if(!e.vertical)n=L2(e)*e.slideWidth;else{var r=e.unslick?e.slideCount:e.slideCount+2*e.slidesToShow;i=r*e.slideHeight}var s={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",o=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",l=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";s=_t(_t({},s),{},{WebkitTransform:a,transform:o,msTransform:l})}else e.vertical?s.top=e.left:s.left=e.left;return e.fade&&(s={opacity:1}),n&&(s.width=n),i&&(s.height=i),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?s.marginTop=e.left+"px":s.marginLeft=e.left+"px"),s},iy=fe.getTrackAnimateCSS=function(e){kp(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=_c(e);return e.useTransform?(n.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,n.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?n.transition="top "+e.speed+"ms "+e.cssEase:n.transition="left "+e.speed+"ms "+e.cssEase,n},xc=fe.getTrackLeft=function(e){if(e.unslick)return 0;kp(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=e.slideIndex,i=e.trackRef,r=e.infinite,s=e.centerMode,a=e.slideCount,o=e.slidesToShow,l=e.slidesToScroll,c=e.slideWidth,f=e.listWidth,h=e.variableWidth,u=e.slideHeight,g=e.fade,v=e.vertical,y=0,m,d,p=0;if(g||e.slideCount===1)return 0;var _=0;if(r?(_=-Vl(e),a%l!==0&&n+l>a&&(_=-(n>a?o-(n-a):a%l)),s&&(_+=parseInt(o/2))):(a%l!==0&&n+l>a&&(_=o-a%l),s&&(_=parseInt(o/2))),y=_*c,p=_*u,v?m=n*u*-1+p:m=n*c*-1+y,h===!0){var S,C=i&&i.node;if(S=n+Vl(e),d=C&&C.childNodes[S],m=d?d.offsetLeft*-1:0,s===!0){S=r?n+Vl(e):n,d=C&&C.children[S],m=0;for(var b=0;b<S;b++)m-=C&&C.children[b]&&C.children[b].offsetWidth;m-=parseInt(e.centerPadding),m+=d&&(f-d.offsetWidth)/2}}return m},Vl=fe.getPreClones=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},P2=fe.getPostClones=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},L2=fe.getTotalSlides=function(e){return e.slideCount===1?1:Vl(e)+e.slideCount+P2(e)},N2=fe.siblingDirection=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+D2(e)?"left":"right":e.targetSlide<e.currentSlide-I2(e)?"right":"left"},D2=fe.slidesOnRight=function(e){var n=e.slidesToShow,i=e.centerMode,r=e.rtl,s=e.centerPadding;if(i){var a=(n-1)/2+1;return parseInt(s)>0&&(a+=1),r&&n%2===0&&(a+=1),a}return r?0:n-1},I2=fe.slidesOnLeft=function(e){var n=e.slidesToShow,i=e.centerMode,r=e.rtl,s=e.centerPadding;if(i){var a=(n-1)/2+1;return parseInt(s)>0&&(a+=1),!r&&n%2===0&&(a+=1),a}return r?n-1:0};fe.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var O2=fe.validSettings=Object.keys(E2.default);function U2(t){return O2.reduce(function(e,n){return t.hasOwnProperty(n)&&(e[n]=t[n]),e},{})}var nu={};Object.defineProperty(nu,"__esModule",{value:!0});nu.Track=void 0;var nr=ry($),_d=ry(tu),yl=fe;function ry(t){return t&&t.__esModule?t:{default:t}}function na(t){"@babel/helpers - typeof";return na=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},na(t)}function gh(){return gh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},gh.apply(null,arguments)}function F2(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function k2(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,ay(i.key),i)}}function z2(t,e,n){return e&&k2(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function B2(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&vh(t,e)}function vh(t,e){return vh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},vh(t,e)}function V2(t){var e=sy();return function(){var n,i=yc(t);if(e){var r=yc(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return H2(this,n)}}function H2(t,e){if(e&&(na(e)=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _h(t)}function _h(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function sy(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(sy=function(){return!!t})()}function yc(t){return yc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},yc(t)}function _v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function gn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_v(Object(n),!0).forEach(function(i){xh(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_v(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function xh(t,e,n){return(e=ay(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ay(t){var e=G2(t,"string");return na(e)=="symbol"?e:e+""}function G2(t,e){if(na(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(na(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var xd=function(e){var n,i,r,s,a;e.rtl?a=e.slideCount-1-e.index:a=e.index,r=a<0||a>=e.slideCount,e.centerMode?(s=Math.floor(e.slidesToShow/2),i=(a-e.currentSlide)%e.slideCount===0,a>e.currentSlide-s-1&&a<=e.currentSlide+s&&(n=!0)):n=e.currentSlide<=a&&a<e.currentSlide+e.slidesToShow;var o;e.targetSlide<0?o=e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?o=e.targetSlide-e.slideCount:o=e.targetSlide;var l=a===o;return{"slick-slide":!0,"slick-active":n,"slick-center":i,"slick-cloned":r,"slick-current":l}},j2=function(e){var n={};return(e.variableWidth===void 0||e.variableWidth===!1)&&(n.width=e.slideWidth),e.fade&&(n.position="relative",e.vertical?n.top=-e.index*parseInt(e.slideHeight):n.left=-e.index*parseInt(e.slideWidth),n.opacity=e.currentSlide===e.index?1:0,n.zIndex=e.currentSlide===e.index?999:998,e.useCSS&&(n.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),n},yd=function(e,n){return e.key||n},W2=function(e){var n,i=[],r=[],s=[],a=nr.default.Children.count(e.children),o=(0,yl.lazyStartIndex)(e),l=(0,yl.lazyEndIndex)(e);return nr.default.Children.forEach(e.children,function(c,f){var h,u={message:"children",index:f,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(f)>=0?h=c:h=nr.default.createElement("div",null);var g=j2(gn(gn({},e),{},{index:f})),v=h.props.className||"",y=xd(gn(gn({},e),{},{index:f}));if(i.push(nr.default.cloneElement(h,{key:"original"+yd(h,f),"data-index":f,className:(0,_d.default)(y,v),tabIndex:"-1","aria-hidden":!y["slick-active"],style:gn(gn({outline:"none"},h.props.style||{}),g),onClick:function(p){h.props&&h.props.onClick&&h.props.onClick(p),e.focusOnSelect&&e.focusOnSelect(u)}})),e.infinite&&a>1&&e.fade===!1&&!e.unslick){var m=a-f;m<=(0,yl.getPreClones)(e)&&(n=-m,n>=o&&(h=c),y=xd(gn(gn({},e),{},{index:n})),r.push(nr.default.cloneElement(h,{key:"precloned"+yd(h,n),"data-index":n,tabIndex:"-1",className:(0,_d.default)(y,v),"aria-hidden":!y["slick-active"],style:gn(gn({},h.props.style||{}),g),onClick:function(p){h.props&&h.props.onClick&&h.props.onClick(p),e.focusOnSelect&&e.focusOnSelect(u)}}))),f<(0,yl.getPostClones)(e)&&(n=a+f,n<l&&(h=c),y=xd(gn(gn({},e),{},{index:n})),s.push(nr.default.cloneElement(h,{key:"postcloned"+yd(h,n),"data-index":n,tabIndex:"-1",className:(0,_d.default)(y,v),"aria-hidden":!y["slick-active"],style:gn(gn({},h.props.style||{}),g),onClick:function(p){h.props&&h.props.onClick&&h.props.onClick(p),e.focusOnSelect&&e.focusOnSelect(u)}})))}}),e.rtl?r.concat(i,s).reverse():r.concat(i,s)};nu.Track=function(t){B2(n,t);var e=V2(n);function n(){var i;F2(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return i=e.call.apply(e,[this].concat(s)),xh(_h(i),"node",null),xh(_h(i),"handleRef",function(o){i.node=o}),i}return z2(n,[{key:"render",value:function(){var r=W2(this.props),s=this.props,a=s.onMouseEnter,o=s.onMouseOver,l=s.onMouseLeave,c={onMouseEnter:a,onMouseOver:o,onMouseLeave:l};return nr.default.createElement("div",gh({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},c),r)}}]),n}(nr.default.PureComponent);var iu={};function ia(t){"@babel/helpers - typeof";return ia=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ia(t)}Object.defineProperty(iu,"__esModule",{value:!0});iu.Dots=void 0;var Sl=oy($),X2=oy(tu),xv=fe;function oy(t){return t&&t.__esModule?t:{default:t}}function yv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function $2(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?yv(Object(n),!0).forEach(function(i){q2(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):yv(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function q2(t,e,n){return(e=ly(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Y2(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function K2(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,ly(i.key),i)}}function Z2(t,e,n){return e&&K2(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function ly(t){var e=J2(t,"string");return ia(e)=="symbol"?e:e+""}function J2(t,e){if(ia(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(ia(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function Q2(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&yh(t,e)}function yh(t,e){return yh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},yh(t,e)}function e3(t){var e=cy();return function(){var n,i=Sc(t);if(e){var r=Sc(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return t3(this,n)}}function t3(t,e){if(e&&(ia(e)=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return n3(t)}function n3(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function cy(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(cy=function(){return!!t})()}function Sc(t){return Sc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Sc(t)}var i3=function(e){var n;return e.infinite?n=Math.ceil(e.slideCount/e.slidesToScroll):n=Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,n};iu.Dots=function(t){Q2(n,t);var e=e3(n);function n(){return Y2(this,n),e.apply(this,arguments)}return Z2(n,[{key:"clickHandler",value:function(r,s){s.preventDefault(),this.props.clickHandler(r)}},{key:"render",value:function(){for(var r=this.props,s=r.onMouseEnter,a=r.onMouseOver,o=r.onMouseLeave,l=r.infinite,c=r.slidesToScroll,f=r.slidesToShow,h=r.slideCount,u=r.currentSlide,g=i3({slideCount:h,slidesToScroll:c,slidesToShow:f,infinite:l}),v={onMouseEnter:s,onMouseOver:a,onMouseLeave:o},y=[],m=0;m<g;m++){var d=(m+1)*c-1,p=l?d:(0,xv.clamp)(d,0,h-1),_=p-(c-1),S=l?_:(0,xv.clamp)(_,0,h-1),C=(0,X2.default)({"slick-active":l?u>=S&&u<=p:u===S}),b={message:"dots",index:m,slidesToScroll:c,currentSlide:u},A=this.clickHandler.bind(this,b);y=y.concat(Sl.default.createElement("li",{key:m,className:C},Sl.default.cloneElement(this.props.customPaging(m),{onClick:A})))}return Sl.default.cloneElement(this.props.appendDots(y),$2({className:this.props.dotsClass},v))}}]),n}(Sl.default.PureComponent);var ra={};function sa(t){"@babel/helpers - typeof";return sa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},sa(t)}Object.defineProperty(ra,"__esModule",{value:!0});ra.PrevArrow=ra.NextArrow=void 0;var Hs=dy($),uy=dy(tu),r3=fe;function dy(t){return t&&t.__esModule?t:{default:t}}function Mc(){return Mc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Mc.apply(null,arguments)}function Sv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Ec(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Sv(Object(n),!0).forEach(function(i){s3(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Sv(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function s3(t,e,n){return(e=py(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function fy(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a3(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,py(i.key),i)}}function hy(t,e,n){return e&&a3(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function py(t){var e=o3(t,"string");return sa(e)=="symbol"?e:e+""}function o3(t,e){if(sa(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(sa(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function my(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Sh(t,e)}function Sh(t,e){return Sh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Sh(t,e)}function gy(t){var e=vy();return function(){var n,i=wc(t);if(e){var r=wc(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return l3(this,n)}}function l3(t,e){if(e&&(sa(e)=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return c3(t)}function c3(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function vy(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(vy=function(){return!!t})()}function wc(t){return wc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},wc(t)}ra.PrevArrow=function(t){my(n,t);var e=gy(n);function n(){return fy(this,n),e.apply(this,arguments)}return hy(n,[{key:"clickHandler",value:function(r,s){s&&s.preventDefault(),this.props.clickHandler(r,s)}},{key:"render",value:function(){var r={"slick-arrow":!0,"slick-prev":!0},s=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(r["slick-disabled"]=!0,s=null);var a={key:"0","data-role":"none",className:(0,uy.default)(r),style:{display:"block"},onClick:s},o={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.prevArrow?l=Hs.default.cloneElement(this.props.prevArrow,Ec(Ec({},a),o)):l=Hs.default.createElement("button",Mc({key:"0",type:"button"},a)," ","Previous"),l}}]),n}(Hs.default.PureComponent);ra.NextArrow=function(t){my(n,t);var e=gy(n);function n(){return fy(this,n),e.apply(this,arguments)}return hy(n,[{key:"clickHandler",value:function(r,s){s&&s.preventDefault(),this.props.clickHandler(r,s)}},{key:"render",value:function(){var r={"slick-arrow":!0,"slick-next":!0},s=this.clickHandler.bind(this,{message:"next"});(0,r3.canGoNext)(this.props)||(r["slick-disabled"]=!0,s=null);var a={key:"1","data-role":"none",className:(0,uy.default)(r),style:{display:"block"},onClick:s},o={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.nextArrow?l=Hs.default.cloneElement(this.props.nextArrow,Ec(Ec({},a),o)):l=Hs.default.createElement("button",Mc({key:"1",type:"button"},a)," ","Next"),l}}]),n}(Hs.default.PureComponent);var _y=function(){if(typeof Map<"u")return Map;function t(e,n){var i=-1;return e.some(function(r,s){return r[0]===n?(i=s,!0):!1}),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(n){var i=t(this.__entries__,n),r=this.__entries__[i];return r&&r[1]},e.prototype.set=function(n,i){var r=t(this.__entries__,n);~r?this.__entries__[r][1]=i:this.__entries__.push([n,i])},e.prototype.delete=function(n){var i=this.__entries__,r=t(i,n);~r&&i.splice(r,1)},e.prototype.has=function(n){return!!~t(this.__entries__,n)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(n,i){i===void 0&&(i=null);for(var r=0,s=this.__entries__;r<s.length;r++){var a=s[r];n.call(i,a[1],a[0])}},e}()}(),Mh=typeof window<"u"&&typeof document<"u"&&window.document===document,Tc=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),u3=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Tc):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),d3=2;function f3(t,e){var n=!1,i=!1,r=0;function s(){n&&(n=!1,t()),i&&o()}function a(){u3(s)}function o(){var l=Date.now();if(n){if(l-r<d3)return;i=!0}else n=!0,i=!1,setTimeout(a,e);r=l}return o}var h3=20,p3=["top","right","bottom","left","width","height","size","weight"],m3=typeof MutationObserver<"u",g3=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=f3(this.refresh.bind(this),h3)}return t.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},t.prototype.removeObserver=function(e){var n=this.observers_,i=n.indexOf(e);~i&&n.splice(i,1),!n.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},t.prototype.updateObservers_=function(){var e=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return e.forEach(function(n){return n.broadcastActive()}),e.length>0},t.prototype.connect_=function(){!Mh||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),m3?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!Mh||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(e){var n=e.propertyName,i=n===void 0?"":n,r=p3.some(function(s){return!!~i.indexOf(s)});r&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),xy=function(t,e){for(var n=0,i=Object.keys(e);n<i.length;n++){var r=i[n];Object.defineProperty(t,r,{value:e[r],enumerable:!1,writable:!1,configurable:!0})}return t},aa=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||Tc},yy=ru(0,0,0,0);function bc(t){return parseFloat(t)||0}function Mv(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(i,r){var s=t["border-"+r+"-width"];return i+bc(s)},0)}function v3(t){for(var e=["top","right","bottom","left"],n={},i=0,r=e;i<r.length;i++){var s=r[i],a=t["padding-"+s];n[s]=bc(a)}return n}function _3(t){var e=t.getBBox();return ru(0,0,e.width,e.height)}function x3(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return yy;var i=aa(t).getComputedStyle(t),r=v3(i),s=r.left+r.right,a=r.top+r.bottom,o=bc(i.width),l=bc(i.height);if(i.boxSizing==="border-box"&&(Math.round(o+s)!==e&&(o-=Mv(i,"left","right")+s),Math.round(l+a)!==n&&(l-=Mv(i,"top","bottom")+a)),!S3(t)){var c=Math.round(o+s)-e,f=Math.round(l+a)-n;Math.abs(c)!==1&&(o-=c),Math.abs(f)!==1&&(l-=f)}return ru(r.left,r.top,o,l)}var y3=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof aa(t).SVGGraphicsElement}:function(t){return t instanceof aa(t).SVGElement&&typeof t.getBBox=="function"}}();function S3(t){return t===aa(t).document.documentElement}function M3(t){return Mh?y3(t)?_3(t):x3(t):yy}function E3(t){var e=t.x,n=t.y,i=t.width,r=t.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,a=Object.create(s.prototype);return xy(a,{x:e,y:n,width:i,height:r,top:n,right:e+i,bottom:r+n,left:e}),a}function ru(t,e,n,i){return{x:t,y:e,width:n,height:i}}var w3=function(){function t(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=ru(0,0,0,0),this.target=e}return t.prototype.isActive=function(){var e=M3(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},t}(),T3=function(){function t(e,n){var i=E3(n);xy(this,{target:e,contentRect:i})}return t}(),b3=function(){function t(e,n,i){if(this.activeObservations_=[],this.observations_=new _y,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=i}return t.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof aa(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new w3(e)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof aa(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)&&(n.delete(e),n.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&e.activeObservations_.push(n)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,n=this.activeObservations_.map(function(i){return new T3(i.target,i.broadcastRect())});this.callback_.call(e,n,e),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),Sy=typeof WeakMap<"u"?new WeakMap:new _y,My=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=g3.getInstance(),i=new b3(e,n,this);Sy.set(this,i)}return t}();["observe","unobserve","disconnect"].forEach(function(t){My.prototype[t]=function(){var e;return(e=Sy.get(this))[t].apply(e,arguments)}});var C3=function(){return typeof Tc.ResizeObserver<"u"?Tc.ResizeObserver:My}();const A3=Object.freeze(Object.defineProperty({__proto__:null,default:C3},Symbol.toStringTag,{value:"Module"})),R3=Iy(A3);Object.defineProperty(eu,"__esModule",{value:!0});eu.InnerSlider=void 0;var an=Ro($),P3=Ro($x),L3=Ro(S2),N3=Ro(tu),yt=fe,D3=nu,I3=iu,Ev=ra,O3=Ro(R3);function Ro(t){return t&&t.__esModule?t:{default:t}}function Qr(t){"@babel/helpers - typeof";return Qr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qr(t)}function Cc(){return Cc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Cc.apply(null,arguments)}function U3(t,e){if(t==null)return{};var n,i,r=F3(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],e.includes(n)||{}.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function F3(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.includes(i))continue;n[i]=t[i]}return n}function wv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Le(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?wv(Object(n),!0).forEach(function(i){Xe(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):wv(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function k3(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function z3(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,wy(i.key),i)}}function B3(t,e,n){return e&&z3(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function V3(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Eh(t,e)}function Eh(t,e){return Eh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Eh(t,e)}function H3(t){var e=Ey();return function(){var n,i=Ac(t);if(e){var r=Ac(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return G3(this,n)}}function G3(t,e){if(e&&(Qr(e)=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return We(t)}function We(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ey(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Ey=function(){return!!t})()}function Ac(t){return Ac=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Ac(t)}function Xe(t,e,n){return(e=wy(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function wy(t){var e=j3(t,"string");return Qr(e)=="symbol"?e:e+""}function j3(t,e){if(Qr(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(Qr(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}eu.InnerSlider=function(t){V3(n,t);var e=H3(n);function n(i){var r;k3(this,n),r=e.call(this,i),Xe(We(r),"listRefHandler",function(a){return r.list=a}),Xe(We(r),"trackRefHandler",function(a){return r.track=a}),Xe(We(r),"adaptHeight",function(){if(r.props.adaptiveHeight&&r.list){var a=r.list.querySelector('[data-index="'.concat(r.state.currentSlide,'"]'));r.list.style.height=(0,yt.getHeight)(a)+"px"}}),Xe(We(r),"componentDidMount",function(){if(r.props.onInit&&r.props.onInit(),r.props.lazyLoad){var a=(0,yt.getOnDemandLazySlides)(Le(Le({},r.props),r.state));a.length>0&&(r.setState(function(l){return{lazyLoadedList:l.lazyLoadedList.concat(a)}}),r.props.onLazyLoad&&r.props.onLazyLoad(a))}var o=Le({listRef:r.list,trackRef:r.track},r.props);r.updateState(o,!0,function(){r.adaptHeight(),r.props.autoplay&&r.autoPlay("update")}),r.props.lazyLoad==="progressive"&&(r.lazyLoadTimer=setInterval(r.progressiveLazyLoad,1e3)),r.ro=new O3.default(function(){r.state.animating?(r.onWindowResized(!1),r.callbackTimers.push(setTimeout(function(){return r.onWindowResized()},r.props.speed))):r.onWindowResized()}),r.ro.observe(r.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(l){l.onfocus=r.props.pauseOnFocus?r.onSlideFocus:null,l.onblur=r.props.pauseOnFocus?r.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",r.onWindowResized):window.attachEvent("onresize",r.onWindowResized)}),Xe(We(r),"componentWillUnmount",function(){r.animationEndCallback&&clearTimeout(r.animationEndCallback),r.lazyLoadTimer&&clearInterval(r.lazyLoadTimer),r.callbackTimers.length&&(r.callbackTimers.forEach(function(a){return clearTimeout(a)}),r.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",r.onWindowResized):window.detachEvent("onresize",r.onWindowResized),r.autoplayTimer&&clearInterval(r.autoplayTimer),r.ro.disconnect()}),Xe(We(r),"componentDidUpdate",function(a){if(r.checkImagesLoad(),r.props.onReInit&&r.props.onReInit(),r.props.lazyLoad){var o=(0,yt.getOnDemandLazySlides)(Le(Le({},r.props),r.state));o.length>0&&(r.setState(function(f){return{lazyLoadedList:f.lazyLoadedList.concat(o)}}),r.props.onLazyLoad&&r.props.onLazyLoad(o))}r.adaptHeight();var l=Le(Le({listRef:r.list,trackRef:r.track},r.props),r.state),c=r.didPropsChange(a);c&&r.updateState(l,c,function(){r.state.currentSlide>=an.default.Children.count(r.props.children)&&r.changeSlide({message:"index",index:an.default.Children.count(r.props.children)-r.props.slidesToShow,currentSlide:r.state.currentSlide}),r.props.autoplay?r.autoPlay("update"):r.pause("paused")})}),Xe(We(r),"onWindowResized",function(a){r.debouncedResize&&r.debouncedResize.cancel(),r.debouncedResize=(0,L3.default)(function(){return r.resizeWindow(a)},50),r.debouncedResize()}),Xe(We(r),"resizeWindow",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,o=!!(r.track&&r.track.node);if(o){var l=Le(Le({listRef:r.list,trackRef:r.track},r.props),r.state);r.updateState(l,a,function(){r.props.autoplay?r.autoPlay("update"):r.pause("paused")}),r.setState({animating:!1}),clearTimeout(r.animationEndCallback),delete r.animationEndCallback}}),Xe(We(r),"updateState",function(a,o,l){var c=(0,yt.initializedState)(a);a=Le(Le(Le({},a),c),{},{slideIndex:c.currentSlide});var f=(0,yt.getTrackLeft)(a);a=Le(Le({},a),{},{left:f});var h=(0,yt.getTrackCSS)(a);(o||an.default.Children.count(r.props.children)!==an.default.Children.count(a.children))&&(c.trackStyle=h),r.setState(c,l)}),Xe(We(r),"ssrInit",function(){if(r.props.variableWidth){var a=0,o=0,l=[],c=(0,yt.getPreClones)(Le(Le(Le({},r.props),r.state),{},{slideCount:r.props.children.length})),f=(0,yt.getPostClones)(Le(Le(Le({},r.props),r.state),{},{slideCount:r.props.children.length}));r.props.children.forEach(function(A){l.push(A.props.style.width),a+=A.props.style.width});for(var h=0;h<c;h++)o+=l[l.length-1-h],a+=l[l.length-1-h];for(var u=0;u<f;u++)a+=l[u];for(var g=0;g<r.state.currentSlide;g++)o+=l[g];var v={width:a+"px",left:-o+"px"};if(r.props.centerMode){var y="".concat(l[r.state.currentSlide],"px");v.left="calc(".concat(v.left," + (100% - ").concat(y,") / 2 ) ")}return{trackStyle:v}}var m=an.default.Children.count(r.props.children),d=Le(Le(Le({},r.props),r.state),{},{slideCount:m}),p=(0,yt.getPreClones)(d)+(0,yt.getPostClones)(d)+m,_=100/r.props.slidesToShow*p,S=100/p,C=-S*((0,yt.getPreClones)(d)+r.state.currentSlide)*_/100;r.props.centerMode&&(C+=(100-S*_/100)/2);var b={width:_+"%",left:C+"%"};return{slideWidth:S+"%",trackStyle:b}}),Xe(We(r),"checkImagesLoad",function(){var a=r.list&&r.list.querySelectorAll&&r.list.querySelectorAll(".slick-slide img")||[],o=a.length,l=0;Array.prototype.forEach.call(a,function(c){var f=function(){return++l&&l>=o&&r.onWindowResized()};if(!c.onclick)c.onclick=function(){return c.parentNode.focus()};else{var h=c.onclick;c.onclick=function(u){h(u),c.parentNode.focus()}}c.onload||(r.props.lazyLoad?c.onload=function(){r.adaptHeight(),r.callbackTimers.push(setTimeout(r.onWindowResized,r.props.speed))}:(c.onload=f,c.onerror=function(){f(),r.props.onLazyLoadError&&r.props.onLazyLoadError()}))})}),Xe(We(r),"progressiveLazyLoad",function(){for(var a=[],o=Le(Le({},r.props),r.state),l=r.state.currentSlide;l<r.state.slideCount+(0,yt.getPostClones)(o);l++)if(r.state.lazyLoadedList.indexOf(l)<0){a.push(l);break}for(var c=r.state.currentSlide-1;c>=-(0,yt.getPreClones)(o);c--)if(r.state.lazyLoadedList.indexOf(c)<0){a.push(c);break}a.length>0?(r.setState(function(f){return{lazyLoadedList:f.lazyLoadedList.concat(a)}}),r.props.onLazyLoad&&r.props.onLazyLoad(a)):r.lazyLoadTimer&&(clearInterval(r.lazyLoadTimer),delete r.lazyLoadTimer)}),Xe(We(r),"slideHandler",function(a){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=r.props,c=l.asNavFor,f=l.beforeChange,h=l.onLazyLoad,u=l.speed,g=l.afterChange,v=r.state.currentSlide,y=(0,yt.slideHandler)(Le(Le(Le({index:a},r.props),r.state),{},{trackRef:r.track,useCSS:r.props.useCSS&&!o})),m=y.state,d=y.nextState;if(m){f&&f(v,m.currentSlide);var p=m.lazyLoadedList.filter(function(_){return r.state.lazyLoadedList.indexOf(_)<0});h&&p.length>0&&h(p),!r.props.waitForAnimate&&r.animationEndCallback&&(clearTimeout(r.animationEndCallback),g&&g(v),delete r.animationEndCallback),r.setState(m,function(){c&&r.asNavForIndex!==a&&(r.asNavForIndex=a,c.innerSlider.slideHandler(a)),d&&(r.animationEndCallback=setTimeout(function(){var _=d.animating,S=U3(d,["animating"]);r.setState(S,function(){r.callbackTimers.push(setTimeout(function(){return r.setState({animating:_})},10)),g&&g(m.currentSlide),delete r.animationEndCallback})},u))})}}),Xe(We(r),"changeSlide",function(a){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=Le(Le({},r.props),r.state),c=(0,yt.changeSlide)(l,a);if(!(c!==0&&!c)&&(o===!0?r.slideHandler(c,o):r.slideHandler(c),r.props.autoplay&&r.autoPlay("update"),r.props.focusOnSelect)){var f=r.list.querySelectorAll(".slick-current");f[0]&&f[0].focus()}}),Xe(We(r),"clickHandler",function(a){r.clickable===!1&&(a.stopPropagation(),a.preventDefault()),r.clickable=!0}),Xe(We(r),"keyHandler",function(a){var o=(0,yt.keyHandler)(a,r.props.accessibility,r.props.rtl);o!==""&&r.changeSlide({message:o})}),Xe(We(r),"selectHandler",function(a){r.changeSlide(a)}),Xe(We(r),"disableBodyScroll",function(){var a=function(l){l=l||window.event,l.preventDefault&&l.preventDefault(),l.returnValue=!1};window.ontouchmove=a}),Xe(We(r),"enableBodyScroll",function(){window.ontouchmove=null}),Xe(We(r),"swipeStart",function(a){r.props.verticalSwiping&&r.disableBodyScroll();var o=(0,yt.swipeStart)(a,r.props.swipe,r.props.draggable);o!==""&&r.setState(o)}),Xe(We(r),"swipeMove",function(a){var o=(0,yt.swipeMove)(a,Le(Le(Le({},r.props),r.state),{},{trackRef:r.track,listRef:r.list,slideIndex:r.state.currentSlide}));o&&(o.swiping&&(r.clickable=!1),r.setState(o))}),Xe(We(r),"swipeEnd",function(a){var o=(0,yt.swipeEnd)(a,Le(Le(Le({},r.props),r.state),{},{trackRef:r.track,listRef:r.list,slideIndex:r.state.currentSlide}));if(o){var l=o.triggerSlideHandler;delete o.triggerSlideHandler,r.setState(o),l!==void 0&&(r.slideHandler(l),r.props.verticalSwiping&&r.enableBodyScroll())}}),Xe(We(r),"touchEnd",function(a){r.swipeEnd(a),r.clickable=!0}),Xe(We(r),"slickPrev",function(){r.callbackTimers.push(setTimeout(function(){return r.changeSlide({message:"previous"})},0))}),Xe(We(r),"slickNext",function(){r.callbackTimers.push(setTimeout(function(){return r.changeSlide({message:"next"})},0))}),Xe(We(r),"slickGoTo",function(a){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(a=Number(a),isNaN(a))return"";r.callbackTimers.push(setTimeout(function(){return r.changeSlide({message:"index",index:a,currentSlide:r.state.currentSlide},o)},0))}),Xe(We(r),"play",function(){var a;if(r.props.rtl)a=r.state.currentSlide-r.props.slidesToScroll;else if((0,yt.canGoNext)(Le(Le({},r.props),r.state)))a=r.state.currentSlide+r.props.slidesToScroll;else return!1;r.slideHandler(a)}),Xe(We(r),"autoPlay",function(a){r.autoplayTimer&&clearInterval(r.autoplayTimer);var o=r.state.autoplaying;if(a==="update"){if(o==="hovered"||o==="focused"||o==="paused")return}else if(a==="leave"){if(o==="paused"||o==="focused")return}else if(a==="blur"&&(o==="paused"||o==="hovered"))return;r.autoplayTimer=setInterval(r.play,r.props.autoplaySpeed+50),r.setState({autoplaying:"playing"})}),Xe(We(r),"pause",function(a){r.autoplayTimer&&(clearInterval(r.autoplayTimer),r.autoplayTimer=null);var o=r.state.autoplaying;a==="paused"?r.setState({autoplaying:"paused"}):a==="focused"?(o==="hovered"||o==="playing")&&r.setState({autoplaying:"focused"}):o==="playing"&&r.setState({autoplaying:"hovered"})}),Xe(We(r),"onDotsOver",function(){return r.props.autoplay&&r.pause("hovered")}),Xe(We(r),"onDotsLeave",function(){return r.props.autoplay&&r.state.autoplaying==="hovered"&&r.autoPlay("leave")}),Xe(We(r),"onTrackOver",function(){return r.props.autoplay&&r.pause("hovered")}),Xe(We(r),"onTrackLeave",function(){return r.props.autoplay&&r.state.autoplaying==="hovered"&&r.autoPlay("leave")}),Xe(We(r),"onSlideFocus",function(){return r.props.autoplay&&r.pause("focused")}),Xe(We(r),"onSlideBlur",function(){return r.props.autoplay&&r.state.autoplaying==="focused"&&r.autoPlay("blur")}),Xe(We(r),"render",function(){var a=(0,N3.default)("slick-slider",r.props.className,{"slick-vertical":r.props.vertical,"slick-initialized":!0}),o=Le(Le({},r.props),r.state),l=(0,yt.extractObject)(o,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),c=r.props.pauseOnHover;l=Le(Le({},l),{},{onMouseEnter:c?r.onTrackOver:null,onMouseLeave:c?r.onTrackLeave:null,onMouseOver:c?r.onTrackOver:null,focusOnSelect:r.props.focusOnSelect&&r.clickable?r.selectHandler:null});var f;if(r.props.dots===!0&&r.state.slideCount>=r.props.slidesToShow){var h=(0,yt.extractObject)(o,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),u=r.props.pauseOnDotsHover;h=Le(Le({},h),{},{clickHandler:r.changeSlide,onMouseEnter:u?r.onDotsLeave:null,onMouseOver:u?r.onDotsOver:null,onMouseLeave:u?r.onDotsLeave:null}),f=an.default.createElement(I3.Dots,h)}var g,v,y=(0,yt.extractObject)(o,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=r.changeSlide,r.props.arrows&&(g=an.default.createElement(Ev.PrevArrow,y),v=an.default.createElement(Ev.NextArrow,y));var m=null;r.props.vertical&&(m={height:r.state.listHeight});var d=null;r.props.vertical===!1?r.props.centerMode===!0&&(d={padding:"0px "+r.props.centerPadding}):r.props.centerMode===!0&&(d={padding:r.props.centerPadding+" 0px"});var p=Le(Le({},m),d),_=r.props.touchMove,S={className:"slick-list",style:p,onClick:r.clickHandler,onMouseDown:_?r.swipeStart:null,onMouseMove:r.state.dragging&&_?r.swipeMove:null,onMouseUp:_?r.swipeEnd:null,onMouseLeave:r.state.dragging&&_?r.swipeEnd:null,onTouchStart:_?r.swipeStart:null,onTouchMove:r.state.dragging&&_?r.swipeMove:null,onTouchEnd:_?r.touchEnd:null,onTouchCancel:r.state.dragging&&_?r.swipeEnd:null,onKeyDown:r.props.accessibility?r.keyHandler:null},C={className:a,dir:"ltr",style:r.props.style};return r.props.unslick&&(S={className:"slick-list"},C={className:a,style:r.props.style}),an.default.createElement("div",C,r.props.unslick?"":g,an.default.createElement("div",Cc({ref:r.listRefHandler},S),an.default.createElement(D3.Track,Cc({ref:r.trackRefHandler},l),r.props.children)),r.props.unslick?"":v,r.props.unslick?"":f)}),r.list=null,r.track=null,r.state=Le(Le({},P3.default),{},{currentSlide:r.props.initialSlide,targetSlide:r.props.initialSlide?r.props.initialSlide:0,slideCount:an.default.Children.count(r.props.children)}),r.callbackTimers=[],r.clickable=!0,r.debouncedResize=null;var s=r.ssrInit();return r.state=Le(Le({},r.state),s),r}return B3(n,[{key:"didPropsChange",value:function(r){for(var s=!1,a=0,o=Object.keys(this.props);a<o.length;a++){var l=o[a];if(!r.hasOwnProperty(l)){s=!0;break}if(!(Qr(r[l])==="object"||typeof r[l]=="function"||isNaN(r[l]))&&r[l]!==this.props[l]){s=!0;break}}return s||an.default.Children.count(this.props.children)!==an.default.Children.count(r.children)}}]),n}(an.default.Component);var W3=function(t){return t.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},X3=W3,$3=X3,q3=function(t){var e=/[height|width]$/;return e.test(t)},Tv=function(t){var e="",n=Object.keys(t);return n.forEach(function(i,r){var s=t[i];i=$3(i),q3(i)&&typeof s=="number"&&(s=s+"px"),s===!0?e+=i:s===!1?e+="not "+i:e+="("+i+": "+s+")",r<n.length-1&&(e+=" and ")}),e},Y3=function(t){var e="";return typeof t=="string"?t:t instanceof Array?(t.forEach(function(n,i){e+=Tv(n),i<t.length-1&&(e+=", ")}),e):Tv(t)},K3=Y3;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=a($),n=eu,i=a(K3),r=a(Fp),s=fe;function a(x){return x&&x.__esModule?x:{default:x}}function o(x){"@babel/helpers - typeof";return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(w){return typeof w}:function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w},o(x)}function l(){return l=Object.assign?Object.assign.bind():function(x){for(var w=1;w<arguments.length;w++){var N=arguments[w];for(var R in N)({}).hasOwnProperty.call(N,R)&&(x[R]=N[R])}return x},l.apply(null,arguments)}function c(x,w){var N=Object.keys(x);if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(x);w&&(R=R.filter(function(D){return Object.getOwnPropertyDescriptor(x,D).enumerable})),N.push.apply(N,R)}return N}function f(x){for(var w=1;w<arguments.length;w++){var N=arguments[w]!=null?arguments[w]:{};w%2?c(Object(N),!0).forEach(function(R){C(x,R,N[R])}):Object.getOwnPropertyDescriptors?Object.defineProperties(x,Object.getOwnPropertyDescriptors(N)):c(Object(N)).forEach(function(R){Object.defineProperty(x,R,Object.getOwnPropertyDescriptor(N,R))})}return x}function h(x,w){if(!(x instanceof w))throw new TypeError("Cannot call a class as a function")}function u(x,w){for(var N=0;N<w.length;N++){var R=w[N];R.enumerable=R.enumerable||!1,R.configurable=!0,"value"in R&&(R.writable=!0),Object.defineProperty(x,b(R.key),R)}}function g(x,w,N){return w&&u(x.prototype,w),Object.defineProperty(x,"prototype",{writable:!1}),x}function v(x,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function");x.prototype=Object.create(w&&w.prototype,{constructor:{value:x,writable:!0,configurable:!0}}),Object.defineProperty(x,"prototype",{writable:!1}),w&&y(x,w)}function y(x,w){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(N,R){return N.__proto__=R,N},y(x,w)}function m(x){var w=_();return function(){var N,R=S(x);if(w){var D=S(this).constructor;N=Reflect.construct(R,arguments,D)}else N=R.apply(this,arguments);return d(this,N)}}function d(x,w){if(w&&(o(w)=="object"||typeof w=="function"))return w;if(w!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(x)}function p(x){if(x===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x}function _(){try{var x=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(_=function(){return!!x})()}function S(x){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(w){return w.__proto__||Object.getPrototypeOf(w)},S(x)}function C(x,w,N){return(w=b(w))in x?Object.defineProperty(x,w,{value:N,enumerable:!0,configurable:!0,writable:!0}):x[w]=N,x}function b(x){var w=A(x,"string");return o(w)=="symbol"?w:w+""}function A(x,w){if(o(x)!="object"||!x)return x;var N=x[Symbol.toPrimitive];if(N!==void 0){var R=N.call(x,w);if(o(R)!="object")return R;throw new TypeError("@@toPrimitive must return a primitive value.")}return(w==="string"?String:Number)(x)}t.default=function(x){v(N,x);var w=m(N);function N(R){var D;return h(this,N),D=w.call(this,R),C(p(D),"innerSliderRefHandler",function(U){return D.innerSlider=U}),C(p(D),"slickPrev",function(){return D.innerSlider.slickPrev()}),C(p(D),"slickNext",function(){return D.innerSlider.slickNext()}),C(p(D),"slickGoTo",function(U){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return D.innerSlider.slickGoTo(U,q)}),C(p(D),"slickPause",function(){return D.innerSlider.pause("paused")}),C(p(D),"slickPlay",function(){return D.innerSlider.autoPlay("play")}),D.state={breakpoint:null},D._responsiveMediaHandlers=[],D}return g(N,[{key:"media",value:function(D,U){var q=window.matchMedia(D),H=function(L){var I=L.matches;I&&U()};q.addListener(H),this._responsiveMediaHandlers.push({mql:q,query:D,listener:H})}},{key:"componentDidMount",value:function(){var D=this;if(this.props.responsive){var U=this.props.responsive.map(function(H){return H.breakpoint});U.sort(function(H,j){return H-j}),U.forEach(function(H,j){var L;j===0?L=(0,i.default)({minWidth:0,maxWidth:H}):L=(0,i.default)({minWidth:U[j-1]+1,maxWidth:H}),(0,s.canUseDOM)()&&D.media(L,function(){D.setState({breakpoint:H})})});var q=(0,i.default)({minWidth:U.slice(-1)[0]});(0,s.canUseDOM)()&&this.media(q,function(){D.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(D){D.mql.removeListener(D.listener)})}},{key:"render",value:function(){var D=this,U,q;this.state.breakpoint?(q=this.props.responsive.filter(function(Ie){return Ie.breakpoint===D.state.breakpoint}),U=q[0].settings==="unslick"?"unslick":f(f(f({},r.default),this.props),q[0].settings)):U=f(f({},r.default),this.props),U.centerMode&&(U.slidesToScroll>1,U.slidesToScroll=1),U.fade&&(U.slidesToShow>1,U.slidesToScroll>1,U.slidesToShow=1,U.slidesToScroll=1);var H=e.default.Children.toArray(this.props.children);H=H.filter(function(Ie){return typeof Ie=="string"?!!Ie.trim():!!Ie}),U.variableWidth&&(U.rows>1||U.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),U.variableWidth=!1);for(var j=[],L=null,I=0;I<H.length;I+=U.rows*U.slidesPerRow){for(var V=[],K=I;K<I+U.rows*U.slidesPerRow;K+=U.slidesPerRow){for(var ie=[],F=K;F<K+U.slidesPerRow&&(U.variableWidth&&H[F].props.style&&(L=H[F].props.style.width),!(F>=H.length));F+=1)ie.push(e.default.cloneElement(H[F],{key:100*I+10*K+F,tabIndex:-1,style:{width:"".concat(100/U.slidesPerRow,"%"),display:"inline-block"}}));V.push(e.default.createElement("div",{key:10*I+K},ie))}U.variableWidth?j.push(e.default.createElement("div",{key:I,style:{width:L}},V)):j.push(e.default.createElement("div",{key:I},V))}if(U==="unslick"){var pe="regular slider "+(this.props.className||"");return e.default.createElement("div",{className:pe},H)}else j.length<=U.slidesToShow&&(U.unslick=!0);return e.default.createElement(n.InnerSlider,l({style:this.props.style,ref:this.innerSliderRefHandler},(0,s.filterSettings)(U)),j)}}]),N}(e.default.Component)})(Xx);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(Xx);function n(i){return i&&i.__esModule?i:{default:i}}t.default=e.default})(Wx);const Ty=Rv(Wx);function bv({className:t,onClick:e,children:n}){return M.jsx("button",{type:"button",className:t,onClick:e,children:n})}const Ml=[{id:1,clientName:"Sarah Johnson",avatar:"https://ui-avatars.com/api/?name=Sarah+Johnson&background=0891b2&color=fff&size=100",vendorName:"John Builders",review:"Excellent painting work and clear communication. Escrow workflow gave me full confidence during delivery.",rating:5},{id:2,clientName:"Michael Chen",avatar:"https://ui-avatars.com/api/?name=Michael+Chen&background=10b981&color=fff&size=100",vendorName:"Elite Interiors",review:"Great quality work and fair pricing. Milestones and payment statuses were transparent throughout.",rating:5},{id:3,clientName:"Priya Sharma",avatar:"https://ui-avatars.com/api/?name=Priya+Sharma&background=f97316&color=fff&size=100",vendorName:"Modern Windows Co.",review:"Fast turnaround and professional finish. I was able to review delivery before approving payment.",rating:4}];function Z3(){const t={dots:!0,infinite:Ml.length>2,speed:500,slidesToShow:Math.min(2,Math.max(1,Ml.length)),slidesToScroll:1,autoplay:Ml.length>2,autoplaySpeed:4e3,arrows:!0,prevArrow:M.jsx(bv,{children:M.jsx(ex,{size:18})}),nextArrow:M.jsx(bv,{children:M.jsx(tx,{size:18})}),responsive:[{breakpoint:768,settings:{slidesToShow:1}}]};return M.jsx("section",{className:"section-strip",id:"testimonials",children:M.jsxs("div",{className:"page section-block",children:[M.jsxs("div",{className:"section-headline",children:[M.jsx("h2",{children:"Reviews & Testimonials"}),M.jsx("p",{children:"Feedback from clients who booked verified professionals on the platform."})]}),M.jsx(Ty,{...t,children:Ml.map(e=>M.jsx("div",{className:"testimonial-slide-wrap",children:M.jsxs("article",{className:"testimonial-card",children:[M.jsx(rw,{size:20,className:"quote-mark"}),M.jsx("p",{children:e.review}),M.jsxs("div",{className:"testimonial-rating",children:["*".repeat(e.rating)," ",M.jsx(ix,{size:14})]}),M.jsxs("div",{className:"testimonial-client",children:[M.jsx("img",{src:e.avatar,alt:e.clientName,className:"testimonial-avatar"}),M.jsxs("div",{children:[M.jsx("h4",{children:e.clientName}),M.jsxs("span",{children:["Vendor: ",e.vendorName]})]})]})]})},e.id))})]})})}function Cv({className:t,onClick:e,children:n}){return M.jsx("button",{type:"button",className:t,onClick:e,children:n})}function J3({vendor:t}){return M.jsxs("article",{className:"vendor-slide-card",children:[M.jsx("div",{className:"vendor-avatar-wrap",children:M.jsx("img",{src:t.image,alt:t.name,className:"vendor-photo"})}),M.jsxs("h3",{className:"vendor-name-row",children:[M.jsx("span",{children:t.name}),t.verified&&M.jsx(cr,{size:16,className:"verified-badge-inline","aria-label":"Verified vendor"})]}),M.jsx("p",{children:t.serviceType}),t.verified&&M.jsxs("span",{className:"verified-chip",children:[M.jsx(cr,{size:14})," Verified vendor"]}),M.jsxs("div",{className:"vendor-meta",children:[M.jsxs("span",{children:[M.jsx(ix,{size:14})," ",t.rating]}),M.jsxs("span",{children:[t.reviews," reviews"]})]}),M.jsxs("button",{className:"ghost-button vendor-cta",children:["View Profile",M.jsx(x1,{size:16})]})]})}function Q3({vendors:t}){const e={dots:!0,infinite:t.length>3,speed:500,slidesToShow:Math.min(3,Math.max(1,t.length)),slidesToScroll:1,autoplay:t.length>3,autoplaySpeed:3e3,arrows:!0,prevArrow:M.jsx(Cv,{children:M.jsx(ex,{size:18})}),nextArrow:M.jsx(Cv,{children:M.jsx(tx,{size:18})}),responsive:[{breakpoint:1024,settings:{slidesToShow:Math.min(2,Math.max(1,t.length))}},{breakpoint:640,settings:{slidesToShow:1}}]};return M.jsxs("section",{className:"page section-block",id:"vendors",children:[M.jsxs("div",{className:"section-headline",children:[M.jsx("h2",{children:"Top 5 Vendors"}),M.jsx("p",{children:"Highly rated vendors across painting, POP, window work, and renovation services."})]}),t.length===0?M.jsx("p",{className:"subtle",children:"Vendors will appear here once listings are published."}):M.jsx(Ty,{...e,children:t.map(n=>M.jsx("div",{className:"vendor-slide-wrap",children:M.jsx(J3,{vendor:n})},n.id??n.name))})]})}const eL=["","Painting","Window Making","Plastering","POP / False Ceiling","PVC / Modular Work","Renovation","Maintenance, repairs, cleaning, and installation services"],tL=["Repairs","Deep cleaning","Pest control","Home maintenance"],nL={Repairs:["repair","fix","plaster","window","renovation"],"Deep cleaning":["deep cleaning","cleaning","sanitize"],"Pest control":["pest","termite","rodent","insect"],"Home maintenance":["maintenance","upkeep","inspection","installation"]},iL=[{title:"Verified Technicians",detail:"Access to screened professionals, including plumbers, electricians, and cleaners."},{title:"Booking Convenience",detail:"Easy booking, tracking, and scheduling of appointments."},{title:"Transparent Pricing",detail:"Upfront quotes, no hidden costs."},{title:"Service Types",detail:"Repairs, deep cleaning, pest control, and home maintenance."}];function rL(t,e){if(!e)return!0;const n=`${t.title} ${t.description} ${t.category}`.toLowerCase();return(nL[e]||[]).some(r=>n.includes(r.toLowerCase()))}function sL(){const{user:t,token:e}=ns(),n=ha(),[i,r]=$.useState([]),[s,a]=$.useState([]),[o,l]=$.useState(""),[c,f]=$.useState(""),[h,u]=$.useState(""),[g,v]=$.useState(""),[y,m]=$.useState("recent"),[d,p]=$.useState(""),[_,S]=$.useState(""),[C,b]=$.useState(""),[A,x]=$.useState(!0),[w,N]=$.useState(null),[R,D]=$.useState(null);$.useEffect(()=>{const L=setTimeout(()=>f(o.trim()),300);return()=>clearTimeout(L)},[o]),$.useEffect(()=>{let L=!0;async function I(){try{x(!0),S("");const V=await Ot.getServices({search:c,category:h});L&&r(V)}catch(V){L&&S(V.message)}finally{L&&x(!1)}}return I(),()=>{L=!1}},[c,h]),$.useEffect(()=>{let L=!0;async function I(){if(!t||t.role!=="CLIENT"){a([]);return}try{const V=await Ot.getSavedServiceIds(e);L&&a(V)}catch{L&&a([])}}return I(),()=>{L=!1}},[t,e]);const U=$.useMemo(()=>{let L=[...i];return g&&(L=L.filter(I=>rL(I,g))),y==="price-asc"?L.sort((I,V)=>Number(I.price)-Number(V.price)):y==="price-desc"?L.sort((I,V)=>Number(V.price)-Number(I.price)):L.sort((I,V)=>new Date(V.createdAt).getTime()-new Date(I.createdAt).getTime()),L},[i,g,y]),q=$.useMemo(()=>{const L=new Map;return i.forEach(I=>{const V=I.vendorId,K=L.get(V)||{id:V,name:I.vendorName,count:0,categories:{},verified:!!I.vendorVerified};K.count+=1,K.categories[I.category]=(K.categories[I.category]||0)+1,K.verified=K.verified||!!I.vendorVerified,L.set(V,K)}),Array.from(L.values()).sort((I,V)=>V.count-I.count).slice(0,5).map((I,V)=>{var ie;const K=((ie=Object.entries(I.categories).sort((F,pe)=>pe[1]-F[1])[0])==null?void 0:ie[0])||"Home Services";return{id:I.id,name:I.name,serviceType:K,rating:Number((4.6+V%4*.1).toFixed(1)),reviews:I.count*14+35,verified:I.verified,image:`https://ui-avatars.com/api/?name=${encodeURIComponent(I.name)}&background=0891b2&color=fff&size=140`}})},[i]);async function H(L){if(!t){n("/login");return}if(t.role!=="CLIENT"){S("Only client accounts can place orders.");return}if(d){const I=new Date(d);I.setHours(0,0,0,0);const V=new Date;if(V.setHours(0,0,0,0),I<V){S("Preferred booking date cannot be in the past.");return}}try{S(""),b(""),N(L.id);const I=await Ot.createOrder({serviceId:L.id,preferredDate:d||null},e);await Ot.createPayment({orderId:I.id,idempotencyKey:`escrow-${I.id}-${Date.now()}`},e);const V=I.preferredDate?` Scheduled for ${new Date(I.preferredDate).toLocaleDateString()}.`:"";b(`Order #${I.id} created and escrow funded.${V}`)}catch(I){S(I.message)}finally{N(null)}}async function j(L){if(!t){n("/login");return}if(t.role!=="CLIENT"){S("Only client accounts can save services.");return}const I=s.includes(L.id);try{D(L.id),S(""),b(""),I?(await Ot.unsaveService(L.id,e),a(V=>V.filter(K=>K!==L.id)),b(`Removed ${L.title} from saved services.`)):(await Ot.saveService(L.id,e),a(V=>[...V,L.id]),b(`Saved ${L.title} for later.`))}catch(V){S(V.message)}finally{D(null)}}return M.jsxs("main",{className:"market-home",children:[M.jsx(KP,{servicesCount:i.length,vendorsCount:q.length,savedCount:s.length,onFindVendors:()=>{var L;return(L=document.getElementById("services"))==null?void 0:L.scrollIntoView({behavior:"smooth"})},onBecomeVendor:()=>n(t?"/dashboard":"/register")}),M.jsxs("section",{className:"page section-block feature-block",children:[M.jsx("div",{className:"section-headline",children:M.jsx("h2",{children:"Key Features of Home Service Platforms"})}),M.jsx("div",{className:"feature-grid",children:iL.map(L=>M.jsxs("article",{className:"feature-card",children:[M.jsx("h3",{children:L.title}),M.jsx("p",{children:L.detail})]},L.title))})]}),M.jsx(Q3,{vendors:q}),M.jsx(Nw,{}),M.jsx(i2,{}),M.jsx(Z3,{}),M.jsxs("section",{className:"page section-block",id:"services",children:[M.jsxs("div",{className:"section-headline",children:[M.jsx("h2",{children:"Live Marketplace Listings"}),M.jsx("p",{children:"Search, filter, save, and book with escrow protection."})]}),M.jsx("div",{className:"service-type-chips",children:tL.map(L=>M.jsx("button",{type:"button",className:`chip-button ${g===L?"active":""}`,onClick:()=>v(I=>I===L?"":L),children:L},L))}),M.jsxs("section",{className:"card filters-row",children:[M.jsx("input",{placeholder:"Search services",value:o,onChange:L=>l(L.target.value)}),M.jsx("select",{value:h,onChange:L=>u(L.target.value),children:eL.map(L=>M.jsx("option",{value:L,children:L||"All categories"},L))}),M.jsxs("select",{value:y,onChange:L=>m(L.target.value),children:[M.jsx("option",{value:"recent",children:"Newest first"}),M.jsx("option",{value:"price-asc",children:"Price low to high"}),M.jsx("option",{value:"price-desc",children:"Price high to low"})]}),M.jsx("input",{type:"date",value:d,onChange:L=>p(L.target.value)})]}),C&&M.jsx("p",{className:"notice",children:C}),_&&M.jsx("p",{className:"error",children:_}),A&&M.jsx("p",{className:"subtle",children:"Loading services..."}),!A&&U.length===0&&M.jsx("p",{className:"subtle",children:"No services found for your current filters."}),M.jsx("section",{className:"grid",children:U.map(L=>M.jsx(Aw,{service:L,onPrimaryAction:H,actionLabel:(t==null?void 0:t.role)==="CLIENT"?"Book with escrow":"Login as client to book",actionDisabled:!!(t&&t.role!=="CLIENT"),bookingInProgress:w===L.id,onSaveAction:j,isSaved:s.includes(L.id),saveInProgress:R===L.id},L.id))})]}),M.jsx(Rw,{onExplore:()=>{var L;return(L=document.getElementById("services"))==null?void 0:L.scrollIntoView({behavior:"smooth"})},onJoin:()=>n(t?"/dashboard":"/register")})]})}const Av={CLIENT:{title:"Client account",description:"Book services, track orders, and manage saved providers.",note:"You can start using the platform right after sign up.",uploadLabel:"Upload your profile photo",uploadHelp:"Add a clear photo so your account feels personal and easy to recognize."},VENDOR:{title:"Vendor account",description:"Publish services, manage jobs, and grow your business.",note:"Vendor accounts need admin approval before they can publish services.",uploadLabel:"Upload your business logo",uploadHelp:"Use your business logo or brand mark so clients can recognize your company."}};function aL(t){return new Promise((e,n)=>{const i=new FileReader;i.onload=()=>e(typeof i.result=="string"?i.result:""),i.onerror=()=>n(new Error("Could not read the selected image")),i.readAsDataURL(t)})}function oL(){const{register:t}=ns(),e=ha(),[n,i]=$.useState({name:"",email:"",password:"",role:"CLIENT",bio:"",profileImage:"",logoImage:""}),[r,s]=$.useState(""),[a,o]=$.useState(!1),[l,c]=$.useState(!1),f=Av[n.role],h=n.role==="VENDOR"?n.logoImage:n.profileImage;async function u(y){var d;const m=(d=y.target.files)==null?void 0:d[0];if(m){if(!m.type.startsWith("image/")){s("Please choose an image file only."),y.target.value="";return}try{s(""),c(!0);const p=await aL(m);i(_=>({..._,profileImage:_.role==="CLIENT"?p:"",logoImage:_.role==="VENDOR"?p:""}))}catch(p){s(p.message)}finally{c(!1)}}}function g(y){i(m=>({...m,role:y,bio:y==="CLIENT"?"":m.bio,profileImage:y==="CLIENT"?m.profileImage:"",logoImage:y==="VENDOR"?m.logoImage:""})),s("")}async function v(y){y.preventDefault();try{s(""),o(!0),await t({...n,bio:n.role==="VENDOR"?n.bio.trim():"",profileImage:n.role==="CLIENT"?n.profileImage:"",logoImage:n.role==="VENDOR"?n.logoImage:""}),e("/dashboard")}catch(m){s(m.message)}finally{o(!1)}}return M.jsx("main",{className:"page narrow auth-page",children:M.jsxs("form",{className:"card form-card auth-card",onSubmit:v,children:[M.jsx("span",{className:"eyebrow",children:"Sign Up"}),M.jsx("h1",{children:"Create your account"}),M.jsx("p",{className:"subtle",children:"Choose whether you are joining as a client or a vendor."}),M.jsx("div",{className:"role-grid",role:"radiogroup","aria-label":"Account type",children:Object.entries(Av).map(([y,m])=>M.jsxs("button",{type:"button",className:`role-card ${n.role===y?"active":""}`,onClick:()=>g(y),children:[M.jsx("strong",{children:m.title}),M.jsx("span",{children:m.description})]},y))}),M.jsxs("div",{className:"auth-note",children:[M.jsx("strong",{children:f.title}),M.jsx("span",{children:f.note})]}),M.jsx("input",{placeholder:"Full name",value:n.name,onChange:y=>i({...n,name:y.target.value}),required:!0}),M.jsx("input",{placeholder:"Email",type:"email",value:n.email,onChange:y=>i({...n,email:y.target.value}),required:!0}),M.jsx("input",{placeholder:"Password",type:"password",value:n.password,onChange:y=>i({...n,password:y.target.value}),minLength:8,required:!0}),M.jsxs("label",{className:"upload-field",children:[M.jsx("span",{className:"upload-label",children:f.uploadLabel}),M.jsx("span",{className:"upload-help",children:f.uploadHelp}),M.jsx("input",{type:"file",accept:"image/*",onChange:u})]}),h&&M.jsxs("div",{className:"upload-preview-card",children:[M.jsx("img",{src:h,alt:n.role==="VENDOR"?"Business logo preview":"Profile preview",className:"upload-preview-image"}),M.jsx("button",{type:"button",className:"ghost-button upload-remove-button",onClick:()=>i(y=>({...y,profileImage:"",logoImage:""})),children:"Remove image"})]}),n.role==="VENDOR"&&M.jsx("textarea",{placeholder:"Tell clients about your services, experience, or special skills",value:n.bio,onChange:y=>i({...n,bio:y.target.value})}),r&&M.jsx("p",{className:"error",children:r}),M.jsx("button",{className:"primary-button",type:"submit",disabled:a||l,children:l?"Preparing image...":a?"Creating account...":`Create ${n.role==="CLIENT"?"client":"vendor"} account`}),M.jsx("div",{className:"auth-divider","aria-hidden":"true"}),M.jsxs("div",{className:"auth-switch",children:[M.jsx("span",{children:"Already have an account?"}),M.jsx(qc,{className:"ghost-button auth-link-button",to:"/login",children:"Sign in"})]})]})})}function lL(){const{user:t}=ns();return M.jsxs("div",{className:"app-shell",children:[M.jsx(Sw,{}),M.jsxs(ZE,{children:[M.jsx(Fa,{path:"/",element:M.jsx(sL,{})}),M.jsx(Fa,{path:"/login",element:t?M.jsx(vf,{to:"/dashboard",replace:!0}):M.jsx(Cw,{})}),M.jsx(Fa,{path:"/register",element:t?M.jsx(vf,{to:"/dashboard",replace:!0}):M.jsx(oL,{})}),M.jsx(Fa,{path:"/dashboard",element:M.jsx(Ew,{children:M.jsx(bw,{})})})]}),M.jsx(Mw,{})]})}Sd.createRoot(document.getElementById("root")).render(M.jsx(vn.StrictMode,{children:M.jsx(s1,{children:M.jsx(yw,{children:M.jsx(lL,{})})})}));
