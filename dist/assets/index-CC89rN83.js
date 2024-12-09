import{r as I,a as xa,g as Hm,R as re,u as _i,b as Km,c as Qm,B as Xm,d as Jm,e as yr,N as $o}from"./vendor-BrA4YdTT.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Ah={exports:{}},wi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym=I,Zm=Symbol.for("react.element"),eg=Symbol.for("react.fragment"),tg=Object.prototype.hasOwnProperty,ng=Ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rg={key:!0,ref:!0,__self:!0,__source:!0};function Sh(n,e,t){var r,s={},i=null,a=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)tg.call(e,r)&&!rg.hasOwnProperty(r)&&(s[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Zm,type:n,key:i,ref:a,props:s,_owner:ng.current}}wi.Fragment=eg;wi.jsx=Sh;wi.jsxs=Sh;Ah.exports=wi;var p=Ah.exports,xh,kl=xa;xh=kl.createRoot,kl.hydrateRoot;const sg={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},Dl=n=>{let e;const t=new Set,r=(f,g)=>{const y=typeof f=="function"?f(e):f;if(!Object.is(y,e)){const E=e;e=g??(typeof y!="object"||y===null)?y:Object.assign({},e,y),t.forEach(C=>C(e,E))}},s=()=>e,u={setState:r,getState:s,getInitialState:()=>h,subscribe:f=>(t.add(f),()=>t.delete(f)),destroy:()=>{(sg?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},h=e=n(r,s,u);return u},ig=n=>n?Dl(n):Dl;var Rh={exports:{}},Ch={},Ph={exports:{}},Nh={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pn=I;function og(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ag=typeof Object.is=="function"?Object.is:og,cg=Pn.useState,lg=Pn.useEffect,ug=Pn.useLayoutEffect,hg=Pn.useDebugValue;function dg(n,e){var t=e(),r=cg({inst:{value:t,getSnapshot:e}}),s=r[0].inst,i=r[1];return ug(function(){s.value=t,s.getSnapshot=e,po(s)&&i({inst:s})},[n,t,e]),lg(function(){return po(s)&&i({inst:s}),n(function(){po(s)&&i({inst:s})})},[n]),hg(t),t}function po(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ag(n,t)}catch{return!0}}function fg(n,e){return e()}var pg=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?fg:dg;Nh.useSyncExternalStore=Pn.useSyncExternalStore!==void 0?Pn.useSyncExternalStore:pg;Ph.exports=Nh;var mg=Ph.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ei=I,gg=mg;function yg(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var vg=typeof Object.is=="function"?Object.is:yg,_g=gg.useSyncExternalStore,wg=Ei.useRef,Eg=Ei.useEffect,Tg=Ei.useMemo,bg=Ei.useDebugValue;Ch.useSyncExternalStoreWithSelector=function(n,e,t,r,s){var i=wg(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=Tg(function(){function u(E){if(!h){if(h=!0,f=E,E=r(E),s!==void 0&&a.hasValue){var C=a.value;if(s(C,E))return g=C}return g=E}if(C=g,vg(f,E))return C;var A=r(E);return s!==void 0&&s(C,A)?C:(f=E,g=A)}var h=!1,f,g,y=t===void 0?null:t;return[function(){return u(e())},y===null?void 0:function(){return u(y())}]},[e,t,r,s]);var c=_g(n,i[0],i[1]);return Eg(function(){a.hasValue=!0,a.value=c},[c]),bg(c),c};Rh.exports=Ch;var Ig=Rh.exports;const Ag=Hm(Ig),kh={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},{useDebugValue:Sg}=re,{useSyncExternalStoreWithSelector:xg}=Ag;let Ol=!1;const Rg=n=>n;function Cg(n,e=Rg,t){(kh?"production":void 0)!=="production"&&t&&!Ol&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Ol=!0);const r=xg(n.subscribe,n.getState,n.getServerState||n.getInitialState,e,t);return Sg(r),r}const Pg=n=>{(kh?"production":void 0)!=="production"&&typeof n!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof n=="function"?ig(n):n,t=(r,s)=>Cg(e,r,s);return Object.assign(t,e),t},Ng=n=>Pg;var Dh=Symbol.for("immer-nothing"),Vl=Symbol.for("immer-draftable"),Be=Symbol.for("immer-state");function He(n,...e){throw new Error(`[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`)}var Nn=Object.getPrototypeOf;function kn(n){return!!n&&!!n[Be]}function Zt(n){return n?Oh(n)||Array.isArray(n)||!!n[Vl]||!!n.constructor?.[Vl]||bi(n)||Ii(n):!1}var kg=Object.prototype.constructor.toString();function Oh(n){if(!n||typeof n!="object")return!1;const e=Nn(n);if(e===null)return!0;const t=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===kg}function Qs(n,e){Ti(n)===0?Reflect.ownKeys(n).forEach(t=>{e(t,n[t],n)}):n.forEach((t,r)=>e(r,t,n))}function Ti(n){const e=n[Be];return e?e.type_:Array.isArray(n)?1:bi(n)?2:Ii(n)?3:0}function zo(n,e){return Ti(n)===2?n.has(e):Object.prototype.hasOwnProperty.call(n,e)}function Vh(n,e,t){const r=Ti(n);r===2?n.set(e,t):r===3?n.add(t):n[e]=t}function Dg(n,e){return n===e?n!==0||1/n===1/e:n!==n&&e!==e}function bi(n){return n instanceof Map}function Ii(n){return n instanceof Set}function Kt(n){return n.copy_||n.base_}function qo(n,e){if(bi(n))return new Map(n);if(Ii(n))return new Set(n);if(Array.isArray(n))return Array.prototype.slice.call(n);const t=Oh(n);if(e===!0||e==="class_only"&&!t){const r=Object.getOwnPropertyDescriptors(n);delete r[Be];let s=Reflect.ownKeys(r);for(let i=0;i<s.length;i++){const a=s[i],c=r[a];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(r[a]={configurable:!0,writable:!0,enumerable:c.enumerable,value:n[a]})}return Object.create(Nn(n),r)}else{const r=Nn(n);if(r!==null&&t)return{...n};const s=Object.create(r);return Object.assign(s,n)}}function Ra(n,e=!1){return Ai(n)||kn(n)||!Zt(n)||(Ti(n)>1&&(n.set=n.add=n.clear=n.delete=Og),Object.freeze(n),e&&Object.entries(n).forEach(([t,r])=>Ra(r,!0))),n}function Og(){He(2)}function Ai(n){return Object.isFrozen(n)}var Vg={};function en(n){const e=Vg[n];return e||He(0,n),e}var kr;function Mh(){return kr}function Mg(n,e){return{drafts_:[],parent_:n,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Ml(n,e){e&&(en("Patches"),n.patches_=[],n.inversePatches_=[],n.patchListener_=e)}function Wo(n){Go(n),n.drafts_.forEach(Lg),n.drafts_=null}function Go(n){n===kr&&(kr=n.parent_)}function Ll(n){return kr=Mg(kr,n)}function Lg(n){const e=n[Be];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function jl(n,e){e.unfinalizedDrafts_=e.drafts_.length;const t=e.drafts_[0];return n!==void 0&&n!==t?(t[Be].modified_&&(Wo(e),He(4)),Zt(n)&&(n=Xs(e,n),e.parent_||Js(e,n)),e.patches_&&en("Patches").generateReplacementPatches_(t[Be].base_,n,e.patches_,e.inversePatches_)):n=Xs(e,t,[]),Wo(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),n!==Dh?n:void 0}function Xs(n,e,t){if(Ai(e))return e;const r=e[Be];if(!r)return Qs(e,(s,i)=>Fl(n,r,e,s,i,t)),e;if(r.scope_!==n)return e;if(!r.modified_)return Js(n,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const s=r.copy_;let i=s,a=!1;r.type_===3&&(i=new Set(s),s.clear(),a=!0),Qs(i,(c,u)=>Fl(n,r,s,c,u,t,a)),Js(n,s,!1),t&&n.patches_&&en("Patches").generatePatches_(r,t,n.patches_,n.inversePatches_)}return r.copy_}function Fl(n,e,t,r,s,i,a){if(kn(s)){const c=i&&e&&e.type_!==3&&!zo(e.assigned_,r)?i.concat(r):void 0,u=Xs(n,s,c);if(Vh(t,r,u),kn(u))n.canAutoFreeze_=!1;else return}else a&&t.add(s);if(Zt(s)&&!Ai(s)){if(!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1)return;Xs(n,s),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,r)&&Js(n,s)}}function Js(n,e,t=!1){!n.parent_&&n.immer_.autoFreeze_&&n.canAutoFreeze_&&Ra(e,t)}function jg(n,e){const t=Array.isArray(n),r={type_:t?1:0,scope_:e?e.scope_:Mh(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:n,draft_:null,copy_:null,revoke_:null,isManual_:!1};let s=r,i=Ca;t&&(s=[r],i=Dr);const{revoke:a,proxy:c}=Proxy.revocable(s,i);return r.draft_=c,r.revoke_=a,c}var Ca={get(n,e){if(e===Be)return n;const t=Kt(n);if(!zo(t,e))return Fg(n,t,e);const r=t[e];return n.finalized_||!Zt(r)?r:r===mo(n.base_,e)?(go(n),n.copy_[e]=Ko(r,n)):r},has(n,e){return e in Kt(n)},ownKeys(n){return Reflect.ownKeys(Kt(n))},set(n,e,t){const r=Lh(Kt(n),e);if(r?.set)return r.set.call(n.draft_,t),!0;if(!n.modified_){const s=mo(Kt(n),e),i=s?.[Be];if(i&&i.base_===t)return n.copy_[e]=t,n.assigned_[e]=!1,!0;if(Dg(t,s)&&(t!==void 0||zo(n.base_,e)))return!0;go(n),Ho(n)}return n.copy_[e]===t&&(t!==void 0||e in n.copy_)||Number.isNaN(t)&&Number.isNaN(n.copy_[e])||(n.copy_[e]=t,n.assigned_[e]=!0),!0},deleteProperty(n,e){return mo(n.base_,e)!==void 0||e in n.base_?(n.assigned_[e]=!1,go(n),Ho(n)):delete n.assigned_[e],n.copy_&&delete n.copy_[e],!0},getOwnPropertyDescriptor(n,e){const t=Kt(n),r=Reflect.getOwnPropertyDescriptor(t,e);return r&&{writable:!0,configurable:n.type_!==1||e!=="length",enumerable:r.enumerable,value:t[e]}},defineProperty(){He(11)},getPrototypeOf(n){return Nn(n.base_)},setPrototypeOf(){He(12)}},Dr={};Qs(Ca,(n,e)=>{Dr[n]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});Dr.deleteProperty=function(n,e){return Dr.set.call(this,n,e,void 0)};Dr.set=function(n,e,t){return Ca.set.call(this,n[0],e,t,n[0])};function mo(n,e){const t=n[Be];return(t?Kt(t):n)[e]}function Fg(n,e,t){const r=Lh(e,t);return r?"value"in r?r.value:r.get?.call(n.draft_):void 0}function Lh(n,e){if(!(e in n))return;let t=Nn(n);for(;t;){const r=Object.getOwnPropertyDescriptor(t,e);if(r)return r;t=Nn(t)}}function Ho(n){n.modified_||(n.modified_=!0,n.parent_&&Ho(n.parent_))}function go(n){n.copy_||(n.copy_=qo(n.base_,n.scope_.immer_.useStrictShallowCopy_))}var Ug=class{constructor(n){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if(typeof e=="function"&&typeof t!="function"){const i=t;t=e;const a=this;return function(u=i,...h){return a.produce(u,f=>t.call(this,f,...h))}}typeof t!="function"&&He(6),r!==void 0&&typeof r!="function"&&He(7);let s;if(Zt(e)){const i=Ll(this),a=Ko(e,void 0);let c=!0;try{s=t(a),c=!1}finally{c?Wo(i):Go(i)}return Ml(i,r),jl(s,i)}else if(!e||typeof e!="object"){if(s=t(e),s===void 0&&(s=e),s===Dh&&(s=void 0),this.autoFreeze_&&Ra(s,!0),r){const i=[],a=[];en("Patches").generateReplacementPatches_(e,s,i,a),r(i,a)}return s}else He(1,e)},this.produceWithPatches=(e,t)=>{if(typeof e=="function")return(a,...c)=>this.produceWithPatches(a,u=>e(u,...c));let r,s;return[this.produce(e,t,(a,c)=>{r=a,s=c}),r,s]},typeof n?.autoFreeze=="boolean"&&this.setAutoFreeze(n.autoFreeze),typeof n?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(n.useStrictShallowCopy)}createDraft(n){Zt(n)||He(8),kn(n)&&(n=Bg(n));const e=Ll(this),t=Ko(n,void 0);return t[Be].isManual_=!0,Go(e),t}finishDraft(n,e){const t=n&&n[Be];(!t||!t.isManual_)&&He(9);const{scope_:r}=t;return Ml(r,e),jl(void 0,r)}setAutoFreeze(n){this.autoFreeze_=n}setUseStrictShallowCopy(n){this.useStrictShallowCopy_=n}applyPatches(n,e){let t;for(t=e.length-1;t>=0;t--){const s=e[t];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}t>-1&&(e=e.slice(t+1));const r=en("Patches").applyPatches_;return kn(n)?r(n,e):this.produce(n,s=>r(s,e))}};function Ko(n,e){const t=bi(n)?en("MapSet").proxyMap_(n,e):Ii(n)?en("MapSet").proxySet_(n,e):jg(n,e);return(e?e.scope_:Mh()).drafts_.push(t),t}function Bg(n){return kn(n)||He(10,n),jh(n)}function jh(n){if(!Zt(n)||Ai(n))return n;const e=n[Be];let t;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,t=qo(n,e.scope_.immer_.useStrictShallowCopy_)}else t=qo(n,!0);return Qs(t,(r,s)=>{Vh(t,r,jh(s))}),e&&(e.finalized_=!1),t}var $e=new Ug,$g=$e.produce;$e.produceWithPatches.bind($e);$e.setAutoFreeze.bind($e);$e.setUseStrictShallowCopy.bind($e);$e.applyPatches.bind($e);$e.createDraft.bind($e);$e.finishDraft.bind($e);const zg=n=>(e,t,r)=>(r.setState=(s,i,...a)=>{const c=typeof s=="function"?$g(s):s;return e(c,i,...a)},n(r.setState,t,r)),qg=zg;var Ul={};/**
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
 */const Fh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Wg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Uh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,f=i>>2,g=(i&3)<<4|c>>4;let y=(c&15)<<2|h>>6,E=h&63;u||(E=64,a||(y=64)),r.push(t[f],t[g],t[y],t[E])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Fh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Wg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||g==null)throw new Gg;const y=i<<2|c>>4;if(r.push(y),h!==64){const E=c<<4&240|h>>2;if(r.push(E),g!==64){const C=h<<6&192|g;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Gg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hg=function(n){const e=Fh(n);return Uh.encodeByteArray(e,!0)},Ys=function(n){return Hg(n).replace(/\./g,"")},Bh=function(n){try{return Uh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Kg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Qg=()=>Kg().__FIREBASE_DEFAULTS__,Xg=()=>{if(typeof process>"u"||typeof Ul>"u")return;const n=Ul.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Jg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Bh(n[1]);return e&&JSON.parse(e)},Si=()=>{try{return Qg()||Xg()||Jg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$h=n=>{var e,t;return(t=(e=Si())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Yg=n=>{const e=$h(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},zh=()=>{var n;return(n=Si())===null||n===void 0?void 0:n.config},qh=n=>{var e;return(e=Si())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Zg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function ey(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ys(JSON.stringify(t)),Ys(JSON.stringify(a)),""].join(".")}/**
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
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ty(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function ny(){var n;const e=(n=Si())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ry(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function iy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oy(){const n=Ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ay(){return!ny()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cy(){try{return typeof indexedDB=="object"}catch{return!1}}function ly(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const uy="FirebaseError";class wt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=uy,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wr.prototype.create)}}class Wr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?hy(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new wt(s,c,r)}}function hy(n,e){return n.replace(dy,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const dy=/\{\$([^}]+)}/g;function fy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Zs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Bl(i)&&Bl(a)){if(!Zs(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Bl(n){return n!==null&&typeof n=="object"}/**
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
 */function Gr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function py(n,e){const t=new my(n,e);return t.subscribe.bind(t)}class my{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");gy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=yo),s.error===void 0&&(s.error=yo),s.complete===void 0&&(s.complete=yo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function yo(){}/**
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
 */function ze(n){return n&&n._delegate?n._delegate:n}class tn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qt="[DEFAULT]";/**
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
 */let yy=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Zg;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_y(e))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qt){return this.instances.has(e)}getOptions(e=Qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vy(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qt){return this.component?this.component.multipleInstances?e:Qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function vy(n){return n===Qt?void 0:n}function _y(n){return n.instantiationMode==="EAGER"}/**
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
 */class wy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new yy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const Ey={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Ty=J.INFO,by={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Iy=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=by[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pa{constructor(e){this.name=e,this._logLevel=Ty,this._logHandler=Iy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ey[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const Ay=(n,e)=>e.some(t=>n instanceof t);let $l,zl;function Sy(){return $l||($l=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xy(){return zl||(zl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wh=new WeakMap,Qo=new WeakMap,Gh=new WeakMap,vo=new WeakMap,Na=new WeakMap;function Ry(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Ot(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Wh.set(t,n)}).catch(()=>{}),Na.set(e,n),e}function Cy(n){if(Qo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Qo.set(n,e)}let Xo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Qo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Gh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ot(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Py(n){Xo=n(Xo)}function Ny(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(_o(this),e,...t);return Gh.set(r,e.sort?e.sort():[e]),Ot(r)}:xy().includes(n)?function(...e){return n.apply(_o(this),e),Ot(Wh.get(this))}:function(...e){return Ot(n.apply(_o(this),e))}}function ky(n){return typeof n=="function"?Ny(n):(n instanceof IDBTransaction&&Cy(n),Ay(n,Sy())?new Proxy(n,Xo):n)}function Ot(n){if(n instanceof IDBRequest)return Ry(n);if(vo.has(n))return vo.get(n);const e=ky(n);return e!==n&&(vo.set(n,e),Na.set(e,n)),e}const _o=n=>Na.get(n);function Dy(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Ot(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Ot(a.result),u.oldVersion,u.newVersion,Ot(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Oy=["get","getKey","getAll","getAllKeys","count"],Vy=["put","add","delete","clear"],wo=new Map;function ql(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(wo.get(e))return wo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Vy.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Oy.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&u.done]))[0]};return wo.set(e,i),i}Py(n=>({...n,get:(e,t,r)=>ql(e,t)||n.get(e,t,r),has:(e,t)=>!!ql(e,t)||n.has(e,t)}));/**
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
 */class My{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ly(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Ly(n){const e=n.getComponent();return e?.type==="VERSION"}const Jo="@firebase/app",Wl="0.10.13";/**
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
 */const mt=new Pa("@firebase/app"),jy="@firebase/app-compat",Fy="@firebase/analytics-compat",Uy="@firebase/analytics",By="@firebase/app-check-compat",$y="@firebase/app-check",zy="@firebase/auth",qy="@firebase/auth-compat",Wy="@firebase/database",Gy="@firebase/data-connect",Hy="@firebase/database-compat",Ky="@firebase/functions",Qy="@firebase/functions-compat",Xy="@firebase/installations",Jy="@firebase/installations-compat",Yy="@firebase/messaging",Zy="@firebase/messaging-compat",ev="@firebase/performance",tv="@firebase/performance-compat",nv="@firebase/remote-config",rv="@firebase/remote-config-compat",sv="@firebase/storage",iv="@firebase/storage-compat",ov="@firebase/firestore",av="@firebase/vertexai-preview",cv="@firebase/firestore-compat",lv="firebase",uv="10.14.1";/**
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
 */const Yo="[DEFAULT]",hv={[Jo]:"fire-core",[jy]:"fire-core-compat",[Uy]:"fire-analytics",[Fy]:"fire-analytics-compat",[$y]:"fire-app-check",[By]:"fire-app-check-compat",[zy]:"fire-auth",[qy]:"fire-auth-compat",[Wy]:"fire-rtdb",[Gy]:"fire-data-connect",[Hy]:"fire-rtdb-compat",[Ky]:"fire-fn",[Qy]:"fire-fn-compat",[Xy]:"fire-iid",[Jy]:"fire-iid-compat",[Yy]:"fire-fcm",[Zy]:"fire-fcm-compat",[ev]:"fire-perf",[tv]:"fire-perf-compat",[nv]:"fire-rc",[rv]:"fire-rc-compat",[sv]:"fire-gcs",[iv]:"fire-gcs-compat",[ov]:"fire-fst",[cv]:"fire-fst-compat",[av]:"fire-vertex","fire-js":"fire-js",[lv]:"fire-js-all"};/**
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
 */const ei=new Map,dv=new Map,Zo=new Map;function Gl(n,e){try{n.container.addComponent(e)}catch(t){mt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Dn(n){const e=n.name;if(Zo.has(e))return mt.debug(`There were multiple attempts to register component ${e}.`),!1;Zo.set(e,n);for(const t of ei.values())Gl(t,n);for(const t of dv.values())Gl(t,n);return!0}function ka(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function kt(n){return n.settings!==void 0}/**
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
 */const fv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vt=new Wr("app","Firebase",fv);/**
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
 */class pv{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
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
 */const zn=uv;function Hh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Yo,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Vt.create("bad-app-name",{appName:String(s)});if(t||(t=zh()),!t)throw Vt.create("no-options");const i=ei.get(s);if(i){if(Zs(t,i.options)&&Zs(r,i.config))return i;throw Vt.create("duplicate-app",{appName:s})}const a=new wy(s);for(const u of Zo.values())a.addComponent(u);const c=new pv(t,r,a);return ei.set(s,c),c}function Kh(n=Yo){const e=ei.get(n);if(!e&&n===Yo&&zh())return Hh();if(!e)throw Vt.create("no-app",{appName:n});return e}function Mt(n,e,t){var r;let s=(r=hv[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mt.warn(c.join(" "));return}Dn(new tn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const mv="firebase-heartbeat-database",gv=1,Or="firebase-heartbeat-store";let Eo=null;function Qh(){return Eo||(Eo=Dy(mv,gv,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Or)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vt.create("idb-open",{originalErrorMessage:n.message})})),Eo}async function yv(n){try{const t=(await Qh()).transaction(Or),r=await t.objectStore(Or).get(Xh(n));return await t.done,r}catch(e){if(e instanceof wt)mt.warn(e.message);else{const t=Vt.create("idb-get",{originalErrorMessage:e?.message});mt.warn(t.message)}}}async function Hl(n,e){try{const r=(await Qh()).transaction(Or,"readwrite");await r.objectStore(Or).put(e,Xh(n)),await r.done}catch(t){if(t instanceof wt)mt.warn(t.message);else{const r=Vt.create("idb-set",{originalErrorMessage:t?.message});mt.warn(r.message)}}}function Xh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const vv=1024,_v=30*24*60*60*1e3;class wv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Tv(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Kl();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=_v}),this._storage.overwrite(this._heartbeatsCache))}catch(r){mt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Kl(),{heartbeatsToSend:r,unsentEntries:s}=Ev(this._heartbeatsCache.heartbeats),i=Ys(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return mt.warn(t),""}}}function Kl(){return new Date().toISOString().substring(0,10)}function Ev(n,e=vv){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Ql(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ql(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Tv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cy()?ly().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await yv(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ql(n){return Ys(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function bv(n){Dn(new tn("platform-logger",e=>new My(e),"PRIVATE")),Dn(new tn("heartbeat",e=>new wv(e),"PRIVATE")),Mt(Jo,Wl,n),Mt(Jo,Wl,"esm2017"),Mt("fire-js","")}bv("");var Iv="firebase",Av="10.14.1";/**
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
 */Mt(Iv,Av,"app");var Xl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jt,Jh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,v){function w(){}w.prototype=v.prototype,_.D=v.prototype,_.prototype=new w,_.prototype.constructor=_,_.C=function(S,R,x){for(var T=Array(arguments.length-2),q=2;q<arguments.length;q++)T[q-2]=arguments[q];return v.prototype[R].apply(S,T)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,v,w){w||(w=0);var S=Array(16);if(typeof v=="string")for(var R=0;16>R;++R)S[R]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(R=0;16>R;++R)S[R]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=_.g[0],w=_.g[1],R=_.g[2];var x=_.g[3],T=v+(x^w&(R^x))+S[0]+3614090360&4294967295;v=w+(T<<7&4294967295|T>>>25),T=x+(R^v&(w^R))+S[1]+3905402710&4294967295,x=v+(T<<12&4294967295|T>>>20),T=R+(w^x&(v^w))+S[2]+606105819&4294967295,R=x+(T<<17&4294967295|T>>>15),T=w+(v^R&(x^v))+S[3]+3250441966&4294967295,w=R+(T<<22&4294967295|T>>>10),T=v+(x^w&(R^x))+S[4]+4118548399&4294967295,v=w+(T<<7&4294967295|T>>>25),T=x+(R^v&(w^R))+S[5]+1200080426&4294967295,x=v+(T<<12&4294967295|T>>>20),T=R+(w^x&(v^w))+S[6]+2821735955&4294967295,R=x+(T<<17&4294967295|T>>>15),T=w+(v^R&(x^v))+S[7]+4249261313&4294967295,w=R+(T<<22&4294967295|T>>>10),T=v+(x^w&(R^x))+S[8]+1770035416&4294967295,v=w+(T<<7&4294967295|T>>>25),T=x+(R^v&(w^R))+S[9]+2336552879&4294967295,x=v+(T<<12&4294967295|T>>>20),T=R+(w^x&(v^w))+S[10]+4294925233&4294967295,R=x+(T<<17&4294967295|T>>>15),T=w+(v^R&(x^v))+S[11]+2304563134&4294967295,w=R+(T<<22&4294967295|T>>>10),T=v+(x^w&(R^x))+S[12]+1804603682&4294967295,v=w+(T<<7&4294967295|T>>>25),T=x+(R^v&(w^R))+S[13]+4254626195&4294967295,x=v+(T<<12&4294967295|T>>>20),T=R+(w^x&(v^w))+S[14]+2792965006&4294967295,R=x+(T<<17&4294967295|T>>>15),T=w+(v^R&(x^v))+S[15]+1236535329&4294967295,w=R+(T<<22&4294967295|T>>>10),T=v+(R^x&(w^R))+S[1]+4129170786&4294967295,v=w+(T<<5&4294967295|T>>>27),T=x+(w^R&(v^w))+S[6]+3225465664&4294967295,x=v+(T<<9&4294967295|T>>>23),T=R+(v^w&(x^v))+S[11]+643717713&4294967295,R=x+(T<<14&4294967295|T>>>18),T=w+(x^v&(R^x))+S[0]+3921069994&4294967295,w=R+(T<<20&4294967295|T>>>12),T=v+(R^x&(w^R))+S[5]+3593408605&4294967295,v=w+(T<<5&4294967295|T>>>27),T=x+(w^R&(v^w))+S[10]+38016083&4294967295,x=v+(T<<9&4294967295|T>>>23),T=R+(v^w&(x^v))+S[15]+3634488961&4294967295,R=x+(T<<14&4294967295|T>>>18),T=w+(x^v&(R^x))+S[4]+3889429448&4294967295,w=R+(T<<20&4294967295|T>>>12),T=v+(R^x&(w^R))+S[9]+568446438&4294967295,v=w+(T<<5&4294967295|T>>>27),T=x+(w^R&(v^w))+S[14]+3275163606&4294967295,x=v+(T<<9&4294967295|T>>>23),T=R+(v^w&(x^v))+S[3]+4107603335&4294967295,R=x+(T<<14&4294967295|T>>>18),T=w+(x^v&(R^x))+S[8]+1163531501&4294967295,w=R+(T<<20&4294967295|T>>>12),T=v+(R^x&(w^R))+S[13]+2850285829&4294967295,v=w+(T<<5&4294967295|T>>>27),T=x+(w^R&(v^w))+S[2]+4243563512&4294967295,x=v+(T<<9&4294967295|T>>>23),T=R+(v^w&(x^v))+S[7]+1735328473&4294967295,R=x+(T<<14&4294967295|T>>>18),T=w+(x^v&(R^x))+S[12]+2368359562&4294967295,w=R+(T<<20&4294967295|T>>>12),T=v+(w^R^x)+S[5]+4294588738&4294967295,v=w+(T<<4&4294967295|T>>>28),T=x+(v^w^R)+S[8]+2272392833&4294967295,x=v+(T<<11&4294967295|T>>>21),T=R+(x^v^w)+S[11]+1839030562&4294967295,R=x+(T<<16&4294967295|T>>>16),T=w+(R^x^v)+S[14]+4259657740&4294967295,w=R+(T<<23&4294967295|T>>>9),T=v+(w^R^x)+S[1]+2763975236&4294967295,v=w+(T<<4&4294967295|T>>>28),T=x+(v^w^R)+S[4]+1272893353&4294967295,x=v+(T<<11&4294967295|T>>>21),T=R+(x^v^w)+S[7]+4139469664&4294967295,R=x+(T<<16&4294967295|T>>>16),T=w+(R^x^v)+S[10]+3200236656&4294967295,w=R+(T<<23&4294967295|T>>>9),T=v+(w^R^x)+S[13]+681279174&4294967295,v=w+(T<<4&4294967295|T>>>28),T=x+(v^w^R)+S[0]+3936430074&4294967295,x=v+(T<<11&4294967295|T>>>21),T=R+(x^v^w)+S[3]+3572445317&4294967295,R=x+(T<<16&4294967295|T>>>16),T=w+(R^x^v)+S[6]+76029189&4294967295,w=R+(T<<23&4294967295|T>>>9),T=v+(w^R^x)+S[9]+3654602809&4294967295,v=w+(T<<4&4294967295|T>>>28),T=x+(v^w^R)+S[12]+3873151461&4294967295,x=v+(T<<11&4294967295|T>>>21),T=R+(x^v^w)+S[15]+530742520&4294967295,R=x+(T<<16&4294967295|T>>>16),T=w+(R^x^v)+S[2]+3299628645&4294967295,w=R+(T<<23&4294967295|T>>>9),T=v+(R^(w|~x))+S[0]+4096336452&4294967295,v=w+(T<<6&4294967295|T>>>26),T=x+(w^(v|~R))+S[7]+1126891415&4294967295,x=v+(T<<10&4294967295|T>>>22),T=R+(v^(x|~w))+S[14]+2878612391&4294967295,R=x+(T<<15&4294967295|T>>>17),T=w+(x^(R|~v))+S[5]+4237533241&4294967295,w=R+(T<<21&4294967295|T>>>11),T=v+(R^(w|~x))+S[12]+1700485571&4294967295,v=w+(T<<6&4294967295|T>>>26),T=x+(w^(v|~R))+S[3]+2399980690&4294967295,x=v+(T<<10&4294967295|T>>>22),T=R+(v^(x|~w))+S[10]+4293915773&4294967295,R=x+(T<<15&4294967295|T>>>17),T=w+(x^(R|~v))+S[1]+2240044497&4294967295,w=R+(T<<21&4294967295|T>>>11),T=v+(R^(w|~x))+S[8]+1873313359&4294967295,v=w+(T<<6&4294967295|T>>>26),T=x+(w^(v|~R))+S[15]+4264355552&4294967295,x=v+(T<<10&4294967295|T>>>22),T=R+(v^(x|~w))+S[6]+2734768916&4294967295,R=x+(T<<15&4294967295|T>>>17),T=w+(x^(R|~v))+S[13]+1309151649&4294967295,w=R+(T<<21&4294967295|T>>>11),T=v+(R^(w|~x))+S[4]+4149444226&4294967295,v=w+(T<<6&4294967295|T>>>26),T=x+(w^(v|~R))+S[11]+3174756917&4294967295,x=v+(T<<10&4294967295|T>>>22),T=R+(v^(x|~w))+S[2]+718787259&4294967295,R=x+(T<<15&4294967295|T>>>17),T=w+(x^(R|~v))+S[9]+3951481745&4294967295,_.g[0]=_.g[0]+v&4294967295,_.g[1]=_.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,_.g[2]=_.g[2]+R&4294967295,_.g[3]=_.g[3]+x&4294967295}r.prototype.u=function(_,v){v===void 0&&(v=_.length);for(var w=v-this.blockSize,S=this.B,R=this.h,x=0;x<v;){if(R==0)for(;x<=w;)s(this,_,x),x+=this.blockSize;if(typeof _=="string"){for(;x<v;)if(S[R++]=_.charCodeAt(x++),R==this.blockSize){s(this,S),R=0;break}}else for(;x<v;)if(S[R++]=_[x++],R==this.blockSize){s(this,S),R=0;break}}this.h=R,this.o+=v},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var v=1;v<_.length-8;++v)_[v]=0;var w=8*this.o;for(v=_.length-8;v<_.length;++v)_[v]=w&255,w/=256;for(this.u(_),_=Array(16),v=w=0;4>v;++v)for(var S=0;32>S;S+=8)_[w++]=this.g[v]>>>S&255;return _};function i(_,v){var w=c;return Object.prototype.hasOwnProperty.call(w,_)?w[_]:w[_]=v(_)}function a(_,v){this.h=v;for(var w=[],S=!0,R=_.length-1;0<=R;R--){var x=_[R]|0;S&&x==v||(w[R]=x,S=!1)}this.g=w}var c={};function u(_){return-128<=_&&128>_?i(_,function(v){return new a([v|0],0>v?-1:0)}):new a([_|0],0>_?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return g;if(0>_)return b(h(-_));for(var v=[],w=1,S=0;_>=w;S++)v[S]=_/w|0,w*=4294967296;return new a(v,0)}function f(_,v){if(_.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(_.charAt(0)=="-")return b(f(_.substring(1),v));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(v,8)),S=g,R=0;R<_.length;R+=8){var x=Math.min(8,_.length-R),T=parseInt(_.substring(R,R+x),v);8>x?(x=h(Math.pow(v,x)),S=S.j(x).add(h(T))):(S=S.j(w),S=S.add(h(T)))}return S}var g=u(0),y=u(1),E=u(16777216);n=a.prototype,n.m=function(){if(A(this))return-b(this).m();for(var _=0,v=1,w=0;w<this.g.length;w++){var S=this.i(w);_+=(0<=S?S:4294967296+S)*v,v*=4294967296}return _},n.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(C(this))return"0";if(A(this))return"-"+b(this).toString(_);for(var v=h(Math.pow(_,6)),w=this,S="";;){var R=M(w,v).g;w=k(w,R.j(v));var x=((0<w.g.length?w.g[0]:w.h)>>>0).toString(_);if(w=R,C(w))return x+S;for(;6>x.length;)x="0"+x;S=x+S}},n.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function C(_){if(_.h!=0)return!1;for(var v=0;v<_.g.length;v++)if(_.g[v]!=0)return!1;return!0}function A(_){return _.h==-1}n.l=function(_){return _=k(this,_),A(_)?-1:C(_)?0:1};function b(_){for(var v=_.g.length,w=[],S=0;S<v;S++)w[S]=~_.g[S];return new a(w,~_.h).add(y)}n.abs=function(){return A(this)?b(this):this},n.add=function(_){for(var v=Math.max(this.g.length,_.g.length),w=[],S=0,R=0;R<=v;R++){var x=S+(this.i(R)&65535)+(_.i(R)&65535),T=(x>>>16)+(this.i(R)>>>16)+(_.i(R)>>>16);S=T>>>16,x&=65535,T&=65535,w[R]=T<<16|x}return new a(w,w[w.length-1]&-2147483648?-1:0)};function k(_,v){return _.add(b(v))}n.j=function(_){if(C(this)||C(_))return g;if(A(this))return A(_)?b(this).j(b(_)):b(b(this).j(_));if(A(_))return b(this.j(b(_)));if(0>this.l(E)&&0>_.l(E))return h(this.m()*_.m());for(var v=this.g.length+_.g.length,w=[],S=0;S<2*v;S++)w[S]=0;for(S=0;S<this.g.length;S++)for(var R=0;R<_.g.length;R++){var x=this.i(S)>>>16,T=this.i(S)&65535,q=_.i(R)>>>16,pe=_.i(R)&65535;w[2*S+2*R]+=T*pe,D(w,2*S+2*R),w[2*S+2*R+1]+=x*pe,D(w,2*S+2*R+1),w[2*S+2*R+1]+=T*q,D(w,2*S+2*R+1),w[2*S+2*R+2]+=x*q,D(w,2*S+2*R+2)}for(S=0;S<v;S++)w[S]=w[2*S+1]<<16|w[2*S];for(S=v;S<2*v;S++)w[S]=0;return new a(w,0)};function D(_,v){for(;(_[v]&65535)!=_[v];)_[v+1]+=_[v]>>>16,_[v]&=65535,v++}function L(_,v){this.g=_,this.h=v}function M(_,v){if(C(v))throw Error("division by zero");if(C(_))return new L(g,g);if(A(_))return v=M(b(_),v),new L(b(v.g),b(v.h));if(A(v))return v=M(_,b(v)),new L(b(v.g),v.h);if(30<_.g.length){if(A(_)||A(v))throw Error("slowDivide_ only works with positive integers.");for(var w=y,S=v;0>=S.l(_);)w=F(w),S=F(S);var R=$(w,1),x=$(S,1);for(S=$(S,2),w=$(w,2);!C(S);){var T=x.add(S);0>=T.l(_)&&(R=R.add(w),x=T),S=$(S,1),w=$(w,1)}return v=k(_,R.j(v)),new L(R,v)}for(R=g;0<=_.l(v);){for(w=Math.max(1,Math.floor(_.m()/v.m())),S=Math.ceil(Math.log(w)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),x=h(w),T=x.j(v);A(T)||0<T.l(_);)w-=S,x=h(w),T=x.j(v);C(x)&&(x=y),R=R.add(x),_=k(_,T)}return new L(R,_)}n.A=function(_){return M(this,_).h},n.and=function(_){for(var v=Math.max(this.g.length,_.g.length),w=[],S=0;S<v;S++)w[S]=this.i(S)&_.i(S);return new a(w,this.h&_.h)},n.or=function(_){for(var v=Math.max(this.g.length,_.g.length),w=[],S=0;S<v;S++)w[S]=this.i(S)|_.i(S);return new a(w,this.h|_.h)},n.xor=function(_){for(var v=Math.max(this.g.length,_.g.length),w=[],S=0;S<v;S++)w[S]=this.i(S)^_.i(S);return new a(w,this.h^_.h)};function F(_){for(var v=_.g.length+1,w=[],S=0;S<v;S++)w[S]=_.i(S)<<1|_.i(S-1)>>>31;return new a(w,_.h)}function $(_,v){var w=v>>5;v%=32;for(var S=_.g.length-w,R=[],x=0;x<S;x++)R[x]=0<v?_.i(x+w)>>>v|_.i(x+w+1)<<32-v:_.i(x+w);return new a(R,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Jh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Jt=a}).apply(typeof Xl<"u"?Xl:typeof self<"u"?self:typeof window<"u"?window:{});var As=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yh,Tr,Zh,Ms,ea,ed,td,nd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof As=="object"&&As];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var P=o[m];if(!(P in d))break e;d=d[P]}o=o[o.length-1],m=d[o],l=l(m),l!=m&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var d=0,m=!1,P={next:function(){if(!m&&d<o.length){var N=d++;return{value:l(N,o[N]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,d){return o.call.apply(o.bind,arguments)}function g(o,l,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),o.apply(l,P)}}return function(){return o.apply(l,arguments)}}function y(o,l,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,y.apply(null,arguments)}function E(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function C(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,P,N){for(var j=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)j[ne-2]=arguments[ne];return l.prototype[P].apply(m,j)}}function A(o){const l=o.length;if(0<l){const d=Array(l);for(let m=0;m<l;m++)d[m]=o[m];return d}return[]}function b(o,l){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const P=o.length||0,N=m.length||0;o.length=P+N;for(let j=0;j<N;j++)o[P+j]=m[j]}else o.push(m)}}class k{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function D(o){return/^[\s\xa0]*$/.test(o)}function L(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function M(o){return M[" "](o),o}M[" "]=function(){};var F=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function $(o,l,d){for(const m in o)l.call(d,o[m],m,o)}function _(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function v(o){const l={};for(const d in o)l[d]=o[d];return l}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(o,l){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)o[d]=m[d];for(let N=0;N<w.length;N++)d=w[N],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function R(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function x(o){c.setTimeout(()=>{throw o},0)}function T(){var o=Le;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class q{constructor(){this.h=this.g=null}add(l,d){const m=pe.get();m.set(l,d),this.h?this.h.next=m:this.g=m,this.h=m}}var pe=new k(()=>new ke,o=>o.reset());class ke{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Me,De=!1,Le=new q,zt=()=>{const o=c.Promise.resolve(void 0);Me=()=>{o.then(Fe)}};var Fe=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(d){x(d)}var l=pe;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}De=!1};function qe(){this.s=this.s,this.C=this.C}qe.prototype.s=!1,qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var is=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return o}();function rr(o,l){if(le.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(F){e:{try{M(l.nodeName);var P=!0;break e}catch{}P=!1}P||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:mm[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&rr.aa.h.call(this)}}C(rr,le);var mm={2:"touch",3:"pen",4:"mouse"};rr.prototype.h=function(){rr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var os="closure_listenable_"+(1e6*Math.random()|0),gm=0;function ym(o,l,d,m,P){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!m,this.ha=P,this.key=++gm,this.da=this.fa=!1}function as(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function cs(o){this.src=o,this.g={},this.h=0}cs.prototype.add=function(o,l,d,m,P){var N=o.toString();o=this.g[N],o||(o=this.g[N]=[],this.h++);var j=Wi(o,l,m,P);return-1<j?(l=o[j],d||(l.fa=!1)):(l=new ym(l,this.src,N,!!m,P),l.fa=d,o.push(l)),l};function qi(o,l){var d=l.type;if(d in o.g){var m=o.g[d],P=Array.prototype.indexOf.call(m,l,void 0),N;(N=0<=P)&&Array.prototype.splice.call(m,P,1),N&&(as(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Wi(o,l,d,m){for(var P=0;P<o.length;++P){var N=o[P];if(!N.da&&N.listener==l&&N.capture==!!d&&N.ha==m)return P}return-1}var Gi="closure_lm_"+(1e6*Math.random()|0),Hi={};function Dc(o,l,d,m,P){if(Array.isArray(l)){for(var N=0;N<l.length;N++)Dc(o,l[N],d,m,P);return null}return d=Mc(d),o&&o[os]?o.K(l,d,h(m)?!!m.capture:!!m,P):vm(o,l,d,!1,m,P)}function vm(o,l,d,m,P,N){if(!l)throw Error("Invalid event type");var j=h(P)?!!P.capture:!!P,ne=Qi(o);if(ne||(o[Gi]=ne=new cs(o)),d=ne.add(l,d,m,j,N),d.proxy)return d;if(m=_m(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)is||(P=j),P===void 0&&(P=!1),o.addEventListener(l.toString(),m,P);else if(o.attachEvent)o.attachEvent(Vc(l.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function _m(){function o(d){return l.call(o.src,o.listener,d)}const l=wm;return o}function Oc(o,l,d,m,P){if(Array.isArray(l))for(var N=0;N<l.length;N++)Oc(o,l[N],d,m,P);else m=h(m)?!!m.capture:!!m,d=Mc(d),o&&o[os]?(o=o.i,l=String(l).toString(),l in o.g&&(N=o.g[l],d=Wi(N,d,m,P),-1<d&&(as(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete o.g[l],o.h--)))):o&&(o=Qi(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Wi(l,d,m,P)),(d=-1<o?l[o]:null)&&Ki(d))}function Ki(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[os])qi(l.i,o);else{var d=o.type,m=o.proxy;l.removeEventListener?l.removeEventListener(d,m,o.capture):l.detachEvent?l.detachEvent(Vc(d),m):l.addListener&&l.removeListener&&l.removeListener(m),(d=Qi(l))?(qi(d,o),d.h==0&&(d.src=null,l[Gi]=null)):as(o)}}}function Vc(o){return o in Hi?Hi[o]:Hi[o]="on"+o}function wm(o,l){if(o.da)o=!0;else{l=new rr(l,this);var d=o.listener,m=o.ha||o.src;o.fa&&Ki(o),o=d.call(m,l)}return o}function Qi(o){return o=o[Gi],o instanceof cs?o:null}var Xi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mc(o){return typeof o=="function"?o:(o[Xi]||(o[Xi]=function(l){return o.handleEvent(l)}),o[Xi])}function be(){qe.call(this),this.i=new cs(this),this.M=this,this.F=null}C(be,qe),be.prototype[os]=!0,be.prototype.removeEventListener=function(o,l,d,m){Oc(this,o,l,d,m)};function Oe(o,l){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=l.type||l,typeof l=="string")l=new le(l,o);else if(l instanceof le)l.target=l.target||o;else{var P=l;l=new le(m,o),S(l,P)}if(P=!0,d)for(var N=d.length-1;0<=N;N--){var j=l.g=d[N];P=ls(j,m,!0,l)&&P}if(j=l.g=o,P=ls(j,m,!0,l)&&P,P=ls(j,m,!1,l)&&P,d)for(N=0;N<d.length;N++)j=l.g=d[N],P=ls(j,m,!1,l)&&P}be.prototype.N=function(){if(be.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],m=0;m<d.length;m++)as(d[m]);delete o.g[l],o.h--}}this.F=null},be.prototype.K=function(o,l,d,m){return this.i.add(String(o),l,!1,d,m)},be.prototype.L=function(o,l,d,m){return this.i.add(String(o),l,!0,d,m)};function ls(o,l,d,m){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var P=!0,N=0;N<l.length;++N){var j=l[N];if(j&&!j.da&&j.capture==d){var ne=j.listener,ve=j.ha||j.src;j.fa&&qi(o.i,j),P=ne.call(ve,m)!==!1&&P}}return P&&!m.defaultPrevented}function Lc(o,l,d){if(typeof o=="function")d&&(o=y(o,d));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function jc(o){o.g=Lc(()=>{o.g=null,o.i&&(o.i=!1,jc(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Em extends qe{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:jc(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sr(o){qe.call(this),this.h=o,this.g={}}C(sr,qe);var Fc=[];function Uc(o){$(o.g,function(l,d){this.g.hasOwnProperty(d)&&Ki(l)},o),o.g={}}sr.prototype.N=function(){sr.aa.N.call(this),Uc(this)},sr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ji=c.JSON.stringify,Tm=c.JSON.parse,bm=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Yi(){}Yi.prototype.h=null;function Bc(o){return o.h||(o.h=o.i())}function $c(){}var ir={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Zi(){le.call(this,"d")}C(Zi,le);function eo(){le.call(this,"c")}C(eo,le);var qt={},zc=null;function us(){return zc=zc||new be}qt.La="serverreachability";function qc(o){le.call(this,qt.La,o)}C(qc,le);function or(o){const l=us();Oe(l,new qc(l))}qt.STAT_EVENT="statevent";function Wc(o,l){le.call(this,qt.STAT_EVENT,o),this.stat=l}C(Wc,le);function Ve(o){const l=us();Oe(l,new Wc(l,o))}qt.Ma="timingevent";function Gc(o,l){le.call(this,qt.Ma,o),this.size=l}C(Gc,le);function ar(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function cr(){this.g=!0}cr.prototype.xa=function(){this.g=!1};function Im(o,l,d,m,P,N){o.info(function(){if(o.g)if(N)for(var j="",ne=N.split("&"),ve=0;ve<ne.length;ve++){var Z=ne[ve].split("=");if(1<Z.length){var Ie=Z[0];Z=Z[1];var Ae=Ie.split("_");j=2<=Ae.length&&Ae[1]=="type"?j+(Ie+"="+Z+"&"):j+(Ie+"=redacted&")}}else j=null;else j=N;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+l+`
`+d+`
`+j})}function Am(o,l,d,m,P,N,j){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+l+`
`+d+`
`+N+" "+j})}function dn(o,l,d,m){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+xm(o,d)+(m?" "+m:"")})}function Sm(o,l){o.info(function(){return"TIMEOUT: "+l})}cr.prototype.info=function(){};function xm(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var N=P[0];if(N!="noop"&&N!="stop"&&N!="close")for(var j=1;j<P.length;j++)P[j]=""}}}}return Ji(d)}catch{return l}}var hs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},to;function ds(){}C(ds,Yi),ds.prototype.g=function(){return new XMLHttpRequest},ds.prototype.i=function(){return{}},to=new ds;function Et(o,l,d,m){this.j=o,this.i=l,this.l=d,this.R=m||1,this.U=new sr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Kc}function Kc(){this.i=null,this.g="",this.h=!1}var Qc={},no={};function ro(o,l,d){o.L=1,o.v=gs(ot(l)),o.m=d,o.P=!0,Xc(o,null)}function Xc(o,l){o.F=Date.now(),fs(o),o.A=ot(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),ul(d.i,"t",m),o.C=0,d=o.j.J,o.h=new Kc,o.g=Rl(o.j,d?l:null,!o.m),0<o.O&&(o.M=new Em(y(o.Y,o,o.g),o.O)),l=o.U,d=o.g,m=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(Fc[0]=P.toString()),P=Fc);for(var N=0;N<P.length;N++){var j=Dc(d,P[N],m||l.handleEvent,!1,l.h||l);if(!j)break;l.g[j.key]=j}l=o.H?v(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),or(),Im(o.i,o.u,o.A,o.l,o.R,o.m)}Et.prototype.ca=function(o){o=o.target;const l=this.M;l&&at(o)==3?l.j():this.Y(o)},Et.prototype.Y=function(o){try{if(o==this.g)e:{const Ae=at(this.g);var l=this.g.Ba();const mn=this.g.Z();if(!(3>Ae)&&(Ae!=3||this.g&&(this.h.h||this.g.oa()||yl(this.g)))){this.J||Ae!=4||l==7||(l==8||0>=mn?or(3):or(2)),so(this);var d=this.g.Z();this.X=d;t:if(Jc(this)){var m=yl(this.g);o="";var P=m.length,N=at(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wt(this),lr(this);var j="";break t}this.h.i=new c.TextDecoder}for(l=0;l<P;l++)this.h.h=!0,o+=this.h.i.decode(m[l],{stream:!(N&&l==P-1)});m.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,Am(this.i,this.u,this.A,this.l,this.R,Ae,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ne,ve=this.g;if((ne=ve.g?ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(ne)){var Z=ne;break t}}Z=null}if(d=Z)dn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,io(this,d);else{this.o=!1,this.s=3,Ve(12),Wt(this),lr(this);break e}}if(this.P){d=!0;let Ge;for(;!this.J&&this.C<j.length;)if(Ge=Rm(this,j),Ge==no){Ae==4&&(this.s=4,Ve(14),d=!1),dn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ge==Qc){this.s=4,Ve(15),dn(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else dn(this.i,this.l,Ge,null),io(this,Ge);if(Jc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||j.length!=0||this.h.h||(this.s=1,Ve(16),d=!1),this.o=this.o&&d,!d)dn(this.i,this.l,j,"[Invalid Chunked Response]"),Wt(this),lr(this);else if(0<j.length&&!this.W){this.W=!0;var Ie=this.j;Ie.g==this&&Ie.ba&&!Ie.M&&(Ie.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),ho(Ie),Ie.M=!0,Ve(11))}}else dn(this.i,this.l,j,null),io(this,j);Ae==4&&Wt(this),this.o&&!this.J&&(Ae==4?Il(this.j,this):(this.o=!1,fs(this)))}else Wm(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,Ve(12)):(this.s=0,Ve(13)),Wt(this),lr(this)}}}catch{}finally{}};function Jc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Rm(o,l){var d=o.C,m=l.indexOf(`
`,d);return m==-1?no:(d=Number(l.substring(d,m)),isNaN(d)?Qc:(m+=1,m+d>l.length?no:(l=l.slice(m,m+d),o.C=m+d,l)))}Et.prototype.cancel=function(){this.J=!0,Wt(this)};function fs(o){o.S=Date.now()+o.I,Yc(o,o.I)}function Yc(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ar(y(o.ba,o),l)}function so(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Et.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Sm(this.i,this.A),this.L!=2&&(or(),Ve(17)),Wt(this),this.s=2,lr(this)):Yc(this,this.S-o)};function lr(o){o.j.G==0||o.J||Il(o.j,o)}function Wt(o){so(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Uc(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function io(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||oo(d.h,o))){if(!o.K&&oo(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Ts(d),ws(d);else break e;uo(d),Ve(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=ar(y(d.Za,d),6e3));if(1>=tl(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Ht(d,11)}else if((o.K||d.g==o)&&Ts(d),!D(l))for(P=d.Da.g.parse(l),l=0;l<P.length;l++){let Z=P[l];if(d.T=Z[0],Z=Z[1],d.G==2)if(Z[0]=="c"){d.K=Z[1],d.ia=Z[2];const Ie=Z[3];Ie!=null&&(d.la=Ie,d.j.info("VER="+d.la));const Ae=Z[4];Ae!=null&&(d.Aa=Ae,d.j.info("SVER="+d.Aa));const mn=Z[5];mn!=null&&typeof mn=="number"&&0<mn&&(m=1.5*mn,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Ge=o.g;if(Ge){const Is=Ge.g?Ge.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Is){var N=m.h;N.g||Is.indexOf("spdy")==-1&&Is.indexOf("quic")==-1&&Is.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(ao(N,N.h),N.h=null))}if(m.D){const fo=Ge.g?Ge.g.getResponseHeader("X-HTTP-Session-Id"):null;fo&&(m.ya=fo,se(m.I,m.D,fo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var j=o;if(m.qa=xl(m,m.J?m.ia:null,m.W),j.K){nl(m.h,j);var ne=j,ve=m.L;ve&&(ne.I=ve),ne.B&&(so(ne),fs(ne)),m.g=j}else Tl(m);0<d.i.length&&Es(d)}else Z[0]!="stop"&&Z[0]!="close"||Ht(d,7);else d.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?Ht(d,7):lo(d):Z[0]!="noop"&&d.l&&d.l.ta(Z),d.v=0)}}or(4)}catch{}}var Cm=class{constructor(o,l){this.g=o,this.map=l}};function Zc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function el(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function tl(o){return o.h?1:o.g?o.g.size:0}function oo(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function ao(o,l){o.g?o.g.add(l):o.h=l}function nl(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Zc.prototype.cancel=function(){if(this.i=rl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function rl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return A(o.i)}function Pm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],d=o.length,m=0;m<d;m++)l.push(o[m]);return l}l=[],d=0;for(m in o)l[d++]=o[m];return l}function Nm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const m in o)l[d++]=m;return l}}}function sl(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=Nm(o),m=Pm(o),P=m.length,N=0;N<P;N++)l.call(void 0,m[N],d&&d[N],o)}var il=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function km(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),P=null;if(0<=m){var N=o[d].substring(0,m);P=o[d].substring(m+1)}else N=o[d];l(N,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Gt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Gt){this.h=o.h,ps(this,o.j),this.o=o.o,this.g=o.g,ms(this,o.s),this.l=o.l;var l=o.i,d=new dr;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),ol(this,d),this.m=o.m}else o&&(l=String(o).match(il))?(this.h=!1,ps(this,l[1]||"",!0),this.o=ur(l[2]||""),this.g=ur(l[3]||"",!0),ms(this,l[4]),this.l=ur(l[5]||"",!0),ol(this,l[6]||"",!0),this.m=ur(l[7]||"")):(this.h=!1,this.i=new dr(null,this.h))}Gt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(hr(l,al,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(hr(l,al,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(hr(d,d.charAt(0)=="/"?Vm:Om,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",hr(d,Lm)),o.join("")};function ot(o){return new Gt(o)}function ps(o,l,d){o.j=d?ur(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function ms(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function ol(o,l,d){l instanceof dr?(o.i=l,jm(o.i,o.h)):(d||(l=hr(l,Mm)),o.i=new dr(l,o.h))}function se(o,l,d){o.i.set(l,d)}function gs(o){return se(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ur(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function hr(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,Dm),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Dm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var al=/[#\/\?@]/g,Om=/[#\?:]/g,Vm=/[#\?]/g,Mm=/[#\?@]/g,Lm=/#/g;function dr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Tt(o){o.g||(o.g=new Map,o.h=0,o.i&&km(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=dr.prototype,n.add=function(o,l){Tt(this),this.i=null,o=fn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function cl(o,l){Tt(o),l=fn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function ll(o,l){return Tt(o),l=fn(o,l),o.g.has(l)}n.forEach=function(o,l){Tt(this),this.g.forEach(function(d,m){d.forEach(function(P){o.call(l,P,m,this)},this)},this)},n.na=function(){Tt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let m=0;m<l.length;m++){const P=o[m];for(let N=0;N<P.length;N++)d.push(l[m])}return d},n.V=function(o){Tt(this);let l=[];if(typeof o=="string")ll(this,o)&&(l=l.concat(this.g.get(fn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},n.set=function(o,l){return Tt(this),this.i=null,o=fn(this,o),ll(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function ul(o,l,d){cl(o,l),0<d.length&&(o.i=null,o.g.set(fn(o,l),A(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var m=l[d];const N=encodeURIComponent(String(m)),j=this.V(m);for(m=0;m<j.length;m++){var P=N;j[m]!==""&&(P+="="+encodeURIComponent(String(j[m]))),o.push(P)}}return this.i=o.join("&")};function fn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function jm(o,l){l&&!o.j&&(Tt(o),o.i=null,o.g.forEach(function(d,m){var P=m.toLowerCase();m!=P&&(cl(this,m),ul(this,P,d))},o)),o.j=l}function Fm(o,l){const d=new cr;if(c.Image){const m=new Image;m.onload=E(bt,d,"TestLoadImage: loaded",!0,l,m),m.onerror=E(bt,d,"TestLoadImage: error",!1,l,m),m.onabort=E(bt,d,"TestLoadImage: abort",!1,l,m),m.ontimeout=E(bt,d,"TestLoadImage: timeout",!1,l,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else l(!1)}function Um(o,l){const d=new cr,m=new AbortController,P=setTimeout(()=>{m.abort(),bt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:m.signal}).then(N=>{clearTimeout(P),N.ok?bt(d,"TestPingServer: ok",!0,l):bt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(P),bt(d,"TestPingServer: error",!1,l)})}function bt(o,l,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function Bm(){this.g=new bm}function $m(o,l,d){const m=d||"";try{sl(o,function(P,N){let j=P;h(P)&&(j=Ji(P)),l.push(m+N+"="+encodeURIComponent(j))})}catch(P){throw l.push(m+"type="+encodeURIComponent("_badmap")),P}}function ys(o){this.l=o.Ub||null,this.j=o.eb||!1}C(ys,Yi),ys.prototype.g=function(){return new vs(this.l,this.j)},ys.prototype.i=function(o){return function(){return o}}({});function vs(o,l){be.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(vs,be),n=vs.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,pr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,pr(this)),this.g&&(this.readyState=3,pr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function hl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?fr(this):pr(this),this.readyState==3&&hl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,fr(this))},n.Qa=function(o){this.g&&(this.response=o,fr(this))},n.ga=function(){this.g&&fr(this)};function fr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,pr(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function pr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(vs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function dl(o){let l="";return $(o,function(d,m){l+=m,l+=":",l+=d,l+=`\r
`}),l}function co(o,l,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=dl(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):se(o,l,d))}function ce(o){be.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ce,be);var zm=/^https?$/i,qm=["POST","PUT"];n=ce.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():to.g(),this.v=this.o?Bc(this.o):Bc(to),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(N){fl(this,N);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())d.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),P=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(qm,l,void 0))||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,j]of d)this.g.setRequestHeader(N,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gl(this),this.u=!0,this.g.send(o),this.u=!1}catch(N){fl(this,N)}};function fl(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,pl(o),_s(o)}function pl(o){o.A||(o.A=!0,Oe(o,"complete"),Oe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Oe(this,"complete"),Oe(this,"abort"),_s(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_s(this,!0)),ce.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ml(this):this.bb())},n.bb=function(){ml(this)};function ml(o){if(o.h&&typeof a<"u"&&(!o.v[1]||at(o)!=4||o.Z()!=2)){if(o.u&&at(o)==4)Lc(o.Ea,0,o);else if(Oe(o,"readystatechange"),at(o)==4){o.h=!1;try{const j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var m;if(m=j===0){var P=String(o.D).match(il)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),m=!zm.test(P?P.toLowerCase():"")}d=m}if(d)Oe(o,"complete"),Oe(o,"success");else{o.m=6;try{var N=2<at(o)?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.Z()+"]",pl(o)}}finally{_s(o)}}}}function _s(o,l){if(o.g){gl(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Oe(o,"ready");try{d.onreadystatechange=m}catch{}}}function gl(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function at(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<at(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Tm(l)}};function yl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Wm(o){const l={};o=(o.g&&2<=at(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(D(o[m]))continue;var d=R(o[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=l[P]||[];l[P]=N,N.push(d)}_(l,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function mr(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function vl(o){this.Aa=0,this.i=[],this.j=new cr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=mr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=mr("baseRetryDelayMs",5e3,o),this.cb=mr("retryDelaySeedMs",1e4,o),this.Wa=mr("forwardChannelMaxRetries",2,o),this.wa=mr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Zc(o&&o.concurrentRequestLimit),this.Da=new Bm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=vl.prototype,n.la=8,n.G=1,n.connect=function(o,l,d,m){Ve(0),this.W=o,this.H=l||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=xl(this,null,this.W),Es(this)};function lo(o){if(_l(o),o.G==3){var l=o.U++,d=ot(o.I);if(se(d,"SID",o.K),se(d,"RID",l),se(d,"TYPE","terminate"),gr(o,d),l=new Et(o,o.j,l),l.L=2,l.v=gs(ot(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=Rl(l.j,null),l.g.ea(l.v)),l.F=Date.now(),fs(l)}Sl(o)}function ws(o){o.g&&(ho(o),o.g.cancel(),o.g=null)}function _l(o){ws(o),o.u&&(c.clearTimeout(o.u),o.u=null),Ts(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Es(o){if(!el(o.h)&&!o.s){o.s=!0;var l=o.Ga;Me||zt(),De||(Me(),De=!0),Le.add(l,o),o.B=0}}function Gm(o,l){return tl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ar(y(o.Ga,o,l),Al(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new Et(this,this.j,o);let N=this.o;if(this.S&&(N?(N=v(N),S(N,this.S)):N=this.S),this.m!==null||this.O||(P.H=N,N=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(l+=m,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=El(this,P,l),d=ot(this.I),se(d,"RID",o),se(d,"CVER",22),this.D&&se(d,"X-HTTP-Session-Id",this.D),gr(this,d),N&&(this.O?l="headers="+encodeURIComponent(String(dl(N)))+"&"+l:this.m&&co(d,this.m,N)),ao(this.h,P),this.Ua&&se(d,"TYPE","init"),this.P?(se(d,"$req",l),se(d,"SID","null"),P.T=!0,ro(P,d,null)):ro(P,d,l),this.G=2}}else this.G==3&&(o?wl(this,o):this.i.length==0||el(this.h)||wl(this))};function wl(o,l){var d;l?d=l.l:d=o.U++;const m=ot(o.I);se(m,"SID",o.K),se(m,"RID",d),se(m,"AID",o.T),gr(o,m),o.m&&o.o&&co(m,o.m,o.o),d=new Et(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=El(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ao(o.h,d),ro(d,m,l)}function gr(o,l){o.H&&$(o.H,function(d,m){se(l,m,d)}),o.l&&sl({},function(d,m){se(l,m,d)})}function El(o,l,d){d=Math.min(o.i.length,d);var m=o.l?y(o.l.Na,o.l,o):null;e:{var P=o.i;let N=-1;for(;;){const j=["count="+d];N==-1?0<d?(N=P[0].g,j.push("ofs="+N)):N=0:j.push("ofs="+N);let ne=!0;for(let ve=0;ve<d;ve++){let Z=P[ve].g;const Ie=P[ve].map;if(Z-=N,0>Z)N=Math.max(0,P[ve].g-100),ne=!1;else try{$m(Ie,j,"req"+Z+"_")}catch{m&&m(Ie)}}if(ne){m=j.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,m}function Tl(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Me||zt(),De||(Me(),De=!0),Le.add(l,o),o.v=0}}function uo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ar(y(o.Fa,o),Al(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,bl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ar(y(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ve(10),ws(this),bl(this))};function ho(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function bl(o){o.g=new Et(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=ot(o.qa);se(l,"RID","rpc"),se(l,"SID",o.K),se(l,"AID",o.T),se(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&se(l,"TO",o.ja),se(l,"TYPE","xmlhttp"),gr(o,l),o.m&&o.o&&co(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=gs(ot(l)),d.m=null,d.P=!0,Xc(d,o)}n.Za=function(){this.C!=null&&(this.C=null,ws(this),uo(this),Ve(19))};function Ts(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Il(o,l){var d=null;if(o.g==l){Ts(o),ho(o),o.g=null;var m=2}else if(oo(o.h,l))d=l.D,nl(o.h,l),m=1;else return;if(o.G!=0){if(l.o)if(m==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var P=o.B;m=us(),Oe(m,new Gc(m,d)),Es(o)}else Tl(o);else if(P=l.s,P==3||P==0&&0<l.X||!(m==1&&Gm(o,l)||m==2&&uo(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),P){case 1:Ht(o,5);break;case 4:Ht(o,10);break;case 3:Ht(o,6);break;default:Ht(o,2)}}}function Al(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function Ht(o,l){if(o.j.info("Error code "+l),l==2){var d=y(o.fb,o),m=o.Xa;const P=!m;m=new Gt(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ps(m,"https"),gs(m),P?Fm(m.toString(),d):Um(m.toString(),d)}else Ve(2);o.G=0,o.l&&o.l.sa(l),Sl(o),_l(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ve(2)):(this.j.info("Failed to ping google.com"),Ve(1))};function Sl(o){if(o.G=0,o.ka=[],o.l){const l=rl(o.h);(l.length!=0||o.i.length!=0)&&(b(o.ka,l),b(o.ka,o.i),o.h.i.length=0,A(o.i),o.i.length=0),o.l.ra()}}function xl(o,l,d){var m=d instanceof Gt?ot(d):new Gt(d);if(m.g!="")l&&(m.g=l+"."+m.g),ms(m,m.s);else{var P=c.location;m=P.protocol,l=l?l+"."+P.hostname:P.hostname,P=+P.port;var N=new Gt(null);m&&ps(N,m),l&&(N.g=l),P&&ms(N,P),d&&(N.l=d),m=N}return d=o.D,l=o.ya,d&&l&&se(m,d,l),se(m,"VER",o.la),gr(o,m),m}function Rl(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ce(new ys({eb:d})):new ce(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cl(){}n=Cl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function bs(){}bs.prototype.g=function(o,l){return new Ue(o,l)};function Ue(o,l){be.call(this),this.g=new vl(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!D(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!D(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new pn(this)}C(Ue,be),Ue.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ue.prototype.close=function(){lo(this.g)},Ue.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Ji(o),o=d);l.i.push(new Cm(l.Ya++,o)),l.G==3&&Es(l)},Ue.prototype.N=function(){this.g.l=null,delete this.j,lo(this.g),delete this.g,Ue.aa.N.call(this)};function Pl(o){Zi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}C(Pl,Zi);function Nl(){eo.call(this),this.status=1}C(Nl,eo);function pn(o){this.g=o}C(pn,Cl),pn.prototype.ua=function(){Oe(this.g,"a")},pn.prototype.ta=function(o){Oe(this.g,new Pl(o))},pn.prototype.sa=function(o){Oe(this.g,new Nl)},pn.prototype.ra=function(){Oe(this.g,"b")},bs.prototype.createWebChannel=bs.prototype.g,Ue.prototype.send=Ue.prototype.o,Ue.prototype.open=Ue.prototype.m,Ue.prototype.close=Ue.prototype.close,nd=function(){return new bs},td=function(){return us()},ed=qt,ea={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},hs.NO_ERROR=0,hs.TIMEOUT=8,hs.HTTP_ERROR=6,Ms=hs,Hc.COMPLETE="complete",Zh=Hc,$c.EventType=ir,ir.OPEN="a",ir.CLOSE="b",ir.ERROR="c",ir.MESSAGE="d",be.prototype.listen=be.prototype.K,Tr=$c,ce.prototype.listenOnce=ce.prototype.L,ce.prototype.getLastError=ce.prototype.Ka,ce.prototype.getLastErrorCode=ce.prototype.Ba,ce.prototype.getStatus=ce.prototype.Z,ce.prototype.getResponseJson=ce.prototype.Oa,ce.prototype.getResponseText=ce.prototype.oa,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Ha,Yh=ce}).apply(typeof As<"u"?As:typeof self<"u"?self:typeof window<"u"?window:{});const Jl="@firebase/firestore";/**
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
 */class xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xe.UNAUTHENTICATED=new xe(null),xe.GOOGLE_CREDENTIALS=new xe("google-credentials-uid"),xe.FIRST_PARTY=new xe("first-party-uid"),xe.MOCK_USER=new xe("mock-user");/**
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
 */let qn="10.14.0";/**
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
 */const nn=new Pa("@firebase/firestore");function vr(){return nn.logLevel}function B(n,...e){if(nn.logLevel<=J.DEBUG){const t=e.map(Da);nn.debug(`Firestore (${qn}): ${n}`,...t)}}function gt(n,...e){if(nn.logLevel<=J.ERROR){const t=e.map(Da);nn.error(`Firestore (${qn}): ${n}`,...t)}}function On(n,...e){if(nn.logLevel<=J.WARN){const t=e.map(Da);nn.warn(`Firestore (${qn}): ${n}`,...t)}}function Da(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function G(n="Unexpected state"){const e=`FIRESTORE (${qn}) INTERNAL ASSERTION FAILED: `+n;throw gt(e),new Error(e)}function te(n,e){n||G()}function K(n,e){return n}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends wt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Lt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class rd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(xe.UNAUTHENTICATED))}shutdown(){}}class xv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Rv{constructor(e){this.t=e,this.currentUser=xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){te(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Lt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Lt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Lt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(te(typeof r.accessToken=="string"),new rd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string"),new xe(e)}}class Cv{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Pv{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Cv(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kv{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){te(this.o===void 0);const r=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,B("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(te(typeof t.token=="string"),this.R=t.token,new Nv(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Dv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class sd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Dv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function ee(n,e){return n<e?-1:n>e?1:0}function Vn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class fe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new U(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new fe(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new fe(0,0))}static max(){return new H(new fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Vr{constructor(e,t,r){t===void 0?t=0:t>e.length&&G(),r===void 0?r=e.length-t:r>e.length-t&&G(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Vr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Vr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class oe extends Vr{construct(e,t,r){return new oe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new oe(t)}static emptyPath(){return new oe([])}}const Ov=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class we extends Vr{construct(e,t,r){return new we(e,t,r)}static isValidIdentifier(e){return Ov.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),we.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new we(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new U(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new U(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new U(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new we(t)}static emptyPath(){return new we([])}}/**
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
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(oe.fromString(e))}static fromName(e){return new z(oe.fromString(e).popFirst(5))}static empty(){return new z(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new oe(e.slice()))}}function Vv(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=H.fromTimestamp(r===1e9?new fe(t+1,0):new fe(t,r));return new Ut(s,z.empty(),e)}function Mv(n){return new Ut(n.readTime,n.key,-1)}class Ut{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ut(H.min(),z.empty(),-1)}static max(){return new Ut(H.max(),z.empty(),-1)}}function Lv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=z.comparator(n.documentKey,e.documentKey),t!==0?t:ee(n.largestBatchId,e.largestBatchId))}/**
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
 */const jv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Hr(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==jv)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(s=>s?V.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new V((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next(f=>{a[h]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new V((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Uv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Kr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Oa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Oa.oe=-1;function xi(n){return n==null}function ti(n){return n===0&&1/n==-1/0}function Bv(n){return typeof n=="number"&&Number.isInteger(n)&&!ti(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Yl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Wn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function id(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ae{constructor(e,t){this.comparator=e,this.root=t||_e.EMPTY}insert(e,t){return new ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,_e.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_e.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ss(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ss(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ss(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ss(this.root,e,this.comparator,!0)}}class Ss{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _e{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??_e.RED,this.left=s??_e.EMPTY,this.right=i??_e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new _e(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return _e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return _e.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}_e.EMPTY=null,_e.RED=!0,_e.BLACK=!1;_e.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,t,r,s,i){return this}insert(e,t,r){return new _e(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ee{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Zl(this.data.getIterator())}getIteratorFrom(e){return new Zl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ee(this.comparator);return t.data=e,t}}class Zl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ke{constructor(e){this.fields=e,e.sort(we.comparator)}static empty(){return new Ke([])}unionWith(e){let t=new Ee(we.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ke(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Vn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class od extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new od("Invalid base64 string: "+i):i}}(e);return new Te(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const $v=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bt(n){if(te(!!n),typeof n=="string"){let e=0;const t=$v.exec(n);if(te(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ue(n.seconds),nanos:ue(n.nanos)}}function ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function rn(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}/**
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
 */function Va(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ma(n){const e=n.mapValue.fields.__previous_value__;return Va(e)?Ma(e):e}function Mr(n){const e=Bt(n.mapValue.fields.__local_write_time__.timestampValue);return new fe(e.seconds,e.nanos)}/**
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
 */class zv{constructor(e,t,r,s,i,a,c,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h}}class Lr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Lr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Lr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const xs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function sn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Va(n)?4:Wv(n)?9007199254740991:qv(n)?10:11:G()}function st(n,e){if(n===e)return!0;const t=sn(n);if(t!==sn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Mr(n).isEqual(Mr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Bt(s.timestampValue),c=Bt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return rn(s.bytesValue).isEqual(rn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ue(s.geoPointValue.latitude)===ue(i.geoPointValue.latitude)&&ue(s.geoPointValue.longitude)===ue(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ue(s.integerValue)===ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ue(s.doubleValue),c=ue(i.doubleValue);return a===c?ti(a)===ti(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Vn(n.arrayValue.values||[],e.arrayValue.values||[],st);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Yl(a)!==Yl(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!st(a[u],c[u])))return!1;return!0}(n,e);default:return G()}}function jr(n,e){return(n.values||[]).find(t=>st(t,e))!==void 0}function Mn(n,e){if(n===e)return 0;const t=sn(n),r=sn(e);if(t!==r)return ee(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ee(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=ue(i.integerValue||i.doubleValue),u=ue(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return eu(n.timestampValue,e.timestampValue);case 4:return eu(Mr(n),Mr(e));case 5:return ee(n.stringValue,e.stringValue);case 6:return function(i,a){const c=rn(i),u=rn(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=ee(c[h],u[h]);if(f!==0)return f}return ee(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=ee(ue(i.latitude),ue(a.latitude));return c!==0?c:ee(ue(i.longitude),ue(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return tu(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,u,h,f;const g=i.fields||{},y=a.fields||{},E=(c=g.value)===null||c===void 0?void 0:c.arrayValue,C=(u=y.value)===null||u===void 0?void 0:u.arrayValue,A=ee(((h=E?.values)===null||h===void 0?void 0:h.length)||0,((f=C?.values)===null||f===void 0?void 0:f.length)||0);return A!==0?A:tu(E,C)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===xs.mapValue&&a===xs.mapValue)return 0;if(i===xs.mapValue)return 1;if(a===xs.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const y=ee(u[g],f[g]);if(y!==0)return y;const E=Mn(c[u[g]],h[f[g]]);if(E!==0)return E}return ee(u.length,f.length)}(n.mapValue,e.mapValue);default:throw G()}}function eu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ee(n,e);const t=Bt(n),r=Bt(e),s=ee(t.seconds,r.seconds);return s!==0?s:ee(t.nanos,r.nanos)}function tu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Mn(t[s],r[s]);if(i)return i}return ee(t.length,r.length)}function Ln(n){return ta(n)}function ta(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Bt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return rn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=ta(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${ta(t.fields[a])}`;return s+"}"}(n.mapValue):G()}function nu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function na(n){return!!n&&"integerValue"in n}function La(n){return!!n&&"arrayValue"in n}function ru(n){return!!n&&"nullValue"in n}function su(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ls(n){return!!n&&"mapValue"in n}function qv(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Sr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Wn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Sr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Sr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Wv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class We{constructor(e){this.value=e}static empty(){return new We({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ls(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Sr(t)}setAll(e){let t=we.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Sr(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ls(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return st(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ls(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Wn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new We(Sr(this.value))}}function ad(n){const e=[];return Wn(n.fields,(t,r)=>{const s=new we([t]);if(Ls(r)){const i=ad(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ke(e)}/**
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
 */class Re{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Re(e,0,H.min(),H.min(),H.min(),We.empty(),0)}static newFoundDocument(e,t,r,s){return new Re(e,1,t,H.min(),r,s,0)}static newNoDocument(e,t){return new Re(e,2,t,H.min(),H.min(),We.empty(),0)}static newUnknownDocument(e,t){return new Re(e,3,t,H.min(),H.min(),We.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=We.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=We.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ni{constructor(e,t){this.position=e,this.inclusive=t}}function iu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=z.comparator(z.fromName(a.referenceValue),t.key):r=Mn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ou(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!st(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ri{constructor(e,t="asc"){this.field=e,this.dir=t}}function Gv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class cd{}class de extends cd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Kv(e,t,r):t==="array-contains"?new Jv(e,r):t==="in"?new Yv(e,r):t==="not-in"?new Zv(e,r):t==="array-contains-any"?new e_(e,r):new de(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Qv(e,r):new Xv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Mn(t,this.value)):t!==null&&sn(this.value)===sn(t)&&this.matchesComparison(Mn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qe extends cd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Qe(e,t)}matches(e){return ld(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ld(n){return n.op==="and"}function ud(n){return Hv(n)&&ld(n)}function Hv(n){for(const e of n.filters)if(e instanceof Qe)return!1;return!0}function ra(n){if(n instanceof de)return n.field.canonicalString()+n.op.toString()+Ln(n.value);if(ud(n))return n.filters.map(e=>ra(e)).join(",");{const e=n.filters.map(t=>ra(t)).join(",");return`${n.op}(${e})`}}function hd(n,e){return n instanceof de?function(r,s){return s instanceof de&&r.op===s.op&&r.field.isEqual(s.field)&&st(r.value,s.value)}(n,e):n instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&hd(a,s.filters[c]),!0):!1}(n,e):void G()}function dd(n){return n instanceof de?function(t){return`${t.field.canonicalString()} ${t.op} ${Ln(t.value)}`}(n):n instanceof Qe?function(t){return t.op.toString()+" {"+t.getFilters().map(dd).join(" ,")+"}"}(n):"Filter"}class Kv extends de{constructor(e,t,r){super(e,t,r),this.key=z.fromName(r.referenceValue)}matches(e){const t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class Qv extends de{constructor(e,t){super(e,"in",t),this.keys=fd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Xv extends de{constructor(e,t){super(e,"not-in",t),this.keys=fd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function fd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>z.fromName(r.referenceValue))}class Jv extends de{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return La(t)&&jr(t.arrayValue,this.value)}}class Yv extends de{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&jr(this.value.arrayValue,t)}}class Zv extends de{constructor(e,t){super(e,"not-in",t)}matches(e){if(jr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!jr(this.value.arrayValue,t)}}class e_ extends de{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!La(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>jr(this.value.arrayValue,r))}}/**
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
 */class t_{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function au(n,e=null,t=[],r=[],s=null,i=null,a=null){return new t_(n,e,t,r,s,i,a)}function ja(n){const e=K(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ra(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),xi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ln(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ln(r)).join(",")),e.ue=t}return e.ue}function Fa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Gv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!hd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ou(n.startAt,e.startAt)&&ou(n.endAt,e.endAt)}function sa(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Qr{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function n_(n,e,t,r,s,i,a,c){return new Qr(n,e,t,r,s,i,a,c)}function Ua(n){return new Qr(n)}function cu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function pd(n){return n.collectionGroup!==null}function xr(n){const e=K(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Ee(we.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ri(i,r))}),t.has(we.keyField().canonicalString())||e.ce.push(new ri(we.keyField(),r))}return e.ce}function et(n){const e=K(n);return e.le||(e.le=r_(e,xr(n))),e.le}function r_(n,e){if(n.limitType==="F")return au(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ri(s.field,i)});const t=n.endAt?new ni(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ni(n.startAt.position,n.startAt.inclusive):null;return au(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ia(n,e){const t=n.filters.concat([e]);return new Qr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function oa(n,e,t){return new Qr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ri(n,e){return Fa(et(n),et(e))&&n.limitType===e.limitType}function md(n){return`${ja(et(n))}|lt:${n.limitType}`}function wn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>dd(s)).join(", ")}]`),xi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Ln(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Ln(s)).join(",")),`Target(${r})`}(et(n))}; limitType=${n.limitType})`}function Ci(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of xr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const h=iu(a,c,u);return a.inclusive?h<=0:h<0}(r.startAt,xr(r),s)||r.endAt&&!function(a,c,u){const h=iu(a,c,u);return a.inclusive?h>=0:h>0}(r.endAt,xr(r),s))}(n,e)}function s_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function gd(n){return(e,t)=>{let r=!1;for(const s of xr(n)){const i=i_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function i_(n,e,t){const r=n.field.isKeyField()?z.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),h=c.data.field(i);return u!==null&&h!==null?Mn(u,h):G()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */class Gn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Wn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return id(this.inner)}size(){return this.innerSize}}/**
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
 */const o_=new ae(z.comparator);function yt(){return o_}const yd=new ae(z.comparator);function br(...n){let e=yd;for(const t of n)e=e.insert(t.key,t);return e}function vd(n){let e=yd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Xt(){return Rr()}function _d(){return Rr()}function Rr(){return new Gn(n=>n.toString(),(n,e)=>n.isEqual(e))}const a_=new ae(z.comparator),c_=new Ee(z.comparator);function X(...n){let e=c_;for(const t of n)e=e.add(t);return e}const l_=new Ee(ee);function u_(){return l_}/**
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
 */function Ba(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ti(e)?"-0":e}}function wd(n){return{integerValue:""+n}}function h_(n,e){return Bv(e)?wd(e):Ba(n,e)}/**
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
 */class Pi{constructor(){this._=void 0}}function d_(n,e,t){return n instanceof si?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Va(i)&&(i=Ma(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof Fr?Td(n,e):n instanceof Ur?bd(n,e):function(s,i){const a=Ed(s,i),c=lu(a)+lu(s.Pe);return na(a)&&na(s.Pe)?wd(c):Ba(s.serializer,c)}(n,e)}function f_(n,e,t){return n instanceof Fr?Td(n,e):n instanceof Ur?bd(n,e):t}function Ed(n,e){return n instanceof ii?function(r){return na(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class si extends Pi{}class Fr extends Pi{constructor(e){super(),this.elements=e}}function Td(n,e){const t=Id(e);for(const r of n.elements)t.some(s=>st(s,r))||t.push(r);return{arrayValue:{values:t}}}class Ur extends Pi{constructor(e){super(),this.elements=e}}function bd(n,e){let t=Id(e);for(const r of n.elements)t=t.filter(s=>!st(s,r));return{arrayValue:{values:t}}}class ii extends Pi{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function lu(n){return ue(n.integerValue||n.doubleValue)}function Id(n){return La(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function p_(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Fr&&s instanceof Fr||r instanceof Ur&&s instanceof Ur?Vn(r.elements,s.elements,st):r instanceof ii&&s instanceof ii?st(r.Pe,s.Pe):r instanceof si&&s instanceof si}(n.transform,e.transform)}class m_{constructor(e,t){this.version=e,this.transformResults=t}}class pt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new pt}static exists(e){return new pt(void 0,e)}static updateTime(e){return new pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function js(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ni{}function Ad(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new xd(n.key,pt.none()):new Xr(n.key,n.data,pt.none());{const t=n.data,r=We.empty();let s=new Ee(we.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new ln(n.key,r,new Ke(s.toArray()),pt.none())}}function g_(n,e,t){n instanceof Xr?function(s,i,a){const c=s.value.clone(),u=hu(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof ln?function(s,i,a){if(!js(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=hu(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Sd(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Cr(n,e,t,r){return n instanceof Xr?function(i,a,c,u){if(!js(i.precondition,a))return c;const h=i.value.clone(),f=du(i.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof ln?function(i,a,c,u){if(!js(i.precondition,a))return c;const h=du(i.fieldTransforms,u,a),f=a.data;return f.setAll(Sd(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,a,c){return js(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function y_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Ed(r.transform,s||null);i!=null&&(t===null&&(t=We.empty()),t.set(r.field,i))}return t||null}function uu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Vn(r,s,(i,a)=>p_(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Xr extends Ni{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ln extends Ni{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Sd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function hu(n,e,t){const r=new Map;te(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,f_(a,c,t[s]))}return r}function du(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,d_(i,a,e))}return r}class xd extends Ni{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class v_ extends Ni{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class __{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&g_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Cr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Cr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=_d();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=Ad(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),X())}isEqual(e){return this.batchId===e.batchId&&Vn(this.mutations,e.mutations,(t,r)=>uu(t,r))&&Vn(this.baseMutations,e.baseMutations,(t,r)=>uu(t,r))}}class $a{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){te(e.mutations.length===r.length);let s=function(){return a_}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new $a(e,t,r,s)}}/**
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
 */let w_=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};/**
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
 */class E_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var he,Y;function T_(n){switch(n){default:return G();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function Rd(n){if(n===void 0)return gt("GRPC error has no .code"),O.UNKNOWN;switch(n){case he.OK:return O.OK;case he.CANCELLED:return O.CANCELLED;case he.UNKNOWN:return O.UNKNOWN;case he.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case he.INTERNAL:return O.INTERNAL;case he.UNAVAILABLE:return O.UNAVAILABLE;case he.UNAUTHENTICATED:return O.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case he.NOT_FOUND:return O.NOT_FOUND;case he.ALREADY_EXISTS:return O.ALREADY_EXISTS;case he.PERMISSION_DENIED:return O.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case he.ABORTED:return O.ABORTED;case he.OUT_OF_RANGE:return O.OUT_OF_RANGE;case he.UNIMPLEMENTED:return O.UNIMPLEMENTED;case he.DATA_LOSS:return O.DATA_LOSS;default:return G()}}(Y=he||(he={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function b_(){return new TextEncoder}/**
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
 */const I_=new Jt([4294967295,4294967295],0);function fu(n){const e=b_().encode(n),t=new Jh;return t.update(e),new Uint8Array(t.digest())}function pu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Jt([t,r],0),new Jt([s,i],0)]}class za{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ir(`Invalid padding: ${t}`);if(r<0)throw new Ir(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ir(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ir(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Jt.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Jt.fromNumber(r)));return s.compare(I_)===1&&(s=new Jt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=fu(e),[r,s]=pu(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new za(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=fu(e),[r,s]=pu(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ir extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ki{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Jr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ki(H.min(),s,new ae(ee),yt(),X())}}class Jr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Jr(r,t,X(),X(),X())}}/**
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
 */class Fs{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class Cd{constructor(e,t){this.targetId=e,this.me=t}}class Pd{constructor(e,t,r=Te.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class mu{constructor(){this.fe=0,this.ge=yu(),this.pe=Te.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=X(),t=X(),r=X();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:G()}}),new Jr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=yu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,te(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class A_{constructor(e){this.Le=e,this.Be=new Map,this.ke=yt(),this.qe=gu(),this.Qe=new ae(ee)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(sa(i))if(r===0){const a=new z(i.path);this.Ue(t,a,Re.newNoDocument(a,H.min()))}else te(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),u=c?this.Xe(c,e,a):1;if(u!==0){this.je(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=rn(r).toUint8Array()}catch(u){if(u instanceof od)return On("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new za(a,s,i)}catch(u){return On(u instanceof Ir?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&sa(c.target)){const u=new z(c.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Re.newNoDocument(u,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=X();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new ki(e,t,this.Qe,this.ke,r);return this.ke=yt(),this.qe=gu(),this.Qe=new ae(ee),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new mu,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ee(ee),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||B("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new mu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function gu(){return new ae(z.comparator)}function yu(){return new ae(z.comparator)}const S_={asc:"ASCENDING",desc:"DESCENDING"},x_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},R_={and:"AND",or:"OR"};class C_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function aa(n,e){return n.useProto3Json||xi(e)?e:{value:e}}function oi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Nd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function P_(n,e){return oi(n,e.toTimestamp())}function tt(n){return te(!!n),H.fromTimestamp(function(t){const r=Bt(t);return new fe(r.seconds,r.nanos)}(n))}function qa(n,e){return ca(n,e).canonicalString()}function ca(n,e){const t=function(s){return new oe(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function kd(n){const e=oe.fromString(n);return te(Ld(e)),e}function la(n,e){return qa(n.databaseId,e.path)}function To(n,e){const t=kd(e);if(t.get(1)!==n.databaseId.projectId)throw new U(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new U(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new z(Od(t))}function Dd(n,e){return qa(n.databaseId,e)}function N_(n){const e=kd(n);return e.length===4?oe.emptyPath():Od(e)}function ua(n){return new oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Od(n){return te(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function vu(n,e,t){return{name:la(n,e),fields:t.value.mapValue.fields}}function k_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(te(f===void 0||typeof f=="string"),Te.fromBase64String(f||"")):(te(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Te.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?O.UNKNOWN:Rd(h.code);return new U(f,h.message||"")}(a);t=new Pd(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=To(n,r.document.name),i=tt(r.document.updateTime),a=r.document.createTime?tt(r.document.createTime):H.min(),c=new We({mapValue:{fields:r.document.fields}}),u=Re.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Fs(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=To(n,r.document),i=r.readTime?tt(r.readTime):H.min(),a=Re.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Fs([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=To(n,r.document),i=r.removedTargetIds||[];t=new Fs([],i,s,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new E_(s,i),c=r.targetId;t=new Cd(c,a)}}return t}function D_(n,e){let t;if(e instanceof Xr)t={update:vu(n,e.key,e.value)};else if(e instanceof xd)t={delete:la(n,e.key)};else if(e instanceof ln)t={update:vu(n,e.key,e.data),updateMask:$_(e.fieldMask)};else{if(!(e instanceof v_))return G();t={verify:la(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof si)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Fr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ur)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ii)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw G()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:P_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(n,e.precondition)),t}function O_(n,e){return n&&n.length>0?(te(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?tt(s.updateTime):tt(i);return a.isEqual(H.min())&&(a=tt(i)),new m_(a,s.transformResults||[])}(t,e))):[]}function V_(n,e){return{documents:[Dd(n,e.path)]}}function M_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Dd(n,s);const i=function(h){if(h.length!==0)return Md(Qe.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:En(y.field),direction:F_(y.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=aa(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function L_(n){let e=N_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){te(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(g){const y=Vd(g);return y instanceof Qe&&ud(y)?y.getFilters():[y]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(y=>function(C){return new ri(Tn(C.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(y))}(t.orderBy));let c=null;t.limit&&(c=function(g){let y;return y=typeof g=="object"?g.value:g,xi(y)?null:y}(t.limit));let u=null;t.startAt&&(u=function(g){const y=!!g.before,E=g.values||[];return new ni(E,y)}(t.startAt));let h=null;return t.endAt&&(h=function(g){const y=!g.before,E=g.values||[];return new ni(E,y)}(t.endAt)),n_(e,s,a,i,c,"F",u,h)}function j_(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Vd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Tn(t.unaryFilter.field);return de.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Tn(t.unaryFilter.field);return de.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Tn(t.unaryFilter.field);return de.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Tn(t.unaryFilter.field);return de.create(a,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(n):n.fieldFilter!==void 0?function(t){return de.create(Tn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Qe.create(t.compositeFilter.filters.map(r=>Vd(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G()}}(t.compositeFilter.op))}(n):G()}function F_(n){return S_[n]}function U_(n){return x_[n]}function B_(n){return R_[n]}function En(n){return{fieldPath:n.canonicalString()}}function Tn(n){return we.fromServerFormat(n.fieldPath)}function Md(n){return n instanceof de?function(t){if(t.op==="=="){if(su(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NAN"}};if(ru(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(su(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NOT_NAN"}};if(ru(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:En(t.field),op:U_(t.op),value:t.value}}}(n):n instanceof Qe?function(t){const r=t.getFilters().map(s=>Md(s));return r.length===1?r[0]:{compositeFilter:{op:B_(t.op),filters:r}}}(n):G()}function $_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ld(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Dt{constructor(e,t,r,s,i=H.min(),a=H.min(),c=Te.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Dt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class z_{constructor(e){this.ct=e}}function q_(n){const e=L_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?oa(e,e.limit,"L"):e}/**
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
 */class W_{constructor(){this.un=new G_}addToCollectionParentIndex(e,t){return this.un.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(Ut.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(Ut.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class G_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ee(oe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ee(oe.comparator)).toArray()}}/**
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
 */class jn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new jn(0)}static kn(){return new jn(-1)}}/**
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
 */class H_{constructor(){this.changes=new Gn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class K_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Q_{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Cr(r.mutation,s,Ke.empty(),fe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,X()).next(()=>r))}getLocalViewOfDocuments(e,t,r=X()){const s=Xt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=br();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Xt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,X()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=yt();const a=Rr(),c=function(){return Rr()}();return t.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof ln)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Cr(f.mutation,h,f.mutation.getFieldMask(),fe.now())):a.set(h.key,Ke.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var g;return c.set(h,new K_(f,(g=a.get(h))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Rr();let s=new ae((a,c)=>a-c),i=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||Ke.empty();f=c.applyToLocalView(h,f),r.set(u,f);const g=(s.get(c.batchId)||X()).add(u);s=s.insert(c.batchId,g)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,g=_d();f.forEach(y=>{if(!i.has(y)){const E=Ad(t.get(y),r.get(y));E!==null&&g.set(y,E),i=i.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):pd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):V.resolve(Xt());let c=-1,u=i;return a.next(h=>V.forEach(h,(f,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,X())).next(f=>({batchId:c,changes:vd(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next(r=>{let s=br();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=br();return this.indexManager.getCollectionParents(e,i).next(c=>V.forEach(c,u=>{const h=function(g,y){return new Qr(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((g,y)=>{a=a.insert(g,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Re.newInvalidDocument(f)))});let c=br();return a.forEach((u,h)=>{const f=i.get(u);f!==void 0&&Cr(f.mutation,h,Ke.empty(),fe.now()),Ci(t,h)&&(c=c.insert(u,h))}),c})}}/**
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
 */class X_{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return V.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:tt(s.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:q_(s.bundledQuery),readTime:tt(s.readTime)}}(t)),V.resolve()}}/**
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
 */class J_{constructor(){this.overlays=new ae(z.comparator),this.Ir=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Xt();return V.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const s=Xt(),i=t.length+1,a=new z(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ae((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Xt(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Xt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return V.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new w_(t,r));let i=this.Ir.get(t);i===void 0&&(i=X(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class Y_{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
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
 */class Wa{constructor(){this.Tr=new Ee(me.Er),this.dr=new Ee(me.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new me(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new me(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new z(new oe([])),r=new me(t,e),s=new me(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new z(new oe([])),r=new me(t,e),s=new me(t,e+1);let i=X();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new me(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class me{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return z.comparator(e.key,t.key)||ee(e.wr,t.wr)}static Ar(e,t){return ee(e.wr,t.wr)||z.comparator(e.key,t.key)}}/**
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
 */class Z_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ee(me.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new __(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new me(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new me(t,0),s=new me(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);i.push(c)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ee(ee);return t.forEach(s=>{const i=new me(s,0),a=new me(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],c=>{r=r.add(c.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;z.isDocumentKey(i)||(i=i.child(""));const a=new me(new z(i),0);let c=new Ee(ee);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(u.wr)),!0)},a),V.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){te(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(t.mutations,s=>{const i=new me(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new me(t,0),s=this.br.firstAfterOrEqual(r);return V.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class e0{constructor(e){this.Mr=e,this.docs=function(){return new ae(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():Re.newInvalidDocument(t))}getEntries(e,t){let r=yt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Re.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=yt();const a=t.path,c=new z(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Lv(Mv(f),r)<=0||(s.has(f.key)||Ci(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,t,r,s){G()}Or(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new t0(this)}getSize(e){return V.resolve(this.size)}}class t0 extends H_{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class n0{constructor(e){this.persistence=e,this.Nr=new Gn(t=>ja(t),Fa),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Wa,this.targetCount=0,this.kr=jn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),V.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new jn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Kn(t),V.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.Br.containsKey(t))}}/**
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
 */class r0{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Oa(0),this.Kr=!1,this.Kr=!0,this.$r=new Y_,this.referenceDelegate=e(this),this.Ur=new n0(this),this.indexManager=new W_,this.remoteDocumentCache=function(s){return new e0(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new z_(t),this.Gr=new X_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new J_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Z_(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){B("MemoryPersistence","Starting transaction:",e);const s=new s0(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class s0 extends Fv{constructor(e){super(),this.currentSequenceNumber=e}}class Ga{constructor(e){this.persistence=e,this.Jr=new Wa,this.Yr=null}static Zr(e){return new Ga(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),V.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const s=z.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,H.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return V.or([()=>V.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class Ha{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=X(),s=X();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ha(e,t.fromCache,r,s)}}/**
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
 */class i0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class o0{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ay()?8:Uv(Ce())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new i0;return this.Xi(e,t,a).next(c=>{if(i.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(vr()<=J.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",wn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(vr()<=J.DEBUG&&B("QueryEngine","Query:",wn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(vr()<=J.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",wn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,et(t))):V.resolve())}Yi(e,t){if(cu(t))return V.resolve(null);let r=et(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=oa(t,null,"F"),r=et(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=X(...i);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(t,c);return this.ns(t,h,a,u.readTime)?this.Yi(e,oa(t,null,"F")):this.rs(e,h,t,u)}))})))}Zi(e,t,r,s){return cu(t)||s.isEqual(H.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?V.resolve(null):(vr()<=J.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),wn(t)),this.rs(e,a,t,Vv(s,-1)).next(c=>c))})}ts(e,t){let r=new Ee(gd(e));return t.forEach((s,i)=>{Ci(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return vr()<=J.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",wn(t)),this.Ji.getDocumentsMatchingQuery(e,t,Ut.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class a0{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new ae(ee),this._s=new Gn(i=>ja(i),Fa),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Q_(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function c0(n,e,t,r){return new a0(n,e,t,r)}async function jd(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=X();for(const h of s){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:c}))})})}function l0(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){const g=h.batch,y=g.keys();let E=V.resolve();return y.forEach(C=>{E=E.next(()=>f.getEntry(u,C)).next(A=>{const b=h.docVersions.get(C);te(b!==null),A.version.compareTo(b)<0&&(g.applyToRemoteDocument(A,h),A.isValidDocument()&&(A.setReadTime(h.commitVersion),f.addEntry(A)))})}),E.next(()=>c.mutationQueue.removeMutationBatch(u,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=X();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Fd(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function u0(n,e){const t=K(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((f,g)=>{const y=s.get(g);if(!y)return;c.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,g).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,g)));let E=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?E=E.withResumeToken(Te.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),s=s.insert(g,E),function(A,b,k){return A.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(y,E,f)&&c.push(t.Ur.updateTargetData(i,E))});let u=yt(),h=X();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(h0(i,a,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(H.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(g=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return V.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(t.os=s,i))}function h0(n,e,t){let r=X(),s=X();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=yt();return t.forEach((c,u)=>{const h=i.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(H.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):B("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{Ps:a,Is:s}})}function d0(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function f0(n,e){const t=K(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new Dt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function ha(n,e,t){const r=K(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Kr(a))throw a;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function _u(n,e,t){const r=K(n);let s=H.min(),i=X();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const g=K(u),y=g._s.get(f);return y!==void 0?V.resolve(g.os.get(y)):g.Ur.getTargetData(h,f)}(r,a,et(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:H.min(),t?i:X())).next(c=>(p0(r,s_(e),c),{documents:c,Ts:i})))}function p0(n,e,t){let r=n.us.get(e)||H.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class wu{constructor(){this.activeTargetIds=u_()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class m0{constructor(){this.so=new wu,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new wu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class g0{_o(e){}shutdown(){}}/**
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
 */class Eu{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Rs=null;function bo(){return Rs===null?Rs=function(){return 268435456+Math.round(2147483648*Math.random())}():Rs++,"0x"+Rs.toString(16)}/**
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
 */const y0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class v0{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Se="WebChannelConnection";class _0 extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const c=bo(),u=this.xo(t,r.toUriEncodedString());B("RestConnection",`Sending RPC '${t}' ${c}:`,u,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(t,u,h,s).then(f=>(B("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw On("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",u,"request:",s),f})}Lo(t,r,s,i,a,c){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=y0[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=bo();return new Promise((a,c)=>{const u=new Yh;u.setWithCredentials(!0),u.listenOnce(Zh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ms.NO_ERROR:const f=u.getResponseJson();B(Se,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case Ms.TIMEOUT:B(Se,`RPC '${e}' ${i} timed out`),c(new U(O.DEADLINE_EXCEEDED,"Request time out"));break;case Ms.HTTP_ERROR:const g=u.getStatus();if(B(Se,`RPC '${e}' ${i} failed with status:`,g,"response text:",u.getResponseText()),g>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const E=y?.error;if(E&&E.status&&E.message){const C=function(b){const k=b.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(k)>=0?k:O.UNKNOWN}(E.status);c(new U(C,E.message))}else c(new U(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new U(O.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{B(Se,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);B(Se,`RPC '${e}' ${i} sending request:`,s),u.send(t,"POST",h,r,15)})}Bo(e,t,r){const s=bo(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=nd(),c=td(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=i.join("");B(Se,`Creating RPC '${e}' stream ${s}: ${f}`,u);const g=a.createWebChannel(f,u);let y=!1,E=!1;const C=new v0({Io:b=>{E?B(Se,`Not sending because RPC '${e}' stream ${s} is closed:`,b):(y||(B(Se,`Opening RPC '${e}' stream ${s} transport.`),g.open(),y=!0),B(Se,`RPC '${e}' stream ${s} sending:`,b),g.send(b))},To:()=>g.close()}),A=(b,k,D)=>{b.listen(k,L=>{try{D(L)}catch(M){setTimeout(()=>{throw M},0)}})};return A(g,Tr.EventType.OPEN,()=>{E||(B(Se,`RPC '${e}' stream ${s} transport opened.`),C.yo())}),A(g,Tr.EventType.CLOSE,()=>{E||(E=!0,B(Se,`RPC '${e}' stream ${s} transport closed`),C.So())}),A(g,Tr.EventType.ERROR,b=>{E||(E=!0,On(Se,`RPC '${e}' stream ${s} transport errored:`,b),C.So(new U(O.UNAVAILABLE,"The operation could not be completed")))}),A(g,Tr.EventType.MESSAGE,b=>{var k;if(!E){const D=b.data[0];te(!!D);const L=D,M=L.error||((k=L[0])===null||k===void 0?void 0:k.error);if(M){B(Se,`RPC '${e}' stream ${s} received error:`,M);const F=M.status;let $=function(w){const S=he[w];if(S!==void 0)return Rd(S)}(F),_=M.message;$===void 0&&($=O.INTERNAL,_="Unknown error status: "+F+" with message "+M.message),E=!0,C.So(new U($,_)),g.close()}else B(Se,`RPC '${e}' stream ${s} received:`,D),C.bo(D)}}),A(c,ed.STAT_EVENT,b=>{b.stat===ea.PROXY?B(Se,`RPC '${e}' stream ${s} detected buffering proxy`):b.stat===ea.NOPROXY&&B(Se,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function Io(){return typeof document<"u"?document:null}/**
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
 */function Di(n){return new C_(n,!0)}/**
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
 */class Ud{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Bd{constructor(e,t,r,s,i,a,c,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ud(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(gt(t.toString()),gt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new U(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class w0 extends Bd{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=k_(this.serializer,e),r=function(i){if(!("targetChange"in i))return H.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?tt(a.readTime):H.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=ua(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=sa(u)?{documents:V_(i,u)}:{query:M_(i,u)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Nd(i,a.resumeToken);const h=aa(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(H.min())>0){c.readTime=oi(i,a.snapshotVersion.toTimestamp());const h=aa(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=j_(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=ua(this.serializer),t.removeTarget=e,this.a_(t)}}class E0 extends Bd{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return te(!!e.streamToken),this.lastStreamToken=e.streamToken,te(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=O_(e.writeResults,e.commitTime),r=tt(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=ua(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>D_(this.serializer,r))};this.a_(t)}}/**
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
 */class T0 extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new U(O.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,ca(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(O.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,ca(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new U(O.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class b0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(gt(t),this.D_=!1):B("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class I0{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{un(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=K(u);h.L_.add(4),await Yr(h),h.q_.set("Unknown"),h.L_.delete(4),await Oi(h)}(this))})}),this.q_=new b0(r,s)}}async function Oi(n){if(un(n))for(const e of n.B_)await e(!0)}async function Yr(n){for(const e of n.B_)await e(!1)}function $d(n,e){const t=K(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Ja(t)?Xa(t):Hn(t).r_()&&Qa(t,e))}function Ka(n,e){const t=K(n),r=Hn(t);t.N_.delete(e),r.r_()&&zd(t,e),t.N_.size===0&&(r.r_()?r.o_():un(t)&&t.q_.set("Unknown"))}function Qa(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Hn(n).A_(e)}function zd(n,e){n.Q_.xe(e),Hn(n).R_(e)}function Xa(n){n.Q_=new A_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Hn(n).start(),n.q_.v_()}function Ja(n){return un(n)&&!Hn(n).n_()&&n.N_.size>0}function un(n){return K(n).L_.size===0}function qd(n){n.Q_=void 0}async function A0(n){n.q_.set("Online")}async function S0(n){n.N_.forEach((e,t)=>{Qa(n,e)})}async function x0(n,e){qd(n),Ja(n)?(n.q_.M_(e),Xa(n)):n.q_.set("Unknown")}async function R0(n,e,t){if(n.q_.set("Online"),e instanceof Pd&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ai(n,r)}else if(e instanceof Fs?n.Q_.Ke(e):e instanceof Cd?n.Q_.He(e):n.Q_.We(e),!t.isEqual(H.min()))try{const r=await Fd(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Q_.rt(a);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,h)=>{const f=i.N_.get(u);if(!f)return;i.N_.set(u,f.withResumeToken(Te.EMPTY_BYTE_STRING,f.snapshotVersion)),zd(i,u);const g=new Dt(f.target,u,h,f.sequenceNumber);Qa(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await ai(n,r)}}async function ai(n,e,t){if(!Kr(e))throw e;n.L_.add(1),await Yr(n),n.q_.set("Offline"),t||(t=()=>Fd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Oi(n)})}function Wd(n,e){return e().catch(t=>ai(n,t,e))}async function Vi(n){const e=K(n),t=$t(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;C0(e);)try{const s=await d0(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,P0(e,s)}catch(s){await ai(e,s)}Gd(e)&&Hd(e)}function C0(n){return un(n)&&n.O_.length<10}function P0(n,e){n.O_.push(e);const t=$t(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Gd(n){return un(n)&&!$t(n).n_()&&n.O_.length>0}function Hd(n){$t(n).start()}async function N0(n){$t(n).p_()}async function k0(n){const e=$t(n);for(const t of n.O_)e.m_(t.mutations)}async function D0(n,e,t){const r=n.O_.shift(),s=$a.from(r,e,t);await Wd(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Vi(n)}async function O0(n,e){e&&$t(n).V_&&await async function(r,s){if(function(a){return T_(a)&&a!==O.ABORTED}(s.code)){const i=r.O_.shift();$t(r).s_(),await Wd(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Vi(r)}}(n,e),Gd(n)&&Hd(n)}async function Tu(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=un(t);t.L_.add(3),await Yr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Oi(t)}async function V0(n,e){const t=K(n);e?(t.L_.delete(2),await Oi(t)):e||(t.L_.add(2),await Yr(t),t.q_.set("Unknown"))}function Hn(n){return n.K_||(n.K_=function(t,r,s){const i=K(t);return i.w_(),new w0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:A0.bind(null,n),Ro:S0.bind(null,n),mo:x0.bind(null,n),d_:R0.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Ja(n)?Xa(n):n.q_.set("Unknown")):(await n.K_.stop(),qd(n))})),n.K_}function $t(n){return n.U_||(n.U_=function(t,r,s){const i=K(t);return i.w_(),new E0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:N0.bind(null,n),mo:O0.bind(null,n),f_:k0.bind(null,n),g_:D0.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Vi(n)):(await n.U_.stop(),n.O_.length>0&&(B("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Ya{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Ya(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Za(n,e){if(gt("AsyncQueue",`${e}: ${n}`),Kr(n))return new U(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class In{constructor(e){this.comparator=e?(t,r)=>e(t,r)||z.comparator(t.key,r.key):(t,r)=>z.comparator(t.key,r.key),this.keyedMap=br(),this.sortedSet=new ae(this.comparator)}static emptySet(e){return new In(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof In)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new In;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class bu{constructor(){this.W_=new ae(z.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Fn{constructor(e,t,r,s,i,a,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Fn(e,t,In.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ri(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class M0{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class L0{constructor(){this.queries=Iu(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=K(t),i=s.queries;s.queries=Iu(),i.forEach((a,c)=>{for(const u of c.j_)u.onError(r)})})(this,new U(O.ABORTED,"Firestore shutting down"))}}function Iu(){return new Gn(n=>md(n),Ri)}async function Kd(n,e){const t=K(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new M0,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Za(a,`Initialization of query '${wn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&ec(t)}async function Qd(n,e){const t=K(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function j0(n,e){const t=K(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&ec(t)}function F0(n,e,t){const r=K(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function ec(n){n.Y_.forEach(e=>{e.next()})}var da,Au;(Au=da||(da={})).ea="default",Au.Cache="cache";class Xd{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Fn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Fn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==da.Cache}}/**
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
 */class Jd{constructor(e){this.key=e}}class Yd{constructor(e){this.key=e}}class U0{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=X(),this.mutatedKeys=X(),this.Aa=gd(e),this.Ra=new In(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new bu,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const y=s.get(f),E=Ci(this.query,g)?g:null,C=!!y&&this.mutatedKeys.has(y.key),A=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let b=!1;y&&E?y.data.isEqual(E.data)?C!==A&&(r.track({type:3,doc:E}),b=!0):this.ga(y,E)||(r.track({type:2,doc:E}),b=!0,(u&&this.Aa(E,u)>0||h&&this.Aa(E,h)<0)&&(c=!0)):!y&&E?(r.track({type:0,doc:E}),b=!0):y&&!E&&(r.track({type:1,doc:y}),b=!0,(u||h)&&(c=!0)),b&&(E?(a=a.add(E),i=A?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,g)=>function(E,C){const A=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return A(E)-A(C)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,h=u!==this.Ea;return this.Ea=u,a.length!==0||h?{snapshot:new Fn(this.query,e.Ra,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new bu,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=X(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Yd(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Jd(r))}),t}ba(e){this.Ta=e.Ts,this.da=X();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Fn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class B0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class $0{constructor(e){this.key=e,this.va=!1}}class z0{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Gn(c=>md(c),Ri),this.Ma=new Map,this.xa=new Set,this.Oa=new ae(z.comparator),this.Na=new Map,this.La=new Wa,this.Ba={},this.ka=new Map,this.qa=jn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function q0(n,e,t=!0){const r=sf(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Zd(r,e,t,!0),s}async function W0(n,e){const t=sf(n);await Zd(t,e,!0,!1)}async function Zd(n,e,t,r){const s=await f0(n.localStore,et(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await G0(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&$d(n.remoteStore,s),c}async function G0(n,e,t,r,s){n.Ka=(g,y,E)=>async function(A,b,k,D){let L=b.view.ma(k);L.ns&&(L=await _u(A.localStore,b.query,!1).then(({documents:_})=>b.view.ma(_,L)));const M=D&&D.targetChanges.get(b.targetId),F=D&&D.targetMismatches.get(b.targetId)!=null,$=b.view.applyChanges(L,A.isPrimaryClient,M,F);return xu(A,b.targetId,$.wa),$.snapshot}(n,g,y,E);const i=await _u(n.localStore,e,!0),a=new U0(e,i.Ts),c=a.ma(i.documents),u=Jr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,u);xu(n,t,h.wa);const f=new B0(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function H0(n,e,t){const r=K(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!Ri(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ha(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Ka(r.remoteStore,s.targetId),fa(r,s.targetId)}).catch(Hr)):(fa(r,s.targetId),await ha(r.localStore,s.targetId,!0))}async function K0(n,e){const t=K(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ka(t.remoteStore,r.targetId))}async function Q0(n,e,t){const r=nw(n);try{const s=await function(a,c){const u=K(a),h=fe.now(),f=c.reduce((E,C)=>E.add(C.key),X());let g,y;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let C=yt(),A=X();return u.cs.getEntries(E,f).next(b=>{C=b,C.forEach((k,D)=>{D.isValidDocument()||(A=A.add(k))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,C)).next(b=>{g=b;const k=[];for(const D of c){const L=y_(D,g.get(D.key).overlayedDocument);L!=null&&k.push(new ln(D.key,L,ad(L.value.mapValue),pt.exists(!0)))}return u.mutationQueue.addMutationBatch(E,h,k,c)}).next(b=>{y=b;const k=b.applyToLocalDocumentSet(g,A);return u.documentOverlayCache.saveOverlays(E,b.batchId,k)})}).then(()=>({batchId:y.batchId,changes:vd(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let h=a.Ba[a.currentUser.toKey()];h||(h=new ae(ee)),h=h.insert(c,u),a.Ba[a.currentUser.toKey()]=h}(r,s.batchId,t),await Zr(r,s.changes),await Vi(r.remoteStore)}catch(s){const i=Za(s,"Failed to persist write");t.reject(i)}}async function ef(n,e){const t=K(n);try{const r=await u0(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?te(a.va):s.removedDocuments.size>0&&(te(a.va),a.va=!1))}),await Zr(t,r,e)}catch(r){await Hr(r)}}function Su(n,e,t){const r=K(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=K(a);u.onlineState=c;let h=!1;u.queries.forEach((f,g)=>{for(const y of g.j_)y.Z_(c)&&(h=!0)}),h&&ec(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function X0(n,e,t){const r=K(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new ae(z.comparator);a=a.insert(i,Re.newNoDocument(i,H.min()));const c=X().add(i),u=new ki(H.min(),new Map,new ae(ee),a,c);await ef(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),tc(r)}else await ha(r.localStore,e,!1).then(()=>fa(r,e,t)).catch(Hr)}async function J0(n,e){const t=K(n),r=e.batch.batchId;try{const s=await l0(t.localStore,e);nf(t,r,null),tf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Zr(t,s)}catch(s){await Hr(s)}}async function Y0(n,e,t){const r=K(n);try{const s=await function(a,c){const u=K(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(g=>(te(g!==null),f=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);nf(r,e,t),tf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Zr(r,s)}catch(s){await Hr(s)}}function tf(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function nf(n,e,t){const r=K(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function fa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||rf(n,r)})}function rf(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Ka(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),tc(n))}function xu(n,e,t){for(const r of t)r instanceof Jd?(n.La.addReference(r.key,e),Z0(n,r)):r instanceof Yd?(B("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||rf(n,r.key)):G()}function Z0(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(B("SyncEngine","New document in limbo: "+t),n.xa.add(r),tc(n))}function tc(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new z(oe.fromString(e)),r=n.qa.next();n.Na.set(r,new $0(t)),n.Oa=n.Oa.insert(t,r),$d(n.remoteStore,new Dt(et(Ua(t.path)),r,"TargetPurposeLimboResolution",Oa.oe))}}async function Zr(n,e,t){const r=K(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,u)=>{a.push(r.Ka(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=t?.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){s.push(h);const g=Ha.Wi(u.targetId,h);i.push(g)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(u,h){const f=K(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>V.forEach(h,y=>V.forEach(y.$i,E=>f.persistence.referenceDelegate.addReference(g,y.targetId,E)).next(()=>V.forEach(y.Ui,E=>f.persistence.referenceDelegate.removeReference(g,y.targetId,E)))))}catch(g){if(!Kr(g))throw g;B("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const y=g.targetId;if(!g.fromCache){const E=f.os.get(y),C=E.snapshotVersion,A=E.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(y,A)}}}(r.localStore,i))}async function ew(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await jd(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(c=>{c.forEach(u=>{u.reject(new U(O.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zr(t,r.hs)}}function tw(n,e){const t=K(n),r=t.Na.get(e);if(r&&r.va)return X().add(r.key);{let s=X();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const c=t.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function sf(n){const e=K(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ef.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=X0.bind(null,e),e.Ca.d_=j0.bind(null,e.eventManager),e.Ca.$a=F0.bind(null,e.eventManager),e}function nw(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=J0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Y0.bind(null,e),e}class ci{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Di(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return c0(this.persistence,new o0,e.initialUser,this.serializer)}Ga(e){return new r0(Ga.Zr,this.serializer)}Wa(e){return new m0}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ci.provider={build:()=>new ci};class pa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Su(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ew.bind(null,this.syncEngine),await V0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new L0}()}createDatastore(e){const t=Di(e.databaseInfo.databaseId),r=function(i){return new _0(i)}(e.databaseInfo);return function(i,a,c,u){return new T0(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new I0(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Su(this.syncEngine,t,0),function(){return Eu.D()?new Eu:new g0}())}createSyncEngine(e,t){return function(s,i,a,c,u,h,f){const g=new z0(s,i,a,c,u,h);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=K(s);B("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Yr(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}pa.provider={build:()=>new pa};/**
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
 */class of{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):gt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class rw{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=xe.UNAUTHENTICATED,this.clientId=sd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{B("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(B("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Za(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ao(n,e){n.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await jd(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ru(n,e){n.asyncQueue.verifyOperationInProgress();const t=await sw(n);B("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Tu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Tu(e.remoteStore,s)),n._onlineComponents=e}async function sw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ao(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;On("Error using user provided cache. Falling back to memory cache: "+t),await Ao(n,new ci)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await Ao(n,new ci);return n._offlineComponents}async function af(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await Ru(n,n._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await Ru(n,new pa))),n._onlineComponents}function iw(n){return af(n).then(e=>e.syncEngine)}async function ma(n){const e=await af(n),t=e.eventManager;return t.onListen=q0.bind(null,e.syncEngine),t.onUnlisten=H0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=W0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=K0.bind(null,e.syncEngine),t}function ow(n,e,t={}){const r=new Lt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,h){const f=new of({next:y=>{f.Za(),a.enqueueAndForget(()=>Qd(i,g)),y.fromCache&&u.source==="server"?h.reject(new U(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),g=new Xd(c,f,{includeMetadataChanges:!0,_a:!0});return Kd(i,g)}(await ma(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function cf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Cu=new Map;/**
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
 */function lf(n,e,t){if(!t)throw new U(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function aw(n,e,t,r){if(e===!0&&r===!0)throw new U(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Pu(n){if(!z.isDocumentKey(n))throw new U(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Nu(n){if(z.isDocumentKey(n))throw new U(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Mi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":G()}function jt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new U(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Mi(n);throw new U(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class ku{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Li{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ku({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ku(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Sv;switch(r.type){case"firstParty":return new Pv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Cu.get(t);r&&(B("ComponentProvider","Removing Datastore"),Cu.delete(t),r.terminate())}(this),Promise.resolve()}}function cw(n,e,t,r={}){var s;const i=(n=jt(n,Li))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&On("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=xe.MOCK_USER;else{c=ey(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new U(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new xe(h)}n._authCredentials=new xv(new rd(c,u))}}/**
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
 */class hn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hn(this.firestore,e,this._query)}}class je{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}}class Ft extends hn{constructor(e,t,r){super(e,t,Ua(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new z(e))}withConverter(e){return new Ft(this.firestore,e,this._path)}}function So(n,e,...t){if(n=ze(n),lf("collection","path",e),n instanceof Li){const r=oe.fromString(e,...t);return Nu(r),new Ft(n,null,r)}{if(!(n instanceof je||n instanceof Ft))throw new U(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(oe.fromString(e,...t));return Nu(r),new Ft(n.firestore,null,r)}}function Du(n,e,...t){if(n=ze(n),arguments.length===1&&(e=sd.newId()),lf("doc","path",e),n instanceof Li){const r=oe.fromString(e,...t);return Pu(r),new je(n,null,new z(r))}{if(!(n instanceof je||n instanceof Ft))throw new U(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(oe.fromString(e,...t));return Pu(r),new je(n.firestore,n instanceof Ft?n.converter:null,new z(r))}}/**
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
 */class Ou{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ud(this,"async_queue_retry"),this.Vu=()=>{const r=Io();r&&B("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Io();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Io();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Lt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Kr(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw gt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Ya.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Vu(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Br extends Li{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Ou,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ou(e),this._firestoreClient=void 0,await e}}}function lw(n,e){const t=typeof n=="object"?n:Kh(),r=typeof n=="string"?n:"(default)",s=ka(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Yg("firestore");i&&cw(s,...i)}return s}function nc(n){if(n._terminated)throw new U(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||uw(n),n._firestoreClient}function uw(n){var e,t,r;const s=n._freezeSettings(),i=function(c,u,h,f){return new zv(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,cf(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new rw(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const u=c?._online.build();return{_offline:c?._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Un{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Un(Te.fromBase64String(e))}catch(t){throw new U(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Un(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class rc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new we(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class uf{constructor(e){this._methodName=e}}/**
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
 */class sc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
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
 */class ic{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const hw=/^__.*__$/;class dw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ln(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xr(e,this.data,t,this.fieldTransforms)}}function hf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class oc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new oc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return li(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(hf(this.Cu)&&hw.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class fw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Di(e)}Qu(e,t,r,s=!1){return new oc({Cu:e,methodName:t,qu:r,path:we.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function df(n){const e=n._freezeSettings(),t=Di(n._databaseId);return new fw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function pw(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);mf("Data must be an object, but it was:",a,r);const c=ff(r,a);let u,h;if(i.merge)u=new Ke(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const y=gw(e,g,t);if(!a.contains(y))throw new U(O.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);vw(f,y)||f.push(y)}u=new Ke(f),h=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=a.fieldTransforms;return new dw(new We(c),u,h)}function mw(n,e,t,r=!1){return ac(t,n.Qu(r?4:3,e))}function ac(n,e){if(pf(n=ze(n)))return mf("Unsupported field value:",e,n),ff(n,e);if(n instanceof uf)return function(r,s){if(!hf(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=ac(c,s.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return h_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=fe.fromDate(r);return{timestampValue:oi(s.serializer,i)}}if(r instanceof fe){const i=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:oi(s.serializer,i)}}if(r instanceof sc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Un)return{bytesValue:Nd(s.serializer,r._byteString)};if(r instanceof je){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:qa(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ic)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw c.Bu("VectorValues must only contain numeric values.");return Ba(c.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Mi(r)}`)}(n,e)}function ff(n,e){const t={};return id(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wn(n,(r,s)=>{const i=ac(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function pf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof fe||n instanceof sc||n instanceof Un||n instanceof je||n instanceof uf||n instanceof ic)}function mf(n,e,t){if(!pf(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Mi(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function gw(n,e,t){if((e=ze(e))instanceof rc)return e._internalPath;if(typeof e=="string")return gf(n,e);throw li("Field path arguments must be of type string or ",n,!1,void 0,t)}const yw=new RegExp("[~\\*/\\[\\]]");function gf(n,e,t){if(e.search(yw)>=0)throw li(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new rc(...e.split("."))._internalPath}catch{throw li(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function li(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new U(O.INVALID_ARGUMENT,c+n+u)}function vw(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class yf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _w(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(cc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class _w extends yf{data(){return super.data()}}function cc(n,e){return typeof e=="string"?gf(n,e):e instanceof rc?e._internalPath:e._delegate._internalPath}/**
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
 */function vf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new U(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lc{}class ww extends lc{}function Ew(n,e,...t){let r=[];e instanceof lc&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof uc).length,c=i.filter(u=>u instanceof ji).length;if(a>1||a>0&&c>0)throw new U(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ji extends ww{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ji(e,t,r)}_apply(e){const t=this._parse(e);return _f(e._query,t),new hn(e.firestore,e.converter,ia(e._query,t))}_parse(e){const t=df(e.firestore);return function(i,a,c,u,h,f,g){let y;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new U(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Lu(g,f);const E=[];for(const C of g)E.push(Mu(u,i,C));y={arrayValue:{values:E}}}else y=Mu(u,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Lu(g,f),y=mw(c,a,g,f==="in"||f==="not-in");return de.create(h,f,y)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Tw(n,e,t){const r=e,s=cc("where",n);return ji._create(s,r,t)}class uc extends lc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new uc(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Qe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)_f(a,u),a=ia(a,u)}(e._query,t),new hn(e.firestore,e.converter,ia(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Mu(n,e,t){if(typeof(t=ze(t))=="string"){if(t==="")throw new U(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pd(e)&&t.indexOf("/")!==-1)throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(oe.fromString(t));if(!z.isDocumentKey(r))throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return nu(n,new z(r))}if(t instanceof je)return nu(n,t._key);throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mi(t)}.`)}function Lu(n,e){if(!Array.isArray(n)||n.length===0)throw new U(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _f(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new U(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class bw{convertValue(e,t="none"){switch(sn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Wn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ue(a.doubleValue));return new ic(i)}convertGeoPoint(e){return new sc(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ma(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Mr(e));default:return null}}convertTimestamp(e){const t=Bt(e);return new fe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=oe.fromString(e);te(Ld(r));const s=new Lr(r.get(1),r.get(3)),i=new z(r.popFirst(5));return s.isEqual(t)||gt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Iw(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class Ar{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wf extends yf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Us(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(cc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Us extends wf{data(e={}){return super.data(e)}}class Ef{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ar(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Us(this._firestore,this._userDataWriter,r.key,r,new Ar(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new Us(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ar(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new Us(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ar(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:Aw(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Aw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class hc extends bw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Un(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,t)}}function Sw(n){n=jt(n,hn);const e=jt(n.firestore,Br),t=nc(e),r=new hc(e);return vf(n._query),ow(t,n._query).then(s=>new Ef(e,r,n,s))}function xw(n,e,t){n=jt(n,je);const r=jt(n.firestore,Br),s=Iw(n.converter,e);return Rw(r,[pw(df(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,pt.none())])}function xo(n,...e){var t,r,s;n=ze(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Vu(e[a])||(i=e[a],a++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Vu(e[a])){const g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let u,h,f;if(n instanceof je)h=jt(n.firestore,Br),f=Ua(n._key.path),u={next:g=>{e[a]&&e[a](Cw(h,n,g))},error:e[a+1],complete:e[a+2]};else{const g=jt(n,hn);h=jt(g.firestore,Br),f=g._query;const y=new hc(h);u={next:E=>{e[a]&&e[a](new Ef(h,y,g,E))},error:e[a+1],complete:e[a+2]},vf(n._query)}return function(y,E,C,A){const b=new of(A),k=new Xd(E,b,C);return y.asyncQueue.enqueueAndForget(async()=>Kd(await ma(y),k)),()=>{b.Za(),y.asyncQueue.enqueueAndForget(async()=>Qd(await ma(y),k))}}(nc(h),f,c,u)}function Rw(n,e){return function(r,s){const i=new Lt;return r.asyncQueue.enqueueAndForget(async()=>Q0(await iw(r),s,i)),i.promise}(nc(n),e)}function Cw(n,e,t){const r=t.docs.get(e._key),s=new hc(n);return new wf(n,s,e._key,r,new Ar(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){qn=s})(zn),Dn(new tn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Br(new Rv(r.getProvider("auth-internal")),new kv(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new U(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lr(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Mt(Jl,"4.7.3",e),Mt(Jl,"4.7.3","esm2017")})();var Ze=function(){return Ze=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ze.apply(this,arguments)};function es(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Pw(n,e,t){if(t||arguments.length===2)for(var r=0,s=e.length,i;r<s;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return n.concat(i||Array.prototype.slice.call(e))}function Tf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Nw=Tf,bf=new Wr("auth","Firebase",Tf());/**
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
 */const ui=new Pa("@firebase/auth");function kw(n,...e){ui.logLevel<=J.WARN&&ui.warn(`Auth (${zn}): ${n}`,...e)}function Bs(n,...e){ui.logLevel<=J.ERROR&&ui.error(`Auth (${zn}): ${n}`,...e)}/**
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
 */function vt(n,...e){throw dc(n,...e)}function nt(n,...e){return dc(n,...e)}function If(n,e,t){const r=Object.assign(Object.assign({},Nw()),{[e]:t});return new Wr("auth","Firebase",r).create(e,{appName:n.name})}function Yt(n){return If(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return bf.create(n,...e)}function W(n,e,...t){if(!n)throw dc(e,...t)}function ht(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Bs(e),new Error(e)}function _t(n,e){n||ht(e)}/**
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
 */function ga(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Dw(){return ju()==="http:"||ju()==="https:"}function ju(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Ow(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dw()||sy()||"connection"in navigator)?navigator.onLine:!0}function Vw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ts{constructor(e,t){this.shortDelay=e,this.longDelay=t,_t(t>e,"Short delay should be less than long delay!"),this.isMobile=ty()||iy()}get(){return Ow()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function fc(n,e){_t(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Af{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Mw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Lw=new ts(3e4,6e4);function pc(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Kn(n,e,t,r,s={}){return Sf(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Gr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:u},i);return ry()||(h.referrerPolicy="no-referrer"),Af.fetch()(xf(n,n.config.apiHost,t,c),h)})}async function Sf(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Mw),e);try{const s=new Fw(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Cs(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cs(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Cs(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Cs(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw If(n,f,h);vt(n,f)}}catch(s){if(s instanceof wt)throw s;vt(n,"network-request-failed",{message:String(s)})}}async function jw(n,e,t,r,s={}){const i=await Kn(n,e,t,r,s);return"mfaPendingCredential"in i&&vt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function xf(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?fc(n.config,s):`${n.config.apiScheme}://${s}`}class Fw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),Lw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Cs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=nt(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function Uw(n,e){return Kn(n,"POST","/v1/accounts:delete",e)}async function Rf(n,e){return Kn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Pr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bw(n,e=!1){const t=ze(n),r=await t.getIdToken(e),s=mc(r);W(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:Pr(Ro(s.auth_time)),issuedAtTime:Pr(Ro(s.iat)),expirationTime:Pr(Ro(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Ro(n){return Number(n)*1e3}function mc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Bs("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bh(t);return s?JSON.parse(s):(Bs("Failed to decode base64 JWT payload"),null)}catch(s){return Bs("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Fu(n){const e=mc(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $r(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof wt&&$w(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function $w({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class zw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ya{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pr(this.lastLoginAt),this.creationTime=Pr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hi(n){var e;const t=n.auth,r=await n.getIdToken(),s=await $r(n,Rf(t,{idToken:r}));W(s?.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Cf(i.providerUserInfo):[],c=Ww(n.providerData,a),u=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!c?.length,f=u?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new ya(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function qw(n){const e=ze(n);await hi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ww(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Cf(n){return n.map(e=>{var{providerId:t}=e,r=es(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Gw(n,e){const t=await Sf(n,{},async()=>{const r=Gr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=xf(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Af.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Hw(n,e){return Kn(n,"POST","/v2/accounts:revokeToken",pc(n,e))}/**
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
 */class An{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");const t=Fu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Gw(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new An;return r&&(W(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new An,this.toJSON())}_performRefresh(){return ht("not implemented")}}/**
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
 */function It(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class dt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=es(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ya(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await $r(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Bw(this,e)}reload(){return qw(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new dt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await hi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kt(this.auth.app))return Promise.reject(Yt(this.auth));const e=await this.getIdToken();return await $r(this,Uw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,u,h,f;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,y=(s=t.email)!==null&&s!==void 0?s:void 0,E=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,A=(c=t.tenantId)!==null&&c!==void 0?c:void 0,b=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,k=(h=t.createdAt)!==null&&h!==void 0?h:void 0,D=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:L,emailVerified:M,isAnonymous:F,providerData:$,stsTokenManager:_}=t;W(L&&_,e,"internal-error");const v=An.fromJSON(this.name,_);W(typeof L=="string",e,"internal-error"),It(g,e.name),It(y,e.name),W(typeof M=="boolean",e,"internal-error"),W(typeof F=="boolean",e,"internal-error"),It(E,e.name),It(C,e.name),It(A,e.name),It(b,e.name),It(k,e.name),It(D,e.name);const w=new dt({uid:L,auth:e,email:y,emailVerified:M,displayName:g,isAnonymous:F,photoURL:C,phoneNumber:E,tenantId:A,stsTokenManager:v,createdAt:k,lastLoginAt:D});return $&&Array.isArray($)&&(w.providerData=$.map(S=>Object.assign({},S))),b&&(w._redirectEventId=b),w}static async _fromIdTokenResponse(e,t,r=!1){const s=new An;s.updateFromServerResponse(t);const i=new dt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await hi(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];W(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Cf(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,c=new An;c.updateFromIdToken(r);const u=new dt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ya(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(u,h),u}}/**
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
 */const Uu=new Map;function ft(n){_t(n instanceof Function,"Expected a class definition");let e=Uu.get(n);return e?(_t(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Uu.set(n,e),e)}/**
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
 */class Pf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Pf.type="NONE";const Bu=Pf;/**
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
 */function $s(n,e,t){return`firebase:${n}:${e}:${t}`}class Sn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=$s(this.userKey,s.apiKey,i),this.fullPersistenceKey=$s("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Sn(ft(Bu),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||ft(Bu);const a=$s(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(a);if(f){const g=dt._fromJSON(e,f);h!==i&&(c=g),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Sn(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Sn(i,e,r))}}/**
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
 */function $u(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Of(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mf(e))return"Blackberry";if(Lf(e))return"Webos";if(kf(e))return"Safari";if((e.includes("chrome/")||Df(e))&&!e.includes("edge/"))return"Chrome";if(Vf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Nf(n=Ce()){return/firefox\//i.test(n)}function kf(n=Ce()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Df(n=Ce()){return/crios\//i.test(n)}function Of(n=Ce()){return/iemobile/i.test(n)}function Vf(n=Ce()){return/android/i.test(n)}function Mf(n=Ce()){return/blackberry/i.test(n)}function Lf(n=Ce()){return/webos/i.test(n)}function gc(n=Ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Kw(n=Ce()){var e;return gc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Qw(){return oy()&&document.documentMode===10}function jf(n=Ce()){return gc(n)||Vf(n)||Lf(n)||Mf(n)||/windows phone/i.test(n)||Of(n)}/**
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
 */function Ff(n,e=[]){let t;switch(n){case"Browser":t=$u(Ce());break;case"Worker":t=`${$u(Ce())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${zn}/${r}`}/**
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
 */class Xw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function Jw(n,e={}){return Kn(n,"GET","/v2/passwordPolicy",pc(n,e))}/**
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
 */const Yw=6;class Zw{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Yw,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class eE{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zu(this),this.idTokenSubscription=new zu(this),this.beforeStateQueue=new Xw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ft(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Sn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Rf(this,{idToken:e}),r=await dt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(kt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&u?.user&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await hi(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Vw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kt(this.app))return Promise.reject(Yt(this));const t=e?ze(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kt(this.app)?Promise.reject(Yt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kt(this.app)?Promise.reject(Yt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Jw(this),t=new Zw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Hw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ft(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await Sn.create(this,[ft(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ff(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&kw(`Error while retrieving App Check token: ${t.error}`),t?.token}}function yc(n){return ze(n)}class zu{constructor(e){this.auth=e,this.observer=null,this.addObserver=py(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let vc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tE(n){vc=n}function nE(n){return vc.loadJS(n)}function rE(){return vc.gapiScript}function sE(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function iE(n,e){const t=ka(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Zs(i,e??{}))return s;vt(s,"already-initialized")}return t.initialize({options:e})}function oE(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(ft);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function aE(n,e,t){const r=yc(n);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Uf(e),{host:a,port:c}=cE(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),lE()}function Uf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function cE(n){const e=Uf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:qu(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:qu(a)}}}function qu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function lE(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Bf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ht("not implemented")}_getIdTokenResponse(e){return ht("not implemented")}_linkToIdToken(e,t){return ht("not implemented")}_getReauthenticationResolver(e){return ht("not implemented")}}/**
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
 */async function xn(n,e){return jw(n,"POST","/v1/accounts:signInWithIdp",pc(n,e))}/**
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
 */const uE="http://localhost";class on extends Bf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new on(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):vt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=es(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new on(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return xn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,xn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xn(e,t)}buildRequest(){const e={requestUri:uE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Gr(t)}return e}}/**
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
 */class $f{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ns extends $f{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Rt extends ns{constructor(){super("facebook.com")}static credential(e){return on._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rt.PROVIDER_ID="facebook.com";/**
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
 */class Ct extends ns{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return on._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ct.credential(t,r)}catch{return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com";Ct.PROVIDER_ID="google.com";/**
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
 */class Pt extends ns{constructor(){super("github.com")}static credential(e){return on._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.GITHUB_SIGN_IN_METHOD="github.com";Pt.PROVIDER_ID="github.com";/**
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
 */class Nt extends ns{constructor(){super("twitter.com")}static credential(e,t){return on._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Nt.credential(t,r)}catch{return null}}}Nt.TWITTER_SIGN_IN_METHOD="twitter.com";Nt.PROVIDER_ID="twitter.com";/**
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
 */class Bn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await dt._fromIdTokenResponse(e,r,s),a=Wu(r);return new Bn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Wu(r);return new Bn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Wu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class di extends wt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,di.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new di(e,t,r,s)}}function zf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?di._fromErrorAndOperation(n,i,e,r):i})}async function hE(n,e,t=!1){const r=await $r(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Bn._forOperation(n,"link",r)}/**
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
 */async function dE(n,e,t=!1){const{auth:r}=n;if(kt(r.app))return Promise.reject(Yt(r));const s="reauthenticate";try{const i=await $r(n,zf(r,s,e,n),t);W(i.idToken,r,"internal-error");const a=mc(i.idToken);W(a,r,"internal-error");const{sub:c}=a;return W(n.uid===c,r,"user-mismatch"),Bn._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&vt(r,"user-mismatch"),i}}/**
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
 */async function fE(n,e,t=!1){if(kt(n.app))return Promise.reject(Yt(n));const r="signIn",s=await zf(n,r,e),i=await Bn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function pE(n,e,t,r){return ze(n).onIdTokenChanged(e,t,r)}function mE(n,e,t){return ze(n).beforeAuthStateChanged(e,t)}const fi="__sak";/**
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
 */class qf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(fi,"1"),this.storage.removeItem(fi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const gE=1e3,yE=10;class Wf extends qf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Qw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,yE):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},gE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wf.type="LOCAL";const vE=Wf;/**
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
 */class Gf extends qf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Gf.type="SESSION";const Hf=Gf;/**
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
 */function _E(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Fi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Fi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),u=await _E(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fi.receivers=[];/**
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
 */function _c(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class wE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const h=_c("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const y=g;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(y.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function rt(){return window}function EE(n){rt().location.href=n}/**
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
 */function Kf(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function TE(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bE(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function IE(){return Kf()?self:null}/**
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
 */const Qf="firebaseLocalStorageDb",AE=1,pi="firebaseLocalStorage",Xf="fbase_key";class rs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ui(n,e){return n.transaction([pi],e?"readwrite":"readonly").objectStore(pi)}function SE(){const n=indexedDB.deleteDatabase(Qf);return new rs(n).toPromise()}function va(){const n=indexedDB.open(Qf,AE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(pi,{keyPath:Xf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(pi)?e(r):(r.close(),await SE(),e(await va()))})})}async function Gu(n,e,t){const r=Ui(n,!0).put({[Xf]:e,value:t});return new rs(r).toPromise()}async function xE(n,e){const t=Ui(n,!1).get(e),r=await new rs(t).toPromise();return r===void 0?null:r.value}function Hu(n,e){const t=Ui(n,!0).delete(e);return new rs(t).toPromise()}const RE=800,CE=3;class Jf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await va(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>CE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fi._getInstance(IE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await TE(),!this.activeServiceWorker)return;this.sender=new wE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await va();return await Gu(e,fi,"1"),await Hu(e,fi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>xE(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Hu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ui(s,!1).getAll();return new rs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jf.type="LOCAL";const PE=Jf;new ts(3e4,6e4);/**
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
 */function NE(n,e){return e?ft(e):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class wc extends Bf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function kE(n){return fE(n.auth,new wc(n),n.bypassAuthState)}function DE(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),dE(t,new wc(n),n.bypassAuthState)}async function OE(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),hE(t,new wc(n),n.bypassAuthState)}/**
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
 */class Yf{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kE;case"linkViaPopup":case"linkViaRedirect":return OE;case"reauthViaPopup":case"reauthViaRedirect":return DE;default:vt(this.auth,"internal-error")}}resolve(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const VE=new ts(2e3,1e4);class bn extends Yf{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){_t(this.filter.length===1,"Popup operations only handle one event");const e=_c();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VE.get())};e()}}bn.currentPopupAction=null;/**
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
 */const ME="pendingRedirect",zs=new Map;class LE extends Yf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=zs.get(this.auth._key());if(!e){try{const r=await jE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}zs.set(this.auth._key(),e)}return this.bypassAuthState||zs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jE(n,e){const t=BE(e),r=UE(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function FE(n,e){zs.set(n._key(),e)}function UE(n){return ft(n._redirectPersistence)}function BE(n){return $s(ME,n.config.apiKey,n.name)}async function $E(n,e,t=!1){if(kt(n.app))return Promise.reject(Yt(n));const r=yc(n),s=NE(r,e),a=await new LE(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const zE=10*60*1e3;class qE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Zf(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(nt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ku(e))}saveEventToCache(e){this.cachedEventUids.add(Ku(e)),this.lastProcessedEventTime=Date.now()}}function Ku(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Zf({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function WE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zf(n);default:return!1}}/**
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
 */async function GE(n,e={}){return Kn(n,"GET","/v1/projects",e)}/**
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
 */const HE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KE=/^https?/;async function QE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await GE(n);for(const t of e)try{if(XE(t))return}catch{}vt(n,"unauthorized-domain")}function XE(n){const e=ga(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!KE.test(t))return!1;if(HE.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const JE=new ts(3e4,6e4);function Qu(){const n=rt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function YE(n){return new Promise((e,t)=>{var r,s,i;function a(){Qu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qu(),t(nt(n,"network-request-failed"))},timeout:JE.get()})}if(!((s=(r=rt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=rt().gapi)===null||i===void 0)&&i.load)a();else{const c=sE("iframefcb");return rt()[c]=()=>{gapi.load?a():t(nt(n,"network-request-failed"))},nE(`${rE()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw qs=null,e})}let qs=null;function ZE(n){return qs=qs||YE(n),qs}/**
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
 */const eT=new ts(5e3,15e3),tT="__/auth/iframe",nT="emulator/auth/iframe",rT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iT(n){const e=n.config;W(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?fc(e,nT):`https://${n.config.authDomain}/${tT}`,r={apiKey:e.apiKey,appName:n.name,v:zn},s=sT.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Gr(r).slice(1)}`}async function oT(n){const e=await ZE(n),t=rt().gapi;return W(t,n,"internal-error"),e.open({where:document.body,url:iT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=nt(n,"network-request-failed"),c=rt().setTimeout(()=>{i(a)},eT.get());function u(){rt().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const aT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cT=500,lT=600,uT="_blank",hT="http://localhost";class Xu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dT(n,e,t,r=cT,s=lT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},aT),{width:r.toString(),height:s.toString(),top:i,left:a}),h=Ce().toLowerCase();t&&(c=Df(h)?uT:t),Nf(h)&&(e=e||hT,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[E,C])=>`${y}${E}=${C},`,"");if(Kw(h)&&c!=="_self")return fT(e||"",c),new Xu(null);const g=window.open(e||"",c,f);W(g,n,"popup-blocked");try{g.focus()}catch{}return new Xu(g)}function fT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const pT="__/auth/handler",mT="emulator/auth/handler",gT=encodeURIComponent("fac");async function Ju(n,e,t,r,s,i){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:zn,eventId:s};if(e instanceof $f){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",fy(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof ns){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),h=u?`#${gT}=${encodeURIComponent(u)}`:"";return`${yT(n)}?${Gr(c).slice(1)}${h}`}function yT({config:n}){return n.emulator?fc(n,mT):`https://${n.authDomain}/${pT}`}/**
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
 */const Co="webStorageSupport";class vT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hf,this._completeRedirectFn=$E,this._overrideRedirectResult=FE}async _openPopup(e,t,r,s){var i;_t((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Ju(e,t,r,ga(),s);return dT(e,a,_c())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Ju(e,t,r,ga(),s);return EE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(_t(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await oT(e),r=new qE(e);return t.register("authEvent",s=>(W(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Co,{type:Co},s=>{var i;const a=(i=s?.[0])===null||i===void 0?void 0:i[Co];a!==void 0&&t(!!a),vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=QE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return jf()||kf()||gc()}}const _T=vT;var Yu="@firebase/auth",Zu="1.7.9";/**
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
 */class wT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ET(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TT(n){Dn(new tn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ff(n)},h=new eE(r,s,i,u);return oE(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Dn(new tn("auth-internal",e=>{const t=yc(e.getProvider("auth").getImmediate());return(r=>new wT(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(Yu,Zu,ET(n)),Mt(Yu,Zu,"esm2017")}/**
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
 */const bT=5*60,IT=qh("authIdTokenMaxAge")||bT;let eh=null;const AT=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>IT)return;const s=t?.token;eh!==s&&(eh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ST(n=Kh()){const e=ka(n,"auth");if(e.isInitialized())return e.getImmediate();const t=iE(n,{popupRedirectResolver:_T,persistence:[PE,vE,Hf]}),r=qh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=AT(i.toString());mE(t,a,()=>a(t.currentUser)),pE(t,c=>a(c))}}const s=$h("auth");return s&&aE(t,`http://${s}`),t}function xT(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}tE({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=nt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",xT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TT("Browser");const RT={apiKey:"AIzaSyAlo0vehn8h6ihyTOvDpiNEuKuGqGJCW2s",authDomain:"farming-life-in-another-world.firebaseapp.com",projectId:"farming-life-in-another-world",storageBucket:"farming-life-in-another-world.firebasestorage.app",messagingSenderId:"632746421607",appId:"1:632746421607:web:a2ba7471b6e00227aa53c2",measurementId:"G-NZPMZJ4YBH"},ep=Hh(RT),_r=lw(ep);ST(ep);const lt={async saveGameState(n,e){try{const t=Du(_r,"gameStates",n),r={user:e.user,inventory:e.inventory,crops:e.crops,lastSaved:e.lastSaved};await xw(t,r)}catch(t){console.error("Error saving game state:",t)}},subscribeToGameState(n,e){const t=Du(_r,"gameStates",n);return xo(t,r=>{r.exists()&&e(r.data())})},subscribeToOnlineUsers(n){const t=Date.now()-5*60*1e3,r=Ew(So(_r,"gameStates"),Tw("lastSaved",">",t));return xo(r,s=>{const i=s.docs.map(a=>a.id);n(i)})},async getLeaderboard(){return(await Sw(So(_r,"gameStates"))).docs.map(e=>e.data().user).filter(e=>e).sort((e,t)=>t.level-e.level||t.coins-e.coins)},subscribeToLeaderboard(n){return xo(So(_r,"gameStates"),e=>{const t=e.docs.map(r=>r.data().user).filter(r=>r).sort((r,s)=>s.level-r.level||s.coins-r.coins);n(t)})}},CT=1e3,gn=n=>({user:n.user,inventory:n.inventory,crops:n.crops,lastSaved:n.lastSaved}),ye=Ng()(qg((n,e)=>({user:null,inventory:[],crops:[],lastSaved:Date.now(),login:t=>{n(r=>{r.user=t,lt.subscribeToGameState(t.username,s=>{n(i=>{i.inventory=s.inventory||[],i.crops=s.crops||[],i.user=s.user||t})})})},logout:()=>n(t=>{t.user=null,t.inventory=[],t.crops=[]}),updateInventory:t=>n(r=>{r.inventory=t,r.user&&lt.saveGameState(r.user.username,gn({...r,inventory:t}))}),addToInventory:t=>n(r=>{const s=r.inventory.find(i=>i.itemId===t.itemId&&i.type===t.type);s?s.quantity+=t.quantity:r.inventory.push(t),r.user&&lt.saveGameState(r.user.username,gn(r))}),removeFromInventory:t=>n(r=>{r.inventory=r.inventory.filter(s=>s.id!==t),r.user&&lt.saveGameState(r.user.username,gn(r))}),updateCrops:t=>n(r=>{r.crops=t,r.user&&lt.saveGameState(r.user.username,gn(r))}),updateUser:t=>n(r=>{r.user=t,t&&lt.saveGameState(t.username,gn({...r,user:t}))}),autoSave:()=>{const t=e(),r=Date.now();t.user&&r-t.lastSaved>=CT&&(lt.saveGameState(t.user.username,gn({...t,lastSaved:r})),n(s=>{s.lastSaved=r}))}}))),PT=1,NT=1e3;let Po=0;function kT(){return Po=(Po+1)%Number.MAX_VALUE,Po.toString()}const No=new Map,th=n=>{if(No.has(n))return;const e=setTimeout(()=>{No.delete(n),Nr({type:"REMOVE_TOAST",toastId:n})},NT);No.set(n,e)},DT=(n,e)=>{switch(e.type){case"ADD_TOAST":return{...n,toasts:[e.toast,...n.toasts].slice(0,PT)};case"UPDATE_TOAST":return{...n,toasts:n.toasts.map(t=>t.id===e.toast.id?{...t,...e.toast}:t)};case"DISMISS_TOAST":{const{toastId:t}=e;return t?th(t):n.toasts.forEach(r=>{th(r.id)}),{...n,toasts:n.toasts.map(r=>r.id===t||t===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return e.toastId===void 0?{...n,toasts:[]}:{...n,toasts:n.toasts.filter(t=>t.id!==e.toastId)}}},Ws=[];let Gs={toasts:[]};function Nr(n){Gs=DT(Gs,n),Ws.forEach(e=>{e(Gs)})}function OT({...n}){const e=kT(),t=s=>Nr({type:"UPDATE_TOAST",toast:{...s,id:e}}),r=()=>Nr({type:"DISMISS_TOAST",toastId:e});return Nr({type:"ADD_TOAST",toast:{...n,id:e,open:!0,onOpenChange:s=>{s||r()}}}),setTimeout(()=>{r()},1e3),{id:e,dismiss:r,update:t}}function it(){const[n,e]=I.useState(Gs);return I.useEffect(()=>(Ws.push(e),()=>{const t=Ws.indexOf(e);t>-1&&Ws.splice(t,1)}),[n]),{...n,toast:OT,dismiss:t=>Nr({type:"DISMISS_TOAST",toastId:t})}}function VT(){const[n,e]=I.useState(""),[t,r]=I.useState(""),s=ye(u=>u.login),i=_i(),{toast:a}=it(),c=async u=>{u.preventDefault();const f=JSON.parse(localStorage.getItem("users")||"[]").find(E=>E.username===n&&E.password===t);if(!f){a({title:"Erreur !",description:"Nom d'utilisateur ou Mot de passe invalide.",variant:"destructive"});return}const g=localStorage.getItem(`gameState_${n}`);let y={id:f.id||Date.now().toString(),username:n,level:0,coins:10,experience:0,unlockedPlots:1,completedQuests:[],stats:{totalPlanted:0,totalHarvested:0,totalEarned:0,uniqueCropsPlanted:0}};if(g){const E=JSON.parse(g);E.user&&(y=E.user)}s(y),i("/game")};return p.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-900",children:p.jsxs("div",{className:"bg-gray-800 p-8 rounded-lg shadow-xl w-96",children:[p.jsx("h2",{className:"text-2xl font-bold text-white mb-6 text-center",children:"Connexion"}),p.jsxs("form",{onSubmit:c,className:"space-y-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-gray-300 mb-2",children:"Nom d'utilisateur"}),p.jsx("input",{type:"text",value:n,onChange:u=>e(u.target.value),className:"w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none",required:!0})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-gray-300 mb-2",children:"Mot de passe"}),p.jsx("input",{type:"password",value:t,onChange:u=>r(u.target.value),className:"w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none",required:!0})]}),p.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200",children:"Se connecter"}),p.jsxs("p",{className:"text-center text-gray-400",children:["Pas encore de compte ?"," ",p.jsx("button",{type:"button",onClick:()=>i("/register"),className:"text-blue-400 hover:text-blue-300",children:"S'inscrire"})]})]})]})})}function MT(){const[n,e]=I.useState(""),[t,r]=I.useState(""),[s,i]=I.useState(""),a=_i(),{toast:c}=it(),u=async h=>{if(h.preventDefault(),t!==s){c({title:"Erreur",description:"Les mots de passes saisies ne correspondent pas !",variant:"destructive"});return}const f=JSON.parse(localStorage.getItem("users")||"[]");if(f.find(y=>y.username===n)){c({title:"Erreur",description:"Nom d'utilisateur déjà pris.",variant:"destructive"});return}const g={username:n,password:t,createdAt:new Date().toISOString()};f.push(g),localStorage.setItem("users",JSON.stringify(f)),c({title:"Validé !",description:"Votre compte a été créé."}),a("/login")};return p.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-900",children:p.jsxs("div",{className:"bg-gray-800 p-8 rounded-lg shadow-xl w-96",children:[p.jsx("h2",{className:"text-2xl font-bold text-white mb-6 text-center",children:"Créer un compte"}),p.jsxs("form",{onSubmit:u,className:"space-y-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-gray-300 mb-2",children:"Nom d'utilisateur"}),p.jsx("input",{type:"text",value:n,onChange:h=>e(h.target.value),className:"w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none",required:!0})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-gray-300 mb-2",children:"Mot de passe"}),p.jsx("input",{type:"password",value:t,onChange:h=>r(h.target.value),className:"w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none",required:!0})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-gray-300 mb-2",children:"Confirmer le mot de passe"}),p.jsx("input",{type:"password",value:s,onChange:h=>i(h.target.value),className:"w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none",required:!0})]}),p.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200",children:"S'inscrire"}),p.jsxs("p",{className:"text-center text-gray-400",children:["Déjà un compte ?"," ",p.jsx("button",{type:"button",onClick:()=>a("/login"),className:"text-blue-400 hover:text-blue-300",children:"Se connecter"})]})]})]})})}var tp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},nh=re.createContext&&re.createContext(tp),LT=["attr","size","title"];function jT(n,e){if(n==null)return{};var t=FT(n,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function FT(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function mi(){return mi=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},mi.apply(this,arguments)}function rh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,r)}return t}function gi(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?rh(Object(t),!0).forEach(function(r){UT(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):rh(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function UT(n,e,t){return e=BT(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function BT(n){var e=$T(n,"string");return typeof e=="symbol"?e:e+""}function $T(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function np(n){return n&&n.map((e,t)=>re.createElement(e.tag,gi({key:t},e.attr),np(e.child)))}function Pe(n){return e=>re.createElement(zT,mi({attr:gi({},n.attr)},e),np(n.child))}function zT(n){var e=t=>{var{attr:r,size:s,title:i}=n,a=jT(n,LT),c=s||t.size||"1em",u;return t.className&&(u=t.className),n.className&&(u=(u?u+" ":"")+n.className),re.createElement("svg",mi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,a,{className:u,style:gi(gi({color:n.color||t.color},t.style),n.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),i&&re.createElement("title",null,i),n.children)};return nh!==void 0?re.createElement(nh.Consumer,null,t=>e(t)):e(tp)}function qT(n){return Pe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(n)}function rp(n){return Pe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(n)}function sh(n){return Pe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"},child:[]}]})(n)}function WT(n){return Pe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(n)}function $n(n){return Pe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"},child:[]}]})(n)}function yi(n){return Pe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(n)}function GT(n){return Pe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2 27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z"},child:[]}]})(n)}function HT(n){return Pe({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"},child:[]}]})(n)}function KT(n){return Pe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(n)}function Ec(n){return Pe({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(n)}function Qn(n){return Pe({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(n)}function QT(n){return Pe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(n)}function XT(n){return Pe({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"},child:[]}]})(n)}function JT(n){return Pe({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"},child:[]}]})(n)}function YT(n){return Pe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(n)}function ZT(n){return Pe({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(n)}function ge(n,e,{checkForDefaultPrevented:t=!0}={}){return function(s){if(n?.(s),t===!1||!s.defaultPrevented)return e?.(s)}}function eb(n,e){typeof n=="function"?n(e):n!=null&&(n.current=e)}function sp(...n){return e=>n.forEach(t=>eb(t,e))}function Xe(...n){return I.useCallback(sp(...n),n)}function tb(n,e){const t=I.createContext(e),r=i=>{const{children:a,...c}=i,u=I.useMemo(()=>c,Object.values(c));return p.jsx(t.Provider,{value:u,children:a})};r.displayName=n+"Provider";function s(i){const a=I.useContext(t);if(a)return a;if(e!==void 0)return e;throw new Error(`\`${i}\` must be used within \`${n}\``)}return[r,s]}function ip(n,e=[]){let t=[];function r(i,a){const c=I.createContext(a),u=t.length;t=[...t,a];const h=g=>{const{scope:y,children:E,...C}=g,A=y?.[n]?.[u]||c,b=I.useMemo(()=>C,Object.values(C));return p.jsx(A.Provider,{value:b,children:E})};h.displayName=i+"Provider";function f(g,y){const E=y?.[n]?.[u]||c,C=I.useContext(E);if(C)return C;if(a!==void 0)return a;throw new Error(`\`${g}\` must be used within \`${i}\``)}return[h,f]}const s=()=>{const i=t.map(a=>I.createContext(a));return function(c){const u=c?.[n]||i;return I.useMemo(()=>({[`__scope${n}`]:{...c,[n]:u}}),[c,u])}};return s.scopeName=n,[r,nb(s,...e)]}function nb(...n){const e=n[0];if(n.length===1)return e;const t=()=>{const r=n.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(i){const a=r.reduce((c,{useScope:u,scopeName:h})=>{const g=u(i)[`__scope${h}`];return{...c,...g}},{});return I.useMemo(()=>({[`__scope${e.scopeName}`]:a}),[a])}};return t.scopeName=e.scopeName,t}var zr=globalThis?.document?I.useLayoutEffect:()=>{},rb=Km.useId||(()=>{}),sb=0;function ko(n){const[e,t]=I.useState(rb());return zr(()=>{n||t(r=>r??String(sb++))},[n]),n||(e?`radix-${e}`:"")}function Je(n){const e=I.useRef(n);return I.useEffect(()=>{e.current=n}),I.useMemo(()=>(...t)=>e.current?.(...t),[])}function op({prop:n,defaultProp:e,onChange:t=()=>{}}){const[r,s]=ib({defaultProp:e,onChange:t}),i=n!==void 0,a=i?n:r,c=Je(t),u=I.useCallback(h=>{if(i){const g=typeof h=="function"?h(n):h;g!==n&&c(g)}else s(h)},[i,n,s,c]);return[a,u]}function ib({defaultProp:n,onChange:e}){const t=I.useState(n),[r]=t,s=I.useRef(r),i=Je(e);return I.useEffect(()=>{s.current!==r&&(i(r),s.current=r)},[r,s,i]),t}var qr=I.forwardRef((n,e)=>{const{children:t,...r}=n,s=I.Children.toArray(t),i=s.find(ab);if(i){const a=i.props.children,c=s.map(u=>u===i?I.Children.count(a)>1?I.Children.only(null):I.isValidElement(a)?a.props.children:null:u);return p.jsx(_a,{...r,ref:e,children:I.isValidElement(a)?I.cloneElement(a,void 0,c):null})}return p.jsx(_a,{...r,ref:e,children:t})});qr.displayName="Slot";var _a=I.forwardRef((n,e)=>{const{children:t,...r}=n;if(I.isValidElement(t)){const s=lb(t);return I.cloneElement(t,{...cb(r,t.props),ref:e?sp(e,s):s})}return I.Children.count(t)>1?I.Children.only(null):null});_a.displayName="SlotClone";var ob=({children:n})=>p.jsx(p.Fragment,{children:n});function ab(n){return I.isValidElement(n)&&n.type===ob}function cb(n,e){const t={...e};for(const r in e){const s=n[r],i=e[r];/^on[A-Z]/.test(r)?s&&i?t[r]=(...c)=>{i(...c),s(...c)}:s&&(t[r]=s):r==="style"?t[r]={...s,...i}:r==="className"&&(t[r]=[s,i].filter(Boolean).join(" "))}return{...n,...t}}function lb(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}var ub=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Ne=ub.reduce((n,e)=>{const t=I.forwardRef((r,s)=>{const{asChild:i,...a}=r,c=i?qr:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),p.jsx(c,{...a,ref:s})});return t.displayName=`Primitive.${e}`,{...n,[e]:t}},{});function ap(n,e){n&&xa.flushSync(()=>n.dispatchEvent(e))}function hb(n,e=globalThis?.document){const t=Je(n);I.useEffect(()=>{const r=s=>{s.key==="Escape"&&t(s)};return e.addEventListener("keydown",r,{capture:!0}),()=>e.removeEventListener("keydown",r,{capture:!0})},[t,e])}var db="DismissableLayer",wa="dismissableLayer.update",fb="dismissableLayer.pointerDownOutside",pb="dismissableLayer.focusOutside",ih,cp=I.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Tc=I.forwardRef((n,e)=>{const{disableOutsidePointerEvents:t=!1,onEscapeKeyDown:r,onPointerDownOutside:s,onFocusOutside:i,onInteractOutside:a,onDismiss:c,...u}=n,h=I.useContext(cp),[f,g]=I.useState(null),y=f?.ownerDocument??globalThis?.document,[,E]=I.useState({}),C=Xe(e,_=>g(_)),A=Array.from(h.layers),[b]=[...h.layersWithOutsidePointerEventsDisabled].slice(-1),k=A.indexOf(b),D=f?A.indexOf(f):-1,L=h.layersWithOutsidePointerEventsDisabled.size>0,M=D>=k,F=gb(_=>{const v=_.target,w=[...h.branches].some(S=>S.contains(v));!M||w||(s?.(_),a?.(_),_.defaultPrevented||c?.())},y),$=yb(_=>{const v=_.target;[...h.branches].some(S=>S.contains(v))||(i?.(_),a?.(_),_.defaultPrevented||c?.())},y);return hb(_=>{D===h.layers.size-1&&(r?.(_),!_.defaultPrevented&&c&&(_.preventDefault(),c()))},y),I.useEffect(()=>{if(f)return t&&(h.layersWithOutsidePointerEventsDisabled.size===0&&(ih=y.body.style.pointerEvents,y.body.style.pointerEvents="none"),h.layersWithOutsidePointerEventsDisabled.add(f)),h.layers.add(f),oh(),()=>{t&&h.layersWithOutsidePointerEventsDisabled.size===1&&(y.body.style.pointerEvents=ih)}},[f,y,t,h]),I.useEffect(()=>()=>{f&&(h.layers.delete(f),h.layersWithOutsidePointerEventsDisabled.delete(f),oh())},[f,h]),I.useEffect(()=>{const _=()=>E({});return document.addEventListener(wa,_),()=>document.removeEventListener(wa,_)},[]),p.jsx(Ne.div,{...u,ref:C,style:{pointerEvents:L?M?"auto":"none":void 0,...n.style},onFocusCapture:ge(n.onFocusCapture,$.onFocusCapture),onBlurCapture:ge(n.onBlurCapture,$.onBlurCapture),onPointerDownCapture:ge(n.onPointerDownCapture,F.onPointerDownCapture)})});Tc.displayName=db;var mb="DismissableLayerBranch",lp=I.forwardRef((n,e)=>{const t=I.useContext(cp),r=I.useRef(null),s=Xe(e,r);return I.useEffect(()=>{const i=r.current;if(i)return t.branches.add(i),()=>{t.branches.delete(i)}},[t.branches]),p.jsx(Ne.div,{...n,ref:s})});lp.displayName=mb;function gb(n,e=globalThis?.document){const t=Je(n),r=I.useRef(!1),s=I.useRef(()=>{});return I.useEffect(()=>{const i=c=>{if(c.target&&!r.current){let u=function(){up(fb,t,h,{discrete:!0})};const h={originalEvent:c};c.pointerType==="touch"?(e.removeEventListener("click",s.current),s.current=u,e.addEventListener("click",s.current,{once:!0})):u()}else e.removeEventListener("click",s.current);r.current=!1},a=window.setTimeout(()=>{e.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(a),e.removeEventListener("pointerdown",i),e.removeEventListener("click",s.current)}},[e,t]),{onPointerDownCapture:()=>r.current=!0}}function yb(n,e=globalThis?.document){const t=Je(n),r=I.useRef(!1);return I.useEffect(()=>{const s=i=>{i.target&&!r.current&&up(pb,t,{originalEvent:i},{discrete:!1})};return e.addEventListener("focusin",s),()=>e.removeEventListener("focusin",s)},[e,t]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function oh(){const n=new CustomEvent(wa);document.dispatchEvent(n)}function up(n,e,t,{discrete:r}){const s=t.originalEvent.target,i=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:t});e&&s.addEventListener(n,e,{once:!0}),r?ap(s,i):s.dispatchEvent(i)}var vb=Tc,_b=lp,Do="focusScope.autoFocusOnMount",Oo="focusScope.autoFocusOnUnmount",ah={bubbles:!1,cancelable:!0},wb="FocusScope",hp=I.forwardRef((n,e)=>{const{loop:t=!1,trapped:r=!1,onMountAutoFocus:s,onUnmountAutoFocus:i,...a}=n,[c,u]=I.useState(null),h=Je(s),f=Je(i),g=I.useRef(null),y=Xe(e,A=>u(A)),E=I.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;I.useEffect(()=>{if(r){let A=function(L){if(E.paused||!c)return;const M=L.target;c.contains(M)?g.current=M:xt(g.current,{select:!0})},b=function(L){if(E.paused||!c)return;const M=L.relatedTarget;M!==null&&(c.contains(M)||xt(g.current,{select:!0}))},k=function(L){if(document.activeElement===document.body)for(const F of L)F.removedNodes.length>0&&xt(c)};document.addEventListener("focusin",A),document.addEventListener("focusout",b);const D=new MutationObserver(k);return c&&D.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",A),document.removeEventListener("focusout",b),D.disconnect()}}},[r,c,E.paused]),I.useEffect(()=>{if(c){lh.add(E);const A=document.activeElement;if(!c.contains(A)){const k=new CustomEvent(Do,ah);c.addEventListener(Do,h),c.dispatchEvent(k),k.defaultPrevented||(Eb(Sb(dp(c)),{select:!0}),document.activeElement===A&&xt(c))}return()=>{c.removeEventListener(Do,h),setTimeout(()=>{const k=new CustomEvent(Oo,ah);c.addEventListener(Oo,f),c.dispatchEvent(k),k.defaultPrevented||xt(A??document.body,{select:!0}),c.removeEventListener(Oo,f),lh.remove(E)},0)}}},[c,h,f,E]);const C=I.useCallback(A=>{if(!t&&!r||E.paused)return;const b=A.key==="Tab"&&!A.altKey&&!A.ctrlKey&&!A.metaKey,k=document.activeElement;if(b&&k){const D=A.currentTarget,[L,M]=Tb(D);L&&M?!A.shiftKey&&k===M?(A.preventDefault(),t&&xt(L,{select:!0})):A.shiftKey&&k===L&&(A.preventDefault(),t&&xt(M,{select:!0})):k===D&&A.preventDefault()}},[t,r,E.paused]);return p.jsx(Ne.div,{tabIndex:-1,...a,ref:y,onKeyDown:C})});hp.displayName=wb;function Eb(n,{select:e=!1}={}){const t=document.activeElement;for(const r of n)if(xt(r,{select:e}),document.activeElement!==t)return}function Tb(n){const e=dp(n),t=ch(e,n),r=ch(e.reverse(),n);return[t,r]}function dp(n){const e=[],t=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const s=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||s?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)e.push(t.currentNode);return e}function ch(n,e){for(const t of n)if(!bb(t,{upTo:e}))return t}function bb(n,{upTo:e}){if(getComputedStyle(n).visibility==="hidden")return!0;for(;n;){if(e!==void 0&&n===e)return!1;if(getComputedStyle(n).display==="none")return!0;n=n.parentElement}return!1}function Ib(n){return n instanceof HTMLInputElement&&"select"in n}function xt(n,{select:e=!1}={}){if(n&&n.focus){const t=document.activeElement;n.focus({preventScroll:!0}),n!==t&&Ib(n)&&e&&n.select()}}var lh=Ab();function Ab(){let n=[];return{add(e){const t=n[0];e!==t&&t?.pause(),n=uh(n,e),n.unshift(e)},remove(e){n=uh(n,e),n[0]?.resume()}}}function uh(n,e){const t=[...n],r=t.indexOf(e);return r!==-1&&t.splice(r,1),t}function Sb(n){return n.filter(e=>e.tagName!=="A")}var xb="Portal",bc=I.forwardRef((n,e)=>{const{container:t,...r}=n,[s,i]=I.useState(!1);zr(()=>i(!0),[]);const a=t||s&&globalThis?.document?.body;return a?Qm.createPortal(p.jsx(Ne.div,{...r,ref:e}),a):null});bc.displayName=xb;function Rb(n,e){return I.useReducer((t,r)=>e[t][r]??t,n)}var ss=n=>{const{present:e,children:t}=n,r=Cb(e),s=typeof t=="function"?t({present:r.isPresent}):I.Children.only(t),i=Xe(r.ref,Pb(s));return typeof t=="function"||r.isPresent?I.cloneElement(s,{ref:i}):null};ss.displayName="Presence";function Cb(n){const[e,t]=I.useState(),r=I.useRef({}),s=I.useRef(n),i=I.useRef("none"),a=n?"mounted":"unmounted",[c,u]=Rb(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return I.useEffect(()=>{const h=Ps(r.current);i.current=c==="mounted"?h:"none"},[c]),zr(()=>{const h=r.current,f=s.current;if(f!==n){const y=i.current,E=Ps(h);n?u("MOUNT"):E==="none"||h?.display==="none"?u("UNMOUNT"):u(f&&y!==E?"ANIMATION_OUT":"UNMOUNT"),s.current=n}},[n,u]),zr(()=>{if(e){let h;const f=e.ownerDocument.defaultView??window,g=E=>{const A=Ps(r.current).includes(E.animationName);if(E.target===e&&A&&(u("ANIMATION_END"),!s.current)){const b=e.style.animationFillMode;e.style.animationFillMode="forwards",h=f.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=b)})}},y=E=>{E.target===e&&(i.current=Ps(r.current))};return e.addEventListener("animationstart",y),e.addEventListener("animationcancel",g),e.addEventListener("animationend",g),()=>{f.clearTimeout(h),e.removeEventListener("animationstart",y),e.removeEventListener("animationcancel",g),e.removeEventListener("animationend",g)}}else u("ANIMATION_END")},[e,u]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:I.useCallback(h=>{h&&(r.current=getComputedStyle(h)),t(h)},[])}}function Ps(n){return n?.animationName||"none"}function Pb(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}var Vo=0;function Nb(){I.useEffect(()=>{const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",n[0]??hh()),document.body.insertAdjacentElement("beforeend",n[1]??hh()),Vo++,()=>{Vo===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),Vo--}},[])}function hh(){const n=document.createElement("span");return n.setAttribute("data-radix-focus-guard",""),n.tabIndex=0,n.style.outline="none",n.style.opacity="0",n.style.position="fixed",n.style.pointerEvents="none",n}var Hs="right-scroll-bar-position",Ks="width-before-scroll-bar",kb="with-scroll-bars-hidden",Db="--removed-body-scroll-bar-size";function Mo(n,e){return typeof n=="function"?n(e):n&&(n.current=e),n}function Ob(n,e){var t=I.useState(function(){return{value:n,callback:e,facade:{get current(){return t.value},set current(r){var s=t.value;s!==r&&(t.value=r,t.callback(r,s))}}}})[0];return t.callback=e,t.facade}var Vb=typeof window<"u"?I.useLayoutEffect:I.useEffect,dh=new WeakMap;function Mb(n,e){var t=Ob(null,function(r){return n.forEach(function(s){return Mo(s,r)})});return Vb(function(){var r=dh.get(t);if(r){var s=new Set(r),i=new Set(n),a=t.current;s.forEach(function(c){i.has(c)||Mo(c,null)}),i.forEach(function(c){s.has(c)||Mo(c,a)})}dh.set(t,n)},[n]),t}function Lb(n){return n}function jb(n,e){e===void 0&&(e=Lb);var t=[],r=!1,s={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:n},useMedium:function(i){var a=e(i,r);return t.push(a),function(){t=t.filter(function(c){return c!==a})}},assignSyncMedium:function(i){for(r=!0;t.length;){var a=t;t=[],a.forEach(i)}t={push:function(c){return i(c)},filter:function(){return t}}},assignMedium:function(i){r=!0;var a=[];if(t.length){var c=t;t=[],c.forEach(i),a=t}var u=function(){var f=a;a=[],f.forEach(i)},h=function(){return Promise.resolve().then(u)};h(),t={push:function(f){a.push(f),h()},filter:function(f){return a=a.filter(f),t}}}};return s}function Fb(n){n===void 0&&(n={});var e=jb(null);return e.options=Ze({async:!0,ssr:!1},n),e}var fp=function(n){var e=n.sideCar,t=es(n,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=e.read();if(!r)throw new Error("Sidecar medium not found");return I.createElement(r,Ze({},t))};fp.isSideCarExport=!0;function Ub(n,e){return n.useMedium(e),fp}var pp=Fb(),Lo=function(){},Bi=I.forwardRef(function(n,e){var t=I.useRef(null),r=I.useState({onScrollCapture:Lo,onWheelCapture:Lo,onTouchMoveCapture:Lo}),s=r[0],i=r[1],a=n.forwardProps,c=n.children,u=n.className,h=n.removeScrollBar,f=n.enabled,g=n.shards,y=n.sideCar,E=n.noIsolation,C=n.inert,A=n.allowPinchZoom,b=n.as,k=b===void 0?"div":b,D=n.gapMode,L=es(n,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),M=y,F=Mb([t,e]),$=Ze(Ze({},L),s);return I.createElement(I.Fragment,null,f&&I.createElement(M,{sideCar:pp,removeScrollBar:h,shards:g,noIsolation:E,inert:C,setCallbacks:i,allowPinchZoom:!!A,lockRef:t,gapMode:D}),a?I.cloneElement(I.Children.only(c),Ze(Ze({},$),{ref:F})):I.createElement(k,Ze({},$,{className:u,ref:F}),c))});Bi.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Bi.classNames={fullWidth:Ks,zeroRight:Hs};var Bb=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function $b(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var e=Bb();return e&&n.setAttribute("nonce",e),n}function zb(n,e){n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}function qb(n){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(n)}var Wb=function(){var n=0,e=null;return{add:function(t){n==0&&(e=$b())&&(zb(e,t),qb(e)),n++},remove:function(){n--,!n&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},Gb=function(){var n=Wb();return function(e,t){I.useEffect(function(){return n.add(e),function(){n.remove()}},[e&&t])}},mp=function(){var n=Gb(),e=function(t){var r=t.styles,s=t.dynamic;return n(r,s),null};return e},Hb={left:0,top:0,right:0,gap:0},jo=function(n){return parseInt(n||"",10)||0},Kb=function(n){var e=window.getComputedStyle(document.body),t=e[n==="padding"?"paddingLeft":"marginLeft"],r=e[n==="padding"?"paddingTop":"marginTop"],s=e[n==="padding"?"paddingRight":"marginRight"];return[jo(t),jo(r),jo(s)]},Qb=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return Hb;var e=Kb(n),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,r-t+e[2]-e[0])}},Xb=mp(),Rn="data-scroll-locked",Jb=function(n,e,t,r){var s=n.left,i=n.top,a=n.right,c=n.gap;return t===void 0&&(t="margin"),`
  .`.concat(kb,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(c,"px ").concat(r,`;
  }
  body[`).concat(Rn,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(r,";"),t==="margin"&&`
    padding-left: `.concat(s,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(a,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c,"px ").concat(r,`;
    `),t==="padding"&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Hs,` {
    right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(Ks,` {
    margin-right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(Hs," .").concat(Hs,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Ks," .").concat(Ks,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(Rn,`] {
    `).concat(Db,": ").concat(c,`px;
  }
`)},fh=function(){var n=parseInt(document.body.getAttribute(Rn)||"0",10);return isFinite(n)?n:0},Yb=function(){I.useEffect(function(){return document.body.setAttribute(Rn,(fh()+1).toString()),function(){var n=fh()-1;n<=0?document.body.removeAttribute(Rn):document.body.setAttribute(Rn,n.toString())}},[])},Zb=function(n){var e=n.noRelative,t=n.noImportant,r=n.gapMode,s=r===void 0?"margin":r;Yb();var i=I.useMemo(function(){return Qb(s)},[s]);return I.createElement(Xb,{styles:Jb(i,!e,s,t?"":"!important")})},Ea=!1;if(typeof window<"u")try{var Ns=Object.defineProperty({},"passive",{get:function(){return Ea=!0,!0}});window.addEventListener("test",Ns,Ns),window.removeEventListener("test",Ns,Ns)}catch{Ea=!1}var yn=Ea?{passive:!1}:!1,eI=function(n){return n.tagName==="TEXTAREA"},gp=function(n,e){if(!(n instanceof Element))return!1;var t=window.getComputedStyle(n);return t[e]!=="hidden"&&!(t.overflowY===t.overflowX&&!eI(n)&&t[e]==="visible")},tI=function(n){return gp(n,"overflowY")},nI=function(n){return gp(n,"overflowX")},ph=function(n,e){var t=e.ownerDocument,r=e;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var s=yp(n,r);if(s){var i=vp(n,r),a=i[1],c=i[2];if(a>c)return!0}r=r.parentNode}while(r&&r!==t.body);return!1},rI=function(n){var e=n.scrollTop,t=n.scrollHeight,r=n.clientHeight;return[e,t,r]},sI=function(n){var e=n.scrollLeft,t=n.scrollWidth,r=n.clientWidth;return[e,t,r]},yp=function(n,e){return n==="v"?tI(e):nI(e)},vp=function(n,e){return n==="v"?rI(e):sI(e)},iI=function(n,e){return n==="h"&&e==="rtl"?-1:1},oI=function(n,e,t,r,s){var i=iI(n,window.getComputedStyle(e).direction),a=i*r,c=t.target,u=e.contains(c),h=!1,f=a>0,g=0,y=0;do{var E=vp(n,c),C=E[0],A=E[1],b=E[2],k=A-b-i*C;(C||k)&&yp(n,c)&&(g+=k,y+=C),c instanceof ShadowRoot?c=c.host:c=c.parentNode}while(!u&&c!==document.body||u&&(e.contains(c)||e===c));return(f&&(Math.abs(g)<1||!s)||!f&&(Math.abs(y)<1||!s))&&(h=!0),h},ks=function(n){return"changedTouches"in n?[n.changedTouches[0].clientX,n.changedTouches[0].clientY]:[0,0]},mh=function(n){return[n.deltaX,n.deltaY]},gh=function(n){return n&&"current"in n?n.current:n},aI=function(n,e){return n[0]===e[0]&&n[1]===e[1]},cI=function(n){return`
  .block-interactivity-`.concat(n,` {pointer-events: none;}
  .allow-interactivity-`).concat(n,` {pointer-events: all;}
`)},lI=0,vn=[];function uI(n){var e=I.useRef([]),t=I.useRef([0,0]),r=I.useRef(),s=I.useState(lI++)[0],i=I.useState(mp)[0],a=I.useRef(n);I.useEffect(function(){a.current=n},[n]),I.useEffect(function(){if(n.inert){document.body.classList.add("block-interactivity-".concat(s));var A=Pw([n.lockRef.current],(n.shards||[]).map(gh),!0).filter(Boolean);return A.forEach(function(b){return b.classList.add("allow-interactivity-".concat(s))}),function(){document.body.classList.remove("block-interactivity-".concat(s)),A.forEach(function(b){return b.classList.remove("allow-interactivity-".concat(s))})}}},[n.inert,n.lockRef.current,n.shards]);var c=I.useCallback(function(A,b){if("touches"in A&&A.touches.length===2||A.type==="wheel"&&A.ctrlKey)return!a.current.allowPinchZoom;var k=ks(A),D=t.current,L="deltaX"in A?A.deltaX:D[0]-k[0],M="deltaY"in A?A.deltaY:D[1]-k[1],F,$=A.target,_=Math.abs(L)>Math.abs(M)?"h":"v";if("touches"in A&&_==="h"&&$.type==="range")return!1;var v=ph(_,$);if(!v)return!0;if(v?F=_:(F=_==="v"?"h":"v",v=ph(_,$)),!v)return!1;if(!r.current&&"changedTouches"in A&&(L||M)&&(r.current=F),!F)return!0;var w=r.current||F;return oI(w,b,A,w==="h"?L:M,!0)},[]),u=I.useCallback(function(A){var b=A;if(!(!vn.length||vn[vn.length-1]!==i)){var k="deltaY"in b?mh(b):ks(b),D=e.current.filter(function(F){return F.name===b.type&&(F.target===b.target||b.target===F.shadowParent)&&aI(F.delta,k)})[0];if(D&&D.should){b.cancelable&&b.preventDefault();return}if(!D){var L=(a.current.shards||[]).map(gh).filter(Boolean).filter(function(F){return F.contains(b.target)}),M=L.length>0?c(b,L[0]):!a.current.noIsolation;M&&b.cancelable&&b.preventDefault()}}},[]),h=I.useCallback(function(A,b,k,D){var L={name:A,delta:b,target:k,should:D,shadowParent:hI(k)};e.current.push(L),setTimeout(function(){e.current=e.current.filter(function(M){return M!==L})},1)},[]),f=I.useCallback(function(A){t.current=ks(A),r.current=void 0},[]),g=I.useCallback(function(A){h(A.type,mh(A),A.target,c(A,n.lockRef.current))},[]),y=I.useCallback(function(A){h(A.type,ks(A),A.target,c(A,n.lockRef.current))},[]);I.useEffect(function(){return vn.push(i),n.setCallbacks({onScrollCapture:g,onWheelCapture:g,onTouchMoveCapture:y}),document.addEventListener("wheel",u,yn),document.addEventListener("touchmove",u,yn),document.addEventListener("touchstart",f,yn),function(){vn=vn.filter(function(A){return A!==i}),document.removeEventListener("wheel",u,yn),document.removeEventListener("touchmove",u,yn),document.removeEventListener("touchstart",f,yn)}},[]);var E=n.removeScrollBar,C=n.inert;return I.createElement(I.Fragment,null,C?I.createElement(i,{styles:cI(s)}):null,E?I.createElement(Zb,{gapMode:n.gapMode}):null)}function hI(n){for(var e=null;n!==null;)n instanceof ShadowRoot&&(e=n.host,n=n.host),n=n.parentNode;return e}const dI=Ub(pp,uI);var _p=I.forwardRef(function(n,e){return I.createElement(Bi,Ze({},n,{ref:e,sideCar:dI}))});_p.classNames=Bi.classNames;var fI=function(n){if(typeof document>"u")return null;var e=Array.isArray(n)?n[0]:n;return e.ownerDocument.body},_n=new WeakMap,Ds=new WeakMap,Os={},Fo=0,wp=function(n){return n&&(n.host||wp(n.parentNode))},pI=function(n,e){return e.map(function(t){if(n.contains(t))return t;var r=wp(t);return r&&n.contains(r)?r:(console.error("aria-hidden",t,"in not contained inside",n,". Doing nothing"),null)}).filter(function(t){return!!t})},mI=function(n,e,t,r){var s=pI(e,Array.isArray(n)?n:[n]);Os[t]||(Os[t]=new WeakMap);var i=Os[t],a=[],c=new Set,u=new Set(s),h=function(g){!g||c.has(g)||(c.add(g),h(g.parentNode))};s.forEach(h);var f=function(g){!g||u.has(g)||Array.prototype.forEach.call(g.children,function(y){if(c.has(y))f(y);else try{var E=y.getAttribute(r),C=E!==null&&E!=="false",A=(_n.get(y)||0)+1,b=(i.get(y)||0)+1;_n.set(y,A),i.set(y,b),a.push(y),A===1&&C&&Ds.set(y,!0),b===1&&y.setAttribute(t,"true"),C||y.setAttribute(r,"true")}catch(k){console.error("aria-hidden: cannot operate on ",y,k)}})};return f(e),c.clear(),Fo++,function(){a.forEach(function(g){var y=_n.get(g)-1,E=i.get(g)-1;_n.set(g,y),i.set(g,E),y||(Ds.has(g)||g.removeAttribute(r),Ds.delete(g)),E||g.removeAttribute(t)}),Fo--,Fo||(_n=new WeakMap,_n=new WeakMap,Ds=new WeakMap,Os={})}},gI=function(n,e,t){t===void 0&&(t="data-aria-hidden");var r=Array.from(Array.isArray(n)?n:[n]),s=fI(n);return s?(r.push.apply(r,Array.from(s.querySelectorAll("[aria-live]"))),mI(r,s,t,"aria-hidden")):function(){return null}},Ic="Dialog",[Ep,cS]=ip(Ic),[yI,Ye]=Ep(Ic),Tp=n=>{const{__scopeDialog:e,children:t,open:r,defaultOpen:s,onOpenChange:i,modal:a=!0}=n,c=I.useRef(null),u=I.useRef(null),[h=!1,f]=op({prop:r,defaultProp:s,onChange:i});return p.jsx(yI,{scope:e,triggerRef:c,contentRef:u,contentId:ko(),titleId:ko(),descriptionId:ko(),open:h,onOpenChange:f,onOpenToggle:I.useCallback(()=>f(g=>!g),[f]),modal:a,children:t})};Tp.displayName=Ic;var bp="DialogTrigger",vI=I.forwardRef((n,e)=>{const{__scopeDialog:t,...r}=n,s=Ye(bp,t),i=Xe(e,s.triggerRef);return p.jsx(Ne.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":xc(s.open),...r,ref:i,onClick:ge(n.onClick,s.onOpenToggle)})});vI.displayName=bp;var Ac="DialogPortal",[_I,Ip]=Ep(Ac,{forceMount:void 0}),Ap=n=>{const{__scopeDialog:e,forceMount:t,children:r,container:s}=n,i=Ye(Ac,e);return p.jsx(_I,{scope:e,forceMount:t,children:I.Children.map(r,a=>p.jsx(ss,{present:t||i.open,children:p.jsx(bc,{asChild:!0,container:s,children:a})}))})};Ap.displayName=Ac;var vi="DialogOverlay",Sp=I.forwardRef((n,e)=>{const t=Ip(vi,n.__scopeDialog),{forceMount:r=t.forceMount,...s}=n,i=Ye(vi,n.__scopeDialog);return i.modal?p.jsx(ss,{present:r||i.open,children:p.jsx(wI,{...s,ref:e})}):null});Sp.displayName=vi;var wI=I.forwardRef((n,e)=>{const{__scopeDialog:t,...r}=n,s=Ye(vi,t);return p.jsx(_p,{as:qr,allowPinchZoom:!0,shards:[s.contentRef],children:p.jsx(Ne.div,{"data-state":xc(s.open),...r,ref:e,style:{pointerEvents:"auto",...r.style}})})}),an="DialogContent",xp=I.forwardRef((n,e)=>{const t=Ip(an,n.__scopeDialog),{forceMount:r=t.forceMount,...s}=n,i=Ye(an,n.__scopeDialog);return p.jsx(ss,{present:r||i.open,children:i.modal?p.jsx(EI,{...s,ref:e}):p.jsx(TI,{...s,ref:e})})});xp.displayName=an;var EI=I.forwardRef((n,e)=>{const t=Ye(an,n.__scopeDialog),r=I.useRef(null),s=Xe(e,t.contentRef,r);return I.useEffect(()=>{const i=r.current;if(i)return gI(i)},[]),p.jsx(Rp,{...n,ref:s,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:ge(n.onCloseAutoFocus,i=>{i.preventDefault(),t.triggerRef.current?.focus()}),onPointerDownOutside:ge(n.onPointerDownOutside,i=>{const a=i.detail.originalEvent,c=a.button===0&&a.ctrlKey===!0;(a.button===2||c)&&i.preventDefault()}),onFocusOutside:ge(n.onFocusOutside,i=>i.preventDefault())})}),TI=I.forwardRef((n,e)=>{const t=Ye(an,n.__scopeDialog),r=I.useRef(!1),s=I.useRef(!1);return p.jsx(Rp,{...n,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{n.onCloseAutoFocus?.(i),i.defaultPrevented||(r.current||t.triggerRef.current?.focus(),i.preventDefault()),r.current=!1,s.current=!1},onInteractOutside:i=>{n.onInteractOutside?.(i),i.defaultPrevented||(r.current=!0,i.detail.originalEvent.type==="pointerdown"&&(s.current=!0));const a=i.target;t.triggerRef.current?.contains(a)&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&s.current&&i.preventDefault()}})}),Rp=I.forwardRef((n,e)=>{const{__scopeDialog:t,trapFocus:r,onOpenAutoFocus:s,onCloseAutoFocus:i,...a}=n,c=Ye(an,t),u=I.useRef(null),h=Xe(e,u);return Nb(),p.jsxs(p.Fragment,{children:[p.jsx(hp,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:s,onUnmountAutoFocus:i,children:p.jsx(Tc,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":xc(c.open),...a,ref:h,onDismiss:()=>c.onOpenChange(!1)})}),p.jsxs(p.Fragment,{children:[p.jsx(bI,{titleId:c.titleId}),p.jsx(AI,{contentRef:u,descriptionId:c.descriptionId})]})]})}),Sc="DialogTitle",Cp=I.forwardRef((n,e)=>{const{__scopeDialog:t,...r}=n,s=Ye(Sc,t);return p.jsx(Ne.h2,{id:s.titleId,...r,ref:e})});Cp.displayName=Sc;var Pp="DialogDescription",Np=I.forwardRef((n,e)=>{const{__scopeDialog:t,...r}=n,s=Ye(Pp,t);return p.jsx(Ne.p,{id:s.descriptionId,...r,ref:e})});Np.displayName=Pp;var kp="DialogClose",Dp=I.forwardRef((n,e)=>{const{__scopeDialog:t,...r}=n,s=Ye(kp,t);return p.jsx(Ne.button,{type:"button",...r,ref:e,onClick:ge(n.onClick,()=>s.onOpenChange(!1))})});Dp.displayName=kp;function xc(n){return n?"open":"closed"}var Op="DialogTitleWarning",[lS,Vp]=tb(Op,{contentName:an,titleName:Sc,docsSlug:"dialog"}),bI=({titleId:n})=>{const e=Vp(Op),t=`\`${e.contentName}\` requires a \`${e.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${e.docsSlug}`;return I.useEffect(()=>{n&&(document.getElementById(n)||console.error(t))},[t,n]),null},II="DialogDescriptionWarning",AI=({contentRef:n,descriptionId:e})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Vp(II).contentName}}.`;return I.useEffect(()=>{const s=n.current?.getAttribute("aria-describedby");e&&s&&(document.getElementById(e)||console.warn(r))},[r,n,e]),null},Xn=Tp,Jn=Ap,Yn=Sp,Zn=xp,er=Cp,SI=Np,cn=Dp;const ut={beginner:[{id:"first_plant",title:"Premier Pas",description:"Plantez votre première graine",reward:50,requiredLevel:0,condition:n=>n?.stats?.totalPlanted>0},{id:"first_harvest",title:"Première Récolte",description:"Récoltez votre première culture",reward:100,requiredLevel:0,condition:n=>n?.stats?.totalHarvested>0}],intermediate:[{id:"reach_level_3",title:"Apprenti Fermier",description:"Atteignez le niveau 3",reward:200,requiredLevel:1,condition:n=>n?.level>=3},{id:"harvest_20",title:"Récolte Abondante",description:"Récoltez 20 cultures au total",reward:300,requiredLevel:2,condition:n=>n?.stats?.totalHarvested>=20}],advanced:[{id:"earn_1000",title:"Fortune Agricole",description:"Gagnez 1000 pièces",reward:500,requiredLevel:3,condition:n=>n?.stats?.totalEarned>=1e3},{id:"plant_all_types",title:"Diversité Culturale",description:"Plantez tous les types de graines disponibles",reward:1e3,requiredLevel:4,condition:n=>n?.stats?.uniqueCropsPlanted>=6}]};function xI({open:n,onOpenChange:e}){const[t,r]=re.useState("beginner"),{user:s,updateUser:i}=ye(),a=(h,f)=>{if(!s)return;const g=[...ut.beginner,...ut.intermediate,...ut.advanced].find(y=>y.id===h);!g||!g.condition(s)||s.completedQuests?.includes(h)||i({...s,coins:s.coins+f,completedQuests:[...s.completedQuests||[],h],stats:{...s.stats,totalEarned:s.stats.totalEarned+f}})},c=h=>{if(!s)return 0;switch(h.id){case"first_plant":return Math.min(100,s.stats.totalPlanted/1*100);case"first_harvest":return Math.min(100,s.stats.totalHarvested/1*100);case"reach_level_3":return Math.min(100,s.level/3*100);case"harvest_20":return Math.min(100,s.stats.totalHarvested/20*100);case"earn_1000":return Math.min(100,s.stats.totalEarned/1e3*100);case"plant_all_types":return Math.min(100,s.stats.uniqueCropsPlanted/6*100);default:return 0}},u=h=>p.jsx("div",{className:"space-y-4",children:h.map(f=>{const g=s?.completedQuests?.includes(f.id),y=s&&f.requiredLevel>s.level,E=f.condition(s),C=c(f);return p.jsxs("div",{className:`bg-gray-700/50 backdrop-blur-sm p-4 rounded-lg border ${y?"border-red-900/50 opacity-50":g?"border-green-900/50":E?"border-yellow-900/50":"border-gray-900/50"}`,children:[p.jsxs("div",{className:"flex items-start justify-between",children:[p.jsxs("div",{children:[p.jsxs("h3",{className:"font-bold text-lg flex items-center gap-2 text-white",children:[f.title,y&&p.jsx(yi,{className:"text-red-400"}),g&&p.jsx(rp,{className:"text-green-400"})]}),p.jsx("p",{className:"text-white text-sm",children:f.description})]}),p.jsxs("div",{className:"flex items-center text-yellow-400",children:[p.jsx($n,{className:"w-4 h-4 mr-1"}),f.reward]})]}),p.jsxs("div",{className:"mt-3",children:[p.jsx("div",{className:"w-full bg-gray-800 h-2 rounded-full overflow-hidden",children:p.jsx("div",{className:`h-full transition-all duration-300 ${g?"bg-green-500":E?"bg-yellow-500":"bg-blue-500"}`,style:{width:`${C}%`}})}),p.jsxs("p",{className:"text-xs text-white mt-1",children:["Progression: ",Math.round(C),"%"]})]}),y&&p.jsxs("p",{className:"text-red-400 text-xs mt-2 flex items-center",children:[p.jsx(yi,{className:"w-3 h-3 mr-1"}),"Niveau ",f.requiredLevel," requis"]}),!y&&E&&!g&&p.jsxs("button",{onClick:()=>a(f.id,f.reward),className:"mt-2 w-full px-3 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-md transition-colors flex items-center justify-center gap-2",children:[p.jsx($n,{className:"w-4 h-4"}),"Réclamer la récompense"]})]},f.id)})});return p.jsx(Xn,{open:n,onOpenChange:e,children:p.jsxs(Jn,{children:[p.jsx(Yn,{className:"fixed inset-0 bg-black/50 backdrop-blur-sm"}),p.jsxs(Zn,{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-2xl max-h-[85vh] overflow-y-auto bg-gray-800/95 backdrop-blur-sm rounded-lg p-6 border border-gray-700",children:[p.jsxs("div",{className:"flex justify-between items-center mb-6",children:[p.jsx(er,{className:"text-2xl font-bold text-white",children:"Quêtes"}),p.jsx(cn,{asChild:!0,children:p.jsx("button",{className:"text-gray-400 hover:text-white transition-colors",children:p.jsx(Qn,{size:24})})})]}),p.jsx("div",{className:"flex space-x-2 mb-6",children:["beginner","intermediate","advanced"].map(h=>p.jsxs("button",{onClick:()=>r(h),className:`px-4 py-2 rounded-lg transition-colors ${t===h?"bg-blue-600 text-white":"bg-gray-700 text-white hover:bg-gray-600"}`,children:[h==="beginner"&&"Débutant",h==="intermediate"&&"Intermédiaire",h==="advanced"&&"Avancé"]},h))}),p.jsxs("div",{className:"space-y-4 pr-2",style:{maxHeight:"60vh",overflowY:"auto"},children:[t==="beginner"&&u(ut.beginner),t==="intermediate"&&u(ut.intermediate),t==="advanced"&&u(ut.advanced)]})]})]})})}function RI({open:n,onOpenChange:e}){const[t,r]=re.useState([]);return ye(),re.useEffect(()=>{const s=lt.subscribeToLeaderboard(i=>{r(i.slice(0,3))});return()=>s()},[]),p.jsx(Xn,{open:n,onOpenChange:e,children:p.jsxs(Jn,{children:[p.jsx(Yn,{className:"fixed inset-0 bg-black/50 backdrop-blur-sm"}),p.jsxs(Zn,{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md bg-gray-800/95 backdrop-blur-sm rounded-lg p-6 border border-gray-700",children:[p.jsxs("div",{className:"flex justify-between items-center mb-6",children:[p.jsx(er,{className:"text-2xl font-bold text-white",children:"Classement"}),p.jsx(cn,{asChild:!0,children:p.jsx("button",{className:"text-gray-400 hover:text-white transition-colors",children:p.jsx(Qn,{size:24})})})]}),p.jsx("div",{className:"space-y-4",children:t.map((s,i)=>p.jsx("div",{className:`p-4 rounded-lg border ${i===0?"bg-yellow-500/20 border-yellow-500/50":i===1?"bg-gray-400/20 border-gray-400/50":"bg-orange-700/20 border-orange-700/50"}`,children:p.jsx("div",{className:"flex items-center justify-between",children:p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsxs("span",{className:"text-2xl font-bold text-white",children:["#",i+1]}),p.jsxs("div",{children:[p.jsx("h3",{className:"font-bold text-white",children:s.username}),p.jsxs("div",{className:"flex items-center space-x-2 text-sm text-white",children:[p.jsxs("span",{className:"flex items-center",children:[p.jsx(Ec,{className:"w-4 h-4 text-yellow-500 mr-1"}),"Niveau ",s.level]}),p.jsxs("span",{className:"flex items-center",children:[p.jsx($n,{className:"w-4 h-4 text-yellow-500 mr-1"}),s.coins]})]})]})]})})},s.id))})]})]})})}function CI({className:n}){const[e,t]=I.useState(!1),[r,s]=I.useState([]),{user:i}=ye();return I.useEffect(()=>{if(!i)return;const a=lt.subscribeToOnlineUsers(c=>{s(c)});return()=>a()},[i]),p.jsxs(p.Fragment,{children:[p.jsxs("button",{onClick:()=>t(!0),className:`flex items-center space-x-2 px-3 py-1 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors text-white ${n}`,children:[p.jsx(ZT,{className:"w-4 h-4"}),p.jsx(sh,{className:"w-2 h-2 text-green-500"}),p.jsx("span",{children:r.length})]}),p.jsx(Xn,{open:e,onOpenChange:t,children:p.jsxs(Jn,{children:[p.jsx(Yn,{className:"fixed inset-0 bg-black/50 backdrop-blur-sm"}),p.jsxs(Zn,{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md bg-gray-800/95 backdrop-blur-sm rounded-lg p-6 border border-gray-700",children:[p.jsxs("div",{className:"flex justify-between items-center mb-6",children:[p.jsx(er,{className:"text-2xl font-bold text-white",children:"Joueurs en ligne"}),p.jsx(cn,{asChild:!0,children:p.jsx("button",{className:"text-gray-400 hover:text-white transition-colors",children:p.jsx(Qn,{size:24})})})]}),p.jsxs("div",{className:"space-y-2",children:[r.map(a=>p.jsxs("div",{className:"flex items-center space-x-2 p-2 rounded-lg bg-gray-700",children:[p.jsx(sh,{className:"w-2 h-2 text-green-500"}),p.jsxs("span",{className:`text-white ${a===i?.username?"font-bold":""}`,children:[a," ",a===i?.username&&"(vous)"]})]},a)),r.length===0&&p.jsx("div",{className:"text-center text-gray-400 py-4",children:"Aucun joueur en ligne"})]})]})]})})]})}const PI={getAllUsers(){return JSON.parse(localStorage.getItem("users")||"[]").map(({username:e,createdAt:t})=>({username:e,createdAt:t}))},saveUser(n,e){const t=JSON.parse(localStorage.getItem("users")||"[]"),r={username:n,password:e,createdAt:new Date().toISOString()};t.push(r),localStorage.setItem("users",JSON.stringify(t))},validateUser(n,e){return JSON.parse(localStorage.getItem("users")||"[]").some(r=>r.username===n&&r.password===e)},saveGameState(n,e){localStorage.setItem(`gameState_${n}`,JSON.stringify({...e,lastSaved:Date.now()}))},loadGameState(n){const e=localStorage.getItem(`gameState_${n}`);return e?JSON.parse(e):null},getOnlineUsers(){const n=Date.now();return Object.keys(localStorage).filter(e=>e.startsWith("gameState_")).map(e=>{const t=JSON.parse(localStorage.getItem(e)||"{}"),r=e.replace("gameState_",""),s=t.lastSaved||0;return{username:r,lastActive:s}}).filter(e=>n-e.lastActive<3e3).map(e=>e.username)},deleteUser(n){const t=JSON.parse(localStorage.getItem("users")||"[]").filter(r=>r.username!==n);localStorage.setItem("users",JSON.stringify(t)),localStorage.removeItem(`gameState_${n}`)}};function yh({open:n,onOpenChange:e,title:t,description:r,confirmLabel:s="Confirmer",cancelLabel:i="Retour",onConfirm:a,variant:c="primary"}){return p.jsx(Xn,{open:n,onOpenChange:e,children:p.jsxs(Jn,{children:[p.jsx(Yn,{className:"fixed inset-0 bg-black/50 backdrop-blur-sm"}),p.jsxs(Zn,{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md bg-gray-800 rounded-lg p-6 border border-gray-700",children:[p.jsxs("div",{className:"flex justify-between items-center mb-4",children:[p.jsx(er,{className:"text-xl font-bold text-white",children:t}),p.jsx(cn,{asChild:!0,children:p.jsx("button",{className:"text-gray-400 hover:text-white transition-colors",children:p.jsx(Qn,{size:24})})})]}),p.jsx(SI,{className:"text-white mb-6",children:r}),p.jsxs("div",{className:"flex justify-center gap-4",children:[p.jsx(cn,{asChild:!0,children:p.jsx("button",{className:"px-4 py-2 bg-gray-600 rounded hover:bg-gray-500 transition-colors text-white",children:i})}),p.jsx("button",{onClick:a,className:`px-4 py-2 rounded transition-colors text-white ${c==="danger"?"bg-red-600 hover:bg-red-700":"bg-blue-600 hover:bg-blue-700"}`,children:s})]})]})]})})}function NI({open:n,onOpenChange:e}){const[t,r]=I.useState(""),[s,i]=I.useState(""),[a,c]=I.useState(""),[u,h]=I.useState(!1),[f,g]=I.useState(!1),{user:y,logout:E,updateUser:C}=ye(),A=_i(),{toast:b}=it(),k=()=>{y&&(PI.deleteUser(y.username),E(),A("/login"),b({title:"Validé !",description:"Votre compte a été supprimé."}))},D=()=>{if(!y||!a)return;const M=JSON.parse(localStorage.getItem("users")||"[]");if(M.find(v=>v.username===a)){b({title:"Erreur",description:"Ce nom d'utilisateur est déjà pris",variant:"destructive"});return}const $=M.findIndex(v=>v.username===y.username);$!==-1&&(M[$].username=a,localStorage.setItem("users",JSON.stringify(M)));const _=localStorage.getItem(`gameState_${y.username}`);_&&(localStorage.setItem(`gameState_${a}`,_),localStorage.removeItem(`gameState_${y.username}`)),C({...y,username:a}),b({title:"Succès",description:"Nom d'utilisateur modifié avec succès"}),c(""),g(!1)},L=()=>{if(!y)return;const M=JSON.parse(localStorage.getItem("users")||"[]"),F=M.findIndex($=>$.username===y.username);if(F===-1||M[F].password!==t){b({title:"Erreur",description:"Mot de passe actuel incorrect",variant:"destructive"});return}M[F].password=s,localStorage.setItem("users",JSON.stringify(M)),b({title:"Succès",description:"Mot de passe modifié avec succès"}),r(""),i("")};return p.jsxs(p.Fragment,{children:[p.jsx(Xn,{open:n,onOpenChange:e,children:p.jsxs(Jn,{children:[p.jsx(Yn,{className:"fixed inset-0 bg-black/50 backdrop-blur-sm"}),p.jsxs(Zn,{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md bg-gray-800 rounded-lg p-6 border border-gray-700",children:[p.jsxs("div",{className:"flex justify-between items-center mb-6",children:[p.jsxs("div",{children:[p.jsx(er,{className:"text-2xl font-bold text-white",children:"Paramètres du compte"}),y&&p.jsxs("div",{className:"text-sm text-gray-400 mt-1",children:["ID: ",y.id]})]}),p.jsx(cn,{asChild:!0,children:p.jsx("button",{className:"text-gray-400 hover:text-white transition-colors",children:p.jsx(Qn,{size:24})})})]}),p.jsxs("div",{className:"space-y-6",children:[p.jsxs("div",{className:"space-y-4",children:[p.jsxs("h3",{className:"text-lg font-semibold flex items-center gap-2 text-white",children:[p.jsx(YT,{}),"Changer le nom d'utilisateur"]}),p.jsx("input",{type:"text",placeholder:"Nouveau nom d'utilisateur",value:a,onChange:M=>c(M.target.value),className:"w-full p-2 rounded bg-gray-700 text-white border border-gray-600"}),p.jsx("button",{onClick:()=>g(!0),disabled:!a,className:"w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed",children:"Changer le nom d'utilisateur"})]}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("h3",{className:"text-lg font-semibold flex items-center gap-2 text-white",children:[p.jsx(JT,{}),"Changer le mot de passe"]}),p.jsx("input",{type:"password",placeholder:"Mot de passe actuel",value:t,onChange:M=>r(M.target.value),className:"w-full p-2 rounded bg-gray-700 text-white border border-gray-600"}),p.jsx("input",{type:"password",placeholder:"Nouveau mot de passe",value:s,onChange:M=>i(M.target.value),className:"w-full p-2 rounded bg-gray-700 text-white border border-gray-600"}),p.jsx("button",{onClick:L,className:"w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors",children:"Changer le mot de passe"})]}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("h3",{className:"text-lg font-semibold text-red-500 flex items-center gap-2",children:[p.jsx(QT,{}),"Supprimer le compte"]}),p.jsx("button",{onClick:()=>h(!0),className:"w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition-colors",children:"Supprimer mon compte"})]})]})]})]})}),p.jsx(yh,{open:u,onOpenChange:h,title:"Confirmer la suppression",description:"Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.",onConfirm:k,variant:"danger"}),p.jsx(yh,{open:f,onOpenChange:g,title:"Confirmer le changement",description:`Voulez-vous vraiment changer votre nom d'utilisateur pour "${a}" ?`,onConfirm:D})]})}function kI({open:n,onOpenChange:e}){const t=ye(u=>u.user);if(!t)return null;const r=u=>u===0?100:Math.pow(2,u)*100,s=(u,h)=>{const f=u===0?0:r(u-1);return h-f},i=r(t.level),a=s(t.level,t.experience),c=a/i*100;return p.jsx(Xn,{open:n,onOpenChange:e,children:p.jsxs(Jn,{children:[p.jsx(Yn,{className:"fixed inset-0 bg-black/50 backdrop-blur-sm"}),p.jsxs(Zn,{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md bg-gray-800 rounded-lg p-6 border border-gray-700",children:[p.jsxs("div",{className:"flex justify-between items-center mb-6",children:[p.jsx(er,{className:"text-2xl font-bold text-white",children:"Progression"}),p.jsx(cn,{asChild:!0,children:p.jsx("button",{className:"text-gray-400 hover:text-white transition-colors",children:p.jsx(Qn,{size:24})})})]}),p.jsxs("div",{className:"space-y-6 text-white",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[p.jsx(Ec,{className:"w-6 h-6 text-yellow-500"}),p.jsxs("span",{className:"text-xl",children:["Niveau ",t.level]})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsxs("div",{className:"flex justify-between text-sm",children:[p.jsxs("span",{children:["Progression vers niveau ",t.level+1]}),p.jsxs("span",{children:[a,"/",i," XP"]})]}),p.jsx("div",{className:"w-full h-4 bg-gray-700 rounded-full overflow-hidden",children:p.jsx("div",{className:"h-full bg-green-500 transition-all duration-300",style:{width:`${c}%`}})})]}),p.jsxs("div",{className:"mt-4 text-gray-300",children:[p.jsx("h3",{className:"font-semibold mb-2",children:"Statistiques"}),p.jsxs("ul",{className:"space-y-1",children:[p.jsxs("li",{children:["Total XP: ",t.experience]}),p.jsxs("li",{children:["Cultures plantées: ",t.stats.totalPlanted]}),p.jsxs("li",{children:["Cultures récoltées: ",t.stats.totalHarvested]})]})]})]})]})]})})}function DI(){const{user:n,logout:e}=ye(),t=_i(),[r,s]=re.useState(!1),[i,a]=re.useState(!1),[c,u]=re.useState(!1),[h,f]=re.useState(!1);re.useState(!1);const g=()=>{e(),t("/login")};if(!n)return null;const y=k=>k===0?100:Math.pow(2,k)*100,E=(k,D)=>{const L=k===0?0:y(k-1);return D-L},C=y(n.level),A=E(n.level,n.experience),b=re.useMemo(()=>[...ut.beginner,...ut.intermediate,...ut.advanced].some(D=>D.condition(n)&&!n.completedQuests?.includes(D.id)&&n.level>=D.requiredLevel),[n]);return p.jsxs("header",{className:"bg-gray-800 shadow-lg p-4 rounded-lg mb-6",children:[p.jsxs("div",{className:"flex justify-between items-center",children:[p.jsxs("div",{className:"flex items-center space-x-4",children:[p.jsx("span",{className:"text-xl font-bold text-white",children:n.username}),p.jsx(CI,{}),p.jsxs("div",{className:"flex items-center space-x-4",children:[p.jsxs("button",{onClick:()=>f(!0),className:"flex items-center bg-gray-700 px-3 py-1 rounded hover:bg-gray-600 transition-colors",children:[p.jsx(Ec,{className:"w-4 h-4 text-yellow-500 mr-1"}),p.jsxs("span",{className:"text-white",children:["Niveau ",n.level," (",A,"/",C," xp)"]})]}),p.jsxs("div",{className:"flex items-center bg-yellow-600/20 px-3 py-1 rounded",children:[p.jsx($n,{className:"w-4 h-4 text-yellow-500 mr-1"}),p.jsx("span",{className:"text-yellow-500 font-medium",children:n.coins})]})]})]}),p.jsxs("div",{className:"flex items-center space-x-4",children:[p.jsxs("button",{onClick:()=>a(!0),className:"flex items-center bg-gray-700 px-3 py-1 rounded hover:bg-gray-600 transition-colors",children:[p.jsx(XT,{className:"w-4 h-4 text-yellow-500 mr-1"}),p.jsx("span",{className:"text-white",children:"Classement"})]}),p.jsxs("button",{onClick:()=>s(!0),className:"relative flex items-center bg-gray-700 px-3 py-1 rounded hover:bg-gray-600 transition-colors",children:[p.jsx(qT,{className:"w-4 h-4 text-blue-500 mr-1"}),p.jsx("span",{className:"text-white",children:"Quêtes"}),b&&p.jsx("span",{className:"absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"})]}),p.jsxs("button",{onClick:()=>u(!0),className:"flex items-center bg-gray-700 px-3 py-1 rounded hover:bg-gray-600 transition-colors",children:[p.jsx(WT,{className:"w-4 h-4 text-gray-400 mr-1"}),p.jsx("span",{className:"text-white",children:"Paramètres"})]}),p.jsxs("button",{onClick:g,className:"flex items-center bg-red-600/20 px-3 py-1 rounded hover:bg-red-600/30 transition-colors",children:[p.jsx(KT,{className:"w-4 h-4 text-red-500 mr-1"}),p.jsx("span",{className:"text-red-500 font-medium",children:"Se déconnecter"})]})]})]}),p.jsx(xI,{open:r,onOpenChange:s}),p.jsx(RI,{open:i,onOpenChange:a}),p.jsx(NI,{open:c,onOpenChange:u}),p.jsx(kI,{open:h,onOpenChange:f})]})}function OI({selectedSeed:n,onSelectSeed:e}){const{inventory:t}=ye(),r=t.filter(s=>s.type==="seed");return p.jsx("div",{className:"mb-4",children:p.jsx("div",{className:"flex flex-wrap gap-2",children:r.map(s=>p.jsxs("button",{onClick:()=>e(s.itemId),className:`flex items-center h-9 px-4 rounded text-sm ${n===s.itemId?"bg-green-600 hover:bg-green-700":"bg-gray-700 hover:bg-gray-600"} transition-colors`,children:[p.jsx(GT,{className:"w-4 h-4 mr-2"}),s.name," (",s.quantity,")"]},s.id))})})}const Ta=[{id:"carrot_seed",name:"Graines de Carottes",price:2,growthTime:2.5,type:"seed",cropId:"carrot",requiredLevel:0},{id:"tomato_seed",name:"Graines de Tomates",price:8,growthTime:6,type:"seed",cropId:"tomato",requiredLevel:1},{id:"potato_seed",name:"Graines de Pommes de terre",price:12,growthTime:8,type:"seed",cropId:"potato",requiredLevel:2},{id:"wheat_seed",name:"Graines de Blé",price:30,growthTime:15,type:"seed",cropId:"wheat",requiredLevel:3},{id:"corn_seed",name:"Graines de Maïs",price:40,growthTime:20,type:"seed",cropId:"corn",requiredLevel:4},{id:"beet_seed",name:"Graines de Betterave",price:50,growthTime:30,type:"seed",cropId:"beet",requiredLevel:5}],vh=[{id:"carrot",name:"Carotte",basePrice:6,type:"crop"},{id:"tomato",name:"Tomate",basePrice:18,type:"crop"},{id:"potato",name:"Pomme de terre",basePrice:25,type:"crop"},{id:"wheat",name:"Blé",basePrice:70,type:"crop"},{id:"corn",name:"Maïs",basePrice:100,type:"crop"},{id:"beet",name:"Betterave",basePrice:150,type:"crop"}],_h=[{id:"watering_can",name:"Arrosoir",price:50,type:"tool",effect:"Réduit le temps de croissance de 10%",requiredLevel:2},{id:"fertilizer",name:"Engrais",price:100,type:"tool",effect:"Augmente la valeur des récoltes de 20%",requiredLevel:3},{id:"golden_hoe",name:"Houe en Or",price:200,type:"tool",effect:"Double chance de récolte",requiredLevel:4},{id:"magic_scarecrow",name:"Épouvantail Magique",price:300,type:"tool",effect:"Protège les cultures des événements",requiredLevel:5}];function Mp(){const{inventory:n,crops:e,updateInventory:t,updateCrops:r,user:s,updateUser:i}=ye(),{toast:a}=it(),c=E=>E===0?100:Math.pow(2,E)*100,u=(E,C)=>{let A=E,b=c(A);for(;C>=b;)A++,b=c(A);return A},h=(E,C)=>{if(!s)return!1;if(g(E))return a({title:"Erreur",description:"Cette parcelle est déjà occupée",variant:"destructive"}),!1;const b=n.find(_=>_.itemId===C&&_.type==="seed");if(!b||b.quantity<=0)return a({title:"Erreur",description:"Vous n'avez plus de graines de ce type",variant:"destructive"}),!1;const k=Ta.find(_=>_.id===C);if(!k)return!1;const D=vh.find(_=>_.id===k.cropId);if(!D)return!1;const L={id:`crop_${Date.now()}`,name:D.name,growthTime:k.growthTime,basePrice:D.basePrice,plantedAt:Date.now(),position:E,growth:0},M=n.map(_=>_.id===b.id?{..._,quantity:_.quantity-1}:_).filter(_=>_.quantity>0),F=new Set([...e.map(_=>_.name),D.name]);t(M),r([...e,L]);const $={...s.stats,totalPlanted:(s.stats.totalPlanted||0)+1,uniqueCropsPlanted:F.size};return i({...s,stats:$}),a({title:"Succès",description:`${k.name} plantée avec succès!`}),!0},f=E=>{if(!s)return;const C=g(E);if(!C||y(C)<100)return;const A=vh.find(_=>_.name===C.name);if(!A)return;const b=n.findIndex(_=>_.itemId===A.id&&_.type==="crop");let k=[...n];if(b!==-1)k=k.map((_,v)=>v===b?{..._,quantity:_.quantity+1}:_);else{const _={id:`${A.id}_${Date.now()}`,itemId:A.id,name:A.name,quantity:1,type:"crop",price:A.basePrice};k.push(_)}const D=e.filter(_=>_.position.x!==E.x||_.position.y!==E.y),L=A.basePrice,M=s.experience+5,F=u(s.level,M),$={...s.stats,totalHarvested:(s.stats.totalHarvested||0)+1,totalEarned:(s.stats.totalEarned||0)+L};t(k),r(D),i({...s,level:F,experience:M,stats:$}),F>s.level&&a({title:"Niveau supérieur!",description:`Vous avez atteint le niveau ${F}!`}),a({title:"Récolte réussie!",description:`${C.name} a été ajoutée à votre inventaire`})},g=E=>e.find(C=>C.position.x===E.x&&C.position.y===E.y),y=E=>{const C=Date.now()-(E.plantedAt||0);return Math.min(100,C/(E.growthTime*1e3)*100)};return{plantCrop:h,harvestCrop:f,getCropAtPosition:g,getGrowthProgress:y,crops:e}}function VI({position:n,onClick:e}){const{getCropAtPosition:t,getGrowthProgress:r,harvestCrop:s}=Mp(),i=t(n),[a,c]=I.useState(0),[u,h]=I.useState(!1);I.useEffect(()=>{if(!i){c(0);return}const y=()=>{const C=r(i);c(C)};y();const E=setInterval(y,10);return()=>clearInterval(E)},[i,r]);const f=()=>{i&&r(i)>=100?(s(n),h(!0),setTimeout(()=>h(!1),1e3)):e()},g=()=>{if(!i)return null;const y=r(i)>=100;return p.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center p-2",children:[!y&&p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"w-full bg-gray-700 h-1.5 rounded-full overflow-hidden",children:p.jsx("div",{className:"h-full bg-green-500",style:{width:`${a}%`,transition:"width 10ms linear"}})}),p.jsx("span",{className:"text-sm mt-1 text-center font-medium",children:i.name})]}),y&&p.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg",children:p.jsx(rp,{className:"w-5 h-5 text-yellow-500 animate-pulse"})}),u&&p.jsx("div",{className:"absolute -top-8 left-1/2 transform -translate-x-1/2 text-green-400 font-bold animate-bounce",children:"+5 XP"})]})};return p.jsx("div",{onClick:f,className:`
        w-20 h-20 rounded-lg cursor-pointer relative overflow-hidden
        ${i?"bg-gray-700":"bg-gray-700 hover:bg-gray-600"}
        transition-colors duration-200
      `,children:g()})}function MI({selectedSeed:n}){const{plantCrop:e}=Mp(),{user:t,updateUser:r}=ye(),{toast:s}=it(),i=t?.unlockedPlots||2,a=6,c=30,u=y=>y===i?200*Math.pow(2,y-1):0,h=y=>{n&&e(y,n)},f=y=>{if(!t||i>=c)return;const E=u(y);t.coins>=E?(r({...t,coins:t.coins-E,unlockedPlots:i+1}),s({title:"Nouvelle parcelle !",description:`Vous avez débloqué une nouvelle parcelle pour ${E} coins !`})):s({title:"Pas assez de coins",description:`Il vous faut ${E} coins pour débloquer cette parcelle.`,variant:"destructive"})},g=()=>{const y=Math.ceil(c/a),E=[];for(let C=0;C<y;C++){const A=[];for(let b=0;b<a;b++){const k=C*a+b;if(k>=c)break;const D=k>=i,L=u(k),M=k===i;D?A.push(p.jsx("div",{className:"relative",children:p.jsxs("button",{onClick:()=>f(k),disabled:!M||t?.coins<L||i>=c,className:`w-20 h-20 rounded-lg flex items-center justify-center cursor-pointer relative group disabled:opacity-50 disabled:cursor-not-allowed
                  ${M?"bg-gray-700 hover:bg-gray-600":"bg-gray-800"}`,children:[p.jsx(yi,{className:"w-5 h-5 text-gray-500"}),M&&p.jsx("div",{className:"absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",children:i>=c?"Maximum atteint":`Prix: ${L} coins`})]})},`${b}-${C}`)):A.push(p.jsx(VI,{position:{x:b,y:C},onClick:()=>h({x:b,y:C})},`${b}-${C}`))}E.push(p.jsx("div",{className:"flex gap-2 justify-center",children:A},C))}return E};return p.jsx("div",{className:"space-y-2 max-w-4xl mx-auto",children:g()})}function LI(){const{toast:n}=it(),[e,t]=re.useState(null),r=s=>{t(s),n({title:"Astuce :",description:"Cliquez sur une parcelle pour planter la graine"})};return p.jsxs("div",{className:"bg-gray-800 p-4 rounded-lg",children:[p.jsx(OI,{selectedSeed:e,onSelectSeed:r}),p.jsx(MI,{selectedSeed:e})]})}function jI(){const{inventory:n,user:e,updateInventory:t,updateUser:r}=ye(),{toast:s}=it(),i=c=>{const u=n.find(g=>g.id===c);if(!u||!e)return;const h=u.price*u.quantity;r({...e,coins:e.coins+h,stats:{...e.stats,totalEarned:e.stats.totalEarned+h}});const f=n.filter(g=>g.id!==c);t(f),s({title:"Vendu !",description:`Vous avez gagné ${h} coins !`})},a=n.filter(c=>c.type==="crop");return p.jsxs("div",{className:"bg-gray-800 p-4 rounded-lg",children:[p.jsx("h2",{className:"text-xl font-bold mb-4",children:"Inventaire"}),p.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[a.map(c=>p.jsxs("div",{className:"bg-gray-700 p-3 rounded flex justify-between items-center",children:[p.jsxs("div",{children:[p.jsx("div",{className:"font-bold",children:c.name}),p.jsxs("div",{className:"text-sm text-gray-300",children:["Quantité: ",c.quantity]})]}),p.jsxs("button",{onClick:()=>i(c.id),className:"flex items-center bg-yellow-600/20 px-3 py-1 rounded hover:bg-yellow-600/30 transition-colors",children:[p.jsx($n,{className:"w-4 h-4 text-yellow-500 mr-1"}),p.jsxs("span",{className:"text-yellow-500 font-medium",children:["Vendre (",c.price*c.quantity,")"]})]})]},c.id)),a.length===0&&p.jsx("div",{className:"text-gray-400 text-center py-2",children:"Aucun item dans l'inventaire"})]})]})}function FI(){const{user:n,updateUser:e,addToInventory:t}=ye(),{toast:r}=it(),[s,i]=re.useState("seeds"),a=(u,h,f)=>{if(!n)return;if(n.coins<h){r({title:"Pas assez de coins",description:"Vous n'avez pas assez de coins pour cet achât !",variant:"destructive"});return}const g=f==="seed"?Ta.find(y=>y.id===u):_h.find(y=>y.id===u);if(g){if(g.requiredLevel>n.level){r({title:"Niveau insuffisant",description:`Vous devez être niveau ${g.requiredLevel} pour acheter cet objet !`,variant:"destructive"});return}e({...n,coins:n.coins-h,stats:{...n.stats,totalEarned:n.stats.totalEarned-h}}),t({id:`${u}_${Date.now()}`,itemId:u,name:g.name,quantity:1,type:f,price:g.price}),r({title:"Achat effectué !",description:`Vous avez acheté ${g.name} !`})}},c=u=>p.jsx("div",{className:"grid grid-cols-2 gap-3",children:u.map(h=>{const f=n&&(h.requiredLevel>n.level||s==="tools"&&n.level<5);return p.jsxs("div",{className:"bg-gray-700 p-4 rounded-lg",children:[p.jsxs("div",{className:"flex justify-between items-start mb-2",children:[p.jsx("div",{className:"font-bold text-white",children:h.name}),p.jsxs("div",{className:"flex items-center text-yellow-500",children:[p.jsx($n,{className:"w-4 h-4 mr-1"}),p.jsx("span",{children:h.price})]})]}),f&&p.jsxs("div",{className:"text-red-400 text-sm mb-2 flex items-center",children:[p.jsx(yi,{className:"w-3 h-3 mr-1"}),s==="tools"&&n.level<5?"Niveau 5 requis pour les outils":`Niveau ${h.requiredLevel} requis`]}),p.jsxs("button",{onClick:()=>a(h.id,h.price,h.type),className:`
                w-full mt-2 px-3 py-2 rounded-md flex items-center justify-center
                ${f?"bg-gray-600 cursor-not-allowed":n?.coins>=h.price?"bg-green-600 hover:bg-green-700":"bg-gray-600 cursor-not-allowed"}
                transition-colors
              `,disabled:f||(n?.coins||0)<h.price,children:[p.jsx(HT,{className:"w-4 h-4 mr-2"}),f?"Niveau insuffisant":n?.coins>=h.price?"Acheter":"Pas assez de coins"]})]},h.id)})});return p.jsxs("div",{className:"bg-gray-800 p-4 rounded-lg",children:[p.jsxs("div",{className:"flex justify-between items-center mb-4",children:[p.jsx("h2",{className:"text-xl font-bold text-white",children:"Boutique"}),p.jsxs("div",{className:"flex space-x-2",children:[p.jsx("button",{onClick:()=>i("seeds"),className:`px-3 py-1 rounded ${s==="seeds"?"bg-blue-600":"bg-gray-700"}`,children:"Graines"}),p.jsx("button",{onClick:()=>i("tools"),className:`px-3 py-1 rounded ${s==="tools"?"bg-blue-600":"bg-gray-700"}`,children:"Outils"})]})]}),c(s==="seeds"?Ta:_h)]})}function UI(){const n=ye(t=>t.autoSave),e=ye(t=>t.user);I.useEffect(()=>{if(!e)return;const t=setInterval(()=>{n()},1e3);return()=>clearInterval(t)},[e,n])}function BI(){const{crops:n,updateCrops:e,user:t}=ye(),{toast:r}=it();I.useEffect(()=>{if(!t)return;const s=setInterval(()=>{const i=Date.now(),a=n.filter(c=>c.plantedAt&&i-c.plantedAt>=c.growthTime*1e3);a.length>0&&a.forEach(c=>{r({title:"Culture prête !",description:`${c.name} est prête à être récoltée !`})})},1e3);return()=>clearInterval(s)},[n,t,e,r])}function $I(){const n=ye(e=>e.user);return UI(),BI(),n?p.jsx("div",{className:"min-h-screen bg-gray-900 text-white",children:p.jsxs("div",{className:"container mx-auto p-4",children:[p.jsx(DI,{}),p.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[p.jsx("div",{className:"col-span-3",children:p.jsx(jI,{})}),p.jsx("div",{className:"col-span-6",children:p.jsx("div",{className:"bg-gray-800 p-4 rounded-lg",children:p.jsx(LI,{})})}),p.jsx("div",{className:"col-span-3",children:p.jsx(FI,{})})]})]})}):null}function zI(n,e=[]){let t=[];function r(i,a){const c=I.createContext(a),u=t.length;t=[...t,a];function h(g){const{scope:y,children:E,...C}=g,A=y?.[n][u]||c,b=I.useMemo(()=>C,Object.values(C));return p.jsx(A.Provider,{value:b,children:E})}function f(g,y){const E=y?.[n][u]||c,C=I.useContext(E);if(C)return C;if(a!==void 0)return a;throw new Error(`\`${g}\` must be used within \`${i}\``)}return h.displayName=i+"Provider",[h,f]}const s=()=>{const i=t.map(a=>I.createContext(a));return function(c){const u=c?.[n]||i;return I.useMemo(()=>({[`__scope${n}`]:{...c,[n]:u}}),[c,u])}};return s.scopeName=n,[r,qI(s,...e)]}function qI(...n){const e=n[0];if(n.length===1)return e;const t=()=>{const r=n.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(i){const a=r.reduce((c,{useScope:u,scopeName:h})=>{const g=u(i)[`__scope${h}`];return{...c,...g}},{});return I.useMemo(()=>({[`__scope${e.scopeName}`]:a}),[a])}};return t.scopeName=e.scopeName,t}function WI(n){const e=n+"CollectionProvider",[t,r]=zI(e),[s,i]=t(e,{collectionRef:{current:null},itemMap:new Map}),a=E=>{const{scope:C,children:A}=E,b=re.useRef(null),k=re.useRef(new Map).current;return p.jsx(s,{scope:C,itemMap:k,collectionRef:b,children:A})};a.displayName=e;const c=n+"CollectionSlot",u=re.forwardRef((E,C)=>{const{scope:A,children:b}=E,k=i(c,A),D=Xe(C,k.collectionRef);return p.jsx(qr,{ref:D,children:b})});u.displayName=c;const h=n+"CollectionItemSlot",f="data-radix-collection-item",g=re.forwardRef((E,C)=>{const{scope:A,children:b,...k}=E,D=re.useRef(null),L=Xe(C,D),M=i(h,A);return re.useEffect(()=>(M.itemMap.set(D,{ref:D,...k}),()=>void M.itemMap.delete(D))),p.jsx(qr,{[f]:"",ref:L,children:b})});g.displayName=h;function y(E){const C=i(n+"CollectionConsumer",E);return re.useCallback(()=>{const b=C.collectionRef.current;if(!b)return[];const k=Array.from(b.querySelectorAll(`[${f}]`));return Array.from(C.itemMap.values()).sort((M,F)=>k.indexOf(M.ref.current)-k.indexOf(F.ref.current))},[C.collectionRef,C.itemMap])}return[{Provider:a,Slot:u,ItemSlot:g},y,r]}var GI="VisuallyHidden",Rc=I.forwardRef((n,e)=>p.jsx(Ne.span,{...n,ref:e,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...n.style}}));Rc.displayName=GI;var Cc="ToastProvider",[Pc,HI,KI]=WI("Toast"),[Lp,uS]=ip("Toast",[KI]),[QI,$i]=Lp(Cc),jp=n=>{const{__scopeToast:e,label:t="Notification",duration:r=5e3,swipeDirection:s="right",swipeThreshold:i=50,children:a}=n,[c,u]=I.useState(null),[h,f]=I.useState(0),g=I.useRef(!1),y=I.useRef(!1);return t.trim()||console.error(`Invalid prop \`label\` supplied to \`${Cc}\`. Expected non-empty \`string\`.`),p.jsx(Pc.Provider,{scope:e,children:p.jsx(QI,{scope:e,label:t,duration:r,swipeDirection:s,swipeThreshold:i,toastCount:h,viewport:c,onViewportChange:u,onToastAdd:I.useCallback(()=>f(E=>E+1),[]),onToastRemove:I.useCallback(()=>f(E=>E-1),[]),isFocusedToastEscapeKeyDownRef:g,isClosePausedRef:y,children:a})})};jp.displayName=Cc;var Fp="ToastViewport",XI=["F8"],ba="toast.viewportPause",Ia="toast.viewportResume",Up=I.forwardRef((n,e)=>{const{__scopeToast:t,hotkey:r=XI,label:s="Notifications ({hotkey})",...i}=n,a=$i(Fp,t),c=HI(t),u=I.useRef(null),h=I.useRef(null),f=I.useRef(null),g=I.useRef(null),y=Xe(e,g,a.onViewportChange),E=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),C=a.toastCount>0;I.useEffect(()=>{const b=k=>{r.length!==0&&r.every(L=>k[L]||k.code===L)&&g.current?.focus()};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[r]),I.useEffect(()=>{const b=u.current,k=g.current;if(C&&b&&k){const D=()=>{if(!a.isClosePausedRef.current){const $=new CustomEvent(ba);k.dispatchEvent($),a.isClosePausedRef.current=!0}},L=()=>{if(a.isClosePausedRef.current){const $=new CustomEvent(Ia);k.dispatchEvent($),a.isClosePausedRef.current=!1}},M=$=>{!b.contains($.relatedTarget)&&L()},F=()=>{b.contains(document.activeElement)||L()};return b.addEventListener("focusin",D),b.addEventListener("focusout",M),b.addEventListener("pointermove",D),b.addEventListener("pointerleave",F),window.addEventListener("blur",D),window.addEventListener("focus",L),()=>{b.removeEventListener("focusin",D),b.removeEventListener("focusout",M),b.removeEventListener("pointermove",D),b.removeEventListener("pointerleave",F),window.removeEventListener("blur",D),window.removeEventListener("focus",L)}}},[C,a.isClosePausedRef]);const A=I.useCallback(({tabbingDirection:b})=>{const D=c().map(L=>{const M=L.ref.current,F=[M,...lA(M)];return b==="forwards"?F:F.reverse()});return(b==="forwards"?D.reverse():D).flat()},[c]);return I.useEffect(()=>{const b=g.current;if(b){const k=D=>{const L=D.altKey||D.ctrlKey||D.metaKey;if(D.key==="Tab"&&!L){const F=document.activeElement,$=D.shiftKey;if(D.target===b&&$){h.current?.focus();return}const w=A({tabbingDirection:$?"backwards":"forwards"}),S=w.findIndex(R=>R===F);Uo(w.slice(S+1))?D.preventDefault():$?h.current?.focus():f.current?.focus()}};return b.addEventListener("keydown",k),()=>b.removeEventListener("keydown",k)}},[c,A]),p.jsxs(_b,{ref:u,role:"region","aria-label":s.replace("{hotkey}",E),tabIndex:-1,style:{pointerEvents:C?void 0:"none"},children:[C&&p.jsx(Aa,{ref:h,onFocusFromOutsideViewport:()=>{const b=A({tabbingDirection:"forwards"});Uo(b)}}),p.jsx(Pc.Slot,{scope:t,children:p.jsx(Ne.ol,{tabIndex:-1,...i,ref:y})}),C&&p.jsx(Aa,{ref:f,onFocusFromOutsideViewport:()=>{const b=A({tabbingDirection:"backwards"});Uo(b)}})]})});Up.displayName=Fp;var Bp="ToastFocusProxy",Aa=I.forwardRef((n,e)=>{const{__scopeToast:t,onFocusFromOutsideViewport:r,...s}=n,i=$i(Bp,t);return p.jsx(Rc,{"aria-hidden":!0,tabIndex:0,...s,ref:e,style:{position:"fixed"},onFocus:a=>{const c=a.relatedTarget;!i.viewport?.contains(c)&&r()}})});Aa.displayName=Bp;var zi="Toast",JI="toast.swipeStart",YI="toast.swipeMove",ZI="toast.swipeCancel",eA="toast.swipeEnd",$p=I.forwardRef((n,e)=>{const{forceMount:t,open:r,defaultOpen:s,onOpenChange:i,...a}=n,[c=!0,u]=op({prop:r,defaultProp:s,onChange:i});return p.jsx(ss,{present:t||c,children:p.jsx(rA,{open:c,...a,ref:e,onClose:()=>u(!1),onPause:Je(n.onPause),onResume:Je(n.onResume),onSwipeStart:ge(n.onSwipeStart,h=>{h.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:ge(n.onSwipeMove,h=>{const{x:f,y:g}=h.detail.delta;h.currentTarget.setAttribute("data-swipe","move"),h.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${f}px`),h.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${g}px`)}),onSwipeCancel:ge(n.onSwipeCancel,h=>{h.currentTarget.setAttribute("data-swipe","cancel"),h.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),h.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),h.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),h.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:ge(n.onSwipeEnd,h=>{const{x:f,y:g}=h.detail.delta;h.currentTarget.setAttribute("data-swipe","end"),h.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),h.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),h.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${f}px`),h.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${g}px`),u(!1)})})})});$p.displayName=zi;var[tA,nA]=Lp(zi,{onClose(){}}),rA=I.forwardRef((n,e)=>{const{__scopeToast:t,type:r="foreground",duration:s,open:i,onClose:a,onEscapeKeyDown:c,onPause:u,onResume:h,onSwipeStart:f,onSwipeMove:g,onSwipeCancel:y,onSwipeEnd:E,...C}=n,A=$i(zi,t),[b,k]=I.useState(null),D=Xe(e,q=>k(q)),L=I.useRef(null),M=I.useRef(null),F=s||A.duration,$=I.useRef(0),_=I.useRef(F),v=I.useRef(0),{onToastAdd:w,onToastRemove:S}=A,R=Je(()=>{b?.contains(document.activeElement)&&A.viewport?.focus(),a()}),x=I.useCallback(q=>{!q||q===1/0||(window.clearTimeout(v.current),$.current=new Date().getTime(),v.current=window.setTimeout(R,q))},[R]);I.useEffect(()=>{const q=A.viewport;if(q){const pe=()=>{x(_.current),h?.()},ke=()=>{const Me=new Date().getTime()-$.current;_.current=_.current-Me,window.clearTimeout(v.current),u?.()};return q.addEventListener(ba,ke),q.addEventListener(Ia,pe),()=>{q.removeEventListener(ba,ke),q.removeEventListener(Ia,pe)}}},[A.viewport,F,u,h,x]),I.useEffect(()=>{i&&!A.isClosePausedRef.current&&x(F)},[i,F,A.isClosePausedRef,x]),I.useEffect(()=>(w(),()=>S()),[w,S]);const T=I.useMemo(()=>b?Qp(b):null,[b]);return A.viewport?p.jsxs(p.Fragment,{children:[T&&p.jsx(sA,{__scopeToast:t,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:T}),p.jsx(tA,{scope:t,onClose:R,children:xa.createPortal(p.jsx(Pc.ItemSlot,{scope:t,children:p.jsx(vb,{asChild:!0,onEscapeKeyDown:ge(c,()=>{A.isFocusedToastEscapeKeyDownRef.current||R(),A.isFocusedToastEscapeKeyDownRef.current=!1}),children:p.jsx(Ne.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":i?"open":"closed","data-swipe-direction":A.swipeDirection,...C,ref:D,style:{userSelect:"none",touchAction:"none",...n.style},onKeyDown:ge(n.onKeyDown,q=>{q.key==="Escape"&&(c?.(q.nativeEvent),q.nativeEvent.defaultPrevented||(A.isFocusedToastEscapeKeyDownRef.current=!0,R()))}),onPointerDown:ge(n.onPointerDown,q=>{q.button===0&&(L.current={x:q.clientX,y:q.clientY})}),onPointerMove:ge(n.onPointerMove,q=>{if(!L.current)return;const pe=q.clientX-L.current.x,ke=q.clientY-L.current.y,Me=!!M.current,De=["left","right"].includes(A.swipeDirection),Le=["left","up"].includes(A.swipeDirection)?Math.min:Math.max,zt=De?Le(0,pe):0,Fe=De?0:Le(0,ke),qe=q.pointerType==="touch"?10:2,le={x:zt,y:Fe},is={originalEvent:q,delta:le};Me?(M.current=le,Vs(YI,g,is,{discrete:!1})):wh(le,A.swipeDirection,qe)?(M.current=le,Vs(JI,f,is,{discrete:!1}),q.target.setPointerCapture(q.pointerId)):(Math.abs(pe)>qe||Math.abs(ke)>qe)&&(L.current=null)}),onPointerUp:ge(n.onPointerUp,q=>{const pe=M.current,ke=q.target;if(ke.hasPointerCapture(q.pointerId)&&ke.releasePointerCapture(q.pointerId),M.current=null,L.current=null,pe){const Me=q.currentTarget,De={originalEvent:q,delta:pe};wh(pe,A.swipeDirection,A.swipeThreshold)?Vs(eA,E,De,{discrete:!0}):Vs(ZI,y,De,{discrete:!0}),Me.addEventListener("click",Le=>Le.preventDefault(),{once:!0})}})})})}),A.viewport)})]}):null}),sA=n=>{const{__scopeToast:e,children:t,...r}=n,s=$i(zi,e),[i,a]=I.useState(!1),[c,u]=I.useState(!1);return aA(()=>a(!0)),I.useEffect(()=>{const h=window.setTimeout(()=>u(!0),1e3);return()=>window.clearTimeout(h)},[]),c?null:p.jsx(bc,{asChild:!0,children:p.jsx(Rc,{...r,children:i&&p.jsxs(p.Fragment,{children:[s.label," ",t]})})})},iA="ToastTitle",zp=I.forwardRef((n,e)=>{const{__scopeToast:t,...r}=n;return p.jsx(Ne.div,{...r,ref:e})});zp.displayName=iA;var oA="ToastDescription",qp=I.forwardRef((n,e)=>{const{__scopeToast:t,...r}=n;return p.jsx(Ne.div,{...r,ref:e})});qp.displayName=oA;var Wp="ToastAction",Gp=I.forwardRef((n,e)=>{const{altText:t,...r}=n;return t.trim()?p.jsx(Kp,{altText:t,asChild:!0,children:p.jsx(Nc,{...r,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${Wp}\`. Expected non-empty \`string\`.`),null)});Gp.displayName=Wp;var Hp="ToastClose",Nc=I.forwardRef((n,e)=>{const{__scopeToast:t,...r}=n,s=nA(Hp,t);return p.jsx(Kp,{asChild:!0,children:p.jsx(Ne.button,{type:"button",...r,ref:e,onClick:ge(n.onClick,s.onClose)})})});Nc.displayName=Hp;var Kp=I.forwardRef((n,e)=>{const{__scopeToast:t,altText:r,...s}=n;return p.jsx(Ne.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...s,ref:e})});function Qp(n){const e=[];return Array.from(n.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&e.push(r.textContent),cA(r)){const s=r.ariaHidden||r.hidden||r.style.display==="none",i=r.dataset.radixToastAnnounceExclude==="";if(!s)if(i){const a=r.dataset.radixToastAnnounceAlt;a&&e.push(a)}else e.push(...Qp(r))}}),e}function Vs(n,e,t,{discrete:r}){const s=t.originalEvent.currentTarget,i=new CustomEvent(n,{bubbles:!0,cancelable:!0,detail:t});e&&s.addEventListener(n,e,{once:!0}),r?ap(s,i):s.dispatchEvent(i)}var wh=(n,e,t=0)=>{const r=Math.abs(n.x),s=Math.abs(n.y),i=r>s;return e==="left"||e==="right"?i&&r>t:!i&&s>t};function aA(n=()=>{}){const e=Je(n);zr(()=>{let t=0,r=0;return t=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(t),window.cancelAnimationFrame(r)}},[e])}function cA(n){return n.nodeType===n.ELEMENT_NODE}function lA(n){const e=[],t=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const s=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||s?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)e.push(t.currentNode);return e}function Uo(n){const e=document.activeElement;return n.some(t=>t===e?!0:(t.focus(),document.activeElement!==e))}var uA=jp,Xp=Up,Jp=$p,Yp=zp,Zp=qp,em=Gp,tm=Nc;function nm(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var s=n.length;for(e=0;e<s;e++)n[e]&&(t=nm(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function rm(){for(var n,e,t=0,r="",s=arguments.length;t<s;t++)(n=arguments[t])&&(e=nm(n))&&(r&&(r+=" "),r+=e);return r}const Eh=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,Th=rm,hA=(n,e)=>t=>{var r;if(e?.variants==null)return Th(n,t?.class,t?.className);const{variants:s,defaultVariants:i}=e,a=Object.keys(s).map(h=>{const f=t?.[h],g=i?.[h];if(f===null)return null;const y=Eh(f)||Eh(g);return s[h][y]}),c=t&&Object.entries(t).reduce((h,f)=>{let[g,y]=f;return y===void 0||(h[g]=y),h},{}),u=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((h,f)=>{let{class:g,className:y,...E}=f;return Object.entries(E).every(C=>{let[A,b]=C;return Array.isArray(b)?b.includes({...i,...c}[A]):{...i,...c}[A]===b})?[...h,g,y]:h},[]);return Th(n,a,u,t?.class,t?.className)};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),sm=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=I.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:a,...c},u)=>I.createElement("svg",{ref:u,...fA,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:sm("lucide",s),...c},[...a.map(([h,f])=>I.createElement(h,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=(n,e)=>{const t=I.forwardRef(({className:r,...s},i)=>I.createElement(pA,{ref:i,iconNode:e,className:sm(`lucide-${dA(n)}`,r),...s}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=mA("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),kc="-",yA=n=>{const e=_A(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=n;return{getClassGroupId:a=>{const c=a.split(kc);return c[0]===""&&c.length!==1&&c.shift(),im(c,e)||vA(a)},getConflictingClassGroupIds:(a,c)=>{const u=t[a]||[];return c&&r[a]?[...u,...r[a]]:u}}},im=(n,e)=>{if(n.length===0)return e.classGroupId;const t=n[0],r=e.nextPart.get(t),s=r?im(n.slice(1),r):void 0;if(s)return s;if(e.validators.length===0)return;const i=n.join(kc);return e.validators.find(({validator:a})=>a(i))?.classGroupId},bh=/^\[(.+)\]$/,vA=n=>{if(bh.test(n)){const e=bh.exec(n)[1],t=e?.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},_A=n=>{const{theme:e,prefix:t}=n,r={nextPart:new Map,validators:[]};return EA(Object.entries(n.classGroups),t).forEach(([i,a])=>{Sa(a,r,i,e)}),r},Sa=(n,e,t,r)=>{n.forEach(s=>{if(typeof s=="string"){const i=s===""?e:Ih(e,s);i.classGroupId=t;return}if(typeof s=="function"){if(wA(s)){Sa(s(r),e,t,r);return}e.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([i,a])=>{Sa(a,Ih(e,i),t,r)})})},Ih=(n,e)=>{let t=n;return e.split(kc).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t},wA=n=>n.isThemeGetter,EA=(n,e)=>e?n.map(([t,r])=>{const s=r.map(i=>typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([a,c])=>[e+a,c])):i);return[t,s]}):n,TA=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,r=new Map;const s=(i,a)=>{t.set(i,a),e++,e>n&&(e=0,r=t,t=new Map)};return{get(i){let a=t.get(i);if(a!==void 0)return a;if((a=r.get(i))!==void 0)return s(i,a),a},set(i,a){t.has(i)?t.set(i,a):s(i,a)}}},om="!",bA=n=>{const{separator:e,experimentalParseClassName:t}=n,r=e.length===1,s=e[0],i=e.length,a=c=>{const u=[];let h=0,f=0,g;for(let b=0;b<c.length;b++){let k=c[b];if(h===0){if(k===s&&(r||c.slice(b,b+i)===e)){u.push(c.slice(f,b)),f=b+i;continue}if(k==="/"){g=b;continue}}k==="["?h++:k==="]"&&h--}const y=u.length===0?c:c.substring(f),E=y.startsWith(om),C=E?y.substring(1):y,A=g&&g>f?g-f:void 0;return{modifiers:u,hasImportantModifier:E,baseClassName:C,maybePostfixModifierPosition:A}};return t?c=>t({className:c,parseClassName:a}):a},IA=n=>{if(n.length<=1)return n;const e=[];let t=[];return n.forEach(r=>{r[0]==="["?(e.push(...t.sort(),r),t=[]):t.push(r)}),e.push(...t.sort()),e},AA=n=>({cache:TA(n.cacheSize),parseClassName:bA(n),...yA(n)}),SA=/\s+/,xA=(n,e)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:s}=e,i=[],a=n.trim().split(SA);let c="";for(let u=a.length-1;u>=0;u-=1){const h=a[u],{modifiers:f,hasImportantModifier:g,baseClassName:y,maybePostfixModifierPosition:E}=t(h);let C=!!E,A=r(C?y.substring(0,E):y);if(!A){if(!C){c=h+(c.length>0?" "+c:c);continue}if(A=r(y),!A){c=h+(c.length>0?" "+c:c);continue}C=!1}const b=IA(f).join(":"),k=g?b+om:b,D=k+A;if(i.includes(D))continue;i.push(D);const L=s(A,C);for(let M=0;M<L.length;++M){const F=L[M];i.push(k+F)}c=h+(c.length>0?" "+c:c)}return c};function RA(){let n=0,e,t,r="";for(;n<arguments.length;)(e=arguments[n++])&&(t=am(e))&&(r&&(r+=" "),r+=t);return r}const am=n=>{if(typeof n=="string")return n;let e,t="";for(let r=0;r<n.length;r++)n[r]&&(e=am(n[r]))&&(t&&(t+=" "),t+=e);return t};function CA(n,...e){let t,r,s,i=a;function a(u){const h=e.reduce((f,g)=>g(f),n());return t=AA(h),r=t.cache.get,s=t.cache.set,i=c,c(u)}function c(u){const h=r(u);if(h)return h;const f=xA(u,t);return s(u,f),f}return function(){return i(RA.apply(null,arguments))}}const ie=n=>{const e=t=>t[n]||[];return e.isThemeGetter=!0,e},cm=/^\[(?:([a-z-]+):)?(.+)\]$/i,PA=/^\d+\/\d+$/,NA=new Set(["px","full","screen"]),kA=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,DA=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,OA=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,VA=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,MA=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ct=n=>Cn(n)||NA.has(n)||PA.test(n),At=n=>tr(n,"length",qA),Cn=n=>!!n&&!Number.isNaN(Number(n)),Bo=n=>tr(n,"number",Cn),wr=n=>!!n&&Number.isInteger(Number(n)),LA=n=>n.endsWith("%")&&Cn(n.slice(0,-1)),Q=n=>cm.test(n),St=n=>kA.test(n),jA=new Set(["length","size","percentage"]),FA=n=>tr(n,jA,lm),UA=n=>tr(n,"position",lm),BA=new Set(["image","url"]),$A=n=>tr(n,BA,GA),zA=n=>tr(n,"",WA),Er=()=>!0,tr=(n,e,t)=>{const r=cm.exec(n);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):t(r[2]):!1},qA=n=>DA.test(n)&&!OA.test(n),lm=()=>!1,WA=n=>VA.test(n),GA=n=>MA.test(n),HA=()=>{const n=ie("colors"),e=ie("spacing"),t=ie("blur"),r=ie("brightness"),s=ie("borderColor"),i=ie("borderRadius"),a=ie("borderSpacing"),c=ie("borderWidth"),u=ie("contrast"),h=ie("grayscale"),f=ie("hueRotate"),g=ie("invert"),y=ie("gap"),E=ie("gradientColorStops"),C=ie("gradientColorStopPositions"),A=ie("inset"),b=ie("margin"),k=ie("opacity"),D=ie("padding"),L=ie("saturate"),M=ie("scale"),F=ie("sepia"),$=ie("skew"),_=ie("space"),v=ie("translate"),w=()=>["auto","contain","none"],S=()=>["auto","hidden","clip","visible","scroll"],R=()=>["auto",Q,e],x=()=>[Q,e],T=()=>["",ct,At],q=()=>["auto",Cn,Q],pe=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],ke=()=>["solid","dashed","dotted","double","none"],Me=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],De=()=>["start","end","center","between","around","evenly","stretch"],Le=()=>["","0",Q],zt=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Fe=()=>[Cn,Q];return{cacheSize:500,separator:":",theme:{colors:[Er],spacing:[ct,At],blur:["none","",St,Q],brightness:Fe(),borderColor:[n],borderRadius:["none","","full",St,Q],borderSpacing:x(),borderWidth:T(),contrast:Fe(),grayscale:Le(),hueRotate:Fe(),invert:Le(),gap:x(),gradientColorStops:[n],gradientColorStopPositions:[LA,At],inset:R(),margin:R(),opacity:Fe(),padding:x(),saturate:Fe(),scale:Fe(),sepia:Le(),skew:Fe(),space:x(),translate:x()},classGroups:{aspect:[{aspect:["auto","square","video",Q]}],container:["container"],columns:[{columns:[St]}],"break-after":[{"break-after":zt()}],"break-before":[{"break-before":zt()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...pe(),Q]}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:w()}],"overscroll-x":[{"overscroll-x":w()}],"overscroll-y":[{"overscroll-y":w()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[A]}],"inset-x":[{"inset-x":[A]}],"inset-y":[{"inset-y":[A]}],start:[{start:[A]}],end:[{end:[A]}],top:[{top:[A]}],right:[{right:[A]}],bottom:[{bottom:[A]}],left:[{left:[A]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",wr,Q]}],basis:[{basis:R()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Q]}],grow:[{grow:Le()}],shrink:[{shrink:Le()}],order:[{order:["first","last","none",wr,Q]}],"grid-cols":[{"grid-cols":[Er]}],"col-start-end":[{col:["auto",{span:["full",wr,Q]},Q]}],"col-start":[{"col-start":q()}],"col-end":[{"col-end":q()}],"grid-rows":[{"grid-rows":[Er]}],"row-start-end":[{row:["auto",{span:[wr,Q]},Q]}],"row-start":[{"row-start":q()}],"row-end":[{"row-end":q()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Q]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Q]}],gap:[{gap:[y]}],"gap-x":[{"gap-x":[y]}],"gap-y":[{"gap-y":[y]}],"justify-content":[{justify:["normal",...De()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...De(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...De(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[D]}],px:[{px:[D]}],py:[{py:[D]}],ps:[{ps:[D]}],pe:[{pe:[D]}],pt:[{pt:[D]}],pr:[{pr:[D]}],pb:[{pb:[D]}],pl:[{pl:[D]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[_]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[_]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Q,e]}],"min-w":[{"min-w":[Q,e,"min","max","fit"]}],"max-w":[{"max-w":[Q,e,"none","full","min","max","fit","prose",{screen:[St]},St]}],h:[{h:[Q,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Q,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Q,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Q,e,"auto","min","max","fit"]}],"font-size":[{text:["base",St,At]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Bo]}],"font-family":[{font:[Er]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Q]}],"line-clamp":[{"line-clamp":["none",Cn,Bo]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",ct,Q]}],"list-image":[{"list-image":["none",Q]}],"list-style-type":[{list:["none","disc","decimal",Q]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[k]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[k]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ke(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",ct,At]}],"underline-offset":[{"underline-offset":["auto",ct,Q]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:x()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Q]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Q]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[k]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...pe(),UA]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",FA]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},$A]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[C]}],"gradient-via-pos":[{via:[C]}],"gradient-to-pos":[{to:[C]}],"gradient-from":[{from:[E]}],"gradient-via":[{via:[E]}],"gradient-to":[{to:[E]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[c]}],"border-w-x":[{"border-x":[c]}],"border-w-y":[{"border-y":[c]}],"border-w-s":[{"border-s":[c]}],"border-w-e":[{"border-e":[c]}],"border-w-t":[{"border-t":[c]}],"border-w-r":[{"border-r":[c]}],"border-w-b":[{"border-b":[c]}],"border-w-l":[{"border-l":[c]}],"border-opacity":[{"border-opacity":[k]}],"border-style":[{border:[...ke(),"hidden"]}],"divide-x":[{"divide-x":[c]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[c]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[k]}],"divide-style":[{divide:ke()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...ke()]}],"outline-offset":[{"outline-offset":[ct,Q]}],"outline-w":[{outline:[ct,At]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:T()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[k]}],"ring-offset-w":[{"ring-offset":[ct,At]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",St,zA]}],"shadow-color":[{shadow:[Er]}],opacity:[{opacity:[k]}],"mix-blend":[{"mix-blend":[...Me(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Me()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[r]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",St,Q]}],grayscale:[{grayscale:[h]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[g]}],saturate:[{saturate:[L]}],sepia:[{sepia:[F]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[h]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[k]}],"backdrop-saturate":[{"backdrop-saturate":[L]}],"backdrop-sepia":[{"backdrop-sepia":[F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Q]}],duration:[{duration:Fe()}],ease:[{ease:["linear","in","out","in-out",Q]}],delay:[{delay:Fe()}],animate:[{animate:["none","spin","ping","pulse","bounce",Q]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[M]}],"scale-x":[{"scale-x":[M]}],"scale-y":[{"scale-y":[M]}],rotate:[{rotate:[wr,Q]}],"translate-x":[{"translate-x":[v]}],"translate-y":[{"translate-y":[v]}],"skew-x":[{"skew-x":[$]}],"skew-y":[{"skew-y":[$]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Q]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Q]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":x()}],"scroll-mx":[{"scroll-mx":x()}],"scroll-my":[{"scroll-my":x()}],"scroll-ms":[{"scroll-ms":x()}],"scroll-me":[{"scroll-me":x()}],"scroll-mt":[{"scroll-mt":x()}],"scroll-mr":[{"scroll-mr":x()}],"scroll-mb":[{"scroll-mb":x()}],"scroll-ml":[{"scroll-ml":x()}],"scroll-p":[{"scroll-p":x()}],"scroll-px":[{"scroll-px":x()}],"scroll-py":[{"scroll-py":x()}],"scroll-ps":[{"scroll-ps":x()}],"scroll-pe":[{"scroll-pe":x()}],"scroll-pt":[{"scroll-pt":x()}],"scroll-pr":[{"scroll-pr":x()}],"scroll-pb":[{"scroll-pb":x()}],"scroll-pl":[{"scroll-pl":x()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Q]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[ct,At,Bo]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},KA=CA(HA);function nr(...n){return KA(rm(n))}const QA=uA,um=I.forwardRef(({className:n,...e},t)=>p.jsx(Xp,{ref:t,className:nr("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",n),...e}));um.displayName=Xp.displayName;const XA=hA("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-xl border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=closed]:slide-out-to-right-full data-[state=open]:sm:slide-in-from-bottom-full bg-opacity-50 backdrop-blur-sm",{variants:{variant:{default:"border-gray-800 bg-gray-950 text-gray-50",destructive:"destructive group border-red-900 bg-red-900 text-gray-50"}},defaultVariants:{variant:"default"}}),hm=I.forwardRef(({className:n,variant:e,...t},r)=>p.jsx(Jp,{ref:r,className:nr(XA({variant:e}),n),...t}));hm.displayName=Jp.displayName;const JA=I.forwardRef(({className:n,...e},t)=>p.jsx(em,{ref:t,className:nr("inline-flex h-8 shrink-0 items-center justify-center rounded-lg border border-gray-800 bg-transparent px-3 text-sm font-medium ring-offset-gray-950 transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-gray-800/40 group-[.destructive]:hover:border-red-900/30 group-[.destructive]:hover:bg-red-900 group-[.destructive]:hover:text-gray-50 group-[.destructive]:focus:ring-red-900",n),...e}));JA.displayName=em.displayName;const dm=I.forwardRef(({className:n,...e},t)=>p.jsx(tm,{ref:t,className:nr("absolute right-2 top-2 rounded-md p-1 text-gray-50/50 opacity-0 transition-opacity hover:text-gray-50 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",n),"toast-close":"",...e,children:p.jsx(gA,{className:"h-4 w-4"})}));dm.displayName=tm.displayName;const fm=I.forwardRef(({className:n,...e},t)=>p.jsx(Yp,{ref:t,className:nr("text-sm font-semibold text-gray-50",n),...e}));fm.displayName=Yp.displayName;const pm=I.forwardRef(({className:n,...e},t)=>p.jsx(Zp,{ref:t,className:nr("text-sm opacity-90 text-gray-50",n),...e}));pm.displayName=Zp.displayName;function YA(){const{toasts:n}=it();return p.jsxs(QA,{children:[n.map(function({id:e,title:t,description:r,action:s,...i}){return p.jsxs(hm,{...i,children:[p.jsxs("div",{className:"grid gap-1",children:[t&&p.jsx(fm,{children:t}),r&&p.jsx(pm,{children:r})]}),s,p.jsx(dm,{})]},e)}),p.jsx(um,{})]})}function ZA(){const{user:n,autoSave:e}=ye();I.useEffect(()=>{if(!n)return;const t=s=>{if(!s.key?.startsWith("gameState_"))return;const i=s.key.replace("gameState_","");i!==n.username&&window.dispatchEvent(new CustomEvent("game:userUpdate",{detail:{username:i,data:s.newValue?JSON.parse(s.newValue):null}}))};window.addEventListener("storage",t);const r=setInterval(()=>{e()},1e3);return()=>{window.removeEventListener("storage",t),clearInterval(r)}},[n,e])}function eS({children:n}){const e=ye(t=>t.user);return ZA(),e?p.jsx(p.Fragment,{children:n}):p.jsx($o,{to:"/login",replace:!0})}function tS(){return p.jsxs(Xm,{children:[p.jsxs(Jm,{children:[p.jsx(yr,{path:"/",element:p.jsx($o,{to:"/login",replace:!0})}),p.jsx(yr,{path:"/login",element:p.jsx(VT,{})}),p.jsx(yr,{path:"/register",element:p.jsx(MT,{})}),p.jsx(yr,{path:"/game",element:p.jsx(eS,{children:p.jsx($I,{})})}),p.jsx(yr,{path:"*",element:p.jsx($o,{to:"/login",replace:!0})})]}),p.jsx(YA,{})]})}xh(document.getElementById("root")).render(p.jsx(I.StrictMode,{children:p.jsx(tS,{})}));
