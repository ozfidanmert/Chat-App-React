function Hb(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Xv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Jv={exports:{}},Uu={},Zv={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=Symbol.for("react.element"),Kb=Symbol.for("react.portal"),Gb=Symbol.for("react.fragment"),Qb=Symbol.for("react.strict_mode"),Yb=Symbol.for("react.profiler"),Xb=Symbol.for("react.provider"),Jb=Symbol.for("react.context"),Zb=Symbol.for("react.forward_ref"),eT=Symbol.for("react.suspense"),tT=Symbol.for("react.memo"),nT=Symbol.for("react.lazy"),og=Symbol.iterator;function rT(t){return t===null||typeof t!="object"?null:(t=og&&t[og]||t["@@iterator"],typeof t=="function"?t:null)}var e0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},t0=Object.assign,n0={};function Ao(t,e,n){this.props=t,this.context=e,this.refs=n0,this.updater=n||e0}Ao.prototype.isReactComponent={};Ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function r0(){}r0.prototype=Ao.prototype;function hf(t,e,n){this.props=t,this.context=e,this.refs=n0,this.updater=n||e0}var df=hf.prototype=new r0;df.constructor=hf;t0(df,Ao.prototype);df.isPureReactComponent=!0;var sg=Array.isArray,i0=Object.prototype.hasOwnProperty,ff={current:null},o0={key:!0,ref:!0,__self:!0,__source:!0};function s0(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)i0.call(e,r)&&!o0.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ua,type:t,key:o,ref:s,props:i,_owner:ff.current}}function iT(t,e){return{$$typeof:ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ua}function oT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ag=/\/+/g;function Zc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?oT(""+t.key):e.toString(36)}function Il(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ua:case Kb:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Zc(s,0):r,sg(i)?(n="",t!=null&&(n=t.replace(ag,"$&/")+"/"),Il(i,e,n,"",function(c){return c})):i!=null&&(pf(i)&&(i=iT(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ag,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",sg(t))for(var l=0;l<t.length;l++){o=t[l];var u=r+Zc(o,l);s+=Il(o,e,n,u,i)}else if(u=rT(t),typeof u=="function")for(t=u.call(t),l=0;!(o=t.next()).done;)o=o.value,u=r+Zc(o,l++),s+=Il(o,e,n,u,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Ya(t,e,n){if(t==null)return t;var r=[],i=0;return Il(t,r,"","",function(o){return e.call(n,o,i++)}),r}function sT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Pt={current:null},Al={transition:null},aT={ReactCurrentDispatcher:Pt,ReactCurrentBatchConfig:Al,ReactCurrentOwner:ff};function a0(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Ya,forEach:function(t,e,n){Ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ya(t,function(){e++}),e},toArray:function(t){return Ya(t,function(e){return e})||[]},only:function(t){if(!pf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Ao;ie.Fragment=Gb;ie.Profiler=Yb;ie.PureComponent=hf;ie.StrictMode=Qb;ie.Suspense=eT;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aT;ie.act=a0;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=t0({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=ff.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)i0.call(e,u)&&!o0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ua,type:t.type,key:i,ref:o,props:r,_owner:s}};ie.createContext=function(t){return t={$$typeof:Jb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Xb,_context:t},t.Consumer=t};ie.createElement=s0;ie.createFactory=function(t){var e=s0.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:Zb,render:t}};ie.isValidElement=pf;ie.lazy=function(t){return{$$typeof:nT,_payload:{_status:-1,_result:t},_init:sT}};ie.memo=function(t,e){return{$$typeof:tT,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Al.transition;Al.transition={};try{t()}finally{Al.transition=e}};ie.unstable_act=a0;ie.useCallback=function(t,e){return Pt.current.useCallback(t,e)};ie.useContext=function(t){return Pt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return Pt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return Pt.current.useEffect(t,e)};ie.useId=function(){return Pt.current.useId()};ie.useImperativeHandle=function(t,e,n){return Pt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Pt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Pt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Pt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return Pt.current.useReducer(t,e,n)};ie.useRef=function(t){return Pt.current.useRef(t)};ie.useState=function(t){return Pt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Pt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Pt.current.useTransition()};ie.version="18.3.1";Zv.exports=ie;var L=Zv.exports;const W=Xv(L),lT=Hb({__proto__:null,default:W},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uT=L,cT=Symbol.for("react.element"),hT=Symbol.for("react.fragment"),dT=Object.prototype.hasOwnProperty,fT=uT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pT={key:!0,ref:!0,__self:!0,__source:!0};function l0(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)dT.call(e,r)&&!pT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:cT,type:t,key:o,ref:s,props:i,_owner:fT.current}}Uu.Fragment=hT;Uu.jsx=l0;Uu.jsxs=l0;Jv.exports=Uu;var V=Jv.exports,u0={exports:{}},Ht={},c0={exports:{}},h0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var Y=z.length;z.push(Q);e:for(;0<Y;){var pe=Y-1>>>1,re=z[pe];if(0<i(re,Q))z[pe]=Q,z[Y]=re,Y=pe;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],Y=z.pop();if(Y!==Q){z[0]=Y;e:for(var pe=0,re=z.length,ae=re>>>1;pe<ae;){var Ve=2*(pe+1)-1,je=z[Ve],et=Ve+1,Et=z[et];if(0>i(je,Y))et<re&&0>i(Et,je)?(z[pe]=Et,z[et]=Y,pe=et):(z[pe]=je,z[Ve]=Y,pe=Ve);else if(et<re&&0>i(Et,Y))z[pe]=Et,z[et]=Y,pe=et;else break e}}return Q}function i(z,Q){var Y=z.sortIndex-Q.sortIndex;return Y!==0?Y:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var u=[],c=[],d=1,p=null,m=3,b=!1,A=!1,w=!1,P=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(z){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=z)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function x(z){if(w=!1,E(z),!A)if(n(u)!==null)A=!0,We(O);else{var Q=n(c);Q!==null&&fe(x,Q.startTime-z)}}function O(z,Q){A=!1,w&&(w=!1,v(g),g=-1),b=!0;var Y=m;try{for(E(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||z&&!R());){var pe=p.callback;if(typeof pe=="function"){p.callback=null,m=p.priorityLevel;var re=pe(p.expirationTime<=Q);Q=t.unstable_now(),typeof re=="function"?p.callback=re:p===n(u)&&r(u),E(Q)}else r(u);p=n(u)}if(p!==null)var ae=!0;else{var Ve=n(c);Ve!==null&&fe(x,Ve.startTime-Q),ae=!1}return ae}finally{p=null,m=Y,b=!1}}var M=!1,I=null,g=-1,T=5,S=-1;function R(){return!(t.unstable_now()-S<T)}function C(){if(I!==null){var z=t.unstable_now();S=z;var Q=!0;try{Q=I(!0,z)}finally{Q?k():(M=!1,I=null)}}else M=!1}var k;if(typeof y=="function")k=function(){y(C)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,Ce=ne.port2;ne.port1.onmessage=C,k=function(){Ce.postMessage(null)}}else k=function(){P(C,0)};function We(z){I=z,M||(M=!0,k())}function fe(z,Q){g=P(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){A||b||(A=!0,We(O))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var Y=m;m=Q;try{return z()}finally{m=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=m;m=z;try{return Q()}finally{m=Y}},t.unstable_scheduleCallback=function(z,Q,Y){var pe=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?pe+Y:pe):Y=pe,z){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Y+re,z={id:d++,callback:Q,priorityLevel:z,startTime:Y,expirationTime:re,sortIndex:-1},Y>pe?(z.sortIndex=Y,e(c,z),n(u)===null&&z===n(c)&&(w?(v(g),g=-1):w=!0,fe(x,Y-pe))):(z.sortIndex=re,e(u,z),A||b||(A=!0,We(O))),z},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(z){var Q=m;return function(){var Y=m;m=Q;try{return z.apply(this,arguments)}finally{m=Y}}}})(h0);c0.exports=h0;var mT=c0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gT=L,Wt=mT;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d0=new Set,Ns={};function wi(t,e){uo(t,e),uo(t+"Capture",e)}function uo(t,e){for(Ns[t]=e,t=0;t<e.length;t++)d0.add(e[t])}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zh=Object.prototype.hasOwnProperty,yT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lg={},ug={};function vT(t){return zh.call(ug,t)?!0:zh.call(lg,t)?!1:yT.test(t)?ug[t]=!0:(lg[t]=!0,!1)}function _T(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wT(t,e,n,r){if(e===null||typeof e>"u"||_T(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Rt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var at={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){at[t]=new Rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];at[e]=new Rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){at[t]=new Rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){at[t]=new Rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){at[t]=new Rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){at[t]=new Rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){at[t]=new Rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){at[t]=new Rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){at[t]=new Rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var mf=/[\-:]([a-z])/g;function gf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(mf,gf);at[e]=new Rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(mf,gf);at[e]=new Rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(mf,gf);at[e]=new Rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){at[t]=new Rt(t,1,!1,t.toLowerCase(),null,!1,!1)});at.xlinkHref=new Rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){at[t]=new Rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function yf(t,e,n,r){var i=at.hasOwnProperty(e)?at[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wT(e,n,i,r)&&(n=null),r||i===null?vT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Xn=gT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xa=Symbol.for("react.element"),ji=Symbol.for("react.portal"),zi=Symbol.for("react.fragment"),vf=Symbol.for("react.strict_mode"),Bh=Symbol.for("react.profiler"),f0=Symbol.for("react.provider"),p0=Symbol.for("react.context"),_f=Symbol.for("react.forward_ref"),qh=Symbol.for("react.suspense"),$h=Symbol.for("react.suspense_list"),wf=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),m0=Symbol.for("react.offscreen"),cg=Symbol.iterator;function Qo(t){return t===null||typeof t!="object"?null:(t=cg&&t[cg]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,eh;function os(t){if(eh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);eh=e&&e[1]||""}return`
`+eh+t}var th=!1;function nh(t,e){if(!t||th)return"";th=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var u=`
`+i[s].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=s&&0<=l);break}}}finally{th=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?os(t):""}function ET(t){switch(t.tag){case 5:return os(t.type);case 16:return os("Lazy");case 13:return os("Suspense");case 19:return os("SuspenseList");case 0:case 2:case 15:return t=nh(t.type,!1),t;case 11:return t=nh(t.type.render,!1),t;case 1:return t=nh(t.type,!0),t;default:return""}}function Wh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zi:return"Fragment";case ji:return"Portal";case Bh:return"Profiler";case vf:return"StrictMode";case qh:return"Suspense";case $h:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case p0:return(t.displayName||"Context")+".Consumer";case f0:return(t._context.displayName||"Context")+".Provider";case _f:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wf:return e=t.displayName||null,e!==null?e:Wh(t.type)||"Memo";case sr:e=t._payload,t=t._init;try{return Wh(t(e))}catch{}}return null}function bT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wh(e);case 8:return e===vf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function g0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function TT(t){var e=g0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ja(t){t._valueTracker||(t._valueTracker=TT(t))}function y0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=g0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Gl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hh(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function v0(t,e){e=e.checked,e!=null&&yf(t,"checked",e,!1)}function Kh(t,e){v0(t,e);var n=xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gh(t,e.type,xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gh(t,e,n){(e!=="number"||Gl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ss=Array.isArray;function Zi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Qh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(ss(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xr(n)}}function _0(t,e){var n=xr(e.value),r=xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function pg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function w0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?w0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Za,E0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Za=Za||document.createElement("div"),Za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Os(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IT=["Webkit","ms","Moz","O"];Object.keys(gs).forEach(function(t){IT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),gs[e]=gs[t]})});function b0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||gs.hasOwnProperty(t)&&gs[t]?(""+e).trim():e+"px"}function T0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=b0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var AT=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xh(t,e){if(e){if(AT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Jh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zh=null;function Ef(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ed=null,eo=null,to=null;function mg(t){if(t=da(t)){if(typeof ed!="function")throw Error(j(280));var e=t.stateNode;e&&(e=qu(e),ed(t.stateNode,t.type,e))}}function I0(t){eo?to?to.push(t):to=[t]:eo=t}function A0(){if(eo){var t=eo,e=to;if(to=eo=null,mg(t),e)for(t=0;t<e.length;t++)mg(e[t])}}function k0(t,e){return t(e)}function S0(){}var rh=!1;function P0(t,e,n){if(rh)return t(e,n);rh=!0;try{return k0(t,e,n)}finally{rh=!1,(eo!==null||to!==null)&&(S0(),A0())}}function Ds(t,e){var n=t.stateNode;if(n===null)return null;var r=qu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var td=!1;if(qn)try{var Yo={};Object.defineProperty(Yo,"passive",{get:function(){td=!0}}),window.addEventListener("test",Yo,Yo),window.removeEventListener("test",Yo,Yo)}catch{td=!1}function kT(t,e,n,r,i,o,s,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ys=!1,Ql=null,Yl=!1,nd=null,ST={onError:function(t){ys=!0,Ql=t}};function PT(t,e,n,r,i,o,s,l,u){ys=!1,Ql=null,kT.apply(ST,arguments)}function RT(t,e,n,r,i,o,s,l,u){if(PT.apply(this,arguments),ys){if(ys){var c=Ql;ys=!1,Ql=null}else throw Error(j(198));Yl||(Yl=!0,nd=c)}}function Ei(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function R0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gg(t){if(Ei(t)!==t)throw Error(j(188))}function CT(t){var e=t.alternate;if(!e){if(e=Ei(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return gg(i),t;if(o===r)return gg(i),e;o=o.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function C0(t){return t=CT(t),t!==null?x0(t):null}function x0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=x0(t);if(e!==null)return e;t=t.sibling}return null}var N0=Wt.unstable_scheduleCallback,yg=Wt.unstable_cancelCallback,xT=Wt.unstable_shouldYield,NT=Wt.unstable_requestPaint,Ue=Wt.unstable_now,OT=Wt.unstable_getCurrentPriorityLevel,bf=Wt.unstable_ImmediatePriority,O0=Wt.unstable_UserBlockingPriority,Xl=Wt.unstable_NormalPriority,DT=Wt.unstable_LowPriority,D0=Wt.unstable_IdlePriority,Fu=null,_n=null;function VT(t){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(Fu,t,void 0,(t.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:UT,LT=Math.log,MT=Math.LN2;function UT(t){return t>>>=0,t===0?32:31-(LT(t)/MT|0)|0}var el=64,tl=4194304;function as(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=as(l):(o&=s,o!==0&&(r=as(o)))}else s=n&~i,s!==0?r=as(s):o!==0&&(r=as(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-un(e),i=1<<n,r|=t[n],e&=~i;return r}function FT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-un(o),l=1<<s,u=i[s];u===-1?(!(l&n)||l&r)&&(i[s]=FT(l,e)):u<=e&&(t.expiredLanes|=l),o&=~l}}function rd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function V0(){var t=el;return el<<=1,!(el&4194240)&&(el=64),t}function ih(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-un(e),t[e]=n}function zT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-un(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Tf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-un(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function L0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var M0,If,U0,F0,j0,id=!1,nl=[],wr=null,Er=null,br=null,Vs=new Map,Ls=new Map,lr=[],BT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vg(t,e){switch(t){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":Vs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ls.delete(e.pointerId)}}function Xo(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=da(e),e!==null&&If(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function qT(t,e,n,r,i){switch(e){case"focusin":return wr=Xo(wr,t,e,n,r,i),!0;case"dragenter":return Er=Xo(Er,t,e,n,r,i),!0;case"mouseover":return br=Xo(br,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Vs.set(o,Xo(Vs.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ls.set(o,Xo(Ls.get(o)||null,t,e,n,r,i)),!0}return!1}function z0(t){var e=Xr(t.target);if(e!==null){var n=Ei(e);if(n!==null){if(e=n.tag,e===13){if(e=R0(n),e!==null){t.blockedOn=e,j0(t.priority,function(){U0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=od(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Zh=r,n.target.dispatchEvent(r),Zh=null}else return e=da(n),e!==null&&If(e),t.blockedOn=n,!1;e.shift()}return!0}function _g(t,e,n){kl(t)&&n.delete(e)}function $T(){id=!1,wr!==null&&kl(wr)&&(wr=null),Er!==null&&kl(Er)&&(Er=null),br!==null&&kl(br)&&(br=null),Vs.forEach(_g),Ls.forEach(_g)}function Jo(t,e){t.blockedOn===e&&(t.blockedOn=null,id||(id=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,$T)))}function Ms(t){function e(i){return Jo(i,t)}if(0<nl.length){Jo(nl[0],t);for(var n=1;n<nl.length;n++){var r=nl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(wr!==null&&Jo(wr,t),Er!==null&&Jo(Er,t),br!==null&&Jo(br,t),Vs.forEach(e),Ls.forEach(e),n=0;n<lr.length;n++)r=lr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)z0(n),n.blockedOn===null&&lr.shift()}var no=Xn.ReactCurrentBatchConfig,Zl=!0;function WT(t,e,n,r){var i=me,o=no.transition;no.transition=null;try{me=1,Af(t,e,n,r)}finally{me=i,no.transition=o}}function HT(t,e,n,r){var i=me,o=no.transition;no.transition=null;try{me=4,Af(t,e,n,r)}finally{me=i,no.transition=o}}function Af(t,e,n,r){if(Zl){var i=od(t,e,n,r);if(i===null)ph(t,e,r,eu,n),vg(t,r);else if(qT(i,t,e,n,r))r.stopPropagation();else if(vg(t,r),e&4&&-1<BT.indexOf(t)){for(;i!==null;){var o=da(i);if(o!==null&&M0(o),o=od(t,e,n,r),o===null&&ph(t,e,r,eu,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ph(t,e,r,null,n)}}var eu=null;function od(t,e,n,r){if(eu=null,t=Ef(r),t=Xr(t),t!==null)if(e=Ei(t),e===null)t=null;else if(n=e.tag,n===13){if(t=R0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return eu=t,null}function B0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(OT()){case bf:return 1;case O0:return 4;case Xl:case DT:return 16;case D0:return 536870912;default:return 16}default:return 16}}var mr=null,kf=null,Sl=null;function q0(){if(Sl)return Sl;var t,e=kf,n=e.length,r,i="value"in mr?mr.value:mr.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Sl=i.slice(t,1<r?1-r:void 0)}function Pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function wg(){return!1}function Kt(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?rl:wg,this.isPropagationStopped=wg,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),e}var ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sf=Kt(ko),ha=Se({},ko,{view:0,detail:0}),KT=Kt(ha),oh,sh,Zo,ju=Se({},ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zo&&(Zo&&t.type==="mousemove"?(oh=t.screenX-Zo.screenX,sh=t.screenY-Zo.screenY):sh=oh=0,Zo=t),oh)},movementY:function(t){return"movementY"in t?t.movementY:sh}}),Eg=Kt(ju),GT=Se({},ju,{dataTransfer:0}),QT=Kt(GT),YT=Se({},ha,{relatedTarget:0}),ah=Kt(YT),XT=Se({},ko,{animationName:0,elapsedTime:0,pseudoElement:0}),JT=Kt(XT),ZT=Se({},ko,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),eI=Kt(ZT),tI=Se({},ko,{data:0}),bg=Kt(tI),nI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iI[t])?!!e[t]:!1}function Pf(){return oI}var sI=Se({},ha,{key:function(t){if(t.key){var e=nI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pf,charCode:function(t){return t.type==="keypress"?Pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),aI=Kt(sI),lI=Se({},ju,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tg=Kt(lI),uI=Se({},ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pf}),cI=Kt(uI),hI=Se({},ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),dI=Kt(hI),fI=Se({},ju,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pI=Kt(fI),mI=[9,13,27,32],Rf=qn&&"CompositionEvent"in window,vs=null;qn&&"documentMode"in document&&(vs=document.documentMode);var gI=qn&&"TextEvent"in window&&!vs,$0=qn&&(!Rf||vs&&8<vs&&11>=vs),Ig=" ",Ag=!1;function W0(t,e){switch(t){case"keyup":return mI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function H0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bi=!1;function yI(t,e){switch(t){case"compositionend":return H0(e);case"keypress":return e.which!==32?null:(Ag=!0,Ig);case"textInput":return t=e.data,t===Ig&&Ag?null:t;default:return null}}function vI(t,e){if(Bi)return t==="compositionend"||!Rf&&W0(t,e)?(t=q0(),Sl=kf=mr=null,Bi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $0&&e.locale!=="ko"?null:e.data;default:return null}}var _I={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_I[t.type]:e==="textarea"}function K0(t,e,n,r){I0(r),e=tu(e,"onChange"),0<e.length&&(n=new Sf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var _s=null,Us=null;function wI(t){i_(t,0)}function zu(t){var e=Wi(t);if(y0(e))return t}function EI(t,e){if(t==="change")return e}var G0=!1;if(qn){var lh;if(qn){var uh="oninput"in document;if(!uh){var Sg=document.createElement("div");Sg.setAttribute("oninput","return;"),uh=typeof Sg.oninput=="function"}lh=uh}else lh=!1;G0=lh&&(!document.documentMode||9<document.documentMode)}function Pg(){_s&&(_s.detachEvent("onpropertychange",Q0),Us=_s=null)}function Q0(t){if(t.propertyName==="value"&&zu(Us)){var e=[];K0(e,Us,t,Ef(t)),P0(wI,e)}}function bI(t,e,n){t==="focusin"?(Pg(),_s=e,Us=n,_s.attachEvent("onpropertychange",Q0)):t==="focusout"&&Pg()}function TI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zu(Us)}function II(t,e){if(t==="click")return zu(e)}function AI(t,e){if(t==="input"||t==="change")return zu(e)}function kI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hn=typeof Object.is=="function"?Object.is:kI;function Fs(t,e){if(hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zh.call(e,i)||!hn(t[i],e[i]))return!1}return!0}function Rg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cg(t,e){var n=Rg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rg(n)}}function Y0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Y0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function X0(){for(var t=window,e=Gl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Gl(t.document)}return e}function Cf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function SI(t){var e=X0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Y0(n.ownerDocument.documentElement,n)){if(r!==null&&Cf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Cg(n,o);var s=Cg(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var PI=qn&&"documentMode"in document&&11>=document.documentMode,qi=null,sd=null,ws=null,ad=!1;function xg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ad||qi==null||qi!==Gl(r)||(r=qi,"selectionStart"in r&&Cf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ws&&Fs(ws,r)||(ws=r,r=tu(sd,"onSelect"),0<r.length&&(e=new Sf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=qi)))}function il(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $i={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},ch={},J0={};qn&&(J0=document.createElement("div").style,"AnimationEvent"in window||(delete $i.animationend.animation,delete $i.animationiteration.animation,delete $i.animationstart.animation),"TransitionEvent"in window||delete $i.transitionend.transition);function Bu(t){if(ch[t])return ch[t];if(!$i[t])return t;var e=$i[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in J0)return ch[t]=e[n];return t}var Z0=Bu("animationend"),e_=Bu("animationiteration"),t_=Bu("animationstart"),n_=Bu("transitionend"),r_=new Map,Ng="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(t,e){r_.set(t,e),wi(e,[t])}for(var hh=0;hh<Ng.length;hh++){var dh=Ng[hh],RI=dh.toLowerCase(),CI=dh[0].toUpperCase()+dh.slice(1);Ur(RI,"on"+CI)}Ur(Z0,"onAnimationEnd");Ur(e_,"onAnimationIteration");Ur(t_,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(n_,"onTransitionEnd");uo("onMouseEnter",["mouseout","mouseover"]);uo("onMouseLeave",["mouseout","mouseover"]);uo("onPointerEnter",["pointerout","pointerover"]);uo("onPointerLeave",["pointerout","pointerover"]);wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wi("onBeforeInput",["compositionend","keypress","textInput","paste"]);wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xI=new Set("cancel close invalid load scroll toggle".split(" ").concat(ls));function Og(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,RT(r,e,void 0,t),t.currentTarget=null}function i_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var l=r[s],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;Og(i,l,c),o=u}else for(s=0;s<r.length;s++){if(l=r[s],u=l.instance,c=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;Og(i,l,c),o=u}}}if(Yl)throw t=nd,Yl=!1,nd=null,t}function we(t,e){var n=e[dd];n===void 0&&(n=e[dd]=new Set);var r=t+"__bubble";n.has(r)||(o_(e,t,2,!1),n.add(r))}function fh(t,e,n){var r=0;e&&(r|=4),o_(n,t,r,e)}var ol="_reactListening"+Math.random().toString(36).slice(2);function js(t){if(!t[ol]){t[ol]=!0,d0.forEach(function(n){n!=="selectionchange"&&(xI.has(n)||fh(n,!1,t),fh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ol]||(e[ol]=!0,fh("selectionchange",!1,e))}}function o_(t,e,n,r){switch(B0(e)){case 1:var i=WT;break;case 4:i=HT;break;default:i=Af}n=i.bind(null,e,n,t),i=void 0,!td||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ph(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Xr(l),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}l=l.parentNode}}r=r.return}P0(function(){var c=o,d=Ef(n),p=[];e:{var m=r_.get(t);if(m!==void 0){var b=Sf,A=t;switch(t){case"keypress":if(Pl(n)===0)break e;case"keydown":case"keyup":b=aI;break;case"focusin":A="focus",b=ah;break;case"focusout":A="blur",b=ah;break;case"beforeblur":case"afterblur":b=ah;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Eg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=QT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=cI;break;case Z0:case e_:case t_:b=JT;break;case n_:b=dI;break;case"scroll":b=KT;break;case"wheel":b=pI;break;case"copy":case"cut":case"paste":b=eI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Tg}var w=(e&4)!==0,P=!w&&t==="scroll",v=w?m!==null?m+"Capture":null:m;w=[];for(var y=c,E;y!==null;){E=y;var x=E.stateNode;if(E.tag===5&&x!==null&&(E=x,v!==null&&(x=Ds(y,v),x!=null&&w.push(zs(y,x,E)))),P)break;y=y.return}0<w.length&&(m=new b(m,A,null,n,d),p.push({event:m,listeners:w}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",m&&n!==Zh&&(A=n.relatedTarget||n.fromElement)&&(Xr(A)||A[$n]))break e;if((b||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,b?(A=n.relatedTarget||n.toElement,b=c,A=A?Xr(A):null,A!==null&&(P=Ei(A),A!==P||A.tag!==5&&A.tag!==6)&&(A=null)):(b=null,A=c),b!==A)){if(w=Eg,x="onMouseLeave",v="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(w=Tg,x="onPointerLeave",v="onPointerEnter",y="pointer"),P=b==null?m:Wi(b),E=A==null?m:Wi(A),m=new w(x,y+"leave",b,n,d),m.target=P,m.relatedTarget=E,x=null,Xr(d)===c&&(w=new w(v,y+"enter",A,n,d),w.target=E,w.relatedTarget=P,x=w),P=x,b&&A)t:{for(w=b,v=A,y=0,E=w;E;E=xi(E))y++;for(E=0,x=v;x;x=xi(x))E++;for(;0<y-E;)w=xi(w),y--;for(;0<E-y;)v=xi(v),E--;for(;y--;){if(w===v||v!==null&&w===v.alternate)break t;w=xi(w),v=xi(v)}w=null}else w=null;b!==null&&Dg(p,m,b,w,!1),A!==null&&P!==null&&Dg(p,P,A,w,!0)}}e:{if(m=c?Wi(c):window,b=m.nodeName&&m.nodeName.toLowerCase(),b==="select"||b==="input"&&m.type==="file")var O=EI;else if(kg(m))if(G0)O=AI;else{O=TI;var M=bI}else(b=m.nodeName)&&b.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(O=II);if(O&&(O=O(t,c))){K0(p,O,n,d);break e}M&&M(t,m,c),t==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&Gh(m,"number",m.value)}switch(M=c?Wi(c):window,t){case"focusin":(kg(M)||M.contentEditable==="true")&&(qi=M,sd=c,ws=null);break;case"focusout":ws=sd=qi=null;break;case"mousedown":ad=!0;break;case"contextmenu":case"mouseup":case"dragend":ad=!1,xg(p,n,d);break;case"selectionchange":if(PI)break;case"keydown":case"keyup":xg(p,n,d)}var I;if(Rf)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Bi?W0(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&($0&&n.locale!=="ko"&&(Bi||g!=="onCompositionStart"?g==="onCompositionEnd"&&Bi&&(I=q0()):(mr=d,kf="value"in mr?mr.value:mr.textContent,Bi=!0)),M=tu(c,g),0<M.length&&(g=new bg(g,t,null,n,d),p.push({event:g,listeners:M}),I?g.data=I:(I=H0(n),I!==null&&(g.data=I)))),(I=gI?yI(t,n):vI(t,n))&&(c=tu(c,"onBeforeInput"),0<c.length&&(d=new bg("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=I))}i_(p,e)})}function zs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ds(t,n),o!=null&&r.unshift(zs(t,o,i)),o=Ds(t,e),o!=null&&r.push(zs(t,o,i))),t=t.return}return r}function xi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dg(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Ds(n,o),u!=null&&s.unshift(zs(n,u,l))):i||(u=Ds(n,o),u!=null&&s.push(zs(n,u,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var NI=/\r\n?/g,OI=/\u0000|\uFFFD/g;function Vg(t){return(typeof t=="string"?t:""+t).replace(NI,`
`).replace(OI,"")}function sl(t,e,n){if(e=Vg(e),Vg(t)!==e&&n)throw Error(j(425))}function nu(){}var ld=null,ud=null;function cd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var hd=typeof setTimeout=="function"?setTimeout:void 0,DI=typeof clearTimeout=="function"?clearTimeout:void 0,Lg=typeof Promise=="function"?Promise:void 0,VI=typeof queueMicrotask=="function"?queueMicrotask:typeof Lg<"u"?function(t){return Lg.resolve(null).then(t).catch(LI)}:hd;function LI(t){setTimeout(function(){throw t})}function mh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ms(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ms(e)}function Tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Mg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var So=Math.random().toString(36).slice(2),gn="__reactFiber$"+So,Bs="__reactProps$"+So,$n="__reactContainer$"+So,dd="__reactEvents$"+So,MI="__reactListeners$"+So,UI="__reactHandles$"+So;function Xr(t){var e=t[gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$n]||n[gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Mg(t);t!==null;){if(n=t[gn])return n;t=Mg(t)}return e}t=n,n=t.parentNode}return null}function da(t){return t=t[gn]||t[$n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function qu(t){return t[Bs]||null}var fd=[],Hi=-1;function Fr(t){return{current:t}}function be(t){0>Hi||(t.current=fd[Hi],fd[Hi]=null,Hi--)}function ve(t,e){Hi++,fd[Hi]=t.current,t.current=e}var Nr={},_t=Fr(Nr),Ot=Fr(!1),ai=Nr;function co(t,e){var n=t.type.contextTypes;if(!n)return Nr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Dt(t){return t=t.childContextTypes,t!=null}function ru(){be(Ot),be(_t)}function Ug(t,e,n){if(_t.current!==Nr)throw Error(j(168));ve(_t,e),ve(Ot,n)}function s_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,bT(t)||"Unknown",i));return Se({},n,r)}function iu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nr,ai=_t.current,ve(_t,t),ve(Ot,Ot.current),!0}function Fg(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=s_(t,e,ai),r.__reactInternalMemoizedMergedChildContext=t,be(Ot),be(_t),ve(_t,t)):be(Ot),ve(Ot,n)}var On=null,$u=!1,gh=!1;function a_(t){On===null?On=[t]:On.push(t)}function FI(t){$u=!0,a_(t)}function jr(){if(!gh&&On!==null){gh=!0;var t=0,e=me;try{var n=On;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}On=null,$u=!1}catch(i){throw On!==null&&(On=On.slice(t+1)),N0(bf,jr),i}finally{me=e,gh=!1}}return null}var Ki=[],Gi=0,ou=null,su=0,Gt=[],Qt=0,li=null,Vn=1,Ln="";function Gr(t,e){Ki[Gi++]=su,Ki[Gi++]=ou,ou=t,su=e}function l_(t,e,n){Gt[Qt++]=Vn,Gt[Qt++]=Ln,Gt[Qt++]=li,li=t;var r=Vn;t=Ln;var i=32-un(r)-1;r&=~(1<<i),n+=1;var o=32-un(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Vn=1<<32-un(e)+i|n<<i|r,Ln=o+t}else Vn=1<<o|n<<i|r,Ln=t}function xf(t){t.return!==null&&(Gr(t,1),l_(t,1,0))}function Nf(t){for(;t===ou;)ou=Ki[--Gi],Ki[Gi]=null,su=Ki[--Gi],Ki[Gi]=null;for(;t===li;)li=Gt[--Qt],Gt[Qt]=null,Ln=Gt[--Qt],Gt[Qt]=null,Vn=Gt[--Qt],Gt[Qt]=null}var $t=null,Ft=null,Ie=!1,an=null;function u_(t,e){var n=Yt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$t=t,Ft=Tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$t=t,Ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=li!==null?{id:Vn,overflow:Ln}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Yt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$t=t,Ft=null,!0):!1;default:return!1}}function pd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function md(t){if(Ie){var e=Ft;if(e){var n=e;if(!jg(t,e)){if(pd(t))throw Error(j(418));e=Tr(n.nextSibling);var r=$t;e&&jg(t,e)?u_(r,n):(t.flags=t.flags&-4097|2,Ie=!1,$t=t)}}else{if(pd(t))throw Error(j(418));t.flags=t.flags&-4097|2,Ie=!1,$t=t}}}function zg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$t=t}function al(t){if(t!==$t)return!1;if(!Ie)return zg(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!cd(t.type,t.memoizedProps)),e&&(e=Ft)){if(pd(t))throw c_(),Error(j(418));for(;e;)u_(t,e),e=Tr(e.nextSibling)}if(zg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ft=Tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ft=null}}else Ft=$t?Tr(t.stateNode.nextSibling):null;return!0}function c_(){for(var t=Ft;t;)t=Tr(t.nextSibling)}function ho(){Ft=$t=null,Ie=!1}function Of(t){an===null?an=[t]:an.push(t)}var jI=Xn.ReactCurrentBatchConfig;function es(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function ll(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bg(t){var e=t._init;return e(t._payload)}function h_(t){function e(v,y){if(t){var E=v.deletions;E===null?(v.deletions=[y],v.flags|=16):E.push(y)}}function n(v,y){if(!t)return null;for(;y!==null;)e(v,y),y=y.sibling;return null}function r(v,y){for(v=new Map;y!==null;)y.key!==null?v.set(y.key,y):v.set(y.index,y),y=y.sibling;return v}function i(v,y){return v=Sr(v,y),v.index=0,v.sibling=null,v}function o(v,y,E){return v.index=E,t?(E=v.alternate,E!==null?(E=E.index,E<y?(v.flags|=2,y):E):(v.flags|=2,y)):(v.flags|=1048576,y)}function s(v){return t&&v.alternate===null&&(v.flags|=2),v}function l(v,y,E,x){return y===null||y.tag!==6?(y=Th(E,v.mode,x),y.return=v,y):(y=i(y,E),y.return=v,y)}function u(v,y,E,x){var O=E.type;return O===zi?d(v,y,E.props.children,x,E.key):y!==null&&(y.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===sr&&Bg(O)===y.type)?(x=i(y,E.props),x.ref=es(v,y,E),x.return=v,x):(x=Vl(E.type,E.key,E.props,null,v.mode,x),x.ref=es(v,y,E),x.return=v,x)}function c(v,y,E,x){return y===null||y.tag!==4||y.stateNode.containerInfo!==E.containerInfo||y.stateNode.implementation!==E.implementation?(y=Ih(E,v.mode,x),y.return=v,y):(y=i(y,E.children||[]),y.return=v,y)}function d(v,y,E,x,O){return y===null||y.tag!==7?(y=ni(E,v.mode,x,O),y.return=v,y):(y=i(y,E),y.return=v,y)}function p(v,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Th(""+y,v.mode,E),y.return=v,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Xa:return E=Vl(y.type,y.key,y.props,null,v.mode,E),E.ref=es(v,null,y),E.return=v,E;case ji:return y=Ih(y,v.mode,E),y.return=v,y;case sr:var x=y._init;return p(v,x(y._payload),E)}if(ss(y)||Qo(y))return y=ni(y,v.mode,E,null),y.return=v,y;ll(v,y)}return null}function m(v,y,E,x){var O=y!==null?y.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return O!==null?null:l(v,y,""+E,x);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Xa:return E.key===O?u(v,y,E,x):null;case ji:return E.key===O?c(v,y,E,x):null;case sr:return O=E._init,m(v,y,O(E._payload),x)}if(ss(E)||Qo(E))return O!==null?null:d(v,y,E,x,null);ll(v,E)}return null}function b(v,y,E,x,O){if(typeof x=="string"&&x!==""||typeof x=="number")return v=v.get(E)||null,l(y,v,""+x,O);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Xa:return v=v.get(x.key===null?E:x.key)||null,u(y,v,x,O);case ji:return v=v.get(x.key===null?E:x.key)||null,c(y,v,x,O);case sr:var M=x._init;return b(v,y,E,M(x._payload),O)}if(ss(x)||Qo(x))return v=v.get(E)||null,d(y,v,x,O,null);ll(y,x)}return null}function A(v,y,E,x){for(var O=null,M=null,I=y,g=y=0,T=null;I!==null&&g<E.length;g++){I.index>g?(T=I,I=null):T=I.sibling;var S=m(v,I,E[g],x);if(S===null){I===null&&(I=T);break}t&&I&&S.alternate===null&&e(v,I),y=o(S,y,g),M===null?O=S:M.sibling=S,M=S,I=T}if(g===E.length)return n(v,I),Ie&&Gr(v,g),O;if(I===null){for(;g<E.length;g++)I=p(v,E[g],x),I!==null&&(y=o(I,y,g),M===null?O=I:M.sibling=I,M=I);return Ie&&Gr(v,g),O}for(I=r(v,I);g<E.length;g++)T=b(I,v,g,E[g],x),T!==null&&(t&&T.alternate!==null&&I.delete(T.key===null?g:T.key),y=o(T,y,g),M===null?O=T:M.sibling=T,M=T);return t&&I.forEach(function(R){return e(v,R)}),Ie&&Gr(v,g),O}function w(v,y,E,x){var O=Qo(E);if(typeof O!="function")throw Error(j(150));if(E=O.call(E),E==null)throw Error(j(151));for(var M=O=null,I=y,g=y=0,T=null,S=E.next();I!==null&&!S.done;g++,S=E.next()){I.index>g?(T=I,I=null):T=I.sibling;var R=m(v,I,S.value,x);if(R===null){I===null&&(I=T);break}t&&I&&R.alternate===null&&e(v,I),y=o(R,y,g),M===null?O=R:M.sibling=R,M=R,I=T}if(S.done)return n(v,I),Ie&&Gr(v,g),O;if(I===null){for(;!S.done;g++,S=E.next())S=p(v,S.value,x),S!==null&&(y=o(S,y,g),M===null?O=S:M.sibling=S,M=S);return Ie&&Gr(v,g),O}for(I=r(v,I);!S.done;g++,S=E.next())S=b(I,v,g,S.value,x),S!==null&&(t&&S.alternate!==null&&I.delete(S.key===null?g:S.key),y=o(S,y,g),M===null?O=S:M.sibling=S,M=S);return t&&I.forEach(function(C){return e(v,C)}),Ie&&Gr(v,g),O}function P(v,y,E,x){if(typeof E=="object"&&E!==null&&E.type===zi&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Xa:e:{for(var O=E.key,M=y;M!==null;){if(M.key===O){if(O=E.type,O===zi){if(M.tag===7){n(v,M.sibling),y=i(M,E.props.children),y.return=v,v=y;break e}}else if(M.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===sr&&Bg(O)===M.type){n(v,M.sibling),y=i(M,E.props),y.ref=es(v,M,E),y.return=v,v=y;break e}n(v,M);break}else e(v,M);M=M.sibling}E.type===zi?(y=ni(E.props.children,v.mode,x,E.key),y.return=v,v=y):(x=Vl(E.type,E.key,E.props,null,v.mode,x),x.ref=es(v,y,E),x.return=v,v=x)}return s(v);case ji:e:{for(M=E.key;y!==null;){if(y.key===M)if(y.tag===4&&y.stateNode.containerInfo===E.containerInfo&&y.stateNode.implementation===E.implementation){n(v,y.sibling),y=i(y,E.children||[]),y.return=v,v=y;break e}else{n(v,y);break}else e(v,y);y=y.sibling}y=Ih(E,v.mode,x),y.return=v,v=y}return s(v);case sr:return M=E._init,P(v,y,M(E._payload),x)}if(ss(E))return A(v,y,E,x);if(Qo(E))return w(v,y,E,x);ll(v,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,y!==null&&y.tag===6?(n(v,y.sibling),y=i(y,E),y.return=v,v=y):(n(v,y),y=Th(E,v.mode,x),y.return=v,v=y),s(v)):n(v,y)}return P}var fo=h_(!0),d_=h_(!1),au=Fr(null),lu=null,Qi=null,Df=null;function Vf(){Df=Qi=lu=null}function Lf(t){var e=au.current;be(au),t._currentValue=e}function gd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ro(t,e){lu=t,Df=Qi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Nt=!0),t.firstContext=null)}function Zt(t){var e=t._currentValue;if(Df!==t)if(t={context:t,memoizedValue:e,next:null},Qi===null){if(lu===null)throw Error(j(308));Qi=t,lu.dependencies={lanes:0,firstContext:t}}else Qi=Qi.next=t;return e}var Jr=null;function Mf(t){Jr===null?Jr=[t]:Jr.push(t)}function f_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Mf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Wn(t,r)}function Wn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function Uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function p_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function jn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ir(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Wn(t,n)}return i=r.interleaved,i===null?(e.next=e,Mf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Wn(t,n)}function Rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tf(t,n)}}function qg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function uu(t,e,n,r){var i=t.updateQueue;ar=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(o!==null){var p=i.baseState;s=0,d=c=u=null,l=o;do{var m=l.lane,b=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,w=l;switch(m=e,b=n,w.tag){case 1:if(A=w.payload,typeof A=="function"){p=A.call(b,p,m);break e}p=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=w.payload,m=typeof A=="function"?A.call(b,p,m):A,m==null)break e;p=Se({},p,m);break e;case 2:ar=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else b={eventTime:b,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=b,u=p):d=d.next=b,s|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);ci|=s,t.lanes=s,t.memoizedState=p}}function $g(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var fa={},wn=Fr(fa),qs=Fr(fa),$s=Fr(fa);function Zr(t){if(t===fa)throw Error(j(174));return t}function Ff(t,e){switch(ve($s,e),ve(qs,t),ve(wn,fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yh(e,t)}be(wn),ve(wn,e)}function po(){be(wn),be(qs),be($s)}function m_(t){Zr($s.current);var e=Zr(wn.current),n=Yh(e,t.type);e!==n&&(ve(qs,t),ve(wn,n))}function jf(t){qs.current===t&&(be(wn),be(qs))}var Ae=Fr(0);function cu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var yh=[];function zf(){for(var t=0;t<yh.length;t++)yh[t]._workInProgressVersionPrimary=null;yh.length=0}var Cl=Xn.ReactCurrentDispatcher,vh=Xn.ReactCurrentBatchConfig,ui=0,ke=null,He=null,Je=null,hu=!1,Es=!1,Ws=0,zI=0;function dt(){throw Error(j(321))}function Bf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hn(t[n],e[n]))return!1;return!0}function qf(t,e,n,r,i,o){if(ui=o,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cl.current=t===null||t.memoizedState===null?WI:HI,t=n(r,i),Es){o=0;do{if(Es=!1,Ws=0,25<=o)throw Error(j(301));o+=1,Je=He=null,e.updateQueue=null,Cl.current=KI,t=n(r,i)}while(Es)}if(Cl.current=du,e=He!==null&&He.next!==null,ui=0,Je=He=ke=null,hu=!1,e)throw Error(j(300));return t}function $f(){var t=Ws!==0;return Ws=0,t}function mn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?ke.memoizedState=Je=t:Je=Je.next=t,Je}function en(){if(He===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var e=Je===null?ke.memoizedState:Je.next;if(e!==null)Je=e,He=t;else{if(t===null)throw Error(j(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Je===null?ke.memoizedState=Je=t:Je=Je.next=t}return Je}function Hs(t,e){return typeof e=="function"?e(t):e}function _h(t){var e=en(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=He,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,u=null,c=o;do{var d=c.lane;if((ui&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,s=r):u=u.next=p,ke.lanes|=d,ci|=d}c=c.next}while(c!==null&&c!==o);u===null?s=r:u.next=l,hn(r,e.memoizedState)||(Nt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,ke.lanes|=o,ci|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wh(t){var e=en(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);hn(o,e.memoizedState)||(Nt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function g_(){}function y_(t,e){var n=ke,r=en(),i=e(),o=!hn(r.memoizedState,i);if(o&&(r.memoizedState=i,Nt=!0),r=r.queue,Wf(w_.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,Ks(9,__.bind(null,n,r,i,e),void 0,null),Ze===null)throw Error(j(349));ui&30||v_(n,e,i)}return i}function v_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function __(t,e,n,r){e.value=n,e.getSnapshot=r,E_(e)&&b_(t)}function w_(t,e,n){return n(function(){E_(e)&&b_(t)})}function E_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hn(t,n)}catch{return!0}}function b_(t){var e=Wn(t,1);e!==null&&cn(e,t,1,-1)}function Wg(t){var e=mn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hs,lastRenderedState:t},e.queue=t,t=t.dispatch=$I.bind(null,ke,t),[e.memoizedState,t]}function Ks(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function T_(){return en().memoizedState}function xl(t,e,n,r){var i=mn();ke.flags|=t,i.memoizedState=Ks(1|e,n,void 0,r===void 0?null:r)}function Wu(t,e,n,r){var i=en();r=r===void 0?null:r;var o=void 0;if(He!==null){var s=He.memoizedState;if(o=s.destroy,r!==null&&Bf(r,s.deps)){i.memoizedState=Ks(e,n,o,r);return}}ke.flags|=t,i.memoizedState=Ks(1|e,n,o,r)}function Hg(t,e){return xl(8390656,8,t,e)}function Wf(t,e){return Wu(2048,8,t,e)}function I_(t,e){return Wu(4,2,t,e)}function A_(t,e){return Wu(4,4,t,e)}function k_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function S_(t,e,n){return n=n!=null?n.concat([t]):null,Wu(4,4,k_.bind(null,e,t),n)}function Hf(){}function P_(t,e){var n=en();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Bf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function R_(t,e){var n=en();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Bf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function C_(t,e,n){return ui&21?(hn(n,e)||(n=V0(),ke.lanes|=n,ci|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Nt=!0),t.memoizedState=n)}function BI(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=vh.transition;vh.transition={};try{t(!1),e()}finally{me=n,vh.transition=r}}function x_(){return en().memoizedState}function qI(t,e,n){var r=kr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},N_(t))O_(e,n);else if(n=f_(t,e,n,r),n!==null){var i=St();cn(n,t,r,i),D_(n,e,r)}}function $I(t,e,n){var r=kr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(N_(t))O_(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,hn(l,s)){var u=e.interleaved;u===null?(i.next=i,Mf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=f_(t,e,i,r),n!==null&&(i=St(),cn(n,t,r,i),D_(n,e,r))}}function N_(t){var e=t.alternate;return t===ke||e!==null&&e===ke}function O_(t,e){Es=hu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function D_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tf(t,n)}}var du={readContext:Zt,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},WI={readContext:Zt,useCallback:function(t,e){return mn().memoizedState=[t,e===void 0?null:e],t},useContext:Zt,useEffect:Hg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xl(4194308,4,k_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return xl(4,2,t,e)},useMemo:function(t,e){var n=mn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=mn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=qI.bind(null,ke,t),[r.memoizedState,t]},useRef:function(t){var e=mn();return t={current:t},e.memoizedState=t},useState:Wg,useDebugValue:Hf,useDeferredValue:function(t){return mn().memoizedState=t},useTransition:function(){var t=Wg(!1),e=t[0];return t=BI.bind(null,t[1]),mn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ke,i=mn();if(Ie){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Ze===null)throw Error(j(349));ui&30||v_(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Hg(w_.bind(null,r,o,t),[t]),r.flags|=2048,Ks(9,__.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=mn(),e=Ze.identifierPrefix;if(Ie){var n=Ln,r=Vn;n=(r&~(1<<32-un(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ws++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},HI={readContext:Zt,useCallback:P_,useContext:Zt,useEffect:Wf,useImperativeHandle:S_,useInsertionEffect:I_,useLayoutEffect:A_,useMemo:R_,useReducer:_h,useRef:T_,useState:function(){return _h(Hs)},useDebugValue:Hf,useDeferredValue:function(t){var e=en();return C_(e,He.memoizedState,t)},useTransition:function(){var t=_h(Hs)[0],e=en().memoizedState;return[t,e]},useMutableSource:g_,useSyncExternalStore:y_,useId:x_,unstable_isNewReconciler:!1},KI={readContext:Zt,useCallback:P_,useContext:Zt,useEffect:Wf,useImperativeHandle:S_,useInsertionEffect:I_,useLayoutEffect:A_,useMemo:R_,useReducer:wh,useRef:T_,useState:function(){return wh(Hs)},useDebugValue:Hf,useDeferredValue:function(t){var e=en();return He===null?e.memoizedState=t:C_(e,He.memoizedState,t)},useTransition:function(){var t=wh(Hs)[0],e=en().memoizedState;return[t,e]},useMutableSource:g_,useSyncExternalStore:y_,useId:x_,unstable_isNewReconciler:!1};function on(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function yd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hu={isMounted:function(t){return(t=t._reactInternals)?Ei(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=St(),i=kr(t),o=jn(r,i);o.payload=e,n!=null&&(o.callback=n),e=Ir(t,o,i),e!==null&&(cn(e,t,i,r),Rl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=St(),i=kr(t),o=jn(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Ir(t,o,i),e!==null&&(cn(e,t,i,r),Rl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=St(),r=kr(t),i=jn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ir(t,i,r),e!==null&&(cn(e,t,r,n),Rl(e,t,r))}};function Kg(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Fs(n,r)||!Fs(i,o):!0}function V_(t,e,n){var r=!1,i=Nr,o=e.contextType;return typeof o=="object"&&o!==null?o=Zt(o):(i=Dt(e)?ai:_t.current,r=e.contextTypes,o=(r=r!=null)?co(t,i):Nr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Gg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Hu.enqueueReplaceState(e,e.state,null)}function vd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Uf(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Zt(o):(o=Dt(e)?ai:_t.current,i.context=co(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(yd(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Hu.enqueueReplaceState(i,i.state,null),uu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function mo(t,e){try{var n="",r=e;do n+=ET(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Eh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _d(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var GI=typeof WeakMap=="function"?WeakMap:Map;function L_(t,e,n){n=jn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){pu||(pu=!0,Rd=r),_d(t,e)},n}function M_(t,e,n){n=jn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){_d(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){_d(t,e),typeof r!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Qg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new GI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=lA.bind(null,t,e,n),e.then(t,t))}function Yg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=jn(-1,1),e.tag=2,Ir(n,e,1))),n.lanes|=1),t)}var QI=Xn.ReactCurrentOwner,Nt=!1;function At(t,e,n,r){e.child=t===null?d_(e,null,n,r):fo(e,t.child,n,r)}function Jg(t,e,n,r,i){n=n.render;var o=e.ref;return ro(e,i),r=qf(t,e,n,r,o,i),n=$f(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(Ie&&n&&xf(e),e.flags|=1,At(t,e,r,i),e.child)}function Zg(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!ep(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,U_(t,e,o,r,i)):(t=Vl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Fs,n(s,r)&&t.ref===e.ref)return Hn(t,e,i)}return e.flags|=1,t=Sr(o,r),t.ref=e.ref,t.return=e,e.child=t}function U_(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Fs(o,r)&&t.ref===e.ref)if(Nt=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Nt=!0);else return e.lanes=t.lanes,Hn(t,e,i)}return wd(t,e,n,r,i)}function F_(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Xi,Ut),Ut|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(Xi,Ut),Ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ve(Xi,Ut),Ut|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,ve(Xi,Ut),Ut|=r;return At(t,e,i,n),e.child}function j_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wd(t,e,n,r,i){var o=Dt(n)?ai:_t.current;return o=co(e,o),ro(e,i),n=qf(t,e,n,r,o,i),r=$f(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(Ie&&r&&xf(e),e.flags|=1,At(t,e,n,i),e.child)}function ey(t,e,n,r,i){if(Dt(n)){var o=!0;iu(e)}else o=!1;if(ro(e,i),e.stateNode===null)Nl(t,e),V_(e,n,r),vd(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Zt(c):(c=Dt(n)?ai:_t.current,c=co(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Gg(e,s,r,c),ar=!1;var m=e.memoizedState;s.state=m,uu(e,r,s,i),u=e.memoizedState,l!==r||m!==u||Ot.current||ar?(typeof d=="function"&&(yd(e,n,d,r),u=e.memoizedState),(l=ar||Kg(e,n,l,r,m,u,c))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),s.props=r,s.state=u,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,p_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:on(e.type,l),s.props=c,p=e.pendingProps,m=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=Zt(u):(u=Dt(n)?ai:_t.current,u=co(e,u));var b=n.getDerivedStateFromProps;(d=typeof b=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Gg(e,s,r,u),ar=!1,m=e.memoizedState,s.state=m,uu(e,r,s,i);var A=e.memoizedState;l!==p||m!==A||Ot.current||ar?(typeof b=="function"&&(yd(e,n,b,r),A=e.memoizedState),(c=ar||Kg(e,n,c,r,m,A,u)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,A,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,A,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),s.props=r,s.state=A,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Ed(t,e,n,r,o,i)}function Ed(t,e,n,r,i,o){j_(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Fg(e,n,!1),Hn(t,e,o);r=e.stateNode,QI.current=e;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=fo(e,t.child,null,o),e.child=fo(e,null,l,o)):At(t,e,l,o),e.memoizedState=r.state,i&&Fg(e,n,!0),e.child}function z_(t){var e=t.stateNode;e.pendingContext?Ug(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ug(t,e.context,!1),Ff(t,e.containerInfo)}function ty(t,e,n,r,i){return ho(),Of(i),e.flags|=256,At(t,e,n,r),e.child}var bd={dehydrated:null,treeContext:null,retryLane:0};function Td(t){return{baseLanes:t,cachePool:null,transitions:null}}function B_(t,e,n){var r=e.pendingProps,i=Ae.current,o=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ve(Ae,i&1),t===null)return md(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Qu(s,r,0,null),t=ni(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Td(n),e.memoizedState=bd,t):Kf(e,s));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return YI(t,e,s,r,l,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Sr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Sr(l,o):(o=ni(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Td(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=bd,r}return o=t.child,t=o.sibling,r=Sr(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Kf(t,e){return e=Qu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ul(t,e,n,r){return r!==null&&Of(r),fo(e,t.child,null,n),t=Kf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function YI(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Eh(Error(j(422))),ul(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Qu({mode:"visible",children:r.children},i,0,null),o=ni(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&fo(e,t.child,null,s),e.child.memoizedState=Td(s),e.memoizedState=bd,o);if(!(e.mode&1))return ul(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(j(419)),r=Eh(o,r,void 0),ul(t,e,s,r)}if(l=(s&t.childLanes)!==0,Nt||l){if(r=Ze,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Wn(t,i),cn(r,t,i,-1))}return Zf(),r=Eh(Error(j(421))),ul(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=uA.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Ft=Tr(i.nextSibling),$t=e,Ie=!0,an=null,t!==null&&(Gt[Qt++]=Vn,Gt[Qt++]=Ln,Gt[Qt++]=li,Vn=t.id,Ln=t.overflow,li=e),e=Kf(e,r.children),e.flags|=4096,e)}function ny(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),gd(t.return,e,n)}function bh(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function q_(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(At(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ny(t,n,e);else if(t.tag===19)ny(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&cu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),bh(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&cu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}bh(e,!0,n,null,o);break;case"together":bh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Hn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ci|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function XI(t,e,n){switch(e.tag){case 3:z_(e),ho();break;case 5:m_(e);break;case 1:Dt(e.type)&&iu(e);break;case 4:Ff(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ve(au,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?B_(t,e,n):(ve(Ae,Ae.current&1),t=Hn(t,e,n),t!==null?t.sibling:null);ve(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return q_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,F_(t,e,n)}return Hn(t,e,n)}var $_,Id,W_,H_;$_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Id=function(){};W_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Zr(wn.current);var o=null;switch(n){case"input":i=Hh(t,i),r=Hh(t,r),o=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),o=[];break;case"textarea":i=Qh(t,i),r=Qh(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=nu)}Xh(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ns.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&l[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ns.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&we("scroll",t),o||l===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};H_=function(t,e,n,r){n!==r&&(e.flags|=4)};function ts(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function JI(t,e,n){var r=e.pendingProps;switch(Nf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return Dt(e.type)&&ru(),ft(e),null;case 3:return r=e.stateNode,po(),be(Ot),be(_t),zf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,an!==null&&(Nd(an),an=null))),Id(t,e),ft(e),null;case 5:jf(e);var i=Zr($s.current);if(n=e.type,t!==null&&e.stateNode!=null)W_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return ft(e),null}if(t=Zr(wn.current),al(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[gn]=e,r[Bs]=o,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<ls.length;i++)we(ls[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":hg(r,o),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},we("invalid",r);break;case"textarea":fg(r,o),we("invalid",r)}Xh(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&sl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&sl(r.textContent,l,t),i=["children",""+l]):Ns.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&we("scroll",r)}switch(n){case"input":Ja(r),dg(r,o,!0);break;case"textarea":Ja(r),pg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=nu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=w0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[gn]=e,t[Bs]=r,$_(t,e,!1,!1),e.stateNode=t;e:{switch(s=Jh(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<ls.length;i++)we(ls[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":hg(t,r),i=Hh(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),we("invalid",t);break;case"textarea":fg(t,r),i=Qh(t,r),we("invalid",t);break;default:i=r}Xh(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?T0(t,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&E0(t,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Os(t,u):typeof u=="number"&&Os(t,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ns.hasOwnProperty(o)?u!=null&&o==="onScroll"&&we("scroll",t):u!=null&&yf(t,o,u,s))}switch(n){case"input":Ja(t),dg(t,r,!1);break;case"textarea":Ja(t),pg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xr(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Zi(t,!!r.multiple,o,!1):r.defaultValue!=null&&Zi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=nu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ft(e),null;case 6:if(t&&e.stateNode!=null)H_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Zr($s.current),Zr(wn.current),al(e)){if(r=e.stateNode,n=e.memoizedProps,r[gn]=e,(o=r.nodeValue!==n)&&(t=$t,t!==null))switch(t.tag){case 3:sl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sl(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gn]=e,e.stateNode=r}return ft(e),null;case 13:if(be(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Ft!==null&&e.mode&1&&!(e.flags&128))c_(),ho(),e.flags|=98560,o=!1;else if(o=al(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(j(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[gn]=e}else ho(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ft(e),o=!1}else an!==null&&(Nd(an),an=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?Ke===0&&(Ke=3):Zf())),e.updateQueue!==null&&(e.flags|=4),ft(e),null);case 4:return po(),Id(t,e),t===null&&js(e.stateNode.containerInfo),ft(e),null;case 10:return Lf(e.type._context),ft(e),null;case 17:return Dt(e.type)&&ru(),ft(e),null;case 19:if(be(Ae),o=e.memoizedState,o===null)return ft(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)ts(o,!1);else{if(Ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=cu(t),s!==null){for(e.flags|=128,ts(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(Ae,Ae.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ue()>go&&(e.flags|=128,r=!0,ts(o,!1),e.lanes=4194304)}else{if(!r)if(t=cu(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ts(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ie)return ft(e),null}else 2*Ue()-o.renderingStartTime>go&&n!==1073741824&&(e.flags|=128,r=!0,ts(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ue(),e.sibling=null,n=Ae.current,ve(Ae,r?n&1|2:n&1),e):(ft(e),null);case 22:case 23:return Jf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ut&1073741824&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function ZI(t,e){switch(Nf(e),e.tag){case 1:return Dt(e.type)&&ru(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return po(),be(Ot),be(_t),zf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return jf(e),null;case 13:if(be(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));ho()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return be(Ae),null;case 4:return po(),null;case 10:return Lf(e.type._context),null;case 22:case 23:return Jf(),null;case 24:return null;default:return null}}var cl=!1,gt=!1,eA=typeof WeakSet=="function"?WeakSet:Set,q=null;function Yi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function Ad(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var ry=!1;function tA(t,e){if(ld=Zl,t=X0(),Cf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var b;p!==n||i!==0&&p.nodeType!==3||(l=s+i),p!==o||r!==0&&p.nodeType!==3||(u=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(b=p.firstChild)!==null;)m=p,p=b;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=s),m===o&&++d===r&&(u=s),(b=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=b}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ud={focusedElem:t,selectionRange:n},Zl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var w=A.memoizedProps,P=A.memoizedState,v=e.stateNode,y=v.getSnapshotBeforeUpdate(e.elementType===e.type?w:on(e.type,w),P);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(x){Ne(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return A=ry,ry=!1,A}function bs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ad(e,n,o)}i=i.next}while(i!==r)}}function Ku(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function kd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function K_(t){var e=t.alternate;e!==null&&(t.alternate=null,K_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gn],delete e[Bs],delete e[dd],delete e[MI],delete e[UI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function G_(t){return t.tag===5||t.tag===3||t.tag===4}function iy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||G_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nu));else if(r!==4&&(t=t.child,t!==null))for(Sd(t,e,n),t=t.sibling;t!==null;)Sd(t,e,n),t=t.sibling}function Pd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Pd(t,e,n),t=t.sibling;t!==null;)Pd(t,e,n),t=t.sibling}var nt=null,sn=!1;function rr(t,e,n){for(n=n.child;n!==null;)Q_(t,e,n),n=n.sibling}function Q_(t,e,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(Fu,n)}catch{}switch(n.tag){case 5:gt||Yi(n,e);case 6:var r=nt,i=sn;nt=null,rr(t,e,n),nt=r,sn=i,nt!==null&&(sn?(t=nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(sn?(t=nt,n=n.stateNode,t.nodeType===8?mh(t.parentNode,n):t.nodeType===1&&mh(t,n),Ms(t)):mh(nt,n.stateNode));break;case 4:r=nt,i=sn,nt=n.stateNode.containerInfo,sn=!0,rr(t,e,n),nt=r,sn=i;break;case 0:case 11:case 14:case 15:if(!gt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ad(n,e,s),i=i.next}while(i!==r)}rr(t,e,n);break;case 1:if(!gt&&(Yi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ne(n,e,l)}rr(t,e,n);break;case 21:rr(t,e,n);break;case 22:n.mode&1?(gt=(r=gt)||n.memoizedState!==null,rr(t,e,n),gt=r):rr(t,e,n);break;default:rr(t,e,n)}}function oy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new eA),e.forEach(function(r){var i=cA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:nt=l.stateNode,sn=!1;break e;case 3:nt=l.stateNode.containerInfo,sn=!0;break e;case 4:nt=l.stateNode.containerInfo,sn=!0;break e}l=l.return}if(nt===null)throw Error(j(160));Q_(o,s,i),nt=null,sn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ne(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Y_(e,t),e=e.sibling}function Y_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(nn(e,t),pn(t),r&4){try{bs(3,t,t.return),Ku(3,t)}catch(w){Ne(t,t.return,w)}try{bs(5,t,t.return)}catch(w){Ne(t,t.return,w)}}break;case 1:nn(e,t),pn(t),r&512&&n!==null&&Yi(n,n.return);break;case 5:if(nn(e,t),pn(t),r&512&&n!==null&&Yi(n,n.return),t.flags&32){var i=t.stateNode;try{Os(i,"")}catch(w){Ne(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&v0(i,o),Jh(l,s);var c=Jh(l,o);for(s=0;s<u.length;s+=2){var d=u[s],p=u[s+1];d==="style"?T0(i,p):d==="dangerouslySetInnerHTML"?E0(i,p):d==="children"?Os(i,p):yf(i,d,p,c)}switch(l){case"input":Kh(i,o);break;case"textarea":_0(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var b=o.value;b!=null?Zi(i,!!o.multiple,b,!1):m!==!!o.multiple&&(o.defaultValue!=null?Zi(i,!!o.multiple,o.defaultValue,!0):Zi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Bs]=o}catch(w){Ne(t,t.return,w)}}break;case 6:if(nn(e,t),pn(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(w){Ne(t,t.return,w)}}break;case 3:if(nn(e,t),pn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ms(e.containerInfo)}catch(w){Ne(t,t.return,w)}break;case 4:nn(e,t),pn(t);break;case 13:nn(e,t),pn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Yf=Ue())),r&4&&oy(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(gt=(c=gt)||d,nn(e,t),gt=c):nn(e,t),pn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(q=t,d=t.child;d!==null;){for(p=q=d;q!==null;){switch(m=q,b=m.child,m.tag){case 0:case 11:case 14:case 15:bs(4,m,m.return);break;case 1:Yi(m,m.return);var A=m.stateNode;if(typeof A.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(w){Ne(r,n,w)}}break;case 5:Yi(m,m.return);break;case 22:if(m.memoizedState!==null){ay(p);continue}}b!==null?(b.return=m,q=b):ay(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,u=p.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=b0("display",s))}catch(w){Ne(t,t.return,w)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(w){Ne(t,t.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:nn(e,t),pn(t),r&4&&oy(t);break;case 21:break;default:nn(e,t),pn(t)}}function pn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(G_(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Os(i,""),r.flags&=-33);var o=iy(t);Pd(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=iy(t);Sd(t,l,s);break;default:throw Error(j(161))}}catch(u){Ne(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nA(t,e,n){q=t,X_(t)}function X_(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||cl;if(!s){var l=i.alternate,u=l!==null&&l.memoizedState!==null||gt;l=cl;var c=gt;if(cl=s,(gt=u)&&!c)for(q=i;q!==null;)s=q,u=s.child,s.tag===22&&s.memoizedState!==null?ly(i):u!==null?(u.return=s,q=u):ly(i);for(;o!==null;)q=o,X_(o),o=o.sibling;q=i,cl=l,gt=c}sy(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,q=o):sy(t)}}function sy(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:gt||Ku(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!gt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:on(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&$g(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$g(e,s,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Ms(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}gt||e.flags&512&&kd(e)}catch(m){Ne(e,e.return,m)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function ay(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function ly(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ku(4,e)}catch(u){Ne(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ne(e,i,u)}}var o=e.return;try{kd(e)}catch(u){Ne(e,o,u)}break;case 5:var s=e.return;try{kd(e)}catch(u){Ne(e,s,u)}}}catch(u){Ne(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var rA=Math.ceil,fu=Xn.ReactCurrentDispatcher,Gf=Xn.ReactCurrentOwner,Xt=Xn.ReactCurrentBatchConfig,ce=0,Ze=null,qe=null,ot=0,Ut=0,Xi=Fr(0),Ke=0,Gs=null,ci=0,Gu=0,Qf=0,Ts=null,Ct=null,Yf=0,go=1/0,Nn=null,pu=!1,Rd=null,Ar=null,hl=!1,gr=null,mu=0,Is=0,Cd=null,Ol=-1,Dl=0;function St(){return ce&6?Ue():Ol!==-1?Ol:Ol=Ue()}function kr(t){return t.mode&1?ce&2&&ot!==0?ot&-ot:jI.transition!==null?(Dl===0&&(Dl=V0()),Dl):(t=me,t!==0||(t=window.event,t=t===void 0?16:B0(t.type)),t):1}function cn(t,e,n,r){if(50<Is)throw Is=0,Cd=null,Error(j(185));ca(t,n,r),(!(ce&2)||t!==Ze)&&(t===Ze&&(!(ce&2)&&(Gu|=n),Ke===4&&ur(t,ot)),Vt(t,r),n===1&&ce===0&&!(e.mode&1)&&(go=Ue()+500,$u&&jr()))}function Vt(t,e){var n=t.callbackNode;jT(t,e);var r=Jl(t,t===Ze?ot:0);if(r===0)n!==null&&yg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&yg(n),e===1)t.tag===0?FI(uy.bind(null,t)):a_(uy.bind(null,t)),VI(function(){!(ce&6)&&jr()}),n=null;else{switch(L0(r)){case 1:n=bf;break;case 4:n=O0;break;case 16:n=Xl;break;case 536870912:n=D0;break;default:n=Xl}n=o1(n,J_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function J_(t,e){if(Ol=-1,Dl=0,ce&6)throw Error(j(327));var n=t.callbackNode;if(io()&&t.callbackNode!==n)return null;var r=Jl(t,t===Ze?ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=gu(t,r);else{e=r;var i=ce;ce|=2;var o=e1();(Ze!==t||ot!==e)&&(Nn=null,go=Ue()+500,ti(t,e));do try{sA();break}catch(l){Z_(t,l)}while(!0);Vf(),fu.current=o,ce=i,qe!==null?e=0:(Ze=null,ot=0,e=Ke)}if(e!==0){if(e===2&&(i=rd(t),i!==0&&(r=i,e=xd(t,i))),e===1)throw n=Gs,ti(t,0),ur(t,r),Vt(t,Ue()),n;if(e===6)ur(t,r);else{if(i=t.current.alternate,!(r&30)&&!iA(i)&&(e=gu(t,r),e===2&&(o=rd(t),o!==0&&(r=o,e=xd(t,o))),e===1))throw n=Gs,ti(t,0),ur(t,r),Vt(t,Ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Qr(t,Ct,Nn);break;case 3:if(ur(t,r),(r&130023424)===r&&(e=Yf+500-Ue(),10<e)){if(Jl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){St(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=hd(Qr.bind(null,t,Ct,Nn),e);break}Qr(t,Ct,Nn);break;case 4:if(ur(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-un(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rA(r/1960))-r,10<r){t.timeoutHandle=hd(Qr.bind(null,t,Ct,Nn),r);break}Qr(t,Ct,Nn);break;case 5:Qr(t,Ct,Nn);break;default:throw Error(j(329))}}}return Vt(t,Ue()),t.callbackNode===n?J_.bind(null,t):null}function xd(t,e){var n=Ts;return t.current.memoizedState.isDehydrated&&(ti(t,e).flags|=256),t=gu(t,e),t!==2&&(e=Ct,Ct=n,e!==null&&Nd(e)),t}function Nd(t){Ct===null?Ct=t:Ct.push.apply(Ct,t)}function iA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!hn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(t,e){for(e&=~Qf,e&=~Gu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-un(e),r=1<<n;t[n]=-1,e&=~r}}function uy(t){if(ce&6)throw Error(j(327));io();var e=Jl(t,0);if(!(e&1))return Vt(t,Ue()),null;var n=gu(t,e);if(t.tag!==0&&n===2){var r=rd(t);r!==0&&(e=r,n=xd(t,r))}if(n===1)throw n=Gs,ti(t,0),ur(t,e),Vt(t,Ue()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qr(t,Ct,Nn),Vt(t,Ue()),null}function Xf(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&(go=Ue()+500,$u&&jr())}}function hi(t){gr!==null&&gr.tag===0&&!(ce&6)&&io();var e=ce;ce|=1;var n=Xt.transition,r=me;try{if(Xt.transition=null,me=1,t)return t()}finally{me=r,Xt.transition=n,ce=e,!(ce&6)&&jr()}}function Jf(){Ut=Xi.current,be(Xi)}function ti(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,DI(n)),qe!==null)for(n=qe.return;n!==null;){var r=n;switch(Nf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ru();break;case 3:po(),be(Ot),be(_t),zf();break;case 5:jf(r);break;case 4:po();break;case 13:be(Ae);break;case 19:be(Ae);break;case 10:Lf(r.type._context);break;case 22:case 23:Jf()}n=n.return}if(Ze=t,qe=t=Sr(t.current,null),ot=Ut=e,Ke=0,Gs=null,Qf=Gu=ci=0,Ct=Ts=null,Jr!==null){for(e=0;e<Jr.length;e++)if(n=Jr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Jr=null}return t}function Z_(t,e){do{var n=qe;try{if(Vf(),Cl.current=du,hu){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hu=!1}if(ui=0,Je=He=ke=null,Es=!1,Ws=0,Gf.current=null,n===null||n.return===null){Ke=1,Gs=e,qe=null;break}e:{var o=t,s=n.return,l=n,u=e;if(e=ot,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var b=Yg(s);if(b!==null){b.flags&=-257,Xg(b,s,l,o,e),b.mode&1&&Qg(o,c,e),e=b,u=c;var A=e.updateQueue;if(A===null){var w=new Set;w.add(u),e.updateQueue=w}else A.add(u);break e}else{if(!(e&1)){Qg(o,c,e),Zf();break e}u=Error(j(426))}}else if(Ie&&l.mode&1){var P=Yg(s);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Xg(P,s,l,o,e),Of(mo(u,l));break e}}o=u=mo(u,l),Ke!==4&&(Ke=2),Ts===null?Ts=[o]:Ts.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var v=L_(o,u,e);qg(o,v);break e;case 1:l=u;var y=o.type,E=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Ar===null||!Ar.has(E)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=M_(o,l,e);qg(o,x);break e}}o=o.return}while(o!==null)}n1(n)}catch(O){e=O,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(!0)}function e1(){var t=fu.current;return fu.current=du,t===null?du:t}function Zf(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),Ze===null||!(ci&268435455)&&!(Gu&268435455)||ur(Ze,ot)}function gu(t,e){var n=ce;ce|=2;var r=e1();(Ze!==t||ot!==e)&&(Nn=null,ti(t,e));do try{oA();break}catch(i){Z_(t,i)}while(!0);if(Vf(),ce=n,fu.current=r,qe!==null)throw Error(j(261));return Ze=null,ot=0,Ke}function oA(){for(;qe!==null;)t1(qe)}function sA(){for(;qe!==null&&!xT();)t1(qe)}function t1(t){var e=i1(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,e===null?n1(t):qe=e,Gf.current=null}function n1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ZI(n,e),n!==null){n.flags&=32767,qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ke=6,qe=null;return}}else if(n=JI(n,e,Ut),n!==null){qe=n;return}if(e=e.sibling,e!==null){qe=e;return}qe=e=t}while(e!==null);Ke===0&&(Ke=5)}function Qr(t,e,n){var r=me,i=Xt.transition;try{Xt.transition=null,me=1,aA(t,e,n,r)}finally{Xt.transition=i,me=r}return null}function aA(t,e,n,r){do io();while(gr!==null);if(ce&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(zT(t,o),t===Ze&&(qe=Ze=null,ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hl||(hl=!0,o1(Xl,function(){return io(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Xt.transition,Xt.transition=null;var s=me;me=1;var l=ce;ce|=4,Gf.current=null,tA(t,n),Y_(n,t),SI(ud),Zl=!!ld,ud=ld=null,t.current=n,nA(n),NT(),ce=l,me=s,Xt.transition=o}else t.current=n;if(hl&&(hl=!1,gr=t,mu=i),o=t.pendingLanes,o===0&&(Ar=null),VT(n.stateNode),Vt(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pu)throw pu=!1,t=Rd,Rd=null,t;return mu&1&&t.tag!==0&&io(),o=t.pendingLanes,o&1?t===Cd?Is++:(Is=0,Cd=t):Is=0,jr(),null}function io(){if(gr!==null){var t=L0(mu),e=Xt.transition,n=me;try{if(Xt.transition=null,me=16>t?16:t,gr===null)var r=!1;else{if(t=gr,gr=null,mu=0,ce&6)throw Error(j(331));var i=ce;for(ce|=4,q=t.current;q!==null;){var o=q,s=o.child;if(q.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:bs(8,d,o)}var p=d.child;if(p!==null)p.return=d,q=p;else for(;q!==null;){d=q;var m=d.sibling,b=d.return;if(K_(d),d===c){q=null;break}if(m!==null){m.return=b,q=m;break}q=b}}}var A=o.alternate;if(A!==null){var w=A.child;if(w!==null){A.child=null;do{var P=w.sibling;w.sibling=null,w=P}while(w!==null)}}q=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,q=s;else e:for(;q!==null;){if(o=q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:bs(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,q=v;break e}q=o.return}}var y=t.current;for(q=y;q!==null;){s=q;var E=s.child;if(s.subtreeFlags&2064&&E!==null)E.return=s,q=E;else e:for(s=y;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ku(9,l)}}catch(O){Ne(l,l.return,O)}if(l===s){q=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,q=x;break e}q=l.return}}if(ce=i,jr(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(Fu,t)}catch{}r=!0}return r}finally{me=n,Xt.transition=e}}return!1}function cy(t,e,n){e=mo(n,e),e=L_(t,e,1),t=Ir(t,e,1),e=St(),t!==null&&(ca(t,1,e),Vt(t,e))}function Ne(t,e,n){if(t.tag===3)cy(t,t,n);else for(;e!==null;){if(e.tag===3){cy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ar===null||!Ar.has(r))){t=mo(n,t),t=M_(e,t,1),e=Ir(e,t,1),t=St(),e!==null&&(ca(e,1,t),Vt(e,t));break}}e=e.return}}function lA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=St(),t.pingedLanes|=t.suspendedLanes&n,Ze===t&&(ot&n)===n&&(Ke===4||Ke===3&&(ot&130023424)===ot&&500>Ue()-Yf?ti(t,0):Qf|=n),Vt(t,e)}function r1(t,e){e===0&&(t.mode&1?(e=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):e=1);var n=St();t=Wn(t,e),t!==null&&(ca(t,e,n),Vt(t,n))}function uA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),r1(t,n)}function cA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),r1(t,n)}var i1;i1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ot.current)Nt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Nt=!1,XI(t,e,n);Nt=!!(t.flags&131072)}else Nt=!1,Ie&&e.flags&1048576&&l_(e,su,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Nl(t,e),t=e.pendingProps;var i=co(e,_t.current);ro(e,n),i=qf(null,e,r,t,i,n);var o=$f();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Dt(r)?(o=!0,iu(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Uf(e),i.updater=Hu,e.stateNode=i,i._reactInternals=e,vd(e,r,t,n),e=Ed(null,e,r,!0,o,n)):(e.tag=0,Ie&&o&&xf(e),At(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Nl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=dA(r),t=on(r,t),i){case 0:e=wd(null,e,r,t,n);break e;case 1:e=ey(null,e,r,t,n);break e;case 11:e=Jg(null,e,r,t,n);break e;case 14:e=Zg(null,e,r,on(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:on(r,i),wd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:on(r,i),ey(t,e,r,i,n);case 3:e:{if(z_(e),t===null)throw Error(j(387));r=e.pendingProps,o=e.memoizedState,i=o.element,p_(t,e),uu(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=mo(Error(j(423)),e),e=ty(t,e,r,n,i);break e}else if(r!==i){i=mo(Error(j(424)),e),e=ty(t,e,r,n,i);break e}else for(Ft=Tr(e.stateNode.containerInfo.firstChild),$t=e,Ie=!0,an=null,n=d_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ho(),r===i){e=Hn(t,e,n);break e}At(t,e,r,n)}e=e.child}return e;case 5:return m_(e),t===null&&md(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,cd(r,i)?s=null:o!==null&&cd(r,o)&&(e.flags|=32),j_(t,e),At(t,e,s,n),e.child;case 6:return t===null&&md(e),null;case 13:return B_(t,e,n);case 4:return Ff(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=fo(e,null,r,n):At(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:on(r,i),Jg(t,e,r,i,n);case 7:return At(t,e,e.pendingProps,n),e.child;case 8:return At(t,e,e.pendingProps.children,n),e.child;case 12:return At(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,ve(au,r._currentValue),r._currentValue=s,o!==null)if(hn(o.value,s)){if(o.children===i.children&&!Ot.current){e=Hn(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=jn(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),gd(o.return,n,e),l.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(j(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),gd(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}At(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ro(e,n),i=Zt(i),r=r(i),e.flags|=1,At(t,e,r,n),e.child;case 14:return r=e.type,i=on(r,e.pendingProps),i=on(r.type,i),Zg(t,e,r,i,n);case 15:return U_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:on(r,i),Nl(t,e),e.tag=1,Dt(r)?(t=!0,iu(e)):t=!1,ro(e,n),V_(e,r,i),vd(e,r,i,n),Ed(null,e,r,!0,t,n);case 19:return q_(t,e,n);case 22:return F_(t,e,n)}throw Error(j(156,e.tag))};function o1(t,e){return N0(t,e)}function hA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(t,e,n,r){return new hA(t,e,n,r)}function ep(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dA(t){if(typeof t=="function")return ep(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_f)return 11;if(t===wf)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=Yt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Vl(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")ep(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case zi:return ni(n.children,i,o,e);case vf:s=8,i|=8;break;case Bh:return t=Yt(12,n,e,i|2),t.elementType=Bh,t.lanes=o,t;case qh:return t=Yt(13,n,e,i),t.elementType=qh,t.lanes=o,t;case $h:return t=Yt(19,n,e,i),t.elementType=$h,t.lanes=o,t;case m0:return Qu(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case f0:s=10;break e;case p0:s=9;break e;case _f:s=11;break e;case wf:s=14;break e;case sr:s=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Yt(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function ni(t,e,n,r){return t=Yt(7,t,r,e),t.lanes=n,t}function Qu(t,e,n,r){return t=Yt(22,t,r,e),t.elementType=m0,t.lanes=n,t.stateNode={isHidden:!1},t}function Th(t,e,n){return t=Yt(6,t,null,e),t.lanes=n,t}function Ih(t,e,n){return e=Yt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ih(0),this.expirationTimes=ih(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ih(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tp(t,e,n,r,i,o,s,l,u){return t=new fA(t,e,n,l,u),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Yt(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uf(o),t}function pA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ji,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function s1(t){if(!t)return Nr;t=t._reactInternals;e:{if(Ei(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Dt(n))return s_(t,n,e)}return e}function a1(t,e,n,r,i,o,s,l,u){return t=tp(n,r,!0,t,i,o,s,l,u),t.context=s1(null),n=t.current,r=St(),i=kr(n),o=jn(r,i),o.callback=e??null,Ir(n,o,i),t.current.lanes=i,ca(t,i,r),Vt(t,r),t}function Yu(t,e,n,r){var i=e.current,o=St(),s=kr(i);return n=s1(n),e.context===null?e.context=n:e.pendingContext=n,e=jn(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ir(i,e,s),t!==null&&(cn(t,i,s,o),Rl(t,i,s)),s}function yu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function np(t,e){hy(t,e),(t=t.alternate)&&hy(t,e)}function mA(){return null}var l1=typeof reportError=="function"?reportError:function(t){console.error(t)};function rp(t){this._internalRoot=t}Xu.prototype.render=rp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Yu(t,e,null,null)};Xu.prototype.unmount=rp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hi(function(){Yu(null,t,null,null)}),e[$n]=null}};function Xu(t){this._internalRoot=t}Xu.prototype.unstable_scheduleHydration=function(t){if(t){var e=F0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<lr.length&&e!==0&&e<lr[n].priority;n++);lr.splice(n,0,t),n===0&&z0(t)}};function ip(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ju(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dy(){}function gA(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=yu(s);o.call(c)}}var s=a1(e,r,t,0,null,!1,!1,"",dy);return t._reactRootContainer=s,t[$n]=s.current,js(t.nodeType===8?t.parentNode:t),hi(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=yu(u);l.call(c)}}var u=tp(t,0,!1,null,null,!1,!1,"",dy);return t._reactRootContainer=u,t[$n]=u.current,js(t.nodeType===8?t.parentNode:t),hi(function(){Yu(e,u,n,r)}),u}function Zu(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var u=yu(s);l.call(u)}}Yu(e,s,t,i)}else s=gA(n,e,t,i,r);return yu(s)}M0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=as(e.pendingLanes);n!==0&&(Tf(e,n|1),Vt(e,Ue()),!(ce&6)&&(go=Ue()+500,jr()))}break;case 13:hi(function(){var r=Wn(t,1);if(r!==null){var i=St();cn(r,t,1,i)}}),np(t,1)}};If=function(t){if(t.tag===13){var e=Wn(t,134217728);if(e!==null){var n=St();cn(e,t,134217728,n)}np(t,134217728)}};U0=function(t){if(t.tag===13){var e=kr(t),n=Wn(t,e);if(n!==null){var r=St();cn(n,t,e,r)}np(t,e)}};F0=function(){return me};j0=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};ed=function(t,e,n){switch(e){case"input":if(Kh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=qu(r);if(!i)throw Error(j(90));y0(r),Kh(r,i)}}}break;case"textarea":_0(t,n);break;case"select":e=n.value,e!=null&&Zi(t,!!n.multiple,e,!1)}};k0=Xf;S0=hi;var yA={usingClientEntryPoint:!1,Events:[da,Wi,qu,I0,A0,Xf]},ns={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vA={bundleType:ns.bundleType,version:ns.version,rendererPackageName:ns.rendererPackageName,rendererConfig:ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=C0(t),t===null?null:t.stateNode},findFiberByHostInstance:ns.findFiberByHostInstance||mA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{Fu=dl.inject(vA),_n=dl}catch{}}Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yA;Ht.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ip(e))throw Error(j(200));return pA(t,e,null,n)};Ht.createRoot=function(t,e){if(!ip(t))throw Error(j(299));var n=!1,r="",i=l1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=tp(t,1,!1,null,null,n,!1,r,i),t[$n]=e.current,js(t.nodeType===8?t.parentNode:t),new rp(e)};Ht.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=C0(e),t=t===null?null:t.stateNode,t};Ht.flushSync=function(t){return hi(t)};Ht.hydrate=function(t,e,n){if(!Ju(e))throw Error(j(200));return Zu(null,t,e,!0,n)};Ht.hydrateRoot=function(t,e,n){if(!ip(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=l1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=a1(e,null,t,1,n??null,i,!1,o,s),t[$n]=e.current,js(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Xu(e)};Ht.render=function(t,e,n){if(!Ju(e))throw Error(j(200));return Zu(null,t,e,!1,n)};Ht.unmountComponentAtNode=function(t){if(!Ju(t))throw Error(j(40));return t._reactRootContainer?(hi(function(){Zu(null,null,t,!1,function(){t._reactRootContainer=null,t[$n]=null})}),!0):!1};Ht.unstable_batchedUpdates=Xf;Ht.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ju(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Zu(t,e,n,!1,r)};Ht.version="18.3.1-next-f1338f8080-20240426";function u1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u1)}catch(t){console.error(t)}}u1(),u0.exports=Ht;var _A=u0.exports,c1,fy=_A;c1=fy.createRoot,fy.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qs(){return Qs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qs.apply(this,arguments)}var yr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(yr||(yr={}));const py="popstate";function wA(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:l}=r.location;return Od("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:d1(i)}return bA(e,n,null,t)}function Ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function h1(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function EA(){return Math.random().toString(36).substr(2,8)}function my(t,e){return{usr:t.state,key:t.key,idx:e}}function Od(t,e,n,r){return n===void 0&&(n=null),Qs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Po(e):e,{state:n,key:e&&e.key||r||EA()})}function d1(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Po(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function bA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=yr.Pop,u=null,c=d();c==null&&(c=0,s.replaceState(Qs({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function p(){l=yr.Pop;let P=d(),v=P==null?null:P-c;c=P,u&&u({action:l,location:w.location,delta:v})}function m(P,v){l=yr.Push;let y=Od(w.location,P,v);c=d()+1;let E=my(y,c),x=w.createHref(y);try{s.pushState(E,"",x)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;i.location.assign(x)}o&&u&&u({action:l,location:w.location,delta:1})}function b(P,v){l=yr.Replace;let y=Od(w.location,P,v);c=d();let E=my(y,c),x=w.createHref(y);s.replaceState(E,"",x),o&&u&&u({action:l,location:w.location,delta:0})}function A(P){let v=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof P=="string"?P:d1(P);return y=y.replace(/ $/,"%20"),Ge(v,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,v)}let w={get action(){return l},get location(){return t(i,s)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(py,p),u=P,()=>{i.removeEventListener(py,p),u=null}},createHref(P){return e(i,P)},createURL:A,encodeLocation(P){let v=A(P);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:b,go(P){return s.go(P)}};return w}var gy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(gy||(gy={}));function TA(t,e,n){return n===void 0&&(n="/"),IA(t,e,n,!1)}function IA(t,e,n,r){let i=typeof e=="string"?Po(e):e,o=m1(i.pathname||"/",n);if(o==null)return null;let s=f1(t);AA(s);let l=null;for(let u=0;l==null&&u<s.length;++u){let c=LA(o);l=DA(s[u],c,r)}return l}function f1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let u={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};u.relativePath.startsWith("/")&&(Ge(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=ri([r,u.relativePath]),d=n.concat(u);o.children&&o.children.length>0&&(Ge(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),f1(o.children,e,d,c)),!(o.path==null&&!o.index)&&e.push({path:c,score:NA(c,o.index),routesMeta:d})};return t.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let u of p1(o.path))i(o,s,u)}),e}function p1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=p1(r.join("/")),l=[];return l.push(...s.map(u=>u===""?o:[o,u].join("/"))),i&&l.push(...s),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function AA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:OA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const kA=/^:[\w-]+$/,SA=3,PA=2,RA=1,CA=10,xA=-2,yy=t=>t==="*";function NA(t,e){let n=t.split("/"),r=n.length;return n.some(yy)&&(r+=xA),e&&(r+=PA),n.filter(i=>!yy(i)).reduce((i,o)=>i+(kA.test(o)?SA:o===""?RA:CA),r)}function OA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function DA(t,e,n){let{routesMeta:r}=t,i={},o="/",s=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=o==="/"?e:e.slice(o.length)||"/",p=vy({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=vy({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),s.push({params:i,pathname:ri([o,p.pathname]),pathnameBase:BA(ri([o,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(o=ri([o,p.pathnameBase]))}return s}function vy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=VA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:b}=d;if(m==="*"){let w=l[p]||"";s=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const A=l[p];return b&&!A?c[m]=void 0:c[m]=(A||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:t}}function VA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),h1(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function LA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return h1(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function m1(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function MA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Po(t):t;return{pathname:n?n.startsWith("/")?n:UA(n,e):e,search:qA(r),hash:$A(i)}}function UA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ah(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function FA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function jA(t,e){let n=FA(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function zA(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Po(t):(i=Qs({},t),Ge(!i.pathname||!i.pathname.includes("?"),Ah("?","pathname","search",i)),Ge(!i.pathname||!i.pathname.includes("#"),Ah("#","pathname","hash",i)),Ge(!i.search||!i.search.includes("#"),Ah("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let p=e.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=MA(i,l),c=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const ri=t=>t.join("/").replace(/\/\/+/g,"/"),BA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),qA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,$A=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function WA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const g1=["post","put","patch","delete"];new Set(g1);const HA=["get",...g1];new Set(HA);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ys(){return Ys=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ys.apply(this,arguments)}const op=L.createContext(null),KA=L.createContext(null),ec=L.createContext(null),tc=L.createContext(null),Ro=L.createContext({outlet:null,matches:[],isDataRoute:!1}),y1=L.createContext(null);function nc(){return L.useContext(tc)!=null}function v1(){return nc()||Ge(!1),L.useContext(tc).location}function _1(t){L.useContext(ec).static||L.useLayoutEffect(t)}function rc(){let{isDataRoute:t}=L.useContext(Ro);return t?sk():GA()}function GA(){nc()||Ge(!1);let t=L.useContext(op),{basename:e,future:n,navigator:r}=L.useContext(ec),{matches:i}=L.useContext(Ro),{pathname:o}=v1(),s=JSON.stringify(jA(i,n.v7_relativeSplatPath)),l=L.useRef(!1);return _1(()=>{l.current=!0}),L.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=zA(c,JSON.parse(s),o,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:ri([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,s,o,t])}function QA(t,e){return YA(t,e)}function YA(t,e,n,r){nc()||Ge(!1);let{navigator:i}=L.useContext(ec),{matches:o}=L.useContext(Ro),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=v1(),d;if(e){var p;let P=typeof e=="string"?Po(e):e;u==="/"||(p=P.pathname)!=null&&p.startsWith(u)||Ge(!1),d=P}else d=c;let m=d.pathname||"/",b=m;if(u!=="/"){let P=u.replace(/^\//,"").split("/");b="/"+m.replace(/^\//,"").split("/").slice(P.length).join("/")}let A=TA(t,{pathname:b}),w=tk(A&&A.map(P=>Object.assign({},P,{params:Object.assign({},l,P.params),pathname:ri([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:ri([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),o,n,r);return e&&w?L.createElement(tc.Provider,{value:{location:Ys({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:yr.Pop}},w):w}function XA(){let t=ok(),e=WA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:i},n):null,null)}const JA=L.createElement(XA,null);class ZA extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?L.createElement(Ro.Provider,{value:this.props.routeContext},L.createElement(y1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ek(t){let{routeContext:e,match:n,children:r}=t,i=L.useContext(op);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(Ro.Provider,{value:e},r)}function tk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=s.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Ge(!1),s=s.slice(0,Math.min(s.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let p=s[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:b}=n,A=p.route.loader&&m[p.route.id]===void 0&&(!b||b[p.route.id]===void 0);if(p.route.lazy||A){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,p,m)=>{let b,A=!1,w=null,P=null;n&&(b=l&&p.route.id?l[p.route.id]:void 0,w=p.route.errorElement||JA,u&&(c<0&&m===0?(A=!0,P=null):c===m&&(A=!0,P=p.route.hydrateFallbackElement||null)));let v=e.concat(s.slice(0,m+1)),y=()=>{let E;return b?E=w:A?E=P:p.route.Component?E=L.createElement(p.route.Component,null):p.route.element?E=p.route.element:E=d,L.createElement(ek,{match:p,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:E})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?L.createElement(ZA,{location:n.location,revalidation:n.revalidation,component:w,error:b,children:y(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):y()},null)}var w1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(w1||{}),vu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(vu||{});function nk(t){let e=L.useContext(op);return e||Ge(!1),e}function rk(t){let e=L.useContext(KA);return e||Ge(!1),e}function ik(t){let e=L.useContext(Ro);return e||Ge(!1),e}function E1(t){let e=ik(),n=e.matches[e.matches.length-1];return n.route.id||Ge(!1),n.route.id}function ok(){var t;let e=L.useContext(y1),n=rk(vu.UseRouteError),r=E1(vu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function sk(){let{router:t}=nk(w1.UseNavigateStable),e=E1(vu.UseNavigateStable),n=L.useRef(!1);return _1(()=>{n.current=!0}),L.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ys({fromRouteId:e},o)))},[t,e])}function Ll(t){Ge(!1)}function ak(t){let{basename:e="/",children:n=null,location:r,navigationType:i=yr.Pop,navigator:o,static:s=!1,future:l}=t;nc()&&Ge(!1);let u=e.replace(/^\/*/,"/"),c=L.useMemo(()=>({basename:u,navigator:o,static:s,future:Ys({v7_relativeSplatPath:!1},l)}),[u,l,o,s]);typeof r=="string"&&(r=Po(r));let{pathname:d="/",search:p="",hash:m="",state:b=null,key:A="default"}=r,w=L.useMemo(()=>{let P=m1(d,u);return P==null?null:{location:{pathname:P,search:p,hash:m,state:b,key:A},navigationType:i}},[u,d,p,m,b,A,i]);return w==null?null:L.createElement(ec.Provider,{value:c},L.createElement(tc.Provider,{children:n,value:w}))}function lk(t){let{children:e,location:n}=t;return QA(Dd(e),n)}new Promise(()=>{});function Dd(t,e){e===void 0&&(e=[]);let n=[];return L.Children.forEach(t,(r,i)=>{if(!L.isValidElement(r))return;let o=[...e,i];if(r.type===L.Fragment){n.push.apply(n,Dd(r.props.children,o));return}r.type!==Ll&&Ge(!1),!r.props.index||!r.props.children||Ge(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Dd(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const uk="6";try{window.__reactRouterVersion=uk}catch{}const ck="startTransition",_y=lT[ck];function hk(t){let{basename:e,children:n,future:r,window:i}=t,o=L.useRef();o.current==null&&(o.current=wA({window:i,v5Compat:!0}));let s=o.current,[l,u]=L.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=L.useCallback(p=>{c&&_y?_y(()=>u(p)):u(p)},[u,c]);return L.useLayoutEffect(()=>s.listen(d),[s,d]),L.createElement(ak,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}var wy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(wy||(wy={}));var Ey;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ey||(Ey={}));const dk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAYAAABVVmH3AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAdTSURBVHgB7Z3dTtRaFMcXdaKi0YhRExMT6o0X3ihXiMak8wTqExzmCTznCZQ30CcQn0B9AiYhQOACOCEhgQRSEi5IIHwGGAgfrn/Ze1LKdPq1d3eZmV/SdGiGYfpnde2111rd7aKCMDExYZ+dnTn80rYsqxd7bOfn5w+6uroe+N/Lx7b52Da/dLE/PT39n/ezfNx99+7dLBWALjIEhGRBPt64ceMDC/I6KF5ahOiz/Nl/+LN/DwwMuGSAXIWdmZl5UKvVPvPLQbqwyDxwWeTveYuci7Cjo6NOqVT6wi8dMkuVLfr727dvf5NmtApbIEGDuOzPh9gfD5MmtAhbYEGDuCcnJ5X3799XSTFKhYUPPTw8/MGDx0e6XgzzNqTSBysTdnx8HGL+UDW6G0Cpe8gsLKz06OjoCw8K/1ILwOfxrbu7e6ivr2+bMpBJWMSivBuh/EKnvHB5K2dxDRalZGxs7DX/d2eo9UQFNm8jOEdKSSphJycn/2FfOnKN/WkcbJ5UjOBcKQWJXQH+EDv5YWojOHcx2N/f/zPJ7yQSth1FlSQVN7aw8DdtcPmHIrJo5bjZs1jCtvDonwiIywN2X5xoIXLwQpxKHVE9kBvm3YjQpCmRwiL4p46ofmyetn+JelNTV8B+dZCd9g/qcAW23k/N0o+hwnb8anPgb2/duvU8bOrbzBV0XEAT4G/ZTYZezQ0tlq3VoQtr7RAB53PLjfK5pZD3G/WrnCSnR48e0d27d+n+/fvEU0vvGOAToePjYwyqtLm5Sbu7u95rg98VV3Y1ePyKxZocsCBeb28v9fT01IWMw/r6Oq2urhoTuJHVXvn2LGpkKKEDWOaLFy8SCSp5/Pix9/srKyueFedNI6u9NHiJKoBNOfPw4UN6+fJlKlElPEJ7/xgIbAAHdT7/gUvCcgjxmXIGguDyV0Vaq8+KsNo6dWFF3OpQzjx79swTVxXSTxvA8U9168JyXJZ7ZRWCwj+qJungp4qDg4N63a8urAk3oMsfQlSImzc88NerDZ6wwg3YlDOIU3VhaBCzp6enPT/kCWvCDYA7d+6QLlT67STUarVP2HvCshv4QC0GZmsmkFpKi01d5s2CKavSCQvraWlNTU29NlXH0jkF5foUmQBZL/hZi+e5NhmiFYUFXGEoW6bcANjf3ydd7OzskEFsi538KzLE1tYW6ULnZ0eBm1MsUXk0AlwB8qmqwZVgMkdLsFgyXH5BHlU1a2trZBjbqMUCWKxKq4WlIvFtEkRZVhFahpaWlrySS1bwGfPz82QaGGvq/liVwMqWl5cpK/gMw761TiGEBSipLC4uphJGWqqJskwY+SctmwBhMKLbth077Qf/DFdSFEuVlMS9p4VpzYRACwsLXtpPFgmDOQVYKOJUDFI6wrWsoEumJO6iLlzPqz9aQOL65s2b3mtMVYtmnUFgrHAFLhW8lQgWqiJqyBEXcewKdVAKa7oDYV3qoBTWdFa6gkKBwQp+FfuwSoD0s9gXzediIYoSZ2KqZBAUFO/du1dvgEtbVeDSsycw0oV7e3taU5JRwAt4TXHj4+NbeYZcKCI+efLE6yjUVf+XmbO8m+UQZb1586anJH7ALTYOaQaCIvjPozQtm0Gw5dmNCP+KfUn88IfFdUgjaCXCZgIpMMTVkab0Ay2xl+VvbWuk4FJHJ6EpUf3gO2TtaoxCaukJK24Ic0kDBlsrGyL7cDXhypvr/NmtRDfhxgEWUiRRJfhOOq4grJAkX9eFrdVq30ghGDyKcPmHobp9FPhdal3YcrmMZEyVFFFkUSVPnz4lhVT999gGE91DpAidnYSqUNnq6XcD4JKwrHiVFFmtTPO1CW7w9s9GpRklVjs3N1fovCmmwEioK+KKZmF3JuKuRIcUIIPzokQHmOai70BhfQwh1vPgwbBIGf8BhxSA6SQ2jMAQF34N/jevFk6ZM0BSZmNjQ3nCHEv4NToeevc3J2Z+6VxKD7Mf5A4gsH8Dcu+/1TMIBJIdhdhzuFgv22CDkLg1VHPlYZittaGwoXM7/nIVPkFHV9YLJ1zEQmACXGoyHoX2FYi4tkIdwmi6yGTThg2EEMH4rMNFzMqiDjd7T5w1Yb5SAcs3BnG7u7u/Rr0pUljhEsqolVMHl7dynJU6Y/VuwZewsG0tLs797OzsU9wVOmM3xWGFNI4Q/qM2Beee5BkLiReN5FnZIBle2sQAlajBKkjiNk7xByrt4BbEOSYWFaRe8RiLSFqW9YtadAkpiIpxJe0jVjpLSTfGJVNLSQP8YZ6j97XSJALncvv27b6BjEv3Z15VXiIGtWu7uhwufU76VPr7+5W0Aih9wARcA3/BrxyapFrX2hT8nX/zbKqSdYl+P0qFlYgl/BCS2VRsqnSRTKmSYrQIKymwe6iSJkElWoWVYKE0sZiPQ2apkmZBJbkIKxE+WIpsUz64vP3kkf6bSh8aRa7C+vGJrOXRfqKDsj0e7dcM8TgAW4j8Sggd+TBKuniqEW5QcdGdbkrIIH8BDAGBkF/hM9YAAAAASUVORK5CYII=",fk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASdSURBVHgB3ZvBa9RAFMZfrYqwFVuQ9qAiFVER9eBB9GBBBLGX3v0jPXuqFL1URBFaxHpQtBWxB1u0C7IFcX5Nxk7fziSZbHaTzQePbSazs/PlvXnvzct0QvyYNTJvZM5IR4aDrpE1I58lHieMLEgyT40dI7tGNo180zcn1DXk7gYGGgZ6Rp5KPFDG3QL9eKjL6ecBjjk3Z4wsyujIgn0ph5MF+6HAx0ambcOkc+ORJKYyKkD2nSTmF4vfRk4bOVOgLxwvGvnKb1qTXpL+tbotyRrbkfKaqAPW/1xS7fBZhv15I5fVzXUjq5LY/l8ZLzBn66zmnHYUug3h65KsX4tPRt7K+AONou0ptxGnNa06lgkTTcW6up6D8Ixq3Jb2QDvEzjFpN3q64bgMDkLZTCr8jUfHszfSUgYhDLlrRq6KP35DfEuS0NaVhqAsYbR5X7LzbB4C8RBP+ULKJRiVo8wahuxDKb6p6KT9p6UBiCXM5NGsNmHMl/i9ln5qEyb3XZDRpq5exJr0TenX7IYkRHX6eSPtb8H3rqV9a0Oshs+rawI7WZkv1+behmq7IjVrOYYwzsedrN3AZwHS7sPAtGekRsQQ1hP9kf+Vg8C/mTPOSBFDWJti0djazRlnpIghrNdp0bA0lTPOSBFDeEdd48CKaGs2Z5yRIoYwmZJ2QLdyvkNoci2BNV1rjg1hl0TWumSyH1QbYeampy+av+25tyU1g8TjjSQTQ2N5YeajJLUiV2tokZwZze2l9y6I38mtS82YkHjYXDrG22JF1IfrWL9P3IsymwcmfaS4nQNbDK/VWVlMSjn8kWQ9ouWpwDho9b0cVj/rwhE/UsakfSD06IrHsOrZ7nsv0JPD3Rp+RD/cIyZdRYlH0h8adriBKO+TdMLTce5Dlqpr0PlWRXjY0FvNEDpyGPtXfR2aTpglcs/IOYnDfPrZR7rJhG1pyJezs14xXUyY/IHykS5OzPsGrcppVQ00imZ9yQta8/mLrAf0H2XD0jDBGrwj/XPD669IuPppy8JsaoLvj6vQ8Gz6I+6Lq710YjZUFEHWeqVUVPQFX6amByFc9HhE37GDwFihSUJ0Q+Ln5h2vrEnbAYuUazAv3k7wcH3aRqMPjJxS7Tyg51JuhxU0byaBKbED6qWd8rKjQs4hgG76Gzvp98mWQidxXsrgKSm/seQ2EJYwS1t+PTgWkDOAj6x7PAKged+xA753VbIRs17z0PfAIOzWmrPWY4gse1ydym074iveh1BmvUahaOIRQ9YFyQGkCTWXMvrRB7JD30IWIVyWrAVm9UoSQqzZ6XQsfAahq4jfqAx5hAcl68J6zlrrWlkVjyrJNgYhwq0kC3yEW0sW+Ai3liwIadhFa8iCvDJtq8iCLMKtIwtChFtJFkBYJ9j2kEoboPcGuxDWRxdqPZJQMXT+/pMCwL66gZcObdbHCWxY9FZ0HcKYtD5Iba970qBzkgVAMeOsJHt8rV14vLY1LbS6KA04KTckYMXPjHQnnYbvkvz3RxNLt4PAvpv+xYVLjlegXySnrjtmwA+tSEoWhMq0kKaaaA9+jxNYq0QeW205gn8V7PTp/QnotgAAAABJRU5ErkJggg==",pk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAcDSURBVHgB7VvNb9xEFH8z9kYVpMGoCQKltA6UzQohdXvrjc2ttKFduHFquPXW9AScsrnBqclf0OQfoAlqSuFS9wS3urd8VIqDElEgFW4TKWmy9vCe90Njx95sdu0la/hJ++HZsdfz/N6bN7/3hkHC0PWivp/ZK3CunBcgdCGEDgw0BkyX++FvFr7ZjDH6fOI4jikywny2+MCCBMEgAZw+N1pgCrvmglsMDvSowPMtV7gGc9ns+tN7BsSM2ASg6QWtt6f3Jl5xnA4hAXjCcJ1JR3GNuDSjbQF0YuAhsNFkZhzmTLcriLYE8E72k6LClDvQeOA2vkx8PRHMNYGDmXF7bGtxzpI76bmiXoayzlzQBIMCNp3HVwEa3nxFIzZW7s9Ai2hLAO8Of7pKji3kJxq0gVef3t7dNm3LsKEFkHad7OktuFwUmWDXo/qRIPbZ/kgr2tCWAE4Pj/4N/qdvVwc91eqgo/B27pKuAC+AYBMRjpXMYnJjaWEKjgAF2sDJgXN/4EeekRwZfLf9avuLP5/+/GDXtnYhZmxvPrW3NlfMrecr030DWUaah/8rC/8EHl/qO5WFl8+XHzV73USmwU6gohFKKcw0MNaY2Vhe+LKZ63StAGoYHL4yjk9+AgKOGIVgohAuHHZ+1wuA4GmDUB4eiC6b0IS2fMBxAfmH1wfen0cBFGW/gGF1/mT/Bxr6jZ+izk2FAAiRQgB2EYXwAoXwa9h5qTABGRHmYJdZ+UJYnMAhZfAGqYjPoBKM1aCpQr0T1v+ACVB4q/Xnfnmjf/iGdipnv3i+9AS6DFt/rTxDtX9FcYHUrIeZgs8ESH0yIvNQCm/t9aV7b0KXAiPVu/hRlJpsDNaG5CjVZwKqq16XY3v8Hms467u57OgEhdL0wrn8NiQAtPtbEDAFXLmOy33qAqCnj9PGmPwjHs9CAsBF1G3UvRJUghdih8ZRICWIGZ4/EDDta2RwkxZZtcO6AGihEXj61vrivRIkALz22IFGvDFIAOqeSoujSC2oC4ALZcJ3pismIQWwrDk7TAtqXz0BEIcXXNcT7QRJIXhDFSRiboQwLTidGy3QF08AQhW+FRXF0EmysevLnmlNV2+KOIRJnG3GISF4WkAEjQynMjuo9MaFZ//135DNnYeEUR1wYoM+ACRqcIj1KZFxdo3+n5P3D6r/zt6OASmDuqsSL1k3Axrz0NDnZ3nGVfOBvkbcdNZxQNUMTLltT90d4aj4fgG40HWh7xHgGxsDnlfx/bzciFy7AR3AmezV6y5zpzAIspHWKv22/ENis0ANRMszIQW/XOgcjUGXOylc6Yj6CyZK+KGRLZIgoBNw/CaA2n+W4434uLTMq55V6AACjrcjGSWMbXwPlwPXeJBHW139fg1SimBsQw8hdYTIUfG/AOA/Du5VZkig6AhSCop65WNKqnKcg32eEaOjrqXADoNaVnX5GNc8NkcxWIF+eUgpGPdPt0iIrpEPWPM38tQKoFp4ITeY3KvakMH9oXHK4A/7wTG5AweYn7xMGqYFul6kMRXkNsGFySk6CswEWu+J3tSZgdNTLsjHNGYauxcH4HTgZ4BEMgztvwmXi2u+BlGhyCqBEIO5QP9CmszAy3mIQM6DV3IengCQ/zfgkAxKN8MrrpJQzXkY9J1LrQ0zKN2MRjmPugAOy6B0KygHGeAebDnnURdAVAYlGD93E8LynYhZmRfwZ4dDtEAVaiKZW/BT1BYkAAWUiWC+EzPGU/4+8h3Zi7shhQW5RjU2rUIusuSMf/Nyc9mEGHFm+CpN5V/7Gl1x6/flHw25KbRGCHP2D8EfNdnCdUc2Vu7HepNJgVQfNfcxSFwjPf2NpYWhYN9QQgTVhGrrfKbAuXK3G/xBrcoFAjXMSPePhPUPFUA1PPalx8mW6MLHWQghJT4eaCxRyd7IOkGy+b7+LJEjF6VmDR1L8bWB9+apLg+OEaIGT5lnVP1vo847tE5wMHdlJliQ3E59fhIY/PBynjvK3QNPnonZjcWFsUbnNlUoicHEY+wZXCG2VJ8fN8jbI7VVgqSLpcM0ofpHMw53JjutDVVPTzFKMfhbM0++hqZrhbc2V+ZoowIESAUqSCa/0Hcqqx1lo0KroPVJ/1sffYVprRkI5y+nUStvQJM4cq1wVH1+5WLxb2uroYndaS2ZZEvF0lH1+TLINFzHnd9xdox2Nk31qshOKR5BU4DoJKpBsUvHN00N5i6PNdjEJMPAPma5XH6kMMVGft7CxZcld6husaUB5qvbbEm96dVwS167jrjtcvmqMyK1JAfZKf4gtt1pse0XaGJbWxyIfVteMpunc17hJZoHfNyuMGgR45G2yFvWaKw4kfiOES9EddW8V4xF9UgCdKpKCds+7+UpK6m6NUrYZKDHCG6xjRv/AF0bOBSDHmXQAAAAAElFTkSuQmCC",mk="/assets/logo_icon-Bug9MN-U.png",gk="/assets/logo_big-Cp0kVrXR.png",yk="/assets/logo-9xkPj2hX.png",vk="/assets/pic1-Cav6XP8G.png",_k="/assets/pic2-CxFhh4uq.png",wk="/assets/pic3-LJNB-Dr0.png",Ek="/assets/pic4-BREKihcV.png",bk="/assets/profile_richard-Bfd_-P-Z.png",Tk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJjSURBVHgB1ZiBcdswDEUhT6BOUG7QbBBt0G4QbVBvYI+QDdxO0Gwge4K2E1Ab2BsgQMRcFAikSEnkJe8OpxNNgl8gRMGsYAGI2NDljuzeXWtnzI2sd3Yhe6qqqodSkLia7EB2xXT+krWQk5UCJTaLYHJ655xvTUdmYAvI0c/ARBzdE0fHPUw9Gscr0JDtnSAflsfCGnBYap/A41hYhC9D9ivgb5nYQCQfUwR6BHebiHXONEctbIRbEYlNCgLqL866PIoX+yd28EEZvIdMuFSSNHODtCV/hMzgNGe7uQF7nOaMgfxCm6So4jQ3WygE52ZUVJWn4rd88Ta0QGjU/DuyRrRdqNq5QSForjMMldYrLHKy07DQb6LtCcpzEfeqUCPa/kF55JwyeKrQHsrTi3sjO7DQd4lbMj9HzM65g08CC333NLQ1fIXyzG6HLLQXbV+gPEbc/5cddkpjA+W5F/e97MBC5dbwHcrTiPvpFumpnEp+Qlsxt9X67dzhwFm0Z6tDFR7E/dnbUynzroXKvFZZTRMaUOP0gKGDjLiUs2LOU8xA7ekOkAmc1qHhaIrBXQmxOBxeSI4pDrTl2EysS7FO8W+XOOMjGu1AzOKKFwyHSt6in4clTn1imRPO/a2dCuwwDq/YKjCBoQu/+cbTpYdhz+NP8PhLUrsxXPz+AH/BwWO0w42W9vbfkAKGD7jWcHT+W0yM7JxgdmhxPR2KI6LNxTqnnG+pEeZc5+ObBsKBCIqtYCFuYjYutM3op5uzl9x1f4dj/LV00b5M6TmbG8yRBrnwiL3CRwQja9QPAb7tNC8n3s9GsmlLVaiiEgAAAABJRU5ErkJggg==",Ik="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAYAAABVVmH3AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAduSURBVHgB7Z0/bBtVHMe/73wJKajFI1vciU60naALShYkBmgyMCC1ohmKVImqZUMopU6JEBIDiYrE0KFBGRgYmtKNpRFLCwuBBTYuGxsuiNRpknu87ztfcrbPvj/23T3/+Sx2nXNP99Hvfu/3/tyzgCFMVWXl4AAzQqACgWkB9SpRkUBZvS8Hj1Wf1dRnNXWcAxc1KfCret2SLpy9z8QWDECgIBoi5yzgvBJzplVeWrR0gS3Xxf3SHjbqnwsHBZCr2PJ1Wd45gWvqpJfAiMwHx5VYzVtyLmLtRTlTEripzjaDIhHYlAdYfbYsNpAxmYo1Rmg7jOKlvU/FGjIiE7EGC23FOXCxsL8sNtFn+ipW59DjuKsajzkMEFJizdrDUj9zcN/ETi7KOVhKap9a9wLoa3roWSyj9OmL6raXuI4hQMldeeFfLNVWRA090JPYqY9kRU7iIfIrnfLCEc8w20tqsJCSiY/lGXcSv2D4pBIdMLxGpCSV2KlP5HvCxsMBzqdxqFjqGnmtSEHiVMATqW7jGkYI9hTrt8Q3Cb8Tn1GU6pNUbmyxzDcjcPt3o+buYzbu6FkssUPc+ielpqqFs3GqhcjGi3XqWOoh2gWdRB0YKVYX/2OpQSr/HddOutI1FUzckJcsgbsY04aarZjvNvzYUew4r0ZSO/YPTnbq+nZMBe7EOAVEUH56vPPdHBqxU2o8VVo6WsdEoMZzZ8PGc0MjVkkd59WYlErhDVmbWDZYGKeA+EjMcMak9eM2sZaILiXGNBMWtU1i9SzAOFqTExK1TWJFCdcwhLx1Cni9gkxpjdpDsaxbaR5DQnkK+OA14OcrwLaqNH90gIuph61joNwFu7r24ecTgzWz2gkt9Jwnlbyh6pvf/gIWZ5Xgv5EpOyf0vF+V7w/Fqop2oNNAUCjfM0rf+fZIKqP15S+RKapTwNmGauP9Yff1TwwgrUIJpTJS+UqpizPev5kOskZMolJfFNs6YgcxDYQJJWFSKTQPqUTuYl69rHipwMJ5rn8cBDoJJUGpX7wJXG3k2eU8O+d06YuVUq9PNZrpsifqwtl2oSQo9c78UQXw4I/8olWjXPJFvKDmsvZtvT7ASCiUt/PFs52PYQNFqbV6s1TCBmu7pzUtyWGetfcsVEyMVhb0zJFRhX03qetb+UslB7uYtVVOyLJsTkxcoeR7dZu/f897z47AKy81/z3X3BqAz1HYQuI0DAjZJELJukpelze8fPvDQrvUoqJVIzDNiC0XWREkFUqipJKiopXwiR+bj/ygANIIJRS2vOk1at+9Gy610GglyqndeI4qN9IKJUGpjNTpcufjCqZs57VkiK01hU6nPFtcqYVHq0fZRoYwB15QQq+eSy+UxJXqH2sCmYlldIZ1O5OSRKoh0apJvaI7CrbcD35HT1y+F18qMSVaicVnT5EBjByWRJSTJor4PUZgEqmmRKuiZomMxPpQDvvrcaOJXVN2Ufk9llI/XYmWSqHrsVat5kbN0o+m5wBvaQpe7zLc40vlaBSlMlLj5Gj+nwZFK3sIjqWGDLeRE93Sgy+VgypJpBoYrewgPGHj5SBnWtMD5bz6tSf17VPxpZLbjwyLVug9E7ZsFbGOKGgQhunBjzbK4Zjrnbn43+d3vnoM83CV2FIJm9JFYfjRxkhNIpWYVF4FkbbKsfWqcGTGlUEcmGOTYGRu9ajtVcWW7iBwDxUUTNKZVFOjFQ2XXs/LxX0YQFxZBkfroUsvYkvYgAEwYtdjTGsaG604cqnFMs+igLIrDFYK3fKt0dGqHDZcHg3CqIor9nOiWaJLqEed/25ytKoCdtV/eyi2bmEFhnD7cXjUGh6tTSn1aNiwKril3SYM4Ek9PGqNjlblzk8DpHlF9wGWYAiM2mBX1fRo5UZpwX83ia3zeSWDojYYoZfvwWSc1sc/22YQTIpaRqjfcch1YVtChGx3Fjr88txN+dCU5xH8aXKDxTq7t8TJ1g9DJxMZtdIyQ6zJkUq4hV/Y56GTicy1UpjRGzMZ5Wit076IHWdpnwksmDDqZTCOmjDs2B51nv5mXdshzMd4DVawbm2l67qCRgmxijHNuFitR2wuGblgY9fSzy05GOPjHLO9Z7m6Eb0SRqUEYWF2nG81Dl3UqtE7dcZaYqSnb0ZcLq/dtTDfLa8Gib12S8/jSHyIEYXXTgdxj0++aeQNeUmO2JZRqgJYqCfcCTnxakOegCcahbSgf6wihVSSeqnGRFWesVxwzKmCIYRS2a4kuf2D9LaVdFVWpDukW0krqXEbqjB6WnjME6s6lw9jDk8nQhX/x9Q19SKV9G3VVqNRu4kBjV7e+rbqwu/06edS+rZUXjdqXq1rxGxvEjiS97yFkzt9/A2aTNYZNrbwY0lWgclIbOrBFNN/EqUVY9NDhkJ9clkZy43S9J5eRU/35CDUJ9clx7o8O8BcY8ekCvLB4SqfKQsrcQZP+kVBa7kDki2cb2ydUkYfaPSWWNTf58qUXsumtBQmthX25MS+imJuTCFwWouO8WOUkmPFEttc8s/V6UWJbOV/J4waAuvSu7cAAAAASUVORK5CYII=",Ak="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADJElEQVR4nO2aS0sVYRjHRwzTtmGBlzblLi/RouJ4apFF9QUCo2UoXhd+h26ifhItEEzzCxgGrhKsNqbVNrMg8cAvHnxfeHw7ozPvvEenOn+Yzcw8t/M+9zlRVEUVVRw5gBNAG3AduGOuInBBnkV5BVADdAPjwFtgh3jIs2XgOVAQ2jwYcAoYAT7ijw/AMNBwXCfwEPh6gIK7wDqwaq51cy8OX4AHR2nEGWChjCIlYA4YBC4CdWVo64B2YAiYNzQu5oDGShtx2fxyGtvG35s8+DWZuBIeGptAV6WMuAF8dwROA80BeLcAMw7vLcl0YbTffxLaiF/Ao6BC9uT0ORlvK9jJAGcddxI3uBmEeXl5PY6rbWaOGZOdFpyTqJgRFsAt52TmoiwwKVYjuDsdILvfkd2bpdjpOjEdXNvDdXih5H8G6n2YjDhxkTk7eejQCvxQegz6xIZuO555KjJmei+5xjx5TCg93qfqzUwDaLHrU+wMnynFZypDjSkpPtfSEEu1tXjlo0AoQwRO5nwSJYVxBT+/rIwhw4rPmzRDkc7h7TkwpNOpZbVJiNqc+KjLgSEnnTg5n4RIRlKLjYSCRoGnZS6ZBC2WY94ZTShjU/HqTkJwTxG8SyhkBX+sJJSxqmju/leGFP8C1yqkDfZSToK93ifY/430K3BcYig6fkNGFJ+lNISyTLCYz4Ehi4rP4zSEBSdOmnPUNF5J28bLBtBi/Bjb+Emlx1rWRk0Gq5boiAGcA34qPQZ8mDQ425OZimh7sA4vlfwNr1HXMOplP/qCaxsve8CRfT8Lsxqzi7WQ+tITVOPycm87tWw2BNNGpz3YrqQx7O209ILuE3A6FPMus77UJ9MfhPmf7rSj5HwDOkILKTrGYPZOrYGykw5sa8Thc4enwEuOm2H2ThM+RdMUu0knxVp3CnsSMTGjE4CFVN/Xpi/qkPE0ZmTtNO8sxnzomQ0WEylSs6wx41Ayud9+etuIUdxCnvun2IzG1JvPaLIB9MWaCXK/YhcasgGU5ZnsnQ75PC3zxJJ0scDVKM8AamWKM6tX+4eBgrmXbCiqoooqopD4DZWgAQzdjA4yAAAAAElFTkSuQmCC",kk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB8ElEQVR4nO3dzWoUQRRA4ZFAtiZZJVka9QV8AX/ACApZ5R1EyS4afAPXYdC3EMW1P4+j7nUVOVJM1hm7u5p7uTkf9K4aqjj0DF0zdC8WkiRJkiRJkroDbgCPgFfA2ZrjFHjYzjHFDIAd4DvDfQO2jdI/yGfG+2iQvjHuMt1to/QLctQhyJFB+gU57hDk2CAGqQmvkFwwSC4YJBcMkgsGyQWD5AIcdrgPeRy9jjKALeDPhBi/gZvR6yiF1Zb6WKfR8y8JeAH8GBCijX0ePe/SgA3gFnBvzdHGbETPV5IkSZIkSdcXsA88u/zR6qqjjdmPnm9ZwCbwDvg7YLf3Ali2c6PnXw7wnvGW0fOv+DF1MSFIO3cveh1lsPo+mOpp9DrKwH+d5IJBcsEguWCQXDBILhgkFwySCwbJBW8MS26d7EavoxRWu7ZjnUfPv+r2+3LgldLGnrv9Pm+YvQE/UPkxJUmSJEmSpOgHBxz8x4MD2hgfHDBzjBPg14Dd3p/Ay1kndV0BbxjvdfT8SwG2Jz6eqZ27Fb2OMoAnTHcYvY4y8F8nuWCQXDBILhgkFwySCwbJBYPkgkFywVce5QLc6XCnfhC9jlKATxNifIief9UNxq8jYnzxxZLzvnr1QdtOB96uOdqY+756VZIkSZIkSVrM4h8rzbcQzwZwVgAAAABJRU5ErkJggg==",Sk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAABCCAYAAAACPxW5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxEAAAsRAX9kX5EAAAH7SURBVGhD7dq/SsNQFMfxJnYQHBxKUereIV2d3ARxc+sTCILgQ/QpdBKfIEgnH8HZoQ0FZ0cn8c9QuN5fORERmya5f865cL9LuJcM+ZBwh0M6sVgsFoutb4uuIppMJulgMOjNZrMP2jIupauEkvl8fr1cLh/H4/EB7RmX0JW7RKNukiS5pPWzUuo4z/MXWrdOAvAvrswKkhu4DldmjOQEbsKVGSFZTlGclv1+/1bjLmirqp6+7yzLsvuiKN5or3Ycp+jqtNQPfU7rjek3+K5P1y9aNsr3J1r3s/xJ45407mQ6nb7SVqN8Ar3jkC8gCw75ALLhkGsgKw65BLLjkCugCBxyARSDQ7aBonDIJlAcDtkCisQhG0CxOGQKFI1DJkDxONQWGAQOtQEGg0NNgUHhUBNgcDgkafDrpEZDp6IoHrIs29Nv8ZC2KtP37adpejocDvPFYvFJ215rPFULDdlqbBgSsvVcNBSk0eA3BKQREElHGgORZKQVIJKKtAZEEpFWgUga0joQSUI6ASIpSGdAJAHpFIi4kc6BiBPpBYi4kN6AiAPpFYh8IzlGFmo0Gl0ppe5ovTGN3Ol2u9u0bJTJ4Ne0ukOs8H4EKqvxuRr/ysUKRBVIKz/jsQPRP0grOCQCiH4hd23hkKTB7+p01aflkS1cLBaLxWKVdTrf5kX+OXj25HwAAAAASUVORK5CYII=",Pk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAArElEQVR4nO2STQrCMBBG3wnsmUy68AAiLmq9j1RP1kUn7jyCrVeoMgVFJJBJwV0ffBCyeMwfLPyVsqXwHbULXDT61r9ZMtexd8LDB57fccJQBnbZMi+Mv7JPhNEsLVuKWGWR9Jsbq6TQC0eDbMr6yiHdrnC2Cr3QWCpsrEIXOKWFHXWGsLIuZTDI7qalKHoSqbNxwpYcJmmgj51LtuyNtqRz0s1PCVTmNheYywsBbeNMCHkbYwAAAABJRU5ErkJggg==",Le={avatar_icon:dk,gallery_icon:fk,help_icon:pk,logo_big:gk,logo_icon:mk,logo:yk,pic1:vk,pic2:_k,pic3:wk,pic4:Ek,profile_img:bk,search_icon:Tk,send_button:Ik,add_icon:Ak,menu_icon:kk,arrow_icon:Sk,green_dot:Pk};var by={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Rk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],l=t[n++],u=((i&7)<<18|(o&63)<<12|(s&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},T1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,l=s?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=o>>2,p=(o&3)<<4|l>>4;let m=(l&15)<<2|c>>6,b=c&63;u||(b=64,s||(m=64)),r.push(n[d],n[p],n[m],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(b1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Rk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||l==null||c==null||p==null)throw new Ck;const m=o<<2|l>>4;if(r.push(m),c!==64){const b=l<<4&240|c>>2;if(r.push(b),p!==64){const A=c<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ck extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xk=function(t){const e=b1(t);return T1.encodeByteArray(e,!0)},_u=function(t){return xk(t).replace(/\./g,"")},I1=function(t){try{return T1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=()=>Nk().__FIREBASE_DEFAULTS__,Dk=()=>{if(typeof process>"u"||typeof by>"u")return;const t=by.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Vk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&I1(t[1]);return e&&JSON.parse(e)},ic=()=>{try{return Ok()||Dk()||Vk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},A1=t=>{var e,n;return(n=(e=ic())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},k1=t=>{const e=A1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},S1=()=>{var t;return(t=ic())===null||t===void 0?void 0:t.config},P1=t=>{var e;return(e=ic())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[_u(JSON.stringify(n)),_u(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function Uk(){var t;const e=(t=ic())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Fk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zk(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Bk(){return!Uk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qk(){try{return typeof indexedDB=="object"}catch{return!1}}function $k(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk="FirebaseError";class Pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Wk,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pa.prototype.create)}}class pa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?Hk(o,r):"Error",l=`${this.serviceName}: ${s} (${i}).`;return new Pn(i,l,r)}}function Hk(t,e){return t.replace(Kk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Kk=/\{\$([^}]+)}/g;function Gk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(Ty(o)&&Ty(s)){if(!Xs(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ty(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function us(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function cs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Qk(t,e){const n=new Yk(t,e);return n.subscribe.bind(n)}class Yk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Xk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=kh),i.error===void 0&&(i.error=kh),i.complete===void 0&&(i.complete=kh);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t){return t&&t._delegate?t._delegate:t}class Or{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Lk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eS(e))try{this.getOrInitializeService({instanceIdentifier:Yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yr){return this.instances.has(e)}getOptions(e=Yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Zk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yr){return this.component?this.component.multipleInstances?e:Yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zk(t){return t===Yr?void 0:t}function eS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Jk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const nS={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},rS=se.INFO,iS={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},oS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=iS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sp{constructor(e){this.name=e,this._logLevel=rS,this._logHandler=oS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const sS=(t,e)=>e.some(n=>t instanceof n);let Iy,Ay;function aS(){return Iy||(Iy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lS(){return Ay||(Ay=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const C1=new WeakMap,Vd=new WeakMap,x1=new WeakMap,Sh=new WeakMap,ap=new WeakMap;function uS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Pr(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&C1.set(n,t)}).catch(()=>{}),ap.set(e,t),e}function cS(t){if(Vd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Vd.set(t,e)}let Ld={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||x1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hS(t){Ld=t(Ld)}function dS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ph(this),e,...n);return x1.set(r,e.sort?e.sort():[e]),Pr(r)}:lS().includes(t)?function(...e){return t.apply(Ph(this),e),Pr(C1.get(this))}:function(...e){return Pr(t.apply(Ph(this),e))}}function fS(t){return typeof t=="function"?dS(t):(t instanceof IDBTransaction&&cS(t),sS(t,aS())?new Proxy(t,Ld):t)}function Pr(t){if(t instanceof IDBRequest)return uS(t);if(Sh.has(t))return Sh.get(t);const e=fS(t);return e!==t&&(Sh.set(t,e),ap.set(e,t)),e}const Ph=t=>ap.get(t);function pS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),l=Pr(s);return r&&s.addEventListener("upgradeneeded",u=>{r(Pr(s.result),u.oldVersion,u.newVersion,Pr(s.transaction),u)}),n&&s.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const mS=["get","getKey","getAll","getAllKeys","count"],gS=["put","add","delete","clear"],Rh=new Map;function ky(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rh.get(e))return Rh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=gS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mS.includes(n)))return;const o=async function(s,...l){const u=this.transaction(s,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Rh.set(e,o),o}hS(t=>({...t,get:(e,n,r)=>ky(e,n)||t.get(e,n,r),has:(e,n)=>!!ky(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Md="@firebase/app",Sy="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=new sp("@firebase/app"),_S="@firebase/app-compat",wS="@firebase/analytics-compat",ES="@firebase/analytics",bS="@firebase/app-check-compat",TS="@firebase/app-check",IS="@firebase/auth",AS="@firebase/auth-compat",kS="@firebase/database",SS="@firebase/database-compat",PS="@firebase/functions",RS="@firebase/functions-compat",CS="@firebase/installations",xS="@firebase/installations-compat",NS="@firebase/messaging",OS="@firebase/messaging-compat",DS="@firebase/performance",VS="@firebase/performance-compat",LS="@firebase/remote-config",MS="@firebase/remote-config-compat",US="@firebase/storage",FS="@firebase/storage-compat",jS="@firebase/firestore",zS="@firebase/vertexai-preview",BS="@firebase/firestore-compat",qS="firebase",$S="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="[DEFAULT]",WS={[Md]:"fire-core",[_S]:"fire-core-compat",[ES]:"fire-analytics",[wS]:"fire-analytics-compat",[TS]:"fire-app-check",[bS]:"fire-app-check-compat",[IS]:"fire-auth",[AS]:"fire-auth-compat",[kS]:"fire-rtdb",[SS]:"fire-rtdb-compat",[PS]:"fire-fn",[RS]:"fire-fn-compat",[CS]:"fire-iid",[xS]:"fire-iid-compat",[NS]:"fire-fcm",[OS]:"fire-fcm-compat",[DS]:"fire-perf",[VS]:"fire-perf-compat",[LS]:"fire-rc",[MS]:"fire-rc-compat",[US]:"fire-gcs",[FS]:"fire-gcs-compat",[jS]:"fire-fst",[BS]:"fire-fst-compat",[zS]:"fire-vertex","fire-js":"fire-js",[qS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=new Map,HS=new Map,Fd=new Map;function Py(t,e){try{t.container.addComponent(e)}catch(n){Kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function di(t){const e=t.name;if(Fd.has(e))return Kn.debug(`There were multiple attempts to register component ${e}.`),!1;Fd.set(e,t);for(const n of wu.values())Py(n,t);for(const n of HS.values())Py(n,t);return!0}function oc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function yn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rr=new pa("app","Firebase",KS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Or("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=$S;function N1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ud,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Rr.create("bad-app-name",{appName:String(i)});if(n||(n=S1()),!n)throw Rr.create("no-options");const o=wu.get(i);if(o){if(Xs(n,o.options)&&Xs(r,o.config))return o;throw Rr.create("duplicate-app",{appName:i})}const s=new tS(i);for(const u of Fd.values())s.addComponent(u);const l=new GS(n,r,s);return wu.set(i,l),l}function lp(t=Ud){const e=wu.get(t);if(!e&&t===Ud&&S1())return N1();if(!e)throw Rr.create("no-app",{appName:t});return e}function En(t,e,n){var r;let i=(r=WS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&l.push("and"),s&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kn.warn(l.join(" "));return}di(new Or(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS="firebase-heartbeat-database",YS=1,Js="firebase-heartbeat-store";let Ch=null;function O1(){return Ch||(Ch=pS(QS,YS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Js)}catch(n){console.warn(n)}}}}).catch(t=>{throw Rr.create("idb-open",{originalErrorMessage:t.message})})),Ch}async function XS(t){try{const n=(await O1()).transaction(Js),r=await n.objectStore(Js).get(D1(t));return await n.done,r}catch(e){if(e instanceof Pn)Kn.warn(e.message);else{const n=Rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kn.warn(n.message)}}}async function Ry(t,e){try{const r=(await O1()).transaction(Js,"readwrite");await r.objectStore(Js).put(e,D1(t)),await r.done}catch(n){if(n instanceof Pn)Kn.warn(n.message);else{const r=Rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kn.warn(r.message)}}}function D1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=1024,ZS=30*24*60*60*1e3;class eP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Cy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const l=new Date(s.date).valueOf();return Date.now()-l<=ZS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Kn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Cy(),{heartbeatsToSend:r,unsentEntries:i}=tP(this._heartbeatsCache.heartbeats),o=_u(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Kn.warn(n),""}}}function Cy(){return new Date().toISOString().substring(0,10)}function tP(t,e=JS){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),xy(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qk()?$k().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await XS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ry(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ry(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function xy(t){return _u(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rP(t){di(new Or("platform-logger",e=>new yS(e),"PRIVATE")),di(new Or("heartbeat",e=>new eP(e),"PRIVATE")),En(Md,Sy,t),En(Md,Sy,"esm2017"),En("fire-js","")}rP("");var iP="firebase",oP="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */En(iP,oP,"app");function up(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function V1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sP=V1,L1=new pa("auth","Firebase",V1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=new sp("@firebase/auth");function aP(t,...e){Eu.logLevel<=se.WARN&&Eu.warn(`Auth (${bi}): ${t}`,...e)}function Ml(t,...e){Eu.logLevel<=se.ERROR&&Eu.error(`Auth (${bi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t,...e){throw cp(t,...e)}function bn(t,...e){return cp(t,...e)}function M1(t,e,n){const r=Object.assign(Object.assign({},sP()),{[e]:n});return new pa("auth","Firebase",r).create(e,{appName:t.name})}function zn(t){return M1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return L1.create(t,...e)}function X(t,e,...n){if(!t)throw cp(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ml(e),new Error(e)}function Gn(t,e){t||Mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lP(){return Ny()==="http:"||Ny()==="https:"}function Ny(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lP()||Fk()||"connection"in navigator)?navigator.onLine:!0}function cP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gn(n>e,"Short delay should be less than long delay!"),this.isMobile=Mk()||jk()}get(){return uP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t,e){Gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP=new ga(3e4,6e4);function Jn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zn(t,e,n,r,i={}){return F1(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const l=ma(Object.assign({key:t.config.apiKey},s)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),U1.fetch()(j1(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},o))})}async function F1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},hP),e);try{const i=new pP(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw fl(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const l=o.ok?s.errorMessage:s.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw fl(t,"credential-already-in-use",s);if(u==="EMAIL_EXISTS")throw fl(t,"email-already-in-use",s);if(u==="USER_DISABLED")throw fl(t,"user-disabled",s);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw M1(t,d,c);dn(t,d)}}catch(i){if(i instanceof Pn)throw i;dn(t,"network-request-failed",{message:String(i)})}}async function ya(t,e,n,r,i={}){const o=await Zn(t,e,n,r,i);return"mfaPendingCredential"in o&&dn(t,"multi-factor-auth-required",{_serverResponse:o}),o}function j1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?hp(t.config,i):`${t.config.apiScheme}://${i}`}function fP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bn(this.auth,"network-request-failed")),dP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=bn(t,e,r);return i.customData._tokenResponse=n,i}function Oy(t){return t!==void 0&&t.enterprise!==void 0}class mP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return fP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function gP(t,e){return Zn(t,"GET","/v2/recaptchaConfig",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yP(t,e){return Zn(t,"POST","/v1/accounts:delete",e)}async function z1(t,e){return Zn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vP(t,e=!1){const n=Pe(t),r=await n.getIdToken(e),i=dp(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:As(xh(i.auth_time)),issuedAtTime:As(xh(i.iat)),expirationTime:As(xh(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function xh(t){return Number(t)*1e3}function dp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ml("JWT malformed, contained fewer than 3 sections"),null;try{const i=I1(n);return i?JSON.parse(i):(Ml("Failed to decode base64 JWT payload"),null)}catch(i){return Ml("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Dy(t){const e=dp(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pn&&_P(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _P({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=As(this.lastLoginAt),this.creationTime=As(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Zs(t,z1(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?B1(o.providerUserInfo):[],l=bP(t.providerData,s),u=t.isAnonymous,c=!(t.email&&o.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new zd(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function EP(t){const e=Pe(t);await bu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function B1(t){return t.map(e=>{var{providerId:n}=e,r=up(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TP(t,e){const n=await F1(t,{},async()=>{const r=ma({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=j1(t,i,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",U1.fetch()(s,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function IP(t,e){return Zn(t,"POST","/v2/accounts:revokeToken",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=Dy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await TP(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new oo;return r&&(X(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(X(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oo,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Un{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=up(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new zd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Zs(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vP(this,e)}reload(){return EP(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await bu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yn(this.auth.app))return Promise.reject(zn(this.auth));const e=await this.getIdToken();return await Zs(this,yP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,b=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,A=(s=n.photoURL)!==null&&s!==void 0?s:void 0,w=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:E,emailVerified:x,isAnonymous:O,providerData:M,stsTokenManager:I}=n;X(E&&I,e,"internal-error");const g=oo.fromJSON(this.name,I);X(typeof E=="string",e,"internal-error"),ir(p,e.name),ir(m,e.name),X(typeof x=="boolean",e,"internal-error"),X(typeof O=="boolean",e,"internal-error"),ir(b,e.name),ir(A,e.name),ir(w,e.name),ir(P,e.name),ir(v,e.name),ir(y,e.name);const T=new Un({uid:E,auth:e,email:m,emailVerified:x,displayName:p,isAnonymous:O,photoURL:A,phoneNumber:b,tenantId:w,stsTokenManager:g,createdAt:v,lastLoginAt:y});return M&&Array.isArray(M)&&(T.providerData=M.map(S=>Object.assign({},S))),P&&(T._redirectEventId=P),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new oo;i.updateFromServerResponse(n);const o=new Un({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await bu(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?B1(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new oo;l.updateFromIdToken(r);const u=new Un({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:s}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new zd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy=new Map;function Fn(t){Gn(t instanceof Function,"Expected a class definition");let e=Vy.get(t);return e?(Gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}q1.type="NONE";const Ly=q1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(t,e,n){return`firebase:${t}:${e}:${n}`}class so{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Ul(this.userKey,i.apiKey,o),this.fullPersistenceKey=Ul("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Un._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new so(Fn(Ly),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let o=i[0]||Fn(Ly);const s=Ul(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(s);if(d){const p=Un._fromJSON(e,d);c!==o&&(l=p),o=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new so(o,e,r):(o=u[0],l&&await o._set(s,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==o)try{await c._remove(s)}catch{}})),new so(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(K1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Q1(e))return"Blackberry";if(Y1(e))return"Webos";if(W1(e))return"Safari";if((e.includes("chrome/")||H1(e))&&!e.includes("edge/"))return"Chrome";if(G1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $1(t=wt()){return/firefox\//i.test(t)}function W1(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function H1(t=wt()){return/crios\//i.test(t)}function K1(t=wt()){return/iemobile/i.test(t)}function G1(t=wt()){return/android/i.test(t)}function Q1(t=wt()){return/blackberry/i.test(t)}function Y1(t=wt()){return/webos/i.test(t)}function fp(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function AP(t=wt()){var e;return fp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kP(){return zk()&&document.documentMode===10}function X1(t=wt()){return fp(t)||G1(t)||Y1(t)||Q1(t)||/windows phone/i.test(t)||K1(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(t,e=[]){let n;switch(t){case"Browser":n=My(wt());break;case"Worker":n=`${My(wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,l)=>{try{const u=e(o);s(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PP(t,e={}){return Zn(t,"GET","/v2/passwordPolicy",Jn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=6;class CP{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:RP,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(s=u.containsNumericCharacter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uy(this),this.idTokenSubscription=new Uy(this),this.beforeStateQueue=new SP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=L1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await so.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await z1(this,{idToken:e}),r=await Un._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(yn(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!s||s===l)&&(u!=null&&u.user)&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yn(this.app))return Promise.reject(zn(this));const n=e?Pe(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yn(this.app)?Promise.reject(zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yn(this.app)?Promise.reject(zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await PP(this),n=new CP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await IP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await so.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{s=!0,u()}}else{const u=e.addObserver(n);return()=>{s=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=J1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&aP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zr(t){return Pe(t)}class Uy{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qk(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function NP(t){sc=t}function Z1(t){return sc.loadJS(t)}function OP(){return sc.recaptchaEnterpriseScript}function DP(){return sc.gapiScript}function VP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const LP="recaptcha-enterprise",MP="NO_RECAPTCHA";class UP{constructor(e){this.type=LP,this.auth=zr(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,l)=>{gP(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new mP(u);return o.tenantId==null?o._agentRecaptchaConfig=c:o._tenantRecaptchaConfigs[o.tenantId]=c,s(c.siteKey)}}).catch(u=>{l(u)})})}function i(o,s,l){const u=window.grecaptcha;Oy(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:e}).then(c=>{s(c)}).catch(()=>{s(MP)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(l=>{if(!n&&Oy(window.grecaptcha))i(l,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let u=OP();u.length!==0&&(u+=l),Z1(u).then(()=>{i(l,o,s)}).catch(c=>{s(c)})}}).catch(l=>{s(l)})})}}async function Fy(t,e,n,r=!1){const i=new UP(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Tu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Fy(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Fy(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(t,e){const n=oc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Xs(o,e??{}))return i;dn(i,"already-initialized")}return n.initialize({options:e})}function jP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zP(t,e,n){const r=zr(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=ew(e),{host:s,port:l}=BP(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${o}//${s}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),qP()}function ew(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BP(t){const e=ew(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:jy(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:jy(s)}}}function jy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}async function $P(t,e){return Zn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WP(t,e){return ya(t,"POST","/v1/accounts:signInWithPassword",Jn(t,e))}async function HP(t,e){return Zn(t,"POST","/v1/accounts:sendOobCode",Jn(t,e))}async function KP(t,e){return HP(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GP(t,e){return ya(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}async function QP(t,e){return ya(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends pp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ea(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ea(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tu(e,n,"signInWithPassword",WP);case"emailLink":return GP(e,{email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tu(e,r,"signUpPassword",$P);case"emailLink":return QP(e,{idToken:n,email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ao(t,e){return ya(t,"POST","/v1/accounts:signInWithIdp",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP="http://localhost";class fi extends pp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=up(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new fi(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return ao(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ao(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ao(e,n)}buildRequest(){const e={requestUri:YP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ma(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function JP(t){const e=us(cs(t)).link,n=e?us(cs(e)).deep_link_id:null,r=us(cs(t)).deep_link_id;return(r?us(cs(r)).link:null)||r||n||e||t}class mp{constructor(e){var n,r,i,o,s,l;const u=us(cs(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=XP((i=u.mode)!==null&&i!==void 0?i:null);X(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(o=u.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=u.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=JP(e);try{return new mp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.providerId=Co.PROVIDER_ID}static credential(e,n){return ea._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=mp.parseLink(n);return X(r,"argument-error"),ea._fromEmailAndCode(e,r.code,r.tenantId)}}Co.PROVIDER_ID="password";Co.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Co.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends tw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends va{constructor(){super("facebook.com")}static credential(e){return fi._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends va{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fi._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.GOOGLE_SIGN_IN_METHOD="google.com";hr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends va{constructor(){super("github.com")}static credential(e){return fi._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends va{constructor(){super("twitter.com")}static credential(e,n){return fi._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.TWITTER_SIGN_IN_METHOD="twitter.com";fr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZP(t,e){return ya(t,"POST","/v1/accounts:signUp",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await Un._fromIdTokenResponse(e,r,i),s=zy(r);return new pi({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=zy(r);return new pi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function zy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu extends Pn{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Iu.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Iu(e,n,r,i)}}function nw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Iu._fromErrorAndOperation(t,o,e,r):o})}async function eR(t,e,n=!1){const r=await Zs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tR(t,e,n=!1){const{auth:r}=t;if(yn(r.app))return Promise.reject(zn(r));const i="reauthenticate";try{const o=await Zs(t,nw(r,i,e,t),n);X(o.idToken,r,"internal-error");const s=dp(o.idToken);X(s,r,"internal-error");const{sub:l}=s;return X(t.uid===l,r,"user-mismatch"),pi._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&dn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rw(t,e,n=!1){if(yn(t.app))return Promise.reject(zn(t));const r="signIn",i=await nw(t,r,e),o=await pi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function nR(t,e){return rw(zr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iw(t){const e=zr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rR(t,e,n){const r=zr(t);await Tu(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",KP)}async function iR(t,e,n){if(yn(t.app))return Promise.reject(zn(t));const r=zr(t),s=await Tu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ZP).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&iw(t),u}),l=await pi._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(l.user),l}function oR(t,e,n){return yn(t.app)?Promise.reject(zn(t)):nR(Pe(t),Co.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iw(t),r})}function sR(t,e,n,r){return Pe(t).onIdTokenChanged(e,n,r)}function aR(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}function ow(t,e,n,r){return Pe(t).onAuthStateChanged(e,n,r)}function lR(t){return Pe(t).signOut()}const Au="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Au,"1"),this.storage.removeItem(Au),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=1e3,cR=10;class aw extends sw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=X1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,l,u)=>{this.notifyListeners(s,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);kP()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}aw.type="LOCAL";const hR=aw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw extends sw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lw.type="SESSION";const uw=lw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ac(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(s).map(async c=>c(n.origin,o)),u=await dR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ac.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((l,u)=>{const c=gp("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(m.data.response);break;default:clearTimeout(d),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){return window}function pR(t){Tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function mR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yR(){return cw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw="firebaseLocalStorageDb",vR=1,ku="firebaseLocalStorage",dw="fbase_key";class _a{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function lc(t,e){return t.transaction([ku],e?"readwrite":"readonly").objectStore(ku)}function _R(){const t=indexedDB.deleteDatabase(hw);return new _a(t).toPromise()}function Bd(){const t=indexedDB.open(hw,vR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ku,{keyPath:dw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ku)?e(r):(r.close(),await _R(),e(await Bd()))})})}async function By(t,e,n){const r=lc(t,!0).put({[dw]:e,value:n});return new _a(r).toPromise()}async function wR(t,e){const n=lc(t,!1).get(e),r=await new _a(n).toPromise();return r===void 0?null:r.value}function qy(t,e){const n=lc(t,!0).delete(e);return new _a(n).toPromise()}const ER=800,bR=3;class fw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ac._getInstance(yR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mR(),!this.activeServiceWorker)return;this.sender=new fR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bd();return await By(e,Au,"1"),await qy(e,Au),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>By(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=lc(i,!1).getAll();return new _a(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ER)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fw.type="LOCAL";const TR=fw;new ga(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(t,e){return e?Fn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp extends pp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ao(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ao(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ao(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AR(t){return rw(t.auth,new yp(t),t.bypassAuthState)}function kR(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),tR(n,new yp(t),t.bypassAuthState)}async function SR(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),eR(n,new yp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:l}=e;if(s){this.reject(s);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AR;case"linkViaPopup":case"linkViaRedirect":return SR;case"reauthViaPopup":case"reauthViaRedirect":return kR;default:dn(this.auth,"internal-error")}}resolve(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=new ga(2e3,1e4);class Ji extends pw{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Ji.currentPopupAction&&Ji.currentPopupAction.cancel(),Ji.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Gn(this.filter.length===1,"Popup operations only handle one event");const e=gp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ji.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PR.get())};e()}}Ji.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR="pendingRedirect",Fl=new Map;class CR extends pw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Fl.get(this.auth._key());if(!e){try{const r=await xR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Fl.set(this.auth._key(),e)}return this.bypassAuthState||Fl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xR(t,e){const n=DR(e),r=OR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function NR(t,e){Fl.set(t._key(),e)}function OR(t){return Fn(t._redirectPersistence)}function DR(t){return Ul(RR,t.config.apiKey,t.name)}async function VR(t,e,n=!1){if(yn(t.app))return Promise.reject(zn(t));const r=zr(t),i=IR(r,e),s=await new CR(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=10*60*1e3;class MR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!mw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LR&&this.cachedEventUids.clear(),this.cachedEventUids.has($y(e))}saveEventToCache(e){this.cachedEventUids.add($y(e)),this.lastProcessedEventTime=Date.now()}}function $y(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FR(t,e={}){return Zn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zR=/^https?/;async function BR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FR(t);for(const n of e)try{if(qR(n))return}catch{}dn(t,"unauthorized-domain")}function qR(t){const e=jd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!zR.test(n))return!1;if(jR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R=new ga(3e4,6e4);function Wy(){const t=Tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function WR(t){return new Promise((e,n)=>{var r,i,o;function s(){Wy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wy(),n(bn(t,"network-request-failed"))},timeout:$R.get()})}if(!((i=(r=Tn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Tn().gapi)===null||o===void 0)&&o.load)s();else{const l=VP("iframefcb");return Tn()[l]=()=>{gapi.load?s():n(bn(t,"network-request-failed"))},Z1(`${DP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw jl=null,e})}let jl=null;function HR(t){return jl=jl||WR(t),jl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR=new ga(5e3,15e3),GR="__/auth/iframe",QR="emulator/auth/iframe",YR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JR(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hp(e,QR):`https://${t.config.authDomain}/${GR}`,r={apiKey:e.apiKey,appName:t.name,v:bi},i=XR.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${ma(r).slice(1)}`}async function ZR(t){const e=await HR(t),n=Tn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:JR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YR,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=bn(t,"network-request-failed"),l=Tn().setTimeout(()=>{o(s)},KR.get());function u(){Tn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tC=500,nC=600,rC="_blank",iC="http://localhost";class Hy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oC(t,e,n,r=tC,i=nC){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},eC),{width:r.toString(),height:i.toString(),top:o,left:s}),c=wt().toLowerCase();n&&(l=H1(c)?rC:n),$1(c)&&(e=e||iC,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[b,A])=>`${m}${b}=${A},`,"");if(AP(c)&&l!=="_self")return sC(e||"",l),new Hy(null);const p=window.open(e||"",l,d);X(p,t,"popup-blocked");try{p.focus()}catch{}return new Hy(p)}function sC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC="__/auth/handler",lC="emulator/auth/handler",uC=encodeURIComponent("fac");async function Ky(t,e,n,r,i,o){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bi,eventId:i};if(e instanceof tw){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",Gk(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))s[d]=p}if(e instanceof va){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(s.scopes=d.join(","))}t.tenantId&&(s.tid=t.tenantId);const l=s;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${uC}=${encodeURIComponent(u)}`:"";return`${cC(t)}?${ma(l).slice(1)}${c}`}function cC({config:t}){return t.emulator?hp(t,lC):`https://${t.authDomain}/${aC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh="webStorageSupport";class hC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uw,this._completeRedirectFn=VR,this._overrideRedirectResult=NR}async _openPopup(e,n,r,i){var o;Gn((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Ky(e,n,r,jd(),i);return oC(e,s,gp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await Ky(e,n,r,jd(),i);return pR(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Gn(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ZR(e),r=new MR(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nh,{type:Nh},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Nh];s!==void 0&&n(!!s),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return X1()||W1()||fp()}}const dC=hC;var Gy="@firebase/auth",Qy="1.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mC(t){di(new Or("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:l}=r.options;X(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:s,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:J1(t)},c=new xP(r,i,o,u);return jP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),di(new Or("auth-internal",e=>{const n=zr(e.getProvider("auth").getImmediate());return(r=>new fC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(Gy,Qy,pC(t)),En(Gy,Qy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC=5*60,yC=P1("authIdTokenMaxAge")||gC;let Yy=null;const vC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yC)return;const i=n==null?void 0:n.token;Yy!==i&&(Yy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _C(t=lp()){const e=oc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=FP(t,{popupRedirectResolver:dC,persistence:[TR,hR,uw]}),r=P1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=vC(o.toString());aR(n,s,()=>s(n.currentUser)),sR(n,l=>s(l))}}const i=A1("auth");return i&&zP(n,`http://${i}`),n}function wC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}NP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=bn("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",wC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mC("Browser");var Xy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ii,gw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,g){function T(){}T.prototype=g.prototype,I.D=g.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(S,R,C){for(var k=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)k[ne-2]=arguments[ne];return g.prototype[R].apply(S,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,g,T){T||(T=0);var S=Array(16);if(typeof g=="string")for(var R=0;16>R;++R)S[R]=g.charCodeAt(T++)|g.charCodeAt(T++)<<8|g.charCodeAt(T++)<<16|g.charCodeAt(T++)<<24;else for(R=0;16>R;++R)S[R]=g[T++]|g[T++]<<8|g[T++]<<16|g[T++]<<24;g=I.g[0],T=I.g[1],R=I.g[2];var C=I.g[3],k=g+(C^T&(R^C))+S[0]+3614090360&4294967295;g=T+(k<<7&4294967295|k>>>25),k=C+(R^g&(T^R))+S[1]+3905402710&4294967295,C=g+(k<<12&4294967295|k>>>20),k=R+(T^C&(g^T))+S[2]+606105819&4294967295,R=C+(k<<17&4294967295|k>>>15),k=T+(g^R&(C^g))+S[3]+3250441966&4294967295,T=R+(k<<22&4294967295|k>>>10),k=g+(C^T&(R^C))+S[4]+4118548399&4294967295,g=T+(k<<7&4294967295|k>>>25),k=C+(R^g&(T^R))+S[5]+1200080426&4294967295,C=g+(k<<12&4294967295|k>>>20),k=R+(T^C&(g^T))+S[6]+2821735955&4294967295,R=C+(k<<17&4294967295|k>>>15),k=T+(g^R&(C^g))+S[7]+4249261313&4294967295,T=R+(k<<22&4294967295|k>>>10),k=g+(C^T&(R^C))+S[8]+1770035416&4294967295,g=T+(k<<7&4294967295|k>>>25),k=C+(R^g&(T^R))+S[9]+2336552879&4294967295,C=g+(k<<12&4294967295|k>>>20),k=R+(T^C&(g^T))+S[10]+4294925233&4294967295,R=C+(k<<17&4294967295|k>>>15),k=T+(g^R&(C^g))+S[11]+2304563134&4294967295,T=R+(k<<22&4294967295|k>>>10),k=g+(C^T&(R^C))+S[12]+1804603682&4294967295,g=T+(k<<7&4294967295|k>>>25),k=C+(R^g&(T^R))+S[13]+4254626195&4294967295,C=g+(k<<12&4294967295|k>>>20),k=R+(T^C&(g^T))+S[14]+2792965006&4294967295,R=C+(k<<17&4294967295|k>>>15),k=T+(g^R&(C^g))+S[15]+1236535329&4294967295,T=R+(k<<22&4294967295|k>>>10),k=g+(R^C&(T^R))+S[1]+4129170786&4294967295,g=T+(k<<5&4294967295|k>>>27),k=C+(T^R&(g^T))+S[6]+3225465664&4294967295,C=g+(k<<9&4294967295|k>>>23),k=R+(g^T&(C^g))+S[11]+643717713&4294967295,R=C+(k<<14&4294967295|k>>>18),k=T+(C^g&(R^C))+S[0]+3921069994&4294967295,T=R+(k<<20&4294967295|k>>>12),k=g+(R^C&(T^R))+S[5]+3593408605&4294967295,g=T+(k<<5&4294967295|k>>>27),k=C+(T^R&(g^T))+S[10]+38016083&4294967295,C=g+(k<<9&4294967295|k>>>23),k=R+(g^T&(C^g))+S[15]+3634488961&4294967295,R=C+(k<<14&4294967295|k>>>18),k=T+(C^g&(R^C))+S[4]+3889429448&4294967295,T=R+(k<<20&4294967295|k>>>12),k=g+(R^C&(T^R))+S[9]+568446438&4294967295,g=T+(k<<5&4294967295|k>>>27),k=C+(T^R&(g^T))+S[14]+3275163606&4294967295,C=g+(k<<9&4294967295|k>>>23),k=R+(g^T&(C^g))+S[3]+4107603335&4294967295,R=C+(k<<14&4294967295|k>>>18),k=T+(C^g&(R^C))+S[8]+1163531501&4294967295,T=R+(k<<20&4294967295|k>>>12),k=g+(R^C&(T^R))+S[13]+2850285829&4294967295,g=T+(k<<5&4294967295|k>>>27),k=C+(T^R&(g^T))+S[2]+4243563512&4294967295,C=g+(k<<9&4294967295|k>>>23),k=R+(g^T&(C^g))+S[7]+1735328473&4294967295,R=C+(k<<14&4294967295|k>>>18),k=T+(C^g&(R^C))+S[12]+2368359562&4294967295,T=R+(k<<20&4294967295|k>>>12),k=g+(T^R^C)+S[5]+4294588738&4294967295,g=T+(k<<4&4294967295|k>>>28),k=C+(g^T^R)+S[8]+2272392833&4294967295,C=g+(k<<11&4294967295|k>>>21),k=R+(C^g^T)+S[11]+1839030562&4294967295,R=C+(k<<16&4294967295|k>>>16),k=T+(R^C^g)+S[14]+4259657740&4294967295,T=R+(k<<23&4294967295|k>>>9),k=g+(T^R^C)+S[1]+2763975236&4294967295,g=T+(k<<4&4294967295|k>>>28),k=C+(g^T^R)+S[4]+1272893353&4294967295,C=g+(k<<11&4294967295|k>>>21),k=R+(C^g^T)+S[7]+4139469664&4294967295,R=C+(k<<16&4294967295|k>>>16),k=T+(R^C^g)+S[10]+3200236656&4294967295,T=R+(k<<23&4294967295|k>>>9),k=g+(T^R^C)+S[13]+681279174&4294967295,g=T+(k<<4&4294967295|k>>>28),k=C+(g^T^R)+S[0]+3936430074&4294967295,C=g+(k<<11&4294967295|k>>>21),k=R+(C^g^T)+S[3]+3572445317&4294967295,R=C+(k<<16&4294967295|k>>>16),k=T+(R^C^g)+S[6]+76029189&4294967295,T=R+(k<<23&4294967295|k>>>9),k=g+(T^R^C)+S[9]+3654602809&4294967295,g=T+(k<<4&4294967295|k>>>28),k=C+(g^T^R)+S[12]+3873151461&4294967295,C=g+(k<<11&4294967295|k>>>21),k=R+(C^g^T)+S[15]+530742520&4294967295,R=C+(k<<16&4294967295|k>>>16),k=T+(R^C^g)+S[2]+3299628645&4294967295,T=R+(k<<23&4294967295|k>>>9),k=g+(R^(T|~C))+S[0]+4096336452&4294967295,g=T+(k<<6&4294967295|k>>>26),k=C+(T^(g|~R))+S[7]+1126891415&4294967295,C=g+(k<<10&4294967295|k>>>22),k=R+(g^(C|~T))+S[14]+2878612391&4294967295,R=C+(k<<15&4294967295|k>>>17),k=T+(C^(R|~g))+S[5]+4237533241&4294967295,T=R+(k<<21&4294967295|k>>>11),k=g+(R^(T|~C))+S[12]+1700485571&4294967295,g=T+(k<<6&4294967295|k>>>26),k=C+(T^(g|~R))+S[3]+2399980690&4294967295,C=g+(k<<10&4294967295|k>>>22),k=R+(g^(C|~T))+S[10]+4293915773&4294967295,R=C+(k<<15&4294967295|k>>>17),k=T+(C^(R|~g))+S[1]+2240044497&4294967295,T=R+(k<<21&4294967295|k>>>11),k=g+(R^(T|~C))+S[8]+1873313359&4294967295,g=T+(k<<6&4294967295|k>>>26),k=C+(T^(g|~R))+S[15]+4264355552&4294967295,C=g+(k<<10&4294967295|k>>>22),k=R+(g^(C|~T))+S[6]+2734768916&4294967295,R=C+(k<<15&4294967295|k>>>17),k=T+(C^(R|~g))+S[13]+1309151649&4294967295,T=R+(k<<21&4294967295|k>>>11),k=g+(R^(T|~C))+S[4]+4149444226&4294967295,g=T+(k<<6&4294967295|k>>>26),k=C+(T^(g|~R))+S[11]+3174756917&4294967295,C=g+(k<<10&4294967295|k>>>22),k=R+(g^(C|~T))+S[2]+718787259&4294967295,R=C+(k<<15&4294967295|k>>>17),k=T+(C^(R|~g))+S[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(R+(k<<21&4294967295|k>>>11))&4294967295,I.g[2]=I.g[2]+R&4294967295,I.g[3]=I.g[3]+C&4294967295}r.prototype.u=function(I,g){g===void 0&&(g=I.length);for(var T=g-this.blockSize,S=this.B,R=this.h,C=0;C<g;){if(R==0)for(;C<=T;)i(this,I,C),C+=this.blockSize;if(typeof I=="string"){for(;C<g;)if(S[R++]=I.charCodeAt(C++),R==this.blockSize){i(this,S),R=0;break}}else for(;C<g;)if(S[R++]=I[C++],R==this.blockSize){i(this,S),R=0;break}}this.h=R,this.o+=g},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;var T=8*this.o;for(g=I.length-8;g<I.length;++g)I[g]=T&255,T/=256;for(this.u(I),I=Array(16),g=T=0;4>g;++g)for(var S=0;32>S;S+=8)I[T++]=this.g[g]>>>S&255;return I};function o(I,g){var T=l;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=g(I)}function s(I,g){this.h=g;for(var T=[],S=!0,R=I.length-1;0<=R;R--){var C=I[R]|0;S&&C==g||(T[R]=C,S=!1)}this.g=T}var l={};function u(I){return-128<=I&&128>I?o(I,function(g){return new s([g|0],0>g?-1:0)}):new s([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return P(c(-I));for(var g=[],T=1,S=0;I>=T;S++)g[S]=I/T|0,T*=4294967296;return new s(g,0)}function d(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return P(d(I.substring(1),g));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(g,8)),S=p,R=0;R<I.length;R+=8){var C=Math.min(8,I.length-R),k=parseInt(I.substring(R,R+C),g);8>C?(C=c(Math.pow(g,C)),S=S.j(C).add(c(k))):(S=S.j(T),S=S.add(c(k)))}return S}var p=u(0),m=u(1),b=u(16777216);t=s.prototype,t.m=function(){if(w(this))return-P(this).m();for(var I=0,g=1,T=0;T<this.g.length;T++){var S=this.i(T);I+=(0<=S?S:4294967296+S)*g,g*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(A(this))return"0";if(w(this))return"-"+P(this).toString(I);for(var g=c(Math.pow(I,6)),T=this,S="";;){var R=x(T,g).g;T=v(T,R.j(g));var C=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=R,A(T))return C+S;for(;6>C.length;)C="0"+C;S=C+S}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function A(I){if(I.h!=0)return!1;for(var g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function w(I){return I.h==-1}t.l=function(I){return I=v(this,I),w(I)?-1:A(I)?0:1};function P(I){for(var g=I.g.length,T=[],S=0;S<g;S++)T[S]=~I.g[S];return new s(T,~I.h).add(m)}t.abs=function(){return w(this)?P(this):this},t.add=function(I){for(var g=Math.max(this.g.length,I.g.length),T=[],S=0,R=0;R<=g;R++){var C=S+(this.i(R)&65535)+(I.i(R)&65535),k=(C>>>16)+(this.i(R)>>>16)+(I.i(R)>>>16);S=k>>>16,C&=65535,k&=65535,T[R]=k<<16|C}return new s(T,T[T.length-1]&-2147483648?-1:0)};function v(I,g){return I.add(P(g))}t.j=function(I){if(A(this)||A(I))return p;if(w(this))return w(I)?P(this).j(P(I)):P(P(this).j(I));if(w(I))return P(this.j(P(I)));if(0>this.l(b)&&0>I.l(b))return c(this.m()*I.m());for(var g=this.g.length+I.g.length,T=[],S=0;S<2*g;S++)T[S]=0;for(S=0;S<this.g.length;S++)for(var R=0;R<I.g.length;R++){var C=this.i(S)>>>16,k=this.i(S)&65535,ne=I.i(R)>>>16,Ce=I.i(R)&65535;T[2*S+2*R]+=k*Ce,y(T,2*S+2*R),T[2*S+2*R+1]+=C*Ce,y(T,2*S+2*R+1),T[2*S+2*R+1]+=k*ne,y(T,2*S+2*R+1),T[2*S+2*R+2]+=C*ne,y(T,2*S+2*R+2)}for(S=0;S<g;S++)T[S]=T[2*S+1]<<16|T[2*S];for(S=g;S<2*g;S++)T[S]=0;return new s(T,0)};function y(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function E(I,g){this.g=I,this.h=g}function x(I,g){if(A(g))throw Error("division by zero");if(A(I))return new E(p,p);if(w(I))return g=x(P(I),g),new E(P(g.g),P(g.h));if(w(g))return g=x(I,P(g)),new E(P(g.g),g.h);if(30<I.g.length){if(w(I)||w(g))throw Error("slowDivide_ only works with positive integers.");for(var T=m,S=g;0>=S.l(I);)T=O(T),S=O(S);var R=M(T,1),C=M(S,1);for(S=M(S,2),T=M(T,2);!A(S);){var k=C.add(S);0>=k.l(I)&&(R=R.add(T),C=k),S=M(S,1),T=M(T,1)}return g=v(I,R.j(g)),new E(R,g)}for(R=p;0<=I.l(g);){for(T=Math.max(1,Math.floor(I.m()/g.m())),S=Math.ceil(Math.log(T)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),C=c(T),k=C.j(g);w(k)||0<k.l(I);)T-=S,C=c(T),k=C.j(g);A(C)&&(C=m),R=R.add(C),I=v(I,k)}return new E(R,I)}t.A=function(I){return x(this,I).h},t.and=function(I){for(var g=Math.max(this.g.length,I.g.length),T=[],S=0;S<g;S++)T[S]=this.i(S)&I.i(S);return new s(T,this.h&I.h)},t.or=function(I){for(var g=Math.max(this.g.length,I.g.length),T=[],S=0;S<g;S++)T[S]=this.i(S)|I.i(S);return new s(T,this.h|I.h)},t.xor=function(I){for(var g=Math.max(this.g.length,I.g.length),T=[],S=0;S<g;S++)T[S]=this.i(S)^I.i(S);return new s(T,this.h^I.h)};function O(I){for(var g=I.g.length+1,T=[],S=0;S<g;S++)T[S]=I.i(S)<<1|I.i(S-1)>>>31;return new s(T,I.h)}function M(I,g){var T=g>>5;g%=32;for(var S=I.g.length-T,R=[],C=0;C<S;C++)R[C]=0<g?I.i(C+T)>>>g|I.i(C+T+1)<<32-g:I.i(C+T);return new s(R,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,gw=r,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=c,s.fromString=d,ii=s}).apply(typeof Xy<"u"?Xy:typeof self<"u"?self:typeof window<"u"?window:{});var pl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yw,vw,hs,_w,zl,qd,ww,Ew,bw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof pl=="object"&&pl];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var N=a[_];if(!(N in f))break e;f=f[N]}a=a[a.length-1],_=f[a],h=h(_),h!=_&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function o(a,h){a instanceof String&&(a+="");var f=0,_=!1,N={next:function(){if(!_&&f<a.length){var D=f++;return{value:h(D,a[D]),done:!1}}return _=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return o(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,_),a.apply(h,N)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function b(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function A(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(_,N,D){for(var B=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)B[ge-2]=arguments[ge];return h.prototype[N].apply(_,B)}}function w(a){const h=a.length;if(0<h){const f=Array(h);for(let _=0;_<h;_++)f[_]=a[_];return f}return[]}function P(a,h){for(let f=1;f<arguments.length;f++){const _=arguments[f];if(u(_)){const N=a.length||0,D=_.length||0;a.length=N+D;for(let B=0;B<D;B++)a[N+B]=_[B]}else a.push(_)}}class v{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(a){return/^[\s\xa0]*$/.test(a)}function E(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function x(a){return x[" "](a),a}x[" "]=function(){};var O=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function M(a,h,f){for(const _ in a)h.call(f,a[_],_,a)}function I(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function g(a){const h={};for(const f in a)h[f]=a[f];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,h){let f,_;for(let N=1;N<arguments.length;N++){_=arguments[N];for(f in _)a[f]=_[f];for(let D=0;D<T.length;D++)f=T[D],Object.prototype.hasOwnProperty.call(_,f)&&(a[f]=_[f])}}function R(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function C(a){l.setTimeout(()=>{throw a},0)}function k(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ne{constructor(){this.h=this.g=null}add(h,f){const _=Ce.get();_.set(h,f),this.h?this.h.next=_:this.g=_,this.h=_}}var Ce=new v(()=>new We,a=>a.reset());class We{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,z=!1,Q=new ne,Y=()=>{const a=l.Promise.resolve(void 0);fe=()=>{a.then(pe)}};var pe=()=>{for(var a;a=k();){try{a.h.call(a.g)}catch(f){C(f)}var h=Ce;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}z=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var Ve=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function je(a,h){if(ae.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(O){e:{try{x(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:et[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&je.aa.h.call(this)}}A(je,ae);var et={2:"touch",3:"pen",4:"mouse"};je.prototype.h=function(){je.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Et="closure_listenable_"+(1e6*Math.random()|0),Rc=0;function gb(a,h,f,_,N){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!_,this.ha=N,this.key=++Rc,this.da=this.fa=!1}function Oa(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Da(a){this.src=a,this.g={},this.h=0}Da.prototype.add=function(a,h,f,_,N){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var B=xc(a,h,_,N);return-1<B?(h=a[B],f||(h.fa=!1)):(h=new gb(h,this.src,D,!!_,N),h.fa=f,a.push(h)),h};function Cc(a,h){var f=h.type;if(f in a.g){var _=a.g[f],N=Array.prototype.indexOf.call(_,h,void 0),D;(D=0<=N)&&Array.prototype.splice.call(_,N,1),D&&(Oa(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function xc(a,h,f,_){for(var N=0;N<a.length;++N){var D=a[N];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==_)return N}return-1}var Nc="closure_lm_"+(1e6*Math.random()|0),Oc={};function sm(a,h,f,_,N){if(Array.isArray(h)){for(var D=0;D<h.length;D++)sm(a,h[D],f,_,N);return null}return f=um(f),a&&a[Et]?a.K(h,f,c(_)?!!_.capture:!!_,N):yb(a,h,f,!1,_,N)}function yb(a,h,f,_,N,D){if(!h)throw Error("Invalid event type");var B=c(N)?!!N.capture:!!N,ge=Vc(a);if(ge||(a[Nc]=ge=new Da(a)),f=ge.add(h,f,_,B,D),f.proxy)return f;if(_=vb(),f.proxy=_,_.src=a,_.listener=f,a.addEventListener)Ve||(N=B),N===void 0&&(N=!1),a.addEventListener(h.toString(),_,N);else if(a.attachEvent)a.attachEvent(lm(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function vb(){function a(f){return h.call(a.src,a.listener,f)}const h=_b;return a}function am(a,h,f,_,N){if(Array.isArray(h))for(var D=0;D<h.length;D++)am(a,h[D],f,_,N);else _=c(_)?!!_.capture:!!_,f=um(f),a&&a[Et]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],f=xc(D,f,_,N),-1<f&&(Oa(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=Vc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=xc(h,f,_,N)),(f=-1<a?h[a]:null)&&Dc(f))}function Dc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Et])Cc(h.i,a);else{var f=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(f,_,a.capture):h.detachEvent?h.detachEvent(lm(f),_):h.addListener&&h.removeListener&&h.removeListener(_),(f=Vc(h))?(Cc(f,a),f.h==0&&(f.src=null,h[Nc]=null)):Oa(a)}}}function lm(a){return a in Oc?Oc[a]:Oc[a]="on"+a}function _b(a,h){if(a.da)a=!0;else{h=new je(h,this);var f=a.listener,_=a.ha||a.src;a.fa&&Dc(a),a=f.call(_,h)}return a}function Vc(a){return a=a[Nc],a instanceof Da?a:null}var Lc="__closure_events_fn_"+(1e9*Math.random()>>>0);function um(a){return typeof a=="function"?a:(a[Lc]||(a[Lc]=function(h){return a.handleEvent(h)}),a[Lc])}function ut(){re.call(this),this.i=new Da(this),this.M=this,this.F=null}A(ut,re),ut.prototype[Et]=!0,ut.prototype.removeEventListener=function(a,h,f,_){am(this,a,h,f,_)};function bt(a,h){var f,_=a.F;if(_)for(f=[];_;_=_.F)f.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new ae(h,a);else if(h instanceof ae)h.target=h.target||a;else{var N=h;h=new ae(_,a),S(h,N)}if(N=!0,f)for(var D=f.length-1;0<=D;D--){var B=h.g=f[D];N=Va(B,_,!0,h)&&N}if(B=h.g=a,N=Va(B,_,!0,h)&&N,N=Va(B,_,!1,h)&&N,f)for(D=0;D<f.length;D++)B=h.g=f[D],N=Va(B,_,!1,h)&&N}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],_=0;_<f.length;_++)Oa(f[_]);delete a.g[h],a.h--}}this.F=null},ut.prototype.K=function(a,h,f,_){return this.i.add(String(a),h,!1,f,_)},ut.prototype.L=function(a,h,f,_){return this.i.add(String(a),h,!0,f,_)};function Va(a,h,f,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,D=0;D<h.length;++D){var B=h[D];if(B&&!B.da&&B.capture==f){var ge=B.listener,tt=B.ha||B.src;B.fa&&Cc(a.i,B),N=ge.call(tt,_)!==!1&&N}}return N&&!_.defaultPrevented}function cm(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function hm(a){a.g=cm(()=>{a.g=null,a.i&&(a.i=!1,hm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class wb extends re{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:hm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vo(a){re.call(this),this.h=a,this.g={}}A(Vo,re);var dm=[];function fm(a){M(a.g,function(h,f){this.g.hasOwnProperty(f)&&Dc(h)},a),a.g={}}Vo.prototype.N=function(){Vo.aa.N.call(this),fm(this)},Vo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mc=l.JSON.stringify,Eb=l.JSON.parse,bb=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Uc(){}Uc.prototype.h=null;function pm(a){return a.h||(a.h=a.i())}function mm(){}var Lo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fc(){ae.call(this,"d")}A(Fc,ae);function jc(){ae.call(this,"c")}A(jc,ae);var qr={},gm=null;function La(){return gm=gm||new ut}qr.La="serverreachability";function ym(a){ae.call(this,qr.La,a)}A(ym,ae);function Mo(a){const h=La();bt(h,new ym(h))}qr.STAT_EVENT="statevent";function vm(a,h){ae.call(this,qr.STAT_EVENT,a),this.stat=h}A(vm,ae);function Tt(a){const h=La();bt(h,new vm(h,a))}qr.Ma="timingevent";function _m(a,h){ae.call(this,qr.Ma,a),this.size=h}A(_m,ae);function Uo(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Fo(){this.g=!0}Fo.prototype.xa=function(){this.g=!1};function Tb(a,h,f,_,N,D){a.info(function(){if(a.g)if(D)for(var B="",ge=D.split("&"),tt=0;tt<ge.length;tt++){var he=ge[tt].split("=");if(1<he.length){var ct=he[0];he=he[1];var ht=ct.split("_");B=2<=ht.length&&ht[1]=="type"?B+(ct+"="+he+"&"):B+(ct+"=redacted&")}}else B=null;else B=D;return"XMLHTTP REQ ("+_+") [attempt "+N+"]: "+h+`
`+f+`
`+B})}function Ib(a,h,f,_,N,D,B){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+N+"]: "+h+`
`+f+`
`+D+" "+B})}function Si(a,h,f,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+kb(a,f)+(_?" "+_:"")})}function Ab(a,h){a.info(function(){return"TIMEOUT: "+h})}Fo.prototype.info=function(){};function kb(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var _=f[a];if(!(2>_.length)){var N=_[1];if(Array.isArray(N)&&!(1>N.length)){var D=N[0];if(D!="noop"&&D!="stop"&&D!="close")for(var B=1;B<N.length;B++)N[B]=""}}}}return Mc(f)}catch{return h}}var Ma={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zc;function Ua(){}A(Ua,Uc),Ua.prototype.g=function(){return new XMLHttpRequest},Ua.prototype.i=function(){return{}},zc=new Ua;function er(a,h,f,_){this.j=a,this.i=h,this.l=f,this.R=_||1,this.U=new Vo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Em}function Em(){this.i=null,this.g="",this.h=!1}var bm={},Bc={};function qc(a,h,f){a.L=1,a.v=Ba(Rn(h)),a.m=f,a.P=!0,Tm(a,null)}function Tm(a,h){a.F=Date.now(),Fa(a),a.A=Rn(a.v);var f=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Mm(f.i,"t",_),a.C=0,f=a.j.J,a.h=new Em,a.g=tg(a.j,f?h:null,!a.m),0<a.O&&(a.M=new wb(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,_=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(dm[0]=N.toString()),N=dm);for(var D=0;D<N.length;D++){var B=sm(f,N[D],_||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Mo(),Tb(a.i,a.u,a.A,a.l,a.R,a.m)}er.prototype.ca=function(a){a=a.target;const h=this.M;h&&Cn(a)==3?h.j():this.Y(a)},er.prototype.Y=function(a){try{if(a==this.g)e:{const ht=Cn(this.g);var h=this.g.Ba();const Ci=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||$m(this.g)))){this.J||ht!=4||h==7||(h==8||0>=Ci?Mo(3):Mo(2)),$c(this);var f=this.g.Z();this.X=f;t:if(Im(this)){var _=$m(this.g);a="";var N=_.length,D=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$r(this),jo(this);var B="";break t}this.h.i=new l.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(D&&h==N-1)});_.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,Ib(this.i,this.u,this.A,this.l,this.R,ht,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ge,tt=this.g;if((ge=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(ge)){var he=ge;break t}}he=null}if(f=he)Si(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wc(this,f);else{this.o=!1,this.s=3,Tt(12),$r(this),jo(this);break e}}if(this.P){f=!0;let tn;for(;!this.J&&this.C<B.length;)if(tn=Sb(this,B),tn==Bc){ht==4&&(this.s=4,Tt(14),f=!1),Si(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==bm){this.s=4,Tt(15),Si(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else Si(this.i,this.l,tn,null),Wc(this,tn);if(Im(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||B.length!=0||this.h.h||(this.s=1,Tt(16),f=!1),this.o=this.o&&f,!f)Si(this.i,this.l,B,"[Invalid Chunked Response]"),$r(this),jo(this);else if(0<B.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Xc(ct),ct.M=!0,Tt(11))}}else Si(this.i,this.l,B,null),Wc(this,B);ht==4&&$r(this),this.o&&!this.J&&(ht==4?Xm(this.j,this):(this.o=!1,Fa(this)))}else $b(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),$r(this),jo(this)}}}catch{}finally{}};function Im(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Sb(a,h){var f=a.C,_=h.indexOf(`
`,f);return _==-1?Bc:(f=Number(h.substring(f,_)),isNaN(f)?bm:(_+=1,_+f>h.length?Bc:(h=h.slice(_,_+f),a.C=_+f,h)))}er.prototype.cancel=function(){this.J=!0,$r(this)};function Fa(a){a.S=Date.now()+a.I,Am(a,a.I)}function Am(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Uo(m(a.ba,a),h)}function $c(a){a.B&&(l.clearTimeout(a.B),a.B=null)}er.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Ab(this.i,this.A),this.L!=2&&(Mo(),Tt(17)),$r(this),this.s=2,jo(this)):Am(this,this.S-a)};function jo(a){a.j.G==0||a.J||Xm(a.j,a)}function $r(a){$c(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,fm(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Wc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Hc(f.h,a))){if(!a.K&&Hc(f.h,a)&&f.G==3){try{var _=f.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var N=_;if(N[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ka(f),Wa(f);else break e;Yc(f),Tt(18)}}else f.za=N[1],0<f.za-f.T&&37500>N[2]&&f.F&&f.v==0&&!f.C&&(f.C=Uo(m(f.Za,f),6e3));if(1>=Pm(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Hr(f,11)}else if((a.K||f.g==a)&&Ka(f),!y(h))for(N=f.Da.g.parse(h),h=0;h<N.length;h++){let he=N[h];if(f.T=he[0],he=he[1],f.G==2)if(he[0]=="c"){f.K=he[1],f.ia=he[2];const ct=he[3];ct!=null&&(f.la=ct,f.j.info("VER="+f.la));const ht=he[4];ht!=null&&(f.Aa=ht,f.j.info("SVER="+f.Aa));const Ci=he[5];Ci!=null&&typeof Ci=="number"&&0<Ci&&(_=1.5*Ci,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const tn=a.g;if(tn){const Qa=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qa){var D=_.h;D.g||Qa.indexOf("spdy")==-1&&Qa.indexOf("quic")==-1&&Qa.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Kc(D,D.h),D.h=null))}if(_.D){const Jc=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;Jc&&(_.ya=Jc,_e(_.I,_.D,Jc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var B=a;if(_.qa=eg(_,_.J?_.ia:null,_.W),B.K){Rm(_.h,B);var ge=B,tt=_.L;tt&&(ge.I=tt),ge.B&&($c(ge),Fa(ge)),_.g=B}else Qm(_);0<f.i.length&&Ha(f)}else he[0]!="stop"&&he[0]!="close"||Hr(f,7);else f.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?Hr(f,7):Qc(f):he[0]!="noop"&&f.l&&f.l.ta(he),f.v=0)}}Mo(4)}catch{}}var Pb=class{constructor(a,h){this.g=a,this.map=h}};function km(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Pm(a){return a.h?1:a.g?a.g.size:0}function Hc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Kc(a,h){a.g?a.g.add(h):a.h=h}function Rm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}km.prototype.cancel=function(){if(this.i=Cm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Cm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return w(a.i)}function Rb(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,_=0;_<f;_++)h.push(a[_]);return h}h=[],f=0;for(_ in a)h[f++]=a[_];return h}function Cb(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const _ in a)h[f++]=_;return h}}}function xm(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Cb(a),_=Rb(a),N=_.length,D=0;D<N;D++)h.call(void 0,_[D],f&&f[D],a)}var Nm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xb(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var _=a[f].indexOf("="),N=null;if(0<=_){var D=a[f].substring(0,_);N=a[f].substring(_+1)}else D=a[f];h(D,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Wr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Wr){this.h=a.h,ja(this,a.j),this.o=a.o,this.g=a.g,za(this,a.s),this.l=a.l;var h=a.i,f=new qo;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Om(this,f),this.m=a.m}else a&&(h=String(a).match(Nm))?(this.h=!1,ja(this,h[1]||"",!0),this.o=zo(h[2]||""),this.g=zo(h[3]||"",!0),za(this,h[4]),this.l=zo(h[5]||"",!0),Om(this,h[6]||"",!0),this.m=zo(h[7]||"")):(this.h=!1,this.i=new qo(null,this.h))}Wr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Bo(h,Dm,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Bo(h,Dm,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Bo(f,f.charAt(0)=="/"?Db:Ob,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Bo(f,Lb)),a.join("")};function Rn(a){return new Wr(a)}function ja(a,h,f){a.j=f?zo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function za(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Om(a,h,f){h instanceof qo?(a.i=h,Mb(a.i,a.h)):(f||(h=Bo(h,Vb)),a.i=new qo(h,a.h))}function _e(a,h,f){a.i.set(h,f)}function Ba(a){return _e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function zo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Bo(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Nb),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Nb(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Dm=/[#\/\?@]/g,Ob=/[#\?:]/g,Db=/[#\?]/g,Vb=/[#\?@]/g,Lb=/#/g;function qo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function tr(a){a.g||(a.g=new Map,a.h=0,a.i&&xb(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=qo.prototype,t.add=function(a,h){tr(this),this.i=null,a=Pi(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Vm(a,h){tr(a),h=Pi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Lm(a,h){return tr(a),h=Pi(a,h),a.g.has(h)}t.forEach=function(a,h){tr(this),this.g.forEach(function(f,_){f.forEach(function(N){a.call(h,N,_,this)},this)},this)},t.na=function(){tr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let _=0;_<h.length;_++){const N=a[_];for(let D=0;D<N.length;D++)f.push(h[_])}return f},t.V=function(a){tr(this);let h=[];if(typeof a=="string")Lm(this,a)&&(h=h.concat(this.g.get(Pi(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return tr(this),this.i=null,a=Pi(this,a),Lm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Mm(a,h,f){Vm(a,h),0<f.length&&(a.i=null,a.g.set(Pi(a,h),w(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var _=h[f];const D=encodeURIComponent(String(_)),B=this.V(_);for(_=0;_<B.length;_++){var N=D;B[_]!==""&&(N+="="+encodeURIComponent(String(B[_]))),a.push(N)}}return this.i=a.join("&")};function Pi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Mb(a,h){h&&!a.j&&(tr(a),a.i=null,a.g.forEach(function(f,_){var N=_.toLowerCase();_!=N&&(Vm(this,_),Mm(this,N,f))},a)),a.j=h}function Ub(a,h){const f=new Fo;if(l.Image){const _=new Image;_.onload=b(nr,f,"TestLoadImage: loaded",!0,h,_),_.onerror=b(nr,f,"TestLoadImage: error",!1,h,_),_.onabort=b(nr,f,"TestLoadImage: abort",!1,h,_),_.ontimeout=b(nr,f,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function Fb(a,h){const f=new Fo,_=new AbortController,N=setTimeout(()=>{_.abort(),nr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(D=>{clearTimeout(N),D.ok?nr(f,"TestPingServer: ok",!0,h):nr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),nr(f,"TestPingServer: error",!1,h)})}function nr(a,h,f,_,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),_(f)}catch{}}function jb(){this.g=new bb}function zb(a,h,f){const _=f||"";try{xm(a,function(N,D){let B=N;c(N)&&(B=Mc(N)),h.push(_+D+"="+encodeURIComponent(B))})}catch(N){throw h.push(_+"type="+encodeURIComponent("_badmap")),N}}function $o(a){this.l=a.Ub||null,this.j=a.eb||!1}A($o,Uc),$o.prototype.g=function(){return new qa(this.l,this.j)},$o.prototype.i=function(a){return function(){return a}}({});function qa(a,h){ut.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(qa,ut),t=qa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ho(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wo(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ho(this)),this.g&&(this.readyState=3,Ho(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Um(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Um(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Wo(this):Ho(this),this.readyState==3&&Um(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Wo(this))},t.Qa=function(a){this.g&&(this.response=a,Wo(this))},t.ga=function(){this.g&&Wo(this)};function Wo(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ho(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Ho(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(qa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Fm(a){let h="";return M(a,function(f,_){h+=_,h+=":",h+=f,h+=`\r
`}),h}function Gc(a,h,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=Fm(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):_e(a,h,f))}function xe(a){ut.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(xe,ut);var Bb=/^https?$/i,qb=["POST","PUT"];t=xe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zc.g(),this.v=this.o?pm(this.o):pm(zc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){jm(this,D);return}if(a=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var N in _)f.set(N,_[N]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const D of _.keys())f.set(D,_.get(D));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(qb,h,void 0))||_||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,B]of f)this.g.setRequestHeader(D,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qm(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){jm(this,D)}};function jm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,zm(a),$a(a)}function zm(a){a.A||(a.A=!0,bt(a,"complete"),bt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,bt(this,"complete"),bt(this,"abort"),$a(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$a(this,!0)),xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Bm(this):this.bb())},t.bb=function(){Bm(this)};function Bm(a){if(a.h&&typeof s<"u"&&(!a.v[1]||Cn(a)!=4||a.Z()!=2)){if(a.u&&Cn(a)==4)cm(a.Ea,0,a);else if(bt(a,"readystatechange"),Cn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var _;if(_=B===0){var N=String(a.D).match(Nm)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),_=!Bb.test(N?N.toLowerCase():"")}f=_}if(f)bt(a,"complete"),bt(a,"success");else{a.m=6;try{var D=2<Cn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",zm(a)}}finally{$a(a)}}}}function $a(a,h){if(a.g){qm(a);const f=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||bt(a,"ready");try{f.onreadystatechange=_}catch{}}}function qm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Cn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Eb(h)}};function $m(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function $b(a){const h={};a=(a.g&&2<=Cn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(y(a[_]))continue;var f=R(a[_]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[N]||[];h[N]=D,D.push(f)}I(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ko(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Wm(a){this.Aa=0,this.i=[],this.j=new Fo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ko("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ko("baseRetryDelayMs",5e3,a),this.cb=Ko("retryDelaySeedMs",1e4,a),this.Wa=Ko("forwardChannelMaxRetries",2,a),this.wa=Ko("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new km(a&&a.concurrentRequestLimit),this.Da=new jb,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Wm.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,_){Tt(0),this.W=a,this.H=h||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=eg(this,null,this.W),Ha(this)};function Qc(a){if(Hm(a),a.G==3){var h=a.U++,f=Rn(a.I);if(_e(f,"SID",a.K),_e(f,"RID",h),_e(f,"TYPE","terminate"),Go(a,f),h=new er(a,a.j,h),h.L=2,h.v=Ba(Rn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=tg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Fa(h)}Zm(a)}function Wa(a){a.g&&(Xc(a),a.g.cancel(),a.g=null)}function Hm(a){Wa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ka(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ha(a){if(!Sm(a.h)&&!a.s){a.s=!0;var h=a.Ga;fe||Y(),z||(fe(),z=!0),Q.add(h,a),a.B=0}}function Wb(a,h){return Pm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Uo(m(a.Ga,a,h),Jm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new er(this,this.j,a);let D=this.o;if(this.S&&(D?(D=g(D),S(D,this.S)):D=this.S),this.m!==null||this.O||(N.H=D,D=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Gm(this,N,h),f=Rn(this.I),_e(f,"RID",a),_e(f,"CVER",22),this.D&&_e(f,"X-HTTP-Session-Id",this.D),Go(this,f),D&&(this.O?h="headers="+encodeURIComponent(String(Fm(D)))+"&"+h:this.m&&Gc(f,this.m,D)),Kc(this.h,N),this.Ua&&_e(f,"TYPE","init"),this.P?(_e(f,"$req",h),_e(f,"SID","null"),N.T=!0,qc(N,f,null)):qc(N,f,h),this.G=2}}else this.G==3&&(a?Km(this,a):this.i.length==0||Sm(this.h)||Km(this))};function Km(a,h){var f;h?f=h.l:f=a.U++;const _=Rn(a.I);_e(_,"SID",a.K),_e(_,"RID",f),_e(_,"AID",a.T),Go(a,_),a.m&&a.o&&Gc(_,a.m,a.o),f=new er(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Gm(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Kc(a.h,f),qc(f,_,h)}function Go(a,h){a.H&&M(a.H,function(f,_){_e(h,_,f)}),a.l&&xm({},function(f,_){_e(h,_,f)})}function Gm(a,h,f){f=Math.min(a.i.length,f);var _=a.l?m(a.l.Na,a.l,a):null;e:{var N=a.i;let D=-1;for(;;){const B=["count="+f];D==-1?0<f?(D=N[0].g,B.push("ofs="+D)):D=0:B.push("ofs="+D);let ge=!0;for(let tt=0;tt<f;tt++){let he=N[tt].g;const ct=N[tt].map;if(he-=D,0>he)D=Math.max(0,N[tt].g-100),ge=!1;else try{zb(ct,B,"req"+he+"_")}catch{_&&_(ct)}}if(ge){_=B.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,_}function Qm(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;fe||Y(),z||(fe(),z=!0),Q.add(h,a),a.v=0}}function Yc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Uo(m(a.Fa,a),Jm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ym(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Uo(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),Wa(this),Ym(this))};function Xc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ym(a){a.g=new er(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Rn(a.qa);_e(h,"RID","rpc"),_e(h,"SID",a.K),_e(h,"AID",a.T),_e(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&_e(h,"TO",a.ja),_e(h,"TYPE","xmlhttp"),Go(a,h),a.m&&a.o&&Gc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ba(Rn(h)),f.m=null,f.P=!0,Tm(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Wa(this),Yc(this),Tt(19))};function Ka(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Xm(a,h){var f=null;if(a.g==h){Ka(a),Xc(a),a.g=null;var _=2}else if(Hc(a.h,h))f=h.D,Rm(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var N=a.B;_=La(),bt(_,new _m(_,f)),Ha(a)}else Qm(a);else if(N=h.s,N==3||N==0&&0<h.X||!(_==1&&Wb(a,h)||_==2&&Yc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),N){case 1:Hr(a,5);break;case 4:Hr(a,10);break;case 3:Hr(a,6);break;default:Hr(a,2)}}}function Jm(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Hr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),_=a.Xa;const N=!_;_=new Wr(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ja(_,"https"),Ba(_),N?Ub(_.toString(),f):Fb(_.toString(),f)}else Tt(2);a.G=0,a.l&&a.l.sa(h),Zm(a),Hm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function Zm(a){if(a.G=0,a.ka=[],a.l){const h=Cm(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ka,h),P(a.ka,a.i),a.h.i.length=0,w(a.i),a.i.length=0),a.l.ra()}}function eg(a,h,f){var _=f instanceof Wr?Rn(f):new Wr(f);if(_.g!="")h&&(_.g=h+"."+_.g),za(_,_.s);else{var N=l.location;_=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var D=new Wr(null);_&&ja(D,_),h&&(D.g=h),N&&za(D,N),f&&(D.l=f),_=D}return f=a.D,h=a.ya,f&&h&&_e(_,f,h),_e(_,"VER",a.la),Go(a,_),_}function tg(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new xe(new $o({eb:f})):new xe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ng(){}t=ng.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ga(){}Ga.prototype.g=function(a,h){return new Lt(a,h)};function Lt(a,h){ut.call(this),this.g=new Wm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!y(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ri(this)}A(Lt,ut),Lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){Qc(this.g)},Lt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Mc(a),a=f);h.i.push(new Pb(h.Ya++,a)),h.G==3&&Ha(h)},Lt.prototype.N=function(){this.g.l=null,delete this.j,Qc(this.g),delete this.g,Lt.aa.N.call(this)};function rg(a){Fc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(rg,Fc);function ig(){jc.call(this),this.status=1}A(ig,jc);function Ri(a){this.g=a}A(Ri,ng),Ri.prototype.ua=function(){bt(this.g,"a")},Ri.prototype.ta=function(a){bt(this.g,new rg(a))},Ri.prototype.sa=function(a){bt(this.g,new ig)},Ri.prototype.ra=function(){bt(this.g,"b")},Ga.prototype.createWebChannel=Ga.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,bw=function(){return new Ga},Ew=function(){return La()},ww=qr,qd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ma.NO_ERROR=0,Ma.TIMEOUT=8,Ma.HTTP_ERROR=6,zl=Ma,wm.COMPLETE="complete",_w=wm,mm.EventType=Lo,Lo.OPEN="a",Lo.CLOSE="b",Lo.ERROR="c",Lo.MESSAGE="d",ut.prototype.listen=ut.prototype.K,hs=mm,vw=$o,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha,yw=xe}).apply(typeof pl<"u"?pl:typeof self<"u"?self:typeof window<"u"?window:{});const Jy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo="10.13.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new sp("@firebase/firestore");function rs(){return mi.logLevel}function H(t,...e){if(mi.logLevel<=se.DEBUG){const n=e.map(vp);mi.debug(`Firestore (${xo}): ${t}`,...n)}}function Qn(t,...e){if(mi.logLevel<=se.ERROR){const n=e.map(vp);mi.error(`Firestore (${xo}): ${t}`,...n)}}function yo(t,...e){if(mi.logLevel<=se.WARN){const n=e.map(vp);mi.warn(`Firestore (${xo}): ${t}`,...n)}}function vp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${xo}) INTERNAL ASSERTION FAILED: `+t;throw Qn(e),new Error(e)}function ye(t,e){t||Z()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class EC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class bC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class TC{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let o=new Bn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Bn,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Bn)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new Tw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new mt(e)}}class IC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class AC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new IC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=o=>{o.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,H("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.R=n.token,new kC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=PC(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function vo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Qe(0,0))}static max(){return new ee(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ta.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ta?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends ta{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const RC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends ta{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return RC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new $(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(s=!s,i++):l!=="."||s?(r+=l,i++):(o(),i++)}if(o(),s)throw new $(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Ee.fromString(e))}static fromName(e){return new G(Ee.fromString(e).popFirst(5))}static empty(){return new G(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Ee(e.slice()))}}function CC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new Dr(i,G.empty(),e)}function xC(t){return new Dr(t.readTime,t.key,-1)}class Dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Dr(ee.min(),G.empty(),-1)}static max(){return new Dr(ee.max(),G.empty(),-1)}}function NC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wa(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==OC)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,o=0,s=!1;e.forEach(l=>{++i,l.next(()=>{++o,s&&o===i&&n()},u=>r(u))}),s=!0,o===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const o=e.length,s=new Array(o);let l=0;for(let u=0;u<o;u++){const c=u;n(e[c]).next(d=>{s[c]=d,++l,l===o&&r(s)},d=>i(d))}})}static doWhile(e,n){return new F((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function VC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ea(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}_p.oe=-1;function uc(t){return t==null}function Su(t){return t===0&&1/t==-1/0}function LC(t){return typeof t=="number"&&Number.isInteger(t)&&!Su(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ti(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Aw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ml(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ml(this.root,e,this.comparator,!1)}getReverseIterator(){return new ml(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ml(this.root,e,this.comparator,!0)}}class ml{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??rt.RED,this.left=i??rt.EMPTY,this.right=o??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new rt(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,i,o){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ev(this.data.getIterator())}getIteratorFrom(e){return new ev(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class ev{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new jt([])}unionWith(e){let n=new st(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new kw("Invalid base64 string: "+o):o}}(e);return new lt(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const MC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vr(t){if(ye(!!t),typeof t=="string"){let e=0;const n=MC.exec(t);if(ye(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gi(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ep(t){const e=t.mapValue.fields.__previous_value__;return wp(e)?Ep(e):e}function na(t){const e=Vr(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,n,r,i,o,s,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class ra{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ra("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ra&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function yi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wp(t)?4:jC(t)?9007199254740991:FC(t)?10:11:Z()}function Sn(t,e){if(t===e)return!0;const n=yi(t);if(n!==yi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return na(t).isEqual(na(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=Vr(i.timestampValue),l=Vr(o.timestampValue);return s.seconds===l.seconds&&s.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return gi(i.bytesValue).isEqual(gi(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Me(i.geoPointValue.latitude)===Me(o.geoPointValue.latitude)&&Me(i.geoPointValue.longitude)===Me(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Me(i.integerValue)===Me(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Me(i.doubleValue),l=Me(o.doubleValue);return s===l?Su(s)===Su(l):isNaN(s)&&isNaN(l)}return!1}(t,e);case 9:return vo(t.arrayValue.values||[],e.arrayValue.values||[],Sn);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},l=o.mapValue.fields||{};if(Zy(s)!==Zy(l))return!1;for(const u in s)if(s.hasOwnProperty(u)&&(l[u]===void 0||!Sn(s[u],l[u])))return!1;return!0}(t,e);default:return Z()}}function ia(t,e){return(t.values||[]).find(n=>Sn(n,e))!==void 0}function _o(t,e){if(t===e)return 0;const n=yi(t),r=yi(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(o,s){const l=Me(o.integerValue||o.doubleValue),u=Me(s.integerValue||s.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return tv(t.timestampValue,e.timestampValue);case 4:return tv(na(t),na(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(o,s){const l=gi(o),u=gi(s);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const l=o.split("/"),u=s.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=de(l[c],u[c]);if(d!==0)return d}return de(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const l=de(Me(o.latitude),Me(s.latitude));return l!==0?l:de(Me(o.longitude),Me(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return nv(t.arrayValue,e.arrayValue);case 10:return function(o,s){var l,u,c,d;const p=o.fields||{},m=s.fields||{},b=(l=p.value)===null||l===void 0?void 0:l.arrayValue,A=(u=m.value)===null||u===void 0?void 0:u.arrayValue,w=de(((c=b==null?void 0:b.values)===null||c===void 0?void 0:c.length)||0,((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0);return w!==0?w:nv(b,A)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===gl.mapValue&&s===gl.mapValue)return 0;if(o===gl.mapValue)return 1;if(s===gl.mapValue)return-1;const l=o.fields||{},u=Object.keys(l),c=s.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=de(u[p],d[p]);if(m!==0)return m;const b=_o(l[u[p]],c[d[p]]);if(b!==0)return b}return de(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Z()}}function tv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=Vr(t),r=Vr(e),i=de(n.seconds,r.seconds);return i!==0?i:de(n.nanos,r.nanos)}function nv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=_o(n[i],r[i]);if(o)return o}return de(n.length,r.length)}function wo(t){return $d(t)}function $d(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return gi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=$d(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${$d(n.fields[s])}`;return i+"}"}(t.mapValue):Z()}function rv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wd(t){return!!t&&"integerValue"in t}function bp(t){return!!t&&"arrayValue"in t}function iv(t){return!!t&&"nullValue"in t}function ov(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bl(t){return!!t&&"mapValue"in t}function FC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ks(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ti(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ks(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ks(t.arrayValue.values[n]);return e}return Object.assign({},t)}function jC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Bl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ks(n)}setAll(e){let n=it.emptyPath(),r={},i=[];e.forEach((s,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}s?r[l.lastSegment()]=ks(s):i.push(l.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());Bl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Bl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ti(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new xt(ks(this.value))}}function Sw(t){const e=[];return Ti(t.fields,(n,r)=>{const i=new it([n]);if(Bl(r)){const o=Sw(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n,r,i,o,s,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=l}static newInvalidDocument(e){return new yt(e,0,ee.min(),ee.min(),ee.min(),xt.empty(),0)}static newFoundDocument(e,n,r,i){return new yt(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new yt(e,2,n,ee.min(),ee.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,ee.min(),ee.min(),xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n){this.position=e,this.inclusive=n}}function sv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=G.comparator(G.fromName(s.referenceValue),n.key):r=_o(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function av(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Sn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n="asc"){this.field=e,this.dir=n}}function zC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{}class $e extends Pw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new qC(e,n,r):n==="array-contains"?new HC(e,r):n==="in"?new KC(e,r):n==="not-in"?new GC(e,r):n==="array-contains-any"?new QC(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $C(e,r):new WC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_o(n,this.value)):n!==null&&yi(this.value)===yi(n)&&this.matchesComparison(_o(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fn extends Pw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new fn(e,n)}matches(e){return Rw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Rw(t){return t.op==="and"}function Cw(t){return BC(t)&&Rw(t)}function BC(t){for(const e of t.filters)if(e instanceof fn)return!1;return!0}function Hd(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+wo(t.value);if(Cw(t))return t.filters.map(e=>Hd(e)).join(",");{const e=t.filters.map(n=>Hd(n)).join(",");return`${t.op}(${e})`}}function xw(t,e){return t instanceof $e?function(r,i){return i instanceof $e&&r.op===i.op&&r.field.isEqual(i.field)&&Sn(r.value,i.value)}(t,e):t instanceof fn?function(r,i){return i instanceof fn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,l)=>o&&xw(s,i.filters[l]),!0):!1}(t,e):void Z()}function Nw(t){return t instanceof $e?function(n){return`${n.field.canonicalString()} ${n.op} ${wo(n.value)}`}(t):t instanceof fn?function(n){return n.op.toString()+" {"+n.getFilters().map(Nw).join(" ,")+"}"}(t):"Filter"}class qC extends $e{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class $C extends $e{constructor(e,n){super(e,"in",n),this.keys=Ow("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class WC extends $e{constructor(e,n){super(e,"not-in",n),this.keys=Ow("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ow(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class HC extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bp(n)&&ia(n.arrayValue,this.value)}}class KC extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ia(this.value.arrayValue,n)}}class GC extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(ia(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ia(this.value.arrayValue,n)}}class QC extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ia(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n=null,r=[],i=[],o=null,s=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=l,this.ue=null}}function lv(t,e=null,n=[],r=[],i=null,o=null,s=null){return new YC(t,e,n,r,i,o,s)}function Tp(t){const e=te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),uc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>wo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>wo(r)).join(",")),e.ue=n}return e.ue}function Ip(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!av(t.startAt,e.startAt)&&av(t.endAt,e.endAt)}function Kd(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n=null,r=[],i=[],o=null,s="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function XC(t,e,n,r,i,o,s,l){return new ba(t,e,n,r,i,o,s,l)}function cc(t){return new ba(t)}function uv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Dw(t){return t.collectionGroup!==null}function Ss(t){const e=te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let l=new st(it.comparator);return s.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Ru(o,r))}),n.has(it.keyField().canonicalString())||e.ce.push(new Ru(it.keyField(),r))}return e.ce}function In(t){const e=te(t);return e.le||(e.le=JC(e,Ss(t))),e.le}function JC(t,e){if(t.limitType==="F")return lv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Ru(i.field,o)});const n=t.endAt?new Pu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Pu(t.startAt.position,t.startAt.inclusive):null;return lv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Gd(t,e){const n=t.filters.concat([e]);return new ba(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Qd(t,e,n){return new ba(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hc(t,e){return Ip(In(t),In(e))&&t.limitType===e.limitType}function Vw(t){return`${Tp(In(t))}|lt:${t.limitType}`}function Mi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Nw(i)).join(", ")}]`),uc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>wo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>wo(i)).join(",")),`Target(${r})`}(In(t))}; limitType=${t.limitType})`}function dc(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):G.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of Ss(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,l,u){const c=sv(s,l,u);return s.inclusive?c<=0:c<0}(r.startAt,Ss(r),i)||r.endAt&&!function(s,l,u){const c=sv(s,l,u);return s.inclusive?c>=0:c>0}(r.endAt,Ss(r),i))}(t,e)}function ZC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Lw(t){return(e,n)=>{let r=!1;for(const i of Ss(t)){const o=ex(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function ex(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(o,s,l){const u=s.data.field(o),c=l.data.field(o);return u!==null&&c!==null?_o(u,c):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ti(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return Aw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx=new Re(G.comparator);function Yn(){return tx}const Mw=new Re(G.comparator);function ds(...t){let e=Mw;for(const n of t)e=e.insert(n.key,n);return e}function Uw(t){let e=Mw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ei(){return Ps()}function Fw(){return Ps()}function Ps(){return new No(t=>t.toString(),(t,e)=>t.isEqual(e))}const nx=new Re(G.comparator),rx=new st(G.comparator);function oe(...t){let e=rx;for(const n of t)e=e.add(n);return e}const ix=new st(de);function ox(){return ix}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Su(e)?"-0":e}}function jw(t){return{integerValue:""+t}}function sx(t,e){return LC(e)?jw(e):Ap(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(){this._=void 0}}function ax(t,e,n){return t instanceof oa?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&wp(o)&&(o=Ep(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof Eo?Bw(t,e):t instanceof sa?qw(t,e):function(i,o){const s=zw(i,o),l=cv(s)+cv(i.Pe);return Wd(s)&&Wd(i.Pe)?jw(l):Ap(i.serializer,l)}(t,e)}function lx(t,e,n){return t instanceof Eo?Bw(t,e):t instanceof sa?qw(t,e):n}function zw(t,e){return t instanceof Cu?function(r){return Wd(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class oa extends fc{}class Eo extends fc{constructor(e){super(),this.elements=e}}function Bw(t,e){const n=$w(e);for(const r of t.elements)n.some(i=>Sn(i,r))||n.push(r);return{arrayValue:{values:n}}}class sa extends fc{constructor(e){super(),this.elements=e}}function qw(t,e){let n=$w(e);for(const r of t.elements)n=n.filter(i=>!Sn(i,r));return{arrayValue:{values:n}}}class Cu extends fc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function cv(t){return Me(t.integerValue||t.doubleValue)}function $w(t){return bp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,n){this.field=e,this.transform=n}}function ux(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Eo&&i instanceof Eo||r instanceof sa&&i instanceof sa?vo(r.elements,i.elements,Sn):r instanceof Cu&&i instanceof Cu?Sn(r.Pe,i.Pe):r instanceof oa&&i instanceof oa}(t.transform,e.transform)}class cx{constructor(e,n){this.version=e,this.transformResults=n}}class An{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new An}static exists(e){return new An(void 0,e)}static updateTime(e){return new An(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ql(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pc{}function Hw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Gw(t.key,An.none()):new Ta(t.key,t.data,An.none());{const n=t.data,r=xt.empty();let i=new st(it.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Br(t.key,r,new jt(i.toArray()),An.none())}}function hx(t,e,n){t instanceof Ta?function(i,o,s){const l=i.value.clone(),u=dv(i.fieldTransforms,o,s.transformResults);l.setAll(u),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Br?function(i,o,s){if(!ql(i.precondition,o))return void o.convertToUnknownDocument(s.version);const l=dv(i.fieldTransforms,o,s.transformResults),u=o.data;u.setAll(Kw(i)),u.setAll(l),o.convertToFoundDocument(s.version,u).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Rs(t,e,n,r){return t instanceof Ta?function(o,s,l,u){if(!ql(o.precondition,s))return l;const c=o.value.clone(),d=fv(o.fieldTransforms,u,s);return c.setAll(d),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Br?function(o,s,l,u){if(!ql(o.precondition,s))return l;const c=fv(o.fieldTransforms,u,s),d=s.data;return d.setAll(Kw(o)),d.setAll(c),s.convertToFoundDocument(s.version,d).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(o,s,l){return ql(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):l}(t,e,n)}function dx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=zw(r.transform,i||null);o!=null&&(n===null&&(n=xt.empty()),n.set(r.field,o))}return n||null}function hv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&vo(r,i,(o,s)=>ux(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ta extends pc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Br extends pc{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Kw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function dv(t,e,n){const r=new Map;ye(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,l=e.data.field(o.field);r.set(o.field,lx(s,l,n[i]))}return r}function fv(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,ax(o,s,e))}return r}class Gw extends pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fx extends pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&hx(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Rs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Rs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Fw();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let l=this.applyToLocalView(s,o.mutatedFields);l=n.has(i.key)?null:l;const u=Hw(s,l);u!==null&&r.set(i.key,u),s.isValidDocument()||s.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&vo(this.mutations,e.mutations,(n,r)=>hv(n,r))&&vo(this.baseMutations,e.baseMutations,(n,r)=>hv(n,r))}}class kp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ye(e.mutations.length===r.length);let i=function(){return nx}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new kp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,le;function yx(t){switch(t){default:return Z();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function Qw(t){if(t===void 0)return Qn("GRPC error has no .code"),U.UNKNOWN;switch(t){case ze.OK:return U.OK;case ze.CANCELLED:return U.CANCELLED;case ze.UNKNOWN:return U.UNKNOWN;case ze.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case ze.INTERNAL:return U.INTERNAL;case ze.UNAVAILABLE:return U.UNAVAILABLE;case ze.UNAUTHENTICATED:return U.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case ze.NOT_FOUND:return U.NOT_FOUND;case ze.ALREADY_EXISTS:return U.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return U.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case ze.ABORTED:return U.ABORTED;case ze.OUT_OF_RANGE:return U.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return U.UNIMPLEMENTED;case ze.DATA_LOSS:return U.DATA_LOSS;default:return Z()}}(le=ze||(ze={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vx(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x=new ii([4294967295,4294967295],0);function pv(t){const e=vx().encode(t),n=new gw;return n.update(e),new Uint8Array(n.digest())}function mv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new ii([n,r],0),new ii([i,o],0)]}class Sp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new fs(`Invalid padding: ${n}`);if(r<0)throw new fs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new fs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ii.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ii.fromNumber(r)));return i.compare(_x)===1&&(i=new ii([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=pv(e),[r,i]=mv(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);if(!this.de(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new Sp(o,i,n);return r.forEach(l=>s.insert(l)),s}insert(e){if(this.Ie===0)return;const n=pv(e),[r,i]=mv(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);this.Ae(s)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ia.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new mc(ee.min(),i,new Re(de),Yn(),oe())}}class Ia{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ia(r,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Yw{constructor(e,n){this.targetId=e,this.me=n}}class Xw{constructor(e,n,r=lt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class gv{constructor(){this.fe=0,this.ge=vv(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=oe(),n=oe(),r=oe();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new Ia(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=vv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ye(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class wx{constructor(e){this.Le=e,this.Be=new Map,this.ke=Yn(),this.qe=yv(),this.Qe=new Re(de)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const o=i.target;if(Kd(o))if(r===0){const s=new G(o.path);this.Ue(n,s,yt.newNoDocument(s,ee.min()))}else ye(r===1);else{const s=this.Ye(n);if(s!==r){const l=this.Ze(e),u=l?this.Xe(l,e,s):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,l;try{s=gi(r).toUint8Array()}catch(u){if(u instanceof kw)return yo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Sp(s,i,o)}catch(u){return yo(u instanceof fs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.tt(),l=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,o,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((o,s)=>{const l=this.Je(s);if(l){if(o.current&&Kd(l.target)){const u=new G(l.target.path);this.ke.get(u)!==null||this.it(s,u)||this.Ue(s,u,yt.newNoDocument(u,e))}o.be&&(n.set(s,o.ve()),o.Ce())}});let r=oe();this.qe.forEach((o,s)=>{let l=!0;s.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new mc(e,n,this.Qe,this.ke,r);return this.ke=Yn(),this.qe=yv(),this.Qe=new Re(de),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new gv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new st(de),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new gv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function yv(){return new Re(G.comparator)}function vv(){return new Re(G.comparator)}const Ex={asc:"ASCENDING",desc:"DESCENDING"},bx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Tx={and:"AND",or:"OR"};class Ix{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yd(t,e){return t.useProto3Json||uc(e)?e:{value:e}}function xu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Jw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ax(t,e){return xu(t,e.toTimestamp())}function kn(t){return ye(!!t),ee.fromTimestamp(function(n){const r=Vr(n);return new Qe(r.seconds,r.nanos)}(t))}function Pp(t,e){return Xd(t,e).canonicalString()}function Xd(t,e){const n=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Zw(t){const e=Ee.fromString(t);return ye(iE(e)),e}function Jd(t,e){return Pp(t.databaseId,e.path)}function Oh(t,e){const n=Zw(e);if(n.get(1)!==t.databaseId.projectId)throw new $(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(tE(n))}function eE(t,e){return Pp(t.databaseId,e)}function kx(t){const e=Zw(t);return e.length===4?Ee.emptyPath():tE(e)}function Zd(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function tE(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _v(t,e,n){return{name:Jd(t,e),fields:n.value.mapValue.fields}}function Sx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(c,d){return c.useProto3Json?(ye(d===void 0||typeof d=="string"),lt.fromBase64String(d||"")):(ye(d===void 0||d instanceof Buffer||d instanceof Uint8Array),lt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,l=s&&function(c){const d=c.code===void 0?U.UNKNOWN:Qw(c.code);return new $(d,c.message||"")}(s);n=new Xw(r,i,o,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Oh(t,r.document.name),o=kn(r.document.updateTime),s=r.document.createTime?kn(r.document.createTime):ee.min(),l=new xt({mapValue:{fields:r.document.fields}}),u=yt.newFoundDocument(i,o,s,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new $l(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Oh(t,r.document),o=r.readTime?kn(r.readTime):ee.min(),s=yt.newNoDocument(i,o),l=r.removedTargetIds||[];n=new $l([],l,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Oh(t,r.document),o=r.removedTargetIds||[];n=new $l([],o,i,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new gx(i,o),l=r.targetId;n=new Yw(l,s)}}return n}function Px(t,e){let n;if(e instanceof Ta)n={update:_v(t,e.key,e.value)};else if(e instanceof Gw)n={delete:Jd(t,e.key)};else if(e instanceof Br)n={update:_v(t,e.key,e.data),updateMask:Mx(e.fieldMask)};else{if(!(e instanceof fx))return Z();n={verify:Jd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const l=s.transform;if(l instanceof oa)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Eo)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof sa)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Cu)return{fieldPath:s.field.canonicalString(),increment:l.Pe};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Ax(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:Z()}(t,e.precondition)),n}function Rx(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?kn(i.updateTime):kn(o);return s.isEqual(ee.min())&&(s=kn(o)),new cx(s,i.transformResults||[])}(n,e))):[]}function Cx(t,e){return{documents:[eE(t,e.path)]}}function xx(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=eE(t,i);const o=function(c){if(c.length!==0)return rE(fn.create(c,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Ui(m.field),direction:Dx(m.dir)}}(d))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const l=Yd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function Nx(t){let e=kx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ye(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let o=[];n.where&&(o=function(p){const m=nE(p);return m instanceof fn&&Cw(m)?m.getFilters():[m]}(n.where));let s=[];n.orderBy&&(s=function(p){return p.map(m=>function(A){return new Ru(Fi(A.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,uc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,b=p.values||[];return new Pu(b,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,b=p.values||[];return new Pu(b,m)}(n.endAt)),XC(e,i,s,o,l,"F",u,c)}function Ox(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function nE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fi(n.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Fi(n.unaryFilter.field);return $e.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Fi(n.unaryFilter.field);return $e.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Fi(n.unaryFilter.field);return $e.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return $e.create(Fi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fn.create(n.compositeFilter.filters.map(r=>nE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function Dx(t){return Ex[t]}function Vx(t){return bx[t]}function Lx(t){return Tx[t]}function Ui(t){return{fieldPath:t.canonicalString()}}function Fi(t){return it.fromServerFormat(t.fieldPath)}function rE(t){return t instanceof $e?function(n){if(n.op==="=="){if(ov(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NAN"}};if(iv(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ov(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NOT_NAN"}};if(iv(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ui(n.field),op:Vx(n.op),value:n.value}}}(t):t instanceof fn?function(n){const r=n.getFilters().map(i=>rE(i));return r.length===1?r[0]:{compositeFilter:{op:Lx(n.op),filters:r}}}(t):Z()}function Mx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function iE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n,r,i,o=ee.min(),s=ee.min(),l=lt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e){this.ct=e}}function Fx(t){const e=Nx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(){this.un=new zx}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Dr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Dr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class zx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new st(Ee.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new st(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new bo(0)}static kn(){return new bo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(){this.changes=new No(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Rs(r.mutation,i,jt.empty(),Qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=ei();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=ds();return o.forEach((l,u)=>{s=s.insert(l,u.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=ei();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,l)=>{n.set(s,l)})})}computeViews(e,n,r,i){let o=Yn();const s=Ps(),l=function(){return Ps()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Br)?o=o.insert(c.key,c):d!==void 0?(s.set(c.key,d.mutation.getFieldMask()),Rs(d.mutation,c,d.mutation.getFieldMask(),Qe.now())):s.set(c.key,jt.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((c,d)=>s.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new qx(d,(p=s.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ps();let i=new Re((s,l)=>s-l),o=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const l of s)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||jt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||oe()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const s=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=Fw();d.forEach(m=>{if(!o.has(m)){const b=Hw(n.get(m),r.get(m));b!==null&&p.set(m,b),o=o.add(m)}}),s.push(this.documentOverlayCache.saveOverlays(e,c,p))}return F.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return G.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Dw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):F.resolve(ei());let l=-1,u=o;return s.next(c=>F.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),o.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,o)).next(()=>this.computeViews(e,u,c,oe())).next(d=>({batchId:l,changes:Uw(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=ds();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=ds();return this.indexManager.getCollectionParents(e,o).next(l=>F.forEach(l,u=>{const c=function(p,m){return new ba(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{s=s.insert(p,m)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((u,c)=>{const d=c.getKey();s.get(d)===null&&(s=s.insert(d,yt.newInvalidDocument(d)))});let l=ds();return s.forEach((u,c)=>{const d=o.get(u);d!==void 0&&Rs(d.mutation,c,jt.empty(),Qe.now()),dc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:kn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Fx(i.bundledQuery),readTime:kn(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(){this.overlays=new Re(G.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ei();return F.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=ei(),o=n.length+1,s=new G(n.child("")),l=this.overlays.getIteratorFrom(s);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new Re((c,d)=>c-d);const s=this.overlays.getIterator();for(;s.hasNext();){const c=s.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=o.get(c.largestBatchId);d===null&&(d=ei(),o=o.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=ei(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return F.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new mx(n,r));let o=this.Ir.get(n);o===void 0&&(o=oe(),this.Ir.set(n,o)),this.Ir.set(n,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(){this.Tr=new st(Xe.Er),this.dr=new st(Xe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Xe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new G(new Ee([])),r=new Xe(n,e),i=new Xe(n,e+1),o=[];return this.dr.forEachInRange([r,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new G(new Ee([])),r=new Xe(n,e),i=new Xe(n,e+1);let o=oe();return this.dr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new Xe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return G.comparator(e.key,n.key)||de(e.wr,n.wr)}static Ar(e,n){return de(e.wr,n.wr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new st(Xe.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new px(o,n,r,i);this.mutationQueue.push(s);for(const l of i)this.br=this.br.add(new Xe(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(s)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),o=i<0?0:i;return F.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),i=new Xe(n,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],s=>{const l=this.Dr(s.wr);o.push(l)}),F.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new st(de);return n.forEach(i=>{const o=new Xe(i,0),s=new Xe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],l=>{r=r.add(l.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;G.isDocumentKey(o)||(o=o.child(""));const s=new Xe(new G(o),0);let l=new st(de);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},s),F.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ye(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const o=new Xe(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Xe(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e){this.Mr=e,this.docs=function(){return new Re(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let r=Yn();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():yt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=Yn();const s=n.path,l=new G(s.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!s.isPrefixOf(c.path))break;c.path.length>s.length+1||NC(xC(d),r)<=0||(i.has(d.key)||dc(n,d))&&(o=o.insert(d.key,d.mutableCopy()))}return F.resolve(o)}getAllFromCollectionGroup(e,n,r,i){Z()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Yx(this)}getSize(e){return F.resolve(this.size)}}class Yx extends Bx{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e){this.persistence=e,this.Nr=new No(n=>Tp(n),Ip),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Rp,this.targetCount=0,this.kr=bo.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new bo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Nr.forEach((s,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),F.waitFor(o).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),F.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e,n){this.qr={},this.overlays={},this.Qr=new _p(0),this.Kr=!1,this.Kr=!0,this.$r=new Kx,this.referenceDelegate=e(this),this.Ur=new Xx(this),this.indexManager=new jx,this.remoteDocumentCache=function(i){return new Qx(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Ux(n),this.Gr=new Wx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Hx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Gx(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new Zx(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Zx extends DC{constructor(e){super(),this.currentSequenceNumber=e}}class Cp{constructor(e){this.persistence=e,this.Jr=new Rp,this.Yr=null}static Zr(e){return new Cp(e)}get Xr(){if(this.Yr)return this.Yr;throw Z()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=G.fromPath(r);return this.ei(e,i).next(o=>{o||n.removeEntry(i,ee.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=oe(),i=oe();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new xp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Bk()?8:VC(wt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.Yi(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new e2;return this.Xi(e,n,s).next(l=>{if(o.result=l,this.zi)return this.es(e,n,s,l.size)})}).next(()=>o.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(rs()<=se.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Mi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(rs()<=se.DEBUG&&H("QueryEngine","Query:",Mi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(rs()<=se.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Mi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,In(n))):F.resolve())}Yi(e,n){if(uv(n))return F.resolve(null);let r=In(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Qd(n,null,"F"),r=In(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=oe(...o);return this.Ji.getDocuments(e,s).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,s,u.readTime)?this.Yi(e,Qd(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return uv(n)||i.isEqual(ee.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const s=this.ts(n,o);return this.ns(n,s,r,i)?F.resolve(null):(rs()<=se.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Mi(n)),this.rs(e,s,n,CC(i,-1)).next(l=>l))})}ts(e,n){let r=new st(Lw(e));return n.forEach((i,o)=>{dc(e,o)&&(r=r.add(o))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,n,r){return rs()<=se.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Mi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Dr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Re(de),this._s=new No(o=>Tp(o),Ip),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $x(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function r2(t,e,n,r){return new n2(t,e,n,r)}async function oE(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],l=[];let u=oe();for(const c of i){s.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of o){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:s,addedBatchIds:l}))})})}function i2(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let b=F.resolve();return m.forEach(A=>{b=b.next(()=>d.getEntry(u,A)).next(w=>{const P=c.docVersions.get(A);ye(P!==null),w.version.compareTo(P)<0&&(p.applyToRemoteDocument(w,c),w.isValidDocument()&&(w.setReadTime(c.commitVersion),d.addEntry(w)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=oe();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function sE(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function o2(t,e){const n=te(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(o,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(o,d.addedDocuments,p)));let b=m.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(lt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),i=i.insert(p,b),function(w,P,v){return w.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(m,b,d)&&l.push(n.Ur.updateTargetData(o,b))});let u=Yn(),c=oe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(o,d))}),l.push(s2(o,s,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(ee.min())){const d=n.Ur.getLastRemoteSnapshotVersion(o).next(p=>n.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(d)}return F.waitFor(l).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,u,c)).next(()=>u)}).then(o=>(n.os=i,o))}function s2(t,e,n){let r=oe(),i=oe();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=Yn();return n.forEach((l,u)=>{const c=o.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(l,u.readTime),s=s.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),s=s.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:s,Is:i}})}function a2(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function l2(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(o=>o?(i=o,F.resolve(i)):n.Ur.allocateTargetId(r).next(s=>(i=new vr(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function ef(t,e,n){const r=te(t),i=r.os.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!Ea(s))throw s;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function wv(t,e,n){const r=te(t);let i=ee.min(),o=oe();return r.persistence.runTransaction("Execute query","readwrite",s=>function(u,c,d){const p=te(u),m=p._s.get(d);return m!==void 0?F.resolve(p.os.get(m)):p.Ur.getTargetData(c,d)}(r,s,In(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(s,l.targetId).next(u=>{o=u})}).next(()=>r.ss.getDocumentsMatchingQuery(s,e,n?i:ee.min(),n?o:oe())).next(l=>(u2(r,ZC(e),l),{documents:l,Ts:o})))}function u2(t,e,n){let r=t.us.get(e)||ee.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.us.set(e,r)}class Ev{constructor(){this.activeTargetIds=ox()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class c2{constructor(){this.so=new Ev,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ev,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl=null;function Dh(){return yl===null?yl=function(){return 268435456+Math.round(2147483648*Math.random())}():yl++,"0x"+yl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class p2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(n,r,i,o,s){const l=Dh(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,o,s),this.No(n,u,c,i).then(d=>(H("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw yo("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,o,s,l){return this.Mo(n,r,i,o,s)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}xo(n,r){const i=d2[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const o=Dh();return new Promise((s,l)=>{const u=new yw;u.setWithCredentials(!0),u.listenOnce(_w.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case zl.NO_ERROR:const d=u.getResponseJson();H(pt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),s(d);break;case zl.TIMEOUT:H(pt,`RPC '${e}' ${o} timed out`),l(new $(U.DEADLINE_EXCEEDED,"Request time out"));break;case zl.HTTP_ERROR:const p=u.getStatus();if(H(pt,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const b=m==null?void 0:m.error;if(b&&b.status&&b.message){const A=function(P){const v=P.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(v)>=0?v:U.UNKNOWN}(b.status);l(new $(A,b.message))}else l(new $(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new $(U.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{H(pt,`RPC '${e}' ${o} completed.`)}});const c=JSON.stringify(i);H(pt,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Dh(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=bw(),l=Ew(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new vw({})),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=o.join("");H(pt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=s.createWebChannel(d,u);let m=!1,b=!1;const A=new f2({Io:P=>{b?H(pt,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(m||(H(pt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(pt,`RPC '${e}' stream ${i} sending:`,P),p.send(P))},To:()=>p.close()}),w=(P,v,y)=>{P.listen(v,E=>{try{y(E)}catch(x){setTimeout(()=>{throw x},0)}})};return w(p,hs.EventType.OPEN,()=>{b||(H(pt,`RPC '${e}' stream ${i} transport opened.`),A.yo())}),w(p,hs.EventType.CLOSE,()=>{b||(b=!0,H(pt,`RPC '${e}' stream ${i} transport closed`),A.So())}),w(p,hs.EventType.ERROR,P=>{b||(b=!0,yo(pt,`RPC '${e}' stream ${i} transport errored:`,P),A.So(new $(U.UNAVAILABLE,"The operation could not be completed")))}),w(p,hs.EventType.MESSAGE,P=>{var v;if(!b){const y=P.data[0];ye(!!y);const E=y,x=E.error||((v=E[0])===null||v===void 0?void 0:v.error);if(x){H(pt,`RPC '${e}' stream ${i} received error:`,x);const O=x.status;let M=function(T){const S=ze[T];if(S!==void 0)return Qw(S)}(O),I=x.message;M===void 0&&(M=U.INTERNAL,I="Unknown error status: "+O+" with message "+x.message),b=!0,A.So(new $(M,I)),p.close()}else H(pt,`RPC '${e}' stream ${i} received:`,y),A.bo(y)}}),w(l,ww.STAT_EVENT,P=>{P.stat===qd.PROXY?H(pt,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===qd.NOPROXY&&H(pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}function Vh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(t){return new Ix(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n,r,i,o,s,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new aE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Qn(n.toString()),Qn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new $(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class m2 extends lE{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Sx(this.serializer,e),r=function(o){if(!("targetChange"in o))return ee.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?ee.min():s.readTime?kn(s.readTime):ee.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Zd(this.serializer),n.addTarget=function(o,s){let l;const u=s.target;if(l=Kd(u)?{documents:Cx(o,u)}:{query:xx(o,u)._t},l.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){l.resumeToken=Jw(o,s.resumeToken);const c=Yd(o,s.expectedCount);c!==null&&(l.expectedCount=c)}else if(s.snapshotVersion.compareTo(ee.min())>0){l.readTime=xu(o,s.snapshotVersion.toTimestamp());const c=Yd(o,s.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Ox(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Zd(this.serializer),n.removeTarget=e,this.a_(n)}}class g2 extends lE{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ye(!!e.streamToken),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Rx(e.writeResults,e.commitTime),r=kn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Zd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Px(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(U.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,Xd(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(U.UNKNOWN,o.toString())})}Lo(e,n,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,l])=>this.connection.Lo(e,Xd(n,r),i,s,l,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(U.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class v2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Qn(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{r.enqueueAndForget(async()=>{Ii(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=te(u);c.L_.add(4),await Aa(c),c.q_.set("Unknown"),c.L_.delete(4),await yc(c)}(this))})}),this.q_=new v2(r,i)}}async function yc(t){if(Ii(t))for(const e of t.B_)await e(!0)}async function Aa(t){for(const e of t.B_)await e(!1)}function uE(t,e){const n=te(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Vp(n)?Dp(n):Oo(n).r_()&&Op(n,e))}function Np(t,e){const n=te(t),r=Oo(n);n.N_.delete(e),r.r_()&&cE(n,e),n.N_.size===0&&(r.r_()?r.o_():Ii(n)&&n.q_.set("Unknown"))}function Op(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Oo(t).A_(e)}function cE(t,e){t.Q_.xe(e),Oo(t).R_(e)}function Dp(t){t.Q_=new wx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Oo(t).start(),t.q_.v_()}function Vp(t){return Ii(t)&&!Oo(t).n_()&&t.N_.size>0}function Ii(t){return te(t).L_.size===0}function hE(t){t.Q_=void 0}async function w2(t){t.q_.set("Online")}async function E2(t){t.N_.forEach((e,n)=>{Op(t,e)})}async function b2(t,e){hE(t),Vp(t)?(t.q_.M_(e),Dp(t)):t.q_.set("Unknown")}async function T2(t,e,n){if(t.q_.set("Online"),e instanceof Xw&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const l of o.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,s),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Nu(t,r)}else if(e instanceof $l?t.Q_.Ke(e):e instanceof Yw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ee.min()))try{const r=await sE(t.localStore);n.compareTo(r)>=0&&await function(o,s){const l=o.Q_.rt(s);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=o.N_.get(c);d&&o.N_.set(c,d.withResumeToken(u.resumeToken,s))}}),l.targetMismatches.forEach((u,c)=>{const d=o.N_.get(u);if(!d)return;o.N_.set(u,d.withResumeToken(lt.EMPTY_BYTE_STRING,d.snapshotVersion)),cE(o,u);const p=new vr(d.target,u,c,d.sequenceNumber);Op(o,p)}),o.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Nu(t,r)}}async function Nu(t,e,n){if(!Ea(e))throw e;t.L_.add(1),await Aa(t),t.q_.set("Offline"),n||(n=()=>sE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await yc(t)})}function dE(t,e){return e().catch(n=>Nu(t,n,e))}async function vc(t){const e=te(t),n=Lr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;I2(e);)try{const i=await a2(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,A2(e,i)}catch(i){await Nu(e,i)}fE(e)&&pE(e)}function I2(t){return Ii(t)&&t.O_.length<10}function A2(t,e){t.O_.push(e);const n=Lr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function fE(t){return Ii(t)&&!Lr(t).n_()&&t.O_.length>0}function pE(t){Lr(t).start()}async function k2(t){Lr(t).p_()}async function S2(t){const e=Lr(t);for(const n of t.O_)e.m_(n.mutations)}async function P2(t,e,n){const r=t.O_.shift(),i=kp.from(r,e,n);await dE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await vc(t)}async function R2(t,e){e&&Lr(t).V_&&await async function(r,i){if(function(s){return yx(s)&&s!==U.ABORTED}(i.code)){const o=r.O_.shift();Lr(r).s_(),await dE(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await vc(r)}}(t,e),fE(t)&&pE(t)}async function Tv(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Ii(n);n.L_.add(3),await Aa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await yc(n)}async function C2(t,e){const n=te(t);e?(n.L_.delete(2),await yc(n)):e||(n.L_.add(2),await Aa(n),n.q_.set("Unknown"))}function Oo(t){return t.K_||(t.K_=function(n,r,i){const o=te(n);return o.w_(),new m2(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:w2.bind(null,t),Ro:E2.bind(null,t),mo:b2.bind(null,t),d_:T2.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Vp(t)?Dp(t):t.q_.set("Unknown")):(await t.K_.stop(),hE(t))})),t.K_}function Lr(t){return t.U_||(t.U_=function(n,r,i){const o=te(n);return o.w_(),new g2(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:k2.bind(null,t),mo:R2.bind(null,t),f_:S2.bind(null,t),g_:P2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await vc(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,l=new Lp(e,n,s,i,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mp(t,e){if(Qn("AsyncQueue",`${e}: ${t}`),Ea(t))return new $(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=ds(),this.sortedSet=new Re(this.comparator)}static emptySet(e){return new lo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof lo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new lo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(){this.W_=new Re(G.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Z():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class To{constructor(e,n,r,i,o,s,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(l=>{s.push({type:0,doc:l})}),new To(e,n,lo.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class N2{constructor(){this.queries=Av(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=te(n),o=i.queries;i.queries=Av(),o.forEach((s,l)=>{for(const u of l.j_)u.onError(r)})})(this,new $(U.ABORTED,"Firestore shutting down"))}}function Av(){return new No(t=>Vw(t),hc)}async function Up(t,e){const n=te(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new x2,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await n.onListen(i,!0);break;case 1:o.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(s){const l=Mp(s,`Initialization of query '${Mi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,o),o.j_.push(e),e.Z_(n.onlineState),o.z_&&e.X_(o.z_)&&jp(n)}async function Fp(t,e){const n=te(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const s=o.j_.indexOf(e);s>=0&&(o.j_.splice(s,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function O2(t,e){const n=te(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const l of s.j_)l.X_(i)&&(r=!0);s.z_=i}}r&&jp(n)}function D2(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(n);r.queries.delete(e)}function jp(t){t.Y_.forEach(e=>{e.next()})}var tf,kv;(kv=tf||(tf={})).ea="default",kv.Cache="cache";class zp{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new To(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=To.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==tf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e){this.key=e}}class gE{constructor(e){this.key=e}}class V2{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=oe(),this.mutatedKeys=oe(),this.Aa=Lw(e),this.Ra=new lo(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Iv,i=n?n.Ra:this.Ra;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),b=dc(this.query,p)?p:null,A=!!m&&this.mutatedKeys.has(m.key),w=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let P=!1;m&&b?m.data.isEqual(b.data)?A!==w&&(r.track({type:3,doc:b}),P=!0):this.ga(m,b)||(r.track({type:2,doc:b}),P=!0,(u&&this.Aa(b,u)>0||c&&this.Aa(b,c)<0)&&(l=!0)):!m&&b?(r.track({type:0,doc:b}),P=!0):m&&!b&&(r.track({type:1,doc:m}),P=!0,(u||c)&&(l=!0)),P&&(b?(s=s.add(b),o=w?o.add(d):o.delete(d)):(s=s.delete(d),o=o.delete(d)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const d=this.query.limitType==="F"?s.last():s.first();s=s.delete(d.key),o=o.delete(d.key),r.track({type:1,doc:d})}return{Ra:s,fa:r,ns:l,mutatedKeys:o}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((d,p)=>function(b,A){const w=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return w(b)-w(A)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,s.length!==0||c?{snapshot:new To(this.query,e.Ra,o,s,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Iv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=oe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new gE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new mE(r))}),n}ba(e){this.Ta=e.Ts,this.da=oe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return To.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class L2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class M2{constructor(e){this.key=e,this.va=!1}}class U2{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new No(l=>Vw(l),hc),this.Ma=new Map,this.xa=new Set,this.Oa=new Re(G.comparator),this.Na=new Map,this.La=new Rp,this.Ba={},this.ka=new Map,this.qa=bo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function F2(t,e,n=!0){const r=bE(t);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await yE(r,e,n,!0),i}async function j2(t,e){const n=bE(t);await yE(n,e,!0,!1)}async function yE(t,e,n,r){const i=await l2(t.localStore,In(e)),o=i.targetId,s=n?t.sharedClientState.addLocalQueryTarget(o):"not-current";let l;return r&&(l=await z2(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&n&&uE(t.remoteStore,i),l}async function z2(t,e,n,r,i){t.Ka=(p,m,b)=>async function(w,P,v,y){let E=P.view.ma(v);E.ns&&(E=await wv(w.localStore,P.query,!1).then(({documents:I})=>P.view.ma(I,E)));const x=y&&y.targetChanges.get(P.targetId),O=y&&y.targetMismatches.get(P.targetId)!=null,M=P.view.applyChanges(E,w.isPrimaryClient,x,O);return Pv(w,P.targetId,M.wa),M.snapshot}(t,p,m,b);const o=await wv(t.localStore,e,!0),s=new V2(e,o.Ts),l=s.ma(o.documents),u=Ia.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=s.applyChanges(l,t.isPrimaryClient,u);Pv(t,n,c.wa);const d=new L2(e,n,s);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function B2(t,e,n){const r=te(t),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(s=>!hc(s,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ef(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Np(r.remoteStore,i.targetId),nf(r,i.targetId)}).catch(wa)):(nf(r,i.targetId),await ef(r.localStore,i.targetId,!0))}async function q2(t,e){const n=te(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Np(n.remoteStore,r.targetId))}async function $2(t,e,n){const r=X2(t);try{const i=await function(s,l){const u=te(s),c=Qe.now(),d=l.reduce((b,A)=>b.add(A.key),oe());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",b=>{let A=Yn(),w=oe();return u.cs.getEntries(b,d).next(P=>{A=P,A.forEach((v,y)=>{y.isValidDocument()||(w=w.add(v))})}).next(()=>u.localDocuments.getOverlayedDocuments(b,A)).next(P=>{p=P;const v=[];for(const y of l){const E=dx(y,p.get(y.key).overlayedDocument);E!=null&&v.push(new Br(y.key,E,Sw(E.value.mapValue),An.exists(!0)))}return u.mutationQueue.addMutationBatch(b,c,v,l)}).next(P=>{m=P;const v=P.applyToLocalDocumentSet(p,w);return u.documentOverlayCache.saveOverlays(b,P.batchId,v)})}).then(()=>({batchId:m.batchId,changes:Uw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,l,u){let c=s.Ba[s.currentUser.toKey()];c||(c=new Re(de)),c=c.insert(l,u),s.Ba[s.currentUser.toKey()]=c}(r,i.batchId,n),await ka(r,i.changes),await vc(r.remoteStore)}catch(i){const o=Mp(i,"Failed to persist write");n.reject(o)}}async function vE(t,e){const n=te(t);try{const r=await o2(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.Na.get(o);s&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.va=!0:i.modifiedDocuments.size>0?ye(s.va):i.removedDocuments.size>0&&(ye(s.va),s.va=!1))}),await ka(n,r,e)}catch(r){await wa(r)}}function Sv(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((o,s)=>{const l=s.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(s,l){const u=te(s);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(l)&&(c=!0)}),c&&jp(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function W2(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),o=i&&i.key;if(o){let s=new Re(G.comparator);s=s.insert(o,yt.newNoDocument(o,ee.min()));const l=oe().add(o),u=new mc(ee.min(),new Map,new Re(de),s,l);await vE(r,u),r.Oa=r.Oa.remove(o),r.Na.delete(e),Bp(r)}else await ef(r.localStore,e,!1).then(()=>nf(r,e,n)).catch(wa)}async function H2(t,e){const n=te(t),r=e.batch.batchId;try{const i=await i2(n.localStore,e);wE(n,r,null),_E(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ka(n,i)}catch(i){await wa(i)}}async function K2(t,e,n){const r=te(t);try{const i=await function(s,l){const u=te(s);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ye(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);wE(r,e,n),_E(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ka(r,i)}catch(i){await wa(i)}}function _E(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function wE(t,e,n){const r=te(t);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function nf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||EE(t,r)})}function EE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Np(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Bp(t))}function Pv(t,e,n){for(const r of n)r instanceof mE?(t.La.addReference(r.key,e),G2(t,r)):r instanceof gE?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||EE(t,r.key)):Z()}function G2(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),Bp(t))}function Bp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new G(Ee.fromString(e)),r=t.qa.next();t.Na.set(r,new M2(n)),t.Oa=t.Oa.insert(n,r),uE(t.remoteStore,new vr(In(cc(n.path)),r,"TargetPurposeLimboResolution",_p.oe))}}async function ka(t,e,n){const r=te(t),i=[],o=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{s.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=xp.Wi(u.targetId,c);o.push(p)}}))}),await Promise.all(s),r.Ca.d_(i),await async function(u,c){const d=te(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(c,m=>F.forEach(m.$i,b=>d.persistence.referenceDelegate.addReference(p,m.targetId,b)).next(()=>F.forEach(m.Ui,b=>d.persistence.referenceDelegate.removeReference(p,m.targetId,b)))))}catch(p){if(!Ea(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const b=d.os.get(m),A=b.snapshotVersion,w=b.withLastLimboFreeSnapshotVersion(A);d.os=d.os.insert(m,w)}}}(r.localStore,o))}async function Q2(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await oE(n.localStore,e);n.currentUser=e,function(o,s){o.ka.forEach(l=>{l.forEach(u=>{u.reject(new $(U.CANCELLED,s))})}),o.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ka(n,r.hs)}}function Y2(t,e){const n=te(t),r=n.Na.get(e);if(r&&r.va)return oe().add(r.key);{let i=oe();const o=n.Ma.get(e);if(!o)return i;for(const s of o){const l=n.Fa.get(s);i=i.unionWith(l.view.Va)}return i}}function bE(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Y2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=W2.bind(null,e),e.Ca.d_=O2.bind(null,e.eventManager),e.Ca.$a=D2.bind(null,e.eventManager),e}function X2(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=H2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=K2.bind(null,e),e}class Rv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=gc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return r2(this.persistence,new t2,e.initialUser,this.serializer)}createPersistence(e){return new Jx(Cp.Zr,this.serializer)}createSharedClientState(e){return new c2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class J2{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Sv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Q2.bind(null,this.syncEngine),await C2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new N2}()}createDatastore(e){const n=gc(e.databaseInfo.databaseId),r=function(o){return new p2(o)}(e.databaseInfo);return function(o,s,l,u){return new y2(o,s,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,l){return new _2(r,i,o,s,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Sv(this.syncEngine,n,0),function(){return bv.D()?new bv:new h2}())}createSyncEngine(e,n){return function(i,o,s,l,u,c,d){const p=new U2(i,o,s,l,u,c);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const o=te(i);H("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Aa(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):Qn("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=mt.UNAUTHENTICATED,this.clientId=Iw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(U.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Mp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Lh(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await oE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Cv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tN(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Tv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Tv(e.remoteStore,i)),t._onlineComponents=e}function eN(t){return t.name==="FirebaseError"?t.code===U.FAILED_PRECONDITION||t.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function tN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Lh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!eN(n))throw n;yo("Error using user provided cache. Falling back to memory cache: "+n),await Lh(t,new Rv)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Lh(t,new Rv);return t._offlineComponents}async function TE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Cv(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Cv(t,new J2))),t._onlineComponents}function nN(t){return TE(t).then(e=>e.syncEngine)}async function Ou(t){const e=await TE(t),n=e.eventManager;return n.onListen=F2.bind(null,e.syncEngine),n.onUnlisten=B2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=j2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=q2.bind(null,e.syncEngine),n}function rN(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,l,u,c){const d=new qp({next:m=>{s.enqueueAndForget(()=>Fp(o,p));const b=m.docs.has(l);!b&&m.fromCache?c.reject(new $(U.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&m.fromCache&&u&&u.source==="server"?c.reject(new $(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new zp(cc(l.path),d,{includeMetadataChanges:!0,_a:!0});return Up(o,p)}(await Ou(t),t.asyncQueue,e,n,r)),r.promise}function iN(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,l,u,c){const d=new qp({next:m=>{s.enqueueAndForget(()=>Fp(o,p)),m.fromCache&&u.source==="server"?c.reject(new $(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new zp(l,d,{includeMetadataChanges:!0,_a:!0});return Up(o,p)}(await Ou(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(t,e,n){if(!n)throw new $(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oN(t,e,n,r){if(e===!0&&r===!0)throw new $(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Nv(t){if(!G.isDocumentKey(t))throw new $(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ov(t){if(G.isDocumentKey(t))throw new $(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _c(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function Jt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_c(t);throw new $(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=IE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new $(U.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new $(U.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new $(U.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new EC;switch(r.type){case"firstParty":return new AC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=xv.get(n);r&&(H("ComponentProvider","Removing Datastore"),xv.delete(n),r.terminate())}(this),Promise.resolve()}}function sN(t,e,n,r={}){var i;const o=(t=Jt(t,wc))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&yo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=mt.MOCK_USER;else{l=R1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new $(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new mt(c)}t._authCredentials=new bC(new Tw(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ai(this.firestore,e,this._query)}}class vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class Cr extends Ai{constructor(e,n,r){super(e,n,cc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new G(e))}withConverter(e){return new Cr(this.firestore,e,this._path)}}function Wl(t,e,...n){if(t=Pe(t),AE("collection","path",e),t instanceof wc){const r=Ee.fromString(e,...n);return Ov(r),new Cr(t,null,r)}{if(!(t instanceof vt||t instanceof Cr))throw new $(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return Ov(r),new Cr(t.firestore,null,r)}}function Be(t,e,...n){if(t=Pe(t),arguments.length===1&&(e=Iw.newId()),AE("doc","path",e),t instanceof wc){const r=Ee.fromString(e,...n);return Nv(r),new vt(t,null,new G(r))}{if(!(t instanceof vt||t instanceof Cr))throw new $(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return Nv(r),new vt(t.firestore,t instanceof Cr?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new aE(this,"async_queue_retry"),this.Eu=()=>{const n=Vh();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=Vh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=Vh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new Bn;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!Ea(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const i=function(s){let l=s.message||"";return s.stack&&(l=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),l}(r);throw Qn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const i=Lp.createAndSchedule(this,e,n,r,o=>this.Vu(o));return this.lu.push(i),i}du(){this.hu&&Z()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}function Vv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(t,["next","error","complete"])}class vi extends wc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new aN}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kE(this),this._firestoreClient.terminate()}}function lN(t,e){const n=typeof t=="object"?t:lp(),r=typeof t=="string"?t:"(default)",i=oc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=k1("firestore");o&&sN(i,...o)}return i}function Ec(t){return t._firestoreClient||kE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function kE(t){var e,n,r;const i=t._freezeSettings(),o=function(l,u,c,d){return new UC(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,IE(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Z2(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Io(lt.fromBase64String(e))}catch(n){throw new $(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Io(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=/^__.*__$/;class cN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Br(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ta(e,this.data,n,this.fieldTransforms)}}class SE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Br(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function PE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class Tc{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.yu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new Tc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.vu(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.yu(),i}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Du(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(PE(this.wu)&&uN.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class hN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||gc(e)}Nu(e,n,r,i=!1){return new Tc({wu:e,methodName:n,Ou:r,path:it.emptyPath(),Du:!1,xu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hp(t){const e=t._freezeSettings(),n=gc(t._databaseId);return new hN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dN(t,e,n,r,i,o={}){const s=t.Nu(o.merge||o.mergeFields?2:0,e,n,i);Qp("Data must be an object, but it was:",s,r);const l=RE(r,s);let u,c;if(o.merge)u=new jt(s.fieldMask),c=s.fieldTransforms;else if(o.mergeFields){const d=[];for(const p of o.mergeFields){const m=rf(e,p,n);if(!s.contains(m))throw new $(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);xE(d,m)||d.push(m)}u=new jt(d),c=s.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=s.fieldTransforms;return new cN(new xt(l),u,c)}class Ic extends Sa{_toFieldTransform(e){if(e.wu!==2)throw e.wu===1?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ic}}function fN(t,e,n){return new Tc({wu:3,Ou:e.settings.Ou,methodName:t._methodName,Du:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Kp extends Sa{_toFieldTransform(e){return new Ww(e.path,new oa)}isEqual(e){return e instanceof Kp}}class Gp extends Sa{constructor(e,n){super(e),this.Lu=n}_toFieldTransform(e){const n=fN(this,e,!0),r=this.Lu.map(o=>Do(o,n)),i=new Eo(r);return new Ww(e.path,i)}isEqual(e){return e instanceof Gp&&Xs(this.Lu,e.Lu)}}function pN(t,e,n,r){const i=t.Nu(1,e,n);Qp("Data must be an object, but it was:",i,r);const o=[],s=xt.empty();Ti(r,(u,c)=>{const d=Yp(e,u,n);c=Pe(c);const p=i.Cu(d);if(c instanceof Ic)o.push(d);else{const m=Do(c,p);m!=null&&(o.push(d),s.set(d,m))}});const l=new jt(o);return new SE(s,l,i.fieldTransforms)}function mN(t,e,n,r,i,o){const s=t.Nu(1,e,n),l=[rf(e,r,n)],u=[i];if(o.length%2!=0)throw new $(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<o.length;m+=2)l.push(rf(e,o[m])),u.push(o[m+1]);const c=[],d=xt.empty();for(let m=l.length-1;m>=0;--m)if(!xE(c,l[m])){const b=l[m];let A=u[m];A=Pe(A);const w=s.Cu(b);if(A instanceof Ic)c.push(b);else{const P=Do(A,w);P!=null&&(c.push(b),d.set(b,P))}}const p=new jt(c);return new SE(d,p,s.fieldTransforms)}function gN(t,e,n,r=!1){return Do(n,t.Nu(r?4:3,e))}function Do(t,e){if(CE(t=Pe(t)))return Qp("Unsupported field value:",e,t),RE(t,e);if(t instanceof Sa)return function(r,i){if(!PE(i.wu))throw i.Mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Mu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const l of r){let u=Do(l,i.Fu(s));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=Pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sx(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Qe.fromDate(r);return{timestampValue:xu(i.serializer,o)}}if(r instanceof Qe){const o=new Qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xu(i.serializer,o)}}if(r instanceof $p)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Io)return{bytesValue:Jw(i.serializer,r._byteString)};if(r instanceof vt){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Mu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Pp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Wp)return function(s,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(u=>{if(typeof u!="number")throw l.Mu("VectorValues must only contain numeric values.");return Ap(l.serializer,u)})}}}}}}(r,i);throw i.Mu(`Unsupported field value: ${_c(r)}`)}(t,e)}function RE(t,e){const n={};return Aw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ti(t,(r,i)=>{const o=Do(i,e.bu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function CE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof $p||t instanceof Io||t instanceof vt||t instanceof Sa||t instanceof Wp)}function Qp(t,e,n){if(!CE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=_c(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function rf(t,e,n){if((e=Pe(e))instanceof bc)return e._internalPath;if(typeof e=="string")return Yp(t,e);throw Du("Field path arguments must be of type string or ",t,!1,void 0,n)}const yN=new RegExp("[~\\*/\\[\\]]");function Yp(t,e,n){if(e.search(yN)>=0)throw Du(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bc(...e.split("."))._internalPath}catch{throw Du(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Du(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(o||s)&&(u+=" (found",o&&(u+=` in field ${r}`),s&&(u+=` in document ${i}`),u+=")"),new $(U.INVALID_ARGUMENT,l+t+u)}function xE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Xp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vN extends NE{data(){return super.data()}}function Xp(t,e){return typeof e=="string"?Yp(t,e):e instanceof bc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Jp{}class _N extends Jp{}function DE(t,e,...n){let r=[];e instanceof Jp&&r.push(e),r=r.concat(n),function(o){const s=o.filter(u=>u instanceof Zp).length,l=o.filter(u=>u instanceof Ac).length;if(s>1||s>0&&l>0)throw new $(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ac extends _N{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ac(e,n,r)}_apply(e){const n=this._parse(e);return VE(e._query,n),new Ai(e.firestore,e.converter,Gd(e._query,n))}_parse(e){const n=Hp(e.firestore);return function(o,s,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new $(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Mv(p,d);const b=[];for(const A of p)b.push(Lv(u,o,A));m={arrayValue:{values:b}}}else m=Lv(u,o,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Mv(p,d),m=gN(l,s,p,d==="in"||d==="not-in");return $e.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function of(t,e,n){const r=e,i=Xp("where",t);return Ac._create(i,r,n)}class Zp extends Jp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Zp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:fn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,o){let s=i;const l=o.getFlattenedFilters();for(const u of l)VE(s,u),s=Gd(s,u)}(e._query,n),new Ai(e.firestore,e.converter,Gd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Lv(t,e,n){if(typeof(n=Pe(n))=="string"){if(n==="")throw new $(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dw(e)&&n.indexOf("/")!==-1)throw new $(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ee.fromString(n));if(!G.isDocumentKey(r))throw new $(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return rv(t,new G(r))}if(n instanceof vt)return rv(t,n._key);throw new $(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_c(n)}.`)}function Mv(t,e){if(!Array.isArray(t)||t.length===0)throw new $(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function VE(t,e){const n=function(i,o){for(const s of i)for(const l of s.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class wN{convertValue(e,n="none"){switch(yi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ti(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertVectorValue(e){var n,r,i;const o=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(s=>Me(s.doubleValue));return new Wp(o)}convertGeoPoint(e){return new $p(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ep(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(na(e));default:return null}}convertTimestamp(e){const n=Vr(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);ye(iE(r));const i=new ra(r.get(1),r.get(3)),o=new G(r.popFirst(5));return i.isEqual(n)||Qn(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EN(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class LE extends NE{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Hl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Xp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Hl extends LE{data(e={}){return super.data(e)}}class ME{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ps(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Hl(this._firestore,this._userDataWriter,r.key,r,new ps(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(l=>{const u=new Hl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ps(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const u=new Hl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ps(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=s.indexOf(l.doc.key),s=s.delete(l.doc.key)),l.type!==1&&(s=s.add(l.doc),d=s.indexOf(l.doc.key)),{type:bN(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t){t=Jt(t,vt);const e=Jt(t.firestore,vi);return rN(Ec(e),t._key).then(n=>zE(e,t,n))}class em extends wN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Io(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function UE(t){t=Jt(t,Ai);const e=Jt(t.firestore,vi),n=Ec(e),r=new em(e);return OE(t._query),iN(n,t._query).then(i=>new ME(e,r,t,i))}function sf(t,e,n){t=Jt(t,vt);const r=Jt(t.firestore,vi),i=EN(t.converter,e);return jE(r,[dN(Hp(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,An.none())])}function zt(t,e,n,...r){t=Jt(t,vt);const i=Jt(t.firestore,vi),o=Hp(i);let s;return s=typeof(e=Pe(e))=="string"||e instanceof bc?mN(o,"updateDoc",t._key,e,n,r):pN(o,"updateDoc",t._key,e),jE(i,[s.toMutation(t._key,An.exists(!0))])}function FE(t,...e){var n,r,i;t=Pe(t);let o={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||Vv(e[s])||(o=e[s],s++);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Vv(e[s])){const p=e[s];e[s]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[s+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[s+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,d;if(t instanceof vt)c=Jt(t.firestore,vi),d=cc(t._key.path),u={next:p=>{e[s]&&e[s](zE(c,t,p))},error:e[s+1],complete:e[s+2]};else{const p=Jt(t,Ai);c=Jt(p.firestore,vi),d=p._query;const m=new em(c);u={next:b=>{e[s]&&e[s](new ME(c,m,p,b))},error:e[s+1],complete:e[s+2]},OE(t._query)}return function(m,b,A,w){const P=new qp(w),v=new zp(b,P,A);return m.asyncQueue.enqueueAndForget(async()=>Up(await Ou(m),v)),()=>{P.za(),m.asyncQueue.enqueueAndForget(async()=>Fp(await Ou(m),v))}}(Ec(c),d,l,u)}function jE(t,e){return function(r,i){const o=new Bn;return r.asyncQueue.enqueueAndForget(async()=>$2(await nN(r),i,o)),o.promise}(Ec(t),e)}function zE(t,e,n){const r=n.docs.get(e._key),i=new em(t);return new LE(t,i,e._key,r,new ps(n.hasPendingWrites,n.fromCache),e.converter)}function TN(){return new Kp("serverTimestamp")}function Vu(...t){return new Gp("arrayUnion",t)}(function(e,n=!0){(function(i){xo=i})(bi),di(new Or("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),l=new vi(new TC(r.getProvider("auth-internal")),new SC(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new $(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ra(c.options.projectId,d)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),En(Jy,"4.7.1",e),En(Jy,"4.7.1","esm2017")})();function BE(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=BE(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function _r(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=BE(t))&&(r&&(r+=" "),r+=e);return r}const aa=t=>typeof t=="number"&&!isNaN(t),oi=t=>typeof t=="string",Bt=t=>typeof t=="function",Kl=t=>oi(t)||Bt(t)?t:null,af=t=>L.isValidElement(t)||oi(t)||Bt(t)||aa(t);function IN(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function kc(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=t;return function(s){let{children:l,position:u,preventExitTransition:c,done:d,nodeRef:p,isIn:m,playToast:b}=s;const A=r?`${e}--${u}`:e,w=r?`${n}--${u}`:n,P=L.useRef(0);return L.useLayoutEffect(()=>{const v=p.current,y=A.split(" "),E=x=>{x.target===p.current&&(b(),v.removeEventListener("animationend",E),v.removeEventListener("animationcancel",E),P.current===0&&x.type!=="animationcancel"&&v.classList.remove(...y))};v.classList.add(...y),v.addEventListener("animationend",E),v.addEventListener("animationcancel",E)},[]),L.useEffect(()=>{const v=p.current,y=()=>{v.removeEventListener("animationend",y),i?IN(v,d,o):d()};m||(c?y():(P.current=1,v.className+=` ${w}`,v.addEventListener("animationend",y)))},[m]),W.createElement(W.Fragment,null,l)}}function Uv(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const kt=new Map;let la=[];const lf=new Set,AN=t=>lf.forEach(e=>e(t)),qE=()=>kt.size>0;function $E(t,e){var n;if(e)return!((n=kt.get(e))==null||!n.isToastActive(t));let r=!1;return kt.forEach(i=>{i.isToastActive(t)&&(r=!0)}),r}function WE(t,e){af(t)&&(qE()||la.push({content:t,options:e}),kt.forEach(n=>{n.buildToast(t,e)}))}function Fv(t,e){kt.forEach(n=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===n.id&&n.toggle(t,e==null?void 0:e.id):n.toggle(t,e==null?void 0:e.id)})}function kN(t){const{subscribe:e,getSnapshot:n,setProps:r}=L.useRef(function(o){const s=o.containerId||1;return{subscribe(l){const u=function(d,p,m){let b=1,A=0,w=[],P=[],v=[],y=p;const E=new Map,x=new Set,O=()=>{v=Array.from(E.values()),x.forEach(g=>g())},M=g=>{P=g==null?[]:P.filter(T=>T!==g),O()},I=g=>{const{toastId:T,onOpen:S,updateId:R,children:C}=g.props,k=R==null;g.staleId&&E.delete(g.staleId),E.set(T,g),P=[...P,g.props.toastId].filter(ne=>ne!==g.staleId),O(),m(Uv(g,k?"added":"updated")),k&&Bt(S)&&S(L.isValidElement(C)&&C.props)};return{id:d,props:y,observe:g=>(x.add(g),()=>x.delete(g)),toggle:(g,T)=>{E.forEach(S=>{T!=null&&T!==S.props.toastId||Bt(S.toggle)&&S.toggle(g)})},removeToast:M,toasts:E,clearQueue:()=>{A-=w.length,w=[]},buildToast:(g,T)=>{if((re=>{let{containerId:ae,toastId:Ve,updateId:je}=re;const et=ae?ae!==d:d!==1,Et=E.has(Ve)&&je==null;return et||Et})(T))return;const{toastId:S,updateId:R,data:C,staleId:k,delay:ne}=T,Ce=()=>{M(S)},We=R==null;We&&A++;const fe={...y,style:y.toastStyle,key:b++,...Object.fromEntries(Object.entries(T).filter(re=>{let[ae,Ve]=re;return Ve!=null})),toastId:S,updateId:R,data:C,closeToast:Ce,isIn:!1,className:Kl(T.className||y.toastClassName),bodyClassName:Kl(T.bodyClassName||y.bodyClassName),progressClassName:Kl(T.progressClassName||y.progressClassName),autoClose:!T.isLoading&&(z=T.autoClose,Q=y.autoClose,z===!1||aa(z)&&z>0?z:Q),deleteToast(){const re=E.get(S),{onClose:ae,children:Ve}=re.props;Bt(ae)&&ae(L.isValidElement(Ve)&&Ve.props),m(Uv(re,"removed")),E.delete(S),A--,A<0&&(A=0),w.length>0?I(w.shift()):O()}};var z,Q;fe.closeButton=y.closeButton,T.closeButton===!1||af(T.closeButton)?fe.closeButton=T.closeButton:T.closeButton===!0&&(fe.closeButton=!af(y.closeButton)||y.closeButton);let Y=g;L.isValidElement(g)&&!oi(g.type)?Y=L.cloneElement(g,{closeToast:Ce,toastProps:fe,data:C}):Bt(g)&&(Y=g({closeToast:Ce,toastProps:fe,data:C}));const pe={content:Y,props:fe,staleId:k};y.limit&&y.limit>0&&A>y.limit&&We?w.push(pe):aa(ne)?setTimeout(()=>{I(pe)},ne):I(pe)},setProps(g){y=g},setToggle:(g,T)=>{E.get(g).toggle=T},isToastActive:g=>P.some(T=>T===g),getSnapshot:()=>y.newestOnTop?v.reverse():v}}(s,o,AN);kt.set(s,u);const c=u.observe(l);return la.forEach(d=>WE(d.content,d.options)),la=[],()=>{c(),kt.delete(s)}},setProps(l){var u;(u=kt.get(s))==null||u.setProps(l)},getSnapshot(){var l;return(l=kt.get(s))==null?void 0:l.getSnapshot()}}}(t)).current;r(t);const i=L.useSyncExternalStore(e,n,n);return{getToastToRender:function(o){if(!i)return[];const s=new Map;return i.forEach(l=>{const{position:u}=l.props;s.has(u)||s.set(u,[]),s.get(u).push(l)}),Array.from(s,l=>o(l[0],l[1]))},isToastActive:$E,count:i==null?void 0:i.length}}function SN(t){const[e,n]=L.useState(!1),[r,i]=L.useState(!1),o=L.useRef(null),s=L.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:u,closeToast:c,onClick:d,closeOnClick:p}=t;var m,b;function A(){n(!0)}function w(){n(!1)}function P(E){const x=o.current;s.canDrag&&x&&(s.didMove=!0,e&&w(),s.delta=t.draggableDirection==="x"?E.clientX-s.start:E.clientY-s.start,s.start!==E.clientX&&(s.canCloseOnClick=!1),x.style.transform=`translate3d(${t.draggableDirection==="x"?`${s.delta}px, var(--y)`:`0, calc(${s.delta}px + var(--y))`},0)`,x.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function v(){document.removeEventListener("pointermove",P),document.removeEventListener("pointerup",v);const E=o.current;if(s.canDrag&&s.didMove&&E){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),t.closeToast(),void t.collapseAll();E.style.transition="transform 0.2s, opacity 0.2s",E.style.removeProperty("transform"),E.style.removeProperty("opacity")}}(b=kt.get((m={id:t.toastId,containerId:t.containerId,fn:n}).containerId||1))==null||b.setToggle(m.id,m.fn),L.useEffect(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||w(),window.addEventListener("focus",A),window.addEventListener("blur",w),()=>{window.removeEventListener("focus",A),window.removeEventListener("blur",w)}},[t.pauseOnFocusLoss]);const y={onPointerDown:function(E){if(t.draggable===!0||t.draggable===E.pointerType){s.didMove=!1,document.addEventListener("pointermove",P),document.addEventListener("pointerup",v);const x=o.current;s.canCloseOnClick=!0,s.canDrag=!0,x.style.transition="none",t.draggableDirection==="x"?(s.start=E.clientX,s.removalDistance=x.offsetWidth*(t.draggablePercent/100)):(s.start=E.clientY,s.removalDistance=x.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(E){const{top:x,bottom:O,left:M,right:I}=o.current.getBoundingClientRect();E.nativeEvent.type!=="touchend"&&t.pauseOnHover&&E.clientX>=M&&E.clientX<=I&&E.clientY>=x&&E.clientY<=O?w():A()}};return l&&u&&(y.onMouseEnter=w,t.stacked||(y.onMouseLeave=A)),p&&(y.onClick=E=>{d&&d(E),s.canCloseOnClick&&c()}),{playToast:A,pauseToast:w,isRunning:e,preventExitTransition:r,toastRef:o,eventHandlers:y}}function PN(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:o,className:s,style:l,controlledProgress:u,progress:c,rtl:d,isIn:p,theme:m}=t;const b=o||u&&c===0,A={...l,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused"};u&&(A.transform=`scaleX(${c})`);const w=_r("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":d}),P=Bt(s)?s({rtl:d,type:i,defaultClassName:w}):_r(w,s),v={[u&&c>=1?"onTransitionEnd":"onAnimationEnd"]:u&&c<1?null:()=>{p&&r()}};return W.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":b},W.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${m} Toastify__progress-bar--${i}`}),W.createElement("div",{role:"progressbar","aria-hidden":b?"true":"false","aria-label":"notification timer",className:P,style:A,...v}))}let RN=1;const HE=()=>""+RN++;function CN(t){return t&&(oi(t.toastId)||aa(t.toastId))?t.toastId:HE()}function Cs(t,e){return WE(t,e),e.toastId}function Lu(t,e){return{...e,type:e&&e.type||t,toastId:CN(e)}}function vl(t){return(e,n)=>Cs(e,Lu(t,n))}function J(t,e){return Cs(t,Lu("default",e))}J.loading=(t,e)=>Cs(t,Lu("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),J.promise=function(t,e,n){let r,{pending:i,error:o,success:s}=e;i&&(r=oi(i)?J.loading(i,n):J.loading(i.render,{...n,...i}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(d,p,m)=>{if(p==null)return void J.dismiss(r);const b={type:d,...l,...n,data:m},A=oi(p)?{render:p}:p;return r?J.update(r,{...b,...A}):J(A.render,{...b,...A}),m},c=Bt(t)?t():t;return c.then(d=>u("success",s,d)).catch(d=>u("error",o,d)),c},J.success=vl("success"),J.info=vl("info"),J.error=vl("error"),J.warning=vl("warning"),J.warn=J.warning,J.dark=(t,e)=>Cs(t,Lu("default",{theme:"dark",...e})),J.dismiss=function(t){(function(e){var n;if(qE()){if(e==null||oi(n=e)||aa(n))kt.forEach(r=>{r.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){const r=kt.get(e.containerId);r?r.removeToast(e.id):kt.forEach(i=>{i.removeToast(e.id)})}}else la=la.filter(r=>e!=null&&r.options.toastId!==e)})(t)},J.clearWaitingQueue=function(t){t===void 0&&(t={}),kt.forEach(e=>{!e.props.limit||t.containerId&&e.id!==t.containerId||e.clearQueue()})},J.isActive=$E,J.update=function(t,e){e===void 0&&(e={});const n=((r,i)=>{var o;let{containerId:s}=i;return(o=kt.get(s||1))==null?void 0:o.toasts.get(r)})(t,e);if(n){const{props:r,content:i}=n,o={delay:100,...r,...e,toastId:e.toastId||t,updateId:HE()};o.toastId!==t&&(o.staleId=t);const s=o.render||i;delete o.render,Cs(s,o)}},J.done=t=>{J.update(t,{progress:1})},J.onChange=function(t){return lf.add(t),()=>{lf.delete(t)}},J.play=t=>Fv(!0,t),J.pause=t=>Fv(!1,t);const xN=typeof window<"u"?L.useLayoutEffect:L.useEffect,_l=t=>{let{theme:e,type:n,isLoading:r,...i}=t;return W.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...i})},Mh={info:function(t){return W.createElement(_l,{...t},W.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return W.createElement(_l,{...t},W.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return W.createElement(_l,{...t},W.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return W.createElement(_l,{...t},W.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return W.createElement("div",{className:"Toastify__spinner"})}},NN=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=SN(t),{closeButton:s,children:l,autoClose:u,onClick:c,type:d,hideProgressBar:p,closeToast:m,transition:b,position:A,className:w,style:P,bodyClassName:v,bodyStyle:y,progressClassName:E,progressStyle:x,updateId:O,role:M,progress:I,rtl:g,toastId:T,deleteToast:S,isIn:R,isLoading:C,closeOnClick:k,theme:ne}=t,Ce=_r("Toastify__toast",`Toastify__toast-theme--${ne}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":g},{"Toastify__toast--close-on-click":k}),We=Bt(w)?w({rtl:g,position:A,type:d,defaultClassName:Ce}):_r(Ce,w),fe=function(pe){let{theme:re,type:ae,isLoading:Ve,icon:je}=pe,et=null;const Et={theme:re,type:ae};return je===!1||(Bt(je)?et=je({...Et,isLoading:Ve}):L.isValidElement(je)?et=L.cloneElement(je,Et):Ve?et=Mh.spinner():(Rc=>Rc in Mh)(ae)&&(et=Mh[ae](Et))),et}(t),z=!!I||!u,Q={closeToast:m,type:d,theme:ne};let Y=null;return s===!1||(Y=Bt(s)?s(Q):L.isValidElement(s)?L.cloneElement(s,Q):function(pe){let{closeToast:re,theme:ae,ariaLabel:Ve="close"}=pe;return W.createElement("button",{className:`Toastify__close-button Toastify__close-button--${ae}`,type:"button",onClick:je=>{je.stopPropagation(),re(je)},"aria-label":Ve},W.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},W.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(Q)),W.createElement(b,{isIn:R,done:S,position:A,preventExitTransition:n,nodeRef:r,playToast:o},W.createElement("div",{id:T,onClick:c,"data-in":R,className:We,...i,style:P,ref:r},W.createElement("div",{...R&&{role:M},className:Bt(v)?v({type:d}):_r("Toastify__toast-body",v),style:y},fe!=null&&W.createElement("div",{className:_r("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!C})},fe),W.createElement("div",null,l)),Y,W.createElement(PN,{...O&&!z?{key:`pb-${O}`}:{},rtl:g,theme:ne,delay:u,isRunning:e,isIn:R,closeToast:m,hide:p,type:d,style:x,className:E,controlledProgress:z,progress:I||0})))},Sc=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},ON=kc(Sc("bounce",!0));kc(Sc("slide",!0));kc(Sc("zoom"));kc(Sc("flip"));const DN={position:"top-right",transition:ON,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function VN(t){let e={...DN,...t};const n=t.stacked,[r,i]=L.useState(!0),o=L.useRef(null),{getToastToRender:s,isToastActive:l,count:u}=kN(e),{className:c,style:d,rtl:p,containerId:m}=e;function b(w){const P=_r("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":p});return Bt(c)?c({position:w,rtl:p,defaultClassName:P}):_r(P,Kl(c))}function A(){n&&(i(!0),J.play())}return xN(()=>{if(n){var w;const P=o.current.querySelectorAll('[data-in="true"]'),v=12,y=(w=e.position)==null?void 0:w.includes("top");let E=0,x=0;Array.from(P).reverse().forEach((O,M)=>{const I=O;I.classList.add("Toastify__toast--stacked"),M>0&&(I.dataset.collapsed=`${r}`),I.dataset.pos||(I.dataset.pos=y?"top":"bot");const g=E*(r?.2:1)+(r?0:v*M);I.style.setProperty("--y",`${y?g:-1*g}px`),I.style.setProperty("--g",`${v}`),I.style.setProperty("--s",""+(1-(r?x:0))),E+=I.offsetHeight,x+=.025})}},[r,u,n]),W.createElement("div",{ref:o,className:"Toastify",id:m,onMouseEnter:()=>{n&&(i(!1),J.pause())},onMouseLeave:A},s((w,P)=>{const v=P.length?{...d}:{...d,pointerEvents:"none"};return W.createElement("div",{className:b(w),style:v,key:`container-${w}`},P.map(y=>{let{content:E,props:x}=y;return W.createElement(NN,{...x,stacked:n,collapseAll:A,isIn:l(x.toastId,x.containerId),style:x.style,key:`toast-${x.key}`},E)}))}))}const LN={apiKey:"AIzaSyDZScPbI0fZ1DGkMdoMoyRnRzZWI-3iiuQ",authDomain:"chat-app-81be2.firebaseapp.com",projectId:"chat-app-81be2",storageBucket:"chat-app-81be2.appspot.com",messagingSenderId:"851086828727",appId:"1:851086828727:web:b918d9c2f3366045435932"},KE=N1(LN),Mr=_C(KE),Fe=lN(KE),MN=async(t,e,n)=>{try{const i=(await iR(Mr,e,n)).user;await sf(Be(Fe,"users",i.uid),{id:i.uid,username:t.toLowerCase(),email:e,name:"",avatar:"",bio:"Hey, There i am using chat app",lastseen:Date.now()}),J.success("Tebrikler! Başarılı bir şekilde kayıt oldun."),await sf(Be(Fe,"chats",i.uid),{chatsData:[]})}catch(r){console.error(r),J.error(r.code.split("/")[1].split("-").join(" ").toUpperCase())}},UN=async(t,e)=>{try{const n=await oR(Mr,t,e)}catch(n){console.error(n),J.error("Kullanıcı adı veya şifre yanlış!")}},FN=async()=>{try{Mr.currentUser&&J.success("Çıkış yaptın! Görüşmek üzere..."),await lR(Mr)}catch(t){console.error(t),J.error(t.code.split("/")[1].split("-").join(" ").toUpperCase())}},jN=async t=>{if(!t)return J.error("E-mail adresi boş bırakılamaz!"),null;try{const e=Wl(Fe,"users"),n=DE(e,of("email","==",t));(await UE(n)).empty?J.error("E-posta mevcut değil!"):(await rR(Mr,t),J.success("Şifre sıfırlama bağlantısı gönderildi!"))}catch(e){console.error(e.message)}},zN=()=>{const[t,e]=L.useState("Giriş Yap"),[n,r]=L.useState(""),[i,o]=L.useState(""),[s,l]=L.useState(""),u=c=>{c.preventDefault(),t==="Kayıt Ol"?MN(n,i,s):t==="Giriş Yap"?UN(i,s):t==="Şifre Sıfırla"&&jN(i)};return V.jsxs("div",{className:"login",children:[V.jsx("img",{src:Le.logo_big,className:"logo",alt:"logo"}),V.jsxs("form",{onSubmit:u,className:"login-form",children:[V.jsx("h2",{children:t==="Kayıt Ol"?"Kayıt Ol":t==="Giriş Yap"?"Giriş Yap":"Şifre Sıfırla"}),t==="Kayıt Ol"&&V.jsx("input",{onChange:c=>r(c.target.value),value:n,type:"text",placeholder:"Kullanıcı Adı",className:"form-input",required:!0}),V.jsx("input",{onChange:c=>o(c.target.value),value:i,type:"email",placeholder:"E-Posta",className:"form-input",required:!0}),(t==="Kayıt Ol"||t==="Giriş Yap")&&V.jsx("input",{onChange:c=>l(c.target.value),value:s,type:"password",placeholder:"Şifre",className:"form-input",required:!0}),t==="Kayıt Ol"&&V.jsxs("div",{className:"login-term",children:[V.jsx("input",{style:{cursor:"pointer"},type:"checkbox",required:!0}),V.jsx("p",{children:"Agree to the terms of use & privacy policy."})]}),V.jsx("button",{type:"submit",children:t==="Kayıt Ol"?"Kayıt Ol":t==="Giriş Yap"?"Giriş Yap":"Şifre Sıfırla"}),V.jsxs("div",{className:"login-forgot",children:[t==="Giriş Yap"&&V.jsxs(V.Fragment,{children:[V.jsxs("p",{className:"login-toggle",children:["Forgot Password? ",V.jsx("span",{onClick:()=>e("Şifre Sıfırla"),children:"click here"})]}),V.jsxs("p",{className:"login-toggle",children:["Create an account? ",V.jsx("span",{onClick:()=>e("Kayıt Ol"),children:"click here"})]})]}),t==="Kayıt Ol"&&V.jsxs("p",{className:"login-toggle",children:["Already registered? ",V.jsx("span",{onClick:()=>e("Giriş Yap"),children:"click here"})]}),t==="Şifre Sıfırla"&&V.jsxs("p",{className:"login-toggle",children:["Remembered your password? ",V.jsx("span",{onClick:()=>e("Giriş Yap"),children:"click here"})]})]})]})]})},ki=L.createContext(),BN=({children:t})=>{const e=rc(),[n,r]=L.useState(null),[i,o]=L.useState(null),[s,l]=L.useState(null),[u,c]=L.useState([]),[d,p]=L.useState(null),[m,b]=L.useState(!0),[A,w]=L.useState(!0),[P,v]=L.useState(!1),[y,E]=L.useState(!1),x=async S=>{try{const R=Be(Fe,"users",S),k=(await Dn(R)).data();r(k),k.name?e("/chat"):e("/profile"),await zt(R,{lastseen:Date.now()}),setInterval(async()=>{Mr.currentUser&&await zt(R,{lastseen:Date.now()})},6e4)}catch(R){console.error(R)}},O=async()=>{await FN(),p(null),r(null),o(null)},M=async S=>{var ne;const R=Be(Fe,"users",S),k=(ne=(await Dn(R)).data())==null?void 0:ne.lastseen;Date.now()-k<=7e4?v(!0):v(!1)};L.useEffect(()=>{if(d){M(d.rId);const S=setInterval(()=>{M(d.rId)},2e4);return()=>clearInterval(S)}},[d]);const I=async()=>{const S=Be(Fe,"chats",n.id),C=(await Dn(S)).data(),k=C.chatsData.findIndex(ne=>ne.messageId===d.messageId);C.chatsData[k].messageSeen==!1&&(C.chatsData[k].messageSeen=!0,await zt(S,{chatsData:C.chatsData}))},g=async S=>{const R=Be(Fe,"chats",n.id),k=(await Dn(R)).data(),ne=k.chatsData.findIndex(Ce=>Ce.messageId===S.messageId);k.chatsData[ne].messageSeen==!1&&(k.chatsData[ne].messageSeen=!0,await zt(R,{chatsData:k.chatsData}))};L.useEffect(()=>{if(n){w(!0);try{const S=Be(Fe,"chats",n.id),R=FE(S,async C=>{const k=C.data().chatsData,ne=k.map(fe=>Be(Fe,"users",fe.rId)),We=(await Promise.all(ne.map(fe=>Dn(fe)))).map((fe,z)=>({...k[z],userData:fe.data()}));o(We.sort((fe,z)=>z.updatedAt-fe.updatedAt)),w(!1)});return()=>{R&&R()}}catch(S){console.error(S.message)}}},[n]);const T={userData:n,setUserData:r,chatData:i,setChatData:o,loadUserData:x,loading:m,setLoading:b,messagesId:s,setMessagesId:l,messages:u,setMessages:c,chatUser:d,setChatUser:p,chatLoading:A,setChatLoading:w,onlineControl:M,isOnline:P,inputClickControl:I,logouts:O,messageSeen:g,chatVisible:y,setChatVisible:E};return V.jsx(ki.Provider,{value:T,children:t})};function Ye(t,e){e===void 0&&(e={});var n=e.insertAt;if(t&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}Ye(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var ue=function(){return ue=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},ue.apply(this,arguments)};function Mu(t){return Mu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mu(t)}var qN=/^\s+/,$N=/\s+$/;function K(t,e){if(e=e||{},(t=t||"")instanceof K)return t;if(!(this instanceof K))return new K(t,e);var n=function(r){var i={r:0,g:0,b:0},o=1,s=null,l=null,u=null,c=!1,d=!1;typeof r=="string"&&(r=function(A){A=A.replace(qN,"").replace($N,"").toLowerCase();var w,P=!1;if(uf[A])A=uf[A],P=!0;else if(A=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(w=rn.rgb.exec(A))?{r:w[1],g:w[2],b:w[3]}:(w=rn.rgba.exec(A))?{r:w[1],g:w[2],b:w[3],a:w[4]}:(w=rn.hsl.exec(A))?{h:w[1],s:w[2],l:w[3]}:(w=rn.hsla.exec(A))?{h:w[1],s:w[2],l:w[3],a:w[4]}:(w=rn.hsv.exec(A))?{h:w[1],s:w[2],v:w[3]}:(w=rn.hsva.exec(A))?{h:w[1],s:w[2],v:w[3],a:w[4]}:(w=rn.hex8.exec(A))?{r:Mt(w[1]),g:Mt(w[2]),b:Mt(w[3]),a:Wv(w[4]),format:P?"name":"hex8"}:(w=rn.hex6.exec(A))?{r:Mt(w[1]),g:Mt(w[2]),b:Mt(w[3]),format:P?"name":"hex"}:(w=rn.hex4.exec(A))?{r:Mt(w[1]+""+w[1]),g:Mt(w[2]+""+w[2]),b:Mt(w[3]+""+w[3]),a:Wv(w[4]+""+w[4]),format:P?"name":"hex8"}:(w=rn.hex3.exec(A))?{r:Mt(w[1]+""+w[1]),g:Mt(w[2]+""+w[2]),b:Mt(w[3]+""+w[3]),format:P?"name":"hex"}:!1}(r)),Mu(r)=="object"&&(xn(r.r)&&xn(r.g)&&xn(r.b)?(p=r.r,m=r.g,b=r.b,i={r:255*Te(p,255),g:255*Te(m,255),b:255*Te(b,255)},c=!0,d=String(r.r).substr(-1)==="%"?"prgb":"rgb"):xn(r.h)&&xn(r.s)&&xn(r.v)?(s=ms(r.s),l=ms(r.v),i=function(A,w,P){A=6*Te(A,360),w=Te(w,100),P=Te(P,100);var v=Math.floor(A),y=A-v,E=P*(1-w),x=P*(1-y*w),O=P*(1-(1-y)*w),M=v%6,I=[P,x,E,E,O,P][M],g=[O,P,P,x,E,E][M],T=[E,E,O,P,P,x][M];return{r:255*I,g:255*g,b:255*T}}(r.h,s,l),c=!0,d="hsv"):xn(r.h)&&xn(r.s)&&xn(r.l)&&(s=ms(r.s),u=ms(r.l),i=function(A,w,P){var v,y,E;function x(I,g,T){return T<0&&(T+=1),T>1&&(T-=1),T<1/6?I+6*(g-I)*T:T<.5?g:T<2/3?I+(g-I)*(2/3-T)*6:I}if(A=Te(A,360),w=Te(w,100),P=Te(P,100),w===0)v=y=E=P;else{var O=P<.5?P*(1+w):P+w-P*w,M=2*P-O;v=x(M,O,A+1/3),y=x(M,O,A),E=x(M,O,A-1/3)}return{r:255*v,g:255*y,b:255*E}}(r.h,s,u),c=!0,d="hsl"),r.hasOwnProperty("a")&&(o=r.a));var p,m,b;return o=GE(o),{ok:c,format:r.format||d,r:Math.min(255,Math.max(i.r,0)),g:Math.min(255,Math.max(i.g,0)),b:Math.min(255,Math.max(i.b,0)),a:o}}(t);this._originalInput=t,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||n.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}function jv(t,e,n){t=Te(t,255),e=Te(e,255),n=Te(n,255);var r,i,o=Math.max(t,e,n),s=Math.min(t,e,n),l=(o+s)/2;if(o==s)r=i=0;else{var u=o-s;switch(i=l>.5?u/(2-o-s):u/(o+s),o){case t:r=(e-n)/u+(e<n?6:0);break;case e:r=(n-t)/u+2;break;case n:r=(t-e)/u+4}r/=6}return{h:r,s:i,l}}function zv(t,e,n){t=Te(t,255),e=Te(e,255),n=Te(n,255);var r,i,o=Math.max(t,e,n),s=Math.min(t,e,n),l=o,u=o-s;if(i=o===0?0:u/o,o==s)r=0;else{switch(o){case t:r=(e-n)/u+(e<n?6:0);break;case e:r=(n-t)/u+2;break;case n:r=(t-e)/u+4}r/=6}return{h:r,s:i,v:l}}function Bv(t,e,n,r){var i=[ln(Math.round(t).toString(16)),ln(Math.round(e).toString(16)),ln(Math.round(n).toString(16))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function qv(t,e,n,r){return[ln(QE(r)),ln(Math.round(t).toString(16)),ln(Math.round(e).toString(16)),ln(Math.round(n).toString(16))].join("")}function WN(t,e){e=e===0?0:e||10;var n=K(t).toHsl();return n.s-=e/100,n.s=Pc(n.s),K(n)}function HN(t,e){e=e===0?0:e||10;var n=K(t).toHsl();return n.s+=e/100,n.s=Pc(n.s),K(n)}function KN(t){return K(t).desaturate(100)}function GN(t,e){e=e===0?0:e||10;var n=K(t).toHsl();return n.l+=e/100,n.l=Pc(n.l),K(n)}function QN(t,e){e=e===0?0:e||10;var n=K(t).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-e/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-e/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-e/100*255))),K(n)}function YN(t,e){e=e===0?0:e||10;var n=K(t).toHsl();return n.l-=e/100,n.l=Pc(n.l),K(n)}function XN(t,e){var n=K(t).toHsl(),r=(n.h+e)%360;return n.h=r<0?360+r:r,K(n)}function JN(t){var e=K(t).toHsl();return e.h=(e.h+180)%360,K(e)}function $v(t,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var n=K(t).toHsl(),r=[K(t)],i=360/e,o=1;o<e;o++)r.push(K({h:(n.h+o*i)%360,s:n.s,l:n.l}));return r}function ZN(t){var e=K(t).toHsl(),n=e.h;return[K(t),K({h:(n+72)%360,s:e.s,l:e.l}),K({h:(n+216)%360,s:e.s,l:e.l})]}function eO(t,e,n){e=e||6,n=n||30;var r=K(t).toHsl(),i=360/n,o=[K(t)];for(r.h=(r.h-(i*e>>1)+720)%360;--e;)r.h=(r.h+i)%360,o.push(K(r));return o}function tO(t,e){e=e||6;for(var n=K(t).toHsv(),r=n.h,i=n.s,o=n.v,s=[],l=1/e;e--;)s.push(K({h:r,s:i,v:o})),o=(o+l)%1;return s}K.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,e,n,r=this.toRgb();return t=r.r/255,e=r.g/255,n=r.b/255,.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},setAlpha:function(t){return this._a=GE(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=zv(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=zv(this._r,this._g,this._b),e=Math.round(360*t.h),n=Math.round(100*t.s),r=Math.round(100*t.v);return this._a==1?"hsv("+e+", "+n+"%, "+r+"%)":"hsva("+e+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var t=jv(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=jv(this._r,this._g,this._b),e=Math.round(360*t.h),n=Math.round(100*t.s),r=Math.round(100*t.l);return this._a==1?"hsl("+e+", "+n+"%, "+r+"%)":"hsla("+e+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(t){return Bv(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(e,n,r,i,o){var s=[ln(Math.round(e).toString(16)),ln(Math.round(n).toString(16)),ln(Math.round(r).toString(16)),ln(QE(i))];return o&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1)&&s[3].charAt(0)==s[3].charAt(1)?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Te(this._r,255))+"%",g:Math.round(100*Te(this._g,255))+"%",b:Math.round(100*Te(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Te(this._r,255))+"%, "+Math.round(100*Te(this._g,255))+"%, "+Math.round(100*Te(this._b,255))+"%)":"rgba("+Math.round(100*Te(this._r,255))+"%, "+Math.round(100*Te(this._g,255))+"%, "+Math.round(100*Te(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(nO[Bv(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var e="#"+qv(this._r,this._g,this._b,this._a),n=e,r=this._gradientType?"GradientType = 1, ":"";if(t){var i=K(t);n="#"+qv(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+e+",endColorstr="+n+")"},toString:function(t){var e=!!t;t=t||this._format;var n=!1,r=this._a<1&&this._a>=0;return e||!r||t!=="hex"&&t!=="hex6"&&t!=="hex3"&&t!=="hex4"&&t!=="hex8"&&t!=="name"?(t==="rgb"&&(n=this.toRgbString()),t==="prgb"&&(n=this.toPercentageRgbString()),t!=="hex"&&t!=="hex6"||(n=this.toHexString()),t==="hex3"&&(n=this.toHexString(!0)),t==="hex4"&&(n=this.toHex8String(!0)),t==="hex8"&&(n=this.toHex8String()),t==="name"&&(n=this.toName()),t==="hsl"&&(n=this.toHslString()),t==="hsv"&&(n=this.toHsvString()),n||this.toHexString()):t==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return K(this.toString())},_applyModification:function(t,e){var n=t.apply(null,[this].concat([].slice.call(e)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(GN,arguments)},brighten:function(){return this._applyModification(QN,arguments)},darken:function(){return this._applyModification(YN,arguments)},desaturate:function(){return this._applyModification(WN,arguments)},saturate:function(){return this._applyModification(HN,arguments)},greyscale:function(){return this._applyModification(KN,arguments)},spin:function(){return this._applyModification(XN,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(eO,arguments)},complement:function(){return this._applyCombination(JN,arguments)},monochromatic:function(){return this._applyCombination(tO,arguments)},splitcomplement:function(){return this._applyCombination(ZN,arguments)},triad:function(){return this._applyCombination($v,[3])},tetrad:function(){return this._applyCombination($v,[4])}},K.fromRatio=function(t,e){if(Mu(t)=="object"){var n={};for(var r in t)t.hasOwnProperty(r)&&(n[r]=r==="a"?t[r]:ms(t[r]));t=n}return K(t,e)},K.equals=function(t,e){return!(!t||!e)&&K(t).toRgbString()==K(e).toRgbString()},K.random=function(){return K.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},K.mix=function(t,e,n){n=n===0?0:n||50;var r=K(t).toRgb(),i=K(e).toRgb(),o=n/100;return K({r:(i.r-r.r)*o+r.r,g:(i.g-r.g)*o+r.g,b:(i.b-r.b)*o+r.b,a:(i.a-r.a)*o+r.a})},K.readability=function(t,e){var n=K(t),r=K(e);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)},K.isReadable=function(t,e,n){var r,i,o=K.readability(t,e);switch(i=!1,(r=function(s){var l,u;return l=((s=s||{level:"AA",size:"small"}).level||"AA").toUpperCase(),u=(s.size||"small").toLowerCase(),l!=="AA"&&l!=="AAA"&&(l="AA"),u!=="small"&&u!=="large"&&(u="small"),{level:l,size:u}}(n)).level+r.size){case"AAsmall":case"AAAlarge":i=o>=4.5;break;case"AAlarge":i=o>=3;break;case"AAAsmall":i=o>=7}return i},K.mostReadable=function(t,e,n){var r,i,o,s,l=null,u=0;i=(n=n||{}).includeFallbackColors,o=n.level,s=n.size;for(var c=0;c<e.length;c++)(r=K.readability(t,e[c]))>u&&(u=r,l=K(e[c]));return K.isReadable(t,l,{level:o,size:s})||!i?l:(n.includeFallbackColors=!1,K.mostReadable(t,["#fff","#000"],n))};var uf=K.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},nO=K.hexNames=function(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[t[n]]=n);return e}(uf);function GE(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Te(t,e){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(t)&&(t="100%");var n=function(r){return typeof r=="string"&&r.indexOf("%")!=-1}(t);return t=Math.min(e,Math.max(0,parseFloat(t))),n&&(t=parseInt(t*e,10)/100),Math.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function Pc(t){return Math.min(1,Math.max(0,t))}function Mt(t){return parseInt(t,16)}function ln(t){return t.length==1?"0"+t:""+t}function ms(t){return t<=1&&(t=100*t+"%"),t}function QE(t){return Math.round(255*parseFloat(t)).toString(16)}function Wv(t){return Mt(t)/255}var or,wl,El,rn=(wl="[\\s|\\(]+("+(or="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+or+")[,|\\s]+("+or+")\\s*\\)?",El="[\\s|\\(]+("+or+")[,|\\s]+("+or+")[,|\\s]+("+or+")[,|\\s]+("+or+")\\s*\\)?",{CSS_UNIT:new RegExp(or),rgb:new RegExp("rgb"+wl),rgba:new RegExp("rgba"+El),hsl:new RegExp("hsl"+wl),hsla:new RegExp("hsla"+El),hsv:new RegExp("hsv"+wl),hsva:new RegExp("hsva"+El),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function xn(t){return!!rn.CSS_UNIT.exec(t)}var Pa=function(t,e){var n=(typeof t=="string"?parseInt(t):t)||0;if(n>=-5&&n<=5){var r=n,i=parseFloat(e),o=i+r*(i/5)*-1;return(o==0||o<=Number.EPSILON)&&(o=.1),{animationPeriod:o+"s"}}return{animationPeriod:e}},Ra=function(t,e){var n=t||{},r="";switch(e){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var i={};if(n.fontSize){var o=n.fontSize;i=function(s,l){var u={};for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&l.indexOf(c)<0&&(u[c]=s[c]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function"){var d=0;for(c=Object.getOwnPropertySymbols(s);d<c.length;d++)l.indexOf(c[d])<0&&Object.prototype.propertyIsEnumerable.call(s,c[d])&&(u[c[d]]=s[c[d]])}return u}(n,["fontSize"]),r=o}return{fontSize:r,styles:i}},rO={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Ca=function(t){var e=t.className,n=t.text,r=t.textColor,i=t.staticText,o=t.style;return n?W.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(e||"").trim(),style:ue(ue(ue({},i&&rO),r&&{color:r,mixBlendMode:"unset"}),o&&o)},typeof n=="string"&&n.length?n:"loading"):null},xa="rgb(50, 205, 50)";function Na(t,e){e===void 0&&(e=0);var n=[];return function r(i,o){return o===void 0&&(o=0),n.push.apply(n,i),n.length<o&&r(n,o),n.slice(0,o)}(t,e)}Ye(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);var Ni=K(xa).toRgb(),Kr=Array.from({length:4},function(t,e){return"--atom-phase".concat(e+1,"-rgb")}),iO=function(t){var e,n=Ra(t==null?void 0:t.style,t==null?void 0:t.size),r=n.styles,i=n.fontSize,o=t==null?void 0:t.easing,s=Pa(t==null?void 0:t.speedPlus,"1s").animationPeriod,l=function(u){var c={};if(u instanceof Array){for(var d=Na(u,Kr.length),p=0;p<d.length&&!(p>=4);p++)try{if(!(w=K(d[p])).isValid())throw new Error("invalid color");var m=(P=w.toRgb()).r,b=P.g,A=P.b;c[Kr[p]]="".concat(m,", ").concat(b,", ").concat(A)}catch{m=Ni.r,b=Ni.g,A=Ni.b,c[Kr[p]]="".concat(m,", ").concat(b,", ").concat(A),console.warn("Possibly an invalid color( ".concat(d[p]," ) passed to Atom indicator!"))}return c}try{if(typeof u!="string")throw new Error("Color String expected");var w;if(!(w=K(u)).isValid())throw new Error("Invalid color");var P;for(m=(P=w.toRgb()).r,b=P.g,A=P.b,p=0;p<Kr.length;p++)c[Kr[p]]="".concat(m,", ").concat(b,", ").concat(A)}catch(v){for(v instanceof Error?console.warn("[".concat(v.message,']: Received "').concat(typeof u,'" instead with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u)," received in <Atom /> indicator cannot be processed. Using default instead!")),p=0;p<Kr.length;p++)m=Ni.r,b=Ni.g,A=Ni.b,c[Kr[p]]="".concat(m,", ").concat(b,", ").concat(A)}return c}((e=t==null?void 0:t.color)!==null&&e!==void 0?e:"");return W.createElement("span",{className:"rli-d-i-b atom-rli-bounding-box",style:ue(ue(ue(ue(ue({},i&&{fontSize:i}),s&&{"--rli-animation-duration":s}),o&&{"--rli-animation-function":o}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},W.createElement("span",{className:"rli-d-i-b atom-indicator"},W.createElement("span",{className:"rli-d-i-b electron-orbit"}),W.createElement("span",{className:"rli-d-i-b electron-orbit"}),W.createElement("span",{className:"rli-d-i-b electron-orbit"})),W.createElement(Ca,{className:"atom-text",staticText:!0,text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor}))};Ye(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--commet-phase".concat(e+1,"-color")});Ye(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--OP-annulus-phase".concat(e+1,"-color")});function Uh(t){return t&&t.Math===Math&&t}Ye(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);Uh(typeof window=="object"&&window)||Uh(typeof self=="object"&&self)||Uh(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(t,e){return"--OP-dotted-phase".concat(e+1,"-color")});Ye(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--OP-spokes-phase".concat(e+1,"-color")});Ye(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(t,e){return"--OP-annulus-dual-sectors-phase".concat(e+1,"-color")});Ye(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return["--OP-annulus-track-phase".concat(e+1,"-color"),"--OP-annulus-sector-phase".concat(e+1,"-color")]});Ye(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--four-square-phase".concat(e+1,"-color")});Ye(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--mosaic-phase".concat(e+1,"-color")});Ye(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--riple-phase".concat(e+1,"-color")});Ye(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);var Oi=Array.from({length:4},function(t,e){return"--TD-pulsate-phase".concat(e+1,"-color")}),oO=function(t){var e,n=Ra(t==null?void 0:t.style,t==null?void 0:t.size),r=n.styles,i=n.fontSize,o=t==null?void 0:t.easing,s=Pa(t==null?void 0:t.speedPlus,"1.2s").animationPeriod,l=function(u){var c={};if(u instanceof Array){for(var d=Na(u,Oi.length),p=0;p<d.length&&!(p>=4);p++)c[Oi[p]]=d[p];return c}try{if(typeof u!="string")throw new Error("Color String expected");for(var m=0;m<Oi.length;m++)c[Oi[m]]=u}catch(b){for(b instanceof Error?console.warn("[".concat(b.message,']: Received "').concat(typeof u,'" instead with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <ThreeDot variant="pulsate" /> indicator cannot be processed. Using default instead!')),m=0;m<Oi.length;m++)c[Oi[m]]=xa}return c}((e=t==null?void 0:t.color)!==null&&e!==void 0?e:"");return W.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:ue(ue(ue(ue(ue({},i&&{fontSize:i}),s&&{"--rli-animation-duration":s}),o&&{"--rli-animation-function":o}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},W.createElement("span",{className:"rli-d-i-b pulsate-indicator"},W.createElement("span",{className:"rli-d-i-b pulsate-dot"}),W.createElement("span",{className:"rli-d-i-b pulsate-dot"}),W.createElement("span",{className:"rli-d-i-b pulsate-dot"})),W.createElement(Ca,{staticText:!0,text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor}))};Ye(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);var Di=Array.from({length:4},function(t,e){return"--TD-brick-stack-phase".concat(e+1,"-color")}),sO=function(t){var e,n=Ra(t==null?void 0:t.style,t==null?void 0:t.size),r=n.styles,i=n.fontSize,o=t==null?void 0:t.easing,s=Pa(t==null?void 0:t.speedPlus,"1s").animationPeriod,l=function(u){var c={};if(u instanceof Array){for(var d=Na(u,Di.length),p=0;p<d.length&&!(p>=4);p++)c[Di[p]]=d[p];return c}try{if(typeof u!="string")throw new Error("Color String expected");for(var m=0;m<Di.length;m++)c[Di[m]]=u}catch(b){for(b instanceof Error?console.warn("[".concat(b.message,']: Received "').concat(typeof u,'" instead with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <ThreeDot variant="brick-stack" /> indicator cannot be processed. Using default instead!')),m=0;m<Di.length;m++)c[Di[m]]=xa}return c}((e=t==null?void 0:t.color)!==null&&e!==void 0?e:"");return W.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:ue(ue(ue(ue(ue({},i&&{fontSize:i}),s&&{"--rli-animation-duration":s}),o&&{"--rli-animation-function":o}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},W.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},W.createElement("span",{className:"rli-d-i-b brick-stack"})),W.createElement(Ca,{staticText:!0,text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor}))};Ye(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);var Vi=Array.from({length:4},function(t,e){return"--TD-bob-phase".concat(e+1,"-color")}),aO=function(t){var e,n=Ra(t==null?void 0:t.style,t==null?void 0:t.size),r=n.styles,i=n.fontSize,o=t==null?void 0:t.easing,s=Pa(t==null?void 0:t.speedPlus,"1.2s").animationPeriod,l=function(u){var c={};if(u instanceof Array){for(var d=Na(u,Vi.length),p=0;p<d.length&&!(p>=4);p++)c[Vi[p]]=d[p];return c}try{if(typeof u!="string")throw new Error("Color String expected");for(var m=0;m<Vi.length;m++)c[Vi[m]]=u}catch(b){for(b instanceof Error?console.warn("[".concat(b.message,']: Received "').concat(typeof u,'" instead with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <ThreeDot variant="bob" /> indicator cannot be processed. Using default instead!')),m=0;m<Vi.length;m++)c[Vi[m]]=xa}return c}((e=t==null?void 0:t.color)!==null&&e!==void 0?e:"");return W.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:ue(ue(ue(ue(ue({},i&&{fontSize:i}),s&&{"--rli-animation-duration":s}),o&&{"--rli-animation-function":o}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},W.createElement("span",{className:"bob-indicator"},W.createElement("span",{className:"bobbing"})),W.createElement(Ca,{staticText:!0,text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor}))};Ye(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);var Li=Array.from({length:4},function(t,e){return"--TD-bounce-phase".concat(e+1,"-color")}),lO=function(t){var e,n=Ra(t==null?void 0:t.style,t==null?void 0:t.size),r=n.styles,i=n.fontSize,o=t==null?void 0:t.easing,s=Pa(t==null?void 0:t.speedPlus,"0.5s").animationPeriod,l=function(u){var c={};if(u instanceof Array){for(var d=Na(u,Li.length),p=0;p<d.length&&!(p>=4);p++)c[Li[p]]=d[p];return c}try{if(typeof u!="string")throw new Error("Color String expected");for(var m=0;m<Li.length;m++)c[Li[m]]=u}catch{for(m=0;m<Li.length;m++)c[Li[m]]=xa}return c}((e=t==null?void 0:t.color)!==null&&e!==void 0?e:"");return W.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:ue(ue(ue(ue(ue({},i&&{fontSize:i}),s&&{"--rli-animation-duration":s}),o&&{"--rli-animation-function":o}),l),r)},W.createElement("span",{className:"wrapper"},W.createElement("span",{className:"group"},W.createElement("span",{className:"rli-d-i-b dot"}),W.createElement("span",{className:"rli-d-i-b dot"}),W.createElement("span",{className:"rli-d-i-b dot"})),W.createElement("span",{className:"group"},W.createElement("span",{className:"rli-d-i-b shadow"}),W.createElement("span",{className:"rli-d-i-b shadow"}),W.createElement("span",{className:"rli-d-i-b shadow"}))),W.createElement(Ca,{staticText:!0,text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor,style:{marginTop:"2px"}}))},YE=function(t){var e=Object(t).variant,n=e===void 0?"pulsate":e;return n==="pulsate"?W.createElement(oO,ue({},t)):n==="brick-stack"?W.createElement(sO,ue({},t)):n==="bob"?W.createElement(aO,ue({},t)):n==="bounce"?W.createElement(lO,ue({},t)):null};Ye(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--shape-phase".concat(e+1,"-color")});Ye(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--trophySpin-phase".concat(e+1,"-color")});Ye(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--slab-phase".concat(e+1,"-color")});Ye(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--life-line-phase".concat(e+1,"-color")});const uO=()=>{const t=rc(),{userData:e,setMessages:n,chatData:r,messagesId:i,setChatUser:o,setMessagesId:s,chatLoading:l,logouts:u,messageSeen:c,chatVisible:d,setChatVisible:p}=L.useContext(ki),[m,b]=L.useState(null),[A,w]=L.useState(!1),[P,v]=L.useState(!1),[y,E]=L.useState(!1),[x,O]=L.useState(""),[M,I]=L.useState(null),g=async C=>{try{const k=C.target.value.toLowerCase();if(O(k),k){w(!0);const ne=Wl(Fe,"users"),Ce=DE(ne,of("username",">=",k),of("username","<=",k+"")),We=await UE(Ce);if(We.empty)b(null);else{const fe=[];We.forEach(z=>{z.data().id!==e.id&&(r.some(Y=>Y.rId===z.data().id)||fe.push(z.data()))}),b(fe.length>0?fe:null)}}else w(!1)}catch(k){console.error(k.message)}},T=async C=>{if(y){J.info("İşlemler devam ediyor...");return}if(P){J.info("Yükleniyor...");return}if(v(!0),r==null?void 0:r.some(ne=>ne.rId===C.id)){v(!1),J.error("Bu kullanıcı sohbetinde mevcut.");return}E(!0);try{const ne=Wl(Fe,"messages"),Ce=Wl(Fe,"chats"),We=Be(ne);await sf(We,{createAt:TN(),messages:[]}),await zt(Be(Ce,C.id),{chatsData:Vu({messageId:We.id,lastMessage:"",rId:e.id,updatedAt:Date.now(),messageSeen:!0})}),await zt(Be(Ce,e.id),{chatsData:Vu({messageId:We.id,lastMessage:"",rId:C.id,updatedAt:Date.now(),messageSeen:!0})}),O(""),w(!1),b(null)}catch(ne){console.error(ne.message)}finally{J.success(`'${C.username}' Arkadaş olarak eklendi!`),v(!1),setTimeout(()=>{E(!1)},5e3);return}},S=async C=>{c(C),o(null),o(C),s(C.messageId),I(C.userData.id),p(!0)},R=()=>{o(null)};return V.jsxs("div",{className:`ls ${d?"hidden":""} `,children:[V.jsxs("div",{className:"ls-top",children:[V.jsxs("div",{className:"ls-nav",children:[V.jsx("img",{onClick:R,src:Le.logo,className:"logo"}),V.jsxs("div",{className:"menu",children:[V.jsx("img",{src:Le.menu_icon}),V.jsxs("div",{className:"sub-menu",children:[V.jsx("p",{onClick:()=>t("/profile"),children:"Profil Düzenle"}),V.jsx("hr",{}),V.jsx("p",{onClick:u,children:"Çıkış"})]})]})]}),V.jsxs("div",{className:"ls-search",children:[V.jsx("img",{src:Le.search_icon}),V.jsx("input",{onChange:g,value:x,type:"text",placeholder:"Search here.."})]})]}),V.jsx("div",{className:"ls-list",children:A&&m?m.map((C,k)=>V.jsxs("div",{onClick:()=>T(C),className:"friends add-user",children:[V.jsx("img",{className:"user-img",src:C.avatar?C.avatar:Le.avatar}),V.jsx("div",{className:"friends-content",children:V.jsx("p",{children:C.name})})]},k)):A&&!m?V.jsx("div",{className:"user-control",children:"Kullanıcı Bulunamadı"}):l?V.jsx("div",{className:"user-loading",children:V.jsx(YE,{variant:"bob",color:"#5cadf4",size:"small",text:"Yükleniyor...",textColor:"#efefef"})}):r==null?void 0:r.map((C,k)=>V.jsxs("div",{onClick:()=>S(C),className:`friends ${C.messageSeen||C.messageId===i?"":"border"} ${C.userData.id==M?"active":""}`,children:[V.jsx("img",{className:"user-img",src:C.userData.avatar?C.userData.avatar:Le.avatar_icon,alt:""}),V.jsxs("div",{className:"friends-content",children:[V.jsx("p",{children:C.userData.name}),V.jsx("span",{children:C.lastMessage})]})]},k))})]})},cO=()=>{var m;const{setUserData:t,setChatUser:e,setChatData:n,chatUser:r,messages:i,userData:o,logouts:s,isOnline:l}=L.useContext(ki),[u,c]=L.useState([]),[d,p]=L.useState(!1);return L.useEffect(()=>{(()=>{if(p(!1),i&&i.length>0){const A=i.filter(w=>w.image).map(w=>w.image);c(A)}else c([]);p(!0)})()},[i]),r?V.jsxs("div",{className:"rs",children:[V.jsxs("div",{className:"rs-profile",children:[V.jsx("img",{src:r.userData.avatar?r.userData.avatar:Le.avatar_icon}),V.jsxs("h3",{children:[Date.now()-((m=r==null?void 0:r.userData)==null?void 0:m.lastseen)<=7e4?V.jsx("img",{className:"dot",src:Le.green_dot}):null," ",r.userData.name]}),V.jsx("p",{children:r.userData.bio})]}),V.jsx("hr",{}),V.jsxs("div",{className:"rs-media",children:[V.jsx("p",{children:"Media"}),V.jsx("hr",{}),(u==null?void 0:u.length)>0?V.jsx("div",{children:u==null?void 0:u.map((b,A)=>V.jsx("img",{onClick:()=>window.open(b),src:b,alt:`msg-image-${A}`},A))}):V.jsx("p",{className:"mediainfo",children:"Media bulunamadı."})]})]}):V.jsxs("div",{className:"rs",children:[V.jsxs("div",{className:"rs-profile",children:[V.jsx("img",{src:o!=null&&o.avatar?o==null?void 0:o.avatar:Le.avatar_icon}),V.jsxs("h3",{children:[" ",l?V.jsx("img",{className:"dot",src:Le.green_dot,alt:"online"}):null," ",o==null?void 0:o.name]}),V.jsx("p",{children:o==null?void 0:o.bio})]}),V.jsx("hr",{}),V.jsx("div",{className:"rs-media"}),V.jsx("button",{onClick:s,children:"Çıkış"})]})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="firebasestorage.googleapis.com",JE="storageBucket",hO=2*60*1e3,dO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends Pn{constructor(e,n,r=0){super(Fh(e),`Firebase Storage: ${n} (${Fh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,De.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Fh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Oe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Oe||(Oe={}));function Fh(t){return"storage/"+t}function tm(){const t="An unknown error occurred, please check the error payload for server response.";return new De(Oe.UNKNOWN,t)}function fO(t){return new De(Oe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function pO(t){return new De(Oe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function mO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new De(Oe.UNAUTHENTICATED,t)}function gO(){return new De(Oe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function yO(t){return new De(Oe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function vO(){return new De(Oe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _O(){return new De(Oe.CANCELED,"User canceled the upload/download.")}function wO(t){return new De(Oe.INVALID_URL,"Invalid URL '"+t+"'.")}function EO(t){return new De(Oe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function bO(){return new De(Oe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+JE+"' property when initializing the app?")}function TO(){return new De(Oe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function IO(){return new De(Oe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function AO(t){return new De(Oe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function cf(t){return new De(Oe.INVALID_ARGUMENT,t)}function ZE(){return new De(Oe.APP_DELETED,"The Firebase app was deleted.")}function kO(t){return new De(Oe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function xs(t,e){return new De(Oe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function is(t){throw new De(Oe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=qt.makeFromUrl(e,n)}catch{return new qt(e,"")}if(r.path==="")return r;throw EO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const s="(/(.*))?$",l=new RegExp("^gs://"+i+s,"i"),u={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",b=new RegExp(`^https?://${p}/${d}/b/${i}/o${m}`,"i"),A={bucket:1,path:3},w=n===XE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",v=new RegExp(`^https?://${w}/${i}/${P}`,"i"),E=[{regex:l,indices:u,postModify:o},{regex:b,indices:A,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<E.length;x++){const O=E[x],M=O.regex.exec(e);if(M){const I=M[O.indices.bucket];let g=M[O.indices.path];g||(g=""),r=new qt(I,g),O.postModify(r);break}}if(r==null)throw wO(e);return r}}class SO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PO(t,e,n){let r=1,i=null,o=null,s=!1,l=0;function u(){return l===2}let c=!1;function d(...P){c||(c=!0,e.apply(null,P))}function p(P){i=setTimeout(()=>{i=null,t(b,u())},P)}function m(){o&&clearTimeout(o)}function b(P,...v){if(c){m();return}if(P){m(),d.call(null,P,...v);return}if(u()||s){m(),d.call(null,P,...v);return}r<64&&(r*=2);let E;l===1?(l=2,E=0):E=(r+Math.random())*1e3,p(E)}let A=!1;function w(P){A||(A=!0,m(),!c&&(i!==null?(P||(l=2),clearTimeout(i),p(0)):P||(l=1)))}return p(0),o=setTimeout(()=>{s=!0,w(!0)},n),w}function RO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CO(t){return t!==void 0}function xO(t){return typeof t=="object"&&!Array.isArray(t)}function nm(t){return typeof t=="string"||t instanceof String}function Hv(t){return rm()&&t instanceof Blob}function rm(){return typeof Blob<"u"}function Kv(t,e,n,r){if(r<e)throw cf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw cf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function eb(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var si;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(si||(si={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NO(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e,n,r,i,o,s,l,u,c,d,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,A)=>{this.resolve_=b,this.reject_=A,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new bl(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const l=o.getErrorCode()===si.NO_ERROR,u=o.getStatus();if(!l||NO(u,this.additionalRetryCodes_)&&this.retry){const d=o.getErrorCode()===si.ABORT;r(!1,new bl(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new bl(c,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());CO(u)?o(u):o()}catch(u){s(u)}else if(l!==null){const u=tm();u.serverResponse=l.getErrorText(),this.errorCallback_?s(this.errorCallback_(l,u)):s(u)}else if(i.canceled){const u=this.appDelete_?ZE():_O();s(u)}else{const u=vO();s(u)}};this.canceled_?n(!1,new bl(!1,null,!0)):this.backoffId_=PO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&RO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class bl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function DO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function VO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function LO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function MO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function UO(t,e,n,r,i,o,s=!0){const l=eb(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return LO(c,e),DO(c,n),VO(c,o),MO(c,r),new OO(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function jO(...t){const e=FO();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(rm())return new Blob(t);throw new De(Oe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function zO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BO(t){if(typeof atob>"u")throw AO("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class jh{constructor(e,n){this.data=e,this.contentType=n||null}}function qO(t,e){switch(t){case vn.RAW:return new jh(tb(e));case vn.BASE64:case vn.BASE64URL:return new jh(nb(t,e));case vn.DATA_URL:return new jh(WO(e),HO(e))}throw tm()}function tb(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=r,s=t.charCodeAt(++n);r=65536|(o&1023)<<10|s&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function $O(t){let e;try{e=decodeURIComponent(t)}catch{throw xs(vn.DATA_URL,"Malformed data URL.")}return tb(e)}function nb(t,e){switch(t){case vn.BASE64:{const i=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(i||o)throw xs(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case vn.BASE64URL:{const i=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(i||o)throw xs(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=BO(e)}catch(i){throw i.message.includes("polyfill")?i:xs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class rb{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw xs(vn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=KO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function WO(t){const e=new rb(t);return e.base64?nb(vn.BASE64,e.rest):$O(e.rest)}function HO(t){return new rb(t).contentType}function KO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n){let r=0,i="";Hv(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Hv(this.data_)){const r=this.data_,i=zO(r,e,n);return i===null?null:new pr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new pr(r,!0)}}static getBlob(...e){if(rm()){const n=e.map(r=>r instanceof pr?r.data_:r);return new pr(jO.apply(null,n))}else{const n=e.map(s=>nm(s)?qO(vn.RAW,s).data:s.data_);let r=0;n.forEach(s=>{r+=s.byteLength});const i=new Uint8Array(r);let o=0;return n.forEach(s=>{for(let l=0;l<s.length;l++)i[o++]=s[l]}),new pr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t){let e;try{e=JSON.parse(t)}catch{return null}return xO(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function QO(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function ob(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YO(t,e){return e}class It{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||YO}}let Tl=null;function XO(t){return!nm(t)||t.length<2?t:ob(t)}function sb(){if(Tl)return Tl;const t=[];t.push(new It("bucket")),t.push(new It("generation")),t.push(new It("metageneration")),t.push(new It("name","fullPath",!0));function e(o,s){return XO(s)}const n=new It("name");n.xform=e,t.push(n);function r(o,s){return s!==void 0?Number(s):s}const i=new It("size");return i.xform=r,t.push(i),t.push(new It("timeCreated")),t.push(new It("updated")),t.push(new It("md5Hash",null,!0)),t.push(new It("cacheControl",null,!0)),t.push(new It("contentDisposition",null,!0)),t.push(new It("contentEncoding",null,!0)),t.push(new It("contentLanguage",null,!0)),t.push(new It("contentType",null,!0)),t.push(new It("metadata","customMetadata",!0)),Tl=t,Tl}function JO(t,e){function n(){const r=t.bucket,i=t.fullPath,o=new qt(r,i);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function ZO(t,e,n){const r={};r.type="file";const i=n.length;for(let o=0;o<i;o++){const s=n[o];r[s.local]=s.xform(r,e[s.server])}return JO(r,t),r}function ab(t,e,n){const r=ib(e);return r===null?null:ZO(t,r,n)}function eD(t,e,n,r){const i=ib(e);if(i===null||!nm(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const s=encodeURIComponent;return o.split(",").map(c=>{const d=t.bucket,p=t.fullPath,m="/b/"+s(d)+"/o/"+s(p),b=im(m,n,r),A=eb({alt:"media",token:c});return b+A})[0]}function tD(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const o=e[i];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class lb{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(t){if(!t)throw tm()}function nD(t,e){function n(r,i){const o=ab(t,i,e);return ub(o!==null),o}return n}function rD(t,e){function n(r,i){const o=ab(t,i,e);return ub(o!==null),eD(o,i,t.host,t._protocol)}return n}function cb(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=gO():i=mO():n.getStatus()===402?i=pO(t.bucket):n.getStatus()===403?i=yO(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function iD(t){const e=cb(t);function n(r,i){let o=e(r,i);return r.getStatus()===404&&(o=fO(t.path)),o.serverResponse=i.serverResponse,o}return n}function oD(t,e,n){const r=e.fullServerUrl(),i=im(r,t.host,t._protocol),o="GET",s=t.maxOperationRetryTime,l=new lb(i,o,rD(t,n),s);return l.errorHandler=iD(e),l}function sD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function aD(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=sD(null,e)),r}function lD(t,e,n,r,i){const o=e.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function l(){let E="";for(let x=0;x<2;x++)E=E+Math.random().toString().slice(2);return E}const u=l();s["Content-Type"]="multipart/related; boundary="+u;const c=aD(e,r,i),d=tD(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",b=pr.getBlob(p,r,m);if(b===null)throw TO();const A={name:c.fullPath},w=im(o,t.host,t._protocol),P="POST",v=t.maxUploadRetryTime,y=new lb(w,P,nD(t,n),v);return y.urlParams=A,y.headers=s,y.body=b.uploadData(),y.errorHandler=cb(e),y}class uD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=si.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=si.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=si.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw is("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw is("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw is("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw is("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw is("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class cD extends uD{initXhr(){this.xhr_.responseType="text"}}function hb(){return new cD}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n){this._service=e,n instanceof qt?this._location=n:this._location=qt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new _i(e,n)}get root(){const e=new qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ob(this._location.path)}get storage(){return this._service}get parent(){const e=GO(this._location.path);if(e===null)return null;const n=new qt(this._location.bucket,e);return new _i(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw kO(e)}}function hD(t,e,n){t._throwIfRoot("uploadBytes");const r=lD(t.storage,t._location,sb(),new pr(e,!0),n);return t.storage.makeRequestWithTokens(r,hb).then(i=>({metadata:i,ref:t}))}function dD(t){t._throwIfRoot("getDownloadURL");const e=oD(t.storage,t._location,sb());return t.storage.makeRequestWithTokens(e,hb).then(n=>{if(n===null)throw IO();return n})}function fD(t,e){const n=QO(t._location.path,e),r=new qt(t._location.bucket,n);return new _i(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pD(t){return/^[A-Za-z]+:\/\//.test(t)}function mD(t,e){return new _i(t,e)}function db(t,e){if(t instanceof om){const n=t;if(n._bucket==null)throw bO();const r=new _i(n,n._bucket);return e!=null?db(r,e):r}else return e!==void 0?fD(t,e):t}function gD(t,e){if(e&&pD(e)){if(t instanceof om)return mD(t,e);throw cf("To use ref(service, url), the first argument must be a Storage instance.")}else return db(t,e)}function Gv(t,e){const n=e==null?void 0:e[JE];return n==null?null:qt.makeFromBucketSpec(n,t)}function yD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:R1(i,t.app.options.projectId))}class om{constructor(e,n,r,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=XE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=hO,this._maxUploadRetryTime=dO,this._requests=new Set,i!=null?this._bucket=qt.makeFromBucketSpec(i,this._host):this._bucket=Gv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=qt.makeFromBucketSpec(this._url,e):this._bucket=Gv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Kv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Kv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new _i(this,e)}_makeRequest(e,n,r,i,o=!0){if(this._deleted)return new SO(ZE());{const s=UO(e,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Qv="@firebase/storage",Yv="0.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb="storage";function vD(t,e,n){return t=Pe(t),hD(t,e,n)}function _D(t){return t=Pe(t),dD(t)}function wD(t,e){return t=Pe(t),gD(t,e)}function ED(t=lp(),e){t=Pe(t);const r=oc(t,fb).getImmediate({identifier:e}),i=k1("storage");return i&&bD(r,...i),r}function bD(t,e,n,r={}){yD(t,e,n,r)}function TD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new om(n,r,i,e,bi)}function ID(){di(new Or(fb,TD,"PUBLIC").setMultipleInstances(!0)),En(Qv,Yv,""),En(Qv,Yv,"esm2017")}ID();var pb={exports:{}};(()=>{var t={d:(o,s)=>{for(var l in s)t.o(s,l)&&!t.o(o,l)&&Object.defineProperty(o,l,{enumerable:!0,get:s[l]})},o:(o,s)=>Object.prototype.hasOwnProperty.call(o,s),r:o=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},e={};function n(o,s){for(var l=0;l<s.length;l++){var u=s[l];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(o,u.key,u)}}t.r(e),t.d(e,{default:()=>i});var r=function(){function o(){(function(u,c){if(!(u instanceof c))throw new TypeError("Cannot call a class as a function")})(this,o)}var s,l;return s=o,l=[{key:"changeHeightWidth",value:function(u,c,d,p,m,b){return d>p&&(u=Math.round(u*p/d),d=p),u>c&&(d=Math.round(d*c/u),u=c),m&&d<m&&(u=Math.round(u*m/d),d=m),b&&u<b&&(d=Math.round(d*b/u),u=b),{height:u,width:d}}},{key:"resizeAndRotateImage",value:function(u,c,d,p,m){var b=arguments.length>5&&arguments[5]!==void 0?arguments[5]:"jpeg",A=arguments.length>6&&arguments[6]!==void 0?arguments[6]:100,w=arguments.length>7&&arguments[7]!==void 0?arguments[7]:0,P=A/100,v=document.createElement("canvas"),y=u.width,E=u.height,x=this.changeHeightWidth(E,d,y,c,p,m);!w||w!==90&&w!==270?(v.width=x.width,v.height=x.height):(v.width=x.height,v.height=x.width),y=x.width,E=x.height;var O=v.getContext("2d");return O.fillStyle="rgba(0, 0, 0, 0)",O.fillRect(0,0,y,E),O.imageSmoothingEnabled&&O.imageSmoothingQuality&&(O.imageSmoothingQuality="high"),w&&(O.rotate(w*Math.PI/180),w===90?O.translate(0,-v.width):w===180?O.translate(-v.width,-v.height):w===270?O.translate(-v.height,0):w!==0&&w!==360||O.translate(0,0)),O.drawImage(u,0,0,y,E),v.toDataURL("image/".concat(b),P)}},{key:"b64toByteArrays",value:function(u,c){for(var d=atob(u.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/,"")),p=[],m=0;m<d.length;m+=512){for(var b=d.slice(m,m+512),A=new Array(b.length),w=0;w<b.length;w++)A[w]=b.charCodeAt(w);var P=new Uint8Array(A);p.push(P)}return p}},{key:"b64toBlob",value:function(u,c){var d=this.b64toByteArrays(u,c);return new Blob(d,{type:c,lastModified:new Date})}},{key:"b64toFile",value:function(u,c,d){var p=this.b64toByteArrays(u,d);return new File(p,c,{type:d,lastModified:new Date})}},{key:"createResizedImage",value:function(u,c,d,p,m,b,A){var w=arguments.length>7&&arguments[7]!==void 0?arguments[7]:"base64",P=arguments.length>8&&arguments[8]!==void 0?arguments[8]:null,v=arguments.length>9&&arguments[9]!==void 0?arguments[9]:null,y=new FileReader;if(!u)throw Error("File Not Found!");if(u.type&&!u.type.includes("image"))throw Error("File Is NOT Image!");y.readAsDataURL(u),y.onload=function(){var E=new Image;E.src=y.result,E.onload=function(){var x=o.resizeAndRotateImage(E,c,d,P,v,p,m,b),O="image/".concat(p);switch(w){case"blob":var M=o.b64toBlob(x,O);A(M);break;case"base64":A(x);break;case"file":var I=u.name.toString().replace(/(png|jpeg|jpg|webp)$/i,"").concat(p.toString()),g=o.b64toFile(x,I,O);A(g);break;default:A(x)}}},y.onerror=function(E){throw Error(E)}}}],l&&n(s,l),o}();const i={imageFileResizer:function(o,s,l,u,c,d,p,m,b,A){return r.createResizedImage(o,s,l,u,c,d,p,m,b,A)}};pb.exports=e})();var AD=pb.exports;const kD=Xv(AD),mb=async t=>{const e=ED(),n=wD(e,`images/${Date.now()+"_"+t.name}`),r=await new Promise(i=>{kD.imageFileResizer(t,1024,1024,"JPEG",70,0,o=>{i(o)},"blob")});try{const i=await vD(n,r);return await _D(i.ref)}catch(i){throw J.error("İşlem başarısız!"),i}},SD=()=>{const{userData:t,chatUser:e,setMessages:n,messagesId:r,messages:i,isOnline:o,inputClickControl:s,chatVisible:l,setChatVisible:u}=L.useContext(ki),[c,d]=L.useState(""),[p,m]=L.useState(!0),b=async()=>{if(!c||!r){J.info("Boş Mesaj Gönderilemez!");return}d("");try{c&&r&&(await zt(Be(Fe,"messages",r),{messages:Vu({sId:t.id,text:c,createdAt:new Date})}),[e.rId,t.id].forEach(async y=>{const E=Be(Fe,"chats",y),x=await Dn(E);if(x.exists()){const O=x.data().chatsData,M=O.findIndex(I=>I.messageId===r);O[M].lastMessage=c.length>30?c.slice(0,30)+"...":c.slice(0,30),O[M].updatedAt=Date.now(),O[M].rId===t.id&&(O[M].messageSeen=!1),await zt(E,{chatsData:O})}}))}catch(v){console.error(v.message),J.error(v.message)}},A=async v=>{if(!(!v.target.files||v.target.files.length===0))try{J.info("Resim Gönderiliyor...");const y=await mb(v.target.files[0]);y&&r&&(await zt(Be(Fe,"messages",r),{messages:Vu({sId:t.id,image:y,createdAt:new Date})}),[e.rId,t.id].forEach(async x=>{const O=Be(Fe,"chats",x),M=await Dn(O);if(M.exists()){const I=M.data().chatsData,g=I.findIndex(T=>T.messageId===r);I[g].lastMessage="Resim",I[g].updatedAt=Date.now(),I[g].rId===t.id&&(I[g].messageSeen=!1),await zt(O,{chatsData:I})}})),v.target.value=null}catch(y){console.error(y.message)}};L.useEffect(()=>{if(r){m(!0);const v=FE(Be(Fe,"messages",r),y=>{n(y.data().messages.reverse()),m(!1)});return console.log(i.image),()=>{v()}}},[r]);const w=v=>{v.key==="Enter"&&(v.preventDefault(),b())},P=v=>{let y=v.toDate();const E=y.getHours(),x=y.getMinutes();return E>12?E-12+":"+x+" PM":E+":"+x+" AM"};return e?V.jsxs("div",{className:`chat-box ${l?"":"hidden"}`,children:[V.jsxs("div",{className:"chat-user",children:[V.jsx("img",{className:"profile",src:e.userData.avatar?e.userData.avatar:Le.avatar_icon,alt:""}),V.jsxs("p",{children:[e.userData.name,o?V.jsx("img",{className:"dot",src:Le.green_dot,alt:"online"}):null]}),V.jsx("img",{src:Le.help_icon,className:"help",alt:""}),l?V.jsx("img",{onClick:()=>u(!1),src:Le.arrow_icon,className:"arrow",alt:""}):null]}),V.jsx("div",{className:"chat-msg",children:p?V.jsx("div",{className:"chat-loading",children:V.jsx(YE,{variant:"pulsate",color:"#5cadf4",size:"medium",text:"Mesajlar Yükleniyor...",textColor:"gray"})}):i.length>0?i.map((v,y)=>V.jsxs("div",{className:v.sId===t.id?"s-msg":"r-msg",children:[v.image?V.jsx("img",{style:{cursor:"pointer",margin:"15px 0"},onClick:()=>window.open(v.image),className:"msg-img",src:v.image}):V.jsx("p",{className:"msg",children:v.text}),V.jsxs("div",{children:[V.jsx("img",{src:v.sId===t.id?t.avatar?t.avatar:Le.avatar_icon:e.userData.avatar?e.userData.avatar:Le.avatar_icon}),V.jsx("p",{children:P(v.createdAt)})]})]},y)):V.jsx("div",{className:"no-messages",children:V.jsx("p",{children:"Henüz mesaj yok"})})}),V.jsxs("div",{className:"chat-input",children:[V.jsx("textarea",{rows:3,onFocus:s,className:"input",onKeyDown:w,onChange:v=>d(v.target.value),value:c,placeholder:"Bir mesaj gönder...",type:"text"}),V.jsx("input",{onChange:A,type:"file",id:"image",accept:"image/png, image/jpeg",hidden:!0}),V.jsxs("div",{className:"icons",children:[V.jsx("label",{htmlFor:"image",children:V.jsx("img",{className:"gallery",src:Le.gallery_icon,alt:""})}),V.jsx("img",{onClick:b,className:"send",src:Le.send_button,alt:""})]})]})]}):V.jsxs("div",{className:`chat-welcome ${l?"":"hidden"} `,children:[V.jsx("img",{src:Le.logo_icon,alt:""}),V.jsx("p",{children:"Chat anytime, anywhere"})]})},PD=()=>{const{chatData:t,userData:e,loading:n,setLoading:r}=L.useContext(ki);return L.useEffect(()=>{e&&r(!1)},[e]),V.jsx("div",{className:"chat",children:n?V.jsx(iO,{color:"#24DE24",size:"large",text:"LOADING...",textColor:""}):V.jsxs("div",{className:"chat-container",children:[V.jsx(uO,{}),V.jsx(SD,{}),V.jsx(cO,{})]})})},RD=()=>{const t=rc(),[e,n]=L.useState(!1),[r,i]=L.useState(""),[o,s]=L.useState(""),[l,u]=L.useState(""),[c,d]=L.useState(""),{setUserData:p}=L.useContext(ki),m=async w=>{const P=Be(Fe,"users",w);return await Dn(P)},b=async w=>{w.preventDefault();const P=Be(Fe,"users",l),v=await m(l);try{if(!e&&!c&&J.error("Upload profile picture"),J.info("Kaydediliyor... Lütfen Bekleyiniz..."),e){const y=await mb(e);d(y),await zt(P,{avatar:y,bio:o,name:r})}else await zt(P,{bio:o,name:r});p(v.data()),t("/chat"),J.success("Profilin düzenlendi!")}catch(y){console.error(y),J.error(y.message)}},A=async w=>{w.preventDefault();const P=Be(Fe,"users",l);if((await m(l)).data().avatar)if(confirm("Profil fotoğrafın kaldırılsın mı?"))await zt(P,{avatar:""}),J.info("Profil fotoğrafın kaldırıldı!");else return};return L.useEffect(()=>{ow(Mr,async w=>{if(w){u(w.uid);const P=Be(Fe,"users",w.uid),v=await Dn(P);v.data().name&&i(v.data().name),v.data().bio&&s(v.data().bio),v.data().avatar&&d(v.data().avatar)}})},[]),V.jsx("div",{className:"profilee",children:V.jsxs("div",{className:"profile-container",children:[V.jsxs("form",{onSubmit:b,children:[V.jsx("h3",{children:"Profile Details"}),V.jsxs("label",{htmlFor:"avatar",children:[V.jsx("input",{onChange:w=>n(w.target.files[0]),id:"avatar",type:"file",accept:".jpeg, .png, .jpg",hidden:!0}),V.jsx("img",{src:e?URL.createObjectURL(e):Le.avatar_icon,alt:"avatar-icon"}),V.jsx("p",{children:"Profil Resmini Yükle"})]}),V.jsx("input",{onChange:w=>i(w.target.value),value:r,type:"text",placeholder:"Your name",required:!0}),V.jsx("textarea",{onChange:w=>s(w.target.value),value:o,placeholder:"Write profile bio",required:!0}),V.jsx("button",{type:"submit",children:"Kaydet"})]}),V.jsxs("div",{className:"profile-edit",children:[V.jsx("img",{className:"profile-pic",src:e?URL.createObjectURL(e):c||Le.logo_icon,alt:""}),V.jsx("p",{className:"profile-delete",onClick:A,children:"Profil Resmini Kaldır"})]})]})})},CD=()=>{const t=rc(),{loadUserData:e}=L.useContext(ki);return L.useEffect(()=>{ow(Mr,async n=>{n?(t("/chat"),await e(n.uid)):t("/")})},[]),V.jsxs(V.Fragment,{children:[V.jsx(VN,{}),V.jsxs(lk,{children:[V.jsx(Ll,{path:"/",element:V.jsx(zN,{})}),V.jsx(Ll,{path:"/chat",element:V.jsx(PD,{})}),V.jsx(Ll,{path:"/profile",element:V.jsx(RD,{})})]})]})};c1(document.getElementById("root")).render(V.jsx(hk,{children:V.jsx(BN,{children:V.jsx(CD,{})})}));
