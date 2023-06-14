(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function h4(n,e){const t=Object.create(null),r=n.split(",");for(let i=0;i<r.length;i++)t[r[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}const p0={},Li=[],kt=()=>{},sf=()=>!1,of=/^on[^a-z]/,C1=n=>of.test(n),d4=n=>n.startsWith("onUpdate:"),L0=Object.assign,f4=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},af=Object.prototype.hasOwnProperty,Qe=(n,e)=>af.call(n,e),Re=Array.isArray,Pi=n=>Vo(n)==="[object Map]",L1=n=>Vo(n)==="[object Set]",X3=n=>Vo(n)==="[object Date]",He=n=>typeof n=="function",S0=n=>typeof n=="string",uo=n=>typeof n=="symbol",c0=n=>n!==null&&typeof n=="object",s8=n=>c0(n)&&He(n.then)&&He(n.catch),o8=Object.prototype.toString,Vo=n=>o8.call(n),lf=n=>Vo(n).slice(8,-1),a8=n=>Vo(n)==="[object Object]",p4=n=>S0(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,$a=h4(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),P1=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},cf=/-(\w)/g,tn=P1(n=>n.replace(cf,(e,t)=>t?t.toUpperCase():"")),uf=/\B([A-Z])/g,Wr=P1(n=>n.replace(uf,"-$1").toLowerCase()),R1=P1(n=>n.charAt(0).toUpperCase()+n.slice(1)),Xa=P1(n=>n?`on${R1(n)}`:""),ho=(n,e)=>!Object.is(n,e),ja=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},i1=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},_l=n=>{const e=parseFloat(n);return isNaN(e)?n:e},hf=n=>{const e=S0(n)?Number(n):NaN;return isNaN(e)?n:e};let j3;const gl=()=>j3||(j3=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function m4(n){if(Re(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],i=S0(r)?mf(r):m4(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(S0(n))return n;if(c0(n))return n}}const df=/;(?![^(]*\))/g,ff=/:([^]+)/,pf=/\/\*[^]*?\*\//g;function mf(n){const e={};return n.replace(pf,"").split(df).forEach(t=>{if(t){const r=t.split(ff);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function _4(n){let e="";if(S0(n))e=n;else if(Re(n))for(let t=0;t<n.length;t++){const r=_4(n[t]);r&&(e+=r+" ")}else if(c0(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const _f="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gf=h4(_f);function l8(n){return!!n||n===""}function vf(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=F1(n[r],e[r]);return t}function F1(n,e){if(n===e)return!0;let t=X3(n),r=X3(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=uo(n),r=uo(e),t||r)return n===e;if(t=Re(n),r=Re(e),t||r)return t&&r?vf(n,e):!1;if(t=c0(n),r=c0(e),t||r){if(!t||!r)return!1;const i=Object.keys(n).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!F1(n[o],e[o]))return!1}}return String(n)===String(e)}function c8(n,e){return n.findIndex(t=>F1(t,e))}const A1e=n=>S0(n)?n:n==null?"":Re(n)||c0(n)&&(n.toString===o8||!He(n.toString))?JSON.stringify(n,u8,2):String(n),u8=(n,e)=>e&&e.__v_isRef?u8(n,e.value):Pi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,i])=>(t[`${r} =>`]=i,t),{})}:L1(e)?{[`Set(${e.size})`]:[...e.values()]}:c0(e)&&!Re(e)&&!a8(e)?String(e):e;let _t;class h8{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=_t;try{return _t=this,e()}finally{_t=t}}}on(){_t=this}off(){_t=this.parent}stop(e){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function d8(n){return new h8(n)}function xf(n,e=_t){e&&e.active&&e.effects.push(n)}function f8(){return _t}function yf(n){_t&&_t.cleanups.push(n)}const g4=n=>{const e=new Set(n);return e.w=0,e.n=0,e},p8=n=>(n.w&ir)>0,m8=n=>(n.n&ir)>0,wf=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=ir},Mf=n=>{const{deps:e}=n;if(e.length){let t=0;for(let r=0;r<e.length;r++){const i=e[r];p8(i)&&!m8(i)?i.delete(n):e[t++]=i,i.w&=~ir,i.n&=~ir}e.length=t}},s1=new WeakMap;let Ws=0,ir=1;const vl=30;let Bt;const Hr=Symbol(""),xl=Symbol("");class v4{constructor(e,t=null,r){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,xf(this,r)}run(){if(!this.active)return this.fn();let e=Bt,t=Qn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Bt,Bt=this,Qn=!0,ir=1<<++Ws,Ws<=vl?wf(this):q3(this),this.fn()}finally{Ws<=vl&&Mf(this),ir=1<<--Ws,Bt=this.parent,Qn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Bt===this?this.deferStop=!0:this.active&&(q3(this),this.onStop&&this.onStop(),this.active=!1)}}function q3(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Qn=!0;const _8=[];function Zi(){_8.push(Qn),Qn=!1}function Ji(){const n=_8.pop();Qn=n===void 0?!0:n}function dt(n,e,t){if(Qn&&Bt){let r=s1.get(n);r||s1.set(n,r=new Map);let i=r.get(t);i||r.set(t,i=g4()),g8(i)}}function g8(n,e){let t=!1;Ws<=vl?m8(n)||(n.n|=ir,t=!p8(n)):t=!n.has(Bt),t&&(n.add(Bt),Bt.deps.push(n))}function Sn(n,e,t,r,i,s){const o=s1.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Re(n)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Re(n)?p4(t)&&a.push(o.get("length")):(a.push(o.get(Hr)),Pi(n)&&a.push(o.get(xl)));break;case"delete":Re(n)||(a.push(o.get(Hr)),Pi(n)&&a.push(o.get(xl)));break;case"set":Pi(n)&&a.push(o.get(Hr));break}if(a.length===1)a[0]&&yl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);yl(g4(l))}}function yl(n,e){const t=Re(n)?n:[...n];for(const r of t)r.computed&&Y3(r);for(const r of t)r.computed||Y3(r)}function Y3(n,e){(n!==Bt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}function bf(n,e){var t;return(t=s1.get(n))==null?void 0:t.get(e)}const Sf=h4("__proto__,__v_isRef,__isVue"),v8=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(uo)),Af=x4(),Tf=x4(!1,!0),Ef=x4(!0),Q3=Cf();function Cf(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const r=qe(this);for(let s=0,o=this.length;s<o;s++)dt(r,"get",s+"");const i=r[e](...t);return i===-1||i===!1?r[e](...t.map(qe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Zi();const r=qe(this)[e].apply(this,t);return Ji(),r}}),n}function Lf(n){const e=qe(this);return dt(e,"has",n),e.hasOwnProperty(n)}function x4(n=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!n;if(i==="__v_isReadonly")return n;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(n?e?$f:b8:e?M8:w8).get(r))return r;const o=Re(r);if(!n){if(o&&Qe(Q3,i))return Reflect.get(Q3,i,s);if(i==="hasOwnProperty")return Lf}const a=Reflect.get(r,i,s);return(uo(i)?v8.has(i):Sf(i))||(n||dt(r,"get",i),e)?a:M0(a)?o&&p4(i)?a:a.value:c0(a)?n?S8(a):es(a):a}}const Pf=x8(),Rf=x8(!0);function x8(n=!1){return function(t,r,i,s){let o=t[r];if(Di(o)&&M0(o)&&!M0(i))return!1;if(!n&&(!o1(i)&&!Di(i)&&(o=qe(o),i=qe(i)),!Re(t)&&M0(o)&&!M0(i)))return o.value=i,!0;const a=Re(t)&&p4(r)?Number(r)<t.length:Qe(t,r),l=Reflect.set(t,r,i,s);return t===qe(s)&&(a?ho(i,o)&&Sn(t,"set",r,i):Sn(t,"add",r,i)),l}}function Ff(n,e){const t=Qe(n,e);n[e];const r=Reflect.deleteProperty(n,e);return r&&t&&Sn(n,"delete",e,void 0),r}function zf(n,e){const t=Reflect.has(n,e);return(!uo(e)||!v8.has(e))&&dt(n,"has",e),t}function If(n){return dt(n,"iterate",Re(n)?"length":Hr),Reflect.ownKeys(n)}const y8={get:Af,set:Pf,deleteProperty:Ff,has:zf,ownKeys:If},Df={get:Ef,set(n,e){return!0},deleteProperty(n,e){return!0}},Nf=L0({},y8,{get:Tf,set:Rf}),y4=n=>n,z1=n=>Reflect.getPrototypeOf(n);function ea(n,e,t=!1,r=!1){n=n.__v_raw;const i=qe(n),s=qe(e);t||(e!==s&&dt(i,"get",e),dt(i,"get",s));const{has:o}=z1(i),a=r?y4:t?b4:fo;if(o.call(i,e))return a(n.get(e));if(o.call(i,s))return a(n.get(s));n!==i&&n.get(e)}function ta(n,e=!1){const t=this.__v_raw,r=qe(t),i=qe(n);return e||(n!==i&&dt(r,"has",n),dt(r,"has",i)),n===i?t.has(n):t.has(n)||t.has(i)}function na(n,e=!1){return n=n.__v_raw,!e&&dt(qe(n),"iterate",Hr),Reflect.get(n,"size",n)}function K3(n){n=qe(n);const e=qe(this);return z1(e).has.call(e,n)||(e.add(n),Sn(e,"add",n,n)),this}function Z3(n,e){e=qe(e);const t=qe(this),{has:r,get:i}=z1(t);let s=r.call(t,n);s||(n=qe(n),s=r.call(t,n));const o=i.call(t,n);return t.set(n,e),s?ho(e,o)&&Sn(t,"set",n,e):Sn(t,"add",n,e),this}function J3(n){const e=qe(this),{has:t,get:r}=z1(e);let i=t.call(e,n);i||(n=qe(n),i=t.call(e,n)),r&&r.call(e,n);const s=e.delete(n);return i&&Sn(e,"delete",n,void 0),s}function ec(){const n=qe(this),e=n.size!==0,t=n.clear();return e&&Sn(n,"clear",void 0,void 0),t}function ra(n,e){return function(r,i){const s=this,o=s.__v_raw,a=qe(o),l=e?y4:n?b4:fo;return!n&&dt(a,"iterate",Hr),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function ia(n,e,t){return function(...r){const i=this.__v_raw,s=qe(i),o=Pi(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=i[n](...r),u=t?y4:e?b4:fo;return!e&&dt(s,"iterate",l?xl:Hr),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Rn(n){return function(...e){return n==="delete"?!1:this}}function Of(){const n={get(s){return ea(this,s)},get size(){return na(this)},has:ta,add:K3,set:Z3,delete:J3,clear:ec,forEach:ra(!1,!1)},e={get(s){return ea(this,s,!1,!0)},get size(){return na(this)},has:ta,add:K3,set:Z3,delete:J3,clear:ec,forEach:ra(!1,!0)},t={get(s){return ea(this,s,!0)},get size(){return na(this,!0)},has(s){return ta.call(this,s,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:ra(!0,!1)},r={get(s){return ea(this,s,!0,!0)},get size(){return na(this,!0)},has(s){return ta.call(this,s,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:ra(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ia(s,!1,!1),t[s]=ia(s,!0,!1),e[s]=ia(s,!1,!0),r[s]=ia(s,!0,!0)}),[n,t,e,r]}const[Bf,Hf,Uf,Vf]=Of();function w4(n,e){const t=e?n?Vf:Uf:n?Hf:Bf;return(r,i,s)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?r:Reflect.get(Qe(t,i)&&i in r?t:r,i,s)}const kf={get:w4(!1,!1)},Gf={get:w4(!1,!0)},Wf={get:w4(!0,!1)},w8=new WeakMap,M8=new WeakMap,b8=new WeakMap,$f=new WeakMap;function Xf(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jf(n){return n.__v_skip||!Object.isExtensible(n)?0:Xf(lf(n))}function es(n){return Di(n)?n:M4(n,!1,y8,kf,w8)}function qf(n){return M4(n,!1,Nf,Gf,M8)}function S8(n){return M4(n,!0,Df,Wf,b8)}function M4(n,e,t,r,i){if(!c0(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=i.get(n);if(s)return s;const o=jf(n);if(o===0)return n;const a=new Proxy(n,o===2?r:t);return i.set(n,a),a}function Kn(n){return Di(n)?Kn(n.__v_raw):!!(n&&n.__v_isReactive)}function Di(n){return!!(n&&n.__v_isReadonly)}function o1(n){return!!(n&&n.__v_isShallow)}function A8(n){return Kn(n)||Di(n)}function qe(n){const e=n&&n.__v_raw;return e?qe(e):n}function I1(n){return i1(n,"__v_skip",!0),n}const fo=n=>c0(n)?es(n):n,b4=n=>c0(n)?S8(n):n;function T8(n){Qn&&Bt&&(n=qe(n),g8(n.dep||(n.dep=g4())))}function S4(n,e){n=qe(n);const t=n.dep;t&&yl(t)}function M0(n){return!!(n&&n.__v_isRef===!0)}function ko(n){return E8(n,!1)}function Yf(n){return E8(n,!0)}function E8(n,e){return M0(n)?n:new Qf(n,e)}class Qf{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:qe(e),this._value=t?e:fo(e)}get value(){return T8(this),this._value}set value(e){const t=this.__v_isShallow||o1(e)||Di(e);e=t?e:qe(e),ho(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:fo(e),S4(this))}}function T1e(n){S4(n)}function Ri(n){return M0(n)?n.value:n}const Kf={get:(n,e,t)=>Ri(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const i=n[e];return M0(i)&&!M0(t)?(i.value=t,!0):Reflect.set(n,e,t,r)}};function C8(n){return Kn(n)?n:new Proxy(n,Kf)}function Zf(n){const e=Re(n)?new Array(n.length):{};for(const t in n)e[t]=P8(n,t);return e}class Jf{constructor(e,t,r){this._object=e,this._key=t,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return bf(qe(this._object),this._key)}}class e7{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function L8(n,e,t){return M0(n)?n:He(n)?new e7(n):c0(n)&&arguments.length>1?P8(n,e,t):ko(n)}function P8(n,e,t){const r=n[e];return M0(r)?r:new Jf(n,e,t)}class t7{constructor(e,t,r,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new v4(e,()=>{this._dirty||(this._dirty=!0,S4(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=qe(this);return T8(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function n7(n,e,t=!1){let r,i;const s=He(n);return s?(r=n,i=kt):(r=n.get,i=n.set),new t7(r,i,s||!i,t)}function E1e(n,...e){}function Zn(n,e,t,r){let i;try{i=r?n(...r):n()}catch(s){D1(s,e,t)}return i}function At(n,e,t,r){if(He(n)){const s=Zn(n,e,t,r);return s&&s8(s)&&s.catch(o=>{D1(o,e,t)}),s}const i=[];for(let s=0;s<n.length;s++)i.push(At(n[s],e,t,r));return i}function D1(n,e,t,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Zn(l,null,10,[n,o,a]);return}}r7(n,t,i,r)}function r7(n,e,t,r=!0){console.error(n)}let po=!1,wl=!1;const Z0=[];let Zt=0;const Fi=[];let yn=null,zr=0;const R8=Promise.resolve();let A4=null;function T4(n){const e=A4||R8;return n?e.then(this?n.bind(this):n):e}function i7(n){let e=Zt+1,t=Z0.length;for(;e<t;){const r=e+t>>>1;mo(Z0[r])<n?e=r+1:t=r}return e}function E4(n){(!Z0.length||!Z0.includes(n,po&&n.allowRecurse?Zt+1:Zt))&&(n.id==null?Z0.push(n):Z0.splice(i7(n.id),0,n),F8())}function F8(){!po&&!wl&&(wl=!0,A4=R8.then(I8))}function s7(n){const e=Z0.indexOf(n);e>Zt&&Z0.splice(e,1)}function o7(n){Re(n)?Fi.push(...n):(!yn||!yn.includes(n,n.allowRecurse?zr+1:zr))&&Fi.push(n),F8()}function tc(n,e=po?Zt+1:0){for(;e<Z0.length;e++){const t=Z0[e];t&&t.pre&&(Z0.splice(e,1),e--,t())}}function z8(n){if(Fi.length){const e=[...new Set(Fi)];if(Fi.length=0,yn){yn.push(...e);return}for(yn=e,yn.sort((t,r)=>mo(t)-mo(r)),zr=0;zr<yn.length;zr++)yn[zr]();yn=null,zr=0}}const mo=n=>n.id==null?1/0:n.id,a7=(n,e)=>{const t=mo(n)-mo(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function I8(n){wl=!1,po=!0,Z0.sort(a7);const e=kt;try{for(Zt=0;Zt<Z0.length;Zt++){const t=Z0[Zt];t&&t.active!==!1&&Zn(t,null,14)}}finally{Zt=0,Z0.length=0,z8(),po=!1,A4=null,(Z0.length||Fi.length)&&I8()}}function l7(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||p0;let i=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||p0;d&&(i=t.map(f=>S0(f)?f.trim():f)),h&&(i=t.map(_l))}let a,l=r[a=Xa(e)]||r[a=Xa(tn(e))];!l&&s&&(l=r[a=Xa(Wr(e))]),l&&At(l,n,6,i);const c=r[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,At(c,n,6,i)}}function D8(n,e,t=!1){const r=e.emitsCache,i=r.get(n);if(i!==void 0)return i;const s=n.emits;let o={},a=!1;if(!He(n)){const l=c=>{const u=D8(c,e,!0);u&&(a=!0,L0(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(c0(n)&&r.set(n,null),null):(Re(s)?s.forEach(l=>o[l]=null):L0(o,s),c0(n)&&r.set(n,o),o)}function N1(n,e){return!n||!C1(e)?!1:(e=e.slice(2).replace(/Once$/,""),Qe(n,e[0].toLowerCase()+e.slice(1))||Qe(n,Wr(e))||Qe(n,e))}let k0=null,N8=null;function a1(n){const e=k0;return k0=n,N8=n&&n.type.__scopeId||null,e}function c7(n,e=k0,t){if(!e||n._n)return n;const r=(...i)=>{r._d&&pc(-1);const s=a1(e);let o;try{o=n(...i)}finally{a1(s),r._d&&pc(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function p2(n){const{type:e,vnode:t,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:g}=n;let y,_;const m=a1(n);try{if(t.shapeFlag&4){const v=i||r;y=Qt(u.call(v,v,h,s,f,d,p)),_=l}else{const v=e;y=Qt(v.length>1?v(s,{attrs:l,slots:a,emit:c}):v(s,null)),_=e.props?l:u7(l)}}catch(v){Zs.length=0,D1(v,n,1),y=J0(Tt)}let x=y;if(_&&g!==!1){const v=Object.keys(_),{shapeFlag:M}=x;v.length&&M&7&&(o&&v.some(d4)&&(_=h7(_,o)),x=sr(x,_))}return t.dirs&&(x=sr(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),y=x,a1(m),y}const u7=n=>{let e;for(const t in n)(t==="class"||t==="style"||C1(t))&&((e||(e={}))[t]=n[t]);return e},h7=(n,e)=>{const t={};for(const r in n)(!d4(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function d7(n,e,t){const{props:r,children:i,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?nc(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!N1(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?nc(r,o,c):!0:!!o;return!1}function nc(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==n[s]&&!N1(t,s))return!0}return!1}function f7({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const p7=n=>n.__isSuspense;function m7(n,e){e&&e.pendingBranch?Re(n)?e.effects.push(...n):e.effects.push(n):o7(n)}function _7(n,e){return C4(n,null,e)}const sa={};function Ze(n,e,t){return C4(n,e,t)}function C4(n,e,{immediate:t,deep:r,flush:i,onTrack:s,onTrigger:o}=p0){var a;const l=f8()===((a=I0)==null?void 0:a.scope)?I0:null;let c,u=!1,h=!1;if(M0(n)?(c=()=>n.value,u=o1(n)):Kn(n)?(c=()=>n,r=!0):Re(n)?(h=!0,u=n.some(v=>Kn(v)||o1(v)),c=()=>n.map(v=>{if(M0(v))return v.value;if(Kn(v))return Or(v);if(He(v))return Zn(v,l,2)})):He(n)?e?c=()=>Zn(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),At(n,l,3,[f])}:c=kt,e&&r){const v=c;c=()=>Or(v())}let d,f=v=>{d=m.onStop=()=>{Zn(v,l,4)}},p;if(yo)if(f=kt,e?t&&At(e,l,3,[c(),h?[]:void 0,f]):c(),i==="sync"){const v=dp();p=v.__watcherHandles||(v.__watcherHandles=[])}else return kt;let g=h?new Array(n.length).fill(sa):sa;const y=()=>{if(m.active)if(e){const v=m.run();(r||u||(h?v.some((M,T)=>ho(M,g[T])):ho(v,g)))&&(d&&d(),At(e,l,3,[v,g===sa?void 0:h&&g[0]===sa?[]:g,f]),g=v)}else m.run()};y.allowRecurse=!!e;let _;i==="sync"?_=y:i==="post"?_=()=>ct(y,l&&l.suspense):(y.pre=!0,l&&(y.id=l.uid),_=()=>E4(y));const m=new v4(c,_);e?t?y():g=m.run():i==="post"?ct(m.run.bind(m),l&&l.suspense):m.run();const x=()=>{m.stop(),l&&l.scope&&f4(l.scope.effects,m)};return p&&p.push(x),x}function g7(n,e,t){const r=this.proxy,i=S0(n)?n.includes(".")?O8(r,n):()=>r[n]:n.bind(r,r);let s;He(e)?s=e:(s=e.handler,t=e);const o=I0;Ni(this);const a=C4(i,s.bind(r),t);return o?Ni(o):Ur(),a}function O8(n,e){const t=e.split(".");return()=>{let r=n;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}function Or(n,e){if(!c0(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),M0(n))Or(n.value,e);else if(Re(n))for(let t=0;t<n.length;t++)Or(n[t],e);else if(L1(n)||Pi(n))n.forEach(t=>{Or(t,e)});else if(a8(n))for(const t in n)Or(n[t],e);return n}function C1e(n,e){const t=k0;if(t===null)return n;const r=k1(t)||t.proxy,i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=p0]=e[s];o&&(He(o)&&(o={mounted:o,updated:o}),o.deep&&Or(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function Sr(n,e,t,r){const i=n.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(Zi(),At(l,t,8,[n.el,a,n,e]),Ji())}}function B8(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return k8(()=>{n.isMounted=!0}),W8(()=>{n.isUnmounting=!0}),n}const xt=[Function,Array],H8={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xt,onEnter:xt,onAfterEnter:xt,onEnterCancelled:xt,onBeforeLeave:xt,onLeave:xt,onAfterLeave:xt,onLeaveCancelled:xt,onBeforeAppear:xt,onAppear:xt,onAfterAppear:xt,onAppearCancelled:xt},v7={name:"BaseTransition",props:H8,setup(n,{slots:e}){const t=V1(),r=B8();let i;return()=>{const s=e.default&&L4(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const g of s)if(g.type!==Tt){o=g;break}}const a=qe(n),{mode:l}=a;if(r.isLeaving)return m2(o);const c=rc(o);if(!c)return m2(o);const u=_o(c,a,r,t);go(c,u);const h=t.subTree,d=h&&rc(h);let f=!1;const{getTransitionKey:p}=c.type;if(p){const g=p();i===void 0?i=g:g!==i&&(i=g,f=!0)}if(d&&d.type!==Tt&&(!Ir(c,d)||f)){const g=_o(d,a,r,t);if(go(d,g),l==="out-in")return r.isLeaving=!0,g.afterLeave=()=>{r.isLeaving=!1,t.update.active!==!1&&t.update()},m2(o);l==="in-out"&&c.type!==Tt&&(g.delayLeave=(y,_,m)=>{const x=U8(r,d);x[String(d.key)]=d,y._leaveCb=()=>{_(),y._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=m})}return o}}},x7=v7;function U8(n,e){const{leavingVNodes:t}=n;let r=t.get(e.type);return r||(r=Object.create(null),t.set(e.type,r)),r}function _o(n,e,t,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:g,onAppear:y,onAfterAppear:_,onAppearCancelled:m}=e,x=String(n.key),v=U8(t,n),M=(S,N)=>{S&&At(S,r,9,N)},T=(S,N)=>{const D=N[1];M(S,N),Re(S)?S.every(z=>z.length<=1)&&D():S.length<=1&&D()},w={mode:s,persisted:o,beforeEnter(S){let N=a;if(!t.isMounted)if(i)N=g||a;else return;S._leaveCb&&S._leaveCb(!0);const D=v[x];D&&Ir(n,D)&&D.el._leaveCb&&D.el._leaveCb(),M(N,[S])},enter(S){let N=l,D=c,z=u;if(!t.isMounted)if(i)N=y||l,D=_||c,z=m||u;else return;let V=!1;const H=S._enterCb=$=>{V||(V=!0,$?M(z,[S]):M(D,[S]),w.delayedLeave&&w.delayedLeave(),S._enterCb=void 0)};N?T(N,[S,H]):H()},leave(S,N){const D=String(n.key);if(S._enterCb&&S._enterCb(!0),t.isUnmounting)return N();M(h,[S]);let z=!1;const V=S._leaveCb=H=>{z||(z=!0,N(),H?M(p,[S]):M(f,[S]),S._leaveCb=void 0,v[D]===n&&delete v[D])};v[D]=n,d?T(d,[S,V]):V()},clone(S){return _o(S,e,t,r)}};return w}function m2(n){if(O1(n))return n=sr(n),n.children=null,n}function rc(n){return O1(n)?n.children?n.children[0]:void 0:n}function go(n,e){n.shapeFlag&6&&n.component?go(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function L4(n,e=!1,t){let r=[],i=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===gt?(o.patchFlag&128&&i++,r=r.concat(L4(o.children,e,a))):(e||o.type!==Tt)&&r.push(a!=null?sr(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Fe(n,e){return He(n)?(()=>L0({name:n.name},e,{setup:n}))():n}const qs=n=>!!n.type.__asyncLoader,O1=n=>n.type.__isKeepAlive;function y7(n,e){V8(n,"a",e)}function w7(n,e){V8(n,"da",e)}function V8(n,e,t=I0){const r=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(B1(e,r,t),t){let i=t.parent;for(;i&&i.parent;)O1(i.parent.vnode)&&M7(r,e,t,i),i=i.parent}}function M7(n,e,t,r){const i=B1(e,n,r,!0);P4(()=>{f4(r[e],i)},t)}function B1(n,e,t=I0,r=!1){if(t){const i=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Zi(),Ni(t);const a=At(e,t,n,o);return Ur(),Ji(),a});return r?i.unshift(s):i.push(s),s}}const Cn=n=>(e,t=I0)=>(!yo||n==="sp")&&B1(n,(...r)=>e(...r),t),b7=Cn("bm"),k8=Cn("m"),S7=Cn("bu"),G8=Cn("u"),W8=Cn("bum"),P4=Cn("um"),A7=Cn("sp"),T7=Cn("rtg"),E7=Cn("rtc");function C7(n,e=I0){B1("ec",n,e)}const R4="components",L7="directives";function P7(n,e){return F4(R4,n,!0,e)||n}const $8=Symbol.for("v-ndc");function L1e(n){return S0(n)?F4(R4,n,!1)||n:n||$8}function P1e(n){return F4(L7,n)}function F4(n,e,t=!0,r=!1){const i=k0||I0;if(i){const s=i.type;if(n===R4){const a=cp(s,!1);if(a&&(a===e||a===tn(e)||a===R1(tn(e))))return s}const o=ic(i[n]||s[n],e)||ic(i.appContext[n],e);return!o&&r?s:o}}function ic(n,e){return n&&(n[e]||n[tn(e)]||n[R1(tn(e))])}function R1e(n,e,t,r){let i;const s=t&&t[r];if(Re(n)||S0(n)){i=new Array(n.length);for(let o=0,a=n.length;o<a;o++)i[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){i=new Array(n);for(let o=0;o<n;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(c0(n))if(n[Symbol.iterator])i=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(n[c],c,a,s&&s[a])}}else i=[];return t&&(t[r]=i),i}function F1e(n,e){for(let t=0;t<e.length;t++){const r=e[t];if(Re(r))for(let i=0;i<r.length;i++)n[r[i].name]=r[i].fn;else r&&(n[r.name]=r.key?(...i)=>{const s=r.fn(...i);return s&&(s.key=r.key),s}:r.fn)}return n}function z1e(n,e,t={},r,i){if(k0.isCE||k0.parent&&qs(k0.parent)&&k0.parent.isCE)return e!=="default"&&(t.name=e),J0("slot",t,r&&r());let s=n[e];s&&s._c&&(s._d=!1),P();const o=s&&X8(s(t)),a=N4(gt,{key:t.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&n._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function X8(n){return n.some(e=>c1(e)?!(e.type===Tt||e.type===gt&&!X8(e.children)):!0)?n:null}function I1e(n,e){const t={};for(const r in n)t[e&&/[A-Z]/.test(r)?`on:${r}`:Xa(r)]=n[r];return t}const Ml=n=>n?iu(n)?k1(n)||n.proxy:Ml(n.parent):null,Ys=L0(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ml(n.parent),$root:n=>Ml(n.root),$emit:n=>n.emit,$options:n=>z4(n),$forceUpdate:n=>n.f||(n.f=()=>E4(n.update)),$nextTick:n=>n.n||(n.n=T4.bind(n.proxy)),$watch:n=>g7.bind(n)}),_2=(n,e)=>n!==p0&&!n.__isScriptSetup&&Qe(n,e),R7={get({_:n},e){const{ctx:t,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(_2(r,e))return o[e]=1,r[e];if(i!==p0&&Qe(i,e))return o[e]=2,i[e];if((c=n.propsOptions[0])&&Qe(c,e))return o[e]=3,s[e];if(t!==p0&&Qe(t,e))return o[e]=4,t[e];bl&&(o[e]=0)}}const u=Ys[e];let h,d;if(u)return e==="$attrs"&&dt(n,"get",e),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==p0&&Qe(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,Qe(d,e))return d[e]},set({_:n},e,t){const{data:r,setupState:i,ctx:s}=n;return _2(i,e)?(i[e]=t,!0):r!==p0&&Qe(r,e)?(r[e]=t,!0):Qe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!t[o]||n!==p0&&Qe(n,o)||_2(e,o)||(a=s[0])&&Qe(a,o)||Qe(r,o)||Qe(Ys,o)||Qe(i.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Qe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function D1e(){return j8().slots}function N1e(){return j8().attrs}function j8(){const n=V1();return n.setupContext||(n.setupContext=ou(n))}function sc(n){return Re(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let bl=!0;function F7(n){const e=z4(n),t=n.proxy,r=n.ctx;bl=!1,e.beforeCreate&&oc(e.beforeCreate,n,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:p,activated:g,deactivated:y,beforeDestroy:_,beforeUnmount:m,destroyed:x,unmounted:v,render:M,renderTracked:T,renderTriggered:w,errorCaptured:S,serverPrefetch:N,expose:D,inheritAttrs:z,components:V,directives:H,filters:$}=e;if(c&&z7(c,r,null),o)for(const X in o){const ee=o[X];He(ee)&&(r[X]=ee.bind(t))}if(i){const X=i.call(t,t);c0(X)&&(n.data=es(X))}if(bl=!0,s)for(const X in s){const ee=s[X],fe=He(ee)?ee.bind(t,t):He(ee.get)?ee.get.bind(t,t):kt,we=!He(ee)&&He(ee.set)?ee.set.bind(t):kt,pe=vt({get:fe,set:we});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>pe.value,set:be=>pe.value=be})}if(a)for(const X in a)q8(a[X],r,t,X);if(l){const X=He(l)?l.call(t):l;Reflect.ownKeys(X).forEach(ee=>{Qs(ee,X[ee])})}u&&oc(u,n,"c");function U(X,ee){Re(ee)?ee.forEach(fe=>X(fe.bind(t))):ee&&X(ee.bind(t))}if(U(b7,h),U(k8,d),U(S7,f),U(G8,p),U(y7,g),U(w7,y),U(C7,S),U(E7,T),U(T7,w),U(W8,m),U(P4,v),U(A7,N),Re(D))if(D.length){const X=n.exposed||(n.exposed={});D.forEach(ee=>{Object.defineProperty(X,ee,{get:()=>t[ee],set:fe=>t[ee]=fe})})}else n.exposed||(n.exposed={});M&&n.render===kt&&(n.render=M),z!=null&&(n.inheritAttrs=z),V&&(n.components=V),H&&(n.directives=H)}function z7(n,e,t=kt){Re(n)&&(n=Sl(n));for(const r in n){const i=n[r];let s;c0(i)?"default"in i?s=tt(i.from||r,i.default,!0):s=tt(i.from||r):s=tt(i),M0(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function oc(n,e,t){At(Re(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function q8(n,e,t,r){const i=r.includes(".")?O8(t,r):()=>t[r];if(S0(n)){const s=e[n];He(s)&&Ze(i,s)}else if(He(n))Ze(i,n.bind(t));else if(c0(n))if(Re(n))n.forEach(s=>q8(s,e,t,r));else{const s=He(n.handler)?n.handler.bind(t):e[n.handler];He(s)&&Ze(i,s,n)}}function z4(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!t&&!r?l=e:(l={},i.length&&i.forEach(c=>l1(l,c,o,!0)),l1(l,e,o)),c0(e)&&s.set(e,l),l}function l1(n,e,t,r=!1){const{mixins:i,extends:s}=e;s&&l1(n,s,t,!0),i&&i.forEach(o=>l1(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const a=I7[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const I7={data:ac,props:lc,emits:lc,methods:$s,computed:$s,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:$s,directives:$s,watch:N7,provide:ac,inject:D7};function ac(n,e){return e?n?function(){return L0(He(n)?n.call(this,this):n,He(e)?e.call(this,this):e)}:e:n}function D7(n,e){return $s(Sl(n),Sl(e))}function Sl(n){if(Re(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function it(n,e){return n?[...new Set([].concat(n,e))]:e}function $s(n,e){return n?L0(Object.create(null),n,e):e}function lc(n,e){return n?Re(n)&&Re(e)?[...new Set([...n,...e])]:L0(Object.create(null),sc(n),sc(e??{})):e}function N7(n,e){if(!n)return e;if(!e)return n;const t=L0(Object.create(null),n);for(const r in e)t[r]=it(n[r],e[r]);return t}function Y8(){return{app:null,config:{isNativeTag:sf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let O7=0;function B7(n,e){return function(r,i=null){He(r)||(r=L0({},r)),i!=null&&!c0(i)&&(i=null);const s=Y8(),o=new Set;let a=!1;const l=s.app={_uid:O7++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:fp,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&He(c.install)?(o.add(c),c.install(l,...u)):He(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const d=J0(r,i);return d.appContext=s,u&&e?e(d,c):n(d,c,h),a=!0,l._container=c,c.__vue_app__=l,k1(d.component)||d.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){vo=l;try{return c()}finally{vo=null}}};return l}}let vo=null;function Qs(n,e){if(I0){let t=I0.provides;const r=I0.parent&&I0.parent.provides;r===t&&(t=I0.provides=Object.create(r)),t[n]=e}}function tt(n,e,t=!1){const r=I0||k0;if(r||vo){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:vo._context.provides;if(i&&n in i)return i[n];if(arguments.length>1)return t&&He(e)?e.call(r&&r.proxy):e}}function H7(){return!!(I0||k0||vo)}function U7(n,e,t,r=!1){const i={},s={};i1(s,U1,1),n.propsDefaults=Object.create(null),Q8(n,e,i,s);for(const o in n.propsOptions[0])o in i||(i[o]=void 0);t?n.props=r?i:qf(i):n.type.props?n.props=i:n.props=s,n.attrs=s}function V7(n,e,t,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=n,a=qe(i),[l]=n.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(N1(n.emitsOptions,d))continue;const f=e[d];if(l)if(Qe(s,d))f!==s[d]&&(s[d]=f,c=!0);else{const p=tn(d);i[p]=Al(l,a,p,f,n,!1)}else f!==s[d]&&(s[d]=f,c=!0)}}}else{Q8(n,e,i,s)&&(c=!0);let u;for(const h in a)(!e||!Qe(e,h)&&((u=Wr(h))===h||!Qe(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(i[h]=Al(l,a,h,void 0,n,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!Qe(e,h))&&(delete s[h],c=!0)}c&&Sn(n,"set","$attrs")}function Q8(n,e,t,r){const[i,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if($a(l))continue;const c=e[l];let u;i&&Qe(i,u=tn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:N1(n.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=qe(t),c=a||p0;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Al(i,l,h,c[h],n,!Qe(c,h))}}return o}function Al(n,e,t,r,i,s){const o=n[t];if(o!=null){const a=Qe(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&He(l)){const{propsDefaults:c}=i;t in c?r=c[t]:(Ni(i),r=c[t]=l.call(null,e),Ur())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Wr(t))&&(r=!0))}return r}function K8(n,e,t=!1){const r=e.propsCache,i=r.get(n);if(i)return i;const s=n.props,o={},a=[];let l=!1;if(!He(n)){const u=h=>{l=!0;const[d,f]=K8(h,e,!0);L0(o,d),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return c0(n)&&r.set(n,Li),Li;if(Re(s))for(let u=0;u<s.length;u++){const h=tn(s[u]);cc(h)&&(o[h]=p0)}else if(s)for(const u in s){const h=tn(u);if(cc(h)){const d=s[u],f=o[h]=Re(d)||He(d)?{type:d}:L0({},d);if(f){const p=dc(Boolean,f.type),g=dc(String,f.type);f[0]=p>-1,f[1]=g<0||p<g,(p>-1||Qe(f,"default"))&&a.push(h)}}}const c=[o,a];return c0(n)&&r.set(n,c),c}function cc(n){return n[0]!=="$"}function uc(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function hc(n,e){return uc(n)===uc(e)}function dc(n,e){return Re(e)?e.findIndex(t=>hc(t,n)):He(e)&&hc(e,n)?0:-1}const Z8=n=>n[0]==="_"||n==="$stable",I4=n=>Re(n)?n.map(Qt):[Qt(n)],k7=(n,e,t)=>{if(e._n)return e;const r=c7((...i)=>I4(e(...i)),t);return r._c=!1,r},J8=(n,e,t)=>{const r=n._ctx;for(const i in n){if(Z8(i))continue;const s=n[i];if(He(s))e[i]=k7(i,s,r);else if(s!=null){const o=I4(s);e[i]=()=>o}}},eu=(n,e)=>{const t=I4(e);n.slots.default=()=>t},G7=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=qe(e),i1(e,"_",t)):J8(e,n.slots={})}else n.slots={},e&&eu(n,e);i1(n.slots,U1,1)},W7=(n,e,t)=>{const{vnode:r,slots:i}=n;let s=!0,o=p0;if(r.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(L0(i,e),!t&&a===1&&delete i._):(s=!e.$stable,J8(e,i)),o=e}else e&&(eu(n,e),o={default:1});if(s)for(const a in i)!Z8(a)&&!(a in o)&&delete i[a]};function Tl(n,e,t,r,i=!1){if(Re(n)){n.forEach((d,f)=>Tl(d,e&&(Re(e)?e[f]:e),t,r,i));return}if(qs(r)&&!i)return;const s=r.shapeFlag&4?k1(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===p0?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(S0(c)?(u[c]=null,Qe(h,c)&&(h[c]=null)):M0(c)&&(c.value=null)),He(l))Zn(l,a,12,[o,u]);else{const d=S0(l),f=M0(l);if(d||f){const p=()=>{if(n.f){const g=d?Qe(h,l)?h[l]:u[l]:l.value;i?Re(g)&&f4(g,s):Re(g)?g.includes(s)||g.push(s):d?(u[l]=[s],Qe(h,l)&&(h[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else d?(u[l]=o,Qe(h,l)&&(h[l]=o)):f&&(l.value=o,n.k&&(u[n.k]=o))};o?(p.id=-1,ct(p,t)):p()}}}const ct=m7;function $7(n){return X7(n)}function X7(n,e){const t=gl();t.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=kt,insertStaticContent:p}=n,g=(A,L,O,Q=null,Y=null,C=null,E=!1,G=null,Z=!!L.dynamicChildren)=>{if(A===L)return;A&&!Ir(A,L)&&(Q=q(A),be(A,Y,C,!0),A=null),L.patchFlag===-2&&(Z=!1,L.dynamicChildren=null);const{type:j,ref:ue,shapeFlag:me}=L;switch(j){case H1:y(A,L,O,Q);break;case Tt:_(A,L,O,Q);break;case qa:A==null&&m(L,O,Q,E);break;case gt:V(A,L,O,Q,Y,C,E,G,Z);break;default:me&1?M(A,L,O,Q,Y,C,E,G,Z):me&6?H(A,L,O,Q,Y,C,E,G,Z):(me&64||me&128)&&j.process(A,L,O,Q,Y,C,E,G,Z,J)}ue!=null&&Y&&Tl(ue,A&&A.ref,C,L||A,!L)},y=(A,L,O,Q)=>{if(A==null)r(L.el=a(L.children),O,Q);else{const Y=L.el=A.el;L.children!==A.children&&c(Y,L.children)}},_=(A,L,O,Q)=>{A==null?r(L.el=l(L.children||""),O,Q):L.el=A.el},m=(A,L,O,Q)=>{[A.el,A.anchor]=p(A.children,L,O,Q,A.el,A.anchor)},x=({el:A,anchor:L},O,Q)=>{let Y;for(;A&&A!==L;)Y=d(A),r(A,O,Q),A=Y;r(L,O,Q)},v=({el:A,anchor:L})=>{let O;for(;A&&A!==L;)O=d(A),i(A),A=O;i(L)},M=(A,L,O,Q,Y,C,E,G,Z)=>{E=E||L.type==="svg",A==null?T(L,O,Q,Y,C,E,G,Z):N(A,L,Y,C,E,G,Z)},T=(A,L,O,Q,Y,C,E,G)=>{let Z,j;const{type:ue,props:me,shapeFlag:_e,transition:Me,dirs:ye}=A;if(Z=A.el=o(A.type,C,me&&me.is,me),_e&8?u(Z,A.children):_e&16&&S(A.children,Z,null,Q,Y,C&&ue!=="foreignObject",E,G),ye&&Sr(A,null,Q,"created"),w(Z,A,A.scopeId,E,Q),me){for(const ge in me)ge!=="value"&&!$a(ge)&&s(Z,ge,null,me[ge],C,A.children,Q,Y,te);"value"in me&&s(Z,"value",null,me.value),(j=me.onVnodeBeforeMount)&&jt(j,Q,A)}ye&&Sr(A,null,Q,"beforeMount");const W=(!Y||Y&&!Y.pendingBranch)&&Me&&!Me.persisted;W&&Me.beforeEnter(Z),r(Z,L,O),((j=me&&me.onVnodeMounted)||W||ye)&&ct(()=>{j&&jt(j,Q,A),W&&Me.enter(Z),ye&&Sr(A,null,Q,"mounted")},Y)},w=(A,L,O,Q,Y)=>{if(O&&f(A,O),Q)for(let C=0;C<Q.length;C++)f(A,Q[C]);if(Y){let C=Y.subTree;if(L===C){const E=Y.vnode;w(A,E,E.scopeId,E.slotScopeIds,Y.parent)}}},S=(A,L,O,Q,Y,C,E,G,Z=0)=>{for(let j=Z;j<A.length;j++){const ue=A[j]=G?jn(A[j]):Qt(A[j]);g(null,ue,L,O,Q,Y,C,E,G)}},N=(A,L,O,Q,Y,C,E)=>{const G=L.el=A.el;let{patchFlag:Z,dynamicChildren:j,dirs:ue}=L;Z|=A.patchFlag&16;const me=A.props||p0,_e=L.props||p0;let Me;O&&Ar(O,!1),(Me=_e.onVnodeBeforeUpdate)&&jt(Me,O,L,A),ue&&Sr(L,A,O,"beforeUpdate"),O&&Ar(O,!0);const ye=Y&&L.type!=="foreignObject";if(j?D(A.dynamicChildren,j,G,O,Q,ye,C):E||ee(A,L,G,null,O,Q,ye,C,!1),Z>0){if(Z&16)z(G,L,me,_e,O,Q,Y);else if(Z&2&&me.class!==_e.class&&s(G,"class",null,_e.class,Y),Z&4&&s(G,"style",me.style,_e.style,Y),Z&8){const W=L.dynamicProps;for(let ge=0;ge<W.length;ge++){const oe=W[ge],Le=me[oe],k=_e[oe];(k!==Le||oe==="value")&&s(G,oe,Le,k,Y,A.children,O,Q,te)}}Z&1&&A.children!==L.children&&u(G,L.children)}else!E&&j==null&&z(G,L,me,_e,O,Q,Y);((Me=_e.onVnodeUpdated)||ue)&&ct(()=>{Me&&jt(Me,O,L,A),ue&&Sr(L,A,O,"updated")},Q)},D=(A,L,O,Q,Y,C,E)=>{for(let G=0;G<L.length;G++){const Z=A[G],j=L[G],ue=Z.el&&(Z.type===gt||!Ir(Z,j)||Z.shapeFlag&70)?h(Z.el):O;g(Z,j,ue,null,Q,Y,C,E,!0)}},z=(A,L,O,Q,Y,C,E)=>{if(O!==Q){if(O!==p0)for(const G in O)!$a(G)&&!(G in Q)&&s(A,G,O[G],null,E,L.children,Y,C,te);for(const G in Q){if($a(G))continue;const Z=Q[G],j=O[G];Z!==j&&G!=="value"&&s(A,G,j,Z,E,L.children,Y,C,te)}"value"in Q&&s(A,"value",O.value,Q.value)}},V=(A,L,O,Q,Y,C,E,G,Z)=>{const j=L.el=A?A.el:a(""),ue=L.anchor=A?A.anchor:a("");let{patchFlag:me,dynamicChildren:_e,slotScopeIds:Me}=L;Me&&(G=G?G.concat(Me):Me),A==null?(r(j,O,Q),r(ue,O,Q),S(L.children,O,ue,Y,C,E,G,Z)):me>0&&me&64&&_e&&A.dynamicChildren?(D(A.dynamicChildren,_e,O,Y,C,E,G),(L.key!=null||Y&&L===Y.subTree)&&D4(A,L,!0)):ee(A,L,O,ue,Y,C,E,G,Z)},H=(A,L,O,Q,Y,C,E,G,Z)=>{L.slotScopeIds=G,A==null?L.shapeFlag&512?Y.ctx.activate(L,O,Q,E,Z):$(L,O,Q,Y,C,E,Z):K(A,L,Z)},$=(A,L,O,Q,Y,C,E)=>{const G=A.component=sp(A,Q,Y);if(O1(A)&&(G.ctx.renderer=J),op(G),G.asyncDep){if(Y&&Y.registerDep(G,U),!A.el){const Z=G.subTree=J0(Tt);_(null,Z,L,O)}return}U(G,A,L,O,Y,C,E)},K=(A,L,O)=>{const Q=L.component=A.component;if(d7(A,L,O))if(Q.asyncDep&&!Q.asyncResolved){X(Q,L,O);return}else Q.next=L,s7(Q.update),Q.update();else L.el=A.el,Q.vnode=L},U=(A,L,O,Q,Y,C,E)=>{const G=()=>{if(A.isMounted){let{next:ue,bu:me,u:_e,parent:Me,vnode:ye}=A,W=ue,ge;Ar(A,!1),ue?(ue.el=ye.el,X(A,ue,E)):ue=ye,me&&ja(me),(ge=ue.props&&ue.props.onVnodeBeforeUpdate)&&jt(ge,Me,ue,ye),Ar(A,!0);const oe=p2(A),Le=A.subTree;A.subTree=oe,g(Le,oe,h(Le.el),q(Le),A,Y,C),ue.el=oe.el,W===null&&f7(A,oe.el),_e&&ct(_e,Y),(ge=ue.props&&ue.props.onVnodeUpdated)&&ct(()=>jt(ge,Me,ue,ye),Y)}else{let ue;const{el:me,props:_e}=L,{bm:Me,m:ye,parent:W}=A,ge=qs(L);if(Ar(A,!1),Me&&ja(Me),!ge&&(ue=_e&&_e.onVnodeBeforeMount)&&jt(ue,W,L),Ar(A,!0),me&&Te){const oe=()=>{A.subTree=p2(A),Te(me,A.subTree,A,Y,null)};ge?L.type.__asyncLoader().then(()=>!A.isUnmounted&&oe()):oe()}else{const oe=A.subTree=p2(A);g(null,oe,O,Q,A,Y,C),L.el=oe.el}if(ye&&ct(ye,Y),!ge&&(ue=_e&&_e.onVnodeMounted)){const oe=L;ct(()=>jt(ue,W,oe),Y)}(L.shapeFlag&256||W&&qs(W.vnode)&&W.vnode.shapeFlag&256)&&A.a&&ct(A.a,Y),A.isMounted=!0,L=O=Q=null}},Z=A.effect=new v4(G,()=>E4(j),A.scope),j=A.update=()=>Z.run();j.id=A.uid,Ar(A,!0),j()},X=(A,L,O)=>{L.component=A;const Q=A.vnode.props;A.vnode=L,A.next=null,V7(A,L.props,Q,O),W7(A,L.children,O),Zi(),tc(),Ji()},ee=(A,L,O,Q,Y,C,E,G,Z=!1)=>{const j=A&&A.children,ue=A?A.shapeFlag:0,me=L.children,{patchFlag:_e,shapeFlag:Me}=L;if(_e>0){if(_e&128){we(j,me,O,Q,Y,C,E,G,Z);return}else if(_e&256){fe(j,me,O,Q,Y,C,E,G,Z);return}}Me&8?(ue&16&&te(j,Y,C),me!==j&&u(O,me)):ue&16?Me&16?we(j,me,O,Q,Y,C,E,G,Z):te(j,Y,C,!0):(ue&8&&u(O,""),Me&16&&S(me,O,Q,Y,C,E,G,Z))},fe=(A,L,O,Q,Y,C,E,G,Z)=>{A=A||Li,L=L||Li;const j=A.length,ue=L.length,me=Math.min(j,ue);let _e;for(_e=0;_e<me;_e++){const Me=L[_e]=Z?jn(L[_e]):Qt(L[_e]);g(A[_e],Me,O,null,Y,C,E,G,Z)}j>ue?te(A,Y,C,!0,!1,me):S(L,O,Q,Y,C,E,G,Z,me)},we=(A,L,O,Q,Y,C,E,G,Z)=>{let j=0;const ue=L.length;let me=A.length-1,_e=ue-1;for(;j<=me&&j<=_e;){const Me=A[j],ye=L[j]=Z?jn(L[j]):Qt(L[j]);if(Ir(Me,ye))g(Me,ye,O,null,Y,C,E,G,Z);else break;j++}for(;j<=me&&j<=_e;){const Me=A[me],ye=L[_e]=Z?jn(L[_e]):Qt(L[_e]);if(Ir(Me,ye))g(Me,ye,O,null,Y,C,E,G,Z);else break;me--,_e--}if(j>me){if(j<=_e){const Me=_e+1,ye=Me<ue?L[Me].el:Q;for(;j<=_e;)g(null,L[j]=Z?jn(L[j]):Qt(L[j]),O,ye,Y,C,E,G,Z),j++}}else if(j>_e)for(;j<=me;)be(A[j],Y,C,!0),j++;else{const Me=j,ye=j,W=new Map;for(j=ye;j<=_e;j++){const We=L[j]=Z?jn(L[j]):Qt(L[j]);We.key!=null&&W.set(We.key,j)}let ge,oe=0;const Le=_e-ye+1;let k=!1,Se=0;const Oe=new Array(Le);for(j=0;j<Le;j++)Oe[j]=0;for(j=Me;j<=me;j++){const We=A[j];if(oe>=Le){be(We,Y,C,!0);continue}let Ue;if(We.key!=null)Ue=W.get(We.key);else for(ge=ye;ge<=_e;ge++)if(Oe[ge-ye]===0&&Ir(We,L[ge])){Ue=ge;break}Ue===void 0?be(We,Y,C,!0):(Oe[Ue-ye]=j+1,Ue>=Se?Se=Ue:k=!0,g(We,L[Ue],O,null,Y,C,E,G,Z),oe++)}const Ve=k?j7(Oe):Li;for(ge=Ve.length-1,j=Le-1;j>=0;j--){const We=ye+j,Ue=L[We],v0=We+1<ue?L[We+1].el:Q;Oe[j]===0?g(null,Ue,O,v0,Y,C,E,G,Z):k&&(ge<0||j!==Ve[ge]?pe(Ue,O,v0,2):ge--)}}},pe=(A,L,O,Q,Y=null)=>{const{el:C,type:E,transition:G,children:Z,shapeFlag:j}=A;if(j&6){pe(A.component.subTree,L,O,Q);return}if(j&128){A.suspense.move(L,O,Q);return}if(j&64){E.move(A,L,O,J);return}if(E===gt){r(C,L,O);for(let me=0;me<Z.length;me++)pe(Z[me],L,O,Q);r(A.anchor,L,O);return}if(E===qa){x(A,L,O);return}if(Q!==2&&j&1&&G)if(Q===0)G.beforeEnter(C),r(C,L,O),ct(()=>G.enter(C),Y);else{const{leave:me,delayLeave:_e,afterLeave:Me}=G,ye=()=>r(C,L,O),W=()=>{me(C,()=>{ye(),Me&&Me()})};_e?_e(C,ye,W):W()}else r(C,L,O)},be=(A,L,O,Q=!1,Y=!1)=>{const{type:C,props:E,ref:G,children:Z,dynamicChildren:j,shapeFlag:ue,patchFlag:me,dirs:_e}=A;if(G!=null&&Tl(G,null,O,A,!0),ue&256){L.ctx.deactivate(A);return}const Me=ue&1&&_e,ye=!qs(A);let W;if(ye&&(W=E&&E.onVnodeBeforeUnmount)&&jt(W,L,A),ue&6)xe(A.component,O,Q);else{if(ue&128){A.suspense.unmount(O,Q);return}Me&&Sr(A,null,L,"beforeUnmount"),ue&64?A.type.remove(A,L,O,Y,J,Q):j&&(C!==gt||me>0&&me&64)?te(j,L,O,!1,!0):(C===gt&&me&384||!Y&&ue&16)&&te(Z,L,O),Q&&re(A)}(ye&&(W=E&&E.onVnodeUnmounted)||Me)&&ct(()=>{W&&jt(W,L,A),Me&&Sr(A,null,L,"unmounted")},O)},re=A=>{const{type:L,el:O,anchor:Q,transition:Y}=A;if(L===gt){ce(O,Q);return}if(L===qa){v(A);return}const C=()=>{i(O),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(A.shapeFlag&1&&Y&&!Y.persisted){const{leave:E,delayLeave:G}=Y,Z=()=>E(O,C);G?G(A.el,C,Z):Z()}else C()},ce=(A,L)=>{let O;for(;A!==L;)O=d(A),i(A),A=O;i(L)},xe=(A,L,O)=>{const{bum:Q,scope:Y,update:C,subTree:E,um:G}=A;Q&&ja(Q),Y.stop(),C&&(C.active=!1,be(E,A,L,O)),G&&ct(G,L),ct(()=>{A.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},te=(A,L,O,Q=!1,Y=!1,C=0)=>{for(let E=C;E<A.length;E++)be(A[E],L,O,Q,Y)},q=A=>A.shapeFlag&6?q(A.component.subTree):A.shapeFlag&128?A.suspense.next():d(A.anchor||A.el),se=(A,L,O)=>{A==null?L._vnode&&be(L._vnode,null,null,!0):g(L._vnode||null,A,L,null,null,null,O),tc(),z8(),L._vnode=A},J={p:g,um:be,m:pe,r:re,mt:$,mc:S,pc:ee,pbc:D,n:q,o:n};let le,Te;return e&&([le,Te]=e(J)),{render:se,hydrate:le,createApp:B7(se,le)}}function Ar({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function D4(n,e,t=!1){const r=n.children,i=e.children;if(Re(r)&&Re(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=jn(i[s]),a.el=o.el),t||D4(o,a)),a.type===H1&&(a.el=o.el)}}function j7(n){const e=n.slice(),t=[0];let r,i,s,o,a;const l=n.length;for(r=0;r<l;r++){const c=n[r];if(c!==0){if(i=t[t.length-1],n[i]<c){e[r]=i,t.push(r);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[r]=t[s-1]),t[s]=r)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const q7=n=>n.__isTeleport,Ks=n=>n&&(n.disabled||n.disabled===""),fc=n=>typeof SVGElement<"u"&&n instanceof SVGElement,El=(n,e)=>{const t=n&&n.to;return S0(t)?e?e(t):null:t},Y7={__isTeleport:!0,process(n,e,t,r,i,s,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:g,createComment:y}}=c,_=Ks(e.props);let{shapeFlag:m,children:x,dynamicChildren:v}=e;if(n==null){const M=e.el=g(""),T=e.anchor=g("");f(M,t,r),f(T,t,r);const w=e.target=El(e.props,p),S=e.targetAnchor=g("");w&&(f(S,w),o=o||fc(w));const N=(D,z)=>{m&16&&u(x,D,z,i,s,o,a,l)};_?N(t,T):w&&N(w,S)}else{e.el=n.el;const M=e.anchor=n.anchor,T=e.target=n.target,w=e.targetAnchor=n.targetAnchor,S=Ks(n.props),N=S?t:T,D=S?M:w;if(o=o||fc(T),v?(d(n.dynamicChildren,v,N,i,s,o,a),D4(n,e,!0)):l||h(n,e,N,D,i,s,o,a,!1),_)S||oa(e,t,M,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const z=e.target=El(e.props,p);z&&oa(e,z,null,c,0)}else S&&oa(e,T,w,c,1)}tu(e)},remove(n,e,t,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:d}=n;if(h&&s(u),(o||!Ks(d))&&(s(c),a&16))for(let f=0;f<l.length;f++){const p=l[f];i(p,e,t,!0,!!p.dynamicChildren)}},move:oa,hydrate:Q7};function oa(n,e,t,{o:{insert:r},m:i},s=2){s===0&&r(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=n,h=s===2;if(h&&r(o,e,t),(!h||Ks(u))&&l&16)for(let d=0;d<c.length;d++)i(c[d],e,t,2);h&&r(a,e,t)}function Q7(n,e,t,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=El(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Ks(e.props))e.anchor=c(o(n),e,a(n),t,r,i,s),e.targetAnchor=h;else{e.anchor=o(n);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,t,r,i,s)}tu(e)}return e.anchor&&o(e.anchor)}const O1e=Y7;function tu(n){const e=n.ctx;if(e&&e.ut){let t=n.children[0].el;for(;t!==n.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",e.uid),t=t.nextSibling;e.ut()}}const gt=Symbol.for("v-fgt"),H1=Symbol.for("v-txt"),Tt=Symbol.for("v-cmt"),qa=Symbol.for("v-stc"),Zs=[];let Ht=null;function P(n=!1){Zs.push(Ht=n?null:[])}function K7(){Zs.pop(),Ht=Zs[Zs.length-1]||null}let xo=1;function pc(n){xo+=n}function nu(n){return n.dynamicChildren=xo>0?Ht||Li:null,K7(),xo>0&&Ht&&Ht.push(n),n}function R(n,e,t,r,i,s){return nu(b(n,e,t,r,i,s,!0))}function N4(n,e,t,r,i){return nu(J0(n,e,t,r,i,!0))}function c1(n){return n?n.__v_isVNode===!0:!1}function Ir(n,e){return n.type===e.type&&n.key===e.key}const U1="__vInternal",ru=({key:n})=>n??null,Ya=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?S0(n)||M0(n)||He(n)?{i:k0,r:n,k:e,f:!!t}:n:null);function b(n,e=null,t=null,r=0,i=null,s=n===gt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&ru(e),ref:e&&Ya(e),scopeId:N8,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:k0};return a?(O4(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=S0(t)?8:16),xo>0&&!o&&Ht&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ht.push(l),l}const J0=Z7;function Z7(n,e=null,t=null,r=0,i=null,s=!1){if((!n||n===$8)&&(n=Tt),c1(n)){const a=sr(n,e,!0);return t&&O4(a,t),xo>0&&!s&&Ht&&(a.shapeFlag&6?Ht[Ht.indexOf(n)]=a:Ht.push(a)),a.patchFlag|=-2,a}if(up(n)&&(n=n.__vccOpts),e){e=J7(e);let{class:a,style:l}=e;a&&!S0(a)&&(e.class=_4(a)),c0(l)&&(A8(l)&&!Re(l)&&(l=L0({},l)),e.style=m4(l))}const o=S0(n)?1:p7(n)?128:q7(n)?64:c0(n)?4:He(n)?2:0;return b(n,e,t,r,i,o,s,!0)}function J7(n){return n?A8(n)||U1 in n?L0({},n):n:null}function sr(n,e,t=!1){const{props:r,ref:i,patchFlag:s,children:o}=n,a=e?np(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&ru(a),ref:e&&e.ref?t&&i?Re(i)?i.concat(Ya(e)):[i,Ya(e)]:Ya(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==gt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&sr(n.ssContent),ssFallback:n.ssFallback&&sr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function ep(n=" ",e=0){return J0(H1,null,n,e)}function tp(n,e){const t=J0(qa,null,n);return t.staticCount=e,t}function B1e(n="",e=!1){return e?(P(),N4(Tt,null,n)):J0(Tt,null,n)}function Qt(n){return n==null||typeof n=="boolean"?J0(Tt):Re(n)?J0(gt,null,n.slice()):typeof n=="object"?jn(n):J0(H1,null,String(n))}function jn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:sr(n)}function O4(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(Re(e))t=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),O4(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(U1 in e)?e._ctx=k0:i===3&&k0&&(k0.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else He(e)?(e={default:e,_ctx:k0},t=32):(e=String(e),r&64?(t=16,e=[ep(e)]):t=8);n.children=e,n.shapeFlag|=t}function np(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=_4([e.class,r.class]));else if(i==="style")e.style=m4([e.style,r.style]);else if(C1(i)){const s=e[i],o=r[i];o&&s!==o&&!(Re(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function jt(n,e,t,r=null){At(n,e,7,[t,r])}const rp=Y8();let ip=0;function sp(n,e,t){const r=n.type,i=(e?e.appContext:n.appContext)||rp,s={uid:ip++,vnode:n,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new h8(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:K8(r,i),emitsOptions:D8(r,i),emit:null,emitted:null,propsDefaults:p0,inheritAttrs:r.inheritAttrs,ctx:p0,data:p0,props:p0,attrs:p0,slots:p0,refs:p0,setupState:p0,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=l7.bind(null,s),n.ce&&n.ce(s),s}let I0=null;const V1=()=>I0||k0;let B4,Zr,mc="__VUE_INSTANCE_SETTERS__";(Zr=gl()[mc])||(Zr=gl()[mc]=[]),Zr.push(n=>I0=n),B4=n=>{Zr.length>1?Zr.forEach(e=>e(n)):Zr[0](n)};const Ni=n=>{B4(n),n.scope.on()},Ur=()=>{I0&&I0.scope.off(),B4(null)};function iu(n){return n.vnode.shapeFlag&4}let yo=!1;function op(n,e=!1){yo=e;const{props:t,children:r}=n.vnode,i=iu(n);U7(n,t,i,e),G7(n,r);const s=i?ap(n,e):void 0;return yo=!1,s}function ap(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=I1(new Proxy(n.ctx,R7));const{setup:r}=t;if(r){const i=n.setupContext=r.length>1?ou(n):null;Ni(n),Zi();const s=Zn(r,n,0,[n.props,i]);if(Ji(),Ur(),s8(s)){if(s.then(Ur,Ur),e)return s.then(o=>{_c(n,o,e)}).catch(o=>{D1(o,n,0)});n.asyncDep=s}else _c(n,s,e)}else su(n,e)}function _c(n,e,t){He(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:c0(e)&&(n.setupState=C8(e)),su(n,t)}let gc;function su(n,e,t){const r=n.type;if(!n.render){if(!e&&gc&&!r.render){const i=r.template||z4(n).template;if(i){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=r,c=L0(L0({isCustomElement:s,delimiters:a},o),l);r.render=gc(i,c)}}n.render=r.render||kt}Ni(n),Zi(),F7(n),Ji(),Ur()}function lp(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return dt(n,"get","$attrs"),e[t]}}))}function ou(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return lp(n)},slots:n.slots,emit:n.emit,expose:e}}function k1(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(C8(I1(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ys)return Ys[t](n)},has(e,t){return t in e||t in Ys}}))}function cp(n,e=!0){return He(n)?n.displayName||n.name:n.name||e&&n.__name}function up(n){return He(n)&&"__vccOpts"in n}const vt=(n,e)=>n7(n,e,yo);function H4(n,e,t){const r=arguments.length;return r===2?c0(e)&&!Re(e)?c1(e)?J0(n,null,[e]):J0(n,e):J0(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&c1(t)&&(t=[t]),J0(n,e,t))}const hp=Symbol.for("v-scx"),dp=()=>tt(hp),fp="3.3.4",pp="http://www.w3.org/2000/svg",Dr=typeof document<"u"?document:null,vc=Dr&&Dr.createElement("template"),mp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const i=e?Dr.createElementNS(pp,n):Dr.createElement(n,t?{is:t}:void 0);return n==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:n=>Dr.createTextNode(n),createComment:n=>Dr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Dr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{vc.innerHTML=r?`<svg>${n}</svg>`:n;const a=vc.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function _p(n,e,t){const r=n._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function gp(n,e,t){const r=n.style,i=S0(t);if(t&&!i){if(e&&!S0(e))for(const s in e)t[s]==null&&Cl(r,s,"");for(const s in t)Cl(r,s,t[s])}else{const s=r.display;i?e!==t&&(r.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(r.display=s)}}const xc=/\s*!important$/;function Cl(n,e,t){if(Re(t))t.forEach(r=>Cl(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=vp(n,e);xc.test(t)?n.setProperty(Wr(r),t.replace(xc,""),"important"):n[r]=t}}const yc=["Webkit","Moz","ms"],g2={};function vp(n,e){const t=g2[e];if(t)return t;let r=tn(e);if(r!=="filter"&&r in n)return g2[e]=r;r=R1(r);for(let i=0;i<yc.length;i++){const s=yc[i]+r;if(s in n)return g2[e]=s}return e}const wc="http://www.w3.org/1999/xlink";function xp(n,e,t,r,i){if(r&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(wc,e.slice(6,e.length)):n.setAttributeNS(wc,e,t);else{const s=gf(e);t==null||s&&!l8(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function yp(n,e,t,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const c=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=l8(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function Nr(n,e,t,r){n.addEventListener(e,t,r)}function wp(n,e,t,r){n.removeEventListener(e,t,r)}function Mp(n,e,t,r,i=null){const s=n._vei||(n._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=bp(e);if(r){const c=s[e]=Tp(r,i);Nr(n,a,c,l)}else o&&(wp(n,a,o,l),s[e]=void 0)}}const Mc=/(?:Once|Passive|Capture)$/;function bp(n){let e;if(Mc.test(n)){e={};let r;for(;r=n.match(Mc);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Wr(n.slice(2)),e]}let v2=0;const Sp=Promise.resolve(),Ap=()=>v2||(Sp.then(()=>v2=0),v2=Date.now());function Tp(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;At(Ep(r,t.value),e,5,[r])};return t.value=n,t.attached=Ap(),t}function Ep(n,e){if(Re(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const bc=/^on[a-z]/,Cp=(n,e,t,r,i=!1,s,o,a,l)=>{e==="class"?_p(n,r,i):e==="style"?gp(n,t,r):C1(e)?d4(e)||Mp(n,e,t,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Lp(n,e,r,i))?yp(n,e,r,s,o,a,l):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),xp(n,e,r,i))};function Lp(n,e,t,r){return r?!!(e==="innerHTML"||e==="textContent"||e in n&&bc.test(e)&&He(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||bc.test(e)&&S0(t)?!1:e in n}const Fn="transition",Ss="animation",au=(n,{slots:e})=>H4(x7,cu(n),e);au.displayName="Transition";const lu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Pp=au.props=L0({},H8,lu),Tr=(n,e=[])=>{Re(n)?n.forEach(t=>t(...e)):n&&n(...e)},Sc=n=>n?Re(n)?n.some(e=>e.length>1):n.length>1:!1;function cu(n){const e={};for(const V in n)V in lu||(e[V]=n[V]);if(n.css===!1)return e;const{name:t="v",type:r,duration:i,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:f=`${t}-leave-to`}=n,p=Rp(i),g=p&&p[0],y=p&&p[1],{onBeforeEnter:_,onEnter:m,onEnterCancelled:x,onLeave:v,onLeaveCancelled:M,onBeforeAppear:T=_,onAppear:w=m,onAppearCancelled:S=x}=e,N=(V,H,$)=>{$n(V,H?u:a),$n(V,H?c:o),$&&$()},D=(V,H)=>{V._isLeaving=!1,$n(V,h),$n(V,f),$n(V,d),H&&H()},z=V=>(H,$)=>{const K=V?w:m,U=()=>N(H,V,$);Tr(K,[H,U]),Ac(()=>{$n(H,V?l:s),xn(H,V?u:a),Sc(K)||Tc(H,r,g,U)})};return L0(e,{onBeforeEnter(V){Tr(_,[V]),xn(V,s),xn(V,o)},onBeforeAppear(V){Tr(T,[V]),xn(V,l),xn(V,c)},onEnter:z(!1),onAppear:z(!0),onLeave(V,H){V._isLeaving=!0;const $=()=>D(V,H);xn(V,h),hu(),xn(V,d),Ac(()=>{V._isLeaving&&($n(V,h),xn(V,f),Sc(v)||Tc(V,r,y,$))}),Tr(v,[V,$])},onEnterCancelled(V){N(V,!1),Tr(x,[V])},onAppearCancelled(V){N(V,!0),Tr(S,[V])},onLeaveCancelled(V){D(V),Tr(M,[V])}})}function Rp(n){if(n==null)return null;if(c0(n))return[x2(n.enter),x2(n.leave)];{const e=x2(n);return[e,e]}}function x2(n){return hf(n)}function xn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n._vtc||(n._vtc=new Set)).add(e)}function $n(n,e){e.split(/\s+/).forEach(r=>r&&n.classList.remove(r));const{_vtc:t}=n;t&&(t.delete(e),t.size||(n._vtc=void 0))}function Ac(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Fp=0;function Tc(n,e,t,r){const i=n._endId=++Fp,s=()=>{i===n._endId&&r()};if(t)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=uu(n,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,d),s()},d=f=>{f.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,d)}function uu(n,e){const t=window.getComputedStyle(n),r=p=>(t[p]||"").split(", "),i=r(`${Fn}Delay`),s=r(`${Fn}Duration`),o=Ec(i,s),a=r(`${Ss}Delay`),l=r(`${Ss}Duration`),c=Ec(a,l);let u=null,h=0,d=0;e===Fn?o>0&&(u=Fn,h=o,d=s.length):e===Ss?c>0&&(u=Ss,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?Fn:Ss:null,d=u?u===Fn?s.length:l.length:0);const f=u===Fn&&/\b(transform|all)(,|$)/.test(r(`${Fn}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Ec(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,r)=>Cc(t)+Cc(n[r])))}function Cc(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function hu(){return document.body.offsetHeight}const du=new WeakMap,fu=new WeakMap,pu={name:"TransitionGroup",props:L0({},Pp,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=V1(),r=B8();let i,s;return G8(()=>{if(!i.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!Op(i[0].el,t.vnode.el,o))return;i.forEach(Ip),i.forEach(Dp);const a=i.filter(Np);hu(),a.forEach(l=>{const c=l.el,u=c.style;xn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c._moveCb=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",h),c._moveCb=null,$n(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=qe(n),a=cu(o);let l=o.tag||gt;i=s,s=e.default?L4(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&go(u,_o(u,a,r,t))}if(i)for(let c=0;c<i.length;c++){const u=i[c];go(u,_o(u,a,r,t)),du.set(u,u.el.getBoundingClientRect())}return J0(l,null,s)}}},zp=n=>delete n.mode;pu.props;const H1e=pu;function Ip(n){const e=n.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function Dp(n){fu.set(n,n.el.getBoundingClientRect())}function Np(n){const e=du.get(n),t=fu.get(n),r=e.left-t.left,i=e.top-t.top;if(r||i){const s=n.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${i}px)`,s.transitionDuration="0s",n}}function Op(n,e,t){const r=n.cloneNode();n._vtc&&n._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),t.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:s}=uu(r);return i.removeChild(r),s}const u1=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Re(e)?t=>ja(e,t):e};function Bp(n){n.target.composing=!0}function Lc(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const U1e={created(n,{modifiers:{lazy:e,trim:t,number:r}},i){n._assign=u1(i);const s=r||i.props&&i.props.type==="number";Nr(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=_l(a)),n._assign(a)}),t&&Nr(n,"change",()=>{n.value=n.value.trim()}),e||(Nr(n,"compositionstart",Bp),Nr(n,"compositionend",Lc),Nr(n,"change",Lc))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:r,number:i}},s){if(n._assign=u1(s),n.composing||document.activeElement===n&&n.type!=="range"&&(t||r&&n.value.trim()===e||(i||n.type==="number")&&_l(n.value)===e))return;const o=e??"";n.value!==o&&(n.value=o)}},V1e={deep:!0,created(n,e,t){n._assign=u1(t),Nr(n,"change",()=>{const r=n._modelValue,i=Hp(n),s=n.checked,o=n._assign;if(Re(r)){const a=c8(r,i),l=a!==-1;if(s&&!l)o(r.concat(i));else if(!s&&l){const c=[...r];c.splice(a,1),o(c)}}else if(L1(r)){const a=new Set(r);s?a.add(i):a.delete(i),o(a)}else o(mu(n,s))})},mounted:Pc,beforeUpdate(n,e,t){n._assign=u1(t),Pc(n,e,t)}};function Pc(n,{value:e,oldValue:t},r){n._modelValue=e,Re(e)?n.checked=c8(e,r.props.value)>-1:L1(e)?n.checked=e.has(r.props.value):e!==t&&(n.checked=F1(e,mu(n,!0)))}function Hp(n){return"_value"in n?n._value:n.value}function mu(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Up=["ctrl","shift","alt","meta"],Vp={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Up.some(t=>n[`${t}Key`]&&!e.includes(t))},k1e=(n,e)=>(t,...r)=>{for(let i=0;i<e.length;i++){const s=Vp[e[i]];if(s&&s(t,e))return}return n(t,...r)},kp={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},G1e=(n,e)=>t=>{if(!("key"in t))return;const r=Wr(t.key);if(e.some(i=>i===r||kp[i]===r))return n(t)},W1e={beforeMount(n,{value:e},{transition:t}){n._vod=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):As(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:r}){!e!=!t&&(r?e?(r.beforeEnter(n),As(n,!0),r.enter(n)):r.leave(n,()=>{As(n,!1)}):As(n,e))},beforeUnmount(n,{value:e}){As(n,e)}};function As(n,e){n.style.display=e?n._vod:"none"}const Gp=L0({patchProp:Cp},mp);let Rc;function _u(){return Rc||(Rc=$7(Gp))}const $1e=(...n)=>{_u().render(...n)},Wp=(...n)=>{const e=_u().createApp(...n),{mount:t}=e;return e.mount=r=>{const i=$p(r);if(!i)return;const s=e._component;!He(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function $p(n){return S0(n)?document.querySelector(n):n}const Xp=(n,e)=>{const t=n.__vccOpts||n;for(const[r,i]of e)t[r]=i;return t},jp=Fe({name:"App"});function qp(n,e,t,r,i,s){const o=P7("router-view");return P(),N4(o)}const Yp=Xp(jp,[["render",qp]]),Qp="modulepreload",Kp=function(n){return"/qzimp-mall-2-help/"+n},Fc={},Ts=function(e,t,r){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=Kp(s),s in Fc)return;Fc[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Qp,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Mi=typeof window<"u";function Zp(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const s0=Object.assign;function y2(n,e){const t={};for(const r in e){const i=e[r];t[r]=Wt(i)?i.map(n):n(i)}return t}const Js=()=>{},Wt=Array.isArray,Jp=/\/$/,em=n=>n.replace(Jp,"");function w2(n,e,t="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),i=n(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=im(r??e,t),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function tm(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function zc(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function nm(n,e,t){const r=e.matched.length-1,i=t.matched.length-1;return r>-1&&r===i&&Oi(e.matched[r],t.matched[i])&&gu(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Oi(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function gu(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!rm(n[t],e[t]))return!1;return!0}function rm(n,e){return Wt(n)?Ic(n,e):Wt(e)?Ic(e,n):n===e}function Ic(n,e){return Wt(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function im(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=t.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var wo;(function(n){n.pop="pop",n.push="push"})(wo||(wo={}));var eo;(function(n){n.back="back",n.forward="forward",n.unknown=""})(eo||(eo={}));function sm(n){if(!n)if(Mi){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),em(n)}const om=/^[^#]+#/;function am(n,e){return n.replace(om,"#")+e}function lm(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const G1=()=>({left:window.pageXOffset,top:window.pageYOffset});function cm(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;e=lm(i,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Dc(n,e){return(history.state?history.state.position-e:-1)+n}const Ll=new Map;function um(n,e){Ll.set(n,e)}function hm(n){const e=Ll.get(n);return Ll.delete(n),e}let dm=()=>location.protocol+"//"+location.host;function vu(n,e){const{pathname:t,search:r,hash:i}=e,s=n.indexOf("#");if(s>-1){let a=i.includes(n.slice(s))?n.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),zc(l,"")}return zc(t,n)+r+i}function fm(n,e,t,r){let i=[],s=[],o=null;const a=({state:d})=>{const f=vu(n,location),p=t.value,g=e.value;let y=0;if(d){if(t.value=f,e.value=d,o&&o===p){o=null;return}y=g?d.position-g.position:0}else r(f);i.forEach(_=>{_(t.value,p,{delta:y,type:wo.pop,direction:y?y>0?eo.forward:eo.back:eo.unknown})})};function l(){o=t.value}function c(d){i.push(d);const f=()=>{const p=i.indexOf(d);p>-1&&i.splice(p,1)};return s.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(s0({},d.state,{scroll:G1()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Nc(n,e,t,r=!1,i=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:i?G1():null}}function pm(n){const{history:e,location:t}=window,r={value:vu(n,t)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=n.indexOf("#"),d=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+l:dm()+n+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),t[u?"replace":"assign"](d)}}function o(l,c){const u=s0({},e.state,Nc(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),r.value=l}function a(l,c){const u=s0({},i.value,e.state,{forward:l,scroll:G1()});s(u.current,u,!0);const h=s0({},Nc(r.value,l,null),{position:u.position+1},c);s(l,h,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function mm(n){n=sm(n);const e=pm(n),t=fm(n,e.state,e.location,e.replace);function r(s,o=!0){o||t.pauseListeners(),history.go(s)}const i=s0({location:"",base:n,go:r,createHref:am.bind(null,n)},e,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function _m(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),mm(n)}function gm(n){return typeof n=="string"||n&&typeof n=="object"}function xu(n){return typeof n=="string"||typeof n=="symbol"}const zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},yu=Symbol("");var Oc;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Oc||(Oc={}));function Bi(n,e){return s0(new Error,{type:n,[yu]:!0},e)}function hn(n,e){return n instanceof Error&&yu in n&&(e==null||!!(n.type&e))}const Bc="[^/]+?",vm={sensitive:!1,strict:!1,start:!0,end:!0},xm=/[.+*?^${}()[\]/\\]/g;function ym(n,e){const t=s0({},vm,e),r=[];let i=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(t.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(xm,"\\$&"),f+=40;else if(d.type===1){const{value:p,repeatable:g,optional:y,regexp:_}=d;s.push({name:p,repeatable:g,optional:y});const m=_||Bc;if(m!==Bc){f+=10;try{new RegExp(`(${m})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${p}" (${m}): `+v.message)}}let x=g?`((?:${m})(?:/(?:${m}))*)`:`(${m})`;h||(x=y&&c.length<2?`(?:/${x})`:"/"+x),y&&(x+="?"),i+=x,f+=20,y&&(f+=-8),g&&(f+=-20),m===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(t.strict&&t.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&(i+="(?:/|$)");const o=new RegExp(i,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",p=s[d-1];h[p.name]=f&&p.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:p,repeatable:g,optional:y}=f,_=p in c?c[p]:"";if(Wt(_)&&!g)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const m=Wt(_)?_.join("/"):_;if(!m)if(y)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=m}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function wm(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Mm(n,e){let t=0;const r=n.score,i=e.score;for(;t<r.length&&t<i.length;){const s=wm(r[t],i[t]);if(s)return s;t++}if(Math.abs(i.length-r.length)===1){if(Hc(r))return 1;if(Hc(i))return-1}return i.length-r.length}function Hc(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const bm={type:0,value:""},Sm=/[a-zA-Z0-9_]/;function Am(n){if(!n)return[[]];if(n==="/")return[[bm]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(f){throw new Error(`ERR (${t})/"${c}": ${f}`)}let t=0,r=t;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):d();break;case 4:d(),t=r;break;case 1:l==="("?t=2:Sm.test(l)?d():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function Tm(n,e,t){const r=ym(Am(n.path),t),i=s0(r,{record:n,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Em(n,e){const t=[],r=new Map;e=kc({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,h,d){const f=!d,p=Cm(u);p.aliasOf=d&&d.record;const g=kc(e,u),y=[p];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const v of x)y.push(s0({},p,{components:d?d.record.components:p.components,path:v,aliasOf:d?d.record:p}))}let _,m;for(const x of y){const{path:v}=x;if(h&&v[0]!=="/"){const M=h.record.path,T=M[M.length-1]==="/"?"":"/";x.path=h.record.path+(v&&T+v)}if(_=Tm(x,h,g),d?d.alias.push(_):(m=m||_,m!==_&&m.alias.push(_),f&&u.name&&!Vc(_)&&o(u.name)),p.children){const M=p.children;for(let T=0;T<M.length;T++)s(M[T],_,d&&d.children[T])}d=d||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return m?()=>{o(m)}:Js}function o(u){if(xu(u)){const h=r.get(u);h&&(r.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let h=0;for(;h<t.length&&Mm(u,t[h])>=0&&(u.record.path!==t[h].record.path||!wu(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!Vc(u)&&r.set(u.record.name,u)}function c(u,h){let d,f={},p,g;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Bi(1,{location:u});g=d.record.name,f=s0(Uc(h.params,d.keys.filter(m=>!m.optional).map(m=>m.name)),u.params&&Uc(u.params,d.keys.map(m=>m.name))),p=d.stringify(f)}else if("path"in u)p=u.path,d=t.find(m=>m.re.test(p)),d&&(f=d.parse(p),g=d.record.name);else{if(d=h.name?r.get(h.name):t.find(m=>m.re.test(h.path)),!d)throw Bi(1,{location:u,currentLocation:h});g=d.record.name,f=s0({},h.params,u.params),p=d.stringify(f)}const y=[];let _=d;for(;_;)y.unshift(_.record),_=_.parent;return{name:g,path:p,params:f,matched:y,meta:Pm(y)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Uc(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function Cm(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Lm(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Lm(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="boolean"?t:t[r];return e}function Vc(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Pm(n){return n.reduce((e,t)=>s0(e,t.meta),{})}function kc(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}function wu(n,e){return e.children.some(t=>t===n||wu(n,t))}const Mu=/#/g,Rm=/&/g,Fm=/\//g,zm=/=/g,Im=/\?/g,bu=/\+/g,Dm=/%5B/g,Nm=/%5D/g,Su=/%5E/g,Om=/%60/g,Au=/%7B/g,Bm=/%7C/g,Tu=/%7D/g,Hm=/%20/g;function U4(n){return encodeURI(""+n).replace(Bm,"|").replace(Dm,"[").replace(Nm,"]")}function Um(n){return U4(n).replace(Au,"{").replace(Tu,"}").replace(Su,"^")}function Pl(n){return U4(n).replace(bu,"%2B").replace(Hm,"+").replace(Mu,"%23").replace(Rm,"%26").replace(Om,"`").replace(Au,"{").replace(Tu,"}").replace(Su,"^")}function Vm(n){return Pl(n).replace(zm,"%3D")}function km(n){return U4(n).replace(Mu,"%23").replace(Im,"%3F")}function Gm(n){return n==null?"":km(n).replace(Fm,"%2F")}function h1(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function Wm(n){const e={};if(n===""||n==="?")return e;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(bu," "),o=s.indexOf("="),a=h1(o<0?s:s.slice(0,o)),l=o<0?null:h1(s.slice(o+1));if(a in e){let c=e[a];Wt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Gc(n){let e="";for(let t in n){const r=n[t];if(t=Vm(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(Wt(r)?r.map(s=>s&&Pl(s)):[r&&Pl(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function $m(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=Wt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const Xm=Symbol(""),Wc=Symbol(""),V4=Symbol(""),Eu=Symbol(""),Rl=Symbol("");function Es(){let n=[];function e(r){return n.push(r),()=>{const i=n.indexOf(r);i>-1&&n.splice(i,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function qn(n,e,t,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Bi(4,{from:t,to:e})):h instanceof Error?a(h):gm(h)?a(Bi(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},c=n.call(r&&r.instances[i],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function M2(n,e,t,r){const i=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(jm(a)){const c=(a.__vccOpts||a)[e];c&&i.push(qn(c,t,r,s,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Zp(c)?c.default:c;s.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&qn(d,t,r,s,o)()}))}}return i}function jm(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function $c(n){const e=tt(V4),t=tt(Eu),r=vt(()=>e.resolve(Ri(n.to))),i=vt(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const d=h.findIndex(Oi.bind(null,u));if(d>-1)return d;const f=Xc(l[c-2]);return c>1&&Xc(u)===f&&h[h.length-1].path!==f?h.findIndex(Oi.bind(null,l[c-2])):d}),s=vt(()=>i.value>-1&&Km(t.params,r.value.params)),o=vt(()=>i.value>-1&&i.value===t.matched.length-1&&gu(t.params,r.value.params));function a(l={}){return Qm(l)?e[Ri(n.replace)?"replace":"push"](Ri(n.to)).catch(Js):Promise.resolve()}return{route:r,href:vt(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const qm=Fe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$c,setup(n,{slots:e}){const t=es($c(n)),{options:r}=tt(V4),i=vt(()=>({[jc(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[jc(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:H4("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},s)}}}),Ym=qm;function Qm(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Km(n,e){for(const t in e){const r=e[t],i=n[t];if(typeof r=="string"){if(r!==i)return!1}else if(!Wt(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Xc(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const jc=(n,e,t)=>n??e??t,Zm=Fe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=tt(Rl),i=vt(()=>n.route||r.value),s=tt(Wc,0),o=vt(()=>{let c=Ri(s);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=vt(()=>i.value.matched[o.value]);Qs(Wc,vt(()=>o.value+1)),Qs(Xm,a),Qs(Rl,i);const l=ko();return Ze(()=>[l.value,a.value,n.name],([c,u,h],[d,f,p])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Oi(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=i.value,u=n.name,h=a.value,d=h&&h.components[u];if(!d)return qc(t.default,{Component:d,route:c});const f=h.props[u],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,y=H4(d,s0({},p,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return qc(t.default,{Component:y,route:c})||y}}});function qc(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Jm=Zm;function e_(n){const e=Em(n.routes,n),t=n.parseQuery||Wm,r=n.stringifyQuery||Gc,i=n.history,s=Es(),o=Es(),a=Es(),l=Yf(zn);let c=zn;Mi&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=y2.bind(null,q=>""+q),h=y2.bind(null,Gm),d=y2.bind(null,h1);function f(q,se){let J,le;return xu(q)?(J=e.getRecordMatcher(q),le=se):le=q,e.addRoute(le,J)}function p(q){const se=e.getRecordMatcher(q);se&&e.removeRoute(se)}function g(){return e.getRoutes().map(q=>q.record)}function y(q){return!!e.getRecordMatcher(q)}function _(q,se){if(se=s0({},se||l.value),typeof q=="string"){const O=w2(t,q,se.path),Q=e.resolve({path:O.path},se),Y=i.createHref(O.fullPath);return s0(O,Q,{params:d(Q.params),hash:h1(O.hash),redirectedFrom:void 0,href:Y})}let J;if("path"in q)J=s0({},q,{path:w2(t,q.path,se.path).path});else{const O=s0({},q.params);for(const Q in O)O[Q]==null&&delete O[Q];J=s0({},q,{params:h(O)}),se.params=h(se.params)}const le=e.resolve(J,se),Te=q.hash||"";le.params=u(d(le.params));const A=tm(r,s0({},q,{hash:Um(Te),path:le.path})),L=i.createHref(A);return s0({fullPath:A,hash:Te,query:r===Gc?$m(q.query):q.query||{}},le,{redirectedFrom:void 0,href:L})}function m(q){return typeof q=="string"?w2(t,q,l.value.path):s0({},q)}function x(q,se){if(c!==q)return Bi(8,{from:se,to:q})}function v(q){return w(q)}function M(q){return v(s0(m(q),{replace:!0}))}function T(q){const se=q.matched[q.matched.length-1];if(se&&se.redirect){const{redirect:J}=se;let le=typeof J=="function"?J(q):J;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=m(le):{path:le},le.params={}),s0({query:q.query,hash:q.hash,params:"path"in le?{}:q.params},le)}}function w(q,se){const J=c=_(q),le=l.value,Te=q.state,A=q.force,L=q.replace===!0,O=T(J);if(O)return w(s0(m(O),{state:typeof O=="object"?s0({},Te,O.state):Te,force:A,replace:L}),se||J);const Q=J;Q.redirectedFrom=se;let Y;return!A&&nm(r,le,J)&&(Y=Bi(16,{to:Q,from:le}),pe(le,le,!0,!1)),(Y?Promise.resolve(Y):D(Q,le)).catch(C=>hn(C)?hn(C,2)?C:we(C):ee(C,Q,le)).then(C=>{if(C){if(hn(C,2))return w(s0({replace:L},m(C.to),{state:typeof C.to=="object"?s0({},Te,C.to.state):Te,force:A}),se||Q)}else C=V(Q,le,!0,L,Te);return z(Q,le,C),C})}function S(q,se){const J=x(q,se);return J?Promise.reject(J):Promise.resolve()}function N(q){const se=ce.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(q):q()}function D(q,se){let J;const[le,Te,A]=t_(q,se);J=M2(le.reverse(),"beforeRouteLeave",q,se);for(const O of le)O.leaveGuards.forEach(Q=>{J.push(qn(Q,q,se))});const L=S.bind(null,q,se);return J.push(L),te(J).then(()=>{J=[];for(const O of s.list())J.push(qn(O,q,se));return J.push(L),te(J)}).then(()=>{J=M2(Te,"beforeRouteUpdate",q,se);for(const O of Te)O.updateGuards.forEach(Q=>{J.push(qn(Q,q,se))});return J.push(L),te(J)}).then(()=>{J=[];for(const O of q.matched)if(O.beforeEnter&&!se.matched.includes(O))if(Wt(O.beforeEnter))for(const Q of O.beforeEnter)J.push(qn(Q,q,se));else J.push(qn(O.beforeEnter,q,se));return J.push(L),te(J)}).then(()=>(q.matched.forEach(O=>O.enterCallbacks={}),J=M2(A,"beforeRouteEnter",q,se),J.push(L),te(J))).then(()=>{J=[];for(const O of o.list())J.push(qn(O,q,se));return J.push(L),te(J)}).catch(O=>hn(O,8)?O:Promise.reject(O))}function z(q,se,J){for(const le of a.list())N(()=>le(q,se,J))}function V(q,se,J,le,Te){const A=x(q,se);if(A)return A;const L=se===zn,O=Mi?history.state:{};J&&(le||L?i.replace(q.fullPath,s0({scroll:L&&O&&O.scroll},Te)):i.push(q.fullPath,Te)),l.value=q,pe(q,se,J,L),we()}let H;function $(){H||(H=i.listen((q,se,J)=>{if(!xe.listening)return;const le=_(q),Te=T(le);if(Te){w(s0(Te,{replace:!0}),le).catch(Js);return}c=le;const A=l.value;Mi&&um(Dc(A.fullPath,J.delta),G1()),D(le,A).catch(L=>hn(L,12)?L:hn(L,2)?(w(L.to,le).then(O=>{hn(O,20)&&!J.delta&&J.type===wo.pop&&i.go(-1,!1)}).catch(Js),Promise.reject()):(J.delta&&i.go(-J.delta,!1),ee(L,le,A))).then(L=>{L=L||V(le,A,!1),L&&(J.delta&&!hn(L,8)?i.go(-J.delta,!1):J.type===wo.pop&&hn(L,20)&&i.go(-1,!1)),z(le,A,L)}).catch(Js)}))}let K=Es(),U=Es(),X;function ee(q,se,J){we(q);const le=U.list();return le.length?le.forEach(Te=>Te(q,se,J)):console.error(q),Promise.reject(q)}function fe(){return X&&l.value!==zn?Promise.resolve():new Promise((q,se)=>{K.add([q,se])})}function we(q){return X||(X=!q,$(),K.list().forEach(([se,J])=>q?J(q):se()),K.reset()),q}function pe(q,se,J,le){const{scrollBehavior:Te}=n;if(!Mi||!Te)return Promise.resolve();const A=!J&&hm(Dc(q.fullPath,0))||(le||!J)&&history.state&&history.state.scroll||null;return T4().then(()=>Te(q,se,A)).then(L=>L&&cm(L)).catch(L=>ee(L,q,se))}const be=q=>i.go(q);let re;const ce=new Set,xe={currentRoute:l,listening:!0,addRoute:f,removeRoute:p,hasRoute:y,getRoutes:g,resolve:_,options:n,push:v,replace:M,go:be,back:()=>be(-1),forward:()=>be(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:U.add,isReady:fe,install(q){const se=this;q.component("RouterLink",Ym),q.component("RouterView",Jm),q.config.globalProperties.$router=se,Object.defineProperty(q.config.globalProperties,"$route",{enumerable:!0,get:()=>Ri(l)}),Mi&&!re&&l.value===zn&&(re=!0,v(i.location).catch(Te=>{}));const J={};for(const Te in zn)J[Te]=vt(()=>l.value[Te]);q.provide(V4,se),q.provide(Eu,es(J)),q.provide(Rl,l);const le=q.unmount;ce.add(q),q.unmount=function(){ce.delete(q),ce.size<1&&(c=zn,H&&H(),H=null,l.value=zn,re=!1,X=!1),le()}}};function te(q){return q.reduce((se,J)=>se.then(()=>N(J)),Promise.resolve())}return xe}function t_(n,e){const t=[],r=[],i=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Oi(c,a))?r.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Oi(c,l))||i.push(l))}return[t,r,i]}const n_=[{path:"/",name:"index",component:()=>Ts(()=>import("./index-3d0034d5.js"),["assets/index-3d0034d5.js","assets/el-popper-1fff54b3.js","assets/el-popper-a6a60134.css","assets/aria-bc8e8b0f.js","assets/index-dfe68696.css"]),redirect:"/cms_help_category",children:[{path:"/cms_help_category",name:"帮助信息分类",component:()=>Ts(()=>import("./cms_help_category-185766c8.js"),["assets/cms_help_category-185766c8.js","assets/el-popper-1fff54b3.js","assets/el-popper-a6a60134.css","assets/cms_help-4b89ae23.js","assets/cms_help-f2601b27.css","assets/el-form-item-817e4bc4.js","assets/aria-bc8e8b0f.js","assets/el-form-item-9bdfe913.css","assets/cms_help_category-77501186.css"])},{path:"/cms_help",name:"帮助信息",component:()=>Ts(()=>import("./cms_help-50564e9f.js"),["assets/cms_help-50564e9f.js","assets/el-popper-1fff54b3.js","assets/el-popper-a6a60134.css","assets/cms_help-4b89ae23.js","assets/cms_help-f2601b27.css","assets/el-form-item-817e4bc4.js","assets/aria-bc8e8b0f.js","assets/el-form-item-9bdfe913.css","assets/cms_help_category-77501186.css"])},{path:"/common_question",name:"common_question",component:()=>Ts(()=>import("./common_question-ff5e9f59.js"),["assets/common_question-ff5e9f59.js","assets/el-popper-1fff54b3.js","assets/el-popper-a6a60134.css","assets/cms_help-4b89ae23.js","assets/cms_help-f2601b27.css","assets/cms_help_category-77501186.css"])}]},{path:"/:pathMatch(.*)*",name:"404",component:()=>Ts(()=>import("./404-cd62410f.js"),[])}],r_=e_({history:_m(),routes:n_});/*! Element Plus Icons Vue v2.1.0 */var i_={name:"AddLocation"},F=(n,e)=>{let t=n.__vccOpts||n;for(let[r,i]of e)t[r]=i;return t},s_={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},o_=b("path",{fill:"currentColor",d:"M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"},null,-1),a_=b("path",{fill:"currentColor",d:"M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"},null,-1),l_=b("path",{fill:"currentColor",d:"M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"},null,-1),c_=[o_,a_,l_];function u_(n,e,t,r,i,s){return P(),R("svg",s_,c_)}var h_=F(i_,[["render",u_],["__file","add-location.vue"]]),d_={name:"Aim"},f_={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},p_=b("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),m_=b("path",{fill:"currentColor",d:"M512 96a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V128a32 32 0 0 1 32-32zm0 576a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V704a32 32 0 0 1 32-32zM96 512a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32zm576 0a32 32 0 0 1 32-32h192a32 32 0 1 1 0 64H704a32 32 0 0 1-32-32z"},null,-1),__=[p_,m_];function g_(n,e,t,r,i,s){return P(),R("svg",f_,__)}var v_=F(d_,[["render",g_],["__file","aim.vue"]]),x_={name:"AlarmClock"},y_={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},w_=b("path",{fill:"currentColor",d:"M512 832a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"},null,-1),M_=b("path",{fill:"currentColor",d:"m292.288 824.576 55.424 32-48 83.136a32 32 0 1 1-55.424-32l48-83.136zm439.424 0-55.424 32 48 83.136a32 32 0 1 0 55.424-32l-48-83.136zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0v192zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128l46.912 46.912z"},null,-1),b_=[w_,M_];function S_(n,e,t,r,i,s){return P(),R("svg",y_,b_)}var A_=F(x_,[["render",S_],["__file","alarm-clock.vue"]]),T_={name:"Apple"},E_={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},C_=b("path",{fill:"currentColor",d:"M599.872 203.776a189.44 189.44 0 0 1 64.384-4.672l2.624.128c31.168 1.024 51.2 4.096 79.488 16.32 37.632 16.128 74.496 45.056 111.488 89.344 96.384 115.264 82.752 372.8-34.752 521.728-7.68 9.728-32 41.6-30.72 39.936a426.624 426.624 0 0 1-30.08 35.776c-31.232 32.576-65.28 49.216-110.08 50.048-31.36.64-53.568-5.312-84.288-18.752l-6.528-2.88c-20.992-9.216-30.592-11.904-47.296-11.904-18.112 0-28.608 2.88-51.136 12.672l-6.464 2.816c-28.416 12.224-48.32 18.048-76.16 19.2-74.112 2.752-116.928-38.08-180.672-132.16-96.64-142.08-132.608-349.312-55.04-486.4 46.272-81.92 129.92-133.632 220.672-135.04 32.832-.576 60.288 6.848 99.648 22.72 27.136 10.88 34.752 13.76 37.376 14.272 16.256-20.16 27.776-36.992 34.56-50.24 13.568-26.304 27.2-59.968 40.704-100.8a32 32 0 1 1 60.8 20.224c-12.608 37.888-25.408 70.4-38.528 97.664zm-51.52 78.08c-14.528 17.792-31.808 37.376-51.904 58.816a32 32 0 1 1-46.72-43.776l12.288-13.248c-28.032-11.2-61.248-26.688-95.68-26.112-70.4 1.088-135.296 41.6-171.648 105.792C121.6 492.608 176 684.16 247.296 788.992c34.816 51.328 76.352 108.992 130.944 106.944 52.48-2.112 72.32-34.688 135.872-34.688 63.552 0 81.28 34.688 136.96 33.536 56.448-1.088 75.776-39.04 126.848-103.872 107.904-136.768 107.904-362.752 35.776-449.088-72.192-86.272-124.672-84.096-151.68-85.12-41.472-4.288-81.6 12.544-113.664 25.152z"},null,-1),L_=[C_];function P_(n,e,t,r,i,s){return P(),R("svg",E_,L_)}var R_=F(T_,[["render",P_],["__file","apple.vue"]]),F_={name:"ArrowDownBold"},z_={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},I_=b("path",{fill:"currentColor",d:"M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"},null,-1),D_=[I_];function N_(n,e,t,r,i,s){return P(),R("svg",z_,D_)}var O_=F(F_,[["render",N_],["__file","arrow-down-bold.vue"]]),B_={name:"ArrowDown"},H_={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},U_=b("path",{fill:"currentColor",d:"M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"},null,-1),V_=[U_];function k_(n,e,t,r,i,s){return P(),R("svg",H_,V_)}var G_=F(B_,[["render",k_],["__file","arrow-down.vue"]]),W_={name:"ArrowLeftBold"},$_={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},X_=b("path",{fill:"currentColor",d:"M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"},null,-1),j_=[X_];function q_(n,e,t,r,i,s){return P(),R("svg",$_,j_)}var Y_=F(W_,[["render",q_],["__file","arrow-left-bold.vue"]]),Q_={name:"ArrowLeft"},K_={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Z_=b("path",{fill:"currentColor",d:"M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"},null,-1),J_=[Z_];function eg(n,e,t,r,i,s){return P(),R("svg",K_,J_)}var tg=F(Q_,[["render",eg],["__file","arrow-left.vue"]]),ng={name:"ArrowRightBold"},rg={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},ig=b("path",{fill:"currentColor",d:"M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"},null,-1),sg=[ig];function og(n,e,t,r,i,s){return P(),R("svg",rg,sg)}var ag=F(ng,[["render",og],["__file","arrow-right-bold.vue"]]),lg={name:"ArrowRight"},cg={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},ug=b("path",{fill:"currentColor",d:"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"},null,-1),hg=[ug];function dg(n,e,t,r,i,s){return P(),R("svg",cg,hg)}var fg=F(lg,[["render",dg],["__file","arrow-right.vue"]]),pg={name:"ArrowUpBold"},mg={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},_g=b("path",{fill:"currentColor",d:"M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"},null,-1),gg=[_g];function vg(n,e,t,r,i,s){return P(),R("svg",mg,gg)}var xg=F(pg,[["render",vg],["__file","arrow-up-bold.vue"]]),yg={name:"ArrowUp"},wg={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Mg=b("path",{fill:"currentColor",d:"m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"},null,-1),bg=[Mg];function Sg(n,e,t,r,i,s){return P(),R("svg",wg,bg)}var Ag=F(yg,[["render",Sg],["__file","arrow-up.vue"]]),Tg={name:"Avatar"},Eg={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Cg=b("path",{fill:"currentColor",d:"M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"},null,-1),Lg=[Cg];function Pg(n,e,t,r,i,s){return P(),R("svg",Eg,Lg)}var Rg=F(Tg,[["render",Pg],["__file","avatar.vue"]]),Fg={name:"Back"},zg={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Ig=b("path",{fill:"currentColor",d:"M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"},null,-1),Dg=b("path",{fill:"currentColor",d:"m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"},null,-1),Ng=[Ig,Dg];function Og(n,e,t,r,i,s){return P(),R("svg",zg,Ng)}var Bg=F(Fg,[["render",Og],["__file","back.vue"]]),Hg={name:"Baseball"},Ug={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Vg=b("path",{fill:"currentColor",d:"M195.2 828.8a448 448 0 1 1 633.6-633.6 448 448 0 0 1-633.6 633.6zm45.248-45.248a384 384 0 1 0 543.104-543.104 384 384 0 0 0-543.104 543.104z"},null,-1),kg=b("path",{fill:"currentColor",d:"M497.472 96.896c22.784 4.672 44.416 9.472 64.896 14.528a256.128 256.128 0 0 0 350.208 350.208c5.056 20.48 9.856 42.112 14.528 64.896A320.128 320.128 0 0 1 497.472 96.896zM108.48 491.904a320.128 320.128 0 0 1 423.616 423.68c-23.04-3.648-44.992-7.424-65.728-11.52a256.128 256.128 0 0 0-346.496-346.432 1736.64 1736.64 0 0 1-11.392-65.728z"},null,-1),Gg=[Vg,kg];function Wg(n,e,t,r,i,s){return P(),R("svg",Ug,Gg)}var $g=F(Hg,[["render",Wg],["__file","baseball.vue"]]),Xg={name:"Basketball"},jg={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},qg=b("path",{fill:"currentColor",d:"M778.752 788.224a382.464 382.464 0 0 0 116.032-245.632 256.512 256.512 0 0 0-241.728-13.952 762.88 762.88 0 0 1 125.696 259.584zm-55.04 44.224a699.648 699.648 0 0 0-125.056-269.632 256.128 256.128 0 0 0-56.064 331.968 382.72 382.72 0 0 0 181.12-62.336zm-254.08 61.248A320.128 320.128 0 0 1 557.76 513.6a715.84 715.84 0 0 0-48.192-48.128 320.128 320.128 0 0 1-379.264 88.384 382.4 382.4 0 0 0 110.144 229.696 382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.128 256.128 0 0 0 331.072-56.448 699.648 699.648 0 0 0-268.8-124.352 382.656 382.656 0 0 0-62.272 180.8zm106.56-235.84a762.88 762.88 0 0 1 258.688 125.056 256.512 256.512 0 0 0-13.44-241.088A382.464 382.464 0 0 0 235.84 245.248zm318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a779.84 779.84 0 0 1 66.176 66.112 320.832 320.832 0 0 1 282.112-8.128 382.4 382.4 0 0 0-110.144-229.12 382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6 448 448 0 0 1 633.6 633.6z"},null,-1),Yg=[qg];function Qg(n,e,t,r,i,s){return P(),R("svg",jg,Yg)}var Kg=F(Xg,[["render",Qg],["__file","basketball.vue"]]),Zg={name:"BellFilled"},Jg={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},ev=b("path",{fill:"currentColor",d:"M640 832a128 128 0 0 1-256 0h256zm192-64H134.4a38.4 38.4 0 0 1 0-76.8H192V448c0-154.88 110.08-284.16 256.32-313.6a64 64 0 1 1 127.36 0A320.128 320.128 0 0 1 832 448v243.2h57.6a38.4 38.4 0 0 1 0 76.8H832z"},null,-1),tv=[ev];function nv(n,e,t,r,i,s){return P(),R("svg",Jg,tv)}var rv=F(Zg,[["render",nv],["__file","bell-filled.vue"]]),iv={name:"Bell"},sv={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},ov=b("path",{fill:"currentColor",d:"M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z"},null,-1),av=b("path",{fill:"currentColor",d:"M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z"},null,-1),lv=b("path",{fill:"currentColor",d:"M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z"},null,-1),cv=[ov,av,lv];function uv(n,e,t,r,i,s){return P(),R("svg",sv,cv)}var hv=F(iv,[["render",uv],["__file","bell.vue"]]),dv={name:"Bicycle"},fv={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},pv=tp('<path fill="currentColor" d="M256 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"></path><path fill="currentColor" d="M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"></path><path fill="currentColor" d="M768 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"></path><path fill="currentColor" d="M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192H480zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384H96z"></path><path fill="currentColor" d="m373.376 599.808-42.752-47.616 320-288 42.752 47.616z"></path>',5),mv=[pv];function _v(n,e,t,r,i,s){return P(),R("svg",fv,mv)}var gv=F(dv,[["render",_v],["__file","bicycle.vue"]]),vv={name:"BottomLeft"},xv={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},yv=b("path",{fill:"currentColor",d:"M256 768h416a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V352a32 32 0 0 1 64 0v416z"},null,-1),wv=b("path",{fill:"currentColor",d:"M246.656 822.656a32 32 0 0 1-45.312-45.312l544-544a32 32 0 0 1 45.312 45.312l-544 544z"},null,-1),Mv=[yv,wv];function bv(n,e,t,r,i,s){return P(),R("svg",xv,Mv)}var Sv=F(vv,[["render",bv],["__file","bottom-left.vue"]]),Av={name:"BottomRight"},Tv={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Ev=b("path",{fill:"currentColor",d:"M352 768a32 32 0 1 0 0 64h448a32 32 0 0 0 32-32V352a32 32 0 0 0-64 0v416H352z"},null,-1),Cv=b("path",{fill:"currentColor",d:"M777.344 822.656a32 32 0 0 0 45.312-45.312l-544-544a32 32 0 0 0-45.312 45.312l544 544z"},null,-1),Lv=[Ev,Cv];function Pv(n,e,t,r,i,s){return P(),R("svg",Tv,Lv)}var Rv=F(Av,[["render",Pv],["__file","bottom-right.vue"]]),Fv={name:"Bottom"},zv={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Iv=b("path",{fill:"currentColor",d:"M544 805.888V168a32 32 0 1 0-64 0v637.888L246.656 557.952a30.72 30.72 0 0 0-45.312 0 35.52 35.52 0 0 0 0 48.064l288 306.048a30.72 30.72 0 0 0 45.312 0l288-306.048a35.52 35.52 0 0 0 0-48 30.72 30.72 0 0 0-45.312 0L544 805.824z"},null,-1),Dv=[Iv];function Nv(n,e,t,r,i,s){return P(),R("svg",zv,Dv)}var Ov=F(Fv,[["render",Nv],["__file","bottom.vue"]]),Bv={name:"Bowl"},Hv={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Uv=b("path",{fill:"currentColor",d:"M714.432 704a351.744 351.744 0 0 0 148.16-256H161.408a351.744 351.744 0 0 0 148.16 256h404.864zM288 766.592A415.68 415.68 0 0 1 96 416a32 32 0 0 1 32-32h768a32 32 0 0 1 32 32 415.68 415.68 0 0 1-192 350.592V832a64 64 0 0 1-64 64H352a64 64 0 0 1-64-64v-65.408zM493.248 320h-90.496l254.4-254.4a32 32 0 1 1 45.248 45.248L493.248 320zm187.328 0h-128l269.696-155.712a32 32 0 0 1 32 55.424L680.576 320zM352 768v64h320v-64H352z"},null,-1),Vv=[Uv];function kv(n,e,t,r,i,s){return P(),R("svg",Hv,Vv)}var Gv=F(Bv,[["render",kv],["__file","bowl.vue"]]),Wv={name:"Box"},$v={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Xv=b("path",{fill:"currentColor",d:"M317.056 128 128 344.064V896h768V344.064L706.944 128H317.056zm-14.528-64h418.944a32 32 0 0 1 24.064 10.88l206.528 236.096A32 32 0 0 1 960 332.032V928a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V332.032a32 32 0 0 1 7.936-21.12L278.4 75.008A32 32 0 0 1 302.528 64z"},null,-1),jv=b("path",{fill:"currentColor",d:"M64 320h896v64H64z"},null,-1),qv=b("path",{fill:"currentColor",d:"M448 327.872V640h128V327.872L526.08 128h-28.16L448 327.872zM448 64h128l64 256v352a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V320l64-256z"},null,-1),Yv=[Xv,jv,qv];function Qv(n,e,t,r,i,s){return P(),R("svg",$v,Yv)}var Kv=F(Wv,[["render",Qv],["__file","box.vue"]]),Zv={name:"Briefcase"},Jv={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},ex=b("path",{fill:"currentColor",d:"M320 320V128h384v192h192v192H128V320h192zM128 576h768v320H128V576zm256-256h256.064V192H384v128z"},null,-1),tx=[ex];function nx(n,e,t,r,i,s){return P(),R("svg",Jv,tx)}var rx=F(Zv,[["render",nx],["__file","briefcase.vue"]]),ix={name:"BrushFilled"},sx={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},ox=b("path",{fill:"currentColor",d:"M608 704v160a96 96 0 0 1-192 0V704h-96a128 128 0 0 1-128-128h640a128 128 0 0 1-128 128h-96zM192 512V128.064h640V512H192z"},null,-1),ax=[ox];function lx(n,e,t,r,i,s){return P(),R("svg",sx,ax)}var cx=F(ix,[["render",lx],["__file","brush-filled.vue"]]),ux={name:"Brush"},hx={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},dx=b("path",{fill:"currentColor",d:"M896 448H128v192a64 64 0 0 0 64 64h192v192h256V704h192a64 64 0 0 0 64-64V448zm-770.752-64c0-47.552 5.248-90.24 15.552-128 14.72-54.016 42.496-107.392 83.2-160h417.28l-15.36 70.336L736 96h211.2c-24.832 42.88-41.92 96.256-51.2 160a663.872 663.872 0 0 0-6.144 128H960v256a128 128 0 0 1-128 128H704v160a32 32 0 0 1-32 32H352a32 32 0 0 1-32-32V768H192A128 128 0 0 1 64 640V384h61.248zm64 0h636.544c-2.048-45.824.256-91.584 6.848-137.216 4.48-30.848 10.688-59.776 18.688-86.784h-96.64l-221.12 141.248L561.92 160H256.512c-25.856 37.888-43.776 75.456-53.952 112.832-8.768 32.064-13.248 69.12-13.312 111.168z"},null,-1),fx=[dx];function px(n,e,t,r,i,s){return P(),R("svg",hx,fx)}var mx=F(ux,[["render",px],["__file","brush.vue"]]),_x={name:"Burger"},gx={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},vx=b("path",{fill:"currentColor",d:"M160 512a32 32 0 0 0-32 32v64a32 32 0 0 0 30.08 32H864a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H160zm736-58.56A96 96 0 0 1 960 544v64a96 96 0 0 1-51.968 85.312L855.36 833.6a96 96 0 0 1-89.856 62.272H258.496A96 96 0 0 1 168.64 833.6l-52.608-140.224A96 96 0 0 1 64 608v-64a96 96 0 0 1 64-90.56V448a384 384 0 1 1 768 5.44zM832 448a320 320 0 0 0-640 0h640zM512 704H188.352l40.192 107.136a32 32 0 0 0 29.952 20.736h507.008a32 32 0 0 0 29.952-20.736L835.648 704H512z"},null,-1),xx=[vx];function yx(n,e,t,r,i,s){return P(),R("svg",gx,xx)}var wx=F(_x,[["render",yx],["__file","burger.vue"]]),Mx={name:"Calendar"},bx={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Sx=b("path",{fill:"currentColor",d:"M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"},null,-1),Ax=[Sx];function Tx(n,e,t,r,i,s){return P(),R("svg",bx,Ax)}var Ex=F(Mx,[["render",Tx],["__file","calendar.vue"]]),Cx={name:"CameraFilled"},Lx={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Px=b("path",{fill:"currentColor",d:"M160 224a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704a64 64 0 0 0 64-64V288a64 64 0 0 0-64-64H748.416l-46.464-92.672A64 64 0 0 0 644.736 96H379.328a64 64 0 0 0-57.216 35.392L275.776 224H160zm352 435.2a115.2 115.2 0 1 0 0-230.4 115.2 115.2 0 0 0 0 230.4zm0 140.8a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"},null,-1),Rx=[Px];function Fx(n,e,t,r,i,s){return P(),R("svg",Lx,Rx)}var zx=F(Cx,[["render",Fx],["__file","camera-filled.vue"]]),Ix={name:"Camera"},Dx={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Nx=b("path",{fill:"currentColor",d:"M896 256H128v576h768V256zm-199.424-64-32.064-64h-304.96l-32 64h369.024zM96 192h160l46.336-92.608A64 64 0 0 1 359.552 64h304.96a64 64 0 0 1 57.216 35.328L768.192 192H928a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32zm416 512a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm0 64a224 224 0 1 1 0-448 224 224 0 0 1 0 448z"},null,-1),Ox=[Nx];function Bx(n,e,t,r,i,s){return P(),R("svg",Dx,Ox)}var Hx=F(Ix,[["render",Bx],["__file","camera.vue"]]),Ux={name:"CaretBottom"},Vx={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},kx=b("path",{fill:"currentColor",d:"m192 384 320 384 320-384z"},null,-1),Gx=[kx];function Wx(n,e,t,r,i,s){return P(),R("svg",Vx,Gx)}var $x=F(Ux,[["render",Wx],["__file","caret-bottom.vue"]]),Xx={name:"CaretLeft"},jx={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},qx=b("path",{fill:"currentColor",d:"M672 192 288 511.936 672 832z"},null,-1),Yx=[qx];function Qx(n,e,t,r,i,s){return P(),R("svg",jx,Yx)}var Kx=F(Xx,[["render",Qx],["__file","caret-left.vue"]]),Zx={name:"CaretRight"},Jx={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},ey=b("path",{fill:"currentColor",d:"M384 192v640l384-320.064z"},null,-1),ty=[ey];function ny(n,e,t,r,i,s){return P(),R("svg",Jx,ty)}var ry=F(Zx,[["render",ny],["__file","caret-right.vue"]]),iy={name:"CaretTop"},sy={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},oy=b("path",{fill:"currentColor",d:"M512 320 192 704h639.936z"},null,-1),ay=[oy];function ly(n,e,t,r,i,s){return P(),R("svg",sy,ay)}var cy=F(iy,[["render",ly],["__file","caret-top.vue"]]),uy={name:"Cellphone"},hy={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},dy=b("path",{fill:"currentColor",d:"M256 128a64 64 0 0 0-64 64v640a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H256zm0-64h512a128 128 0 0 1 128 128v640a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V192A128 128 0 0 1 256 64zm128 128h256a32 32 0 1 1 0 64H384a32 32 0 0 1 0-64zm128 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"},null,-1),fy=[dy];function py(n,e,t,r,i,s){return P(),R("svg",hy,fy)}var my=F(uy,[["render",py],["__file","cellphone.vue"]]),_y={name:"ChatDotRound"},gy={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},vy=b("path",{fill:"currentColor",d:"m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"},null,-1),xy=b("path",{fill:"currentColor",d:"M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"},null,-1),yy=[vy,xy];function wy(n,e,t,r,i,s){return P(),R("svg",gy,yy)}var My=F(_y,[["render",wy],["__file","chat-dot-round.vue"]]),by={name:"ChatDotSquare"},Sy={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Ay=b("path",{fill:"currentColor",d:"M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"},null,-1),Ty=b("path",{fill:"currentColor",d:"M512 499.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"},null,-1),Ey=[Ay,Ty];function Cy(n,e,t,r,i,s){return P(),R("svg",Sy,Ey)}var Ly=F(by,[["render",Cy],["__file","chat-dot-square.vue"]]),Py={name:"ChatLineRound"},Ry={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Fy=b("path",{fill:"currentColor",d:"m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"},null,-1),zy=b("path",{fill:"currentColor",d:"M352 576h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm32-192h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"},null,-1),Iy=[Fy,zy];function Dy(n,e,t,r,i,s){return P(),R("svg",Ry,Iy)}var Ny=F(Py,[["render",Dy],["__file","chat-line-round.vue"]]),Oy={name:"ChatLineSquare"},By={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Hy=b("path",{fill:"currentColor",d:"M160 826.88 273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"},null,-1),Uy=b("path",{fill:"currentColor",d:"M352 512h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm0-192h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"},null,-1),Vy=[Hy,Uy];function ky(n,e,t,r,i,s){return P(),R("svg",By,Vy)}var Gy=F(Oy,[["render",ky],["__file","chat-line-square.vue"]]),Wy={name:"ChatRound"},$y={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Xy=b("path",{fill:"currentColor",d:"m174.72 855.68 130.048-43.392 23.424 11.392C382.4 849.984 444.352 864 512 864c223.744 0 384-159.872 384-352 0-192.832-159.104-352-384-352S128 319.168 128 512a341.12 341.12 0 0 0 69.248 204.288l21.632 28.8-44.16 110.528zm-45.248 82.56A32 32 0 0 1 89.6 896l56.512-141.248A405.12 405.12 0 0 1 64 512C64 299.904 235.648 96 512 96s448 203.904 448 416-173.44 416-448 416c-79.68 0-150.848-17.152-211.712-46.72l-170.88 56.96z"},null,-1),jy=[Xy];function qy(n,e,t,r,i,s){return P(),R("svg",$y,jy)}var Yy=F(Wy,[["render",qy],["__file","chat-round.vue"]]),Qy={name:"ChatSquare"},Ky={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Zy=b("path",{fill:"currentColor",d:"M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"},null,-1),Jy=[Zy];function ew(n,e,t,r,i,s){return P(),R("svg",Ky,Jy)}var tw=F(Qy,[["render",ew],["__file","chat-square.vue"]]),nw={name:"Check"},rw={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},iw=b("path",{fill:"currentColor",d:"M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"},null,-1),sw=[iw];function ow(n,e,t,r,i,s){return P(),R("svg",rw,sw)}var aw=F(nw,[["render",ow],["__file","check.vue"]]),lw={name:"Checked"},cw={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},uw=b("path",{fill:"currentColor",d:"M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z"},null,-1),hw=[uw];function dw(n,e,t,r,i,s){return P(),R("svg",cw,hw)}var fw=F(lw,[["render",dw],["__file","checked.vue"]]),pw={name:"Cherry"},mw={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},_w=b("path",{fill:"currentColor",d:"M261.056 449.6c13.824-69.696 34.88-128.96 63.36-177.728 23.744-40.832 61.12-88.64 112.256-143.872H320a32 32 0 0 1 0-64h384a32 32 0 1 1 0 64H554.752c14.912 39.168 41.344 86.592 79.552 141.76 47.36 68.48 84.8 106.752 106.304 114.304a224 224 0 1 1-84.992 14.784c-22.656-22.912-47.04-53.76-73.92-92.608-38.848-56.128-67.008-105.792-84.352-149.312-55.296 58.24-94.528 107.52-117.76 147.2-23.168 39.744-41.088 88.768-53.568 147.072a224.064 224.064 0 1 1-64.96-1.6zM288 832a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm448-64a160 160 0 1 0 0-320 160 160 0 0 0 0 320z"},null,-1),gw=[_w];function vw(n,e,t,r,i,s){return P(),R("svg",mw,gw)}var xw=F(pw,[["render",vw],["__file","cherry.vue"]]),yw={name:"Chicken"},ww={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Mw=b("path",{fill:"currentColor",d:"M349.952 716.992 478.72 588.16a106.688 106.688 0 0 1-26.176-19.072 106.688 106.688 0 0 1-19.072-26.176L304.704 671.744c.768 3.072 1.472 6.144 2.048 9.216l2.048 31.936 31.872 1.984c3.136.64 6.208 1.28 9.28 2.112zm57.344 33.152a128 128 0 1 1-216.32 114.432l-1.92-32-32-1.92a128 128 0 1 1 114.432-216.32L416.64 469.248c-2.432-101.44 58.112-239.104 149.056-330.048 107.328-107.328 231.296-85.504 316.8 0 85.44 85.44 107.328 209.408 0 316.8-91.008 90.88-228.672 151.424-330.112 149.056L407.296 750.08zm90.496-226.304c49.536 49.536 233.344-7.04 339.392-113.088 78.208-78.208 63.232-163.072 0-226.304-63.168-63.232-148.032-78.208-226.24 0C504.896 290.496 448.32 474.368 497.792 523.84zM244.864 708.928a64 64 0 1 0-59.84 59.84l56.32-3.52 3.52-56.32zm8.064 127.68a64 64 0 1 0 59.84-59.84l-56.32 3.52-3.52 56.32z"},null,-1),bw=[Mw];function Sw(n,e,t,r,i,s){return P(),R("svg",ww,bw)}var Aw=F(yw,[["render",Sw],["__file","chicken.vue"]]),Tw={name:"ChromeFilled"},Ew={xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"enable-background":"new 0 0 1024 1024"},viewBox:"0 0 1024 1024"},Cw=b("path",{fill:"currentColor",d:"M938.67 512.01c0-44.59-6.82-87.6-19.54-128H682.67a212.372 212.372 0 0 1 42.67 128c.06 38.71-10.45 76.7-30.42 109.87l-182.91 316.8c235.65-.01 426.66-191.02 426.66-426.67z"},null,-1),Lw=b("path",{fill:"currentColor",d:"M576.79 401.63a127.92 127.92 0 0 0-63.56-17.6c-22.36-.22-44.39 5.43-63.89 16.38s-35.79 26.82-47.25 46.02a128.005 128.005 0 0 0-2.16 127.44l1.24 2.13a127.906 127.906 0 0 0 46.36 46.61 127.907 127.907 0 0 0 63.38 17.44c22.29.2 44.24-5.43 63.68-16.33a127.94 127.94 0 0 0 47.16-45.79v-.01l1.11-1.92a127.984 127.984 0 0 0 .29-127.46 127.957 127.957 0 0 0-46.36-46.91z"},null,-1),Pw=b("path",{fill:"currentColor",d:"M394.45 333.96A213.336 213.336 0 0 1 512 298.67h369.58A426.503 426.503 0 0 0 512 85.34a425.598 425.598 0 0 0-171.74 35.98 425.644 425.644 0 0 0-142.62 102.22l118.14 204.63a213.397 213.397 0 0 1 78.67-94.21zm117.56 604.72H512zm-97.25-236.73a213.284 213.284 0 0 1-89.54-86.81L142.48 298.6c-36.35 62.81-57.13 135.68-57.13 213.42 0 203.81 142.93 374.22 333.95 416.55h.04l118.19-204.71a213.315 213.315 0 0 1-122.77-21.91z"},null,-1),Rw=[Cw,Lw,Pw];function Fw(n,e,t,r,i,s){return P(),R("svg",Ew,Rw)}var zw=F(Tw,[["render",Fw],["__file","chrome-filled.vue"]]),Iw={name:"CircleCheckFilled"},Dw={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Nw=b("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"},null,-1),Ow=[Nw];function Bw(n,e,t,r,i,s){return P(),R("svg",Dw,Ow)}var Hw=F(Iw,[["render",Bw],["__file","circle-check-filled.vue"]]),Uw={name:"CircleCheck"},Vw={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},kw=b("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),Gw=b("path",{fill:"currentColor",d:"M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"},null,-1),Ww=[kw,Gw];function $w(n,e,t,r,i,s){return P(),R("svg",Vw,Ww)}var Xw=F(Uw,[["render",$w],["__file","circle-check.vue"]]),jw={name:"CircleCloseFilled"},qw={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Yw=b("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"},null,-1),Qw=[Yw];function Kw(n,e,t,r,i,s){return P(),R("svg",qw,Qw)}var Zw=F(jw,[["render",Kw],["__file","circle-close-filled.vue"]]),Jw={name:"CircleClose"},eM={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},tM=b("path",{fill:"currentColor",d:"m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"},null,-1),nM=b("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),rM=[tM,nM];function iM(n,e,t,r,i,s){return P(),R("svg",eM,rM)}var sM=F(Jw,[["render",iM],["__file","circle-close.vue"]]),oM={name:"CirclePlusFilled"},aM={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},lM=b("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z"},null,-1),cM=[lM];function uM(n,e,t,r,i,s){return P(),R("svg",aM,cM)}var hM=F(oM,[["render",uM],["__file","circle-plus-filled.vue"]]),dM={name:"CirclePlus"},fM={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},pM=b("path",{fill:"currentColor",d:"M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"},null,-1),mM=b("path",{fill:"currentColor",d:"M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0z"},null,-1),_M=b("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),gM=[pM,mM,_M];function vM(n,e,t,r,i,s){return P(),R("svg",fM,gM)}var xM=F(dM,[["render",vM],["__file","circle-plus.vue"]]),yM={name:"Clock"},wM={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},MM=b("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),bM=b("path",{fill:"currentColor",d:"M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"},null,-1),SM=b("path",{fill:"currentColor",d:"M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"},null,-1),AM=[MM,bM,SM];function TM(n,e,t,r,i,s){return P(),R("svg",wM,AM)}var EM=F(yM,[["render",TM],["__file","clock.vue"]]),CM={name:"CloseBold"},LM={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},PM=b("path",{fill:"currentColor",d:"M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"},null,-1),RM=[PM];function FM(n,e,t,r,i,s){return P(),R("svg",LM,RM)}var zM=F(CM,[["render",FM],["__file","close-bold.vue"]]),IM={name:"Close"},DM={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},NM=b("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"},null,-1),OM=[NM];function BM(n,e,t,r,i,s){return P(),R("svg",DM,OM)}var HM=F(IM,[["render",BM],["__file","close.vue"]]),UM={name:"Cloudy"},VM={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},kM=b("path",{fill:"currentColor",d:"M598.4 831.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 831.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 381.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"},null,-1),GM=[kM];function WM(n,e,t,r,i,s){return P(),R("svg",VM,GM)}var $M=F(UM,[["render",WM],["__file","cloudy.vue"]]),XM={name:"CoffeeCup"},jM={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},qM=b("path",{fill:"currentColor",d:"M768 192a192 192 0 1 1-8 383.808A256.128 256.128 0 0 1 512 768H320A256 256 0 0 1 64 512V160a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v32zm0 64v256a128 128 0 1 0 0-256zM96 832h640a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-640v320a192 192 0 0 0 192 192h192a192 192 0 0 0 192-192V192H128z"},null,-1),YM=[qM];function QM(n,e,t,r,i,s){return P(),R("svg",jM,YM)}var KM=F(XM,[["render",QM],["__file","coffee-cup.vue"]]),ZM={name:"Coffee"},JM={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},eb=b("path",{fill:"currentColor",d:"M822.592 192h14.272a32 32 0 0 1 31.616 26.752l21.312 128A32 32 0 0 1 858.24 384h-49.344l-39.04 546.304A32 32 0 0 1 737.92 960H285.824a32 32 0 0 1-32-29.696L214.912 384H165.76a32 32 0 0 1-31.552-37.248l21.312-128A32 32 0 0 1 187.136 192h14.016l-6.72-93.696A32 32 0 0 1 226.368 64h571.008a32 32 0 0 1 31.936 34.304L822.592 192zm-64.128 0 4.544-64H260.736l4.544 64h493.184zm-548.16 128H820.48l-10.688-64H214.208l-10.688 64h6.784zm68.736 64 36.544 512H708.16l36.544-512H279.04z"},null,-1),tb=[eb];function nb(n,e,t,r,i,s){return P(),R("svg",JM,tb)}var rb=F(ZM,[["render",nb],["__file","coffee.vue"]]),ib={name:"Coin"},sb={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},ob=b("path",{fill:"currentColor",d:"m161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z"},null,-1),ab=b("path",{fill:"currentColor",d:"m161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z"},null,-1),lb=b("path",{fill:"currentColor",d:"M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224zm0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160z"},null,-1),cb=[ob,ab,lb];function ub(n,e,t,r,i,s){return P(),R("svg",sb,cb)}var hb=F(ib,[["render",ub],["__file","coin.vue"]]),db={name:"ColdDrink"},fb={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},pb=b("path",{fill:"currentColor",d:"M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64zM656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928H299.008z"},null,-1),mb=[pb];function _b(n,e,t,r,i,s){return P(),R("svg",fb,mb)}var gb=F(db,[["render",_b],["__file","cold-drink.vue"]]),vb={name:"CollectionTag"},xb={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},yb=b("path",{fill:"currentColor",d:"M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128H256zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32z"},null,-1),wb=[yb];function Mb(n,e,t,r,i,s){return P(),R("svg",xb,wb)}var bb=F(vb,[["render",Mb],["__file","collection-tag.vue"]]),Sb={name:"Collection"},Ab={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Tb=b("path",{fill:"currentColor",d:"M192 736h640V128H256a64 64 0 0 0-64 64v544zm64-672h608a32 32 0 0 1 32 32v672a32 32 0 0 1-32 32H160l-32 57.536V192A128 128 0 0 1 256 64z"},null,-1),Eb=b("path",{fill:"currentColor",d:"M240 800a48 48 0 1 0 0 96h592v-96H240zm0-64h656v160a64 64 0 0 1-64 64H240a112 112 0 0 1 0-224zm144-608v250.88l96-76.8 96 76.8V128H384zm-64-64h320v381.44a32 32 0 0 1-51.968 24.96L480 384l-108.032 86.4A32 32 0 0 1 320 445.44V64z"},null,-1),Cb=[Tb,Eb];function Lb(n,e,t,r,i,s){return P(),R("svg",Ab,Cb)}var Pb=F(Sb,[["render",Lb],["__file","collection.vue"]]),Rb={name:"Comment"},Fb={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},zb=b("path",{fill:"currentColor",d:"M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zM128 128v640h192v160l224-160h352V128H128z"},null,-1),Ib=[zb];function Db(n,e,t,r,i,s){return P(),R("svg",Fb,Ib)}var Nb=F(Rb,[["render",Db],["__file","comment.vue"]]),Ob={name:"Compass"},Bb={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Hb=b("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),Ub=b("path",{fill:"currentColor",d:"M725.888 315.008C676.48 428.672 624 513.28 568.576 568.64c-55.424 55.424-139.968 107.904-253.568 157.312a12.8 12.8 0 0 1-16.896-16.832c49.536-113.728 102.016-198.272 157.312-253.632 55.36-55.296 139.904-107.776 253.632-157.312a12.8 12.8 0 0 1 16.832 16.832z"},null,-1),Vb=[Hb,Ub];function kb(n,e,t,r,i,s){return P(),R("svg",Bb,Vb)}var Gb=F(Ob,[["render",kb],["__file","compass.vue"]]),Wb={name:"Connection"},$b={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Xb=b("path",{fill:"currentColor",d:"M640 384v64H448a128 128 0 0 0-128 128v128a128 128 0 0 0 128 128h320a128 128 0 0 0 128-128V576a128 128 0 0 0-64-110.848V394.88c74.56 26.368 128 97.472 128 181.056v128a192 192 0 0 1-192 192H448a192 192 0 0 1-192-192V576a192 192 0 0 1 192-192h192z"},null,-1),jb=b("path",{fill:"currentColor",d:"M384 640v-64h192a128 128 0 0 0 128-128V320a128 128 0 0 0-128-128H256a128 128 0 0 0-128 128v128a128 128 0 0 0 64 110.848v70.272A192.064 192.064 0 0 1 64 448V320a192 192 0 0 1 192-192h320a192 192 0 0 1 192 192v128a192 192 0 0 1-192 192H384z"},null,-1),qb=[Xb,jb];function Yb(n,e,t,r,i,s){return P(),R("svg",$b,qb)}var Qb=F(Wb,[["render",Yb],["__file","connection.vue"]]),Kb={name:"Coordinate"},Zb={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Jb=b("path",{fill:"currentColor",d:"M480 512h64v320h-64z"},null,-1),eS=b("path",{fill:"currentColor",d:"M192 896h640a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64zm64-128h512a128 128 0 0 1 128 128v64H128v-64a128 128 0 0 1 128-128zm256-256a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"},null,-1),tS=[Jb,eS];function nS(n,e,t,r,i,s){return P(),R("svg",Zb,tS)}var rS=F(Kb,[["render",nS],["__file","coordinate.vue"]]),iS={name:"CopyDocument"},sS={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},oS=b("path",{fill:"currentColor",d:"M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"},null,-1),aS=b("path",{fill:"currentColor",d:"M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"},null,-1),lS=[oS,aS];function cS(n,e,t,r,i,s){return P(),R("svg",sS,lS)}var uS=F(iS,[["render",cS],["__file","copy-document.vue"]]),hS={name:"Cpu"},dS={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},fS=b("path",{fill:"currentColor",d:"M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"},null,-1),pS=b("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z"},null,-1),mS=[fS,pS];function _S(n,e,t,r,i,s){return P(),R("svg",dS,mS)}var gS=F(hS,[["render",_S],["__file","cpu.vue"]]),vS={name:"CreditCard"},xS={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},yS=b("path",{fill:"currentColor",d:"M896 324.096c0-42.368-2.496-55.296-9.536-68.48a52.352 52.352 0 0 0-22.144-22.08c-13.12-7.04-26.048-9.536-68.416-9.536H228.096c-42.368 0-55.296 2.496-68.48 9.536a52.352 52.352 0 0 0-22.08 22.144c-7.04 13.12-9.536 26.048-9.536 68.416v375.808c0 42.368 2.496 55.296 9.536 68.48a52.352 52.352 0 0 0 22.144 22.08c13.12 7.04 26.048 9.536 68.416 9.536h567.808c42.368 0 55.296-2.496 68.48-9.536a52.352 52.352 0 0 0 22.08-22.144c7.04-13.12 9.536-26.048 9.536-68.416V324.096zm64 0v375.808c0 57.088-5.952 77.76-17.088 98.56-11.136 20.928-27.52 37.312-48.384 48.448-20.864 11.136-41.6 17.088-98.56 17.088H228.032c-57.088 0-77.76-5.952-98.56-17.088a116.288 116.288 0 0 1-48.448-48.384c-11.136-20.864-17.088-41.6-17.088-98.56V324.032c0-57.088 5.952-77.76 17.088-98.56 11.136-20.928 27.52-37.312 48.384-48.448 20.864-11.136 41.6-17.088 98.56-17.088H795.84c57.088 0 77.76 5.952 98.56 17.088 20.928 11.136 37.312 27.52 48.448 48.384 11.136 20.864 17.088 41.6 17.088 98.56z"},null,-1),wS=b("path",{fill:"currentColor",d:"M64 320h896v64H64v-64zm0 128h896v64H64v-64zm128 192h256v64H192z"},null,-1),MS=[yS,wS];function bS(n,e,t,r,i,s){return P(),R("svg",xS,MS)}var SS=F(vS,[["render",bS],["__file","credit-card.vue"]]),AS={name:"Crop"},TS={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},ES=b("path",{fill:"currentColor",d:"M256 768h672a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0v672z"},null,-1),CS=b("path",{fill:"currentColor",d:"M832 224v704a32 32 0 1 1-64 0V256H96a32 32 0 0 1 0-64h704a32 32 0 0 1 32 32z"},null,-1),LS=[ES,CS];function PS(n,e,t,r,i,s){return P(),R("svg",TS,LS)}var RS=F(AS,[["render",PS],["__file","crop.vue"]]),FS={name:"DArrowLeft"},zS={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},IS=b("path",{fill:"currentColor",d:"M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"},null,-1),DS=[IS];function NS(n,e,t,r,i,s){return P(),R("svg",zS,DS)}var OS=F(FS,[["render",NS],["__file","d-arrow-left.vue"]]),BS={name:"DArrowRight"},HS={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},US=b("path",{fill:"currentColor",d:"M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"},null,-1),VS=[US];function kS(n,e,t,r,i,s){return P(),R("svg",HS,VS)}var GS=F(BS,[["render",kS],["__file","d-arrow-right.vue"]]),WS={name:"DCaret"},$S={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},XS=b("path",{fill:"currentColor",d:"m512 128 288 320H224l288-320zM224 576h576L512 896 224 576z"},null,-1),jS=[XS];function qS(n,e,t,r,i,s){return P(),R("svg",$S,jS)}var YS=F(WS,[["render",qS],["__file","d-caret.vue"]]),QS={name:"DataAnalysis"},KS={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},ZS=b("path",{fill:"currentColor",d:"m665.216 768 110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216zM832 192H192v512h640V192zM352 448a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0v-64a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v128a32 32 0 0 1-64 0V416a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V352a32 32 0 0 1 32-32z"},null,-1),JS=[ZS];function eA(n,e,t,r,i,s){return P(),R("svg",KS,JS)}var tA=F(QS,[["render",eA],["__file","data-analysis.vue"]]),nA={name:"DataBoard"},rA={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},iA=b("path",{fill:"currentColor",d:"M32 128h960v64H32z"},null,-1),sA=b("path",{fill:"currentColor",d:"M192 192v512h640V192H192zm-64-64h768v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V128z"},null,-1),oA=b("path",{fill:"currentColor",d:"M322.176 960H248.32l144.64-250.56 55.424 32L322.176 960zm453.888 0h-73.856L576 741.44l55.424-32L776.064 960z"},null,-1),aA=[iA,sA,oA];function lA(n,e,t,r,i,s){return P(),R("svg",rA,aA)}var cA=F(nA,[["render",lA],["__file","data-board.vue"]]),uA={name:"DataLine"},hA={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},dA=b("path",{fill:"currentColor",d:"M359.168 768H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216l110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192zM832 192H192v512h640V192zM342.656 534.656a32 32 0 1 1-45.312-45.312L444.992 341.76l125.44 94.08L679.04 300.032a32 32 0 1 1 49.92 39.936L581.632 524.224 451.008 426.24 342.656 534.592z"},null,-1),fA=[dA];function pA(n,e,t,r,i,s){return P(),R("svg",hA,fA)}var mA=F(uA,[["render",pA],["__file","data-line.vue"]]),_A={name:"DeleteFilled"},gA={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},vA=b("path",{fill:"currentColor",d:"M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"},null,-1),xA=[vA];function yA(n,e,t,r,i,s){return P(),R("svg",gA,xA)}var wA=F(_A,[["render",yA],["__file","delete-filled.vue"]]),MA={name:"DeleteLocation"},bA={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},SA=b("path",{fill:"currentColor",d:"M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"},null,-1),AA=b("path",{fill:"currentColor",d:"M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"},null,-1),TA=b("path",{fill:"currentColor",d:"M384 384h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"},null,-1),EA=[SA,AA,TA];function CA(n,e,t,r,i,s){return P(),R("svg",bA,EA)}var LA=F(MA,[["render",CA],["__file","delete-location.vue"]]),PA={name:"Delete"},RA={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},FA=b("path",{fill:"currentColor",d:"M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"},null,-1),zA=[FA];function IA(n,e,t,r,i,s){return P(),R("svg",RA,zA)}var DA=F(PA,[["render",IA],["__file","delete.vue"]]),NA={name:"Dessert"},OA={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},BA=b("path",{fill:"currentColor",d:"M128 416v-48a144 144 0 0 1 168.64-141.888 224.128 224.128 0 0 1 430.72 0A144 144 0 0 1 896 368v48a384 384 0 0 1-352 382.72V896h-64v-97.28A384 384 0 0 1 128 416zm287.104-32.064h193.792a143.808 143.808 0 0 1 58.88-132.736 160.064 160.064 0 0 0-311.552 0 143.808 143.808 0 0 1 58.88 132.8zm-72.896 0a72 72 0 1 0-140.48 0h140.48zm339.584 0h140.416a72 72 0 1 0-140.48 0zM512 736a320 320 0 0 0 318.4-288.064H193.6A320 320 0 0 0 512 736zM384 896.064h256a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64z"},null,-1),HA=[BA];function UA(n,e,t,r,i,s){return P(),R("svg",OA,HA)}var VA=F(NA,[["render",UA],["__file","dessert.vue"]]),kA={name:"Discount"},GA={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},WA=b("path",{fill:"currentColor",d:"M224 704h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336V704zm0 64v128h576V768H224zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"},null,-1),$A=b("path",{fill:"currentColor",d:"M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"},null,-1),XA=[WA,$A];function jA(n,e,t,r,i,s){return P(),R("svg",GA,XA)}var qA=F(kA,[["render",jA],["__file","discount.vue"]]),YA={name:"DishDot"},QA={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},KA=b("path",{fill:"currentColor",d:"m384.064 274.56.064-50.688A128 128 0 0 1 512.128 96c70.528 0 127.68 57.152 127.68 127.68v50.752A448.192 448.192 0 0 1 955.392 768H68.544A448.192 448.192 0 0 1 384 274.56zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-128h768a384 384 0 1 0-768 0zm447.808-448v-32.32a63.68 63.68 0 0 0-63.68-63.68 64 64 0 0 0-64 63.936V256h127.68z"},null,-1),ZA=[KA];function JA(n,e,t,r,i,s){return P(),R("svg",QA,ZA)}var eT=F(YA,[["render",JA],["__file","dish-dot.vue"]]),tT={name:"Dish"},nT={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},rT=b("path",{fill:"currentColor",d:"M480 257.152V192h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96v65.152A448 448 0 0 1 955.52 768H68.48A448 448 0 0 1 480 257.152zM128 704h768a384 384 0 1 0-768 0zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64z"},null,-1),iT=[rT];function sT(n,e,t,r,i,s){return P(),R("svg",nT,iT)}var oT=F(tT,[["render",sT],["__file","dish.vue"]]),aT={name:"DocumentAdd"},lT={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},cT=b("path",{fill:"currentColor",d:"M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm320 512V448h64v128h128v64H544v128h-64V640H352v-64h128z"},null,-1),uT=[cT];function hT(n,e,t,r,i,s){return P(),R("svg",lT,uT)}var dT=F(aT,[["render",hT],["__file","document-add.vue"]]),fT={name:"DocumentChecked"},pT={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},mT=b("path",{fill:"currentColor",d:"M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm318.4 582.144 180.992-180.992L704.64 510.4 478.4 736.64 320 578.304l45.248-45.312L478.4 646.144z"},null,-1),_T=[mT];function gT(n,e,t,r,i,s){return P(),R("svg",pT,_T)}var vT=F(fT,[["render",gT],["__file","document-checked.vue"]]),xT={name:"DocumentCopy"},yT={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},wT=b("path",{fill:"currentColor",d:"M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"},null,-1),MT=[wT];function bT(n,e,t,r,i,s){return P(),R("svg",yT,MT)}var ST=F(xT,[["render",bT],["__file","document-copy.vue"]]),AT={name:"DocumentDelete"},TT={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},ET=b("path",{fill:"currentColor",d:"M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm308.992 546.304-90.496-90.624 45.248-45.248 90.56 90.496 90.496-90.432 45.248 45.248-90.496 90.56 90.496 90.496-45.248 45.248-90.496-90.496-90.56 90.496-45.248-45.248 90.496-90.496z"},null,-1),CT=[ET];function LT(n,e,t,r,i,s){return P(),R("svg",TT,CT)}var PT=F(AT,[["render",LT],["__file","document-delete.vue"]]),RT={name:"DocumentRemove"},FT={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},zT=b("path",{fill:"currentColor",d:"M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm192 512h320v64H352v-64z"},null,-1),IT=[zT];function DT(n,e,t,r,i,s){return P(),R("svg",FT,IT)}var NT=F(RT,[["render",DT],["__file","document-remove.vue"]]),OT={name:"Document"},BT={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},HT=b("path",{fill:"currentColor",d:"M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"},null,-1),UT=[HT];function VT(n,e,t,r,i,s){return P(),R("svg",BT,UT)}var kT=F(OT,[["render",VT],["__file","document.vue"]]),GT={name:"Download"},WT={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},$T=b("path",{fill:"currentColor",d:"M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z"},null,-1),XT=[$T];function jT(n,e,t,r,i,s){return P(),R("svg",WT,XT)}var qT=F(GT,[["render",jT],["__file","download.vue"]]),YT={name:"Drizzling"},QT={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},KT=b("path",{fill:"currentColor",d:"m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM288 800h64v64h-64v-64zm192 0h64v64h-64v-64zm-96 96h64v64h-64v-64zm192 0h64v64h-64v-64zm96-96h64v64h-64v-64z"},null,-1),ZT=[KT];function JT(n,e,t,r,i,s){return P(),R("svg",QT,ZT)}var eE=F(YT,[["render",JT],["__file","drizzling.vue"]]),tE={name:"EditPen"},nE={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},rE=b("path",{fill:"currentColor",d:"m199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696L175.168 732.8zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336L104.32 708.8zm384 254.272v-64h448v64h-448z"},null,-1),iE=[rE];function sE(n,e,t,r,i,s){return P(),R("svg",nE,iE)}var oE=F(tE,[["render",sE],["__file","edit-pen.vue"]]),aE={name:"Edit"},lE={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},cE=b("path",{fill:"currentColor",d:"M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"},null,-1),uE=b("path",{fill:"currentColor",d:"m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"},null,-1),hE=[cE,uE];function dE(n,e,t,r,i,s){return P(),R("svg",lE,hE)}var fE=F(aE,[["render",dE],["__file","edit.vue"]]),pE={name:"ElemeFilled"},mE={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},_E=b("path",{fill:"currentColor",d:"M176 64h672c61.824 0 112 50.176 112 112v672a112 112 0 0 1-112 112H176A112 112 0 0 1 64 848V176c0-61.824 50.176-112 112-112zm150.528 173.568c-152.896 99.968-196.544 304.064-97.408 456.96a330.688 330.688 0 0 0 456.96 96.64c9.216-5.888 17.6-11.776 25.152-18.56a18.24 18.24 0 0 0 4.224-24.32L700.352 724.8a47.552 47.552 0 0 0-65.536-14.272A234.56 234.56 0 0 1 310.592 641.6C240 533.248 271.104 387.968 379.456 316.48a234.304 234.304 0 0 1 276.352 15.168c1.664.832 2.56 2.56 3.392 4.224 5.888 8.384 3.328 19.328-5.12 25.216L456.832 489.6a47.552 47.552 0 0 0-14.336 65.472l16 24.384c5.888 8.384 16.768 10.88 25.216 5.056l308.224-199.936a19.584 19.584 0 0 0 6.72-23.488v-.896c-4.992-9.216-10.048-17.6-15.104-26.88-99.968-151.168-304.064-194.88-456.96-95.744zM786.88 504.704l-62.208 40.32c-8.32 5.888-10.88 16.768-4.992 25.216L760 632.32c5.888 8.448 16.768 11.008 25.152 5.12l31.104-20.16a55.36 55.36 0 0 0 16-76.48l-20.224-31.04a19.52 19.52 0 0 0-25.152-5.12z"},null,-1),gE=[_E];function vE(n,e,t,r,i,s){return P(),R("svg",mE,gE)}var xE=F(pE,[["render",vE],["__file","eleme-filled.vue"]]),yE={name:"Eleme"},wE={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},ME=b("path",{fill:"currentColor",d:"M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z"},null,-1),bE=[ME];function SE(n,e,t,r,i,s){return P(),R("svg",wE,bE)}var AE=F(yE,[["render",SE],["__file","eleme.vue"]]),TE={name:"ElementPlus"},EE={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},CE=b("path",{fill:"currentColor",d:"M839.7 734.7c0 33.3-17.9 41-17.9 41S519.7 949.8 499.2 960c-10.2 5.1-20.5 5.1-30.7 0 0 0-314.9-184.3-325.1-192-5.1-5.1-10.2-12.8-12.8-20.5V368.6c0-17.9 20.5-28.2 20.5-28.2L466 158.6c12.8-5.1 25.6-5.1 38.4 0 0 0 279 161.3 309.8 179.2 17.9 7.7 28.2 25.6 25.6 46.1-.1-5-.1 317.5-.1 350.8zM714.2 371.2c-64-35.8-217.6-125.4-217.6-125.4-7.7-5.1-20.5-5.1-30.7 0L217.6 389.1s-17.9 10.2-17.9 23v297c0 5.1 5.1 12.8 7.7 17.9 7.7 5.1 256 148.5 256 148.5 7.7 5.1 17.9 5.1 25.6 0 15.4-7.7 250.9-145.9 250.9-145.9s12.8-5.1 12.8-30.7v-74.2l-276.5 169v-64c0-17.9 7.7-30.7 20.5-46.1L745 535c5.1-7.7 10.2-20.5 10.2-30.7v-66.6l-279 169v-69.1c0-15.4 5.1-30.7 17.9-38.4l220.1-128zM919 135.7c0-5.1-5.1-7.7-7.7-7.7h-58.9V66.6c0-5.1-5.1-5.1-10.2-5.1l-30.7 5.1c-5.1 0-5.1 2.6-5.1 5.1V128h-56.3c-5.1 0-5.1 5.1-7.7 5.1v38.4h69.1v64c0 5.1 5.1 5.1 10.2 5.1l30.7-5.1c5.1 0 5.1-2.6 5.1-5.1v-56.3h64l-2.5-38.4z"},null,-1),LE=[CE];function PE(n,e,t,r,i,s){return P(),R("svg",EE,LE)}var RE=F(TE,[["render",PE],["__file","element-plus.vue"]]),FE={name:"Expand"},zE={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},IE=b("path",{fill:"currentColor",d:"M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"},null,-1),DE=[IE];function NE(n,e,t,r,i,s){return P(),R("svg",zE,DE)}var OE=F(FE,[["render",NE],["__file","expand.vue"]]),BE={name:"Failed"},HE={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},UE=b("path",{fill:"currentColor",d:"m557.248 608 135.744-135.744-45.248-45.248-135.68 135.744-135.808-135.68-45.248 45.184L466.752 608l-135.68 135.68 45.184 45.312L512 653.248l135.744 135.744 45.248-45.248L557.312 608zM704 192h160v736H160V192h160v64h384v-64zm-320 0V96h256v96H384z"},null,-1),VE=[UE];function kE(n,e,t,r,i,s){return P(),R("svg",HE,VE)}var GE=F(BE,[["render",kE],["__file","failed.vue"]]),WE={name:"Female"},$E={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},XE=b("path",{fill:"currentColor",d:"M512 640a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"},null,-1),jE=b("path",{fill:"currentColor",d:"M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32z"},null,-1),qE=b("path",{fill:"currentColor",d:"M352 800h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"},null,-1),YE=[XE,jE,qE];function QE(n,e,t,r,i,s){return P(),R("svg",$E,YE)}var KE=F(WE,[["render",QE],["__file","female.vue"]]),ZE={name:"Files"},JE={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},eC=b("path",{fill:"currentColor",d:"M128 384v448h768V384H128zm-32-64h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32zm64-128h704v64H160zm96-128h512v64H256z"},null,-1),tC=[eC];function nC(n,e,t,r,i,s){return P(),R("svg",JE,tC)}var rC=F(ZE,[["render",nC],["__file","files.vue"]]),iC={name:"Film"},sC={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},oC=b("path",{fill:"currentColor",d:"M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"},null,-1),aC=b("path",{fill:"currentColor",d:"M320 288V128h64v352h256V128h64v160h160v64H704v128h160v64H704v128h160v64H704v160h-64V544H384v352h-64V736H128v-64h192V544H128v-64h192V352H128v-64h192z"},null,-1),lC=[oC,aC];function cC(n,e,t,r,i,s){return P(),R("svg",sC,lC)}var uC=F(iC,[["render",cC],["__file","film.vue"]]),hC={name:"Filter"},dC={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},fC=b("path",{fill:"currentColor",d:"M384 523.392V928a32 32 0 0 0 46.336 28.608l192-96A32 32 0 0 0 640 832V523.392l280.768-343.104a32 32 0 1 0-49.536-40.576l-288 352A32 32 0 0 0 576 512v300.224l-128 64V512a32 32 0 0 0-7.232-20.288L195.52 192H704a32 32 0 1 0 0-64H128a32 32 0 0 0-24.768 52.288L384 523.392z"},null,-1),pC=[fC];function mC(n,e,t,r,i,s){return P(),R("svg",dC,pC)}var _C=F(hC,[["render",mC],["__file","filter.vue"]]),gC={name:"Finished"},vC={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},xC=b("path",{fill:"currentColor",d:"M280.768 753.728 691.456 167.04a32 32 0 1 1 52.416 36.672L314.24 817.472a32 32 0 0 1-45.44 7.296l-230.4-172.8a32 32 0 0 1 38.4-51.2l203.968 152.96zM736 448a32 32 0 1 1 0-64h192a32 32 0 1 1 0 64H736zM608 640a32 32 0 0 1 0-64h319.936a32 32 0 1 1 0 64H608zM480 832a32 32 0 1 1 0-64h447.936a32 32 0 1 1 0 64H480z"},null,-1),yC=[xC];function wC(n,e,t,r,i,s){return P(),R("svg",vC,yC)}var MC=F(gC,[["render",wC],["__file","finished.vue"]]),bC={name:"FirstAidKit"},SC={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},AC=b("path",{fill:"currentColor",d:"M192 256a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H192zm0-64h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"},null,-1),TC=b("path",{fill:"currentColor",d:"M544 512h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96zM352 128v64h320v-64H352zm-32-64h384a32 32 0 0 1 32 32v128a32 32 0 0 1-32 32H320a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"},null,-1),EC=[AC,TC];function CC(n,e,t,r,i,s){return P(),R("svg",SC,EC)}var LC=F(bC,[["render",CC],["__file","first-aid-kit.vue"]]),PC={name:"Flag"},RC={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},FC=b("path",{fill:"currentColor",d:"M288 128h608L736 384l160 256H288v320h-96V64h96v64z"},null,-1),zC=[FC];function IC(n,e,t,r,i,s){return P(),R("svg",RC,zC)}var DC=F(PC,[["render",IC],["__file","flag.vue"]]),NC={name:"Fold"},OC={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},BC=b("path",{fill:"currentColor",d:"M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z"},null,-1),HC=[BC];function UC(n,e,t,r,i,s){return P(),R("svg",OC,HC)}var VC=F(NC,[["render",UC],["__file","fold.vue"]]),kC={name:"FolderAdd"},GC={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},WC=b("path",{fill:"currentColor",d:"M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm384 416V416h64v128h128v64H544v128h-64V608H352v-64h128z"},null,-1),$C=[WC];function XC(n,e,t,r,i,s){return P(),R("svg",GC,$C)}var jC=F(kC,[["render",XC],["__file","folder-add.vue"]]),qC={name:"FolderChecked"},YC={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},QC=b("path",{fill:"currentColor",d:"M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm414.08 502.144 180.992-180.992L736.32 494.4 510.08 720.64l-158.4-158.336 45.248-45.312L510.08 630.144z"},null,-1),KC=[QC];function ZC(n,e,t,r,i,s){return P(),R("svg",YC,KC)}var JC=F(qC,[["render",ZC],["__file","folder-checked.vue"]]),eL={name:"FolderDelete"},tL={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},nL=b("path",{fill:"currentColor",d:"M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm370.752 448-90.496-90.496 45.248-45.248L512 530.752l90.496-90.496 45.248 45.248L557.248 576l90.496 90.496-45.248 45.248L512 621.248l-90.496 90.496-45.248-45.248L466.752 576z"},null,-1),rL=[nL];function iL(n,e,t,r,i,s){return P(),R("svg",tL,rL)}var sL=F(eL,[["render",iL],["__file","folder-delete.vue"]]),oL={name:"FolderOpened"},aL={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},lL=b("path",{fill:"currentColor",d:"M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384H832zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896z"},null,-1),cL=[lL];function uL(n,e,t,r,i,s){return P(),R("svg",aL,cL)}var hL=F(oL,[["render",uL],["__file","folder-opened.vue"]]),dL={name:"FolderRemove"},fL={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},pL=b("path",{fill:"currentColor",d:"M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm256 416h320v64H352v-64z"},null,-1),mL=[pL];function _L(n,e,t,r,i,s){return P(),R("svg",fL,mL)}var gL=F(dL,[["render",_L],["__file","folder-remove.vue"]]),vL={name:"Folder"},xL={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},yL=b("path",{fill:"currentColor",d:"M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z"},null,-1),wL=[yL];function ML(n,e,t,r,i,s){return P(),R("svg",xL,wL)}var bL=F(vL,[["render",ML],["__file","folder.vue"]]),SL={name:"Food"},AL={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},TL=b("path",{fill:"currentColor",d:"M128 352.576V352a288 288 0 0 1 491.072-204.224 192 192 0 0 1 274.24 204.48 64 64 0 0 1 57.216 74.24C921.6 600.512 850.048 710.656 736 756.992V800a96 96 0 0 1-96 96H384a96 96 0 0 1-96-96v-43.008c-114.048-46.336-185.6-156.48-214.528-330.496A64 64 0 0 1 128 352.64zm64-.576h64a160 160 0 0 1 320 0h64a224 224 0 0 0-448 0zm128 0h192a96 96 0 0 0-192 0zm439.424 0h68.544A128.256 128.256 0 0 0 704 192c-15.36 0-29.952 2.688-43.52 7.616 11.328 18.176 20.672 37.76 27.84 58.304A64.128 64.128 0 0 1 759.424 352zM672 768H352v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32zm-342.528-64h365.056c101.504-32.64 165.76-124.928 192.896-288H136.576c27.136 163.072 91.392 255.36 192.896 288z"},null,-1),EL=[TL];function CL(n,e,t,r,i,s){return P(),R("svg",AL,EL)}var LL=F(SL,[["render",CL],["__file","food.vue"]]),PL={name:"Football"},RL={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},FL=b("path",{fill:"currentColor",d:"M512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-64a384 384 0 1 0 0-768 384 384 0 0 0 0 768z"},null,-1),zL=b("path",{fill:"currentColor",d:"M186.816 268.288c16-16.384 31.616-31.744 46.976-46.08 17.472 30.656 39.808 58.112 65.984 81.28l-32.512 56.448a385.984 385.984 0 0 1-80.448-91.648zm653.696-5.312a385.92 385.92 0 0 1-83.776 96.96l-32.512-56.384a322.923 322.923 0 0 0 68.48-85.76c15.552 14.08 31.488 29.12 47.808 45.184zM465.984 445.248l11.136-63.104a323.584 323.584 0 0 0 69.76 0l11.136 63.104a387.968 387.968 0 0 1-92.032 0zm-62.72-12.8A381.824 381.824 0 0 1 320 396.544l32-55.424a319.885 319.885 0 0 0 62.464 27.712l-11.2 63.488zm300.8-35.84a381.824 381.824 0 0 1-83.328 35.84l-11.2-63.552A319.885 319.885 0 0 0 672 341.184l32 55.424zm-520.768 364.8a385.92 385.92 0 0 1 83.968-97.28l32.512 56.32c-26.88 23.936-49.856 52.352-67.52 84.032-16-13.44-32.32-27.712-48.96-43.072zm657.536.128a1442.759 1442.759 0 0 1-49.024 43.072 321.408 321.408 0 0 0-67.584-84.16l32.512-56.32c33.216 27.456 61.696 60.352 84.096 97.408zM465.92 578.752a387.968 387.968 0 0 1 92.032 0l-11.136 63.104a323.584 323.584 0 0 0-69.76 0l-11.136-63.104zm-62.72 12.8 11.2 63.552a319.885 319.885 0 0 0-62.464 27.712L320 627.392a381.824 381.824 0 0 1 83.264-35.84zm300.8 35.84-32 55.424a318.272 318.272 0 0 0-62.528-27.712l11.2-63.488c29.44 8.64 57.28 20.736 83.264 35.776z"},null,-1),IL=[FL,zL];function DL(n,e,t,r,i,s){return P(),R("svg",RL,IL)}var NL=F(PL,[["render",DL],["__file","football.vue"]]),OL={name:"ForkSpoon"},BL={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},HL=b("path",{fill:"currentColor",d:"M256 410.304V96a32 32 0 0 1 64 0v314.304a96 96 0 0 0 64-90.56V96a32 32 0 0 1 64 0v223.744a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.544a160 160 0 0 1-128-156.8V96a32 32 0 0 1 64 0v223.744a96 96 0 0 0 64 90.56zM672 572.48C581.184 552.128 512 446.848 512 320c0-141.44 85.952-256 192-256s192 114.56 192 256c0 126.848-69.184 232.128-160 252.48V928a32 32 0 1 1-64 0V572.48zM704 512c66.048 0 128-82.56 128-192s-61.952-192-128-192-128 82.56-128 192 61.952 192 128 192z"},null,-1),UL=[HL];function VL(n,e,t,r,i,s){return P(),R("svg",BL,UL)}var kL=F(OL,[["render",VL],["__file","fork-spoon.vue"]]),GL={name:"Fries"},WL={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},$L=b("path",{fill:"currentColor",d:"M608 224v-64a32 32 0 0 0-64 0v336h26.88A64 64 0 0 0 608 484.096V224zm101.12 160A64 64 0 0 0 672 395.904V384h64V224a32 32 0 1 0-64 0v160h37.12zm74.88 0a92.928 92.928 0 0 1 91.328 110.08l-60.672 323.584A96 96 0 0 1 720.32 896H303.68a96 96 0 0 1-94.336-78.336L148.672 494.08A92.928 92.928 0 0 1 240 384h-16V224a96 96 0 0 1 188.608-25.28A95.744 95.744 0 0 1 480 197.44V160a96 96 0 0 1 188.608-25.28A96 96 0 0 1 800 224v160h-16zM670.784 512a128 128 0 0 1-99.904 48H453.12a128 128 0 0 1-99.84-48H352v-1.536a128.128 128.128 0 0 1-9.984-14.976L314.88 448H240a28.928 28.928 0 0 0-28.48 34.304L241.088 640h541.824l29.568-157.696A28.928 28.928 0 0 0 784 448h-74.88l-27.136 47.488A132.405 132.405 0 0 1 672 510.464V512h-1.216zM480 288a32 32 0 0 0-64 0v196.096A64 64 0 0 0 453.12 496H480V288zm-128 96V224a32 32 0 0 0-64 0v160h64-37.12A64 64 0 0 1 352 395.904zm-98.88 320 19.072 101.888A32 32 0 0 0 303.68 832h416.64a32 32 0 0 0 31.488-26.112L770.88 704H253.12z"},null,-1),XL=[$L];function jL(n,e,t,r,i,s){return P(),R("svg",WL,XL)}var qL=F(GL,[["render",jL],["__file","fries.vue"]]),YL={name:"FullScreen"},QL={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},KL=b("path",{fill:"currentColor",d:"m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"},null,-1),ZL=[KL];function JL(n,e,t,r,i,s){return P(),R("svg",QL,ZL)}var eP=F(YL,[["render",JL],["__file","full-screen.vue"]]),tP={name:"GobletFull"},nP={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},rP=b("path",{fill:"currentColor",d:"M256 320h512c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320zm503.936 64H264.064a256.128 256.128 0 0 0 495.872 0zM544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4z"},null,-1),iP=[rP];function sP(n,e,t,r,i,s){return P(),R("svg",nP,iP)}var oP=F(tP,[["render",sP],["__file","goblet-full.vue"]]),aP={name:"GobletSquareFull"},lP={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},cP=b("path",{fill:"currentColor",d:"M256 270.912c10.048 6.72 22.464 14.912 28.992 18.624a220.16 220.16 0 0 0 114.752 30.72c30.592 0 49.408-9.472 91.072-41.152l.64-.448c52.928-40.32 82.368-55.04 132.288-54.656 55.552.448 99.584 20.8 142.72 57.408l1.536 1.28V128H256v142.912zm.96 76.288C266.368 482.176 346.88 575.872 512 576c157.44.064 237.952-85.056 253.248-209.984a952.32 952.32 0 0 1-40.192-35.712c-32.704-27.776-63.36-41.92-101.888-42.24-31.552-.256-50.624 9.28-93.12 41.6l-.576.448c-52.096 39.616-81.024 54.208-129.792 54.208-54.784 0-100.48-13.376-142.784-37.056zM480 638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848z"},null,-1),uP=[cP];function hP(n,e,t,r,i,s){return P(),R("svg",lP,uP)}var dP=F(aP,[["render",hP],["__file","goblet-square-full.vue"]]),fP={name:"GobletSquare"},pP={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},mP=b("path",{fill:"currentColor",d:"M544 638.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912zM256 319.68c0 149.568 80 256.192 256 256.256C688.128 576 768 469.568 768 320V128H256v191.68z"},null,-1),_P=[mP];function gP(n,e,t,r,i,s){return P(),R("svg",pP,_P)}var vP=F(fP,[["render",gP],["__file","goblet-square.vue"]]),xP={name:"Goblet"},yP={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},wP=b("path",{fill:"currentColor",d:"M544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4zM256 320a256 256 0 1 0 512 0c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320z"},null,-1),MP=[wP];function bP(n,e,t,r,i,s){return P(),R("svg",yP,MP)}var SP=F(xP,[["render",bP],["__file","goblet.vue"]]),AP={name:"GoldMedal"},TP={xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"enable-background":"new 0 0 1024 1024"},viewBox:"0 0 1024 1024"},EP=b("path",{fill:"currentColor",d:"m772.13 452.84 53.86-351.81c1.32-10.01-1.17-18.68-7.49-26.02S804.35 64 795.01 64H228.99v-.01h-.06c-9.33 0-17.15 3.67-23.49 11.01s-8.83 16.01-7.49 26.02l53.87 351.89C213.54 505.73 193.59 568.09 192 640c2 90.67 33.17 166.17 93.5 226.5S421.33 957.99 512 960c90.67-2 166.17-33.17 226.5-93.5 60.33-60.34 91.49-135.83 93.5-226.5-1.59-71.94-21.56-134.32-59.87-187.16zM640.01 128h117.02l-39.01 254.02c-20.75-10.64-40.74-19.73-59.94-27.28-5.92-3-11.95-5.8-18.08-8.41V128h.01zM576 128v198.76c-13.18-2.58-26.74-4.43-40.67-5.55-8.07-.8-15.85-1.2-23.33-1.2-10.54 0-21.09.66-31.64 1.96a359.844 359.844 0 0 0-32.36 4.79V128h128zm-192 0h.04v218.3c-6.22 2.66-12.34 5.5-18.36 8.56-19.13 7.54-39.02 16.6-59.66 27.16L267.01 128H384zm308.99 692.99c-48 48-108.33 73-180.99 75.01-72.66-2.01-132.99-27.01-180.99-75.01S258.01 712.66 256 640c2.01-72.66 27.01-132.99 75.01-180.99 19.67-19.67 41.41-35.47 65.22-47.41 38.33-15.04 71.15-23.92 98.44-26.65 5.07-.41 10.2-.7 15.39-.88.63-.01 1.28-.03 1.91-.03.66 0 1.35.03 2.02.04 5.11.17 10.15.46 15.13.86 27.4 2.71 60.37 11.65 98.91 26.79 23.71 11.93 45.36 27.69 64.96 47.29 48 48 73 108.33 75.01 180.99-2.01 72.65-27.01 132.98-75.01 180.98z"},null,-1),CP=b("path",{fill:"currentColor",d:"M544 480H416v64h64v192h-64v64h192v-64h-64z"},null,-1),LP=[EP,CP];function PP(n,e,t,r,i,s){return P(),R("svg",TP,LP)}var RP=F(AP,[["render",PP],["__file","gold-medal.vue"]]),FP={name:"GoodsFilled"},zP={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},IP=b("path",{fill:"currentColor",d:"M192 352h640l64 544H128l64-544zm128 224h64V448h-64v128zm320 0h64V448h-64v128zM384 288h-64a192 192 0 1 1 384 0h-64a128 128 0 1 0-256 0z"},null,-1),DP=[IP];function NP(n,e,t,r,i,s){return P(),R("svg",zP,DP)}var OP=F(FP,[["render",NP],["__file","goods-filled.vue"]]),BP={name:"Goods"},HP={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},UP=b("path",{fill:"currentColor",d:"M320 288v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4h131.072a32 32 0 0 1 31.808 28.8l57.6 576a32 32 0 0 1-31.808 35.2H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320zm64 0h256v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4zm-64 64H217.92l-51.2 512h690.56l-51.264-512H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96z"},null,-1),VP=[UP];function kP(n,e,t,r,i,s){return P(),R("svg",HP,VP)}var GP=F(BP,[["render",kP],["__file","goods.vue"]]),WP={name:"Grape"},$P={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},XP=b("path",{fill:"currentColor",d:"M544 195.2a160 160 0 0 1 96 60.8 160 160 0 1 1 146.24 254.976 160 160 0 0 1-128 224 160 160 0 1 1-292.48 0 160 160 0 0 1-128-224A160 160 0 1 1 384 256a160 160 0 0 1 96-60.8V128h-64a32 32 0 0 1 0-64h192a32 32 0 0 1 0 64h-64v67.2zM512 448a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm-256 0a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"},null,-1),jP=[XP];function qP(n,e,t,r,i,s){return P(),R("svg",$P,jP)}var YP=F(WP,[["render",qP],["__file","grape.vue"]]),QP={name:"Grid"},KP={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},ZP=b("path",{fill:"currentColor",d:"M640 384v256H384V384h256zm64 0h192v256H704V384zm-64 512H384V704h256v192zm64 0V704h192v192H704zm-64-768v192H384V128h256zm64 0h192v192H704V128zM320 384v256H128V384h192zm0 512H128V704h192v192zm0-768v192H128V128h192z"},null,-1),JP=[ZP];function eR(n,e,t,r,i,s){return P(),R("svg",KP,JP)}var tR=F(QP,[["render",eR],["__file","grid.vue"]]),nR={name:"Guide"},rR={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},iR=b("path",{fill:"currentColor",d:"M640 608h-64V416h64v192zm0 160v160a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V768h64v128h128V768h64zM384 608V416h64v192h-64zm256-352h-64V128H448v128h-64V96a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v160z"},null,-1),sR=b("path",{fill:"currentColor",d:"m220.8 256-71.232 80 71.168 80H768V256H220.8zm-14.4-64H800a32 32 0 0 1 32 32v224a32 32 0 0 1-32 32H206.4a32 32 0 0 1-23.936-10.752l-99.584-112a32 32 0 0 1 0-42.496l99.584-112A32 32 0 0 1 206.4 192zm678.784 496-71.104 80H266.816V608h547.2l71.168 80zm-56.768-144H234.88a32 32 0 0 0-32 32v224a32 32 0 0 0 32 32h593.6a32 32 0 0 0 23.936-10.752l99.584-112a32 32 0 0 0 0-42.496l-99.584-112A32 32 0 0 0 828.48 544z"},null,-1),oR=[iR,sR];function aR(n,e,t,r,i,s){return P(),R("svg",rR,oR)}var lR=F(nR,[["render",aR],["__file","guide.vue"]]),cR={name:"Handbag"},uR={xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"enable-background":"new 0 0 1024 1024"},viewBox:"0 0 1024 1024"},hR=b("path",{fill:"currentColor",d:"M887.01 264.99c-6-5.99-13.67-8.99-23.01-8.99H704c-1.34-54.68-20.01-100.01-56-136s-81.32-54.66-136-56c-54.68 1.34-100.01 20.01-136 56s-54.66 81.32-56 136H160c-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.67-8.99 23.01v640c0 9.35 2.99 17.02 8.99 23.01S150.66 960 160 960h704c9.35 0 17.02-2.99 23.01-8.99S896 937.34 896 928V288c0-9.35-2.99-17.02-8.99-23.01zM421.5 165.5c24.32-24.34 54.49-36.84 90.5-37.5 35.99.68 66.16 13.18 90.5 37.5s36.84 54.49 37.5 90.5H384c.68-35.99 13.18-66.16 37.5-90.5zM832 896H192V320h128v128h64V320h256v128h64V320h128v576z"},null,-1),dR=[hR];function fR(n,e,t,r,i,s){return P(),R("svg",uR,dR)}var pR=F(cR,[["render",fR],["__file","handbag.vue"]]),mR={name:"Headset"},_R={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},gR=b("path",{fill:"currentColor",d:"M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z"},null,-1),vR=[gR];function xR(n,e,t,r,i,s){return P(),R("svg",_R,vR)}var yR=F(mR,[["render",xR],["__file","headset.vue"]]),wR={name:"HelpFilled"},MR={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},bR=b("path",{fill:"currentColor",d:"M926.784 480H701.312A192.512 192.512 0 0 0 544 322.688V97.216A416.064 416.064 0 0 1 926.784 480zm0 64A416.064 416.064 0 0 1 544 926.784V701.312A192.512 192.512 0 0 0 701.312 544h225.472zM97.28 544h225.472A192.512 192.512 0 0 0 480 701.312v225.472A416.064 416.064 0 0 1 97.216 544zm0-64A416.064 416.064 0 0 1 480 97.216v225.472A192.512 192.512 0 0 0 322.688 480H97.216z"},null,-1),SR=[bR];function AR(n,e,t,r,i,s){return P(),R("svg",MR,SR)}var TR=F(wR,[["render",AR],["__file","help-filled.vue"]]),ER={name:"Help"},CR={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},LR=b("path",{fill:"currentColor",d:"m759.936 805.248-90.944-91.008A254.912 254.912 0 0 1 512 768a254.912 254.912 0 0 1-156.992-53.76l-90.944 91.008A382.464 382.464 0 0 0 512 896c94.528 0 181.12-34.176 247.936-90.752zm45.312-45.312A382.464 382.464 0 0 0 896 512c0-94.528-34.176-181.12-90.752-247.936l-91.008 90.944C747.904 398.4 768 452.864 768 512c0 59.136-20.096 113.6-53.76 156.992l91.008 90.944zm-45.312-541.184A382.464 382.464 0 0 0 512 128c-94.528 0-181.12 34.176-247.936 90.752l90.944 91.008A254.912 254.912 0 0 1 512 256c59.136 0 113.6 20.096 156.992 53.76l90.944-91.008zm-541.184 45.312A382.464 382.464 0 0 0 128 512c0 94.528 34.176 181.12 90.752 247.936l91.008-90.944A254.912 254.912 0 0 1 256 512c0-59.136 20.096-113.6 53.76-156.992l-91.008-90.944zm417.28 394.496a194.56 194.56 0 0 0 22.528-22.528C686.912 602.56 704 559.232 704 512a191.232 191.232 0 0 0-67.968-146.56A191.296 191.296 0 0 0 512 320a191.232 191.232 0 0 0-146.56 67.968C337.088 421.44 320 464.768 320 512a191.232 191.232 0 0 0 67.968 146.56C421.44 686.912 464.768 704 512 704c47.296 0 90.56-17.088 124.032-45.44zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),PR=[LR];function RR(n,e,t,r,i,s){return P(),R("svg",CR,PR)}var FR=F(ER,[["render",RR],["__file","help.vue"]]),zR={name:"Hide"},IR={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},DR=b("path",{fill:"currentColor",d:"M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"},null,-1),NR=b("path",{fill:"currentColor",d:"M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"},null,-1),OR=[DR,NR];function BR(n,e,t,r,i,s){return P(),R("svg",IR,OR)}var HR=F(zR,[["render",BR],["__file","hide.vue"]]),UR={name:"Histogram"},VR={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},kR=b("path",{fill:"currentColor",d:"M416 896V128h192v768H416zm-288 0V448h192v448H128zm576 0V320h192v576H704z"},null,-1),GR=[kR];function WR(n,e,t,r,i,s){return P(),R("svg",VR,GR)}var $R=F(UR,[["render",WR],["__file","histogram.vue"]]),XR={name:"HomeFilled"},jR={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},qR=b("path",{fill:"currentColor",d:"M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"},null,-1),YR=[qR];function QR(n,e,t,r,i,s){return P(),R("svg",jR,YR)}var KR=F(XR,[["render",QR],["__file","home-filled.vue"]]),ZR={name:"HotWater"},JR={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},eF=b("path",{fill:"currentColor",d:"M273.067 477.867h477.866V409.6H273.067v68.267zm0 68.266v51.2A187.733 187.733 0 0 0 460.8 785.067h102.4a187.733 187.733 0 0 0 187.733-187.734v-51.2H273.067zm-34.134-204.8h546.134a34.133 34.133 0 0 1 34.133 34.134v221.866a256 256 0 0 1-256 256H460.8a256 256 0 0 1-256-256V375.467a34.133 34.133 0 0 1 34.133-34.134zM512 34.133a34.133 34.133 0 0 1 34.133 34.134v170.666a34.133 34.133 0 0 1-68.266 0V68.267A34.133 34.133 0 0 1 512 34.133zM375.467 102.4a34.133 34.133 0 0 1 34.133 34.133v102.4a34.133 34.133 0 0 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.134-34.133zm273.066 0a34.133 34.133 0 0 1 34.134 34.133v102.4a34.133 34.133 0 1 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.133-34.133zM170.667 921.668h682.666a34.133 34.133 0 1 1 0 68.267H170.667a34.133 34.133 0 1 1 0-68.267z"},null,-1),tF=[eF];function nF(n,e,t,r,i,s){return P(),R("svg",JR,tF)}var rF=F(ZR,[["render",nF],["__file","hot-water.vue"]]),iF={name:"House"},sF={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},oF=b("path",{fill:"currentColor",d:"M192 413.952V896h640V413.952L512 147.328 192 413.952zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576z"},null,-1),aF=[oF];function lF(n,e,t,r,i,s){return P(),R("svg",sF,aF)}var cF=F(iF,[["render",lF],["__file","house.vue"]]),uF={name:"IceCreamRound"},hF={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},dF=b("path",{fill:"currentColor",d:"m308.352 489.344 226.304 226.304a32 32 0 0 0 45.248 0L783.552 512A192 192 0 1 0 512 240.448L308.352 444.16a32 32 0 0 0 0 45.248zm135.744 226.304L308.352 851.392a96 96 0 0 1-135.744-135.744l135.744-135.744-45.248-45.248a96 96 0 0 1 0-135.808L466.752 195.2A256 256 0 0 1 828.8 557.248L625.152 760.96a96 96 0 0 1-135.808 0l-45.248-45.248zM398.848 670.4 353.6 625.152 217.856 760.896a32 32 0 0 0 45.248 45.248L398.848 670.4zm248.96-384.64a32 32 0 0 1 0 45.248L466.624 512a32 32 0 1 1-45.184-45.248l180.992-181.056a32 32 0 0 1 45.248 0zm90.496 90.496a32 32 0 0 1 0 45.248L557.248 602.496A32 32 0 1 1 512 557.248l180.992-180.992a32 32 0 0 1 45.312 0z"},null,-1),fF=[dF];function pF(n,e,t,r,i,s){return P(),R("svg",hF,fF)}var mF=F(uF,[["render",pF],["__file","ice-cream-round.vue"]]),_F={name:"IceCreamSquare"},gF={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},vF=b("path",{fill:"currentColor",d:"M416 640h256a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32H352a32 32 0 0 0-32 32v448a32 32 0 0 0 32 32h64zm192 64v160a96 96 0 0 1-192 0V704h-64a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h320a96 96 0 0 1 96 96v448a96 96 0 0 1-96 96h-64zm-64 0h-64v160a32 32 0 1 0 64 0V704z"},null,-1),xF=[vF];function yF(n,e,t,r,i,s){return P(),R("svg",gF,xF)}var wF=F(_F,[["render",yF],["__file","ice-cream-square.vue"]]),MF={name:"IceCream"},bF={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},SF=b("path",{fill:"currentColor",d:"M128.64 448a208 208 0 0 1 193.536-191.552 224 224 0 0 1 445.248 15.488A208.128 208.128 0 0 1 894.784 448H896L548.8 983.68a32 32 0 0 1-53.248.704L128 448h.64zm64.256 0h286.208a144 144 0 0 0-286.208 0zm351.36 0h286.272a144 144 0 0 0-286.272 0zm-294.848 64 271.808 396.608L778.24 512H249.408zM511.68 352.64a207.872 207.872 0 0 1 189.184-96.192 160 160 0 0 0-314.752 5.632c52.608 12.992 97.28 46.08 125.568 90.56z"},null,-1),AF=[SF];function TF(n,e,t,r,i,s){return P(),R("svg",bF,AF)}var EF=F(MF,[["render",TF],["__file","ice-cream.vue"]]),CF={name:"IceDrink"},LF={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},PF=b("path",{fill:"currentColor",d:"M512 448v128h239.68l16.064-128H512zm-64 0H256.256l16.064 128H448V448zm64-255.36V384h247.744A256.128 256.128 0 0 0 512 192.64zm-64 8.064A256.448 256.448 0 0 0 264.256 384H448V200.704zm64-72.064A320.128 320.128 0 0 1 825.472 384H896a32 32 0 1 1 0 64h-64v1.92l-56.96 454.016A64 64 0 0 1 711.552 960H312.448a64 64 0 0 1-63.488-56.064L192 449.92V448h-64a32 32 0 0 1 0-64h70.528A320.384 320.384 0 0 1 448 135.04V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H544a32 32 0 0 0-32 32v32.64zM743.68 640H280.32l32.128 256h399.104l32.128-256z"},null,-1),RF=[PF];function FF(n,e,t,r,i,s){return P(),R("svg",LF,RF)}var zF=F(CF,[["render",FF],["__file","ice-drink.vue"]]),IF={name:"IceTea"},DF={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},NF=b("path",{fill:"currentColor",d:"M197.696 259.648a320.128 320.128 0 0 1 628.608 0A96 96 0 0 1 896 352v64a96 96 0 0 1-71.616 92.864l-49.408 395.072A64 64 0 0 1 711.488 960H312.512a64 64 0 0 1-63.488-56.064l-49.408-395.072A96 96 0 0 1 128 416v-64a96 96 0 0 1 69.696-92.352zM264.064 256h495.872a256.128 256.128 0 0 0-495.872 0zm495.424 256H264.512l48 384h398.976l48-384zM224 448h576a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H224a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32zm160 192h64v64h-64v-64zm192 64h64v64h-64v-64zm-128 64h64v64h-64v-64zm64-192h64v64h-64v-64z"},null,-1),OF=[NF];function BF(n,e,t,r,i,s){return P(),R("svg",DF,OF)}var HF=F(IF,[["render",BF],["__file","ice-tea.vue"]]),UF={name:"InfoFilled"},VF={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},kF=b("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"},null,-1),GF=[kF];function WF(n,e,t,r,i,s){return P(),R("svg",VF,GF)}var $F=F(UF,[["render",WF],["__file","info-filled.vue"]]),XF={name:"Iphone"},jF={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},qF=b("path",{fill:"currentColor",d:"M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768H224zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64v544zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96H256zm304-144a48 48 0 1 1-96 0 48 48 0 0 1 96 0z"},null,-1),YF=[qF];function QF(n,e,t,r,i,s){return P(),R("svg",jF,YF)}var KF=F(XF,[["render",QF],["__file","iphone.vue"]]),ZF={name:"Key"},JF={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},ez=b("path",{fill:"currentColor",d:"M448 456.064V96a32 32 0 0 1 32-32.064L672 64a32 32 0 0 1 0 64H512v128h160a32 32 0 0 1 0 64H512v128a256 256 0 1 1-64 8.064zM512 896a192 192 0 1 0 0-384 192 192 0 0 0 0 384z"},null,-1),tz=[ez];function nz(n,e,t,r,i,s){return P(),R("svg",JF,tz)}var rz=F(ZF,[["render",nz],["__file","key.vue"]]),iz={name:"KnifeFork"},sz={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},oz=b("path",{fill:"currentColor",d:"M256 410.56V96a32 32 0 0 1 64 0v314.56A96 96 0 0 0 384 320V96a32 32 0 0 1 64 0v224a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.8A160 160 0 0 1 128 320V96a32 32 0 0 1 64 0v224a96 96 0 0 0 64 90.56zm384-250.24V544h126.72c-3.328-78.72-12.928-147.968-28.608-207.744-14.336-54.528-46.848-113.344-98.112-175.872zM640 608v320a32 32 0 1 1-64 0V64h64c85.312 89.472 138.688 174.848 160 256 21.312 81.152 32 177.152 32 288H640z"},null,-1),az=[oz];function lz(n,e,t,r,i,s){return P(),R("svg",sz,az)}var cz=F(iz,[["render",lz],["__file","knife-fork.vue"]]),uz={name:"Lightning"},hz={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},dz=b("path",{fill:"currentColor",d:"M288 671.36v64.128A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 736 734.016v-64.768a192 192 0 0 0 3.328-377.92l-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 91.968 70.464 167.36 160.256 175.232z"},null,-1),fz=b("path",{fill:"currentColor",d:"M416 736a32 32 0 0 1-27.776-47.872l128-224a32 32 0 1 1 55.552 31.744L471.168 672H608a32 32 0 0 1 27.776 47.872l-128 224a32 32 0 1 1-55.68-31.744L552.96 736H416z"},null,-1),pz=[dz,fz];function mz(n,e,t,r,i,s){return P(),R("svg",hz,pz)}var _z=F(uz,[["render",mz],["__file","lightning.vue"]]),gz={name:"Link"},vz={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},xz=b("path",{fill:"currentColor",d:"M715.648 625.152 670.4 579.904l90.496-90.56c75.008-74.944 85.12-186.368 22.656-248.896-62.528-62.464-173.952-52.352-248.96 22.656L444.16 353.6l-45.248-45.248 90.496-90.496c100.032-99.968 251.968-110.08 339.456-22.656 87.488 87.488 77.312 239.424-22.656 339.456l-90.496 90.496zm-90.496 90.496-90.496 90.496C434.624 906.112 282.688 916.224 195.2 828.8c-87.488-87.488-77.312-239.424 22.656-339.456l90.496-90.496 45.248 45.248-90.496 90.56c-75.008 74.944-85.12 186.368-22.656 248.896 62.528 62.464 173.952 52.352 248.96-22.656l90.496-90.496 45.248 45.248zm0-362.048 45.248 45.248L398.848 670.4 353.6 625.152 625.152 353.6z"},null,-1),yz=[xz];function wz(n,e,t,r,i,s){return P(),R("svg",vz,yz)}var Mz=F(gz,[["render",wz],["__file","link.vue"]]),bz={name:"List"},Sz={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Az=b("path",{fill:"currentColor",d:"M704 192h160v736H160V192h160v64h384v-64zM288 512h448v-64H288v64zm0 256h448v-64H288v64zm96-576V96h256v96H384z"},null,-1),Tz=[Az];function Ez(n,e,t,r,i,s){return P(),R("svg",Sz,Tz)}var Cz=F(bz,[["render",Ez],["__file","list.vue"]]),Lz={name:"Loading"},Pz={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Rz=b("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"},null,-1),Fz=[Rz];function zz(n,e,t,r,i,s){return P(),R("svg",Pz,Fz)}var Iz=F(Lz,[["render",zz],["__file","loading.vue"]]),Dz={name:"LocationFilled"},Nz={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Oz=b("path",{fill:"currentColor",d:"M512 928c23.936 0 117.504-68.352 192.064-153.152C803.456 661.888 864 535.808 864 416c0-189.632-155.84-320-352-320S160 226.368 160 416c0 120.32 60.544 246.4 159.936 359.232C394.432 859.84 488 928 512 928zm0-435.2a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 140.8a204.8 204.8 0 1 1 0-409.6 204.8 204.8 0 0 1 0 409.6z"},null,-1),Bz=[Oz];function Hz(n,e,t,r,i,s){return P(),R("svg",Nz,Bz)}var Uz=F(Dz,[["render",Hz],["__file","location-filled.vue"]]),Vz={name:"LocationInformation"},kz={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Gz=b("path",{fill:"currentColor",d:"M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"},null,-1),Wz=b("path",{fill:"currentColor",d:"M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"},null,-1),$z=b("path",{fill:"currentColor",d:"M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"},null,-1),Xz=[Gz,Wz,$z];function jz(n,e,t,r,i,s){return P(),R("svg",kz,Xz)}var qz=F(Vz,[["render",jz],["__file","location-information.vue"]]),Yz={name:"Location"},Qz={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Kz=b("path",{fill:"currentColor",d:"M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"},null,-1),Zz=b("path",{fill:"currentColor",d:"M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"},null,-1),Jz=[Kz,Zz];function eI(n,e,t,r,i,s){return P(),R("svg",Qz,Jz)}var tI=F(Yz,[["render",eI],["__file","location.vue"]]),nI={name:"Lock"},rI={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},iI=b("path",{fill:"currentColor",d:"M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"},null,-1),sI=b("path",{fill:"currentColor",d:"M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z"},null,-1),oI=[iI,sI];function aI(n,e,t,r,i,s){return P(),R("svg",rI,oI)}var lI=F(nI,[["render",aI],["__file","lock.vue"]]),cI={name:"Lollipop"},uI={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},hI=b("path",{fill:"currentColor",d:"M513.28 448a64 64 0 1 1 76.544 49.728A96 96 0 0 0 768 448h64a160 160 0 0 1-320 0h1.28zm-126.976-29.696a256 256 0 1 0 43.52-180.48A256 256 0 0 1 832 448h-64a192 192 0 0 0-381.696-29.696zm105.664 249.472L285.696 874.048a96 96 0 0 1-135.68-135.744l206.208-206.272a320 320 0 1 1 135.744 135.744zm-54.464-36.032a321.92 321.92 0 0 1-45.248-45.248L195.2 783.552a32 32 0 1 0 45.248 45.248l197.056-197.12z"},null,-1),dI=[hI];function fI(n,e,t,r,i,s){return P(),R("svg",uI,dI)}var pI=F(cI,[["render",fI],["__file","lollipop.vue"]]),mI={name:"MagicStick"},_I={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},gI=b("path",{fill:"currentColor",d:"M512 64h64v192h-64V64zm0 576h64v192h-64V640zM160 480v-64h192v64H160zm576 0v-64h192v64H736zM249.856 199.04l45.248-45.184L430.848 289.6 385.6 334.848 249.856 199.104zM657.152 606.4l45.248-45.248 135.744 135.744-45.248 45.248L657.152 606.4zM114.048 923.2 68.8 877.952l316.8-316.8 45.248 45.248-316.8 316.8zM702.4 334.848 657.152 289.6l135.744-135.744 45.248 45.248L702.4 334.848z"},null,-1),vI=[gI];function xI(n,e,t,r,i,s){return P(),R("svg",_I,vI)}var yI=F(mI,[["render",xI],["__file","magic-stick.vue"]]),wI={name:"Magnet"},MI={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},bI=b("path",{fill:"currentColor",d:"M832 320V192H704v320a192 192 0 1 1-384 0V192H192v128h128v64H192v128a320 320 0 0 0 640 0V384H704v-64h128zM640 512V128h256v384a384 384 0 1 1-768 0V128h256v384a128 128 0 1 0 256 0z"},null,-1),SI=[bI];function AI(n,e,t,r,i,s){return P(),R("svg",MI,SI)}var TI=F(wI,[["render",AI],["__file","magnet.vue"]]),EI={name:"Male"},CI={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},LI=b("path",{fill:"currentColor",d:"M399.5 849.5a225 225 0 1 0 0-450 225 225 0 0 0 0 450zm0 56.25a281.25 281.25 0 1 1 0-562.5 281.25 281.25 0 0 1 0 562.5zm253.125-787.5h225q28.125 0 28.125 28.125T877.625 174.5h-225q-28.125 0-28.125-28.125t28.125-28.125z"},null,-1),PI=b("path",{fill:"currentColor",d:"M877.625 118.25q28.125 0 28.125 28.125v225q0 28.125-28.125 28.125T849.5 371.375v-225q0-28.125 28.125-28.125z"},null,-1),RI=b("path",{fill:"currentColor",d:"M604.813 458.9 565.1 419.131l292.613-292.668 39.825 39.824z"},null,-1),FI=[LI,PI,RI];function zI(n,e,t,r,i,s){return P(),R("svg",CI,FI)}var II=F(EI,[["render",zI],["__file","male.vue"]]),DI={name:"Management"},NI={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},OI=b("path",{fill:"currentColor",d:"M576 128v288l96-96 96 96V128h128v768H320V128h256zm-448 0h128v768H128V128z"},null,-1),BI=[OI];function HI(n,e,t,r,i,s){return P(),R("svg",NI,BI)}var UI=F(DI,[["render",HI],["__file","management.vue"]]),VI={name:"MapLocation"},kI={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},GI=b("path",{fill:"currentColor",d:"M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"},null,-1),WI=b("path",{fill:"currentColor",d:"M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256zm345.6 192L960 960H672v-64H352v64H64l102.4-256h691.2zm-68.928 0H235.328l-76.8 192h706.944l-76.8-192z"},null,-1),$I=[GI,WI];function XI(n,e,t,r,i,s){return P(),R("svg",kI,$I)}var jI=F(VI,[["render",XI],["__file","map-location.vue"]]),qI={name:"Medal"},YI={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},QI=b("path",{fill:"currentColor",d:"M512 896a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"},null,-1),KI=b("path",{fill:"currentColor",d:"M576 128H448v200a286.72 286.72 0 0 1 64-8c19.52 0 40.832 2.688 64 8V128zm64 0v219.648c24.448 9.088 50.56 20.416 78.4 33.92L757.44 128H640zm-256 0H266.624l39.04 253.568c27.84-13.504 53.888-24.832 78.336-33.92V128zM229.312 64h565.376a32 32 0 0 1 31.616 36.864L768 480c-113.792-64-199.104-96-256-96-56.896 0-142.208 32-256 96l-58.304-379.136A32 32 0 0 1 229.312 64z"},null,-1),ZI=[QI,KI];function JI(n,e,t,r,i,s){return P(),R("svg",YI,ZI)}var eD=F(qI,[["render",JI],["__file","medal.vue"]]),tD={name:"Memo"},nD={xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"enable-background":"new 0 0 1024 1024"},viewBox:"0 0 1024 1024"},rD=b("path",{fill:"currentColor",d:"M480 320h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32z"},null,-1),iD=b("path",{fill:"currentColor",d:"M887.01 72.99C881.01 67 873.34 64 864 64H160c-9.35 0-17.02 3-23.01 8.99C131 78.99 128 86.66 128 96v832c0 9.35 2.99 17.02 8.99 23.01S150.66 960 160 960h704c9.35 0 17.02-2.99 23.01-8.99S896 937.34 896 928V96c0-9.35-3-17.02-8.99-23.01zM192 896V128h96v768h-96zm640 0H352V128h480v768z"},null,-1),sD=b("path",{fill:"currentColor",d:"M480 512h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32zm0 192h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32z"},null,-1),oD=[rD,iD,sD];function aD(n,e,t,r,i,s){return P(),R("svg",nD,oD)}var lD=F(tD,[["render",aD],["__file","memo.vue"]]),cD={name:"Menu"},uD={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},hD=b("path",{fill:"currentColor",d:"M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"},null,-1),dD=[hD];function fD(n,e,t,r,i,s){return P(),R("svg",uD,dD)}var pD=F(cD,[["render",fD],["__file","menu.vue"]]),mD={name:"MessageBox"},_D={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},gD=b("path",{fill:"currentColor",d:"M288 384h448v64H288v-64zm96-128h256v64H384v-64zM131.456 512H384v128h256V512h252.544L721.856 192H302.144L131.456 512zM896 576H704v128H320V576H128v256h768V576zM275.776 128h472.448a32 32 0 0 1 28.608 17.664l179.84 359.552A32 32 0 0 1 960 519.552V864a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V519.552a32 32 0 0 1 3.392-14.336l179.776-359.552A32 32 0 0 1 275.776 128z"},null,-1),vD=[gD];function xD(n,e,t,r,i,s){return P(),R("svg",_D,vD)}var yD=F(mD,[["render",xD],["__file","message-box.vue"]]),wD={name:"Message"},MD={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},bD=b("path",{fill:"currentColor",d:"M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224H128zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64z"},null,-1),SD=b("path",{fill:"currentColor",d:"M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224h784zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056z"},null,-1),AD=[bD,SD];function TD(n,e,t,r,i,s){return P(),R("svg",MD,AD)}var ED=F(wD,[["render",TD],["__file","message.vue"]]),CD={name:"Mic"},LD={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},PD=b("path",{fill:"currentColor",d:"M480 704h160a64 64 0 0 0 64-64v-32h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-32a64 64 0 0 0-64-64H384a64 64 0 0 0-64 64v32h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v32a64 64 0 0 0 64 64h96zm64 64v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768h-96a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64h256a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128h-96z"},null,-1),RD=[PD];function FD(n,e,t,r,i,s){return P(),R("svg",LD,RD)}var zD=F(CD,[["render",FD],["__file","mic.vue"]]),ID={name:"Microphone"},DD={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},ND=b("path",{fill:"currentColor",d:"M512 128a128 128 0 0 0-128 128v256a128 128 0 1 0 256 0V256a128 128 0 0 0-128-128zm0-64a192 192 0 0 1 192 192v256a192 192 0 1 1-384 0V256A192 192 0 0 1 512 64zm-32 832v-64a288 288 0 0 1-288-288v-32a32 32 0 0 1 64 0v32a224 224 0 0 0 224 224h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64z"},null,-1),OD=[ND];function BD(n,e,t,r,i,s){return P(),R("svg",DD,OD)}var HD=F(ID,[["render",BD],["__file","microphone.vue"]]),UD={name:"MilkTea"},VD={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},kD=b("path",{fill:"currentColor",d:"M416 128V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H512a32 32 0 0 0-32 32v32h320a96 96 0 0 1 11.712 191.296l-39.68 581.056A64 64 0 0 1 708.224 960H315.776a64 64 0 0 1-63.872-59.648l-39.616-581.056A96 96 0 0 1 224 128h192zM276.48 320l39.296 576h392.448l4.8-70.784a224.064 224.064 0 0 1 30.016-439.808L747.52 320H276.48zM224 256h576a32 32 0 1 0 0-64H224a32 32 0 0 0 0 64zm493.44 503.872 21.12-309.12a160 160 0 0 0-21.12 309.12z"},null,-1),GD=[kD];function WD(n,e,t,r,i,s){return P(),R("svg",VD,GD)}var $D=F(UD,[["render",WD],["__file","milk-tea.vue"]]),XD={name:"Minus"},jD={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},qD=b("path",{fill:"currentColor",d:"M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"},null,-1),YD=[qD];function QD(n,e,t,r,i,s){return P(),R("svg",jD,YD)}var KD=F(XD,[["render",QD],["__file","minus.vue"]]),ZD={name:"Money"},JD={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},eN=b("path",{fill:"currentColor",d:"M256 640v192h640V384H768v-64h150.976c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H233.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096c-2.688-5.184-4.224-10.368-4.224-24.576V640h64z"},null,-1),tN=b("path",{fill:"currentColor",d:"M768 192H128v448h640V192zm64-22.976v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 682.432 64 677.248 64 663.04V169.024c0-14.272 1.472-19.456 4.288-24.64a29.056 29.056 0 0 1 12.096-12.16C85.568 129.536 90.752 128 104.96 128h685.952c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64z"},null,-1),nN=b("path",{fill:"currentColor",d:"M448 576a160 160 0 1 1 0-320 160 160 0 0 1 0 320zm0-64a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"},null,-1),rN=[eN,tN,nN];function iN(n,e,t,r,i,s){return P(),R("svg",JD,rN)}var sN=F(ZD,[["render",iN],["__file","money.vue"]]),oN={name:"Monitor"},aN={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},lN=b("path",{fill:"currentColor",d:"M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z"},null,-1),cN=[lN];function uN(n,e,t,r,i,s){return P(),R("svg",aN,cN)}var hN=F(oN,[["render",uN],["__file","monitor.vue"]]),dN={name:"MoonNight"},fN={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},pN=b("path",{fill:"currentColor",d:"M384 512a448 448 0 0 1 215.872-383.296A384 384 0 0 0 213.76 640h188.8A448.256 448.256 0 0 1 384 512zM171.136 704a448 448 0 0 1 636.992-575.296A384 384 0 0 0 499.328 704h-328.32z"},null,-1),mN=b("path",{fill:"currentColor",d:"M32 640h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm128 128h384a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm160 127.68 224 .256a32 32 0 0 1 32 32V928a32 32 0 0 1-32 32l-224-.384a32 32 0 0 1-32-32v-.064a32 32 0 0 1 32-32z"},null,-1),_N=[pN,mN];function gN(n,e,t,r,i,s){return P(),R("svg",fN,_N)}var vN=F(dN,[["render",gN],["__file","moon-night.vue"]]),xN={name:"Moon"},yN={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},wN=b("path",{fill:"currentColor",d:"M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z"},null,-1),MN=[wN];function bN(n,e,t,r,i,s){return P(),R("svg",yN,MN)}var SN=F(xN,[["render",bN],["__file","moon.vue"]]),AN={name:"MoreFilled"},TN={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},EN=b("path",{fill:"currentColor",d:"M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"},null,-1),CN=[EN];function LN(n,e,t,r,i,s){return P(),R("svg",TN,CN)}var PN=F(AN,[["render",LN],["__file","more-filled.vue"]]),RN={name:"More"},FN={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},zN=b("path",{fill:"currentColor",d:"M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"},null,-1),IN=[zN];function DN(n,e,t,r,i,s){return P(),R("svg",FN,IN)}var NN=F(RN,[["render",DN],["__file","more.vue"]]),ON={name:"MostlyCloudy"},BN={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},HN=b("path",{fill:"currentColor",d:"M737.216 357.952 704 349.824l-11.776-32a192.064 192.064 0 0 0-367.424 23.04l-8.96 39.04-39.04 8.96A192.064 192.064 0 0 0 320 768h368a207.808 207.808 0 0 0 207.808-208 208.32 208.32 0 0 0-158.592-202.048zm15.168-62.208A272.32 272.32 0 0 1 959.744 560a271.808 271.808 0 0 1-271.552 272H320a256 256 0 0 1-57.536-505.536 256.128 256.128 0 0 1 489.92-30.72z"},null,-1),UN=[HN];function VN(n,e,t,r,i,s){return P(),R("svg",BN,UN)}var kN=F(ON,[["render",VN],["__file","mostly-cloudy.vue"]]),GN={name:"Mouse"},WN={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},$N=b("path",{fill:"currentColor",d:"M438.144 256c-68.352 0-92.736 4.672-117.76 18.112-20.096 10.752-35.52 26.176-46.272 46.272C260.672 345.408 256 369.792 256 438.144v275.712c0 68.352 4.672 92.736 18.112 117.76 10.752 20.096 26.176 35.52 46.272 46.272C345.408 891.328 369.792 896 438.144 896h147.712c68.352 0 92.736-4.672 117.76-18.112 20.096-10.752 35.52-26.176 46.272-46.272C763.328 806.592 768 782.208 768 713.856V438.144c0-68.352-4.672-92.736-18.112-117.76a110.464 110.464 0 0 0-46.272-46.272C678.592 260.672 654.208 256 585.856 256H438.144zm0-64h147.712c85.568 0 116.608 8.96 147.904 25.6 31.36 16.768 55.872 41.344 72.576 72.64C823.104 321.536 832 352.576 832 438.08v275.84c0 85.504-8.96 116.544-25.6 147.84a174.464 174.464 0 0 1-72.64 72.576C702.464 951.104 671.424 960 585.92 960H438.08c-85.504 0-116.544-8.96-147.84-25.6a174.464 174.464 0 0 1-72.64-72.704c-16.768-31.296-25.664-62.336-25.664-147.84v-275.84c0-85.504 8.96-116.544 25.6-147.84a174.464 174.464 0 0 1 72.768-72.576c31.232-16.704 62.272-25.6 147.776-25.6z"},null,-1),XN=b("path",{fill:"currentColor",d:"M512 320q32 0 32 32v128q0 32-32 32t-32-32V352q0-32 32-32zm32-96a32 32 0 0 1-64 0v-64a32 32 0 0 0-32-32h-96a32 32 0 0 1 0-64h96a96 96 0 0 1 96 96v64z"},null,-1),jN=[$N,XN];function qN(n,e,t,r,i,s){return P(),R("svg",WN,jN)}var YN=F(GN,[["render",qN],["__file","mouse.vue"]]),QN={name:"Mug"},KN={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},ZN=b("path",{fill:"currentColor",d:"M736 800V160H160v640a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64zm64-544h63.552a96 96 0 0 1 96 96v224a96 96 0 0 1-96 96H800v128a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V128a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 64v288h63.552a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32H800z"},null,-1),JN=[ZN];function eO(n,e,t,r,i,s){return P(),R("svg",KN,JN)}var tO=F(QN,[["render",eO],["__file","mug.vue"]]),nO={name:"MuteNotification"},rO={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},iO=b("path",{fill:"currentColor",d:"m241.216 832 63.616-64H768V448c0-42.368-10.24-82.304-28.48-117.504l46.912-47.232C815.36 331.392 832 387.84 832 448v320h96a32 32 0 1 1 0 64H241.216zm-90.24 0H96a32 32 0 1 1 0-64h96V448a320.128 320.128 0 0 1 256-313.6V128a64 64 0 1 1 128 0v6.4a319.552 319.552 0 0 1 171.648 97.088l-45.184 45.44A256 256 0 0 0 256 448v278.336L151.04 832zM448 896h128a64 64 0 0 1-128 0z"},null,-1),sO=b("path",{fill:"currentColor",d:"M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z"},null,-1),oO=[iO,sO];function aO(n,e,t,r,i,s){return P(),R("svg",rO,oO)}var lO=F(nO,[["render",aO],["__file","mute-notification.vue"]]),cO={name:"Mute"},uO={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},hO=b("path",{fill:"currentColor",d:"m412.16 592.128-45.44 45.44A191.232 191.232 0 0 1 320 512V256a192 192 0 1 1 384 0v44.352l-64 64V256a128 128 0 1 0-256 0v256c0 30.336 10.56 58.24 28.16 80.128zm51.968 38.592A128 128 0 0 0 640 512v-57.152l64-64V512a192 192 0 0 1-287.68 166.528l47.808-47.808zM314.88 779.968l46.144-46.08A222.976 222.976 0 0 0 480 768h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64v-64c-61.44 0-118.4-19.2-165.12-52.032zM266.752 737.6A286.976 286.976 0 0 1 192 544v-32a32 32 0 0 1 64 0v32c0 56.832 21.184 108.8 56.064 148.288L266.752 737.6z"},null,-1),dO=b("path",{fill:"currentColor",d:"M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z"},null,-1),fO=[hO,dO];function pO(n,e,t,r,i,s){return P(),R("svg",uO,fO)}var mO=F(cO,[["render",pO],["__file","mute.vue"]]),_O={name:"NoSmoking"},gO={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},vO=b("path",{fill:"currentColor",d:"M440.256 576H256v128h56.256l-64 64H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32h280.256l-64 64zm143.488 128H704V583.744L775.744 512H928a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H519.744l64-64zM768 576v128h128V576H768zm-29.696-207.552 45.248 45.248-497.856 497.856-45.248-45.248zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"},null,-1),xO=[vO];function yO(n,e,t,r,i,s){return P(),R("svg",gO,xO)}var wO=F(_O,[["render",yO],["__file","no-smoking.vue"]]),MO={name:"Notebook"},bO={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},SO=b("path",{fill:"currentColor",d:"M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"},null,-1),AO=b("path",{fill:"currentColor",d:"M672 128h64v768h-64zM96 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"},null,-1),TO=[SO,AO];function EO(n,e,t,r,i,s){return P(),R("svg",bO,TO)}var CO=F(MO,[["render",EO],["__file","notebook.vue"]]),LO={name:"Notification"},PO={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},RO=b("path",{fill:"currentColor",d:"M512 128v64H256a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V512h64v256a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128h256z"},null,-1),FO=b("path",{fill:"currentColor",d:"M768 384a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"},null,-1),zO=[RO,FO];function IO(n,e,t,r,i,s){return P(),R("svg",PO,zO)}var DO=F(LO,[["render",IO],["__file","notification.vue"]]),NO={name:"Odometer"},OO={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},BO=b("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),HO=b("path",{fill:"currentColor",d:"M192 512a320 320 0 1 1 640 0 32 32 0 1 1-64 0 256 256 0 1 0-512 0 32 32 0 0 1-64 0z"},null,-1),UO=b("path",{fill:"currentColor",d:"M570.432 627.84A96 96 0 1 1 509.568 608l60.992-187.776A32 32 0 1 1 631.424 440l-60.992 187.776zM502.08 734.464a32 32 0 1 0 19.84-60.928 32 32 0 0 0-19.84 60.928z"},null,-1),VO=[BO,HO,UO];function kO(n,e,t,r,i,s){return P(),R("svg",OO,VO)}var GO=F(NO,[["render",kO],["__file","odometer.vue"]]),WO={name:"OfficeBuilding"},$O={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},XO=b("path",{fill:"currentColor",d:"M192 128v704h384V128H192zm-32-64h448a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"},null,-1),jO=b("path",{fill:"currentColor",d:"M256 256h256v64H256v-64zm0 192h256v64H256v-64zm0 192h256v64H256v-64zm384-128h128v64H640v-64zm0 128h128v64H640v-64zM64 832h896v64H64v-64z"},null,-1),qO=b("path",{fill:"currentColor",d:"M640 384v448h192V384H640zm-32-64h256a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H608a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32z"},null,-1),YO=[XO,jO,qO];function QO(n,e,t,r,i,s){return P(),R("svg",$O,YO)}var KO=F(WO,[["render",QO],["__file","office-building.vue"]]),ZO={name:"Open"},JO={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},eB=b("path",{fill:"currentColor",d:"M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"},null,-1),tB=b("path",{fill:"currentColor",d:"M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"},null,-1),nB=[eB,tB];function rB(n,e,t,r,i,s){return P(),R("svg",JO,nB)}var iB=F(ZO,[["render",rB],["__file","open.vue"]]),sB={name:"Operation"},oB={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},aB=b("path",{fill:"currentColor",d:"M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64h261.44zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64h453.44zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64h133.44z"},null,-1),lB=[aB];function cB(n,e,t,r,i,s){return P(),R("svg",oB,lB)}var uB=F(sB,[["render",cB],["__file","operation.vue"]]),hB={name:"Opportunity"},dB={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},fB=b("path",{fill:"currentColor",d:"M384 960v-64h192.064v64H384zm448-544a350.656 350.656 0 0 1-128.32 271.424C665.344 719.04 640 763.776 640 813.504V832H320v-14.336c0-48-19.392-95.36-57.216-124.992a351.552 351.552 0 0 1-128.448-344.256c25.344-136.448 133.888-248.128 269.76-276.48A352.384 352.384 0 0 1 832 416zm-544 32c0-132.288 75.904-224 192-224v-64c-154.432 0-256 122.752-256 288h64z"},null,-1),pB=[fB];function mB(n,e,t,r,i,s){return P(),R("svg",dB,pB)}var _B=F(hB,[["render",mB],["__file","opportunity.vue"]]),gB={name:"Orange"},vB={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},xB=b("path",{fill:"currentColor",d:"M544 894.72a382.336 382.336 0 0 0 215.936-89.472L577.024 622.272c-10.24 6.016-21.248 10.688-33.024 13.696v258.688zm261.248-134.784A382.336 382.336 0 0 0 894.656 544H635.968c-3.008 11.776-7.68 22.848-13.696 33.024l182.976 182.912zM894.656 480a382.336 382.336 0 0 0-89.408-215.936L622.272 446.976c6.016 10.24 10.688 21.248 13.696 33.024h258.688zm-134.72-261.248A382.336 382.336 0 0 0 544 129.344v258.688c11.776 3.008 22.848 7.68 33.024 13.696l182.912-182.976zM480 129.344a382.336 382.336 0 0 0-215.936 89.408l182.912 182.976c10.24-6.016 21.248-10.688 33.024-13.696V129.344zm-261.248 134.72A382.336 382.336 0 0 0 129.344 480h258.688c3.008-11.776 7.68-22.848 13.696-33.024L218.752 264.064zM129.344 544a382.336 382.336 0 0 0 89.408 215.936l182.976-182.912A127.232 127.232 0 0 1 388.032 544H129.344zm134.72 261.248A382.336 382.336 0 0 0 480 894.656V635.968a127.232 127.232 0 0 1-33.024-13.696L264.064 805.248zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-384a64 64 0 1 0 0-128 64 64 0 0 0 0 128z"},null,-1),yB=[xB];function wB(n,e,t,r,i,s){return P(),R("svg",vB,yB)}var MB=F(gB,[["render",wB],["__file","orange.vue"]]),bB={name:"Paperclip"},SB={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},AB=b("path",{fill:"currentColor",d:"M602.496 240.448A192 192 0 1 1 874.048 512l-316.8 316.8A256 256 0 0 1 195.2 466.752L602.496 59.456l45.248 45.248L240.448 512A192 192 0 0 0 512 783.552l316.8-316.8a128 128 0 1 0-181.056-181.056L353.6 579.904a32 32 0 1 0 45.248 45.248l294.144-294.144 45.312 45.248L444.096 670.4a96 96 0 1 1-135.744-135.744l294.144-294.208z"},null,-1),TB=[AB];function EB(n,e,t,r,i,s){return P(),R("svg",SB,TB)}var CB=F(bB,[["render",EB],["__file","paperclip.vue"]]),LB={name:"PartlyCloudy"},PB={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},RB=b("path",{fill:"currentColor",d:"M598.4 895.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 895.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 445.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"},null,-1),FB=b("path",{fill:"currentColor",d:"M139.84 501.888a256 256 0 1 1 417.856-277.12c-17.728 2.176-38.208 8.448-61.504 18.816A192 192 0 1 0 189.12 460.48a6003.84 6003.84 0 0 0-49.28 41.408z"},null,-1),zB=[RB,FB];function IB(n,e,t,r,i,s){return P(),R("svg",PB,zB)}var DB=F(LB,[["render",IB],["__file","partly-cloudy.vue"]]),NB={name:"Pear"},OB={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},BB=b("path",{fill:"currentColor",d:"M542.336 258.816a443.255 443.255 0 0 0-9.024 25.088 32 32 0 1 1-60.8-20.032l1.088-3.328a162.688 162.688 0 0 0-122.048 131.392l-17.088 102.72-20.736 15.36C256.192 552.704 224 610.88 224 672c0 120.576 126.4 224 288 224s288-103.424 288-224c0-61.12-32.192-119.296-89.728-161.92l-20.736-15.424-17.088-102.72a162.688 162.688 0 0 0-130.112-133.12zm-40.128-66.56c7.936-15.552 16.576-30.08 25.92-43.776 23.296-33.92 49.408-59.776 78.528-77.12a32 32 0 1 1 32.704 55.04c-20.544 12.224-40.064 31.552-58.432 58.304a316.608 316.608 0 0 0-9.792 15.104 226.688 226.688 0 0 1 164.48 181.568l12.8 77.248C819.456 511.36 864 587.392 864 672c0 159.04-157.568 288-352 288S160 831.04 160 672c0-84.608 44.608-160.64 115.584-213.376l12.8-77.248a226.624 226.624 0 0 1 213.76-189.184z"},null,-1),HB=[BB];function UB(n,e,t,r,i,s){return P(),R("svg",OB,HB)}var VB=F(NB,[["render",UB],["__file","pear.vue"]]),kB={name:"PhoneFilled"},GB={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},WB=b("path",{fill:"currentColor",d:"M199.232 125.568 90.624 379.008a32 32 0 0 0 6.784 35.2l512.384 512.384a32 32 0 0 0 35.2 6.784l253.44-108.608a32 32 0 0 0 10.048-52.032L769.6 633.92a32 32 0 0 0-36.928-5.952l-130.176 65.088-271.488-271.552 65.024-130.176a32 32 0 0 0-5.952-36.928L251.2 115.52a32 32 0 0 0-51.968 10.048z"},null,-1),$B=[WB];function XB(n,e,t,r,i,s){return P(),R("svg",GB,$B)}var jB=F(kB,[["render",XB],["__file","phone-filled.vue"]]),qB={name:"Phone"},YB={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},QB=b("path",{fill:"currentColor",d:"M79.36 432.256 591.744 944.64a32 32 0 0 0 35.2 6.784l253.44-108.544a32 32 0 0 0 9.984-52.032l-153.856-153.92a32 32 0 0 0-36.928-6.016l-69.888 34.944L358.08 394.24l35.008-69.888a32 32 0 0 0-5.952-36.928L233.152 133.568a32 32 0 0 0-52.032 10.048L72.512 397.056a32 32 0 0 0 6.784 35.2zm60.48-29.952 81.536-190.08L325.568 316.48l-24.64 49.216-20.608 41.216 32.576 32.64 271.552 271.552 32.64 32.64 41.216-20.672 49.28-24.576 104.192 104.128-190.08 81.472L139.84 402.304zM512 320v-64a256 256 0 0 1 256 256h-64a192 192 0 0 0-192-192zm0-192V64a448 448 0 0 1 448 448h-64a384 384 0 0 0-384-384z"},null,-1),KB=[QB];function ZB(n,e,t,r,i,s){return P(),R("svg",YB,KB)}var JB=F(qB,[["render",ZB],["__file","phone.vue"]]),eH={name:"PictureFilled"},tH={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},nH=b("path",{fill:"currentColor",d:"M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z"},null,-1),rH=[nH];function iH(n,e,t,r,i,s){return P(),R("svg",tH,rH)}var sH=F(eH,[["render",iH],["__file","picture-filled.vue"]]),oH={name:"PictureRounded"},aH={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},lH=b("path",{fill:"currentColor",d:"M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768zm0-64a448 448 0 1 1 0 896 448 448 0 0 1 0-896z"},null,-1),cH=b("path",{fill:"currentColor",d:"M640 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM214.656 790.656l-45.312-45.312 185.664-185.6a96 96 0 0 1 123.712-10.24l138.24 98.688a32 32 0 0 0 39.872-2.176L906.688 422.4l42.624 47.744L699.52 693.696a96 96 0 0 1-119.808 6.592l-138.24-98.752a32 32 0 0 0-41.152 3.456l-185.664 185.6z"},null,-1),uH=[lH,cH];function hH(n,e,t,r,i,s){return P(),R("svg",aH,uH)}var dH=F(oH,[["render",hH],["__file","picture-rounded.vue"]]),fH={name:"Picture"},pH={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},mH=b("path",{fill:"currentColor",d:"M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"},null,-1),_H=b("path",{fill:"currentColor",d:"M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"},null,-1),gH=[mH,_H];function vH(n,e,t,r,i,s){return P(),R("svg",pH,gH)}var xH=F(fH,[["render",vH],["__file","picture.vue"]]),yH={name:"PieChart"},wH={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},MH=b("path",{fill:"currentColor",d:"M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.128 384.128 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512 448.128 448.128 0 0 1 448 68.48z"},null,-1),bH=b("path",{fill:"currentColor",d:"M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28zM512 64V33.152A448 448 0 0 1 990.848 512H512V64z"},null,-1),SH=[MH,bH];function AH(n,e,t,r,i,s){return P(),R("svg",wH,SH)}var TH=F(yH,[["render",AH],["__file","pie-chart.vue"]]),EH={name:"Place"},CH={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},LH=b("path",{fill:"currentColor",d:"M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"},null,-1),PH=b("path",{fill:"currentColor",d:"M512 512a32 32 0 0 1 32 32v256a32 32 0 1 1-64 0V544a32 32 0 0 1 32-32z"},null,-1),RH=b("path",{fill:"currentColor",d:"M384 649.088v64.96C269.76 732.352 192 771.904 192 800c0 37.696 139.904 96 320 96s320-58.304 320-96c0-28.16-77.76-67.648-192-85.952v-64.96C789.12 671.04 896 730.368 896 800c0 88.32-171.904 160-384 160s-384-71.68-384-160c0-69.696 106.88-128.96 256-150.912z"},null,-1),FH=[LH,PH,RH];function zH(n,e,t,r,i,s){return P(),R("svg",CH,FH)}var IH=F(EH,[["render",zH],["__file","place.vue"]]),DH={name:"Platform"},NH={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},OH=b("path",{fill:"currentColor",d:"M448 832v-64h128v64h192v64H256v-64h192zM128 704V128h768v576H128z"},null,-1),BH=[OH];function HH(n,e,t,r,i,s){return P(),R("svg",NH,BH)}var UH=F(DH,[["render",HH],["__file","platform.vue"]]),VH={name:"Plus"},kH={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},GH=b("path",{fill:"currentColor",d:"M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"},null,-1),WH=[GH];function $H(n,e,t,r,i,s){return P(),R("svg",kH,WH)}var XH=F(VH,[["render",$H],["__file","plus.vue"]]),jH={name:"Pointer"},qH={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},YH=b("path",{fill:"currentColor",d:"M511.552 128c-35.584 0-64.384 28.8-64.384 64.448v516.48L274.048 570.88a94.272 94.272 0 0 0-112.896-3.456 44.416 44.416 0 0 0-8.96 62.208L332.8 870.4A64 64 0 0 0 384 896h512V575.232a64 64 0 0 0-45.632-61.312l-205.952-61.76A96 96 0 0 1 576 360.192V192.448C576 156.8 547.2 128 511.552 128zM359.04 556.8l24.128 19.2V192.448a128.448 128.448 0 1 1 256.832 0v167.744a32 32 0 0 0 22.784 30.656l206.016 61.76A128 128 0 0 1 960 575.232V896a64 64 0 0 1-64 64H384a128 128 0 0 1-102.4-51.2L101.056 668.032A108.416 108.416 0 0 1 128 512.512a158.272 158.272 0 0 1 185.984 8.32L359.04 556.8z"},null,-1),QH=[YH];function KH(n,e,t,r,i,s){return P(),R("svg",qH,QH)}var ZH=F(jH,[["render",KH],["__file","pointer.vue"]]),JH={name:"Position"},eU={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},tU=b("path",{fill:"currentColor",d:"m249.6 417.088 319.744 43.072 39.168 310.272L845.12 178.88 249.6 417.088zm-129.024 47.168a32 32 0 0 1-7.68-61.44l777.792-311.04a32 32 0 0 1 41.6 41.6l-310.336 775.68a32 32 0 0 1-61.44-7.808L512 516.992l-391.424-52.736z"},null,-1),nU=[tU];function rU(n,e,t,r,i,s){return P(),R("svg",eU,nU)}var iU=F(JH,[["render",rU],["__file","position.vue"]]),sU={name:"Postcard"},oU={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},aU=b("path",{fill:"currentColor",d:"M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32H160zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96z"},null,-1),lU=b("path",{fill:"currentColor",d:"M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128zM288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32zm0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"},null,-1),cU=[aU,lU];function uU(n,e,t,r,i,s){return P(),R("svg",oU,cU)}var hU=F(sU,[["render",uU],["__file","postcard.vue"]]),dU={name:"Pouring"},fU={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},pU=b("path",{fill:"currentColor",d:"m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM224 800a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32z"},null,-1),mU=[pU];function _U(n,e,t,r,i,s){return P(),R("svg",fU,mU)}var gU=F(dU,[["render",_U],["__file","pouring.vue"]]),vU={name:"Present"},xU={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},yU=b("path",{fill:"currentColor",d:"M480 896V640H192v-64h288V320H192v576h288zm64 0h288V320H544v256h288v64H544v256zM128 256h768v672a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V256z"},null,-1),wU=b("path",{fill:"currentColor",d:"M96 256h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"},null,-1),MU=b("path",{fill:"currentColor",d:"M416 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"},null,-1),bU=b("path",{fill:"currentColor",d:"M608 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"},null,-1),SU=[yU,wU,MU,bU];function AU(n,e,t,r,i,s){return P(),R("svg",xU,SU)}var TU=F(vU,[["render",AU],["__file","present.vue"]]),EU={name:"PriceTag"},CU={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},LU=b("path",{fill:"currentColor",d:"M224 318.336V896h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"},null,-1),PU=b("path",{fill:"currentColor",d:"M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"},null,-1),RU=[LU,PU];function FU(n,e,t,r,i,s){return P(),R("svg",CU,RU)}var zU=F(EU,[["render",FU],["__file","price-tag.vue"]]),IU={name:"Printer"},DU={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},NU=b("path",{fill:"currentColor",d:"M256 768H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 746.432 64 741.248 64 727.04V379.072c0-42.816 4.48-58.304 12.8-73.984 8.384-15.616 20.672-27.904 36.288-36.288 15.68-8.32 31.168-12.8 73.984-12.8H256V64h512v192h68.928c42.816 0 58.304 4.48 73.984 12.8 15.616 8.384 27.904 20.672 36.288 36.288 8.32 15.68 12.8 31.168 12.8 73.984v347.904c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H768v192H256V768zm64-192v320h384V576H320zm-64 128V512h512v192h128V379.072c0-29.376-1.408-36.48-5.248-43.776a23.296 23.296 0 0 0-10.048-10.048c-7.232-3.84-14.4-5.248-43.776-5.248H187.072c-29.376 0-36.48 1.408-43.776 5.248a23.296 23.296 0 0 0-10.048 10.048c-3.84 7.232-5.248 14.4-5.248 43.776V704h128zm64-448h384V128H320v128zm-64 128h64v64h-64v-64zm128 0h64v64h-64v-64z"},null,-1),OU=[NU];function BU(n,e,t,r,i,s){return P(),R("svg",DU,OU)}var HU=F(IU,[["render",BU],["__file","printer.vue"]]),UU={name:"Promotion"},VU={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},kU=b("path",{fill:"currentColor",d:"m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z"},null,-1),GU=[kU];function WU(n,e,t,r,i,s){return P(),R("svg",VU,GU)}var $U=F(UU,[["render",WU],["__file","promotion.vue"]]),XU={name:"QuartzWatch"},jU={xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"enable-background":"new 0 0 1024 1024"},viewBox:"0 0 1024 1024"},qU=b("path",{fill:"currentColor",d:"M422.02 602.01v-.03c-6.68-5.99-14.35-8.83-23.01-8.51-8.67.32-16.17 3.66-22.5 10.02-6.33 6.36-9.5 13.7-9.5 22.02s3 15.82 8.99 22.5c8.68 8.68 19.02 11.35 31.01 8s19.49-10.85 22.5-22.5c3.01-11.65.51-22.15-7.49-31.49v-.01zM384 512c0-9.35-3-17.02-8.99-23.01-6-5.99-13.66-8.99-23.01-8.99-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.66-8.99 23.01s3 17.02 8.99 23.01c6 5.99 13.66 8.99 23.01 8.99 9.35 0 17.02-3 23.01-8.99 5.99-6 8.99-13.67 8.99-23.01zm6.53-82.49c11.65 3.01 22.15.51 31.49-7.49h.04c5.99-6.68 8.83-14.34 8.51-23.01-.32-8.67-3.66-16.16-10.02-22.5-6.36-6.33-13.7-9.5-22.02-9.5s-15.82 3-22.5 8.99c-8.68 8.69-11.35 19.02-8 31.01 3.35 11.99 10.85 19.49 22.5 22.5zm242.94 0c11.67-3.03 19.01-10.37 22.02-22.02 3.01-11.65.51-22.15-7.49-31.49h.01c-6.68-5.99-14.18-8.99-22.5-8.99s-15.66 3.16-22.02 9.5c-6.36 6.34-9.7 13.84-10.02 22.5-.32 8.66 2.52 16.33 8.51 23.01 9.32 8.02 19.82 10.52 31.49 7.49zM512 640c-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.66-8.99 23.01s3 17.02 8.99 23.01c6 5.99 13.67 8.99 23.01 8.99 9.35 0 17.02-3 23.01-8.99 5.99-6 8.99-13.66 8.99-23.01s-3-17.02-8.99-23.01c-6-5.99-13.66-8.99-23.01-8.99zm183.01-151.01c-6-5.99-13.66-8.99-23.01-8.99s-17.02 3-23.01 8.99c-5.99 6-8.99 13.66-8.99 23.01s3 17.02 8.99 23.01c6 5.99 13.66 8.99 23.01 8.99s17.02-3 23.01-8.99c5.99-6 8.99-13.67 8.99-23.01 0-9.35-3-17.02-8.99-23.01z"},null,-1),YU=b("path",{fill:"currentColor",d:"M832 512c-2-90.67-33.17-166.17-93.5-226.5-20.43-20.42-42.6-37.49-66.5-51.23V64H352v170.26c-23.9 13.74-46.07 30.81-66.5 51.24-60.33 60.33-91.49 135.83-93.5 226.5 2 90.67 33.17 166.17 93.5 226.5 20.43 20.43 42.6 37.5 66.5 51.24V960h320V789.74c23.9-13.74 46.07-30.81 66.5-51.24 60.33-60.34 91.49-135.83 93.5-226.5zM416 128h192v78.69c-29.85-9.03-61.85-13.93-96-14.69-34.15.75-66.15 5.65-96 14.68V128zm192 768H416v-78.68c29.85 9.03 61.85 13.93 96 14.68 34.15-.75 66.15-5.65 96-14.68V896zm-96-128c-72.66-2.01-132.99-27.01-180.99-75.01S258.01 584.66 256 512c2.01-72.66 27.01-132.99 75.01-180.99S439.34 258.01 512 256c72.66 2.01 132.99 27.01 180.99 75.01S765.99 439.34 768 512c-2.01 72.66-27.01 132.99-75.01 180.99S584.66 765.99 512 768z"},null,-1),QU=b("path",{fill:"currentColor",d:"M512 320c-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.66-8.99 23.01 0 9.35 3 17.02 8.99 23.01 6 5.99 13.67 8.99 23.01 8.99 9.35 0 17.02-3 23.01-8.99 5.99-6 8.99-13.66 8.99-23.01 0-9.35-3-17.02-8.99-23.01-6-5.99-13.66-8.99-23.01-8.99zm112.99 273.5c-8.66-.32-16.33 2.52-23.01 8.51-7.98 9.32-10.48 19.82-7.49 31.49s10.49 19.17 22.5 22.5 22.35.66 31.01-8v.04c5.99-6.68 8.99-14.18 8.99-22.5s-3.16-15.66-9.5-22.02-13.84-9.7-22.5-10.02z"},null,-1),KU=[qU,YU,QU];function ZU(n,e,t,r,i,s){return P(),R("svg",jU,KU)}var JU=F(XU,[["render",ZU],["__file","quartz-watch.vue"]]),eV={name:"QuestionFilled"},tV={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},nV=b("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"},null,-1),rV=[nV];function iV(n,e,t,r,i,s){return P(),R("svg",tV,rV)}var sV=F(eV,[["render",iV],["__file","question-filled.vue"]]),oV={name:"Rank"},aV={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},lV=b("path",{fill:"currentColor",d:"m186.496 544 41.408 41.344a32 32 0 1 1-45.248 45.312l-96-96a32 32 0 0 1 0-45.312l96-96a32 32 0 1 1 45.248 45.312L186.496 480h290.816V186.432l-41.472 41.472a32 32 0 1 1-45.248-45.184l96-96.128a32 32 0 0 1 45.312 0l96 96.064a32 32 0 0 1-45.248 45.184l-41.344-41.28V480H832l-41.344-41.344a32 32 0 0 1 45.248-45.312l96 96a32 32 0 0 1 0 45.312l-96 96a32 32 0 0 1-45.248-45.312L832 544H541.312v293.44l41.344-41.28a32 32 0 1 1 45.248 45.248l-96 96a32 32 0 0 1-45.312 0l-96-96a32 32 0 1 1 45.312-45.248l41.408 41.408V544H186.496z"},null,-1),cV=[lV];function uV(n,e,t,r,i,s){return P(),R("svg",aV,cV)}var hV=F(oV,[["render",uV],["__file","rank.vue"]]),dV={name:"ReadingLamp"},fV={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},pV=b("path",{fill:"currentColor",d:"M352 896h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm-44.672-768-99.52 448h608.384l-99.52-448H307.328zm-25.6-64h460.608a32 32 0 0 1 31.232 25.088l113.792 512A32 32 0 0 1 856.128 640H167.872a32 32 0 0 1-31.232-38.912l113.792-512A32 32 0 0 1 281.664 64z"},null,-1),mV=b("path",{fill:"currentColor",d:"M672 576q32 0 32 32v128q0 32-32 32t-32-32V608q0-32 32-32zm-192-.064h64V960h-64z"},null,-1),_V=[pV,mV];function gV(n,e,t,r,i,s){return P(),R("svg",fV,_V)}var vV=F(dV,[["render",gV],["__file","reading-lamp.vue"]]),xV={name:"Reading"},yV={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},wV=b("path",{fill:"currentColor",d:"m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72l384 54.848zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"},null,-1),MV=b("path",{fill:"currentColor",d:"M480 192h64v704h-64z"},null,-1),bV=[wV,MV];function SV(n,e,t,r,i,s){return P(),R("svg",yV,bV)}var AV=F(xV,[["render",SV],["__file","reading.vue"]]),TV={name:"RefreshLeft"},EV={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},CV=b("path",{fill:"currentColor",d:"M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"},null,-1),LV=[CV];function PV(n,e,t,r,i,s){return P(),R("svg",EV,LV)}var RV=F(TV,[["render",PV],["__file","refresh-left.vue"]]),FV={name:"RefreshRight"},zV={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},IV=b("path",{fill:"currentColor",d:"M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"},null,-1),DV=[IV];function NV(n,e,t,r,i,s){return P(),R("svg",zV,DV)}var OV=F(FV,[["render",NV],["__file","refresh-right.vue"]]),BV={name:"Refresh"},HV={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},UV=b("path",{fill:"currentColor",d:"M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"},null,-1),VV=[UV];function kV(n,e,t,r,i,s){return P(),R("svg",HV,VV)}var GV=F(BV,[["render",kV],["__file","refresh.vue"]]),WV={name:"Refrigerator"},$V={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},XV=b("path",{fill:"currentColor",d:"M256 448h512V160a32 32 0 0 0-32-32H288a32 32 0 0 0-32 32v288zm0 64v352a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V512H256zm32-448h448a96 96 0 0 1 96 96v704a96 96 0 0 1-96 96H288a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96zm32 224h64v96h-64v-96zm0 288h64v96h-64v-96z"},null,-1),jV=[XV];function qV(n,e,t,r,i,s){return P(),R("svg",$V,jV)}var YV=F(WV,[["render",qV],["__file","refrigerator.vue"]]),QV={name:"RemoveFilled"},KV={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},ZV=b("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zM288 512a38.4 38.4 0 0 0 38.4 38.4h371.2a38.4 38.4 0 0 0 0-76.8H326.4A38.4 38.4 0 0 0 288 512z"},null,-1),JV=[ZV];function ek(n,e,t,r,i,s){return P(),R("svg",KV,JV)}var tk=F(QV,[["render",ek],["__file","remove-filled.vue"]]),nk={name:"Remove"},rk={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},ik=b("path",{fill:"currentColor",d:"M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"},null,-1),sk=b("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),ok=[ik,sk];function ak(n,e,t,r,i,s){return P(),R("svg",rk,ok)}var lk=F(nk,[["render",ak],["__file","remove.vue"]]),ck={name:"Right"},uk={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},hk=b("path",{fill:"currentColor",d:"M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"},null,-1),dk=[hk];function fk(n,e,t,r,i,s){return P(),R("svg",uk,dk)}var pk=F(ck,[["render",fk],["__file","right.vue"]]),mk={name:"ScaleToOriginal"},_k={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},gk=b("path",{fill:"currentColor",d:"M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zM512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412zM512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512z"},null,-1),vk=[gk];function xk(n,e,t,r,i,s){return P(),R("svg",_k,vk)}var yk=F(mk,[["render",xk],["__file","scale-to-original.vue"]]),wk={name:"School"},Mk={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},bk=b("path",{fill:"currentColor",d:"M224 128v704h576V128H224zm-32-64h640a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"},null,-1),Sk=b("path",{fill:"currentColor",d:"M64 832h896v64H64zm256-640h128v96H320z"},null,-1),Ak=b("path",{fill:"currentColor",d:"M384 832h256v-64a128 128 0 1 0-256 0v64zm128-256a192 192 0 0 1 192 192v128H320V768a192 192 0 0 1 192-192zM320 384h128v96H320zm256-192h128v96H576zm0 192h128v96H576z"},null,-1),Tk=[bk,Sk,Ak];function Ek(n,e,t,r,i,s){return P(),R("svg",Mk,Tk)}var Ck=F(wk,[["render",Ek],["__file","school.vue"]]),Lk={name:"Scissor"},Pk={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Rk=b("path",{fill:"currentColor",d:"m512.064 578.368-106.88 152.768a160 160 0 1 1-23.36-78.208L472.96 522.56 196.864 128.256a32 32 0 1 1 52.48-36.736l393.024 561.344a160 160 0 1 1-23.36 78.208l-106.88-152.704zm54.4-189.248 208.384-297.6a32 32 0 0 1 52.48 36.736l-221.76 316.672-39.04-55.808zm-376.32 425.856a96 96 0 1 0 110.144-157.248 96 96 0 0 0-110.08 157.248zm643.84 0a96 96 0 1 0-110.08-157.248 96 96 0 0 0 110.08 157.248z"},null,-1),Fk=[Rk];function zk(n,e,t,r,i,s){return P(),R("svg",Pk,Fk)}var Ik=F(Lk,[["render",zk],["__file","scissor.vue"]]),Dk={name:"Search"},Nk={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Ok=b("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"},null,-1),Bk=[Ok];function Hk(n,e,t,r,i,s){return P(),R("svg",Nk,Bk)}var Uk=F(Dk,[["render",Hk],["__file","search.vue"]]),Vk={name:"Select"},kk={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Gk=b("path",{fill:"currentColor",d:"M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"},null,-1),Wk=[Gk];function $k(n,e,t,r,i,s){return P(),R("svg",kk,Wk)}var Xk=F(Vk,[["render",$k],["__file","select.vue"]]),jk={name:"Sell"},qk={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Yk=b("path",{fill:"currentColor",d:"M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 483.84L768 698.496V928a32 32 0 1 1-64 0V698.496l-73.344 73.344a32 32 0 1 1-45.248-45.248l128-128a32 32 0 0 1 45.248 0l128 128a32 32 0 1 1-45.248 45.248z"},null,-1),Qk=[Yk];function Kk(n,e,t,r,i,s){return P(),R("svg",qk,Qk)}var Zk=F(jk,[["render",Kk],["__file","sell.vue"]]),Jk={name:"SemiSelect"},eG={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},tG=b("path",{fill:"currentColor",d:"M128 448h768q64 0 64 64t-64 64H128q-64 0-64-64t64-64z"},null,-1),nG=[tG];function rG(n,e,t,r,i,s){return P(),R("svg",eG,nG)}var iG=F(Jk,[["render",rG],["__file","semi-select.vue"]]),sG={name:"Service"},oG={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},aG=b("path",{fill:"currentColor",d:"M864 409.6a192 192 0 0 1-37.888 349.44A256.064 256.064 0 0 1 576 960h-96a32 32 0 1 1 0-64h96a192.064 192.064 0 0 0 181.12-128H736a32 32 0 0 1-32-32V416a32 32 0 0 1 32-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 0 0-573.056 0A193.235 193.235 0 0 1 256 384h32a32 32 0 0 1 32 32v320a32 32 0 0 1-32 32h-32a192 192 0 0 1-96-358.4 352 352 0 0 1 704 0zM256 448a128 128 0 1 0 0 256V448zm640 128a128 128 0 0 0-128-128v256a128 128 0 0 0 128-128z"},null,-1),lG=[aG];function cG(n,e,t,r,i,s){return P(),R("svg",oG,lG)}var uG=F(sG,[["render",cG],["__file","service.vue"]]),hG={name:"SetUp"},dG={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},fG=b("path",{fill:"currentColor",d:"M224 160a64 64 0 0 0-64 64v576a64 64 0 0 0 64 64h576a64 64 0 0 0 64-64V224a64 64 0 0 0-64-64H224zm0-64h576a128 128 0 0 1 128 128v576a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V224A128 128 0 0 1 224 96z"},null,-1),pG=b("path",{fill:"currentColor",d:"M384 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"},null,-1),mG=b("path",{fill:"currentColor",d:"M480 320h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm160 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"},null,-1),_G=b("path",{fill:"currentColor",d:"M288 640h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"},null,-1),gG=[fG,pG,mG,_G];function vG(n,e,t,r,i,s){return P(),R("svg",dG,gG)}var xG=F(hG,[["render",vG],["__file","set-up.vue"]]),yG={name:"Setting"},wG={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},MG=b("path",{fill:"currentColor",d:"M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"},null,-1),bG=[MG];function SG(n,e,t,r,i,s){return P(),R("svg",wG,bG)}var AG=F(yG,[["render",SG],["__file","setting.vue"]]),TG={name:"Share"},EG={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},CG=b("path",{fill:"currentColor",d:"m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"},null,-1),LG=[CG];function PG(n,e,t,r,i,s){return P(),R("svg",EG,LG)}var RG=F(TG,[["render",PG],["__file","share.vue"]]),FG={name:"Ship"},zG={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},IG=b("path",{fill:"currentColor",d:"M512 386.88V448h405.568a32 32 0 0 1 30.72 40.768l-76.48 267.968A192 192 0 0 1 687.168 896H336.832a192 192 0 0 1-184.64-139.264L75.648 488.768A32 32 0 0 1 106.368 448H448V117.888a32 32 0 0 1 47.36-28.096l13.888 7.616L512 96v2.88l231.68 126.4a32 32 0 0 1-2.048 57.216L512 386.88zm0-70.272 144.768-65.792L512 171.84v144.768zM512 512H148.864l18.24 64H856.96l18.24-64H512zM185.408 640l28.352 99.2A128 128 0 0 0 336.832 832h350.336a128 128 0 0 0 123.072-92.8l28.352-99.2H185.408z"},null,-1),DG=[IG];function NG(n,e,t,r,i,s){return P(),R("svg",zG,DG)}var OG=F(FG,[["render",NG],["__file","ship.vue"]]),BG={name:"Shop"},HG={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},UG=b("path",{fill:"currentColor",d:"M704 704h64v192H256V704h64v64h384v-64zm188.544-152.192C894.528 559.616 896 567.616 896 576a96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0c0-8.384 1.408-16.384 3.392-24.192L192 128h640l60.544 423.808z"},null,-1),VG=[UG];function kG(n,e,t,r,i,s){return P(),R("svg",HG,VG)}var GG=F(BG,[["render",kG],["__file","shop.vue"]]),WG={name:"ShoppingBag"},$G={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},XG=b("path",{fill:"currentColor",d:"M704 320v96a32 32 0 0 1-32 32h-32V320H384v128h-32a32 32 0 0 1-32-32v-96H192v576h640V320H704zm-384-64a192 192 0 1 1 384 0h160a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32h160zm64 0h256a128 128 0 1 0-256 0z"},null,-1),jG=b("path",{fill:"currentColor",d:"M192 704h640v64H192z"},null,-1),qG=[XG,jG];function YG(n,e,t,r,i,s){return P(),R("svg",$G,qG)}var QG=F(WG,[["render",YG],["__file","shopping-bag.vue"]]),KG={name:"ShoppingCartFull"},ZG={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},JG=b("path",{fill:"currentColor",d:"M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"},null,-1),eW=b("path",{fill:"currentColor",d:"M699.648 256 608 145.984 516.352 256h183.296zm-140.8-151.04a64 64 0 0 1 98.304 0L836.352 320H379.648l179.2-215.04z"},null,-1),tW=[JG,eW];function nW(n,e,t,r,i,s){return P(),R("svg",ZG,tW)}var rW=F(KG,[["render",nW],["__file","shopping-cart-full.vue"]]),iW={name:"ShoppingCart"},sW={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},oW=b("path",{fill:"currentColor",d:"M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"},null,-1),aW=[oW];function lW(n,e,t,r,i,s){return P(),R("svg",sW,aW)}var cW=F(iW,[["render",lW],["__file","shopping-cart.vue"]]),uW={name:"ShoppingTrolley"},hW={xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"enable-background":"new 0 0 1024 1024"},viewBox:"0 0 1024 1024"},dW=b("path",{fill:"currentColor",d:"M368 833c-13.3 0-24.5 4.5-33.5 13.5S321 866.7 321 880s4.5 24.5 13.5 33.5 20.2 13.8 33.5 14.5c13.3-.7 24.5-5.5 33.5-14.5S415 893.3 415 880s-4.5-24.5-13.5-33.5S381.3 833 368 833zm439-193c7.4 0 13.8-2.2 19.5-6.5S836 623.3 838 616l112-448c2-10-.2-19.2-6.5-27.5S929 128 919 128H96c-9.3 0-17 3-23 9s-9 13.7-9 23 3 17 9 23 13.7 9 23 9h96v576h672c9.3 0 17-3 23-9s9-13.7 9-23-3-17-9-23-13.7-9-23-9H256v-64h551zM256 192h622l-96 384H256V192zm432 641c-13.3 0-24.5 4.5-33.5 13.5S641 866.7 641 880s4.5 24.5 13.5 33.5 20.2 13.8 33.5 14.5c13.3-.7 24.5-5.5 33.5-14.5S735 893.3 735 880s-4.5-24.5-13.5-33.5S701.3 833 688 833z"},null,-1),fW=[dW];function pW(n,e,t,r,i,s){return P(),R("svg",hW,fW)}var mW=F(uW,[["render",pW],["__file","shopping-trolley.vue"]]),_W={name:"Smoking"},gW={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},vW=b("path",{fill:"currentColor",d:"M256 576v128h640V576H256zm-32-64h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32z"},null,-1),xW=b("path",{fill:"currentColor",d:"M704 576h64v128h-64zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"},null,-1),yW=[vW,xW];function wW(n,e,t,r,i,s){return P(),R("svg",gW,yW)}var MW=F(_W,[["render",wW],["__file","smoking.vue"]]),bW={name:"Soccer"},SW={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},AW=b("path",{fill:"currentColor",d:"M418.496 871.04 152.256 604.8c-16.512 94.016-2.368 178.624 42.944 224 44.928 44.928 129.344 58.752 223.296 42.24zm72.32-18.176a573.056 573.056 0 0 0 224.832-137.216 573.12 573.12 0 0 0 137.216-224.832L533.888 171.84a578.56 578.56 0 0 0-227.52 138.496A567.68 567.68 0 0 0 170.432 532.48l320.384 320.384zM871.04 418.496c16.512-93.952 2.688-178.368-42.24-223.296-44.544-44.544-128.704-58.048-222.592-41.536L871.04 418.496zM149.952 874.048c-112.96-112.96-88.832-408.96 111.168-608.96C461.056 65.152 760.96 36.928 874.048 149.952c113.024 113.024 86.784 411.008-113.152 610.944-199.936 199.936-497.92 226.112-610.944 113.152zm452.544-497.792 22.656-22.656a32 32 0 0 1 45.248 45.248l-22.656 22.656 45.248 45.248A32 32 0 1 1 647.744 512l-45.248-45.248L557.248 512l45.248 45.248a32 32 0 1 1-45.248 45.248L512 557.248l-45.248 45.248L512 647.744a32 32 0 1 1-45.248 45.248l-45.248-45.248-22.656 22.656a32 32 0 1 1-45.248-45.248l22.656-22.656-45.248-45.248A32 32 0 1 1 376.256 512l45.248 45.248L466.752 512l-45.248-45.248a32 32 0 1 1 45.248-45.248L512 466.752l45.248-45.248L512 376.256a32 32 0 0 1 45.248-45.248l45.248 45.248z"},null,-1),TW=[AW];function EW(n,e,t,r,i,s){return P(),R("svg",SW,TW)}var CW=F(bW,[["render",EW],["__file","soccer.vue"]]),LW={name:"SoldOut"},PW={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},RW=b("path",{fill:"currentColor",d:"M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 476.16a32 32 0 1 1 45.248 45.184l-128 128a32 32 0 0 1-45.248 0l-128-128a32 32 0 1 1 45.248-45.248L704 837.504V608a32 32 0 1 1 64 0v229.504l73.408-73.408z"},null,-1),FW=[RW];function zW(n,e,t,r,i,s){return P(),R("svg",PW,FW)}var IW=F(LW,[["render",zW],["__file","sold-out.vue"]]),DW={name:"SortDown"},NW={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},OW=b("path",{fill:"currentColor",d:"M576 96v709.568L333.312 562.816A32 32 0 1 0 288 608l297.408 297.344A32 32 0 0 0 640 882.688V96a32 32 0 0 0-64 0z"},null,-1),BW=[OW];function HW(n,e,t,r,i,s){return P(),R("svg",NW,BW)}var UW=F(DW,[["render",HW],["__file","sort-down.vue"]]),VW={name:"SortUp"},kW={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},GW=b("path",{fill:"currentColor",d:"M384 141.248V928a32 32 0 1 0 64 0V218.56l242.688 242.688A32 32 0 1 0 736 416L438.592 118.656A32 32 0 0 0 384 141.248z"},null,-1),WW=[GW];function $W(n,e,t,r,i,s){return P(),R("svg",kW,WW)}var XW=F(VW,[["render",$W],["__file","sort-up.vue"]]),jW={name:"Sort"},qW={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},YW=b("path",{fill:"currentColor",d:"M384 96a32 32 0 0 1 64 0v786.752a32 32 0 0 1-54.592 22.656L95.936 608a32 32 0 0 1 0-45.312h.128a32 32 0 0 1 45.184 0L384 805.632V96zm192 45.248a32 32 0 0 1 54.592-22.592L928.064 416a32 32 0 0 1 0 45.312h-.128a32 32 0 0 1-45.184 0L640 218.496V928a32 32 0 1 1-64 0V141.248z"},null,-1),QW=[YW];function KW(n,e,t,r,i,s){return P(),R("svg",qW,QW)}var ZW=F(jW,[["render",KW],["__file","sort.vue"]]),JW={name:"Stamp"},e$={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},t$=b("path",{fill:"currentColor",d:"M624 475.968V640h144a128 128 0 0 1 128 128H128a128 128 0 0 1 128-128h144V475.968a192 192 0 1 1 224 0zM128 896v-64h768v64H128z"},null,-1),n$=[t$];function r$(n,e,t,r,i,s){return P(),R("svg",e$,n$)}var i$=F(JW,[["render",r$],["__file","stamp.vue"]]),s$={name:"StarFilled"},o$={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},a$=b("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"},null,-1),l$=[a$];function c$(n,e,t,r,i,s){return P(),R("svg",o$,l$)}var u$=F(s$,[["render",c$],["__file","star-filled.vue"]]),h$={name:"Star"},d$={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},f$=b("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72L512 747.84zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"},null,-1),p$=[f$];function m$(n,e,t,r,i,s){return P(),R("svg",d$,p$)}var _$=F(h$,[["render",m$],["__file","star.vue"]]),g$={name:"Stopwatch"},v$={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},x$=b("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),y$=b("path",{fill:"currentColor",d:"M672 234.88c-39.168 174.464-80 298.624-122.688 372.48-64 110.848-202.624 30.848-138.624-80C453.376 453.44 540.48 355.968 672 234.816z"},null,-1),w$=[x$,y$];function M$(n,e,t,r,i,s){return P(),R("svg",v$,w$)}var b$=F(g$,[["render",M$],["__file","stopwatch.vue"]]),S$={name:"SuccessFilled"},A$={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},T$=b("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"},null,-1),E$=[T$];function C$(n,e,t,r,i,s){return P(),R("svg",A$,E$)}var L$=F(S$,[["render",C$],["__file","success-filled.vue"]]),P$={name:"Sugar"},R$={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},F$=b("path",{fill:"currentColor",d:"m801.728 349.184 4.48 4.48a128 128 0 0 1 0 180.992L534.656 806.144a128 128 0 0 1-181.056 0l-4.48-4.48-19.392 109.696a64 64 0 0 1-108.288 34.176L78.464 802.56a64 64 0 0 1 34.176-108.288l109.76-19.328-4.544-4.544a128 128 0 0 1 0-181.056l271.488-271.488a128 128 0 0 1 181.056 0l4.48 4.48 19.392-109.504a64 64 0 0 1 108.352-34.048l142.592 143.04a64 64 0 0 1-34.24 108.16l-109.248 19.2zm-548.8 198.72h447.168v2.24l60.8-60.8a63.808 63.808 0 0 0 18.752-44.416h-426.88l-89.664 89.728a64.064 64.064 0 0 0-10.24 13.248zm0 64c2.752 4.736 6.144 9.152 10.176 13.248l135.744 135.744a64 64 0 0 0 90.496 0L638.4 611.904H252.928zm490.048-230.976L625.152 263.104a64 64 0 0 0-90.496 0L416.768 380.928h326.208zM123.712 757.312l142.976 142.976 24.32-137.6a25.6 25.6 0 0 0-29.696-29.632l-137.6 24.256zm633.6-633.344-24.32 137.472a25.6 25.6 0 0 0 29.632 29.632l137.28-24.064-142.656-143.04z"},null,-1),z$=[F$];function I$(n,e,t,r,i,s){return P(),R("svg",R$,z$)}var D$=F(P$,[["render",I$],["__file","sugar.vue"]]),N$={name:"SuitcaseLine"},O$={xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"enable-background":"new 0 0 1024 1024"},viewBox:"0 0 1024 1024"},B$=b("path",{fill:"currentColor",d:"M922.5 229.5c-24.32-24.34-54.49-36.84-90.5-37.5H704v-64c-.68-17.98-7.02-32.98-19.01-44.99S658.01 64.66 640 64H384c-17.98.68-32.98 7.02-44.99 19.01S320.66 110 320 128v64H192c-35.99.68-66.16 13.18-90.5 37.5C77.16 253.82 64.66 283.99 64 320v448c.68 35.99 13.18 66.16 37.5 90.5s54.49 36.84 90.5 37.5h640c35.99-.68 66.16-13.18 90.5-37.5s36.84-54.49 37.5-90.5V320c-.68-35.99-13.18-66.16-37.5-90.5zM384 128h256v64H384v-64zM256 832h-64c-17.98-.68-32.98-7.02-44.99-19.01S128.66 786.01 128 768V448h128v384zm448 0H320V448h384v384zm192-64c-.68 17.98-7.02 32.98-19.01 44.99S850.01 831.34 832 832h-64V448h128v320zm0-384H128v-64c.69-17.98 7.02-32.98 19.01-44.99S173.99 256.66 192 256h640c17.98.69 32.98 7.02 44.99 19.01S895.34 301.99 896 320v64z"},null,-1),H$=[B$];function U$(n,e,t,r,i,s){return P(),R("svg",O$,H$)}var V$=F(N$,[["render",U$],["__file","suitcase-line.vue"]]),k$={name:"Suitcase"},G$={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},W$=b("path",{fill:"currentColor",d:"M128 384h768v-64a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64v64zm0 64v320a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V448H128zm64-256h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"},null,-1),$$=b("path",{fill:"currentColor",d:"M384 128v64h256v-64H384zm0-64h256a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64z"},null,-1),X$=[W$,$$];function j$(n,e,t,r,i,s){return P(),R("svg",G$,X$)}var q$=F(k$,[["render",j$],["__file","suitcase.vue"]]),Y$={name:"Sunny"},Q$={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},K$=b("path",{fill:"currentColor",d:"M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z"},null,-1),Z$=[K$];function J$(n,e,t,r,i,s){return P(),R("svg",Q$,Z$)}var eX=F(Y$,[["render",J$],["__file","sunny.vue"]]),tX={name:"Sunrise"},nX={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},rX=b("path",{fill:"currentColor",d:"M32 768h960a32 32 0 1 1 0 64H32a32 32 0 1 1 0-64zm129.408-96a352 352 0 0 1 701.184 0h-64.32a288 288 0 0 0-572.544 0h-64.32zM512 128a32 32 0 0 1 32 32v96a32 32 0 0 1-64 0v-96a32 32 0 0 1 32-32zm407.296 168.704a32 32 0 0 1 0 45.248l-67.84 67.84a32 32 0 1 1-45.248-45.248l67.84-67.84a32 32 0 0 1 45.248 0zm-814.592 0a32 32 0 0 1 45.248 0l67.84 67.84a32 32 0 1 1-45.248 45.248l-67.84-67.84a32 32 0 0 1 0-45.248z"},null,-1),iX=[rX];function sX(n,e,t,r,i,s){return P(),R("svg",nX,iX)}var oX=F(tX,[["render",sX],["__file","sunrise.vue"]]),aX={name:"Sunset"},lX={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},cX=b("path",{fill:"currentColor",d:"M82.56 640a448 448 0 1 1 858.88 0h-67.2a384 384 0 1 0-724.288 0H82.56zM32 704h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm256 128h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"},null,-1),uX=[cX];function hX(n,e,t,r,i,s){return P(),R("svg",lX,uX)}var dX=F(aX,[["render",hX],["__file","sunset.vue"]]),fX={name:"SwitchButton"},pX={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},mX=b("path",{fill:"currentColor",d:"M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"},null,-1),_X=b("path",{fill:"currentColor",d:"M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z"},null,-1),gX=[mX,_X];function vX(n,e,t,r,i,s){return P(),R("svg",pX,gX)}var xX=F(fX,[["render",vX],["__file","switch-button.vue"]]),yX={name:"SwitchFilled"},wX={xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"enable-background":"new 0 0 1024 1024"},viewBox:"0 0 1024 1024"},MX=b("path",{fill:"currentColor",d:"M247.47 358.4v.04c.07 19.17 7.72 37.53 21.27 51.09s31.92 21.2 51.09 21.27c39.86 0 72.41-32.6 72.41-72.4s-32.6-72.36-72.41-72.36-72.36 32.55-72.36 72.36z"},null,-1),bX=b("path",{fill:"currentColor",d:"M492.38 128H324.7c-52.16 0-102.19 20.73-139.08 57.61a196.655 196.655 0 0 0-57.61 139.08V698.7c-.01 25.84 5.08 51.42 14.96 75.29s24.36 45.56 42.63 63.83 39.95 32.76 63.82 42.65a196.67 196.67 0 0 0 75.28 14.98h167.68c3.03 0 5.46-2.43 5.46-5.42V133.42c.6-2.99-1.83-5.42-5.46-5.42zm-56.11 705.88H324.7c-17.76.13-35.36-3.33-51.75-10.18s-31.22-16.94-43.61-29.67c-25.3-25.35-39.81-59.1-39.81-95.32V324.69c-.13-17.75 3.33-35.35 10.17-51.74a131.695 131.695 0 0 1 29.64-43.62c25.39-25.3 59.14-39.81 95.36-39.81h111.57v644.36zm402.12-647.67a196.655 196.655 0 0 0-139.08-57.61H580.48c-3.03 0-4.82 2.43-4.82 4.82v757.16c-.6 2.99 1.79 5.42 5.42 5.42h118.23a196.69 196.69 0 0 0 139.08-57.61A196.655 196.655 0 0 0 896 699.31V325.29a196.69 196.69 0 0 0-57.61-139.08zm-111.3 441.92c-42.83 0-77.82-34.99-77.82-77.82s34.98-77.82 77.82-77.82c42.83 0 77.82 34.99 77.82 77.82s-34.99 77.82-77.82 77.82z"},null,-1),SX=[MX,bX];function AX(n,e,t,r,i,s){return P(),R("svg",wX,SX)}var TX=F(yX,[["render",AX],["__file","switch-filled.vue"]]),EX={name:"Switch"},CX={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},LX=b("path",{fill:"currentColor",d:"M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32z"},null,-1),PX=[LX];function RX(n,e,t,r,i,s){return P(),R("svg",CX,PX)}var FX=F(EX,[["render",RX],["__file","switch.vue"]]),zX={name:"TakeawayBox"},IX={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},DX=b("path",{fill:"currentColor",d:"M832 384H192v448h640V384zM96 320h832V128H96v192zm800 64v480a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V384H64a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h896a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32h-64zM416 512h192a32 32 0 0 1 0 64H416a32 32 0 0 1 0-64z"},null,-1),NX=[DX];function OX(n,e,t,r,i,s){return P(),R("svg",IX,NX)}var BX=F(zX,[["render",OX],["__file","takeaway-box.vue"]]),HX={name:"Ticket"},UX={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},VX=b("path",{fill:"currentColor",d:"M640 832H64V640a128 128 0 1 0 0-256V192h576v160h64V192h256v192a128 128 0 1 0 0 256v192H704V672h-64v160zm0-416v192h64V416h-64z"},null,-1),kX=[VX];function GX(n,e,t,r,i,s){return P(),R("svg",UX,kX)}var WX=F(HX,[["render",GX],["__file","ticket.vue"]]),$X={name:"Tickets"},XX={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},jX=b("path",{fill:"currentColor",d:"M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h192v64H320v-64zm0 384h384v64H320v-64z"},null,-1),qX=[jX];function YX(n,e,t,r,i,s){return P(),R("svg",XX,qX)}var QX=F($X,[["render",YX],["__file","tickets.vue"]]),KX={name:"Timer"},ZX={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},JX=b("path",{fill:"currentColor",d:"M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"},null,-1),ej=b("path",{fill:"currentColor",d:"M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32z"},null,-1),tj=b("path",{fill:"currentColor",d:"M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96z"},null,-1),nj=[JX,ej,tj];function rj(n,e,t,r,i,s){return P(),R("svg",ZX,nj)}var ij=F(KX,[["render",rj],["__file","timer.vue"]]),sj={name:"ToiletPaper"},oj={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},aj=b("path",{fill:"currentColor",d:"M595.2 128H320a192 192 0 0 0-192 192v576h384V352c0-90.496 32.448-171.2 83.2-224zM736 64c123.712 0 224 128.96 224 288S859.712 640 736 640H576v320H64V320A256 256 0 0 1 320 64h416zM576 352v224h160c84.352 0 160-97.28 160-224s-75.648-224-160-224-160 97.28-160 224z"},null,-1),lj=b("path",{fill:"currentColor",d:"M736 448c-35.328 0-64-43.008-64-96s28.672-96 64-96 64 43.008 64 96-28.672 96-64 96z"},null,-1),cj=[aj,lj];function uj(n,e,t,r,i,s){return P(),R("svg",oj,cj)}var hj=F(sj,[["render",uj],["__file","toilet-paper.vue"]]),dj={name:"Tools"},fj={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},pj=b("path",{fill:"currentColor",d:"M764.416 254.72a351.68 351.68 0 0 1 86.336 149.184H960v192.064H850.752a351.68 351.68 0 0 1-86.336 149.312l54.72 94.72-166.272 96-54.592-94.72a352.64 352.64 0 0 1-172.48 0L371.136 936l-166.272-96 54.72-94.72a351.68 351.68 0 0 1-86.336-149.312H64v-192h109.248a351.68 351.68 0 0 1 86.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 0 1 172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 1 0-384 0 192 192 0 0 0 384 0z"},null,-1),mj=[pj];function _j(n,e,t,r,i,s){return P(),R("svg",fj,mj)}var gj=F(dj,[["render",_j],["__file","tools.vue"]]),vj={name:"TopLeft"},xj={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},yj=b("path",{fill:"currentColor",d:"M256 256h416a32 32 0 1 0 0-64H224a32 32 0 0 0-32 32v448a32 32 0 0 0 64 0V256z"},null,-1),wj=b("path",{fill:"currentColor",d:"M246.656 201.344a32 32 0 0 0-45.312 45.312l544 544a32 32 0 0 0 45.312-45.312l-544-544z"},null,-1),Mj=[yj,wj];function bj(n,e,t,r,i,s){return P(),R("svg",xj,Mj)}var Sj=F(vj,[["render",bj],["__file","top-left.vue"]]),Aj={name:"TopRight"},Tj={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Ej=b("path",{fill:"currentColor",d:"M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z"},null,-1),Cj=b("path",{fill:"currentColor",d:"M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z"},null,-1),Lj=[Ej,Cj];function Pj(n,e,t,r,i,s){return P(),R("svg",Tj,Lj)}var Rj=F(Aj,[["render",Pj],["__file","top-right.vue"]]),Fj={name:"Top"},zj={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Ij=b("path",{fill:"currentColor",d:"M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0 33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176 28.913 28.913 0 0 1-42.647 0l-219.618-233.23z"},null,-1),Dj=[Ij];function Nj(n,e,t,r,i,s){return P(),R("svg",zj,Dj)}var Oj=F(Fj,[["render",Nj],["__file","top.vue"]]),Bj={name:"TrendCharts"},Hj={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Uj=b("path",{fill:"currentColor",d:"M128 896V128h768v768H128zm291.712-327.296 128 102.4 180.16-201.792-47.744-42.624-139.84 156.608-128-102.4-180.16 201.792 47.744 42.624 139.84-156.608zM816 352a48 48 0 1 0-96 0 48 48 0 0 0 96 0z"},null,-1),Vj=[Uj];function kj(n,e,t,r,i,s){return P(),R("svg",Hj,Vj)}var Gj=F(Bj,[["render",kj],["__file","trend-charts.vue"]]),Wj={name:"TrophyBase"},$j={xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"enable-background":"new 0 0 1024 1024"},viewBox:"0 0 1024 1024"},Xj=b("path",{fill:"currentColor",d:"M918.4 201.6c-6.4-6.4-12.8-9.6-22.4-9.6H768V96c0-9.6-3.2-16-9.6-22.4C752 67.2 745.6 64 736 64H288c-9.6 0-16 3.2-22.4 9.6C259.2 80 256 86.4 256 96v96H128c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 16-9.6 22.4 3.2 108.8 25.6 185.6 64 224 34.4 34.4 77.56 55.65 127.65 61.99 10.91 20.44 24.78 39.25 41.95 56.41 40.86 40.86 91 65.47 150.4 71.9V768h-96c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4c6.4 6.4 12.8 9.6 22.4 9.6h256c9.6 0 16-3.2 22.4-9.6 6.4-6.4 9.6-12.8 9.6-22.4s-3.2-16-9.6-22.4c-6.4-6.4-12.8-9.6-22.4-9.6h-96V637.26c59.4-7.71 109.54-30.01 150.4-70.86 17.2-17.2 31.51-36.06 42.81-56.55 48.93-6.51 90.02-27.7 126.79-61.85 38.4-38.4 60.8-112 64-224 0-6.4-3.2-16-9.6-22.4zM256 438.4c-19.2-6.4-35.2-19.2-51.2-35.2-22.4-22.4-35.2-70.4-41.6-147.2H256v182.4zm390.4 80C608 553.6 566.4 576 512 576s-99.2-19.2-134.4-57.6C342.4 480 320 438.4 320 384V128h384v256c0 54.4-19.2 99.2-57.6 134.4zm172.8-115.2c-16 16-32 25.6-51.2 35.2V256h92.8c-6.4 76.8-19.2 124.8-41.6 147.2zM768 896H256c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4c6.4 6.4 12.8 9.6 22.4 9.6h512c9.6 0 16-3.2 22.4-9.6 6.4-6.4 9.6-12.8 9.6-22.4s-3.2-16-9.6-22.4c-6.4-6.4-12.8-9.6-22.4-9.6z"},null,-1),jj=[Xj];function qj(n,e,t,r,i,s){return P(),R("svg",$j,jj)}var Yj=F(Wj,[["render",qj],["__file","trophy-base.vue"]]),Qj={name:"Trophy"},Kj={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Zj=b("path",{fill:"currentColor",d:"M480 896V702.08A256.256 256.256 0 0 1 264.064 512h-32.64a96 96 0 0 1-91.968-68.416L93.632 290.88a76.8 76.8 0 0 1 73.6-98.88H256V96a32 32 0 0 1 32-32h448a32 32 0 0 1 32 32v96h88.768a76.8 76.8 0 0 1 73.6 98.88L884.48 443.52A96 96 0 0 1 792.576 512h-32.64A256.256 256.256 0 0 1 544 702.08V896h128a32 32 0 1 1 0 64H352a32 32 0 1 1 0-64h128zm224-448V128H320v320a192 192 0 1 0 384 0zm64 0h24.576a32 32 0 0 0 30.656-22.784l45.824-152.768A12.8 12.8 0 0 0 856.768 256H768v192zm-512 0V256h-88.768a12.8 12.8 0 0 0-12.288 16.448l45.824 152.768A32 32 0 0 0 231.424 448H256z"},null,-1),Jj=[Zj];function eq(n,e,t,r,i,s){return P(),R("svg",Kj,Jj)}var tq=F(Qj,[["render",eq],["__file","trophy.vue"]]),nq={name:"TurnOff"},rq={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},iq=b("path",{fill:"currentColor",d:"M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"},null,-1),sq=b("path",{fill:"currentColor",d:"M329.956 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"},null,-1),oq=[iq,sq];function aq(n,e,t,r,i,s){return P(),R("svg",rq,oq)}var lq=F(nq,[["render",aq],["__file","turn-off.vue"]]),cq={name:"Umbrella"},uq={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},hq=b("path",{fill:"currentColor",d:"M320 768a32 32 0 1 1 64 0 64 64 0 0 0 128 0V512H64a448 448 0 1 1 896 0H576v256a128 128 0 1 1-256 0zm570.688-320a384.128 384.128 0 0 0-757.376 0h757.376z"},null,-1),dq=[hq];function fq(n,e,t,r,i,s){return P(),R("svg",uq,dq)}var pq=F(cq,[["render",fq],["__file","umbrella.vue"]]),mq={name:"Unlock"},_q={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},gq=b("path",{fill:"currentColor",d:"M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"},null,-1),vq=b("path",{fill:"currentColor",d:"M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm178.304-295.296A192.064 192.064 0 0 0 320 320v64h352l96 38.4V448H256V320a256 256 0 0 1 493.76-95.104l-59.456 23.808z"},null,-1),xq=[gq,vq];function yq(n,e,t,r,i,s){return P(),R("svg",_q,xq)}var wq=F(mq,[["render",yq],["__file","unlock.vue"]]),Mq={name:"UploadFilled"},bq={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Sq=b("path",{fill:"currentColor",d:"M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"},null,-1),Aq=[Sq];function Tq(n,e,t,r,i,s){return P(),R("svg",bq,Aq)}var Eq=F(Mq,[["render",Tq],["__file","upload-filled.vue"]]),Cq={name:"Upload"},Lq={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Pq=b("path",{fill:"currentColor",d:"M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"},null,-1),Rq=[Pq];function Fq(n,e,t,r,i,s){return P(),R("svg",Lq,Rq)}var zq=F(Cq,[["render",Fq],["__file","upload.vue"]]),Iq={name:"UserFilled"},Dq={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Nq=b("path",{fill:"currentColor",d:"M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"},null,-1),Oq=[Nq];function Bq(n,e,t,r,i,s){return P(),R("svg",Dq,Oq)}var Hq=F(Iq,[["render",Bq],["__file","user-filled.vue"]]),Uq={name:"User"},Vq={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},kq=b("path",{fill:"currentColor",d:"M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"},null,-1),Gq=[kq];function Wq(n,e,t,r,i,s){return P(),R("svg",Vq,Gq)}var $q=F(Uq,[["render",Wq],["__file","user.vue"]]),Xq={name:"Van"},jq={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},qq=b("path",{fill:"currentColor",d:"M128.896 736H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v96h164.544a32 32 0 0 1 31.616 27.136l54.144 352A32 32 0 0 1 922.688 736h-91.52a144 144 0 1 1-286.272 0H415.104a144 144 0 1 1-286.272 0zm23.36-64a143.872 143.872 0 0 1 239.488 0H568.32c17.088-25.6 42.24-45.376 71.744-55.808V256H128v416h24.256zm655.488 0h77.632l-19.648-128H704v64.896A144 144 0 0 1 807.744 672zm48.128-192-14.72-96H704v96h151.872zM688 832a80 80 0 1 0 0-160 80 80 0 0 0 0 160zm-416 0a80 80 0 1 0 0-160 80 80 0 0 0 0 160z"},null,-1),Yq=[qq];function Qq(n,e,t,r,i,s){return P(),R("svg",jq,Yq)}var Kq=F(Xq,[["render",Qq],["__file","van.vue"]]),Zq={name:"VideoCameraFilled"},Jq={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},eY=b("path",{fill:"currentColor",d:"m768 576 192-64v320l-192-64v96a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V480a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v96zM192 768v64h384v-64H192zm192-480a160 160 0 0 1 320 0 160 160 0 0 1-320 0zm64 0a96 96 0 1 0 192.064-.064A96 96 0 0 0 448 288zm-320 32a128 128 0 1 1 256.064.064A128 128 0 0 1 128 320zm64 0a64 64 0 1 0 128 0 64 64 0 0 0-128 0z"},null,-1),tY=[eY];function nY(n,e,t,r,i,s){return P(),R("svg",Jq,tY)}var rY=F(Zq,[["render",nY],["__file","video-camera-filled.vue"]]),iY={name:"VideoCamera"},sY={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},oY=b("path",{fill:"currentColor",d:"M704 768V256H128v512h576zm64-416 192-96v512l-192-96v128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 71.552v176.896l128 64V359.552l-128 64zM192 320h192v64H192v-64z"},null,-1),aY=[oY];function lY(n,e,t,r,i,s){return P(),R("svg",sY,aY)}var cY=F(iY,[["render",lY],["__file","video-camera.vue"]]),uY={name:"VideoPause"},hY={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},dY=b("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z"},null,-1),fY=[dY];function pY(n,e,t,r,i,s){return P(),R("svg",hY,fY)}var mY=F(uY,[["render",pY],["__file","video-pause.vue"]]),_Y={name:"VideoPlay"},gY={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},vY=b("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"},null,-1),xY=[vY];function yY(n,e,t,r,i,s){return P(),R("svg",gY,xY)}var wY=F(_Y,[["render",yY],["__file","video-play.vue"]]),MY={name:"View"},bY={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},SY=b("path",{fill:"currentColor",d:"M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"},null,-1),AY=[SY];function TY(n,e,t,r,i,s){return P(),R("svg",bY,AY)}var EY=F(MY,[["render",TY],["__file","view.vue"]]),CY={name:"WalletFilled"},LY={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},PY=b("path",{fill:"currentColor",d:"M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160H688zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96zm-80-544 128 160H384l256-160z"},null,-1),RY=[PY];function FY(n,e,t,r,i,s){return P(),R("svg",LY,RY)}var zY=F(CY,[["render",FY],["__file","wallet-filled.vue"]]),IY={name:"Wallet"},DY={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},NY=b("path",{fill:"currentColor",d:"M640 288h-64V128H128v704h384v32a32 32 0 0 0 32 32H96a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h512a32 32 0 0 1 32 32v192z"},null,-1),OY=b("path",{fill:"currentColor",d:"M128 320v512h768V320H128zm-32-64h832a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32z"},null,-1),BY=b("path",{fill:"currentColor",d:"M704 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"},null,-1),HY=[NY,OY,BY];function UY(n,e,t,r,i,s){return P(),R("svg",DY,HY)}var VY=F(IY,[["render",UY],["__file","wallet.vue"]]),kY={name:"WarnTriangleFilled"},GY={xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"enable-background":"new 0 0 1024 1024"},viewBox:"0 0 1024 1024"},WY=b("path",{fill:"currentColor",d:"M928.99 755.83 574.6 203.25c-12.89-20.16-36.76-32.58-62.6-32.58s-49.71 12.43-62.6 32.58L95.01 755.83c-12.91 20.12-12.9 44.91.01 65.03 12.92 20.12 36.78 32.51 62.59 32.49h708.78c25.82.01 49.68-12.37 62.59-32.49 12.91-20.12 12.92-44.91.01-65.03zM554.67 768h-85.33v-85.33h85.33V768zm0-426.67v298.66h-85.33V341.32l85.33.01z"},null,-1),$Y=[WY];function XY(n,e,t,r,i,s){return P(),R("svg",GY,$Y)}var jY=F(kY,[["render",XY],["__file","warn-triangle-filled.vue"]]),qY={name:"WarningFilled"},YY={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},QY=b("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"},null,-1),KY=[QY];function ZY(n,e,t,r,i,s){return P(),R("svg",YY,KY)}var JY=F(qY,[["render",ZY],["__file","warning-filled.vue"]]),eQ={name:"Warning"},tQ={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},nQ=b("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"},null,-1),rQ=[nQ];function iQ(n,e,t,r,i,s){return P(),R("svg",tQ,rQ)}var sQ=F(eQ,[["render",iQ],["__file","warning.vue"]]),oQ={name:"Watch"},aQ={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},lQ=b("path",{fill:"currentColor",d:"M512 768a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"},null,-1),cQ=b("path",{fill:"currentColor",d:"M480 352a32 32 0 0 1 32 32v160a32 32 0 0 1-64 0V384a32 32 0 0 1 32-32z"},null,-1),uQ=b("path",{fill:"currentColor",d:"M480 512h128q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm128-256V128H416v128h-64V64h320v192h-64zM416 768v128h192V768h64v192H352V768h64z"},null,-1),hQ=[lQ,cQ,uQ];function dQ(n,e,t,r,i,s){return P(),R("svg",aQ,hQ)}var fQ=F(oQ,[["render",dQ],["__file","watch.vue"]]),pQ={name:"Watermelon"},mQ={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},_Q=b("path",{fill:"currentColor",d:"m683.072 600.32-43.648 162.816-61.824-16.512 53.248-198.528L576 493.248l-158.4 158.4-45.248-45.248 158.4-158.4-55.616-55.616-198.528 53.248-16.512-61.824 162.816-43.648L282.752 200A384 384 0 0 0 824 741.248L683.072 600.32zm231.552 141.056a448 448 0 1 1-632-632l632 632z"},null,-1),gQ=[_Q];function vQ(n,e,t,r,i,s){return P(),R("svg",mQ,gQ)}var xQ=F(pQ,[["render",vQ],["__file","watermelon.vue"]]),yQ={name:"WindPower"},wQ={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},MQ=b("path",{fill:"currentColor",d:"M160 64q32 0 32 32v832q0 32-32 32t-32-32V96q0-32 32-32zm416 354.624 128-11.584V168.96l-128-11.52v261.12zm-64 5.824V151.552L320 134.08V160h-64V64l616.704 56.064A96 96 0 0 1 960 215.68v144.64a96 96 0 0 1-87.296 95.616L256 512V224h64v217.92l192-17.472zm256-23.232 98.88-8.96A32 32 0 0 0 896 360.32V215.68a32 32 0 0 0-29.12-31.872l-98.88-8.96v226.368z"},null,-1),bQ=[MQ];function SQ(n,e,t,r,i,s){return P(),R("svg",wQ,bQ)}var AQ=F(yQ,[["render",SQ],["__file","wind-power.vue"]]),TQ={name:"ZoomIn"},EQ={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},CQ=b("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zm-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96z"},null,-1),LQ=[CQ];function PQ(n,e,t,r,i,s){return P(),R("svg",EQ,LQ)}var RQ=F(TQ,[["render",PQ],["__file","zoom-in.vue"]]),FQ={name:"ZoomOut"},zQ={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},IQ=b("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zM352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z"},null,-1),DQ=[IQ];function NQ(n,e,t,r,i,s){return P(),R("svg",zQ,DQ)}var OQ=F(FQ,[["render",NQ],["__file","zoom-out.vue"]]);const BQ=Object.freeze(Object.defineProperty({__proto__:null,AddLocation:h_,Aim:v_,AlarmClock:A_,Apple:R_,ArrowDown:G_,ArrowDownBold:O_,ArrowLeft:tg,ArrowLeftBold:Y_,ArrowRight:fg,ArrowRightBold:ag,ArrowUp:Ag,ArrowUpBold:xg,Avatar:Rg,Back:Bg,Baseball:$g,Basketball:Kg,Bell:hv,BellFilled:rv,Bicycle:gv,Bottom:Ov,BottomLeft:Sv,BottomRight:Rv,Bowl:Gv,Box:Kv,Briefcase:rx,Brush:mx,BrushFilled:cx,Burger:wx,Calendar:Ex,Camera:Hx,CameraFilled:zx,CaretBottom:$x,CaretLeft:Kx,CaretRight:ry,CaretTop:cy,Cellphone:my,ChatDotRound:My,ChatDotSquare:Ly,ChatLineRound:Ny,ChatLineSquare:Gy,ChatRound:Yy,ChatSquare:tw,Check:aw,Checked:fw,Cherry:xw,Chicken:Aw,ChromeFilled:zw,CircleCheck:Xw,CircleCheckFilled:Hw,CircleClose:sM,CircleCloseFilled:Zw,CirclePlus:xM,CirclePlusFilled:hM,Clock:EM,Close:HM,CloseBold:zM,Cloudy:$M,Coffee:rb,CoffeeCup:KM,Coin:hb,ColdDrink:gb,Collection:Pb,CollectionTag:bb,Comment:Nb,Compass:Gb,Connection:Qb,Coordinate:rS,CopyDocument:uS,Cpu:gS,CreditCard:SS,Crop:RS,DArrowLeft:OS,DArrowRight:GS,DCaret:YS,DataAnalysis:tA,DataBoard:cA,DataLine:mA,Delete:DA,DeleteFilled:wA,DeleteLocation:LA,Dessert:VA,Discount:qA,Dish:oT,DishDot:eT,Document:kT,DocumentAdd:dT,DocumentChecked:vT,DocumentCopy:ST,DocumentDelete:PT,DocumentRemove:NT,Download:qT,Drizzling:eE,Edit:fE,EditPen:oE,Eleme:AE,ElemeFilled:xE,ElementPlus:RE,Expand:OE,Failed:GE,Female:KE,Files:rC,Film:uC,Filter:_C,Finished:MC,FirstAidKit:LC,Flag:DC,Fold:VC,Folder:bL,FolderAdd:jC,FolderChecked:JC,FolderDelete:sL,FolderOpened:hL,FolderRemove:gL,Food:LL,Football:NL,ForkSpoon:kL,Fries:qL,FullScreen:eP,Goblet:SP,GobletFull:oP,GobletSquare:vP,GobletSquareFull:dP,GoldMedal:RP,Goods:GP,GoodsFilled:OP,Grape:YP,Grid:tR,Guide:lR,Handbag:pR,Headset:yR,Help:FR,HelpFilled:TR,Hide:HR,Histogram:$R,HomeFilled:KR,HotWater:rF,House:cF,IceCream:EF,IceCreamRound:mF,IceCreamSquare:wF,IceDrink:zF,IceTea:HF,InfoFilled:$F,Iphone:KF,Key:rz,KnifeFork:cz,Lightning:_z,Link:Mz,List:Cz,Loading:Iz,Location:tI,LocationFilled:Uz,LocationInformation:qz,Lock:lI,Lollipop:pI,MagicStick:yI,Magnet:TI,Male:II,Management:UI,MapLocation:jI,Medal:eD,Memo:lD,Menu:pD,Message:ED,MessageBox:yD,Mic:zD,Microphone:HD,MilkTea:$D,Minus:KD,Money:sN,Monitor:hN,Moon:SN,MoonNight:vN,More:NN,MoreFilled:PN,MostlyCloudy:kN,Mouse:YN,Mug:tO,Mute:mO,MuteNotification:lO,NoSmoking:wO,Notebook:CO,Notification:DO,Odometer:GO,OfficeBuilding:KO,Open:iB,Operation:uB,Opportunity:_B,Orange:MB,Paperclip:CB,PartlyCloudy:DB,Pear:VB,Phone:JB,PhoneFilled:jB,Picture:xH,PictureFilled:sH,PictureRounded:dH,PieChart:TH,Place:IH,Platform:UH,Plus:XH,Pointer:ZH,Position:iU,Postcard:hU,Pouring:gU,Present:TU,PriceTag:zU,Printer:HU,Promotion:$U,QuartzWatch:JU,QuestionFilled:sV,Rank:hV,Reading:AV,ReadingLamp:vV,Refresh:GV,RefreshLeft:RV,RefreshRight:OV,Refrigerator:YV,Remove:lk,RemoveFilled:tk,Right:pk,ScaleToOriginal:yk,School:Ck,Scissor:Ik,Search:Uk,Select:Xk,Sell:Zk,SemiSelect:iG,Service:uG,SetUp:xG,Setting:AG,Share:RG,Ship:OG,Shop:GG,ShoppingBag:QG,ShoppingCart:cW,ShoppingCartFull:rW,ShoppingTrolley:mW,Smoking:MW,Soccer:CW,SoldOut:IW,Sort:ZW,SortDown:UW,SortUp:XW,Stamp:i$,Star:_$,StarFilled:u$,Stopwatch:b$,SuccessFilled:L$,Sugar:D$,Suitcase:q$,SuitcaseLine:V$,Sunny:eX,Sunrise:oX,Sunset:dX,Switch:FX,SwitchButton:xX,SwitchFilled:TX,TakeawayBox:BX,Ticket:WX,Tickets:QX,Timer:ij,ToiletPaper:hj,Tools:gj,Top:Oj,TopLeft:Sj,TopRight:Rj,TrendCharts:Gj,Trophy:tq,TrophyBase:Yj,TurnOff:lq,Umbrella:pq,Unlock:wq,Upload:zq,UploadFilled:Eq,User:$q,UserFilled:Hq,Van:Kq,VideoCamera:cY,VideoCameraFilled:rY,VideoPause:mY,VideoPlay:wY,View:EY,Wallet:VY,WalletFilled:zY,WarnTriangleFilled:jY,Warning:sQ,WarningFilled:JY,Watch:fQ,Watermelon:xQ,WindPower:AQ,ZoomIn:RQ,ZoomOut:OQ},Symbol.toStringTag,{value:"Module"}));function Cu(n,e){return function(){return n.apply(e,arguments)}}const{toString:HQ}=Object.prototype,{getPrototypeOf:k4}=Object,W1=(n=>e=>{const t=HQ.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),on=n=>(n=n.toLowerCase(),e=>W1(e)===n),$1=n=>e=>typeof e===n,{isArray:ts}=Array,Mo=$1("undefined");function UQ(n){return n!==null&&!Mo(n)&&n.constructor!==null&&!Mo(n.constructor)&&Et(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Lu=on("ArrayBuffer");function VQ(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&Lu(n.buffer),e}const kQ=$1("string"),Et=$1("function"),Pu=$1("number"),X1=n=>n!==null&&typeof n=="object",GQ=n=>n===!0||n===!1,Qa=n=>{if(W1(n)!=="object")return!1;const e=k4(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},WQ=on("Date"),$Q=on("File"),XQ=on("Blob"),jQ=on("FileList"),qQ=n=>X1(n)&&Et(n.pipe),YQ=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||Et(n.append)&&((e=W1(n))==="formdata"||e==="object"&&Et(n.toString)&&n.toString()==="[object FormData]"))},QQ=on("URLSearchParams"),KQ=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Go(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let r,i;if(typeof n!="object"&&(n=[n]),ts(n))for(r=0,i=n.length;r<i;r++)e.call(null,n[r],r,n);else{const s=t?Object.getOwnPropertyNames(n):Object.keys(n),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,n[a],a,n)}}function Ru(n,e){e=e.toLowerCase();const t=Object.keys(n);let r=t.length,i;for(;r-- >0;)if(i=t[r],e===i.toLowerCase())return i;return null}const Fu=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),zu=n=>!Mo(n)&&n!==Fu;function Fl(){const{caseless:n}=zu(this)&&this||{},e={},t=(r,i)=>{const s=n&&Ru(e,i)||i;Qa(e[s])&&Qa(r)?e[s]=Fl(e[s],r):Qa(r)?e[s]=Fl({},r):ts(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Go(arguments[r],t);return e}const ZQ=(n,e,t,{allOwnKeys:r}={})=>(Go(e,(i,s)=>{t&&Et(i)?n[s]=Cu(i,t):n[s]=i},{allOwnKeys:r}),n),JQ=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),eK=(n,e,t,r)=>{n.prototype=Object.create(e.prototype,r),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},tK=(n,e,t,r)=>{let i,s,o;const a={};if(e=e||{},n==null)return e;do{for(i=Object.getOwnPropertyNames(n),s=i.length;s-- >0;)o=i[s],(!r||r(o,n,e))&&!a[o]&&(e[o]=n[o],a[o]=!0);n=t!==!1&&k4(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},nK=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const r=n.indexOf(e,t);return r!==-1&&r===t},rK=n=>{if(!n)return null;if(ts(n))return n;let e=n.length;if(!Pu(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},iK=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&k4(Uint8Array)),sK=(n,e)=>{const r=(n&&n[Symbol.iterator]).call(n);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(n,s[0],s[1])}},oK=(n,e)=>{let t;const r=[];for(;(t=n.exec(e))!==null;)r.push(t);return r},aK=on("HTMLFormElement"),lK=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,i){return r.toUpperCase()+i}),Yc=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),cK=on("RegExp"),Iu=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),r={};Go(t,(i,s)=>{e(i,s,n)!==!1&&(r[s]=i)}),Object.defineProperties(n,r)},uK=n=>{Iu(n,(e,t)=>{if(Et(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const r=n[t];if(Et(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},hK=(n,e)=>{const t={},r=i=>{i.forEach(s=>{t[s]=!0})};return ts(n)?r(n):r(String(n).split(e)),t},dK=()=>{},fK=(n,e)=>(n=+n,Number.isFinite(n)?n:e),b2="abcdefghijklmnopqrstuvwxyz",Qc="0123456789",Du={DIGIT:Qc,ALPHA:b2,ALPHA_DIGIT:b2+b2.toUpperCase()+Qc},pK=(n=16,e=Du.ALPHA_DIGIT)=>{let t="";const{length:r}=e;for(;n--;)t+=e[Math.random()*r|0];return t};function mK(n){return!!(n&&Et(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const _K=n=>{const e=new Array(10),t=(r,i)=>{if(X1(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=ts(r)?[]:{};return Go(r,(o,a)=>{const l=t(o,i+1);!Mo(l)&&(s[a]=l)}),e[i]=void 0,s}}return r};return t(n,0)},gK=on("AsyncFunction"),vK=n=>n&&(X1(n)||Et(n))&&Et(n.then)&&Et(n.catch),de={isArray:ts,isArrayBuffer:Lu,isBuffer:UQ,isFormData:YQ,isArrayBufferView:VQ,isString:kQ,isNumber:Pu,isBoolean:GQ,isObject:X1,isPlainObject:Qa,isUndefined:Mo,isDate:WQ,isFile:$Q,isBlob:XQ,isRegExp:cK,isFunction:Et,isStream:qQ,isURLSearchParams:QQ,isTypedArray:iK,isFileList:jQ,forEach:Go,merge:Fl,extend:ZQ,trim:KQ,stripBOM:JQ,inherits:eK,toFlatObject:tK,kindOf:W1,kindOfTest:on,endsWith:nK,toArray:rK,forEachEntry:sK,matchAll:oK,isHTMLForm:aK,hasOwnProperty:Yc,hasOwnProp:Yc,reduceDescriptors:Iu,freezeMethods:uK,toObjectSet:hK,toCamelCase:lK,noop:dK,toFiniteNumber:fK,findKey:Ru,global:Fu,isContextDefined:zu,ALPHABET:Du,generateString:pK,isSpecCompliantForm:mK,toJSONObject:_K,isAsyncFn:gK,isThenable:vK};function Ke(n,e,t,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),r&&(this.request=r),i&&(this.response=i)}de.inherits(Ke,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:de.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Nu=Ke.prototype,Ou={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{Ou[n]={value:n}});Object.defineProperties(Ke,Ou);Object.defineProperty(Nu,"isAxiosError",{value:!0});Ke.from=(n,e,t,r,i,s)=>{const o=Object.create(Nu);return de.toFlatObject(n,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),Ke.call(o,n.message,e,t,r,i),o.cause=n,o.name=n.name,s&&Object.assign(o,s),o};const xK=null;function zl(n){return de.isPlainObject(n)||de.isArray(n)}function Bu(n){return de.endsWith(n,"[]")?n.slice(0,-2):n}function Kc(n,e,t){return n?n.concat(e).map(function(i,s){return i=Bu(i),!t&&s?"["+i+"]":i}).join(t?".":""):e}function yK(n){return de.isArray(n)&&!n.some(zl)}const wK=de.toFlatObject(de,{},null,function(e){return/^is[A-Z]/.test(e)});function j1(n,e,t){if(!de.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=de.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,y){return!de.isUndefined(y[g])});const r=t.metaTokens,i=t.visitor||u,s=t.dots,o=t.indexes,l=(t.Blob||typeof Blob<"u"&&Blob)&&de.isSpecCompliantForm(e);if(!de.isFunction(i))throw new TypeError("visitor must be a function");function c(p){if(p===null)return"";if(de.isDate(p))return p.toISOString();if(!l&&de.isBlob(p))throw new Ke("Blob is not supported. Use a Buffer instead.");return de.isArrayBuffer(p)||de.isTypedArray(p)?l&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,g,y){let _=p;if(p&&!y&&typeof p=="object"){if(de.endsWith(g,"{}"))g=r?g:g.slice(0,-2),p=JSON.stringify(p);else if(de.isArray(p)&&yK(p)||(de.isFileList(p)||de.endsWith(g,"[]"))&&(_=de.toArray(p)))return g=Bu(g),_.forEach(function(x,v){!(de.isUndefined(x)||x===null)&&e.append(o===!0?Kc([g],v,s):o===null?g:g+"[]",c(x))}),!1}return zl(p)?!0:(e.append(Kc(y,g,s),c(p)),!1)}const h=[],d=Object.assign(wK,{defaultVisitor:u,convertValue:c,isVisitable:zl});function f(p,g){if(!de.isUndefined(p)){if(h.indexOf(p)!==-1)throw Error("Circular reference detected in "+g.join("."));h.push(p),de.forEach(p,function(_,m){(!(de.isUndefined(_)||_===null)&&i.call(e,_,de.isString(m)?m.trim():m,g,d))===!0&&f(_,g?g.concat(m):[m])}),h.pop()}}if(!de.isObject(n))throw new TypeError("data must be an object");return f(n),e}function Zc(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function G4(n,e){this._pairs=[],n&&j1(n,this,e)}const Hu=G4.prototype;Hu.append=function(e,t){this._pairs.push([e,t])};Hu.toString=function(e){const t=e?function(r){return e.call(this,r,Zc)}:Zc;return this._pairs.map(function(i){return t(i[0])+"="+t(i[1])},"").join("&")};function MK(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Uu(n,e,t){if(!e)return n;const r=t&&t.encode||MK,i=t&&t.serialize;let s;if(i?s=i(e,t):s=de.isURLSearchParams(e)?e.toString():new G4(e,t).toString(r),s){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+s}return n}class bK{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){de.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Jc=bK,Vu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},SK=typeof URLSearchParams<"u"?URLSearchParams:G4,AK=typeof FormData<"u"?FormData:null,TK=typeof Blob<"u"?Blob:null,EK=(()=>{let n;return typeof navigator<"u"&&((n=navigator.product)==="ReactNative"||n==="NativeScript"||n==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),CK=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Jt={isBrowser:!0,classes:{URLSearchParams:SK,FormData:AK,Blob:TK},isStandardBrowserEnv:EK,isStandardBrowserWebWorkerEnv:CK,protocols:["http","https","file","blob","url","data"]};function LK(n,e){return j1(n,new Jt.classes.URLSearchParams,Object.assign({visitor:function(t,r,i,s){return Jt.isNode&&de.isBuffer(t)?(this.append(r,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function PK(n){return de.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function RK(n){const e={},t=Object.keys(n);let r;const i=t.length;let s;for(r=0;r<i;r++)s=t[r],e[s]=n[s];return e}function ku(n){function e(t,r,i,s){let o=t[s++];const a=Number.isFinite(+o),l=s>=t.length;return o=!o&&de.isArray(i)?i.length:o,l?(de.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!de.isObject(i[o]))&&(i[o]=[]),e(t,r,i[o],s)&&de.isArray(i[o])&&(i[o]=RK(i[o])),!a)}if(de.isFormData(n)&&de.isFunction(n.entries)){const t={};return de.forEachEntry(n,(r,i)=>{e(PK(r),i,t,0)}),t}return null}const FK={"Content-Type":void 0};function zK(n,e,t){if(de.isString(n))try{return(e||JSON.parse)(n),de.trim(n)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(n)}const q1={transitional:Vu,adapter:["xhr","http"],transformRequest:[function(e,t){const r=t.getContentType()||"",i=r.indexOf("application/json")>-1,s=de.isObject(e);if(s&&de.isHTMLForm(e)&&(e=new FormData(e)),de.isFormData(e))return i&&i?JSON.stringify(ku(e)):e;if(de.isArrayBuffer(e)||de.isBuffer(e)||de.isStream(e)||de.isFile(e)||de.isBlob(e))return e;if(de.isArrayBufferView(e))return e.buffer;if(de.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return LK(e,this.formSerializer).toString();if((a=de.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return j1(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||i?(t.setContentType("application/json",!1),zK(e)):e}],transformResponse:[function(e){const t=this.transitional||q1.transitional,r=t&&t.forcedJSONParsing,i=this.responseType==="json";if(e&&de.isString(e)&&(r&&!this.responseType||i)){const o=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?Ke.from(a,Ke.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Jt.classes.FormData,Blob:Jt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};de.forEach(["delete","get","head"],function(e){q1.headers[e]={}});de.forEach(["post","put","patch"],function(e){q1.headers[e]=de.merge(FK)});const W4=q1,IK=de.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),DK=n=>{const e={};let t,r,i;return n&&n.split(`
`).forEach(function(o){i=o.indexOf(":"),t=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!t||e[t]&&IK[t])&&(t==="set-cookie"?e[t]?e[t].push(r):e[t]=[r]:e[t]=e[t]?e[t]+", "+r:r)}),e},e9=Symbol("internals");function Cs(n){return n&&String(n).trim().toLowerCase()}function Ka(n){return n===!1||n==null?n:de.isArray(n)?n.map(Ka):String(n)}function NK(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(n);)e[r[1]]=r[2];return e}const OK=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function S2(n,e,t,r,i){if(de.isFunction(r))return r.call(this,e,t);if(i&&(e=t),!!de.isString(e)){if(de.isString(r))return e.indexOf(r)!==-1;if(de.isRegExp(r))return r.test(e)}}function BK(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}function HK(n,e){const t=de.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(n,r+t,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class Y1{constructor(e){e&&this.set(e)}set(e,t,r){const i=this;function s(a,l,c){const u=Cs(l);if(!u)throw new Error("header name must be a non-empty string");const h=de.findKey(i,u);(!h||i[h]===void 0||c===!0||c===void 0&&i[h]!==!1)&&(i[h||l]=Ka(a))}const o=(a,l)=>de.forEach(a,(c,u)=>s(c,u,l));return de.isPlainObject(e)||e instanceof this.constructor?o(e,t):de.isString(e)&&(e=e.trim())&&!OK(e)?o(DK(e),t):e!=null&&s(t,e,r),this}get(e,t){if(e=Cs(e),e){const r=de.findKey(this,e);if(r){const i=this[r];if(!t)return i;if(t===!0)return NK(i);if(de.isFunction(t))return t.call(this,i,r);if(de.isRegExp(t))return t.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Cs(e),e){const r=de.findKey(this,e);return!!(r&&this[r]!==void 0&&(!t||S2(this,this[r],r,t)))}return!1}delete(e,t){const r=this;let i=!1;function s(o){if(o=Cs(o),o){const a=de.findKey(r,o);a&&(!t||S2(r,r[a],a,t))&&(delete r[a],i=!0)}}return de.isArray(e)?e.forEach(s):s(e),i}clear(e){const t=Object.keys(this);let r=t.length,i=!1;for(;r--;){const s=t[r];(!e||S2(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const t=this,r={};return de.forEach(this,(i,s)=>{const o=de.findKey(r,s);if(o){t[o]=Ka(i),delete t[s];return}const a=e?BK(s):String(s).trim();a!==s&&delete t[s],t[a]=Ka(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return de.forEach(this,(r,i)=>{r!=null&&r!==!1&&(t[i]=e&&de.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[e9]=this[e9]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=Cs(o);r[a]||(HK(i,o),r[a]=!0)}return de.isArray(e)?e.forEach(s):s(e),this}}Y1.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);de.freezeMethods(Y1.prototype);de.freezeMethods(Y1);const Mn=Y1;function A2(n,e){const t=this||W4,r=e||t,i=Mn.from(r.headers);let s=r.data;return de.forEach(n,function(a){s=a.call(t,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function Gu(n){return!!(n&&n.__CANCEL__)}function Wo(n,e,t){Ke.call(this,n??"canceled",Ke.ERR_CANCELED,e,t),this.name="CanceledError"}de.inherits(Wo,Ke,{__CANCEL__:!0});function UK(n,e,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?n(t):e(new Ke("Request failed with status code "+t.status,[Ke.ERR_BAD_REQUEST,Ke.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}const VK=Jt.isStandardBrowserEnv?function(){return{write:function(t,r,i,s,o,a){const l=[];l.push(t+"="+encodeURIComponent(r)),de.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),de.isString(s)&&l.push("path="+s),de.isString(o)&&l.push("domain="+o),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(t){const r=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function kK(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function GK(n,e){return e?n.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):n}function Wu(n,e){return n&&!kK(e)?GK(n,e):e}const WK=Jt.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let r;function i(s){let o=s;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return r=i(window.location.href),function(o){const a=de.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function $K(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function XK(n,e){n=n||10;const t=new Array(n),r=new Array(n);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=r[s];o||(o=c),t[i]=l,r[i]=c;let h=s,d=0;for(;h!==i;)d+=t[h++],h=h%n;if(i=(i+1)%n,i===s&&(s=(s+1)%n),c-o<e)return;const f=u&&c-u;return f?Math.round(d*1e3/f):void 0}}function t9(n,e){let t=0;const r=XK(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-t,l=r(a),c=s<=o;t=s;const u={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&c?(o-s)/l:void 0,event:i};u[e?"download":"upload"]=!0,n(u)}}const jK=typeof XMLHttpRequest<"u",qK=jK&&function(n){return new Promise(function(t,r){let i=n.data;const s=Mn.from(n.headers).normalize(),o=n.responseType;let a;function l(){n.cancelToken&&n.cancelToken.unsubscribe(a),n.signal&&n.signal.removeEventListener("abort",a)}de.isFormData(i)&&(Jt.isStandardBrowserEnv||Jt.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(n.auth){const f=n.auth.username||"",p=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";s.set("Authorization","Basic "+btoa(f+":"+p))}const u=Wu(n.baseURL,n.url);c.open(n.method.toUpperCase(),Uu(u,n.params,n.paramsSerializer),!0),c.timeout=n.timeout;function h(){if(!c)return;const f=Mn.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),g={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:f,config:n,request:c};UK(function(_){t(_),l()},function(_){r(_),l()},g),c=null}if("onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(h)},c.onabort=function(){c&&(r(new Ke("Request aborted",Ke.ECONNABORTED,n,c)),c=null)},c.onerror=function(){r(new Ke("Network Error",Ke.ERR_NETWORK,n,c)),c=null},c.ontimeout=function(){let p=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const g=n.transitional||Vu;n.timeoutErrorMessage&&(p=n.timeoutErrorMessage),r(new Ke(p,g.clarifyTimeoutError?Ke.ETIMEDOUT:Ke.ECONNABORTED,n,c)),c=null},Jt.isStandardBrowserEnv){const f=(n.withCredentials||WK(u))&&n.xsrfCookieName&&VK.read(n.xsrfCookieName);f&&s.set(n.xsrfHeaderName,f)}i===void 0&&s.setContentType(null),"setRequestHeader"in c&&de.forEach(s.toJSON(),function(p,g){c.setRequestHeader(g,p)}),de.isUndefined(n.withCredentials)||(c.withCredentials=!!n.withCredentials),o&&o!=="json"&&(c.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&c.addEventListener("progress",t9(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",t9(n.onUploadProgress)),(n.cancelToken||n.signal)&&(a=f=>{c&&(r(!f||f.type?new Wo(null,n,c):f),c.abort(),c=null)},n.cancelToken&&n.cancelToken.subscribe(a),n.signal&&(n.signal.aborted?a():n.signal.addEventListener("abort",a)));const d=$K(u);if(d&&Jt.protocols.indexOf(d)===-1){r(new Ke("Unsupported protocol "+d+":",Ke.ERR_BAD_REQUEST,n));return}c.send(i||null)})},Za={http:xK,xhr:qK};de.forEach(Za,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const YK={getAdapter:n=>{n=de.isArray(n)?n:[n];const{length:e}=n;let t,r;for(let i=0;i<e&&(t=n[i],!(r=de.isString(t)?Za[t.toLowerCase()]:t));i++);if(!r)throw r===!1?new Ke(`Adapter ${t} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(de.hasOwnProp(Za,t)?`Adapter '${t}' is not available in the build`:`Unknown adapter '${t}'`);if(!de.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Za};function T2(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Wo(null,n)}function n9(n){return T2(n),n.headers=Mn.from(n.headers),n.data=A2.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),YK.getAdapter(n.adapter||W4.adapter)(n).then(function(r){return T2(n),r.data=A2.call(n,n.transformResponse,r),r.headers=Mn.from(r.headers),r},function(r){return Gu(r)||(T2(n),r&&r.response&&(r.response.data=A2.call(n,n.transformResponse,r.response),r.response.headers=Mn.from(r.response.headers))),Promise.reject(r)})}const r9=n=>n instanceof Mn?n.toJSON():n;function Hi(n,e){e=e||{};const t={};function r(c,u,h){return de.isPlainObject(c)&&de.isPlainObject(u)?de.merge.call({caseless:h},c,u):de.isPlainObject(u)?de.merge({},u):de.isArray(u)?u.slice():u}function i(c,u,h){if(de.isUndefined(u)){if(!de.isUndefined(c))return r(void 0,c,h)}else return r(c,u,h)}function s(c,u){if(!de.isUndefined(u))return r(void 0,u)}function o(c,u){if(de.isUndefined(u)){if(!de.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function a(c,u,h){if(h in e)return r(c,u);if(h in n)return r(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u)=>i(r9(c),r9(u),!0)};return de.forEach(Object.keys(Object.assign({},n,e)),function(u){const h=l[u]||i,d=h(n[u],e[u],u);de.isUndefined(d)&&h!==a||(t[u]=d)}),t}const $u="1.4.0",$4={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{$4[n]=function(r){return typeof r===n||"a"+(e<1?"n ":" ")+n}});const i9={};$4.transitional=function(e,t,r){function i(s,o){return"[Axios v"+$u+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new Ke(i(o," has been removed"+(t?" in "+t:"")),Ke.ERR_DEPRECATED);return t&&!i9[o]&&(i9[o]=!0,console.warn(i(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,o,a):!0}};function QK(n,e,t){if(typeof n!="object")throw new Ke("options must be an object",Ke.ERR_BAD_OPTION_VALUE);const r=Object.keys(n);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=n[s],l=a===void 0||o(a,s,n);if(l!==!0)throw new Ke("option "+s+" must be "+l,Ke.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Ke("Unknown option "+s,Ke.ERR_BAD_OPTION)}}const Il={assertOptions:QK,validators:$4},In=Il.validators;class d1{constructor(e){this.defaults=e,this.interceptors={request:new Jc,response:new Jc}}request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Hi(this.defaults,t);const{transitional:r,paramsSerializer:i,headers:s}=t;r!==void 0&&Il.assertOptions(r,{silentJSONParsing:In.transitional(In.boolean),forcedJSONParsing:In.transitional(In.boolean),clarifyTimeoutError:In.transitional(In.boolean)},!1),i!=null&&(de.isFunction(i)?t.paramsSerializer={serialize:i}:Il.assertOptions(i,{encode:In.function,serialize:In.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o;o=s&&de.merge(s.common,s[t.method]),o&&de.forEach(["delete","get","head","post","put","patch","common"],p=>{delete s[p]}),t.headers=Mn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(t)===!1||(l=l&&g.synchronous,a.unshift(g.fulfilled,g.rejected))});const c=[];this.interceptors.response.forEach(function(g){c.push(g.fulfilled,g.rejected)});let u,h=0,d;if(!l){const p=[n9.bind(this),void 0];for(p.unshift.apply(p,a),p.push.apply(p,c),d=p.length,u=Promise.resolve(t);h<d;)u=u.then(p[h++],p[h++]);return u}d=a.length;let f=t;for(h=0;h<d;){const p=a[h++],g=a[h++];try{f=p(f)}catch(y){g.call(this,y);break}}try{u=n9.call(this,f)}catch(p){return Promise.reject(p)}for(h=0,d=c.length;h<d;)u=u.then(c[h++],c[h++]);return u}getUri(e){e=Hi(this.defaults,e);const t=Wu(e.baseURL,e.url);return Uu(t,e.params,e.paramsSerializer)}}de.forEach(["delete","get","head","options"],function(e){d1.prototype[e]=function(t,r){return this.request(Hi(r||{},{method:e,url:t,data:(r||{}).data}))}});de.forEach(["post","put","patch"],function(e){function t(r){return function(s,o,a){return this.request(Hi(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}d1.prototype[e]=t(),d1.prototype[e+"Form"]=t(!0)});const Ja=d1;class X4{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new Wo(s,o,a),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}static source(){let e;return{token:new X4(function(i){e=i}),cancel:e}}}const KK=X4;function ZK(n){return function(t){return n.apply(null,t)}}function JK(n){return de.isObject(n)&&n.isAxiosError===!0}const Dl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Dl).forEach(([n,e])=>{Dl[e]=n});const eZ=Dl;function Xu(n){const e=new Ja(n),t=Cu(Ja.prototype.request,e);return de.extend(t,Ja.prototype,e,{allOwnKeys:!0}),de.extend(t,e,null,{allOwnKeys:!0}),t.create=function(i){return Xu(Hi(n,i))},t}const B0=Xu(W4);B0.Axios=Ja;B0.CanceledError=Wo;B0.CancelToken=KK;B0.isCancel=Gu;B0.VERSION=$u;B0.toFormData=j1;B0.AxiosError=Ke;B0.Cancel=B0.CanceledError;B0.all=function(e){return Promise.all(e)};B0.spread=ZK;B0.isAxiosError=JK;B0.mergeConfig=Hi;B0.AxiosHeaders=Mn;B0.formToJSON=n=>ku(de.isHTMLForm(n)?new FormData(n):n);B0.HttpStatusCode=eZ;B0.default=B0;const tZ=B0;var nZ=!1;/*!
  * pinia v2.1.3
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let ju;const Q1=n=>ju=n,qu=Symbol();function Nl(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var to;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(to||(to={}));function rZ(){const n=d8(!0),e=n.run(()=>ko({}));let t=[],r=[];const i=I1({install(s){Q1(i),i._a=s,s.provide(qu,i),s.config.globalProperties.$pinia=i,r.forEach(o=>t.push(o)),r=[]},use(s){return!this._a&&!nZ?r.push(s):t.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return i}const Yu=()=>{};function s9(n,e,t,r=Yu){n.push(e);const i=()=>{const s=n.indexOf(e);s>-1&&(n.splice(s,1),r())};return!t&&f8()&&yf(i),i}function Jr(n,...e){n.slice().forEach(t=>{t(...e)})}const iZ=n=>n();function Ol(n,e){n instanceof Map&&e instanceof Map&&e.forEach((t,r)=>n.set(r,t)),n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],i=n[t];Nl(i)&&Nl(r)&&n.hasOwnProperty(t)&&!M0(r)&&!Kn(r)?n[t]=Ol(i,r):n[t]=r}return n}const sZ=Symbol();function oZ(n){return!Nl(n)||!n.hasOwnProperty(sZ)}const{assign:Xn}=Object;function aZ(n){return!!(M0(n)&&n.effect)}function lZ(n,e,t,r){const{state:i,actions:s,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=i?i():{});const u=Zf(t.state.value[n]);return Xn(u,s,Object.keys(o||{}).reduce((h,d)=>(h[d]=I1(vt(()=>{Q1(t);const f=t._s.get(n);return o[d].call(f,f)})),h),{}))}return l=Qu(n,c,e,t,r,!0),l}function Qu(n,e,t={},r,i,s){let o;const a=Xn({actions:{}},t),l={deep:!0};let c,u,h=[],d=[],f;const p=r.state.value[n];!s&&!p&&(r.state.value[n]={}),ko({});let g;function y(S){let N;c=u=!1,typeof S=="function"?(S(r.state.value[n]),N={type:to.patchFunction,storeId:n,events:f}):(Ol(r.state.value[n],S),N={type:to.patchObject,payload:S,storeId:n,events:f});const D=g=Symbol();T4().then(()=>{g===D&&(c=!0)}),u=!0,Jr(h,N,r.state.value[n])}const _=s?function(){const{state:N}=t,D=N?N():{};this.$patch(z=>{Xn(z,D)})}:Yu;function m(){o.stop(),h=[],d=[],r._s.delete(n)}function x(S,N){return function(){Q1(r);const D=Array.from(arguments),z=[],V=[];function H(U){z.push(U)}function $(U){V.push(U)}Jr(d,{args:D,name:S,store:M,after:H,onError:$});let K;try{K=N.apply(this&&this.$id===n?this:M,D)}catch(U){throw Jr(V,U),U}return K instanceof Promise?K.then(U=>(Jr(z,U),U)).catch(U=>(Jr(V,U),Promise.reject(U))):(Jr(z,K),K)}}const v={_p:r,$id:n,$onAction:s9.bind(null,d),$patch:y,$reset:_,$subscribe(S,N={}){const D=s9(h,S,N.detached,()=>z()),z=o.run(()=>Ze(()=>r.state.value[n],V=>{(N.flush==="sync"?u:c)&&S({storeId:n,type:to.direct,events:f},V)},Xn({},l,N)));return D},$dispose:m},M=es(v);r._s.set(n,M);const T=r._a&&r._a.runWithContext||iZ,w=r._e.run(()=>(o=d8(),T(()=>o.run(e))));for(const S in w){const N=w[S];if(M0(N)&&!aZ(N)||Kn(N))s||(p&&oZ(N)&&(M0(N)?N.value=p[S]:Ol(N,p[S])),r.state.value[n][S]=N);else if(typeof N=="function"){const D=x(S,N);w[S]=D,a.actions[S]=N}}return Xn(M,w),Xn(qe(M),w),Object.defineProperty(M,"$state",{get:()=>r.state.value[n],set:S=>{y(N=>{Xn(N,S)})}}),r._p.forEach(S=>{Xn(M,o.run(()=>S({store:M,app:r._a,pinia:r,options:a})))}),p&&s&&t.hydrate&&t.hydrate(M.$state,p),c=!0,u=!0,M}function cZ(n,e,t){let r,i;const s=typeof e=="function";typeof n=="string"?(r=n,i=s?t:e):(i=n,r=n.id);function o(a,l){const c=H7();return a=a||(c?tt(qu,null):null),a&&Q1(a),a=ju,a._s.has(r)||(s?Qu(r,e,i,a):lZ(r,i,a)),a._s.get(r)}return o.$id=r,o}const uZ=cZ("user",{state:()=>({token:"",userinfo:{state:1,id:0,userName:"",userType:"",token:"",binding:0,createTime:"",updateTime:"",email:""}}),getters:{getToken(){return this.token}},actions:{setToken(n){this.token=n},fillUserinfo(n){this.userinfo=n}},persist:{enabled:!0,strategies:[{key:"userinfo",storage:localStorage,paths:["token"]}]}}),j4=tZ.create({baseURL:"https://api.jqrjq.cn/",timeout:6e3});j4.interceptors.request.use(n=>{const e=uZ(),{token:t}=e;return n.headers.token=t,n},n=>Promise.reject(n));j4.interceptors.response.use(n=>n.data,n=>Promise.reject(n));const hZ=new Promise((n,e)=>{n(),e()});hZ.then(n=>{}).catch(n=>{});const o9=(n,e)=>{const t=n.storage||sessionStorage,r=n.key||e.$id;if(n.paths){const i=n.paths.reduce((s,o)=>(s[o]=e.$state[o],s),{});t.setItem(r,JSON.stringify(i))}else t.setItem(r,JSON.stringify(e.$state))};var dZ=({options:n,store:e})=>{var t,r,i,s;if((t=n.persist)!=null&&t.enabled){const o=[{key:e.$id,storage:sessionStorage}],a=(i=(r=n.persist)==null?void 0:r.strategies)!=null&&i.length?(s=n.persist)==null?void 0:s.strategies:o;a.forEach(l=>{const c=l.storage||sessionStorage,u=l.key||e.$id,h=c.getItem(u);h&&(e.$patch(JSON.parse(h)),o9(l,e))}),e.$subscribe(()=>{a.forEach(l=>{o9(l,e)})})}};const Ku=rZ();Ku.use(dZ);/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zu="134",ei={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fZ=0,a9=1,pZ=2,Ju=1,mZ=2,Xs=3,Ui=0,F0=1,or=2,e5=1,j0=0,no=1,Bl=2,l9=3,c9=4,t5=5,Yn=100,_Z=101,gZ=102,u9=103,h9=104,Hl=200,vZ=201,xZ=202,yZ=203,n5=204,r5=205,i5=206,wZ=207,s5=208,MZ=209,bZ=210,SZ=0,AZ=1,TZ=2,Ul=3,EZ=4,CZ=5,LZ=6,PZ=7,K1=0,RZ=1,FZ=2,Vr=0,zZ=1,IZ=2,DZ=3,NZ=4,OZ=5,Ai=300,ns=301,$o=302,f1=303,Vl=304,Z1=306,q4=307,nn=1e3,g0=1001,p1=1002,o0=1003,kl=1004,Gl=1005,a0=1006,o5=1007,$r=1008,ar=1009,BZ=1010,HZ=1011,bo=1012,UZ=1013,e1=1014,Mt=1015,Jn=1016,VZ=1017,kZ=1018,GZ=1019,ro=1020,WZ=1021,en=1022,u0=1023,$Z=1024,XZ=1025,jZ=u0,zi=1026,So=1027,qZ=1028,YZ=1029,QZ=1030,KZ=1031,ZZ=1032,JZ=1033,d9=33776,f9=33777,p9=33778,m9=33779,_9=35840,g9=35841,v9=35842,x9=35843,eJ=36196,y9=37492,w9=37496,tJ=37808,nJ=37809,rJ=37810,iJ=37811,sJ=37812,oJ=37813,aJ=37814,lJ=37815,cJ=37816,uJ=37817,hJ=37818,dJ=37819,fJ=37820,pJ=37821,mJ=36492,_J=37840,gJ=37841,vJ=37842,xJ=37843,yJ=37844,wJ=37845,MJ=37846,bJ=37847,SJ=37848,AJ=37849,TJ=37850,EJ=37851,CJ=37852,LJ=37853,PJ=2200,RJ=2201,FJ=2202,Ao=2300,Vi=2301,E2=2302,Ti=2400,Ei=2401,m1=2402,Y4=2500,a5=2501,zJ=0,IJ=1,l5=2,nt=3e3,ut=3001,Q4=3007,K4=3002,DJ=3003,c5=3004,u5=3005,h5=3006,NJ=3200,d5=3201,Xr=0,OJ=1,C2=7680,BJ=519,To=35044,_1=35048,M9="300 es";class dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}let aa=1234567;const io=Math.PI/180,Eo=180/Math.PI,X0=[];for(let n=0;n<256;n++)X0[n]=(n<16?"0":"")+n.toString(16);const HJ=typeof crypto<"u"&&"randomUUID"in crypto;function Ct(){if(HJ)return crypto.randomUUID().toUpperCase();const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(X0[n&255]+X0[n>>8&255]+X0[n>>16&255]+X0[n>>24&255]+"-"+X0[e&255]+X0[e>>8&255]+"-"+X0[e>>16&15|64]+X0[e>>24&255]+"-"+X0[t&63|128]+X0[t>>8&255]+"-"+X0[t>>16&255]+X0[t>>24&255]+X0[r&255]+X0[r>>8&255]+X0[r>>16&255]+X0[r>>24&255]).toUpperCase()}function K0(n,e,t){return Math.max(e,Math.min(t,n))}function Z4(n,e){return(n%e+e)%e}function UJ(n,e,t,r,i){return r+(n-e)*(i-r)/(t-e)}function VJ(n,e,t){return n!==e?(t-n)/(e-n):0}function so(n,e,t){return(1-t)*n+t*e}function kJ(n,e,t,r){return so(n,e,1-Math.exp(-t*r))}function GJ(n,e=1){return e-Math.abs(Z4(n,e*2)-e)}function WJ(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $J(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function XJ(n,e){return n+Math.floor(Math.random()*(e-n+1))}function jJ(n,e){return n+Math.random()*(e-n)}function qJ(n){return n*(.5-Math.random())}function YJ(n){return n!==void 0&&(aa=n%2147483647),aa=aa*16807%2147483647,(aa-1)/2147483646}function QJ(n){return n*io}function KJ(n){return n*Eo}function Wl(n){return(n&n-1)===0&&n!==0}function f5(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function p5(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ZJ(n,e,t,r,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+r)/2),u=o((e+r)/2),h=s((e-r)/2),d=o((e-r)/2),f=s((r-e)/2),p=o((r-e)/2);switch(i){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}var bt=Object.freeze({__proto__:null,DEG2RAD:io,RAD2DEG:Eo,generateUUID:Ct,clamp:K0,euclideanModulo:Z4,mapLinear:UJ,inverseLerp:VJ,lerp:so,damp:kJ,pingpong:GJ,smoothstep:WJ,smootherstep:$J,randInt:XJ,randFloat:jJ,randFloatSpread:qJ,seededRandom:YJ,degToRad:QJ,radToDeg:KJ,isPowerOfTwo:Wl,ceilPowerOfTwo:f5,floorPowerOfTwo:p5,setQuaternionFromProperEuler:ZJ});class ie{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6],this.y=i[1]*t+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,r){return r!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*r-o*i+e.x,this.y=s*i+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}ie.prototype.isVector2=!0;class G0{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,r,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=r,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,s=this.elements,o=r[0],a=r[3],l=r[6],c=r[1],u=r[4],h=r[7],d=r[2],f=r[5],p=r[8],g=i[0],y=i[3],_=i[6],m=i[1],x=i[4],v=i[7],M=i[2],T=i[5],w=i[8];return s[0]=o*g+a*m+l*M,s[3]=o*y+a*x+l*T,s[6]=o*_+a*v+l*w,s[1]=c*g+u*m+h*M,s[4]=c*y+u*x+h*T,s[7]=c*_+u*v+h*w,s[2]=d*g+f*m+p*M,s[5]=d*y+f*x+p*T,s[8]=d*_+f*v+p*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-r*s*u+r*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,p=t*h+r*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return e[0]=h*g,e[1]=(i*c-u*r)*g,e[2]=(a*r-i*o)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=f*g,e[7]=(r*l-c*t)*g,e[8]=(o*t-r*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(r*l,r*c,-r*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=t,r[4]*=t,r[7]*=t,this}rotate(e){const t=Math.cos(e),r=Math.sin(e),i=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*s+r*l,i[3]=t*o+r*c,i[6]=t*a+r*u,i[1]=-r*s+t*l,i[4]=-r*o+t*c,i[7]=-r*a+t*u,this}translate(e,t){const r=this.elements;return r[0]+=e*r[2],r[3]+=e*r[5],r[6]+=e*r[8],r[1]+=t*r[2],r[4]+=t*r[5],r[7]+=t*r[8],this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<9;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}G0.prototype.isMatrix3=!0;function m5(n){if(n.length===0)return-1/0;let e=n[0];for(let t=1,r=n.length;t<r;++t)n[t]>e&&(e=n[t]);return e}function J1(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function b9(n,e=0){let t=3735928559^e,r=1103547991^e;for(let i=0,s;i<n.length;i++)s=n.charCodeAt(i),t=Math.imul(t^s,2654435761),r=Math.imul(r^s,1597334677);return t=Math.imul(t^t>>>16,2246822507)^Math.imul(r^r>>>13,3266489909),r=Math.imul(r^r>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),4294967296*(2097151&r)+(t>>>0)}let ni;class rs{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ni===void 0&&(ni=J1("canvas")),ni.width=e.width,ni.height=e.height;const r=ni.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=ni}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let JJ=0,P0=class $l extends dr{constructor(e=$l.DEFAULT_IMAGE,t=$l.DEFAULT_MAPPING,r=g0,i=g0,s=a0,o=$r,a=u0,l=ar,c=1,u=nt){super(),Object.defineProperty(this,"id",{value:JJ++}),this.uuid=Ct(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=r,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new G0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=Ct()),!t&&e.images[i.uuid]===void 0){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(L2(i[o].image)):s.push(L2(i[o]))}else s=L2(i);e.images[i.uuid]={uuid:i.uuid,url:s}}r.image=i.uuid}return JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ai)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nn:e.x=e.x-Math.floor(e.x);break;case g0:e.x=e.x<0?0:1;break;case p1:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nn:e.y=e.y-Math.floor(e.y);break;case g0:e.y=e.y<0?0:1;break;case p1:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}};P0.DEFAULT_IMAGE=void 0;P0.DEFAULT_MAPPING=Ai;P0.prototype.isTexture=!0;function L2(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rs.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class t0{constructor(e=0,t=0,r=0,i=1){this.x=e,this.y=t,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*r+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*r+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*r+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],g=l[2],y=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(p-y)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(p+y)<.1&&Math.abs(c+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(f+1)/2,M=(_+1)/2,T=(u+d)/4,w=(h+g)/4,S=(p+y)/4;return x>v&&x>M?x<.01?(r=0,i=.707106781,s=.707106781):(r=Math.sqrt(x),i=T/r,s=w/r):v>M?v<.01?(r=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),r=T/i,s=S/i):M<.01?(r=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),r=w/s,i=S/s),this.set(r,i,s,t),this}let m=Math.sqrt((y-p)*(y-p)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(m)<.001&&(m=1),this.x=(y-p)/m,this.y=(h-g)/m,this.z=(d-u)/m,this.w=Math.acos((c+f+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,r){return r!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}t0.prototype.isVector4=!0;class z0 extends dr{constructor(e,t,r={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new t0(0,0,e,t),this.scissorTest=!1,this.viewport=new t0(0,0,e,t),this.texture=new P0(void 0,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:a0,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}z0.prototype.isWebGLRenderTarget=!0;class eee extends z0{constructor(e,t,r){super(e,t);const i=this.texture;this.texture=[];for(let s=0;s<r;s++)this.texture[s]=i.clone()}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=r;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,r=e.texture.length;t<r;t++)this.texture[t]=e.texture[t].clone();return this}}eee.prototype.isWebGLMultipleRenderTargets=!0;class _5 extends z0{constructor(e,t,r){super(e,t,r),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}_5.prototype.isWebGLMultisampleRenderTarget=!0;class C0{constructor(e=0,t=0,r=0,i=1){this._x=e,this._y=t,this._z=r,this._w=i}static slerp(e,t,r,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),r.slerpQuaternions(e,t,i)}static slerpFlat(e,t,r,i,s,o,a){let l=r[i+0],c=r[i+1],u=r[i+2],h=r[i+3];const d=s[o+0],f=s[o+1],p=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=g;return}if(h!==g||l!==d||c!==f||u!==p){let y=1-a;const _=l*d+c*f+u*p+h*g,m=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const M=Math.sqrt(x),T=Math.atan2(M,_*m);y=Math.sin(y*T)/M,a=Math.sin(a*T)/M}const v=a*m;if(l=l*y+d*v,c=c*y+f*v,u=u*y+p*v,h=h*y+g*v,y===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,r,i,s,o){const a=r[i],l=r[i+1],c=r[i+2],u=r[i+3],h=s[o],d=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const r=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(r/2),u=a(i/2),h=a(s/2),d=l(r/2),f=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=r+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(r>a&&r>h){const f=2*Math.sqrt(1+r-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-r-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-r-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(K0(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-r*c,this._z=s*u+o*c+r*l-i*a,this._w=o*u-r*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+r*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=r,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*r+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=r*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,r){this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),r*Math.sin(s),r*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}C0.prototype.isQuaternion=!0;class I{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(S9.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(S9.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*r+s[6]*i,this.y=s[1]*t+s[4]*r+s[7]*i,this.z=s[2]*t+s[5]*r+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*r+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*r+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*r+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*r+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,r=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*r,u=l*r+a*t-s*i,h=l*i+s*r-o*t,d=-s*t-o*r-a*i;return this.x=c*l+d*-s+u*-a-h*-o,this.y=u*l+d*-o+h*-s-c*-a,this.z=h*l+d*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*i,this.y=s[1]*t+s[5]*r+s[9]*i,this.z=s[2]*t+s[6]*r+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-r*l,this.z=r*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return P2.copy(this).projectOnVector(e),this.sub(P2)}reflect(e){return this.sub(P2.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(K0(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return t*t+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const i=Math.sin(t)*e;return this.x=i*Math.sin(r),this.y=Math.cos(t)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,r){return r!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}I.prototype.isVector3=!0;const P2=new I,S9=new C0;class Ft{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,r=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<r&&(r=h),d<i&&(i=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,r,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,r=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<r&&(r=h),d<i&&(i=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,r,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ls.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),R2.copy(t.boundingBox),R2.applyMatrix4(e.matrixWorld),this.union(R2));const r=e.children;for(let i=0,s=r.length;i<s;i++)this.expandByObject(r[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ls),Ls.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ps),la.subVectors(this.max,Ps),ri.subVectors(e.a,Ps),ii.subVectors(e.b,Ps),si.subVectors(e.c,Ps),Dn.subVectors(ii,ri),Nn.subVectors(si,ii),Er.subVectors(ri,si);let t=[0,-Dn.z,Dn.y,0,-Nn.z,Nn.y,0,-Er.z,Er.y,Dn.z,0,-Dn.x,Nn.z,0,-Nn.x,Er.z,0,-Er.x,-Dn.y,Dn.x,0,-Nn.y,Nn.x,0,-Er.y,Er.x,0];return!F2(t,ri,ii,si,la)||(t=[1,0,0,0,1,0,0,0,1],!F2(t,ri,ii,si,la))?!1:(ca.crossVectors(Dn,Nn),t=[ca.x,ca.y,ca.z],F2(t,ri,ii,si,la))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ls.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ls).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Ft.prototype.isBox3=!0;const dn=[new I,new I,new I,new I,new I,new I,new I,new I],Ls=new I,R2=new Ft,ri=new I,ii=new I,si=new I,Dn=new I,Nn=new I,Er=new I,Ps=new I,la=new I,ca=new I,Cr=new I;function F2(n,e,t,r,i){for(let s=0,o=n.length-3;s<=o;s+=3){Cr.fromArray(n,s);const a=i.x*Math.abs(Cr.x)+i.y*Math.abs(Cr.y)+i.z*Math.abs(Cr.z),l=e.dot(Cr),c=t.dot(Cr),u=r.dot(Cr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const tee=new Ft,A9=new I,z2=new I,I2=new I;let jr=class{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):tee.setFromPoints(e).getCenter(r);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,r.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){I2.subVectors(e,this.center);const t=I2.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.add(I2.multiplyScalar(i/r)),this.radius+=i}return this}union(e){return z2.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(A9.copy(e.center).add(z2)),this.expandByPoint(A9.copy(e.center).sub(z2)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const fn=new I,D2=new I,ua=new I,On=new I,N2=new I,ha=new I,O2=new I;class qr{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(r).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.direction).multiplyScalar(t).add(this.origin),fn.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){D2.copy(e).add(t).multiplyScalar(.5),ua.copy(t).sub(e).normalize(),On.copy(this.origin).sub(D2);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ua),a=On.dot(this.direction),l=-On.dot(ua),c=On.lengthSq(),u=Math.abs(1-o*o);let h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=s*u,h>=0)if(d>=-p)if(d<=p){const g=1/u;h*=g,d*=g,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return r&&r.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(ua).multiplyScalar(d).add(D2),f}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const r=fn.dot(this.direction),i=fn.dot(fn)-r*r,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=r-o,l=r+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(r=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(r=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),r>o||s>i||((s>r||r!==r)&&(r=s),(o<i||i!==i)&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),r>l||a>i)||((a>r||r!==r)&&(r=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,r,i,s){N2.subVectors(t,e),ha.subVectors(r,e),O2.crossVectors(N2,ha);let o=this.direction.dot(O2),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,e);const l=a*this.direction.dot(ha.crossVectors(On,ha));if(l<0)return null;const c=a*this.direction.dot(N2.cross(On));if(c<0||l+c>o)return null;const u=-a*On.dot(O2);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ee{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,r,i,s,o,a,l,c,u,h,d,f,p,g,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=d,_[3]=f,_[7]=p,_[11]=g,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ee().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,i=1/oi.setFromMatrixColumn(e,0).length(),s=1/oi.setFromMatrixColumn(e,1).length(),o=1/oi.setFromMatrixColumn(e,2).length();return t[0]=r[0]*i,t[1]=r[1]*i,t[2]=r[2]*i,t[3]=0,t[4]=r[4]*s,t[5]=r[5]*s,t[6]=r[6]*s,t[7]=0,t[8]=r[8]*o,t[9]=r[9]*o,t[10]=r[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,r=e.x,i=e.y,s=e.z,o=Math.cos(r),a=Math.sin(r),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,p=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,p=c*u,g=c*h;t[0]=d+g*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,p=c*u,g=c*h;t[0]=d-g*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,p=a*u,g=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,p=a*l,g=a*c;t[0]=l*u,t[4]=g-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-g*h}else if(e.order==="XZY"){const d=o*l,f=o*c,p=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nee,e,ree)}lookAt(e,t,r){const i=this.elements;return pt.subVectors(e,t),pt.lengthSq()===0&&(pt.z=1),pt.normalize(),Bn.crossVectors(r,pt),Bn.lengthSq()===0&&(Math.abs(r.z)===1?pt.x+=1e-4:pt.z+=1e-4,pt.normalize(),Bn.crossVectors(r,pt)),Bn.normalize(),da.crossVectors(pt,Bn),i[0]=Bn.x,i[4]=da.x,i[8]=pt.x,i[1]=Bn.y,i[5]=da.y,i[9]=pt.y,i[2]=Bn.z,i[6]=da.z,i[10]=pt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,s=this.elements,o=r[0],a=r[4],l=r[8],c=r[12],u=r[1],h=r[5],d=r[9],f=r[13],p=r[2],g=r[6],y=r[10],_=r[14],m=r[3],x=r[7],v=r[11],M=r[15],T=i[0],w=i[4],S=i[8],N=i[12],D=i[1],z=i[5],V=i[9],H=i[13],$=i[2],K=i[6],U=i[10],X=i[14],ee=i[3],fe=i[7],we=i[11],pe=i[15];return s[0]=o*T+a*D+l*$+c*ee,s[4]=o*w+a*z+l*K+c*fe,s[8]=o*S+a*V+l*U+c*we,s[12]=o*N+a*H+l*X+c*pe,s[1]=u*T+h*D+d*$+f*ee,s[5]=u*w+h*z+d*K+f*fe,s[9]=u*S+h*V+d*U+f*we,s[13]=u*N+h*H+d*X+f*pe,s[2]=p*T+g*D+y*$+_*ee,s[6]=p*w+g*z+y*K+_*fe,s[10]=p*S+g*V+y*U+_*we,s[14]=p*N+g*H+y*X+_*pe,s[3]=m*T+x*D+v*$+M*ee,s[7]=m*w+x*z+v*K+M*fe,s[11]=m*S+x*V+v*U+M*we,s[15]=m*N+x*H+v*X+M*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],g=e[7],y=e[11],_=e[15];return p*(+s*l*h-i*c*h-s*a*d+r*c*d+i*a*f-r*l*f)+g*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+y*(+t*c*h-t*a*f-s*o*h+r*o*f+s*a*u-r*c*u)+_*(-i*a*u-t*l*h+t*a*d+i*o*h-r*o*d+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],g=e[13],y=e[14],_=e[15],m=h*y*c-g*d*c+g*l*f-a*y*f-h*l*_+a*d*_,x=p*d*c-u*y*c-p*l*f+o*y*f+u*l*_-o*d*_,v=u*g*c-p*h*c+p*a*f-o*g*f-u*a*_+o*h*_,M=p*h*l-u*g*l-p*a*d+o*g*d+u*a*y-o*h*y,T=t*m+r*x+i*v+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=m*w,e[1]=(g*d*s-h*y*s-g*i*f+r*y*f+h*i*_-r*d*_)*w,e[2]=(a*y*s-g*l*s+g*i*c-r*y*c-a*i*_+r*l*_)*w,e[3]=(h*l*s-a*d*s-h*i*c+r*d*c+a*i*f-r*l*f)*w,e[4]=x*w,e[5]=(u*y*s-p*d*s+p*i*f-t*y*f-u*i*_+t*d*_)*w,e[6]=(p*l*s-o*y*s-p*i*c+t*y*c+o*i*_-t*l*_)*w,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*f+t*l*f)*w,e[8]=v*w,e[9]=(p*h*s-u*g*s-p*r*f+t*g*f+u*r*_-t*h*_)*w,e[10]=(o*g*s-p*a*s+p*r*c-t*g*c-o*r*_+t*a*_)*w,e[11]=(u*a*s-o*h*s-u*r*c+t*h*c+o*r*f-t*a*f)*w,e[12]=M*w,e[13]=(u*g*i-p*h*i+p*r*d-t*g*d-u*r*y+t*h*y)*w,e[14]=(p*a*i-o*g*i-p*r*l+t*g*l+o*r*y-t*a*y)*w,e[15]=(o*h*i-u*a*i+u*r*l-t*h*l-o*r*d+t*a*d)*w,this}scale(e){const t=this.elements,r=e.x,i=e.y,s=e.z;return t[0]*=r,t[4]*=i,t[8]*=s,t[1]*=r,t[5]*=i,t[9]*=s,t[2]*=r,t[6]*=i,t[10]*=s,t[3]*=r,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,i))}makeTranslation(e,t,r){return this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),i=Math.sin(t),s=1-r,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+r,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+r,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,i,s,o){return this.set(1,r,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,r){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,p=s*h,g=o*u,y=o*h,_=a*h,m=l*c,x=l*u,v=l*h,M=r.x,T=r.y,w=r.z;return i[0]=(1-(g+_))*M,i[1]=(f+v)*M,i[2]=(p-x)*M,i[3]=0,i[4]=(f-v)*T,i[5]=(1-(d+_))*T,i[6]=(y+m)*T,i[7]=0,i[8]=(p+x)*w,i[9]=(y-m)*w,i[10]=(1-(d+g))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,r){const i=this.elements;let s=oi.set(i[0],i[1],i[2]).length();const o=oi.set(i[4],i[5],i[6]).length(),a=oi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],It.copy(this);const c=1/s,u=1/o,h=1/a;return It.elements[0]*=c,It.elements[1]*=c,It.elements[2]*=c,It.elements[4]*=u,It.elements[5]*=u,It.elements[6]*=u,It.elements[8]*=h,It.elements[9]*=h,It.elements[10]*=h,t.setFromRotationMatrix(It),r.x=s,r.y=o,r.z=a,this}makePerspective(e,t,r,i,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(r-i),u=(t+e)/(t-e),h=(r+i)/(r-i),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,r,i,s,o){const a=this.elements,l=1/(t-e),c=1/(r-i),u=1/(o-s),h=(t+e)*l,d=(r+i)*c,f=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<16;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}Ee.prototype.isMatrix4=!0;const oi=new I,It=new Ee,nee=new I(0,0,0),ree=new I(1,1,1),Bn=new I,da=new I,pt=new I,T9=new Ee,E9=new C0;class Ut{constructor(e=0,t=0,r=0,i=Ut.DefaultOrder){this._x=e,this._y=t,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,i=this._order){return this._x=e,this._y=t,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(K0(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-K0(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(K0(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-K0(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(K0(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-K0(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return T9.makeRotationFromQuaternion(e),this.setFromRotationMatrix(T9,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return E9.setFromEuler(this),this.setFromQuaternion(E9,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new I(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Ut.prototype.isEuler=!0;Ut.DefaultOrder="XYZ";Ut.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class g5{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let iee=0;const C9=new I,ai=new C0,pn=new Ee,fa=new I,Rs=new I,see=new I,oee=new C0,L9=new I(1,0,0),P9=new I(0,1,0),R9=new I(0,0,1),aee={type:"added"},F9={type:"removed"};let r0=class Xl extends dr{constructor(){super(),Object.defineProperty(this,"id",{value:iee++}),this.uuid=Ct(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xl.DefaultUp.clone();const e=new I,t=new Ut,r=new C0,i=new I(1,1,1);function s(){r.setFromEuler(t,!1)}function o(){t.setFromQuaternion(r,void 0,!1)}t._onChange(s),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ee},normalMatrix:{value:new G0}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=Xl.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new g5,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.multiply(ai),this}rotateOnWorldAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.premultiply(ai),this}rotateX(e){return this.rotateOnAxis(L9,e)}rotateY(e){return this.rotateOnAxis(P9,e)}rotateZ(e){return this.rotateOnAxis(R9,e)}translateOnAxis(e,t){return C9.copy(e).applyQuaternion(this.quaternion),this.position.add(C9.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(L9,e)}translateY(e){return this.translateOnAxis(P9,e)}translateZ(e){return this.translateOnAxis(R9,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?fa.copy(e):fa.set(e,t,r);const i=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Rs,fa,this.up):pn.lookAt(fa,Rs,this.up),this.quaternion.setFromRotationMatrix(pn),i&&(pn.extractRotation(i.matrixWorld),ai.setFromRotationMatrix(pn),this.quaternion.premultiply(ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(aee)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(F9)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(F9)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,i=this.children.length;r<i;r++){const o=this.children[r].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,e,see),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,oee,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations);a.length>0&&(r.geometries=a),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),h.length>0&&(r.shapes=h),d.length>0&&(r.skeletons=d),f.length>0&&(r.animations=f)}return r.object=i,r;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}};r0.DefaultUp=new I(0,1,0);r0.DefaultMatrixAutoUpdate=!0;r0.prototype.isObject3D=!0;const Dt=new I,mn=new I,B2=new I,_n=new I,li=new I,ci=new I,z9=new I,H2=new I,U2=new I,V2=new I;class D0{constructor(e=new I,t=new I,r=new I){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,i){i.subVectors(r,t),Dt.subVectors(e,t),i.cross(Dt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,r,i,s){Dt.subVectors(i,t),mn.subVectors(r,t),B2.subVectors(e,t);const o=Dt.dot(Dt),a=Dt.dot(mn),l=Dt.dot(B2),c=mn.dot(mn),u=mn.dot(B2),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,r,i){return this.getBarycoord(e,t,r,i,_n),_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getUV(e,t,r,i,s,o,a,l){return this.getBarycoord(e,t,r,i,_n),l.set(0,0),l.addScaledVector(s,_n.x),l.addScaledVector(o,_n.y),l.addScaledVector(a,_n.z),l}static isFrontFacing(e,t,r,i){return Dt.subVectors(r,t),mn.subVectors(e,t),Dt.cross(mn).dot(i)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,i){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,r,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Dt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return D0.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return D0.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,i,s){return D0.getUV(e,this.a,this.b,this.c,t,r,i,s)}containsPoint(e){return D0.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return D0.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,i=this.b,s=this.c;let o,a;li.subVectors(i,r),ci.subVectors(s,r),H2.subVectors(e,r);const l=li.dot(H2),c=ci.dot(H2);if(l<=0&&c<=0)return t.copy(r);U2.subVectors(e,i);const u=li.dot(U2),h=ci.dot(U2);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(r).addScaledVector(li,o);V2.subVectors(e,s);const f=li.dot(V2),p=ci.dot(V2);if(p>=0&&f<=p)return t.copy(s);const g=f*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(r).addScaledVector(ci,a);const y=u*p-f*h;if(y<=0&&h-u>=0&&f-p>=0)return z9.subVectors(s,i),a=(h-u)/(h-u+(f-p)),t.copy(i).addScaledVector(z9,a);const _=1/(y+g+d);return o=g*_,a=d*_,t.copy(r).addScaledVector(li,o).addScaledVector(ci,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let lee=0;class O0 extends dr{constructor(){super(),Object.defineProperty(this,"id",{value:lee++}),this.uuid=Ct(),this.name="",this.type="Material",this.fog=!0,this.blending=no,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.format=u0,this.transparent=!1,this.blendSrc=n5,this.blendDst=r5,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ul,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=BJ,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=C2,this.stencilZFail=C2,this.stencilZPass=C2,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===e5;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(r.blending=this.blending),this.side!==Ui&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.format!==u0&&(r.format=this.format),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(r.textures=s),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const i=t.length;r=new Array(i);for(let s=0;s!==i;++s)r[s]=t[s].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}O0.prototype.isMaterial=!0;const v5={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nt={h:0,s:0,l:0},pa={h:0,s:0,l:0};function k2(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function G2(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function W2(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}class Ae{constructor(e,t,r){return t===void 0&&r===void 0?this.set(e):this.setRGB(e,t,r)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,r){return this.r=e,this.g=t,this.b=r,this}setHSL(e,t,r){if(e=Z4(e,1),t=K0(t,0,1),r=K0(r,0,1),t===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+t):r+t-r*t,s=2*r-i;this.r=k2(s,i,e+1/3),this.g=k2(s,i,e),this.b=k2(s,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(a,l,c)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=r[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=v5[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const r=t>0?1/t:1;return this.r=Math.pow(e.r,r),this.g=Math.pow(e.g,r),this.b=Math.pow(e.b,r),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=G2(e.r),this.g=G2(e.g),this.b=G2(e.b),this}copyLinearToSRGB(e){return this.r=W2(e.r),this.g=W2(e.g),this.b=W2(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,r=this.g,i=this.b,s=Math.max(t,r,i),o=Math.min(t,r,i);let a,l;const c=(o+s)/2;if(o===s)a=0,l=0;else{const u=s-o;switch(l=c<=.5?u/(s+o):u/(2-s-o),s){case t:a=(r-i)/u+(r<i?6:0);break;case r:a=(i-t)/u+2;break;case i:a=(t-r)/u+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,r){return this.getHSL(Nt),Nt.h+=e,Nt.s+=t,Nt.l+=r,this.setHSL(Nt.h,Nt.s,Nt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Nt),e.getHSL(pa);const r=so(Nt.h,pa.h,t),i=so(Nt.s,pa.s,t),s=so(Nt.l,pa.l,t);return this.setHSL(r,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}Ae.NAMES=v5;Ae.prototype.isColor=!0;Ae.prototype.r=1;Ae.prototype.g=1;Ae.prototype.b=1;class St extends O0{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=K1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}St.prototype.isMeshBasicMaterial=!0;const h0=new I,ma=new ie;class b0{constructor(e,t,r){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r===!0,this.usage=To,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let r=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new Ae),t[r++]=o.r,t[r++]=o.g,t[r++]=o.b}return this}copyVector2sArray(e){const t=this.array;let r=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new ie),t[r++]=o.x,t[r++]=o.y}return this}copyVector3sArray(e){const t=this.array;let r=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new I),t[r++]=o.x,t[r++]=o.y,t[r++]=o.z}return this}copyVector4sArray(e){const t=this.array;let r=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new t0),t[r++]=o.x,t[r++]=o.y,t[r++]=o.z,t[r++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ma.fromBufferAttribute(this,t),ma.applyMatrix3(e),this.setXY(t,ma.x,ma.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)h0.fromBufferAttribute(this,t),h0.applyMatrix3(e),this.setXYZ(t,h0.x,h0.y,h0.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)h0.x=this.getX(t),h0.y=this.getY(t),h0.z=this.getZ(t),h0.applyMatrix4(e),this.setXYZ(t,h0.x,h0.y,h0.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)h0.x=this.getX(t),h0.y=this.getY(t),h0.z=this.getZ(t),h0.applyNormalMatrix(e),this.setXYZ(t,h0.x,h0.y,h0.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)h0.x=this.getX(t),h0.y=this.getY(t),h0.z=this.getZ(t),h0.transformDirection(e),this.setXYZ(t,h0.x,h0.y,h0.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==To&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}b0.prototype.isBufferAttribute=!0;class J4 extends b0{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class x5 extends b0{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class cee extends b0{constructor(e,t,r){super(new Uint16Array(e),t,r)}}cee.prototype.isFloat16BufferAttribute=!0;class Pe extends b0{constructor(e,t,r){super(new Float32Array(e),t,r)}}let uee=0;const yt=new Ee,$2=new r0,ui=new I,mt=new Ft,Fs=new Ft,U0=new I;class Ne extends dr{constructor(){super(),Object.defineProperty(this,"id",{value:uee++}),this.uuid=Ct(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(m5(e)>65535?x5:J4)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const s=new G0().getNormalMatrix(e);r.applyNormalMatrix(s),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yt.makeRotationFromQuaternion(e),this.applyMatrix4(yt),this}rotateX(e){return yt.makeRotationX(e),this.applyMatrix4(yt),this}rotateY(e){return yt.makeRotationY(e),this.applyMatrix4(yt),this}rotateZ(e){return yt.makeRotationZ(e),this.applyMatrix4(yt),this}translate(e,t,r){return yt.makeTranslation(e,t,r),this.applyMatrix4(yt),this}scale(e,t,r){return yt.makeScale(e,t,r),this.applyMatrix4(yt),this}lookAt(e){return $2.lookAt(e),$2.updateMatrix(),this.applyMatrix4($2.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){const t=[];for(let r=0,i=e.length;r<i;r++){const s=e[r];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ft);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,i=t.length;r<i;r++){const s=t[r];mt.setFromBufferAttribute(s),this.morphTargetsRelative?(U0.addVectors(this.boundingBox.min,mt.min),this.boundingBox.expandByPoint(U0),U0.addVectors(this.boundingBox.max,mt.max),this.boundingBox.expandByPoint(U0)):(this.boundingBox.expandByPoint(mt.min),this.boundingBox.expandByPoint(mt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const r=this.boundingSphere.center;if(mt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(U0.addVectors(mt.min,Fs.min),mt.expandByPoint(U0),U0.addVectors(mt.max,Fs.max),mt.expandByPoint(U0)):(mt.expandByPoint(Fs.min),mt.expandByPoint(Fs.max))}mt.getCenter(r);let i=0;for(let s=0,o=e.count;s<o;s++)U0.fromBufferAttribute(e,s),i=Math.max(i,r.distanceToSquared(U0));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)U0.fromBufferAttribute(a,c),l&&(ui.fromBufferAttribute(e,c),U0.add(ui)),i=Math.max(i,r.distanceToSquared(U0))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new b0(new Float32Array(4*a),4));const l=t.tangent.array,c=[],u=[];for(let D=0;D<a;D++)c[D]=new I,u[D]=new I;const h=new I,d=new I,f=new I,p=new ie,g=new ie,y=new ie,_=new I,m=new I;function x(D,z,V){h.fromArray(i,D*3),d.fromArray(i,z*3),f.fromArray(i,V*3),p.fromArray(o,D*2),g.fromArray(o,z*2),y.fromArray(o,V*2),d.sub(h),f.sub(h),g.sub(p),y.sub(p);const H=1/(g.x*y.y-y.x*g.y);isFinite(H)&&(_.copy(d).multiplyScalar(y.y).addScaledVector(f,-g.y).multiplyScalar(H),m.copy(f).multiplyScalar(g.x).addScaledVector(d,-y.x).multiplyScalar(H),c[D].add(_),c[z].add(_),c[V].add(_),u[D].add(m),u[z].add(m),u[V].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:r.length}]);for(let D=0,z=v.length;D<z;++D){const V=v[D],H=V.start,$=V.count;for(let K=H,U=H+$;K<U;K+=3)x(r[K+0],r[K+1],r[K+2])}const M=new I,T=new I,w=new I,S=new I;function N(D){w.fromArray(s,D*3),S.copy(w);const z=c[D];M.copy(z),M.sub(w.multiplyScalar(w.dot(z))).normalize(),T.crossVectors(S,z);const H=T.dot(u[D])<0?-1:1;l[D*4]=M.x,l[D*4+1]=M.y,l[D*4+2]=M.z,l[D*4+3]=H}for(let D=0,z=v.length;D<z;++D){const V=v[D],H=V.start,$=V.count;for(let K=H,U=H+$;K<U;K+=3)N(r[K+0]),N(r[K+1]),N(r[K+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new b0(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let d=0,f=r.count;d<f;d++)r.setXYZ(d,0,0,0);const i=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),g=e.getX(d+1),y=e.getX(d+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,y),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(r,p),l.fromBufferAttribute(r,g),c.fromBufferAttribute(r,y),a.add(u),l.add(u),c.add(u),r.setXYZ(p,a.x,a.y,a.z),r.setXYZ(g,l.x,l.y,l.z),r.setXYZ(y,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),r.setXYZ(d+0,u.x,u.y,u.z),r.setXYZ(d+1,u.x,u.y,u.z),r.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const r=this.attributes;for(const i in r){if(e.attributes[i]===void 0)continue;const o=r[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let h=0,d=c;h<u;h++,d++)o[d]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)U0.fromBufferAttribute(e,t),U0.normalize(),e.setXYZ(t,U0.x,U0.y,U0.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,p=0;for(let g=0,y=l.length;g<y;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let _=0;_<u;_++)d[p++]=c[f++]}return new b0(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ne,r=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,r);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,r);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Ne.prototype.isBufferGeometry=!0;const I9=new Ee,hi=new qr,X2=new jr,Hn=new I,Un=new I,Vn=new I,j2=new I,q2=new I,Y2=new I,_a=new I,ga=new I,va=new I,xa=new ie,ya=new ie,wa=new ie,Q2=new I,Ma=new I;let N0=class extends r0{constructor(e=new Ne,t=new St){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const r=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(r.boundingSphere===null&&r.computeBoundingSphere(),X2.copy(r.boundingSphere),X2.applyMatrix4(s),e.ray.intersectsSphere(X2)===!1)||(I9.copy(s).invert(),hi.copy(e.ray).applyMatrix4(I9),r.boundingBox!==null&&hi.intersectsBox(r.boundingBox)===!1))return;let o;if(r.isBufferGeometry){const a=r.index,l=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative,h=r.attributes.uv,d=r.attributes.uv2,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(i))for(let g=0,y=f.length;g<y;g++){const _=f[g],m=i[_.materialIndex],x=Math.max(_.start,p.start),v=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let M=x,T=v;M<T;M+=3){const w=a.getX(M),S=a.getX(M+1),N=a.getX(M+2);o=ba(this,m,e,hi,l,c,u,h,d,w,S,N),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let _=g,m=y;_<m;_+=3){const x=a.getX(_),v=a.getX(_+1),M=a.getX(_+2);o=ba(this,i,e,hi,l,c,u,h,d,x,v,M),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let g=0,y=f.length;g<y;g++){const _=f[g],m=i[_.materialIndex],x=Math.max(_.start,p.start),v=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let M=x,T=v;M<T;M+=3){const w=M,S=M+1,N=M+2;o=ba(this,m,e,hi,l,c,u,h,d,w,S,N),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let _=g,m=y;_<m;_+=3){const x=_,v=_+1,M=_+2;o=ba(this,i,e,hi,l,c,u,h,d,x,v,M),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}else r.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}};N0.prototype.isMesh=!0;function hee(n,e,t,r,i,s,o,a){let l;if(e.side===F0?l=r.intersectTriangle(o,s,i,!0,a):l=r.intersectTriangle(i,s,o,e.side!==or,a),l===null)return null;Ma.copy(a),Ma.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ma);return c<t.near||c>t.far?null:{distance:c,point:Ma.clone(),object:n}}function ba(n,e,t,r,i,s,o,a,l,c,u,h){Hn.fromBufferAttribute(i,c),Un.fromBufferAttribute(i,u),Vn.fromBufferAttribute(i,h);const d=n.morphTargetInfluences;if(s&&d){_a.set(0,0,0),ga.set(0,0,0),va.set(0,0,0);for(let p=0,g=s.length;p<g;p++){const y=d[p],_=s[p];y!==0&&(j2.fromBufferAttribute(_,c),q2.fromBufferAttribute(_,u),Y2.fromBufferAttribute(_,h),o?(_a.addScaledVector(j2,y),ga.addScaledVector(q2,y),va.addScaledVector(Y2,y)):(_a.addScaledVector(j2.sub(Hn),y),ga.addScaledVector(q2.sub(Un),y),va.addScaledVector(Y2.sub(Vn),y)))}Hn.add(_a),Un.add(ga),Vn.add(va)}n.isSkinnedMesh&&(n.boneTransform(c,Hn),n.boneTransform(u,Un),n.boneTransform(h,Vn));const f=hee(n,e,t,r,Hn,Un,Vn,Q2);if(f){a&&(xa.fromBufferAttribute(a,c),ya.fromBufferAttribute(a,u),wa.fromBufferAttribute(a,h),f.uv=D0.getUV(Q2,Hn,Un,Vn,xa,ya,wa,new ie)),l&&(xa.fromBufferAttribute(l,c),ya.fromBufferAttribute(l,u),wa.fromBufferAttribute(l,h),f.uv2=D0.getUV(Q2,Hn,Un,Vn,xa,ya,wa,new ie));const p={a:c,b:u,c:h,normal:new I,materialIndex:0};D0.getNormal(Hn,Un,Vn,p.normal),f.face=p}return f}let Co=class y5 extends Ne{constructor(e=1,t=1,r=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,r,t,e,o,s,0),p("z","y","x",1,-1,r,t,-e,o,s,1),p("x","z","y",1,1,e,r,t,i,o,2),p("x","z","y",1,-1,e,r,-t,i,o,3),p("x","y","z",1,-1,e,t,r,i,s,4),p("x","y","z",-1,-1,e,t,-r,i,s,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(h,2));function p(g,y,_,m,x,v,M,T,w,S,N){const D=v/w,z=M/S,V=v/2,H=M/2,$=T/2,K=w+1,U=S+1;let X=0,ee=0;const fe=new I;for(let we=0;we<U;we++){const pe=we*z-H;for(let be=0;be<K;be++){const re=be*D-V;fe[g]=re*m,fe[y]=pe*x,fe[_]=$,c.push(fe.x,fe.y,fe.z),fe[g]=0,fe[y]=0,fe[_]=T>0?1:-1,u.push(fe.x,fe.y,fe.z),h.push(be/w),h.push(1-we/S),X+=1}}for(let we=0;we<S;we++)for(let pe=0;pe<w;pe++){const be=d+pe+K*we,re=d+pe+K*(we+1),ce=d+(pe+1)+K*(we+1),xe=d+(pe+1)+K*we;l.push(be,re,xe),l.push(re,ce,xe),ee+=6}a.addGroup(f,ee,N),f+=ee,d+=X}}static fromJSON(e){return new y5(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ki(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const i=n[t][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][r]=i.clone():Array.isArray(i)?e[t][r]=i.slice():e[t][r]=i}}return e}function Q0(n){const e={};for(let t=0;t<n.length;t++){const r=ki(n[t]);for(const i in r)e[i]=r[i]}return e}const et={clone:ki,merge:Q0};var dee=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fee=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;let d0=class extends O0{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=dee,this.fragmentShader=fee,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}};d0.prototype.isShaderMaterial=!0;let e3=class extends r0{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};e3.prototype.isCamera=!0;let q0=class extends e3{constructor(e=50,t=1,r=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(io*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*r/c,i*=o.width/l,r*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-r,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};q0.prototype.isPerspectiveCamera=!0;const di=90,fi=1;let e2=class extends r0{constructor(e,t,r){if(super(),this.type="CubeCamera",r.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=r;const i=new q0(di,fi,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new I(1,0,0)),this.add(i);const s=new q0(di,fi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new I(-1,0,0)),this.add(s);const o=new q0(di,fi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new I(0,1,0)),this.add(o);const a=new q0(di,fi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new I(0,-1,0)),this.add(a);const l=new q0(di,fi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new I(0,0,1)),this.add(l);const c=new q0(di,fi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new I(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;const d=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(t,i),e.setRenderTarget(r,1),e.render(t,s),e.setRenderTarget(r,2),e.render(t,o),e.setRenderTarget(r,3),e.render(t,a),e.setRenderTarget(r,4),e.render(t,l),r.texture.generateMipmaps=d,e.setRenderTarget(r,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=u}},t2=class extends P0{constructor(e,t,r,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ns,super(e,t,r,i,s,o,a,l,c,u),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};t2.prototype.isCubeTexture=!0;class t3 extends z0{constructor(e,t,r){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=r),super(e,e,t),t=t||{},this.texture=new t2(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:a0,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=u0,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Co(5,5,5),s=new d0({name:"CubemapFromEquirect",uniforms:ki(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:F0,blending:j0});s.uniforms.tEquirect.value=t;const o=new N0(i,s),a=t.minFilter;return t.minFilter===$r&&(t.minFilter=a0),new e2(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,r,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,r,i);e.setRenderTarget(s)}}t3.prototype.isWebGLCubeRenderTarget=!0;const K2=new I,pee=new I,mee=new G0;let Kt=class{constructor(e=new I(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const i=K2.subVectors(r,t).cross(pee.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const r=e.delta(K2),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(r).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||mee.getNormalMatrix(e),i=this.coplanarPoint(K2).applyMatrix4(e),s=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};Kt.prototype.isPlane=!0;const pi=new jr,Sa=new I;class n2{constructor(e=new Kt,t=new Kt,r=new Kt,i=new Kt,s=new Kt,o=new Kt){this.planes=[e,t,r,i,s,o]}set(e,t,r,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(r),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e){const t=this.planes,r=e.elements,i=r[0],s=r[1],o=r[2],a=r[3],l=r[4],c=r[5],u=r[6],h=r[7],d=r[8],f=r[9],p=r[10],g=r[11],y=r[12],_=r[13],m=r[14],x=r[15];return t[0].setComponents(a-i,h-l,g-d,x-y).normalize(),t[1].setComponents(a+i,h+l,g+d,x+y).normalize(),t[2].setComponents(a+s,h+c,g+f,x+_).normalize(),t[3].setComponents(a-s,h-c,g-f,x-_).normalize(),t[4].setComponents(a-o,h-u,g-p,x-m).normalize(),t[5].setComponents(a+o,h+u,g+p,x+m).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,r=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const i=t[r];if(Sa.x=i.normal.x>0?e.max.x:e.min.x,Sa.y=i.normal.y>0?e.max.y:e.min.y,Sa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function w5(){let n=null,e=!1,t=null,r=null;function i(s,o){t(s,o),r=n.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(i),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function _ee(n,e){const t=e.isWebGL2,r=new WeakMap;function i(c,u){const h=c.array,d=c.usage,f=n.createBuffer();n.bindBuffer(u,f),n.bufferData(u,h,d),c.onUploadCallback();let p=5126;return h instanceof Float32Array?p=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?c.isFloat16BufferAttribute?t?p=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):p=5123:h instanceof Int16Array?p=5122:h instanceof Uint32Array?p=5125:h instanceof Int32Array?p=5124:h instanceof Int8Array?p=5120:(h instanceof Uint8Array||h instanceof Uint8ClampedArray)&&(p=5121),{buffer:f,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,f=u.updateRange;n.bindBuffer(h,c),f.count===-1?n.bufferSubData(h,0,d):(t?n.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),r.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=r.get(c);u&&(n.deleteBuffer(u.buffer),r.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=r.get(c);(!d||d.version<c.version)&&r.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=r.get(c);h===void 0?r.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}let n3=class M5 extends Ne{constructor(e=1,t=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(r),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],g=[],y=[];for(let _=0;_<u;_++){const m=_*d-o;for(let x=0;x<c;x++){const v=x*h-s;p.push(v,-m,0),g.push(0,0,1),y.push(x/a),y.push(1-_/l)}}for(let _=0;_<l;_++)for(let m=0;m<a;m++){const x=m+c*_,v=m+c*(_+1),M=m+1+c*(_+1),T=m+1+c*_;f.push(x,v,T),f.push(v,M,T)}this.setIndex(f),this.setAttribute("position",new Pe(p,3)),this.setAttribute("normal",new Pe(g,3)),this.setAttribute("uv",new Pe(y,2))}static fromJSON(e){return new M5(e.width,e.height,e.widthSegments,e.heightSegments)}};var gee=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,vee=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xee=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yee=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wee=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mee=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bee="vec3 transformed = vec3( position );",See=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Aee=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Tee=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Eee=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Cee=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lee=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pee=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ree=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fee=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zee=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Iee=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Dee=`#define PI 3.141592653589793
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
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Nee=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,Oee=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bee=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hee=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Uee=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vee=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kee="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gee=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Wee=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$ee=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xee=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jee=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qee=`#ifdef USE_ENVMAP
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
#endif`,Yee=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qee=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kee=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zee=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jee=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,e0e=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,t0e=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n0e=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,r0e=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,i0e=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,s0e=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o0e=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,a0e=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l0e=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,c0e=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,u0e=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,h0e=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,d0e=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,f0e=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,p0e=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m0e=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0e=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,g0e=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,v0e=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,x0e=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y0e=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,w0e=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M0e=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b0e=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S0e=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,A0e=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,T0e=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,E0e=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,C0e=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L0e=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P0e=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0e=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F0e=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,z0e=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,I0e=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,D0e=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,N0e=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O0e=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,B0e=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H0e=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U0e=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V0e=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k0e=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G0e=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W0e=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,$0e=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,X0e=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,j0e=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,q0e=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y0e=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Q0e=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K0e=`#ifdef USE_SKINNING
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
#endif`,Z0e=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J0e=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ete=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tte=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nte=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,rte=`#ifdef USE_TRANSMISSION
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
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ite=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ste=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ote=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ate=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,lte=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,cte=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,ute=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hte=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dte=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fte=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pte=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mte=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,_te=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gte=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,vte=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xte=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yte=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wte=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mte=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bte=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,Ste=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ate=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tte=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ete=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,Cte=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lte=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pte=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Rte=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,Fte=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zte=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,Ite=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dte=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,Nte=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ote=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Bte=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hte=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ute=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Vte=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,kte=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Be={alphamap_fragment:gee,alphamap_pars_fragment:vee,alphatest_fragment:xee,alphatest_pars_fragment:yee,aomap_fragment:wee,aomap_pars_fragment:Mee,begin_vertex:bee,beginnormal_vertex:See,bsdfs:Aee,bumpmap_pars_fragment:Tee,clipping_planes_fragment:Eee,clipping_planes_pars_fragment:Cee,clipping_planes_pars_vertex:Lee,clipping_planes_vertex:Pee,color_fragment:Ree,color_pars_fragment:Fee,color_pars_vertex:zee,color_vertex:Iee,common:Dee,cube_uv_reflection_fragment:Nee,defaultnormal_vertex:Oee,displacementmap_pars_vertex:Bee,displacementmap_vertex:Hee,emissivemap_fragment:Uee,emissivemap_pars_fragment:Vee,encodings_fragment:kee,encodings_pars_fragment:Gee,envmap_fragment:Wee,envmap_common_pars_fragment:$ee,envmap_pars_fragment:Xee,envmap_pars_vertex:jee,envmap_physical_pars_fragment:i0e,envmap_vertex:qee,fog_vertex:Yee,fog_pars_vertex:Qee,fog_fragment:Kee,fog_pars_fragment:Zee,gradientmap_pars_fragment:Jee,lightmap_fragment:e0e,lightmap_pars_fragment:t0e,lights_lambert_vertex:n0e,lights_pars_begin:r0e,lights_toon_fragment:s0e,lights_toon_pars_fragment:o0e,lights_phong_fragment:a0e,lights_phong_pars_fragment:l0e,lights_physical_fragment:c0e,lights_physical_pars_fragment:u0e,lights_fragment_begin:h0e,lights_fragment_maps:d0e,lights_fragment_end:f0e,logdepthbuf_fragment:p0e,logdepthbuf_pars_fragment:m0e,logdepthbuf_pars_vertex:_0e,logdepthbuf_vertex:g0e,map_fragment:v0e,map_pars_fragment:x0e,map_particle_fragment:y0e,map_particle_pars_fragment:w0e,metalnessmap_fragment:M0e,metalnessmap_pars_fragment:b0e,morphnormal_vertex:S0e,morphtarget_pars_vertex:A0e,morphtarget_vertex:T0e,normal_fragment_begin:E0e,normal_fragment_maps:C0e,normal_pars_fragment:L0e,normal_pars_vertex:P0e,normal_vertex:R0e,normalmap_pars_fragment:F0e,clearcoat_normal_fragment_begin:z0e,clearcoat_normal_fragment_maps:I0e,clearcoat_pars_fragment:D0e,output_fragment:N0e,packing:O0e,premultiplied_alpha_fragment:B0e,project_vertex:H0e,dithering_fragment:U0e,dithering_pars_fragment:V0e,roughnessmap_fragment:k0e,roughnessmap_pars_fragment:G0e,shadowmap_pars_fragment:W0e,shadowmap_pars_vertex:$0e,shadowmap_vertex:X0e,shadowmask_pars_fragment:j0e,skinbase_vertex:q0e,skinning_pars_vertex:Y0e,skinning_vertex:Q0e,skinnormal_vertex:K0e,specularmap_fragment:Z0e,specularmap_pars_fragment:J0e,tonemapping_fragment:ete,tonemapping_pars_fragment:tte,transmission_fragment:nte,transmission_pars_fragment:rte,uv_pars_fragment:ite,uv_pars_vertex:ste,uv_vertex:ote,uv2_pars_fragment:ate,uv2_pars_vertex:lte,uv2_vertex:cte,worldpos_vertex:ute,background_vert:hte,background_frag:dte,cube_vert:fte,cube_frag:pte,depth_vert:mte,depth_frag:_te,distanceRGBA_vert:gte,distanceRGBA_frag:vte,equirect_vert:xte,equirect_frag:yte,linedashed_vert:wte,linedashed_frag:Mte,meshbasic_vert:bte,meshbasic_frag:Ste,meshlambert_vert:Ate,meshlambert_frag:Tte,meshmatcap_vert:Ete,meshmatcap_frag:Cte,meshnormal_vert:Lte,meshnormal_frag:Pte,meshphong_vert:Rte,meshphong_frag:Fte,meshphysical_vert:zte,meshphysical_frag:Ite,meshtoon_vert:Dte,meshtoon_frag:Nte,points_vert:Ote,points_frag:Bte,shadow_vert:Hte,shadow_frag:Ute,sprite_vert:Vte,sprite_frag:kte},Ce={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new G0},uv2Transform:{value:new G0},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new G0}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new G0}}},Ot={basic:{uniforms:Q0([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Q0([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.fog,Ce.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Q0([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Q0([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Q0([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Q0([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Q0([Ce.points,Ce.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Q0([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Q0([Ce.common,Ce.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Q0([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Q0([Ce.sprite,Ce.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new G0},t2D:{value:null}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},cube:{uniforms:Q0([Ce.envmap,{opacity:{value:1}}]),vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Q0([Ce.common,Ce.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Q0([Ce.lights,Ce.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Ot.physical={uniforms:Q0([Ot.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ie(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};function Gte(n,e,t,r,i){const s=new Ae(0);let o=0,a,l,c=null,u=0,h=null;function d(p,g){let y=!1,_=g.isScene===!0?g.background:null;_&&_.isTexture&&(_=e.get(_));const m=n.xr,x=m.getSession&&m.getSession();x&&x.environmentBlendMode==="additive"&&(_=null),_===null?f(s,o):_&&_.isColor&&(f(_,1),y=!0),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Z1)?(l===void 0&&(l=new N0(new Co(1,1,1),new d0({name:"BackgroundCubeMaterial",uniforms:ki(Ot.cube.uniforms),vertexShader:Ot.cube.vertexShader,fragmentShader:Ot.cube.fragmentShader,side:F0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,(c!==_||u!==_.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,c=_,u=_.version,h=n.toneMapping),p.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(a===void 0&&(a=new N0(new n3(2,2),new d0({name:"BackgroundMaterial",uniforms:ki(Ot.background.uniforms),vertexShader:Ot.background.vertexShader,fragmentShader:Ot.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(a)),a.material.uniforms.t2D.value=_,_.matrixAutoUpdate===!0&&_.updateMatrix(),a.material.uniforms.uvTransform.value.copy(_.matrix),(c!==_||u!==_.version||h!==n.toneMapping)&&(a.material.needsUpdate=!0,c=_,u=_.version,h=n.toneMapping),p.unshift(a,a.geometry,a.material,0,0,null))}function f(p,g){t.buffers.color.setClear(p.r,p.g,p.b,g,i)}return{getClearColor:function(){return s},setClearColor:function(p,g=1){s.set(p),o=g,f(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,f(s,o)},render:d}}function Wte(n,e,t,r){const i=n.getParameter(34921),s=r.isWebGL2?null:e.get("OES_vertex_array_object"),o=r.isWebGL2||s!==null,a={},l=g(null);let c=l;function u(H,$,K,U,X){let ee=!1;if(o){const fe=p(U,K,$);c!==fe&&(c=fe,d(c.object)),ee=y(U,X),ee&&_(U,X)}else{const fe=$.wireframe===!0;(c.geometry!==U.id||c.program!==K.id||c.wireframe!==fe)&&(c.geometry=U.id,c.program=K.id,c.wireframe=fe,ee=!0)}H.isInstancedMesh===!0&&(ee=!0),X!==null&&t.update(X,34963),ee&&(w(H,$,K,U),X!==null&&n.bindBuffer(34963,t.get(X).buffer))}function h(){return r.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(H){return r.isWebGL2?n.bindVertexArray(H):s.bindVertexArrayOES(H)}function f(H){return r.isWebGL2?n.deleteVertexArray(H):s.deleteVertexArrayOES(H)}function p(H,$,K){const U=K.wireframe===!0;let X=a[H.id];X===void 0&&(X={},a[H.id]=X);let ee=X[$.id];ee===void 0&&(ee={},X[$.id]=ee);let fe=ee[U];return fe===void 0&&(fe=g(h()),ee[U]=fe),fe}function g(H){const $=[],K=[],U=[];for(let X=0;X<i;X++)$[X]=0,K[X]=0,U[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:K,attributeDivisors:U,object:H,attributes:{},index:null}}function y(H,$){const K=c.attributes,U=H.attributes;let X=0;for(const ee in U){const fe=K[ee],we=U[ee];if(fe===void 0||fe.attribute!==we||fe.data!==we.data)return!0;X++}return c.attributesNum!==X||c.index!==$}function _(H,$){const K={},U=H.attributes;let X=0;for(const ee in U){const fe=U[ee],we={};we.attribute=fe,fe.data&&(we.data=fe.data),K[ee]=we,X++}c.attributes=K,c.attributesNum=X,c.index=$}function m(){const H=c.newAttributes;for(let $=0,K=H.length;$<K;$++)H[$]=0}function x(H){v(H,0)}function v(H,$){const K=c.newAttributes,U=c.enabledAttributes,X=c.attributeDivisors;K[H]=1,U[H]===0&&(n.enableVertexAttribArray(H),U[H]=1),X[H]!==$&&((r.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,$),X[H]=$)}function M(){const H=c.newAttributes,$=c.enabledAttributes;for(let K=0,U=$.length;K<U;K++)$[K]!==H[K]&&(n.disableVertexAttribArray(K),$[K]=0)}function T(H,$,K,U,X,ee){r.isWebGL2===!0&&(K===5124||K===5125)?n.vertexAttribIPointer(H,$,K,X,ee):n.vertexAttribPointer(H,$,K,U,X,ee)}function w(H,$,K,U){if(r.isWebGL2===!1&&(H.isInstancedMesh||U.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const X=U.attributes,ee=K.getAttributes(),fe=$.defaultAttributeValues;for(const we in ee){const pe=ee[we];if(pe.location>=0){let be=X[we];if(be===void 0&&(we==="instanceMatrix"&&H.instanceMatrix&&(be=H.instanceMatrix),we==="instanceColor"&&H.instanceColor&&(be=H.instanceColor)),be!==void 0){const re=be.normalized,ce=be.itemSize,xe=t.get(be);if(xe===void 0)continue;const te=xe.buffer,q=xe.type,se=xe.bytesPerElement;if(be.isInterleavedBufferAttribute){const J=be.data,le=J.stride,Te=be.offset;if(J&&J.isInstancedInterleavedBuffer){for(let A=0;A<pe.locationSize;A++)v(pe.location+A,J.meshPerAttribute);H.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let A=0;A<pe.locationSize;A++)x(pe.location+A);n.bindBuffer(34962,te);for(let A=0;A<pe.locationSize;A++)T(pe.location+A,ce/pe.locationSize,q,re,le*se,(Te+ce/pe.locationSize*A)*se)}else{if(be.isInstancedBufferAttribute){for(let J=0;J<pe.locationSize;J++)v(pe.location+J,be.meshPerAttribute);H.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let J=0;J<pe.locationSize;J++)x(pe.location+J);n.bindBuffer(34962,te);for(let J=0;J<pe.locationSize;J++)T(pe.location+J,ce/pe.locationSize,q,re,ce*se,ce/pe.locationSize*J*se)}}else if(fe!==void 0){const re=fe[we];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(pe.location,re);break;case 3:n.vertexAttrib3fv(pe.location,re);break;case 4:n.vertexAttrib4fv(pe.location,re);break;default:n.vertexAttrib1fv(pe.location,re)}}}}M()}function S(){z();for(const H in a){const $=a[H];for(const K in $){const U=$[K];for(const X in U)f(U[X].object),delete U[X];delete $[K]}delete a[H]}}function N(H){if(a[H.id]===void 0)return;const $=a[H.id];for(const K in $){const U=$[K];for(const X in U)f(U[X].object),delete U[X];delete $[K]}delete a[H.id]}function D(H){for(const $ in a){const K=a[$];if(K[H.id]===void 0)continue;const U=K[H.id];for(const X in U)f(U[X].object),delete U[X];delete K[H.id]}}function z(){V(),c!==l&&(c=l,d(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:z,resetDefaultState:V,dispose:S,releaseStatesOfGeometry:N,releaseStatesOfProgram:D,initAttributes:m,enableAttribute:x,disableUnusedAttributes:M}}function $te(n,e,t,r){const i=r.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,f;if(i)d=n,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Xte(n,e,t){let r;function i(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(w){if(w==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(34930),d=n.getParameter(35660),f=n.getParameter(3379),p=n.getParameter(34076),g=n.getParameter(34921),y=n.getParameter(36347),_=n.getParameter(36348),m=n.getParameter(36349),x=d>0,v=o||e.has("OES_texture_float"),M=x&&v,T=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:m,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:M,maxSamples:T}}function jte(n){const e=this;let t=null,r=0,i=!1,s=!1;const o=new Kt,a=new G0,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,f){const p=h.length!==0||d||r!==0||i;return i=d,t=u(h,f,0),r=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,d,f){const p=h.clippingPlanes,g=h.clipIntersection,y=h.clipShadows,_=n.get(h);if(!i||p===null||p.length===0||s&&!y)s?u(null):c();else{const m=s?0:r,x=m*4;let v=_.clippingState||null;l.value=v,v=u(p,d,x,f);for(let M=0;M!==x;++M)v[M]=t[M];_.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(h,d,f,p){const g=h!==null?h.length:0;let y=null;if(g!==0){if(y=l.value,p!==!0||y===null){const _=f+g*4,m=d.matrixWorldInverse;a.getNormalMatrix(m),(y===null||y.length<_)&&(y=new Float32Array(_));for(let x=0,v=f;x!==g;++x,v+=4)o.copy(h[x]).applyMatrix4(m,a),o.normal.toArray(y,v),y[v+3]=o.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,y}}function qte(n){let e=new WeakMap;function t(o,a){return a===f1?o.mapping=ns:a===Vl&&(o.mapping=$o),o}function r(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===f1||a===Vl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=n.getRenderTarget(),u=new t3(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),n.setRenderTarget(c),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:r,dispose:s}}let fr=class extends e3{constructor(e=-1,t=1,r=1,i=-1,s=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=r-e,o=r+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};fr.prototype.isOrthographicCamera=!0;class r2 extends d0{constructor(e){super(e),this.type="RawShaderMaterial"}}r2.prototype.isRawShaderMaterial=!0;const Ii=4,er=8,Yt=Math.pow(2,er),b5=[.125,.215,.35,.446,.526,.582],S5=er-Ii+1+b5.length,mi=20,lr={[nt]:0,[ut]:1,[K4]:2,[c5]:3,[u5]:4,[h5]:5,[Q4]:6},Z2=new fr,{_lodPlanes:zs,_sizeLods:D9,_sigmas:Aa}=Kte(),N9=new Ae;let J2=null;const Pr=(1+Math.sqrt(5))/2,_i=1/Pr,O9=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Pr,_i),new I(0,Pr,-_i),new I(_i,0,Pr),new I(-_i,0,Pr),new I(Pr,_i,0),new I(-Pr,_i,0)];class Yte{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=Zte(mi),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,i=100){J2=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,r,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=U9(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=H9(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<zs.length;e++)zs[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(J2),e.scissorTest=!1,Ta(e,0,0,e.width,e.height)}_fromTexture(e){J2=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:o0,minFilter:o0,generateMipmaps:!1,type:ar,format:jZ,encoding:Qte(e)?e.encoding:K4,depthBuffer:!1},r=B9(t);return r.depthBuffer=!e,this._pingPongRenderTarget=B9(t),r}_compileMaterial(e){const t=new N0(zs[0],e);this._renderer.compile(t,Z2)}_sceneToCubeUV(e,t,r,i){const a=new q0(90,1,t,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.outputEncoding,f=u.toneMapping;u.getClearColor(N9),u.toneMapping=Vr,u.outputEncoding=nt,u.autoClear=!1;const p=new St({name:"PMREM.Background",side:F0,depthWrite:!1,depthTest:!1}),g=new N0(new Co,p);let y=!1;const _=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,y=!0):(p.color.copy(N9),y=!0);for(let m=0;m<6;m++){const x=m%3;x==0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x==1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m])),Ta(i,x*Yt,m>2?Yt:0,Yt,Yt),u.setRenderTarget(i),y&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.outputEncoding=d,u.autoClear=h,e.background=_}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===u0&&t.type===ar&&t.encoding===ut?e.value=lr[nt]:e.value=lr[t.encoding]}_textureToCubeUV(e,t){const r=this._renderer,i=e.mapping===ns||e.mapping===$o;i?this._cubemapShader==null&&(this._cubemapShader=U9()):this._equirectShader==null&&(this._equirectShader=H9());const s=i?this._cubemapShader:this._equirectShader,o=new N0(zs[0],s),a=s.uniforms;a.envMap.value=e,i||a.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(a.inputEncoding,e),this._setEncoding(a.outputEncoding,t.texture),Ta(t,0,0,3*Yt,2*Yt),r.setRenderTarget(t),r.render(o,Z2)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let i=1;i<S5;i++){const s=Math.sqrt(Aa[i]*Aa[i]-Aa[i-1]*Aa[i-1]),o=O9[(i-1)%O9.length];this._blur(e,i-1,i,s,o)}t.autoClear=r}_blur(e,t,r,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,r,i,"latitudinal",s),this._halfBlur(o,e,r,r,i,"longitudinal",s)}_halfBlur(e,t,r,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new N0(zs[i],c),d=c.uniforms,f=D9[r]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*mi-1),g=s/p,y=isFinite(s)?1+Math.floor(u*g):mi;y>mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${mi}`);const _=[];let m=0;for(let T=0;T<mi;++T){const w=T/g,S=Math.exp(-w*w/2);_.push(S),T==0?m+=S:T<y&&(m+=2*S)}for(let T=0;T<_.length;T++)_[T]=_[T]/m;d.envMap.value=e.texture,d.samples.value=y,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a),d.dTheta.value=p,d.mipInt.value=er-r,this._setEncoding(d.inputEncoding,e.texture),this._setEncoding(d.outputEncoding,e.texture);const x=D9[i],v=3*Math.max(0,Yt-2*x),M=(i===0?0:2*Yt)+2*x*(i>er-Ii?i-er+Ii:0);Ta(t,v,M,3*x,2*x),l.setRenderTarget(t),l.render(h,Z2)}}function Qte(n){return n===void 0||n.type!==ar?!1:n.encoding===nt||n.encoding===ut||n.encoding===Q4}function Kte(){const n=[],e=[],t=[];let r=er;for(let i=0;i<S5;i++){const s=Math.pow(2,r);e.push(s);let o=1/s;i>er-Ii?o=b5[i-er+Ii-1]:i==0&&(o=0),t.push(o);const a=1/(s-1),l=-a/2,c=1+a/2,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,p=2,g=1,y=new Float32Array(f*d*h),_=new Float32Array(p*d*h),m=new Float32Array(g*d*h);for(let v=0;v<h;v++){const M=v%3*2/3-1,T=v>2?0:-1,w=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];y.set(w,f*d*v),_.set(u,p*d*v);const S=[v,v,v,v,v,v];m.set(S,g*d*v)}const x=new Ne;x.setAttribute("position",new b0(y,f)),x.setAttribute("uv",new b0(_,p)),x.setAttribute("faceIndex",new b0(m,g)),n.push(x),r>Ii&&r--}return{_lodPlanes:n,_sizeLods:e,_sigmas:t}}function B9(n){const e=new z0(3*Yt,3*Yt,n);return e.texture.mapping=Z1,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Ta(n,e,t,r,i){n.viewport.set(e,t,r,i),n.scissor.set(e,t,r,i)}function Zte(n){const e=new Float32Array(n),t=new I(0,1,0);return new r2({name:"SphericalGaussianBlur",defines:{n},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:lr[nt]},outputEncoding:{value:lr[nt]}},vertexShader:r3(),fragmentShader:`

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

			${i3()}

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

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:j0,depthTest:!1,depthWrite:!1})}function H9(){const n=new ie(1,1);return new r2({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:n},inputEncoding:{value:lr[nt]},outputEncoding:{value:lr[nt]}},vertexShader:r3(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${i3()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:j0,depthTest:!1,depthWrite:!1})}function U9(){return new r2({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:lr[nt]},outputEncoding:{value:lr[nt]}},vertexShader:r3(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${i3()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:j0,depthTest:!1,depthWrite:!1})}function r3(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
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
	`}function i3(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function Jte(n){let e=new WeakMap,t=null;function r(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const l=a.mapping,c=l===f1||l===Vl,u=l===ns||l===$o;if(c||u){if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){const d=n.getRenderTarget();t===null&&(t=new Yte(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),n.setRenderTarget(d),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:o}}function ene(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(r)}return e[r]=i,i}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(r){const i=t(r);return i===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function tne(n,e,t,r){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],34962);const f=h.morphAttributes;for(const p in f){const g=f[p];for(let y=0,_=g.length;y<_;y++)e.update(g[y],34962)}}function c(h){const d=[],f=h.index,p=h.attributes.position;let g=0;if(f!==null){const m=f.array;g=f.version;for(let x=0,v=m.length;x<v;x+=3){const M=m[x+0],T=m[x+1],w=m[x+2];d.push(M,T,T,w,w,M)}}else{const m=p.array;g=p.version;for(let x=0,v=m.length/3-1;x<v;x+=3){const M=x+0,T=x+1,w=x+2;d.push(M,T,T,w,w,M)}}const y=new(m5(d)>65535?x5:J4)(d,1);y.version=g;const _=s.get(h);_&&e.remove(_),s.set(h,y)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function nne(n,e,t,r){const i=r.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,f){n.drawElements(s,f,a,d*l),t.update(f,s,1)}function h(d,f,p){if(p===0)return;let g,y;if(i)g=n,y="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[y](s,f,a,d*l,p),t.update(f,s,p)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function rne(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:r}}class s3 extends P0{constructor(e=null,t=1,r=1,i=1){super(null),this.image={data:e,width:t,height:r,depth:i},this.magFilter=o0,this.minFilter=o0,this.wrapR=g0,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}s3.prototype.isDataTexture2DArray=!0;function ine(n,e){return n[0]-e[0]}function sne(n,e){return Math.abs(e[1])-Math.abs(n[1])}function V9(n,e){let t=1;const r=e.isInterleavedBufferAttribute?e.data.array:e.array;r instanceof Int8Array?t=127:r instanceof Int16Array?t=32767:r instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",r),n.divideScalar(t)}function one(n,e,t){const r={},i=new Float32Array(8),s=new WeakMap,o=new I,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position.length;let g=s.get(u);if(g===void 0||g.count!==p){g!==void 0&&g.texture.dispose();const m=u.morphAttributes.normal!==void 0,x=u.morphAttributes.position,v=u.morphAttributes.normal||[],M=u.attributes.position.count,T=m===!0?2:1;let w=M*T,S=1;w>e.maxTextureSize&&(S=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const N=new Float32Array(w*S*4*p),D=new s3(N,w,S,p);D.format=u0,D.type=Mt;const z=T*4;for(let V=0;V<p;V++){const H=x[V],$=v[V],K=w*S*4*V;for(let U=0;U<H.count;U++){o.fromBufferAttribute(H,U),H.normalized===!0&&V9(o,H);const X=U*z;N[K+X+0]=o.x,N[K+X+1]=o.y,N[K+X+2]=o.z,N[K+X+3]=0,m===!0&&(o.fromBufferAttribute($,U),$.normalized===!0&&V9(o,$),N[K+X+4]=o.x,N[K+X+5]=o.y,N[K+X+6]=o.z,N[K+X+7]=0)}}g={count:p,texture:D,size:new ie(w,S)},s.set(u,g)}let y=0;for(let m=0;m<f.length;m++)y+=f[m];const _=u.morphTargetsRelative?1:1-y;d.getUniforms().setValue(n,"morphTargetBaseInfluence",_),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const p=f===void 0?0:f.length;let g=r[u.id];if(g===void 0||g.length!==p){g=[];for(let v=0;v<p;v++)g[v]=[v,0];r[u.id]=g}for(let v=0;v<p;v++){const M=g[v];M[0]=v,M[1]=f[v]}g.sort(sne);for(let v=0;v<8;v++)v<p&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(ine);const y=u.morphAttributes.position,_=u.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const M=a[v],T=M[0],w=M[1];T!==Number.MAX_SAFE_INTEGER&&w?(y&&u.getAttribute("morphTarget"+v)!==y[T]&&u.setAttribute("morphTarget"+v,y[T]),_&&u.getAttribute("morphNormal"+v)!==_[T]&&u.setAttribute("morphNormal"+v,_[T]),i[v]=w,m+=w):(y&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),_&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const x=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(n,"morphTargetBaseInfluence",x),d.getUniforms().setValue(n,"morphTargetInfluences",i)}}return{update:l}}function ane(n,e,t,r){let i=new WeakMap;function s(l){const c=r.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class A5 extends P0{constructor(e=null,t=1,r=1,i=1){super(null),this.image={data:e,width:t,height:r,depth:i},this.magFilter=o0,this.minFilter=o0,this.wrapR=g0,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}A5.prototype.isDataTexture3D=!0;const T5=new P0,lne=new s3,cne=new A5,E5=new t2,k9=[],G9=[],W9=new Float32Array(16),$9=new Float32Array(9),X9=new Float32Array(4);function is(n,e,t){const r=n[0];if(r<=0||r>0)return n;const i=e*t;let s=k9[i];if(s===void 0&&(s=new Float32Array(i),k9[i]=s),e!==0){r.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ot(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function rt(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function C5(n,e){let t=G9[e];t===void 0&&(t=new Int32Array(e),G9[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function une(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hne(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;n.uniform2fv(this.addr,e),rt(t,e)}}function dne(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;n.uniform3fv(this.addr,e),rt(t,e)}}function fne(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;n.uniform4fv(this.addr,e),rt(t,e)}}function pne(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rt(t,e)}else{if(ot(t,r))return;X9.set(r),n.uniformMatrix2fv(this.addr,!1,X9),rt(t,r)}}function mne(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rt(t,e)}else{if(ot(t,r))return;$9.set(r),n.uniformMatrix3fv(this.addr,!1,$9),rt(t,r)}}function _ne(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rt(t,e)}else{if(ot(t,r))return;W9.set(r),n.uniformMatrix4fv(this.addr,!1,W9),rt(t,r)}}function gne(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function vne(n,e){const t=this.cache;ot(t,e)||(n.uniform2iv(this.addr,e),rt(t,e))}function xne(n,e){const t=this.cache;ot(t,e)||(n.uniform3iv(this.addr,e),rt(t,e))}function yne(n,e){const t=this.cache;ot(t,e)||(n.uniform4iv(this.addr,e),rt(t,e))}function wne(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Mne(n,e){const t=this.cache;ot(t,e)||(n.uniform2uiv(this.addr,e),rt(t,e))}function bne(n,e){const t=this.cache;ot(t,e)||(n.uniform3uiv(this.addr,e),rt(t,e))}function Sne(n,e){const t=this.cache;ot(t,e)||(n.uniform4uiv(this.addr,e),rt(t,e))}function Ane(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.safeSetTexture2D(e||T5,i)}function Tne(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture3D(e||cne,i)}function Ene(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.safeSetTextureCube(e||E5,i)}function Cne(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture2DArray(e||lne,i)}function Lne(n){switch(n){case 5126:return une;case 35664:return hne;case 35665:return dne;case 35666:return fne;case 35674:return pne;case 35675:return mne;case 35676:return _ne;case 5124:case 35670:return gne;case 35667:case 35671:return vne;case 35668:case 35672:return xne;case 35669:case 35673:return yne;case 5125:return wne;case 36294:return Mne;case 36295:return bne;case 36296:return Sne;case 35678:case 36198:case 36298:case 36306:case 35682:return Ane;case 35679:case 36299:case 36307:return Tne;case 35680:case 36300:case 36308:case 36293:return Ene;case 36289:case 36303:case 36311:case 36292:return Cne}}function Pne(n,e){n.uniform1fv(this.addr,e)}function Rne(n,e){const t=is(e,this.size,2);n.uniform2fv(this.addr,t)}function Fne(n,e){const t=is(e,this.size,3);n.uniform3fv(this.addr,t)}function zne(n,e){const t=is(e,this.size,4);n.uniform4fv(this.addr,t)}function Ine(n,e){const t=is(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Dne(n,e){const t=is(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Nne(n,e){const t=is(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function One(n,e){n.uniform1iv(this.addr,e)}function Bne(n,e){n.uniform2iv(this.addr,e)}function Hne(n,e){n.uniform3iv(this.addr,e)}function Une(n,e){n.uniform4iv(this.addr,e)}function Vne(n,e){n.uniform1uiv(this.addr,e)}function kne(n,e){n.uniform2uiv(this.addr,e)}function Gne(n,e){n.uniform3uiv(this.addr,e)}function Wne(n,e){n.uniform4uiv(this.addr,e)}function $ne(n,e,t){const r=e.length,i=C5(t,r);n.uniform1iv(this.addr,i);for(let s=0;s!==r;++s)t.safeSetTexture2D(e[s]||T5,i[s])}function Xne(n,e,t){const r=e.length,i=C5(t,r);n.uniform1iv(this.addr,i);for(let s=0;s!==r;++s)t.safeSetTextureCube(e[s]||E5,i[s])}function jne(n){switch(n){case 5126:return Pne;case 35664:return Rne;case 35665:return Fne;case 35666:return zne;case 35674:return Ine;case 35675:return Dne;case 35676:return Nne;case 5124:case 35670:return One;case 35667:case 35671:return Bne;case 35668:case 35672:return Hne;case 35669:case 35673:return Une;case 5125:return Vne;case 36294:return kne;case 36295:return Gne;case 36296:return Wne;case 35678:case 36198:case 36298:case 36306:case 35682:return $ne;case 35680:case 36300:case 36308:case 36293:return Xne}}function qne(n,e,t){this.id=n,this.addr=t,this.cache=[],this.setValue=Lne(e.type)}function L5(n,e,t){this.id=n,this.addr=t,this.cache=[],this.size=e.size,this.setValue=jne(e.type)}L5.prototype.updateCache=function(n){const e=this.cache;n instanceof Float32Array&&e.length!==n.length&&(this.cache=new Float32Array(n.length)),rt(e,n)};function P5(n){this.id=n,this.seq=[],this.map={}}P5.prototype.setValue=function(n,e,t){const r=this.seq;for(let i=0,s=r.length;i!==s;++i){const o=r[i];o.setValue(n,e[o.id],t)}};const el=/(\w+)(\])?(\[|\.)?/g;function j9(n,e){n.seq.push(e),n.map[e.id]=e}function Yne(n,e,t){const r=n.name,i=r.length;for(el.lastIndex=0;;){const s=el.exec(r),o=el.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){j9(t,c===void 0?new qne(a,n,e):new L5(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new P5(a),j9(t,h)),t=h}}}function tr(n,e){this.seq=[],this.map={};const t=n.getProgramParameter(e,35718);for(let r=0;r<t;++r){const i=n.getActiveUniform(e,r),s=n.getUniformLocation(e,i.name);Yne(i,s,this)}}tr.prototype.setValue=function(n,e,t,r){const i=this.map[e];i!==void 0&&i.setValue(n,t,r)};tr.prototype.setOptional=function(n,e,t){const r=e[t];r!==void 0&&this.setValue(n,t,r)};tr.upload=function(n,e,t,r){for(let i=0,s=e.length;i!==s;++i){const o=e[i],a=t[o.id];a.needsUpdate!==!1&&o.setValue(n,a.value,r)}};tr.seqWithValue=function(n,e){const t=[];for(let r=0,i=n.length;r!==i;++r){const s=n[r];s.id in e&&t.push(s)}return t};function q9(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}let Qne=0;function Kne(n){const e=n.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function R5(n){switch(n){case nt:return["Linear","( value )"];case ut:return["sRGB","( value )"];case K4:return["RGBE","( value )"];case c5:return["RGBM","( value, 7.0 )"];case u5:return["RGBM","( value, 16.0 )"];case h5:return["RGBD","( value, 256.0 )"];case Q4:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case DJ:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Y9(n,e,t){const r=n.getShaderParameter(e,35713),i=n.getShaderInfoLog(e).trim();return r&&i===""?"":t.toUpperCase()+`

`+i+`

`+Kne(n.getShaderSource(e))}function Lr(n,e){const t=R5(e);return"vec4 "+n+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function Zne(n,e){const t=R5(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Jne(n,e){let t;switch(e){case zZ:t="Linear";break;case IZ:t="Reinhard";break;case DZ:t="OptimizedCineon";break;case NZ:t="ACESFilmic";break;case OZ:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ere(n){return[n.extensionDerivatives||n.envMapCubeUV||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(js).join(`
`)}function tre(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function nre(n,e){const t={},r=n.getProgramParameter(e,35721);for(let i=0;i<r;i++){const s=n.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function js(n){return n!==""}function Q9(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function K9(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rre=/^[ \t]*#include +<([\w\d./]+)>/gm;function jl(n){return n.replace(rre,ire)}function ire(n,e){const t=Be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return jl(t)}const sre=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,ore=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Z9(n){return n.replace(ore,F5).replace(sre,are)}function are(n,e,t,r){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),F5(n,e,t,r)}function F5(n,e,t,r){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function J9(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lre(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ju?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===mZ?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xs&&(e="SHADOWMAP_TYPE_VSM"),e}function cre(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ns:case $o:e="ENVMAP_TYPE_CUBE";break;case Z1:case q4:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ure(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $o:case q4:e="ENVMAP_MODE_REFRACTION";break}return e}function hre(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case K1:e="ENVMAP_BLENDING_MULTIPLY";break;case RZ:e="ENVMAP_BLENDING_MIX";break;case FZ:e="ENVMAP_BLENDING_ADD";break}return e}function dre(n,e,t,r){const i=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=lre(t),c=cre(t),u=ure(t),h=hre(t),d=n.gammaFactor>0?n.gammaFactor:1,f=t.isWebGL2?"":ere(t),p=tre(s),g=i.createProgram();let y,_,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=[p].filter(js).join(`
`),y.length>0&&(y+=`
`),_=[f,p].filter(js).join(`
`),_.length>0&&(_+=`
`)):(y=[J9(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),_=[f,J9(t),"#define SHADER_NAME "+t.shaderName,p,"#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vr?"#define TONE_MAPPING":"",t.toneMapping!==Vr?Be.tonemapping_pars_fragment:"",t.toneMapping!==Vr?Jne("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===en?"#define OPAQUE":"",Be.encodings_pars_fragment,t.map?Lr("mapTexelToLinear",t.mapEncoding):"",t.matcap?Lr("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Lr("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Lr("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularColorMap?Lr("specularColorMapTexelToLinear",t.specularColorMapEncoding):"",t.sheenColorMap?Lr("sheenColorMapTexelToLinear",t.sheenColorMapEncoding):"",t.lightMap?Lr("lightMapTexelToLinear",t.lightMapEncoding):"",Zne("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(js).join(`
`)),o=jl(o),o=Q9(o,t),o=K9(o,t),a=jl(a),a=Q9(a,t),a=K9(a,t),o=Z9(o),a=Z9(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===M9?"":"out highp vec4 pc_fragColor;",t.glslVersion===M9?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=m+y+o,v=m+_+a,M=q9(i,35633,x),T=q9(i,35632,v);if(i.attachShader(g,M),i.attachShader(g,T),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),n.debug.checkShaderErrors){const N=i.getProgramInfoLog(g).trim(),D=i.getShaderInfoLog(M).trim(),z=i.getShaderInfoLog(T).trim();let V=!0,H=!0;if(i.getProgramParameter(g,35714)===!1){V=!1;const $=Y9(i,M,"vertex"),K=Y9(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+N+`
`+$+`
`+K)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||z==="")&&(H=!1);H&&(this.diagnostics={runnable:V,programLog:N,vertexShader:{log:D,prefix:y},fragmentShader:{log:z,prefix:_}})}i.deleteShader(M),i.deleteShader(T);let w;this.getUniforms=function(){return w===void 0&&(w=new tr(i,g)),w};let S;return this.getAttributes=function(){return S===void 0&&(S=nre(i,g)),S},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=Qne++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=T,this}function fre(n,e,t,r,i,s,o){const a=[],l=i.isWebGL2,c=i.logarithmicDepthBuffer,u=i.floatVertexTextures,h=i.maxVertexUniforms,d=i.vertexTextures;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},g=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap",,"roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","specularIntensityMap","specularColorMap","specularColorMapEncoding","transmission","transmissionMap","thicknessMap","sheen","sheenColorMap","sheenColorMapEncoding","sheenRoughnessMap"];function y(w){const N=w.skeleton.bones;if(u)return 1024;{const z=Math.floor((h-20)/4),V=Math.min(z,N.length);return V<N.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+N.length+" bones. This GPU supports "+V+"."),0):V}}function _(w){let S;return w&&w.isTexture?S=w.encoding:w&&w.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),S=w.texture.encoding):S=nt,l&&w&&w.isTexture&&w.format===u0&&w.type===ar&&w.encoding===ut&&(S=nt),S}function m(w,S,N,D,z){const V=D.fog,H=w.isMeshStandardMaterial?D.environment:null,$=(w.isMeshStandardMaterial?t:e).get(w.envMap||H),K=p[w.type],U=z.isSkinnedMesh?y(z):0;w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let X,ee;if(K){const re=Ot[K];X=re.vertexShader,ee=re.fragmentShader}else X=w.vertexShader,ee=w.fragmentShader;const fe=n.getRenderTarget(),we=w.alphaTest>0,pe=w.clearcoat>0;return{isWebGL2:l,shaderID:K,shaderName:w.type,vertexShader:X,fragmentShader:ee,defines:w.defines,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,instancing:z.isInstancedMesh===!0,instancingColor:z.isInstancedMesh===!0&&z.instanceColor!==null,supportsVertexTextures:d,outputEncoding:fe!==null?_(fe.texture):n.outputEncoding,map:!!w.map,mapEncoding:_(w.map),matcap:!!w.matcap,matcapEncoding:_(w.matcap),envMap:!!$,envMapMode:$&&$.mapping,envMapEncoding:_($),envMapCubeUV:!!$&&($.mapping===Z1||$.mapping===q4),lightMap:!!w.lightMap,lightMapEncoding:_(w.lightMap),aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,emissiveMapEncoding:_(w.emissiveMap),bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===OJ,tangentSpaceNormalMap:w.normalMapType===Xr,clearcoat:pe,clearcoatMap:pe&&!!w.clearcoatMap,clearcoatRoughnessMap:pe&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:pe&&!!w.clearcoatNormalMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,specularColorMapEncoding:_(w.specularColorMap),alphaMap:!!w.alphaMap,alphaTest:we,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenColorMapEncoding:_(w.sheenColorMap),sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!z.geometry&&!!z.geometry.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!z.geometry&&!!z.geometry.attributes.color&&z.geometry.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||w.sheenRoughnessMap,uvsVertexOnly:!(w.map||w.bumpMap||w.normalMap||w.specularMap||w.alphaMap||w.emissiveMap||w.roughnessMap||w.metalnessMap||w.clearcoatNormalMap||w.transmission>0||w.transmissionMap||w.thicknessMap||w.specularIntensityMap||w.specularColorMap||!!w.sheen>0||w.sheenColorMap||w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!V,useFog:w.fog,fogExp2:V&&V.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:c,skinning:z.isSkinnedMesh===!0&&U>0,maxBones:U,useVertexTexture:u,morphTargets:!!z.geometry&&!!z.geometry.morphAttributes.position,morphNormals:!!z.geometry&&!!z.geometry.morphAttributes.normal,morphTargetsCount:z.geometry&&z.geometry.morphAttributes.position?z.geometry.morphAttributes.position.length:0,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,format:w.format,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:w.toneMapped?n.toneMapping:Vr,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===or,flipSided:w.side===F0,depthPacking:w.depthPacking!==void 0?w.depthPacking:!1,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||r.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function x(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(b9(w.fragmentShader)),S.push(b9(w.vertexShader))),w.defines!==void 0)for(const N in w.defines)S.push(N),S.push(w.defines[N]);if(w.isRawShaderMaterial===!1){for(let N=0;N<g.length;N++)S.push(w[g[N]]);S.push(n.outputEncoding),S.push(n.gammaFactor)}return S.push(w.customProgramCacheKey),S.join()}function v(w){const S=p[w.type];let N;if(S){const D=Ot[S];N=et.clone(D.uniforms)}else N=w.uniforms;return N}function M(w,S){let N;for(let D=0,z=a.length;D<z;D++){const V=a[D];if(V.cacheKey===S){N=V,++N.usedTimes;break}}return N===void 0&&(N=new dre(n,S,w,s),a.push(N)),N}function T(w){if(--w.usedTimes===0){const S=a.indexOf(w);a[S]=a[a.length-1],a.pop(),w.destroy()}}return{getParameters:m,getProgramCacheKey:x,getUniforms:v,acquireProgram:M,releaseProgram:T,programs:a}}function pre(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function r(s,o,a){n.get(s)[o]=a}function i(){n=new WeakMap}return{get:e,remove:t,update:r,dispose:i}}function mre(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.program!==e.program?n.program.id-e.program.id:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function e6(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function t6(n){const e=[];let t=0;const r=[],i=[],s=[],o={id:-1};function a(){t=0,r.length=0,i.length=0,s.length=0}function l(f,p,g,y,_,m){let x=e[t];const v=n.get(g);return x===void 0?(x={id:f.id,object:f,geometry:p,material:g,program:v.program||o,groupOrder:y,renderOrder:f.renderOrder,z:_,group:m},e[t]=x):(x.id=f.id,x.object=f,x.geometry=p,x.material=g,x.program=v.program||o,x.groupOrder=y,x.renderOrder=f.renderOrder,x.z=_,x.group=m),t++,x}function c(f,p,g,y,_,m){const x=l(f,p,g,y,_,m);g.transmission>0?i.push(x):g.transparent===!0?s.push(x):r.push(x)}function u(f,p,g,y,_,m){const x=l(f,p,g,y,_,m);g.transmission>0?i.unshift(x):g.transparent===!0?s.unshift(x):r.unshift(x)}function h(f,p){r.length>1&&r.sort(f||mre),i.length>1&&i.sort(p||e6),s.length>1&&s.sort(p||e6)}function d(){for(let f=t,p=e.length;f<p;f++){const g=e[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.program=null,g.group=null}}return{opaque:r,transmissive:i,transparent:s,init:a,push:c,unshift:u,finish:d,sort:h}}function _re(n){let e=new WeakMap;function t(i,s){let o;return e.has(i)===!1?(o=new t6(n),e.set(i,[o])):s>=e.get(i).length?(o=new t6(n),e.get(i).push(o)):o=e.get(i)[s],o}function r(){e=new WeakMap}return{get:t,dispose:r}}function gre(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ae};break;case"SpotLight":t={position:new I,direction:new I,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function vre(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let xre=0;function yre(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function wre(n,e){const t=new gre,r=vre(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new I);const s=new I,o=new Ee,a=new Ee;function l(u,h){let d=0,f=0,p=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let g=0,y=0,_=0,m=0,x=0,v=0,M=0,T=0;u.sort(yre);const w=h!==!0?Math.PI:1;for(let N=0,D=u.length;N<D;N++){const z=u[N],V=z.color,H=z.intensity,$=z.distance,K=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)d+=V.r*H*w,f+=V.g*H*w,p+=V.b*H*w;else if(z.isLightProbe)for(let U=0;U<9;U++)i.probe[U].addScaledVector(z.sh.coefficients[U],H);else if(z.isDirectionalLight){const U=t.get(z);if(U.color.copy(z.color).multiplyScalar(z.intensity*w),z.castShadow){const X=z.shadow,ee=r.get(z);ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,i.directionalShadow[g]=ee,i.directionalShadowMap[g]=K,i.directionalShadowMatrix[g]=z.shadow.matrix,v++}i.directional[g]=U,g++}else if(z.isSpotLight){const U=t.get(z);if(U.position.setFromMatrixPosition(z.matrixWorld),U.color.copy(V).multiplyScalar(H*w),U.distance=$,U.coneCos=Math.cos(z.angle),U.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),U.decay=z.decay,z.castShadow){const X=z.shadow,ee=r.get(z);ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,i.spotShadow[_]=ee,i.spotShadowMap[_]=K,i.spotShadowMatrix[_]=z.shadow.matrix,T++}i.spot[_]=U,_++}else if(z.isRectAreaLight){const U=t.get(z);U.color.copy(V).multiplyScalar(H),U.halfWidth.set(z.width*.5,0,0),U.halfHeight.set(0,z.height*.5,0),i.rectArea[m]=U,m++}else if(z.isPointLight){const U=t.get(z);if(U.color.copy(z.color).multiplyScalar(z.intensity*w),U.distance=z.distance,U.decay=z.decay,z.castShadow){const X=z.shadow,ee=r.get(z);ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,ee.shadowCameraNear=X.camera.near,ee.shadowCameraFar=X.camera.far,i.pointShadow[y]=ee,i.pointShadowMap[y]=K,i.pointShadowMatrix[y]=z.shadow.matrix,M++}i.point[y]=U,y++}else if(z.isHemisphereLight){const U=t.get(z);U.skyColor.copy(z.color).multiplyScalar(H*w),U.groundColor.copy(z.groundColor).multiplyScalar(H*w),i.hemi[x]=U,x++}}m>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const S=i.hash;(S.directionalLength!==g||S.pointLength!==y||S.spotLength!==_||S.rectAreaLength!==m||S.hemiLength!==x||S.numDirectionalShadows!==v||S.numPointShadows!==M||S.numSpotShadows!==T)&&(i.directional.length=g,i.spot.length=_,i.rectArea.length=m,i.point.length=y,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotShadowMatrix.length=T,S.directionalLength=g,S.pointLength=y,S.spotLength=_,S.rectAreaLength=m,S.hemiLength=x,S.numDirectionalShadows=v,S.numPointShadows=M,S.numSpotShadows=T,i.version=xre++)}function c(u,h){let d=0,f=0,p=0,g=0,y=0;const _=h.matrixWorldInverse;for(let m=0,x=u.length;m<x;m++){const v=u[m];if(v.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),d++}else if(v.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),p++}else if(v.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),a.identity(),o.copy(v.matrixWorld),o.premultiply(_),a.extractRotation(o),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),f++}else if(v.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(_),M.direction.normalize(),y++}}}return{setup:l,setupView:c,state:i}}function n6(n,e){const t=new wre(n,e),r=[],i=[];function s(){r.length=0,i.length=0}function o(h){r.push(h)}function a(h){i.push(h)}function l(h){t.setup(r,h)}function c(h){t.setupView(r,h)}return{init:s,state:{lightsArray:r,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Mre(n,e){let t=new WeakMap;function r(s,o=0){let a;return t.has(s)===!1?(a=new n6(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new n6(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function i(){t=new WeakMap}return{get:r,dispose:i}}class o3 extends O0{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=NJ,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}o3.prototype.isMeshDepthMaterial=!0;class z5 extends O0{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}z5.prototype.isMeshDistanceMaterial=!0;const bre=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sre=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
`)a=0,l-=s;else{const h=cse(u,i,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function cse(n,e,t,r,i){const s=i.glyphs[n]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+i.familyName+".");return}const o=new tse;let a,l,c,u,h,d,f,p;if(s.o){const g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let y=0,_=g.length;y<_;)switch(g[y++]){case"m":a=g[y++]*e+t,l=g[y++]*e+r,o.moveTo(a,l);break;case"l":a=g[y++]*e+t,l=g[y++]*e+r,o.lineTo(a,l);break;case"q":c=g[y++]*e+t,u=g[y++]*e+r,h=g[y++]*e+t,d=g[y++]*e+r,o.quadraticCurveTo(h,d,c,u);break;case"b":c=g[y++]*e+t,u=g[y++]*e+r,h=g[y++]*e+t,d=g[y++]*e+r,f=g[y++]*e+t,p=g[y++]*e+r,o.bezierCurveTo(h,d,f,p,c,u);break}}return{offsetX:s.ha*e,path:o}}Eh.prototype.isFont=!0;class use extends $t{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new pse(t)}),this.register(function(t){return new yse(t)}),this.register(function(t){return new wse(t)}),this.register(function(t){return new mse(t)}),this.register(function(t){return new _se(t)}),this.register(function(t){return new gse(t)}),this.register(function(t){return new vse(t)}),this.register(function(t){return new xse(t)}),this.register(function(t){return new dse(t)}),this.register(function(t){return new Mse(t)})}load(e,t,r,i){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Gt.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new jo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},r,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,r,i){let s;const o={},a={};if(typeof e=="string")s=e;else if(Gt.decodeText(new Uint8Array(e,0,4))===Ch){try{o[je.KHR_BINARY_GLTF]=new bse(e)}catch(h){i&&i(h);return}s=o[je.KHR_BINARY_GLTF].content}else s=Gt.decodeText(new Uint8Array(e));const l=JSON.parse(s);if(l.asset===void 0||l.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Dse(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);a[h.name]=h,o[h.name]=!0}if(l.extensionsUsed)for(let u=0;u<l.extensionsUsed.length;++u){const h=l.extensionsUsed[u],d=l.extensionsRequired||[];switch(h){case je.KHR_MATERIALS_UNLIT:o[h]=new fse;break;case je.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:o[h]=new Tse;break;case je.KHR_DRACO_MESH_COMPRESSION:o[h]=new Sse(l,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[h]=new Ase;break;case je.KHR_MESH_QUANTIZATION:o[h]=new Ese;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(r,i)}}function hse(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class dse{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let r=0,i=t.length;r<i;r++){const s=t[r];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,r="light:"+e;let i=t.cache.get(r);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ae(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new qi(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new zo(u),c.distance=h;break;case"spot":c=new ji(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(r,i),i}createNodeAttachment(e){const t=this,r=this.parser,s=r.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return r._getNodeRef(t.cache,a,l)})}}class fse{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return St}extendParams(e,t,r){const i=[];e.color=new Ae(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(r.assignTexture(e,"map",s.baseColorTexture))}return Promise.all(i)}}class pse{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:mr}extendMaterialParams(e,t){const r=this.parser,i=r.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(r.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(r.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(r.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ie(a,a)}return Promise.all(s)}}class mse{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:mr}extendMaterialParams(e,t){const r=this.parser,i=r.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(r.assignTexture(t,"sheenColorMap",o.sheenColorTexture)),o.sheenRoughnessTexture!==void 0&&s.push(r.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class _se{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:mr}extendMaterialParams(e,t){const r=this.parser,i=r.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(r.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class gse{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:mr}extendMaterialParams(e,t){const r=this.parser,i=r.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(r.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ae(a[0],a[1],a[2]),Promise.all(s)}}class vse{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:mr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class xse{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:mr}extendMaterialParams(e,t){const r=this.parser,i=r.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(r.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ae(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(r.assignTexture(t,"specularColorMap",o.specularColorTexture).then(function(l){l.encoding=ut})),Promise.all(s)}}class yse{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,r=t.json,i=r.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=r.images[s.source],a=t.options.ktx2Loader;if(!a){if(r.extensionsRequired&&r.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o,a)}}class wse{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,r=this.parser,i=r.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=r.textureLoader;if(a.uri){const c=r.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return r.loadTextureImage(e,a,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return r.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Mse{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,r=t.bufferViews[e];if(r.extensions&&r.extensions[this.name]){const i=r.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([s,o.ready]).then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new ArrayBuffer(u*h),f=new Uint8Array(a[0],l,c);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})}else return null}}const Ch="glTF",Hs=12,F6={JSON:1313821514,BIN:5130562};class bse{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Hs);if(this.header={magic:Gt.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ch)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Hs,i=new DataView(e,Hs);let s=0;for(;s<r;){const o=i.getUint32(s,!0);s+=4;const a=i.getUint32(s,!0);if(s+=4,a===F6.JSON){const l=new Uint8Array(e,Hs+s,o);this.content=Gt.decodeText(l)}else if(a===F6.BIN){const l=Hs+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Sse{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const r=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=e4[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=e4[u]||u.toLowerCase();if(o[u]!==void 0){const d=r.accessors[e.attributes[u]],f=Io[d.componentType];c[h]=f,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(d){for(const f in d.attributes){const p=d.attributes[f],g=l[f];g!==void 0&&(p.normalized=g)}h(d)},a,c)})})}}class Ase{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Jl extends ls{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),r=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	texelSpecular = sRGBToLinear( texelSpecular );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),o=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new Ae().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(l){for(const c in a)l.uniforms[c]=a[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",r).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",o)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(l){a.specular.value=l}},specularMap:{get:function(){return a.specularMap.value},set:function(l){a.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(l){a.glossiness.value=l}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(l){a.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class Tse{constructor(){this.name=je.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"]}getMaterialType(){return Jl}extendParams(e,t,r){const i=t.extensions[this.name];e.color=new Ae(1,1,1),e.opacity=1;const s=[];if(Array.isArray(i.diffuseFactor)){const o=i.diffuseFactor;e.color.fromArray(o),e.opacity=o[3]}if(i.diffuseTexture!==void 0&&s.push(r.assignTexture(e,"map",i.diffuseTexture)),e.emissive=new Ae(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new Ae(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const o=i.specularGlossinessTexture;s.push(r.assignTexture(e,"glossinessMap",o)),s.push(r.assignTexture(e,"specularMap",o))}return Promise.all(s)}createMaterial(e){const t=new Jl(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=Xr,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t}}class Ese{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class Gr extends An{constructor(e,t,r,i){super(e,t,r,i)}copySampleValue_(e){const t=this.resultBuffer,r=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=r[s+o];return t}}Gr.prototype.beforeStart_=Gr.prototype.copySampleValue_;Gr.prototype.afterEnd_=Gr.prototype.copySampleValue_;Gr.prototype.interpolate_=function(n,e,t,r){const i=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=o*2,l=o*3,c=r-e,u=(t-e)/c,h=u*u,d=h*u,f=n*l,p=f-l,g=-2*d+3*h,y=d-h,_=1-g,m=y-h+u;for(let x=0;x!==o;x++){const v=s[p+x+o],M=s[p+x+a]*c,T=s[f+x+o],w=s[f+x]*c;i[x]=_*v+m*M+g*T+y*w}return i};const Cse=new C0;class Lse extends Gr{interpolate_(e,t,r,i){const s=super.interpolate_(e,t,r,i);return Cse.fromArray(s).normalize().toArray(s),s}}const vn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Io={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},z6={9728:o0,9729:a0,9984:kl,9985:o5,9986:Gl,9987:$r},I6={33071:g0,33648:p1,10497:nn},D6={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},e4={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Pse={CUBICSPLINE:void 0,LINEAR:Vi,STEP:Ao},hl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Rse(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new ls({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ui})),n.DefaultMaterial}function Us(n,e,t){for(const r in t.extensions)n[r]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[r]=t.extensions[r])}function Rr(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Fse(n,e,t){let r=!1,i=!1;for(let a=0,l=e.length;a<l;a++){const c=e[a];if(c.POSITION!==void 0&&(r=!0),c.NORMAL!==void 0&&(i=!0),r&&i)break}if(!r&&!i)return Promise.resolve(n);const s=[],o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];if(r){const u=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):n.attributes.position;s.push(u)}if(i){const u=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):n.attributes.normal;o.push(u)}}return Promise.all([Promise.all(s),Promise.all(o)]).then(function(a){const l=a[0],c=a[1];return r&&(n.morphAttributes.position=l),i&&(n.morphAttributes.normal=c),n.morphTargetsRelative=!0,n})}function zse(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,r=e.weights.length;t<r;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let r=0,i=t.length;r<i;r++)n.morphTargetDictionary[t[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ise(n){const e=n.extensions&&n.extensions[je.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+N6(e.attributes):t=n.indices+":"+N6(n.attributes)+":"+n.mode,t}function N6(n){let e="";const t=Object.keys(n).sort();for(let r=0,i=t.length;r<i;r++)e+=t[r]+":"+n[t[r]]+";";return e}function t4(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}class Dse{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new hse,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.textureCache={},this.nodeNamesUsed={},typeof createImageBitmap<"u"&&/Firefox/.test(navigator.userAgent)===!1?this.textureLoader=new Sh(this.options.manager):this.textureLoader=new Yr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const r=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([r.getDependencies("scene"),r.getDependencies("animation"),r.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:r,userData:{}};Us(s,a,i),Rr(a,i),Promise.all(r._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],r=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(r[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,r){if(e.refs[t]<=1)return r;const i=r.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(r,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let r=0;r<t.length;r++){const i=e(t[r]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const r=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&r.push(s)}return r}getDependency(e,t){const r=e+":"+t;let i=this.cache.get(r);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this.loadAnimation(t);break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(r,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const r=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return r.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],r=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){r.load(Gt.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(r){const i=t.byteLength||0,s=t.byteOffset||0;return r.slice(s,s+i)})}loadAccessor(e){const t=this,r=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=D6[i.type],c=Io[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?r.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let g,y;if(f&&f!==h){const _=Math.floor(d/f),m="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let x=t.cache.get(m);x||(g=new c(a,_*f,i.count*f/u),x=new ss(g,f/u),t.cache.add(m,x)),y=new Gi(x,l,d%f/u,p)}else a===null?g=new c(i.count*l):g=new c(a,d,i.count*l),y=new b0(g,l,p);if(i.sparse!==void 0){const _=D6.SCALAR,m=Io[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,M=new m(o[1],x,i.sparse.count*_),T=new c(o[2],v,i.sparse.count*l);a!==null&&(y=new b0(y.array.slice(),y.itemSize,y.normalized));for(let w=0,S=M.length;w<S;w++){const N=M[w];if(y.setX(N,T[w*l]),l>=2&&y.setY(N,T[w*l+1]),l>=3&&y.setZ(N,T[w*l+2]),l>=4&&y.setW(N,T[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return y})}loadTexture(e){const t=this.json,r=this.options,i=t.textures[e],s=t.images[i.source];let o=this.textureLoader;if(s.uri){const a=r.manager.getHandler(s.uri);a!==null&&(o=a)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,r){const i=this,s=this.json,o=this.options,a=s.textures[e],l=(t.uri||t.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=self.URL||self.webkitURL;let u=t.uri||"",h=!1;if(t.bufferView!==void 0)u=i.getDependency("bufferView",t.bufferView).then(function(f){h=!0;const p=new Blob([f],{type:t.mimeType});return u=c.createObjectURL(p),u});else if(t.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(u).then(function(f){return new Promise(function(p,g){let y=p;r.isImageBitmapLoader===!0&&(y=function(_){const m=new P0(_);m.needsUpdate=!0,p(m)}),r.load(Gt.resolveURL(f,o.path),y,void 0,g)})}).then(function(f){h===!0&&c.revokeObjectURL(u),f.flipY=!1,a.name&&(f.name=a.name);const g=(s.samplers||{})[a.sampler]||{};return f.magFilter=z6[g.magFilter]||a0,f.minFilter=z6[g.minFilter]||$r,f.wrapS=I6[g.wrapS]||nn,f.wrapT=I6[g.wrapT]||nn,i.associations.set(f,{textures:e}),f}).catch(function(){return console.error("THREE.GLTFLoader: Couldn't load texture",u),null});return this.textureCache[l]=d,d}assignTexture(e,t,r){const i=this;return this.getDependency("texture",r.index).then(function(s){if(r.texCoord!==void 0&&r.texCoord!=0&&!(t==="aoMap"&&r.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+r.texCoord+" for texture "+t+" not yet supported."),i.extensions[je.KHR_TEXTURE_TRANSFORM]){const o=r.extensions!==void 0?r.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const a=i.associations.get(s);s=i.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),i.associations.set(s,a)}}return e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let r=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+r.uuid;let l=this.cache.get(a);l||(l=new a2,O0.prototype.copy.call(l,r),l.color.copy(r.color),l.map=r.map,l.sizeAttenuation=!1,this.cache.add(a,l)),r=l}else if(e.isLine){const a="LineBasicMaterial:"+r.uuid;let l=this.cache.get(a);l||(l=new pr,O0.prototype.copy.call(l,r),l.color.copy(r.color),this.cache.add(a,l)),r=l}if(i||s||o){let a="ClonedMaterial:"+r.uuid+":";r.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=r.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(r))),r=l}r.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=r}getMaterialType(){return ls}loadMaterial(e){const t=this,r=this.json,i=this.extensions,s=r.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[je.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const h=i[je.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else if(l[je.KHR_MATERIALS_UNLIT]){const h=i[je.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Ae(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=or);const u=s.alphaMode||hl.OPAQUE;if(u===hl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.format=en,a.transparent=!1,u===hl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==St&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ie(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&o!==St&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==St&&(a.emissive=new Ae().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==St&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture)),Promise.all(c).then(function(){let h;return o===Jl?h=i[je.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):h=new o(a),s.name&&(h.name=s.name),h.map&&(h.map.encoding=ut),h.emissiveMap&&(h.emissiveMap.encoding=ut),Rr(h,s),t.associations.set(h,{materials:e}),s.extensions&&Us(i,h,s),h})}createUniqueName(e){const t=Ye.sanitizeNodeName(e||"");let r=t;for(let i=1;this.nodeNamesUsed[r];++i)r=t+"_"+i;return this.nodeNamesUsed[r]=!0,r}loadGeometries(e){const t=this,r=this.extensions,i=this.primitiveCache;function s(a){return r[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return O6(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Ise(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=O6(new Ne,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,r=this.json,i=this.extensions,s=r.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Rse(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,p=u.length;f<p;f++){const g=u[f],y=o[f];let _;const m=c[f];if(y.mode===vn.TRIANGLES||y.mode===vn.TRIANGLE_STRIP||y.mode===vn.TRIANGLE_FAN||y.mode===void 0)_=s.isSkinnedMesh===!0?new i2(g,m):new N0(g,m),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),y.mode===vn.TRIANGLE_STRIP?_.geometry=B6(_.geometry,IJ):y.mode===vn.TRIANGLE_FAN&&(_.geometry=B6(_.geometry,l5));else if(y.mode===vn.LINES)_=new o2(g,m);else if(y.mode===vn.LINE_STRIP)_=new os(g,m);else if(y.mode===vn.LINE_LOOP)_=new B5(g,m);else if(y.mode===vn.POINTS)_=new c3(g,m);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(_.geometry.morphAttributes).length>0&&zse(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),Rr(_,s),y.extensions&&Us(i,_,y),t.assignFinalMaterial(_),h.push(_)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return h[0];const d=new Vt;t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t;const r=this.json.cameras[e],i=r[r.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return r.type==="perspective"?t=new q0(bt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):r.type==="orthographic"&&(t=new fr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),r.name&&(t.name=this.createUniqueName(r.name)),Rr(t,r),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],r={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(r):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return r.inverseBindMatrices=i,r})}loadAnimation(e){const r=this.json.animations[e],i=[],s=[],o=[],a=[],l=[];for(let c=0,u=r.channels.length;c<u;c++){const h=r.channels[c],d=r.samplers[h.sampler],f=h.target,p=f.node!==void 0?f.node:f.id,g=r.parameters!==void 0?r.parameters[d.input]:d.input,y=r.parameters!==void 0?r.parameters[d.output]:d.output;i.push(this.getDependency("node",p)),s.push(this.getDependency("accessor",g)),o.push(this.getDependency("accessor",y)),a.push(d),l.push(f)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2],f=c[3],p=c[4],g=[];for(let _=0,m=u.length;_<m;_++){const x=u[_],v=h[_],M=d[_],T=f[_],w=p[_];if(x===void 0)continue;x.updateMatrix(),x.matrixAutoUpdate=!0;let S;switch(Gn[w.path]){case Gn.weights:S=Wi;break;case Gn.rotation:S=ur;break;case Gn.position:case Gn.scale:default:S=$i;break}const N=x.name?x.name:x.uuid,D=T.interpolation!==void 0?Pse[T.interpolation]:Vi,z=[];Gn[w.path]===Gn.weights?x.traverse(function(H){H.isMesh===!0&&H.morphTargetInfluences&&z.push(H.name?H.name:H.uuid)}):z.push(N);let V=M.array;if(M.normalized){const H=t4(V.constructor),$=new Float32Array(V.length);for(let K=0,U=V.length;K<U;K++)$[K]=V[K]*H;V=$}for(let H=0,$=z.length;H<$;H++){const K=new S(z[H]+"."+Gn[w.path],v.array,V,D);T.interpolation==="CUBICSPLINE"&&(K.createInterpolant=function(X){const ee=this instanceof ur?Lse:Gr;return new ee(this.times,this.values,this.getValueSize()/3,X)},K.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),g.push(K)}}const y=r.name?r.name:"animation_"+e;return new x1(y,void 0,g)})}createNodeMesh(e){const t=this.json,r=this,i=t.nodes[e];return i.mesh===void 0?null:r.getDependency("mesh",i.mesh).then(function(s){const o=r._getNodeRef(r.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,r=this.extensions,i=this,s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"";return function(){const a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(s.isBone===!0?l=new Lo:a.length>1?l=new Vt:a.length===1?l=a[0]:l=new r0,l!==a[0])for(let c=0,u=a.length;c<u;c++)l.add(a[c]);if(s.name&&(l.userData.name=s.name,l.name=o),Rr(l,s),s.extensions&&Us(r,l,s),s.matrix!==void 0){const c=new Ee;c.fromArray(s.matrix),l.applyMatrix4(c)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,r=this.extensions,i=this.json.scenes[e],s=this,o=new Vt;i.name&&(o.name=s.createUniqueName(i.name)),Rr(o,i),i.extensions&&Us(r,o,i);const a=i.nodes||[],l=[];for(let c=0,u=a.length;c<u;c++)l.push(Lh(a[c],o,t,s));return Promise.all(l).then(function(){const c=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof O0||d instanceof P0)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(o),o})}}function Lh(n,e,t,r){const i=t.nodes[n];return r.getDependency("node",n).then(function(s){if(i.skin===void 0)return s;let o;return r.getDependency("skin",i.skin).then(function(a){o=a;const l=[];for(let c=0,u=o.joints.length;c<u;c++)l.push(r.getDependency("node",o.joints[c]));return Promise.all(l)}).then(function(a){return s.traverse(function(l){if(!l.isMesh)return;const c=[],u=[];for(let h=0,d=a.length;h<d;h++){const f=a[h];if(f){c.push(f);const p=new Ee;o.inverseBindMatrices!==void 0&&p.fromArray(o.inverseBindMatrices.array,h*16),u.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',o.joints[h])}l.bind(new s2(c,u),l.matrixWorld)}),s})}).then(function(s){e.add(s);const o=[];if(i.children){const a=i.children;for(let l=0,c=a.length;l<c;l++){const u=a[l];o.push(Lh(u,s,t,r))}}return Promise.all(o)})}function Nse(n,e,t){const r=e.attributes,i=new Ft;if(r.POSITION!==void 0){const a=t.json.accessors[r.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){const u=t4(Io[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new I,l=new I;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const g=t4(Io[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}n.boundingBox=i;const o=new jr;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,n.boundingSphere=o}function O6(n,e,t){const r=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in r){const a=e4[o]||o.toLowerCase();a in n.attributes||i.push(s(r[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});i.push(o)}return Rr(n,e),Nse(n,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Fse(n,e.targets,t):n})}function B6(n,e){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const r=t.count-2,i=[];if(e===l5)for(let o=1;o<=r;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<r;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==r&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(i),s}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var H6={},n4=function(n){return URL.createObjectURL(new Blob([n],{type:"text/javascript"}))},Ph=function(n){return new Worker(n)};try{URL.revokeObjectURL(n4(""))}catch{n4=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)},Ph=function(e){return new Worker(e,{type:"module"})}}var Ose=function(n,e,t,r,i){var s=Ph(H6[e]||(H6[e]=n4(n)));return s.onerror=function(o){return i(o.error,null)},s.onmessage=function(o){return i(null,o.data)},s.postMessage(t,r),s},$e=Uint8Array,W0=Uint16Array,Tn=Uint32Array,hs=new $e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ds=new $e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Do=new $e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Rh=function(n,e){for(var t=new W0(31),r=0;r<31;++r)t[r]=e+=1<<n[r-1];for(var i=new Tn(t[30]),r=1;r<30;++r)for(var s=t[r];s<t[r+1];++s)i[s]=s-t[r]<<5|r;return[t,i]},Fh=Rh(hs,2),M3=Fh[0],y1=Fh[1];M3[28]=258,y1[258]=28;var zh=Rh(ds,0),Ih=zh[0],r4=zh[1],No=new W0(32768);for(var m0=0;m0<32768;++m0){var Wn=(m0&43690)>>>1|(m0&21845)<<1;Wn=(Wn&52428)>>>2|(Wn&13107)<<2,Wn=(Wn&61680)>>>4|(Wn&3855)<<4,No[m0]=((Wn&65280)>>>8|(Wn&255)<<8)>>>1}var Lt=function(n,e,t){for(var r=n.length,i=0,s=new W0(e);i<r;++i)++s[n[i]-1];var o=new W0(e);for(i=0;i<e;++i)o[i]=o[i-1]+s[i-1]<<1;var a;if(t){a=new W0(1<<e);var l=15-e;for(i=0;i<r;++i)if(n[i])for(var c=i<<4|n[i],u=e-n[i],h=o[n[i]-1]++<<u,d=h|(1<<u)-1;h<=d;++h)a[No[h]>>>l]=c}else for(a=new W0(r),i=0;i<r;++i)n[i]&&(a[i]=No[o[n[i]-1]++]>>>15-n[i]);return a},En=new $e(288);for(var m0=0;m0<144;++m0)En[m0]=8;for(var m0=144;m0<256;++m0)En[m0]=9;for(var m0=256;m0<280;++m0)En[m0]=7;for(var m0=280;m0<288;++m0)En[m0]=8;var Yi=new $e(32);for(var m0=0;m0<32;++m0)Yi[m0]=5;var Dh=Lt(En,9,0),Nh=Lt(En,9,1),Oh=Lt(Yi,5,0),Bh=Lt(Yi,5,1),t1=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},wt=function(n,e,t){var r=e/8|0;return(n[r]|n[r+1]<<8)>>(e&7)&t},n1=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},qo=function(n){return(n/8|0)+(n&7&&1)},Pt=function(n,e,t){(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length);var r=new(n instanceof W0?W0:n instanceof Tn?Tn:$e)(t-e);return r.set(n.subarray(e,t)),r},Yo=function(n,e,t){var r=n.length;if(!r||t&&!t.l&&r<5)return e||new $e(0);var i=!e||t,s=!t||t.i;t||(t={}),e||(e=new $e(r*3));var o=function(te){var q=e.length;if(te>q){var se=new $e(Math.max(q*2,te));se.set(e),e=se}},a=t.f||0,l=t.p||0,c=t.b||0,u=t.l,h=t.d,d=t.m,f=t.n,p=r*8;do{if(!u){t.f=a=wt(n,l,1);var g=wt(n,l+1,3);if(l+=3,g)if(g==1)u=Nh,h=Bh,d=9,f=5;else if(g==2){var x=wt(n,l,31)+257,v=wt(n,l+10,15)+4,M=x+wt(n,l+5,31)+1;l+=14;for(var T=new $e(M),w=new $e(19),S=0;S<v;++S)w[Do[S]]=wt(n,l+S*3,7);l+=v*3;for(var N=t1(w),D=(1<<N)-1,z=Lt(w,N,1),S=0;S<M;){var V=z[wt(n,l,D)];l+=V&15;var y=V>>>4;if(y<16)T[S++]=y;else{var H=0,$=0;for(y==16?($=3+wt(n,l,3),l+=2,H=T[S-1]):y==17?($=3+wt(n,l,7),l+=3):y==18&&($=11+wt(n,l,127),l+=7);$--;)T[S++]=H}}var K=T.subarray(0,x),U=T.subarray(x);d=t1(K),f=t1(U),u=Lt(K,d,1),h=Lt(U,f,1)}else throw"invalid block type";else{var y=qo(l)+4,_=n[y-4]|n[y-3]<<8,m=y+_;if(m>r){if(s)throw"unexpected EOF";break}i&&o(c+_),e.set(n.subarray(y,m),c),t.b=c+=_,t.p=l=m*8;continue}if(l>p){if(s)throw"unexpected EOF";break}}i&&o(c+131072);for(var X=(1<<d)-1,ee=(1<<f)-1,fe=l;;fe=l){var H=u[n1(n,l)&X],we=H>>>4;if(l+=H&15,l>p){if(s)throw"unexpected EOF";break}if(!H)throw"invalid length/literal";if(we<256)e[c++]=we;else if(we==256){fe=l,u=null;break}else{var pe=we-254;if(we>264){var S=we-257,be=hs[S];pe=wt(n,l,(1<<be)-1)+M3[S],l+=be}var re=h[n1(n,l)&ee],ce=re>>>4;if(!re)throw"invalid distance";l+=re&15;var U=Ih[ce];if(ce>3){var be=ds[ce];U+=n1(n,l)&(1<<be)-1,l+=be}if(l>p){if(s)throw"unexpected EOF";break}i&&o(c+131072);for(var xe=c+pe;c<xe;c+=4)e[c]=e[c-U],e[c+1]=e[c+1-U],e[c+2]=e[c+2-U],e[c+3]=e[c+3-U];c=xe}}t.l=u,t.p=fe,t.b=c,u&&(a=1,t.m=d,t.d=h,t.n=f)}while(!a);return c==e.length?e:Pt(e,0,c)},qt=function(n,e,t){t<<=e&7;var r=e/8|0;n[r]|=t,n[r+1]|=t>>>8},bi=function(n,e,t){t<<=e&7;var r=e/8|0;n[r]|=t,n[r+1]|=t>>>8,n[r+2]|=t>>>16},r1=function(n,e){for(var t=[],r=0;r<n.length;++r)n[r]&&t.push({s:r,f:n[r]});var i=t.length,s=t.slice();if(!i)return[wn,0];if(i==1){var o=new $e(t[0].s+1);return o[t[0].s]=1,[o,1]}t.sort(function(M,T){return M.f-T.f}),t.push({s:-1,f:25001});var a=t[0],l=t[1],c=0,u=1,h=2;for(t[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=i-1;)a=t[t[c].f<t[h].f?c++:h++],l=t[c!=u&&t[c].f<t[h].f?c++:h++],t[u++]={s:-1,f:a.f+l.f,l:a,r:l};for(var d=s[0].s,r=1;r<i;++r)s[r].s>d&&(d=s[r].s);var f=new W0(d+1),p=w1(t[u-1],f,0);if(p>e){var r=0,g=0,y=p-e,_=1<<y;for(s.sort(function(T,w){return f[w.s]-f[T.s]||T.f-w.f});r<i;++r){var m=s[r].s;if(f[m]>e)g+=_-(1<<p-f[m]),f[m]=e;else break}for(g>>>=y;g>0;){var x=s[r].s;f[x]<e?g-=1<<e-f[x]++-1:++r}for(;r>=0&&g;--r){var v=s[r].s;f[v]==e&&(--f[v],++g)}p=e}return[new $e(f),p]},w1=function(n,e,t){return n.s==-1?Math.max(w1(n.l,e,t+1),w1(n.r,e,t+1)):e[n.s]=t},i4=function(n){for(var e=n.length;e&&!n[--e];);for(var t=new W0(++e),r=0,i=n[0],s=1,o=function(l){t[r++]=l},a=1;a<=e;++a)if(n[a]==i&&a!=e)++s;else{if(!i&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(i),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(i);s=1,i=n[a]}return[t.subarray(0,r),e]},Si=function(n,e){for(var t=0,r=0;r<e.length;++r)t+=n[r]*e[r];return t},co=function(n,e,t){var r=t.length,i=qo(e+2);n[i]=r&255,n[i+1]=r>>>8,n[i+2]=n[i]^255,n[i+3]=n[i+1]^255;for(var s=0;s<r;++s)n[i+s+4]=t[s];return(i+4+r)*8},s4=function(n,e,t,r,i,s,o,a,l,c,u){qt(e,u++,t),++i[256];for(var h=r1(i,15),d=h[0],f=h[1],p=r1(s,15),g=p[0],y=p[1],_=i4(d),m=_[0],x=_[1],v=i4(g),M=v[0],T=v[1],w=new W0(19),S=0;S<m.length;++S)w[m[S]&31]++;for(var S=0;S<M.length;++S)w[M[S]&31]++;for(var N=r1(w,7),D=N[0],z=N[1],V=19;V>4&&!D[Do[V-1]];--V);var H=c+5<<3,$=Si(i,En)+Si(s,Yi)+o,K=Si(i,d)+Si(s,g)+o+14+3*V+Si(w,D)+(2*w[16]+3*w[17]+7*w[18]);if(H<=$&&H<=K)return co(e,u,n.subarray(l,l+c));var U,X,ee,fe;if(qt(e,u,1+(K<$)),u+=2,K<$){U=Lt(d,f,0),X=d,ee=Lt(g,y,0),fe=g;var we=Lt(D,z,0);qt(e,u,x-257),qt(e,u+5,T-1),qt(e,u+10,V-4),u+=14;for(var S=0;S<V;++S)qt(e,u+3*S,D[Do[S]]);u+=3*V;for(var pe=[m,M],be=0;be<2;++be)for(var re=pe[be],S=0;S<re.length;++S){var ce=re[S]&31;qt(e,u,we[ce]),u+=D[ce],ce>15&&(qt(e,u,re[S]>>>5&127),u+=re[S]>>>12)}}else U=Dh,X=En,ee=Oh,fe=Yi;for(var S=0;S<a;++S)if(r[S]>255){var ce=r[S]>>>18&31;bi(e,u,U[ce+257]),u+=X[ce+257],ce>7&&(qt(e,u,r[S]>>>23&31),u+=hs[ce]);var xe=r[S]&31;bi(e,u,ee[xe]),u+=fe[xe],xe>3&&(bi(e,u,r[S]>>>5&8191),u+=ds[xe])}else bi(e,u,U[r[S]]),u+=X[r[S]];return bi(e,u,U[256]),u+X[256]},Hh=new Tn([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),wn=new $e(0),Uh=function(n,e,t,r,i,s){var o=n.length,a=new $e(r+o+5*(1+Math.ceil(o/7e3))+i),l=a.subarray(r,a.length-i),c=0;if(!e||o<8)for(var u=0;u<=o;u+=65535){var h=u+65535;h<o?c=co(l,c,n.subarray(u,h)):(l[u]=s,c=co(l,c,n.subarray(u,o)))}else{for(var d=Hh[e-1],f=d>>>13,p=d&8191,g=(1<<t)-1,y=new W0(32768),_=new W0(g+1),m=Math.ceil(t/3),x=2*m,v=function(O){return(n[O]^n[O+1]<<m^n[O+2]<<x)&g},M=new Tn(25e3),T=new W0(288),w=new W0(32),S=0,N=0,u=0,D=0,z=0,V=0;u<o;++u){var H=v(u),$=u&32767,K=_[H];if(y[$]=K,_[H]=$,z<=u){var U=o-u;if((S>7e3||D>24576)&&U>423){c=s4(n,l,0,M,T,w,N,D,V,u-V,c),D=S=N=0,V=u;for(var X=0;X<286;++X)T[X]=0;for(var X=0;X<30;++X)w[X]=0}var ee=2,fe=0,we=p,pe=$-K&32767;if(U>2&&H==v(u-pe))for(var be=Math.min(f,U)-1,re=Math.min(32767,u),ce=Math.min(258,U);pe<=re&&--we&&$!=K;){if(n[u+ee]==n[u+ee-pe]){for(var xe=0;xe<ce&&n[u+xe]==n[u+xe-pe];++xe);if(xe>ee){if(ee=xe,fe=pe,xe>be)break;for(var te=Math.min(pe,xe-2),q=0,X=0;X<te;++X){var se=u-pe+X+32768&32767,J=y[se],le=se-J+32768&32767;le>q&&(q=le,K=se)}}}$=K,K=y[$],pe+=$-K+32768&32767}if(fe){M[D++]=268435456|y1[ee]<<18|r4[fe];var Te=y1[ee]&31,A=r4[fe]&31;N+=hs[Te]+ds[A],++T[257+Te],++w[A],z=u+ee,++S}else M[D++]=n[u],++T[n[u]]}}c=s4(n,l,s,M,T,w,N,D,V,u-V,c),!s&&c&7&&(c=co(l,c+1,wn))}return Pt(a,0,r+qo(c)+i)},Vh=function(){for(var n=new Tn(256),e=0;e<256;++e){for(var t=e,r=9;--r;)t=(t&1&&3988292384)^t>>>1;n[e]=t}return n}(),fs=function(){var n=-1;return{p:function(e){for(var t=n,r=0;r<e.length;++r)t=Vh[t&255^e[r]]^t>>>8;n=t},d:function(){return~n}}},b3=function(){var n=1,e=0;return{p:function(t){for(var r=n,i=e,s=t.length,o=0;o!=s;){for(var a=Math.min(o+2655,s);o<a;++o)i+=r+=t[o];r=(r&65535)+15*(r>>16),i=(i&65535)+15*(i>>16)}n=r,e=i},d:function(){return n%=65521,e%=65521,(n&255)<<24|n>>>8<<16|(e&255)<<8|e>>>8}}},Qr=function(n,e,t,r,i){return Uh(n,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(n.length)))*1.5):12+e.mem,t,r,!i)},Qo=function(n,e){var t={};for(var r in n)t[r]=n[r];for(var r in e)t[r]=e[r];return t},U6=function(n,e,t){for(var r=n(),i=n.toString(),s=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/ /g,"").split(","),o=0;o<r.length;++o){var a=r[o],l=s[o];if(typeof a=="function"){e+=";"+l+"=";var c=a.toString();if(a.prototype)if(c.indexOf("[native code]")!=-1){var u=c.indexOf(" ",8)+1;e+=c.slice(u,c.indexOf("(",u))}else{e+=c;for(var h in a.prototype)e+=";"+l+".prototype."+h+"="+a.prototype[h].toString()}else e+=c}else t[l]=a}return[e,t]},Ha=[],Bse=function(n){var e=[];for(var t in n)(n[t]instanceof $e||n[t]instanceof W0||n[t]instanceof Tn)&&e.push((n[t]=new n[t].constructor(n[t])).buffer);return e},kh=function(n,e,t,r){var i;if(!Ha[t]){for(var s="",o={},a=n.length-1,l=0;l<a;++l)i=U6(n[l],s,o),s=i[0],o=i[1];Ha[t]=U6(n[a],s,o)}var c=Qo({},Ha[t][1]);return Ose(Ha[t][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,c,Bse(c),r)},ps=function(){return[$e,W0,Tn,hs,ds,Do,M3,Ih,Nh,Bh,No,Lt,t1,wt,n1,qo,Pt,Yo,vs,_r,S3]},ms=function(){return[$e,W0,Tn,hs,ds,Do,y1,r4,Dh,En,Oh,Yi,No,Hh,wn,Lt,qt,bi,r1,w1,i4,Si,co,s4,qo,Pt,Uh,Qr,Ko,_r]},Gh=function(){return[A3,E3,n0,fs,Vh]},Wh=function(){return[T3,jh]},$h=function(){return[C3,n0,b3]},Xh=function(){return[qh]},_r=function(n){return postMessage(n,[n.buffer])},S3=function(n){return n&&n.size&&new $e(n.size)},_s=function(n,e,t,r,i,s){var o=kh(t,r,i,function(a,l){o.terminate(),s(a,l)});return o.postMessage([n,e],e.consume?[n.buffer]:[]),function(){o.terminate()}},Rt=function(n){return n.ondata=function(e,t){return postMessage([e,t],[e.buffer])},function(e){return n.push(e.data[0],e.data[1])}},gs=function(n,e,t,r,i){var s,o=kh(n,r,i,function(a,l){a?(o.terminate(),e.ondata.call(e,a)):(l[1]&&o.terminate(),e.ondata.call(e,a,l[0],l[1]))});o.postMessage(t),e.push=function(a,l){if(s)throw"stream finished";if(!e.ondata)throw"no stream handler";o.postMessage([a,s=l],[a.buffer])},e.terminate=function(){o.terminate()}},st=function(n,e){return n[e]|n[e+1]<<8},E0=function(n,e){return(n[e]|n[e+1]<<8|n[e+2]<<16|n[e+3]<<24)>>>0},dl=function(n,e){return E0(n,e)+E0(n,e+4)*4294967296},n0=function(n,e,t){for(;t;++e)n[e]=t,t>>>=8},A3=function(n,e){var t=e.filename;if(n[0]=31,n[1]=139,n[2]=8,n[8]=e.level<2?4:e.level==9?2:0,n[9]=3,e.mtime!=0&&n0(n,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),t){n[3]=8;for(var r=0;r<=t.length;++r)n[r+10]=t.charCodeAt(r)}},T3=function(n){if(n[0]!=31||n[1]!=139||n[2]!=8)throw"invalid gzip data";var e=n[3],t=10;e&4&&(t+=n[10]|(n[11]<<8)+2);for(var r=(e>>3&1)+(e>>4&1);r>0;r-=!n[t++]);return t+(e&2)},jh=function(n){var e=n.length;return(n[e-4]|n[e-3]<<8|n[e-2]<<16|n[e-1]<<24)>>>0},E3=function(n){return 10+(n.filename&&n.filename.length+1||0)},C3=function(n,e){var t=e.level,r=t==0?0:t<6?1:t==9?3:2;n[0]=120,n[1]=r<<6|(r?32-2*r:1)},qh=function(n){if((n[0]&15)!=8||n[0]>>>4>7||(n[0]<<8|n[1])%31)throw"invalid zlib data";if(n[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function L3(n,e){return!e&&typeof n=="function"&&(e=n,n={}),this.ondata=e,n}var sn=function(){function n(e,t){!t&&typeof e=="function"&&(t=e,e={}),this.ondata=t,this.o=e||{}}return n.prototype.p=function(e,t){this.ondata(Qr(e,this.o,0,0,!t),t)},n.prototype.push=function(e,t){if(this.d)throw"stream finished";if(!this.ondata)throw"no stream handler";this.d=t,this.p(e,t||!1)},n}(),Yh=function(){function n(e,t){gs([ms,function(){return[Rt,sn]}],this,L3.call(this,e,t),function(r){var i=new sn(r.data);onmessage=Rt(i)},6)}return n}();function Qh(n,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return _s(n,e,[ms],function(r){return _r(Ko(r.data[0],r.data[1]))},0,t)}function Ko(n,e){return Qr(n,e||{},0,0)}var ht=function(){function n(e){this.s={},this.p=new $e(0),this.ondata=e}return n.prototype.e=function(e){if(this.d)throw"stream finished";if(!this.ondata)throw"no stream handler";var t=this.p.length,r=new $e(t+e.length);r.set(this.p),r.set(e,t),this.p=r},n.prototype.c=function(e){this.d=this.s.i=e||!1;var t=this.s.b,r=Yo(this.p,this.o,this.s);this.ondata(Pt(r,t,this.s.b),this.d),this.o=Pt(r,this.s.b-32768),this.s.b=this.o.length,this.p=Pt(this.p,this.s.p/8|0),this.s.p&=7},n.prototype.push=function(e,t){this.e(e),this.c(t)},n}(),P3=function(){function n(e){this.ondata=e,gs([ps,function(){return[Rt,ht]}],this,0,function(){var t=new ht;onmessage=Rt(t)},7)}return n}();function R3(n,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return _s(n,e,[ps],function(r){return _r(vs(r.data[0],S3(r.data[1])))},1,t)}function vs(n,e){return Yo(n,e)}var M1=function(){function n(e,t){this.c=fs(),this.l=0,this.v=1,sn.call(this,e,t)}return n.prototype.push=function(e,t){sn.prototype.push.call(this,e,t)},n.prototype.p=function(e,t){this.c.p(e),this.l+=e.length;var r=Qr(e,this.o,this.v&&E3(this.o),t&&8,!t);this.v&&(A3(r,this.o),this.v=0),t&&(n0(r,r.length-8,this.c.d()),n0(r,r.length-4,this.l)),this.ondata(r,t)},n}(),V6=function(){function n(e,t){gs([ms,Gh,function(){return[Rt,sn,M1]}],this,L3.call(this,e,t),function(r){var i=new M1(r.data);onmessage=Rt(i)},8)}return n}();function k6(n,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return _s(n,e,[ms,Gh,function(){return[b1]}],function(r){return _r(b1(r.data[0],r.data[1]))},2,t)}function b1(n,e){e||(e={});var t=fs(),r=n.length;t.p(n);var i=Qr(n,e,E3(e),8),s=i.length;return A3(i,e),n0(i,s-8,t.d()),n0(i,s-4,r),i}var S1=function(){function n(e){this.v=1,ht.call(this,e)}return n.prototype.push=function(e,t){if(ht.prototype.e.call(this,e),this.v){var r=this.p.length>3?T3(this.p):4;if(r>=this.p.length&&!t)return;this.p=this.p.subarray(r),this.v=0}if(t){if(this.p.length<8)throw"invalid gzip stream";this.p=this.p.subarray(0,-8)}ht.prototype.c.call(this,t)},n}(),Kh=function(){function n(e){this.ondata=e,gs([ps,Wh,function(){return[Rt,ht,S1]}],this,0,function(){var t=new S1;onmessage=Rt(t)},9)}return n}();function Zh(n,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return _s(n,e,[ps,Wh,function(){return[A1]}],function(r){return _r(A1(r.data[0]))},3,t)}function A1(n,e){return Yo(n.subarray(T3(n),-8),e||new $e(jh(n)))}var o4=function(){function n(e,t){this.c=b3(),this.v=1,sn.call(this,e,t)}return n.prototype.push=function(e,t){sn.prototype.push.call(this,e,t)},n.prototype.p=function(e,t){this.c.p(e);var r=Qr(e,this.o,this.v&&2,t&&4,!t);this.v&&(C3(r,this.o),this.v=0),t&&n0(r,r.length-4,this.c.d()),this.ondata(r,t)},n}(),Hse=function(){function n(e,t){gs([ms,$h,function(){return[Rt,sn,o4]}],this,L3.call(this,e,t),function(r){var i=new o4(r.data);onmessage=Rt(i)},10)}return n}();function Use(n,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return _s(n,e,[ms,$h,function(){return[a4]}],function(r){return _r(a4(r.data[0],r.data[1]))},4,t)}function a4(n,e){e||(e={});var t=b3();t.p(n);var r=Qr(n,e,2,4);return C3(r,e),n0(r,r.length-4,t.d()),r}var T1=function(){function n(e){this.v=1,ht.call(this,e)}return n.prototype.push=function(e,t){if(ht.prototype.e.call(this,e),this.v){if(this.p.length<2&&!t)return;this.p=this.p.subarray(2),this.v=0}if(t){if(this.p.length<4)throw"invalid zlib stream";this.p=this.p.subarray(0,-4)}ht.prototype.c.call(this,t)},n}(),Jh=function(){function n(e){this.ondata=e,gs([ps,Xh,function(){return[Rt,ht,T1]}],this,0,function(){var t=new T1;onmessage=Rt(t)},11)}return n}();function ed(n,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return _s(n,e,[ps,Xh,function(){return[Oo]}],function(r){return _r(Oo(r.data[0],S3(r.data[1])))},5,t)}function Oo(n,e){return Yo((qh(n),n.subarray(2,-4)),e)}var td=function(){function n(e){this.G=S1,this.I=ht,this.Z=T1,this.ondata=e}return n.prototype.push=function(e,t){if(!this.ondata)throw"no stream handler";if(this.s)this.s.push(e,t);else{if(this.p&&this.p.length){var r=new $e(this.p.length+e.length);r.set(this.p),r.set(e,this.p.length)}else this.p=e;if(this.p.length>2){var i=this,s=function(){i.ondata.apply(i,arguments)};this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(s):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(s):new this.Z(s),this.s.push(this.p,t),this.p=null}}},n}(),Vse=function(){function n(e){this.G=Kh,this.I=P3,this.Z=Jh,this.ondata=e}return n.prototype.push=function(e,t){td.prototype.push.call(this,e,t)},n}();function kse(n,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return n[0]==31&&n[1]==139&&n[2]==8?Zh(n,e,t):(n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31?R3(n,e,t):ed(n,e,t)}function Gse(n,e){return n[0]==31&&n[1]==139&&n[2]==8?A1(n,e):(n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31?vs(n,e):Oo(n,e)}var F3=function(n,e,t,r){for(var i in n){var s=n[i],o=e+i;s instanceof $e?t[o]=[s,r]:Array.isArray(s)?t[o]=[s[0],Qo(r,s[1])]:F3(s,o+"/",t,r)}},G6=typeof TextEncoder<"u"&&new TextEncoder,l4=typeof TextDecoder<"u"&&new TextDecoder,nd=0;try{l4.decode(wn,{stream:!0}),nd=1}catch{}var rd=function(n){for(var e="",t=0;;){var r=n[t++],i=(r>127)+(r>223)+(r>239);if(t+i>n.length)return[e,Pt(n,t-1)];i?i==3?(r=((r&15)<<18|(n[t++]&63)<<12|(n[t++]&63)<<6|n[t++]&63)-65536,e+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?e+=String.fromCharCode((r&31)<<6|n[t++]&63):e+=String.fromCharCode((r&15)<<12|(n[t++]&63)<<6|n[t++]&63):e+=String.fromCharCode(r)}},Wse=function(){function n(e){this.ondata=e,nd?this.t=new TextDecoder:this.p=wn}return n.prototype.push=function(e,t){if(!this.ondata)throw"no callback";if(t=!!t,this.t){if(this.ondata(this.t.decode(e,{stream:!0}),t),t){if(this.t.decode().length)throw"invalid utf-8 data";this.t=null}return}if(!this.p)throw"stream finished";var r=new $e(this.p.length+e.length);r.set(this.p),r.set(e,this.p.length);var i=rd(r),s=i[0],o=i[1];if(t){if(o.length)throw"invalid utf-8 data";this.p=null}else this.p=o;this.ondata(s,t)},n}(),$se=function(){function n(e){this.ondata=e}return n.prototype.push=function(e,t){if(!this.ondata)throw"no callback";if(this.d)throw"stream finished";this.ondata(hr(e),this.d=t||!1)},n}();function hr(n,e){if(e){for(var t=new $e(n.length),r=0;r<n.length;++r)t[r]=n.charCodeAt(r);return t}if(G6)return G6.encode(n);for(var i=n.length,s=new $e(n.length+(n.length>>1)),o=0,a=function(u){s[o++]=u},r=0;r<i;++r){if(o+5>s.length){var l=new $e(o+8+(i-r<<1));l.set(s),s=l}var c=n.charCodeAt(r);c<128||e?a(c):c<2048?(a(192|c>>6),a(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|n.charCodeAt(++r)&1023,a(240|c>>18),a(128|c>>12&63),a(128|c>>6&63),a(128|c&63)):(a(224|c>>12),a(128|c>>6&63),a(128|c&63))}return Pt(s,0,o)}function z3(n,e){if(e){for(var t="",r=0;r<n.length;r+=16384)t+=String.fromCharCode.apply(null,n.subarray(r,r+16384));return t}else{if(l4)return l4.decode(n);var i=rd(n),s=i[0],o=i[1];if(o.length)throw"invalid utf-8 data";return s}}var id=function(n){return n==1?3:n<6?2:n==9?1:0},sd=function(n,e){return e+30+st(n,e+26)+st(n,e+28)},od=function(n,e,t){var r=st(n,e+28),i=z3(n.subarray(e+46,e+46+r),!(st(n,e+8)&2048)),s=e+46+r,o=E0(n,e+20),a=t&&o==4294967295?ad(n,s):[o,E0(n,e+24),E0(n,e+42)],l=a[0],c=a[1],u=a[2];return[st(n,e+10),l,c,i,s+st(n,e+30)+st(n,e+32),u]},ad=function(n,e){for(;st(n,e)!=1;e+=4+st(n,e+2));return[dl(n,e+12),dl(n,e+4),dl(n,e+20)]},rr=function(n){var e=0;if(n)for(var t in n){var r=n[t].length;if(r>65535)throw"extra field too long";e+=r+4}return e},Qi=function(n,e,t,r,i,s,o,a){var l=r.length,c=t.extra,u=a&&a.length,h=rr(c);n0(n,e,o!=null?33639248:67324752),e+=4,o!=null&&(n[e++]=20,n[e++]=t.os),n[e]=20,e+=2,n[e++]=t.flag<<1|(s==null&&8),n[e++]=i&&8,n[e++]=t.compression&255,n[e++]=t.compression>>8;var d=new Date(t.mtime==null?Date.now():t.mtime),f=d.getFullYear()-1980;if(f<0||f>119)throw"date not in range 1980-2099";if(n0(n,e,f<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>>1),e+=4,s!=null&&(n0(n,e,t.crc),n0(n,e+4,s),n0(n,e+8,t.size)),n0(n,e+12,l),n0(n,e+14,h),e+=16,o!=null&&(n0(n,e,u),n0(n,e+6,t.attrs),n0(n,e+10,o),e+=14),n.set(r,e),e+=l,h)for(var p in c){var g=c[p],y=g.length;n0(n,e,+p),n0(n,e+2,y),n.set(g,e+4),e+=4+y}return u&&(n.set(a,e),e+=u),e},I3=function(n,e,t,r,i){n0(n,e,101010256),n0(n,e+8,t),n0(n,e+10,t),n0(n,e+12,r),n0(n,e+16,i)},Bo=function(){function n(e){this.filename=e,this.c=fs(),this.size=0,this.compression=0}return n.prototype.process=function(e,t){this.ondata(null,e,t)},n.prototype.push=function(e,t){if(!this.ondata)throw"no callback - add to ZIP archive before pushing";this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},n}(),Xse=function(){function n(e,t){var r=this;t||(t={}),Bo.call(this,e),this.d=new sn(t,function(i,s){r.ondata(null,i,s)}),this.compression=8,this.flag=id(t.level)}return n.prototype.process=function(e,t){try{this.d.push(e,t)}catch(r){this.ondata(r,null,t)}},n.prototype.push=function(e,t){Bo.prototype.push.call(this,e,t)},n}(),jse=function(){function n(e,t){var r=this;t||(t={}),Bo.call(this,e),this.d=new Yh(t,function(i,s,o){r.ondata(i,s,o)}),this.compression=8,this.flag=id(t.level),this.terminate=this.d.terminate}return n.prototype.process=function(e,t){this.d.push(e,t)},n.prototype.push=function(e,t){Bo.prototype.push.call(this,e,t)},n}(),qse=function(){function n(e){this.ondata=e,this.u=[],this.d=1}return n.prototype.add=function(e){var t=this;if(this.d&2)throw"stream finished";var r=hr(e.filename),i=r.length,s=e.comment,o=s&&hr(s),a=i!=e.filename.length||o&&s.length!=o.length,l=i+rr(e.extra)+30;if(i>65535)throw"filename too long";var c=new $e(l);Qi(c,0,e,r,a);var u=[c],h=function(){for(var y=0,_=u;y<_.length;y++){var m=_[y];t.ondata(null,m,!1)}u=[]},d=this.d;this.d=0;var f=this.u.length,p=Qo(e,{f:r,u:a,o,t:function(){e.terminate&&e.terminate()},r:function(){if(h(),d){var y=t.u[f+1];y?y.r():t.d=1}d=1}}),g=0;e.ondata=function(y,_,m){if(y)t.ondata(y,_,m),t.terminate();else if(g+=_.length,u.push(_),m){var x=new $e(16);n0(x,0,134695760),n0(x,4,e.crc),n0(x,8,g),n0(x,12,e.size),u.push(x),p.c=g,p.b=l+g+16,p.crc=e.crc,p.size=e.size,d&&p.r(),d=1}else d&&h()},this.u.push(p)},n.prototype.end=function(){var e=this;if(this.d&2)throw this.d&1?"stream finishing":"stream finished";this.d?this.e():this.u.push({r:function(){e.d&1&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},n.prototype.e=function(){for(var e=0,t=0,r=0,i=0,s=this.u;i<s.length;i++){var o=s[i];r+=46+o.f.length+rr(o.extra)+(o.o?o.o.length:0)}for(var a=new $e(r+22),l=0,c=this.u;l<c.length;l++){var o=c[l];Qi(a,e,o,o.f,o.u,o.c,t,o.o),e+=46+o.f.length+rr(o.extra)+(o.o?o.o.length:0),t+=o.b}I3(a,e,this.u.length,r,t),this.ondata(null,a,!0),this.d=2},n.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++){var r=t[e];r.t()}this.d=2},n}();function Yse(n,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";var r={};F3(n,"",r,e);var i=Object.keys(r),s=i.length,o=0,a=0,l=s,c=new Array(s),u=[],h=function(){for(var g=0;g<u.length;++g)u[g]()},d=function(){var g=new $e(a+22),y=o,_=a-o;a=0;for(var m=0;m<l;++m){var x=c[m];try{var v=x.c.length;Qi(g,a,x,x.f,x.u,v);var M=30+x.f.length+rr(x.extra),T=a+M;g.set(x.c,T),Qi(g,o,x,x.f,x.u,v,a,x.m),o+=16+M+(x.m?x.m.length:0),a=T+v}catch(w){return t(w,null)}}I3(g,o,c.length,_,y),t(null,g)};s||d();for(var f=function(g){var y=i[g],_=r[y],m=_[0],x=_[1],v=fs(),M=m.length;v.p(m);var T=hr(y),w=T.length,S=x.comment,N=S&&hr(S),D=N&&N.length,z=rr(x.extra),V=x.level==0?0:8,H=function($,K){if($)h(),t($,null);else{var U=K.length;c[g]=Qo(x,{size:M,crc:v.d(),c:K,f:T,m:N,u:w!=y.length||N&&S.length!=D,compression:V}),o+=30+w+z+U,a+=76+2*(w+z)+(D||0)+U,--s||d()}};if(w>65535&&H("filename too long",null),!V)H(null,m);else if(M<16e4)try{H(null,Ko(m,x))}catch($){H($,null)}else u.push(Qh(m,x,H))},p=0;p<l;++p)f(p);return h}function Qse(n,e){e||(e={});var t={},r=[];F3(n,"",t,e);var i=0,s=0;for(var o in t){var a=t[o],l=a[0],c=a[1],u=c.level==0?0:8,h=hr(o),d=h.length,f=c.comment,p=f&&hr(f),g=p&&p.length,y=rr(c.extra);if(d>65535)throw"filename too long";var _=u?Ko(l,c):l,m=_.length,x=fs();x.p(l),r.push(Qo(c,{size:l.length,crc:x.d(),c:_,f:h,m:p,u:d!=o.length||p&&f.length!=g,o:i,compression:u})),i+=30+d+y+m,s+=76+2*(d+y)+(g||0)+m}for(var v=new $e(s+22),M=i,T=s-i,w=0;w<r.length;++w){var h=r[w];Qi(v,h.o,h,h.f,h.u,h.c.length);var S=30+h.f.length+rr(h.extra);v.set(h.c,h.o+S),Qi(v,i,h,h.f,h.u,h.c.length,h.o,h.m),i+=16+S+(h.m?h.m.length:0)}return I3(v,i,r.length,T,M),v}var ld=function(){function n(){}return n.prototype.push=function(e,t){this.ondata(null,e,t)},n.compression=0,n}(),Kse=function(){function n(){var e=this;this.i=new ht(function(t,r){e.ondata(null,t,r)})}return n.prototype.push=function(e,t){try{this.i.push(e,t)}catch(r){this.ondata(r,e,t)}},n.compression=8,n}(),Zse=function(){function n(e,t){var r=this;t<32e4?this.i=new ht(function(i,s){r.ondata(null,i,s)}):(this.i=new P3(function(i,s,o){r.ondata(i,s,o)}),this.terminate=this.i.terminate)}return n.prototype.push=function(e,t){this.i.terminate&&(e=Pt(e,0)),this.i.push(e,t)},n.compression=8,n}(),Jse=function(){function n(e){this.onfile=e,this.k=[],this.o={0:ld},this.p=wn}return n.prototype.push=function(e,t){var r=this;if(!this.onfile)throw"no callback";if(!this.p)throw"stream finished";if(this.c>0){var i=Math.min(this.c,e.length),s=e.subarray(0,i);if(this.c-=i,this.d?this.d.push(s,!this.c):this.k[0].push(s),e=e.subarray(i),e.length)return this.push(e,t)}else{var o=0,a=0,l=void 0,c=void 0;this.p.length?e.length?(c=new $e(this.p.length+e.length),c.set(this.p),c.set(e,this.p.length)):c=this.p:c=e;for(var u=c.length,h=this.c,d=h&&this.d,f=function(){var _,m=E0(c,a);if(m==67324752){o=1,l=a,p.d=null,p.c=0;var x=st(c,a+6),v=st(c,a+8),M=x&2048,T=x&8,w=st(c,a+26),S=st(c,a+28);if(u>a+30+w+S){var N=[];p.k.unshift(N),o=2;var D=E0(c,a+18),z=E0(c,a+22),V=z3(c.subarray(a+30,a+=30+w),!M);D==4294967295?(_=T?[-2]:ad(c,a),D=_[0],z=_[1]):T&&(D=-1),a+=S,p.c=D;var H,$={name:V,compression:v,start:function(){if(!$.ondata)throw"no callback";if(!D)$.ondata(null,wn,!0);else{var K=r.o[v];if(!K)throw"unknown compression type "+v;H=D<0?new K(V):new K(V,D,z),H.ondata=function(fe,we,pe){$.ondata(fe,we,pe)};for(var U=0,X=N;U<X.length;U++){var ee=X[U];H.push(ee,!1)}r.k[0]==N&&r.c?r.d=H:H.push(wn,!0)}},terminate:function(){H&&H.terminate&&H.terminate()}};D>=0&&($.size=D,$.originalSize=z),p.onfile($)}return"break"}else if(h){if(m==134695760)return l=a+=12+(h==-2&&8),o=3,p.c=0,"break";if(m==33639248)return l=a-=4,o=3,p.c=0,"break"}},p=this;a<u-4;++a){var g=f();if(g==="break")break}if(this.p=wn,h<0){var y=o?c.subarray(0,l-12-(h==-2&&8)-(E0(c,l-16)==134695760&&4)):c.subarray(0,a);d?d.push(y,!!o):this.k[+(o==2)].push(y)}if(o&2)return this.push(c.subarray(a),t);this.p=c.subarray(a)}if(t){if(this.c)throw"invalid zip file";this.p=null}},n.prototype.register=function(e){this.o[e.compression]=e},n}();function eoe(n,e){if(typeof e!="function")throw"no callback";for(var t=[],r=function(){for(var d=0;d<t.length;++d)t[d]()},i={},s=n.length-22;E0(n,s)!=101010256;--s)if(!s||n.length-s>65558){e("invalid zip file",null);return}var o=st(n,s+8);o||e(null,{});var a=o,l=E0(n,s+16),c=l==4294967295;if(c){if(s=E0(n,s-12),E0(n,s)!=101075792){e("invalid zip file",null);return}a=o=E0(n,s+32),l=E0(n,s+48)}for(var u=function(d){var f=od(n,l,c),p=f[0],g=f[1],y=f[2],_=f[3],m=f[4],x=f[5],v=sd(n,x);l=m;var M=function(w,S){w?(r(),e(w,null)):(i[_]=S,--o||e(null,i))};if(!p)M(null,Pt(n,v,v+g));else if(p==8){var T=n.subarray(v,v+g);if(g<32e4)try{M(null,vs(T,new $e(y)))}catch(w){M(w,null)}else t.push(R3(T,{size:y},M))}else M("unknown compression type "+p,null)},h=0;h<a;++h)u();return r}function toe(n){for(var e={},t=n.length-22;E0(n,t)!=101010256;--t)if(!t||n.length-t>65558)throw"invalid zip file";var r=st(n,t+8);if(!r)return{};var i=E0(n,t+16),s=i==4294967295;if(s){if(t=E0(n,t-12),E0(n,t)!=101075792)throw"invalid zip file";r=E0(n,t+32),i=E0(n,t+48)}for(var o=0;o<r;++o){var a=od(n,i,s),l=a[0],c=a[1],u=a[2],h=a[3],d=a[4],f=a[5],p=sd(n,f);if(i=d,!l)e[h]=Pt(n,p,p+c);else if(l==8)e[h]=vs(n.subarray(p,p+c),new $e(u));else throw"unknown compression type "+l}return e}const noe=Object.freeze(Object.defineProperty({__proto__:null,AsyncCompress:V6,AsyncDecompress:Vse,AsyncDeflate:Yh,AsyncGunzip:Kh,AsyncGzip:V6,AsyncInflate:P3,AsyncUnzipInflate:Zse,AsyncUnzlib:Jh,AsyncZipDeflate:jse,AsyncZlib:Hse,Compress:M1,DecodeUTF8:Wse,Decompress:td,Deflate:sn,EncodeUTF8:$se,Gunzip:S1,Gzip:M1,Inflate:ht,Unzip:Jse,UnzipInflate:Kse,UnzipPassThrough:ld,Unzlib:T1,Zip:qse,ZipDeflate:Xse,ZipPassThrough:Bo,Zlib:o4,compress:k6,compressSync:b1,decompress:kse,decompressSync:Gse,deflate:Qh,deflateSync:Ko,gunzip:Zh,gunzipSync:A1,gzip:k6,gzipSync:b1,inflate:R3,inflateSync:vs,strFromU8:z3,strToU8:hr,unzip:eoe,unzipSync:toe,unzlib:ed,unzlibSync:Oo,zip:Yse,zipSync:Qse,zlib:Use,zlibSync:a4},Symbol.toStringTag,{value:"Module"}));function cd(n,e,t){const r=t.length-n-1;if(e>=t[r])return r-1;if(e<=t[n])return n;let i=n,s=r,o=Math.floor((i+s)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?s=o:i=o,o=Math.floor((i+s)/2);return o}function roe(n,e,t,r){const i=[],s=[],o=[];i[0]=1;for(let a=1;a<=t;++a){s[a]=e-r[n+1-a],o[a]=r[n+a]-e;let l=0;for(let c=0;c<a;++c){const u=o[c+1],h=s[a-c],d=i[c]/(u+h);i[c]=l+u*d,l=h*d}i[a]=l}return i}function ioe(n,e,t,r){const i=cd(n,r,e),s=roe(i,r,n,e),o=new t0(0,0,0,0);for(let a=0;a<=n;++a){const l=t[i-n+a],c=s[a],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function soe(n,e,t,r,i){const s=[];for(let h=0;h<=t;++h)s[h]=0;const o=[];for(let h=0;h<=r;++h)o[h]=s.slice(0);const a=[];for(let h=0;h<=t;++h)a[h]=s.slice(0);a[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let h=1;h<=t;++h){l[h]=e-i[n+1-h],c[h]=i[n+h]-e;let d=0;for(let f=0;f<h;++f){const p=c[f+1],g=l[h-f];a[h][f]=p+g;const y=a[f][h-1]/a[h][f];a[f][h]=d+p*y,d=g*y}a[h][h]=d}for(let h=0;h<=t;++h)o[0][h]=a[h][t];for(let h=0;h<=t;++h){let d=0,f=1;const p=[];for(let g=0;g<=t;++g)p[g]=s.slice(0);p[0][0]=1;for(let g=1;g<=r;++g){let y=0;const _=h-g,m=t-g;h>=g&&(p[f][0]=p[d][0]/a[m+1][_],y=p[f][0]*a[_][m]);const x=_>=-1?1:-_,v=h-1<=m?g-1:t-h;for(let T=x;T<=v;++T)p[f][T]=(p[d][T]-p[d][T-1])/a[m+1][_+T],y+=p[f][T]*a[_+T][m];h<=m&&(p[f][g]=-p[d][g-1]/a[m+1][h],y+=p[f][g]*a[h][m]),o[g][h]=y;const M=d;d=f,f=M}}let u=t;for(let h=1;h<=r;++h){for(let d=0;d<=t;++d)o[h][d]*=u;u*=t-h}return o}function ooe(n,e,t,r,i){const s=i<n?i:n,o=[],a=cd(n,r,e),l=soe(a,r,n,s,e),c=[];for(let u=0;u<t.length;++u){const h=t[u].clone(),d=h.w;h.x*=d,h.y*=d,h.z*=d,c[u]=h}for(let u=0;u<=s;++u){const h=c[a-n].clone().multiplyScalar(l[u][0]);for(let d=1;d<=n;++d)h.add(c[a-n+d].clone().multiplyScalar(l[u][d]));o[u]=h}for(let u=s+1;u<=i+1;++u)o[u]=new t0(0,0,0);return o}function aoe(n,e){let t=1;for(let i=2;i<=n;++i)t*=i;let r=1;for(let i=2;i<=e;++i)r*=i;for(let i=2;i<=n-e;++i)r*=i;return t/r}function loe(n){const e=n.length,t=[],r=[];for(let s=0;s<e;++s){const o=n[s];t[s]=new I(o.x,o.y,o.z),r[s]=o.w}const i=[];for(let s=0;s<e;++s){const o=t[s].clone();for(let a=1;a<=s;++a)o.sub(i[s-a].clone().multiplyScalar(aoe(s,a)*r[a]));i[s]=o.divideScalar(r[0])}return i}function coe(n,e,t,r,i){const s=ooe(n,e,t,r,i);return loe(s)}class W6 extends ft{constructor(e,t,r,i,s){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=s||this.knots.length-1;for(let o=0;o<r.length;++o){const a=r[o];this.controlPoints[o]=new t0(a.x,a.y,a.z,a.w)}}getPoint(e,t=new I){const r=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=ioe(this.degree,this.knots,this.controlPoints,i);return s.w!==1&&s.divideScalar(s.w),r.set(s.x,s.y,s.z)}getTangent(e,t=new I){const r=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=coe(this.degree,this.knots,this.controlPoints,i,1);return r.copy(s[1]).normalize(),r}}let Ge,T0,lt;class uoe extends $t{constructor(e){super(e)}load(e,t,r,i){const s=this,o=s.path===""?Gt.extractUrlBase(e):s.path,a=new jo(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(l){try{t(s.parse(l,o))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},r,i)}parse(e,t){if(_oe(e))Ge=new moe().parse(e);else{const i=fd(e);if(!goe(i))throw new Error("THREE.FBXLoader: Unknown format.");if(X6(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+X6(i));Ge=new poe().parse(i)}const r=new Yr(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new hoe(r,this.manager).parse(Ge)}}class hoe{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){T0=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),r=this.parseMaterials(t),i=this.parseDeformers(),s=new doe().parse(i);return this.parseScene(i,s,r),lt}parseConnections(){const e=new Map;return"Connections"in Ge&&Ge.Connections.connections.forEach(function(r){const i=r[0],s=r[1],o=r[2];e.has(i)||e.set(i,{parents:[],children:[]});const a={ID:s,relationship:o};e.get(i).parents.push(a),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:i,relationship:o};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Ge.Objects){const r=Ge.Objects.Video;for(const i in r){const s=r[i],o=parseInt(i);if(e[o]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(a||l){const c=this.parseImage(r[i]);t[s.RelativeFilename||s.Filename]=c}}}}for(const r in e){const i=e[r];t[i]!==void 0?e[r]=t[i]:e[r]=e[r].split("\\").pop()}return e}parseImage(e){const t=e.Content,r=e.RelativeFilename||e.Filename,i=r.slice(r.lastIndexOf(".")+1).toLowerCase();let s;switch(i){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",r),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in Ge.Objects){const r=Ge.Objects.Texture;for(const i in r){const s=this.parseTexture(r[i],e);t.set(parseInt(i),s)}}return t}parseTexture(e,t){const r=this.loadTexture(e,t);r.ID=e.id,r.name=e.attrName;const i=e.WrapModeU,s=e.WrapModeV,o=i!==void 0?i.value:0,a=s!==void 0?s.value:0;if(r.wrapS=o===0?nn:g0,r.wrapT=a===0?nn:g0,"Scaling"in e){const l=e.Scaling.value;r.repeat.x=l[0],r.repeat.y=l[1]}return r}loadTexture(e,t){let r;const i=this.textureLoader.path,s=T0.get(e.id).children;s!==void 0&&s.length>0&&t[s[0].ID]!==void 0&&(r=t[s[0].ID],(r.indexOf("blob:")===0||r.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let o;const a=e.FileName.slice(-3).toLowerCase();if(a==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),o=new P0):(l.setPath(this.textureLoader.path),o=l.load(r))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),o=new P0):o=this.textureLoader.load(r);return this.textureLoader.setPath(i),o}parseMaterials(e){const t=new Map;if("Material"in Ge.Objects){const r=Ge.Objects.Material;for(const i in r){const s=this.parseMaterial(r[i],e);s!==null&&t.set(parseInt(i),s)}}return t}parseMaterial(e,t){const r=e.id,i=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!T0.has(r))return null;const o=this.parseParameters(e,t,r);let a;switch(s.toLowerCase()){case"phong":a=new lo;break;case"lambert":a=new _3;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new lo;break}return a.setValues(o),a.name=i,a}parseParameters(e,t,r){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=new Ae().fromArray(e.Diffuse.value):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=new Ae().fromArray(e.DiffuseColor.value)),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=new Ae().fromArray(e.Emissive.value):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=new Ae().fromArray(e.EmissiveColor.value)),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(i.opacity=parseFloat(e.Opacity.value)),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=new Ae().fromArray(e.Specular.value):e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=new Ae().fromArray(e.SpecularColor.value));const s=this;return T0.get(r).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":i.bumpMap=s.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=s.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=s.getTexture(t,o.ID),i.map!==void 0&&(i.map.encoding=ut);break;case"DisplacementColor":i.displacementMap=s.getTexture(t,o.ID);break;case"EmissiveColor":i.emissiveMap=s.getTexture(t,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.encoding=ut);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=s.getTexture(t,o.ID);break;case"ReflectionColor":i.envMap=s.getTexture(t,o.ID),i.envMap!==void 0&&(i.envMap.mapping=f1,i.envMap.encoding=ut);break;case"SpecularColor":i.specularMap=s.getTexture(t,o.ID),i.specularMap!==void 0&&(i.specularMap.encoding=ut);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=s.getTexture(t,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(e,t){return"LayeredTexture"in Ge.Objects&&t in Ge.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=T0.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Ge.Objects){const r=Ge.Objects.Deformer;for(const i in r){const s=r[i],o=T0.get(parseInt(i));if(s.attrType==="Skin"){const a=this.parseSkeleton(o,r);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[i]=a}else if(s.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(o,r),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const r=[];return e.children.forEach(function(i){const s=t[i.ID];if(s.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new Ee().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),r.push(o)}),{rawBones:r,bones:[]}}parseMorphTargets(e,t){const r=[];for(let i=0;i<e.children.length;i++){const s=e.children[i],o=t[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=T0.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,r.push(a)}return r}parseScene(e,t,r){lt=new Vt;const i=this.parseModels(e.skeletons,t,r),s=Ge.Objects.Model,o=this;i.forEach(function(l){const c=s[l.ID];o.setLookAtProperties(l,c),T0.get(l.ID).parents.forEach(function(h){const d=i.get(h.ID);d!==void 0&&d.add(l)}),l.parent===null&&lt.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.createAmbientLight(),lt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=hd(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new foe().parse();lt.children.length===1&&lt.children[0].isGroup&&(lt.children[0].animations=a,lt=lt.children[0]),lt.animations=a}parseModels(e,t,r){const i=new Map,s=Ge.Objects.Model;for(const o in s){const a=parseInt(o),l=s[o],c=T0.get(a);let u=this.buildSkeleton(c,e,a,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,r);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new Lo;break;case"Null":default:u=new Vt;break}u.name=l.attrName?Ye.sanitizeNodeName(l.attrName):"",u.ID=a}this.getTransformData(u,l),i.set(a,u)}return i}buildSkeleton(e,t,r,i){let s=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){const h=s;s=new Lo,s.matrixWorld.copy(c.transformLink),s.name=i?Ye.sanitizeNodeName(i):"",s.ID=r,l.bones[u]=s,h!==null&&s.add(h)}})}}),s}createCamera(e){let t,r;if(e.children.forEach(function(i){const s=Ge.Objects.NodeAttribute[i.ID];s!==void 0&&(r=s)}),r===void 0)t=new r0;else{let i=0;r.CameraProjectionType!==void 0&&r.CameraProjectionType.value===1&&(i=1);let s=1;r.NearPlane!==void 0&&(s=r.NearPlane.value/1e3);let o=1e3;r.FarPlane!==void 0&&(o=r.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;r.AspectWidth!==void 0&&r.AspectHeight!==void 0&&(a=r.AspectWidth.value,l=r.AspectHeight.value);const c=a/l;let u=45;r.FieldOfView!==void 0&&(u=r.FieldOfView.value);const h=r.FocalLength?r.FocalLength.value:null;switch(i){case 0:t=new q0(u,c,s,o),h!==null&&t.setFocalLength(h);break;case 1:t=new fr(-a/2,a/2,l/2,-l/2,s,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new r0;break}}return t}createLight(e){let t,r;if(e.children.forEach(function(i){const s=Ge.Objects.NodeAttribute[i.ID];s!==void 0&&(r=s)}),r===void 0)t=new r0;else{let i;r.LightType===void 0?i=0:i=r.LightType.value;let s=16777215;r.Color!==void 0&&(s=new Ae().fromArray(r.Color.value));let o=r.Intensity===void 0?1:r.Intensity.value/100;r.CastLightOnObject!==void 0&&r.CastLightOnObject.value===0&&(o=0);let a=0;r.FarAttenuationEnd!==void 0&&(r.EnableFarAttenuation!==void 0&&r.EnableFarAttenuation.value===0?a=0:a=r.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new zo(s,o,a,l);break;case 1:t=new qi(s,o);break;case 2:let c=Math.PI/3;r.InnerAngle!==void 0&&(c=bt.degToRad(r.InnerAngle.value));let u=0;r.OuterAngle!==void 0&&(u=bt.degToRad(r.OuterAngle.value),u=Math.max(u,1)),t=new ji(s,o,a,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+r.LightType.value+", defaulting to a PointLight."),t=new zo(s,o);break}r.CastShadows!==void 0&&r.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,r){let i,s=null,o=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),r.has(l.ID)&&a.push(r.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new lo({color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(l){l.vertexColors=!0}),s.FBX_Deformer?(i=new i2(s,o),i.normalizeSkinWeights()):i=new N0(s,o),i}createCurve(e,t){const r=e.children.reduce(function(s,o){return t.has(o.ID)&&(s=t.get(o.ID)),s},null),i=new pr({color:3342591,linewidth:1});return new os(r,i)}getTransformData(e,t){const r={};"InheritType"in t&&(r.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?r.eulerOrder=dd(t.RotationOrder.value):r.eulerOrder="ZYX","Lcl_Translation"in t&&(r.translation=t.Lcl_Translation.value),"PreRotation"in t&&(r.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(r.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(r.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(r.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(r.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(r.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(r.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(r.rotationPivot=t.RotationPivot.value),e.userData.transformData=r}setLookAtProperties(e,t){"LookAtProperty"in t&&T0.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const s=Ge.Objects.Model[i.ID];if("Lcl_Translation"in s){const o=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),lt.add(e.target)):e.lookAt(new I().fromArray(o))}}})}bindSkeleton(e,t,r){const i=this.parsePoseNodes();for(const s in e){const o=e[s];T0.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;T0.get(c).parents.forEach(function(h){r.has(h.ID)&&r.get(h.ID).bind(new s2(o.bones),i[h.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Ge.Objects){const t=Ge.Objects.Pose;for(const r in t)if(t[r].attrType==="BindPose"&&t[r].NbPoseNodes>0){const i=t[r].PoseNode;Array.isArray(i)?i.forEach(function(s){e[s.Node]=new Ee().fromArray(s.Matrix.a)}):e[i.Node]=new Ee().fromArray(i.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in Ge&&"AmbientColor"in Ge.GlobalSettings){const e=Ge.GlobalSettings.AmbientColor.value,t=e[0],r=e[1],i=e[2];if(t!==0||r!==0||i!==0){const s=new Ae(t,r,i);lt.add(new v3(s,1))}}}}class doe{parse(e){const t=new Map;if("Geometry"in Ge.Objects){const r=Ge.Objects.Geometry;for(const i in r){const s=T0.get(parseInt(i)),o=this.parseGeometry(s,r[i],e);t.set(parseInt(i),o)}}return t}parseGeometry(e,t,r){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,r);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,r){const i=r.skeletons,s=[],o=e.parents.map(function(h){return Ge.Objects.Model[h.ID]});if(o.length===0)return;const a=e.children.reduce(function(h,d){return i[d.ID]!==void 0&&(h=i[d.ID]),h},null);e.children.forEach(function(h){r.morphTargets[h.ID]!==void 0&&s.push(r.morphTargets[h.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=dd(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=hd(c);return this.genGeometry(t,a,s,u)}genGeometry(e,t,r,i){const s=new Ne;e.attrName&&(s.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new Pe(a.vertex,3);if(l.applyMatrix4(i),s.setAttribute("position",l),a.colors.length>0&&s.setAttribute("color",new Pe(a.colors,3)),t&&(s.setAttribute("skinIndex",new J4(a.weightsIndices,4)),s.setAttribute("skinWeight",new Pe(a.vertexWeights,4)),s.FBX_Deformer=t),a.normal.length>0){const c=new G0().getNormalMatrix(i),u=new Pe(a.normal,3);u.applyNormalMatrix(c),s.setAttribute("normal",u)}if(a.uvs.forEach(function(c,u){let h="uv"+(u+1).toString();u===0&&(h="uv"),s.setAttribute(h,new Pe(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(h,d){h!==c&&(s.addGroup(u,d-u,c),c=h,u=d)}),s.groups.length>0){const h=s.groups[s.groups.length-1],d=h.start+h.count;d!==a.materialIndex.length&&s.addGroup(d,a.materialIndex.length-d,c)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,e,r,i),s}parseGeoNode(e,t){const r={};if(r.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],r.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(r.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(r.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(r.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){r.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&r.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return r.weightTable={},t!==null&&(r.skeleton=t,t.rawBones.forEach(function(i,s){i.indices.forEach(function(o,a){r.weightTable[o]===void 0&&(r.weightTable[o]=[]),r.weightTable[o].push({id:s,weight:i.weights[a]})})})),r}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let r=0,i=0,s=!1,o=[],a=[],l=[],c=[],u=[],h=[];const d=this;return e.vertexIndices.forEach(function(f,p){let g,y=!1;f<0&&(f=f^-1,y=!0);let _=[],m=[];if(o.push(f*3,f*3+1,f*3+2),e.color){const x=Ua(p,r,f,e.color);l.push(x[0],x[1],x[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(x){m.push(x.weight),_.push(x.id)}),m.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const x=[0,0,0,0],v=[0,0,0,0];m.forEach(function(M,T){let w=M,S=_[T];v.forEach(function(N,D,z){if(w>N){z[D]=w,w=N;const V=x[D];x[D]=S,S=V}})}),_=x,m=v}for(;m.length<4;)m.push(0),_.push(0);for(let x=0;x<4;++x)u.push(m[x]),h.push(_[x])}if(e.normal){const x=Ua(p,r,f,e.normal);a.push(x[0],x[1],x[2])}e.material&&e.material.mappingType!=="AllSame"&&(g=Ua(p,r,f,e.material)[0]),e.uv&&e.uv.forEach(function(x,v){const M=Ua(p,r,f,x);c[v]===void 0&&(c[v]=[]),c[v].push(M[0]),c[v].push(M[1])}),i++,y&&(d.genFace(t,e,o,g,a,l,c,u,h,i),r++,i=0,o=[],a=[],l=[],c=[],u=[],h=[])}),t}genFace(e,t,r,i,s,o,a,l,c,u){for(let h=2;h<u;h++)e.vertex.push(t.vertexPositions[r[0]]),e.vertex.push(t.vertexPositions[r[1]]),e.vertex.push(t.vertexPositions[r[2]]),e.vertex.push(t.vertexPositions[r[(h-1)*3]]),e.vertex.push(t.vertexPositions[r[(h-1)*3+1]]),e.vertex.push(t.vertexPositions[r[(h-1)*3+2]]),e.vertex.push(t.vertexPositions[r[h*3]]),e.vertex.push(t.vertexPositions[r[h*3+1]]),e.vertex.push(t.vertexPositions[r[h*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(h-1)*4]),e.vertexWeights.push(l[(h-1)*4+1]),e.vertexWeights.push(l[(h-1)*4+2]),e.vertexWeights.push(l[(h-1)*4+3]),e.vertexWeights.push(l[h*4]),e.vertexWeights.push(l[h*4+1]),e.vertexWeights.push(l[h*4+2]),e.vertexWeights.push(l[h*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(h-1)*4]),e.weightsIndices.push(c[(h-1)*4+1]),e.weightsIndices.push(c[(h-1)*4+2]),e.weightsIndices.push(c[(h-1)*4+3]),e.weightsIndices.push(c[h*4]),e.weightsIndices.push(c[h*4+1]),e.weightsIndices.push(c[h*4+2]),e.weightsIndices.push(c[h*4+3])),t.color&&(e.colors.push(o[0]),e.colors.push(o[1]),e.colors.push(o[2]),e.colors.push(o[(h-1)*3]),e.colors.push(o[(h-1)*3+1]),e.colors.push(o[(h-1)*3+2]),e.colors.push(o[h*3]),e.colors.push(o[h*3+1]),e.colors.push(o[h*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(s[0]),e.normal.push(s[1]),e.normal.push(s[2]),e.normal.push(s[(h-1)*3]),e.normal.push(s[(h-1)*3+1]),e.normal.push(s[(h-1)*3+2]),e.normal.push(s[h*3]),e.normal.push(s[h*3+1]),e.normal.push(s[h*3+2])),t.uv&&t.uv.forEach(function(d,f){e.uvs[f]===void 0&&(e.uvs[f]=[]),e.uvs[f].push(a[f][0]),e.uvs[f].push(a[f][1]),e.uvs[f].push(a[f][(h-1)*2]),e.uvs[f].push(a[f][(h-1)*2+1]),e.uvs[f].push(a[f][h*2]),e.uvs[f].push(a[f][h*2+1])})}addMorphTargets(e,t,r,i){if(r.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;r.forEach(function(o){o.rawTargets.forEach(function(a){const l=Ge.Objects.Geometry[a.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,i,a.name)})})}genMorphGeometry(e,t,r,i,s){const o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],a=r.Vertices!==void 0?r.Vertices.a:[],l=r.Indexes!==void 0?r.Indexes.a:[],c=e.attributes.position.count*3,u=new Float32Array(c);for(let p=0;p<l.length;p++){const g=l[p]*3;u[g]=a[p*3],u[g+1]=a[p*3+1],u[g+2]=a[p*3+2]}const h={vertexIndices:o,vertexPositions:u},d=this.genBuffers(h),f=new Pe(d.vertex,3);f.name=s||r.attrName,f.applyMatrix4(i),e.morphAttributes.position.push(f)}parseNormals(e){const t=e.MappingInformationType,r=e.ReferenceInformationType,i=e.Normals.a;let s=[];return r==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:s,mappingType:t,referenceType:r}}parseUVs(e){const t=e.MappingInformationType,r=e.ReferenceInformationType,i=e.UV.a;let s=[];return r==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:i,indices:s,mappingType:t,referenceType:r}}parseVertexColors(e){const t=e.MappingInformationType,r=e.ReferenceInformationType,i=e.Colors.a;let s=[];return r==="IndexToDirect"&&(s=e.ColorIndex.a),{dataSize:4,buffer:i,indices:s,mappingType:t,referenceType:r}}parseMaterialIndices(e){const t=e.MappingInformationType,r=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:r};const i=e.Materials.a,s=[];for(let o=0;o<i.length;++o)s.push(o);return{dataSize:1,buffer:i,indices:s,mappingType:t,referenceType:r}}parseNurbsGeometry(e){if(W6===void 0)return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."),new Ne;const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Ne;const r=t-1,i=e.KnotVector.a,s=[],o=e.Points.a;for(let h=0,d=o.length;h<d;h+=4)s.push(new t0().fromArray(o,h));let a,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){a=r,l=i.length-1-a;for(let h=0;h<r;++h)s.push(s[h])}const u=new W6(r,i,s,a,l).getPoints(s.length*12);return new Ne().setFromPoints(u)}}class foe{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const r in t){const i=t[r],s=this.addClip(i);e.push(s)}return e}parseClips(){if(Ge.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Ge.Objects.AnimationCurveNode,t=new Map;for(const r in e){const i=e[r];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:i.id,attr:i.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=Ge.Objects.AnimationCurve;for(const r in t){const i={id:t[r].id,times:t[r].KeyTime.a.map(voe),values:t[r].KeyValueFloat.a},s=T0.get(i.id);if(s!==void 0){const o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=i:a.match(/Y/)?e.get(o).curves.y=i:a.match(/Z/)?e.get(o).curves.z=i:a.match(/d|DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=i)}}}parseAnimationLayers(e){const t=Ge.Objects.AnimationLayer,r=new Map;for(const i in t){const s=[],o=T0.get(parseInt(i));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(s[c]===void 0){const h=T0.get(l.ID).parents.filter(function(d){return d.relationship!==void 0})[0].ID;if(h!==void 0){const d=Ge.Objects.Model[h.toString()];if(d===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const f={modelName:d.attrName?Ye.sanitizeNodeName(d.attrName):"",ID:d.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};lt.traverse(function(p){p.ID===d.id&&(f.transform=p.matrix,p.userData.transformData&&(f.eulerOrder=p.userData.transformData.eulerOrder))}),f.transform||(f.transform=new Ee),"PreRotation"in d&&(f.preRotation=d.PreRotation.value),"PostRotation"in d&&(f.postRotation=d.PostRotation.value),s[c]=f}}s[c]&&(s[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(s[c]===void 0){const h=T0.get(l.ID).parents.filter(function(_){return _.relationship!==void 0})[0].ID,d=T0.get(h).parents[0].ID,f=T0.get(d).parents[0].ID,p=T0.get(f).parents[0].ID,g=Ge.Objects.Model[p],y={modelName:g.attrName?Ye.sanitizeNodeName(g.attrName):"",morphName:Ge.Objects.Deformer[h].attrName};s[c]=y}s[c][u.attr]=u}}}),r.set(parseInt(i),s))}return r}parseAnimStacks(e){const t=Ge.Objects.AnimationStack,r={};for(const i in t){const s=T0.get(parseInt(i)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(s[0].ID);r[i]={name:t[i].attrName,layer:o}}return r}addClip(e){let t=[];const r=this;return e.layer.forEach(function(i){t=t.concat(r.generateTracks(i))}),new x1(e.name,-1,t)}generateTracks(e){const t=[];let r=new I,i=new C0,s=new I;if(e.transform&&e.transform.decompose(r,i,s),r=r.toArray(),i=new Ut().setFromQuaternion(i,e.eulerOrder).toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.T.curves,r,"position");o!==void 0&&t.push(o)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const o=this.generateRotationTrack(e.modelName,e.R.curves,i,e.preRotation,e.postRotation,e.eulerOrder);o!==void 0&&t.push(o)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");o!==void 0&&t.push(o)}if(e.DeformPercent!==void 0){const o=this.generateMorphTrack(e);o!==void 0&&t.push(o)}return t}generateVectorTrack(e,t,r,i){const s=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(s,t,r);return new $i(e+"."+i,s,o)}generateRotationTrack(e,t,r,i,s,o){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(bt.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(bt.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(bt.degToRad));const a=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(a,t,r);i!==void 0&&(i=i.map(bt.degToRad),i.push(o),i=new Ut().fromArray(i),i=new C0().setFromEuler(i)),s!==void 0&&(s=s.map(bt.degToRad),s.push(o),s=new Ut().fromArray(s),s=new C0().setFromEuler(s).invert());const c=new C0,u=new Ut,h=[];for(let d=0;d<l.length;d+=3)u.set(l[d],l[d+1],l[d+2],o),c.setFromEuler(u),i!==void 0&&c.premultiply(i),s!==void 0&&c.multiply(s),c.toArray(h,d/3*4);return new ur(e+".quaternion",a,h)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,r=t.values.map(function(s){return s/100}),i=lt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Wi(e.modelName+".morphTargetInfluences["+i+"]",t.times,r)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(r,i){return r-i}),t.length>1){let r=1,i=t[0];for(let s=1;s<t.length;s++){const o=t[s];o!==i&&(t[r]=o,i=o,r++)}t=t.slice(0,r)}return t}getKeyframeTrackValues(e,t,r){const i=r,s=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const u=t.x.values[o];s.push(u),i[0]=u}else s.push(i[0]);if(a!==-1){const u=t.y.values[a];s.push(u),i[1]=u}else s.push(i[1]);if(l!==-1){const u=t.z.values[l];s.push(u),i[2]=u}else s.push(i[2])}),s}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const r=e.values[t-1],i=e.values[t]-r,s=Math.abs(i);if(s>=180){const o=s/180,a=i/o;let l=r+a;const c=e.times[t-1],h=(e.times[t]-c)/o;let d=c+h;const f=[],p=[];for(;d<e.times[t];)f.push(d),d+=h,p.push(l),l+=a;e.times=j6(e.times,t,f),e.values=j6(e.values,t,p)}}}}class poe{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new ud,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,r=e.split(/[\r\n]+/);return r.forEach(function(i,s){const o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,r[++s]):u?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const r=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:r},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(r,s):r in a?(r==="PoseNode"?a.PoseNode.push(s):a[r].id!==void 0&&(a[r]={},a[r][a[r].id]=a[r]),o.id!==""&&(a[r][o.id]=s)):typeof o.id=="number"?(a[r]={},a[r][o.id]=s):r!=="Properties70"&&(r==="PoseNode"?a[r]=[s]:a[r]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let r="",i="";return e.length>1&&(r=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:r,type:i}}parseNodeProperty(e,t,r){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&s===","&&(s=r.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,i,s);return}if(i==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let h=s.split(",").slice(3);h=h.map(function(d){return d.trim().replace(/^"/,"")}),i="connections",s=[c,u],yoe(s,h),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=s),i in o&&Array.isArray(o[i])?o[i].push(s):i!=="a"?o[i]=s:o.a=s,this.setCurrentProp(o,i),i==="a"&&s.slice(-1)!==","&&(o.a=pl(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=pl(t.a))}parseNodeSpecialProperty(e,t,r){const i=r.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=i[0],o=i[1],a=i[2],l=i[3];let c=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=pl(c);break}this.getPrevNode()[s]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class moe{parse(e){const t=new $6(e);t.skip(23);const r=t.getUint32();if(r<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+r);const i=new ud;for(;!this.endOfContent(t);){const s=this.parseNode(t,r);s!==null&&i.add(s.name,s)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const r={},i=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(i===0)return null;const l=[];for(let d=0;d<s;d++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(r.singleProperty=s===1&&e.getOffset()===i;i>e.getOffset();){const d=this.parseNode(e,t);d!==null&&this.parseSubNode(a,r,d)}return r.propertyList=l,typeof c=="number"&&(r.id=c),u!==""&&(r.attrName=u),h!==""&&(r.attrType=h),a!==""&&(r.name=a),r}parseSubNode(e,t,r){if(r.singleProperty===!0){const i=r.propertyList[0];Array.isArray(i)?(t[r.name]=r,r.a=i):t[r.name]=i}else if(e==="Connections"&&r.name==="C"){const i=[];r.propertyList.forEach(function(s,o){o!==0&&i.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(r.name==="Properties70")Object.keys(r).forEach(function(s){t[s]=r[s]});else if(e==="Properties70"&&r.name==="P"){let i=r.propertyList[0],s=r.propertyList[1];const o=r.propertyList[2],a=r.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[r.propertyList[4],r.propertyList[5],r.propertyList[6]]:l=r.propertyList[4],t[i]={type:s,type2:o,flag:a,value:l}}else t[r.name]===void 0?typeof r.id=="number"?(t[r.name]={},t[r.name][r.id]=r):t[r.name]=r:r.name==="PoseNode"?(Array.isArray(t[r.name])||(t[r.name]=[t[r.name]]),t[r.name].push(r)):t[r.name][r.id]===void 0&&(t[r.name][r.id]=r)}parseProperty(e){const t=e.getString(1);let r;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return r=e.getUint32(),e.getArrayBuffer(r);case"S":return r=e.getUint32(),e.getString(r);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),s=e.getUint32(),o=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}typeof noe>"u"&&console.error("THREE.FBXLoader: External library fflate.min.js required.");const a=Oo(new Uint8Array(e.getArrayBuffer(o))),l=new $6(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class $6{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let r=0;r<e;r++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let r=0;r<e;r++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let r=0;r<e;r++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let r=0;r<e;r++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let r=0;r<e;r++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=[];for(let i=0;i<e;i++)t[i]=this.getUint8();const r=t.indexOf(0);return r>=0&&(t=t.slice(0,r)),Gt.decodeText(new Uint8Array(t))}}class ud{add(e,t){this[e]=t}}function _oe(n){const e="Kaydara FBX Binary  \0";return n.byteLength>=e.length&&e===fd(n,0,e.length)}function goe(n){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function r(i){const s=n[i-1];return n=n.slice(t+i),t++,s}for(let i=0;i<e.length;++i)if(r(1)===e[i])return!1;return!0}function X6(n){const e=/FBXVersion: (\d+)/,t=n.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function voe(n){return n/46186158e3}const xoe=[];function Ua(n,e,t,r){let i;switch(r.mappingType){case"ByPolygonVertex":i=n;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=r.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+r.mappingType)}r.referenceType==="IndexToDirect"&&(i=r.indices[i]);const s=i*r.dataSize,o=s+r.dataSize;return woe(xoe,r.buffer,s,o)}const fl=new Ut,wi=new I;function hd(n){const e=new Ee,t=new Ee,r=new Ee,i=new Ee,s=new Ee,o=new Ee,a=new Ee,l=new Ee,c=new Ee,u=new Ee,h=new Ee,d=new Ee,f=n.inheritType?n.inheritType:0;if(n.translation&&e.setPosition(wi.fromArray(n.translation)),n.preRotation){const D=n.preRotation.map(bt.degToRad);D.push(n.eulerOrder),t.makeRotationFromEuler(fl.fromArray(D))}if(n.rotation){const D=n.rotation.map(bt.degToRad);D.push(n.eulerOrder),r.makeRotationFromEuler(fl.fromArray(D))}if(n.postRotation){const D=n.postRotation.map(bt.degToRad);D.push(n.eulerOrder),i.makeRotationFromEuler(fl.fromArray(D)),i.invert()}n.scale&&s.scale(wi.fromArray(n.scale)),n.scalingOffset&&a.setPosition(wi.fromArray(n.scalingOffset)),n.scalingPivot&&o.setPosition(wi.fromArray(n.scalingPivot)),n.rotationOffset&&l.setPosition(wi.fromArray(n.rotationOffset)),n.rotationPivot&&c.setPosition(wi.fromArray(n.rotationPivot)),n.parentMatrixWorld&&(h.copy(n.parentMatrix),u.copy(n.parentMatrixWorld));const p=t.clone().multiply(r).multiply(i),g=new Ee;g.extractRotation(u);const y=new Ee;y.copyPosition(u);const _=y.clone().invert().multiply(u),m=g.clone().invert().multiply(_),x=s,v=new Ee;if(f===0)v.copy(g).multiply(p).multiply(m).multiply(x);else if(f===1)v.copy(g).multiply(m).multiply(p).multiply(x);else{const z=new Ee().scale(new I().setFromMatrixScale(h)).clone().invert(),V=m.clone().multiply(z);v.copy(g).multiply(p).multiply(V).multiply(x)}const M=c.clone().invert(),T=o.clone().invert();let w=e.clone().multiply(l).multiply(c).multiply(t).multiply(r).multiply(i).multiply(M).multiply(a).multiply(o).multiply(s).multiply(T);const S=new Ee().copyPosition(w),N=u.clone().multiply(S);return d.copyPosition(N),w=d.clone().multiply(v),w.premultiply(u.invert()),w}function dd(n){n=n||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return n===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[n]}function pl(n){return n.split(",").map(function(t){return parseFloat(t)})}function fd(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=n.byteLength),Gt.decodeText(new Uint8Array(n,e,t))}function yoe(n,e){for(let t=0,r=n.length,i=e.length;t<i;t++,r++)n[r]=e[t]}function woe(n,e,t,r){for(let i=t,s=0;i<r;i++,s++)n[s]=e[i];return n}function j6(n,e,t){return n.slice(0,e).concat(t).concat(n.slice(e))}var kr={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`};class ln{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const Moe=new fr(-1,1,1,-1,0,1),D3=new Ne;D3.setAttribute("position",new Pe([-1,3,0,-1,-1,0,3,-1,0],3));D3.setAttribute("uv",new Pe([0,2,0,0,2,0],2));class Kr{constructor(e){this._mesh=new N0(D3,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Moe)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ki extends ln{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof d0?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=et.clone(e.uniforms),this.material=new d0({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Kr(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class q6 extends ln{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class boe extends ln{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}let Soe=class{constructor(e,t){if(this.renderer=e,t===void 0){const r={minFilter:a0,magFilter:a0,format:u0},i=e.getSize(new ie);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new z0(this._width*this._pixelRatio,this._height*this._pixelRatio,r),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],kr===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Ki===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Ki(kr),this.clock=new Oie}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),o.needsSwap){if(r){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}q6!==void 0&&(o instanceof q6?r=!0:o instanceof boe&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(r,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}};new fr(-1,1,1,-1,0,1);const pd=new Ne;pd.setAttribute("position",new Pe([-1,3,0,-1,-1,0,3,-1,0],3));pd.setAttribute("uv",new Pe([0,2,0,0,2,0],2));let Aoe=class extends ln{constructor(e,t,r,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ae}render(e,t,r){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}};const Y6={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};let Toe=class extends ln{constructor(e,t,r){super(),this.scene=e,this.camera=t;const i=r.focus!==void 0?r.focus:1,s=r.aspect!==void 0?r.aspect:t.aspect,o=r.aperture!==void 0?r.aperture:.025,a=r.maxblur!==void 0?r.maxblur:1,l=r.width||window.innerWidth||1,c=r.height||window.innerHeight||1;this.renderTargetDepth=new z0(l,c,{minFilter:o0,magFilter:o0}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new o3,this.materialDepth.depthPacking=d5,this.materialDepth.blending=j0,Y6===void 0&&console.error("THREE.BokehPass relies on BokehShader");const u=Y6,h=et.clone(u.uniforms);h.tDepth.value=this.renderTargetDepth.texture,h.focus.value=i,h.aspect.value=s,h.aperture.value=o,h.maxblur.value=a,h.nearClip.value=t.near,h.farClip.value=t.far,this.materialBokeh=new d0({defines:Object.assign({},u.defines),uniforms:h,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader}),this.uniforms=h,this.needsSwap=!1,this.fsQuad=new Kr(this.materialBokeh),this._oldClearColor=new Ae}render(e,t,r){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const i=e.getClearAlpha(),s=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=r.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(i),e.autoClear=s}};const Q6={uniforms:{tDiffuse:{value:null},time:{value:0},nIntensity:{value:.5},sIntensity:{value:.05},sCount:{value:4096},grayscale:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		// control parameter
		uniform float time;

		uniform bool grayscale;

		// noise effect intensity value (0 = no effect, 1 = full effect)
		uniform float nIntensity;

		// scanlines effect intensity value (0 = no effect, 1 = full effect)
		uniform float sIntensity;

		// scanlines effect count value (0 = no effect, 4096 = full effect)
		uniform float sCount;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

		// sample the source
			vec4 cTextureScreen = texture2D( tDiffuse, vUv );

		// make some noise
			float dx = rand( vUv + time );

		// add noise
			vec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx, 0.0, 1.0 );

		// get us a sine and cosine
			vec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );

		// add scanlines
			cResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;

		// interpolate between source and result by intensity
			cResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );

		// convert to grayscale if desired
			if( grayscale ) {

				cResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );

			}

			gl_FragColor =  vec4( cResult, cTextureScreen.a );

		}`};let Eoe=class extends ln{constructor(e,t,r,i){super(),Q6===void 0&&console.error("THREE.FilmPass relies on FilmShader");const s=Q6;this.uniforms=et.clone(s.uniforms),this.material=new d0({uniforms:this.uniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader}),i!==void 0&&(this.uniforms.grayscale.value=i),e!==void 0&&(this.uniforms.nIntensity.value=e),t!==void 0&&(this.uniforms.sIntensity.value=t),r!==void 0&&(this.uniforms.sCount.value=r),this.fsQuad=new Kr(this.material)}render(e,t,r,i){this.uniforms.tDiffuse.value=r.texture,this.uniforms.time.value+=i,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}};const Coe={uniforms:{tDiffuse:{value:null},resolution:{value:new ie(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		#define FXAA_PC 1
		#define FXAA_GLSL_100 1
		#define FXAA_QUALITY_PRESET 12

		#define FXAA_GREEN_AS_LUMA 1

		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_PC_CONSOLE
				//
				// The console algorithm for PC is included
				// for developers targeting really low spec machines.
				// Likely better to just run FXAA_PC, and use a really low preset.
				//
				#define FXAA_PC_CONSOLE 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GLSL_120
				#define FXAA_GLSL_120 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GLSL_130
				#define FXAA_GLSL_130 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_3
				#define FXAA_HLSL_3 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_4
				#define FXAA_HLSL_4 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_5
				#define FXAA_HLSL_5 0
		#endif
		/*==========================================================================*/
		#ifndef FXAA_GREEN_AS_LUMA
				//
				// For those using non-linear color,
				// and either not able to get luma in alpha, or not wanting to,
				// this enables FXAA to run using green as a proxy for luma.
				// So with this enabled, no need to pack luma in alpha.
				//
				// This will turn off AA on anything which lacks some amount of green.
				// Pure red and blue or combination of only R and B, will get no AA.
				//
				// Might want to lower the settings for both,
				//		fxaaConsoleEdgeThresholdMin
				//		fxaaQualityEdgeThresholdMin
				// In order to insure AA does not get turned off on colors
				// which contain a minor amount of green.
				//
				// 1 = On.
				// 0 = Off.
				//
				#define FXAA_GREEN_AS_LUMA 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_EARLY_EXIT
				//
				// Controls algorithm's early exit path.
				// On PS3 turning this ON adds 2 cycles to the shader.
				// On 360 turning this OFF adds 10ths of a millisecond to the shader.
				// Turning this off on console will result in a more blurry image.
				// So this defaults to on.
				//
				// 1 = On.
				// 0 = Off.
				//
				#define FXAA_EARLY_EXIT 1
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_DISCARD
				//
				// Only valid for PC OpenGL currently.
				// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
				//
				// 1 = Use discard on pixels which don't need AA.
				//		 For APIs which enable concurrent TEX+ROP from same surface.
				// 0 = Return unchanged color on pixels which don't need AA.
				//
				#define FXAA_DISCARD 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_FAST_PIXEL_OFFSET
				//
				// Used for GLSL 120 only.
				//
				// 1 = GL API supports fast pixel offsets
				// 0 = do not use fast pixel offsets
				//
				#ifdef GL_EXT_gpu_shader4
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifdef GL_NV_gpu_shader5
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifdef GL_ARB_gpu_shader5
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifndef FXAA_FAST_PIXEL_OFFSET
						#define FXAA_FAST_PIXEL_OFFSET 0
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GATHER4_ALPHA
				//
				// 1 = API supports gather4 on alpha channel.
				// 0 = API does not support gather4 on alpha channel.
				//
				#if (FXAA_HLSL_5 == 1)
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifdef GL_ARB_gpu_shader5
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifdef GL_NV_gpu_shader5
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifndef FXAA_GATHER4_ALPHA
						#define FXAA_GATHER4_ALPHA 0
				#endif
		#endif


		/*============================================================================
														FXAA QUALITY - TUNING KNOBS
		------------------------------------------------------------------------------
		NOTE the other tuning knobs are now in the shader function inputs!
		============================================================================*/
		#ifndef FXAA_QUALITY_PRESET
				//
				// Choose the quality preset.
				// This needs to be compiled into the shader as it effects code.
				// Best option to include multiple presets is to
				// in each shader define the preset, then include this file.
				//
				// OPTIONS
				// -----------------------------------------------------------------------
				// 10 to 15 - default medium dither (10=fastest, 15=highest quality)
				// 20 to 29 - less dither, more expensive (20=fastest, 29=highest quality)
				// 39			 - no dither, very expensive
				//
				// NOTES
				// -----------------------------------------------------------------------
				// 12 = slightly faster then FXAA 3.9 and higher edge quality (default)
				// 13 = about same speed as FXAA 3.9 and better than 12
				// 23 = closest to FXAA 3.9 visually and performance wise
				//	_ = the lowest digit is directly related to performance
				// _	= the highest digit is directly related to style
				//
				#define FXAA_QUALITY_PRESET 12
		#endif


		/*============================================================================

															 FXAA QUALITY - PRESETS

		============================================================================*/

		/*============================================================================
												 FXAA QUALITY - MEDIUM DITHER PRESETS
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 10)
				#define FXAA_QUALITY_PS 3
				#define FXAA_QUALITY_P0 1.5
				#define FXAA_QUALITY_P1 3.0
				#define FXAA_QUALITY_P2 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 11)
				#define FXAA_QUALITY_PS 4
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 3.0
				#define FXAA_QUALITY_P3 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 12)
				#define FXAA_QUALITY_PS 5
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 4.0
				#define FXAA_QUALITY_P4 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 13)
				#define FXAA_QUALITY_PS 6
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 4.0
				#define FXAA_QUALITY_P5 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 14)
				#define FXAA_QUALITY_PS 7
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 4.0
				#define FXAA_QUALITY_P6 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 15)
				#define FXAA_QUALITY_PS 8
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 4.0
				#define FXAA_QUALITY_P7 12.0
		#endif

		/*============================================================================
												 FXAA QUALITY - LOW DITHER PRESETS
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 20)
				#define FXAA_QUALITY_PS 3
				#define FXAA_QUALITY_P0 1.5
				#define FXAA_QUALITY_P1 2.0
				#define FXAA_QUALITY_P2 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 21)
				#define FXAA_QUALITY_PS 4
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 22)
				#define FXAA_QUALITY_PS 5
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 23)
				#define FXAA_QUALITY_PS 6
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 24)
				#define FXAA_QUALITY_PS 7
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 3.0
				#define FXAA_QUALITY_P6 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 25)
				#define FXAA_QUALITY_PS 8
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 4.0
				#define FXAA_QUALITY_P7 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 26)
				#define FXAA_QUALITY_PS 9
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 4.0
				#define FXAA_QUALITY_P8 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 27)
				#define FXAA_QUALITY_PS 10
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 4.0
				#define FXAA_QUALITY_P9 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 28)
				#define FXAA_QUALITY_PS 11
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 4.0
				#define FXAA_QUALITY_P10 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 29)
				#define FXAA_QUALITY_PS 12
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 2.0
				#define FXAA_QUALITY_P10 4.0
				#define FXAA_QUALITY_P11 8.0
		#endif

		/*============================================================================
												 FXAA QUALITY - EXTREME QUALITY
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 39)
				#define FXAA_QUALITY_PS 12
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.0
				#define FXAA_QUALITY_P2 1.0
				#define FXAA_QUALITY_P3 1.0
				#define FXAA_QUALITY_P4 1.0
				#define FXAA_QUALITY_P5 1.5
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 2.0
				#define FXAA_QUALITY_P10 4.0
				#define FXAA_QUALITY_P11 8.0
		#endif



		/*============================================================================

																		API PORTING

		============================================================================*/
		#if (FXAA_GLSL_100 == 1) || (FXAA_GLSL_120 == 1) || (FXAA_GLSL_130 == 1)
				#define FxaaBool bool
				#define FxaaDiscard discard
				#define FxaaFloat float
				#define FxaaFloat2 vec2
				#define FxaaFloat3 vec3
				#define FxaaFloat4 vec4
				#define FxaaHalf float
				#define FxaaHalf2 vec2
				#define FxaaHalf3 vec3
				#define FxaaHalf4 vec4
				#define FxaaInt2 ivec2
				#define FxaaSat(x) clamp(x, 0.0, 1.0)
				#define FxaaTex sampler2D
		#else
				#define FxaaBool bool
				#define FxaaDiscard clip(-1)
				#define FxaaFloat float
				#define FxaaFloat2 float2
				#define FxaaFloat3 float3
				#define FxaaFloat4 float4
				#define FxaaHalf half
				#define FxaaHalf2 half2
				#define FxaaHalf3 half3
				#define FxaaHalf4 half4
				#define FxaaSat(x) saturate(x)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_100 == 1)
			#define FxaaTexTop(t, p) texture2D(t, p, 0.0)
			#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), 0.0)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_120 == 1)
				// Requires,
				//	#version 120
				// And at least,
				//	#extension GL_EXT_gpu_shader4 : enable
				//	(or set FXAA_FAST_PIXEL_OFFSET 1 to work like DX9)
				#define FxaaTexTop(t, p) texture2DLod(t, p, 0.0)
				#if (FXAA_FAST_PIXEL_OFFSET == 1)
						#define FxaaTexOff(t, p, o, r) texture2DLodOffset(t, p, 0.0, o)
				#else
						#define FxaaTexOff(t, p, o, r) texture2DLod(t, p + (o * r), 0.0)
				#endif
				#if (FXAA_GATHER4_ALPHA == 1)
						// use #extension GL_ARB_gpu_shader5 : enable
						#define FxaaTexAlpha4(t, p) textureGather(t, p, 3)
						#define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)
						#define FxaaTexGreen4(t, p) textureGather(t, p, 1)
						#define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_130 == 1)
				// Requires "#version 130" or better
				#define FxaaTexTop(t, p) textureLod(t, p, 0.0)
				#define FxaaTexOff(t, p, o, r) textureLodOffset(t, p, 0.0, o)
				#if (FXAA_GATHER4_ALPHA == 1)
						// use #extension GL_ARB_gpu_shader5 : enable
						#define FxaaTexAlpha4(t, p) textureGather(t, p, 3)
						#define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)
						#define FxaaTexGreen4(t, p) textureGather(t, p, 1)
						#define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_3 == 1)
				#define FxaaInt2 float2
				#define FxaaTex sampler2D
				#define FxaaTexTop(t, p) tex2Dlod(t, float4(p, 0.0, 0.0))
				#define FxaaTexOff(t, p, o, r) tex2Dlod(t, float4(p + (o * r), 0, 0))
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_4 == 1)
				#define FxaaInt2 int2
				struct FxaaTex { SamplerState smpl; Texture2D tex; };
				#define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)
				#define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_5 == 1)
				#define FxaaInt2 int2
				struct FxaaTex { SamplerState smpl; Texture2D tex; };
				#define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)
				#define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)
				#define FxaaTexAlpha4(t, p) t.tex.GatherAlpha(t.smpl, p)
				#define FxaaTexOffAlpha4(t, p, o) t.tex.GatherAlpha(t.smpl, p, o)
				#define FxaaTexGreen4(t, p) t.tex.GatherGreen(t.smpl, p)
				#define FxaaTexOffGreen4(t, p, o) t.tex.GatherGreen(t.smpl, p, o)
		#endif


		/*============================================================================
											 GREEN AS LUMA OPTION SUPPORT FUNCTION
		============================================================================*/
		#if (FXAA_GREEN_AS_LUMA == 0)
				FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.w; }
		#else
				FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.y; }
		#endif




		/*============================================================================

																 FXAA3 QUALITY - PC

		============================================================================*/
		#if (FXAA_PC == 1)
		/*--------------------------------------------------------------------------*/
		FxaaFloat4 FxaaPixelShader(
				//
				// Use noperspective interpolation here (turn off perspective interpolation).
				// {xy} = center of pixel
				FxaaFloat2 pos,
				//
				// Used only for FXAA Console, and not used on the 360 version.
				// Use noperspective interpolation here (turn off perspective interpolation).
				// {xy_} = upper left of pixel
				// {_zw} = lower right of pixel
				FxaaFloat4 fxaaConsolePosPos,
				//
				// Input color texture.
				// {rgb_} = color in linear or perceptual color space
				// if (FXAA_GREEN_AS_LUMA == 0)
				//		 {__a} = luma in perceptual color space (not linear)
				FxaaTex tex,
				//
				// Only used on the optimized 360 version of FXAA Console.
				// For everything but 360, just use the same input here as for "tex".
				// For 360, same texture, just alias with a 2nd sampler.
				// This sampler needs to have an exponent bias of -1.
				FxaaTex fxaaConsole360TexExpBiasNegOne,
				//
				// Only used on the optimized 360 version of FXAA Console.
				// For everything but 360, just use the same input here as for "tex".
				// For 360, same texture, just alias with a 3nd sampler.
				// This sampler needs to have an exponent bias of -2.
				FxaaTex fxaaConsole360TexExpBiasNegTwo,
				//
				// Only used on FXAA Quality.
				// This must be from a constant/uniform.
				// {x_} = 1.0/screenWidthInPixels
				// {_y} = 1.0/screenHeightInPixels
				FxaaFloat2 fxaaQualityRcpFrame,
				//
				// Only used on FXAA Console.
				// This must be from a constant/uniform.
				// This effects sub-pixel AA quality and inversely sharpness.
				//	 Where N ranges between,
				//		 N = 0.50 (default)
				//		 N = 0.33 (sharper)
				// {x__} = -N/screenWidthInPixels
				// {_y_} = -N/screenHeightInPixels
				// {_z_} =	N/screenWidthInPixels
				// {__w} =	N/screenHeightInPixels
				FxaaFloat4 fxaaConsoleRcpFrameOpt,
				//
				// Only used on FXAA Console.
				// Not used on 360, but used on PS3 and PC.
				// This must be from a constant/uniform.
				// {x__} = -2.0/screenWidthInPixels
				// {_y_} = -2.0/screenHeightInPixels
				// {_z_} =	2.0/screenWidthInPixels
				// {__w} =	2.0/screenHeightInPixels
				FxaaFloat4 fxaaConsoleRcpFrameOpt2,
				//
				// Only used on FXAA Console.
				// Only used on 360 in place of fxaaConsoleRcpFrameOpt2.
				// This must be from a constant/uniform.
				// {x__} =	8.0/screenWidthInPixels
				// {_y_} =	8.0/screenHeightInPixels
				// {_z_} = -4.0/screenWidthInPixels
				// {__w} = -4.0/screenHeightInPixels
				FxaaFloat4 fxaaConsole360RcpFrameOpt2,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_SUBPIX define.
				// It is here now to allow easier tuning.
				// Choose the amount of sub-pixel aliasing removal.
				// This can effect sharpness.
				//	 1.00 - upper limit (softer)
				//	 0.75 - default amount of filtering
				//	 0.50 - lower limit (sharper, less sub-pixel aliasing removal)
				//	 0.25 - almost off
				//	 0.00 - completely off
				FxaaFloat fxaaQualitySubpix,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_EDGE_THRESHOLD define.
				// It is here now to allow easier tuning.
				// The minimum amount of local contrast required to apply algorithm.
				//	 0.333 - too little (faster)
				//	 0.250 - low quality
				//	 0.166 - default
				//	 0.125 - high quality
				//	 0.063 - overkill (slower)
				FxaaFloat fxaaQualityEdgeThreshold,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_EDGE_THRESHOLD_MIN define.
				// It is here now to allow easier tuning.
				// Trims the algorithm from processing darks.
				//	 0.0833 - upper limit (default, the start of visible unfiltered edges)
				//	 0.0625 - high quality (faster)
				//	 0.0312 - visible limit (slower)
				// Special notes when using FXAA_GREEN_AS_LUMA,
				//	 Likely want to set this to zero.
				//	 As colors that are mostly not-green
				//	 will appear very dark in the green channel!
				//	 Tune by looking at mostly non-green content,
				//	 then start at zero and increase until aliasing is a problem.
				FxaaFloat fxaaQualityEdgeThresholdMin,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_SHARPNESS define.
				// It is here now to allow easier tuning.
				// This does not effect PS3, as this needs to be compiled in.
				//	 Use FXAA_CONSOLE_PS3_EDGE_SHARPNESS for PS3.
				//	 Due to the PS3 being ALU bound,
				//	 there are only three safe values here: 2 and 4 and 8.
				//	 These options use the shaders ability to a free *|/ by 2|4|8.
				// For all other platforms can be a non-power of two.
				//	 8.0 is sharper (default!!!)
				//	 4.0 is softer
				//	 2.0 is really soft (good only for vector graphics inputs)
				FxaaFloat fxaaConsoleEdgeSharpness,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_THRESHOLD define.
				// It is here now to allow easier tuning.
				// This does not effect PS3, as this needs to be compiled in.
				//	 Use FXAA_CONSOLE_PS3_EDGE_THRESHOLD for PS3.
				//	 Due to the PS3 being ALU bound,
				//	 there are only two safe values here: 1/4 and 1/8.
				//	 These options use the shaders ability to a free *|/ by 2|4|8.
				// The console setting has a different mapping than the quality setting.
				// Other platforms can use other values.
				//	 0.125 leaves less aliasing, but is softer (default!!!)
				//	 0.25 leaves more aliasing, and is sharper
				FxaaFloat fxaaConsoleEdgeThreshold,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_THRESHOLD_MIN define.
				// It is here now to allow easier tuning.
				// Trims the algorithm from processing darks.
				// The console setting has a different mapping than the quality setting.
				// This only applies when FXAA_EARLY_EXIT is 1.
				// This does not apply to PS3,
				// PS3 was simplified to avoid more shader instructions.
				//	 0.06 - faster but more aliasing in darks
				//	 0.05 - default
				//	 0.04 - slower and less aliasing in darks
				// Special notes when using FXAA_GREEN_AS_LUMA,
				//	 Likely want to set this to zero.
				//	 As colors that are mostly not-green
				//	 will appear very dark in the green channel!
				//	 Tune by looking at mostly non-green content,
				//	 then start at zero and increase until aliasing is a problem.
				FxaaFloat fxaaConsoleEdgeThresholdMin,
				//
				// Extra constants for 360 FXAA Console only.
				// Use zeros or anything else for other platforms.
				// These must be in physical constant registers and NOT immediates.
				// Immediates will result in compiler un-optimizing.
				// {xyzw} = float4(1.0, -1.0, 0.25, -0.25)
				FxaaFloat4 fxaaConsole360ConstDir
		) {
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posM;
				posM.x = pos.x;
				posM.y = pos.y;
				#if (FXAA_GATHER4_ALPHA == 1)
						#if (FXAA_DISCARD == 0)
								FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);
								#if (FXAA_GREEN_AS_LUMA == 0)
										#define lumaM rgbyM.w
								#else
										#define lumaM rgbyM.y
								#endif
						#endif
						#if (FXAA_GREEN_AS_LUMA == 0)
								FxaaFloat4 luma4A = FxaaTexAlpha4(tex, posM);
								FxaaFloat4 luma4B = FxaaTexOffAlpha4(tex, posM, FxaaInt2(-1, -1));
						#else
								FxaaFloat4 luma4A = FxaaTexGreen4(tex, posM);
								FxaaFloat4 luma4B = FxaaTexOffGreen4(tex, posM, FxaaInt2(-1, -1));
						#endif
						#if (FXAA_DISCARD == 1)
								#define lumaM luma4A.w
						#endif
						#define lumaE luma4A.z
						#define lumaS luma4A.x
						#define lumaSE luma4A.y
						#define lumaNW luma4B.w
						#define lumaN luma4B.z
						#define lumaW luma4B.x
				#else
						FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);
						#if (FXAA_GREEN_AS_LUMA == 0)
								#define lumaM rgbyM.w
						#else
								#define lumaM rgbyM.y
						#endif
						#if (FXAA_GLSL_100 == 1)
							FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0, 1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 0.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 0.0), fxaaQualityRcpFrame.xy));
						#else
							FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0, 1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 0), fxaaQualityRcpFrame.xy));
						#endif
				#endif
		/*--------------------------------------------------------------------------*/
				FxaaFloat maxSM = max(lumaS, lumaM);
				FxaaFloat minSM = min(lumaS, lumaM);
				FxaaFloat maxESM = max(lumaE, maxSM);
				FxaaFloat minESM = min(lumaE, minSM);
				FxaaFloat maxWN = max(lumaN, lumaW);
				FxaaFloat minWN = min(lumaN, lumaW);
				FxaaFloat rangeMax = max(maxWN, maxESM);
				FxaaFloat rangeMin = min(minWN, minESM);
				FxaaFloat rangeMaxScaled = rangeMax * fxaaQualityEdgeThreshold;
				FxaaFloat range = rangeMax - rangeMin;
				FxaaFloat rangeMaxClamped = max(fxaaQualityEdgeThresholdMin, rangeMaxScaled);
				FxaaBool earlyExit = range < rangeMaxClamped;
		/*--------------------------------------------------------------------------*/
				if(earlyExit)
						#if (FXAA_DISCARD == 1)
								FxaaDiscard;
						#else
								return rgbyM;
						#endif
		/*--------------------------------------------------------------------------*/
				#if (FXAA_GATHER4_ALPHA == 0)
						#if (FXAA_GLSL_100 == 1)
							FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 1.0), fxaaQualityRcpFrame.xy));
						#else
							FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));
						#endif
				#else
						FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(1, -1), fxaaQualityRcpFrame.xy));
						FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));
				#endif
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNS = lumaN + lumaS;
				FxaaFloat lumaWE = lumaW + lumaE;
				FxaaFloat subpixRcpRange = 1.0/range;
				FxaaFloat subpixNSWE = lumaNS + lumaWE;
				FxaaFloat edgeHorz1 = (-2.0 * lumaM) + lumaNS;
				FxaaFloat edgeVert1 = (-2.0 * lumaM) + lumaWE;
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNESE = lumaNE + lumaSE;
				FxaaFloat lumaNWNE = lumaNW + lumaNE;
				FxaaFloat edgeHorz2 = (-2.0 * lumaE) + lumaNESE;
				FxaaFloat edgeVert2 = (-2.0 * lumaN) + lumaNWNE;
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNWSW = lumaNW + lumaSW;
				FxaaFloat lumaSWSE = lumaSW + lumaSE;
				FxaaFloat edgeHorz4 = (abs(edgeHorz1) * 2.0) + abs(edgeHorz2);
				FxaaFloat edgeVert4 = (abs(edgeVert1) * 2.0) + abs(edgeVert2);
				FxaaFloat edgeHorz3 = (-2.0 * lumaW) + lumaNWSW;
				FxaaFloat edgeVert3 = (-2.0 * lumaS) + lumaSWSE;
				FxaaFloat edgeHorz = abs(edgeHorz3) + edgeHorz4;
				FxaaFloat edgeVert = abs(edgeVert3) + edgeVert4;
		/*--------------------------------------------------------------------------*/
				FxaaFloat subpixNWSWNESE = lumaNWSW + lumaNESE;
				FxaaFloat lengthSign = fxaaQualityRcpFrame.x;
				FxaaBool horzSpan = edgeHorz >= edgeVert;
				FxaaFloat subpixA = subpixNSWE * 2.0 + subpixNWSWNESE;
		/*--------------------------------------------------------------------------*/
				if(!horzSpan) lumaN = lumaW;
				if(!horzSpan) lumaS = lumaE;
				if(horzSpan) lengthSign = fxaaQualityRcpFrame.y;
				FxaaFloat subpixB = (subpixA * (1.0/12.0)) - lumaM;
		/*--------------------------------------------------------------------------*/
				FxaaFloat gradientN = lumaN - lumaM;
				FxaaFloat gradientS = lumaS - lumaM;
				FxaaFloat lumaNN = lumaN + lumaM;
				FxaaFloat lumaSS = lumaS + lumaM;
				FxaaBool pairN = abs(gradientN) >= abs(gradientS);
				FxaaFloat gradient = max(abs(gradientN), abs(gradientS));
				if(pairN) lengthSign = -lengthSign;
				FxaaFloat subpixC = FxaaSat(abs(subpixB) * subpixRcpRange);
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posB;
				posB.x = posM.x;
				posB.y = posM.y;
				FxaaFloat2 offNP;
				offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
				offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;
				if(!horzSpan) posB.x += lengthSign * 0.5;
				if( horzSpan) posB.y += lengthSign * 0.5;
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posN;
				posN.x = posB.x - offNP.x * FXAA_QUALITY_P0;
				posN.y = posB.y - offNP.y * FXAA_QUALITY_P0;
				FxaaFloat2 posP;
				posP.x = posB.x + offNP.x * FXAA_QUALITY_P0;
				posP.y = posB.y + offNP.y * FXAA_QUALITY_P0;
				FxaaFloat subpixD = ((-2.0)*subpixC) + 3.0;
				FxaaFloat lumaEndN = FxaaLuma(FxaaTexTop(tex, posN));
				FxaaFloat subpixE = subpixC * subpixC;
				FxaaFloat lumaEndP = FxaaLuma(FxaaTexTop(tex, posP));
		/*--------------------------------------------------------------------------*/
				if(!pairN) lumaNN = lumaSS;
				FxaaFloat gradientScaled = gradient * 1.0/4.0;
				FxaaFloat lumaMM = lumaM - lumaNN * 0.5;
				FxaaFloat subpixF = subpixD * subpixE;
				FxaaBool lumaMLTZero = lumaMM < 0.0;
		/*--------------------------------------------------------------------------*/
				lumaEndN -= lumaNN * 0.5;
				lumaEndP -= lumaNN * 0.5;
				FxaaBool doneN = abs(lumaEndN) >= gradientScaled;
				FxaaBool doneP = abs(lumaEndP) >= gradientScaled;
				if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P1;
				if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P1;
				FxaaBool doneNP = (!doneN) || (!doneP);
				if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P1;
				if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P1;
		/*--------------------------------------------------------------------------*/
				if(doneNP) {
						if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
						if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
						if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
						if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
						doneN = abs(lumaEndN) >= gradientScaled;
						doneP = abs(lumaEndP) >= gradientScaled;
						if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P2;
						if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P2;
						doneNP = (!doneN) || (!doneP);
						if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P2;
						if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P2;
		/*--------------------------------------------------------------------------*/
						#if (FXAA_QUALITY_PS > 3)
						if(doneNP) {
								if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
								if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
								if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
								if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
								doneN = abs(lumaEndN) >= gradientScaled;
								doneP = abs(lumaEndP) >= gradientScaled;
								if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P3;
								if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P3;
								doneNP = (!doneN) || (!doneP);
								if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P3;
								if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P3;
		/*--------------------------------------------------------------------------*/
								#if (FXAA_QUALITY_PS > 4)
								if(doneNP) {
										if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
										if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
										if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
										if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
										doneN = abs(lumaEndN) >= gradientScaled;
										doneP = abs(lumaEndP) >= gradientScaled;
										if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P4;
										if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P4;
										doneNP = (!doneN) || (!doneP);
										if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P4;
										if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P4;
		/*--------------------------------------------------------------------------*/
										#if (FXAA_QUALITY_PS > 5)
										if(doneNP) {
												if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
												if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
												if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
												if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
												doneN = abs(lumaEndN) >= gradientScaled;
												doneP = abs(lumaEndP) >= gradientScaled;
												if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P5;
												if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P5;
												doneNP = (!doneN) || (!doneP);
												if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P5;
												if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P5;
		/*--------------------------------------------------------------------------*/
												#if (FXAA_QUALITY_PS > 6)
												if(doneNP) {
														if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
														if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
														if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
														if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
														doneN = abs(lumaEndN) >= gradientScaled;
														doneP = abs(lumaEndP) >= gradientScaled;
														if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P6;
														if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P6;
														doneNP = (!doneN) || (!doneP);
														if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P6;
														if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P6;
		/*--------------------------------------------------------------------------*/
														#if (FXAA_QUALITY_PS > 7)
														if(doneNP) {
																if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
																if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
																if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
																if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
																doneN = abs(lumaEndN) >= gradientScaled;
																doneP = abs(lumaEndP) >= gradientScaled;
																if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P7;
																if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P7;
																doneNP = (!doneN) || (!doneP);
																if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P7;
																if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P7;
		/*--------------------------------------------------------------------------*/
				#if (FXAA_QUALITY_PS > 8)
				if(doneNP) {
						if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
						if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
						if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
						if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
						doneN = abs(lumaEndN) >= gradientScaled;
						doneP = abs(lumaEndP) >= gradientScaled;
						if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P8;
						if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P8;
						doneNP = (!doneN) || (!doneP);
						if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P8;
						if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P8;
		/*--------------------------------------------------------------------------*/
						#if (FXAA_QUALITY_PS > 9)
						if(doneNP) {
								if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
								if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
								if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
								if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
								doneN = abs(lumaEndN) >= gradientScaled;
								doneP = abs(lumaEndP) >= gradientScaled;
								if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P9;
								if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P9;
								doneNP = (!doneN) || (!doneP);
								if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P9;
								if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P9;
		/*--------------------------------------------------------------------------*/
								#if (FXAA_QUALITY_PS > 10)
								if(doneNP) {
										if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
										if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
										if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
										if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
										doneN = abs(lumaEndN) >= gradientScaled;
										doneP = abs(lumaEndP) >= gradientScaled;
										if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P10;
										if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P10;
										doneNP = (!doneN) || (!doneP);
										if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P10;
										if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P10;
		/*--------------------------------------------------------------------------*/
										#if (FXAA_QUALITY_PS > 11)
										if(doneNP) {
												if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
												if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
												if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
												if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
												doneN = abs(lumaEndN) >= gradientScaled;
												doneP = abs(lumaEndP) >= gradientScaled;
												if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P11;
												if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P11;
												doneNP = (!doneN) || (!doneP);
												if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P11;
												if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P11;
		/*--------------------------------------------------------------------------*/
												#if (FXAA_QUALITY_PS > 12)
												if(doneNP) {
														if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
														if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
														if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
														if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
														doneN = abs(lumaEndN) >= gradientScaled;
														doneP = abs(lumaEndP) >= gradientScaled;
														if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P12;
														if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P12;
														doneNP = (!doneN) || (!doneP);
														if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P12;
														if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P12;
		/*--------------------------------------------------------------------------*/
												}
												#endif
		/*--------------------------------------------------------------------------*/
										}
										#endif
		/*--------------------------------------------------------------------------*/
								}
								#endif
		/*--------------------------------------------------------------------------*/
						}
						#endif
		/*--------------------------------------------------------------------------*/
				}
				#endif
		/*--------------------------------------------------------------------------*/
														}
														#endif
		/*--------------------------------------------------------------------------*/
												}
												#endif
		/*--------------------------------------------------------------------------*/
										}
										#endif
		/*--------------------------------------------------------------------------*/
								}
								#endif
		/*--------------------------------------------------------------------------*/
						}
						#endif
		/*--------------------------------------------------------------------------*/
				}
		/*--------------------------------------------------------------------------*/
				FxaaFloat dstN = posM.x - posN.x;
				FxaaFloat dstP = posP.x - posM.x;
				if(!horzSpan) dstN = posM.y - posN.y;
				if(!horzSpan) dstP = posP.y - posM.y;
		/*--------------------------------------------------------------------------*/
				FxaaBool goodSpanN = (lumaEndN < 0.0) != lumaMLTZero;
				FxaaFloat spanLength = (dstP + dstN);
				FxaaBool goodSpanP = (lumaEndP < 0.0) != lumaMLTZero;
				FxaaFloat spanLengthRcp = 1.0/spanLength;
		/*--------------------------------------------------------------------------*/
				FxaaBool directionN = dstN < dstP;
				FxaaFloat dst = min(dstN, dstP);
				FxaaBool goodSpan = directionN ? goodSpanN : goodSpanP;
				FxaaFloat subpixG = subpixF * subpixF;
				FxaaFloat pixelOffset = (dst * (-spanLengthRcp)) + 0.5;
				FxaaFloat subpixH = subpixG * fxaaQualitySubpix;
		/*--------------------------------------------------------------------------*/
				FxaaFloat pixelOffsetGood = goodSpan ? pixelOffset : 0.0;
				FxaaFloat pixelOffsetSubpix = max(pixelOffsetGood, subpixH);
				if(!horzSpan) posM.x += pixelOffsetSubpix * lengthSign;
				if( horzSpan) posM.y += pixelOffsetSubpix * lengthSign;
				#if (FXAA_DISCARD == 1)
						return FxaaTexTop(tex, posM);
				#else
						return FxaaFloat4(FxaaTexTop(tex, posM).xyz, lumaM);
				#endif
		}
		/*==========================================================================*/
		#endif

		void main() {
			gl_FragColor = FxaaPixelShader(
				vUv,
				vec4(0.0),
				tDiffuse,
				tDiffuse,
				tDiffuse,
				resolution,
				vec4(0.0),
				vec4(0.0),
				vec4(0.0),
				0.75,
				0.166,
				0.0833,
				0.0,
				0.0,
				0.0,
				vec4(0.0)
			);

			// TODO avoid querying texture twice for same texel
			gl_FragColor.a = texture2D(tDiffuse, vUv).a;
		}`},Va={uniforms:{tDiffuse:{value:null},shape:{value:1},radius:{value:4},rotateR:{value:Math.PI/12*1},rotateG:{value:Math.PI/12*2},rotateB:{value:Math.PI/12*3},scatter:{value:0},width:{value:1},height:{value:1},blending:{value:1},blendingMode:{value:1},greyscale:{value:!1},disable:{value:!1}},vertexShader:`

		varying vec2 vUV;

		void main() {

			vUV = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

		}`,fragmentShader:`

		#define SQRT2_MINUS_ONE 0.41421356
		#define SQRT2_HALF_MINUS_ONE 0.20710678
		#define PI2 6.28318531
		#define SHAPE_DOT 1
		#define SHAPE_ELLIPSE 2
		#define SHAPE_LINE 3
		#define SHAPE_SQUARE 4
		#define BLENDING_LINEAR 1
		#define BLENDING_MULTIPLY 2
		#define BLENDING_ADD 3
		#define BLENDING_LIGHTER 4
		#define BLENDING_DARKER 5
		uniform sampler2D tDiffuse;
		uniform float radius;
		uniform float rotateR;
		uniform float rotateG;
		uniform float rotateB;
		uniform float scatter;
		uniform float width;
		uniform float height;
		uniform int shape;
		uniform bool disable;
		uniform float blending;
		uniform int blendingMode;
		varying vec2 vUV;
		uniform bool greyscale;
		const int samples = 8;

		float blend( float a, float b, float t ) {

		// linear blend
			return a * ( 1.0 - t ) + b * t;

		}

		float hypot( float x, float y ) {

		// vector magnitude
			return sqrt( x * x + y * y );

		}

		float rand( vec2 seed ){

		// get pseudo-random number
			return fract( sin( dot( seed.xy, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );

		}

		float distanceToDotRadius( float channel, vec2 coord, vec2 normal, vec2 p, float angle, float rad_max ) {

		// apply shape-specific transforms
			float dist = hypot( coord.x - p.x, coord.y - p.y );
			float rad = channel;

			if ( shape == SHAPE_DOT ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

			} else if ( shape == SHAPE_ELLIPSE ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

				if ( dist != 0.0 ) {
					float dot_p = abs( ( p.x - coord.x ) / dist * normal.x + ( p.y - coord.y ) / dist * normal.y );
					dist = ( dist * ( 1.0 - SQRT2_HALF_MINUS_ONE ) ) + dot_p * dist * SQRT2_MINUS_ONE;
				}

			} else if ( shape == SHAPE_LINE ) {

				rad = pow( abs( rad ), 1.5) * rad_max;
				float dot_p = ( p.x - coord.x ) * normal.x + ( p.y - coord.y ) * normal.y;
				dist = hypot( normal.x * dot_p, normal.y * dot_p );

			} else if ( shape == SHAPE_SQUARE ) {

				float theta = atan( p.y - coord.y, p.x - coord.x ) - angle;
				float sin_t = abs( sin( theta ) );
				float cos_t = abs( cos( theta ) );
				rad = pow( abs( rad ), 1.4 );
				rad = rad_max * ( rad + ( ( sin_t > cos_t ) ? rad - sin_t * rad : rad - cos_t * rad ) );

			}

			return rad - dist;

		}

		struct Cell {

		// grid sample positions
			vec2 normal;
			vec2 p1;
			vec2 p2;
			vec2 p3;
			vec2 p4;
			float samp2;
			float samp1;
			float samp3;
			float samp4;

		};

		vec4 getSample( vec2 point ) {

		// multi-sampled point
			vec4 tex = texture2D( tDiffuse, vec2( point.x / width, point.y / height ) );
			float base = rand( vec2( floor( point.x ), floor( point.y ) ) ) * PI2;
			float step = PI2 / float( samples );
			float dist = radius * 0.66;

			for ( int i = 0; i < samples; ++i ) {

				float r = base + step * float( i );
				vec2 coord = point + vec2( cos( r ) * dist, sin( r ) * dist );
				tex += texture2D( tDiffuse, vec2( coord.x / width, coord.y / height ) );

			}

			tex /= float( samples ) + 1.0;
			return tex;

		}

		float getDotColour( Cell c, vec2 p, int channel, float angle, float aa ) {

		// get colour for given point
			float dist_c_1, dist_c_2, dist_c_3, dist_c_4, res;

			if ( channel == 0 ) {

				c.samp1 = getSample( c.p1 ).r;
				c.samp2 = getSample( c.p2 ).r;
				c.samp3 = getSample( c.p3 ).r;
				c.samp4 = getSample( c.p4 ).r;

			} else if (channel == 1) {

				c.samp1 = getSample( c.p1 ).g;
				c.samp2 = getSample( c.p2 ).g;
				c.samp3 = getSample( c.p3 ).g;
				c.samp4 = getSample( c.p4 ).g;

			} else {

				c.samp1 = getSample( c.p1 ).b;
				c.samp3 = getSample( c.p3 ).b;
				c.samp2 = getSample( c.p2 ).b;
				c.samp4 = getSample( c.p4 ).b;

			}

			dist_c_1 = distanceToDotRadius( c.samp1, c.p1, c.normal, p, angle, radius );
			dist_c_2 = distanceToDotRadius( c.samp2, c.p2, c.normal, p, angle, radius );
			dist_c_3 = distanceToDotRadius( c.samp3, c.p3, c.normal, p, angle, radius );
			dist_c_4 = distanceToDotRadius( c.samp4, c.p4, c.normal, p, angle, radius );
			res = ( dist_c_1 > 0.0 ) ? clamp( dist_c_1 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_2 > 0.0 ) ? clamp( dist_c_2 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_3 > 0.0 ) ? clamp( dist_c_3 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_4 > 0.0 ) ? clamp( dist_c_4 / aa, 0.0, 1.0 ) : 0.0;
			res = clamp( res, 0.0, 1.0 );

			return res;

		}

		Cell getReferenceCell( vec2 p, vec2 origin, float grid_angle, float step ) {

		// get containing cell
			Cell c;

		// calc grid
			vec2 n = vec2( cos( grid_angle ), sin( grid_angle ) );
			float threshold = step * 0.5;
			float dot_normal = n.x * ( p.x - origin.x ) + n.y * ( p.y - origin.y );
			float dot_line = -n.y * ( p.x - origin.x ) + n.x * ( p.y - origin.y );
			vec2 offset = vec2( n.x * dot_normal, n.y * dot_normal );
			float offset_normal = mod( hypot( offset.x, offset.y ), step );
			float normal_dir = ( dot_normal < 0.0 ) ? 1.0 : -1.0;
			float normal_scale = ( ( offset_normal < threshold ) ? -offset_normal : step - offset_normal ) * normal_dir;
			float offset_line = mod( hypot( ( p.x - offset.x ) - origin.x, ( p.y - offset.y ) - origin.y ), step );
			float line_dir = ( dot_line < 0.0 ) ? 1.0 : -1.0;
			float line_scale = ( ( offset_line < threshold ) ? -offset_line : step - offset_line ) * line_dir;

		// get closest corner
			c.normal = n;
			c.p1.x = p.x - n.x * normal_scale + n.y * line_scale;
			c.p1.y = p.y - n.y * normal_scale - n.x * line_scale;

		// scatter
			if ( scatter != 0.0 ) {

				float off_mag = scatter * threshold * 0.5;
				float off_angle = rand( vec2( floor( c.p1.x ), floor( c.p1.y ) ) ) * PI2;
				c.p1.x += cos( off_angle ) * off_mag;
				c.p1.y += sin( off_angle ) * off_mag;

			}

		// find corners
			float normal_step = normal_dir * ( ( offset_normal < threshold ) ? step : -step );
			float line_step = line_dir * ( ( offset_line < threshold ) ? step : -step );
			c.p2.x = c.p1.x - n.x * normal_step;
			c.p2.y = c.p1.y - n.y * normal_step;
			c.p3.x = c.p1.x + n.y * line_step;
			c.p3.y = c.p1.y - n.x * line_step;
			c.p4.x = c.p1.x - n.x * normal_step + n.y * line_step;
			c.p4.y = c.p1.y - n.y * normal_step - n.x * line_step;

			return c;

		}

		float blendColour( float a, float b, float t ) {

		// blend colours
			if ( blendingMode == BLENDING_LINEAR ) {
				return blend( a, b, 1.0 - t );
			} else if ( blendingMode == BLENDING_ADD ) {
				return blend( a, min( 1.0, a + b ), t );
			} else if ( blendingMode == BLENDING_MULTIPLY ) {
				return blend( a, max( 0.0, a * b ), t );
			} else if ( blendingMode == BLENDING_LIGHTER ) {
				return blend( a, max( a, b ), t );
			} else if ( blendingMode == BLENDING_DARKER ) {
				return blend( a, min( a, b ), t );
			} else {
				return blend( a, b, 1.0 - t );
			}

		}

		void main() {

			if ( ! disable ) {

		// setup
				vec2 p = vec2( vUV.x * width, vUV.y * height );
				vec2 origin = vec2( 0, 0 );
				float aa = ( radius < 2.5 ) ? radius * 0.5 : 1.25;

		// get channel samples
				Cell cell_r = getReferenceCell( p, origin, rotateR, radius );
				Cell cell_g = getReferenceCell( p, origin, rotateG, radius );
				Cell cell_b = getReferenceCell( p, origin, rotateB, radius );
				float r = getDotColour( cell_r, p, 0, rotateR, aa );
				float g = getDotColour( cell_g, p, 1, rotateG, aa );
				float b = getDotColour( cell_b, p, 2, rotateB, aa );

		// blend with original
				vec4 colour = texture2D( tDiffuse, vUV );
				r = blendColour( r, colour.r, blending );
				g = blendColour( g, colour.g, blending );
				b = blendColour( b, colour.b, blending );

				if ( greyscale ) {
					r = g = b = (r + b + g) / 3.0;
				}

				gl_FragColor = vec4( r, g, b, 1.0 );

			} else {

				gl_FragColor = texture2D( tDiffuse, vUV );

			}

		}`};let Loe=class extends ln{constructor(e,t,r){super(),Va===void 0&&console.error("THREE.HalftonePass requires HalftoneShader"),this.uniforms=et.clone(Va.uniforms),this.material=new d0({uniforms:this.uniforms,fragmentShader:Va.fragmentShader,vertexShader:Va.vertexShader}),this.uniforms.width.value=e,this.uniforms.height.value=t;for(const i in r)r.hasOwnProperty(i)&&this.uniforms.hasOwnProperty(i)&&(this.uniforms[i].value=r[i]);this.fsQuad=new Kr(this.material)}render(e,t,r){this.material.uniforms.tDiffuse.value=r.texture,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.uniforms.width.value=e,this.uniforms.height.value=t}};const Vs={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new ie(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},ka={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new ie(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},ml={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new ie(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};let Poe=class extends ln{constructor(e,t){super(),this.edgesRT=new z0(e,t,{depthBuffer:!1,generateMipmaps:!1,minFilter:a0,format:en}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new z0(e,t,{depthBuffer:!1,generateMipmaps:!1,minFilter:a0,format:u0}),this.weightsRT.texture.name="SMAAPass.weights";const r=this,i=new Image;i.src=this.getAreaTexture(),i.onload=function(){r.areaTexture.needsUpdate=!0},this.areaTexture=new P0,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=i,this.areaTexture.format=en,this.areaTexture.minFilter=a0,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const s=new Image;s.src=this.getSearchTexture(),s.onload=function(){r.searchTexture.needsUpdate=!0},this.searchTexture=new P0,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=s,this.searchTexture.magFilter=o0,this.searchTexture.minFilter=o0,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,Vs===void 0&&console.error("THREE.SMAAPass relies on SMAAShader"),this.uniformsEdges=et.clone(Vs.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/t),this.materialEdges=new d0({defines:Object.assign({},Vs.defines),uniforms:this.uniformsEdges,vertexShader:Vs.vertexShader,fragmentShader:Vs.fragmentShader}),this.uniformsWeights=et.clone(ka.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/t),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new d0({defines:Object.assign({},ka.defines),uniforms:this.uniformsWeights,vertexShader:ka.vertexShader,fragmentShader:ka.fragmentShader}),this.uniformsBlend=et.clone(ml.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/t),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new d0({uniforms:this.uniformsBlend,vertexShader:ml.vertexShader,fragmentShader:ml.fragmentShader}),this.needsSwap=!1,this.fsQuad=new Kr(null)}render(e,t,r){this.uniformsEdges.tDiffuse.value=r.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=r.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.edgesRT.setSize(e,t),this.weightsRT.setSize(e,t),this.materialEdges.uniforms.resolution.value.set(1/e,1/t),this.materialWeights.uniforms.resolution.value.set(1/e,1/t),this.materialBlend.uniforms.resolution.value.set(1/e,1/t)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}};class K6{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,r){return e[0]*t+e[1]*r}dot3(e,t,r,i){return e[0]*t+e[1]*r+e[2]*i}dot4(e,t,r,i,s){return e[0]*t+e[1]*r+e[2]*i+e[3]*s}noise(e,t){let r,i,s;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,d=l-h,f=c-h,p=e-d,g=t-f;let y,_;p>g?(y=1,_=0):(y=0,_=1);const m=p-y+u,x=g-_+u,v=p-1+2*u,M=g-1+2*u,T=l&255,w=c&255,S=this.perm[T+this.perm[w]]%12,N=this.perm[T+y+this.perm[w+_]]%12,D=this.perm[T+1+this.perm[w+1]]%12;let z=.5-p*p-g*g;z<0?r=0:(z*=z,r=z*z*this.dot(this.grad3[S],p,g));let V=.5-m*m-x*x;V<0?i=0:(V*=V,i=V*V*this.dot(this.grad3[N],m,x));let H=.5-v*v-M*M;return H<0?s=0:(H*=H,s=H*H*this.dot(this.grad3[D],v,M)),70*(r+i+s)}noise3d(e,t,r){let i,s,o,a;const l=.3333333333333333,c=(e+t+r)*l,u=Math.floor(e+c),h=Math.floor(t+c),d=Math.floor(r+c),f=1/6,p=(u+h+d)*f,g=u-p,y=h-p,_=d-p,m=e-g,x=t-y,v=r-_;let M,T,w,S,N,D;m>=x?x>=v?(M=1,T=0,w=0,S=1,N=1,D=0):m>=v?(M=1,T=0,w=0,S=1,N=0,D=1):(M=0,T=0,w=1,S=1,N=0,D=1):x<v?(M=0,T=0,w=1,S=0,N=1,D=1):m<v?(M=0,T=1,w=0,S=0,N=1,D=1):(M=0,T=1,w=0,S=1,N=1,D=0);const z=m-M+f,V=x-T+f,H=v-w+f,$=m-S+2*f,K=x-N+2*f,U=v-D+2*f,X=m-1+3*f,ee=x-1+3*f,fe=v-1+3*f,we=u&255,pe=h&255,be=d&255,re=this.perm[we+this.perm[pe+this.perm[be]]]%12,ce=this.perm[we+M+this.perm[pe+T+this.perm[be+w]]]%12,xe=this.perm[we+S+this.perm[pe+N+this.perm[be+D]]]%12,te=this.perm[we+1+this.perm[pe+1+this.perm[be+1]]]%12;let q=.6-m*m-x*x-v*v;q<0?i=0:(q*=q,i=q*q*this.dot3(this.grad3[re],m,x,v));let se=.6-z*z-V*V-H*H;se<0?s=0:(se*=se,s=se*se*this.dot3(this.grad3[ce],z,V,H));let J=.6-$*$-K*K-U*U;J<0?o=0:(J*=J,o=J*J*this.dot3(this.grad3[xe],$,K,U));let le=.6-X*X-ee*ee-fe*fe;return le<0?a=0:(le*=le,a=le*le*this.dot3(this.grad3[te],X,ee,fe)),32*(i+s+o+a)}noise4d(e,t,r,i){const s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,h,d,f,p;const g=(e+t+r+i)*l,y=Math.floor(e+g),_=Math.floor(t+g),m=Math.floor(r+g),x=Math.floor(i+g),v=(y+_+m+x)*c,M=y-v,T=_-v,w=m-v,S=x-v,N=e-M,D=t-T,z=r-w,V=i-S,H=N>D?32:0,$=N>z?16:0,K=D>z?8:0,U=N>V?4:0,X=D>V?2:0,ee=z>V?1:0,fe=H+$+K+U+X+ee,we=o[fe][0]>=3?1:0,pe=o[fe][1]>=3?1:0,be=o[fe][2]>=3?1:0,re=o[fe][3]>=3?1:0,ce=o[fe][0]>=2?1:0,xe=o[fe][1]>=2?1:0,te=o[fe][2]>=2?1:0,q=o[fe][3]>=2?1:0,se=o[fe][0]>=1?1:0,J=o[fe][1]>=1?1:0,le=o[fe][2]>=1?1:0,Te=o[fe][3]>=1?1:0,A=N-we+c,L=D-pe+c,O=z-be+c,Q=V-re+c,Y=N-ce+2*c,C=D-xe+2*c,E=z-te+2*c,G=V-q+2*c,Z=N-se+3*c,j=D-J+3*c,ue=z-le+3*c,me=V-Te+3*c,_e=N-1+4*c,Me=D-1+4*c,ye=z-1+4*c,W=V-1+4*c,ge=y&255,oe=_&255,Le=m&255,k=x&255,Se=a[ge+a[oe+a[Le+a[k]]]]%32,Oe=a[ge+we+a[oe+pe+a[Le+be+a[k+re]]]]%32,Ve=a[ge+ce+a[oe+xe+a[Le+te+a[k+q]]]]%32,We=a[ge+se+a[oe+J+a[Le+le+a[k+Te]]]]%32,Ue=a[ge+1+a[oe+1+a[Le+1+a[k+1]]]]%32;let v0=.6-N*N-D*D-z*z-V*V;v0<0?u=0:(v0*=v0,u=v0*v0*this.dot4(s[Se],N,D,z,V));let R0=.6-A*A-L*L-O*O-Q*Q;R0<0?h=0:(R0*=R0,h=R0*R0*this.dot4(s[Oe],A,L,O,Q));let $0=.6-Y*Y-C*C-E*E-G*G;$0<0?d=0:($0*=$0,d=$0*$0*this.dot4(s[Ve],Y,C,E,G));let H0=.6-Z*Z-j*j-ue*ue-me*me;H0<0?f=0:(H0*=H0,f=H0*H0*this.dot4(s[We],Z,j,ue,me));let Ln=.6-_e*_e-Me*Me-ye*ye-W*W;return Ln<0?p=0:(Ln*=Ln,p=Ln*Ln*this.dot4(s[Ue],_e,Me,ye,W)),27*(u+h+d+f+p)}}const ks={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new ie},cameraProjectionMatrix:{value:new Ee},cameraInverseProjectionMatrix:{value:new Ee},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );
			float viewZ = getViewZ( depth );

			vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
			vec3 viewNormal = getViewNormal( vUv );

			vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
			vec3 random = texture2D( tNoise, vUv * noiseScale ).xyz;

			// compute matrix used to reorient a kernel vector

			vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
			vec3 bitangent = cross( viewNormal, tangent );
			mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

		 float occlusion = 0.0;

		 for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

				vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
				vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

				vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
				samplePointNDC /= samplePointNDC.w;

				vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

				float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
				float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
				float delta = sampleDepth - realDepth;

				if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

					occlusion += 1.0;

				}

			}

			occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

			gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

		}`},Ga={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Wa={uniforms:{tDiffuse:{value:null},resolution:{value:new ie}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};let md=class Fr extends ln{constructor(e,t,r,i){super(),this.width=r!==void 0?r:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernelSize=32,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(),this.generateRandomKernelRotations();const s=new U5;s.type=bo,this.beautyRenderTarget=new z0(this.width,this.height,{minFilter:a0,magFilter:a0,format:u0}),this.normalRenderTarget=new z0(this.width,this.height,{minFilter:o0,magFilter:o0,format:u0,depthTexture:s}),this.ssaoRenderTarget=new z0(this.width,this.height,{minFilter:a0,magFilter:a0,format:u0}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),ks===void 0&&console.error("THREE.SSAOPass: The pass relies on SSAOShader."),this.ssaoMaterial=new d0({defines:Object.assign({},ks.defines),uniforms:et.clone(ks.uniforms),vertexShader:ks.vertexShader,fragmentShader:ks.fragmentShader,blending:j0}),this.ssaoMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new dh,this.normalMaterial.blending=j0,this.blurMaterial=new d0({defines:Object.assign({},Wa.defines),uniforms:et.clone(Wa.uniforms),vertexShader:Wa.vertexShader,fragmentShader:Wa.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new d0({defines:Object.assign({},Ga.defines),uniforms:et.clone(Ga.uniforms),vertexShader:Ga.vertexShader,fragmentShader:Ga.fragmentShader,blending:j0}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new d0({uniforms:et.clone(kr.uniforms),vertexShader:kr.vertexShader,fragmentShader:kr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:s5,blendDst:Hl,blendEquation:Yn,blendSrcAlpha:i5,blendDstAlpha:Hl,blendEquationAlpha:Yn}),this.fsQuad=new Kr(null),this.originalClearColor=new Ae}dispose(){this.beautyRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t){switch(e.setRenderTarget(this.beautyRenderTarget),e.clear(),e.render(this.scene,this.camera),this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case Fr.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=j0,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Fr.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=j0,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Fr.OUTPUT.Beauty:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=j0,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Fr.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case Fr.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=j0,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Fr.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=j0,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=t5,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(e,t,r,i,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(r),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,r,i,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(r),e.autoClear=!1,i=t.clearColor||i,s=t.clearAlpha||s,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.beautyRenderTarget.setSize(e,t),this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}generateSampleKernel(){const e=this.kernelSize,t=this.kernel;for(let r=0;r<e;r++){const i=new I;i.x=Math.random()*2-1,i.y=Math.random()*2-1,i.z=Math.random(),i.normalize();let s=r/e;s=bt.lerp(.1,1,s*s),i.multiplyScalar(s),t.push(i)}}generateRandomKernelRotations(){K6===void 0&&console.error("THREE.SSAOPass: The pass relies on SimplexNoise.");const r=new K6,i=4*4,s=new Float32Array(i*4);for(let o=0;o<i;o++){const a=o*4,l=Math.random()*2-1,c=Math.random()*2-1,u=0,h=r.noise3d(l,c,u);s[a]=h,s[a+1]=h,s[a+2]=h,s[a+3]=1}this.noiseTexture=new Br(s,4,4,u0,Mt),this.noiseTexture.wrapS=nn,this.noiseTexture.wrapT=nn}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(r){t.set(r,r.visible),(r.isPoints||r.isLine)&&(r.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(r){const i=t.get(r);r.visible=i}),t.clear()}};md.OUTPUT={Default:0,SSAO:1,Blur:2,Beauty:3,Depth:4,Normal:5};const Z6={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ae(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};let N3=class c4 extends ln{constructor(e,t,r,i){super(),this.strength=t!==void 0?t:1,this.radius=r,this.threshold=i,this.resolution=e!==void 0?new ie(e.x,e.y):new ie(256,256),this.clearColor=new Ae(0,0,0);const s={minFilter:a0,magFilter:a0,format:u0};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new z0(o,a,s),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const f=new z0(o,a,s);f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new z0(o,a,s);p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),o=Math.round(o/2),a=Math.round(a/2)}Z6===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const l=Z6;this.highPassUniforms=et.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new d0({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.texSize.value=new ie(o,a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,kr===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const h=kr;this.copyUniforms=et.clone(h.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new d0({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Bl,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ae,this.oldClearAlpha=1,this.basic=new St,this.fsQuad=new Kr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,t){let r=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(r,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(r,i),this.renderTargetsVertical[s].setSize(r,i),this.separableBlurMaterials[s].uniforms.texSize.value=new ie(r,i),r=Math.round(r/2),i=Math.round(i/2)}render(e,t,r,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=c4.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=c4.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new d0({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new ie(.5,.5)},direction:{value:new ie(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new d0({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform sampler2D dirtTexture;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};N3.BlurDirectionX=new ie(1,0);N3.BlurDirectionY=new ie(0,1);function Ho(n,e,t){e instanceof Object&&Object.entries(e).forEach(([r,i])=>{t?t(n,r,i):n[r]=i})}function gr(n,e,t,r=!0,i){r&&Ho(t,n[e],i);const s=L8(n,e);return Ze(s,o=>{Ho(t,o,i)})}function Roe(n,e,t=!0,r){t&&Ho(e,n,r);const i=ko(n);return Ze(i,s=>{Ho(e,s,r)},{deep:!0})}function Uo(n,e){e instanceof Object&&Object.entries(e).forEach(([t,r])=>{n[t]=r})}function Foe(n,e,t){e.forEach(r=>{V0(n,r,t,r)})}function V0(n,e,t,r){const i=r||e,s=L8(n,e);s.value instanceof Object?(Uo(t[i],s.value),Ze(s,o=>{Uo(t[i],o)},{deep:!0})):(s.value!==void 0&&(t[i]=n[e]),Ze(s,o=>{t[i]=o}))}function d2(n,e=[]){const t={};return Object.entries(n).forEach(([r,i])=>{(!e||!e.includes(r))&&(t[r]=i)}),t}function zoe(n,e,t){return t=t<0?0:t,t=t>1?1:t,n+(e-n)*t}function Ioe(n,e,t){return n<e?e:n>t?t:n}const Doe="https://rawcdn.githack.com/emmelleppi/matcaps/9b36ccaaf0a24881a39062d05566c9e92be4aa0d",Noe="0404E8_0404B5_0404CB_3333FC";function _d(n=Noe,e=1024){const t=`${n}${Ooe(e)}.png`;return`${Doe}/${e}/${t}`}function Ooe(n){switch(n){case 64:return"-64px";case 128:return"-128px";case 256:return"-256px";case 512:return"-512px";default:return""}}function Boe(n){const{camera:e,resetPosition:t=new I(0,0,0)}=n,r=new Zie,i=t.clone(),s=new Kt(new I(0,0,1),0);return{position:i,updatePosition:l=>{r.setFromCamera(l,e),e.getWorldDirection(s.normal),r.ray.intersectPlane(s,i)},intersect:(l,c,u=!1)=>(r.setFromCamera(l,e),r.intersectObjects(c,u))}}function gd(n){const{camera:e,domElement:t,intersectObjects:r,intersectRecursive:i=!1,touch:s=!0,resetOnEnd:o=!1,onEnter:a=()=>{},onMove:l=()=>{},onLeave:c=()=>{},onClick:u=()=>{},onIntersectEnter:h=()=>{},onIntersectOver:d=()=>{},onIntersectMove:f=()=>{},onIntersectLeave:p=()=>{},onIntersectClick:g=()=>{}}=n,y=new ie(0,0),_=new ie(0,0),m=Boe({camera:e}),x=m.position,v={position:y,positionN:_,positionV3:x,intersectObjects:r,listeners:!1,addListeners:$,removeListeners:K,intersect:w};return v;function M(){y.set(0,0),_.set(0,0),x.set(0,0,0)}function T(U){let X,ee;U.touches&&U.touches.length>0?(X=U.touches[0].clientX,ee=U.touches[0].clientY):(X=U.clientX,ee=U.clientY);const fe=t.getBoundingClientRect();y.x=X-fe.left,y.y=ee-fe.top,_.x=y.x/fe.width*2-1,_.y=-(y.y/fe.height)*2+1,m.updatePosition(_)}function w(){const U=H();if(U.length){const X=m.intersect(_,U,i),ee=[...U],fe=[];X.forEach(we=>{var pe,be,re;const{object:ce}=we,xe=V(ce);if(ce instanceof g1){if(fe.indexOf(ce)!==-1)return;fe.push(ce)}if(!ce.userData.over){ce.userData.over=!0;const q={type:"pointerover",over:!0,component:xe,intersect:we},se={...q,type:"pointerenter"};d(q),h(se),(pe=xe==null?void 0:xe.onPointerOver)==null||pe.call(xe,q),(be=xe==null?void 0:xe.onPointerEnter)==null||be.call(xe,se)}const te={type:"pointermove",component:xe,intersect:we};f(te),(re=xe==null?void 0:xe.onPointerMove)==null||re.call(xe,te),ee.splice(ee.indexOf(ce),1)}),ee.forEach(we=>{var pe,be;const re=V(we);if(we.userData.over){we.userData.over=!1;const ce={type:"pointerover",over:!1,component:re},xe={...ce,type:"pointerleave"};d(ce),p(xe),(pe=re==null?void 0:re.onPointerOver)==null||pe.call(re,ce),(be=re==null?void 0:re.onPointerLeave)==null||be.call(re,xe)}})}}function S(U){T(U),a({type:"pointerenter",position:y,positionN:_,positionV3:x})}function N(U){T(U),l({type:"pointermove",position:y,positionN:_,positionV3:x}),w()}function D(U){T(U);const X=H();if(X.length){const ee=m.intersect(_,X,i),fe=[];ee.forEach(we=>{var pe;const{object:be}=we,re=V(be);if(be instanceof g1){if(fe.indexOf(be)!==-1)return;fe.push(be)}const ce={type:"click",component:re,intersect:we};g(ce),(pe=re==null?void 0:re.onClick)==null||pe.call(re,ce)})}u({type:"click",position:y,positionN:_,positionV3:x})}function z(){o&&M(),c({type:"pointerleave"})}function V(U){if(U.userData.component)return U.userData.component;let X=U.parent;for(;X;){if(X.userData.component)return X.userData.component;X=X.parent}}function H(){return typeof r=="function"?r():r}function $(){t.addEventListener("mouseenter",S),t.addEventListener("mousemove",N),t.addEventListener("mouseleave",z),t.addEventListener("click",D),s&&(t.addEventListener("touchstart",S),t.addEventListener("touchmove",N),t.addEventListener("touchend",z)),v.listeners=!0}function K(){t.removeEventListener("mouseenter",S),t.removeEventListener("mousemove",N),t.removeEventListener("mouseleave",z),t.removeEventListener("click",D),t.removeEventListener("touchstart",S),t.removeEventListener("touchmove",N),t.removeEventListener("touchend",z),v.listeners=!1}}function Hoe(n){const e={antialias:!0,alpha:!1,autoClear:!0,orbitCtrl:!1,pointer:!1,resize:!1,width:300,height:150};n&&Object.entries(n).forEach(([x,v])=>{e[x]=v});const t={width:1,height:1,wWidth:1,wHeight:1,ratio:1},r=[],i=[],s=a(),o={config:e,renderer:s,size:t,init:l,dispose:g,render:h,renderC:d,setSize:_,addIntersectObject:f,removeIntersectObject:p};return o;function a(){const x=new l0({canvas:e.canvas,antialias:e.antialias,alpha:e.alpha,...e.params});return x.autoClear=e.autoClear,x}function l(){if(!o.scene)return console.error("Missing Scene"),!1;if(!o.camera)return console.error("Missing Camera"),!1;if(e.resize?(y(),window.addEventListener("resize",y)):e.width&&e.height&&_(e.width,e.height),c(),e.orbitCtrl){const x=new rse(o.camera,o.renderer.domElement);e.orbitCtrl instanceof Object&&Object.entries(e.orbitCtrl).forEach(([v,M])=>{x[v]=M}),u(()=>{x.update()}),o.cameraCtrl=x}return!0}function c(){let x={camera:o.camera,domElement:o.renderer.domElement,intersectObjects:i};e.pointer&&e.pointer instanceof Object&&(x={...x,...e.pointer});const v=o.pointer=gd(x);(e.pointer||i.length)&&(v.addListeners(),x.intersectMode==="frame"&&u(v.intersect))}function u(x){r.push(x)}function h(){r.forEach(x=>x()),o.renderer.render(o.scene,o.camera)}function d(){r.forEach(x=>x()),o.composer.render()}function f(x){i.indexOf(x)===-1&&i.push(x),o.pointer&&!o.pointer.listeners&&o.pointer.addListeners()}function p(x){const v=i.indexOf(x);v!==-1&&i.splice(v,1),o.pointer&&!e.pointer&&i.length===0&&o.pointer.removeListeners()}function g(){window.removeEventListener("resize",y),o.pointer&&o.pointer.removeListeners(),o.cameraCtrl&&o.cameraCtrl.dispose(),o.renderer&&o.renderer.dispose()}function y(){var x;if(e.resize==="window")_(window.innerWidth,window.innerHeight);else{const v=o.renderer.domElement.parentNode;v&&_(v.clientWidth,v.clientHeight)}(x=e.onResize)==null||x.call(e,t)}function _(x,v){t.width=x,t.height=v,t.ratio=x/v,o.renderer.setSize(x,v,!1);const M=o.camera;if(M.type==="PerspectiveCamera"){const T=M;T.aspect=t.ratio,T.updateProjectionMatrix()}if(M.type==="OrthographicCamera"){const T=M;t.wWidth=T.right-T.left,t.wHeight=T.top-T.bottom}else{const T=m();t.wWidth=T[0],t.wHeight=T[1]}}function m(){const x=o.camera,v=x.fov*Math.PI/180,M=2*Math.tan(v/2)*Math.abs(x.position.z);return[M*x.aspect,M]}}const cn=Symbol("Renderer");var Uoe=Fe({name:"Renderer",props:{params:{type:Object,default:()=>({})},antialias:Boolean,alpha:Boolean,autoClear:{type:Boolean,default:!0},orbitCtrl:{type:[Boolean,Object],default:!1},pointer:{type:[Boolean,Object],default:!1},resize:{type:[Boolean,String],default:!1},shadow:Boolean,width:String,height:String,pixelRatio:Number,xr:Boolean,props:{type:Object,default:()=>({})},onReady:Function},inheritAttrs:!1,setup(n,{attrs:e}){const t=[],r=[],i=[],s=[],o=[],a=document.createElement("canvas");Object.entries(e).forEach(([h,d])=>{const f=h.match(/^on([A-Z][a-zA-Z]*)$/);f?a.addEventListener(f[1].toLowerCase(),d):a.setAttribute(h,d)});const l={canvas:a,params:n.params,antialias:n.antialias,alpha:n.alpha,autoClear:n.autoClear,orbitCtrl:n.orbitCtrl,pointer:n.pointer,resize:n.resize};n.width&&(l.width=parseInt(n.width)),n.height&&(l.height=parseInt(n.height));const c=Hoe(l);gr(n,"props",c.renderer),_7(()=>{n.pixelRatio&&c.renderer.setPixelRatio(n.pixelRatio)});const u=()=>{};return{canvas:a,three:c,renderer:c.renderer,size:c.size,renderFn:u,raf:!0,initCallbacks:t,mountedCallbacks:r,beforeRenderCallbacks:i,afterRenderCallbacks:s,resizeCallbacks:o}},computed:{camera:{get:function(){return this.three.camera},set:function(n){this.three.camera=n}},scene:{get:function(){return this.three.scene},set:function(n){this.three.scene=n}},composer:{get:function(){return this.three.composer},set:function(n){this.three.composer=n}}},provide(){return{[cn]:this}},mounted(){var n;this.$el.parentNode.insertBefore(this.canvas,this.$el),this.three.init()&&(this.three.pointer&&(this.$pointer=this.three.pointer),this.three.config.onResize=e=>{this.resizeCallbacks.forEach(t=>t({type:"resize",renderer:this,size:e}))},this.shadow&&(this.renderer.shadowMap.enabled=!0),this.renderFn=this.three.composer?this.three.renderC:this.three.render,this.initCallbacks.forEach(e=>e({type:"init",renderer:this})),(n=this.onReady)==null||n.call(this,this),this.xr?(this.renderer.xr.enabled=!0,this.renderer.setAnimationLoop(this.render)):requestAnimationFrame(this.renderLoop)),this.mountedCallbacks.forEach(e=>e({type:"mounted",renderer:this}))},beforeUnmount(){this.canvas.remove(),this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[],this.raf=!1,this.three.dispose()},methods:{onInit(n){this.addListener("init",n)},onMounted(n){this.addListener("mounted",n)},onBeforeRender(n){this.addListener("beforerender",n)},offBeforeRender(n){this.removeListener("beforerender",n)},onAfterRender(n){this.addListener("afterrender",n)},offAfterRender(n){this.removeListener("afterrender",n)},onResize(n){this.addListener("resize",n)},offResize(n){this.removeListener("resize",n)},addListener(n,e){this.getCallbacks(n).push(e)},removeListener(n,e){const t=this.getCallbacks(n),r=t.indexOf(e);r!==-1&&t.splice(r,1)},getCallbacks(n){return n==="init"?this.initCallbacks:n==="mounted"?this.mountedCallbacks:n==="beforerender"?this.beforeRenderCallbacks:n==="afterrender"?this.afterRenderCallbacks:this.resizeCallbacks},render(n){this.beforeRenderCallbacks.forEach(e=>e({type:"beforerender",renderer:this,time:n})),this.renderFn({renderer:this,time:n}),this.afterRenderCallbacks.forEach(e=>e({type:"afterrender",renderer:this,time:n}))},renderLoop(n){this.raf&&requestAnimationFrame(this.renderLoop),this.render(n)}},render(){return this.$slots.default?this.$slots.default():[]},__hmrId:"Renderer"}),vd=Fe({props:{props:{type:Object,default:()=>({})}},render(){return this.$slots.default?this.$slots.default():[]}});function E1(n,e,t,r=!0){n[e]=t,r&&n.updateProjectionMatrix()}var Voe=Fe({extends:vd,name:"OrthographicCamera",props:{left:{type:Number,default:-1},right:{type:Number,default:1},top:{type:Number,default:1},bottom:{type:Number,default:-1},near:{type:Number,default:.1},far:{type:Number,default:2e3},zoom:{type:Number,default:1},position:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=tt(cn);if(!e){console.error("Renderer not found");return}const t=new fr(n.left,n.right,n.top,n.bottom,n.near,n.far);return e.camera=t,V0(n,"position",t),gr(n,"props",t,!0,E1),["left","right","top","bottom","near","far","zoom"].forEach(r=>{Ze(()=>n[r],i=>{E1(t,r,i)})}),{renderer:e,camera:t}},__hmrId:"OrthographicCamera"}),J6=Fe({extends:vd,name:"PerspectiveCamera",props:{aspect:{type:Number,default:1},far:{type:Number,default:2e3},fov:{type:Number,default:50},near:{type:Number,default:.1},position:{type:Object,default:()=>({x:0,y:0,z:0})},lookAt:{type:Object,default:null}},setup(n){var e;const t=tt(cn);if(!t){console.error("Renderer not found");return}const r=new q0(n.fov,n.aspect,n.near,n.far);return t.camera=r,V0(n,"position",r),n.lookAt&&r.lookAt((e=n.lookAt.x)!=null?e:0,n.lookAt.y,n.lookAt.z),Ze(()=>n.lookAt,i=>{var s;r.lookAt((s=i.x)!=null?s:0,i.y,i.z)},{deep:!0}),gr(n,"props",r,!0,E1),["aspect","far","fov","near"].forEach(i=>{Ze(()=>n[i],s=>{E1(r,i,s)})}),{renderer:t,camera:r}},__hmrId:"PerspectiveCamera"});const O3=Symbol("Scene");var koe=Fe({name:"Scene",props:{background:[String,Number,Object]},setup(n){const e=tt(cn),t=new a3;if(!e){console.error("Renderer not found");return}e.scene=t,Qs(O3,t);const r=o=>{o&&(typeof o=="string"||typeof o=="number"?t.background instanceof Ae?t.background.set(o):t.background=new Ae(o):o instanceof P0&&(t.background=o))};return r(n.background),Ze(()=>n.background,r),{scene:t,add:o=>{t.add(o)},remove:o=>{t.remove(o)}}},render(){return this.$slots.default?this.$slots.default():[]},__hmrId:"Scene"});const Goe={onPointerEnter:Function,onPointerOver:Function,onPointerMove:Function,onPointerLeave:Function,onPointerDown:Function,onPointerUp:Function,onClick:Function};var vr=Fe({name:"Object3D",inject:{renderer:cn,scene:O3},emits:["created","ready"],props:{position:{type:Object,default:()=>({x:0,y:0,z:0})},rotation:{type:Object,default:()=>({x:0,y:0,z:0})},scale:{type:Object,default:()=>({x:1,y:1,z:1,order:"XYZ"})},lookAt:{type:Object,default:null},userData:{type:Object,default:()=>({})},visible:{type:Boolean,default:!0},props:{type:Object,default:()=>({})},disableAdd:{type:Boolean,default:!1},disableRemove:{type:Boolean,default:!1},...Goe},setup(){return{}},created(){this.renderer||console.error("Missing parent Renderer"),this.scene||console.error("Missing parent Scene")},unmounted(){this.disableRemove||this.removeFromParent(),this.o3d&&this.renderer&&this.renderer.three.removeIntersectObject(this.o3d)},methods:{initObject3D(n){var e;this.o3d=n,n.userData.component=this,(this.onPointerEnter||this.onPointerOver||this.onPointerMove||this.onPointerLeave||this.onPointerDown||this.onPointerUp||this.onClick)&&this.renderer&&this.renderer.three.addIntersectObject(n),V0(this,"position",n),V0(this,"rotation",n),V0(this,"scale",n),V0(this,"userData",n.userData),V0(this,"visible",n),gr(this,"props",n),this.$emit("created",n),this.lookAt&&n.lookAt((e=this.lookAt.x)!=null?e:0,this.lookAt.y,this.lookAt.z),Ze(()=>this.lookAt,t=>{var r;n.lookAt((r=t.x)!=null?r:0,t.y,t.z)},{deep:!0}),this.parent=this.getParent(),this.disableAdd||(this.addToParent()?this.$emit("ready",this):console.error("Missing parent (Scene, Group...)"))},getParent(){let n=this.$parent;if(!n){const e=V1();e&&e.parent&&(n=e.parent.ctx)}for(;n;){if(n.add)return n;n=n.$parent}},addToParent(n){const e=n||this.o3d;return this.parent?(this.parent.add(e),!0):!1},removeFromParent(n){const e=n||this.o3d;return this.parent?(this.parent.remove(e),!0):!1},add(n){var e;(e=this.o3d)==null||e.add(n)},remove(n){var e;(e=this.o3d)==null||e.remove(n)}},render(){return this.$slots.default?this.$slots.default():[]},__hmrId:"Object3D"}),Woe=Fe({name:"Group",extends:vr,setup(){return{group:new Vt}},created(){this.initObject3D(this.group)},__hmrId:"Group"});const Gs=()=>{};var $oe=Fe({name:"Raycaster",props:{onPointerEnter:{type:Function,default:Gs},onPointerOver:{type:Function,default:Gs},onPointerMove:{type:Function,default:Gs},onPointerLeave:{type:Function,default:Gs},onClick:{type:Function,default:Gs},intersectMode:{type:String,default:"move"},intersectRecursive:{type:Boolean,default:!1}},setup(){return{renderer:tt(cn)}},mounted(){if(!this.renderer){console.error("Renderer not found");return}const n=this.renderer;this.renderer.onMounted(()=>{n.camera&&(this.pointer=gd({camera:n.camera,domElement:n.canvas,intersectObjects:()=>n.scene?n.scene.children:[],intersectRecursive:this.intersectRecursive,onIntersectEnter:this.onPointerEnter,onIntersectOver:this.onPointerOver,onIntersectMove:this.onPointerMove,onIntersectLeave:this.onPointerLeave,onIntersectClick:this.onClick}),this.pointer.addListeners(),this.intersectMode==="frame"&&n.onBeforeRender(this.pointer.intersect))})},unmounted(){var n;this.pointer&&(this.pointer.removeListeners(),(n=this.renderer)==null||n.offBeforeRender(this.pointer.intersect))},render(){return[]},__hmrId:"Raycaster"}),Xoe=Fe({extends:vr,props:{cubeRTSize:{type:Number,default:256},cubeCameraNear:{type:Number,default:.1},cubeCameraFar:{type:Number,default:2e3},autoUpdate:Boolean,hideMeshes:{type:Array,default:()=>[]}},setup(n){const e=tt(cn);if(!e||!e.scene)return console.error("Missing Renderer / Scene"),{};const t=e.renderer,r=e.scene,i=new t3(n.cubeRTSize,{format:en,generateMipmaps:!0,minFilter:$r}),s=new e2(n.cubeCameraNear,n.cubeCameraFar,i),o=()=>{n.hideMeshes.forEach(a=>{a.visible=!1}),s.update(t,r),n.hideMeshes.forEach(a=>{a.visible=!0})};return n.autoUpdate?(e.onBeforeRender(o),P4(()=>{e.offBeforeRender(o)})):e.onMounted(o),{cubeRT:i,cubeCamera:s,updateRT:o}},created(){this.cubeCamera&&this.initObject3D(this.cubeCamera)},render(){return[]},__hmrId:"CubeCamera"});const Zo=Symbol("Mesh"),xs=Fe({name:"Mesh",extends:vr,props:{castShadow:Boolean,receiveShadow:Boolean},setup(){return{}},provide(){return{[Zo]:this}},mounted(){!this.mesh&&!this.loading&&this.initMesh()},methods:{initMesh(){const n=new N0(this.geometry,this.material);V0(this,"castShadow",n),V0(this,"receiveShadow",n),this.mesh=n,this.initObject3D(n)},createGeometry(){},addGeometryWatchers(n){Object.keys(n).forEach(e=>{Ze(()=>this[e],()=>{this.refreshGeometry()})})},setGeometry(n){this.geometry=n,this.mesh&&(this.mesh.geometry=n)},setMaterial(n){this.material=n,this.mesh&&(this.mesh.material=n)},refreshGeometry(){const n=this.geometry;this.createGeometry(),this.mesh&&this.geometry&&(this.mesh.geometry=this.geometry),n==null||n.dispose()}},unmounted(){this.geometry&&this.geometry.dispose(),this.material&&this.material.dispose()},__hmrId:"Mesh"});function at(n,e,t){return Fe({name:n,extends:xs,props:e,created(){this.createGeometry(),this.addGeometryWatchers(e)},methods:{createGeometry(){this.geometry=t(this)}}})}const B3=Fe({emits:["created"],props:{rotateX:Number,rotateY:Number,rotateZ:Number,attributes:{type:Array,default:()=>[]}},inject:{mesh:Zo},setup(){return{}},created(){if(!this.mesh){console.error("Missing parent Mesh");return}this.createGeometry(),this.rotateGeometry(),this.geometry&&this.mesh.setGeometry(this.geometry),Object.keys(this.$props).forEach(n=>{Ze(()=>this[n],this.refreshGeometry)})},unmounted(){var n;(n=this.geometry)==null||n.dispose()},methods:{createGeometry(){const n={},e=new Ne;this.attributes.forEach(t=>{if(t.name&&t.itemSize&&t.array){const r=n[t.name]=new b0(t.array,t.itemSize,t.normalized);e.setAttribute(t.name,r)}}),e.computeBoundingBox(),e.userData.component=this,this.geometry=e,this.$emit("created",e)},rotateGeometry(){this.geometry&&(this.rotateX&&this.geometry.rotateX(this.rotateX),this.rotateY&&this.geometry.rotateY(this.rotateY),this.rotateZ&&this.geometry.rotateZ(this.rotateZ))},refreshGeometry(){const n=this.geometry;this.createGeometry(),this.rotateGeometry(),this.geometry&&this.mesh&&this.mesh.setGeometry(this.geometry),n==null||n.dispose()}},render(){return[]}});function Y0(n,e,t){return Fe({name:n,extends:B3,props:e,methods:{createGeometry(){this.geometry=t(this),this.geometry.userData.component=this,this.$emit("created",this.geometry)}}})}const xd={size:Number,width:{type:Number,default:1},height:{type:Number,default:1},depth:{type:Number,default:1},widthSegments:{type:Number,default:1},heightSegments:{type:Number,default:1},depthSegments:{type:Number,default:1}};function yd(n){return n.size?new Co(n.size,n.size,n.size,n.widthSegments,n.heightSegments,n.depthSegments):new Co(n.width,n.height,n.depth,n.widthSegments,n.heightSegments,n.depthSegments)}var joe=Y0("BoxGeometry",xd,yd);const wd={radius:{type:Number,default:1},segments:{type:Number,default:8},thetaStart:{type:Number,default:0},thetaLength:{type:Number,default:Math.PI*2}};function Md(n){return new Ore(n.radius,n.segments,n.thetaStart,n.thetaLength)}var qoe=Y0("CircleGeometry",wd,Md);const bd={radius:{type:Number,default:1},height:{type:Number,default:1},radialSegments:{type:Number,default:8},heightSegments:{type:Number,default:1},openEnded:{type:Boolean,default:!1},thetaStart:{type:Number,default:0},thetaLength:{type:Number,default:Math.PI*2}};function Sd(n){return new Bre(n.radius,n.height,n.radialSegments,n.heightSegments,n.openEnded,n.thetaStart,n.thetaLength)}var Yoe=Y0("ConeGeometry",bd,Sd);const Ad={radiusTop:{type:Number,default:1},radiusBottom:{type:Number,default:1},height:{type:Number,default:1},radialSegments:{type:Number,default:8},heightSegments:{type:Number,default:1},openEnded:{type:Boolean,default:!1},thetaStart:{type:Number,default:0},thetaLength:{type:Number,default:Math.PI*2}};function Td(n){return new k5(n.radiusTop,n.radiusBottom,n.height,n.radialSegments,n.heightSegments,n.openEnded,n.thetaStart,n.thetaLength)}var Qoe=Y0("CylinderGeometry",Ad,Td);const Ed={radius:{type:Number,default:1},detail:{type:Number,default:0}};function Cd(n){return new Hre(n.radius,n.detail)}var Koe=Y0("DodecahedronGeometry",Ed,Cd);const Zoe={shapes:{type:[Object,Array]},options:{type:Object}};function Joe(n){return new as(n.shapes,n.options)}var eae=Y0("ExtrudeGeometry",Zoe,Joe);const Ld={radius:{type:Number,default:1},detail:{type:Number,default:0}};function Pd(n){return new pie(n.radius,n.detail)}var tae=Y0("IcosahedronGeometry",Ld,Pd);const Rd={points:Array,segments:{type:Number,default:12},phiStart:{type:Number,default:0},phiLength:{type:Number,default:Math.PI*2}};function Fd(n){return new mie(n.points,n.segments,n.phiStart,n.phiLength)}var nae=Y0("LatheGeometry",Rd,Fd);const zd={radius:{type:Number,default:1},detail:{type:Number,default:0}};function Id(n){return new _ie(n.radius,n.detail)}var rae=Y0("OctahedronGeometry",zd,Id);const Dd={width:{type:Number,default:1},height:{type:Number,default:1},widthSegments:{type:Number,default:1},heightSegments:{type:Number,default:1}};function Nd(n){return new n3(n.width,n.height,n.widthSegments,n.heightSegments)}var iae=Y0("PlaneGeometry",Dd,Nd);const Od={vertices:Array,indices:Array,radius:{type:Number,default:1},detail:{type:Number,default:0}};function Bd(n){return new Xo(n.vertices,n.indices,n.radius,n.detail)}var sae=Y0("PolyhedronGeometry",Od,Bd);const Hd={innerRadius:{type:Number,default:.5},outerRadius:{type:Number,default:1},thetaSegments:{type:Number,default:8},phiSegments:{type:Number,default:1},thetaStart:{type:Number,default:0},thetaLength:{type:Number,default:Math.PI*2}};function Ud(n){return new gie(n.innerRadius,n.outerRadius,n.thetaSegments,n.phiSegments,n.thetaStart,n.thetaLength)}var oae=Y0("RingGeometry",Hd,Ud);const Vd={radius:{type:Number,default:1},widthSegments:{type:Number,default:12},heightSegments:{type:Number,default:12},phiStart:{type:Number,default:0},phiLength:{type:Number,default:Math.PI*2},thetaStart:{type:Number,default:0},thetaLength:{type:Number,default:Math.PI}};function kd(n){return new xie(n.radius,n.widthSegments,n.heightSegments,n.phiStart,n.phiLength,n.thetaStart,n.thetaLength)}var aae=Y0("SphereGeometry",Vd,kd);const lae={shapes:{type:[Object,Array]},curveSegments:{type:Number}};function cae(n){return new rh(n.shapes,n.curveSegments)}var uae=Y0("ShapeGeometry",lae,cae);const Gd={radius:{type:Number,default:1},detail:{type:Number,default:0}};function Wd(n){return new yie(n.radius,n.detail)}var hae=Y0("TetrahedronGeometry",Gd,Wd);const $d={radius:{type:Number,default:1},tube:{type:Number,default:.4},radialSegments:{type:Number,default:8},tubularSegments:{type:Number,default:6},arc:{type:Number,default:Math.PI*2}};function Xd(n){return new wie(n.radius,n.tube,n.radialSegments,n.tubularSegments,n.arc)}var dae=Y0("TorusGeometry",$d,Xd);const jd={radius:{type:Number,default:1},tube:{type:Number,default:.4},tubularSegments:{type:Number,default:64},radialSegments:{type:Number,default:8},p:{type:Number,default:2},q:{type:Number,default:3}};function qd(n){return new Mie(n.radius,n.tube,n.tubularSegments,n.radialSegments,n.p,n.q)}var fae=Y0("TorusKnotGeometry",jd,qd);const u4={points:Array,path:ft,tubularSegments:{type:Number,default:64},radius:{type:Number,default:1},radialSegments:{type:Number,default:8},closed:{type:Boolean,default:!1}};function Yd(n){let e;return n.points?e=new c2(n.points):n.path?e=n.path:console.error("Missing path curve or points."),new bie(e,n.tubularSegments,n.radius,n.radiusSegments,n.closed)}var pae=Fe({extends:B3,props:u4,methods:{createGeometry(){this.geometry=Yd(this)},updatePoints(n){Qd(this.geometry,n)}}});function Qd(n,e){const t=new c2(e),{radialSegments:r,radius:i,tubularSegments:s,closed:o}=n.parameters,a=t.computeFrenetFrames(s,o);n.tangents=a.tangents,n.normals=a.normals,n.binormals=a.binormals,n.parameters.path=t;const l=n.getAttribute("position"),c=n.getAttribute("normal"),u=new I,h=new I;for(let f=0;f<s;f++)d(f);d(s),n.attributes.position.needsUpdate=!0,n.attributes.normal.needsUpdate=!0;function d(f){t.getPointAt(f/s,h);const p=a.normals[f],g=a.binormals[f];for(let y=0;y<=r;y++){const _=y/r*Math.PI*2,m=Math.sin(_),x=-Math.cos(_);u.x=x*p.x+m*g.x,u.y=x*p.y+m*g.y,u.z=x*p.z+m*g.z,u.normalize();const v=f*(r+1)+y;c.setXYZ(v,u.x,u.y,u.z),l.setXYZ(v,h.x+i*u.x,h.y+i*u.y,h.z+i*u.z)}}}var ys=Fe({extends:vr,name:"Light",props:{color:{type:String,default:"#ffffff"},intensity:{type:Number,default:1},castShadow:{type:Boolean,default:!1},shadowMapSize:{type:Object,default:()=>({x:512,y:512})},shadowCamera:{type:Object,default:()=>({})}},setup(){return{}},unmounted(){(this.light instanceof ji||this.light instanceof qi)&&this.removeFromParent(this.light.target)},methods:{initLight(n){this.light=n,n.shadow&&(n.castShadow=this.castShadow,Uo(n.shadow.mapSize,this.shadowMapSize),Uo(n.shadow.camera,this.shadowCamera)),["color","intensity","castShadow"].forEach(e=>{Ze(()=>this[e],t=>{e==="color"?n.color.set(t):n[e]=t})}),this.initObject3D(n),(n instanceof ji||n instanceof qi)&&(V0(this,"target",n.target,"position"),this.addToParent(n.target))}},__hmrId:"Light"}),mae=Fe({extends:ys,created(){this.initLight(new v3(this.color,this.intensity))},__hmrId:"AmbientLight"}),_ae=Fe({extends:ys,props:{target:{type:Object,default:()=>({x:0,y:0,z:0})}},created(){this.initLight(new qi(this.color,this.intensity))},__hmrId:"DirectionalLight"}),gae=Fe({extends:ys,props:{groundColor:{type:String,default:"#444444"}},created(){const n=new vh(this.color,this.groundColor,this.intensity);Ze(()=>this.groundColor,e=>{n.groundColor.set(e)}),this.initLight(n)},__hmrId:"HemisphereLight"}),vae=Fe({extends:ys,props:{distance:{type:Number,default:0},decay:{type:Number,default:1}},created(){this.initLight(new zo(this.color,this.intensity,this.distance,this.decay))},__hmrId:"PointLight"}),xae=Fe({extends:ys,props:{width:{type:Number,default:10},height:{type:Number,default:10},helper:Boolean},created(){ise.init();const n=new Mh(this.color,this.intensity,this.width,this.height);if(["width","height"].forEach(t=>{Ze(()=>this[t],r=>{n[t]=r})}),this.helper){const t=new sse(n);n.add(t)}this.initLight(n)},__hmrId:"RectAreaLight"}),yae=Fe({extends:ys,props:{angle:{type:Number,default:Math.PI/3},decay:{type:Number,default:1},distance:{type:Number,default:0},penumbra:{type:Number,default:0},target:Object},created(){const n=new ji(this.color,this.intensity,this.distance,this.angle,this.penumbra,this.decay);["angle","decay","distance","penumbra"].forEach(t=>{Ze(()=>this[t],r=>{n[t]=r})}),this.initLight(n)},__hmrId:"SpotLight"});const H3=Symbol("Material"),U3=Fe({emits:["created"],props:{color:{type:String,default:"#ffffff"},props:{type:Object,default:()=>({})}},inject:{mesh:Zo},setup(){return{}},provide(){return{[H3]:this}},created(){if(!this.mesh){console.error("Missing parent Mesh");return}if(this.createMaterial){const n=this.material=this.createMaterial();Ze(()=>this.color,e=>{n.color.set(e)}),gr(this,"props",n,!1,this.setProp),this.$emit("created",n),this.mesh.setMaterial(n)}},unmounted(){var n;(n=this.material)==null||n.dispose()},methods:{getMaterialParams(){return{...d2(this.$props,["props"]),...this.props}},setProp(n,e,t,r=!1){const i=n[e];i instanceof Ae?i.set(t):n[e]=t,n.needsUpdate=r},setTexture(n,e="map"){this.setProp(this.material,e,n,!0)}},render(){return this.$slots.default?this.$slots.default():[]},__hmrId:"Material"});function un(n,e,t){return Fe({name:n,extends:U3,props:e,methods:{createMaterial(){return t(this.getMaterialParams())}}})}const wae=un("BasicMaterial",{props:{type:Object,default:()=>({})}},n=>new St(n)),Mae=un("LambertMaterial",{props:{type:Object,default:()=>({})}},n=>new _3(n)),bae=un("PhongMaterial",{props:{type:Object,default:()=>({})}},n=>new lo(n)),Sae=un("PhysicalMaterial",{props:{type:Object,default:()=>({})}},n=>new mr(n)),Aae=un("PointsMaterial",{props:{type:Object,default:()=>({})}},n=>new a2(n)),Tae=un("ShadowMaterial",{color:{type:String,default:"#000000"},props:{type:Object,default:()=>({})}},n=>new uh(n)),Eae=un("StandardMaterial",{props:{type:Object,default:()=>({})}},n=>new ls(n)),Cae=un("ToonMaterial",{props:{type:Object,default:()=>({})}},n=>new hh(n));var Lae=un("MatcapMaterial",{src:String,name:{type:String,default:"0404E8_0404B5_0404CB_3333FC"}},n=>{const e=n.src?n.src:_d(n.name),t=d2(n,["src","name"]);return t.matcap=new Yr().load(e),new fh(t)});const Pae=`
  varying vec2 vUv;
  void main(){
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  }
`,Rae=`
  varying vec2 vUv;
  void main() {
    gl_FragColor = vec4(vUv.x, vUv.y, 0., 1.0);
  }
`;var Fae=un("ShaderMaterial",{props:{type:Object,default:()=>({uniforms:{},vertexShader:Pae,fragmentShader:Rae})}},n=>new d0(d2(n,["color"])));function zae(n,e,t){return n.split(e).join(t)}const Iae=Be.meshphong_frag.slice(0,Be.meshphong_frag.indexOf("void main() {")),Dae=Be.meshphong_frag.slice(Be.meshphong_frag.indexOf("void main() {")),Nae={uniforms:et.merge([Ot.phong.uniforms,{thicknessColor:{value:new Ae(16777215)},thicknessDistortion:{value:.1},thicknessAmbient:{value:0},thicknessAttenuation:{value:.1},thicknessPower:{value:2},thicknessScale:{value:10}}]),vertexShader:`
    #define USE_UV
    ${Be.meshphong_vert}
  `,fragmentShader:`
    #define USE_UV
    #define SUBSURFACE

    ${Iae}

    uniform float thicknessPower;
    uniform float thicknessScale;
    uniform float thicknessDistortion;
    uniform float thicknessAmbient;
    uniform float thicknessAttenuation;
    uniform vec3 thicknessColor;

    void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in GeometricContext geometry, inout ReflectedLight reflectedLight) {
      #ifdef USE_COLOR
        vec3 thickness = vColor * thicknessColor;
      #else
        vec3 thickness = thicknessColor;
      #endif
      vec3 scatteringHalf = normalize(directLight.direction + (geometry.normal * thicknessDistortion));
      float scatteringDot = pow(saturate(dot(geometry.viewDir, -scatteringHalf)), thicknessPower) * thicknessScale;
      vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * thickness;
      reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;
    }
  `+Dae.replace("#include <lights_fragment_begin>",zae(Be.lights_fragment_begin,"RE_Direct( directLight, geometry, material, reflectedLight );",`
        RE_Direct( directLight, geometry, material, reflectedLight );
        #if defined( SUBSURFACE ) && defined( USE_UV )
          RE_Direct_Scattering(directLight, vUv, geometry, reflectedLight);
        #endif
      `))};var Oae=Fe({extends:U3,props:{uniforms:{type:Object,default:()=>({diffuse:"#ffffff",thicknessColor:"#ffffff",thicknessDistortion:.4,thicknessAmbient:.01,thicknessAttenuation:.7,thicknessPower:2,thicknessScale:4})}},methods:{createMaterial(){const n=Nae,e=et.clone(n.uniforms);return gr(this,"uniforms",e,!0,(r,i,s)=>{const o=r[i].value;o instanceof Ae?o.set(s):r[i].value=s}),new d0({...n,lights:!0,...this.props,uniforms:e})}}}),V3=Fe({inject:{material:H3},props:{name:{type:String,default:"map"},uniform:String,src:String,onLoad:Function,onProgress:Function,onError:Function,props:{type:Object,default:()=>({})}},setup(){return{}},created(){this.refreshTexture(),Ze(()=>this.src,this.refreshTexture)},unmounted(){var n,e;(n=this.material)==null||n.setTexture(null,this.name),(e=this.texture)==null||e.dispose()},methods:{createTexture(){if(this.src)return new Yr().load(this.src,this.onLoaded,this.onProgress,this.onError)},initTexture(){this.texture&&(gr(this,"props",this.texture),this.material&&(this.material.setTexture(this.texture,this.name),this.material.material instanceof d0&&this.uniform&&(this.material.material.uniforms[this.uniform]={value:this.texture})))},refreshTexture(){var n;(n=this.texture)==null||n.dispose(),this.texture=this.createTexture(),this.initTexture()},onLoaded(n){var e;(e=this.onLoad)==null||e.call(this,n)}},render(){return[]}}),Bae=Fe({extends:V3,props:{name:{type:String,default:"envMap"},path:{type:String,required:!0},urls:{type:Array,default:()=>["px.jpg","nx.jpg","py.jpg","ny.jpg","pz.jpg","nz.jpg"]},props:{type:Object,default:()=>({mapping:ns})}},created(){Ze(()=>this.path,this.refreshTexture),Ze(()=>this.urls,this.refreshTexture)},methods:{createTexture(){return new gh().setPath(this.path).load(this.urls,this.onLoaded,this.onProgress,this.onError)}}}),Hae=Fe({extends:V3,props:{videoId:{type:String,required:!0}},created(){Ze(()=>this.videoId,this.refreshTexture)},methods:{createTexture(){const n=document.getElementById(this.videoId);return new H5(n)}}}),Uae=at("Box",xd,yd),Vae=at("Circle",wd,Md),kae=at("Cone",bd,Sd),Gae=at("Cylinder",Ad,Td),Wae=at("Dodecahedron",Ed,Cd),$ae=at("Icosahedron",Ld,Pd),Xae=at("Lathe",Rd,Fd),jae=at("Octahedron",zd,Id),qae=at("Plane",Dd,Nd),Yae=at("Polyhedron",Od,Bd),Qae=at("Ring",Hd,Ud),Kae=at("Sphere",Vd,kd),Zae=at("Tetrahedron",Gd,Wd);const Jae={text:{type:String,required:!0,default:"Text"},fontSrc:{type:String,required:!0},size:{type:Number,default:80},height:{type:Number,default:5},depth:{type:Number,default:1},curveSegments:{type:Number,default:12},bevelEnabled:{type:Boolean,default:!1},bevelThickness:{type:Number,default:10},bevelSize:{type:Number,default:8},bevelOffset:{type:Number,default:0},bevelSegments:{type:Number,default:5},align:{type:[Boolean,String],default:!1}};var e1e=Fe({extends:xs,props:Jae,setup(){return{}},created(){if(!this.fontSrc){console.error('Missing required prop: "font-src"');return}["text","size","height","curveSegments","bevelEnabled","bevelThickness","bevelSize","bevelOffset","bevelSegments","align"].forEach(t=>{Ze(()=>this[t],()=>{this.font&&this.refreshGeometry()})});const e=new ase;this.loading=!0,e.load(this.fontSrc,t=>{this.loading=!1,this.font=t,this.createGeometry(),this.initMesh()})},methods:{createGeometry(){this.geometry=new ose(this.text,{font:this.font,size:this.size,height:this.height,depth:this.depth,curveSegments:this.curveSegments,bevelEnabled:this.bevelEnabled,bevelThickness:this.bevelThickness,bevelSize:this.bevelSize,bevelOffset:this.bevelOffset,bevelSegments:this.bevelSegments}),this.align==="center"&&this.geometry.center()}}}),t1e=at("Torus",$d,Xd),n1e=at("TorusKnot",jd,qd),r1e=Fe({extends:xs,props:u4,created(){this.createGeometry(),this.addGeometryWatchers(u4)},methods:{createGeometry(){this.geometry=Yd(this)},updatePoints(n){Qd(this.geometry,n)}},__hmrId:"Tube"}),i1e=Fe({emits:["loaded"],extends:xs,props:{src:{type:String,required:!0},width:Number,height:Number,widthSegments:{type:Number,default:1},heightSegments:{type:Number,default:1},keepSize:Boolean},setup(){return{}},created(){this.renderer&&(this.geometry=new n3(1,1,this.widthSegments,this.heightSegments),this.material=new St({side:or,map:this.loadTexture()}),Ze(()=>this.src,this.refreshTexture),["width","height"].forEach(n=>{Ze(()=>this[n],this.resize)}),this.resize(),this.keepSize&&this.renderer.onResize(this.resize))},unmounted(){var n;(n=this.renderer)==null||n.offResize(this.resize)},methods:{loadTexture(){return new Yr().load(this.src,this.onLoaded)},refreshTexture(){var n;(n=this.texture)==null||n.dispose(),this.material&&(this.material.map=this.loadTexture(),this.material.needsUpdate=!0)},onLoaded(n){this.texture=n,this.resize(),this.$emit("loaded",n)},resize(){if(!this.renderer||!this.texture)return;const n=this.renderer.size,e=this.texture.image.width,t=this.texture.image.height,r=e/t;let i=1,s=1;this.width&&this.height?(i=this.width*n.wWidth/n.width,s=this.height*n.wHeight/n.height):this.width?(i=this.width*n.wWidth/n.width,s=i/r):this.height?(s=this.height*n.wHeight/n.height,i=s*r):r>1?i=s*r:s=i/r,this.mesh&&(this.mesh.scale.x=i,this.mesh.scale.y=s)}},__hmrId:"Image"}),s1e=Fe({extends:xs,props:{count:{type:Number,required:!0}},methods:{initMesh(){if(this.renderer){if(!this.geometry||!this.material)return console.error("Missing geometry and/or material"),!1;this.mesh=new g1(this.geometry,this.material,this.count),this.mesh.userData.component=this,V0(this,"castShadow",this.mesh),V0(this,"receiveShadow",this.mesh),(this.onPointerEnter||this.onPointerOver||this.onPointerMove||this.onPointerLeave||this.onPointerDown||this.onPointerUp||this.onClick)&&this.renderer.three.addIntersectObject(this.mesh),this.initObject3D(this.mesh)}}},__hmrId:"InstancedMesh"}),o1e=Fe({extends:vr,emits:["loaded"],props:{src:{type:String,required:!0}},setup(){return{}},created(){this.texture=new Yr().load(this.src,this.onLoaded),this.material=new l3({map:this.texture}),this.sprite=new O5(this.material),this.initObject3D(this.sprite)},unmounted(){var n,e;(n=this.texture)==null||n.dispose(),(e=this.material)==null||e.dispose()},methods:{onLoaded(){this.updateUV(),this.$emit("loaded")},updateUV(){if(!this.texture||!this.sprite)return;const n=this.texture.image.width,e=this.texture.image.height,t=n/e;let r=.5,i=.5;t>1?r=.5*t:i=.5/t;const s=this.sprite.geometry.attributes.position.array;s[0]=-r,s[1]=-i,s[5]=r,s[6]=-i,s[10]=r,s[11]=i,s[15]=-r,s[16]=i,this.sprite.geometry.attributes.position.needsUpdate=!0}},__hmrId:"Sprite"}),a1e=Fe({extends:vr,setup(){return{}},provide(){return{[Zo]:this}},mounted(){this.mesh=this.points=new c3(this.geometry,this.material),this.initObject3D(this.mesh)},methods:{setGeometry(n){this.geometry=n,this.mesh&&(this.mesh.geometry=n)},setMaterial(n){this.material=n,this.mesh&&(this.mesh.material=n)}}}),Kd=Fe({extends:vr,emits:["before-load","load","progress","error"],props:{src:{type:String,required:!0}},data(){return{progress:0}},methods:{onLoad(n){this.$emit("load",n)},onProgress(n){this.progress=n.loaded/n.total,this.$emit("progress",n)},onError(n){this.$emit("error",n)}}}),l1e=Fe({extends:Kd,created(){const n=new use;this.$emit("before-load",n),n.load(this.src,e=>{this.onLoad(e),this.initObject3D(e.scene)},this.onProgress,this.onError)}}),c1e=Fe({extends:Kd,created(){const n=new uoe;this.$emit("before-load",n),n.load(this.src,e=>{this.onLoad(e),this.initObject3D(e)},this.onProgress,this.onError)}});const k3=Symbol("Composer");var u1e=Fe({setup(){return{renderer:tt(cn)}},provide(){return{[k3]:this}},created(){if(!this.renderer){console.error("Renderer not found");return}const n=this.renderer,e=new Soe(this.renderer.renderer);this.composer=e,this.renderer.composer=e,n.addListener("init",()=>{n.renderer.autoClear=!1,this.resize(),n.addListener("resize",this.resize)})},unmounted(){var n;(n=this.renderer)==null||n.removeListener("resize",this.resize)},methods:{addPass(n){var e;(e=this.composer)==null||e.addPass(n)},removePass(n){var e;(e=this.composer)==null||e.removePass(n)},resize(){this.composer&&this.renderer&&this.composer.setSize(this.renderer.size.width,this.renderer.size.height)}},render(){return this.$slots.default?this.$slots.default():[]},__hmrId:"EffectComposer"}),Xt=Fe({inject:{renderer:cn,composer:k3},emits:["ready"],setup(){return{}},created(){this.composer||console.error("Missing parent EffectComposer"),this.renderer||console.error("Missing parent Renderer")},unmounted(){var n,e,t;this.pass&&((n=this.composer)==null||n.removePass(this.pass),(t=(e=this.pass).dispose)==null||t.call(e))},methods:{initEffectPass(n){var e;this.pass=n,(e=this.composer)==null||e.addPass(n),this.$emit("ready",n)}},render(){return[]},__hmrId:"EffectPass"}),h1e=Fe({extends:Xt,created(){if(!this.renderer)return;if(!this.renderer.scene){console.error("Missing Scene");return}if(!this.renderer.camera){console.error("Missing Camera");return}const n=new Aoe(this.renderer.scene,this.renderer.camera);this.initEffectPass(n)},__hmrId:"RenderPass"});const e8={focus:{type:Number,default:1},aperture:{type:Number,default:.025},maxblur:{type:Number,default:.01}};var d1e=Fe({extends:Xt,props:e8,created(){if(!this.renderer)return;if(!this.renderer.scene){console.error("Missing Scene");return}if(!this.renderer.camera){console.error("Missing Camera");return}const n={focus:this.focus,aperture:this.aperture,maxblur:this.maxblur,width:this.renderer.size.width,height:this.renderer.size.height},e=new Toe(this.renderer.scene,this.renderer.camera,n);Object.keys(e8).forEach(t=>{Ze(()=>this[t],r=>{e.uniforms[t].value=r})}),this.initEffectPass(e)},__hmrId:"BokehPass"});const t8={noiseIntensity:{type:Number,default:.5},scanlinesIntensity:{type:Number,default:.05},scanlinesCount:{type:Number,default:4096},grayscale:{type:Number,default:0}};var f1e=Fe({extends:Xt,props:t8,created(){const n=new Eoe(this.noiseIntensity,this.scanlinesIntensity,this.scanlinesCount,this.grayscale);Object.keys(t8).forEach(e=>{Ze(()=>this[e],t=>{n.uniforms[e].value=t})}),this.initEffectPass(n)},__hmrId:"FilmPass"}),p1e=Fe({extends:Xt,created(){var n;const e=new Ki(Coe);(n=this.renderer)==null||n.addListener("resize",this.resize),this.initEffectPass(e)},unmounted(){var n;(n=this.renderer)==null||n.removeListener("resize",this.resize)},methods:{resize({size:n}){if(this.pass){const{resolution:e}=this.pass.material.uniforms;e.value.x=1/n.width,e.value.y=1/n.height}}},__hmrId:"FXAAPass"});const n8={shape:{type:Number,default:1},radius:{type:Number,default:4},rotateR:{type:Number,default:Math.PI/12*1},rotateG:{type:Number,default:Math.PI/12*2},rotateB:{type:Number,default:Math.PI/12*3},scatter:{type:Number,default:0}};var m1e=Fe({extends:Xt,props:n8,created(){if(!this.renderer)return;const n=new Loe(this.renderer.size.width,this.renderer.size.height,{});Object.keys(n8).forEach(e=>{n.uniforms[e].value=this[e],Ze(()=>this[e],t=>{n.uniforms[e].value=t})}),this.initEffectPass(n)},__hmrId:"HalftonePass"}),_1e=Fe({extends:Xt,created(){if(!this.renderer)return;const n=new Poe(this.renderer.size.width,this.renderer.size.height);this.initEffectPass(n)},__hmrId:"SMAAPass"}),g1e=Fe({extends:Xt,props:{options:{type:Object,default:()=>({})}},created(){if(!this.renderer)return;if(!this.renderer.scene){console.error("Missing Scene");return}if(!this.renderer.camera){console.error("Missing Camera");return}const n=new md(this.renderer.scene,this.renderer.camera,this.renderer.size.width,this.renderer.size.height);Object.keys(this.options).forEach(e=>{n[e]=this.options[e]}),this.initEffectPass(n)},__hmrId:"SSAOPass"}),Zd={uniforms:{},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
  `},r8={uniforms:{tDiffuse:{value:null},blurRadius:{value:0},gradientRadius:{value:0},start:{value:new ie},end:{value:new ie},delta:{value:new ie},texSize:{value:new ie}},vertexShader:Zd.vertexShader,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float blurRadius;
    uniform float gradientRadius;
    uniform vec2 start;
    uniform vec2 end;
    uniform vec2 delta;
    uniform vec2 texSize;
    varying vec2 vUv;

    float random(vec3 scale, float seed) {
      /* use the fragment position for a different seed per-pixel */
      return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
    }

    void main() {
      vec4 color = vec4(0.0);
      float total = 0.0;

      /* randomize the lookup values to hide the fixed number of samples */
      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);

      vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));
      float radius = smoothstep(0.0, 1.0, abs(dot(vUv * texSize - start, normal)) / gradientRadius) * blurRadius;
      for (float t = -30.0; t <= 30.0; t++) {
          float percent = (t + offset - 0.5) / 30.0;
          float weight = 1.0 - abs(percent);
          vec4 texel = texture2D(tDiffuse, vUv + delta / texSize * percent * radius);
          // vec4 texel2 = texture2D(tDiffuse, vUv + vec2(-delta.y, delta.x) / texSize * percent * radius);

          /* switch to pre-multiplied alpha to correctly blur transparent images */
          texel.rgb *= texel.a;
          // texel2.rgb *= texel2.a;

          color += texel * weight;
          total += 2.0 * weight;
      }

      gl_FragColor = color / total;

      /* switch back from pre-multiplied alpha */
      gl_FragColor.rgb /= gl_FragColor.a + 0.00001;
    }
  `};const v1e={blurRadius:{type:Number,default:10},gradientRadius:{type:Number,default:100},start:{type:Object,default:()=>({x:0,y:100})},end:{type:Object,default:()=>({x:10,y:100})}};var x1e=Fe({extends:Xt,props:v1e,setup(){return{uniforms1:{},uniforms2:{}}},created(){if(!this.composer)return;this.pass1=new Ki(r8),this.pass2=new Ki(r8);const n=this.uniforms1=this.pass1.uniforms,e=this.uniforms2=this.pass2.uniforms;e.blurRadius=n.blurRadius,e.gradientRadius=n.gradientRadius,e.start=n.start,e.end=n.end,e.texSize=n.texSize,V0(this,"blurRadius",n.blurRadius,"value"),V0(this,"gradientRadius",n.gradientRadius,"value"),this.updateFocusLine(),["start","end"].forEach(t=>{Ze(()=>this[t],this.updateFocusLine,{deep:!0})}),this.pass1.setSize=(t,r)=>{n.texSize.value.set(t,r)},this.initEffectPass(this.pass1),this.composer.addPass(this.pass2)},unmounted(){this.composer&&this.pass2&&this.composer.removePass(this.pass2)},methods:{updateFocusLine(){this.uniforms1.start.value.copy(this.start),this.uniforms1.end.value.copy(this.end);const n=new ie().copy(this.end).sub(this.start).normalize();this.uniforms1.delta.value.copy(n),this.uniforms2.delta.value.set(-n.y,n.x)}},__hmrId:"TiltShiftPass"});const i8={strength:{type:Number,default:1.5},radius:{type:Number,default:0},threshold:{type:Number,default:0}};var y1e=Fe({extends:Xt,props:i8,created(){if(!this.renderer)return;const n=new ie(this.renderer.size.width,this.renderer.size.height),e=new N3(n,this.strength,this.radius,this.threshold);Object.keys(i8).forEach(t=>{Ze(()=>this[t],r=>{e.uniforms[t].value=r})}),this.initEffectPass(e)},__hmrId:"UnrealBloomPass"}),w1e={uniforms:{tDiffuse:{value:null},center:{value:new ie(.5,.5)},strength:{value:0}},vertexShader:Zd.vertexShader,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 center;
    uniform float strength;
    varying vec2 vUv;

    float random(vec3 scale, float seed) {
      /* use the fragment position for a different seed per-pixel */
      return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
    }
    
    void main() {
      vec4 color = vec4(0.0);
      float total = 0.0;
      vec2 toCenter = center - vUv;
      
      /* randomize the lookup values to hide the fixed number of samples */
      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
      
      for (float t = 0.0; t <= 40.0; t++) {
        float percent = (t + offset) / 40.0;
        float weight = 4.0 * (percent - percent * percent);
        vec4 texel = texture2D(tDiffuse, vUv + toCenter * percent * strength);

        /* switch to pre-multiplied alpha to correctly blur transparent images */
        texel.rgb *= texel.a;

        color += texel * weight;
        total += weight;
      }

      gl_FragColor = color / total;

      /* switch back from pre-multiplied alpha */
      gl_FragColor.rgb /= gl_FragColor.a + 0.00001;
    }
  `},M1e=Fe({extends:Xt,props:{center:{type:Object,default:()=>({x:.5,y:.5})},strength:{type:Number,default:.5}},created(){const n=new Ki(w1e);V0(this,"center",n.uniforms.center,"value"),V0(this,"strength",n.uniforms.strength,"value"),this.initEffectPass(n)},__hmrId:"ZoomBlurPass"}),b1e=Object.freeze({__proto__:null,Renderer:Uoe,RendererInjectionKey:cn,OrthographicCamera:Voe,PerspectiveCamera:J6,Camera:J6,Group:Woe,Scene:koe,SceneInjectionKey:O3,Object3D:vr,Raycaster:$oe,CubeCamera:Xoe,BufferGeometry:B3,BoxGeometry:joe,CircleGeometry:qoe,ConeGeometry:Yoe,CylinderGeometry:Qoe,DodecahedronGeometry:Koe,ExtrudeGeometry:eae,IcosahedronGeometry:tae,LatheGeometry:nae,OctahedronGeometry:rae,PlaneGeometry:iae,PolyhedronGeometry:sae,RingGeometry:oae,SphereGeometry:aae,ShapeGeometry:uae,TetrahedronGeometry:hae,TorusGeometry:dae,TorusKnotGeometry:fae,TubeGeometry:pae,AmbientLight:mae,DirectionalLight:_ae,HemisphereLight:gae,PointLight:vae,RectAreaLight:xae,SpotLight:yae,Material:U3,BasicMaterial:wae,LambertMaterial:Mae,PhongMaterial:bae,PhysicalMaterial:Sae,PointsMaterial:Aae,ShadowMaterial:Tae,StandardMaterial:Eae,ToonMaterial:Cae,MaterialInjectionKey:H3,MatcapMaterial:Lae,ShaderMaterial:Fae,SubSurfaceMaterial:Oae,Texture:V3,CubeTexture:Bae,VideoTexture:Hae,Mesh:xs,MeshInjectionKey:Zo,Box:Uae,Circle:Vae,Cone:kae,Cylinder:Gae,Dodecahedron:Wae,Icosahedron:$ae,Lathe:Xae,Octahedron:jae,Plane:qae,Polyhedron:Yae,Ring:Qae,Sphere:Kae,Tetrahedron:Zae,Text:e1e,Torus:t1e,TorusKnot:n1e,Tube:r1e,Image:i1e,InstancedMesh:s1e,Sprite:o1e,Points:a1e,GltfModel:l1e,FbxModel:c1e,EffectComposer:u1e,ComposerInjectionKey:k3,RenderPass:h1e,EffectPass:Xt,BokehPass:d1e,FilmPass:f1e,FXAAPass:p1e,HalftonePass:m1e,SMAAPass:_1e,SSAOPass:g1e,TiltShiftPass:x1e,UnrealBloomPass:y1e,ZoomBlurPass:M1e,applyObjectProps:Ho,bindObjectProp:gr,bindObjectProps:Roe,setFromProp:Uo,bindProps:Foe,bindProp:V0,propsValues:d2,lerp:zoe,limit:Ioe,getMatcapUrl:_d});const S1e={install(n){["Camera","OrthographicCamera","PerspectiveCamera","Raycaster","Renderer","Scene","Group","CubeCamera","AmbientLight","DirectionalLight","HemisphereLight","PointLight","RectAreaLight","SpotLight","BasicMaterial","LambertMaterial","MatcapMaterial","PhongMaterial","PhysicalMaterial","PointsMaterial","ShaderMaterial","StandardMaterial","SubSurfaceMaterial","ToonMaterial","Texture","CubeTexture","BufferGeometry","Mesh","Box","BoxGeometry","Circle","CircleGeometry","Cone","ConeGeometry","Cylinder","CylinderGeometry","Dodecahedron","DodecahedronGeometry","Icosahedron","IcosahedronGeometry","Lathe","LatheGeometry","Octahedron","OctahedronGeometry","Plane","PlaneGeometry","Polyhedron","PolyhedronGeometry","Ring","RingGeometry","Sphere","SphereGeometry","Tetrahedron","TetrahedronGeometry","Text","Torus","TorusGeometry","TorusKnot","TorusKnotGeometry","Tube","TubeGeometry","Image","InstancedMesh","Points","Sprite","FbxModel","GltfModel","BokehPass","EffectComposer","FilmPass","FXAAPass","HalftonePass","RenderPass","SAOPass","SMAAPass","SSAOPass","TiltShiftPass","UnrealBloomPass","ZoomBlurPass"].forEach(t=>{n.component(t,b1e[t])})}},ws=Wp(Yp);ws.use(Ku);ws.use(r_);for(const[n,e]of Object.entries(BQ))ws.component(n,e);ws.use(S1e);ws.mount("#app");ws.config.globalProperties.$axios=j4;export{Qe as $,V1 as A,_7 as B,NN as C,c0 as D,T4 as E,gt as F,L8 as G,P7 as H,b as I,ep as J,A1e as K,n_ as L,J0 as M,R1e as N,G1e as O,Re as P,Zf as Q,He as R,G8 as S,au as T,L1e as U,B1e as V,H1e as W,k1e as X,c1 as Y,$1e as Z,Xp as _,D1e as a,M0 as a0,n7 as a1,yf as a2,kt as a3,P4 as a4,N1e as a5,Yf as a6,EY as a7,HR as a8,sM as a9,qf as aA,tZ as aB,f8 as aC,S8 as aD,tn as aE,E1e as aF,Xw as aG,L$ as aH,JY as aI,Zw as aJ,$F as aK,sr as aL,w7 as aM,H1 as aa,Iz as ab,qe as ac,V1e as ad,HM as ae,F1e as af,O1e as ag,I1 as ah,eP as ai,yk as aj,d8 as ak,tg as al,OQ as am,RQ as an,RV as ao,OV as ap,T1e as aq,lf as ar,P1e as as,U1e as at,OS as au,PN as av,GS as aw,Ag as ax,b7 as ay,Tt as az,vt as b,N4 as c,Fe as d,R as e,m4 as f,ko as g,G_ as h,tt as i,fg as j,es as k,Ze as l,np as m,_4 as n,P as o,Qs as p,k8 as q,z1e as r,W8 as s,I1e as t,Ri as u,H4 as v,c7 as w,S0 as x,C1e as y,W1e as z};