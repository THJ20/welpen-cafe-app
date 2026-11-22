(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},n=1e3,r=1001,i=1002,a=1003,o=1004,s=1005,c=1006,l=1007,u=1008,d=1009,f=1010,p=1011,m=1012,h=1013,g=1014,_=1015,v=1016,y=1017,b=1018,x=1020,S=35902,C=35899,w=1021,T=1022,E=1023,D=1026,O=1027,k=1028,A=1029,j=1030,ee=1031,te=1033,M=33776,ne=33777,N=33778,re=33779,P=35840,ie=35841,ae=35842,oe=35843,se=36196,ce=37492,F=37496,le=37488,ue=37489,de=37490,fe=37491,pe=37808,me=37809,he=37810,ge=37811,_e=37812,ve=37813,ye=37814,be=37815,xe=37816,Se=37817,Ce=37818,we=37819,Te=37820,Ee=37821,De=36492,Oe=36494,ke=36495,Ae=36283,je=36284,Me=36285,Ne=36286,I=2300,Pe=2301,Fe=2302,Ie=2303,L=2400,Le=2401,R=2402,z=3200,Re=`srgb`,ze=`srgb-linear`,Be=`linear`,Ve=`srgb`,He=7680,Ue=35044,We=2e3;function Ge(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ke(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function qe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Je(){let e=qe(`canvas`);return e.style.display=`block`,e}var Ye={};function Xe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Ze(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function B(...e){e=Ze(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function V(...e){e=Ze(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Qe(...e){let t=e.join(` `);t in Ye||(Ye[t]=!0,B(...e))}function $e(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var et={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},tt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},nt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),rt=1234567,it=Math.PI/180,at=180/Math.PI;function ot(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(nt[e&255]+nt[e>>8&255]+nt[e>>16&255]+nt[e>>24&255]+`-`+nt[t&255]+nt[t>>8&255]+`-`+nt[t>>16&15|64]+nt[t>>24&255]+`-`+nt[n&63|128]+nt[n>>8&255]+`-`+nt[n>>16&255]+nt[n>>24&255]+nt[r&255]+nt[r>>8&255]+nt[r>>16&255]+nt[r>>24&255]).toLowerCase()}function H(e,t,n){return Math.max(t,Math.min(n,e))}function st(e,t){return(e%t+t)%t}function ct(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function lt(e,t,n){return e===t?0:(n-e)/(t-e)}function ut(e,t,n){return(1-n)*e+n*t}function dt(e,t,n,r){return ut(e,t,1-Math.exp(-n*r))}function ft(e,t=1){return t-Math.abs(st(e,t*2)-t)}function pt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function mt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function ht(e,t){return e+Math.floor(Math.random()*(t-e+1))}function gt(e,t){return e+Math.random()*(t-e)}function _t(e){return e*(.5-Math.random())}function vt(e){e!==void 0&&(rt=e);let t=rt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yt(e){return e*it}function bt(e){return e*at}function xt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function St(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ct(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function wt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:B(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Tt(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Et(e,t){if(t.constructor===Float32Array)return e;let n=Tt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Dt(e,t){if(t.constructor===Float32Array)return e;let n=Tt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var Ot={DEG2RAD:it,RAD2DEG:at,generateUUID:ot,clamp:H,euclideanModulo:st,mapLinear:ct,inverseLerp:lt,lerp:ut,damp:dt,pingpong:ft,smoothstep:pt,smootherstep:mt,randInt:ht,randFloat:gt,randFloatSpread:_t,seededRandom:vt,degToRad:yt,radToDeg:bt,isPowerOfTwo:xt,ceilPowerOfTwo:St,floorPowerOfTwo:Ct,setQuaternionFromProperEuler:wt,normalize:Dt,denormalize:Et},U=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=H(this.x,e.x,t.x),this.y=H(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=H(this.x,e,t),this.y=H(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(H(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(H(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:B(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(H(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=H(this.x,e.x,t.x),this.y=H(this.y,e.y,t.y),this.z=H(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=H(this.x,e,t),this.y=H(this.y,e,t),this.z=H(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(H(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return At.copy(this).projectOnVector(e),this.sub(At)}reflect(e){return this.sub(At.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(H(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},At=new W,jt=new kt,G=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Qe(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Mt.makeScale(e,t)),this}rotate(e){return Qe(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Mt.makeRotation(-e)),this}translate(e,t){return Qe(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Mt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Mt=new G,Nt=new G().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pt=new G().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ft(){let e={enabled:!0,workingColorSpace:ze,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=It(e.r),e.g=It(e.g),e.b=It(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Lt(e.r),e.g=Lt(e.g),e.b=Lt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Be:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[ze]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:Nt,fromXYZ:Pt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:Nt,fromXYZ:Pt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),e}var K=Ft();function It(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Lt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Rt,zt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rt===void 0&&(Rt=qe(`canvas`)),Rt.width=e.width,Rt.height=e.height;let t=Rt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Rt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=qe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=It(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(It(t[e]/255)*255):t[e]=It(t[e]);return{data:t,width:e.width,height:e.height}}return B(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Bt=0,Vt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bt++}),this.uuid=ot(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ht(r[t].image)):e.push(Ht(r[t]))}else e=Ht(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ht(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?zt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(B(`Texture: Unable to serialize Texture.`),{})}var Ut=0,Wt=new W,Gt=class e extends tt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=r,a=r,o=c,s=u,l=E,f=d,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ut++}),this.uuid=ot(),this.name=``,this.source=new Vt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=f,this.offset=new U(0,0),this.repeat=new U(1,1),this.center=new U(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new G,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Wt).x}get height(){return this.source.getSize(Wt).y}get depth(){return this.source.getSize(Wt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){B(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?B(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case n:e.x-=Math.floor(e.x);break;case r:e.x=e.x<0?0:1;break;case i:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case n:e.y-=Math.floor(e.y);break;case r:e.y=e.y<0?0:1;break;case i:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Gt.DEFAULT_IMAGE=null,Gt.DEFAULT_MAPPING=300,Gt.DEFAULT_ANISOTROPY=1;var Kt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=H(this.x,e.x,t.x),this.y=H(this.y,e.y,t.y),this.z=H(this.z,e.z,t.z),this.w=H(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=H(this.x,e,t),this.y=H(this.y,e,t),this.z=H(this.z,e,t),this.w=H(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(H(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qt=class extends tt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:c,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Gt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:c,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Vt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Jt=class extends qt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Yt=class extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Xt=class extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Zt=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Qt.setFromMatrixColumn(e,0).length(),i=1/Qt.setFromMatrixColumn(e,1).length(),a=1/Qt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(en,e,tn)}lookAt(e,t,n){let r=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),nn.crossVectors(n,an),nn.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),nn.crossVectors(n,an)),nn.normalize(),rn.crossVectors(an,nn),r[0]=nn.x,r[4]=rn.x,r[8]=an.x,r[1]=nn.y,r[5]=rn.y,r[9]=an.y,r[2]=nn.z,r[6]=rn.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],te=r[3],M=r[7],ne=r[11],N=r[15];return i[0]=a*x+o*T+s*k+c*te,i[4]=a*S+o*E+s*A+c*M,i[8]=a*C+o*D+s*j+c*ne,i[12]=a*w+o*O+s*ee+c*N,i[1]=l*x+u*T+d*k+f*te,i[5]=l*S+u*E+d*A+f*M,i[9]=l*C+u*D+d*j+f*ne,i[13]=l*w+u*O+d*ee+f*N,i[2]=p*x+m*T+h*k+g*te,i[6]=p*S+m*E+h*A+g*M,i[10]=p*C+m*D+h*j+g*ne,i[14]=p*w+m*O+h*ee+g*N,i[3]=_*x+v*T+y*k+b*te,i[7]=_*S+v*E+y*A+b*M,i[11]=_*C+v*D+y*j+b*ne,i[15]=_*w+v*O+y*ee+b*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Qt.set(r[0],r[1],r[2]).length(),o=Qt.set(r[4],r[5],r[6]).length(),s=Qt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),$t.copy(this);let c=1/a,l=1/o,u=1/s;return $t.elements[0]*=c,$t.elements[1]*=c,$t.elements[2]*=c,$t.elements[4]*=l,$t.elements[5]*=l,$t.elements[6]*=l,$t.elements[8]*=u,$t.elements[9]*=u,$t.elements[10]*=u,t.setFromRotationMatrix($t),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=We,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=We,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Qt=new W,$t=new Zt,en=new W(0,0,0),tn=new W(1,1,1),nn=new W,rn=new W,an=new W,on=new Zt,sn=new kt,cn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(H(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-H(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(H(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-H(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(H(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-H(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:B(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return on.makeRotationFromQuaternion(e),this.setFromRotationMatrix(on,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sn.setFromEuler(this),this.setFromQuaternion(sn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER=`XYZ`;var ln=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},un=0,dn=new W,fn=new kt,pn=new Zt,mn=new W,hn=new W,gn=new W,_n=new kt,vn=new W(1,0,0),yn=new W(0,1,0),bn=new W(0,0,1),xn={type:`added`},Sn={type:`removed`},Cn={type:`childadded`,child:null},wn={type:`childremoved`,child:null},Tn=class e extends tt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:un++}),this.uuid=ot(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new W,n=new cn,r=new kt,i=new W(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Zt},normalMatrix:{value:new G}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ln,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fn.setFromAxisAngle(e,t),this.quaternion.multiply(fn),this}rotateOnWorldAxis(e,t){return fn.setFromAxisAngle(e,t),this.quaternion.premultiply(fn),this}rotateX(e){return this.rotateOnAxis(vn,e)}rotateY(e){return this.rotateOnAxis(yn,e)}rotateZ(e){return this.rotateOnAxis(bn,e)}translateOnAxis(e,t){return dn.copy(e).applyQuaternion(this.quaternion),this.position.add(dn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vn,e)}translateY(e){return this.translateOnAxis(yn,e)}translateZ(e){return this.translateOnAxis(bn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mn.copy(e):mn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),hn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(hn,mn,this.up):pn.lookAt(mn,hn,this.up),this.quaternion.setFromRotationMatrix(pn),r&&(pn.extractRotation(r.matrixWorld),fn.setFromRotationMatrix(pn),this.quaternion.premultiply(fn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(V(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xn),Cn.child=e,this.dispatchEvent(Cn),Cn.child=null):V(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sn),wn.child=e,this.dispatchEvent(wn),wn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xn),Cn.child=e,this.dispatchEvent(Cn),Cn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hn,e,gn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hn,_n,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Tn.DEFAULT_UP=new W(0,1,0),Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var q=class extends Tn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},En={type:`move`},Dn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new q,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new q,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new q,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(En)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new q;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},On={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},An={h:0,s:0,l:0};function jn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var J=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Re){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,K.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=K.workingColorSpace){return this.r=e,this.g=t,this.b=n,K.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=K.workingColorSpace){if(e=st(e,1),t=H(t,0,1),n=H(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=jn(i,r,e+1/3),this.g=jn(i,r,e),this.b=jn(i,r,e-1/3)}return K.colorSpaceToWorking(this,r),this}setStyle(e,t=Re){function n(t){t!==void 0&&parseFloat(t)<1&&B(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:B(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);B(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Re){let n=On[e.toLowerCase()];return n===void 0?B(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=It(e.r),this.g=It(e.g),this.b=It(e.b),this}copyLinearToSRGB(e){return this.r=Lt(e.r),this.g=Lt(e.g),this.b=Lt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Re){return K.workingToColorSpace(Mn.copy(this),e),Math.round(H(Mn.r*255,0,255))*65536+Math.round(H(Mn.g*255,0,255))*256+Math.round(H(Mn.b*255,0,255))}getHexString(e=Re){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=K.workingColorSpace){K.workingToColorSpace(Mn.copy(this),t);let n=Mn.r,r=Mn.g,i=Mn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=K.workingColorSpace){return K.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Re){K.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,n=Mn.g,r=Mn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(An);let n=ut(kn.h,An.h,t),r=ut(kn.s,An.s,t),i=ut(kn.l,An.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new J;J.NAMES=On;var Nn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new J(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Pn=class extends Tn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fn=new W,In=new W,Ln=new W,Rn=new W,zn=new W,Bn=new W,Vn=new W,Hn=new W,Un=new W,Wn=new W,Gn=new Kt,Kn=new Kt,qn=new Kt,Jn=class e{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Fn.subVectors(e,t),r.cross(Fn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Fn.subVectors(r,t),In.subVectors(n,t),Ln.subVectors(e,t);let a=Fn.dot(Fn),o=Fn.dot(In),s=Fn.dot(Ln),c=In.dot(In),l=In.dot(Ln),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Rn)!==null&&Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Rn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Rn.x),s.addScaledVector(a,Rn.y),s.addScaledVector(o,Rn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Gn.setScalar(0),Kn.setScalar(0),qn.setScalar(0),Gn.fromBufferAttribute(e,t),Kn.fromBufferAttribute(e,n),qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Gn,i.x),a.addScaledVector(Kn,i.y),a.addScaledVector(qn,i.z),a}static isFrontFacing(e,t,n,r){return Fn.subVectors(n,t),In.subVectors(e,t),Fn.cross(In).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),Fn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;zn.subVectors(r,n),Bn.subVectors(i,n),Hn.subVectors(e,n);let s=zn.dot(Hn),c=Bn.dot(Hn);if(s<=0&&c<=0)return t.copy(n);Un.subVectors(e,r);let l=zn.dot(Un),u=Bn.dot(Un);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(zn,a);Wn.subVectors(e,i);let f=zn.dot(Wn),p=Bn.dot(Wn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Bn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Vn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Vn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(zn,a).addScaledVector(Bn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yn=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Zn):Zn.fromBufferAttribute(r,t),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Qn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Qn.copy(e.boundingBox)),Qn.applyMatrix4(e.matrixWorld),this.union(Qn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),or.subVectors(this.max,ar),$n.subVectors(e.a,ar),er.subVectors(e.b,ar),tr.subVectors(e.c,ar),nr.subVectors(er,$n),rr.subVectors(tr,er),ir.subVectors($n,tr);let t=[0,-nr.z,nr.y,0,-rr.z,rr.y,0,-ir.z,ir.y,nr.z,0,-nr.x,rr.z,0,-rr.x,ir.z,0,-ir.x,-nr.y,nr.x,0,-rr.y,rr.x,0,-ir.y,ir.x,0];return!lr(t,$n,er,tr,or)||(t=[1,0,0,0,1,0,0,0,1],!lr(t,$n,er,tr,or))?!1:(sr.crossVectors(nr,rr),t=[sr.x,sr.y,sr.z],lr(t,$n,er,tr,or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xn=[new W,new W,new W,new W,new W,new W,new W,new W],Zn=new W,Qn=new Yn,$n=new W,er=new W,tr=new W,nr=new W,rr=new W,ir=new W,ar=new W,or=new W,sr=new W,cr=new W;function lr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){cr.fromArray(e,a);let o=i.x*Math.abs(cr.x)+i.y*Math.abs(cr.y)+i.z*Math.abs(cr.z),s=t.dot(cr),c=n.dot(cr),l=r.dot(cr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var ur=new W,dr=new U,fr=0,pr=class extends tt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ue,this.updateRanges=[],this.gpuType=_,this.version=0,this._normalizationScale=e===void 0?void 0:Tt(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix4(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyNormalMatrix(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.transformDirection(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Et(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Dt(e,this.array):Math.round(e*t)}},mr=class extends pr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},hr=class extends pr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},gr=class extends pr{constructor(e,t,n){super(new Float32Array(e),t,n)}},_r=new Yn,vr=new W,yr=new W,br=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?_r.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);let t=vr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(vr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(yr)),this.expandByPoint(vr.copy(e.center).sub(yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xr=0,Sr=new Zt,Cr=new Tn,wr=new W,Tr=new Yn,Er=new Yn,Dr=new W,Or=class e extends tt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xr++}),this.uuid=ot(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ge(e)?hr:mr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new G().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Sr.makeRotationFromQuaternion(e),this.applyMatrix4(Sr),this}rotateX(e){return Sr.makeRotationX(e),this.applyMatrix4(Sr),this}rotateY(e){return Sr.makeRotationY(e),this.applyMatrix4(Sr),this}rotateZ(e){return Sr.makeRotationZ(e),this.applyMatrix4(Sr),this}translate(e,t,n){return Sr.makeTranslation(e,t,n),this.applyMatrix4(Sr),this}scale(e,t,n){return Sr.makeScale(e,t,n),this.applyMatrix4(Sr),this}lookAt(e){return Cr.lookAt(e),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new gr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&B(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)V(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Tr.setFromBufferAttribute(n),this.morphTargetsRelative?(Dr.addVectors(this.boundingBox.min,Tr.min),this.boundingBox.expandByPoint(Dr),Dr.addVectors(this.boundingBox.max,Tr.max),this.boundingBox.expandByPoint(Dr)):(this.boundingBox.expandByPoint(Tr.min),this.boundingBox.expandByPoint(Tr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&V(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)V(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new W,1/0);else if(e){let n=this.boundingSphere.center;if(Tr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Er.setFromBufferAttribute(n),this.morphTargetsRelative?(Dr.addVectors(Tr.min,Er.min),Tr.expandByPoint(Dr),Dr.addVectors(Tr.max,Er.max),Tr.expandByPoint(Dr)):(Tr.expandByPoint(Er.min),Tr.expandByPoint(Er.max))}Tr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Dr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Dr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Dr.fromBufferAttribute(a,t),o&&(wr.fromBufferAttribute(e,t),Dr.add(wr)),r=Math.max(r,n.distanceToSquared(Dr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&V(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){V(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new pr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new W,s[e]=new W;let l=new W,u=new W,d=new W,f=new U,p=new U,m=new U,h=new W,g=new W;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new W,b=new W,x=new W,S=new W;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new pr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new W,i=new W,a=new W,o=new W,s=new W,c=new W,l=new W,u=new W;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dr.fromBufferAttribute(e,t),Dr.normalize(),e.setXYZ(t,Dr.x,Dr.y,Dr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new pr(a,r,i)}if(this.index===null)return B(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},kr=new W,Ar=new W,jr=new G,Mr=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=kr.subVectors(n,t).cross(Ar.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(kr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||jr.getNormalMatrix(e),r=this.coplanarPoint(kr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Nr=0,Pr=class extends tt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nr++}),this.uuid=ot(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new J(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=He,this.stencilZFail=He,this.stencilZPass=He,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){B(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?B(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new J().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Mr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new U().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new U().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Fr=new W,Ir=new W,Lr=new W,Rr=new W,zr=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fr.copy(this.origin).addScaledVector(this.direction,t),Fr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ir.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(Ir);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Lr),o=Rr.dot(this.direction),s=-Rr.dot(Lr),c=Rr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ir).addScaledVector(Lr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Fr.subVectors(e.center,this.origin);let n=Fr.dot(this.direction),r=Fr.dot(Fr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Fr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,te;if(y>=b&&y>=x?(w=s,D=u,A=p,te=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,te=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,te=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let M=S/w,ne=C/w,N=1/w,re=T-M*D,P=E-ne*D,ie=O-M*A,ae=k-ne*A,oe=j-M*te,se=ee-ne*te,ce=oe*ae-se*ie,F=re*se-P*oe,le=ie*P-ae*re;if(r){if(ce<0||F<0||le<0)return null}else if((ce<0||F<0||le<0)&&(ce>0||F>0||le>0))return null;let ue=ce+F+le;if(ue===0)return null;let de=N*(ce*D+F*A+le*te);return(ue>0?de<0:de>0)?null:this.at(de/ue,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Br=class extends Pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new J(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Vr=new Zt,Hr=new zr,Ur=new br,Wr=new W,Gr=new W,Kr=new W,qr=new W,Jr=new W,Yr=new W,Xr=new W,Zr=new W,Qr=class extends Tn{constructor(e=new Or,t=new Br){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Yr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Jr.fromBufferAttribute(s,e),a?Yr.addScaledVector(Jr,r):Yr.addScaledVector(Jr.sub(t),r))}t.add(Yr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(i),Hr.copy(e.ray).recast(e.near),Ur.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(Ur,Wr)===null||Hr.origin.distanceToSquared(Wr)>(e.far-e.near)**2)||(Vr.copy(i).invert(),Hr.copy(e.ray).applyMatrix4(Vr),(n.boundingBox===null||Hr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Hr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ei(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ei(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ei(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ei(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function $r(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Zr.copy(s),Zr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Zr);return l<n.near||l>n.far?null:{distance:l,point:Zr.clone(),object:e}}function ei(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Gr),e.getVertexPosition(c,Kr),e.getVertexPosition(l,qr);let u=$r(e,t,n,r,Gr,Kr,qr,Xr);if(u){let e=new W;Jn.getBarycoord(Xr,Gr,Kr,qr,e),i&&(u.uv=Jn.getInterpolatedAttribute(i,s,c,l,e,new U)),a&&(u.uv1=Jn.getInterpolatedAttribute(a,s,c,l,e,new U)),o&&(u.normal=Jn.getInterpolatedAttribute(o,s,c,l,e,new W),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new W,materialIndex:0};Jn.getNormal(Gr,Kr,qr,t.normal),u.face=t,u.barycoord=e}return u}var ti=class extends Gt{constructor(e=null,t=1,n=1,r,i,o,s,c,l=a,u=a,d,f){super(null,o,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ni=class extends pr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ri=new Zt,ii=new Zt,ai=[],oi=new Yn,si=new Zt,ci=new Qr,li=new br,ui=class extends Qr{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ni(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,si)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ri),oi.copy(e.boundingBox).applyMatrix4(ri),this.boundingBox.union(oi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new br),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ri),li.copy(e.boundingSphere).applyMatrix4(ri),this.boundingSphere.union(li)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ci.geometry=this.geometry,ci.material=this.material,ci.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),li.copy(this.boundingSphere),li.applyMatrix4(n),e.ray.intersectsSphere(li)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ri),ii.multiplyMatrices(n,ri),ci.matrixWorld=ii,ci.raycast(e,ai);for(let e=0,n=ai.length;e<n;e++){let n=ai[e];n.instanceId=i,n.object=this,t.push(n)}ai.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ni(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ti(new Float32Array(r*this.count),r,this.count,k,_));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},di=new br,fi=new U(.5,.5),pi=new W,mi=class{constructor(e=new Mr,t=new Mr,n=new Mr,r=new Mr,i=new Mr,a=new Mr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=We,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){return di.center.set(0,0,0),di.radius=.7071067811865476+fi.distanceTo(e.center),di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(pi.x=r.normal.x>0?e.max.x:e.min.x,pi.y=r.normal.y>0?e.max.y:e.min.y,pi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},hi=new Zt,gi=class e{constructor(){this.coordinateSystem=We,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];hi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new mi),n[e].setFromProjectionMatrix(hi,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new mi),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},_i=class extends Pr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new J(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},vi=new W,yi=new W,bi=new Zt,xi=new zr,Si=new br,Ci=new W,wi=new W,Ti=class extends Tn{constructor(e=new Or,t=new _i){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)vi.fromBufferAttribute(t,e-1),yi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=vi.distanceTo(yi);e.setAttribute(`lineDistance`,new gr(n,1))}else B(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Si.copy(n.boundingSphere),Si.applyMatrix4(r),Si.radius+=i,e.ray.intersectsSphere(Si)===!1)return;bi.copy(r).invert(),xi.copy(e.ray).applyMatrix4(bi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Ei(this,e,xi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Ei(this,e,xi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Ei(this,e,xi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Ei(this,e,xi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ei(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(vi.fromBufferAttribute(s,i),yi.fromBufferAttribute(s,a),n.distanceSqToSegment(vi,yi,Ci,wi)>r)return;Ci.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Ci);if(!(c<t.near||c>t.far))return{distance:c,point:wi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Di=new W,Oi=new W,ki=class extends Ti{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Di.fromBufferAttribute(t,e),Oi.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Di.distanceTo(Oi);e.setAttribute(`lineDistance`,new gr(n,1))}else B(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Ai=class extends Pr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new J(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ji=new Zt,Mi=new zr,Ni=new br,Pi=new W,Fi=class extends Tn{constructor(e=new Or,t=new Ai){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ni.copy(n.boundingSphere),Ni.applyMatrix4(r),Ni.radius+=i,e.ray.intersectsSphere(Ni)===!1)return;ji.copy(r).invert(),Mi.copy(e.ray).applyMatrix4(ji);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Pi.fromBufferAttribute(l,n),Ii(Pi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Pi.fromBufferAttribute(l,a),Ii(Pi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ii(e,t,n,r,i,a,o){let s=Mi.distanceSqToPoint(e);if(s<n){let n=new W;Mi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Li=class extends Gt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ri=class extends Gt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},zi=class extends Gt{constructor(e,t,n=g,r,i,o,s=a,c=a,l,u=D,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Bi=class extends zi{constructor(e,t=g,n=301,r,i,o=a,s=a,c,l=D){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Vi=class extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Hi=class e extends Or{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new gr(c,3)),this.setAttribute(`normal`,new gr(l,3)),this.setAttribute(`uv`,new gr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new W;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ui=class e extends Or{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new gr(u,3)),this.setAttribute(`normal`,new gr(d,3)),this.setAttribute(`uv`,new gr(f,2));function _(){let a=new W,_=new W,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new U,m=new W,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wi=class e extends Or{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new gr(p,3)),this.setAttribute(`normal`,new gr(m,3)),this.setAttribute(`uv`,new gr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Gi=class e extends Or{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new W,d=new W,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new gr(p,3)),this.setAttribute(`normal`,new gr(m,3)),this.setAttribute(`uv`,new gr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ki(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ji(i))i.isRenderTargetTexture?(B(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ji(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function qi(e){let t={};for(let n=0;n<e.length;n++){let r=Ki(e[n]);for(let e in r)t[e]=r[e]}return t}function Ji(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Yi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Xi(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:K.workingColorSpace}var Zi={clone:Ki,merge:qi},Qi=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$i=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ea=class extends Pr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qi,this.fragmentShader=$i,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ki(e.uniforms),this.uniformsGroups=Yi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new J().setHex(r.value);break;case`v2`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new W().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Kt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new G().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Zt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ta=class extends ea{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},na=class extends Pr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new J(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new J(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ra=class extends Pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=z,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ia=class extends Pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function aa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function oa(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var sa=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},ca=class extends sa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:L,endingEnd:L}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Le:i=e,o=2*t-n;break;case R:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Le:a=e,s=2*n-t;break;case R:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},la=class extends sa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ua=class extends sa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},da=class extends sa{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ma(n,t,g,y,r);i[p]=fa(x,o,_,b,m)}return i}};function fa(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function pa(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ma(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=fa(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=pa(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var ha=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=aa(t,this.TimeBufferType),this.values=aa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:aa(e.times,Array),values:aa(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),oa(e.settings)&&(n.settings={inTangents:aa(e.settings.inTangents,Array),outTangents:aa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new la(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new da(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case I:t=this.InterpolantFactoryMethodDiscrete;break;case Pe:t=this.InterpolantFactoryMethodLinear;break;case Fe:t=this.InterpolantFactoryMethodSmooth;break;case Ie:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return B(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return I;case this.InterpolantFactoryMethodLinear:return Pe;case this.InterpolantFactoryMethodSmooth:return Fe;case this.InterpolantFactoryMethodBezier:return Ie}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;oa(this.settings)&&(ga(this.settings.inTangents,e),ga(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;oa(this.settings)&&(_a(this.settings.inTangents,e),_a(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(V(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(V(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){V(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){V(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ke(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){V(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Fe,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,oa(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ga(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function _a(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}ha.prototype.ValueTypeName=``,ha.prototype.TimeBufferType=Float32Array,ha.prototype.ValueBufferType=Float32Array,ha.prototype.DefaultInterpolation=Pe;var va=class extends ha{constructor(e,t,n){super(e,t,n)}};va.prototype.ValueTypeName=`bool`,va.prototype.ValueBufferType=Array,va.prototype.DefaultInterpolation=I,va.prototype.InterpolantFactoryMethodLinear=void 0,va.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends ha{constructor(e,t,n,r){super(e,t,n,r)}};ya.prototype.ValueTypeName=`color`;var ba=class extends ha{constructor(e,t,n,r){super(e,t,n,r)}};ba.prototype.ValueTypeName=`number`;var xa=class extends sa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)kt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Sa=class extends ha{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new xa(this.times,this.values,this.getValueSize(),e)}};Sa.prototype.ValueTypeName=`quaternion`,Sa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends ha{constructor(e,t,n){super(e,t,n)}};Ca.prototype.ValueTypeName=`string`,Ca.prototype.ValueBufferType=Array,Ca.prototype.DefaultInterpolation=I,Ca.prototype.InterpolantFactoryMethodLinear=void 0,Ca.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends ha{constructor(e,t,n,r){super(e,t,n,r)}};wa.prototype.ValueTypeName=`vector`;var Ta=class extends Tn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new J(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ea=class extends Ta{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new J(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Da=new Zt,Oa=new W,ka=new W,Aa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new U(512,512),this.mapType=d,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mi,this._frameExtents=new U(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Oa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oa),ka.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ka),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Da.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Da,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Da)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ja=new W,Ma=new kt,Na=new W,Pa=class extends Tn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=We,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ja,Ma,Na),Na.x===1&&Na.y===1&&Na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ja,Ma,Na.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ja,Ma,Na),Na.x===1&&Na.y===1&&Na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ja,Ma,Na.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fa=new W,Ia=new U,La=new U,Ra=class extends Pa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=at*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(it*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return at*2*Math.atan(Math.tan(it*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fa.x,Fa.y).multiplyScalar(-e/Fa.z),Fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fa.x,Fa.y).multiplyScalar(-e/Fa.z)}getViewSize(e,t){return this.getViewBounds(e,Ia,La),t.subVectors(La,Ia)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(it*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},za=class extends Aa{constructor(){super(new Ra(90,1,.5,500)),this.isPointLightShadow=!0}},Ba=class extends Ta{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new za}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Va=class extends Pa{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ha=class extends Aa{constructor(){super(new Va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ua=class extends Ta{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new Ha}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Wa=-90,Ga=1,Ka=class extends Tn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ra(Wa,Ga,e,t);r.layers=this.layers,this.add(r);let i=new Ra(Wa,Ga,e,t);i.layers=this.layers,this.add(i);let a=new Ra(Wa,Ga,e,t);a.layers=this.layers,this.add(a);let o=new Ra(Wa,Ga,e,t);o.layers=this.layers,this.add(o);let s=new Ra(Wa,Ga,e,t);s.layers=this.layers,this.add(s);let c=new Ra(Wa,Ga,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},qa=class extends Ra{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Ja=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ya.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ya(){this._document.hidden===!1&&this.reset()}var Xa=`\\[\\]\\.:\\/`,Za=RegExp(`[\\[\\]\\.:\\/]`,`g`),Qa=`[^\\[\\]\\.:\\/]`,$a=`[^`+Xa.replace(`\\.`,``)+`]`,eo=`((?:WC+[\\/:])*)`.replace(`WC`,Qa),to=`(WCOD+)?`.replace(`WCOD`,$a),no=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Qa),ro=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Qa),io=RegExp(`^`+eo+to+no+ro+`$`),ao=[`material`,`materials`,`bones`,`map`],oo=class{constructor(e,t,n){let r=n||so.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},so=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Za,``)}static parseTrackName(e){let t=io.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);ao.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){B(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){V(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){V(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){V(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){V(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){V(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;V(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};so.Composite=oo,so.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},so.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},so.prototype.GetterByBindingType=[so.prototype._getValue_direct,so.prototype._getValue_array,so.prototype._getValue_arrayElement,so.prototype._getValue_toArray],so.prototype.SetterByBindingTypeAndVersioning=[[so.prototype._setValue_direct,so.prototype._setValue_direct_setNeedsUpdate,so.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[so.prototype._setValue_array,so.prototype._setValue_array_setNeedsUpdate,so.prototype._setValue_array_setMatrixWorldNeedsUpdate],[so.prototype._setValue_arrayElement,so.prototype._setValue_arrayElement_setNeedsUpdate,so.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[so.prototype._setValue_fromArray,so.prototype._setValue_fromArray_setNeedsUpdate,so.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var co=new Zt,lo=class{constructor(e,t,n=0,r=1/0){this.ray=new zr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ln,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):V(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return co.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(co),this}intersectObject(e,t=!0,n=[]){return fo(e,this,n,t),n.sort(uo),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)fo(e[r],this,n,t);return n.sort(uo),n}};function uo(e,t){return e.distance-t.distance}function fo(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)fo(r[e],t,n,!0)}}var po=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=H(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(H(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var mo=class extends ki{constructor(e=10,t=10,n=4473924,r=8947848){n=new J(n),r=new J(r);let i=t/2,a=e/t,o=e/2,s=[],c=[];for(let e=0,l=0,u=-o;e<=t;e++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);let t=e===i?n:r;t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3}let l=new Or;l.setAttribute(`position`,new gr(s,3)),l.setAttribute(`color`,new gr(c,3));let u=new _i({vertexColors:!0,toneMapped:!1});super(l,u),this.type=`GridHelper`}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},ho=class extends tt{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function go(e,t,n,r){let i=_o(r);switch(n){case w:return e*t;case k:return e*t/i.components*i.byteLength;case A:return e*t/i.components*i.byteLength;case j:return e*t*2/i.components*i.byteLength;case ee:return e*t*2/i.components*i.byteLength;case T:return e*t*3/i.components*i.byteLength;case E:return e*t*4/i.components*i.byteLength;case te:return e*t*4/i.components*i.byteLength;case M:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case N:case re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ie:case oe:return Math.max(e,16)*Math.max(t,8)/4;case P:case ae:return Math.max(e,8)*Math.max(t,8)/2;case se:case ce:case le:case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case F:case de:case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Te:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ee:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case De:case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Me:case Ne:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function _o(e){switch(e){case d:case f:return{byteLength:1,components:1};case m:case p:case v:return{byteLength:2,components:1};case y:case b:return{byteLength:2,components:4};case g:case h:case _:return{byteLength:4,components:1};case S:case C:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?B(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function vo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function yo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Y={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
void main() {
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},X={common:{diffuse:{value:new J(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new G}},envmap:{envMap:{value:null},envMapRotation:{value:new G},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new G}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new G}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new G},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new G},normalScale:{value:new U(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new G},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new G}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new G}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new G}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new J(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new J(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0},uvTransform:{value:new G}},sprite:{diffuse:{value:new J(16777215)},opacity:{value:1},center:{value:new U(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}}},bo={basic:{uniforms:qi([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Y.meshbasic_vert,fragmentShader:Y.meshbasic_frag},lambert:{uniforms:qi([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new J(0)},envMapIntensity:{value:1}}]),vertexShader:Y.meshlambert_vert,fragmentShader:Y.meshlambert_frag},phong:{uniforms:qi([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new J(0)},specular:{value:new J(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Y.meshphong_vert,fragmentShader:Y.meshphong_frag},standard:{uniforms:qi([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new J(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag},toon:{uniforms:qi([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new J(0)}}]),vertexShader:Y.meshtoon_vert,fragmentShader:Y.meshtoon_frag},matcap:{uniforms:qi([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Y.meshmatcap_vert,fragmentShader:Y.meshmatcap_frag},points:{uniforms:qi([X.points,X.fog]),vertexShader:Y.points_vert,fragmentShader:Y.points_frag},dashed:{uniforms:qi([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Y.linedashed_vert,fragmentShader:Y.linedashed_frag},depth:{uniforms:qi([X.common,X.displacementmap]),vertexShader:Y.depth_vert,fragmentShader:Y.depth_frag},normal:{uniforms:qi([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Y.meshnormal_vert,fragmentShader:Y.meshnormal_frag},sprite:{uniforms:qi([X.sprite,X.fog]),vertexShader:Y.sprite_vert,fragmentShader:Y.sprite_frag},background:{uniforms:{uvTransform:{value:new G},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Y.background_vert,fragmentShader:Y.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new G}},vertexShader:Y.backgroundCube_vert,fragmentShader:Y.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Y.cube_vert,fragmentShader:Y.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Y.equirect_vert,fragmentShader:Y.equirect_frag},distance:{uniforms:qi([X.common,X.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Y.distance_vert,fragmentShader:Y.distance_frag},shadow:{uniforms:qi([X.lights,X.fog,{color:{value:new J(0)},opacity:{value:1}}]),vertexShader:Y.shadow_vert,fragmentShader:Y.shadow_frag}};bo.physical={uniforms:qi([bo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new G},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new G},clearcoatNormalScale:{value:new U(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new G},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new G},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new G},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new G},sheen:{value:0},sheenColor:{value:new J(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new G},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new G},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new G},transmissionSamplerSize:{value:new U},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new G},attenuationDistance:{value:0},attenuationColor:{value:new J(0)},specularColor:{value:new J(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new G},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new G},anisotropyVector:{value:new U},anisotropyMap:{value:null},anisotropyMapTransform:{value:new G}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag};var xo={r:0,b:0,g:0},So=new Zt,Co=new G;Co.set(-1,0,0,0,1,0,0,0,1);function wo(e,t,n,r,i,a){let o=new J(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new Qr(new Hi(1,1,1),new ea({name:`BackgroundCubeMaterial`,uniforms:Ki(bo.backgroundCube.uniforms),vertexShader:bo.backgroundCube.vertexShader,fragmentShader:bo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(So.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Co),l.material.toneMapped=K.getTransfer(i.colorSpace)!==Ve,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Qr(new Wi(2,2),new ea({name:`BackgroundMaterial`,uniforms:Ki(bo.background.uniforms),vertexShader:bo.background.vertexShader,fragmentShader:bo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=K.getTransfer(i.colorSpace)!==Ve,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(xo,Xi(e)),n.buffers.color.setClear(xo.r,xo.g,xo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function To(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Eo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Do(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(B(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&B(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&B(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Oo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Mr,s=new G,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ko=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Li(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Hi(5,5,5),i=new ea({name:`CubemapFromEquirect`,uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Qr(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=c),new Ka(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Ao=256,jo=3,Mo=20,No=256,Po=16,Fo=3,Io=new W,Lo=new J,Ro=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ka(1,10,null),this._boxMesh=new Qr(new Hi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Io}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Lo));let h=new Ka(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ao,Ct(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Ao:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=zo(e,!1,!1),n=Math.log2(e)-jo;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=zo(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Go()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Wo()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Vo(),this._integrationMaterial=Ho());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Po);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Fo)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(No*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Uo());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function zo(e,t,n){return new ko(e,{minFilter:u,generateMipmaps:t,type:v,colorSpace:ze,depthBuffer:n})}function Bo(e,t,n){return new ea({name:e,uniforms:t,vertexShader:Y.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Vo(){return Bo(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${No}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ho(){return Bo(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Po}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Uo(){return Bo(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Mo}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Wo(){return Bo(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Go(){return Bo(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ko(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new ko(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Ro(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Ro(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function qo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Qe(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Jo(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?hr:mr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Yo(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Xo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:V(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Zo(e,t,n){let r=new WeakMap,i=new Kt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Yt(h,p,m,u);g.type=_,g.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new U(p,m)},r.set(o,d);function y(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Qo(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var $o={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function es(e,t,n,r,i,a){let o=new Jt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Or;u.setAttribute(`position`,new gr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new gr([0,2,0,0,2,0],2));let d=new ta({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Qr(u,d),p=new Va(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,y=null,b=[],S=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<b.length;n++){let r=b[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){b=e,S=b.length>0&&b[0].isRenderPass===!0;let t=o.width,n=o.height;b.length>0&&s===null&&(s=new Jt(t,n,{type:v,depthBuffer:!1,stencilBuffer:!1}),c=new Jt(t,n,{type:v,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&b.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new zi(t,n),a===!0&&(l.format=O,l.type=x)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<b.length;e++){let i=b[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&b.length===0)return!1;if(y=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return S===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<b.length;i++){let a=b[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},K.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=$o[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(y),e.render(f,p),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var ts=new Gt,ns=new zi(1,1),rs=new Bi(1),is=new Yt,as=new Xt,os=new Li,ss=[],cs=[],ls=new Float32Array(16),us=new Float32Array(9),ds=new Float32Array(4);function fs(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ss[i];if(a===void 0&&(a=new Float32Array(i),ss[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ps(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ms(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function hs(e,t){let n=cs[t];n===void 0&&(n=new Int32Array(t),cs[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function gs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function _s(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ps(n,t))return;e.uniform2fv(this.addr,t),ms(n,t)}}function vs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ps(n,t))return;e.uniform3fv(this.addr,t),ms(n,t)}}function ys(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ps(n,t))return;e.uniform4fv(this.addr,t),ms(n,t)}}function bs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ps(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ms(n,t)}else{if(ps(n,r))return;ds.set(r),e.uniformMatrix2fv(this.addr,!1,ds),ms(n,r)}}function xs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ps(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ms(n,t)}else{if(ps(n,r))return;us.set(r),e.uniformMatrix3fv(this.addr,!1,us),ms(n,r)}}function Ss(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ps(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ms(n,t)}else{if(ps(n,r))return;ls.set(r),e.uniformMatrix4fv(this.addr,!1,ls),ms(n,r)}}function Cs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ws(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ps(n,t))return;e.uniform2iv(this.addr,t),ms(n,t)}}function Ts(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ps(n,t))return;e.uniform3iv(this.addr,t),ms(n,t)}}function Es(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ps(n,t))return;e.uniform4iv(this.addr,t),ms(n,t)}}function Ds(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Os(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ps(n,t))return;e.uniform2uiv(this.addr,t),ms(n,t)}}function ks(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ps(n,t))return;e.uniform3uiv(this.addr,t),ms(n,t)}}function As(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ps(n,t))return;e.uniform4uiv(this.addr,t),ms(n,t)}}function js(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Ms(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?js(ns):ts,n.setTexture2D(t||a,i)}function Ns(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||as,i)}function Ps(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?js(rs):os,n.setTextureCube(t||a,i)}function Fs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||is,i)}function Is(e){switch(e){case 5126:return gs;case 35664:return _s;case 35665:return vs;case 35666:return ys;case 35674:return bs;case 35675:return xs;case 35676:return Ss;case 5124:case 35670:return Cs;case 35667:case 35671:return ws;case 35668:case 35672:return Ts;case 35669:case 35673:return Es;case 5125:return Ds;case 36294:return Os;case 36295:return ks;case 36296:return As;case 35678:case 36198:case 36298:case 36306:case 35682:return Ms;case 35679:case 36299:case 36307:return Ns;case 35680:case 36300:case 36308:case 36293:return Ps;case 36289:case 36303:case 36311:case 36292:return Fs}}function Ls(e,t){e.uniform1fv(this.addr,t)}function Rs(e,t){let n=fs(t,this.size,2);e.uniform2fv(this.addr,n)}function zs(e,t){let n=fs(t,this.size,3);e.uniform3fv(this.addr,n)}function Bs(e,t){let n=fs(t,this.size,4);e.uniform4fv(this.addr,n)}function Vs(e,t){let n=fs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Hs(e,t){let n=fs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Us(e,t){let n=fs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ws(e,t){e.uniform1iv(this.addr,t)}function Gs(e,t){e.uniform2iv(this.addr,t)}function Ks(e,t){e.uniform3iv(this.addr,t)}function qs(e,t){e.uniform4iv(this.addr,t)}function Js(e,t){e.uniform1uiv(this.addr,t)}function Ys(e,t){e.uniform2uiv(this.addr,t)}function Xs(e,t){e.uniform3uiv(this.addr,t)}function Zs(e,t){e.uniform4uiv(this.addr,t)}function Qs(e,t,n){let r=this.cache,i=t.length,a=hs(n,i);ps(r,a)||(e.uniform1iv(this.addr,a),ms(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?js(ns):ts;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function $s(e,t,n){let r=this.cache,i=t.length,a=hs(n,i);ps(r,a)||(e.uniform1iv(this.addr,a),ms(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||as,a[e])}function ec(e,t,n){let r=this.cache,i=t.length,a=hs(n,i);ps(r,a)||(e.uniform1iv(this.addr,a),ms(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?js(rs):os;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function tc(e,t,n){let r=this.cache,i=t.length,a=hs(n,i);ps(r,a)||(e.uniform1iv(this.addr,a),ms(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||is,a[e])}function nc(e){switch(e){case 5126:return Ls;case 35664:return Rs;case 35665:return zs;case 35666:return Bs;case 35674:return Vs;case 35675:return Hs;case 35676:return Us;case 5124:case 35670:return Ws;case 35667:case 35671:return Gs;case 35668:case 35672:return Ks;case 35669:case 35673:return qs;case 5125:return Js;case 36294:return Ys;case 36295:return Xs;case 36296:return Zs;case 35678:case 36198:case 36298:case 36306:case 35682:return Qs;case 35679:case 36299:case 36307:return $s;case 35680:case 36300:case 36308:case 36293:return ec;case 36289:case 36303:case 36311:case 36292:return tc}}var rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Is(t.type)}},ic=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nc(t.type)}},ac=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},oc=/(\w+)(\])?(\[|\.)?/g;function sc(e,t){e.seq.push(t),e.map[t.id]=t}function cc(e,t,n){let r=e.name,i=r.length;for(oc.lastIndex=0;;){let a=oc.exec(r),o=oc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){sc(n,l===void 0?new rc(s,e,t):new ic(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ac(s),sc(n,e)),n=e}}}var lc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);cc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function uc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var dc=37297,fc=0;function pc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var mc=new G;function hc(e){K._getMatrix(mc,K.workingColorSpace,e);let t=`mat3( ${mc.elements.map(e=>e.toFixed(4))} )`;switch(K.getTransfer(e)){case Be:return[t,`LinearTransferOETF`];case Ve:return[t,`sRGBTransferOETF`];default:return B(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function gc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+pc(e.getShaderSource(t),r)}return i}function _c(e,t){let n=hc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var vc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function yc(e,t){let n=vc[t];return n===void 0?(B(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var bc=new W;function xc(){return K.getLuminanceCoefficients(bc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${bc.x.toFixed(4)}, ${bc.y.toFixed(4)}, ${bc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Sc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Tc).join(`
`)}function Cc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function wc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Tc(e){return e!==``}function Ec(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Dc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Oc=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(e){return e.replace(Oc,Ac)}function Ac(e,t){let n=Y[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return kc(n)}var jc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mc(e){return e.replace(jc,Nc)}function Nc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Pc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Fc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Ic(e){return Fc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Lc={302:`ENVMAP_MODE_REFRACTION`};function Rc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Lc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var zc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Bc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:zc[e.combine]||`ENVMAP_BLENDING_NONE`}function Vc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Ic(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Rc(n),d=Bc(n),f=Sc(n),p=Cc(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Tc).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Tc).join(`
`),g.length>0&&(g+=`
`)):(h=[Pc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Tc).join(`
`),g=[Pc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Y.tonemapping_pars_fragment,n.toneMapping===0?``:yc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Y.colorspace_pars_fragment,_c(`linearToOutputTexel`,n.outputColorSpace),xc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Tc).join(`
`)),o=kc(o),o=Ec(o,n),o=Dc(o,n),s=kc(s),s=Ec(s,n),s=Dc(s,n),o=Mc(o),s=Mc(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=uc(i,i.VERTEX_SHADER,v),x=uc(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=gc(i,b,`vertex`),n=gc(i,x,`fragment`);V(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):B(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new lc(i,m),w=wc(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,dc)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fc++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Hc=0,Uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Wc(e),t.set(e,n)),n}},Wc=class{constructor(e){this.id=Hc++,this.code=e,this.usedTimes=0}};function Gc(e){return e===1030||e===37490||e===36285}function Kc(e,t,n,r,i,a){let o=new ln,s=new Uc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&B(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=bo[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),ee=m.isInstancedMesh===!0,te=m.isBatchedMesh===!0,M=!!i.map,ne=!!i.matcap,N=!!b,re=N&&b.isPMREMTexture===!0,P=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,oe=!!i.normalMap,se=!!i.displacementMap,ce=!!i.emissiveMap,F=!!i.metalnessMap,le=!!i.roughnessMap,ue=i.anisotropy>0,de=i.clearcoat>0,fe=i.diffuseRoughness>0,pe=i.dispersion>0,me=i.retroreflectivity>0,he=i.iridescence>0,ge=i.sheen>0,_e=i.transmission>0,ve=ue&&!!i.anisotropyMap,ye=de&&!!i.clearcoatMap,be=de&&!!i.clearcoatNormalMap,xe=de&&!!i.clearcoatRoughnessMap,Se=fe&&!!i.diffuseRoughnessMap,Ce=he&&!!i.iridescenceMap,we=he&&!!i.iridescenceThicknessMap,Te=ge&&!!i.sheenColorMap,Ee=ge&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=_e&&!!i.transmissionMap,je=_e&&!!i.thicknessMap,Me=!!i.gradientMap,Ne=!!i.alphaMap,I=i.alphaTest>0,Pe=!!i.alphaHash,Fe=!!i.extensions,Ie=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let L=re?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Le={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:te,batchingColor:te&&m._colorsTexture!==null,instancing:ee,instancingColor:ee&&m.instanceColor!==null,instancingMorph:ee&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:K.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:M,matcap:ne,envMap:N,envMapMode:N&&b.mapping,envMapPMREM:re,envMapMaxLod:re?L.length-1:null,envMapSize:re?L[0].width:null,aoMap:P,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:oe&&i.normalMapType===1,normalMapTangentSpace:oe&&i.normalMapType===0,packedNormalMap:oe&&i.normalMapType===0&&Gc(i.normalMap.format),metalnessMap:F,roughnessMap:le,anisotropy:ue,anisotropyMap:ve,clearcoat:de,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,diffuseRoughness:fe,diffuseRoughnessMap:Se,dispersion:pe,retroreflection:me,iridescence:he,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:ge,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:_e,transmissionMap:Ae,thicknessMap:je,gradientMap:Me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ne,alphaTest:I,alphaHash:Pe,combine:i.combine,mapUv:M&&p(i.map.channel),aoMapUv:P&&p(i.aoMap.channel),lightMapUv:ie&&p(i.lightMap.channel),bumpMapUv:ae&&p(i.bumpMap.channel),normalMapUv:oe&&p(i.normalMap.channel),displacementMapUv:se&&p(i.displacementMap.channel),emissiveMapUv:ce&&p(i.emissiveMap.channel),metalnessMapUv:F&&p(i.metalnessMap.channel),roughnessMapUv:le&&p(i.roughnessMap.channel),anisotropyMapUv:ve&&p(i.anisotropyMap.channel),clearcoatMapUv:ye&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Se&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:Ce&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&p(i.sheenRoughnessMap.channel),specularMapUv:De&&p(i.specularMap.channel),specularColorMapUv:Oe&&p(i.specularColorMap.channel),specularIntensityMapUv:ke&&p(i.specularIntensityMap.channel),transmissionMapUv:Ae&&p(i.transmissionMap.channel),thicknessMapUv:je&&p(i.thicknessMap.channel),alphaMapUv:Ne&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(oe||ue),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(M||Ne),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&oe===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:M&&i.map.isVideoTexture===!0&&K.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&K.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Fe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Fe&&i.extensions.multiDraw===!0||te)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=bo[t];n=Zi.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Vc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function qc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Jc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Yc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Xc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Jc),r.length>1&&r.sort(t||Yc),i.length>1&&i.sort(t||Yc)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Zc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Xc,e.set(t,[i])):n>=r.length?(i=new Xc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Qc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new W,color:new J};break;case`SpotLight`:n={position:new W,direction:new W,color:new J,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new W,color:new J,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new W,skyColor:new J,groundColor:new J};break;case`RectAreaLight`:n={color:new J,position:new W,halfWidth:new W,halfHeight:new W}}return e[t.id]=n,n}}}function $c(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var el=0;function tl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function nl(e){let t=new Qc,n=$c(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new W);let i=new W,a=new Zt,o=new Zt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(tl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=el++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function rl(e){let t=new nl(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function il(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new rl(e),t.set(n,[a])):r>=i.length?(a=new rl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var al=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ol=`uniform sampler2D shadow_pass;
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
}`,sl=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],cl=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],ll=new Zt,ul=new W,dl=new W;function fl(e,t,n){let r=new mi,i=new U,o=new U,s=new Kt,l=new ra,u=new ia,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new U},radius:{value:4}},vertexShader:al,fragmentShader:ol}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let y=new Or;y.setAttribute(`position`,new pr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Qr(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(B(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){B(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let y=p.getFrameExtents();i.multiply(y),o.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(o.x=Math.floor(f/y.x),i.x=o.x*y.x,p.mapSize.x=o.x),i.y>f&&(o.y=Math.floor(f/y.y),i.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){B(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Jt(i.x,i.y,{format:j,type:v,minFilter:c,magFilter:c,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new zi(i.x,i.y,_),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=D,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a}else d.isPointLight?(p.map=new ko(i.x),p.map.depthTexture=new Bi(i.x,g)):(p.map=new Jt(i.x,i.y),p.map.depthTexture=new zi(i.x,i.y,g)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=D,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=c,p.map.depthTexture.magFilter=c):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==i.x||p.map.height!==i.y)&&p.map.setSize(i.x,i.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);let S=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),ul.setFromMatrixPosition(d.matrixWorld),e.position.copy(ul),dl.copy(e.position),dl.add(sl[t]),e.up.copy(cl[t]),e.lookAt(dl),e.updateMatrixWorld(),n.makeTranslation(-ul.x,-ul.y,-ul.z),ll.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(ll,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);s.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(s)}r=p.getFrustum(t),T(n,l,i,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let a=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null?n.mapPass=new Jt(i.x,i.y,{format:j,type:v}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,b,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)T(l[e],i,a,o,s,c)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function pl(e,t){function n(){let t=!1,n=new Kt,r=null,i=new Kt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?F(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=et[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?F(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new J(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,M=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),te=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(ne)[1]),te=M>=1);let N=null,re={},P=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new Kt().fromArray(P),oe=new Kt().fromArray(ie);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),F(e.DEPTH_TEST),o.setFunc(3),_e(!1),ve(1),F(e.CULL_FACE),he(0);function F(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function le(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ue(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function de(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function fe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};pe[103]=e.MIN,pe[104]=e.MAX;let me={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function he(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(le(e.BLEND),g=!1);else if(g===!1&&(F(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:V(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:V(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:V(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:V(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(pe[n],pe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(me[r],me[i],me[o],me[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ge(t,n){t.side===2?le(e.CULL_FACE):F(e.CULL_FACE);let r=t.side===1;n&&(r=!r),_e(r),t.blending===1&&t.transparent===!1?he(0):he(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?F(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ve(t){t===0?le(e.CULL_FACE):(F(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ye(t){t!==k&&(te&&e.lineWidth(t),k=t)}function be(t,n,r){t?(F(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):le(e.POLYGON_OFFSET_FILL)}function xe(t){t?F(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function Se(t){t===void 0&&(t=e.TEXTURE0+ee-1),N!==t&&(e.activeTexture(t),N=t)}function Ce(t,n,r){r===void 0&&(r=N===null?e.TEXTURE0+ee-1:N);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(N!==r&&(e.activeTexture(r),N=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function we(){let t=re[N];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ee(){try{e.compressedTexImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function De(){try{e.texSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Oe(){try{e.texSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function je(){try{e.texStorage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Me(){try{e.texStorage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ne(){try{e.texImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function I(){try{e.texImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Pe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Fe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ie(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function L(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function Le(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function R(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function z(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},N=null,re={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new J(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:F,disable:le,bindFramebuffer:ue,drawBuffers:de,useProgram:fe,setBlending:he,setMaterial:ge,setFlipSided:_e,setCullFace:ve,setLineWidth:ye,setPolygonOffset:be,setScissorTest:xe,activeTexture:Se,bindTexture:Ce,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:Ee,texImage2D:Ne,texImage3D:I,pixelStorei:Fe,getParameter:Pe,updateUBOMapping:Le,uniformBlockBinding:R,texStorage2D:je,texStorage3D:Me,texSubImage2D:De,texSubImage3D:Oe,compressedTexSubImage2D:ke,compressedTexSubImage3D:Ae,scissor:Ie,viewport:L,reset:z}}function ml(e,t,d,f,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new U,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function E(e,t){return T?new OffscreenCanvas(e,t):qe(`canvas`)}function D(e,t,n){let r=1,i=z(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=E(n,a));let o=t?E(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),B(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&B(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function k(e){return e.generateMipmaps}function A(t){e.generateMipmap(t)}function j(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function ee(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];B(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||B(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Be:K.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function te(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,B(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function M(e,t){return k(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ne(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function N(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function re(e){ie(e.target)}function P(e){ae(e.target)}function ie(e){e.removeEventListener(`dispose`,re),N(e),se(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function ae(e){e.removeEventListener(`dispose`,P),N(e),F(e)}function oe(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?ae(t):ie(t))}C.clear(),b.clear()}function se(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&ce(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function ce(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function F(t){let n=f.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let r=t.depthTexture;if(r&&r.renderTarget===t&&ie(r),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=f.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(i[t])}f.remove(t)}let le=0;function ue(){le=0}function de(){return le}function fe(e){le=e}function pe(){let e=le;return e>=p.maxTextures&&B(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),le+=1,e}function me(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function he(t,n){let r=f.get(t);if(t.isVideoTexture&&Le(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)B(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)B(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ee(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function ge(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?Ee(r,t,n):(t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null),d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n))}function _e(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?Ee(r,t,n):d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function ve(t,n){let r=f.get(t);t.version>0&&r.__version!==t.version?De(r,t,n):d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let ye={[n]:e.REPEAT,[r]:e.CLAMP_TO_EDGE,[i]:e.MIRRORED_REPEAT},be={[a]:e.NEAREST,[o]:e.NEAREST_MIPMAP_NEAREST,[s]:e.NEAREST_MIPMAP_LINEAR,[c]:e.LINEAR,[l]:e.LINEAR_MIPMAP_NEAREST,[u]:e.LINEAR_MIPMAP_LINEAR},xe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function Se(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&B(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ye[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ye[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ye[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,be[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,be[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,xe[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||f.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,p.getMaxAnisotropy())),f.get(r).__currentAnisotropy=r.anisotropy}}}function Ce(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,re),ne(n));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=me(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ce(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function we(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Te(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=we(r.start,n.width,4),c=we(t.start,n.width,4);r.start<=i+1&&s===c&&we(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function Ee(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=Ce(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=K.getPrimaries(K.workingColorSpace),r=n.colorSpace===``?null:K.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=D(n.image,!1,p.maxTextureSize);t=R(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=ee(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);Se(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=M(n,t);if(n.isDepthTexture)u=te(n.format===O,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&Te(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023){if(c!==null){if(g){if(v){if(n.layerUpdates.size>0){let t=go(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0)}else B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data);n.layerUpdates.size>0&&n.clearLayerUpdates()}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}}else if(n.isDataArrayTexture){if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v){if(n.layerUpdates.size>0){let r=go(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data)}else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_){if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=z(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=z(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);k(n)&&n.mipmapsAutoUpdate===!0&&A(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function De(t,n,r){if(n.image.length!==6)return;let i=Ce(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=K.getPrimaries(K.workingColorSpace),s=n.colorSpace===``?null:K.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=D(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=R(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=ee(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=M(n,h);Se(e.TEXTURE_CUBE_MAP,n);let C;if(n.isDepthTexture){if(v=te(n.format===O,n.type),b){if(y)d.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=z(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}k(n)&&n.mipmapsAutoUpdate===!0&&A(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Oe(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=ee(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),L(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,Ie(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function ke(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=te(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;L(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ie(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ie(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=ee(a.internalFormat,o,s,a.normalized,a.colorSpace);L(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ie(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ie(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ae(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);a.__renderTarget=n;let o=i?n.depthTexture.image[0]:n.depthTexture.image;a.__webglTexture&&o.width===n.width&&o.height===n.height||(o.width=n.width,o.height=n.height,n.depthTexture.needsUpdate=!0),i?ve(n.depthTexture,0):he(n.depthTexture,0);let s=a.__webglTexture,c=Ie(n),l=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,u=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)L(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,u,l,s,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,u,l,s,0);else if(n.depthTexture.format===1027)L(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,u,l,s,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,u,l,s,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function je(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)for(let e=0;e<6;e++)Ae(n.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Ae(n.__webglFramebuffer[0],t,0):Ae(n.__webglFramebuffer,t,0)}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),ke(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),ke(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}d.bindFramebuffer(e.FRAMEBUFFER,null)}function Me(t,n,r){let i=f.get(t);n!==void 0&&Oe(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&je(t)}function Ne(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,P),ne(t);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&L(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=ee(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=Ie(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),ke(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),Se(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)Oe(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else Oe(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);k(n)?A(e.TEXTURE_CUBE_MAP):n.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,n.mipmaps.length-1),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),Se(s,i),Oe(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),k(i)&&A(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),Se(a,n),n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)Oe(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else Oe(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);k(n)?A(a):n.mipmaps.length>0&&e.texParameteri(a,e.TEXTURE_MAX_LEVEL,n.mipmaps.length-1),d.unbindTexture()}t.depthBuffer&&je(t)}function I(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(k(r)&&r.mipmapsAutoUpdate===!0){let t=j(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),A(t),d.unbindTexture()}}}let Pe=[];function Fe(t){if(t.samples>0){if(L(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(Pe.length=0,Pe.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Pe.push(o),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Pe))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ie(e){return Math.min(p.maxSamples,e.samples)}function L(e){let n=f.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Le(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function R(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(K.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&B(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):V(`WebGLTextures: Unsupported texture color space:`,n)),t}function z(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=pe,this.resetTextureUnits=ue,this.getTextureUnits=de,this.setTextureUnits=fe,this.setTexture2D=he,this.setTexture2DArray=ge,this.setTexture3D=_e,this.setTextureCube=ve,this.rebindTextures=Me,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=L,this.dispose=oe}function hl(e,t){function n(n,r=``){let i,a=K.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var gl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_l=`
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

}`,vl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Vi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ea({vertexShader:gl,fragmentShader:_l,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qr(new Wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yl=class extends tt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,f=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,_=new vl,v={},y=t.getContextAttributes(),b=null,S=null,C=[],w=[],T=new U,k=null,A=null,j=new Ra;j.viewport=new Kt;let ee=new Ra;ee.viewport=new Kt;let te=[j,ee],M=new qa,ne=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Dn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Dn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Dn,C[e]=t),t.getHandSpace()};function re(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function P(){r.removeEventListener(`select`,re),r.removeEventListener(`selectstart`,re),r.removeEventListener(`selectend`,re),r.removeEventListener(`squeeze`,re),r.removeEventListener(`squeezestart`,re),r.removeEventListener(`squeezeend`,re),r.removeEventListener(`end`,P),r.removeEventListener(`inputsourceschange`,ie);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}ne=null,N=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(b),p=null,f=null,u=null,r=null,S=null,F.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(T.width,T.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,re),r.addEventListener(`selectstart`,re),r.addEventListener(`selectend`,re),r.addEventListener(`squeeze`,re),r.addEventListener(`squeezestart`,re),r.addEventListener(`squeezeend`,re),r.addEventListener(`end`,P),r.addEventListener(`inputsourceschange`,ie),y.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?O:D,a=y.stencil?x:g);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),f=u.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Jt(f.textureWidth,f.textureHeight,{format:E,type:d,depthTexture:new zi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Jt(p.framebufferWidth,p.framebufferHeight,{format:E,type:d,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),F.setContext(r),F.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ie(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function ae(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),M.near=ee.near=j.near=t,M.far=ee.far=j.far=n,(ne!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),ne=M.near,N=M.far),M.layers.mask=e.layers.mask|6,j.layers.mask=M.layers.mask&-5,ee.layers.mask=M.layers.mask&-3;let i=e.parent,a=M.cameras;ae(M,i);for(let e=0;e<a.length;e++)ae(a[e],i);M.projectionMatrix.copy(j.projectionMatrix),M.projectionMatrixInverse.copy(j.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),oe(e,M,i)};function oe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=at*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)},this.getCameraTexture=function(e){return v[e]};let se=null;function ce(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==M.cameras.length&&(M.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=te[n];o===void 0&&(o=new Ra,o.layers.enable(n),o.viewport=new Kt,te[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),i===!0&&M.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Vi,v[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}se&&se(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let F=new vo;F.setAnimationLoop(ce),this.setAnimationLoop=function(e){se=e},this.dispose=function(){}}},bl=new Zt,xl=new G;xl.set(-1,0,0,0,1,0,0,0,1);function Sl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Xi(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(bl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(xl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Cl(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?B(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):B(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var wl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Tl=null;function El(){return Tl===null&&(Tl=new ti(wl,16,16,j,v),Tl.name=`DFG_LUT`,Tl.minFilter=c,Tl.magFilter=c,Tl.wrapS=r,Tl.wrapT=r,Tl.generateMipmaps=!1,Tl.needsUpdate=!0),Tl}var Dl=class{constructor(e={}){let{canvas:t=Je(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:h=d}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);_=n.getContextAttributes().alpha}else _=a;let S=h,C=new Set([te,ee,A]),w=new Set([d,g,m,x,y,b]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},O=null,k=null,j=[],M=[],ne=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,re=!1,P=null,ie=null,ae=null,oe=null;this._outputColorSpace=Re;let se=0,ce=0,F=null,le=-1,ue=null,de=new Kt,fe=new Kt,pe=null,me=new J(0),he=0,ge=t.width,_e=t.height,ve=1,ye=null,be=null,xe=new Kt(0,0,ge,_e),Se=new Kt(0,0,ge,_e),Ce=!1,we=new mi,Te=new gi,Ee=!1,De=!1,Oe=new Zt,ke=new W,Ae=new Kt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Ne(){return F===null?ve:1}let I=n;function Pe(e,n){return t.getContext(e,n)}let Fe,Ie,L,Le,R,z,ze,Be,Ve,He,Ue,Ge,Ke,qe,Ye,Ze,Qe,et,tt,nt,rt,it,at;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,st,!1),t.addEventListener(`webglcontextrestored`,ct,!1),t.addEventListener(`webglcontextcreationerror`,lt,!1),I===null){let t=`webgl2`;if(I=Pe(t,e),I===null)throw Pe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ot()}catch(e){throw t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),V(`WebGLRenderer: `+e.message),e}function ot(){Fe=new qo(I),Fe.init(),rt=new hl(I,Fe),Ie=new Do(I,Fe,e,rt),L=new pl(I,Fe),Ie.reversedDepthBuffer&&p&&L.buffers.depth.setReversed(!0),ie=I.createFramebuffer(),ae=I.createFramebuffer(),oe=I.createFramebuffer(),Le=new Xo(I),R=new qc,z=new ml(I,Fe,L,R,Ie,rt,Le),ze=new Ko(N),Be=new yo(I),it=new To(I,Be),Ve=new Jo(I,Be,Le,it),He=new Qo(I,Ve,Be,it,Le),et=new Zo(I,Ie,z),Ye=new Oo(R),Ue=new Kc(N,ze,Fe,Ie,it,Ye),Ge=new Sl(N,R),Ke=new Zc,qe=new il(Fe),Qe=new wo(N,ze,L,He,_,s),Ze=new fl(N,He,Ie),at=new Cl(I,Le,Ie,L),tt=new Eo(I,Fe,Le),nt=new Yo(I,Fe,Le),Le.programs=Ue.programs,N.capabilities=Ie,N.extensions=Fe,N.properties=R,N.renderLists=Ke,N.shadowMap=Ze,N.state=L,N.info=Le}S!==1009&&(ne=new es(S,t.width,t.height,o,r,i));let H=new yl(N,I);this.xr=H,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(e){e!==void 0&&(ve=e,this.setSize(ge,_e,!1))},this.getSize=function(e){return e.set(ge,_e)},this.setSize=function(e,n,r=!0){H.isPresenting?B(`WebGLRenderer: Can't change size while VR device is presenting.`):(ge=e,_e=n,t.width=Math.floor(e*ve),t.height=Math.floor(n*ve),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ne!==null&&ne.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ge*ve,_e*ve).floor()},this.setDrawingBufferSize=function(e,n,r){ge=e,_e=n,ve=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)V(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){B(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ne.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(de)},this.getViewport=function(e){return e.copy(xe)},this.setViewport=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),L.viewport(de.copy(xe).multiplyScalar(Ne()).round())},this.getScissor=function(e){return e.copy(Se)},this.setScissor=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),L.scissor(fe.copy(Se).multiplyScalar(Ne()).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(e){L.setScissorTest(Ce=e)},this.setOpaqueSort=function(e){ye=e},this.setTransparentSort=function(e){be=e},this.getClearColor=function(e){return e.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(F!==null){let t=F.texture.format;e=C.has(t)}if(e){let e=F.texture.type,t=w.has(e),n=Qe.getClearColor(),r=Qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,I.clearBufferuiv(I.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,I.clearBufferiv(I.COLOR,0,E))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),P=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),Qe.dispose(),Ke.dispose(),qe.dispose(),z.dispose(),R.dispose(),ze.dispose(),He.dispose(),Ve.dispose(),it.dispose(),at.dispose(),Ue.dispose(),H.dispose(),H.removeEventListener(`sessionstart`,gt),H.removeEventListener(`sessionend`,_t),vt.stop()};function st(e){e.preventDefault(),Xe(`WebGLRenderer: Context Lost.`),re=!0}function ct(){Xe(`WebGLRenderer: Context Restored.`),re=!1;let e=Le.autoReset,t=Ze.enabled,n=Ze.autoUpdate,r=Ze.needsUpdate,i=Ze.type;ot(),Le.autoReset=e,Ze.enabled=t,Ze.autoUpdate=n,Ze.needsUpdate=r,Ze.type=i}function lt(e){V(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ut(e){let t=e.target;t.removeEventListener(`dispose`,ut),dt(t)}function dt(e){ft(e),R.remove(e)}function ft(e){let t=R.get(e).programs;t!==void 0&&(t.forEach(function(e){Ue.releaseProgram(e)}),e.isShaderMaterial&&Ue.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=je);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=U(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;it.setup(i,r,s,n,c);let h,g=tt;if(c!==null&&(h=Be.get(c),g=nt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*Ne()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*Ne()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh){if(Fe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Be.get(c).bytesPerElement:1,o=R.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function pt(e,t,n,r){P!==null&&e.isNodeMaterial&&P.setObject(r,e),Ee===!0&&Ye.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,r),e.side=0,e.needsUpdate=!0,Tt(e,t,r),e.side=2):Tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),P!==null&&P.renderStart(e,t,n),k=qe.get(n),k.init(t),M.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),P!==null&&P.updateLights(k.state.lightsArray),De=this.localClippingEnabled,Ee=Ye.init(this.clippingPlanes,De),Ee===!0&&Ye.setGlobalState(this.clippingPlanes,t),P!==null&&Ze.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];pt(o,n,t,e),r.add(o)}else pt(i,n,t,e),r.add(i)}}),k=M.pop(),P!==null&&P.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=R.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Fe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let mt=null;function ht(e){mt&&mt(e)}function gt(){vt.stop()}function _t(){vt.start()}let vt=new vo;vt.setAnimationLoop(ht),typeof self<`u`&&vt.setContext(self),this.setAnimationLoop=function(e){mt=e,H.setAnimationLoop(e),e===null?vt.stop():vt.start()},H.addEventListener(`sessionstart`,gt),H.addEventListener(`sessionend`,_t),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){V(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(re===!0)return;P!==null&&P.renderStart(e,t);let n=H.enabled===!0&&H.isPresenting===!0,r=ne!==null&&(F===null||n)&&ne.begin(N,F);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(ne===null||ne.isCompositing()===!1)&&(H.cameraAutoUpdate===!0&&H.updateCamera(t),t=H.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,F),k=qe.get(e,M.length),k.init(t),k.state.textureUnits=z.getTextureUnits(),M.push(k),Oe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Te.setFromArrayCamera(t):we.setFromProjectionMatrix(Oe,We,t.reversedDepth),De=this.localClippingEnabled,Ee=Ye.init(this.clippingPlanes,De),O=Ke.get(e,j.length),O.init(),j.push(O),this.info.render.frame++,H.enabled===!0&&H.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&yt(e,t,-1/0,N.sortObjects)}yt(e,t,0,N.sortObjects),O.finish(),P!==null&&P.updateLights(k.state.lightsArray),N.sortObjects===!0&&O.sort(ye,be),Me=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Me&&Qe.addToRenderList(O,e),this.info.autoReset===!0&&this.info.reset(),Ee===!0&&Ye.beginShadows();let i=k.state.shadowsArray;if(Ze.render(i,e,t),Ee===!0&&Ye.endShadows(),(r&&ne.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];xt(n,r,e,a)}Me&&Qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];bt(O,e,n,n.viewport)}}else r.length>0&&xt(n,r,e,t),Me&&Qe.render(e),bt(O,e,t)}F!==null&&ce===0&&(z.updateMultisampleRenderTarget(F),z.updateRenderTargetMipmap(F)),r&&ne.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),it.resetDefaultState(),le=-1,ue=null,M.pop(),M.length>0?(k=M[M.length-1],z.setTextureUnits(k.state.textureUnits),Ee===!0&&Ye.setGlobalState(N.clippingPlanes,k.state.camera)):k=null,j.pop(),O=j.length>0?j[j.length-1]:null,P!==null&&P.renderEnd()};function yt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Te:we;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Ae.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Oe);let i=He.update(e),a=e.material;a.visible&&O.push(e,i,a,n,Ae.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Te:we;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=He.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ae.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ae.copy(e.boundingSphere.center)),Ae.applyMatrix4(e.matrixWorld).applyMatrix4(Oe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,Ae.z,s,t)}}else a.visible&&O.push(e,i,a,n,Ae.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)yt(i[e],t,n,r)}function bt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Ee===!0&&Ye.setGlobalState(N.clippingPlanes,n),r&&L.viewport(de.copy(r)),i.length>0&&St(i,t,n),a.length>0&&St(a,t,n),o.length>0&&St(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function xt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Fe.has(`EXT_color_buffer_half_float`)||Fe.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new Jt(1,1,{generateMipmaps:!0,type:e?v:d,minFilter:u,samples:Math.max(4,Ie.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:K.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||de;a.setSize(o.z*N.transmissionResolutionScale,o.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),c=N.getActiveCubeFace(),l=N.getActiveMipmapLevel();N.setRenderTarget(a),N.getClearColor(me),he=N.getClearAlpha(),he<1&&N.setClearColor(16777215,.5),N.clear(),Me&&Qe.render(n);let f=N.toneMapping;N.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Ee===!0&&Ye.setGlobalState(N.clippingPlanes,r),St(e,n,r),z.updateMultisampleRenderTarget(a),z.updateRenderTargetMipmap(a),Fe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ct(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(z.updateMultisampleRenderTarget(a),z.updateRenderTargetMipmap(a))}N.setRenderTarget(s,c,l),N.setClearColor(me,he),p!==void 0&&(r.viewport=p),N.toneMapping=f}function St(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ct(o,t,n,s,l,c)}}function Ct(e,t,n,r,i,a){P!==null&&i.isNodeMaterial&&P.setObject(e,i),e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function wt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Tt(e,t,n){t.isScene!==!0&&(t=je);let r=R.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=Ue.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=Ue.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ze.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ut),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ot(e,s),d}else s.uniforms=Ue.getUniforms(e),P!==null&&e.isNodeMaterial&&P.build(e,n,s),e.onBeforeCompile(s,N),d=Ue.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ye.uniform),Ot(e,s),r.needsLights=At(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=wt(k.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Et(e,t,n,r,i){let a=R.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Tt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=lc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ot(e,t){let n=R.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function U(e,t,n,r,i){t.isScene!==!0&&(t=je),z.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=F===null?N.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:K.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ze.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=R.get(r),y=k.state.lights;if(Ee===!0&&(De===!0||e!==ue)){let t=e===ue&&r.id===le;Ye.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ye.numPlanes||v.numIntersection!==Ye.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===wt(k.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?Et(r,t,i,s,h):Tt(r,t,i),P&&r.isNodeMaterial&&P.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(L.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==le&&(le=r.id,w=!0),C||ue!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(I,`projectionMatrix`,e.projectionMatrix),E.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(I,ke.setFromMatrixPosition(e.matrixWorld)),Ie.logarithmicDepthBuffer&&E.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),ue!==e&&(ue=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(I,`sunShadowMap`,y.state.sunShadowMap,z),y.state.directionalShadowMap.length>0&&E.setValue(I,`directionalShadowMap`,y.state.directionalShadowMap,z),y.state.spotShadowMap.length>0&&E.setValue(I,`spotShadowMap`,y.state.spotShadowMap,z),y.state.pointShadowMap.length>0&&E.setValue(I,`pointShadowMap`,y.state.pointShadowMap,z)),i.isSkinnedMesh){E.setOptional(I,i,`bindMatrix`),E.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(I,`boneTexture`,e.boneTexture,z))}i.isBatchedMesh&&(E.setOptional(I,i,`batchingTexture`),E.setValue(I,`batchingTexture`,i._matricesTexture,z),E.setOptional(I,i,`batchingIdTexture`),E.setValue(I,`batchingIdTexture`,i._indirectTexture,z),E.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(I,`batchingColorTexture`,i._colorsTexture,z));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&et.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(I,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=El()),w){if(E.setValue(I,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&kt(O,T),a&&r.fog===!0&&Ge.refreshFogUniforms(O,a),Ge.refreshMaterialUniforms(O,r,ve,_e,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of k.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}lc.upload(I,Dt(v),O,z)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(lc.upload(I,Dt(v),O,z),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(I,`center`,i.center),E.setValue(I,`modelViewMatrix`,i.modelViewMatrix),E.setValue(I,`normalMatrix`,i.normalMatrix),E.setValue(I,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];at.update(n,S),at.bind(n,S)}}return S}function kt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function At(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(e,t,n){let r=R.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),R.get(e.texture).__webglTexture=t,R.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=R.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){F=e,se=t,ce=n;let r=null,i=!1,a=!1;if(e){let o=R.get(e);if(o.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(I.FRAMEBUFFER,o.__webglFramebuffer),de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest,L.viewport(de),L.scissor(fe),L.setScissorTest(pe),le=-1;return}if(o.__webglFramebuffer===void 0)z.setupRenderTarget(e);else if(o.__hasExternalTextures)z.rebindTextures(e,R.get(e.texture).__webglTexture,R.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&R.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);z.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=R.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&z.useMultisampledRTT(e)===!1?R.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest}else de.copy(xe).multiplyScalar(ve).floor(),fe.copy(Se).multiplyScalar(ve).floor(),pe=Ce;if(n!==0&&(r=ie),L.bindFramebuffer(I.FRAMEBUFFER,r)&&L.drawBuffers(e,r),L.viewport(de),L.scissor(fe),L.setScissorTest(pe),i){let r=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=R.get(e.textures[t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}le=-1};function jt(e){let t=R.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ie.textureFormatReadable(e.format),t.__typeReadable=Ie.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){L.bindFramebuffer(I.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let u=jt(o);if(u.__formatReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&I.readPixels(t,n,r,i,rt.convert(c),rt.convert(l),a)}finally{let e=F===null?null:R.get(F).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(I.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let d=jt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),I.readPixels(t,n,r,i,rt.convert(l),rt.convert(u),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let p=F===null?null:R.get(F).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,p);let m=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await $e(I,m,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(f),I.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;z.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=rt.convert(t.format),_=rt.convert(t.type),v;t.isData3DTexture?(z.setTexture3D(t,0),v=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(z.setTexture2DArray(t,0),v=I.TEXTURE_2D_ARRAY):(z.setTexture2D(t,0),v=I.TEXTURE_2D),L.activeTexture(I.TEXTURE0),L.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let y=L.getParameter(I.UNPACK_ROW_LENGTH),b=L.getParameter(I.UNPACK_IMAGE_HEIGHT),x=L.getParameter(I.UNPACK_SKIP_PIXELS),S=L.getParameter(I.UNPACK_SKIP_ROWS),C=L.getParameter(I.UNPACK_SKIP_IMAGES);L.pixelStorei(I.UNPACK_ROW_LENGTH,h.width),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,h.height),L.pixelStorei(I.UNPACK_SKIP_PIXELS,l),L.pixelStorei(I.UNPACK_SKIP_ROWS,u),L.pixelStorei(I.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=R.get(e),r=R.get(t),h=R.get(n.__renderTarget),g=R.get(r.__renderTarget);L.bindFramebuffer(I.READ_FRAMEBUFFER,h.__webglFramebuffer),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(e).__webglTexture,i,d+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(t).__webglTexture,a,m+n)),I.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,I.DEPTH_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||R.has(e)){let n=R.get(e),r=R.get(t);L.bindFramebuffer(I.READ_FRAMEBUFFER,ae),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,oe);for(let e=0;e<c;e++)w?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,i),T?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),i===0?T?I.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):I.copyTexSubImage2D(v,a,f,p,l,u,o,s):I.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,I.COLOR_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h);L.pixelStorei(I.UNPACK_ROW_LENGTH,y),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,b),L.pixelStorei(I.UNPACK_SKIP_PIXELS,x),L.pixelStorei(I.UNPACK_SKIP_ROWS,S),L.pixelStorei(I.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&I.generateMipmap(v),L.unbindTexture()},this.initRenderTarget=function(e){R.get(e).__webglFramebuffer===void 0&&z.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?z.setTextureCube(e,0):e.isData3DTexture?z.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?z.setTexture2DArray(e,0):z.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){se=0,ce=0,F=null,L.reset(),it.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return We}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=K._getDrawingBufferColorSpace(e),t.unpackColorSpace=K._getUnpackColorSpace()}},Ol={type:`change`},kl={type:`start`},Al={type:`end`},jl=new zr,Ml=new Mr,Nl=Math.cos(70*Ot.DEG2RAD),Pl=new W,Fl=2*Math.PI,Il={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ll=1e-6,Rl=class extends ho{constructor(n,r=null){super(n,r),this.state=Il.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:e.ROTATE,MIDDLE:e.DOLLY,RIGHT:e.PAN},this.touches={ONE:t.ROTATE,TWO:t.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new kt,this._lastTargetPosition=new W,this._quat=new kt().setFromUnitVectors(n.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new po,this._sphericalDelta=new po,this._scale=1,this._panOffset=new W,this._rotateStart=new U,this._rotateEnd=new U,this._rotateDelta=new U,this._panStart=new U,this._panEnd=new U,this._panDelta=new U,this._dollyStart=new U,this._dollyEnd=new U,this._dollyDelta=new U,this._dollyDirection=new W,this._mouse=new U,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Bl.bind(this),this._onPointerDown=zl.bind(this),this._onPointerUp=Vl.bind(this),this._onContextMenu=Jl.bind(this),this._onMouseWheel=Wl.bind(this),this._onKeyDown=Gl.bind(this),this._onTouchStart=Kl.bind(this),this._onTouchMove=ql.bind(this),this._onMouseDown=Hl.bind(this),this._onMouseMove=Ul.bind(this),this._interceptControlDown=Yl.bind(this),this._interceptControlUp=Xl.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=Il.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ol),this.update(),this.state=Il.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Pl.copy(t).sub(this.target),Pl.applyQuaternion(this._quat),this._spherical.setFromVector3(Pl),this.autoRotate&&this.state===Il.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Fl:n>Math.PI&&(n-=Fl),r<-Math.PI?r+=Fl:r>Math.PI&&(r-=Fl),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(Pl.setFromSpherical(this._spherical),Pl.applyQuaternion(this._quatInverse),t.copy(this.target).add(Pl),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Pl.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new W(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new W(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Pl.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(jl.origin.copy(this.object.position),jl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(jl.direction))<Nl?this.object.lookAt(this.target):(Ml.setFromNormalAndCoplanarPoint(this.object.up,this.target),jl.intersectPlane(Ml,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>Ll||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ll||this._lastTargetPosition.distanceToSquared(this.target)>Ll?(this.dispatchEvent(Ol),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Fl/60/60*this.autoRotateSpeed:Fl/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Pl.setFromMatrixColumn(t,0),Pl.multiplyScalar(-e),this._panOffset.add(Pl)}_panUp(e,t){this.screenSpacePanning===!0?Pl.setFromMatrixColumn(t,1):(Pl.setFromMatrixColumn(t,0),Pl.crossVectors(this.object.up,Pl)),Pl.multiplyScalar(e),this._panOffset.add(Pl)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Pl.copy(r).sub(this.target);let i=Pl.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Fl*this._rotateDelta.x/t.clientHeight),this._rotateUp(Fl*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Fl*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Fl*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Fl*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Fl*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Fl*this._rotateDelta.x/t.clientHeight),this._rotateUp(Fl*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new U,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function zl(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),this._isTrackingPointer(e)||(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function Bl(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function Vl(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Al),this.state=Il.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function Hl(t){let n;switch(t.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Il.DOLLY;break;case e.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Il.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Il.ROTATE}break;case e.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Il.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Il.PAN}break;default:this.state=Il.NONE}this.state!==Il.NONE&&this.dispatchEvent(kl)}function Ul(e){switch(this.state){case Il.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Il.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Il.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function Wl(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===Il.NONE&&(e.preventDefault(),this.dispatchEvent(kl),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Al))}function Gl(e){this.enabled!==!1&&this._handleKeyDown(e)}function Kl(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case t.ROTATE:if(this.enableRotate===!1){this.state=Il.NONE;break}this._handleTouchStartRotate(e),this.state=Il.TOUCH_ROTATE;break;case t.PAN:if(this.enablePan===!1){this.state=Il.NONE;break}this._handleTouchStartPan(e),this.state=Il.TOUCH_PAN;break;default:this.state=Il.NONE}break;case 2:switch(this.touches.TWO){case t.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Il.TOUCH_DOLLY_PAN;break;case t.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Il.TOUCH_DOLLY_ROTATE;break;default:this.state=Il.NONE}break;default:this.state=Il.NONE}this.state!==Il.NONE&&this.dispatchEvent(kl)}function ql(e){switch(this._trackPointer(e),this.state){case Il.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Il.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Il.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Il.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Il.NONE}}function Jl(e){this.enabled!==!1&&e.preventDefault()}function Yl(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Xl(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var Z={w:12,d:10},Zl=[{name:`Wintergarten`,icon:`🪟`,level:6,cost:8e3,desc:`Lichtdurchflutet, mit Platz für 6 Tische mehr.`},{name:`Terrasse`,icon:`⛱️`,level:10,cost:3e4,desc:`Draußen sitzen. An Sonnentagen kommen 30 % mehr Gäste.`},{name:`Hundewiese`,icon:`🌿`,level:15,cost:12e4,desc:`Auslauf mit Gras: 2 Hundeplätze mehr, Laune sinkt 20 % langsamer.`}],Ql={x:6,z:9},$l={x:5,z:2},eu={x0:3,x1:7,z:1},tu={x:4,z:1},nu=75e3,ru={min:6,max:10,def:8},iu={hours:8,dayMs:8*nu,nightMs:2e4,openHour:8,closeHour:16};function au(e){let t=Math.max(ru.min,Math.min(ru.max,Math.round(e)||ru.def));iu.hours=t,iu.dayMs=t*nu,iu.closeHour=iu.openHour+t}var ou={zimt:{name:`Zimt`,icon:`🟤`},honig:{name:`Honig`,icon:`🍯`},karamell:{name:`Karamell`,icon:`🍮`},vanille:{name:`Vanille`,icon:`🌼`},kakao:{name:`Kakao`,icon:`🍫`},lebkuchen:{name:`Lebkuchen`,icon:`🍪`}},su={common:{name:`Gewöhnlich`,stars:1,color:`#8a8f98`,popularity:2,mult:1.1,nights:1,xp:15},popular:{name:`Beliebt`,stars:2,color:`#4a9d5b`,popularity:3,mult:1.2,nights:2,xp:25},rare:{name:`Selten`,stars:3,color:`#3b7dd8`,popularity:4,mult:1.3,nights:3,xp:40},legendary:{name:`Legendär`,stars:4,color:`#d99a1e`,popularity:5,mult:1.4,nights:4,xp:60}},cu=[{id:`espresso`,name:`Espresso`,price:3,brew:5,color:`#4a2c1a`,cost:0,level:1},{id:`cappuccino`,name:`Cappuccino`,price:4.5,brew:7,color:`#c99a66`,cost:120,level:1},{id:`flatwhite`,name:`Flat White`,price:5.5,brew:8,color:`#d9b48a`,cost:450,level:2},{id:`chai`,name:`Chai Latte`,price:6,brew:8,color:`#c7894f`,cost:1100,level:3},{id:`matcha`,name:`Matcha Latte`,price:6.5,brew:9,color:`#8fb56a`,cost:2200,level:5},{id:`coldbrew`,name:`Cold Brew`,price:7.5,brew:6,color:`#2f1d12`,cost:4e3,level:6},{id:`cortado`,name:`Cortado`,price:8.2,brew:6,color:`#8a5a3a`,cost:7500,level:7},{id:`icedlatte`,name:`Iced Latte`,price:9,brew:7,color:`#d8c3a5`,cost:12e3,level:8},{id:`affogato`,name:`Affogato`,price:10.5,brew:8,color:`#f1e3c8`,cost:2e4,level:10},{id:`kurkuma`,name:`Kurkuma Latte`,price:11.5,brew:8,color:`#e3a83a`,cost:32e3,level:12},{id:`nitro`,name:`Nitrobrew`,desc:`Nitro Cold Brew`,price:13,brew:7,color:`#1e130c`,cost:55e3,level:14},{id:`pistazie`,name:`Pistalatte`,desc:`Pistazien-Latte`,price:14.5,brew:9,color:`#a9c27a`,cost:9e4,level:16},{id:`geisha`,name:`Geisha Filter`,price:18,brew:10,color:`#b07a4a`,cost:16e4,level:19},{id:`sm_beere`,name:`Beerenwuff`,desc:`Beeren-Smoothie`,cat:`smoothie`,price:6,brew:6,color:`#b8466b`,cost:220,level:3},{id:`sm_mango`,name:`Mangobell`,desc:`Mango-Smoothie`,cat:`smoothie`,price:6.8,brew:6,color:`#f2a93b`,cost:1800,level:5},{id:`sm_gruen`,name:`Grünschnauze`,desc:`Grüner Smoothie`,cat:`smoothie`,price:7.5,brew:7,color:`#7fae4f`,cost:3200,level:6},{id:`sm_banane`,name:`Bananapfote`,desc:`Bananen-Smoothie`,cat:`smoothie`,price:8.2,brew:6,color:`#f1dc7a`,cost:6500,level:8},{id:`fr_croissant`,name:`Croissnuff`,desc:`Croissant`,cat:`fruehstueck`,price:5.5,brew:5,color:`#e0a85a`,cost:4500,level:7},{id:`fr_pancake`,name:`Pfannkuschel`,desc:`Pancakes mit Sirup`,cat:`fruehstueck`,price:8.5,brew:8,color:`#d99a4e`,cost:8e3,level:8},{id:`fr_ruehrei`,name:`Rührwau`,desc:`Rührei mit Toast`,cat:`fruehstueck`,price:9.5,brew:8,color:`#f3d264`,cost:14e3,level:9},{id:`fr_bowl`,name:`Bowlbello`,desc:`Müsli-Bowl mit Obst`,cat:`fruehstueck`,price:10.5,brew:7,color:`#c98fb0`,cost:24e3,level:11},{id:`es_toast`,name:`Toastwuff`,desc:`Getoastetes Sandwich`,cat:`essen`,price:11,brew:8,color:`#c8874a`,cost:18e3,level:10},{id:`es_bagel`,name:`Bagelbell`,desc:`Bagel mit Frischkäse`,cat:`essen`,price:12.5,brew:7,color:`#d9b27c`,cost:36e3,level:12},{id:`es_suppe`,name:`Suppenschnuff`,desc:`Tagessuppe`,cat:`essen`,price:14,brew:9,color:`#d97a3a`,cost:6e4,level:14},{id:`es_quiche`,name:`Quichepfote`,desc:`Quiche mit Gemüse`,cat:`essen`,price:16,brew:10,color:`#e6c06a`,cost:1e5,level:16},{id:`pfotenmocca`,name:`Pfotenmocca`,desc:`Espresso mit Kakao`,price:5,brew:6,color:`#5e3b2a`,recipe:{base:`espresso`,aroma:`kakao`}},{id:`zimtcap`,name:`Zimtpfote`,desc:`Zimt-Cappuccino`,price:5.8,brew:7,color:`#b98455`,recipe:{base:`cappuccino`,aroma:`zimt`}},{id:`honigflat`,name:`Honigbell`,desc:`Honig-Flat-White`,price:6.8,brew:8,color:`#e2b964`,recipe:{base:`flatwhite`,aroma:`honig`}},{id:`lebkuchenchai`,name:`Lebkuwuff`,desc:`Lebkuchen-Chai`,price:7.4,brew:8,color:`#a8683a`,recipe:{base:`chai`,aroma:`lebkuchen`}},{id:`vanillematcha`,name:`Grünpfote`,desc:`Vanille-Matcha`,price:8,brew:9,color:`#b5cf8a`,recipe:{base:`matcha`,aroma:`vanille`}},{id:`karamellcold`,name:`Karamaul`,desc:`Karamell-Cold-Brew`,price:9.2,brew:6,color:`#7a4a22`,recipe:{base:`coldbrew`,aroma:`karamell`}},{id:`honigcortado`,name:`Honigtado`,desc:`Honig-Cortado`,price:10,brew:6,color:`#b9874c`,recipe:{base:`cortado`,aroma:`honig`}},{id:`vanilleiced`,name:`Eisbello`,desc:`Vanille-Eis-Latte`,price:11,brew:7,color:`#efe0bd`,recipe:{base:`icedlatte`,aroma:`vanille`}},{id:`karamellaffogato`,name:`Karamgato`,desc:`Karamell-Affogato`,price:12.8,brew:8,color:`#d9a35e`,recipe:{base:`affogato`,aroma:`karamell`}},{id:`goldzimt`,name:`Goldpfote`,desc:`Goldene Zimtmilch`,price:14,brew:8,color:`#e8b04a`,recipe:{base:`kurkuma`,aroma:`zimt`}},{id:`nitromocca`,name:`Nitrowuff`,desc:`Nitro-Mocca`,price:15.8,brew:7,color:`#3b2416`,recipe:{base:`nitro`,aroma:`kakao`}},{id:`pistazienlebkuchen`,name:`Pistabell`,desc:`Lebkuchen-Pistazie`,price:17.5,brew:9,color:`#9fb36d`,recipe:{base:`pistazie`,aroma:`lebkuchen`}},{id:`special_gerda`,name:`Gerdas Stube`,desc:`Gerdas Gute Stube`,price:8.5,brew:7,color:`#d9b38c`,special:!0},{id:`special_nomade`,name:`Deadshot`,desc:`Deadline-Doppio`,price:9.5,brew:5,color:`#3b2416`,special:!0},{id:`special_pruefung`,name:`Prüfungs-Chai`,price:10.5,brew:8,color:`#b97a45`,special:!0},{id:`special_sprint`,name:`Sprint-Shot`,price:11,brew:4,color:`#2a180e`,special:!0},{id:`special_zen`,name:`Zen-Matcha`,price:13,brew:9,color:`#9ab88a`,special:!0},{id:`special_mikro`,name:`On-Air-Brew`,price:15,brew:6,color:`#24160d`,special:!0},{id:`gluehkaffee`,name:`Glühkaffee`,price:9,brew:7,color:`#7a2e2a`,special:!0},{id:`saison_kirschbluete`,name:`Kirschwuff`,desc:`Kirschblüten-Latte`,price:10,brew:6,color:`#f0c0cc`,special:!0,season:0},{id:`saison_holunder`,name:`Holundini`,desc:`Holunder-Tonic-Espresso`,price:10.5,brew:5,color:`#c9b3d9`,special:!0,season:0},{id:`saison_rhabarber`,name:`Rhabarbrew`,desc:`Rhabarber-Cold-Brew`,price:11,brew:7,color:`#e8837a`,special:!0,season:0},{id:`saison_eiskaffee`,name:`Eiskaffee`,price:9.5,brew:5,color:`#e6d3b3`,special:!0,season:1},{id:`saison_tonic`,name:`Tonicbell`,desc:`Espresso Tonic`,price:10,brew:4,color:`#c9a66b`,special:!0,season:1},{id:`saison_kokos`,name:`Kokosbrew`,desc:`Kokos-Cold-Brew`,price:11.5,brew:7,color:`#efe6d2`,special:!0,season:1},{id:`saison_pumpkin`,name:`Kürbispfote`,desc:`Pumpkin Spice Latte`,price:11,brew:7,color:`#d98a3d`,special:!0,season:2},{id:`saison_maronen`,name:`Maronino`,desc:`Maronen-Cappuccino`,price:11.5,brew:7,color:`#a77a50`,special:!0,season:2},{id:`saison_apfelchai`,name:`Apfelchai`,desc:`Apfel-Zimt-Chai`,price:10.5,brew:8,color:`#c47a3a`,special:!0,season:2},{id:`saison_lebkuchen`,name:`Lebkulatte`,desc:`Lebkuchen-Latte`,price:11.5,brew:7,color:`#8a5230`,special:!0,season:3},{id:`saison_spekulatius`,name:`Spekumocca`,desc:`Spekulatius-Mocha`,price:12,brew:8,color:`#5a3523`,special:!0,season:3},{id:`saison_bratapfel`,name:`Apfelbell`,desc:`Bratapfel-Latte`,price:11,brew:8,color:`#d1a05a`,special:!0,season:3}],lu={zimt:`Zimt`,honig:`Honig`,karamell:`Karam`,vanille:`Vanil`,kakao:`Schoko`,lebkuchen:`Lebku`},uu={espresso:`presso`,cappuccino:`puccino`,flatwhite:`flat`,chai:`chai`,matcha:`matcha`,coldbrew:`brew`,cortado:`tado`,icedlatte:`eisla`,affogato:`gato`,kurkuma:`kurki`,nitro:`nitro`,pistazie:`pista`,geisha:`geisha`},du=(e,t)=>(lu[e]||e)+(uu[t]||t),fu=e=>{let t=7;for(let n=0;n<e.length;n++)t=t*31+e.charCodeAt(n)>>>0;return t};(()=>{for(let e of cu)e.recipe&&(e.rarity=`legendary`,e.popularity=su.legendary.popularity);let e=cu.filter(e=>!e.recipe&&!e.special&&!e.cat);for(let t of e)for(let[e,n]of Object.entries(ou)){if(cu.some(n=>n.recipe&&n.recipe.base===t.id&&n.recipe.aroma===e))continue;let r=`mix_${t.id}_${e}`,i=fu(r)%100,a=i<50?`common`:i<85?`popular`:`rare`,o=su[a];cu.push({id:r,name:du(e,t.id),desc:`${n.name}-${t.name}`,price:Math.round(t.price*o.mult*10)/10,brew:t.brew,color:t.color,cost:t.cost,level:t.level,recipe:{base:t.id,aroma:e},rarity:a,popularity:o.popularity})}})();var pu={kaffee:{name:`Kaffee`,icon:`☕`,mini:`☕ Milch aufschäumen`,game:`foam`},smoothie:{name:`Smoothies`,icon:`🥤`,mini:`🥤 Mixen`,game:`mix`},fruehstueck:{name:`Frühstück`,icon:`🥞`,mini:`🍳 Im richtigen Moment wenden`,game:`flip`},essen:{name:`Essen`,icon:`🥪`,mini:`🥪 Anrichten`,game:`plate`}},mu={foam:{help:`Klicken oder Leertaste, wenn die Markierung im grünen Bereich ist`,speed:.75,zone:.24,perfect:.06,dur:4.5},mix:{help:`Schnell klicken oder Leertaste tippen. Wenn die Zeit um ist, muss der Füllstand im grünen Bereich sein`,step:.1,decay:.2,zone:.24,perfect:.07,dur:3.2},flip:{help:`Einmal klicken, bevor es anbrennt. Es wird immer schneller`,v0:.22,accel:.32,zone:.2,perfect:.06},plate:{help:`Klicke, wenn die Markierung einen Punkt erreicht. Drei Punkte nacheinander`,speed:.3,targets:3,tol:.045},slice:{help:`Klicken, wenn das Messer genau über der Mitte steht`,speed:.55,zone:.16,perfect:.05,dur:5},fill:{help:`Stopp, wenn der Füllstand im grünen Bereich ist. Zu viel läuft über`,speed:.42,zone:.18,perfect:.05}},hu={grind:{name:`Bohnen mahlen`,icon:`🫘`,kind:`fill`,skin:`grind`,help:`Stopp, wenn genug Pulver in der Mühle ist`},foam:{name:`Milch aufschäumen`,icon:`🥛`,kind:`foam`,skin:`foam`,over:{dur:3.5}},whisk:{name:`Pulver aufschlagen`,icon:`🍵`,kind:`mix`,skin:`whisk`,help:`Schnell tippen, bis der Schaum im grünen Bereich steht`,over:{dur:2.6}},steep:{name:`Gewürze ziehen lassen`,icon:`🫖`,kind:`flip`,skin:`steep`,help:`Rechtzeitig rausnehmen, sonst wird es bitter`},ice:{name:`Eiswürfel rein`,icon:`🧊`,kind:`plate`,skin:`ice`,help:`Klicke bei jedem Punkt, dann fällt ein Eiswürfel ins Glas`},pour:{name:`Aufgießen`,icon:`🫗`,kind:`fill`,skin:`pour`,help:`Stopp, wenn das Glas voll genug ist`},tap:{name:`Zapfen`,icon:`🚰`,kind:`fill`,skin:`tap`,help:`Stopp kurz unter dem Rand, der Schaum steigt noch`,over:{zone:.14,speed:.5}},circles:{name:`In Kreisen aufgießen`,icon:`🌀`,kind:`plate`,skin:`circles`,help:`Klicke bei jedem Punkt, dann gießt du die nächste Runde`},syrup:{name:`Sirup einschenken`,icon:`🍯`,kind:`fill`,skin:`syrup`,help:`Nur bis zur Linie, sonst wird es zu süß`,over:{zone:.12,perfect:.04,speed:.36}},fruit:{name:`Obst rein`,icon:`🍓`,kind:`plate`,skin:`fruit`,help:`Klicke bei jedem Punkt, dann fällt ein Stück Obst hinein`},blend:{name:`Mixen`,icon:`🌪️`,kind:`mix`,skin:`blend`},bake:{name:`Aufbacken`,icon:`🔥`,kind:`flip`,skin:`bake`,help:`Rausholen, wenn es goldbraun ist. Es wird immer schneller`},batter:{name:`Teig eingießen`,icon:`🥣`,kind:`fill`,skin:`batter`,help:`Stopp, wenn der Pancake groß genug ist`},flip:{name:`Wenden`,icon:`🍳`,kind:`flip`,skin:`flip`},stir:{name:`Rühren`,icon:`🥄`,kind:`mix`,skin:`stir`,help:`Schnell tippen, damit nichts anbrennt`,over:{dur:2.6}},toast:{name:`Toasten`,icon:`🍞`,kind:`flip`,skin:`toast`,help:`Rausholen, bevor der Toast schwarz wird`},top:{name:`Belegen`,icon:`🥗`,kind:`plate`,skin:`top`,help:`Klicke bei jedem Punkt, dann landet ein Belag darauf`},ladle:{name:`Kelle füllen`,icon:`🍲`,kind:`fill`,skin:`ladle`,help:`Stopp, wenn die Kelle voll ist`},cut:{name:`Aufschneiden`,icon:`🔪`,kind:`slice`,skin:`cut`,over:{dur:4}},slice:{name:`Anschneiden`,icon:`🍰`,kind:`slice`,skin:`cut`},scoop:{name:`Eiskugel formen`,icon:`🍨`,kind:`foam`,skin:`scoop`,help:`Klicken, wenn der Portionierer genau in der Mitte steht`,over:{dur:3.5}}},gu={espresso:[`grind`],cappuccino:[`grind`,`foam`],flatwhite:[`grind`,`foam`],cortado:[`grind`,`foam`],pistazie:[`grind`,`foam`],chai:[`steep`,`foam`],matcha:[`whisk`,`foam`],kurkuma:[`stir`,`foam`],coldbrew:[`ice`,`pour`],icedlatte:[`ice`,`pour`],nitro:[`tap`],affogato:[`scoop`,`grind`],geisha:[`grind`,`circles`],smoothie:[`fruit`,`blend`],fr_croissant:[`bake`],fr_pancake:[`batter`,`flip`],fr_ruehrei:[`stir`,`flip`],fr_bowl:[`fruit`,`pour`],es_toast:[`toast`,`top`],es_bagel:[`cut`,`top`],es_suppe:[`ladle`,`top`],es_quiche:[`cut`,`top`],kuchen:[`slice`]},_u=e=>!e.recipe&&!e.special,vu=e=>cu.find(t=>t.id===e),yu={machine:{name:`Espressomaschine`,icon:`⚙️`,desc:`Brüht schneller.`,max:25,cost:e=>Math.round(80*1.45**e),effect:e=>`Brühzeit −${Math.round((1-.88**e)*100)} %`},grinder:{name:`Profi-Mühle`,icon:`🫘`,desc:`Besserer Kaffee, höherer Preis.`,max:25,cost:e=>Math.round(120*1.48**e),effect:e=>`Preis +${e*10} %`},ambience:{name:`Gemütlichkeit`,icon:`🕯️`,desc:`Kissen, Decken, Lichterketten. Gäste warten geduldiger.`,max:20,cost:e=>Math.round(150*1.52**e),effect:e=>`Geduld +${e*12} %`},sign:{name:`Außenschild`,icon:`🪧`,desc:`Leuchtet bis zur Ecke. Mehr Laufkundschaft.`,max:15,level:2,cost:e=>Math.round(300*1.5**e),effect:e=>`Gäste +${e*6} %`,fx:e=>({spawn:.06*e})},register:{name:`Kartenterminal`,icon:`💳`,desc:`Trinkgeld per Knopfdruck. Die Leute geben mehr.`,max:15,level:3,cost:e=>Math.round(500*1.5**e),effect:e=>`Trinkgeld +${e*5} %`,fx:e=>({tip:.05*e})},cakecase:{name:`Kuchenvitrine`,icon:`🧁`,desc:`Schöner präsentiert, öfter verkauft.`,max:10,level:3,cost:e=>Math.round(400*1.52**e),effect:e=>`Kuchen-Chance +${e*4} %, Kuchenpreis +${e*10} %`,fx:e=>({cake:.04*e,cakePrice:.1*e})},garden:{name:`Hundeauslauf`,icon:`🌳`,desc:`Ein Stück Wiese hinterm Haus.`,max:10,level:4,cost:e=>Math.round(700*1.52**e),effect:e=>`Hundelaune sinkt ${e*5} % langsamer`,fx:e=>({mood:.05*e})},kitchen:{name:`Küchenausbau`,icon:`🍳`,desc:`Mehr Platz auf der Theke für weitere Kaffeemaschinen.`,max:2,level:8,cost:e=>[4e3,12e3][e]??12e3,effect:e=>`${e+1} Kaffeemaschine${e?`n`:``}`},roastery:{name:`Hausrösterei`,icon:`🔥`,desc:`Eigene Röstung, eigener Preis.`,max:15,level:9,cost:e=>Math.round(8e3*1.48**e),effect:e=>`Preis +${e*6} %`,fx:e=>({price:.06*e})},academy:{name:`Barista-Akademie`,icon:`🎓`,desc:`Workshops am Sonntag. Du lernst mit.`,max:10,level:12,cost:e=>Math.round(2e4*1.52**e),effect:e=>`XP +${e*8} %`,fx:e=>({xp:.08*e})}},bu=e=>(e||0)+Math.floor((e||0)/5),xu=e=>(Math.floor((e||0)/5)+1)*5,Su=e=>.88**bu(e),Cu=e=>1+.1*bu(e),wu={barista:{name:`Barista`,icon:`🧑‍🍳`,desc:`Brüht automatisch jede Bestellung.`,level:4,cost:600,wage:60,look:{skin:`#e0ac7e`,hair:`#2b1d14`,hairStyle:`bun`,shirt:`#f2efe9`,pants:`#2f3640`,apron:`#3f6b55`,glasses:!0}},kellner:{name:`Service-Kraft`,icon:`🧑‍💼`,desc:`Nimmt Bestellungen auf und serviert.`,level:7,cost:1500,wage:100,look:{skin:`#f1c9a5`,hair:`#a0522d`,hairStyle:`short`,shirt:`#2f3640`,pants:`#2f3640`,apron:`#8a4b3c`,beard:!0}},sitter:{name:`Hundesitterin`,icon:`🧑‍🦰`,desc:`Füttert hungrige Hunde und streichelt zwischendurch.`,level:6,cost:5e3,wage:100},konditor:{name:`Konditor`,icon:`🧁`,desc:`Backt jeden Morgen 15 Stück Kuchen, gratis.`,level:9,cost:14e3,wage:160},manager:{name:`Filialleitung`,icon:`🧑‍💼`,desc:`Kümmert sich um die Filialen. Filial-Ertrag +25 %.`,level:14,cost:6e4,wage:600}},Tu={veteranServed:30,veteranLevel:4},Eu={maxPerRole:2,secondCost:1.5,xpTask:1,levels:[0,15,45,100,200],specLevel:3,star2:2,star3:4,personalities:{fleissig:{name:`fleißig`,icon:`⚡`,desc:`arbeitet 10 % schneller`,speed:.9},gemuetlich:{name:`gemütlich`,icon:`☁️`,desc:`kostet 20 % weniger Lohn`,wage:.8},charmant:{name:`charmant`,icon:`💖`,desc:`+4 % Trinkgeld`,tip:.04},praezise:{name:`präzise`,icon:`🎯`,desc:`erreicht bessere Sterne eine Stufe früher`,star:1}},second:{brew:.85,walk:1.3,sitter:3,cake:10,branch:.15}},Du={table:{name:`Tisch`,icon:`🟫`,cost:80},chair:{name:`Stuhl`,icon:`🪑`,cost:50,seat:!0},armchair:{name:`Ohrensessel`,icon:`🛋️`,cost:160,seat:!0,cozy:.02,level:2},plant:{name:`Monstera`,icon:`🪴`,cost:35,deco:!0},cactus:{name:`Kaktus`,icon:`🌵`,cost:25,deco:!0},lamp:{name:`Stehlampe`,icon:`💡`,cost:60,deco:!0},rug:{name:`Teppich`,icon:`🟥`,cost:45,deco:!0,walkable:!0},bed:{name:`Hundebett`,icon:`🛏️`,cost:120,walkable:!0,dogBed:!0},shelf:{name:`Bücherregal`,icon:`📚`,cost:90,deco:!0},sacks:{name:`Kaffeesäcke`,icon:`🎒`,cost:70,deco:!0,cozy:.03,level:2},toybox:{name:`Spielzeugkiste`,icon:`🧸`,cost:160,deco:!0,toy:!0,level:3},easel:{name:`Staffelei`,icon:`🎨`,cost:120,deco:!0,cozy:.04,level:3},olive:{name:`Olivenbaum`,icon:`🌳`,cost:180,deco:!0,cozy:.05,level:4},record:{name:`Plattenspieler`,icon:`🎶`,cost:240,deco:!0,cozy:.05,level:4},neon:{name:`Neon-Pfote`,icon:`🐾`,cost:320,deco:!0,cozy:.06,level:5},aquarium:{name:`Aquarium`,icon:`🐠`,cost:420,deco:!0,cozy:.07,level:6},fireplace:{name:`Kamin`,icon:`🔥`,cost:600,deco:!0,cozy:.1,level:4},piano:{name:`Klavier`,icon:`🎹`,cost:1400,deco:!0,cozy:.12,level:10},fountain:{name:`Wasserspiel`,icon:`⛲`,cost:2600,deco:!0,cozy:.15,level:13},tulips:{name:`Tulpenkasten`,icon:`🌷`,cost:150,deco:!0,cozy:.06,season:0},parasol:{name:`Sonnenschirm`,icon:`⛱️`,cost:220,deco:!0,cozy:.07,season:1},pumpkins:{name:`Kürbisse`,icon:`🎃`,cost:160,deco:!0,cozy:.06,season:2},xmastree:{name:`Tannenbaum`,icon:`🎄`,cost:300,deco:!0,cozy:.09,season:3},birdhouse:{name:`Vogelhaus`,icon:`🐦`,cost:140,deco:!0,cozy:.05,season:0},eggbasket:{name:`Osterkorb`,icon:`🥚`,cost:120,deco:!0,cozy:.05,season:0},tulippot:{name:`Tulpenkübel`,icon:`🪴`,cost:170,deco:!0,cozy:.06,season:0},deckchair:{name:`Liegestuhl`,icon:`🏖️`,cost:200,deco:!0,cozy:.06,season:1},icecart:{name:`Eiswagen`,icon:`🍦`,cost:280,deco:!0,cozy:.08,season:1},hammock:{name:`Hängematte`,icon:`🌴`,cost:240,deco:!0,cozy:.07,season:1},leafpile:{name:`Laubhaufen`,icon:`🍁`,cost:130,deco:!0,cozy:.05,season:2},lanterns:{name:`Laternen`,icon:`🏮`,cost:180,deco:!0,cozy:.06,season:2},hayball:{name:`Strohballen`,icon:`🌾`,cost:200,deco:!0,cozy:.07,season:2},snowman:{name:`Schneemann`,icon:`⛄`,cost:220,deco:!0,cozy:.07,season:3},lightchain:{name:`Lichterkette`,icon:`✨`,cost:190,deco:!0,cozy:.06,season:3},sled:{name:`Schlitten`,icon:`🛷`,cost:210,deco:!0,cozy:.07,season:3}},Ou={hund:{name:`Hundeporträt`,icon:`🐶`,cost:90,cozy:.02},tasse:{name:`Kaffeebild`,icon:`☕`,cost:70,cozy:.02},berge:{name:`Berglandschaft`,icon:`🏔️`,cost:110,cozy:.03,level:3},bunt:{name:`Kunstdruck`,icon:`🟦`,cost:130,cozy:.03,level:4},pfote:{name:`Goldene Pfote`,icon:`🐾`,cost:380,cozy:.05,level:7}},ku={table:`#8b5a3c`,chair:`#c0763f`,armchair:`#6f8f7a`,rug:`#b55d4c`,shelf:`#7a4f33`,bed:`#a8704c`,toybox:`#e2a33c`,lamp:`#f2e3c6`,fireplace:`#b5a693`,piano:`#1d1d1d`},Au=[{id:`natur`,name:`Original`,hex:null,extra:0},{id:`walnuss`,name:`Walnuss`,hex:`#5a3a26`,extra:0},{id:`creme`,name:`Creme`,hex:`#eadcc2`,extra:0},{id:`salbei`,name:`Salbei`,hex:`#8fa78f`,extra:0},{id:`taube`,name:`Taubenblau`,hex:`#7d97b3`,extra:0},{id:`rosa`,name:`Pastellrosa`,hex:`#f2b8c6`,extra:.25},{id:`petrol`,name:`Petrol`,hex:`#1f6f78`,extra:.25},{id:`senf`,name:`Senf`,hex:`#d4a72c`,extra:.25},{id:`gold`,name:`Gold`,hex:`#d9b443`,extra:.6,metal:!0}],ju=e=>Au.find(t=>t.id===e)||Au[0],Mu=[`armchair`,`rug`,`bed`,`lamp`],Nu=e=>Mu.includes(e),Pu=[`table`,`chair`],Fu=[{id:`klassisch`,name:`Klassisch`,icon:`🪵`,extra:0},{id:`bistro`,name:`Bistro`,icon:`☕`,extra:.2},{id:`landhaus`,name:`Landhaus`,icon:`🌾`,extra:.2,level:2},{id:`modern`,name:`Modern`,icon:`◽`,extra:.35,level:3}],Iu=e=>Fu.find(t=>t.id===e)||Fu[0],Lu=e=>Pu.includes(e);function Ru(e,t,n){let r=Du[e].cost;return Lu(e)?r+Math.round(r*Iu(n).extra):Nu(e)?r+Math.round(r*ju(t).extra):r}var zu=[`Frühling`,`Sommer`,`Herbst`,`Winter`],Bu=.8,Vu=e=>Math.round(100*1.4**(Math.min(e,12)-1)*1.16**Math.max(0,e-12)),Hu=e=>Math.max(5,22*.9**(e-1)),Uu={order:40,coffee:75},Wu={wheel:!1,wheelBone:!1,tipChest:!1,questChest:!1,prestige:!1},Gu={speeds:[1,5,20],maxSpeed:20,money:1e4},Ku={boneBonus:.03},qu=[{id:`lvl20`,kind:`level`,target:20,icon:`⭐`,name:`Level 20`,reward:{packs:1,xp:500}},{id:`sites4`,kind:`sites`,target:4,icon:`🏙️`,name:`Vier Standorte in der Stadt`,reward:{packs:1,xp:500}},{id:`served5k`,kind:`served`,target:5e3,icon:`☕`,name:`5.000 Gäste bedient`,reward:{packs:1,xp:600}},{id:`perfect20`,kind:`perfect`,target:20,icon:`💯`,name:`20 perfekte Tage`,reward:{packs:2,xp:800}},{id:`siteMax`,kind:`siteMax`,target:5,icon:`🏗️`,name:`Eine Filiale auf Stufe 5`,reward:{packs:2,xp:1e3}},{id:`earned1m`,kind:`earned`,target:1e6,icon:`💰`,name:`1 Million € Umsatz`,reward:{packs:2,xp:1500}},{id:`sites7`,kind:`sites`,target:7,icon:`🗺️`,name:`Alle sieben Viertel`,reward:{packs:3,xp:2e3}},{id:`lvl35`,kind:`level`,target:35,icon:`🏆`,name:`Level 35`,reward:{packs:3,xp:3e3}}],Ju={patience:{normal:1,vip:.85,critic:.9,regular:1.05},regularPerLvl:.03,vipFriend:3,vip:{bonus:4,from:.2,to:.75,xp:40}},Yu={startMoney:45,tipBase:.3,xpServe:10,xpServeTip:14,xpQuest:15,saveShare:.1},Xu={share:.5,auto:{none:.3,barista:.55,kellner:.9},capHours:8,minMinutes:2,branchShare:.5},Zu={baseSlots:2,growDays:7,food:3,feed:.6,pet:.35,petCooldown:12,hungerMin:{puppy:5,adult:7},moodMin:8,tipPerDog:.04,tipCap:.25,litterCooldown:3,marketLevel:3,rareChance:.06,bidEvery:[25,60],bidTtl:120,maxBids:3},Qu={stammhaus:{name:`Stammhaus`,icon:`🏠`,level:1,cost:0,income:0,full:!0,desc:`Dein erstes Café. Hier brummt jeden Morgen als Erstes die alte Siebträgermaschine.`,map:{x:0,z:0,color:`#e9b17a`}},altstadt:{name:`Altstadt`,icon:`🏛️`,level:8,cost:3500,income:450,full:!0,scenario:`altstadt`,target:[90,150],desc:`Enge Gassen, Kopfsteinpflaster und Reisegruppen, die nach der Stadtführung erst mal einen Cappuccino brauchen.`,map:{x:-6,z:-4,color:`#c98f6b`}},uni:{name:`Uni-Viertel`,icon:`🎓`,level:11,cost:17e3,income:1100,target:[240,360],desc:`Hier holen sich Studis zwischen zwei Vorlesungen ihren Kaffee. Abends wird an den Tischen für die Klausur gelernt.`,map:{x:6,z:-5,color:`#9fb4d6`}},hafen:{name:`Hafen`,icon:`⚓`,level:14,cost:42e3,income:2600,target:[480,720],desc:`Alte Backsteinspeicher, Möwen und Hafenleute, die ihren Kaffee schwarz und stark wollen.`,map:{x:9,z:4,color:`#b5584a`}},bahnhof:{name:`Bahnhof`,icon:`🚉`,level:17,cost:88e3,income:6e3,target:[900,1200],desc:`Hier hat niemand Zeit. Ein Becher to go, kurz den Hund streicheln und weiter zum Gleis.`,map:{x:-1,z:7,color:`#8d8f99`}},park:{name:`Stadtpark`,icon:`🌳`,level:20,cost:3e5,income:13500,target:[1500,2100],desc:`Ein kleiner Pavillon direkt an der Hundewiese. Am Wochenende ist hier mehr los als im Rest der Stadt.`,map:{x:-9,z:4,color:`#7fb069`}},bergdorf:{name:`Bergdorf`,icon:`🏔️`,level:24,cost:13e5,income:31e3,target:[2400,3600],desc:`Ganz oben am Berg, mit Kamin und Bernhardinern. Wer hier ankommt, bleibt meistens länger als geplant.`,map:{x:1,z:-10,color:`#e8eef2`}}},$u={maxLevel:5,upCost:{base:.6,mult:1.5},idleShare:.3,spawn:.05,localKeys:[`upgrades`,`furniture`,`expansion`,`scenario`]},ed=new Map,td=new Map;function nd(){return{materials:td.size,geometries:ed.size}}function rd(e,t={}){let n=e+JSON.stringify(t);return td.has(n)||td.set(n,new na({color:e,roughness:.85,metalness:0,...t})),td.get(n)}function id(e,t,n){let r=`${e}|${t}|${n}`;return ed.has(r)||ed.set(r,new Hi(e,t,n)),ed.get(r)}function Q(e,t,n,r,i=0,a=0,o=0,s){let c=new Qr(id(e,t,n),rd(r,s));return c.position.set(i,a,o),c.castShadow=!0,c.receiveShadow=!0,c}var ad=new Tn,od=new J;function sd(e,t,n,r,{cast:i=!0}={}){let a=new ui(id(e,t,n),rd(`#ffffff`),r.length);return r.forEach((e,t)=>{ad.position.set(e.x,e.y,e.z),ad.scale.set(1,e.sy??1,1),ad.updateMatrix(),a.setMatrixAt(t,ad.matrix),a.setColorAt(t,od.set(e.color))}),a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0),a.castShadow=i,a.receiveShadow=!0,a.computeBoundingSphere(),a.userData.own=!0,a}var cd=e=>e[Math.floor(Math.random()*e.length)],ld=[`#f1c9a5`,`#e0ac7e`,`#c68b5e`,`#8d5a3b`,`#f5d6c0`,`#6b4630`,`#d9a77f`,`#fbe0cc`],ud=[`#2b1d14`,`#5a3a22`,`#a0522d`,`#d8b26a`,`#1a1a1a`,`#9a9a9a`,`#b5523b`,`#e8e2d6`,`#7a4a8c`,`#3f6f8f`,`#e07a9a`],dd=[`#6b8f71`,`#d98e73`,`#4f6d8f`,`#e4c770`,`#8e6c8a`,`#f2efe9`,`#355c4b`,`#b5651d`,`#c9b8a3`,`#d1495b`,`#00798c`,`#edae49`,`#30638e`,`#9bc1bc`,`#ff8c61`,`#5c374c`,`#a3c4bc`,`#f4a6b0`,`#264653`,`#e9c46a`],fd=[`#3a3f4b`,`#5b4a3a`,`#2f4f4f`,`#6d6875`,`#1f2a44`,`#8a7a5c`,`#4a6fa5`,`#2b2b2b`,`#a89f91`],pd=[`#c0563f`,`#e2a33c`,`#4f6d8f`,`#6b8f71`,`#2b2b2b`,`#8e6c8a`],md=[`#d1495b`,`#edae49`,`#00798c`,`#f2efe9`,`#2b2b2b`,`#8e6c8a`,`#6b8f71`,`#ff8c61`];function hd(){let e=Math.random,t=e()<.28?cd([`beanie`,`cap`,`cap`,`sunhat`,`beret`]):null,n=cd([`shirt`,`shirt`,`shirt`,`jacket`,`jacket`,`hoodie`,`dress`]);return{skin:cd(ld),hair:cd(ud),hairStyle:cd([`short`,`short`,`bun`,`long`,`long`,`ponytail`,`curly`,`mohawk`,`bald`,`side`]),shirt:cd(dd),pants:cd(fd),top:n,jacket:n===`jacket`?cd(dd):null,beard:e()<.25,glasses:e()<.28?cd([`#1d1d1d`,`#1d1d1d`,`#8a5a2b`,`#c0563f`]):null,beanie:t===`beanie`?cd(pd):null,hat:t&&t!==`beanie`?{type:t,color:cd(t===`sunhat`?[`#e8d39b`,`#f2efe9`]:md)}:null,scarf:e()<.15?cd(md):null,backpack:e()<.15?cd(md):null,headphones:!t&&e()<.1?cd(md):null,shoes:cd([`#2a2420`,`#2a2420`,`#f2efe9`,`#8a5a2b`,`#c0563f`]),height:.94+e()*.1,apron:null}}function gd(e){let t=new q,n=n=>{let r=new q;return r.position.set(n,.5,0),r.add(Q(.18,.46,.2,e.pants,0,-.23,0)),r.add(Q(.2,.08,.26,e.shoes||`#2a2420`,0,-.46,.03)),t.add(r),r},r=n(-.11),i=n(.11);t.add(Q(.5,.55,.3,e.shirt,0,.78,0)),e.top===`dress`&&t.add(Q(.56,.3,.36,e.shirt,0,.5,0)),e.top===`jacket`&&e.jacket&&(t.add(Q(.16,.56,.32,e.jacket,-.18,.78,0)),t.add(Q(.16,.56,.32,e.jacket,.18,.78,0)),t.add(Q(.5,.56,.06,e.jacket,0,.78,-.14))),e.top===`hoodie`&&t.add(Q(.36,.14,.14,e.shirt,0,1.08,-.18)),e.backpack&&(t.add(Q(.36,.42,.16,e.backpack,0,.82,-.23)),t.add(Q(.28,.12,.06,e.backpack,0,.68,-.32))),e.scarf&&t.add(Q(.44,.1,.34,e.scarf,0,1.08,.01)),e.apron&&t.add(Q(.44,.5,.04,e.apron,0,.72,.16));let a=n=>{let r=new q;return r.position.set(n,1.02,0),r.add(Q(.15,.44,.18,e.shirt,0,-.2,0)),r.add(Q(.13,.1,.15,e.skin,0,-.46,0)),t.add(r),r},o=a(-.33),s=a(.33);e.top===`jacket`&&e.jacket&&(o.add(Q(.17,.4,.2,e.jacket,0,-.18,0)),s.add(Q(.17,.4,.2,e.jacket,0,-.18,0))),t.add(Q(.4,.4,.4,e.skin,0,1.28,0)),t.add(Q(.06,.06,.02,`#222`,-.09,1.31,.201)),t.add(Q(.06,.06,.02,`#222`,.09,1.31,.201));let c=e.hairStyle,l=c===`bald`;return e.beanie?(t.add(Q(.44,.2,.44,e.beanie,0,1.55,0)),t.add(Q(.12,.08,.12,`#f2efe9`,0,1.69,0))):l||(c===`mohawk`?t.add(Q(.1,.2,.42,e.hair,0,1.58,0)):c===`curly`?t.add(Q(.5,.22,.5,e.hair,0,1.56,-.01)):c===`side`?(t.add(Q(.42,.12,.42,e.hair,0,1.52,0)),t.add(Q(.2,.1,.44,e.hair,.12,1.6,0))):t.add(Q(.42,.12,.42,e.hair,0,1.52,0)),c===`bun`&&t.add(Q(.16,.14,.16,e.hair,0,1.64,-.06))),!l&&c!==`mohawk`&&(c===`long`?t.add(Q(.42,.5,.08,e.hair,0,1.27,-.2)):c===`curly`?t.add(Q(.5,.36,.12,e.hair,0,1.36,-.2)):t.add(Q(.42,.26,.08,e.hair,0,1.38,-.18))),c===`ponytail`&&t.add(Q(.12,.34,.1,e.hair,0,1.3,-.27)),e.hat?.type===`cap`?(t.add(Q(.44,.14,.44,e.hat.color,0,1.54,0)),t.add(Q(.36,.04,.2,e.hat.color,0,1.49,.28))):e.hat?.type===`sunhat`?(t.add(Q(.7,.04,.7,e.hat.color,0,1.5,0)),t.add(Q(.42,.16,.42,e.hat.color,0,1.59,0)),t.add(Q(.43,.04,.43,`#c0563f`,0,1.53,0))):e.hat?.type===`beret`&&t.add(Q(.48,.1,.46,e.hat.color,.03,1.53,-.02)),e.headphones&&(t.add(Q(.06,.18,.16,e.headphones,-.23,1.3,0)),t.add(Q(.06,.18,.16,e.headphones,.23,1.3,0)),t.add(Q(.5,.05,.06,e.headphones,0,1.53,0))),e.beard&&t.add(Q(.38,.16,.06,l?`#5a3a22`:e.hair,0,1.15,.19)),e.glasses&&t.add(Q(.36,.07,.03,typeof e.glasses==`string`?e.glasses:`#1d1d1d`,0,1.31,.215)),e.height&&t.scale.setScalar(e.height),{group:t,sitting:!1,animate(e,t){let n=Math.sin(e)*.6*t;r.rotation.x=n,i.rotation.x=-n,o.rotation.x=-n*.8,s.rotation.x=n*.8},sit(e){this.sitting=e,r.rotation.x=i.rotation.x=e?-Math.PI/2:0,o.rotation.x=s.rotation.x=e?-.6:0},work(e){o.rotation.x=-.9+Math.sin(e*6)*.25,s.rotation.x=-.9-Math.sin(e*6)*.25}}}var _d=`#f6f0e6`,vd={golden:{snout:[.2,.15,.2],muzzle:`#f3e2c7`,ears:`flop`,earCol:`dark`,tail:`plume`,legH:.42,head:1,feather:!0},dackel:{snout:[.15,.13,.28],muzzle:`#a8683f`,ears:`long`,earCol:`dark`,tail:`thin`,legH:.26,head:.95},mops:{snout:[.2,.15,.07],muzzle:`#2b2420`,ears:`fold`,earCol:`dark`,tail:`curl`,legH:.34,head:1.15,mask:!0,wrinkle:!0},beagle:{snout:[.17,.14,.2],muzzle:_d,ears:`long`,earCol:`dark`,tail:`whiteTip`,legH:.4,head:1,saddle:!0,cap:!0,socks:!0},corgi:{snout:[.15,.12,.2],muzzle:_d,ears:`up`,earCol:`fur`,tail:`stub`,legH:.27,head:1.05,socks:!0,chest:!0,blaze:!0},pudel:{snout:[.13,.12,.23],muzzle:`#f4efe6`,ears:`puff`,earCol:`fur`,tail:`pom`,legH:.44,head:.95,topknot:!0,pomLegs:!0},labrador:{snout:[.2,.15,.19],muzzle:`#3a322c`,ears:`fold`,earCol:`fur`,tail:`otter`,legH:.42,head:1.02,eye:`#c9a56a`},spitz:{snout:[.12,.11,.14],muzzle:_d,ears:`tri`,earCol:`fur`,tail:`fluff`,legH:.38,head:.98,ruff:!0}};function yd(e={}){let t=e.fur||`#e0b47c`,n=e.dark||`#b98a4e`,r=vd[e.breed]||vd.golden,i=e.apron||`#3f6b55`,a=r.earCol===`dark`?n:t,o=r.socks?_d:t,s=r.legH,c=s+.24,l=new q;l.userData.staffDog=!0;let u=e=>{let n=new q;return n.position.set(e,s,0),n.add(Q(.15,s-.04,.17,t,0,-(s-.04)/2,0)),n.add(Q(.17,.08,.25,o,0,-s+.04,.04)),r.pomLegs&&(n.add(Q(.21,.13,.21,t,0,-s+.18,0)),n.add(Q(.21,.12,.21,t,0,-.06,0))),l.add(n),n},d=u(-.11),f=u(.11);l.add(Q(.46,.5,.32,t,0,c,0)),l.add(Q(.42,.12,.28,t,0,s-.02,0)),r.chest&&l.add(Q(.34,.34,.02,_d,0,c+.1,.165)),r.saddle&&l.add(Q(.48,.34,.34,n,0,c+.06,-.01)),r.feather&&l.add(Q(.3,.14,.04,n,0,c+.14,.17)),r.ruff&&l.add(Q(.5,.2,.42,_d,0,c+.26,.02)),r.pomLegs&&l.add(Q(.5,.14,.36,t,0,c+.27,0)),l.add(Q(.4,.3,.04,i,0,c-.08,.18)),l.add(Q(.2,.14,.04,i,0,c+.14,.18)),e.role===`kellner`&&l.add(Q(.16,.06,.05,`#f2efe9`,0,c+.25,.19));let p=e=>{let n=new q;return n.position.set(e,s+.45,0),n.add(Q(.13,.4,.15,t,0,-.19,0)),n.add(Q(.15,.1,.17,o===_d?_d:t,0,-.43,.01)),r.pomLegs&&n.add(Q(.19,.12,.19,t,0,-.34,0)),l.add(n),n},m=p(-.3),h=p(.3),g=new q;g.position.set(0,s+.48,.02),g.scale.setScalar(r.head),l.add(g);let _=(e,t,n,r,i,a,o)=>g.add(Q(e,t,n,r,i,a,o));_(.4,.36,.36,t,0,.2,.05);let[v,y,b]=r.snout,x=.23+b/2-.01;_(v,y,b,r.muzzle,0,.1+y/2-.02,x),_(.09,.06,.05,`#161616`,0,.1+y-.04,.23+b),_(.06,.07,.02,r.eye||`#1d1d1d`,-.1,.27,.231),_(.06,.07,.02,r.eye||`#1d1d1d`,.1,.27,.231),r.eye&&(_(.03,.04,.02,`#161616`,-.1,.27,.242),_(.03,.04,.02,`#161616`,.1,.27,.242)),r.mask&&_(.3,.2,.02,`#2b2420`,0,.2,.231),r.wrinkle&&_(.26,.04,.02,n,0,.35,.231),r.blaze&&_(.1,.2,.02,_d,0,.26,.231),r.cap&&_(.42,.12,.38,n,0,.36,.05),(e=>{if(e===`flop`)_(.07,.26,.15,a,-.22,.17,.04),_(.07,.26,.15,a,.22,.17,.04);else if(e===`long`)_(.07,.32,.18,a,-.22,.13,.04),_(.07,.32,.18,a,.22,.13,.04);else if(e===`fold`)_(.07,.14,.13,a,-.21,.3,.1),_(.07,.14,.13,a,.21,.3,.1);else if(e===`up`)_(.13,.24,.07,a,-.13,.48,0),_(.13,.24,.07,a,.13,.48,0),_(.07,.16,.02,`#e8b4a0`,-.13,.46,.04),_(.07,.16,.02,`#e8b4a0`,.13,.46,.04);else if(e===`tri`)for(let e of[-1,1])_(.12,.12,.08,a,e*.12,.43,.02),_(.08,.1,.06,a,e*.12,.53,.02),_(.04,.06,.04,a,e*.12,.6,.02);else e===`puff`&&(_(.18,.3,.2,a,-.27,.12,.03),_(.18,.3,.2,a,.27,.12,.03))})(r.ears),r.topknot&&(_(.32,.18,.32,t,0,.45,.04),_(.22,.14,.22,t,0,.58,.04));let S=new q;S.position.set(0,s+.1,-.16);let C=(e,t,n,r,i,a,o)=>S.add(Q(e,t,n,r,i,a,o));return r.tail===`plume`?(C(.1,.1,.34,n,0,0,-.17),S.rotation.x=.5):r.tail===`thin`?(C(.06,.06,.36,t,0,0,-.18),S.rotation.x=.25):r.tail===`curl`?(C(.1,.1,.08,t,0,.04,-.05),C(.09,.12,.09,t,0,.14,-.08),C(.08,.08,.08,t,0,.22,-.03)):r.tail===`whiteTip`?(C(.07,.07,.24,n,0,0,-.12),C(.08,.08,.1,_d,0,0,-.27),S.rotation.x=.8):r.tail===`stub`?C(.12,.1,.1,t,0,0,-.05):r.tail===`pom`?(C(.06,.06,.14,t,0,.02,-.07),C(.2,.2,.2,t,0,.08,-.22),S.rotation.x=.4):r.tail===`otter`?(C(.14,.12,.36,t,0,0,-.18),S.rotation.x=.15):(C(.26,.24,.2,_d,0,.14,-.1),C(.2,.2,.12,_d,0,.3,-.04)),l.add(S),l.scale.setScalar(e.scale||.5+.55*(e.size||1)),l.userData.parts={head:g,tail:S,armL:m,armR:h,legL:d,legR:f},{group:l,head:g,tail:S,sitting:!1,animate(e,t){let n=Math.sin(e)*.6*t;d.rotation.x=n,f.rotation.x=-n,m.rotation.x=-n*.8,h.rotation.x=n*.8,S.rotation.y=Math.sin(e*1.5)*.4*t,g.rotation.x=0},sit(e){this.sitting=e,d.rotation.x=f.rotation.x=e?-Math.PI/2:0,m.rotation.x=h.rotation.x=e?-.6:0},work(e){m.rotation.x=-.9+Math.sin(e*6)*.25,h.rotation.x=-.9-Math.sin(e*6)*.25,S.rotation.y=Math.sin(e*10)*.5,g.rotation.x=Math.sin(e*3)*.06}}}function bd(e={}){let t=e.fur||`#e0b47c`,n=e.dark||`#7a4a2a`,r=new q;r.userData.dog=!0;let i=new q;r.add(i),i.add(Q(.36,.26,.6,t,0,.34,0));let a=new q;a.position.set(0,.46,.22),i.add(a);let o=(e,t,n,r,i,o,s)=>a.add(Q(e,t,n,r,i,o-.46,s-.22));o(.3,.28,.3,t,0,.52,.36),o(.15,.11,.12,e.pattern===`patch`?n:`#f3e2c7`,0,.46,.55),o(.07,.05,.03,`#222`,0,.5,.615),o(.05,.05,.02,`#222`,-.08,.58,.511),o(.05,.05,.02,`#222`,.08,.58,.511),e.ears===`up`?(o(.08,.13,.06,n,-.1,.72,.32),o(.08,.13,.06,n,.1,.72,.32)):(o(.07,.17,.12,n,-.18,.56,.34),o(.07,.17,.12,n,.18,.56,.34)),e.pattern===`spots`?(i.add(Q(.12,.02,.14,n,-.07,.475,-.08)),i.add(Q(.1,.02,.1,n,.09,.475,.12)),i.add(Q(.02,.1,.12,n,.181,.36,-.14))):e.pattern===`patch`&&o(.1,.1,.02,n,.08,.58,.505),i.add(Q(.37,.06,.1,e.collar||`#c0563f`,0,.44,.2));let s=new q;s.position.set(0,.44,-.3),s.add(Q(.06,.06,.2,t,0,.04,-.08)),s.rotation.x=-.6,i.add(s);let c=[];for(let[e,n]of[[-.11,.2],[.11,.2],[-.11,-.2],[.11,-.2]]){let i=new q;i.position.set(e,.22,n),i.add(Q(.1,.22,.1,t,0,-.11,0)),r.add(i),c.push(i)}let l={stand:{bodyRot:0,bodyY:0,headRot:0,fRot:0,hRot:0,fY:0,hY:0},sit:{bodyRot:-.5,bodyY:0,headRot:.2,fRot:0,hRot:-1.4,fY:0,hY:-.1},lie:{bodyRot:0,bodyY:-.18,headRot:.15,fRot:-1.5,hRot:-1.3,fY:-.15,hY:-.14},sniff:{bodyRot:.1,bodyY:0,headRot:.8,fRot:0,hRot:0,fY:0,hY:0}},u=`stand`,d={...l.stand},f=0;return{group:r,sitting:!1,get pose(){return u},setPose(e){l[e]&&(u=e)},updatePose(e){f+=e;let t=l[u],n=Math.min(1,e*6);for(let e in t)d[e]+=(t[e]-d[e])*n;i.rotation.x=d.bodyRot,i.position.y+=d.bodyY,a.rotation.x=d.headRot+(u===`sniff`?Math.sin(f*9)*.1:0);for(let e=0;e<4;e++){let t=e<2;c[e].rotation.x+=t?d.fRot:d.hRot,c[e].position.y=.22+(t?d.fY:d.hY)}},animate(e,t){let n=Math.sin(e*1.6)*.7*t;c[0].rotation.x=n,c[3].rotation.x=n,c[1].rotation.x=-n,c[2].rotation.x=-n,i.position.y=Math.abs(Math.sin(e*1.6))*.04*t},tick(e,t,n=1){s.rotation.y=Math.sin(e*(t?22:9)*n)*(t?.9:.5)*(n<1?.6:1)},sit(){}}}function xd(){let e=new q;return e.add(Q(.86,.08,.86,`#8b5a3c`,0,.76,0)),e.add(Q(.12,.72,.12,`#3d2b1f`,0,.38,0)),e.add(Q(.46,.05,.46,`#3d2b1f`,0,.025,0)),e.add(Q(.08,.16,.08,`#e9e1d4`,.22,.88,-.22)),e.add(Q(.05,.1,.05,`#d97a7a`,.22,1,-.22)),e}function Sd(){let e=new q,t=`#c0763f`;e.add(Q(.48,.07,.48,t,0,.45,0));for(let[t,n]of[[-.19,-.19],[.19,-.19],[-.19,.19],[.19,.19]])e.add(Q(.06,.42,.06,`#3d2b1f`,t,.21,n));return e.add(Q(.48,.5,.06,t,0,.72,-.21)),e}function Cd(){let e=new q;e.add(Q(.42,.42,.42,`#e3dccf`,0,.21,0)),e.add(Q(.46,.06,.46,`#cfc6b6`,0,.42,0)),e.add(Q(.36,.04,.36,`#4a3426`,0,.43,0)),e.add(Q(.06,.5,.06,`#4c7a46`,0,.68,0));for(let[t,n,r,i]of[[0,1.05,0,`#3f7d4e`],[.22,.85,.05,`#5a9e5f`],[-.2,.9,-.08,`#4c8f57`],[.05,.8,.24,`#3f7d4e`],[-.06,.95,-.25,`#5a9e5f`],[.2,1.1,-.15,`#4c8f57`]]){let a=Q(.3,.06,.24,i,t,n,r);a.rotation.set(Math.random()*.6-.3,Math.random()*Math.PI,Math.random()*.6-.3),e.add(a)}return e}function wd(){let e=new q;e.add(Q(.3,.05,.3,`#2f2f2f`,0,.025,0)),e.add(Q(.05,1.4,.05,`#2f2f2f`,0,.72,0)),e.add(Q(.42,.3,.42,`#f2e3c6`,0,1.5,0));let t=Q(.22,.08,.22,`#fff1c9`,0,1.36,0,{emissive:`#ffcf70`,emissiveIntensity:1.2});t.castShadow=!1,e.add(t);let n=new Ba(`#ffd59a`,0,4.5,1.4);return n.position.set(0,1.3,0),e.add(n),e.userData.light=n,e}function Td(){let e=new q;e.add(Q(.9,1.6,.35,`#7a4f33`,0,.8,-.05));let t=[`#c0563f`,`#4f6d8f`,`#e2a33c`,`#6b8f71`,`#8e6c8a`,`#f2efe9`];for(let n of[.42,.92,1.38]){let r=-.36;for(;r<.34;){let i=.08+Math.random()*.05,a=.26+Math.random()*.1;e.add(Q(i,a,.26,cd(t),r+i/2,n+a/2-.15,.06)),r+=i+.015}}return e}function Ed(){let e=new q,t=Q(.98,.02,.98,`#b55d4c`,0,.011,0),n=Q(.72,.024,.72,`#e8c39e`,0,.012,0),r=Q(.4,.028,.4,`#6f8f7a`,0,.013,0);for(let e of[t,n,r])e.castShadow=!1;return e.add(t,n,r),e}function Dd(){let e=new q,t=Q(.86,.1,.7,`#8a5a3c`,0,.05,0),n=Q(.7,.06,.54,`#e8c39e`,0,.11,0),r=Q(.86,.16,.08,`#a8704c`,0,.12,-.31),i=Q(.08,.13,.62,`#a8704c`,-.39,.1,0),a=Q(.08,.13,.62,`#a8704c`,.39,.1,0),o=Q(.16,.04,.05,`#fff6e8`,.12,.16,.08);return e.add(t,n,r,i,a,o),e}function Od(){let e=new q,t=`#6f8f7a`;e.add(Q(.62,.22,.6,t,0,.3,0)),e.add(Q(.62,.62,.14,t,0,.62,-.24)),e.add(Q(.12,.32,.52,t,-.27,.48,.02)),e.add(Q(.12,.32,.52,t,.27,.48,.02)),e.add(Q(.44,.06,.42,`#e8c39e`,0,.44,.04));for(let[t,n]of[[-.24,-.22],[.24,-.22],[-.24,.22],[.24,.22]])e.add(Q(.06,.2,.06,`#3d2b1f`,t,.1,n));return e}function kd(){let e=new q;return e.add(Q(.3,.26,.3,`#c0763f`,0,.13,0)),e.add(Q(.16,.5,.16,`#5f9a5c`,0,.5,0)),e.add(Q(.1,.18,.1,`#5f9a5c`,.13,.55,0)),e.add(Q(.1,.1,.1,`#5f9a5c`,.13,.69,0)),e.add(Q(.1,.14,.1,`#5f9a5c`,-.13,.45,0)),e.add(Q(.06,.06,.06,`#e98aa6`,0,.78,0)),e}function Ad(){let e=new q,t=(t,n,r,i)=>{let a=Q(.44,.24,.32,`#c9b08a`,t,n,r);a.rotation.y=i,e.add(a);let o=Q(.2,.02,.16,`#5e3b2a`,t,n+.125,r);o.rotation.y=i,e.add(o)};return t(-.16,.12,.12,.2),t(.18,.12,-.1,-.3),t(0,.36,0,.5),e}function jd(){let e=new q;return e.add(Q(.6,.34,.42,`#e2a33c`,0,.17,0)),e.add(Q(.62,.04,.44,`#c0563f`,0,.35,0)),e.add(Q(.14,.14,.14,`#4f6d8f`,-.14,.43,.04)),e.add(Q(.22,.05,.07,`#fff6e8`,.12,.4,-.06)),e.add(Q(.1,.1,.1,`#6b8f71`,.18,.42,.1)),e}function Md(){let e=new q,t=Q(.05,1.3,.05,`#7a4f33`,-.22,.65,0);t.rotation.z=.12;let n=Q(.05,1.3,.05,`#7a4f33`,.22,.65,0);n.rotation.z=-.12;let r=Q(.05,1.2,.05,`#7a4f33`,0,.58,-.22);return r.rotation.x=-.25,e.add(t,n,r),e.add(Q(.6,.48,.04,`#f7f3ec`,0,.98,.04)),e.add(Q(.18,.14,.02,`#e0b47c`,-.08,.98,.065)),e.add(Q(.08,.1,.02,`#7a4a2a`,-.08,1.1,.065)),e.add(Q(.2,.08,.02,`#8fb56a`,.14,.86,.065)),e.add(Q(.56,.04,.1,`#7a4f33`,0,.72,.06)),e}function Nd(){let e=new q;e.add(Q(.46,.4,.46,`#b5651d`,0,.2,0)),e.add(Q(.1,.9,.1,`#6b4a33`,0,.85,0));for(let[t,n,r,i]of[[0,1.45,0,.7],[.22,1.25,.1,.4],[-.2,1.3,-.12,.45],[.05,1.65,-.05,.4]])e.add(Q(i,i*.55,i,`#8aa36b`,t,n,r));return e}function Pd(){let e=new q;e.add(Q(.7,.5,.45,`#5e3b2a`,0,.25,0)),e.add(Q(.6,.06,.4,`#2f2f2f`,0,.53,0)),e.add(Q(.32,.015,.32,`#111`,-.08,.565,0)),e.add(Q(.08,.02,.08,`#c0563f`,-.08,.575,0)),e.add(Q(.03,.03,.24,`#b8bcc2`,.18,.585,.02));for(let t=0;t<4;t++)e.add(Q(.03,.3,.3,[`#c0563f`,`#4f6d8f`,`#e2a33c`,`#6b8f71`][t],-.24+t*.07,.2,.08));return e}function Fd(){let e=new q;e.add(Q(.06,1.1,.06,`#2f2f2f`,0,.55,0)),e.add(Q(.5,.04,.3,`#2f2f2f`,0,.02,0));let t={emissive:`#ff7ab8`,emissiveIntensity:1.6},n=Q(.26,.2,.04,`#ffb3d6`,0,1.2,.04,t);n.castShadow=!1,e.add(n);for(let[n,r]of[[-.16,1.4],[-.05,1.46],[.06,1.46],[.17,1.4]]){let i=Q(.08,.1,.04,`#ffb3d6`,n,r,.04,t);i.castShadow=!1,e.add(i)}let r=new Ba(`#ff8ac4`,0,3,1.6);return r.position.set(0,1.3,.3),e.add(r),e.userData.light=r,e}function Id(){let e=new q;e.add(Q(.86,.5,.44,`#3d2b1f`,0,.25,0));let t=new Qr(new Hi(.82,.5,.4),new na({color:`#7cc6e0`,transparent:!0,opacity:.55,roughness:.1}));return t.position.y=.76,e.add(t),e.add(Q(.82,.06,.4,`#e6d6a8`,0,.54,0)),e.add(Q(.06,.2,.06,`#4c8f57`,-.28,.66,0)),e.add(Q(.06,.28,.06,`#3f7d4e`,.3,.7,-.08)),e.add(Q(.1,.06,.03,`#f28c3a`,-.05,.8,.05)),e.add(Q(.08,.05,.03,`#f2d33a`,.15,.72,-.05)),e.add(Q(.86,.04,.44,`#2f2f2f`,0,1.03,0)),e}function Ld(){let e=new q;e.add(Q(.96,1,.5,`#b5a693`,0,.5,-.12)),e.add(Q(1,.08,.58,`#8a7a68`,0,1.04,-.1)),e.add(Q(.56,.5,.1,`#2a2420`,0,.3,.12)),e.add(Q(.4,.08,.12,`#6b4a33`,0,.1,.16));let t=Q(.3,.22,.08,`#ffb347`,0,.24,.16,{emissive:`#ff7a1a`,emissiveIntensity:1.8});t.castShadow=!1,e.add(t),e.add(Q(.12,.16,.12,`#f7f3ec`,.3,1.16,-.1));let n=new Ba(`#ff9a4a`,0,5,1.4);return n.position.set(0,.5,.6),e.add(n),e.userData.light=n,e}function Rd(){let e=new q;e.add(Q(.96,.9,.4,`#1d1d1d`,0,.55,-.2,{roughness:.3})),e.add(Q(.96,.08,.3,`#1d1d1d`,0,.62,.1,{roughness:.3})),e.add(Q(.86,.03,.14,`#f7f3ec`,0,.67,.12));for(let t=0;t<6;t++)e.add(Q(.05,.02,.08,`#111`,-.34+t*.13,.69,.09));return e.add(Q(.08,.1,.08,`#1d1d1d`,-.4,.05,.15)),e.add(Q(.08,.1,.08,`#1d1d1d`,.4,.05,.15)),e.add(Q(.2,.26,.04,`#f2efe9`,0,1,0)),e}function zd(){let e=new q;e.add(Q(.9,.24,.9,`#b5a693`,0,.12,0));let t=Q(.76,.04,.76,`#7cc6e0`,0,.23,0,{transparent:!0,opacity:.8,roughness:.1});t.castShadow=!1,e.add(t),e.add(Q(.16,.6,.16,`#b5a693`,0,.5,0)),e.add(Q(.4,.08,.4,`#b5a693`,0,.8,0));let n=Q(.1,.24,.1,`#9fd8ea`,0,.96,0,{transparent:!0,opacity:.7});return n.castShadow=!1,e.add(n),e}function Bd(){let e=new q;return e.add(Q(.8,.26,.34,`#8a5a3c`,0,.13,0)),e.add(Q(.74,.04,.28,`#4a3426`,0,.27,0)),[`#e05a6a`,`#f2c14e`,`#f28cb1`,`#e05a6a`,`#b58ae0`].forEach((t,n)=>{let r=-.28+n*.14;e.add(Q(.03,.3,.03,`#4c8f57`,r,.42,0)),e.add(Q(.09,.12,.09,t,r,.6,0))}),e}function Vd(){let e=new q;e.add(Q(.4,.06,.4,`#5a5f66`,0,.03,0)),e.add(Q(.05,2,.05,`#f2efe9`,0,1,0));for(let t=0;t<4;t++){let n=Q(.9,.06,.45,t%2?`#f2efe9`:`#d9574a`,0,2,0);n.rotation.y=t*Math.PI/4,e.add(n)}return e.add(Q(.5,.06,.5,`#d9574a`,0,2.08,0)),e}function Hd(){let e=new q;for(let[t,n,r]of[[-.18,.05,.36],[.2,-.1,.28],[.08,.22,.22]])e.add(Q(r,r*.75,r,`#e07a2a`,t,r*.75/2,n)),e.add(Q(.04,.08,.04,`#4c7a46`,t,r*.75+.04,n));return e.add(Q(.5,.05,.3,`#c9a24a`,0,.025,-.25)),e}function Ud(){let e=new q;e.add(Q(.36,.26,.36,`#c0563f`,0,.13,0)),e.add(Q(.1,.3,.1,`#6b4a33`,0,.38,0)),[[.9,.62],[.68,.98],[.46,1.3],[.24,1.58]].forEach(([t,n])=>e.add(Q(t,.34,t,`#2f6b45`,0,n,0)));let t=Q(.14,.14,.04,`#ffd84a`,0,1.82,0,{emissive:`#ffcf40`,emissiveIntensity:1.4});t.castShadow=!1,e.add(t);for(let[t,n,r,i]of[[.36,.7,.2,`#e05a4a`],[-.3,.9,.25,`#f2c14e`],[.2,1.15,-.25,`#4f8fd0`],[-.15,1.4,.13,`#e05a4a`]]){let a=Q(.07,.07,.07,i,t,n,r,{emissive:i,emissiveIntensity:.6});a.castShadow=!1,e.add(a)}let n=new Ba(`#ffd27a`,0,3.5,1.5);return n.position.set(0,1.2,.4),e.add(n),e.userData.light=n,e}function Wd(){let e=new q;return e.add(Q(.08,1.1,.08,`#6b4a33`,0,.55,0)),e.add(Q(.3,.3,.3,`#c9a06a`,0,1.25,0)),e.add(Q(.1,.1,.02,`#3a2a1e`,0,1.27,.16)),e.add(Q(.4,.06,.4,`#b5523f`,0,1.43,0)),e.add(Q(.3,.06,.3,`#c0563f`,0,1.49,0)),e.add(Q(.2,.03,.08,`#6b4a33`,0,1.14,.2)),e}function Gd(){let e=new q;return e.add(Q(.6,.22,.4,`#b88a52`,0,.11,0)),e.add(Q(.5,.04,.3,`#7fc27a`,0,.24,0)),[[`#f28cb1`,-.16],[`#8ec6e8`,0],[`#f2c14e`,.16]].forEach(([t,n],r)=>{e.add(Q(.11,.15,.11,t,n,.33,r%2?.05:-.05))}),e.add(Q(.04,.3,.04,`#9a6c3c`,-.26,.37,0)),e.add(Q(.04,.3,.04,`#9a6c3c`,.26,.37,0)),e.add(Q(.56,.04,.04,`#9a6c3c`,0,.54,0)),e}function Kd(){let e=new q;return e.add(Q(.5,.4,.5,`#c0705a`,0,.2,0)),e.add(Q(.56,.06,.56,`#b35f4a`,0,.42,0)),e.add(Q(.44,.04,.44,`#4a3426`,0,.45,0)),[[`#e05a6a`,-.12,-.1],[`#f2c14e`,.1,-.08],[`#f28cb1`,0,.12],[`#b58ae0`,-.14,.12],[`#e05a6a`,.14,.1]].forEach(([t,n,r],i)=>{let a=.4+i%3*.08;e.add(Q(.03,a,.03,`#4c8f57`,n,.45+a/2,r)),e.add(Q(.1,.13,.1,t,n,.45+a+.05,r))}),e}function qd(){let e=new q;e.add(Q(.5,.05,.9,`#d9574a`,0,.3,0));let t=Q(.5,.05,.6,`#f2efe9`,0,.62,-.5);t.rotation.x=-.8,e.add(t);for(let t of[-.25,.25])e.add(Q(.04,.3,.04,`#8b5a3c`,t,.15,.4)),e.add(Q(.04,.3,.04,`#8b5a3c`,t,.15,-.35));return e}function Jd(){let e=new q;e.add(Q(.9,.5,.6,`#f7f3ec`,0,.55,0)),e.add(Q(.96,.08,.66,`#7fc4d8`,0,.84,0)),e.add(Q(.9,.06,.6,`#f28cb1`,0,.3,0));for(let t of[-.35,.35])e.add(Q(.12,.3,.3,`#3a3f4b`,t,.15,.2)),e.add(Q(.12,.3,.3,`#3a3f4b`,t,.15,-.2));for(let t of[-.4,.4])e.add(Q(.05,.7,.05,`#f2efe9`,t,1.15,0));for(let t=0;t<4;t++)e.add(Q(.24,.06,.7,t%2?`#f2efe9`:`#e87b9a`,-.36+t*.24,1.52,0));return e.add(Q(.1,.14,.1,`#e8b04a`,-.2,.96,.1)),e.add(Q(.12,.12,.12,`#f2c0d0`,-.2,1.08,.1)),e}function Yd(){let e=new q;for(let t of[-.8,.8])e.add(Q(.1,1.3,.1,`#8b5a3c`,t,.65,0));return e.add(Q(1.5,.05,.4,`#e9d9a8`,0,.6,0)),e.add(Q(.5,.05,.4,`#d9574a`,0,.63,0)),e.add(Q(.2,.08,.3,`#f2efe9`,-.5,.67,0)),e}function Xd(){let e=new q,t=[`#d8552f`,`#e88a3a`,`#c2412b`,`#e6b04a`,`#a8672c`];return[[0,0,.7,.3],[-.3,.1,.5,.22],[.3,-.1,.5,.24],[.1,.25,.4,.16],[-.1,-.25,.45,.18]].forEach(([n,r,i,a],o)=>{e.add(Q(i,a,i,t[o%t.length],n,a/2,r))}),e.add(Q(.12,.03,.08,`#e88a3a`,.5,.02,.3)),e.add(Q(.12,.03,.08,`#c2412b`,-.55,.02,-.2)),e}function Zd(){let e=new q;e.add(Q(.06,1.5,.06,`#3a3f4b`,0,.75,0)),e.add(Q(.6,.05,.05,`#3a3f4b`,.25,1.5,0));for(let[t,n,r]of[[.5,1.2,`#e8883a`],[.1,1,`#e05a4a`]]){e.add(Q(.02,.2,.02,`#3a3f4b`,t,n+.3,0));let i=Q(.2,.26,.2,r,t,n,0,{emissive:r,emissiveIntensity:.9,transparent:!0,opacity:.9});i.castShadow=!1,e.add(i)}return e.add(Q(.3,.06,.3,`#3a3f4b`,0,.03,0)),e}function Qd(){let e=new q;return e.add(Q(.8,.5,.5,`#d9b85a`,0,.25,0)),e.add(Q(.82,.04,.52,`#b8943c`,0,.18,0)),e.add(Q(.82,.04,.52,`#b8943c`,0,.38,0)),e.add(Q(.3,.22,.3,`#e07a2a`,.1,.61,0)),e.add(Q(.04,.08,.04,`#4c7a46`,.1,.76,0)),e.add(Q(.2,.15,.2,`#e07a2a`,-.25,.575,.05)),e}function $d(){let e=new q;return e.add(Q(.7,.55,.7,`#f5f8fb`,0,.28,0)),e.add(Q(.5,.45,.5,`#f5f8fb`,0,.78,0)),e.add(Q(.36,.34,.36,`#f5f8fb`,0,1.18,0)),e.add(Q(.05,.05,.05,`#2f2f2f`,-.08,1.24,.19)),e.add(Q(.05,.05,.05,`#2f2f2f`,.08,1.24,.19)),e.add(Q(.06,.06,.18,`#e07a2a`,0,1.16,.26)),e.add(Q(.5,.06,.4,`#d9574a`,0,1,.02)),e.add(Q(.4,.04,.4,`#2f2f2f`,0,1.37,0)),e.add(Q(.26,.2,.26,`#2f2f2f`,0,1.47,0)),e.add(Q(.04,.04,.04,`#2f2f2f`,0,.8,.26)),e.add(Q(.5,.04,.04,`#6b4a33`,0,.9,0)),e}function ef(){let e=new q;e.add(Q(.1,1.5,.1,`#6b4a33`,-.7,.75,0)),e.add(Q(.1,1.5,.1,`#6b4a33`,.7,.75,0)),e.add(Q(1.5,.05,.05,`#6b4a33`,0,1.5,0));let t=[`#ffd27a`,`#ff8a7a`,`#8fd0ff`,`#b6f08f`,`#ffd27a`];for(let n=0;n<9;n++){let r=-.65+n*.1625,i=1.38-Math.sin(n/8*Math.PI)*.1;e.add(Q(.02,.1,.02,`#2f4a35`,r,1.45,0));let a=Q(.08,.1,.08,t[n%t.length],r,i-.08,0,{emissive:t[n%t.length],emissiveIntensity:1.2});a.castShadow=!1,e.add(a)}return e}function tf(){let e=new q;e.add(Q(.5,.06,.95,`#a8582f`,0,.28,0));for(let t of[-.2,.2])e.add(Q(.05,.05,1.1,`#5a5f66`,t,.12,0)),e.add(Q(.05,.14,.05,`#5a5f66`,t,.2,.4)),e.add(Q(.05,.14,.05,`#5a5f66`,t,.2,-.3)),e.add(Q(.05,.1,.1,`#5a5f66`,t,.17,.58));return e.add(Q(.5,.04,.5,`#d9574a`,0,.33,-.1)),e.add(Q(.5,.05,.15,`#f5f8fb`,0,.36,.2)),e.add(Q(.3,.1,.2,`#2f6b45`,0,.38,-.2)),e}var nf={birdhouse:Wd,eggbasket:Gd,tulippot:Kd,deckchair:qd,icecart:Jd,hammock:Yd,leafpile:Xd,lanterns:Zd,hayball:Qd,snowman:$d,lightchain:ef,sled:tf,tulips:Bd,parasol:Vd,pumpkins:Hd,xmastree:Ud,armchair:Od,cactus:kd,sacks:Ad,toybox:jd,easel:Md,olive:Nd,record:Pd,neon:Fd,aquarium:Id,fireplace:Ld,piano:Rd,fountain:zd,bed:Dd,table:xd,chair:Sd,plant:Cd,lamp:wd,shelf:Td,rug:Ed};function rf(e){let t=new q;return t.add(Q(.12,.11,.12,`#f7f3ec`,0,.055,0)),t.add(Q(.1,.012,.1,e,0,.106,0)),t.add(Q(.03,.06,.03,`#f7f3ec`,.075,.06,0)),t}function af(e){let t=new q;t.add(Q(e,1,.8,`#6b4430`,0,.5,0)),t.add(Q(e+.1,.08,.9,`#e9e1d4`,0,1.04,0));for(let n=0;n<e;n++)t.add(Q(.9,.7,.03,n%2?`#7d5139`:`#74492f`,-e/2+.5+n,.5,.41));return t}function of(e,t=25){return e>=Math.ceil(t*.85)?3:e>=Math.ceil(t*.5)?2:+(e>=Math.ceil(t*.2))}function sf(e=0){let t=new q;t.userData.machine=!0;let n=[{body:`#b8bcc2`,top:`#8a8f96`,m:.5,r:.35},{body:`#e4e8ee`,top:`#c3c9d1`,m:.95,r:.15},{body:`#c0703f`,top:`#8f4e2a`,m:.85,r:.25},{body:`#e0b84a`,top:`#b48a1e`,m:.95,r:.18}][e],r={metalness:n.m,roughness:n.r};t.add(Q(.72,.46,.46,n.body,0,.23,0,r)),t.add(Q(.76,.05,.5,n.top,0,.48,0,r)),t.add(Q(.12,.08,.12,`#2f2f2f`,-.16,.12,.26)),t.add(Q(.12,.08,.12,`#2f2f2f`,.16,.12,.26)),t.add(Q(.6,.03,.18,`#5a5f66`,0,.015,.3)),t.add(Q(.06,.06,.02,`#e05a4a`,.28,.36,.235,{emissive:`#e05a4a`,emissiveIntensity:.8}));let i=rf(`#4a2c1a`);if(i.position.set(-.16,.03,.3),t.add(i),e>=1){for(let e of[-.16,.16])t.add(Q(.14,.05,.14,`#d9dde3`,e,.2,.26,{metalness:.95,roughness:.12})),t.add(Q(.04,.04,.16,`#2a2a2a`,e,.2,.37));t.add(Q(.7,.03,.03,`#f4f6f8`,0,.44,.24,{metalness:1,roughness:.08}));let e=rf(`#4a2c1a`);e.position.set(.16,.03,.3),t.add(e),t.add(Q(.12,.1,.3,n.top,-.38,.3,0,r)),t.add(Q(.12,.1,.3,n.top,.38,.3,0,r))}if(e>=2){let e=new Qr(new Ui(.075,.075,.04,14),rd(`#7a4a28`,{metalness:.9,roughness:.3}));e.rotation.x=Math.PI/2,e.position.set(-.24,.62,.1),t.add(e);let n=new Qr(new Ui(.06,.06,.045,14),rd(`#fffaf0`,{emissive:`#fffaf0`,emissiveIntensity:.25}));n.rotation.x=Math.PI/2,n.position.set(-.24,.62,.1),t.add(n);let r=Q(.012,.05,.01,`#d23a2a`,-.24,.63,.125);r.rotation.z=-.7,t.add(r),t.add(Q(.05,.12,.05,`#7a4a28`,-.24,.54,.1,{metalness:.9,roughness:.3})),t.add(Q(.2,.06,.2,`#e8d6b8`,.2,.54,-.05,{metalness:.4,roughness:.4}))}if(e>=3){let e={emissive:`#ffd36a`,emissiveIntensity:1.4};t.add(Q(.68,.025,.02,`#ffe9a8`,0,.06,.235,e)),t.add(Q(.025,.36,.02,`#ffe9a8`,-.355,.24,.235,e)),t.add(Q(.025,.36,.02,`#ffe9a8`,.355,.24,.235,e)),t.add(Q(.5,.02,.02,`#ffe9a8`,0,.52,.235,e));let n=[];for(let e=0;e<3;e++){let e=new Qr(new Gi(.05,7,5),new na({color:`#ffffff`,transparent:!0,opacity:.5,roughness:1}));e.position.set(.3,.6,.1),t.add(e),n.push(e)}t.userData.tick=e=>{n.forEach((t,n)=>{let r=(e*.5+n/3)%1;t.position.set(.3+Math.sin(e*2+n*2)*.03,.58+r*.4,.1),t.scale.setScalar(.6+r*1.1),t.material.opacity=.55*(1-r)})}}return t}function cf(e,t=25){let n=new q,r=e>=Math.ceil(t*.7)?2:+(e>=Math.ceil(t*.3)),i=[`#3a3d42`,`#c9ced6`,`#e0b84a`][r],a={metalness:r?.85:.3,roughness:r?.2:.6};n.add(Q(.2,.05,.22,`#2a2a2a`,0,.025,0)),n.add(Q(.14,.2,.14,i,0,.15,-.02,a)),n.add(Q(.1,.06,.1,`#222`,0,.28,0,a));let o=new Qr(new Ui(.1,.06,.16,8),new na({color:`#d8c8b0`,transparent:!0,opacity:.55,roughness:.2}));o.position.y=.39,n.add(o);let s=new Qr(new Ui(.085,.055,.12,8),rd(`#4a2a18`));return s.position.y=.38,n.add(s),n.add(Q(.12,.03,.12,i,0,.49,0,a)),n.add(Q(.05,.05,.04,`#222`,0,.12,.09)),r>=1&&n.add(Q(.1,.012,.012,`#7cf0c0`,0,.2,.052,{emissive:`#7cf0c0`,emissiveIntensity:1.2})),r>=2&&n.add(Q(.16,.012,.012,`#ffd36a`,0,.06,.112,{emissive:`#ffd36a`,emissiveIntensity:1.4})),n.scale.setScalar(1+.02*e),n}function lf(e,t=15){let n=new q;if(n.add(Q(.4,.2,.3,`#3a3f4b`,0,.1,0)),e<Math.ceil(t*.4))n.add(Q(.3,.2,.04,`#9fd3c7`,0,.3,-.05,{emissive:`#4fa38f`,emissiveIntensity:.3}));else{n.add(Q(.06,.12,.06,`#2a2d34`,0,.26,-.05)),n.add(Q(.38,.26,.03,`#15181d`,0,.45,-.06)),n.add(Q(.34,.22,.01,`#9fe8ff`,0,.45,-.04,{emissive:`#3fb8e0`,emissiveIntensity:.7}));for(let e=0;e<4;e++){let t=.04+e*.03;n.add(Q(.04,t,.012,`#ffffff`,-.1+e*.07,.36+t/2,-.03,{emissive:`#ffffff`,emissiveIntensity:.5}))}e>=Math.ceil(t*.8)&&n.add(Q(.42,.02,.32,`#ffd36a`,0,.005,0,{emissive:`#ffd36a`,emissiveIntensity:1.2}))}if(e>=1){let e=new q;e.add(Q(.1,.05,.15,`#1f2228`,0,.025,0)),e.add(Q(.08,.012,.05,`#7cf0c0`,0,.056,-.03,{emissive:`#7cf0c0`,emissiveIntensity:.9})),e.add(Q(.07,.012,.05,`#555b66`,0,.056,.04)),e.rotation.x=-.25,e.position.set(-.3,.2,.02),n.add(e)}return n}function uf(e,t=10){let n=new q,r=e>=Math.ceil(t*.8)?`#ffd36a`:e>=Math.ceil(t*.4)?`#ff9ec7`:`#fff1c9`,i={emissive:r,emissiveIntensity:.8+e*.12};return n.add(Q(.76,.02,.03,r,0,.39,.22,i)),n.add(Q(.76,.02,.03,r,0,.39,-.22,i)),e>=Math.ceil(t*.4)&&(n.add(Q(.02,.4,.02,r,-.4,.2,.25,i)),n.add(Q(.02,.4,.02,r,.4,.2,.25,i))),e>=Math.ceil(t*.8)&&n.add(Q(.84,.03,.54,`#d9a93a`,0,.415,0,{metalness:.9,roughness:.2})),n}function df(e,t=15){let n=new q,r=e>=Math.ceil(t*.7)?`#ffd36a`:e>=Math.ceil(t*.3)?`#ff9ec7`:`#fff1c9`,i=.8+.07*e,a=.5+.03*e,o=1+a,s=o-a/2+.05;if(n.add(Q(.08,o,.08,`#4a3426`,-i/2+.1,o/2,0)),n.add(Q(.08,o,.08,`#4a3426`,i/2-.1,o/2,0)),n.add(Q(i,a,.07,`#2c2118`,0,s,0)),n.add(Q(i-.12,a-.12,.02,r,0,s,.045,{emissive:r,emissiveIntensity:.9})),n.add(Q(.2,.14,.02,`#7a4a28`,0,s,.06)),e>=Math.ceil(t*.3))for(let e of[-1,1])n.add(Q(.06,.06,.2,`#2c2118`,e*(i/2-.1),o+.03,.08)),n.add(Q(.1,.05,.1,`#ffffff`,e*(i/2-.1),o,.17,{emissive:`#fff1c9`,emissiveIntensity:1.4}));return n}function ff(e,t,n=1){let r=new q,i=Math.min(40,3+e*2),a=[`#ffd36a`,`#ff9ec7`,`#9fe8ff`,`#b7f09a`],o=[];for(let e=0;e<n;e++){let n=2.55-e*.35;r.add(Q(t,.015,.015,`#2a2a2a`,0,n+.04,0));for(let s=0;s<i;s++){let c=-t/2+.2+(t-.4)*s/Math.max(1,i-1),l=Math.sin(s/Math.max(1,i-1)*Math.PI*3)*.05,u=a[(s+e)%a.length],d=new Qr(new Gi(.035,6,4),new na({color:u,emissive:u,emissiveIntensity:1}));d.position.set(c,n-.03+l,0),r.add(d),o.push(d)}}return r.userData.tick=e=>o.forEach((t,n)=>t.material.emissiveIntensity=.7+.5*Math.sin(e*2+n*1.7)),r}function pf(){let e=new q,t=new Qr(new Hi(.8,.4,.5),new na({color:`#dff1f7`,transparent:!0,opacity:.35,roughness:.1}));return t.position.y=.2,e.add(t),e.add(Q(.2,.12,.2,`#f0c9a6`,-.22,.06,0)),e.add(Q(.2,.04,.2,`#c0563f`,-.22,.13,0)),e.add(Q(.2,.14,.2,`#6b3f2a`,.02,.07,0)),e.add(Q(.16,.1,.16,`#f6e7b6`,.25,.05,0)),e}function mf(){let e=new q,t=new Qr(new Ui(.11,.15,.3,10),rd(`#b08a5a`));t.position.y=.15,t.castShadow=!0,e.add(t);let n=new Qr(new Ui(.125,.135,.07,10),rd(`#d9a93a`,{emissive:`#7a5410`,emissiveIntensity:.25}));n.position.y=.14,e.add(n);let r=new Qr(new Ui(.05,.1,.07,8),rd(`#9a744a`));r.position.y=.33,e.add(r),e.add(Q(.03,.03,.15,`#7a1e1e`,0,.33,0));for(let t=0;t<5;t++){let n=new Qr(new Gi(.03,6,4),rd(`#4a2a18`));n.scale.set(1,.6,.75),n.position.set(-.04+t%3*.04,.38+Math.floor(t/3)*.02,t%2*.03-.015),e.add(n)}return e}function hf(){let e=new q;return e.add(Q(.3,1.4,.3,`#6b4a33`,0,.7,0)),e.add(Q(1.4,1,1.4,`#5f9a5c`,0,1.8,0)),e.add(Q(1,.7,1,`#6fae69`,0,2.55,0)),e}function gf(e,t=null){let n={rain:!1,flakes:null,flowers:null,butterflies:0,bees:0,storms:!1,snowmen:!1,santa:!1};return e===0?Object.assign(n,{flowers:`bud`,butterflies:4}):e===1?Object.assign(n,{flowers:`bloom`,butterflies:5,bees:4,storms:!0}):e===2?Object.assign(n,{rain:!0,flakes:`leaves`}):e===3&&Object.assign(n,{flakes:`snow`,snowmen:!0,santa:!0}),t===`regen`&&(n.rain=!0),t===`sonne`&&(n.storms=!1),n}var _f=.9;function vf(e,t,n,r,i=Math.random){let a=e.find(e=>e.stage<3&&Math.hypot(e.x-t,e.z-n)<_f);if(a)return a.stage++,{sm:a,done:a.stage>=3};if(e.length>=4)return null;let o={x:Math.round(t*100)/100,z:Math.round(n*100)/100,stage:1,melt:r+2+Math.floor(i()*4)};return e.push(o),{sm:o,done:!1}}function yf(e,t,n){return!n||!Array.isArray(e)?[]:e.filter(e=>e.melt>t)}var bf={chance:.25,minLen:35,maxLen:70,minGap:45,maxGap:100};function xf(e=Math.random){return e()>=bf.chance?0:bf.minLen+e()*(bf.maxLen-bf.minLen)}var Sf={butterfly:[`🦋 Der Schmetterling dreht eine Ehrenrunde.`,`🦋 Flatter flatter. Der war schneller als du.`,`🦋 Er setzt sich gleich wieder hin. Vielleicht.`],bee:[`🐝 Bzzz. Keine Zeit, die Blumen warten.`,`🐝 Die Biene ist im Dienst und lässt sich nicht stören.`,`🐝 Summ. Honig für den Kaffee gibt es trotzdem nicht.`],snowman:[`☃️ Der Schneemann nickt höflich.`,`☃️ Er hätte gern einen Kakao. Leider keine Hände.`,`☃️ Die Möhre sitzt. Alles in Ordnung.`],santa:[`🎅 Ho ho ho! Schöne Grüße ans ganze Café.`,`🎅 Der Schlitten ist ausgebucht. Vielleicht nächstes Jahr.`,`🎅 Die Rentiere hätten gern einen Espresso.`],flower:[`🌼 Duftet nach Frühling.`,`🌷 Hübsch. Nicht pflücken.`,`🌸 Eine Hummel war schon da.`]},Cf=(e,t=Math.random)=>{let n=Sf[e]||[];return n[Math.floor(t()*n.length)]||``},wf=(e,t)=>e+Math.random()*(t-e),Tf=e=>e[Math.floor(Math.random()*e.length)],Ef=[`#d9772b`,`#c2412b`,`#e6b04a`,`#a5532a`,`#e88a3a`,`#b8862b`].map(e=>new J(e)),Df=new J(`#ffffff`),Of=[`#f7cdd8`,`#fff3b0`,`#d9c8f0`,`#ffffff`,`#c8e6b0`],kf=[`#e84f6f`,`#f2c14e`,`#ffffff`,`#b77ee0`,`#f28b30`,`#4f8fe8`],Af=[`#f2a23c`,`#7fb3e8`,`#f6e27a`,`#f29bbd`,`#ffffff`],jf=class{constructor(e){this.world=e,this.root=new q,e.scene.add(this.root),this.flowerGroup=new q,this.critters=new q,this.snowGroup=new q,this.root.add(this.flowerGroup,this.critters,this.snowGroup),this.rain=this.makePoints(1600,{color:`#6f93b8`,size:.11}),this.flakes=this.makePoints(900,{size:.13,vertexColors:!0}),this.fx=gf(-1),this.storm=0,this.stormCd=wf(20,40),this.dim=1,this.flash=0,this.flashCd=0,this.santa=null,this.santaCd=wf(40,90),this.santaRay=new lo,this.t=0,this.butterflies=[],this.bees=[],this.treesRef=null}bind(e){this.game=e,e.state.snowmen=Array.isArray(e.state.snowmen)?e.state.snowmen:[]}makePoints(e,t){let n=new Or;n.setAttribute(`position`,new pr(new Float32Array(e*3),3)),t.vertexColors&&n.setAttribute(`color`,new pr(new Float32Array(e*3),3));let r=new Fi(n,new Ai({color:t.color||`#ffffff`,size:t.size,transparent:!0,opacity:.85,depthWrite:!1,vertexColors:!!t.vertexColors}));r.visible=!1,r.frustumCulled=!1,this.root.add(r);for(let t=0;t<e;t++)this.respawn(r,t,Math.random()*12);return r}inHouse(e,t,n=.4){let r=-6-n,i=Z.w-6+n,a=Z.d/2+n;return e>r&&e<i&&t>-a&&t<a}respawn(e,t,n=12){let r=e.geometry.attributes.position.array,i=Z.w-6+.4,a,o;do a=-14+Math.random()*(i+22),o=-10+Math.random()*22;while(this.inHouse(a,o));r[t*3]=a,r[t*3+1]=n,r[t*3+2]=o}apply(e,t){this.idx=e,this.fx=gf(e,t);let n=this.game?.state;n&&(n.snowmen=yf(n.snowmen,n.day,this.fx.snowmen)),this.fx.storms||(this.storm=0),this.rain.visible=this.fx.rain||this.storm>0,this.setFlakes(this.fx.flakes),this.rebuild()}setFlakes(e){let t=this.flakes;if(t.visible=!!e,!e)return;let n=t.geometry.attributes.color.array,r=n.length/3;for(let t=0;t<r;t++){let r=e===`snow`?Df:Ef[t%Ef.length];n[t*3]=r.r,n[t*3+1]=r.g,n[t*3+2]=r.b}t.geometry.attributes.color.needsUpdate=!0,t.geometry.setDrawRange(0,e===`leaves`?260:r),t.material.size=e===`leaves`?.18:.13,this.flakeMode=e}anchors(){return(this.world.trees||[]).map(e=>({x:e.position.x,z:e.position.z,palm:e.userData.kind===`palm`}))}rebuild(){this.treesRef=this.world.trees,this.buildFlowers(),this.buildCritters(),this.buildSnowmen()}clear(e){for(let t of[...e.children])t.isInstancedMesh&&t.dispose(),e.remove(t)}buildFlowers(){this.clear(this.flowerGroup);let e=this.fx.flowers;if(!e)return;let t=[],n=[],r=e===`bloom`,i=7,a=()=>(i=(i*9301+49297)%233280)/233280;for(let e of this.anchors()){if(e.palm)continue;let i=r?14:10;for(let o=0;o<i;o++){let i=a()*Math.PI*2,o=.8+a()*1.8,s=e.x+Math.cos(i)*o,c=e.z+Math.sin(i)*o;if(this.inHouse(s,c,.3))continue;let l=r||a()<.4,u=r?.42+a()*.14:.26+a()*.1;t.push({x:s,y:u/2-.1,z:c,color:`#4f8a3f`,sy:u/.2}),l&&t.push({x:s+.07,y:u*.3-.1,z:c,color:`#5f9a4c`,sy:.5}),n.push({x:s,y:u-.08,z:c,color:l?(r?kf:Of)[Math.floor(a()*5)]:`#8fc46a`,sy:l?1:.7})}}if(!t.length)return;this.flowerGroup.add(sd(.06,.2,.06,t,{cast:!1}));let o=r?.24:.16,s=sd(o,o*.8,o,n,{cast:!1});s.userData.amb=`flower`,this.flowerGroup.add(s)}makeButterfly(){let e=new q,t=Tf(Af);e.add(Q(.03,.03,.14,`#3b2a20`));let n=new q;n.add(Q(.14,.01,.12,t,.07,0,0));let r=new q;r.add(Q(.14,.01,.12,t,-.07,0,0)),e.add(n,r);for(let t of e.children)t.traverse(e=>{e.castShadow=!1});return e.userData={amb:`butterfly`,wl:n,wr:r},e}makeBee(){let e=new q;e.add(Q(.07,.07,.1,`#f2c14e`)),e.add(Q(.072,.072,.025,`#2a2a2a`,0,0,.01));let t=Q(.06,.01,.04,`#ffffff`,.05,.05,0,{transparent:!0,opacity:.7}),n=Q(.06,.01,.04,`#ffffff`,-.05,.05,0,{transparent:!0,opacity:.7});return e.add(t,n),e.traverse(e=>{e.castShadow=!1}),e.userData={amb:`bee`,wl:t,wr:n},e}buildCritters(){this.clear(this.critters),this.butterflies=[],this.bees=[];let e=(Z.w-12)/2,t=t=>t.sort((t,n)=>Math.hypot(t.x-e,t.z)-Math.hypot(n.x-e,n.z)),n=t(this.anchors().filter(e=>!e.palm)),r=n.length?n:t(this.anchors());if(r.length){for(let e=0;e<this.fx.butterflies;e++){let t=this.makeButterfly();t.scale.setScalar(2.2);let n=r[e%r.length];t.userData.path={cx:n.x,cz:n.z,r:wf(1,2.4),h:wf(.8,1.9),sp:wf(.25,.5),ph:wf(0,6.28)},this.critters.add(t),this.butterflies.push(t)}for(let e=0;e<this.fx.bees;e++){let t=this.makeBee();t.scale.setScalar(2);let n=r[(e*2+1)%r.length];t.userData.path={cx:n.x,cz:n.z,r:wf(.8,1.8),h:wf(.5,.9),sp:wf(1.1,1.8),ph:wf(0,6.28)},this.critters.add(t),this.bees.push(t)}}}makeSnowman(e){let t=new q;t.position.set(e.x,-.1,e.z),t.rotation.y=(e.x*7+e.z*3)%6.28;let n=[[.62,.31],[.46,.82],[.34,1.2]];for(let r=0;r<Math.min(e.stage,3);r++){let[e,i]=n[r];t.add(Q(e,e*.92,e,`#f7fbff`,0,i,0))}return e.stage>=2&&(t.add(Q(.06,.06,.06,`#2a2a2a`,0,.9,.24)),t.add(Q(.06,.06,.06,`#2a2a2a`,0,.74,.24)),t.add(Q(.5,.06,.08,`#6b4a33`,.42,.88,0)),t.add(Q(.5,.06,.08,`#6b4a33`,-.42,.88,0))),e.stage>=3&&(t.add(Q(.05,.05,.05,`#1e1e1e`,.08,1.26,.17)),t.add(Q(.05,.05,.05,`#1e1e1e`,-.08,1.26,.17)),t.add(Q(.06,.06,.2,`#f08a24`,0,1.18,.24)),t.add(Q(.4,.04,.4,`#262626`,0,1.39,0)),t.add(Q(.26,.22,.26,`#262626`,0,1.52,0)),t.add(Q(.48,.08,.48,`#c2412b`,0,1.02,0))),t.userData={amb:`snowman`,sm:e},t}buildSnowmen(){this.clear(this.snowGroup);let e=this.game?.state.snowmen||[];if(this.fx.snowmen)for(let t of e)this.snowGroup.add(this.makeSnowman(t))}makeSleigh(){let e=new q;e.add(Q(.9,.3,.5,`#c2412b`,0,0,0)),e.add(Q(.2,.35,.5,`#c2412b`,-.4,.25,0)),e.add(Q(1,.05,.06,`#e6b04a`,0,-.2,.2)),e.add(Q(1,.05,.06,`#e6b04a`,0,-.2,-.2)),e.add(Q(.3,.35,.3,`#d23b2f`,.05,.3,0)),e.add(Q(.22,.2,.22,`#f1c9a5`,.05,.57,0)),e.add(Q(.24,.1,.24,`#ffffff`,.08,.5,0)),e.add(Q(.2,.14,.2,`#d23b2f`,.05,.74,0)),e.add(Q(.36,.3,.36,`#8a5a3c`,-.15,.25,0));for(let t=0;t<2;t++){let n=1+t*.75;e.add(Q(.5,.22,.18,`#8a5a3c`,n,.1,0)),e.add(Q(.14,.22,.14,`#8a5a3c`,n+.28,.3,0)),e.add(Q(.05,.05,.05,t?`#7a4f33`:`#e23b3b`,n+.38,.32,0)),e.add(Q(.04,.25,.04,`#5a3a22`,n-.15,-.1,.06)),e.add(Q(.04,.25,.04,`#5a3a22`,n+.15,-.1,-.06))}return e.traverse(e=>{e.castShadow=!1}),e.userData={amb:`santa`},e}update(e){let t=this.game?.state.clock.phase===`day`;if(this.fx.storms&&t){if(this.storm>0){if(this.storm-=e,this.flashCd-=e,this.flashCd<=0){this.flashCd=wf(4,10),this.flash=1;let e=wf(400,1800);setTimeout(()=>this.game?.audio?.thunder?.(.35+Math.random()*.25),e)}this.storm<=0&&(this.stormCd=wf(bf.minGap,bf.maxGap))}else this.stormCd-=e,this.stormCd<=0&&(this.storm=xf(),this.flashCd=wf(3,6),this.storm?this.game?.ui.toast(`⛈️ Ein Sommergewitter zieht auf.`,``,3e3):this.stormCd=wf(bf.minGap,bf.maxGap))}else this.storm>0&&(this.storm=0);this.rain.visible=this.fx.rain||this.storm>0,this.fx.santa&&!this.santa&&(this.santaCd-=e,this.santaCd<=0&&(this.santa=this.makeSleigh(),this.santa.userData.t=0,this.santa.userData.lane=wf(-.05,.08),this.root.add(this.santa)))}frame(e){this.treesRef!==this.world.trees&&this.rebuild(),this.t+=e;let t=this.t;this.dim+=((this.storm>0?.28:1)-this.dim)*Math.min(1,e*.8),this.flash=Math.max(0,this.flash-e*6),this.world.stormDim=this.dim,this.world.stormFlash=this.flash*3,this.fall(e);let n=this.game?.state.clock.phase===`night`;if(this.critters.visible=!n&&this.storm<=0,this.critters.visible){for(let n of this.butterflies){let r=n.userData.path,i=t*r.sp+r.ph+(n.userData.flee||0);n.userData.flee>0&&(n.userData.flee=Math.max(0,n.userData.flee-e*.8));let a=(n.userData.flee||0)*1.5;n.position.set(r.cx+Math.cos(i)*r.r,r.h+Math.sin(i*2.3)*.25+a,r.cz+Math.sin(i*1.3)*r.r),n.rotation.y=-i+Math.PI/2;let o=Math.sin(t*18+r.ph)*.9;n.userData.wl.rotation.z=o,n.userData.wr.rotation.z=-o}for(let e of this.bees){let n=e.userData.path,r=t*n.sp+n.ph;e.position.set(n.cx+Math.cos(r)*n.r+Math.sin(t*9+n.ph)*.05,n.h+Math.sin(t*5+n.ph)*.06,n.cz+Math.sin(r*1.7)*n.r),e.rotation.y=-r;let i=Math.sin(t*40)*.6;e.userData.wl.rotation.z=i,e.userData.wr.rotation.z=-i}}for(let t of this.snowGroup.children){let n=t.userData.wobble||0;n>0&&(t.userData.wobble=Math.max(0,n-e*1.5),t.rotation.z=Math.sin(n*18)*.08*n)}if(this.santa){let t=this.santa.userData;t.t+=e;let n=this.world.camera,r=-1.3+t.t*.13;this.santaRay.setFromCamera({x:r,y:.7+t.lane+Math.sin(t.t*1.5)*.03},n);let i=this.santaRay.ray;this.santa.position.copy(i.origin).addScaledVector(i.direction,18);let a=new W(1,0,0).applyQuaternion(n.quaternion);this.santa.rotation.y=Math.atan2(-a.z,a.x),r>1.3&&(this.root.remove(this.santa),this.santa=null,this.santaCd=wf(70,160))}}fall(e){if(this.rain.visible){let t=this.rain.geometry.attributes.position.array,n=this.storm>0?16:11;for(let r=0;r<t.length/3;r++)t[r*3+1]-=n*e,t[r*3+1]<0&&this.respawn(this.rain,r);this.rain.geometry.attributes.position.needsUpdate=!0}if(this.flakes.visible){let t=this.flakes,n=t.geometry.attributes.position.array,r=this.flakeMode===`snow`,i=r?1.4:1.6,a=r?.4:1.3,o=Math.min(n.length/3,t.geometry.drawRange.count);for(let s=0;s<o;s++)n[s*3+1]-=i*e,n[s*3]+=Math.sin(n[s*3+1]*1.3+s)*e*a,r||(n[s*3+2]+=Math.cos(n[s*3+1]*1.1+s*.7)*e*a*.5),n[s*3+1]<0&&this.respawn(t,s);t.geometry.attributes.position.needsUpdate=!0}}roots(){let e=[];return this.critters.visible&&e.push(this.critters),this.flowerGroup.children.length&&e.push(this.flowerGroup),this.snowGroup.children.length&&e.push(this.snowGroup),this.santa&&e.push(this.santa),e}clickObj(e){let t=e;for(;t&&!t.userData.amb;)t=t.parent;if(!t)return!1;let n=t.userData.amb,r=this.game?.ui,i=this.game?.audio;if(n===`butterfly`&&(t.userData.flee=2.5),n===`snowman`){if(t.userData.sm.stage<3)return this.build(t.userData.sm.x,t.userData.sm.z);t.userData.wobble=1}return n===`santa`?(i?.blip(1568,.1,.08),setTimeout(()=>i?.blip(1760,.12,.08),120),setTimeout(()=>i?.blip(2093,.16,.08),260)):i?.blip(n===`bee`?220:1046,.1,.06),r?.toast(Cf(n),``,2500),!0}clickGround(e){if(!this.fx.snowmen||!this.world.outside)return!1;let t=this.world.raycastFirst(e,[this.world.outside]);if(!t)return!1;if(t.object!==this.world.ground)return t.point.y<.05&&!this.inHouse(t.point.x,t.point.z,.6)&&(this.game.ui.toast(`🧹 Hier ist schon geräumt. Auf der Wiese liegt genug Schnee.`,``,2200),!0);let{x:n,z:r}=t.point;return!this.inHouse(n,r,.6)&&this.build(n,r)}build(e,t){let n=this.game.state,r=vf(n.snowmen,e,t,n.day);return r?(this.game.audio?.blip(330,.12,.06),r.done?this.game.ui.toast(`☃️ Fertig! Der Schneemann hält ein paar Tage.`,``,3e3):r.sm.stage===1&&this.game.ui.toast(`❄️ Eine Schneekugel. Noch zweimal klicken.`,``,2e3),this.buildSnowmen(),!0):(this.game.ui.toast(`☃️ Genug Schneemänner für heute. Die anderen müssen erst schmelzen.`,``,2500),!0)}};function Mf(){return typeof document<`u`&&document.documentElement.classList.contains(`phone`)}function Nf(e){if(!Mf())return;let t=document.getElementById(`ui`),n=e=>t.querySelector(e),r=n(`.actions`);if(!r||n(`#btnMore`))return;let i={upgrades:`Ausbau`,personal:`Team`,hunde:`Hunde`,sammeln:`Sammeln`,werte:`Werte`};r.querySelectorAll(`[data-panel]`).forEach(e=>{let t=e.querySelector(`.lbl`);t&&i[e.dataset.panel]&&(t.textContent=i[e.dataset.panel])});let a=n(`#btnEdit .lbl`);a&&(a.textContent=`Einrichten`);let o=n(`#btnRotate`);o&&(o.textContent=`↻`,o.title=`Drehen`);let s=n(`#btnMenu`);s.innerHTML=`☰<span class="lbl">Menü</span>`,s.classList.remove(`round`);let c=document.createElement(`button`);c.className=`btn`,c.id=`btnMore`,c.title=`Mehr: Sammeln, Werte, Extras, Musik, Speichern`,c.innerHTML=`⋯<span class="lbl">Mehr</span><i class="dot hidden" id="moreDot"></i>`,r.insertBefore(c,s);let l=(n(`#btnExtras`)?.textContent||`✨`).trim().slice(0,2),u=document.createElement(`div`);u.className=`more hidden`,u.innerHTML=`
    <div class="more-card">
      <header><h2>Mehr</h2><button class="btn round close" title="Schließen">✕</button></header>
      <div class="more-grid">
        <button class="mtile" data-go="sammeln"><b>🏆</b><span>Sammeln</span><i class="dot hidden" data-dot="colDot"></i></button>
        <button class="mtile" data-go="werte"><b>📊</b><span>Café-Werte</span></button>
        <button class="mtile" data-go="extras"><b>${l}</b><span>Extras</span><i class="dot hidden" data-dot="xDot"></i></button>
        <button class="mtile" data-go="save"><b>💾</b><span>Speichern</span></button>
      </div>
      <h3>🎵 Musik</h3>
      <div class="more-music"></div>
    </div>`,t.appendChild(u);let d=n(`.actions .music`);d&&u.querySelector(`.more-music`).appendChild(d);let f=n(`#btnMusic`);f&&(f.innerHTML=`🎵<span class="lbl">An/Aus</span>`);let p=()=>u.classList.add(`hidden`),m=()=>{e.ui.closePanel?.(),u.classList.remove(`hidden`)};c.addEventListener(`click`,()=>u.classList.contains(`hidden`)?m():p()),r.addEventListener(`click`,e=>{e.target.closest(`#btnMore`)||p()}),u.addEventListener(`click`,t=>{if(t.target===u||t.target.closest(`.close`))return p();let r=t.target.closest(`[data-go]`);if(!r)return;let i=r.dataset.go;p(),i===`sammeln`||i===`werte`?e.ui.togglePanel(i):i===`extras`?n(`#btnExtras`)?.click():i===`save`&&n(`#btnSave`)?.click()});let h=n(`.quests`),g=h?.querySelector(`h4`);g&&(g.innerHTML=`📋 Ziele <span class="qcount"></span><span class="qarrow">▾</span>`,g.addEventListener(`click`,()=>h.classList.toggle(`open`)));let _=()=>{let t=!1;if(u.querySelectorAll(`[data-dot]`).forEach(e=>{let n=document.getElementById(e.dataset.dot),r=!!n&&!n.classList.contains(`hidden`);e.classList.toggle(`hidden`,!r),t||=r}),n(`#moreDot`)?.classList.toggle(`hidden`,!t),r.querySelectorAll(`[data-panel]`).forEach(t=>t.classList.toggle(`active`,e.ui.panel===t.dataset.panel)),g){let e=h.querySelectorAll(`.quest`).length,t=h.querySelectorAll(`.quest.done`).length,n=g.querySelector(`.qcount`),r=e?`${t}/${e}`:``;n.textContent!==r&&(n.textContent=r)}};_(),setInterval(_,400);let v=n(`.drawer`);if(v){let t=0,n=0,r=0,i=!1,a=e=>{for(;e&&e!==v;e=e.parentElement){let t=getComputedStyle(e).overflowX;if((t===`auto`||t===`scroll`)&&e.scrollWidth>e.clientWidth+2)return!0}return!1},o=()=>{v.style.transform=``,v.style.transition=``};v.addEventListener(`touchstart`,e=>{e.touches.length===1&&(t=e.touches[0].clientX,n=e.touches[0].clientY,r=0,i=!a(e.target)&&null)},{passive:!0}),v.addEventListener(`touchmove`,e=>{if(i===!1||e.touches.length!==1)return;let a=e.touches[0].clientX-t,o=e.touches[0].clientY-n;i===null&&(Math.abs(a)<10&&Math.abs(o)<10||(i=a>0&&Math.abs(a)>Math.abs(o)*1.3,!i))||(r=Math.max(0,a),v.style.transition=`none`,v.style.transform=`translateX(${r}px)`)},{passive:!0});let s=()=>{i?(i=!1,v.style.transition=`transform 0.18s ease-out`,r>90?(v.style.transform=`translateX(110%)`,setTimeout(()=>{e.ui.closePanel(),o()},180)):(v.style.transform=``,setTimeout(o,200))):i=!1};v.addEventListener(`touchend`,s),v.addEventListener(`touchcancel`,s)}window.addEventListener(`keydown`,e=>{e.key===`Escape`&&!u.classList.contains(`hidden`)&&(p(),e.stopImmediatePropagation())},!0)}function Pf(e){return!Mf()||!e?e:e.replace(/ \((R|Entf|Esc)\)/g,``).replace(/ \(oder Leertaste\)/g,``).replace(/ oder Leertaste( tippen)?/g,``).replace(/Klicke/g,`Tippe`).replace(/Klicken/g,`Tippen`).replace(/anklicken/g,`antippen`).replace(/klicken/g,`tippen`).replace(/Klick auf/g,`Tippe auf`).replace(/unter 🏠 Café/g,`unter 🛠️ Ausbau`).replace(/im Personal /g,`unter 🧑‍🍳 Team `).replace(/unter 🏆 Sammeln/g,`unter ⋯ Mehr bei 🏆 Sammeln`).replace(/unter „Sammeln“/g,`unter „⋯ Mehr“ bei „Sammeln“`).replace(/ \(Knopf 🎡\)/g,` (unter ⋯ Mehr)`)}function Ff(e,t,n=6){for(let t of e)t.ox*=.85,t.oy*=.85;for(let r=0;r<8;r++){for(let r=0;r<e.length;r++){let i=e[r];for(let a=r+1;a<e.length;a++){let r=e[a],o=r.ax+r.ox-(i.ax+i.ox),s=r.ay+r.oy-r.h/2-(i.ay+i.oy-i.h/2),c=(i.w+r.w)/2+n-Math.abs(o),l=(i.h+r.h)/2+n-Math.abs(s);if(c<=0||l<=0)continue;let u=s<0?r:i;if(c<=l*2||u.ay+u.oy-u.h-l<t.t){let e=(o<0?-c:c)/2;i.ox-=e,r.ox+=e}else u.oy-=l}}for(let n of e){if(n.ax<0||n.ax>t.vw)continue;let e=t.l+n.w/2,r=t.r-n.w/2;e<=r&&(n.ox=Math.min(Math.max(n.ax+n.ox,e),r)-n.ax);let i=n.ay+n.oy-n.h;i<t.t&&(n.oy+=t.t-i)}}}var If={"🛠️ Upgrades":`🛠️ Ausbau`,"🐶 Personal":`🧑‍🍳 Team`};function Lf(e){return Mf()&&If[e]||e}var Rf=[5.25,6.05],zf=3,Bf=.2,Vf=`#efe4d3`,Hf=`#6f8f7a`,Uf=new J(`#f6d7b0`),Wf=new J(`#bfe0f0`),Gf=new J(`#f0a878`),Kf=new J(`#1b2340`),qf=new J(`#6f7a86`),Jf=new J(`#ffe2b8`),Yf=new J(`#ffffff`),Xf=new J(`#ffb47a`),Zf=new J(`#8fa3ff`);function Qf(e){e.traverse(e=>{e.userData.own&&(e.isInstancedMesh?e.dispose():(e.geometry?.dispose(),e.material&&(e.material.map?.dispose(),e.material.dispose())))})}function $f(e){return e.userData.own=!0,e}function ep(e,t,n){let r=document.createElement(`canvas`);r.width=e,r.height=t,n(r.getContext(`2d`),e,t);let i=new Ri(r);return i.colorSpace=Re,i.anisotropy=4,i}function tp(e){let t=new q;t.add(Q(e,.08,.06,`#a8704c`,0,.45,0)),t.add(Q(e,.08,.06,`#a8704c`,0,.85,0));for(let n=-e/2;n<=e/2+.01;n+=1)t.add(Q(.1,1,.1,`#8a5a3c`,n,.5,0));return t}function np(e,t=[]){let n=new q,r=(e,t,r,i,a=!1)=>{if(t-e<=.001||i-r<=.001)return;let o=Q(t-e,i-r,Bf,Vf,(e+t)/2,(r+i)/2,0);o.userData.lintel=a,n.add(o),r===0&&n.add(Q(t-e,Math.min(1,i),.03,Hf,(e+t)/2,Math.min(1,i)/2,.115))},i=-e/2;for(let e of[...t].sort((e,t)=>e.c-t.c)){let t=e.c-e.w/2,a=e.c+e.w/2;if(r(i,t,0,zf),r(t,a,0,e.y0),r(t,a,e.y1,zf,e.y0===0),e.glass){let t=$f(new Qr(new Hi(e.w,e.y1-e.y0,.04),new na({color:`#cfe8f5`,transparent:!0,opacity:.35,roughness:.05})));t.position.set(e.c,(e.y0+e.y1)/2,0),n.add(t),n.add(Q(e.w+.1,.06,.32,`#5a3d2b`,e.c,e.y0,.06)),n.add(Q(.05,e.y1-e.y0,.08,`#5a3d2b`,e.c,(e.y0+e.y1)/2,0))}i=a}return r(i,e/2,0,zf),n}var rp=class{constructor(e){this.container=e,this.quality=`hoch`,this.renderer=new Dl({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=1,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.05,e.appendChild(this.renderer.domElement),this.scene=new Pn,this.scene.background=new J(`#f6d7b0`),this.scene.fog=new Nn(`#f6d7b0`,30,60),this.camera=new Ra(40,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(11,12,14),this.controls=new Rl(this.camera,this.renderer.domElement),this.controls.target.set(0,.5,.5),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.enablePan=!1,this.controls.minDistance=8,this.controls.maxDistance=26,this.controls.minPolarAngle=.35,this.controls.maxPolarAngle=1.2,this.controls.update(),this.raycaster=new lo,this.floorPlane=new Mr(new W(0,1,0),0),this.buildLights(),this.buildOutside(),this.rebuildRoom(),this.buildCounter(),this.ambience=new jf(this),window.addEventListener(`resize`,()=>this.resize())}setQuality(e){this.quality=e;let t=e===`niedrig`;this.renderer.setPixelRatio(t?1:Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!t,this.scene.traverse(e=>{if(e.material){let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)e.needsUpdate=!0}})}tileToWorld(e,t){return new W(e-6+.5,0,t-Z.d/2+.5)}worldToTile(e){return{x:Math.floor(e.x+6),z:Math.floor(e.z+Z.d/2)}}pickTile(e){this.raycaster.setFromCamera(e,this.camera);let t=new W;return this.raycaster.ray.intersectPlane(this.floorPlane,t)?this.worldToTile(t):null}raycastFirst(e,t){return this.raycaster.setFromCamera(e,this.camera),this.raycaster.intersectObjects(t,!0)[0]||null}pick(e,t){this.raycaster.setFromCamera(e,this.camera);let n=this.raycaster.intersectObjects(t,!0);return n.length?n[0].object:null}buildLights(){this.hemi=new Ea(`#fff6e8`,`#8a6a52`,1.1),this.scene.add(this.hemi),this.sun=new Ua(`#ffffff`,2),this.sun.position.set(8,14,6),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let e=this.sun.shadow.camera;e.left=-12,e.right=12,e.top=12,e.bottom=-12,e.near=1,e.far=50,this.sun.shadow.bias=-5e-4,this.scene.add(this.sun),this.inside=[];for(let e of[-3,3]){let t=new Ba(`#ffcf8a`,.5,14,1);t.position.set(e,2.7,0),this.scene.add(t),this.inside.push(t);let n=Q(.3,.25,.3,`#2f2f2f`,e,2.75,0),r=Q(.18,.1,.18,`#fff1c9`,e,2.58,0,{emissive:`#ffcf70`,emissiveIntensity:1});this.scene.add(n,r,Q(.03,.4,.03,`#2f2f2f`,e,3,0))}}rebuildRoom(){this.room&&(Qf(this.room),this.scene.remove(this.room));let e=new q;this.room=e,this.scene.add(e);let t=Z.w,n=Z.d/2,r=t-6,i=(-6+r)/2,a=e=>e<12?0:e<15?1:e<18?2:3,o=[[`#c89b6d`,`#bf8f60`,`#d1a577`],[`#ece3d4`,`#ddd0bc`,`#ece3d4`],[`#c19466`,`#b5875a`,`#c99d6e`],[`#8fbf6a`,`#86b662`,`#93c470`]],s=[];for(let e=0;e<t;e++)for(let t=0;t<Z.d;t++)s.push({x:e-6+.5,y:-.05,z:t-n+.5,color:o[a(e)][(e*7+t*3)%3]});e.add(sd(1,.1,1,s,{cast:!1}));let c=this.grid?.visible||!1;this.grid=$f(new mo(t,t,`#7a5a40`,`#7a5a40`)),this.grid.scale.z=Z.d/t,this.grid.position.set(i,.006,0),this.grid.material.transparent=!0,this.grid.material.opacity=.35,this.grid.visible=c,e.add(this.grid);let l=this.tileToWorld(Ql.x,Ql.z).x,u=(e,t=1.6)=>({c:e,w:t,y0:1,y1:2.3,glass:!0}),d=np(12.4);d.position.set(0,0,-n-Bf/2),this.addBackDecor(d);let f=[{c:-l,w:1,y0:0,y1:2.3},u(3.2,2.4),u(-3.4,2.2)],p=np(12.4,f);p.position.set(0,0,n+Bf/2),p.rotation.y=Math.PI;let m=[u(-2),u(2)],h=np(Z.d+.4,m);h.position.set(-6-Bf/2,0,0),h.rotation.y=Math.PI/2,this.walls=[{g:d,n:new W(0,0,-1),ext:n,key:`back`,len:12.4,openings:[]},{g:p,n:new W(0,0,1),ext:n,key:`front`,len:12.4,openings:f},{g:h,n:new W(-1,0,0),ext:6,key:`left`,len:Z.d+.4,openings:m}];let g=Math.min(t,15)-6;if(t>12){let e=g-6,t=(6+g)/2,r={c:0,w:e-.3,y0:.5,y1:2.7,glass:!0},i=np(e,[r]);i.position.set(t,0,-n-Bf/2);let a=np(e,[r]);a.position.set(t,0,n+Bf/2),a.rotation.y=Math.PI,this.walls.push({g:i,n:new W(0,0,-1),ext:n,key:`glasB`,len:e,openings:[r]},{g:a,n:new W(0,0,1),ext:n,key:`glasF`,len:e,openings:[r]})}if(t<=15){let e=t>12?[{c:0,w:Z.d-1,y0:.5,y1:2.7,glass:!0}]:[u(-2),u(2)],n=np(Z.d+.4,e);n.position.set(r+Bf/2,0,0),n.rotation.y=-Math.PI/2,this.walls.push({g:n,n:new W(1,0,0),ext:r,key:`right`,len:Z.d+.4,openings:e})}else{let t=r-g,i=(g+r)/2,a=tp(t);a.position.set(i,0,-n);let o=tp(t);o.position.set(i,0,n);let s=tp(Z.d);s.position.set(r,0,0),s.rotation.y=Math.PI/2,e.add(a,o,s)}for(let t of this.walls)e.add(t.g);this.trees=this.trees.filter(e=>!(this.roomTrees||[]).includes(e)),this.roomTrees=[];for(let[t,n]of[[r+2.5,-3],[r+2.5,2.5]]){let r=this.makeSceneTree();r.position.set(t,0,n),e.add(r),this.trees.push(r),this.roomTrees.push(r)}let _=Q(t+6,.1,3,{japan:`#cbbfa8`,strand:`#d8c49a`,altstadt:`#b3aa9e`}[this.scenario]||`#d4cfc7`,i,-.06,n+1.7);_.castShadow=!1,e.add(_);let v=this.sun.shadow.camera;v.right=Math.max(12,r+4),v.updateProjectionMatrix(),this.controls.target.x=i,this.controls.maxDistance=26+(t-12)*.9,this.camera.position.x+=i-(this.lastCx||0),this.lastCx=i,Mf()&&t!==this.lastW&&this.framePhone(t),this.lastW=t,this.controls.update(),this.season!==void 0&&this.setSeason(this.season),this.onWallsBuilt?.()}framePhone(e){let t=this.controls.target,n=15.4+.6*(e-12);if(this.lastW===void 0){this.camera.position.setFromSphericalCoords(n,1.08,.28).add(t);return}let r=this.camera.position.clone().sub(t);r.length()<n&&this.camera.position.copy(t).add(r.setLength(n))}addBackDecor(e){let t=.12000000000000001,n=$f(new Qr(new Wi(4,1),new na({roughness:.9})));n.position.set(1,2.35,t),e.add(n),this.nameMesh=n,this.drawSign();let r=$f(new Qr(new Wi(1.4,1.75),new na({roughness:.95})));r.position.set(-3.6,1.95,t),e.add(r),this.menuMesh=r,this.menuKey=null,this.menuNames&&this.drawMenu(this.menuNames,this.menuKeyLast),e.add(Q(1.6,.06,.3,`#7a4f33`,4.2,1.6,.25)),[`#6b3f2a`,`#a87c4f`,`#3b2416`].forEach((t,n)=>{e.add(Q(.22,.3,.22,`#e6eef0`,3.7+n*.5,1.78,.25)),e.add(Q(.18,.18,.18,t,3.7+n*.5,1.73,.25))})}drawSign(){if(!this.nameMesh)return;let e=ep(1024,256,(e,t,n)=>{e.fillStyle=`#3b2a20`,e.fillRect(0,0,t,n),e.strokeStyle=`#d9b48a`,e.lineWidth=10,e.strokeRect(14,14,t-28,n-28),e.fillStyle=`#f6e7cf`;let r=(this.cafeName||`Welpen-Café`).toUpperCase(),i=120;e.textAlign=`center`,e.textBaseline=`middle`;do e.font=`bold ${i}px Nunito, "Segoe UI", sans-serif`,i-=4;while(e.measureText(r).width>t-90&&i>40);e.fillText(r,t/2,n/2+6)}),t=this.nameMesh.material;t.map&&t.map.dispose(),t.map=e,t.needsUpdate=!0}redrawText(){this.drawSign(),this.menuNames&&this.drawMenu(this.menuNames,this.menuKeyLast)}drawMenu(e,t){if(this.menuNames=e,this.menuKeyLast=t,this.menuKey=t,!this.menuMesh)return;let n=ep(512,640,(t,n,r)=>{t.fillStyle=`#2b2f2c`,t.fillRect(0,0,n,r),t.strokeStyle=`#8b5a3c`,t.lineWidth=24,t.strokeRect(0,0,n,r),t.fillStyle=`#f2efe9`,t.textAlign=`center`,t.font=`bold 64px Nunito, "Segoe UI", sans-serif`,t.fillText(`Karte`,n/2,100);let i=e.length>7,a=i?Math.ceil(e.length/2):e.length,o=Math.min(70,470/Math.max(1,a)),s=Math.max(18,Math.min(40,o*.62*(i?.8:1)));t.font=`${Math.round(s)}px Nunito, "Segoe UI", sans-serif`,e.forEach((e,r)=>{let s=i?Math.floor(r/a):0,c=i?r%a:r,l=i?s===0?n*.28:n*.72:n/2,u=e,d=i?n*.42:n-70;for(;t.measureText(u).width>d&&u.length>4;)u=u.slice(0,-2)+`…`;t.fillText(u,l,175+c*o)})}),r=this.menuMesh.material;r.map&&r.map.dispose(),r.map=n,r.needsUpdate=!0}setStock(e,t){this._stock={cake:e,beans:t},this.cakeDisplay&&this.cakeDisplay.children.forEach((t,n)=>n>0&&(t.visible=e>0)),this.beanSack&&(this.beanSack.visible=t>0)}setScenario(e,t){this.scenario=e||`klassisch`,t&&(this.cafeName=t),this.buildOutside(),this.rebuildRoom()}makeSceneTree(){let e={japan:`cherry`,strand:`palm`}[this.scenario]||`tree`,t;if(e===`palm`){t=new q;let e=(Math.random()-.5)*.25;for(let n=0;n<6;n++)t.add(Q(.26-n*.015,.5,.26-n*.015,n%2?`#8a6a48`:`#9c7a54`,e*n*.6,.25+n*.48,0));let n=new q;n.position.set(e*3.6,3,0);for(let e=0;e<6;e++){let t=Q(1.5,.06,.34,e%2?`#3f8f4a`:`#4fa65a`,.7,-.15,0),r=new q;r.rotation.y=e/6*Math.PI*2,r.rotation.z=-.35,r.add(t),n.add(r)}n.add(Q(.3,.3,.3,`#6b4a33`,0,-.1,0)),t.add(n)}else e===`cherry`?(t=new q,t.add(Q(.26,1.3,.26,`#4a3326`,0,.65,0)),t.add(Q(.14,.7,.14,`#4a3326`,.3,1.45,.1)),t.add(Q(1.9,.75,1.7,`#f2b8c6`,.1,1.85,0)),t.add(Q(1.3,.55,1.2,`#f7cdd8`,.2,2.45,.05)),t.add(Q(.9,.4,.8,`#efa3b6`,-.55,1.6,.45))):t=hf();return t.userData.kind=e,t}buildOutside(){this.outside&&(Qf(this.outside),this.scene.remove(this.outside));let e=this.outside=new q;this.scene.add(e),this.trees=[...this.roomTrees||[]],this.foam=[];let t=this.scenario||`klassisch`,n={klassisch:`#9cc69b`,japan:`#a9c48f`,strand:`#ecd9a8`,altstadt:`#a7b89a`}[t]||`#9cc69b`,r=$f(new Qr(new Wi(80,80),new na({color:n,roughness:1})));this.ground=r,r.rotation.x=-Math.PI/2,r.position.y=-.11,r.receiveShadow=!0,e.add(r);let i=(t,n)=>(n&&(t.castShadow=!1),e.add(t),t),a=(t,n)=>{let r=this.makeSceneTree();return r.position.set(t,0,n),e.add(r),this.trees.push(r),r},o=Z.d/2,s=this.tileToWorld(Ql.x,Z.d-1);if(t===`klassisch`){i(Q(80,.06,4,`#5a5c61`,0,-.08,o+5.2),!0);let t=[];for(let e=-36;e<36;e+=3)t.push({x:e,y:-.075,z:o+5.2,color:`#e8e4dc`});e.add(sd(1.4,.07,.15,t,{cast:!1}));for(let[e,t]of[[-8.5,-2],[-8.5,3],[-4,o+8.5],[5,o+8.5]])a(e,t)}if(t===`japan`){i(Q(80,.05,4,`#cfc3ab`,0,-.085,o+5.2),!0);let t=[];for(let e=-36;e<36;e+=1.6)t.push({x:e+Math.floor(e)%2*.2,y:-.07,z:o+5.2+(Math.floor(e*3)%3-1)*.5,color:`#a59c8c`});e.add(sd(.9,.06,.7,t,{cast:!1}));for(let e=0;e<3;e++)i(Q(.8,.06,.6,`#9a9284`,s.x+(e%2?.2:-.2),-.05,o+3.4+e*.8),!0);let n=new q;n.add(Q(.26,3,.26,`#c8442f`,-1.5,1.5,0)),n.add(Q(.26,3,.26,`#c8442f`,1.5,1.5,0)),n.add(Q(4.2,.24,.42,`#c8442f`,0,3.05,0)),n.add(Q(4.6,.12,.5,`#2b2320`,0,3.22,0)),n.add(Q(3.4,.18,.24,`#c8442f`,0,2.5,0)),n.add(Q(.36,.24,.36,`#2b2320`,-1.5,.12,0)),n.add(Q(.36,.24,.36,`#2b2320`,1.5,.12,0)),n.position.set(s.x,0,o+7.6),e.add(n);for(let t of[s.x-2.6,s.x+2.6]){let n=new q;n.add(Q(.5,.15,.5,`#9a958c`,0,.08,0)),n.add(Q(.18,.6,.18,`#a8a398`,0,.45,0)),n.add(Q(.5,.3,.5,`#b4afa4`,0,.9,0)),n.add(Q(.3,.18,.3,`#ffe2a0`,0,.9,0,{emissive:`#ffcf70`,emissiveIntensity:.6})),n.add(Q(.7,.12,.7,`#8f8a80`,0,1.1,0)),n.add(Q(.2,.15,.2,`#8f8a80`,0,1.23,0)),n.position.set(t,0,o+3),e.add(n)}let r=new q;r.add(Q(4.4,.12,3.2,`#8f8a80`,0,-.05,0)),r.add(Q(4,.12,2.8,`#3f7f9a`,0,0,0,{roughness:.25}));for(let[e,t,n]of[[-.8,.3,`#f08a3c`],[.6,-.5,`#f2efe9`],[.9,.6,`#e2552e`]])r.add(Q(.36,.06,.14,n,e,.07,t));r.add(Q(.5,.3,.5,`#8f8a80`,-1.8,.1,-1.2)),r.position.set(-9.5,0,.5),e.add(r);let c=[];for(let e=-14;e<=30;e+=.35)c.push({x:e,y:.7,z:-o-3.2,color:`#9cab5c`,sy:1.4+Math.abs(Math.sin(e*7))*.3});e.add(sd(.12,1,.12,c)),i(Q(44.5,.08,.1,`#6f7d3c`,8,1,-o-3.1));for(let[e,t]of[[-8.5,-2.5],[-12,3.5],[-4,o+8.8],[8,o+8.8],[-13,-4],[14,o+9]])a(e,t)}if(t===`strand`){let t=[];for(let e=-40;e<40;e+=.6)t.push({x:e+.3,y:-.08,z:o+4.2,color:Math.round(e/.6)%2?`#c8a27a`:`#bd966d`});e.add(sd(.56,.06,1.9,t,{cast:!1}));let n=$f(new Qr(new Wi(90,40),new na({color:`#3fa6c4`,roughness:.25,metalness:.05})));n.rotation.x=-Math.PI/2,n.position.set(0,-.095,o+25.6),n.receiveShadow=!0,e.add(n);let r=$f(new Qr(new Wi(90,2.2),new na({color:`#79c6d6`,roughness:.4})));r.rotation.x=-Math.PI/2,r.position.set(0,-.092,o+6.6),e.add(r);for(let t=0;t<18;t++){let n=Q(1,.04,.18,`#f4fbfd`,-36+t*4.2,-.07,o+5.9);n.scale.x=2+Math.random()*2,n.castShadow=!1,n.userData.base=n.position.z,n.userData.ph=Math.random()*Math.PI*2,e.add(n),this.foam.push(n)}let s=(t,n,r)=>{let i=new q;i.add(Q(.08,2,.08,`#f2efe9`,0,1,0)),i.add(Q(1.8,.12,1.8,r,0,2,0)),i.add(Q(1.2,.12,1.2,`#f2efe9`,0,2.1,0)),i.add(Q(.8,.03,1.6,r===`#e2552e`?`#3f8fbf`:`#e2552e`,.9,-.05,.2)),i.position.set(t,0,n),e.add(i)};s(-9,0,`#e2552e`),s(-11.5,3.5,`#f2b33d`),s(-6.5,o+3.2,`#3f8fbf`),s(-14,o+2.5,`#e2552e`);let c=Q(.5,2.2,.1,`#f2b33d`,-7.4,1,4.2);c.rotation.z=.25,e.add(c),i(Q(.9,.4,.9,`#d9c38e`,-10.5,.1,-3)),i(Q(.5,.35,.5,`#d9c38e`,-10.5,.45,-3));for(let[e,t]of[[-8.5,-2.5],[-13,2],[-10.5,o+2.8],[-13.5,-5]])a(e,t)}let c=new q;c.add(Q(1.6,.08,.45,`#8b5a3c`,0,.45,0)),c.add(Q(1.6,.35,.06,`#8b5a3c`,0,.7,-.2)),c.add(Q(.08,.45,.4,`#2f2f2f`,-.7,.22,0)),c.add(Q(.08,.45,.4,`#2f2f2f`,.7,.22,0)),c.position.set(-3.2,0,o+1.2),c.rotation.y=Math.PI,e.add(c),this.season!==void 0&&this.setSeason(this.season)}buildCounter(){let e=eu.x1-eu.x0+1,t=this.tileToWorld(eu.x0,eu.z),n=this.tileToWorld(eu.x1,eu.z),r=af(e);r.position.set((t.x+n.x)/2,0,t.z),this.scene.add(r),this.counterTop=1.08;let i=this.tileToWorld(tu.x-.6,tu.z);this.beanSack=mf(),this.beanSack.position.set(i.x,this.counterTop,i.z-.05),this.beanSack.visible=!1,this.scene.add(this.beanSack);for(let e=0;e<3;e++){let n=rf(`#f7f3ec`);n.position.set(this.tileToWorld(6.5,1).x,this.counterTop+e*.11,t.z-.2),this.scene.add(n)}this.applyUpgrades({},!1)}applyUpgrades(e={},t=!0){this._upg=this._upg||{},this.fx=this.fx||[],this.pops=this.pops||[];let n=t=>e[t]||0,r=e=>this._upg[e]!==n(e),i=e=>yu[e]?.max||1,a=(e,n,r,i=!0)=>{r&&(this.scene.remove(r),this.fx=this.fx.filter(e=>e!==r)),this[e]=n,n&&(i&&this.scene.add(n),n.userData.tick&&this.fx.push(n),t&&this.pops.push({o:n,t:0,base:n.scale.clone()}))},o=this.tileToWorld(eu.x0,eu.z),s=this.tileToWorld(eu.x1,eu.z),c=this.tileToWorld(tu.x,tu.z),l=this.counterTop;if(r(`machine`)&&a(`machine`,this.buildMachine(of(n(`machine`),i(`machine`))),this.machine),r(`machine`)||r(`kitchen`)){for(let e of this.extraMachines||[])this.scene.remove(e);this.extraMachines=[];for(let e=1;e<=n(`kitchen`);e++){let r=this.buildMachine(of(n(`machine`),i(`machine`)),Rf[e-1]);r.userData.machineIdx=e,this.scene.add(r),this.extraMachines.push(r),t&&this.pops.push({o:r,t:0,base:r.scale.clone()})}}if(r(`grinder`)){let e=null;n(`grinder`)>0&&(e=cf(n(`grinder`),i(`grinder`)),e.position.set(c.x+.65,l,c.z-.05)),a(`grinderMesh`,e,this.grinderMesh)}if(r(`register`)){let e=lf(n(`register`),i(`register`));e.position.set(o.x,l,o.z),a(`registerMesh`,e,this.registerMesh)}if(r(`cakecase`)){let e=n(`cakecase`),t=pf(),r=1+.03*e;t.scale.setScalar(r),t.position.set(s.x,l,s.z),a(`cakeDisplay`,t,this.cakeDisplay);let o=null;e>0&&(o=uf(e,i(`cakecase`)),o.scale.setScalar(r),o.position.set(s.x,l,s.z)),a(`cakeLight`,o,this.cakeLight),this._stock&&this.setStock(this._stock.cake,this._stock.beans)}if(r(`sign`)){let e=null;if(n(`sign`)>0){e=df(n(`sign`),i(`sign`));let t=this.tileToWorld(Ql.x,Ql.z);e.position.set(t.x+1.9,0,Z.d/2+.9)}a(`signMesh`,e,this.signMesh)}if(r(`ambience`)){let e=null,t=n(`ambience`);t>0&&(e=ff(t,11.4,t>=10?2:1),e.position.set(0,0,-Z.d/2+.12)),a(`lightString`,e,this.lightString)}for(let e of Object.keys(yu))this._upg[e]=n(e)}machineGroups(){return[this.machine,...this.extraMachines||[]]}buildMachine(e,t=tu.x){let n=this.tileToWorld(t,tu.z),r=sf(e);return r.position.set(n.x,this.counterTop,n.z-.08),r}setTime(e,t){let n=this.scene.background,r=this.sun.color,i,a,o,s;if(e===`day`){let e=Math.min(1,t*2),c=Math.max(0,t*2-1);t<.5?(n.lerpColors(Uf,Wf,e),r.lerpColors(Jf,Yf,e)):(n.lerpColors(Wf,Gf,c),r.lerpColors(Yf,Xf,c)),i=(t<.5?1.6+e*.8:2.4-c*1)*(this.sunBoost??1),a=1.1,o=.5+Math.max(0,t-.75)*3,s=Math.max(0,t-.85)/.15*.4;let l=Math.PI*(.15+.7*t);this.sun.position.set(Math.cos(l)*14,Math.sin(l)*12+3,7)}else n.copy(Kf),r.copy(Zf),i=.25,a=.35,o=2.4,s=1,this.sun.position.set(-6,12,6);let c=this.stormDim??1;c<.999&&n.lerp(qf,Math.min(1,(1-c)*1.4)),this.scene.fog.color.copy(n),this.sun.intensity=i*c,this.hemi.intensity=a*(.3+c*.7)+(this.stormFlash||0);for(let e of this.inside)e.intensity=o;return s}setSeason(e){this.season=e;let t={tree:[[`#f2b8c6`,`#9fd08a`],[`#5f9a5c`,`#6fae69`],[`#d9823b`,`#e6b04a`],[`#7f9a86`,`#93ab98`]],cherry:[[`#f2b8c6`,`#f7cdd8`,`#efa3b6`],[`#6fa860`,`#86b96f`,`#5f9a5c`],[`#d8552f`,`#e88a3a`,`#c2412b`],[`#c9b8bd`,`#ddd0d4`,`#b9a8ad`]]},n={klassisch:[`#a6d19a`,`#9cc69b`,`#bdb877`,`#eef3f6`],japan:[`#b5cf98`,`#9cc69b`,`#c9b47a`,`#eef3f6`],strand:[`#ecd9a8`,`#efdcaa`,`#e6d3a2`,`#e3d8bf`],altstadt:[`#b1c9a0`,`#a7b89a`,`#bdb27e`,`#eef3f6`]};this.ground.material.color.set((n[this.scenario]||n.klassisch)[e]);for(let n of this.trees){let r=n.userData.kind||`tree`;if(r===`palm`)continue;let i=t[r][e],[,a,o,s,c]=n.children;r===`cherry`?(o&&(o.material=rd(i[0])),s&&(s.material=rd(i[1])),c&&(c.material=rd(i[2]))):(a&&(a.material=rd(i[0])),o&&(o.material=rd(i[1])));let l=n.getObjectByName(`snow`);e===3&&!l?(l=Q(1.05,.14,1.05,`#ffffff`,0,2.97,0),l.name=`snow`,n.add(l)):e!==3&&l&&n.remove(l)}}update(e){if(this.controls.update(),this.ambience.frame(e),this.fx?.length||this.pops?.length){this.fxT=(this.fxT||0)+e;for(let e of this.fx)e.userData.tick(this.fxT);for(let t=this.pops.length-1;t>=0;t--){let n=this.pops[t];n.t+=e;let r=Math.min(1,n.t/.4);n.o.scale.copy(n.base).multiplyScalar(1+.15*Math.sin(Math.PI*r)),r>=1&&this.pops.splice(t,1)}}if(this.foam?.length){this.waveT=(this.waveT||0)+e;for(let e of this.foam)e.position.z=e.userData.base+Math.sin(this.waveT*.8+e.userData.ph)*.45}let t=this.camera.position;for(let n of this.walls){let r=t.dot(n.n)>n.ext+.5&&!this.wallsUp?.12:1;n.g.scale.y+=(r-n.g.scale.y)*Math.min(1,e*8);let i=n.g.scale.y>.6;for(let e of n.g.children)e.userData.lintel&&(e.visible=i)}}resize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}render(){this.renderer.render(this.scene,this.camera)}},ip=[120,180],ap={lofi:{name:`Lo-Fi`,icon:`🎧`,songs:[{name:`Regentropfen am Fenster`,bpm:72,density:.3,melody:[72,74,76,79,81,84],prog:[[53,57,60,64],[52,55,59,62],[50,53,57,60],[48,52,55,59]]},{name:`Milchschaum am Montag`,bpm:76,density:.28,melody:[69,72,74,76,79,81],prog:[[50,53,57,60],[55,59,62,65],[48,52,55,59],[57,60,64,67]]},{name:`Pfotenabdrücke`,bpm:68,density:.32,melody:[70,72,74,75,77,79],prog:[[51,55,58,62],[50,53,57,60],[48,51,55,58],[46,50,53,57]]}]},piano:{name:`Klavier`,icon:`🎹`,songs:[{name:`Morgenlicht`,bpm:66,density:.35,melody:[72,74,76,79,81],prog:[[48,55,60,64],[47,55,59,62],[45,52,57,60],[41,53,57,60]]},{name:`Sonntagszeitung`,bpm:60,density:.3,melody:[72,74,77,79,81],prog:[[41,53,57,60],[38,53,57,62],[46,53,58,62],[48,55,60,64]]},{name:`Der letzte Gast`,bpm:56,density:.28,melody:[69,71,72,76,79],prog:[[45,52,57,60],[41,53,57,60],[48,52,55,60],[43,50,55,59]]}]},elevator:{name:`Fahrstuhl`,icon:`🛗`,songs:[{name:`Dritter Stock, Kaffeeabteilung`,bpm:104,density:.45,melody:[72,74,76,77,79,81],prog:[[48,52,55,59],[45,52,55,60],[50,53,57,60],[43,53,55,59]]},{name:`Bitte warten Sie`,bpm:96,density:.4,melody:[69,72,74,76,77,79],prog:[[41,52,57,60],[40,50,55,59],[38,53,57,60],[36,52,55,59]]},{name:`Lounge im Foyer`,bpm:100,density:.42,melody:[70,72,75,77,79,82],prog:[[39,55,58,62],[36,55,58,63],[41,56,60,63],[46,56,58,62]]}]}};function op(e,t){let n=ap[e]?e:`lofi`,r=ap[n].songs.length,i=Number.isInteger(t)?(t%r+r)%r:0;return{style:n,song:i,data:ap[n].songs[i]}}var sp=(e,t,n)=>op(e,op(e,t).song+n),cp=e=>e[0]>=46?e[0]-12:e[0],lp=e=>440*2**((e-69)/12),up=typeof location<`u`&&/[?&]stumm(=|&|$)/.test(location.search||``),dp=class{constructor(){this.ctx=null,this.playing=!1,this.volume=.5,this.sfxOn=!0,this.step=0,this.onSong=null,this.select(`lofi`,0,!1)}get bpm(){return this.song.bpm}select(e,t,n=!0){let r=op(e,t);this.style=r.style,this.songIdx=r.song,this.song=r.data,this.step=0,this.songT=0,this.songLen=ip[0]+Math.random()*(ip[1]-ip[0]),this.crackleGain&&(this.crackleGain.gain.value=this.style===`lofi`?.25:0),this.ctx&&(this.nextTime=Math.max(this.nextTime||0,this.ctx.currentTime+.1)),n&&this.onSong?.(this.info())}info(){return{style:this.style,song:this.songIdx,name:this.song.name,styleName:ap[this.style].name}}next(e=1){let t=sp(this.style,this.songIdx,e);this.select(t.style,t.song)}ensure(){if(this.ctx)return;let e=this.ctx=new AudioContext,t=up?e.createGain():e.destination;up&&e.suspend(),this.master=e.createGain(),this.master.gain.value=0;let n=e.createBiquadFilter();n.type=`lowpass`,n.frequency.value=3200,this.master.connect(n),n.connect(t),this.sfx=e.createGain(),this.sfx.gain.value=this.sfxOn?.5:0,this.sfx.connect(t),this.delay=e.createDelay(1),this.delay.delayTime.value=.42;let r=e.createGain();r.gain.value=.32,this.delay.connect(r),r.connect(this.delay),this.delay.connect(this.master),this.wobble=e.createOscillator(),this.wobble.frequency.value=.35,this.wobbleGain=e.createGain(),this.wobbleGain.gain.value=7,this.wobble.connect(this.wobbleGain),this.wobble.start();let i=e.sampleRate*2;this.noise=e.createBuffer(1,i,e.sampleRate);let a=this.noise.getChannelData(0);for(let e=0;e<i;e++)a[e]=Math.random()*2-1;let o=e.sampleRate*4,s=e.createBuffer(1,o,e.sampleRate),c=s.getChannelData(0);for(let e=0;e<o;e++)c[e]=(Math.random()*2-1)*.006+(Math.random()<6e-4?(Math.random()*2-1)*.7:0);this.crackleBuf=s}start(){if(this.ensure(),clearTimeout(this.stopTimer),clearTimeout(this.suspendTimer),this.ctx.resume(),!this.playing){if(this.playing=!0,this.nextTime=this.ctx.currentTime+.15,this.timer=setInterval(()=>this.schedule(),25),this.dying)this.crackle=this.dying,this.dying=null;else{let e=this.ctx.createBufferSource();e.buffer=this.crackleBuf,e.loop=!0;let t=this.ctx.createBiquadFilter();t.type=`highpass`,t.frequency.value=900;let n=this.ctx.createGain();n.gain.value=this.style===`lofi`?.25:0,this.crackleGain=n,e.connect(t).connect(n).connect(this.master),e.start(),this.crackle=e}this.fadeTo(this.volume*.7)}}stop(){this.playing&&(this.playing=!1,clearInterval(this.timer),this.fadeTo(0),this.dying=this.crackle,this.crackle=null,clearTimeout(this.stopTimer),this.stopTimer=setTimeout(()=>{this.dying&&this.dying.stop(),this.dying=null},800),this.idleSuspend())}idleSuspend(){clearTimeout(this.suspendTimer),this.suspendTimer=setTimeout(()=>{!this.playing&&this.ctx&&this.ctx.suspend()},5e3)}setSfx(e){this.sfxOn=e,this.sfx&&(this.sfx.gain.value=e?.5:0)}setVolume(e){this.volume=e,this.playing&&this.fadeTo(e*.7)}fadeTo(e){let t=this.master.gain,n=this.ctx.currentTime;t.cancelScheduledValues(n),t.setValueAtTime(t.value,n),t.linearRampToValueAtTime(e,n+.6)}schedule(){for(;this.nextTime<this.ctx.currentTime+.2;){let e=60/this.bpm/4,t=this.step%16;if(t===0&&this.songT>=this.songLen){this.next(1);continue}let n=this.style!==`piano`&&t%4==2?e*.3:0;this.playStep(this.step,this.nextTime+n,e),this.nextTime+=e,this.songT+=e,this.step++}}playStep(e,t,n){let r=e%16,i=Math.floor(e/16),a=this.song,o=a.prog[i%4],s=n*16,c=()=>a.melody[Math.floor(Math.random()*a.melody.length)],l=cp(o);if(this.style===`piano`){if(r===0&&this.piano(l,t,.12,3.2),r%2==0){let e=o[1+r/2%(o.length-1)];this.piano(e+12,t,.05,1.8)}r%4==0&&Math.random()<a.density&&this.piano(c(),t+n*.05,.07,2.4)}else this.style===`elevator`?(r===0&&this.vibe(o.slice(1),t,.03,n*6),r===6&&this.vibe(o.slice(1),t,.025,n*4),(r===0||r===8)&&this.bass(l,t,.45),(r===6||r===14)&&this.bass(l+7,t,.3),r%2==0&&this.hat(t,.015),(r===3||r===6||r===10||r===13)&&this.noiseHit(t,`bandpass`,2600,.05,.04,6),r%2==0&&Math.random()<a.density&&this.vibe([c()],t,.05,n*3)):(r===0&&(this.pad(o,t,s),this.bass(l,t,.9)),r===10&&this.bass(l+7,t,.5),(r===0||r===7||r===10)&&this.kick(t),(r===4||r===12)&&this.snare(t),r%2==0&&this.hat(t,r%4==0?.035:.02),[0,3,6,8,11,14].includes(r)&&Math.random()<a.density&&this.keys(c(),t))}piano(e,t,n,r){let i=this.ctx,a=i.createGain();a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(n,t+.008),a.gain.exponentialRampToValueAtTime(n*.35,t+.25),a.gain.exponentialRampToValueAtTime(8e-4,t+r);let o=i.createBiquadFilter();o.type=`lowpass`,o.frequency.setValueAtTime(4200,t),o.frequency.exponentialRampToValueAtTime(1200,t+r),o.connect(a).connect(this.master);for(let[n,a,s]of[[`triangle`,1,1],[`sine`,2,.35],[`sine`,3,.12]]){let c=i.createOscillator();c.type=n,c.frequency.value=lp(e)*a;let l=i.createGain();l.gain.value=s,c.connect(l).connect(o),c.start(t),c.stop(t+r+.05)}}vibe(e,t,n,r){let i=this.ctx,a=i.createGain();a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(n,t+.01),a.gain.exponentialRampToValueAtTime(.001,t+r+.6);let o=i.createOscillator();o.frequency.value=5.5;let s=i.createGain();s.gain.value=n*.3,o.connect(s).connect(a.gain),a.connect(this.master),a.connect(this.delay),o.start(t),o.stop(t+r+.7);for(let n of e){let e=i.createOscillator();e.type=`sine`,e.frequency.value=lp(n),e.connect(a),e.start(t),e.stop(t+r+.7)}}pad(e,t,n){let r=this.ctx,i=r.createBiquadFilter();i.type=`lowpass`,i.frequency.value=950;let a=r.createGain();a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(.045,t+.35),a.gain.setValueAtTime(.045,t+n-.2),a.gain.linearRampToValueAtTime(0,t+n+.5),i.connect(a).connect(this.master);for(let a of e)for(let[e,o]of[[`triangle`,0],[`sine`,6]]){let s=r.createOscillator();s.type=e,s.frequency.value=lp(a),s.detune.value=o,this.wobbleGain.connect(s.detune),s.onended=()=>this.wobbleGain.disconnect(s.detune),s.connect(i),s.start(t),s.stop(t+n+.6)}}bass(e,t,n){let r=this.ctx,i=r.createOscillator();i.type=`sine`,i.frequency.value=lp(e);let a=r.createGain();a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(.2,t+.02),a.gain.exponentialRampToValueAtTime(.001,t+n),i.connect(a).connect(this.master),i.start(t),i.stop(t+n+.05)}kick(e){let t=this.ctx,n=t.createOscillator();n.frequency.setValueAtTime(110,e),n.frequency.exponentialRampToValueAtTime(42,e+.14);let r=t.createGain();r.gain.setValueAtTime(.42,e),r.gain.exponentialRampToValueAtTime(.001,e+.3),n.connect(r).connect(this.master),n.start(e),n.stop(e+.32)}noiseHit(e,t,n,r,i,a=.8){let o=this.ctx,s=o.createBufferSource();s.buffer=this.noise;let c=o.createBiquadFilter();c.type=t,c.frequency.value=n,c.Q.value=a;let l=o.createGain();l.gain.setValueAtTime(r,e),l.gain.exponentialRampToValueAtTime(.001,e+i),s.connect(c).connect(l).connect(this.master),s.start(e,Math.random()*1.5),s.stop(e+i+.02)}snare(e){this.noiseHit(e,`bandpass`,1700,.12,.2)}hat(e,t){this.noiseHit(e,`highpass`,7e3,t,.05)}keys(e,t){let n=this.ctx,r=n.createGain();r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(.05,t+.01),r.gain.exponentialRampToValueAtTime(.001,t+1.4),r.connect(this.master),r.connect(this.delay);for(let[i,a,o]of[[`sine`,1,1],[`triangle`,2,.25]]){let s=n.createOscillator();s.type=i,s.frequency.value=lp(e)*a;let c=n.createGain();c.gain.value=o,s.connect(c).connect(r),s.start(t),s.stop(t+1.5)}}blip(e=880,t=.12,n=.12){this.ensure();let r=this.ctx;r.state===`suspended`&&r.resume(),this.playing||this.idleSuspend();let i=r.currentTime,a=r.createOscillator();a.type=`sine`,a.frequency.setValueAtTime(e,i),a.frequency.exponentialRampToValueAtTime(e*1.5,i+t);let o=r.createGain();o.gain.setValueAtTime(n,i),o.gain.exponentialRampToValueAtTime(.001,i+t),a.connect(o).connect(this.sfx),a.start(i),a.stop(i+t+.02)}thunder(e=.45){this.ensure();let t=this.ctx;t.state===`suspended`&&t.resume(),this.playing||this.idleSuspend();let n=t.currentTime,r=t.createBufferSource();r.buffer=this.noise,r.loop=!0;let i=t.createBiquadFilter();i.type=`lowpass`,i.frequency.setValueAtTime(700,n),i.frequency.exponentialRampToValueAtTime(90,n+2.8);let a=t.createGain();a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(e,n+.08),a.gain.exponentialRampToValueAtTime(.001,n+3.2),r.connect(i).connect(a).connect(this.sfx),r.start(n),r.stop(n+3.3)}coin(){this.blip(988,.08,.1),setTimeout(()=>this.blip(1319,.18,.1),70)}},fp=new Intl.NumberFormat(`de-DE`,{style:`currency`,currency:`EUR`}),$=e=>fp.format(e);function pp(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}var mp=[{id:`fruehling`,name:`Frühling`,icon:`🌸`,coffees:[`matcha`,`flatwhite`,`vanillematcha`,`honigflat`],sun:1},{id:`sommer`,name:`Sommer`,icon:`☀️`,coffees:[`icedlatte`,`coldbrew`,`affogato`,`nitro`,`vanilleiced`,`karamellcold`],sun:1.25},{id:`herbst`,name:`Herbst`,icon:`🍂`,coffees:[`chai`,`cappuccino`,`zimtcap`,`kurkuma`,`goldzimt`],sun:1},{id:`winter`,name:`Winter`,icon:`❄️`,coffees:[`chai`,`lebkuchenchai`,`pfotenmocca`,`gluehkaffee`,`cappuccino`],sun:.85}],hp=e=>cu.filter(t=>t.season===e),gp=e=>Math.round(e.price*3*40),_p={regen:{name:`Regentag`,icon:`🌧️`,desc:`Weniger Laufkundschaft, aber wer kommt, bleibt länger und gibt mehr Trinkgeld.`,fx:{spawn:-.3,tip:.3,patience:.3}},lauf:{name:`Stadtlauf`,icon:`🏃`,desc:`Am Vormittag rennt die halbe Stadt vorbei. Ansturm! Alle wollen Espresso.`},hundeshow:{name:`Hundeshow`,icon:`🏅`,desc:`Hundeshow im Park. Gebote auf dem Pfotenmarkt +50 %.`},kritikerin:{name:`Restaurantkritikerin`,icon:`🧐`,desc:`Heute kommt eine Kritikerin. Bedien sie schnell mit ihrer Wunschsorte, dann gibt es einen Stern.`},sonne:{name:`Sonnentag`,icon:`😎`,desc:`Strahlender Sonnenschein. Mehr Gäste, mit Terrasse besonders viele.`,summer:!0}},vp={from:.15,to:.32,spawn:2.5};function yp(){return{event:null,stars:0,critic:null,xmas:!1}}var bp=class{constructor(e){this.game=e;let t=e.state;t.seasons={...yp(),...t.seasons},this.lastSeason=this.index(),this.applyVisuals()}get z(){return this.game.state.seasons}index(e=this.game.state.day){return Math.floor((e-1)/14)%4}season(){return mp[this.index()]}daysLeft(){return 14-(this.game.state.day-1)%14}event(){return this.z.event&&_p[this.z.event]}rushNow(){let e=this.game.state.clock;if(this.z.event!==`lauf`||e.phase!==`day`)return!1;let t=e.t/iu.dayMs;return t>=vp.from&&t<=vp.to}fx(e){let t=0,n=this.event();return n?.fx?.[e]&&(t+=n.fx[e]),e===`spawn`&&(t+=.05*this.z.stars,this.z.event===`sonne`&&(t+=this.game.state.expansion>=2?.3:.1),this.rushNow()&&(t+=vp.spawn)),t}pickCoffee(e,t){if(this.rushNow()&&e.includes(`espresso`)&&Math.random()<.8)return`espresso`;let n=this.season().coffees.filter(t=>e.includes(t));if(n.length&&Math.random()<.3)return n[Math.floor(Math.random()*n.length)];if(e.filter(e=>vu(e)?.season!==void 0).length){let t=this.index(),n=e.map(e=>{let n=vu(e),r=n?.popularity??3;return n?.season===void 0?r:r*(n.season===t?1.5:.3)}),r=Math.random()*n.reduce((e,t)=>e+t,0);for(let t=0;t<e.length;t++)if(r-=n[t],r<0)return e[t]}return t(e)}unlockDrink(e){let t=this.game.state,n=vu(e);return!n||n.season!==this.index()||t.coffees.includes(e)||!this.game.evening.spend(1,gp(n))?!1:(t.coffees.push(e),this.game.addXP(15),this.game.audio.coin(),this.game.ui.toast(`${mp[n.season].icon} Neues Saisongetränk: ${n.name}!`,`big`,5e3),!0)}priceBonus(e){return this.season().coffees.includes(e)?.1:0}drinkMult(){return this.z.event===`regen`?1.7:1}bidMult(){return this.z.event===`hundeshow`?1.5:1}applyVisuals(){let e=this.game.world;e.setSeason(this.index()),e.sunBoost=this.season().sun??1,this.game.ambience?.apply(this.index(),this.z.event)}criticWanted(){let e=this.game.state.coffees;return e[Math.floor(Math.random()*e.length)]}takeCritic(){let e=this.z;return e.event!==`kritikerin`||e.critic||this.game.state.clock.t<9e4?null:(e.critic=`unterwegs`,{name:`Kritikerin`,coffee:this.criticWanted()})}criticServed(e){e>=.5&&this.z.stars<5?(this.z.stars++,this.z.critic=`zufrieden`,this.game.addXP(80),this.game.ui.toast(`⭐ Die Kritikerin ist begeistert! Dein Café hat jetzt ${this.z.stars} ${this.z.stars>1?`Sterne`:`Stern`} (+${this.z.stars*5} % Gäste).`,`big`,6e3)):(this.z.critic=`mittel`,this.game.ui.toast(`🧐 Die Kritikerin notiert: „Solide, aber etwas langsam.“ Diesmal kein Stern.`,`big`,5e3))}criticLost(){this.z.critic=`verärgert`,this.game.ui.toast(`🧐 Die Kritikerin ist gegangen. Das gibt keinen Stern.`,`big`,5e3)}xmasOpen(){return this.index()===3&&this.game.state.clock.phase===`night`&&!this.xmasDone}xmasMarket(){let e=this.game.evening,t=this.game.state;if(!this.xmasOpen()||!e.spend(1,0))return!1;let n=Math.max(80,(t.lastDay?.earned||0)*.4),r=Math.round(n);this.game.earn(r,`markt`),this.xmasDone=!0,this.game.addXP(20),this.game.audio.coin();let i=`🎄 Der Stand auf dem Weihnachtsmarkt bringt ${$(r)}.`;return t.coffees.includes(`gluehkaffee`)||(t.coffees.push(`gluehkaffee`),i+=` Neues Sonderrezept: Glühkaffee!`),this.game.ui.toast(i,`big`,5e3),!0}onOpen(){let e=this.game.state,t=this.z;t.critic=null,this.xmasDone=!1;let n=this.index(),r=[];if(n!==this.lastSeason){this.lastSeason=n;let e=mp[n];r.push(`${e.icon} Der ${e.name} beginnt! Gefragt sind jetzt ${e.coffees.map(e=>vu(e)?.name).filter(Boolean).slice(0,3).join(`, `)}.`)}if(t.event=null,e.day>=4&&Math.random()<.2){let e=Object.entries(_p).filter(([,e])=>!e.summer||n===1).map(([e])=>e);t.event=e[Math.floor(Math.random()*e.length)];let i=_p[t.event];r.push(`${i.icon} Heute: ${i.name}. ${i.desc}`)}this.applyVisuals(),r.forEach((e,t)=>setTimeout(()=>this.game.ui.toast(e,`big`,6e3),4500+t*1500))}onClose(){this.applyVisuals()}},xp=[3,8,15,25,40],Sp=[`Erzählt dir eine Geschichte`,`Gibt 50 % mehr Trinkgeld`,`Bringt ein Geschenk mit`,`Bringt Freunde mit (+3 % Gäste)`,`Eigenes Spezial-Getränk`],Cp={oma:{name:`Oma Gerda`,icon:`👵`,level:1,fav:`cappuccino`,special:`gerda`,look:{skin:`#f5d6c0`,hair:`#c9c9c9`,hairStyle:`bun`,shirt:`#8e6c8a`,pants:`#5b4a3a`,glasses:!0},story:[`Oma Gerda: „Ich komme ja nur wegen Keks. Und wegen dem Kuchen. Und wegen dir.“`,`Oma Gerda: „Mein Mann hat früher auch Kaffee geröstet. Deiner schmeckt fast so gut.“`,`Oma Gerda strickt Keks ein Halstuch. Es ist etwas zu groß.`,`Oma Gerda bringt ihren Seniorenclub mit. Alle wollen Cappuccino.`,`Oma Gerda verrät dir ihr Geheimrezept. Ab heute gibt es „Gerdas Gute Stube“.`]},laptop:{name:`Der Laptop-Nomade`,icon:`💻`,level:2,fav:`flatwhite`,special:`nomade`,look:{skin:`#e0ac7e`,hair:`#2b1d14`,hairStyle:`short`,shirt:`#355c4b`,pants:`#1f2a44`,beard:!0,beanie:`#e2a33c`},story:[`Der Nomade: „Euer WLAN ist das schnellste der Stadt. Ich bleibe.“`,`Der Nomade hat eine App geschrieben, die Hunde-Memes generiert. Keks ist das Logo.`,`Der Nomade schenkt dir eine alte Siebträgermaschine aus seinem Start-up.`,`Sein ganzes Remote-Team trifft sich jetzt hier. Jeden Donnerstag.`,`Er tauft deinen Spezial-Kaffee „Deadline-Doppio“. Er schwört, er wirkt.`]},studentin:{name:`Die Studentin`,icon:`📚`,level:3,fav:`chai`,special:`pruefung`,look:{skin:`#c68b5e`,hair:`#1a1a1a`,hairStyle:`long`,shirt:`#e4c770`,pants:`#3a3f4b`,glasses:!0},story:[`Die Studentin: „Hier lerne ich besser als in der Bibliothek. Hier gibt es Hunde.“`,`Sie hat ihre Prüfung bestanden! Sie behauptet, es lag am Chai.`,`Sie schenkt dir ihre Lernkarten. Auf der Rückseite sind lauter Hundezeichnungen.`,`Die halbe Lerngruppe sitzt jetzt jeden Tag bei dir.`,`Ihr erfindet zusammen den „Prüfungs-Chai“. Doppelt gewürzt.`]},kurier:{name:`Der Fahrradkurier`,icon:`🚲`,level:4,fav:`espresso`,special:`sprint`,look:{skin:`#8d5a3b`,hair:`#1a1a1a`,hairStyle:`short`,shirt:`#e2a33c`,pants:`#2f3640`,beanie:`#c0563f`},story:[`Der Kurier: „Zwölf Sekunden für einen Espresso. Neuer Rekord!“`,`Er hat Keks ein Foto von einer Brücke mitgebracht. Wo auch immer er war.`,`Er schenkt dir ein Klingel-Glöckchen für die Theke.`,`Alle Kuriere der Stadt machen jetzt bei dir Pause.`,`Sein Lieblingsgetränk heißt jetzt „Sprint-Shot“. Mit Extra-Schuss.`]},yoga:{name:`Die Yoga-Lehrerin`,icon:`🧘`,level:5,fav:`matcha`,special:`zen`,look:{skin:`#f1c9a5`,hair:`#b5523b`,hairStyle:`bun`,shirt:`#6b8f71`,pants:`#6d6875`},story:[`Die Yoga-Lehrerin: „Eure Hunde haben eine sehr ruhige Aura.“`,`Sie zeigt Keks den herabschauenden Hund. Keks kann das schon.`,`Sie schenkt dir eine Klangschale. Die Gäste werden geduldiger.`,`Ihr Kurs kommt nach der Stunde geschlossen vorbei.`,`Gemeinsam kreiert ihr den „Zen-Matcha“. Mit Lavendel.`]},podcast:{name:`Der Podcaster`,icon:`🎙️`,level:6,fav:`coldbrew`,special:`mikro`,look:{skin:`#e0ac7e`,hair:`#5a3a22`,hairStyle:`short`,shirt:`#2f3640`,pants:`#3a3f4b`,glasses:!0,beard:!0},story:[`Der Podcaster: „Die Akustik hier ist perfekt. Und der Cold Brew.“`,`Er erwähnt dein Café in Folge 112. Die Leute fragen nach Keks.`,`Er schenkt dir ein signiertes Mikrofon für die Wand.`,`Seine Hörer pilgern jetzt zu dir.`,`Er widmet dir eine Folge. Dein Spezial-Getränk heißt „On-Air-Brew“.`]}};function wp(){let e={};for(let t of Object.keys(Cp))e[t]={xp:0,lvl:0,visits:0};return e}var Tp=class{constructor(e){this.game=e;let t=e.state,n=wp();t.regulars={...n,...t.regulars};for(let e of Object.keys(n))t.regulars[e]={...n[e],...t.regulars[e]}}get r(){return this.game.state.regulars}unlocked(e){return this.game.state.level>=Cp[e].level}fx(e){return e===`spawn`?.03*Object.values(this.r).filter(e=>e.lvl>=4).length:0}maybePick(){if(Math.random()>.12)return null;let e=this.game.state.day;this.visitDay!==e&&(this.visitDay=e,this.visits={});let t=new Set(this.game.guests.map(e=>e.regular).filter(Boolean)),n=Object.keys(Cp).filter(e=>this.unlocked(e)&&!t.has(e)&&(this.visits[e]||0)<2);if(!n.length)return null;let r=n[Math.floor(Math.random()*n.length)];this.visits[r]=(this.visits[r]||0)+1;let i=Cp[r],a=this.game.state.coffees,o=`special_${i.special}`,s=a.includes(i.fav)?i.fav:null;return this.r[r].lvl>=5&&a.includes(o)&&Math.random()<.5&&(s=o),{id:r,look:i.look,coffee:s,lvl:this.r[r].lvl}}tipMult(e){return e.regular&&this.r[e.regular].lvl>=2?1.5:1}onServe(e,t){if(!e.regular)return;let n=Cp[e.regular],r=this.r[e.regular];r.visits++;let i=e.coffee===n.fav||e.coffee===`special_${n.special}`?1:.3;for(t>.6&&(i+=.5),r.xp+=i,this.game.ui.floatText(this.game.headPos(e),`💛`,`heart`);r.lvl<xp.length&&r.xp>=xp[r.lvl];)r.lvl++,this.levelUp(e.regular,r.lvl)}levelUp(e,t){let n=Cp[e],r=this.game.state,i=this.game.ui,a=``;if(t===3){let e=200*r.level;this.game.earn(e,`stammgaeste`),r.collect.packs+=1,a=` Geschenk: ${$(e)} und ein Kartenpäckchen.`}else if(t===5){let e=`special_${n.special}`;r.coffees.includes(e)||r.coffees.push(e),a=` Neu auf der Karte: ${vu(e).name}.`}this.game.addXP(20*t),this.game.audio.coin(),i.toast(`💛 ${n.name}: Freundschaft Stufe ${t}. ${this.game.dogs.story(n.story[t-1])}${a}`,`big`,7e3)}},Ep=e=>e[Math.floor(Math.random()*e.length)],Dp=()=>iu.hours/8,Op=e=>Math.max(1,Math.round(e*Dp())),kp={serve:{icon:`☕`,n:e=>Op(12+e*3),text:e=>`Bediene ${e} Gäste`},serve_coffee:{icon:`🫖`,n:()=>Op(4),text:(e,t)=>`Serviere ${e}× ${vu(t)?.name||t}`},pet:{icon:`💕`,n:()=>6,text:e=>`Streichle ${e}× einen Hund`},feed:{icon:`🍖`,n:()=>3,text:e=>`Füttere ${e}× einen Hund`},cake:{icon:`🍰`,n:()=>Op(5),text:e=>`Verkaufe ${e} Stück Kuchen`,need:e=>e.state.evening.stock.cake>0||e.state.staff.konditor},tips:{icon:`🫙`,n:e=>Math.max(5,Math.round(8*e*Dp())),text:e=>`Sammle ${$(e)} Trinkgeld`},earn:{icon:`💰`,n:(e,t)=>Math.max(Math.round(100*Dp()/10)*10,Math.round(t*.8/25)*25),text:e=>`Verdiene heute ${$(e)}`},regular:{icon:`💛`,n:()=>2,text:e=>`Bediene ${e} Stammgäste`,need:e=>e.state.level>=2}},Ap=class{constructor(e){this.game=e;let t=e.state;t.quests&&Array.isArray(t.quests.list)||(t.quests={day:0,list:[]}),t.quests.day===t.day&&t.quests.list.length||this.roll()}get q(){return this.game.state.quests}base(){let e=this.game.state;return e.lastDay?.earned>0?e.lastDay.earned*(iu.hours/(e.lastDay.hours||8)):150*e.level*Dp()}roll(){let e=this.game,t=e.state,n=Object.keys(kp).filter(t=>!kp[t].need||kp[t].need(e)),r=[];for(;r.length<3&&n.length;){let e=Math.floor(Math.random()*n.length),i=n.splice(e,1)[0],a=i===`serve_coffee`?Ep(t.coffees):null,o=kp[i].n(t.level,this.base()),s=Math.random()<.03;r.push({type:i,key:a,n:o,have:0,done:!1,reward:s?{packs:1}:{money:Math.max(50,Math.round(this.base()*.15/10)*10)}})}t.quests={day:t.day,list:r}}track(e,t=1,n=null){if((e===`feed`||e===`pet`)&&this.game.onboardEv?.(`dog`),this.game.state.clock.phase===`day`||e===`feed`||e===`pet`)for(let r of this.q.list)r.done||r.type!==e||r.key&&r.key!==n||(r.have=Math.min(r.n,r.have+t),r.have>=r.n&&this.complete(r))}complete(e){let t=this.game.state;e.done=!0;let n;if(e.reward.packs?(t.collect.packs+=e.reward.packs,n=`1 Kartenpäckchen`):(this.game.earn(e.reward.money,`tagesziele`),n=$(e.reward.money)),this.game.addXP(Yu.xpQuest),this.game.audio.coin(),this.game.ui.toast(`📋 Tagesziel geschafft: ${this.text(e)}. Belohnung: ${n}`,`big`,4500),Wu.questChest&&this.q.list.every(e=>e.done)){let e=Math.max(100,Math.round(this.base()*.25/10)*10);this.game.earn(e,`tagesziele`),setTimeout(()=>this.game.ui.toast(`🌟 Alle Tagesziele erfüllt! Bonus ${$(e)}.`,`big`,5e3),1500)}}text(e){return kp[e.type].text(e.n,e.key)}html(){return this.q.list.map(e=>{let t=Math.round(e.have/e.n*100),n=e.reward.packs?`🎁`:$(e.reward.money),r=e.type===`tips`||e.type===`earn`?$(e.have):e.have;return`<div class="quest${e.done?` done`:``}"><span>${kp[e.type].icon} ${this.text(e)}</span>
          <small>${e.done?`✓ erledigt`:`${r} / ${e.type===`tips`||e.type===`earn`?$(e.n):e.n} · ${n}`}</small>
          <div class="pbar"><i style="width:${t}%"></i></div></div>`}).join(``)}onOpen(){this.roll()}},jp=e=>1+Math.min(.66,(e||1)*.027),Mp=e=>{let t=(e%2+2)%2;return t<1?t:2-t},Np=(e,t,n=.12,r=.88)=>{let i=n+e()*Math.max(0,r-n-t);return[i,i+t]};function Pp(e,t,n){let r=(t[0]+t[1])/2;return Math.abs(e-r)<=n/2?3:e>=t[0]&&e<=t[1]?2:1}var Fp=(e,t)=>(e.res??=t,e.res),Ip={foam:{create:(e,t,n)=>({t:t(),speed:e.speed*jp(n),zone:Np(t,e.zone),time:e.dur}),pos:e=>Mp(e.t),tick(e,t){e.t+=t*e.speed,e.time-=t,e.time<=0&&Fp(e,1)},press:e=>Fp(e,Pp(Mp(e.t),e.zone,e.cfg.perfect)),view:e=>({zones:Rp(e),marks:[Mp(e.t)]})},mix:{create:(e,t,n)=>({fill:0,decay:e.decay*jp(n),zone:Np(t,e.zone,.4,.96),time:e.dur,taps:0}),tick(e,t){e.fill=Math.max(0,e.fill-e.decay*t),e.time-=t,e.time<=0&&Fp(e,Pp(e.fill,e.zone,e.cfg.perfect))},press(e){e.taps++,e.fill=Math.min(1,e.fill+e.cfg.step)},view:e=>({zones:Rp(e),marks:[e.fill],fill:e.fill})},flip:{create:(e,t,n)=>({pos:0,v:e.v0*jp(n),accel:e.accel*jp(n),zone:Np(t,e.zone,.45,.92)}),tick(e,t){e.v+=e.accel*t,e.pos=Math.min(1,e.pos+e.v*t),e.pos>=1&&Fp(e,1)},press:e=>Fp(e,Pp(e.pos,e.zone,e.cfg.perfect)),view:e=>({zones:Rp(e),marks:[e.pos]})},plate:{create(e,t,n){let r=e.targets,i=.7/r,a=Array.from({length:r},(e,n)=>({at:.2+n*i+t()*i*.5,hit:!1,gone:!1}));return{pos:0,speed:e.speed*jp(n),targets:a,miss:0}},tick(e,t){e.pos=Math.min(1,e.pos+e.speed*t);for(let t of e.targets)!t.hit&&e.pos>t.at+e.cfg.tol&&(t.gone=!0);(e.pos>=1||e.targets.every(e=>e.hit||e.gone))&&Fp(e,Lp(e))},press(e){let t=e.targets.find(t=>!t.hit&&!t.gone&&Math.abs(e.pos-t.at)<=e.cfg.tol);t?t.hit=!0:e.miss++,e.targets.every(e=>e.hit||e.gone)&&Fp(e,Lp(e))},view:e=>({zones:e.targets.map(t=>({a:t.at-e.cfg.tol,b:t.at+e.cfg.tol,cls:t.hit?`hit`:t.gone?`gone`:`target`})),marks:[e.pos]})}};Ip.slice=Ip.foam,Ip.fill={create:(e,t,n)=>({pos:0,speed:e.speed*(1+(jp(n)-1)*.5),zone:Np(t,e.zone,.55,.93)}),tick(e,t){e.pos=Math.min(1,e.pos+e.speed*t),e.pos>=1&&Fp(e,1)},press:e=>Fp(e,Pp(e.pos,e.zone,e.cfg.perfect)),view:e=>({zones:Rp(e),marks:[e.pos],fill:e.pos})};function Lp(e){let t=e.targets.filter(e=>!e.hit).length+Math.max(0,e.miss-1);return t===0?3:t===1?2:1}function Rp(e){let t=(e.zone[0]+e.zone[1])/2,n=e.cfg.perfect/2;return[{a:e.zone[0],b:e.zone[1],cls:`zone`},{a:t-n,b:t+n,cls:`perfect`}]}Object.keys(Ip);function zp(e,t=Math.random,n=1,r=null){let i=Ip[e]?e:`foam`,a=r?{...mu[i],...r}:mu[i];return{kind:i,cfg:a,res:null,...Ip[i].create(a,t,n)}}function Bp(e,t){return e.res??Ip[e.kind].tick(e,t),e.res}function Vp(e){return e.res??Ip[e.kind].press(e),e.res}var Hp=e=>Ip[e.kind].view(e);function Up(e){if(e===`kuchen`)return gu.kuchen.map(Wp);let t=gu[e.recipe?e.recipe.base:e.id]||gu[e.cat]||[`foam`];return e.recipe&&(t=[...t,`syrup`]),t.slice(0,3).map(Wp)}var Wp=e=>({id:e,...hu[e],help:hu[e].help||mu[hu[e].kind].help});function Gp(e){if(!e.length)return 1;let t=e.reduce((e,t)=>e+t,0)/e.length;return Math.max(1,Math.min(3,Math.round(t)))}var Kp=(e,t)=>Array.from({length:e},(e,n)=>t(n)).join(``),qp=()=>Kp(3,e=>`<u class="steam" style="--i:${e}"></u>`),Jp=e=>`<div class="sc sc-liq ${e}"><div class="vessel"><i class="liq"></i><i class="head"></i></div><i class="stream"></i></div>`,Yp=e=>`<div class="sc sc-whirl ${e}"><div class="bowl"><i class="mix"></i><i class="swirl"></i></div><i class="tool"></i></div>`,Xp=e=>`<div class="sc sc-drops ${e}"><div class="vessel"></div></div>`,Zp={grind:()=>`<div class="sc sc-mill"><div class="mill"><i class="hopper"></i><i class="crank"></i></div>
    ${Kp(7,e=>`<b class="grain" style="--i:${e}"></b>`)}<div class="heap"></div></div>`,pour:()=>Jp(`glass`),tap:()=>Jp(`mug`),syrup:()=>Jp(`cup`),ladle:()=>Jp(`bowl`),batter:()=>`<div class="sc sc-pan"><div class="pan"><i class="cake"></i></div><i class="stream"></i></div>`,foam:()=>`<div class="sc sc-foam"><div class="jug"><i class="milk"></i>${Kp(6,e=>`<b class="bub" style="--i:${e}"></b>`)}</div>${qp()}</div>`,stir:()=>Yp(`spoon`),whisk:()=>Yp(`whisk`),blend:()=>Yp(`blend`),ice:()=>Xp(`glass`),fruit:()=>Xp(`bowl`),top:()=>Xp(`plate`),circles:()=>`<div class="sc sc-rings"><div class="cup"><i class="ring r1"></i><i class="ring r2"></i><i class="ring r3"></i></div><i class="kettle"></i><i class="stream"></i></div>`,bake:()=>`<div class="sc sc-oven"><div class="oven"><i class="glow"></i><i class="dough"></i></div></div>`,toast:()=>`<div class="sc sc-toast"><div class="toaster"><i class="glow"></i><i class="slice"></i></div>${qp()}</div>`,steep:()=>`<div class="sc sc-steep"><div class="cup"><i class="tea"></i></div><i class="bag"></i>${qp()}</div>`,flip:()=>`<div class="sc sc-flip"><div class="pan"><i class="food"></i></div></div>`,cut:()=>`<div class="sc sc-cut"><div class="loaf"></div><i class="knife"></i></div>`,scoop:()=>`<div class="sc sc-scoop"><div class="tub"></div><i class="scooper"></i></div>`},Qp=e=>(Zp[e]||Zp.foam)(),$p={ice:[`🧊`],fruit:[`🍓`,`🍌`,`🫐`],top:[`🥬`,`🍅`,`🧀`]};function em(e,t,n,r,i,a,o,s=0,c=.8){if(!e||e.childElementCount>60)return;let l=document.createElement(`span`);l.className=`fxp ${n}`,l.innerHTML=t,l.style.cssText=`left:${r}%;top:${i}%;--dx:${a}px;--dy:${o}px;animation-delay:${s}s;animation-duration:${c}s`,e.appendChild(l);let u=()=>l.remove();l.addEventListener(`animationend`,u),setTimeout(u,(c+s)*1e3+200)}function tm(e,t,n){let r=e.querySelector(`.xmini-fx`);if(!r)return;let i=t===3?[`✨`,`⭐`,`✨`,`💫`]:t===2?[`💚`,`🍃`,`💚`]:[`💨`,`💦`],a=t===3?12:t===2?6:4;for(let e=0;e<a;e++){let n=e/a*Math.PI*2+Math.random()*.5,o=(t===3?70:45)+Math.random()*30;em(r,i[e%i.length],`b${t}`,50,38,Math.cos(n)*o,Math.sin(n)*o-10,Math.random()*.08,.7+Math.random()*.3)}em(r,n,`txt t${t}`,50,30,0,-36,0,.9),e.classList.remove(`hit1`,`hit2`,`hit3`),e.offsetWidth,e.classList.add(`hit${t}`)}function nm(e,t,n){let r=e.querySelector(`.xmini-stage`);if(!r)return;r.classList.remove(`jolt`),r.offsetWidth,r.classList.add(`jolt`);let i=$p[t],a=r.querySelector(`.sc-drops .vessel`);if(i&&a&&n!=null){let e=document.createElement(`b`);e.className=`item`,e.textContent=i[n%i.length],e.style.setProperty(`--x`,`${(Math.random()*40-20).toFixed(0)}%`),e.style.setProperty(`--n`,Math.min(n,5)),a.appendChild(e)}}function rm(e,t){let n=e.querySelector(`.xmini-stage`);n&&n.classList.add(`serve`);let r=e.querySelector(`.xmini-fx`);if(t===3)for(let e=0;e<8;e++)em(r,`✨`,`b3`,30+Math.random()*50,30+Math.random()*20,Math.random()*40-20,-30-Math.random()*30,e*.06,.9)}var im=(e=Math.random)=>Ju.vip.from+e()*(Ju.vip.to-Ju.vip.from),am=(e,t,n)=>e.vipDay!==t&&n>=0&&n>=e.vipAt;function om({regular:e=null,critic:t=null,vipDue:n=!1,menu:r=[],priceOf:i=()=>0,pick:a=()=>r[0]}){let o=e||null,s=!o&&t?t:null,c=!!n&&!s&&(!o||(o.lvl||0)>=Ju.vipFriend),l;return l=c?um(r,i)??o?.coffee??a():o?.coffee||s?.coffee||a(),{regular:o?.id||null,regularLvl:o?.lvl||0,critic:!!s,vip:c,coffee:l,patience:sm({vip:c,critic:!!s,regularLvl:o?o.lvl||0:-1})}}function sm({vip:e=!1,critic:t=!1,regularLvl:n=-1}={}){let r=Ju.patience,i=r.normal;return n>=0&&(i*=r.regular+Ju.regularPerLvl*n),e&&(i*=r.vip),t&&(i*=r.critic),i}var cm=(e,t,n=1,r=1)=>e*t*n*r;function lm(e,t){return{extra:Math.round(e*Ju.vip.bonus*100)/100,packs:+(t===3),xp:Ju.vip.xp}}function um(e,t){return e.length?[...e].sort((e,n)=>(t(n)||0)-(t(e)||0))[0]:null}var dm=[`golden`,`dackel`,`mops`,`beagle`,`corgi`,`pudel`,`labrador`,`spitz`],fm=Object.keys(wu),pm=Object.keys(Eu.personalities),mm=[`Bohne`,`Krümel`,`Mocca`,`Latte`,`Zimt`,`Muffin`,`Toffee`,`Praline`,`Waffel`,`Keksi`,`Brezel`,`Kakao`,`Honig`,`Karamell`,`Nugat`,`Flocke`,`Pfeffer`,`Sesam`],hm=(e,t)=>e[Math.floor(t()*e.length)%e.length],gm=(e,t)=>Array.isArray(e.crew)?e.crew.filter(e=>e.role===t):[],_m=(e,t)=>gm(e,t).length;function vm(e,t=0){let n=wu[e];return n?Math.round(n.cost*(t>=1?Eu.secondCost:1)):1/0}function ym(e,t){let n=wu[t];if(!n)return!1;let r=_m(e,t);return r<Eu.maxPerRole&&e.level>=n.level&&e.money>=vm(t,r)}function bm(e,t,n=Math.random,r={}){let i=new Set((e.crew||[]).map(e=>e.name)),a=mm.filter(e=>!i.has(e));return{id:Number.isInteger(e.nextId)?e.nextId++:Math.floor(n()*1e6),name:r.name||hm(a.length?a:mm,n),breed:r.breed||hm(dm,n),role:t,pers:r.pers||hm(pm,n),xp:0,spec:null}}function xm(e){e.staff=e.staff||{};for(let t of fm)e.staff[t]=_m(e,t)>0;return e.staff}function Sm(e,t,n=Math.random){if(!ym(e,t))return null;let r=vm(t,_m(e,t)),i=bm(e,t,n);return e.crew=[...e.crew||[],i],xm(e),{pup:i,cost:r}}function Cm(e){let t=0;for(let n=0;n<Eu.levels.length;n++)(e||0)>=Eu.levels[n]&&(t=n+1);return t}var wm=e=>Eu.levels.find(t=>t>(e||0))??null;function Tm(e,t=Eu.xpTask){if(!e)return 0;let n=Cm(e.xp);e.xp=(e.xp||0)+t;let r=Cm(e.xp);return r>n?r:0}var Em=e=>!!e&&!e.spec&&Cm(e.xp)>=Eu.specLevel;function Dm(e,t,n){return!Em(e)||!n[t]?!1:(e.spec=t,!0)}var Om=e=>Eu.personalities[e?.pers]||{};function km(e,t){if(!e)return 1;let n=Cm(e.xp)+(Om(e).star||0),r=1;return n>=Eu.star2&&(r=2),n>=Eu.star3&&e.spec===t&&(r=3),r}function Am(e,t,n){let r=gm(e,t);return r.length?r.reduce((e,t)=>{let r=km(e,n),i=km(t,n);return i===r?(t.xp||0)>(e.xp||0)?t:e:i>r?t:e}):null}function jm(e){let t=wu[e?.role];return t?t.wage*(Om(e).wage||1):0}var Mm=e=>(e.crew||[]).reduce((e,t)=>e+jm(t),0);function Nm(e,t){let n=gm(e,t);if(!n.length)return 1;let r=Math.min(...n.map(e=>Om(e).speed||1));return n.length>=2&&t===`barista`&&(r*=Eu.second.brew),r}var Pm=e=>(_m(e,`kellner`)>=2?Eu.second.walk:1)/Nm(e,`kellner`),Fm=e=>_m(e,`sitter`)>=2?Eu.second.sitter:5,Im=e=>_m(e,`konditor`)?15+(_m(e,`konditor`)>=2?Eu.second.cake:0):0,Lm=e=>_m(e,`manager`)?.25+(_m(e,`manager`)>=2?Eu.second.branch:0):0,Rm=e=>gm(e,`kellner`).reduce((e,t)=>e+(Om(t).tip||0),0);function zm(e){if(!Array.isArray(e))return[];let t=[],n={};for(let r of e)r&&typeof r==`object`&&wu[r.role]&&(n[r.role]=(n[r.role]||0)+1,n[r.role]>Eu.maxPerRole||t.push({id:Number.isInteger(r.id)?r.id:0,name:typeof r.name==`string`&&r.name?r.name:`Bohne`,breed:dm.includes(r.breed)?r.breed:`golden`,role:r.role,pers:pm.includes(r.pers)?r.pers:`fleissig`,xp:Number.isFinite(r.xp)&&r.xp>=0?r.xp:0,spec:typeof r.spec==`string`?r.spec:null}));return t}Object.keys(Qu);var Bm=e=>typeof e==`object`&&!!e&&!Array.isArray(e),Vm=e=>typeof e==`number`&&Number.isFinite(e);function Hm(e){Bm(e.city)||(e.city={});let t=e.city;Bm(t.sites)||(t.sites={}),Bm(t.sites.stammhaus)||(t.sites.stammhaus={lvl:1,local:null,last:0});for(let[e,n]of Object.entries(t.sites))!Qu[e]||!Bm(n)?delete t.sites[e]:(n.lvl=Math.min($u.maxLevel,Math.max(1,Number.isInteger(n.lvl)?n.lvl:1)),Bm(n.local)||(n.local=null),(!Vm(n.last)||n.last<0)&&(n.last=0));return t.sites[t.active]&&Qu[t.active]?.full||(t.active=`stammhaus`),t.sites[t.active].local=null,t}var Um=e=>Object.keys(Hm(e).sites),Wm=(e,t)=>!!Hm(e).sites[t],Gm=e=>Hm(e).active,Km=e=>Um(e).length-1;function qm(e,t){let n=Qu[t],r=Hm(e).sites[t];return r?Math.round(n.cost*$u.upCost.base*$u.upCost.mult**(r.lvl-1)):n.cost}function Jm(e,t){let n=Qu[t];if(!n||t===`stammhaus`)return`unbekannt`;let r=Hm(e).sites[t];return(e.level||1)<n.level?`Level ${n.level}`:r&&r.lvl>=$u.maxLevel?`max`:(e.money||0)<qm(e,t)?`Geld`:null}function Ym(e,t){let n=Hm(e).sites[t];if(!n)return 0;let r=Qu[t],i=r.income*(1+.5*(n.lvl-1));return r.full?Math.max(i,n.last*$u.idleShare):i}function Xm(e){let t=Hm(e),n=0;for(let r of Object.keys(t.sites))r!==t.active&&(n+=Ym(e,r));return n}function Zm(e,t){let n=Hm(e);Vm(t)&&t>=0&&(n.sites[n.active].last=t)}var Qm=(e,t)=>Wm(e,t)&&!!Qu[t].full&&Gm(e)!==t;function $m(e,t,n){if(!Qm(e,t))return!1;let r=e.city,i=e=>Object.fromEntries($u.localKeys.filter(t=>e[t]!==void 0).map(t=>[t,structuredClone(e[t])]));r.sites[r.active].local=i(e);let a=r.sites[t].local||n(t);for(let t of $u.localKeys)a[t]!==void 0&&(e[t]=structuredClone(a[t]));return r.sites[t].local=null,r.active=t,!0}function eh(e,t){let n=Object.fromEntries($u.localKeys.map(t=>[t,structuredClone(e[t])]));return Qu[t]?.scenario&&(n.scenario=Qu[t].scenario),n}var th=e=>typeof e==`object`&&!!e&&!Array.isArray(e),nh=e=>typeof e==`number`&&Number.isFinite(e);function rh(e){th(e.goals)||(e.goals={});let t=new Set(qu.map(e=>e.id));return e.goals.done=Array.isArray(e.goals.done)?[...new Set(e.goals.done.filter(e=>t.has(e)))]:[],e.goals}function ih(e){let t=e.legacy?.bonus;return nh(t)&&t>0?t:0}function ah(e){let t=th(e.action)?e.action:null,n=t&&nh(t.bones)&&t.bones>0?Math.floor(t.bones):0;return e.legacy={bones:n,prestiges:t&&nh(t.prestiges)&&t.prestiges>0?Math.floor(t.prestiges):0,bonus:Math.round(n*Ku.boneBonus*1e4)/1e4},t&&(t.bones=0),e.legacy}function oh(e,t){let n=Object.values(e.city?.sites||{});switch(t.kind){case`level`:return e.level||1;case`earned`:return e.totals?.earned||0;case`served`:return e.totals?.served||0;case`perfect`:return e.totals?.perfect||0;case`sites`:return n.length;case`siteMax`:return n.reduce((e,t)=>Math.max(e,t?.lvl||0),0);case`crew`:return Array.isArray(e.crew)?e.crew.length:0;default:return 0}}function sh(e){let t=new Set(rh(e).done);return qu.map(n=>{let r=oh(e,n);return{...n,value:r,share:Math.max(0,Math.min(1,r/n.target)),done:t.has(n.id)}})}function ch(e){let t=sh(e).filter(e=>!e.done&&e.value>=e.target);for(let n of t)e.goals.done.push(n.id);return t}var lh=e=>typeof e==`object`&&!!e&&!Array.isArray(e),uh=e=>typeof e==`number`&&Number.isFinite(e),dh={0:e=>(uh(e.lastSeen)&&e.lastSeen>0&&(e.maxSeen=e.lastSeen),e),1:e=>{let t=7,n=()=>(t=(t*9301+49297)%233280)/233280,r=lh(e.staff)?e.staff:{};e.crew=Array.isArray(e.crew)?e.crew:[];for(let t of Object.keys(wu))r[t]===!0&&!e.crew.some(e=>e.role===t)&&e.crew.push(bm(e,t,n));return xm(e),e},2:e=>{let t=lh(e.collect)&&lh(e.collect.branches)?e.collect.branches:{};e.city={active:`stammhaus`,sites:{stammhaus:{lvl:1,local:null,last:0}}};for(let[n,r]of Object.entries(t))n===`stammhaus`||!Qu[n]||!uh(r)||r<1||(e.city.sites[n]={lvl:Math.min($u.maxLevel,Math.floor(r)),local:null,last:0});return e},3:e=>(ah(e),rh(e),e)};function fh(e){return lh(e)&&Number.isInteger(e.saveVersion)&&e.saveVersion>=0?e.saveVersion:0}function ph(e){let t=[],n=(e,n)=>t.push(`${e} → ${JSON.stringify(n)}`),r=(e,t,r,{min:i=-1/0,int:a=!1,path:o=t}={})=>{let s=e[t];s!==void 0&&(uh(s)?(a&&!Number.isInteger(s)&&(s=Math.floor(s)),s<i&&(s=i),s!==e[t]&&(e[t]=s,n(o,s))):(e[t]=r,n(o,r)))};r(e,`money`,0),r(e,`xp`,0,{min:0}),r(e,`level`,1,{min:1,int:!0}),r(e,`day`,1,{min:1,int:!0}),r(e,`expansion`,0,{min:0,int:!0}),e.expansion>3&&(e.expansion=3,n(`expansion`,3)),r(e,`nextId`,100,{min:1,int:!0});for(let t of[`lastSeen`,`maxSeen`])e[t]!==void 0&&!(uh(e[t])&&e[t]>0)&&(e[t]=null,n(t,null));if(e.clock!==void 0&&(lh(e.clock)?(e.clock.phase!==`day`&&e.clock.phase!==`night`&&(e.clock.phase=`day`,n(`clock.phase`,`day`)),r(e.clock,`t`,0,{min:0,path:`clock.t`})):(e.clock={phase:`day`,t:0},n(`clock`,e.clock))),lh(e.upgrades))for(let t of Object.keys(e.upgrades)){let i=yu[t];i&&(r(e.upgrades,t,0,{min:0,int:!0,path:`upgrades.${t}`}),e.upgrades[t]>i.max&&(e.upgrades[t]=i.max,n(`upgrades.${t}`,i.max)))}else e.upgrades!==void 0&&(e.upgrades={},n(`upgrades`,{}));if(lh(e.totals))for(let t of Object.keys(e.totals))r(e.totals,t,0,{min:0,path:`totals.${t}`});if(Array.isArray(e.coffees)){let t=[...new Set(e.coffees.filter(e=>typeof e==`string`&&vu(e)))];t.includes(`espresso`)||t.unshift(`espresso`),(t.length!==e.coffees.length||t.some((t,n)=>t!==e.coffees[n]))&&(n(`coffees`,t),e.coffees=t)}if(Array.isArray(e.furniture)){let t=e.furniture.filter(e=>lh(e)&&Du[e.type]&&Number.isInteger(e.x)&&Number.isInteger(e.z));t.length!==e.furniture.length&&(n(`furniture`,`${e.furniture.length-t.length} Möbel entfernt`),e.furniture=t)}if(e.dogs!==void 0&&!Array.isArray(e.dogs)&&(e.dogs=[],n(`dogs`,[])),Array.isArray(e.dogs)){for(let t of e.dogs){if(!lh(t))continue;let e=lh(t.mix)?t.mix:{},r=Object.entries(e).filter(([e,t])=>dm.includes(e)&&uh(t)&&t>0);if(r.length===Object.keys(e).length&&r.length)continue;let i=r.reduce((e,[,t])=>e+t,0);t.mix=r.length?Object.fromEntries(r.map(([e,t])=>[e,t/i])):{golden:1},n(`dogs.${t.id}.mix`,t.mix)}let t=e.dogs.length;e.dogs=e.dogs.filter(lh),e.dogs.length!==t&&n(`dogs`,`${t-e.dogs.length} Einträge entfernt`)}if(e.crew!==void 0){let t=zm(e.crew);JSON.stringify(t)!==JSON.stringify(e.crew)&&(e.crew=t,n(`crew`,`${t.length} Welpen`)),xm(e)}if(e.city!==void 0){let t=JSON.stringify(e.city);Hm(e),JSON.stringify(e.city)!==t&&n(`city`,Object.keys(e.city.sites).join(`,`))}if(e.legacy!==void 0){let t=lh(e.legacy)?e.legacy:{},r={bones:uh(t.bones)&&t.bones>0?Math.floor(t.bones):0,prestiges:uh(t.prestiges)&&t.prestiges>0?Math.floor(t.prestiges):0,bonus:uh(t.bonus)&&t.bonus>0?t.bonus:0};JSON.stringify(r)!==JSON.stringify(e.legacy)&&(e.legacy=r,n(`legacy`,r))}if(e.goals!==void 0){let t=JSON.stringify(e.goals);rh(e),JSON.stringify(e.goals)!==t&&n(`goals`,e.goals.done.length)}return t}function mh(e){if(!lh(e))return null;let t;try{t=structuredClone(e)}catch{t=JSON.parse(JSON.stringify(e))}let n=fh(t);if(n>4)return{state:t,from:n,to:n,migrated:!1,newer:!0,repairs:ph(t)};for(let e=n;e<4;e++)t=dh[e](t)||t;t.saveVersion=4;let r=ph(t);return{state:t,from:n,to:4,migrated:n<4,newer:!1,repairs:r}}var hh=`welpencafe.save.v1`,gh=`welpencafe.save.backup`,_h=typeof window<`u`?window.wcApp:null;function vh(e){try{let t=JSON.parse(e);return t&&typeof t==`object`?t:null}catch{return null}}function yh(){let e=null,t=null;try{let t=localStorage.getItem(hh);e=vh(t),t&&!e&&Sh(`broken`,t)}catch{}try{t=vh(_h?.loadSave?.())}catch{}return e?t&&(t.lastSeen||0)>=(e.lastSeen||0)?t:e:t}function bh(e,t=!1){let n;try{n=JSON.stringify(e)}catch{return}try{localStorage.setItem(hh,n)}catch{}try{_h?.saveSave?.(n,t)}catch{}}var xh=[`prev`,`premigration`,`broken`];function Sh(e,t){if(xh.includes(e)&&typeof t==`string`){try{localStorage.setItem(e===`prev`?gh:`${gh}.${e}`,t)}catch{}try{_h?.backupSave?.(t,e)}catch{}}}function Ch(e=`prev`,t){let n=t??yh();if(n)try{Sh(e,JSON.stringify(n))}catch{}}var wh=()=>({earned:0,auto:0,tips:0,served:0,lost:0,cakes:0,income:{},spent:{}});function Th(){let e=1,t=(t,n,r,i=0)=>({id:e++,type:t,x:n,z:r,rot:i});return[t(`rug`,5,6),t(`table`,3,5),t(`chair`,2,5,1),t(`chair`,4,5,3),t(`table`,8,5),t(`chair`,7,5,1),t(`chair`,9,5,3),t(`plant`,0,2),t(`plant`,11,2),t(`lamp`,11,8)]}function Eh(){return{money:Yu.startMoney,xp:0,level:1,day:1,clock:{phase:`day`,t:0},upgrades:{machine:0,grinder:0,ambience:0,sign:0,register:0,cakecase:0,kitchen:0,garden:0,roastery:0,academy:0},coffees:[`espresso`],staff:{barista:!1,kellner:!1,sitter:!1,konditor:!1,manager:!1},crew:[],furniture:Th(),today:wh(),lastDay:null,totals:{served:0,earned:0,lost:0,litters:0,dogsSold:0,campaigns:0,perfect:0},lastSeen:Date.now(),maxSeen:Date.now(),saveVersion:4,music:{on:!0,vol:.5,style:`lofi`,song:0},nextId:100,dogs:[],market:{offers:[],bids:[],bidT:20},litter:null,expansion:0,scenario:`klassisch`,cafeName:`Welpen-Café`,city:{active:`stammhaus`,sites:{stammhaus:{lvl:1,local:null,last:0}}},legacy:{bones:0,prestiges:0,bonus:0},goals:{done:[]}}}var Dh=null;function Oh(){let e=Eh(),t=null;try{if(t=yh(),!t)return Dh={from:null,to:4,migrated:!1,newer:!1,repairs:[],broken:!1},e;let n=mh(t);if(!n)throw Error(`kein Spielstand`);(n.migrated||n.repairs.length)&&Ch(`premigration`,t),Dh={from:n.from,to:n.to,migrated:n.migrated,newer:n.newer,repairs:n.repairs,broken:!1};let r=n.state;return{...e,...r,clock:{...e.clock,...r.clock},upgrades:{...e.upgrades,...r.upgrades},staff:{...e.staff,...r.staff},today:{...e.today,...r.today},totals:{...e.totals,...r.totals},music:{...e.music,...r.music},furniture:Array.isArray(r.furniture)?r.furniture:e.furniture,coffees:Array.isArray(r.coffees)&&r.coffees.length?r.coffees:e.coffees,dogs:Array.isArray(r.dogs)?r.dogs:e.dogs,crew:Array.isArray(r.crew)?r.crew:e.crew,market:{...e.market,...r.market,offers:Array.isArray(r.market?.offers)?r.market.offers:[],bids:Array.isArray(r.market?.bids)?r.market.bids:[]},litter:r.litter??null}}catch{return t&&Ch(`broken`,t),Dh={from:null,to:4,migrated:!1,newer:!1,repairs:[],broken:!0},e}}function kh(e,t=!1){let n=Date.now();e.lastSeen=n,e.maxSeen=Math.max(Number.isFinite(e.maxSeen)?e.maxSeen:0,n),(!Number.isInteger(e.saveVersion)||e.saveVersion<4)&&(e.saveVersion=4),bh(e,t)}var Ah=new Intl.NumberFormat(`de-DE`,{maximumFractionDigits:0}),jh=e=>Ah.format(Math.floor(e)),Mh={len:.11,spawn:1.5,patience:.8},Nh={window:15,max:5,tip:.1},Ph={1:0,2:.2,3:.5};Ju.vip;var Fh={level:12,per:2e4,bonus:.03},Ih=[{id:`money`,label:`Geldregen`,icon:`💰`,w:30,color:`#f4c95d`},{id:`xp`,label:`XP-Schub`,icon:`⭐`,w:25,color:`#9ccf8e`},{id:`pack`,label:`Kartenpäckchen`,icon:`🃏`,w:20,color:`#8fb8e8`},{id:`boost`,label:`Goldene Stunde`,icon:`⏳`,w:20,color:`#e8a07a`},{id:`bone`,label:`Goldener Knochen`,icon:`🦴`,w:5,color:`#d9b0e8`}],Lh=()=>Ih.filter(e=>e.id!==`bone`||Wu.wheelBone);function Rh(){return{wheelDay:0,bones:0,prestiges:0,miniOn:!0,rushes:[],rushDay:0,vipDay:0,vipAt:0,best:0}}var zh=class{constructor(e){this.game=e;let t=e.state;t.action={...Rh(),...t.action},this.a=t.action,this.combo=0,this.comboT=0,this.boostT=0,this.mini=null,this.wasRush=!1,this.buildDom(),this.planDay()}buildDom(){let e=this.game.ui.root,t=document.createElement(`div`);t.className=`xhud`,t.innerHTML=`<span class="xrush hidden">⏰ Stoßzeit!</span><span class="xboost hidden"></span><span class="xcombo hidden"></span>`,e.appendChild(t),this.hud=t;let n=document.createElement(`div`);n.className=`xmini hidden`,n.innerHTML=`<div class="xmini-card"><div class="xmini-steps"></div><div class="xmini-head"><span class="xmini-anim"></span><div class="xmini-title"></div></div>
      <div class="xmini-stage"></div>
      <div class="xmini-bar"><i class="fill"></i><span class="zones"></span><i class="mark"></i></div>
      <div class="xmini-help muted"></div>
      <div class="xmini-res"></div><div class="xmini-fx"></div></div>`,n.addEventListener(`pointerdown`,e=>{e.stopPropagation(),this.pressMini()}),e.appendChild(n),this.miniEl=n;let r=document.createElement(`div`);r.className=`xmodal hidden`,r.innerHTML=`<div class="xmodal-card"><button class="btn round xclose">✕</button><div class="xmodal-body"></div></div>`,r.addEventListener(`click`,e=>{if(e.target===r||e.target.closest(`.xclose`))return this.closeModal();let t=e.target.closest(`[data-x]`);t&&!t.disabled&&this.modalAction(t.dataset.x)}),e.appendChild(r),this.modal=r;let i=document.createElement(`button`);i.className=`btn`,i.id=`btnExtras`,i.title=[Wu.wheel&&`Glücksrad`,Wu.prestige?`Neuer Wurf`:`Langzeitziele`,`Einstellungen`].filter(Boolean).join(`, `),i.innerHTML=(Wu.wheel?`🎡`:`✨`)+`<span class="lbl"> Extras</span><i class="dot hidden" id="xDot"></i>`,i.addEventListener(`click`,()=>this.openModal());let a=e.querySelector(`#btnMenu`);a.parentNode.insertBefore(i,a.parentNode.querySelector(`.music`))}planDay(){let e=this.game.state;if(this.a.rushDay===e.day&&this.a.rushes.length)return;let t=(iu.hours>=9?3:2)==3?[.1,.42,.72]:[.15,.6];this.a.rushes=t.map(e=>Math.round((e+(Math.random()-.5)*.08)*1e3)/1e3),this.a.rushDay=e.day,this.a.vipAt=im(),this.a.vipDay=0}onOpen(){this.planDay(),this.combo=0,Wu.wheel&&this.a.wheelDay!==this.game.state.day&&setTimeout(()=>this.game.ui.toast(`🎡 Das Glücksrad hat heute wieder einen Dreh für dich (Knopf 🎡).`),5e3)}dayP(){let e=this.game.state.clock;return e.phase===`day`?e.t/iu.dayMs:-1}rushNow(){let e=this.dayP();return e>=0&&this.a.rushes.some(t=>e>=t&&e<=t+Mh.len)}fx(e){let t=0;return e===`spawn`&&this.rushNow()&&(t+=Mh.spawn),(e===`price`||e===`tip`)&&this.a.bones&&(t+=Fh.bonus*this.a.bones),(e===`price`||e===`tip`)&&(t+=ih(this.game.state)),t}patienceMult(){return this.rushNow()?Mh.patience:1}vipDue(){return am(this.a,this.game.state.day,this.dayP())}markVip(){this.a.vipDay=this.game.state.day}takeVip(){return this.vipDue()?(this.markVip(),!0):!1}pickCategory(e){let t=this.dayP(),n=t=>e.filter(e=>vu(e)?.cat===t),r=n(`fruehstueck`);if(t>=0&&t<.35&&r.length&&Math.random()<.35)return r[Math.floor(Math.random()*r.length)];let i=n(`essen`);return t>=.35&&t<.65&&i.length&&Math.random()<.3?i[Math.floor(Math.random()*i.length)]:null}onServe(e,t){let n=t.q||1;this.rushNow()?(this.combo=this.comboT>0?Math.min(Nh.max,this.combo+1):1,this.comboT=Nh.window,this.a.best=Math.max(this.a.best||0,this.combo)):(this.combo=0,this.comboT=0);let r=1+Ph[n],i=(1+Ph[n])*(1+Nh.tip*Math.max(0,this.combo-1))*(this.boostT>0?2:1);return n===3&&setTimeout(()=>this.game.ui.floatText(this.game.headPos(e),`✨⭐⭐⭐`,`stars`),250),this.combo>=2&&this.game.audio.blip(600+this.combo*90,.08,.05),{priceMult:r,tipMult:i}}vipReward(e,t,n){let r=this.game.state.collect,i=lm(t,n);this.game.earn(i.extra,`vip`),this.game.state.today.earned+=i.extra,r.packs=(r.packs||0)+i.packs,this.game.addXP(i.xp),this.game.ui.toast(i.packs?`👑 Der VIP ist begeistert: +${$(i.extra)} und ein Kartenpäckchen!`:`👑 Der VIP ist zufrieden: +${$(i.extra)}. Mit drei Sternen gibt es ein Kartenpäckchen dazu.`,`big`,5e3),this.confetti()}onAngry(){this.combo>=2&&this.game.ui.toast(`💔 Combo verloren`),this.combo=0,this.comboT=0}startMini(e,t){let n=vu(e.coffee);this.runMini(Up(n),n.name,e,t,n.color)}startCakeMini(e,t){this.runMini(Up(`kuchen`),`Kuchen`,e,t,`#e8b4a0`)}runMini(e,t,n,r,i){if(!this.a.miniOn)return r(1);this.mini={o:n,done:r,steps:e,idx:0,stars:[],product:t,shown:!1,m:null},this.miniEl.style.setProperty(`--prod`,i||`#c99a66`),this.startStep(),this.miniEl.classList.remove(`hidden`)}startStep(){let e=this.mini,t=e.steps[e.idx];e.m=zp(t.kind,Math.random,this.game.state.level,t.over),e.shown=!1;let n=this.miniEl;n.dataset.kind=e.m.kind,n.dataset.skin=t.skin,n.classList.remove(`done`,`hit1`,`hit2`,`hit3`);let r=n.querySelector(`.xmini-stage`);r.className=`xmini-stage`,r.innerHTML=Qp(t.skin),n.querySelector(`.xmini-anim`).textContent=t.icon,n.querySelector(`.xmini-title`).textContent=`${t.name} · ${e.product}`,n.querySelector(`.xmini-help`).textContent=Pf(t.help),n.querySelector(`.xmini-res`).textContent=``,n.querySelector(`.xmini-steps`).innerHTML=e.steps.length>1?e.steps.map((t,n)=>`<span class="${n<e.idx?`ok`:n===e.idx?`now`:``}">${t.icon} ${t.name}</span>`).join(`<b>›</b>`):``,this.renderMini(!0)}pressMini(){let e=this.mini;if(!e||e.shown)return;let t=e.m.targets?e.m.targets.filter(e=>e.hit).length:0;Vp(e.m);let n=e.m.kind,r=e.m.targets?e.m.targets.filter(e=>e.hit).length:null;(n===`mix`||n===`plate`)&&nm(this.miniEl,e.steps[e.idx].skin,r!=null&&r>t?r:null),n===`plate`&&e.m.res==null&&tm(this.miniEl,r>t?3:1,r>t?`Treffer!`:`Daneben!`);let i=this.miniEl.querySelector(`.xmini-anim`);i.classList.remove(`tap`),i.offsetWidth,i.classList.add(`tap`),this.game.audio.blip(n===`mix`?520+Math.min(1,e.m.fill)*500:n===`fill`?400+e.m.pos*500:660,.05,.04),this.renderMini(n===`plate`),e.m.res!=null&&this.endMini()}stopMini(){this.pressMini()}endMini(){let e=this.mini;if(!e||e.shown)return;e.shown=!0;let t=e.m,n=t.res;e.stars.push(n);let r=e.idx>=e.steps.length-1,i=n===1&&(t.kind===`fill`||t.kind===`flip`)&&t.pos>=1,a=i?t.kind===`fill`?`⭐ Übergelaufen…`:`⭐ Zu lange…`:`⭐ Naja…`,o=n===3?`⭐⭐⭐ Perfekt!`:n===2?`⭐⭐ Gut!`:a;if(this.miniEl.classList.add(`done`),tm(this.miniEl,n,n===3?`Perfekt!`:n===2?`Gut!`:i?t.kind===`fill`?`Übergelaufen!`:`Angebrannt!`:`Daneben!`),r&&rm(this.miniEl,n),!r){this.miniEl.querySelector(`.xmini-res`).textContent=o,this.game.audio.blip(n===3?988:n===2?784:440,.08,.05),setTimeout(()=>{this.mini===e&&(e.idx++,this.startStep())},550);return}let s=Gp(e.stars),c=s===3?`⭐⭐⭐ Perfekt!`:s===2?`⭐⭐ Gut!`:`⭐ Naja…`;this.miniEl.querySelector(`.xmini-res`).textContent=e.steps.length>1?`${o}  ·  Gesamt ${c}`:o,this.game.audio.blip(s===3?1175:s===2?880:440,.12,.07),s===3&&this.game.onboardEv?.(`stars3`),setTimeout(()=>{this.miniEl.classList.add(`hidden`),this.mini=null,e.done(s)},e.steps.length>1?750:450)}renderMini(e=!1){let t=this.mini;if(!t)return;let n=Hp(t.m),r=this.miniEl;if(e||t.m.kind===`plate`){let e=n.zones.map(e=>`<i class="${e.cls}" style="left:${e.a*100}%;width:${(e.b-e.a)*100}%"></i>`).join(``),t=r.querySelector(`.zones`);t.innerHTML!==e&&(t.innerHTML=e)}r.querySelector(`.mark`).style.left=`${n.marks[0]*100}%`,r.querySelector(`.fill`).style.width=`${(n.fill||0)*100}%`,r.style.setProperty(`--p`,n.marks[0].toFixed(3));let i=n.fill==null?t.m.targets?t.m.targets.filter(e=>e.hit).length/t.m.targets.length:0:n.fill;r.style.setProperty(`--f`,i.toFixed(3))}canSpin(){return Wu.wheel&&this.a.wheelDay!==this.game.state.day}bonesAvailable(){let e=Math.floor(Math.sqrt((this.game.state.totals.earned||0)/Fh.per));return Math.max(0,e-this.a.bones-(this.game.state.legacy?.bones||0))}canPrestige(){return Wu.prestige&&this.game.state.level>=Fh.level&&this.bonesAvailable()>=1}openModal(){this.game.checkGoals?.(),this.modal.classList.remove(`hidden`),this.renderModal()}closeModal(){this.spinning||this.modal.classList.add(`hidden`)}renderModal(){let e=this.a;this.game.state;let t=Lh();t.length;let n=t.reduce((e,t)=>e+t.w,0),r=0,i=t.map(e=>{let t=r/n*360;return r+=e.w,`${e.color} ${t}deg ${r/n*360}deg`}).join(`,`);r=0;let a=t.map(e=>{let t=(r+e.w/2)/n*360;return r+=e.w,`<span style="transform:rotate(${t}deg) translateY(-92px) rotate(${-t}deg)">${e.icon}</span>`}).join(``),o=this.bonesAvailable(),s=Math.round(Fh.bonus*100);this.modal.querySelector(`.xmodal-body`).innerHTML=`
${Wu.wheel?`
      <h2>🎡 Glücksrad</h2>
      <p class="muted">Einmal pro Tag drehen. Gewinne: Geld, XP, Kartenpäckchen, Goldene Stunde (doppeltes Trinkgeld für 90 Sekunden)${Wu.wheelBone?` oder mit Glück ein Goldener Knochen`:``}.</p>
      <div class="xwheel-wrap"><div class="xpointer">▼</div><div class="xwheel" style="background:conic-gradient(${i});transform:rotate(${this.wheelRot||0}deg)">${a}</div></div>
      <div class="xcenter"><button class="btn primary" data-x="spin" ${this.canSpin()&&!this.spinning?``:`disabled`}>${this.canSpin()?`Drehen!`:`Morgen wieder`}</button></div>`:``}
${Wu.prestige?`
      <h2>🦴 Neuer Wurf</h2>
      <p class="muted">Verkaufe alles und fang neu an. Du behältst Hunde, Sammelkarten, Abzeichen und Stammgäste. Jeder Goldene Knochen gibt dauerhaft +${s} % auf Preise und Trinkgeld.</p>
      <div class="statgrid"><span>Goldene Knochen</span><b>🦴 ${e.bones} (+${e.bones*s} %)</b>
        <span>Beim nächsten Wurf dazu</span><b>🦴 ${o}</b>
        <span>Würfe bisher</span><b>${e.prestiges}</b>
        <span>Beste Combo</span><b>🔥 ×${e.best||0}</b></div>
      <p class="muted small">Ab Level ${Fh.level}. Mehr Gesamtumsatz bringt mehr Knochen.</p>
      <div class="xcenter"><button class="btn" data-x="prestige" ${this.canPrestige()?``:`disabled`}>🦴 Neuer Wurf (+${o})</button></div>`:this.longtermHtml()}
      <h2>⚙️ Einstellungen</h2>
      <label class="xopt"><input type="checkbox" data-x="mini" ${e.miniOn?`checked`:``}> Zubereitungs-Minispiel beim Brühen (mehr Sterne = mehr Geld)</label>`}longtermHtml(){let e=this.game.state,t=e.legacy||{};return`
      <h2>🏁 Langzeitziele</h2>
      <p class="muted">Jedes Ziel bringt einmal Kartenpäckchen und Erfahrung.</p>
      <div class="xgoals">${sh(e).map(e=>{let t=Math.round(e.share*100),n=e.done?`✅`:`${jh(e.value)} / ${jh(e.target)}`;return`<div class="xgoal ${e.done?`done`:``}"><span>${e.icon} ${e.name}</span><b>${n}</b><i style="width:${e.done?100:t}%"></i></div>`}).join(``)}</div>${t.bones?`<div class="statgrid"><span>Goldene Knochen</span><b>🦴 ${t.bones} (dauerhaft +${Math.round((t.bonus||0)*1e3)/10} % auf Preise und Trinkgeld)</b></div>`:``}
      <div class="statgrid"><span>Beste Combo</span><b>🔥 ×${this.a.best||0}</b></div>`}modalAction(e){e===`spin`?this.spin():e===`mini`?(this.a.miniOn=!this.a.miniOn,this.game.save()):e===`prestige`&&this.confirmPrestige()}spin(){if(!this.canSpin()||this.spinning)return;let e=Lh(),t=e.reduce((e,t)=>e+t.w,0),n=Math.random()*t,r=0;for(;r<e.length-1&&(n-=e[r].w,!(n<0));r++);let i=0;for(let t=0;t<r;t++)i+=e[t].w;let a=(i+e[r].w/2)/t*360,o=Math.ceil((this.wheelRot||0)/360)*360;this.wheelRot=o+1800+(360-a),this.a.wheelDay=this.game.state.day,this.spinning=!0;let s=this.modal.querySelector(`.xwheel`);s.style.transition=`transform 3.2s cubic-bezier(.17,.67,.2,1)`,s.style.transform=`rotate(${this.wheelRot}deg)`,this.modal.querySelector(`[data-x=spin]`).disabled=!0,this.game.audio.blip(660,.1,.05),setTimeout(()=>{this.spinning=!1,this.prize(e[r]),this.renderModal()},3300)}prize(e){let t=this.game,n=t.state;if(e.id===`money`){let e=Math.max(50,Math.round((n.lastDay?.earned||100)*.3));t.earn(e,`gluecksrad`),t.ui.toast(`💰 Geldregen: +${$(e)}`,`big`)}else if(e.id===`xp`){let e=40+n.level*15;t.addXP(e),t.ui.toast(`⭐ XP-Schub: +${e} XP`,`big`)}else e.id===`pack`?(n.collect.packs=(n.collect.packs||0)+1,t.ui.toast(`🃏 Ein Kartenpäckchen! Öffne es unter 🏆 Sammeln.`,`big`)):e.id===`boost`?(this.boostT=90,t.ui.toast(`⏳ Goldene Stunde: 90 Sekunden doppeltes Trinkgeld!`,`big`)):e.id===`bone`&&Wu.wheelBone&&(this.a.bones++,t.ui.toast(`🦴 Ein Goldener Knochen! Dauerhaft mehr Preis und Trinkgeld.`,`big`,5e3));t.audio.coin(),this.confetti(),t.save()}confirmPrestige(){let e=this.bonesAvailable(),t=this.modal.querySelector(`.xmodal-body`);t.innerHTML=`<h2>🦴 Wirklich neu anfangen?</h2>
      <p>Geld, Level, Upgrades, Sorten, Personal, Anbau, Filialen und Forschung werden zurückgesetzt. Möbel kommen in die Grundaufstellung.</p>
      <p>Du behältst Hunde, Sammelkarten, Abzeichen, Stammgäste und bekommst <b>🦴 ${e} Goldene Knochen</b> dazu (insgesamt ${this.a.bones+e}, also +${(this.a.bones+e)*Math.round(Fh.bonus*100)} % auf Preise und Trinkgeld).</p>
      <div class="xcenter"><button class="btn" data-x="back">Abbrechen</button> <button class="btn primary" data-x="doPrestige">Neuer Wurf!</button></div>`,t.querySelector(`[data-x=back]`).addEventListener(`click`,e=>{e.stopPropagation(),this.renderModal()}),t.querySelector(`[data-x=doPrestige]`).addEventListener(`click`,e=>{e.stopPropagation(),this.doPrestige()})}doPrestige(){if(!this.canPrestige())return;let e=this.game.state,t=Eh(),n=this.bonesAvailable(),r={dogs:e.dogs,totals:e.totals,collect:{...e.collect,branches:{}},regulars:e.regulars,seasons:e.seasons,day:e.day,scenario:e.scenario,cafeName:e.cafeName,music:e.music,nextId:e.nextId,starter:e.starter,legacy:e.legacy,goals:e.goals,action:{...this.a,bones:this.a.bones+n,prestiges:(this.a.prestiges||0)+1,rushes:[],rushDay:0}},i={...t,...Object.fromEntries(Object.entries(r).filter(([,e])=>e!==void 0))};i.money=t.money+200*r.action.bones,i.clock={phase:`day`,t:0},i.lastSeen=Date.now(),i.maxSeen=Math.max(e.maxSeen||0,i.lastSeen),Ch(`prev`,e),bh(i,!0),this.game.noSave=!0,location.reload()}confetti(){let e=this.game.ui.root,t=[`#f4c95d`,`#e8a07a`,`#9ccf8e`,`#8fb8e8`,`#d9b0e8`,`#f08a8a`];for(let n=0;n<36;n++){let r=document.createElement(`i`);r.className=`xconf`,r.style.left=`${40+Math.random()*20}vw`,r.style.background=t[n%t.length],r.style.setProperty(`--dx`,`${(Math.random()-.5)*60}vw`),r.style.setProperty(`--dr`,`${Math.random()*720-360}deg`),r.style.animationDelay=`${Math.random()*.2}s`,e.appendChild(r),setTimeout(()=>r.remove(),1800)}}update(e){this.comboT>0&&(this.comboT-=e,this.comboT<=0&&(this.combo=0)),this.boostT>0&&(this.boostT-=e),this.mini&&!this.mini.shown&&(Bp(this.mini.m,e),this.renderMini(),this.mini.m.res!=null&&this.endMini());let t=this.rushNow();if(!t&&this.wasRush&&(this.combo>=2&&this.game.ui.toast(`🔥 Stoßzeit vorbei, deine Combo lag bei ×${this.combo}.`),this.combo=0,this.comboT=0),t&&!this.wasRush&&(this.game.ui.toast(`⏰ Stoßzeit! Jetzt kommen viele Gäste und nur jetzt zählt die Combo. Schnell bedienen bringt mehr Trinkgeld.`,`big`,4500),this.game.audio.blip(880,.15,.08)),this.wasRush=t,this.hudT=(this.hudT||0)-e,this.hudT<=0){this.hudT=.2;let e=this.hud;e.querySelector(`.xrush`).classList.toggle(`hidden`,!t);let n=e.querySelector(`.xcombo`);if(n.classList.toggle(`hidden`,this.combo<2),this.combo>=2){let e=`🔥 Combo ×${this.combo} <small>+${Math.round(Nh.tip*(this.combo-1)*100)} % Trinkgeld</small>`;n.innerHTML!==e&&(n.innerHTML=e),n.dataset.lvl=this.combo}let r=e.querySelector(`.xboost`);r.classList.toggle(`hidden`,this.boostT<=0),this.boostT>0&&(r.textContent=`⏳ Goldene Stunde ${Math.ceil(this.boostT)} s`);let i=this.game.ui.root.querySelector(`#xDot`);i&&i.classList.toggle(`hidden`,!this.canSpin()&&!this.canPrestige())}}},Bh=e=>typeof e==`number`&&Number.isFinite(e);function Vh(e){let{now:t,lastSeen:n,maxSeen:r,lastDay:i,today:a,clock:o,dayMs:s,nightMs:c,auto:l=1,share:u=.5,branchIncome:d=0,capHours:f=8,minMinutes:p=2,branchShare:m=.5}=e,h=(e,t=0)=>({amount:0,cafe:0,branch:0,minutes:t,reason:e});if(!Bh(t))return h(`now`);let g=[n,r].filter(e=>Bh(e)&&e>0);if(!g.length)return h(`noTimestamp`);let _=(t-Math.max(...g))/6e4;if(!(_>=p))return h(_<0?`future`:`short`,Math.max(0,_)||0);if(!Bh(s)||s<=0)return h(`dayMs`,_);let v=e=>Bh(e?.auto)?e.auto:e?.earned,y=0;i&&Bh(v(i))&&v(i)>0?y=v(i)/(s/6e4):o?.phase===`day`&&Bh(o.t)&&o.t>6e4&&Bh(v(a))&&(y=v(a)/(o.t/6e4)),(!Bh(y)||y<0)&&(y=0);let b=Bh(d)&&d>0?d:0;if(y<=0&&!b)return h(`noIncome`,_);let x=Bh(l)?Math.max(0,Math.min(1,l)):0,S=Bh(u)&&u>0?Math.min(1,u):0,C=Bh(m)&&m>0?Math.min(1,m):0,w=Math.min(_,f*60),T=(s+(Bh(c)?c:0))/6e4,E=e=>Math.round(e*100)/100,D=E(y*x*S*w),O=E(b/T*C*w),k=E(D+O);return!Bh(k)||k<.01?h(`tiny`,_):{amount:k,cafe:D,branch:O,minutes:w,reason:`ok`}}function Hh(e,t){return e?.kellner?t.kellner:e?.barista?t.barista:t.none}var Uh=class{constructor(e,t,n=1.6){this.world=e,this.rig=t,this.group=t.group,this.speed=n,this.points=[],this.onArrive=null,this.phase=0,this.amt=0,this.sitting=!1,this.targetRot=this.group.rotation.y,this.tile={x:0,z:0}}setTile(e){this.group.position.copy(this.world.tileToWorld(e.x,e.z)),this.tile={x:e.x,z:e.z}}get moving(){return this.points.length>0}walkTiles(e,t){this.points=e.map(e=>({p:this.world.tileToWorld(e.x,e.z),t:e})),this.onArrive=t||null,this.points.length||this.arrive()}arrive(){let e=this.onArrive;this.onArrive=null,e&&e()}face(e){this.targetRot=e}update(e){let t=this.group;if(this.points.length){let n=this.points[0].p,r=n.x-t.position.x,i=n.z-t.position.z,a=Math.hypot(r,i),o=this.speed*e;a<=o?(t.position.x=n.x,t.position.z=n.z,this.tile={...this.points[0].t},this.points.shift(),this.points.length||this.arrive()):(t.position.x+=r/a*o,t.position.z+=i/a*o,this.targetRot=Math.atan2(r,i)),this.amt=Math.min(1,this.amt+e*6),this.phase+=e*this.speed*6}else this.amt=Math.max(0,this.amt-e*6);this.sitting||this.rig.animate(this.phase,this.amt);let n=this.targetRot-t.rotation.y;n=Math.atan2(Math.sin(n),Math.cos(n)),t.rotation.y+=n*Math.min(1,e*10)}},Wh={golden:{name:`Golden Retriever`,pre:`Gol`,suf:`triever`,fur:`#e0b47c`,dark:`#b98a4e`,size:1.15,ears:`flop`,pattern:`none`,value:650},dackel:{name:`Dackel`,pre:`Da`,suf:`ckel`,fur:`#8b4a2b`,dark:`#5a2e1a`,size:.8,ears:`flop`,pattern:`none`,value:350},mops:{name:`Mops`,pre:`Mo`,suf:`ps`,fur:`#e3cfa6`,dark:`#2b2420`,size:.85,ears:`flop`,pattern:`patch`,value:400},beagle:{name:`Beagle`,pre:`Bea`,suf:`gle`,fur:`#f2ece2`,dark:`#8b5a2b`,size:.95,ears:`flop`,pattern:`spots`,value:450},corgi:{name:`Corgi`,pre:`Cor`,suf:`gi`,fur:`#d98e4a`,dark:`#c27a3c`,size:.85,ears:`up`,pattern:`none`,value:600},pudel:{name:`Pudel`,pre:`Pu`,suf:`del`,fur:`#f4efe6`,dark:`#ddd3c0`,size:1,ears:`flop`,pattern:`none`,value:550},labrador:{name:`Labrador`,pre:`Labra`,suf:`dor`,fur:`#2e2824`,dark:`#1c1816`,size:1.15,ears:`flop`,pattern:`none`,value:500},spitz:{name:`Spitz`,pre:`Spi`,suf:`tz`,fur:`#f6f3ee`,dark:`#e3dacb`,size:.9,ears:`up`,pattern:`none`,value:500}},Gh=[{name:`Silber`,fur:`#b8bcc4`,dark:`#8a8f99`},{name:`Schoko`,fur:`#5c3a28`,dark:`#3e2619`},{name:`Rotgold`,fur:`#c8643a`,dark:`#9a4826`},{name:`Blau-Merle`,fur:`#8a96a8`,dark:`#4f5868`}],Kh={kuschelig:{name:`kuschelig`,desc:`mehr Trinkgeld-Bonus`},verspielt:{name:`verspielt`,desc:`Streicheln gibt mehr XP`},ruhig:{name:`ruhig`,desc:`wird langsamer hungrig`}},qh=[`Lotte`,`Frieda`,`Mila`,`Ronja`,`Luna`,`Kira`,`Nala`,`Wilma`,`Hanni`,`Lilli`,`Praline`,`Waffel`,`Motte`,`Emma`,`Polly`,`Gretel`],Jh=[`Bruno`,`Paul`,`Oskar`,`Emil`,`Anton`,`Theo`,`Fiete`,`Bello`,`Karl`,`Jupp`,`Pepe`,`Balu`,`Hugo`,`Olli`,`Rudi`,`Fritz`],Yh=[`Krümel`,`Socke`,`Mocca`,`Latte`,`Bohne`,`Zimt`,`Muffin`,`Toffee`,`Espe`,`Keksi`],Xh=e=>tg([...e===`w`?qh:Jh,...Yh]),Zh=[`#c0563f`,`#4f6d8f`,`#6b8f71`,`#e2a33c`,`#8e6c8a`,`#d98e73`],Qh=[`Familie Krause`,`Jonas aus Bielefeld`,`Oma Gerda`,`Lena und Tim`,`Herr Schulte`,`Mira, Studentin`,`Familie Özdemir`,`Frau Dr. Brandt`,`Kalle vom Kiosk`,`Sophie mit Garten`,`Fam. Wagner`,`Ben, Läufer`],$h=[`Ist der Hund noch zu haben? Wir hätten einen großen Garten.`,`Wir verlieben uns gerade beim Foto. Würde gern vorbeikommen!`,`Unsere Kinder wünschen sich so sehr einen Hund.`,`Mag {er} lange Spaziergänge? Ich laufe jeden Morgen.`,`Sehr schöne Fellfarbe. Kann ich am Samstag kommen?`,`Für meine Mutter, die ist viel allein. Wäre perfekt!`],eg=[`Was letzte Preis?`,`Hole heute noch ab, aber nur für Hälfte.`,`Tausche gegen Fahrrad?`],tg=e=>e[Math.floor(Math.random()*e.length)],ng=(e,t)=>e+Math.random()*(t-e),rg=e=>Math.max(0,Math.min(1,e));function ig(e,t){let n=new J(e),r=new J(t),i=n.lerp(r,.5),a=e=>Math.round(e*15)/15;return i.setRGB(a(i.r),a(i.g),a(i.b)),`#${i.getHexString()}`}function ag(e){let t=Object.entries(e).sort((e,t)=>t[1]-e[1]);return t[0][1]>=.75||t.length===1?Wh[t[0][0]].name:Wh[t[0][0]].pre+Wh[t[1][0]].suf}function og(e){return Object.values(e).some(e=>e>=.75)}function sg(e,{breed:t,sex:n,stage:r=`puppy`,rare:i=!1,name:a,mascot:o=!1}={}){let s=Wh[t],c={fur:s.fur,dark:s.dark,size:s.size,ears:s.ears,pattern:s.pattern,rare:null,collar:tg(Zh)};if(i){let e=tg(Gh);Object.assign(c,{fur:e.fur,dark:e.dark,rare:e.name})}let l=n||(Math.random()<.5?`w`:`m`);return{id:e.nextId++,name:a||Xh(l),sex:l,mix:{[t]:1},traits:c,temper:tg(Object.keys(Kh)),stage:r,growth:r===`adult`?Zu.growDays:0,hunger:.8,mood:.8,mascot:o,listed:!1,lastLitter:-99,born:e.day}}function cg(){let e={nextId:1,day:1},t=pp(Object.keys(Wh)).slice(0,3),n=new Set,r=pp(Object.keys(Kh));return t.map((t,i)=>{let a;do a=sg(e,{breed:t,mascot:!0});while(n.has(a.name));return n.add(a.name),a.temper=r[i%r.length],a})}function lg(e,t,n){let r=()=>Math.random()<.5?t:n,i={};for(let e of[t,n])for(let[t,n]of Object.entries(e.mix))i[t]=(i[t]||0)+n/2;let a=r(),o={fur:Math.random()<.3?ig(t.traits.fur,n.traits.fur):a.traits.fur,dark:a.traits.dark,size:Math.round(((t.traits.size+n.traits.size)/2+ng(-.06,.06))*100)/100,ears:r().traits.ears,pattern:r().traits.pattern,rare:a.traits.rare&&Math.random()<.5?a.traits.rare:null,collar:tg(Zh)};if(o.rare){let e=Gh.find(e=>e.name===o.rare);o.fur=e.fur,o.dark=e.dark}if(Math.random()<Zu.rareChance){let e=tg(Gh);Object.assign(o,{fur:e.fur,dark:e.dark,rare:e.name})}let s=Math.random()<.5?`w`:`m`;return{id:e.nextId++,name:Xh(s),sex:s,mix:i,traits:o,temper:Math.random()<.1?tg(Object.keys(Kh)):r().temper,stage:`puppy`,growth:0,hunger:.9,mood:.9,mascot:!1,listed:!1,lastLitter:-99,born:e.day,parents:[t.name,n.name]}}function ug(e){let t=0;for(let[n,r]of Object.entries(e.mix))t+=Wh[n].value*r;return e.traits.rare&&(t*=1.5),og(e.mix)||(t*=1.15),t*=.75+.35*((e.hunger+e.mood)/2),e.stage===`puppy`&&(t*=.6),Math.round(t/5)*5}var dg=[{x:Ql.x,z:Z.d},{x:Ql.x,z:Z.d+1},{x:Ql.x,z:Z.d+2}],fg=class{constructor(e){this.game=e,this.world=e.world,this.inst=new Map;let t=e.state;t.dogs.length||(t.dogs.push(sg(t,{breed:`golden`,sex:`w`,name:`Keks`,mascot:!0})),t.dogs[0].traits.dark=`#7a4a2a`,t.dogs[0].traits.collar=`#c0563f`,t.dogs[0].temper=`kuschelig`),t.dogs.forEach((e,t)=>this.spawn(e,t===0?{x:6,z:6}:null)),t.level>=Zu.marketLevel&&!t.market.offers.length&&this.refreshOffers()}get list(){return this.game.state.dogs}mascotName(){return(this.list.find(e=>e.mascot)||this.list[0])?.name||`Keks`}story(e){return String(e).replace(/Keks(?!i)/g,this.mascotName())}byId(e){return this.list.find(t=>t.id===e)}slots(){let e=0;for(let t of this.game.furniture.items.values())t.def.dogBed&&e++;return Zu.baseSlots+e+((this.game.state.expansion||0)>=3?2:0)}freeSlots(){let e=this.game.state.litter?this.game.state.litter.size:0;return this.slots()-this.list.length-e}scaleOf(e){return e.traits.size*(e.stage===`puppy`?.62:1)}spawn(e,t){let n=bd(e.traits);n.group.userData.dogId=e.id,n.group.scale.setScalar(this.scaleOf(e)),this.world.scene.add(n.group);let r=new Uh(this.world,n,e.stage===`puppy`?1:1.2);r.setTile(t||this.randomFreeTile()||{x:6,z:6}),this.inst.set(e.id,{rig:n,walker:r,idleT:ng(1,4),happyT:0,petT:0,leaving:!1})}rebuild(e){let t=this.inst.get(e.id),n=t?{...t.walker.tile}:null;t&&this.world.scene.remove(t.rig.group),this.inst.delete(e.id),this.spawn(e,n)}randomFreeTile(){for(let e=0;e<30;e++){let e=Math.floor(ng(0,Z.w)),t=Math.floor(ng(2,Z.d));if(this.game.isWalkable(e,t))return{x:e,z:t}}return null}roots(){return[...this.inst.values()].filter(e=>!e.leaving).map(e=>e.rig.group)}headDy(e){return .85*this.scaleOf(e)+.1}headPos(e){let t=this.inst.get(e).rig.group.position.clone();return t.y+=this.headDy(this.byId(e)),t}feedCost(){let e=this.game.evening?.e?.stock?.food||0;return e>0?`🦴 aus dem Sack (${e})`:$(Zu.food)}feed(e){let t=this.byId(e),n=this.game.state;if(!t)return!1;if(t.hunger>.95)return this.game.ui.toast(`${t.name} ist pappsatt.`),!1;let r=this.game.evening.useFood();if(!r&&n.money<Zu.food)return this.game.ui.toast(`Für Futter reicht das Geld nicht.`),!1;r||this.game.pay(Zu.food,`futter`),t.hunger=rg(t.hunger+Zu.feed),this.game.quests?.track(`feed`);let i=this.inst.get(e);return i&&(i.happyT=2,this.game.ui.floatText(this.headPos(e),`🍖`,`heart`)),this.game.audio.blip(600,.12,.06),!0}pet(e){let t=this.byId(e),n=this.inst.get(e);if(t&&n&&(n.happyT=3,this.game.ui.floatText(this.headPos(e),`💕`,`heart`),this.game.audio.blip(880,.15,.06),!(n.petT>0)&&(n.petT=Zu.petCooldown,t.mood=rg(t.mood+Zu.pet),this.game.quests?.track(`pet`),this.game.addXP(t.temper===`verspielt`?4:2),this.game.petCooldown<=0))){this.game.petCooldown=20;for(let e of this.game.guests)(e.state===`waitOrder`||e.state===`waitCoffee`)&&(e.patience=Math.min(e.patienceMax,e.patience+6));this.game.ui.toast(`🐶 ${t.name} freut sich. Die Gäste schmelzen dahin und warten geduldiger.`)}}tipBonus(){let e=0;for(let t of this.list){let n=t.hunger>.2?1:.5;e+=Zu.tipPerDog*t.mood*n*(t.temper===`kuschelig`?1.5:1)}return Math.min(Zu.tipCap,e)}canBreed(e,t){let n=this.game.state;return!e||!t?`Wähle eine Hündin und einen Rüden.`:e.sex!==`w`||t.sex!==`m`?`Es braucht eine Hündin und einen Rüden.`:e.stage!==`adult`||t.stage!==`adult`?`Beide müssen erwachsen sein.`:e.listed||t.listed?`Inserierte Hunde züchten nicht.`:n.litter?`Es ist schon ein Wurf unterwegs.`:n.day-e.lastLitter<Zu.litterCooldown?`${e.name} braucht noch Ruhe (bis Tag ${e.lastLitter+Zu.litterCooldown}).`:e.hunger<.5||e.mood<.5||t.hunger<.5||t.mood<.5?`Beide müssen satt und gut gelaunt sein (über 50 %).`:this.freeSlots()<1?`Kein freier Platz. Stell ein Hundebett auf.`:null}breed(e,t){let n=this.game.state,r=this.byId(e),i=this.byId(t),a=this.canBreed(r,i);if(a)return this.game.ui.toast(a),!1;let o=Math.min(this.freeSlots(),1+Math.floor(Math.random()*this.game.evening.maxLitter()));return n.litter={mother:r.id,father:i.id,size:o},r.lastLitter=n.day,n.totals.litters=(n.totals.litters||0)+1,r.mood=rg(r.mood-.2),this.game.addXP(15),this.game.audio.coin(),this.game.ui.toast(`💞 ${r.name} und ${i.name} mögen sich. Morgen früh ist der Wurf da.`,`big`,4500),this.game.save(),!0}deliverLitter(){let e=this.game.state,t=e.litter;if(!t)return;e.litter=null;let n=this.byId(t.mother),r=this.byId(t.father);if(!n||!r)return;let i=[];for(let a=0;a<t.size;a++){let t=lg(e,n,r);e.dogs.push(t),this.spawn(t,this.inst.get(n.id)?.walker.tile),i.push(t)}let a=ag(i[0].mix),o=i.filter(e=>e.traits.rare).map(e=>`${e.name} (${e.traits.rare})`);this.game.ui.toast(`🐾 ${n.name} hat ${t.size===1?`einen`:t.size} ${a}-Welpen bekommen: ${i.map(e=>e.name).join(`, `)}.`,`big`,6e3),o.length&&setTimeout(()=>this.game.ui.toast(`✨ Seltene Fellfarbe: ${o.join(`, `)}!`,`big`,5e3),800)}marketOpen(){return this.game.state.level>=Zu.marketLevel}refreshOffers(){let e=this.game.state,t=pp(Object.keys(Wh)),n=this.game.evening.trendBreed();n&&(t.splice(t.indexOf(n),1),t.unshift(n));let r=pp([`w`,`w`,`m`,`m`,Math.random()<.5?`w`:`m`]);e.market.offers=[];for(let n=0;n<5;n++){let i=sg(e,{breed:t[n%t.length],sex:r[n],stage:Math.random()<.6?`puppy`:`adult`,rare:Math.random()<.12});i.hunger=.7,i.mood=.7,e.market.offers.push({dog:i,price:Math.round(ug(i)*1.15/5)*5,seller:tg(Qh)})}}buyOffer(e){let t=this.game.state,n=t.market.offers.find(t=>t.dog.id===e);return n?this.freeSlots()<1?(this.game.ui.toast(`Kein freier Platz. Stell im Einrichten-Modus ein Hundebett auf.`),!1):t.money<n.price?(this.game.ui.toast(`Dafür reicht das Geld nicht.`),!1):(this.game.pay(n.price,`hunde`),t.market.offers=t.market.offers.filter(e=>e!==n),t.dogs.push(n.dog),this.spawn(n.dog,{...Ql}),this.game.audio.coin(),this.game.ui.toast(`🐶 ${n.dog.name} zieht ins Café ein.`,`big`),this.game.save(),!0):!1}list_(e){let t=this.byId(e);return!t||t.mascot||t.stage!==`adult`?!1:(t.listed=!t.listed,t.listed?this.game.state.market.bidT>15&&(this.game.state.market.bidT=ng(6,15)):this.game.state.market.bids=this.game.state.market.bids.filter(t=>t.dogId!==e),this.game.ui.toast(t.listed?`📮 ${t.name} ist auf dem Pfotenmarkt inseriert.`:`${t.name} ist nicht mehr inseriert.`),!0)}acceptBid(e){let t=this.game.state,n=t.market.bids.find(t=>t.id===e);if(!n)return!1;let r=this.byId(n.dogId);return r?(this.game.earn(n.amount,`hunde`),t.totals.dogsSold=(t.totals.dogsSold||0)+1,t.market.bids=t.market.bids.filter(e=>e.dogId!==r.id),t.dogs=t.dogs.filter(e=>e!==r),this.game.addXP(20),this.game.audio.coin(),this.game.ui.toast(`🏡 ${r.name} zieht zu ${n.buyer}. +${$(n.amount)}`,`big`,4500),this.leave(r.id),this.game.save(),!0):!1}declineBid(e){let t=this.game.state;return t.market.bids=t.market.bids.filter(t=>t.id!==e),!0}leave(e){let t=this.inst.get(e);if(!t)return;t.leaving=!0;let n=this.game.path(t.walker.tile,(e,t)=>e===Ql.x&&t===Ql.z)||[];t.walker.walkTiles([...n,...dg],()=>{this.world.scene.remove(t.rig.group),this.inst.delete(e)})}makeBid(){let e=this.game.state,t=this.list.filter(t=>t.listed&&e.market.bids.filter(e=>e.dogId===t.id).length<Zu.maxBids);if(!t.length)return;let n=tg(t),r=Math.random()<.2,i=this.game.evening.trendBreed(),a=(i&&(n.mix[i]||0)>=.5?1.25:1)*this.game.seasons.bidMult(),o=Math.round(ug(n)*a*(r?ng(.4,.55):ng(.75,1.2))/5)*5;e.market.bids.push({id:e.nextId++,dogId:n.id,buyer:tg(Qh),msg:tg(r?eg:$h).replace(`{er}`,n.sex===`w`?`sie`:`er`),amount:o,ttl:Zu.bidTtl}),this.game.audio.blip(990,.1,.05),this.game.ui.toast(`📬 Neues Gebot für ${n.name}: ${$(o)}`)}onClose(){let e=[],t=[];for(let n of this.list)n.stage===`puppy`&&(n.hunger>.15?(n.growth++,n.growth>=Zu.growDays&&(n.stage=`adult`,e.push(n)),this.rebuild(n)):t.push(n.name));e.length&&setTimeout(()=>this.game.ui.toast(`🎉 ${e.map(e=>e.name).join(`, `)} ist erwachsen geworden!`,`big`,5e3),500),t.length&&setTimeout(()=>this.game.ui.toast(`🥺 ${t.join(`, `)} war zu hungrig zum Wachsen.`,``,5e3),900)}onOpen(){this.deliverLitter(),this.marketOpen()&&this.refreshOffers()}onLevel(e){e===Zu.marketLevel&&(this.refreshOffers(),this.game.ui.toast(`🐾 Der Pfotenmarkt hat geöffnet! Unter „Hunde“ kannst du Hunde kaufen und vermitteln.`,`big`,6e3))}pickAction(e){let t=this.byId(e);if(!t)return null;let n=t.stage===`puppy`,r={sit:n?.2:.25,lie:(n?.4:.2)+(t.mood<.4?.3:0),sniff:.2,none:n?.2:.35},i=Math.random()*(r.sit+r.lie+r.sniff+r.none);for(let e of[`sit`,`lie`,`sniff`])if(i-=r[e],i<0){let[t,n]=e===`sit`?[4,8]:e===`lie`?[8,15]:[2,4];return{type:e,t:ng(t,n)}}return null}greet(){if(!this.inst.size||Math.random()>.5)return;let e=[{x:Ql.x+1,z:Ql.z-1},{x:Ql.x-1,z:Ql.z-1},{x:Ql.x,z:Ql.z-1}].filter(e=>this.game.isWalkable(e.x,e.z));if(!e.length)return;let t=null,n=1/0;for(let[e,r]of this.inst){if(r.leaving||r.greeting||(r.greetCd||0)>0)continue;let i=Math.abs(r.walker.tile.x-Ql.x)+Math.abs(r.walker.tile.z-Ql.z);i<n&&(n=i,t={id:e,i:r})}if(!t)return;let{id:r,i}=t,a=e[Math.floor(Math.random()*e.length)],o=this.game.path(i.walker.tile,(e,t)=>e===a.x&&t===a.z);if(!o)return;i.greeting=!0,i.greetCd=20,i.act=null,i.roll=!1;let s=()=>{i.act={type:`sit`,t:ng(2,3)},i.rig.setPose(`sit`),i.walker.face(Math.atan2(Ql.x-i.walker.tile.x,Ql.z-i.walker.tile.z)),this.game.ui.floatText(this.headPos(r),`🐾`,`heart`)};o.length?i.walker.walkTiles(o,s):s()}update(e){let t=this.game.state;if(t.clock.phase===`day`){let t=this.game.evening.moodMult();for(let n of this.list){let r=Zu.hungerMin[n.stage]*(n.temper===`ruhig`?1.4:1)*60;n.hunger=rg(n.hunger-e/r),n.mood=rg(n.mood-e*t/(Zu.moodMin*60))}}for(let[t,n]of this.inst){if(n.walker.update(e),n.happyT=Math.max(0,n.happyT-e),n.petT=Math.max(0,n.petT-e),n.greetCd=Math.max(0,(n.greetCd||0)-e),n.leaving||n.walker.moving?(n.act=null,n.rig.setPose(`stand`)):n.act&&(n.act.t-=e,n.act.t<=0&&(n.act=null,n.greeting=!1,n.rig.setPose(`stand`),n.idleT=ng(.5,2))),n.rig.updatePose(e),n.rig.tick(this.game.time,n.happyT>0||!!n.greeting,n.rig.pose===`lie`?.5:1),n.leaving||n.walker.moving||n.act||(n.idleT-=e,n.idleT>0))continue;if(n.roll){n.roll=!1;let e=this.pickAction(t);if(e){n.act=e,n.rig.setPose(e.type);continue}}n.idleT=ng(3,9);let r=this.randomFreeTile();if(!r)continue;let i=this.game.path(n.walker.tile,(e,t)=>e===r.x&&t===r.z);i&&i.length&&(n.roll=!0,n.walker.walkTiles(i.slice(0,6),()=>{n.idleT=ng(.5,1.5)}))}let n=t.market;for(let t of n.bids)t.ttl-=e;let r=n.bids.length;n.bids=n.bids.filter(e=>e.ttl>0&&this.byId(e.dogId)),n.bids.length<r&&this.game.ui.panel===`hunde`&&this.game.ui.renderPanel(),this.list.some(e=>e.listed)&&(n.bidT-=e,n.bidT<=0&&(n.bidT=ng(...Zu.bidEvery),this.makeBid()))}bubbles(){let e=[];for(let t of this.list){let n=this.inst.get(t.id);if(!n||n.leaving)continue;let r=n.rig.group.position,i=this.headDy(t);t.hunger<.3?e.push({key:`d${t.id}`,anchor:r,dy:i,cls:`dog hungry`,html:`<span>🍖 ${t.name} füttern · ${this.feedCost()}</span>`,onClick:()=>this.feed(t.id)}):t.mood<.3&&e.push({key:`d${t.id}`,anchor:r,dy:i,cls:`dog sad`,html:`<span>🥺 ${t.name}</span>`,onClick:()=>this.pet(t.id)})}return e}},pg={ap:3,recipeCost:15,analysisCost:60},mg={flyer:{name:`Flyer verteilen`,icon:`📄`,cost:40,boost:.15,level:1,desc:`Ein Stapel Flyer in der Nachbarschaft.`},social:{name:`Social-Media-Post`,icon:`📱`,cost:120,boost:.3,level:2,desc:`Keks als Latte-Art-Model.`},zeitung:{name:`Anzeige in der Lokalzeitung`,icon:`📰`,cost:350,boost:.45,level:4,desc:`Halbe Seite, mit Gutschein.`},radio:{name:`Radiospot`,icon:`📻`,cost:900,boost:.7,level:6,desc:`Lo-Fi-Jingle im Lokalradio.`},koop:{name:`Influencer-Kooperation`,icon:`🤳`,cost:1800,boost:1,level:8,desc:`Eine Food-Bloggerin trinkt live einen Pfoten-Mocca.`},stadtfest:{name:`Stand auf dem Stadtfest`,icon:`🎪`,cost:4e3,boost:1.4,level:11,desc:`Gratis-Espresso und Welpen zum Knuddeln.`},tv:{name:`Beitrag im Lokal-TV`,icon:`📺`,cost:1e4,boost:2,level:15,desc:`Drei Minuten Sendezeit, Keks ist der Star.`}},hg={beans:{name:`Premium-Bohnen`,icon:`🫘`,cost:40,amount:40,unit:`Portionen`,desc:`Jeder Kaffee +25 % Preis. Lohnt sich ab Cappuccino.`},cake:{name:`Kuchen vom Bäcker`,icon:`🍰`,cost:18,amount:12,unit:`Stück`,desc:`Gäste nehmen oft ein Stück für 3,50 € dazu. Hält nur einen Tag.`},food:{name:`Futtersack`,icon:`🦴`,cost:40,amount:20,unit:`Portionen`,desc:`Füttern aus dem Sack statt 3 € pro Mahlzeit.`}},gg={price:3.5,chance:.35},_g={milchschaum:{name:`Milchschaum-Technik`,icon:`🥛`,cost:400,nights:1,level:1,desc:`Brühzeit −10 %`,fx:{brew:-.1}},stammkarte:{name:`Stempelkarte`,icon:`🎟️`,cost:700,nights:2,level:2,desc:`Gäste warten 10 % geduldiger`,fx:{patience:.1}},hundeschule:{name:`Hundeschule`,icon:`🎓`,cost:600,nights:2,level:2,desc:`Hunde verlieren Laune 30 % langsamer`,fx:{mood:.3}},trinkgeld:{name:`Hübsches Trinkgeldglas`,icon:`🫙`,cost:900,nights:2,level:3,desc:`Trinkgeld +10 %`,fx:{tip:.1}},welpenratgeber:{name:`Welpenratgeber`,icon:`📘`,cost:1500,nights:3,level:3,desc:`Würfe bis zu 4 Welpen`,fx:{litter:1}},influencer:{name:`Influencer-Kontakte`,icon:`📇`,cost:2e3,nights:3,level:4,desc:`Marketing wirkt 50 % stärker`,fx:{marketing:.5}},routine:{name:`Feierabend-Routine`,icon:`🗓️`,cost:3e3,nights:3,level:5,desc:`+1 Aktion pro Abend`,fx:{ap:1}},wasserfilter:{name:`Wasserfilter`,icon:`💧`,cost:1200,nights:1,level:3,desc:`Preis +5 %`,fx:{price:.05}},playlist:{name:`Lo-Fi-Playlist`,icon:`🎧`,cost:1800,nights:2,level:4,desc:`Gäste warten 10 % geduldiger`,fx:{patience:.1},req:`stammkarte`},milchschaum2:{name:`Latte-Art-Kurs`,icon:`🎨`,cost:2500,nights:2,level:5,desc:`Brühzeit −10 %, Trinkgeld +5 %`,fx:{brew:-.1,tip:.05},req:`milchschaum`},backbuch:{name:`Omas Backbuch`,icon:`📖`,cost:2200,nights:2,level:5,desc:`Kuchen-Chance +10 %`,fx:{cake:.1}},sammelalbum:{name:`Sammelalbum`,icon:`📒`,cost:3e3,nights:2,level:6,desc:`Mehr seltene Karten in Päckchen`,fx:{luck:.5}},kundenkartei:{name:`Kundenkartei`,icon:`🗂️`,cost:4500,nights:3,level:6,desc:`Gäste +10 %`,fx:{spawn:.1}},roestprofil:{name:`Röstprofile`,icon:`🌡️`,cost:6e3,nights:3,level:7,desc:`Preis +8 %`,fx:{price:.08},req:`wasserfilter`},welpenspiel:{name:`Welpen-Spielgruppe`,icon:`🐕`,cost:5e3,nights:2,level:7,desc:`Hundelaune sinkt 20 % langsamer`,fx:{mood:.2},req:`hundeschule`},tagebuch:{name:`Café-Tagebuch`,icon:`📓`,cost:7e3,nights:3,level:8,desc:`XP +10 %`,fx:{xp:.1}},netzwerk:{name:`Gastro-Netzwerk`,icon:`🤝`,cost:9e3,nights:3,level:8,desc:`Marketing wirkt 30 % stärker`,fx:{marketing:.3},req:`influencer`},siebtraeger:{name:`Doppel-Siebträger`,icon:`☕`,cost:12e3,nights:3,level:9,desc:`Brühzeit −12 %`,fx:{brew:-.12},req:`milchschaum2`},trinkgeld2:{name:`Charme-Seminar`,icon:`😊`,cost:14e3,nights:3,level:10,desc:`Trinkgeld +15 %`,fx:{tip:.15},req:`trinkgeld`},zuchtbuch:{name:`Zuchtbuch`,icon:`🧬`,cost:16e3,nights:4,level:10,desc:`Würfe bis zu 5 Welpen`,fx:{litter:1},req:`welpenratgeber`},filialhandbuch:{name:`Filial-Handbuch`,icon:`🏢`,cost:2e4,nights:3,level:11,desc:`Filial-Ertrag +20 %`,fx:{branch:.2}},nachtruhe:{name:`Gute Nachtruhe`,icon:`😴`,cost:25e3,nights:4,level:12,desc:`+1 Aktion pro Abend`,fx:{ap:1},req:`routine`},stammgaeste:{name:`Stammgast-Club`,icon:`💛`,cost:3e4,nights:4,level:12,desc:`Gäste +15 %, Geduld +10 %`,fx:{spawn:.15,patience:.1},req:`kundenkartei`},sortenkunde:{name:`Sortenkunde`,icon:`🌍`,cost:4e4,nights:4,level:13,desc:`Preis +12 %`,fx:{price:.12},req:`roestprofil`},automat:{name:`Trinkgeld-Automat`,icon:`🤖`,cost:5e4,nights:4,level:14,desc:`Offline-Ertrag +5 %`,fx:{offline:.05}},albumgold:{name:`Goldenes Album`,icon:`🏅`,cost:6e4,nights:4,level:15,desc:`Noch mehr seltene Karten`,fx:{luck:.7},req:`sammelalbum`},franchise:{name:`Franchise-Konzept`,icon:`📈`,cost:9e4,nights:5,level:16,desc:`Filial-Ertrag +40 %`,fx:{branch:.4},req:`filialhandbuch`},meisterbrief:{name:`Barista-Meisterbrief`,icon:`🏆`,cost:12e4,nights:5,level:17,desc:`Brühzeit −15 %, XP +15 %`,fx:{brew:-.15,xp:.15},req:`siebtraeger`},fluesterer:{name:`Hundeflüsterer`,icon:`🐾`,cost:15e4,nights:5,level:18,desc:`Hundelaune sinkt 30 % langsamer, Trinkgeld +10 %`,fx:{mood:.3,tip:.1},req:`welpenspiel`},kultcafe:{name:`Kult-Café`,icon:`🌟`,cost:25e4,nights:5,level:20,desc:`Gäste +25 %, Preis +10 %`,fx:{spawn:.25,price:.1},req:`stammgaeste`},imperium:{name:`Welpen-Imperium`,icon:`👑`,cost:6e5,nights:5,level:23,desc:`Filial-Ertrag +60 %, XP +20 %`,fx:{branch:.6,xp:.2},req:`franchise`}},vg=()=>cu.filter(e=>e.recipe),yg=e=>su[e.rarity]||su.common,bg=e=>e[Math.floor(Math.random()*e.length)];function xg(){return{ap:pg.ap,planned:null,campaign:null,stock:{beans:0,cake:0,food:0},tried:[],lab:null,research:{done:[],cur:null},next:null,trend:null}}var Sg=class{constructor(e){this.game=e;let t=e.state,n=xg(),r=t.evening||{};t.evening={...n,...r,stock:{...n.stock,...r.stock},research:{...n.research,...r.research},tried:Array.isArray(r.tried)?r.tried:[],lab:r.lab&&r.lab.id?r.lab:null},t.clock.phase===`night`&&!t.evening.next&&this.rollTrend()}get e(){return this.game.state.evening}has(e){return this.e.research.done.includes(e)}fx(e){let t=0;for(let n of this.e.research.done)t+=_g[n]?.fx?.[e]||0;return t}apMax(){return pg.ap+Math.round(this.game.bonus(`ap`))}spend(e,t){let n=this.game.state;return this.e.ap<e?(this.game.ui.toast(`Für heute bist du zu müde. Morgen Abend geht wieder was.`),!1):n.money<t?(this.game.ui.toast(`Dafür reicht das Geld nicht.`),!1):(this.e.ap-=e,this.game.pay(t,`abend`),!0)}spawnMult(){let e=this.e.campaign&&mg[this.e.campaign],t=1+this.game.bonus(`spawn`);return e?t+e.boost*(1+this.game.bonus(`marketing`)):t}brewMult(){return Math.max(.35,1+this.game.bonus(`brew`))}tipMult(){return 1+this.game.bonus(`tip`)}moodMult(){return Math.max(.2,1-this.game.bonus(`mood`))}maxLitter(){return 3+Math.round(this.game.bonus(`litter`))}trendCoffee(){return this.e.trend?.coffee||null}trendBreed(){return this.e.trend?.breed||null}pickCoffee(e){let t=this.trendCoffee();if(t&&e.includes(t)&&Math.random()<.35)return t;let n=e.map(e=>vu(e)?.popularity??3),r=Math.random()*n.reduce((e,t)=>e+t,0);for(let t=0;t<e.length;t++)if(r-=n[t],r<0)return e[t];return bg(e)}priceMult(e){let t=1+this.game.bonus(`price`);return this.e.stock.beans>0&&(this.e.stock.beans--,t+=.25),e===this.trendCoffee()&&(t+=.25),t}sellCake(){return this.reserveCake()?this.cakePrice():0}reserveCake(){return this.e.stock.cake<=0||Math.random()>gg.chance+this.game.bonus(`cake`)?!1:(this.e.stock.cake--,!0)}returnCake(){this.e.stock.cake++}cakePrice(){return Math.round(gg.price*(1+this.game.bonus(`cakePrice`))*100)/100}useFood(){return this.e.stock.food<=0?!1:(this.e.stock.food--,!0)}plan(e){let t=mg[e],n=this.game.state;return!t||this.e.planned||n.level<t.level||!this.spend(1,t.cost)?!1:(this.e.planned=e,n.totals.campaigns=(n.totals.campaigns||0)+1,this.game.audio.coin(),this.game.ui.toast(`${t.icon} ${t.name} läuft morgen. Rechne mit mehr Gästen.`),!0)}supply(e){let t=hg[e];return!t||!this.spend(0,t.cost)?!1:(this.e.stock[e]+=t.amount,this.game.audio.coin(),!0)}experiment(e,t){let n=`${e}+${t}`;if(!e||!t||this.e.lab||this.e.tried.includes(n))return null;let r=vg().find(n=>n.recipe.base===e&&n.recipe.aroma===t);return!r||this.game.state.coffees.includes(r.id)||!this.spend(1,pg.recipeCost)?null:(this.e.tried.push(n),this.e.lab={key:n,id:r.id,left:yg(r).nights},this.game.audio.blip(660,.12,.06),{ok:!0,text:`Die Mischung ruht im Labor. Wann sie fertig ist und was daraus wird, bleibt eine Überraschung.`})}research(e){let t=_g[e],n=this.game.state;return!t||this.e.research.cur||this.has(e)||n.level<t.level||t.req&&!this.has(t.req)||!this.spend(1,t.cost)?!1:(this.e.research.cur={id:e,left:t.nights},this.game.audio.coin(),this.game.ui.toast(`${t.icon} Forschung „${t.name}“ gestartet. Fertig in ${t.nights} ${t.nights>1?`Nächten`:`Nacht`}.`),!0)}analyse(){return!this.e.next||this.e.next.known||!this.spend(1,pg.analysisCost)?!1:(this.e.next.known=!0,this.game.audio.blip(880,.12,.06),!0)}rollTrend(){let e=cu.filter(e=>!e.recipe&&!e.special||this.game.state.coffees.includes(e.id)).map(e=>e.id);this.e.next={coffee:bg(e),breed:bg(Object.keys(Wh)),known:!1}}onClose(){let e=this.e;e.ap=this.apMax(),e.campaign=null,e.trend=null;let t=e.stock.cake;e.stock.cake=0,t>0&&setTimeout(()=>this.game.ui.toast(`🍰 ${t} Stück Kuchen gehen an die Nachbarn.`),1200),this.rollTrend();let n=e.lab;if(n&&(n.left--,n.left<=0)){let t=vu(n.id);e.lab=null,t&&!this.game.state.coffees.includes(t.id)&&(this.game.state.coffees.push(t.id),this.game.addXP(yg(t).xp),this.game.audio.coin(),setTimeout(()=>this.game.ui.showRecipe?.(t),700))}}onOpen(){let e=this.e;e.campaign=e.planned,e.planned=null,e.trend=e.next?.known?e.next:null,e.next=null;let t=[],n=e.research.cur;if(n&&(n.left--,n.left<=0&&(e.research.done.push(n.id),e.research.cur=null,this.game.addXP(25),t.push(`🔬 Forschung fertig: ${_g[n.id].name} (${_g[n.id].desc}).`))),e.campaign&&t.push(`${mg[e.campaign].icon} ${mg[e.campaign].name} wirkt: Heute kommen mehr Gäste.`),e.trend){let n=vu(e.trend.coffee),r=this.game.state.coffees.includes(n.id);t.push(`📈 Trend des Tages: ${n.name}${r?` (+25 % Preis)`:`, steht aber nicht auf deiner Karte`}. Gefragte Rasse: ${Wh[e.trend.breed].name}.`)}t.forEach((e,t)=>setTimeout(()=>this.game.ui.toast(e,`big`,5e3),900+t*1400))}},Cg={common:{name:`Gewöhnlich`,weight:60,dup:10,color:`#9aa3ab`},rare:{name:`Selten`,weight:28,dup:30,color:`#4f8fd0`},epic:{name:`Episch`,weight:10,dup:100,color:`#a05cc8`},legendary:{name:`Legendär`,weight:2,dup:400,color:`#e2a33c`}},wg={hunde:{name:`Café-Hunde`,icon:`🐶`,bonus:{tip:.1},desc:`Trinkgeld +10 %`},gaeste:{name:`Stammgäste`,icon:`🧑‍💻`,bonus:{patience:.1},desc:`Geduld +10 %`},kaffee:{name:`Kaffeewelt`,icon:`🫘`,bonus:{price:.1},desc:`Preis +10 %`},momente:{name:`Café-Momente`,icon:`✨`,bonus:{xp:.15},desc:`XP +15 %`},jahreszeiten:{name:`Jahreszeiten`,icon:`🍁`,bonus:{cake:.05},desc:`Kuchenchance +5 %`},rezepte:{name:`Café-Rezepte`,icon:`📖`,bonus:{mood:.1},desc:`Hundelaune sinkt 10 % langsamer`}},Tg=[`common`,`common`,`rare`,`rare`,`epic`,`legendary`],Eg=(e,t)=>t.map(([t,n,r,i],a)=>({id:t,set:e,name:n,icon:r,text:i,rarity:Tg[a]})),Dg=[...Eg(`hunde`,[[`h_dackel`,`Dackel Dieter`,`🌭`,`Bewacht den Kuchen. Sagt er.`],[`h_mops`,`Mops Matilda`,`🐶`,`Schnarcht im Takt der Musik.`],[`h_pudel`,`Pudel Pierre`,`🐩`,`Frisur sitzt, Latte auch.`],[`h_corgi`,`Corgi Konrad`,`🦊`,`Kurze Beine, großes Herz.`],[`h_golden`,`Goldie im Herbstlaub`,`🍂`,`Das meistgeteilte Foto des Cafés.`],[`h_keks`,`Keks, die Gründerin`,`👑`,`Ohne sie gäbe es das alles nicht.`]]),...Eg(`gaeste`,[[`g_laptop`,`Der Laptop-Nomade`,`💻`,`Ein Flat White, acht Stunden WLAN.`],[`g_studentin`,`Die Studentin`,`📚`,`Lernt hier für jede Prüfung.`],[`g_kurier`,`Der Fahrradkurier`,`🚲`,`Espresso im Stehen, zwölf Sekunden.`],[`g_yoga`,`Die Yoga-Lehrerin`,`🧘`,`Nur Matcha, nur mit Hafermilch.`],[`g_podcast`,`Der Podcaster`,`🎙️`,`Nimmt hier jede Folge auf.`],[`g_oma`,`Oma Gerda`,`👵`,`Kommt seit Tag 1. Bringt Leckerli mit.`]]),...Eg(`kaffee`,[[`k_brasilien`,`Bohne Brasilien`,`🌴`,`Nussig, schokoladig, ehrlich.`],[`k_kolumbien`,`Bohne Kolumbien`,`⛰️`,`Karamell und rote Früchte.`],[`k_guatemala`,`Bohne Guatemala`,`🌋`,`Vulkanboden, würziger Abgang.`],[`k_sumatra`,`Bohne Sumatra`,`🌿`,`Erdig, schwer, wunderbar.`],[`k_kenia`,`Bohne Kenia`,`🦒`,`Schwarze Johannisbeere im Kaffee.`],[`k_aethiopien`,`Bohne Äthiopien`,`🌸`,`Die Heimat des Kaffees. Blumig.`]]),...Eg(`momente`,[[`m_regen`,`Regentag`,`🌧️`,`Alle Plätze voll, alle Hunde nass.`],[`m_latteart`,`Erste Latte Art`,`🤍`,`Sah aus wie ein Herz. Fast.`],[`m_strom`,`Stromausfall`,`🕯️`,`Kerzenlicht und Kaltgetränke.`],[`m_party`,`Welpenparty`,`🎉`,`Acht Welpen, ein Wollknäuel.`],[`m_antrag`,`Heiratsantrag`,`💍`,`Der Ring lag im Milchschaum.`],[`m_vollmond`,`Vollmond-Schicht`,`🌕`,`Die Nacht, in der Keks sang.`]]),...Eg(`jahreszeiten`,[[`j_kirschbluete`,`Kirschblüte vor der Tür`,`🌸`,`Rosa Blätter im Milchschaum.`],[`j_eiskaffee`,`Erster Eiskaffee`,`🧊`,`Der Sommer hat offiziell begonnen.`],[`j_laub`,`Laubhaufen-Sprung`,`🍂`,`Drei Hunde, ein Haufen, kein Halten.`],[`j_kuerbis`,`Kürbis-Latte`,`🎃`,`Jedes Jahr wieder ausverkauft.`],[`j_schnee`,`Schnee auf der Markise`,`❄️`,`Drinnen dampft der Kakao.`],[`j_silvester`,`Silvester im Café`,`🎆`,`Alle Hunde unter der Theke. Alle Gäste am Fenster.`]]),...Eg(`rezepte`,[[`r_crema`,`Die perfekte Crema`,`☕`,`Haselnussbraun, zwei Millimeter.`],[`r_zimt`,`Zimtschnecken-Morgen`,`🥐`,`Der Duft zieht bis zur Haltestelle.`],[`r_hafer`,`Hafermilch-Experiment`,`🥛`,`Schäumt besser als gedacht.`],[`r_chai`,`Chai nach Omas Art`,`🫖`,`Kardamom, Nelke, viel Geduld.`],[`r_affogato`,`Geheimer Affogato`,`🍨`,`Steht auf keiner Karte.`],[`r_buch`,`Das Rezeptbuch`,`📖`,`Fettflecken auf jeder Seite.`]])],Og={cost:600,size:3},kg=[{name:`Bronze`,icon:`🥉`,money:150,packs:0,xp:30},{name:`Silber`,icon:`🥈`,money:1500,packs:1,xp:100},{name:`Gold`,icon:`🥇`,money:15e3,packs:1,xp:300}],Ag={beans:10,cake:6},jg=e=>Object.keys(Mg).indexOf(e)%2==0?`beans`:`cake`,Mg={served:{name:`Kaffeeprofi`,icon:`☕`,unit:`Gäste bedient`,goals:[50,500,5e3],val:e=>e.state.totals.served},earned:{name:`Geschäftssinn`,icon:`💰`,unit:`€ Umsatz`,goals:[1e3,25e3,5e5],val:e=>e.state.totals.earned},level:{name:`Aufsteiger`,icon:`⭐`,unit:`Level`,goals:[5,10,20],val:e=>e.state.level},days:{name:`Durchhalter`,icon:`📅`,unit:`Tage`,goals:[7,30,100],val:e=>e.state.day},perfect:{name:`Perfekter Tag`,icon:`💯`,unit:`Tage ohne verlorenen Gast (ab 30 Gästen)`,goals:[1,5,20],val:e=>e.state.totals.perfect||0},litters:{name:`Züchterherz`,icon:`💞`,unit:`Würfe`,goals:[1,10,40],val:e=>e.state.totals.litters||0},dogsSold:{name:`Vermittler`,icon:`🏡`,unit:`Hunde vermittelt`,goals:[1,10,50],val:e=>e.state.totals.dogsSold||0},recipes:{name:`Tüftler`,icon:`🧪`,unit:`Hausrezepte`,goals:[3,15,40],val:e=>vg().filter(t=>e.state.coffees.includes(t.id)).length},research:{name:`Forscherin`,icon:`🔬`,unit:`Forschungen`,goals:[3,12,30],val:e=>e.state.evening.research.done.length},campaigns:{name:`Werbeprofi`,icon:`📣`,unit:`Kampagnen`,goals:[5,25,100],val:e=>e.state.totals.campaigns||0},deco:{name:`Innenarchitekt`,icon:`🪴`,unit:`Deko-Stücke`,goals:[10,25,50],val:e=>e.furniture.decoCount()},cards:{name:`Sammlerin`,icon:`🃏`,unit:`verschiedene Karten`,goals:[6,18,36],val:e=>e.collect.uniqueCards()},branches:{name:`Filialchefin`,icon:`🏢`,unit:`Filialen`,goals:[1,3,6],val:e=>e.collect.branchCount()}},Ng=Object.fromEntries(Object.entries(Qu).filter(([e])=>e!==`stammhaus`)),Pg=$u.maxLevel;function Fg(){return{cards:{},packs:1,claimed:{},notified:{},branches:{},packsOpened:0}}var Ig=class{constructor(e){this.game=e;let t=e.state,n=Fg(),r=t.collect||{};t.collect={...n,...r,cards:{...r.cards},claimed:{...r.claimed},notified:{...r.notified},branches:{...r.branches}},this.checkT=2,this.lastPack=null}get c(){return this.game.state.collect}fx(e){let t=0;for(let[n,r]of Object.entries(wg))this.setDone(n)&&(t+=r.bonus[e]||0);return e===`spawn`&&(t+=$u.spawn*this.branchCount()),e===`branch`&&(t+=Lm(this.game.state)),t}uniqueCards(){return Object.keys(this.c.cards).filter(e=>this.c.cards[e]>0).length}setDone(e){return Dg.filter(t=>t.set===e).every(e=>this.c.cards[e.id]>0)}buyPack(){return this.game.state.money<Og.cost?(this.game.ui.toast(`Dafür reicht das Geld nicht.`),!1):(this.game.pay(Og.cost,`sammeln`),this.c.packs++,this.game.audio.coin(),!0)}rollRarity(){let e=this.game.bonus(`luck`),t={common:Cg.common.weight,rare:Cg.rare.weight*(1+e),epic:Cg.epic.weight*(1+e),legendary:Cg.legendary.weight*(1+e)},n=Math.random()*Object.values(t).reduce((e,t)=>e+t,0);for(let[e,r]of Object.entries(t))if((n-=r)<=0)return e;return`common`}openPack(){if(this.c.packs<1)return null;this.c.packs--,this.c.packsOpened=(this.c.packsOpened||0)+1;let e=[],t=0;for(let n=0;n<Og.size;n++){let n=this.rollRarity(),r=Dg.filter(e=>e.rarity===n),i=r[Math.floor(Math.random()*r.length)],a=!this.c.cards[i.id]&&!e.some(e=>e.card.id===i.id);this.c.cards[i.id]=(this.c.cards[i.id]||0)+1,a||(t+=Cg[n].dup),e.push({card:i,isNew:a})}let n=Object.keys(wg).filter(t=>e.length&&this.setDoneWithout(t,e));t&&this.game.earn(t,`sammeln`),this.game.addXP(8),this.game.audio.coin();let r=Object.keys(wg).filter(e=>this.setDone(e)&&!n.includes(e));this.lastPack={cards:e,dupMoney:t,sets:r};for(let e of r)setTimeout(()=>this.game.ui.toast(`${wg[e].icon} Set „${wg[e].name}“ komplett! Dauerhaft ${wg[e].desc}.`,`big`,6e3),2600);return this.game.save(),this.lastPack}setDoneWithout(e,t){return Dg.filter(t=>t.set===e).every(e=>(this.c.cards[e.id]||0)-t.filter(t=>t.card.id===e.id).length>0)}badgeTier(e){let t=Mg[e],n=t.val(this.game),r=0;for(;r<t.goals.length&&n>=t.goals[r];)r++;return r}claimable(e){return this.badgeTier(e)>(this.c.claimed[e]||0)}claimableCount(){return Object.keys(Mg).filter(e=>this.claimable(e)).length}claim(e){if(!this.claimable(e))return!1;let t=this.c.claimed[e]||0,n=kg[t];this.c.claimed[e]=t+1,this.game.earn(n.money,`abzeichen`),this.c.packs+=n.packs;let r=n.packs?`, ${n.packs} Päckchen`:``;if(t===0){let t=jg(e),n=this.game.state.evening?.stock;n&&(n[t]=(n[t]||0)+Ag[t],r=t===`beans`?`, ${Ag.beans} Portionen Edelbohnen`:`, ${Ag.cake} Stück Kuchen für die Vitrine`)}return this.game.addXP(n.xp),this.game.audio.coin(),this.game.ui.toast(`${n.icon} ${Mg[e].name} (${n.name}): +${$(n.money)}${r}`,`big`,4500),this.game.save(),!0}checkBadges(){for(let e of Object.keys(Mg)){let t=this.badgeTier(e);if(t>(this.c.notified[e]||0)){this.c.notified[e]=t;let n=Mg[e];this.game.ui.toast(`🏆 Abzeichen ${n.icon} ${n.name} ${kg[t-1].name} erreicht! Belohnung unter „Sammeln“ abholen.`,`big`,5e3)}}}branchCount(){return Km(this.game.state)}branchIncome(){return Xm(this.game.state)*(1+this.game.bonus(`branch`))}branchLevel(e){return Hm(this.game.state).sites[e]?.lvl||0}branchCost(e){return qm(this.game.state,e)}canBranch(e){return!Jm(this.game.state,e)}buyBranch(e){let t=this.game.state,n=qm(t,e);if(Jm(t,e))return!1;let r=Qu[e];this.game.pay(n,`filialen`);let i=this.branchLevel(e)+1;t.city.sites[e]?t.city.sites[e].lvl++:t.city.sites[e]={lvl:1,local:null,last:0},this.game.addXP(i===1?200:60),this.game.audio.coin();let a=r.full?` Auf der Stadtkarte kannst du jederzeit rüberwechseln und selbst bedienen.`:` Dein Team legt los, du musst dich um nichts kümmern.`;return this.game.ui.toast(i===1?`${r.icon} Deine Filiale ${r.name} hat eröffnet. Ab heute Abend kommt dein Anteil rein.${a}`:`${r.icon} Filiale ${r.name} auf Stufe ${i} ausgebaut.`,`big`,4500),this.game.save(),!0}onOpen(){this.game.state.day%7==0&&(this.c.packs++,setTimeout(()=>this.game.ui.toast(`🎁 Ein Gratis-Kartenpäckchen liegt unter „Sammeln“ bereit.`),2200))}onLevel(e){for(let t of Object.values(Ng))t.level===e&&this.game.ui.toast(`${t.icon} Neue Filiale möglich: ${t.name}. Schau unter „Sammeln“.`,`big`,5e3)}update(e){this.checkT-=e,this.checkT>0||(this.checkT=2,this.checkBadges(),this.game.ui.updateCollectDot())}};function Lg(e,t,n=1,r=1){return e*Cu(t)*n*(1+(Ph[r]??0))}function Rg(e,t,n=1){return e*Yu.tipBase*Math.max(0,Math.min(1,t))*n}function zg(e,t){return t>e*.15?Yu.xpServeTip:Yu.xpServe}Yu.saveShare;var Bg=[{id:`serve`,at:0,icon:`☕`,text:`Bediene deine ersten 3 Gäste: bestellen, brühen, servieren.`,done:e=>(e.totals?.served||0)>=3},{id:`upgrade`,at:1,icon:`⬆️`,text:`Kauf dein erstes Upgrade unter 🏠 Café, zum Beispiel die Mühle für höhere Preise.`,done:e=>Object.values(e.upgrades||{}).some(e=>e>0)},{id:`stars`,at:4,icon:`⭐`,text:`Triff beim Zubereiten die Mitte. 3 Sterne geben mehr Geld und Trinkgeld.`,ev:`stars3`},{id:`furnish`,at:7,icon:`🪑`,text:`Stell im Einrichten-Modus einen Stuhl oder Deko dazu. Mehr Plätze, mehr Geduld.`,ev:`furnish`},{id:`station`,at:9,icon:`🥤`,text:`Neue Station: Nimm den Smoothie Beerenwuff auf die Karte (ab Level 3).`,done:e=>(e.coffees||[]).some(e=>e.startsWith(`sm_`))},{id:`evening`,at:13,icon:`🌙`,text:`Nach Feierabend planst du Vorräte, Kampagnen und Rezepte für den nächsten Tag.`,done:e=>(e.day||1)>=2},{id:`dogs`,at:16,icon:`🐶`,text:`Kümmere dich um die Hunde: füttern und streicheln bringt Trinkgeld.`,ev:`dog`},{id:`crew`,at:19,icon:`🧑‍🍳`,text:`Stell im Personal deinen ersten Barista-Welpen ein. Er brüht von allein.`,done:e=>!!e.staff?.barista},{id:`collect`,at:25,icon:`🏆`,text:`Schau unter 🏆 Sammeln vorbei: Abzeichen, Karten und später Filialen.`,ev:`collect`},{id:`goal`,at:29,icon:`🏢`,text:`Du kennst jetzt alles. Nächstes großes Ziel: deine erste Filiale in der Altstadt.`,ev:`ack`}];function Vg(e){return e.onboard&&typeof e.onboard==`object`&&Number.isFinite(e.onboard.t)||(e.onboard={t:0,step:(e.totals?.served||0)>=Tu.veteranServed||(e.level||1)>=Tu.veteranLevel?Bg.length:0,ev:[],off:!1}),e.onboard}var Hg=e=>!e.onboard||e.onboard.off||e.onboard.step>=Bg.length;function Ug(e){if(Hg(e))return null;let t=Bg[e.onboard.step];return e.onboard.t>=t.at?t:null}function Wg(e,t){let n=Vg(e);return Hg(e)?[]:(n.t+=t/60,Gg(e))}function Gg(e){let t=e.onboard,n=[];for(;!Hg(e);){let r=Bg[t.step];if(t.t<r.at||!(r.done?r.done(e):t.ev.includes(r.ev)))break;n.push(r.id),t.step++}return n}function Kg(e,t){let n=Vg(e),r=Ug(e);return!r||r.ev!==t?[]:(n.ev.includes(t)||n.ev.push(t),Gg(e))}function qg(e){Vg(e).off=!0}var Jg=[`enter`,`waitOrder`,`waitCoffee`];function Yg(e,t,n,r){return e<t?`open`:n.some(e=>Jg.includes(e.state))?e-t>=r?`close`:`serving`:`close`}var Xg=(e,t)=>e<t,Zg={mini:60,map:55,pack:50,modal:40,drawer:30,onboard:20};function Qg(e){let t=null;for(let n of e||[])Zg[n]!=null&&(t==null||Zg[n]>Zg[t])&&(t=n);return t}function $g(e,t={}){let n=t.open||[];if(Qg(n)===`mini`)return e===`Space`||e===`Enter`?{act:t.repeat?null:`pressMini`,prevent:!0}:{act:null};if(e===`KeyF`&&!t.edit)return{act:`togglePhoto`};if(t.photo){if(e===`KeyP`)return{act:`savePhoto`};if(e===`Escape`)return{act:`closePhoto`}}let r=n.filter(e=>Zg[e]>=30&&e!==`mini`);return e===`Escape`&&r.length?{act:`close`,arg:Qg(r)}:e===`Space`?r.length||t.edit?{act:null,prevent:!t.edit}:{act:`brew`,prevent:!0}:t.edit?e===`KeyR`?{act:`rotate`}:e===`Escape`?{act:t.moving?`cancelMove`:`exitEdit`}:e===`Delete`||e===`Backspace`?{act:`sell`}:{act:null}:e===`Escape`?{act:`pause`}:{act:null}}var e_=[`klassisch`,`japan`,`strand`];function t_(e){let t=e?.city,n=(t?.active||`stammhaus`)===`stammhaus`?e?.scenario:t?.sites?.stammhaus?.local?.scenario;return e_.includes(n)?n:`klassisch`}var n_=[[`#7cbf5e`,`#8fcf6c`,`#f2b8c6`],[`#5f9a5c`,`#6fae69`,`#7dbb6f`],[`#e08a3a`,`#d0573a`,`#e8b84a`],[`#5f9a5c`,`#6b8f63`,`#6b8f63`]],r_=[[`#9fd18a`,`#a9d792`],[`#8cc777`,`#97cf80`],[`#b9c06a`,`#c7b865`],[`#eef3f6`,`#f6f9fb`]];function i_(e,t){let n=e_.includes(e)?e:`klassisch`,r=Math.max(0,Math.min(3,t|0)),i=r===3,a={style:n,season:r,winter:i,grass:r_[r],leaves:n_[r],dirt:[`#a47450`,`#93643f`],stone:`#8f8a85`,path:[`#c9c3ba`,`#bdb6ac`],plaza:[`#d8d1c6`,`#cfc7ba`],water:i?`#cfe6ef`:`#5fb0d6`,sea:i?`#8fc3d8`:`#4aa3cf`,tree:`round`,roof:[`#c0583f`,`#5f6b85`,`#a8473a`],wall:[`#f3e6cc`,`#efe0c4`,`#f6ecd8`],wood:`#7a5236`,beam:`#5a3d2b`,awning:[`#e8913c`,`#fbf3e4`],lamp:`lamp`,sand:null};return n===`japan`&&Object.assign(a,{tree:`cherry`,roof:[`#3d4a5c`,`#4a3f3a`,`#2f3a48`],wall:[`#efe6d6`,`#e9dfcc`,`#f3ecdf`],path:[`#d8ccb3`,`#cdbfa4`],plaza:[`#ddd2bd`,`#d2c6ae`],awning:[`#2f4a6b`,`#efe6d6`],lamp:`lantern`,leaves:r===0?[`#f2b8c6`,`#f7cdd8`,`#efa3b6`]:r===2?[`#c8442f`,`#e0663a`,`#d9a03a`]:n_[r]}),n===`strand`&&Object.assign(a,{tree:`palm`,roof:[`#5fb3c4`,`#f2efe9`,`#e9a07a`],wall:[`#fbf7ef`,`#f6e3d3`,`#e3f0ea`],path:[`#c8a27a`,`#bd966d`],plaza:[`#efe2c2`,`#e6d6b2`],awning:[`#3f8fbf`,`#fbf7ef`],lamp:`torch`,sand:i?[`#e9e4d6`,`#f1ede2`]:[`#ecd9a8`,`#f1e1b6`],grass:i?r_[3]:r===2?[`#c9c27a`,`#d3c983`]:[`#a9cf84`,`#b5d68f`]}),a}var a_={dog:[`🐶 Wuff! Der Filialhund passt auf, dass keiner ohne Kaffee vorbeigeht.`,`🐶 Er wedelt. Das heißt hier: Bitte eintreten.`,`🐶 Streicheln kostet nichts. Kaffee schon.`],bernhardiner:[`🐕 Der Bernhardiner hat statt Rum ein Fässchen Espresso dabei.`,`🐕 Wer im Bergdorf ankommt, wird erst mal abgeschleckt.`,`🐕 Er schnarcht. Höhenluft macht müde.`],train:[`🚆 Tuuut! Der Zug nach Kaffeehausen fährt ab.`,`🚆 Bitte zurücktreten, der Zug fährt eine Ehrenrunde.`,`🚆 Pünktlich wie immer. Fast.`],boat:[`⛴️ Tröööt! Der Kutter bringt frische Bohnen aus Übersee.`,`⛴️ Der Kapitän trinkt seinen Kaffee schwarz. Wie sonst.`,`⛴️ Leinen los. Nur kurz um die Ecke.`],seagull:[`🐦 Kreisch! Die Möwe hat es auf dein Croissant abgesehen.`,`🐦 Sie guckt, als hätte sie schon Pfoten-Mocca bestellt.`,`🐦 Möwen haben keine Manieren. Aber Ausdauer.`],clock:[`🕰️ Es ist zehn nach Kaffee.`,`🕰️ Der Uhrturm geht zwei Minuten vor. Damit die Studis pünktlich sind.`,`🕰️ Bong. Zeit für die nächste Tasse.`],fountain:[`⛲ Platsch. Du wünschst dir eine Maschine, die von allein entkalkt.`,`⛲ Im Brunnen liegen drei Münzen und ein Hundeknochen.`,`⛲ Das Wasser plätschert im Takt der Lo-Fi-Musik.`],duck:[`🦆 Quak. Die Ente zieht unbeeindruckt ihre Runde.`,`🦆 Sie hätte gern Brot. Gibt es hier aber nur als Croissant.`,`🦆 Quak quak. Das war Entisch für Guten Morgen.`],koi:[`🐟 Der Koi blubbert dir einen Gruß zu.`,`🐟 Er ist älter als das Café und weiß alles.`,`🐟 Blubb. Mehr gibt es nicht zu sagen.`],butterfly:[`🦋 Der Schmetterling dreht eine Runde über der Hundewiese.`,`🦋 Zu schnell für dich. Wie immer.`],hedgehog:[`🦔 Der Igel sucht ein Laubhaufen-Plätzchen für den Winter.`,`🦔 Pieks. Lieber nicht anfassen.`],kite:[`🪁 Der Drachen hängt fest. Morgen weht der Wind besser.`,`🪁 Hui! Fast bis zum Bergdorf.`],pumpkin:[`🎃 Ein Kürbis. Wird morgen zu Kürbis-Latte.`,`🎃 Wer hat dem Kürbis ein Hundegesicht geschnitzt?`],icecream:[`🍦 Eis mit Espresso drüber. Affogato zum Mitnehmen.`,`🍦 Der Eiswagen hat nur eine Sorte: Kaffee.`],snowman:[`☃️ Der Schneemann winkt mit seinem Ast.`,`☃️ Er hätte gern einen Kakao. Leider keine Hände.`],skater:[`⛸️ Wusch! Eine perfekte Pirouette auf dem Teich.`,`⛸️ Fast hingefallen. Aber nur fast.`],sled:[`🛷 Der Schlitten wartet auf die nächste Abfahrt.`,`🛷 Einmal runter bis zum Bahnhof, bitte.`],gift:[`🎁 Ein Päckchen vor dem Stammhaus. Draufschrift: Nicht vor Heiligabend öffnen.`,`🎁 Es raschelt. Klingt nach Hundekeksen.`],torii:[`⛩️ Wer durchs Tor geht, bekommt den Tag über gute Laune.`,`⛩️ Das Tor ist frisch gestrichen. Bitte nicht anlehnen.`],lighthouse:[`🗼 Der Leuchtturm blinkt dreimal. Das heißt: Kaffee ist fertig.`,`🗼 Von oben sieht man bis zur nächsten Insel.`],crab:[`🦀 Die Krabbe läuft seitwärts davon. Beleidigt.`,`🦀 Klack klack. Sie will nur ihre Ruhe.`],sandcastle:[`🏰 Eine Sandburg mit Wassergraben. Hier wohnt der Hafenmeister.`,`🏰 Nicht drauftreten, das war viel Arbeit.`]};function o_(e,t=Math.random){let n=a_[e]||[];return n[Math.floor(t()*n.length)]||``}function s_(e){if(e>=3)return`🐣 Alle Ostereier gefunden. Frohe Ostern vom ganzen Team!`;let t=3-e;return`🥚 Ein Osterei! Noch ${t} ${t===1?`ist`:`sind`} versteckt.`}var c_={stammhaus:[0,0],altstadt:[-8,-5],uni:[8,-5.5],hafen:[9.5,4],bahnhof:[0,8],park:[-9.5,4.5],bergdorf:[0,-9.5]},l_=[2.5,2.2],u_={stammhaus:3.6,altstadt:3.9,uni:5.2,hafen:3.6,bahnhof:3,park:3,bergdorf:6.2},d_=15.5,f_=12.8,p_=-.4,m_=[-5.2,7.6,1.8],h_=11,g_={klassisch:`gable`,japan:`japan`,strand:`flat`},__=`#f5f8fb`,v_=e=>({emissive:e,emissiveIntensity:.55}),y_=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)};function b_(e){return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function x_(e=0,t=0,n=0,r=0){let i=new q;return i.position.set(e,t,n),i.rotation.y=r,i}function S_(e,t){return e.traverse(e=>{e.isMesh&&Object.assign(e.userData,t)}),e}function C_(e){for(;e;e=e.parent)if(!e.visible)return!1;return!0}function w_(e,t,n,r,i,a){let o=i-n,s=a-r,c=Math.max(0,Math.min(1,((e-n)*o+(t-r)*s)/(o*o+s*s)));return Math.hypot(e-n-c*o,t-r-c*s)}function T_(e,t){let n=Math.atan2(t-p_,e),r=1+.05*Math.sin(n*5)+.03*Math.sin(n*9+1),i=(e/d_)**2+((t-p_)/f_)**2;return i<=r*r?i/(r*r):-1}function E_(e,t){for(let[n,[r,i]]of Object.entries(c_))if(Math.abs(e-r)<=l_[0]&&Math.abs(t-i)<=l_[1])return n;return null}function D_(e,t,n=.8){for(let r of Object.keys(c_))if(r!==`stammhaus`&&w_(e,t,0,0,c_[r][0],c_[r][1])<n)return!0;return!1}function O_(e,t,n,r,i,a,o){let s=t.winter;if(o===`flat`)return e.add(Q(n+.2,.14,r+.2,a,0,i+.07,0)),e.add(Q(n+.2,.14,.1,a,0,i+.21,r/2+.05)),s&&e.add(Q(n,.05,r,__,0,i+.17,0)),i+.28;if(o===`pyramid`){let t=.3;for(let o=0;o<4;o++){let c=1-o/4;e.add(Q((n+.25)*c,t,(r+.25)*c,a,0,i+t*(o+.5),0)),s&&e.add(Q((n+.25)*c*.92,.05,(r+.25)*c*.92,__,0,i+t*(o+1)+.02,0))}return e.add(Q(.08,.45,.08,`#3b3b44`,0,i+t*4+.22,0)),i+t*4}let c=o===`japan`,l=c?.17:.22,u=c?.5:.3,d=i;if(c){e.add(Q(n+.8,.1,r+.8,a,0,i+.05,0));for(let t of[-1,1])for(let o of[-1,1])e.add(Q(.16,.14,.16,a,t*(n/2+.34),i+.15,o*(r/2+.34)));d+=.1}for(let t=0;t<4;t++){let i=(r+u)*(1-t/4);e.add(Q(n+u,l,i,a,0,d+l*(t+.5),0)),s&&e.add(Q(n+u+.02,.06,i,__,0,d+l*(t+1)+.01,0))}return e.add(Q(n+u+.1,.1,.16,c?`#2a2a30`:a,0,d+l*4+.04,0)),d+l*4}function k_(e,t,n){let r=x_(t.x||0,t.y||0,t.z||0,t.ry||0),{w:i,h:a,d:o}=t;r.add(Q(i,a,o,t.wall,0,a/2,0));let s=Math.max(1,Math.floor(i/.75)),c=Math.max(1,Math.floor((a-.3)/.8));for(let e=0;e<c;e++)for(let n=0;n<s;n++){let a=-i/2+(n+.5)*(i/s);if(t.door&&e===0&&n===Math.floor(s/2))continue;let c=.55+e*.8;r.add(Q(.3,.36,.05,`#ffe3a0`,a,c,o/2+.02,v_(`#ffcf70`))),r.add(Q(.38,.05,.1,t.trim||`#fbf7ef`,a,c-.21,o/2+.04))}if(t.door){let t=-i/2+(Math.floor(s/2)+.5)*(i/s);r.add(Q(.36,.62,.05,e.wood,t,.31,o/2+.02))}if(t.timber){for(let t=0;t<=s;t++)r.add(Q(.06,a,.04,e.beam,-i/2+i/s*t,a/2,o/2+.03));for(let t=1;t<=c;t++)r.add(Q(i,.06,.04,e.beam,0,t*.8-.05,o/2+.03))}let l=O_(r,e,i,o,a,t.roof,t.roofStyle||g_[e.style]);if(t.chimney){let t=i*.28,s=-o*.15,c=l-a+.25;r.add(Q(.26,c,.26,`#8a5a44`,t,a+c/2,s)),e.winter&&r.add(Q(.3,.05,.3,__,t,a+c+.02,s)),n&&n(r,t,a+c+.1,s)}return r}function A_(e,t,n,r,i,a=0){let o=x_(n,r,i,a),s=new q;s.rotation.x=.35;let c=Math.max(3,Math.round(e/.3));for(let n=0;n<c;n++){let r=-e/2+(n+.5)*(e/c);s.add(Q(e/c,.06,.7,t[n%2],r,0,.35)),s.add(Q(e/c,.14,.04,t[(n+1)%2],r,-.08,.7))}return o.add(s),o}function j_(e,t,n,r){let i=x_(t,0,n);return i.add(Q(.07,.34,.07,`#5b4a3e`,0,.17,0)),i.add(Q(.46,.05,.46,`#f6efe3`,0,.36,0)),i.add(Q(.2,.22,.2,e.wood,-.36,.11,0)),i.add(Q(.2,.22,.2,e.wood,.36,.11,0)),r&&(i.add(Q(.05,.9,.05,`#f2efe9`,0,.8,0)),i.add(Q(.9,.08,.9,r,0,1.25,0)),i.add(Q(.5,.08,.5,`#fbf7ef`,0,1.32,0))),i}function M_(e,t,n){let r=x_(t,0,n);if(e.lamp===`lantern`)return r.add(Q(.3,.1,.3,`#9a958c`,0,.05,0)),r.add(Q(.12,.4,.12,`#a8a398`,0,.3,0)),r.add(Q(.28,.2,.28,`#ffe2a0`,0,.6,0,v_(`#ffcf70`))),r.add(Q(.42,.08,.42,`#8f8a80`,0,.74,0)),r;let i=e.lamp===`torch`?`#8a6a48`:`#3b3b44`;return r.add(Q(.08,1,.08,i,0,.5,0)),e.lamp===`torch`?r.add(Q(.16,.18,.16,`#ffb347`,0,1.08,0,v_(`#ff9a2a`))):(r.add(Q(.2,.22,.2,`#ffe6a8`,0,1.1,0,v_(`#ffcf70`))),r.add(Q(.26,.06,.26,i,0,1.24,0))),r}function N_(e,t,n,r,i){let a=x_(e,t,n);a.add(Q(r,.12,.14,`#8a5a44`,0,0,0));let o=Math.max(2,Math.round(r/.14));for(let e=0;e<o;e++)a.add(Q(.1,.1,.1,i[e%i.length],-r/2+(e+.5)*(r/o),.1,0));return a}function P_(e,t){let n=new q,r=e.tree!==`palm`&&t()<(e.tree===`cherry`?.3:.22),i=e.tree===`palm`&&t()<.75,a=()=>e.leaves[Math.floor(t()*e.leaves.length)];if(i){let r=(t()-.5)*.3;for(let e=0;e<5;e++)n.add(Q(.2,.42,.2,e%2?`#8a6a48`:`#9c7a54`,r*e*.5,.21+e*.4,0));let i=x_(r*2.2,2.05,0);for(let e=0;e<6;e++){let t=new q;t.rotation.y=e/6*Math.PI*2,t.rotation.z=-.35,t.add(Q(1.1,.06,.28,e%2?`#3f8f4a`:`#4fa65a`,.5,-.1,0)),i.add(t)}e.winter&&i.add(Q(.5,.08,.5,__,0,.02,0)),n.add(i)}else r?(n.add(Q(.2,.5,.2,`#6b4a33`,0,.25,0)),[[1.1,.7],[.8,1.15],[.45,1.55]].forEach(([t,r],i)=>{n.add(Q(t,.45,t,i%2?`#3f7a4f`:`#4a8a5a`,0,r,0)),e.winter&&n.add(Q(t*.9,.06,t*.9,__,0,r+.25,0))})):e.winter?(n.add(Q(.22,1.3,.22,`#6b4a33`,0,.65,0)),n.add(Q(.1,.55,.1,`#6b4a33`,.25,1.15,.05)),n.add(Q(.1,.5,.1,`#6b4a33`,-.22,1.05,-.08)),n.add(Q(.5,.06,.1,`#6b4a33`,.05,1.35,.15)),n.add(Q(.16,.05,.16,__,.25,1.45,.05)),n.add(Q(.16,.05,.16,__,-.22,1.32,-.08))):(n.add(Q(.24,.9,.24,`#6b4a33`,0,.45,0)),n.add(Q(1.2,.85,1.2,a(),0,1.25,0)),n.add(Q(.85,.55,.85,a(),.05,1.9,.05)),n.add(Q(.5,.4,.5,a(),-.45,1.05,.4)));let o=.75+t()*.35;return n.scale.set(o,o,o),n}function F_(e,t,n=0){let r=gd(hd()).group;return r.scale.setScalar(.42),r.position.set(e,0,t),r.rotation.y=n,r}function I_(e,t,n=0,r={},i=.55){let a=bd({fur:`#e0b47c`,dark:`#7a4a2a`,ears:`flop`,...r}).group;return a.scale.setScalar(i),a.position.set(e,0,t),a.rotation.y=n,a}function L_(e,t,n,r=.5,i=0){let a=nf[e]();return a.scale.setScalar(r),a.position.set(t,0,n),a.rotation.y=i,a}var R_=class{constructor(e){this.game=e,this.el=document.createElement(`div`),this.el.className=`citymap hidden`,this.el.innerHTML=`<div class="cm-inner">
      <div class="cm-view"><div class="cm-labels"></div><div class="cm-hint">${Pf(`Tipp: In der Stadt lässt sich einiges anklicken.`)}</div></div>
      <div class="cm-side"><div class="cm-head"><b>🗺️ Stadtkarte</b><button class="btn cm-close" title="Schließen (Esc)">✕</button></div><div class="cm-info"></div></div>
    </div>`,document.body.appendChild(this.el),this.el.querySelector(`.cm-close`).addEventListener(`click`,()=>this.close()),this.el.addEventListener(`click`,e=>{e.target===this.el&&this.close();let t=e.target.closest(`[data-cm]`);t&&this.act(t.dataset.cm)}),this.sel=Gm(e.state)}get open(){return!this.el.classList.contains(`hidden`)}show(){this.el.classList.remove(`hidden`);let e=this.el.querySelector(`.cm-view`),t=e.clientWidth||600,n=e.clientHeight||460;this.renderer=new Dl({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.setSize(t,n),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=2,e.appendChild(this.renderer.domElement),this.camera=new Ra(30,t/n,1,200),this.fit(t,n),this.easter=0,this.build(),this.renderer.domElement.addEventListener(`pointerdown`,e=>this.pick(e)),this.t=0;let r=performance.now(),i=e=>{if(!this.renderer)return;let t=Math.min(.05,((e||r)-r)/1e3);r=e||r,this.t+=t,this.scene.rotation.y=Math.sin(this.t*.12)*.04;for(let e of this.anims)e(this.t,t);this.renderer.render(this.scene,this.camera),this.placeLabels(),this.raf=requestAnimationFrame(i)};i(),this.renderInfo()}fit(e,t){let n=this.camera;n.aspect=e/t,n.updateProjectionMatrix();let r=[new W(0,8.5,c_.bergdorf[1]-1.5),new W(0,-6.5,p_)];for(let e=0;e<48;e++){let t=e/48*Math.PI*2,n=Math.cos(t)*16.3,i=p_+Math.sin(t)*13.600000000000001;r.push(new W(n,.4,i),new W(n,-4.2,i))}let i=new W(0,Math.sin(.63),Math.cos(.63)),a=new W(0,-1,.4),o=new W,s=e=>{n.position.copy(a).addScaledVector(i,e),n.lookAt(a),n.updateMatrixWorld(!0);let t=0,s=1e9,c=-1e9;for(let e of r)o.copy(e).project(n),t=Math.max(t,Math.abs(o.x)),s=Math.min(s,o.y),c=Math.max(c,o.y);return{x:t,y0:s,y1:c}},c=60;for(let e=0;e<2;e++){let e=20,t=160;for(let n=0;n<24;n++){let n=(e+t)/2,r=s(n);Math.max(r.x,(r.y1-r.y0)/2)>.94?e=n:t=n}let r=s(t),i=new W(0,1,0).applyQuaternion(n.quaternion),o=Math.tan(Ot.degToRad(n.fov/2))*t;a.addScaledVector(i,(r.y1+r.y0)/2*o),c=t}s(c)}close(){this.el.classList.add(`hidden`),cancelAnimationFrame(this.raf),this.renderer&&=(this.sun?.shadow.dispose(),this.disposeOwn(),this.renderer.forceContextLoss(),this.renderer.dispose(),this.renderer.domElement.remove(),null),this.el.querySelector(`.cm-labels`).innerHTML=``,this.scene=null}disposeOwn(){this.scene?.traverse(e=>{e.isInstancedMesh&&e.dispose()})}build(){let e=this.game.state;this.disposeOwn();let t=this.game.seasons?.index?.()??1,n=this.theme=i_(t_(e),t),r=this.scene=new Pn;this.anims=[],r.add(new Ea(`#fff7ea`,n.winter?`#c9d6e0`:`#a8c99a`,1.5));let i=this.sun=new Ua(`#fff3df`,1.6);i.position.set(-12,24,12),i.castShadow=!0,i.shadow.mapSize.set(2048,2048),Object.assign(i.shadow.camera,{left:-20,right:20,top:20,bottom:-20,near:1,far:70}),i.shadow.bias=-8e-4,r.add(i),this.ground(n),this.scatter(n);let a=Gm(e);for(let t of Object.keys(Qu)){let[i,o]=c_[t],s=x_(i,0,o),c=Hm(e).sites[t],l={own:Wm(e,t),lvl:c?.lvl||0,open:(e.level||1)>=Qu[t].level,act:t===a};this[`b_${t}`](s,n,l),S_(s,{id:t}),r.add(s)}this.extras(n),this.markers(e,a),this.makeLabels()}ground(e){let t=[],n=[],r=[],i=[];for(let a=-16;a<=16;a++)for(let o=-14;o<=13;o++){let s=T_(a,o);if(s<0)continue;let c=y_(a,o),l=c<.5?0:1,u=E_(a,o);if(a>=h_&&o>=0&&o<=9)n.push({x:a,y:-.45,z:o,color:e.sea});else if(Math.hypot(a-m_[0],o-m_[1])<m_[2])n.push({x:a,y:-.42,z:o,color:e.water});else{let n=e.grass[l];u&&u!==`park`&&u!==`bergdorf`?n=e.plaza[l]:!u&&D_(a,o)?n=e.path[l]:e.sand&&s>.74&&(n=e.sand[l]),t.push({x:a,y:-.2,z:o,color:n})}let d=!1;for(let[e,t]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]])T_(a+e,o+t)<0&&(d=!0);if(d||s>.82){let n=1+c*1.4+(1-s)*1.2;r.push({x:a,y:-.4-n/2,z:o,color:e.dirt[l],sy:n});let u=.5+y_(o,a)*1.2;i.push({x:a,y:-.4-n-u/2,z:o,color:l?`#8f8a85`:`#9d9891`,sy:u}),e.winter&&d&&t.push({x:a,y:.03,z:o,color:__,sy:.1})}}let a=this.scene;a.add(sd(1,.4,1,t,{cast:!1})),a.add(sd(1,.3,1,n,{cast:!1})),a.add(sd(1,1,1,r,{cast:!1})),a.add(sd(1,1,1,i,{cast:!1}))}scatter(e){let t=b_(42),n=this.scene,r=[];for(let i=-15;i<=15;i++)for(let a=-13;a<=12;a++){let o=T_(i,a);if(o<0||o>.93||i>=10&&a>=-1&&a<=10||Math.hypot(i-m_[0],a-m_[1])<m_[2]+.8||D_(i,a,1.3))continue;let s=!1;for(let[e,t]of Object.values(c_))Math.abs(i-e)<=l_[0]+.6&&Math.abs(a-t)<=l_[1]+.6&&(s=!0);if(s)continue;let c=t();if(c<.34){let r=P_(e,t);r.position.set(i+(t()-.5)*.5,0,a+(t()-.5)*.5),n.add(r)}else if(c<.62&&!e.winter){let n=e.season===2?[`#d9772e`,`#c8442f`,`#e8b84a`]:[`#f4d35e`,`#f2b8c6`,`#b9a3e3`,`#fbf7ef`,`#e8735a`];for(let e=0;e<3;e++)r.push({x:i+(t()-.5)*.8,y:.05,z:a+(t()-.5)*.8,color:n[Math.floor(t()*n.length)]})}}r.length&&n.add(sd(.16,.1,.16,r,{cast:!1}));for(let t of Object.keys(c_)){if(t===`stammhaus`)continue;let[r,i]=c_[t],a=Math.hypot(r,i);for(let t=3.2;t<a-2.6;t+=3.4){let o=t/a,s=-i/a,c=r/a;n.add(M_(e,r*o+s*1,i*o+c*1))}}}smokeFn(){return(e,t,n,r)=>{for(let i=0;i<3;i++){let a=Q(.2,.2,.2,`#e9e6e1`,t,n,r);a.castShadow=!1,e.add(a);let o=i/3;this.anims.push(e=>{let i=(e*.35+o)%1;a.position.set(t+i*.3,n+i*1.3,r-i*.2),a.scale.setScalar(1.2-i*.9)})}}}egg(e,t,n={}){return S_(e,{egg:t,eggObj:e,...n}),e}cafeExtras(e,t,n,{x:r=0,z:i=1.3,w:a=3,dogAt:o=[1.6,1.2],parasol:s=null}={}){if(!n.own)return;let c=Math.max(1,Math.min(4,n.lvl+1));for(let n=0;n<c;n++)e.add(j_(t,r-a/2+(n+.5)*(a/c),i,s||(t.style===`strand`?t.awning[0]:null)));if(e.add(this.egg(I_(o[0],o[1],-.5),`dog`)),n.lvl>=3)for(let t=0;t<9;t++)e.add(Q(.08,.08,.08,[`#ffd27a`,`#ff9f80`,`#9fd3ff`][t%3],r-a/2+a/8*t,1-Math.sin(t/8*Math.PI)*.18,i+.5,v_(`#ffcf70`)));n.lvl>=5&&(e.add(Q(.05,1.4,.05,`#3b3b44`,r+a/2+.3,.7,i)),e.add(Q(.5,.3,.03,`#e8b64c`,r+a/2+.56,1.25,i)))}awningColors(e,t,n=e.awning){return t.own?n:[`#b9b4ab`,`#efe9df`]}b_stammhaus(e,t,n){let r=this.smokeFn();if(e.add(k_(t,{w:2.8,h:1.9,d:2.2,z:-.6,wall:t.wall[0],roof:t.roof[0],chimney:!0,door:!0},r)),t.style===`japan`){for(let t=0;t<3;t++)e.add(Q(.5,.45,.03,`#2f4a6b`,-.6+t*.6,1,.54));e.add(Q(1,.25,.05,`#c8442f`,0,1.62,.54))}else e.add(A_(2.6,t.awning,0,1.2,.5));let i=t.season===2?[`#d9772e`,`#c8442f`]:t.winter?[`#2f6b45`,`#c0563f`]:[`#f2b8c6`,`#f4d35e`,`#e8735a`];if(e.add(N_(-.95,1.38,.62,.55,i)),e.add(N_(.95,1.38,.62,.55,i)),this.cafeExtras(e,t,n,{z:1.4}),e.add(F_(-1.9,1.6,.6)),t.winter?e.add(this.egg(Q(.32,.3,.32,`#c0563f`,-2,.15,.6),`gift`),Q(.34,.06,.08,`#f4d35e`,-2,.31,.6)):e.add(L_(`plant`,-2,.6,.45)),t.style===`japan`){let n=x_(0,0,3.6);n.add(Q(.18,1.8,.18,`#c8442f`,-1,.9,0)),n.add(Q(.18,1.8,.18,`#c8442f`,1,.9,0)),n.add(Q(2.8,.16,.3,`#c8442f`,0,1.85,0)),n.add(Q(3.1,.1,.36,`#2b2320`,0,1.97,0)),n.add(Q(2.2,.12,.18,`#c8442f`,0,1.5,0)),t.winter&&n.add(Q(3.1,.05,.36,__,0,2.04,0)),e.add(this.egg(n,`torii`))}}b_altstadt(e,t,n){let r=this.smokeFn(),i=t.style===`strand`?[`#f2c4c4`,`#cfe8dc`,`#f5e3a3`]:t.wall,a=t.style!==`strand`;e.add(k_(t,{w:1.5,h:2.2,d:1.6,x:-1.7,z:-1.2,wall:i[0],roof:t.roof[0],timber:a,chimney:!0},r)),e.add(k_(t,{w:1.5,h:2.6,d:1.6,x:0,z:-1.3,wall:i[1],roof:t.roof[2],timber:a},r)),e.add(k_(t,{w:1.6,h:2,d:1.6,x:1.7,z:-1.1,wall:i[2],roof:t.roof[0],timber:a,door:!0,chimney:!0},r)),e.add(A_(1.5,this.awningColors(t,n,[`#f4c542`,`#fbf3e4`]),1.7,1.1,-.3));let o=[`#e8735a`,`#f4d35e`,`#7fb7d9`,`#9fd18a`];for(let t=0;t<12;t++)e.add(Q(.14,.16,.03,o[t%4],-2.2+t*.4,2-Math.sin(t/11*Math.PI)*.25,-.35));let s=x_(-.3,0,.8);if(s.add(Q(1.3,.28,1.3,`#b9b4ab`,0,.14,0)),s.add(Q(1.05,.06,1.05,t.winter?`#cfe6ef`:`#6fbbe0`,0,.29,0,t.winter?void 0:v_(`#3f8fbf`))),s.add(Q(.2,.65,.2,`#a8a398`,0,.55,0)),s.add(Q(.55,.1,.55,`#a8a398`,0,.88,0)),!t.winter){let e=Q(.12,.3,.12,`#bfe6f5`,0,1.05,0,v_(`#9fd3ff`));s.add(e),this.anims.push(t=>e.scale.y=.8+Math.sin(t*6)*.2)}e.add(this.egg(s,`fountain`));for(let[n,r,i]of[[-1.9,1.1,`#e8735a`],[1.5,1.3,`#7fb069`]]){let a=x_(n,0,r);a.add(Q(.9,.4,.5,t.wood,0,.2,0));for(let e=0;e<3;e++)a.add(Q(.2,.12,.2,[`#e8735a`,`#f4d35e`,`#9fd18a`][e],-.28+e*.28,.46,0));a.add(Q(.05,.9,.05,t.wood,-.42,.45,-.2)),a.add(Q(.05,.9,.05,t.wood,.42,.45,-.2)),a.add(A_(1,[i,`#fbf3e4`],0,.95,-.3)),e.add(a)}t.season===2&&e.add(this.egg(L_(`pumpkins`,-.9,1.8,.7),`pumpkin`)),t.winter&&e.add(L_(`xmastree`,.9,.3,.75)),this.cafeExtras(e,t,n,{x:1.6,z:.45,w:1.3,dogAt:[.6,1.6]}),e.add(F_(.6,.9,-.4),F_(-1.2,.3,.8))}b_uni(e,t,n){let r=t.style===`strand`?`#e9a07a`:`#b5584a`;e.add(k_(t,{w:4.4,h:1.9,d:1.6,z:-1,wall:r,roof:t.roof[1],trim:`#efe0c4`}));let i=x_(0,0,-.5);i.add(Q(1.1,3.6,1.1,r,0,1.8,0));for(let e of[1,1.8,2.5])i.add(Q(.28,.4,.05,`#ffe3a0`,0,e,.57,v_(`#ffcf70`)));i.add(Q(.36,.62,.05,t.wood,0,.31,.57)),O_(i,t,1.1,1.1,3.6,t.roof[1],`pyramid`);let a=x_(0,3.05,.58);a.add(Q(.72,.72,.04,`#fbf7ef`,0,0,0));let o=x_(0,0,.04);o.add(Q(.05,.2,.03,`#333`,0,.09,0));let s=x_(0,0,.05);s.add(Q(.04,.3,.03,`#333`,0,.14,0)),a.add(o,s),this.anims.push(e=>{s.rotation.z=-e*.6,o.rotation.z=-e*.05}),i.add(a),e.add(this.egg(i,`clock`)),e.add(k_(t,{w:1.4,h:1.1,d:1,x:-1.5,z:.75,wall:t.wall[2],roof:t.roof[0],door:!0})),e.add(A_(1.3,this.awningColors(t,n,[`#7fb069`,`#fbf3e4`]),-1.5,.85,1.25));for(let t=0;t<4;t++)e.add(Q(.3,.08,.22,[`#c0563f`,`#3f8fbf`,`#f4d35e`,`#7fb069`][t],-.55,.04+t*.08,1.2));if(this.cafeExtras(e,t,n,{x:-1.5,z:1.85,w:1.6,dogAt:[-.5,1.7]}),t.winter)e.add(F_(1.6,1.4,.3));else{for(let t=0;t<4;t++)for(let n=0;n<4;n++)e.add(Q(.22,.03,.22,(t+n)%2?`#e2552e`:`#fbf7ef`,1+t*.22,.02,1+n*.22));e.add(F_(1.2,1.9,Math.PI),F_(2,.9,-1.2))}for(let t of[1,1.5]){let n=x_(t,0,.1);n.add(Q(.05,.22,.22,`#333`,0,.12,-.18),Q(.05,.22,.22,`#333`,0,.12,.18)),n.add(Q(.04,.05,.4,`#3f8fbf`,0,.25,0)),e.add(n)}}b_hafen(e,t,n){let r=(e,n,r,i,a)=>{let o=x_(e,0,a);o.add(Q(n,r,i,`#b5584a`,0,r/2,0));for(let e=0;e<4;e++){let a=1-e/4;o.add(Q(n*a+.2,.26,i+.2,t.roof[1],0,r+.26*(e+.5),0)),o.add(Q(n*a,.26,.1,`#a84d40`,0,r+.26*(e+.5),i/2+.1)),t.winter&&o.add(Q(n*a+.22,.06,i+.2,__,0,r+.26*(e+1),0))}for(let e=0;e<2;e++)for(let t=0;t<3;t++)o.add(Q(.26,.36,.05,`#ffe3a0`,-n/3+n/3*t,.6+e*.8,i/2+.02,v_(`#ffcf70`)));return o.add(Q(.6,.8,.05,`#4c7a46`,0,.4,i/2+.03)),o};e.add(r(-1.3,2,2,2.2,-.7)),e.add(r(.6,1.6,2.4,2,-.8)),e.add(A_(1.8,this.awningColors(t,n,[`#3f6fa8`,`#fbf3e4`]),-1.3,1,.45)),this.cafeExtras(e,t,n,{x:-1.2,z:1.4,w:2,dogAt:[.4,1.4]}),e.add(Q(.5,.55,5.4,`#9d9891`,1.25,-.2,.6)),e.add(Q(2,.08,.6,t.wood,2.5,-.05,1.8));for(let t of[1.8,3.3])e.add(Q(.12,.6,.12,`#6b4a33`,t,-.25,2.1));for(let[n,r]of[[.3,.9],[.65,1],[.45,1.3]])e.add(Q(.32,.32,.32,t.wood,n,.16,r));let i=x_(3,-.3,-.2,.2);i.add(Q(1.8,.4,.75,`#2f5f8f`,0,.2,0)),i.add(Q(1.82,.1,.77,`#fbf7ef`,0,.32,0)),i.add(Q(.2,.3,.55,`#2f5f8f`,.9,.35,0)),i.add(Q(.6,.45,.55,`#f6efe3`,-.25,.6,0)),i.add(Q(.66,.06,.6,`#c0563f`,-.25,.85,0)),i.add(Q(.06,1.1,.06,t.wood,.35,.95,0)),i.add(Q(.2,.12,.05,`#e8735a`,.45,1.45,0)),this.anims.push(e=>{i.position.y=-.3+Math.sin(e*1.6)*.05,i.rotation.z=Math.sin(e*1.2)*.04}),e.add(this.egg(i,`boat`));let a=()=>{let e=new q;return e.add(Q(.2,.16,.32,`#fbfbfb`,0,.08,0)),e.add(Q(.12,.12,.12,`#fbfbfb`,0,.2,.15)),e.add(Q(.05,.04,.08,`#f4b33d`,0,.18,.24)),e.add(Q(.3,.04,.2,`#9aa2ab`,0,.14,-.02)),e};for(let[t,n]of[[1.8,2.1],[3.3,2.1]]){let r=a();r.position.set(t,.05,n),r.scale.setScalar(1.1),e.add(this.egg(r,`seagull`))}let o=a();if(o.scale.setScalar(1.2),this.anims.push(e=>{let t=e*.5;o.position.set(2.6+Math.cos(t)*1.6,3.2+Math.sin(e*2)*.15,.5+Math.sin(t)*1.6),o.rotation.y=-t}),e.add(this.egg(o,`seagull`)),t.style===`strand`){let t=x_(1.4,0,-2);for(let e=0;e<5;e++)t.add(Q(.8-e*.08,.6,.8-e*.08,e%2?`#fbf7ef`:`#d9473a`,0,.3+e*.6,0));let n=Q(.42,.38,.42,`#fff1b0`,0,3.2,0,v_(`#ffd65a`));t.add(n,Q(.6,.12,.6,`#3b3b44`,0,3.45,0),Q(.3,.2,.3,`#d9473a`,0,3.6,0)),this.anims.push(e=>n.scale.setScalar(1+Math.max(0,Math.sin(e*2.5))*.25)),e.add(this.egg(t,`lighthouse`))}else{let n=x_(1.4,0,-2);n.add(Q(.5,.2,.5,t.wood,0,.1,0)),n.add(Q(.16,2.2,.16,t.wood,0,1.2,0)),n.add(Q(1.8,.14,.14,t.wood,.7,2.25,0)),n.add(Q(.03,.8,.03,`#333`,1.5,1.8,0)),n.add(Q(.36,.3,.36,`#c9a24a`,1.5,1.3,0)),t.style===`japan`&&n.add(Q(.26,.34,.26,`#d9473a`,-.35,.6,0,v_(`#d9473a`))),e.add(n)}}b_bahnhof(e,t,n){e.add(Q(3.4,1.5,1.8,`#efe0c4`,0,.75,-.6));for(let n=0;n<4;n++){let r=2*Math.cos(n/4*(Math.PI/2));e.add(Q(3.5,.24,r,`#a8d4ec`,0,1.62+n*.24,-.6,{transparent:!0,opacity:.8,roughness:.2})),t.winter&&e.add(Q(3.52,.04,r*.9,__,0,1.76+n*.24,-.6))}for(let t of[-1.2,0,1.2])e.add(Q(.08,.98,2.04,`#6b7380`,t,1.98,-.6));e.add(Q(1.3,1,.05,`#bfe2f2`,0,.75,.31,v_(`#9fd3ff`))),e.add(Q(1.5,.12,.08,`#d8c9a8`,0,1.3,.33));for(let n of[-1,1])e.add(k_(t,{w:1,h:1.1,d:1.5,x:n*2.15,z:-.5,wall:`#efe0c4`,roof:t.roof[1]}));let r=x_(0,0,1.55);r.add(Q(6.2,.05,.05,`#6b6b72`,0,.06,-.2),Q(6.2,.05,.05,`#6b6b72`,0,.06,.2));for(let e=0;e<15;e++)r.add(Q(.12,.04,.6,t.wood,-2.9+e*.42,.02,0));e.add(r);let i=x_(-1,0,1.55);for(let e of[-.7,.7]){i.add(Q(1.3,.55,.55,`#f6f2ea`,e,.4,0)),i.add(Q(1.32,.1,.57,`#2f4f8f`,e,.3,0)),i.add(Q(1.32,.05,.57,`#f4c542`,e,.4,0));for(let t=0;t<3;t++)i.add(Q(.26,.16,.57,`#3d5a80`,e-.4+t*.4,.56,0));i.add(Q(1.25,.06,.5,`#9aa2ab`,e,.7,0))}e.add(this.egg(i,`train`,{train:!0})),this.train={g:i,t:-1},this.anims.push((e,t)=>{if(this.train.t<0)return;this.train.t+=t;let n=this.train.t/4;i.position.x=-1+Math.sin(Math.min(1,n)*Math.PI)*4.5,n>=1&&(this.train.t=-1)}),e.add(k_(t,{w:1,h:.95,d:.8,x:1.9,z:.5,wall:t.wall[1],roof:t.roof[0],roofStyle:`flat`})),e.add(A_(1,this.awningColors(t,n,[`#3f6fa8`,`#fbf3e4`]),1.9,.85,.9)),this.cafeExtras(e,t,n,{x:-1.8,z:.55,w:1.2,dogAt:[1,.8]}),e.add(F_(.6,.8,.2),F_(-.6,.85,-.3))}b_park(e,t,n){let r=x_(.7,0,-1);r.add(Q(1.9,.12,1.9,`#d8d1c6`,0,.06,0));for(let[e,t]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]])r.add(Q(.1,1.1,.1,`#fbf7ef`,e,.6,t));r.add(Q(1.2,.5,.5,t.wood,0,.37,.2)),O_(r,t,1.8,1.8,1.15,t.style===`japan`?`#b5473a`:`#7fae9a`,`pyramid`),e.add(r),e.add(A_(1.8,this.awningColors(t,n,[`#7fae9a`,`#fbf3e4`]),.7,.95,-.1)),this.cafeExtras(e,t,n,{x:1.4,z:.6,w:1.4,dogAt:[2,1.4]});let i=[],a=2.4,o=1.6,s=-1.1,c=.9;for(let e=-2.4/2;e<=1.21;e+=.4)i.push({x:s+e,y:.2,z:c-o/2,color:t.wood}),i.push({x:s+e,y:.2,z:1.7000000000000002,color:t.wood});for(let e=-.4;e<o/2;e+=.4)i.push({x:s-a/2,y:.2,z:c+e,color:t.wood}),i.push({x:.09999999999999987,y:.2,z:c+e,color:t.wood});e.add(sd(.08,.4,.08,i));for(let n of[c-o/2,1.7000000000000002])e.add(Q(a,.05,.04,t.wood,s,.3,n));for(let n of[s-a/2,.09999999999999987])e.add(Q(.04,.05,o,t.wood,n,.3,c));let l=Q(.9,.06,.4,`#e8b64c`,-.7000000000000001,.18,.7);if(l.rotation.z=.35,e.add(l),e.add(this.egg(I_(-1.7000000000000002,1.1,.8,{fur:`#3b3b44`,dark:`#fbf7ef`,pattern:`patch`,ears:`up`},.5),`dog`)),e.add(this.egg(I_(-.9000000000000001,1.3,-1.2,{fur:`#e8c49a`},.5),`dog`)),e.add(F_(-2.1,1.1,1.2)),e.add(Q(.8,.08,.3,t.wood,1,.3,1.8),Q(.8,.25,.06,t.wood,1,.45,1.67)),t.season===1&&e.add(this.egg(L_(`icecart`,-1.3,-.9,.6,.3),`icecream`)),t.winter&&e.add(this.egg(L_(`snowman`,-1.4,-.9,.75),`snowman`)),t.season===2){let t=x_(-2,0,-1.2,.6);t.add(Q(.36,.2,.46,`#6b4a33`,0,.12,0),Q(.14,.12,.16,`#d9b38c`,0,.1,.27),Q(.04,.04,.04,`#222`,0,.12,.36));for(let e=0;e<6;e++)t.add(Q(.06,.08,.06,`#4a3326`,-.12+e%3*.12,.25,-.12+Math.floor(e/3)*.16));e.add(this.egg(t,`hedgehog`)),e.add(L_(`leafpile`,-2.4,-.8,.5));let n=x_(-.6,4.4,-.2);n.add(Q(.5,.5,.04,`#e2552e`,0,0,0),Q(.25,.25,.05,`#f4d35e`,0,0,.01)),n.children[0].rotation.z=Math.PI/4,n.children[1].rotation.z=Math.PI/4;for(let e=0;e<5;e++)n.add(Q(.1,.06,.03,[`#3f8fbf`,`#f4d35e`][e%2],.05*e,-.4-e*.18,0));this.anims.push(e=>{n.position.x=-.6+Math.sin(e*.9)*.4,n.rotation.z=Math.sin(e*1.3)*.2}),e.add(this.egg(n,`kite`))}if(t.season<=1)for(let[t,n,r]of[[-.4,-.2,`#f4d35e`],[-1.8,0,`#b9a3e3`]]){let i=x_(t,.9,n),a=Q(.14,.03,.1,r,-.07,0,0),o=Q(.14,.03,.1,r,.07,0,0);i.add(a,o);let s=t*3;this.anims.push(e=>{i.position.set(t+Math.sin(e*.7+s)*.6,.9+Math.sin(e*1.9+s)*.25,n+Math.cos(e*.6+s)*.5),a.rotation.z=Math.sin(e*14)*.8,o.rotation.z=-Math.sin(e*14)*.8}),e.add(this.egg(i,`butterfly`))}}b_bergdorf(e,t,n){let r=this.smokeFn(),i=t.style===`japan`,a=b_(7),o=.72,s=t.winter?1:i?6:5,c=[`#9a958f`,`#aaa59e`,`#8c8781`];for(let t=0;t<10;t++){let n=t/9,r=(i?11.5:10)*(1-n*.9),l=3.6*(1-n*.8),u=-3.7+n*.6,d=o/2+t*o,f=t>=s;if(e.add(Q(r,o,l,f?t%2?`#eef3f6`:`#f7fafc`:c[t%3],0,d,u)),t===s)for(let t=0;t<7;t++){let n=-r/2+(t+.5)*(r/7),i=.25+a()*.35;e.add(Q(r/7+.02,i,.14,__,n,d-o/2-i/2+.02,u+l/2+.07))}if(!f&&t<s-1)for(let n=0;n<3;n++){let i=.4+a()*.4;e.add(Q(i,i*.8,i,c[(n+t)%3],(a()-.5)*r*.85,d+o/2-.1,u+l/2-i/2+.1))}}e.add(Q(.7,.5,.7,__,.2,7.449999999999999,-3.1));for(let[n,r,i]of[[-4.4,-1.4,0],[-4,-2.4,o],[3.9,-2.3,o],[4.4,-1.3,0],[-3.2,-1.1,0]]){let a=P_({...t,tree:`round`,leaves:[`#3f7a4f`]},()=>.1);a.position.set(n,i,r),e.add(a)}e.add(Q(5,.5,1.4,`#a8a398`,0,.25,-1.6)),e.add(Q(5,.08,1.4,t.winter?__:t.grass[0],0,.54,-1.6));let l=(e,n,i)=>k_(t,{w:i,h:1,d:1.1,x:e,y:.55,z:n,wall:`#a0703f`,roof:`#5a3d2b`,roofStyle:t.style===`japan`?`japan`:`gable`,chimney:!0,trim:`#f4d35e`},r);if(i){let n=x_(-1.6,.55,-1.6);for(let e=0;e<3;e++){let r=1.1-e*.22;n.add(Q(r,.5,r,`#c8442f`,0,.25+e*.75,0)),n.add(Q(r+.6,.12,r+.6,`#2f3a48`,0,.56+e*.75,0)),t.winter&&n.add(Q(r+.6,.04,r+.6,__,0,.64+e*.75,0))}n.add(Q(.06,.6,.06,`#c9a24a`,0,2.55,0)),e.add(n)}else e.add(l(-1.6,-1.6,1.3));e.add(l(1.6,-1.65,1.2)),e.add(k_(t,{w:2,h:1.2,d:1.3,z:.1,wall:`#b9844f`,roof:`#5a3d2b`,roofStyle:t.style===`japan`?`japan`:`gable`,door:!0,chimney:!0,trim:`#f4d35e`},r)),e.add(A_(1.8,this.awningColors(t,n,[`#e8913c`,`#fbf3e4`]),0,.95,.75)),this.cafeExtras(e,t,n,{z:1.5,w:2,dogAt:[-1.5,1.2]}),e.add(this.egg(I_(1.7,1.1,-.7,{fur:`#f3e9dc`,dark:`#9a4a22`,pattern:`patch`,ears:`flop`,collar:`#c0563f`},.8),`bernhardiner`)),t.winter&&e.add(this.egg(L_(`sled`,-2.1,.4,.6,.5),`sled`))}extras(e){let t=this.scene,[n,r]=m_;if(e.winter)for(let e of[0,Math.PI]){let i=F_(n,r,0);this.anims.push(t=>{let a=t*.8+e;i.position.set(n+Math.cos(a)*.9,-.1,r+Math.sin(a)*.7),i.rotation.y=-a}),t.add(this.egg(i,`skater`))}else{let i=e.style===`japan`,a=new q;i?a.add(Q(.36,.06,.14,`#f08a3c`,0,0,0),Q(.12,.07,.12,`#fbf7ef`,.1,.01,0)):(a.add(Q(.3,.18,.2,`#f4d35e`,0,.06,0)),a.add(Q(.14,.16,.14,`#f4d35e`,.12,.2,0)),a.add(Q(.08,.04,.08,`#e8913c`,.22,.18,0))),this.anims.push(e=>{let t=e*.4;a.position.set(n+Math.cos(t)*.8,i?-.28:-.32,r+Math.sin(t)*.6),a.rotation.y=-t-Math.PI/2}),t.add(this.egg(a,i?`koi`:`duck`)),e.season!==1&&t.add(Q(.2,.12,.12,`#fbf7ef`,n-.6,-.24,r+.7))}if(e.style===`strand`){let n=x_(4.6,0,10.4),r=e.winter?`#e9e4d6`:`#e2c88f`;n.add(Q(.8,.3,.6,r,0,.15,0));for(let e of[-.3,.3])n.add(Q(.22,.5,.22,r,e,.25,0));n.add(Q(.03,.4,.03,`#6b4a33`,.3,.7,0),Q(.18,.12,.02,`#e2552e`,.39,.84,0)),n.add(Q(.2,.2,.2,`#e2552e`,-.6,.1,.2)),t.add(this.egg(n,`sandcastle`));let i=x_(6.2,0,10);i.add(Q(.3,.12,.22,`#e2552e`,0,.08,0));for(let e of[-1,1])i.add(Q(.1,.08,.08,`#e2552e`,e*.2,.12,.12),Q(.04,.08,.04,`#222`,e*.06,.18,.08));this.anims.push(e=>i.position.x=6.2+Math.sin(e*.8)*.5),t.add(this.egg(i,`crab`));for(let[e,n,r]of[[-3.5,10.5,`#e2552e`],[7,9.6,`#f2b33d`]]){let i=x_(e,0,n);i.add(Q(.06,1.1,.06,`#f2efe9`,0,.55,0),Q(1,.08,1,r,0,1.1,0),Q(.6,.08,.6,`#fbf7ef`,0,1.17,0)),i.add(Q(.5,.03,.9,r===`#e2552e`?`#3f8fbf`:`#e2552e`,.5,.02,.2)),t.add(i)}}e.season===0&&[[-4.2,-2.2,`#f2b8c6`],[4.6,1.6,`#9fd3ff`],[-12.2,.8,`#f4d35e`]].forEach(([e,n,r],i)=>{let a=x_(e,0,n);a.add(Q(.2,.28,.2,r,0,.14,0),Q(.21,.05,.21,`#fbf7ef`,0,.16,0),Q(.14,.06,.14,r,0,.31,0)),t.add(this.egg(a,`osterei`,{eid:i}))})}markers(e,t){let n=this.scene,r=this.ring=new q,i=`#e8913c`,[a,o]=[l_[0]*2+.4,l_[1]*2+.4];r.add(Q(a,.06,.14,i,0,.04,-o/2),Q(a,.06,.14,i,0,.04,o/2)),r.add(Q(.14,.06,o,i,-a/2,.04,0),Q(.14,.06,o,i,a/2,.04,0)),r.traverse(e=>e.castShadow=!1),n.add(r),this.anims.push(e=>{let t=1+Math.sin(e*3)*.015;r.scale.set(t,1,t)}),this.moveRing();for(let r of Object.keys(Qu)){if(!Wm(e,r))continue;let[i,a]=c_[r],o=Q(.4,.4,.4,r===t?`#e8b64c`:`#6f8f7a`,i,u_[r]-.6,a,v_(r===t?`#e8b64c`:`#3f5f4a`));o.rotation.set(Math.PI/4,0,Math.PI/4),o.castShadow=!1,S_(o,{id:r});let s=o.position.y;this.anims.push(e=>{o.position.y=s+Math.sin(e*2.5+i)*.12,o.rotation.y=e}),n.add(o)}}moveRing(){if(!this.ring)return;let[e,t]=c_[this.sel]||[0,0];this.ring.position.set(e,0,t)}makeLabels(){let e=this.game.state,t=Gm(e),n=this.el.querySelector(`.cm-labels`);n.innerHTML=Object.entries(Qu).map(([n,r])=>{let i=Wm(e,n),a=(e.level||1)>=r.level,o=n===t?`★ hier bist du`:i?`✓ Stufe ${Hm(e).sites[n].lvl}`:a?`🔑 zu haben`:`🔒 ab Level ${r.level}`;return`<button class="cm-label ${n===this.sel?`on`:``} ${i?`own`:``}" data-cm="sel:${n}" data-id="${n}"><b>${r.name}</b><small>${o}</small></button>`}).join(``),this.labels=[...n.querySelectorAll(`.cm-label`)]}placeLabels(){if(!this.labels||!this.camera)return;let e=this.renderer.domElement,t=e.clientWidth,n=e.clientHeight,r=new W;for(let e of this.labels){let i=e.dataset.id,[a,o]=c_[i];r.set(a,u_[i],o).applyMatrix4(this.scene.matrixWorld).project(this.camera),e.style.transform=`translate(-50%, -100%) translate(${(r.x+1)/2*t}px, ${(1-r.y)/2*n}px)`}}pick(e){let t=this.renderer.domElement.getBoundingClientRect(),n=new U((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),r=new lo;r.setFromCamera(n,this.camera);let i=r.intersectObjects(this.scene.children,!0).filter(e=>C_(e.object)),a=i.find(e=>e.object.userData.egg||e.object.userData.id)||i[0];if(!a)return;let o=a.object.userData;if(o.egg)return this.clickEgg(o);let s=o.id;if(!s){let e=this.scene.worldToLocal(a.point.clone());s=E_(Math.round(e.x),Math.round(e.z))}s&&this.select(s)}clickEgg(e){let t=e.eggObj,n=e=>this.game.ui?.toast(e,``,2600);if(e.egg===`osterei`)return t.visible=!1,this.easter+=1,n(s_(Math.min(3,this.easter)));if(n(o_(e.egg)),e.train){this.train.t<0&&(this.train.t=0);return}let r=t.userData.y0??(t.userData.y0=t.position.y),i=0,a=(e,n)=>{i+=n,t.position.y=r+Math.sin(Math.min(1,i/.4)*Math.PI)*.35,i>=.4&&(t.position.y=r,this.anims.splice(this.anims.indexOf(a),1))};this.anims.push(a)}select(e){if(Qu[e]){this.sel=e,this.moveRing();for(let t of this.labels||[])t.classList.toggle(`on`,t.dataset.id===e);this.renderInfo()}}renderInfo(){let e=this.game.state,t=this.sel,n=Qu[t],r=Hm(e).sites[t],i=Gm(e),a=1+this.game.bonus(`branch`),o=Object.entries(Qu).map(([n,r])=>`<button class="cm-pick ${n===t?`on`:``}" data-cm="sel:${n}">${r.icon} ${r.name}${Wm(e,n)?n===i?` ★`:` ✓`:``}</button>`).join(``),s=`<h3>${n.icon} ${n.name}</h3><p class="muted">${n.desc}</p>`;s+=`<p>${n.full?`🧑‍🍳 Hier kannst du selbst hinter dem Tresen stehen. Die Filiale hat ein eigenes Gebäude, eigene Möbel und eigene Upgrades.`:`👥 Hier steht dein Team hinter dem Tresen. Du baust die Filiale aus und bekommst jeden Abend deinen Anteil.`}</p>`,t===`stammhaus`&&(s+=`<p class="muted">Selbst bedienen kannst du im Stammhaus und in der Altstadt. Alle anderen Viertel führt dein Team für dich, je mehr du ausbaust, desto mehr bleibt hängen.</p>`),r?(s+=`<p>Stufe ${r.lvl}/${$u.maxLevel}${t===i?` · <b>hier spielst du gerade</b>`:``}</p>`,s+=t===i?`<p class="muted">Solange du hier spielst, kommt der Ertrag aus deinen Gästen.${n.full&&r.last?` Im Hintergrund wären es etwa ${$(Math.max(n.income*(1+.5*(r.lvl-1)),r.last*$u.idleShare)*a)} pro Tag.`:``}</p>`:`<p class="effect">Ertrag pro Tag: ${$(Ym(e,t)*a)}</p>`):t!==`stammhaus`&&(s+=`<p class="effect">${$(n.income*a)} pro Tag</p>`);let c=t===`stammhaus`?`unbekannt`:Jm(e,t),l=[];if(t!==`stammhaus`&&c!==`max`){let n=r?`Ausbauen ${$(qm(e,t))}`:`Eröffnen ${$(qm(e,t))}`,i=c&&c.startsWith(`Level`)?` <span class="lock">🔒 ${c}</span>`:``;l.push(`<button class="btn buy primary" data-cm="buy:${t}" ${c?`disabled`:``}>${n}</button>${i}`)}Qm(e,t)&&l.push(`<button class="btn" data-cm="go:${t}">🚶 Hierhin wechseln</button>`),s+=`<div class="cm-btns">${l.join(``)}</div>`,s+=`<p class="muted">Gesamt im Hintergrund: ${$(this.game.collect.branchIncome())} pro Tag · +${Math.round($u.spawn*100)} % Gäste je Filiale</p>`,this.el.querySelector(`.cm-info`).innerHTML=`<div class="cm-list">${o}</div>${s}`}act(e){let[t,n]=e.split(`:`);if(t===`sel`)return this.select(n);t===`buy`?this.game.collect.buyBranch(n)&&(this.sel=n,this.scene&&this.build(),this.renderInfo()):t===`go`&&this.game.switchSite(n)}},z_=[[1,0],[-1,0],[0,1],[0,-1]],B_=(e,t)=>(e+1)*1024+(t+1);function V_(e,t,n){if(t(e.x,e.z))return[];let r=new Map([[B_(e.x,e.z),null]]),i=[e];for(let a=0;a<i.length;a++){let o=i[a];for(let[a,s]of z_){let c=o.x+a,l=o.z+s,u=B_(c,l);if(r.has(u))continue;if(t(c,l)){let t=[{x:c,z:l}],n=o;for(;n&&(n.x!==e.x||n.z!==e.z);)t.push(n),n=r.get(B_(n.x,n.z));return t.reverse()}if(!n(c,l))continue;let d={x:c,z:l};r.set(u,o),i.push(d)}}return null}var H_=.09,U_=1.75,W_={hund:{pal:{b:`#9cc3d9`,h:`#c08a5a`,d:`#6b4a33`,w:`#f4ead8`,k:`#1e1e1e`},rows:[`bhbbhb`,`bhhhhb`,`bhkhkb`,`bhhwhb`,`bbhkhb`]},tasse:{pal:{c:`#efe3cc`,s:`#b9b0a0`,t:`#ffffff`,k:`#6b4a33`},rows:[`ccsccc`,`csccsc`,`ctkktc`,`ctttct`,`cctccc`]},berge:{pal:{s:`#a9d3ea`,w:`#ffffff`,g:`#7f8c99`,f:`#6f9a5c`,y:`#f2c14e`},rows:[`sssssy`,`sswsss`,`swgwss`,`sgggws`,`ffffff`]},bunt:{pal:{r:`#d65a4a`,y:`#f2c14e`,b:`#4f6d8f`,w:`#f4ead8`,k:`#262626`},rows:[`rrkyyy`,`rrkyyy`,`kkkkkk`,`wwkbbb`,`wwkbbb`]},pfote:{pal:{d:`#3b2f4a`,g:`#d9b443`},rows:[`dgdgdd`,`dddddg`,`dgggdd`,`dgggdd`,`dddddd`]}};function G_(e){let t=W_[e]||W_.hund,n=new q,r=t.rows[0].length,i=t.rows.length,a=r*H_,o=i*H_,s=e===`pfote`?`#d9b443`:`#5a3d2b`;return n.add(Q(a+.1,o+.1,.04,s,0,0,.02,e===`pfote`?{metalness:.6,roughness:.35}:void 0)),t.rows.forEach((e,r)=>{[...e].forEach((e,i)=>{let s=Q(H_,H_,.02,t.pal[e],-a/2+H_/2+i*H_,o/2-H_/2-r*H_,.05);s.castShadow=!1,n.add(s)})}),n}var K_=class{constructor(e){this.game=e,this.world=e.world,this.moving=null,this.groups=new Map,e.state.pictures=Array.isArray(e.state.pictures)?e.state.pictures:[],this.world.onWallsBuilt=()=>this.rebuild(),this.rebuild()}get pending(){return this.moving?.isNew?this.moving.motif:null}get list(){return this.game.state.pictures}wallByKey(e){return this.world.walls.find(t=>t.key===e)}rebuild(){for(let e of this.groups.values())e.parent?.remove(e);this.groups.clear();for(let e of this.list)this.spawn(e);this.moving&&(this.moving.preview.parent?.remove(this.moving.preview),this.moving.target=null)}spawn(e){let t=this.wallByKey(e.wall);if(!t)return;let n=G_(e.motif);n.position.set(e.u,e.y??U_,.12),n.userData.picId=e.id,t.g.add(n),this.groups.set(e.id,n)}bonus(){return this.list.reduce((e,t)=>e+(Ou[t.motif]?.cozy||.02),0)}count(){return this.list.length}makePreview(e){let t=G_(e);t.traverse(e=>{e.isMesh&&(e.material=e.material.clone(),e.material.transparent=!0,e.material.opacity=.7,e.castShadow=!1)});let n=W_[e]||W_.hund,r=Q(n.rows[0].length*H_+.26,n.rows.length*H_+.26,.02,`#5cc46b`,0,0,-.01);return r.material=r.material.clone(),r.material.transparent=!0,r.material.opacity=.85,r.castShadow=!1,t.add(r),t.userData.ring=r,t.visible=!1,t}startMove(e,t,n=null){this.moving={motif:e,isNew:t,id:n,preview:this.makePreview(e),target:null},this.world.wallsUp=!0,this.game.ui.updateEditBar()}buy(e,t=!1){let n=Ou[e],r=this.game.state,i=this.game.ui,a=e=>t?null:i.toast(e);if(r.level<(n.level||1))return a(`🔒 ${n.name} gibt es ab Level ${n.level}.`);if(r.money<n.cost)return a(`Dafür reicht das Geld nicht.`);if(this.list.length>=12)return a(`🖼️ Mehr als 12 Bilder machen die Wände zu unruhig.`);this.game.furniture.cancel(),this.dropPreview(!0),this.startMove(e,!0)}dropPreview(e=!0){let t=this.moving;if(t){if(t.preview.parent?.remove(t.preview),e&&!t.isNew){let e=this.groups.get(t.id);e&&(e.visible=!0)}this.moving=null}}cancel(){return this.moving?(this.dropPreview(!0),this.resetWalls(),this.game.ui.updateEditBar(),!0):!1}liveWalls(){return this.world.walls.filter(e=>e.g.scale.y>.6)}hover(e){let t=this.moving;if(!t)return;let n=this.liveWalls(),r=this.world.raycastFirst(e,n.map(e=>e.g)),i=r&&this.wallOf(r.object),a=i&&n.find(e=>e.g===i);if(!a){t.preview.visible=!1,t.target=null;return}let o=a.g.worldToLocal(r.point.clone()).x,s=this.nearSlot(a,o,t.id),c=s!==null,l=a.len/2-.5,u=c?s:Math.max(-l,Math.min(l,Math.round(o*2)/2));t.preview.parent!==a.g&&a.g.add(t.preview),t.preview.position.set(u,U_,.14),t.preview.userData.ring.material.color.set(c?`#5cc46b`:`#e05a4a`),t.preview.visible=!0,t.target=c?{w:a,x:s}:null}click(e){let t=this.moving;if(t){if(this.hover(e),Mf()&&t.target){let e=t.tapTarget;if(!e||e.w!==t.target.w||Math.abs(e.x-t.target.x)>.3)return t.tapTarget={...t.target},!0}return t.target?this.place(t.target.w,t.target.x):this.game.ui.toast(`Klick auf eine freie Stelle an der Wand.`),!0}let n=this.liveWalls(),r=this.world.raycastFirst(e,n.map(e=>e.g));if(!r)return!1;let i=r.object;for(;i&&i.userData.picId===void 0;)i=i.parent;return i?(this.pickUp(i.userData.picId),!0):!1}pickUp(e){let t=this.list.find(t=>t.id===e);if(!t)return;this.game.furniture.cancel();let n=this.groups.get(e);n&&(n.visible=!1),this.startMove(t.motif,!1,e)}wallOf(e){let t=e;for(;t&&!this.world.walls.some(e=>e.g===t);)t=t.parent;return t}slot(e,t,n=null){let r=e.len/2-.5,i=Math.max(-r,Math.min(r,Math.round(t*2)/2));return(e.openings||[]).some(e=>Math.abs(e.c-i)<e.w/2+.35&&2.05>e.y0&&1.45<e.y1)||e.key===`back`&&(Math.abs(i-1)<2.4||Math.abs(i+3.6)<1.1||i>3)||this.list.some(t=>t.id!==n&&t.wall===e.key&&Math.abs(t.u-i)<.7)?null:i}nearSlot(e,t,n=null){for(let r of[0,.5,-.5,1,-1]){let i=this.slot(e,t+r,n);if(i!==null)return i}return null}place(e,t){let n=this.moving,r=Ou[n.motif];if(n.isNew){if(this.game.state.money<r.cost){this.game.ui.toast(`Dafür reicht das Geld nicht.`);return}this.game.pay(r.cost,`einrichtung`);let i={id:this.game.state.nextId++,motif:n.motif,wall:e.key,u:t};this.list.push(i),this.spawn(i),this.game.ui.toast(`🖼️ ${r.name} hängt.`)}else{let r=this.list.find(e=>e.id===n.id),i=this.groups.get(n.id);i?.parent?.remove(i),this.groups.delete(n.id),r&&(r.wall=e.key,r.u=t,this.spawn(r))}this.game.audio?.blip?.(660,.08,.05),this.game.save(),this.dropPreview(!1),n.isNew&&this.buy(n.motif,!0),this.moving||this.resetWalls(),this.game.ui.updateEditBar()}sell(){let e=this.moving;if(!e)return!1;if(e.isNew)return this.cancel();let t=e.id,n=this.list.find(e=>e.id===t);if(this.dropPreview(!1),n){let e=Math.round((Ou[n.motif]?.cost||0)*.5);this.game.state.pictures=this.list.filter(e=>e.id!==t);let r=this.groups.get(t);r?.parent?.remove(r),this.groups.delete(t),this.game.earn(e,`moebelverkauf`),this.game.ui.toast(`🖼️ ${Ou[n.motif]?.name||`Bild`} verkauft, +${e} €`),this.game.save()}return this.resetWalls(),this.game.ui.updateEditBar(),!0}resetWalls(){let e=this.game.furniture;this.world.wallsUp=!!(e.edit&&e.wallsPref)}update(){let e=this.moving&&!this.moving.isNew?this.moving.id:null;for(let t of this.world.walls){let n=t.g.scale.y>.6;for(let r of t.g.children)r.userData.picId!==void 0&&(r.visible=n&&r.userData.picId!==e)}}},q_={metalness:.55,roughness:.4};function J_(e,t,n,r,i){let a=new q;a.add(Q(e*2,t,e*1.2,n,0,r,0,i)),a.add(Q(e*1.2,t,e*2,n,0,r,0,i));let o=Q(e*1.65,t,e*1.65,n,0,r,0,i);return o.rotation.y=Math.PI/4,a.add(o),a}function Y_(){let e=new q;e.add(J_(.42,.06,`#e9e4dc`,.77,{roughness:.3})),e.add(Q(.05,.05,.6,`#c9c2b6`,0,.805,0,{roughness:.3})),e.add(Q(.06,.72,.06,`#2b2b2b`,0,.38,0,q_));for(let t of[0,Math.PI/2]){let n=Q(.56,.04,.06,`#2b2b2b`,0,.03,0,q_);n.rotation.y=t+Math.PI/4,e.add(n)}return e.add(Q(.1,.12,.1,`#ffffff`,.18,.86,-.16)),e.add(Q(.12,.03,.12,`#d4a72c`,.18,.935,-.16,q_)),e}function X_(){let e=new q;e.add(Q(.9,.08,.9,`#d8b98a`,0,.76,0));for(let t of[-.3,-.1,.1,.3])e.add(Q(.012,.081,.88,`#c4a271`,t,.761,0));for(let[t,n]of[[-.36,-.36],[.36,-.36],[-.36,.36],[.36,.36]])e.add(Q(.1,.72,.1,`#bf9a68`,t,.36,n));return e.add(Q(.8,.1,.06,`#bf9a68`,0,.66,-.36)),e.add(Q(.8,.1,.06,`#bf9a68`,0,.66,.36)),e.add(Q(.3,.012,.92,`#f4efe6`,0,.806,0)),e.add(Q(.3,.012,.04,`#c86a5a`,0,.807,.3)),e.add(Q(.3,.012,.04,`#c86a5a`,0,.807,-.3)),e.add(Q(.1,.14,.1,`#7d97b3`,0,.88,0)),e.add(Q(.03,.12,.03,`#4c7a46`,0,1,0)),e.add(Q(.07,.06,.07,`#9b7fc4`,0,1.08,0)),e}function Z_(){let e=new q;e.add(Q(.92,.04,.82,`#f6f6f3`,0,.78,0,{roughness:.35})),e.add(Q(.94,.02,.84,`#c79a63`,0,.75,0));for(let[t,n]of[[-.34,-.3],[.34,-.3],[-.34,.3],[.34,.3]]){let r=Q(.05,.76,.05,`#c79a63`,t,.37,n);r.rotation.z=t<0?.08:-.08,r.rotation.x=n<0?-.08:.08,e.add(r)}return e.add(Q(.14,.03,.14,`#1d1d1d`,-.2,.815,.18)),e.add(Q(.06,.2,.06,`#1d1d1d`,.22,.9,-.2,q_)),e.add(Q(.02,.18,.02,`#4c7a46`,.22,1.08,-.2)),e}function Q_(){let e=new q,t=`#2b2b2b`;e.add(Q(.44,.05,.44,`#c9a46a`,0,.45,0));for(let t of[-.12,0,.12])e.add(Q(.02,.051,.42,`#a7834e`,t,.451,0));for(let[n,r]of[[-.18,-.18],[.18,-.18],[-.18,.18],[.18,.18]]){let i=Q(.035,.44,.035,t,n,.21,r,q_);i.rotation.z=n<0?.07:-.07,e.add(i)}e.add(Q(.4,.03,.03,t,0,.14,.18,q_)),e.add(Q(.4,.03,.03,t,0,.14,-.18,q_));for(let n of[-.18,.18])e.add(Q(.035,.5,.035,t,n,.72,-.2,q_));e.add(Q(.4,.04,.04,t,0,.96,-.2,q_)),e.add(Q(.4,.04,.04,t,0,.74,-.2,q_));for(let n of[-.08,.08]){let r=Q(.03,.2,.03,t,n,.85,-.2,q_);r.rotation.z=n<0?.35:-.35,e.add(r)}return e}function $_(){let e=new q,t=`#f1ece2`;e.add(Q(.48,.07,.48,t,0,.44,0)),e.add(Q(.4,.06,.4,`#c86a5a`,0,.5,.02));for(let t of[-.1,.1])e.add(Q(.03,.061,.4,`#f4efe6`,t,.502,.02));for(let[n,r]of[[-.19,-.19],[.19,-.19],[-.19,.19],[.19,.19]])e.add(Q(.07,.42,.07,t,n,.21,r));for(let n of[-.19,.19])e.add(Q(.07,.62,.07,t,n,.78,-.21));for(let n of[.66,.8,.94])e.add(Q(.36,.06,.04,t,0,n,-.21));return e}function ev(){let e=new q,t=`#e9e6df`;e.add(Q(.46,.05,.44,t,0,.46,0,{roughness:.4})),e.add(Q(.46,.06,.06,t,0,.44,.2,{roughness:.4}));let n=Q(.46,.42,.05,t,0,.7,-.2,{roughness:.4});n.rotation.x=-.18,e.add(n);for(let n of[-.23,.23]){let r=Q(.04,.2,.34,t,n,.53,-.06,{roughness:.4});e.add(r)}for(let[t,n]of[[-.17,-.15],[.17,-.15],[-.17,.15],[.17,.15]]){let r=Q(.04,.46,.04,`#c79a63`,t,.21,n);r.rotation.z=t<0?.12:-.12,r.rotation.x=n<0?-.12:.12,e.add(r)}return e.add(Q(.03,.03,.3,`#1d1d1d`,-.17,.2,0,q_)),e.add(Q(.03,.03,.3,`#1d1d1d`,.17,.2,0,q_)),e}var tv={table:{bistro:Y_,landhaus:X_,modern:Z_},chair:{bistro:Q_,landhaus:$_,modern:ev}};function nv(e,t){return t&&tv[e]?.[t]||null}var rv=new Map;function iv(e,t){let n=`${e.uuid}|${t.id}`;if(!rv.has(n)){let r=e.clone();r.color.set(t.hex),t.metal&&(r.metalness=.6,r.roughness=.35),rv.set(n,r)}return rv.get(n)}var av=class{constructor(e){this.game=e,this.world=e.world,this.items=new Map,this.lamps=[],this.edit=!1,this.moving=null,this.lastTile={x:5,z:5},this.paint=`natur`,this.style=`klassisch`,this.marker=new Qr(new Wi(.96,.96),new Br({color:`#5cc46b`,transparent:!0,opacity:.45,depthWrite:!1})),this.marker.rotation.x=-Math.PI/2,this.marker.position.y=.03,this.marker.visible=!1,this.world.scene.add(this.marker);for(let t of e.state.furniture)this.spawn(t)}build(e){let t=Du[e.type],n=(nv(e.type,e.style)||nf[e.type])();return n.userData.fid=e.id,this.applyPaint(n,e),this.world.scene.add(n),{data:e,group:n,def:t,occupant:null}}applyPaint(e,t){let n=ku[t.type],r=ju(t.paint);if(!n||!r.hex)return;let i=n.slice(1).toLowerCase();e.traverse(e=>{e.isMesh&&e.material.color&&e.material.color.getHexString()===i&&(e.material=iv(e.material,r))})}costOf(e){return e.data.cost||e.def.cost}spawn(e){let t=this.build(e);return this.items.set(e.id,t),this.solid=null,this.applyTransform(t),t.group.userData.light&&this.lamps.push(t.group.userData.light),t}applyTransform(e,t=e.data.x,n=e.data.z,r=e.data.rot){e.group.position.copy(this.world.tileToWorld(t,n)),e.group.rotation.y=r*Math.PI/2}inBounds(e,t){return e>=0&&e<Z.w&&t>=0&&t<Z.d}isReserved(e,t){return t===0||t===eu.z&&e>=eu.x0&&e<=eu.x1||e===Ql.x&&t===Ql.z||e===$l.x&&t===$l.z}solidAt(e,t){if(!this.solid){this.solid=new Map;for(let e of this.items.values()){let t=(e.data.x+1)*1024+(e.data.z+1);!e.def.walkable&&!this.solid.has(t)&&this.solid.set(t,e)}}return this.solid.get((e+1)*1024+(t+1))||null}itemAt(e,t){let n=null;for(let r of this.items.values())if(r.data.x===e&&r.data.z===t){if(!r.def.walkable)return r;n=r}return n}canPlace(e,t,n){if(!this.inBounds(t,n)||this.isReserved(t,n))return!1;for(let r of this.items.values())if(r!==e&&r.data.x===t&&r.data.z===n&&!!r.def.walkable==!!e.def.walkable)return!1;return!0}freeChairs(){let e=[];for(let t of this.items.values())t.def.seat&&!t.occupant&&this.moving?.it!==t&&e.push(t);return e}decoBonus(){let e=0;for(let t of this.items.values())(t.def.deco||t.def.cozy)&&(e+=t.def.cozy??.02);return e+=this.game.pictures?.bonus()||0,Math.min(Bu,e)}decoCount(){let e=0;for(let t of this.items.values())(t.def.deco||t.def.cozy)&&e++;return e+(this.game.pictures?.count()||0)}toyCount(){let e=0;for(let t of this.items.values())t.def.toy&&e++;return Math.min(3,e)}setLampIntensity(e){for(let t of this.lamps)t.intensity=e}setEdit(e){e||this.cancel(),e||this.game.pictures?.cancel(),this.world.wallsUp=e&&!!this.wallsPref,this.edit=e,this.marker.visible=!1,this.world.grid.visible=e,this.game.ui.updateEditBar()}hover(e){let t=this.world.pickTile(e);if(!t||!this.inBounds(t.x,t.z)){this.marker.visible=!1;return}this.lastTile=t;let n=this.world.tileToWorld(t.x,t.z);if(this.marker.position.x=n.x,this.marker.position.z=n.z,this.moving){let e=this.canPlace(this.moving.it,t.x,t.z);this.marker.material.color.set(e?`#5cc46b`:`#e05a4a`),this.marker.visible=!0,this.applyTransform(this.moving.it,t.x,t.z,this.moving.rot)}else{let e=this.itemAt(t.x,t.z);this.marker.material.color.set(`#f2c14e`),this.marker.visible=!!e}}click(e){if(!this.moving&&this.game.pictures?.click(e))return;let t=this.world.pickTile(e);if(this.moving){let n=this.moving.tapTile;if(Mf()&&t&&!(n&&n.x===t.x&&n.z===t.z)){this.hover(e),this.moving.tapTile=t,this.tapHinted||(this.tapHinted=!0,this.game.ui.toast(`Gleiche Stelle nochmal antippen zum Abstellen.`));return}t&&this.canPlace(this.moving.it,t.x,t.z)?this.place(t):this.game.ui.toast(`Hier ist kein Platz.`);return}let n=null,r=this.world.pick(e,[...this.items.values()].map(e=>e.group));if(r){let e=r;for(;e&&e.userData.fid===void 0;)e=e.parent;e&&(n=this.items.get(e.userData.fid))}!n&&t&&(n=this.itemAt(t.x,t.z)),n&&(n.occupant?this.game.ui.toast(`Da sitzt gerade jemand.`):(this.moving={it:n,isNew:!1,rot:n.data.rot,rotated:!1},this.game.ui.updateEditBar()))}place(e){let t=this.moving,n=t.it;if(t.isNew){if(this.game.state.money<this.costOf(n)){this.game.ui.toast(`Dafür reicht das Geld nicht.`);return}this.game.pay(this.costOf(n),`einrichtung`),this.game.state.furniture.push(n.data),this.game.onboardEv?.(`furnish`),this.items.set(n.data.id,n),n.group.userData.light&&this.lamps.push(n.group.userData.light)}n.data.x=e.x,n.data.z=e.z,n.data.rot=t.rot,this.solid=null,n.def.seat&&!t.rotated&&this.autoOrient(n),this.applyTransform(n),this.moving=null,this.game.audio.blip(660),this.game.save(),this.game.ui.updateEditBar(),t.isNew&&this.buy(n.data.type,!0)}autoOrient(e){for(let[t,n]of[[1,0],[-1,0],[0,1],[0,-1]]){let r=this.solidAt(e.data.x+t,e.data.z+n);if(r&&r.data.type===`table`){e.data.rot=(Math.round(Math.atan2(t,n)/(Math.PI/2))%4+4)%4;return}}}rotate(){this.moving&&(this.moving.rot=(this.moving.rot+1)%4,this.moving.rotated=!0,this.applyTransform(this.moving.it,this.lastTile.x,this.lastTile.z,this.moving.rot))}cancel(){let e=this.moving;e&&(e.isNew?this.world.scene.remove(e.it.group):this.applyTransform(e.it),this.moving=null,this.marker.visible=!1,this.game.ui.updateEditBar())}sell(){let e=this.moving;if(!e)return;if(e.isNew)return this.cancel();let t=e.it,n=Math.round(this.costOf(t)*.5);this.game.earn(n,`moebelverkauf`),this.game.state.furniture=this.game.state.furniture.filter(e=>e.id!==t.data.id),this.items.delete(t.data.id),this.solid=null,this.world.scene.remove(t.group),t.group.userData.light&&(this.lamps=this.lamps.filter(e=>e!==t.group.userData.light)),this.moving=null,this.marker.visible=!1,this.game.ui.toast(`${t.def.name} verkauft, +${n} €`),this.game.save(),this.game.ui.updateEditBar()}buy(e,t=!1){let n=Du[e];if(this.game.pictures?.cancel(),n.season!==void 0&&this.game.seasons.index()!==n.season){t||this.game.ui.toast(`${n.icon} ${n.name} gibt es nur im ${zu[n.season]}.`);return}if(this.game.state.level<(n.level||1)){t||this.game.ui.toast(`🔒 ${n.name} gibt es ab Level ${n.level}.`);return}if(Lu(e)&&this.game.state.level<(Iu(this.style).level||1)){t||this.game.ui.toast(`🔒 Stil ${Iu(this.style).name} gibt es ab Level ${Iu(this.style).level}.`);return}let r=Ru(e,this.paint,this.style);if(this.game.state.money<r){t||this.game.ui.toast(`Dafür reicht das Geld nicht.`);return}this.cancel();let i={id:this.game.state.nextId++,type:e,x:this.lastTile.x,z:this.lastTile.z,rot:0};Nu(e)&&this.paint!==`natur`&&(i.paint=this.paint,i.cost=r),Lu(e)&&this.style!==`klassisch`&&(i.style=this.style,i.cost=r);let a=this.build(i);this.moving={it:a,isNew:!0,rot:0,rotated:!1},this.applyTransform(a,this.lastTile.x,this.lastTile.z,0),this.game.ui.updateEditBar()}},ov=new URL(`g_kurier-hJJeJefV.jpg`,import.meta.url).href,sv=new URL(`g_laptop-DtdWbE_7.jpg`,import.meta.url).href,cv=new URL(`g_oma-BRH698om.jpg`,import.meta.url).href,lv=new URL(`g_podcast-B8_XChdf.jpg`,import.meta.url).href,uv=new URL(`g_studentin-MhxmMYsi.jpg`,import.meta.url).href,dv=new URL(`g_yoga-TuJIicDe.jpg`,import.meta.url).href,fv=new URL(`h_corgi-DgestJsT.jpg`,import.meta.url).href,pv=new URL(`h_dackel-DAgtpiMJ.jpg`,import.meta.url).href,mv=new URL(`h_golden-B43nJ3pK.jpg`,import.meta.url).href,hv=new URL(`h_keks-8g2BcKa_.jpg`,import.meta.url).href,gv=new URL(`h_mops-CKXvZFtU.jpg`,import.meta.url).href,_v=new URL(`h_pudel-BTCAbAdW.jpg`,import.meta.url).href,vv=new URL(`j_eiskaffee-B08SGBJn.jpg`,import.meta.url).href,yv=new URL(`j_kirschbluete-DUlO3fSi.jpg`,import.meta.url).href,bv=new URL(`j_kuerbis-CH87LP8B.jpg`,import.meta.url).href,xv=new URL(`j_laub-BdUK0kIR.jpg`,import.meta.url).href,Sv=new URL(`j_schnee-DGVelEdv.jpg`,import.meta.url).href,Cv=new URL(`j_silvester-Bs-AXJiG.jpg`,import.meta.url).href,wv=new URL(`k_aethiopien-BJfx3X9A.jpg`,import.meta.url).href,Tv=new URL(`k_brasilien-pk_9i9Bx.jpg`,import.meta.url).href,Ev=new URL(`k_guatemala-DTtpVRwE.jpg`,import.meta.url).href,Dv=new URL(`k_kenia-BB8xJQdZ.jpg`,import.meta.url).href,Ov=new URL(`k_kolumbien-Be6ZnYpc.jpg`,import.meta.url).href,kv=new URL(`k_sumatra-syXo0Jsr.jpg`,import.meta.url).href,Av=new URL(`m_antrag-CFbtZfzI.jpg`,import.meta.url).href,jv=new URL(`m_latteart-DdrKFWEc.jpg`,import.meta.url).href,Mv=new URL(`m_party-BGMcYDRv.jpg`,import.meta.url).href,Nv=new URL(`m_regen-BHcxYQI1.jpg`,import.meta.url).href,Pv=new URL(`m_strom-Cu9_PZp4.jpg`,import.meta.url).href,Fv=new URL(`m_vollmond-DvkLU0t3.jpg`,import.meta.url).href,Iv=new URL(`r_affogato-BVm4G8ss.jpg`,import.meta.url).href,Lv=new URL(`r_buch-CIgYJpu_.jpg`,import.meta.url).href,Rv=new URL(`r_chai-C_dWFSXB.jpg`,import.meta.url).href,zv=new URL(`r_crema-BHQNs9R5.jpg`,import.meta.url).href,Bv=new URL(`r_hafer-Be-7nL10.jpg`,import.meta.url).href,Vv=new URL(`r_zimt-CHK3ahKr.jpg`,import.meta.url).href,Hv={};for(let[e,t]of Object.entries(Object.assign({"./cards/g_kurier.jpg":ov,"./cards/g_laptop.jpg":sv,"./cards/g_oma.jpg":cv,"./cards/g_podcast.jpg":lv,"./cards/g_studentin.jpg":uv,"./cards/g_yoga.jpg":dv,"./cards/h_corgi.jpg":fv,"./cards/h_dackel.jpg":pv,"./cards/h_golden.jpg":mv,"./cards/h_keks.jpg":hv,"./cards/h_mops.jpg":gv,"./cards/h_pudel.jpg":_v,"./cards/j_eiskaffee.jpg":vv,"./cards/j_kirschbluete.jpg":yv,"./cards/j_kuerbis.jpg":bv,"./cards/j_laub.jpg":xv,"./cards/j_schnee.jpg":Sv,"./cards/j_silvester.jpg":Cv,"./cards/k_aethiopien.jpg":wv,"./cards/k_brasilien.jpg":Tv,"./cards/k_guatemala.jpg":Ev,"./cards/k_kenia.jpg":Dv,"./cards/k_kolumbien.jpg":Ov,"./cards/k_sumatra.jpg":kv,"./cards/m_antrag.jpg":Av,"./cards/m_latteart.jpg":jv,"./cards/m_party.jpg":Mv,"./cards/m_regen.jpg":Nv,"./cards/m_strom.jpg":Pv,"./cards/m_vollmond.jpg":Fv,"./cards/r_affogato.jpg":Iv,"./cards/r_buch.jpg":Lv,"./cards/r_chai.jpg":Rv,"./cards/r_crema.jpg":zv,"./cards/r_hafer.jpg":Bv,"./cards/r_zimt.jpg":Vv})))Hv[e.split(`/`).pop().replace(/\.[^.]+$/,``)]=t;var Uv=new W;function Wv(e,t){let n=Math.floor(e/5),r=xu(e);if(r>t)return`<div class="ms">⭐ Alle Meilensteine erreicht (+${n} Bonusstufen)</div>`;let i=Math.round(e%5/5*100);return`<div class="ms">⭐ Meilenstein bei Stufe ${r}: +1 Bonusstufe${n?` · schon ${n}`:``}<div class="pbar"><i style="width:${i}%"></i></div></div>`}var Gv=`
  <div class="bubbles"></div>
  <div class="topbar">
    <div class="stat"><span class="ico">💰</span><b id="money"></b></div>
    <div class="stat level">
      <span class="ico">⭐</span><span>Level <b id="lvl"></b></span>
      <div class="xpbar"><i id="xpfill"></i></div>
    </div>
    <div class="stat"><span class="ico" id="clockIco">☀️</span><span id="clock"></span></div>
    <div class="stat season" id="season"></div>
    <button class="btn round" id="btnSave" title="Spielstand speichern">💾</button>
  </div>
  <div class="quests"><h4>📋 Tagesziele</h4><div class="qlist"></div></div>
  <div class="photohint">📷 Fotomodus · P speichert ein Bild · F beendet</div>
  <div class="actions">
    <button class="btn" data-panel="upgrades" title="Upgrades">🛠️<span class="lbl"> Upgrades</span></button>
    <button class="btn" data-panel="personal" title="Personal">🧑‍🍳<span class="lbl"> Personal</span></button>
    <button class="btn" data-panel="hunde" title="Hunde">🐶<span class="lbl"> Hunde</span></button>
    <button class="btn" data-panel="sammeln" title="Sammeln">🏆<span class="lbl"> Sammeln</span><i class="dot hidden" id="colDot"></i></button>
    <button class="btn" id="btnEdit" title="Einrichten">🪑<span class="lbl"> Einrichten</span></button>
    <button class="btn" data-panel="werte" title="Café-Werte">📊<span class="lbl"> Werte</span></button>
    <div class="music">
      <button class="btn round" id="btnMusic" title="Musik">🎵</button>
      <div class="music-pop">
        <div class="mp-styles">${Object.entries(ap).map(([e,t])=>`<button class="btn small" data-mstyle="${e}">${t.icon} ${t.name}</button>`).join(``)}</div>
        <div class="mp-song"><button class="btn small round" data-msong="-1" title="Vorheriger Song">⏮</button><span id="songName"></span><button class="btn small round" data-msong="1" title="Nächster Song">⏭</button></div>
        <label>🔊 <input type="range" id="vol" min="0" max="1" step="0.05"></label>
      </div>
    </div>
    <button class="btn round" id="btnMenu" title="Menü (Esc)">☰</button>
  </div>
  <aside class="drawer hidden">
    <header><h2 id="drawerTitle"></h2><button class="btn round close">✕</button></header>
    <div class="drawer-body"></div>
  </aside>
  <div class="editbar hidden">
    <div class="edit-tools"><span class="et-label" title="Gilt für Tische und Stühle">Stil <b id="styleName">Klassisch</b></span><div class="style-pick"></div><span class="et-label" title="Gilt für Sessel, Teppich, Hundebett und Lampe">Farbe <b id="paintName">Original</b></span><div class="paints"></div><button class="btn small" id="btnWalls" title="Wände im Einrichten-Modus hochstellen">🧱 Wände</button></div>
    <div class="shop"></div>
    <div class="edit-actions">
      <span class="edit-hint"></span>
      <button class="btn" id="btnRotate">↻ Drehen (R)</button>
      <button class="btn" id="btnSell">Verkaufen (Entf)</button>
      <button class="btn primary" id="btnDone">Fertig</button>
    </div>
  </div>
  <div class="orders"></div>
  <div class="hint hidden"></div>
  <button class="ob-bulb hidden" title="Einführung ein- und ausblenden">💡</button>
  <div class="onboard hidden"><span class="ob-ico"></span><span class="ob-text"></span><button class="btn small ob-ok hidden">Verstanden</button><button class="btn small round ob-skip" title="Einführung ausblenden">✕</button></div>
  <div class="night hidden">
    <div class="card">
      <div class="night-head"><h2>🌙 Feierabend</h2><span class="ap" id="nightAp"></span>
        <button class="btn" id="btnNightMin" title="Übersicht einklappen und dich um Hunde, Deko und Ausbau kümmern">🏠 Café ansehen</button>
        <button class="btn primary" id="btnNewDay">☀️ Tag starten</button></div>
      <div class="night-body"></div>
      <div class="night-foot"><span id="nightLeft" class="muted">Die Nacht dauert, bis du den Tag startest. Nichts zu tun? Einfach direkt starten.</span></div>
    </div>
    <div class="night-bar"><span>🌙 Feierabend</span>
      <button class="btn" id="btnNightMax">📒 Übersicht öffnen</button>
      <button class="btn primary" id="btnNewDay2">☀️ Tag starten</button></div>
  </div>
  <div class="packview hidden"><div class="pack-inner"></div></div>
  <div class="toasts"></div>
`,Kv=class{constructor(e){this.game=e,this.root=document.getElementById(`ui`),this.root.innerHTML=Gv,this.$=e=>this.root.querySelector(e),this.bubbleMap=new Map,this.panel=null,this.hudT=0,this.btnT=0,this.dogT=0,this.dogTab=`mine`,this.colTab=`karten`,this.breedSel={w:null,m:null},this.dogHtml=``,this.pressing=!1,this.bind(),this.buildShop()}bind(){let e=this.game;this.root.querySelectorAll(`[data-panel]`).forEach(e=>e.addEventListener(`click`,()=>this.togglePanel(e.dataset.panel))),this.$(`.drawer .close`).addEventListener(`click`,()=>this.closePanel()),this.$(`.ob-ok`).addEventListener(`click`,()=>e.onboardEv(`ack`)),this.$(`.ob-bulb`).addEventListener(`click`,()=>{this.obOpen=!this.obOpen,this.updateOnboard()}),this.$(`.ob-skip`).addEventListener(`click`,()=>{qg(e.state),this.updateOnboard(),e.save()});let t=this.$(`.drawer-body`);t.addEventListener(`click`,t=>{let n=t.target.closest(`[data-col]`);if(n&&!n.disabled){this.colAction(n.dataset.col),this.renderPanel();return}let r=t.target.closest(`[data-dog]`);if(r&&!r.disabled){this.dogAction(r.dataset.dog),this.renderPanel();return}let i=t.target.closest(`button[data-action]`);i&&e.buy(i.dataset.action)&&this.renderPanel()}),t.addEventListener(`pointerdown`,()=>this.pressing=!0),window.addEventListener(`pointerup`,()=>setTimeout(()=>this.pressing=!1,0)),this.$(`#btnEdit`).addEventListener(`click`,()=>e.toggleEdit()),this.$(`#btnRotate`).addEventListener(`click`,()=>e.furniture.rotate()),this.$(`#btnSell`).addEventListener(`click`,()=>e.pictures.sell()||e.furniture.sell()),this.$(`#btnDone`).addEventListener(`click`,()=>e.toggleEdit(!1)),this.$(`#btnNewDay`).addEventListener(`click`,()=>e.openCafe()),this.$(`#btnNewDay2`).addEventListener(`click`,()=>e.openCafe()),this.$(`#btnNightMin`).addEventListener(`click`,()=>this.$(`.night`).classList.add(`min`)),this.$(`#btnNightMax`).addEventListener(`click`,()=>{this.$(`.night`).classList.remove(`min`),this.renderNight()}),this.$(`#btnSave`).addEventListener(`click`,()=>{e.save(),this.toast(`💾 Gespeichert. Das Spiel speichert außerdem alle 10 Sekunden von selbst.`)});let n=this.$(`.night-body`);n.addEventListener(`click`,e=>{let t=e.target.closest(`[data-eve]`);t&&!t.disabled&&this.nightAction(t.dataset.eve)}),n.addEventListener(`pointerdown`,()=>this.pressing=!0),this.$(`.packview`).addEventListener(`click`,()=>this.$(`.packview`).classList.add(`hidden`)),this.$(`.drawer-body`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-card]`);t&&this.panel===`sammeln`&&this.showCard(t.dataset.card)});let r=this.$(`#vol`);r.value=e.state.music.vol,r.addEventListener(`input`,()=>e.setVolume(parseFloat(r.value))),this.$(`#btnMusic`).addEventListener(`click`,()=>e.toggleMusic()),this.$(`.music-pop`).addEventListener(`click`,t=>{let n=t.target.closest(`[data-mstyle]`);n&&e.setMusicStyle(n.dataset.mstyle);let r=t.target.closest(`[data-msong]`);r&&e.nextSong(parseInt(r.dataset.msong,10))}),this.$(`#btnMenu`).addEventListener(`click`,()=>e.menu?.showPause()),this.updateMusicButton()}buildShop(){let e=this.$(`.shop`);e.innerHTML=Object.entries(Du).map(([e,t])=>`<button class="shop-item" data-buy="${e}"><span class="si-ico">${t.icon}</span><span>${t.name}</span><b>${t.cost} €</b><small class="si-lock"></small></button>`).join(``)+Object.entries(Ou).map(([e,t])=>`<button class="shop-item pic" data-pic="${e}"><span class="si-ico">${t.icon}</span><span>${t.name}</span><b>${t.cost} €</b><small class="si-lock"></small></button>`).join(``),e.addEventListener(`click`,e=>{let t=e.target.closest(`[data-buy]`);t&&this.game.furniture.buy(t.dataset.buy);let n=e.target.closest(`[data-pic]`);n&&this.game.pictures.buy(n.dataset.pic)}),this.$(`#btnWalls`).addEventListener(`click`,()=>{let e=this.game.furniture;e.wallsPref=!e.wallsPref,this.game.world.wallsUp=e.edit&&e.wallsPref,this.updateEditBar()});let t=this.$(`.paints`);t.innerHTML=Au.map(e=>`<button class="paint${e.hex?``:` orig`}" data-paint="${e.id}" title="${e.name}${e.extra?` (+${Math.round(e.extra*100)} %)`:``}" style="${e.hex?`background:${e.hex}`:``}">${e.extra?`<i>★</i>`:``}</button>`).join(``),t.addEventListener(`click`,e=>{let t=e.target.closest(`[data-paint]`);t&&(this.game.furniture.paint=t.dataset.paint,this.refreshButtons())});let n=this.$(`.style-pick`);n.innerHTML=Fu.map(e=>`<button class="stylebtn" data-style="${e.id}" title="${e.name}${e.extra?` (+${Math.round(e.extra*100)} %)`:``}">${e.icon}<span>${e.name}</span></button>`).join(``),n.addEventListener(`click`,e=>{let t=e.target.closest(`[data-style]`);t&&!t.disabled&&(this.game.furniture.style=t.dataset.style,this.refreshButtons())})}updateHud(){let e=this.game.state;if(this.$(`#money`).textContent=$(e.money),this.lastMoney!==void 0&&e.money>this.lastMoney+.5){let e=this.$(`#money`);e.classList.remove(`bump`),e.offsetWidth,e.classList.add(`bump`)}this.lastMoney=e.money,this.$(`#money`).classList.toggle(`neg`,e.money<0),this.$(`#lvl`).textContent=e.level,this.$(`#xpfill`).style.width=`${Math.min(100,e.xp/Vu(e.level)*100)}%`;let t=e.clock;if(t.phase===`day`){let n=iu.openHour*60+t.t/iu.dayMs*(iu.closeHour-iu.openHour)*60,r=String(Math.floor(n/60)).padStart(2,`0`),i=String(Math.floor(n%60)).padStart(2,`0`);this.$(`#clockIco`).textContent=n>=(iu.closeHour-1.5)*60?`🌇`:`☀️`;let a=t.t>=iu.dayMs;a&&(this.$(`#clockIco`).textContent=`🔒`),this.$(`#clock`).textContent=a?`Tag ${e.day} · ${r}:${i} Uhr · geschlossen`:`Tag ${e.day} · ${r}:${i} Uhr`}else this.$(`#clockIco`).textContent=`🌙`,this.$(`#clock`).textContent=`Tag ${e.day} · Feierabend`}updateSeason(){let e=this.game,t=e.seasons.season(),n=e.seasons.event(),r=e.state.seasons.stars,i=`<span class="ico">${t.icon}</span><span>${t.name}, noch ${e.seasons.daysLeft()} T.</span>${n?`<span class="evt" title="${n.desc}">${n.icon} ${n.name}</span>`:``}${r?`<span class="stars">${`⭐`.repeat(r)}</span>`:``}`,a=this.$(`#season`);a.innerHTML!==i&&(a.innerHTML=i)}updateQuests(){let e=this.game.state.evening.stock,t=this.game.quests.html()+`<div class="stock" title="Vorräte: Premium-Bohnen, Kuchen, Hundefutter. Nachkaufen im Feierabend unter Einkauf.">🧺 Vorrat <span>🫘 ${e.beans}</span><span>🍰 ${e.cake}</span><span>🦴 ${e.food}</span></div>`,n=this.$(`.qlist`);n.innerHTML!==t&&(n.innerHTML=t)}updateMusicButton(){this.$(`#btnMusic`).classList.toggle(`off`,!this.game.state.music.on);let e=this.game.audio.info?.();e&&(this.$(`#songName`).textContent=e.name,this.$(`#btnMusic`).title=`Musik: ${e.styleName}, ${e.name}`,this.root.querySelectorAll(`[data-mstyle]`).forEach(t=>t.classList.toggle(`primary`,t.dataset.mstyle===e.style)))}syncBubbles(e){let t=this.$(`.bubbles`),n=new Set;if(!this.bubbleRO&&Mf()&&typeof ResizeObserver<`u`){let e=new WeakMap;this.bubbleOf=e,this.bubbleRO=new ResizeObserver(t=>{for(let n of t){let t=e.get(n.target);if(!t)continue;let r=n.borderBoxSize?.[0];t.w=r?r.inlineSize:n.target.offsetWidth,t.h=r?r.blockSize:n.target.offsetHeight}}),window.addEventListener(`resize`,()=>this.bArea=null)}for(let r of e){let e=this.bubbleMap.get(r.key);if(!e){let n=document.createElement(`div`);e={el:n,html:null,cls:null,onClick:null,anchor:null,dy:0,tf:null,hidden:!1,ax:0,ay:0,ox:0,oy:0,w:0,h:0,tail:``},n.addEventListener(`pointerdown`,e=>e.stopPropagation()),n.addEventListener(`click`,t=>{t.stopPropagation(),e.onClick&&e.onClick()}),t.appendChild(n),this.bubbleMap.set(r.key,e),this.bubbleRO&&(this.bubbleOf.set(n,e),this.bubbleRO.observe(n))}e.onClick=r.onClick||null,e.anchor=r.anchor,e.dy=r.dy||0,e.html!==r.html&&(e.el.innerHTML=r.html,e.html=r.html);let i=`bubble ${r.cls||``}${r.onClick?` clickable`:``}`;e.cls!==i&&(e.el.className=i,e.cls=i),n.add(r.key)}for(let[e,t]of this.bubbleMap)n.has(e)||(this.bubbleRO?.unobserve(t.el),t.el.remove(),this.bubbleMap.delete(e))}bubbleArea(){if(this.bArea)return this.bArea;let e=window.innerWidth,t=this.$(`.topbar`)?.getBoundingClientRect(),n=this.$(`.actions`)?.getBoundingClientRect(),r={l:t?.width?t.left-4:4,r:n?.width?n.left-6:e-4,t:t?.height?t.bottom+4:4,vw:e};return t?.width&&n?.width&&(this.bArea=r),r}project(e){let t=e.clone().project(this.game.world.camera);return{x:(t.x+1)/2*window.innerWidth,y:(1-t.y)/2*window.innerHeight,behind:t.z>1}}positionBubbles(){let e=this.game.world.camera,t=window.innerWidth,n=window.innerHeight,r=this.bubbleRO?[]:null;for(let i of this.bubbleMap.values()){Uv.copy(i.anchor),Uv.y+=i.dy,Uv.project(e);let a=Uv.z>1;a!==i.hidden&&(i.el.style.display=a?`none`:``,i.hidden=a),i.ax=Math.round((Uv.x+1)/2*t),i.ay=Math.round((1-Uv.y)/2*n),r&&!a&&i.w&&r.push(i)}if(r?.length){Ff(r,this.bubbleArea());for(let e of r){let t=Math.max(0,e.w/2-12),n=`${Math.round(Math.min(Math.max(-e.ox,-t),t))}px`;n!==e.tail&&(e.el.style.setProperty(`--bx`,n),e.tail=n)}}for(let e of this.bubbleMap.values()){let t=`translate(${e.ax+Math.round(e.ox)}px, ${e.ay+Math.round(e.oy)}px) translate(-50%, -100%)`;t!==e.tf&&(e.el.style.transform=t,e.tf=t)}}floatText(e,t,n=``){let r=this.project(e);if(r.behind)return;let i=document.createElement(`div`);i.className=`float ${n}`,i.textContent=t,i.style.left=`${r.x}px`,i.style.top=`${r.y}px`,this.$(`.bubbles`).appendChild(i),setTimeout(()=>i.remove(),1600)}toast(e,t=``,n=3200){let r=document.createElement(`div`);r.className=`toast ${t}`,r.textContent=Pf(e),this.$(`.toasts`).appendChild(r),setTimeout(()=>r.classList.add(`out`),n),setTimeout(()=>r.remove(),n+400)}updateOrders(){let e=this.game.orders.map(e=>{let t=cu.find(t=>t.id===e.coffee),n=e.status===`ready`?`✅`:e.status===`brewing`?`⏳`:`🕒`;return`<span class="chip ${e.status}"><i style="background:${t.color}"></i>${t.name}${e.cake?e.cake===`ready`?` 🍰✅`:` 🍰`:``} ${n}</span>`}).join(``),t=this.$(`.orders`);t.innerHTML!==e&&(t.innerHTML=e)}updateHint(){let e=this.game,t=this.$(`.hint`),n=``;e.state.totals.served<3&&e.state.clock.phase===`day`&&!e.furniture.edit&&(n=e.orders.some(e=>e.status===`ready`&&e.cake!==`wanted`&&e.cake!==`slicing`)?`Kaffee fertig! Klicke beim Gast auf „☕ Servieren“.`:e.orders.some(e=>e.status===`queued`)&&!e.machines.every(e=>e.order)?`Klicke auf die Kaffeemaschine (oder Leertaste), um zu brühen.`:e.cakeWanted().length?`Ein Gast will Kuchen. Hol ihn an der Vitrine („🍰 holen“) und serviere ihn mit dem Kaffee.`:e.guests.some(e=>e.state===`waitOrder`)?`Ein Gast wartet. Klicke auf „💬 Bestellen“.`:e.machineBusy()?`Der Kaffee läuft durch…`:document.documentElement.classList.contains(`phone`)?`Gleich kommen die ersten Gäste. Wischen dreht die Kamera, zwei Finger zoomen.`:`Gleich kommen die ersten Gäste. Ziehen dreht die Kamera, Mausrad zoomt.`),n=Pf(n),t.textContent=n,t.classList.toggle(`hidden`,!n)}updateOnboard(){let e=this.game,t=this.$(`.onboard`),n=this.$(`.ob-bulb`),r=e.state.clock.phase===`day`&&!e.furniture.edit?Ug(e.state):null;n.classList.toggle(`hidden`,!r),r&&t.dataset.step!==r.id&&(this.obOpen=!0),t.classList.toggle(`hidden`,!r||!this.obOpen),n.classList.toggle(`on`,!!r&&!this.obOpen),n.classList.toggle(`open`,!!r&&!!this.obOpen),r&&t.dataset.step!==r.id&&(t.dataset.step=r.id,t.querySelector(`.ob-ico`).textContent=r.icon,t.querySelector(`.ob-text`).textContent=Pf(r.text),t.querySelector(`.ob-ok`).classList.toggle(`hidden`,r.ev!==`ack`))}togglePanel(e){if(this.panel===e)return this.closePanel();this.panel=e,e===`sammeln`&&this.game.onboardEv(`collect`),this.$(`.drawer`).classList.remove(`hidden`),this.renderPanel()}closePanel(){this.panel=null,this.$(`.drawer`).classList.add(`hidden`)}renderPanel(){let e=this.game.state,t=this.$(`.drawer-body`);if(this.panel===`werte`)this.$(`#drawerTitle`).textContent=`📊 Café-Werte`,t.innerHTML=this.werteHtml();else{if(this.panel===`upgrades`){this.$(`#drawerTitle`).textContent=Lf(`🛠️ Upgrades`);let n=Object.entries(yu).map(([t,n])=>{let r=e.upgrades[t]||0,i=r>=n.max;return e.level<(n.level||1)?`<div class="card-item locked"><div class="ci-ico">${n.icon}</div>
              <div class="ci-main"><b>${n.name}</b><div class="muted">${n.desc}</div></div>
              <span class="lock">🔒 Level ${n.level}</span></div>`:`<div class="card-item">
            <div class="ci-ico">${n.icon}</div>
            <div class="ci-main"><b>${n.name}</b> <span class="muted">Stufe ${r}/${n.max}</span>
              <div class="muted">${n.desc}</div>
              <div class="effect">${r?n.effect(bu(r)):`Noch nicht ausgebaut`}${i?``:` → ${n.effect(bu(r+1))}`}</div>
              ${n.max>=5?Wv(r,n.max):``}
            </div>
            ${i?`<span class="done">Max</span>`:`<button class="btn buy" data-action="upgrade:${t}">${$(n.cost(r))}</button>`}
          </div>`}).join(``),r=cu.filter(t=>!_u(t)&&e.coffees.includes(t.id)),i=null,a=cu.filter(_u).concat(r).map(t=>{let n=t.cat||`kaffee`,r=n!==i&&_u(t)?`<h4 class="cathead">${pu[n].icon} ${pu[n].name}</h4>`:``;_u(t)&&(i=n);let a=e.coffees.includes(t.id),o;return o=a?`<span class="done">Auf der Karte</span>`:e.level<t.level?`<span class="lock">🔒 Level ${t.level}</span>`:`<button class="btn buy" data-action="coffee:${t.id}">${$(t.cost)}</button>`,`${r}<div class="card-item">
          <div class="ci-ico"><i class="cdot" style="background:${t.color}"></i></div>
          <div class="ci-main"><b>${t.name}</b>${t.desc?` <span class="muted small">${t.desc}</span>`:``}<div class="muted">${$(t.price)} · ${t.brew} s Zubereitung</div></div>
          ${o}
        </div>`}).join(``),o=e.totals,s=e.expansion||0;t.innerHTML=`<h3>Anbau</h3>${Zl.map((t,n)=>{let r;return r=n<s?`<span class="done">Gebaut</span>`:n>s?`<span class="lock">🔒 erst vorherige Stufe</span>`:e.level<t.level?`<span class="lock">🔒 Level ${t.level}</span>`:`<button class="btn buy" data-action="expand:${n}">${$(t.cost)}</button>`,`<div class="card-item"><div class="ci-ico">${t.icon}</div>
          <div class="ci-main"><b>${t.name}</b><div class="muted">${t.desc}</div></div>${r}</div>`}).join(``)}<h3>Café</h3>${n}<h3>Karte</h3>${a}
        <h3>Statistik</h3>
        <div class="statgrid"><span>Gäste bedient</span><b>${o.served}</b><span>Umsatz gesamt</span><b>${$(o.earned)}</b><span>Gäste verloren</span><b>${o.lost}</b><span>Sterne der Kritik</span><b>${e.seasons.stars}/5</b></div>`}else if(this.panel===`personal`){this.$(`#drawerTitle`).textContent=Lf(`🐶 Personal`);let n=e=>{let t=Eu.personalities[e.pers]||{},n=Cm(e.xp),r=wm(e.xp),i=r?`${Math.floor(e.xp)} / ${r} XP`:`Höchste Stufe`,a=Wh[e.breed]?.name||``,o=``;e.spec?o=`<div class="effect">${pu[e.spec]?.icon||``} Spezialisiert auf ${pu[e.spec]?.name||e.spec}</div>`:Em(e)?o=`<div class="spec-pick">${Object.entries(pu).map(([t,n])=>`<button class="btn small" data-action="spec:${e.id}:${t}" title="${n.name}">${n.icon}</button>`).join(``)}</div>`:e.role===`barista`&&(o=`<div class="muted small">Spezialisierung ab Stufe ${Eu.specLevel}</div>`);let s=e.role===`barista`?` · brüht mit ${`⭐`.repeat(km(e,e.spec||`kaffee`))}`:``;return`<div class="pup"><b>🐶 ${e.name}</b> <span class="muted small">${a}</span>
          <div class="muted small">${t.icon||``} ${t.name||``} (${t.desc||``}) · Stufe ${n} · ${i}${s} · Lohn ${$(jm(e))}</div>${o}</div>`};t.innerHTML=`<p class="muted">Welpen arbeiten automatisch, kosten aber jeden Abend Lohn. Bis zu ${Eu.maxPerRole} Welpen je Rolle. Mit jeder Aufgabe sammeln sie Erfahrung.</p>`+Object.entries(wu).map(([t,r])=>{let i=gm(e,t),a;a=i.length>=Eu.maxPerRole?`<span class="done">Team voll</span>`:e.level<r.level?`<span class="lock">🔒 Level ${r.level}</span>`:`<button class="btn buy" data-action="hire:${t}">${$(vm(t,i.length))}</button>`;let o=i.length===1?`<div class="muted small">Ein zweiter Welpe arbeitet mit und macht die Rolle stärker.</div>`:``;return`<div class="card-item">
              <div class="ci-ico">${r.icon}</div>
              <div class="ci-main"><b>${r.name}</b><div class="muted">${r.desc}</div><div class="effect">Grundlohn ${$(r.wage)} pro Tag</div>${i.map(n).join(``)}${o}</div>
              ${a}
            </div>`}).join(``)}else if(this.panel===`sammeln`){this.$(`#drawerTitle`).textContent=`🏆 Sammeln`;let e=this.collectHtml();e===this.colHtml&&t.querySelector(`.coltabs`)||(t.innerHTML=e,this.colHtml=e)}else if(this.panel===`hunde`){this.$(`#drawerTitle`).textContent=`🐶 Hunde`;let e=this.dogsHtml();e===this.dogHtml&&t.querySelector(`.dogtabs`)||(t.innerHTML=e,this.dogHtml=e)}this.refreshButtons()}}werteHtml(){let e=this.game,t=e.state,n=e=>`${e>=0?`+`:`−`}${Math.round(Math.abs(e)*100)} %`,r=e=>`×${e.toFixed(2).replace(`.`,`,`)}`,i=(t,r=[])=>{let i=[...r,...e.bonusParts(t)].filter(([,e])=>Math.abs(e)>1e-4);return i.length?`<ul class="wparts">${i.map(([e,t])=>`<li><span>${e}</span><b>${n(t)}</b></li>`).join(``)}</ul>`:`<p class="muted small">Noch keine Boni.</p>`},a=(e,t,n,r,i)=>`<div class="wblock"><div class="whead"><span>${e} ${t}</span><b>${n}</b></div>${r?`<div class="muted small">${r}</div>`:``}${i}</div>`,o=e.evening,s=t.evening.campaign&&mg[t.evening.campaign],c=e.furniture.decoBonus(),l=e.dogs.tipBonus(),u=.12*bu(t.upgrades.ambience||0),d=t.evening.stock,f=(t.crew||[]).map(e=>[e.id,{icon:`🐶`,name:`${e.name} (${wu[e.role]?.name||e.role})`,wage:jm(e)}]),p={xp:[`⭐`,`Erfahrung`],offline:[`🌙`,`Offline-Ertrag`],luck:[`🍀`,`Glück bei Päckchen`],litter:[`🐣`,`Wurfgröße`],cakePrice:[`🧁`,`Kuchenpreis`]};return`
      <p class="muted">Alles, was gerade auf dein Café wirkt, im Vergleich zu einem Café ganz ohne Boni.</p>
      ${a(`👥`,`Gäste-Andrang`,r(o.spawnMult()),`Wie oft neue Gäste kommen.`,i(`spawn`,s?[[`📣 Kampagne heute: ${s.name}`,s.boost*(1+e.bonus(`marketing`))]]:[]))}
      ${a(`⏳`,`Geduld`,r(e.patienceMult()),`Wie lange Gäste auf Bestellung und Kaffee warten.`,i(`patience`,[[`🪴 Deko (${e.furniture.decoCount()} Stück, max. ${n(Bu)})`,c],[`🎶 Ambiente-Upgrade`,u]]))}
      ${a(`🫙`,`Trinkgeld`,r(o.tipMult()*(1+l)),`Dazu zählt, wie schnell du bedienst.`,i(`tip`,[[`🐶 Zufriedene Hunde (${e.dogs.list.length})`,l]]))}
      ${a(`💶`,`Preise`,r(Cu(t.upgrades.grinder)+e.bonus(`price`)),`Premium-Bohnen und Trend-Sorte geben je +25 % obendrauf.`,i(`price`,[[`⚙️ Mühle`,Cu(t.upgrades.grinder)-1]]))}
      ${a(`☕`,`Brühzeit`,r(Su(t.upgrades.machine)*o.brewMult()),`Kleiner ist schneller.`,i(`brew`,[[`☕ Maschine`,Su(t.upgrades.machine)-1]]))}
      ${a(`🍰`,`Kuchen-Chance`,`${Math.round((gg.chance+e.bonus(`cake`))*100)} %`,`Wie oft ein Gast Kuchen dazu nimmt, solange welcher da ist.`,i(`cake`))}
      ${a(`🐾`,`Hundelaune`,r(o.moodMult()),`Wie schnell die Laune der Hunde sinkt. Kleiner ist besser.`,i(`mood`))}
      ${Object.keys(p).filter(t=>Math.abs(e.bonus(t))>1e-4).map(t=>a(p[t][0],p[t][1],t===`litter`?`+${Math.round(e.bonus(t))}`:n(e.bonus(t)),``,i(t))).join(``)}
      <div class="wblock"><div class="whead"><span>🧺 Vorräte</span></div>
        <div class="muted small">Vorräte sind freiwillig. Ohne sie läuft das Café ganz normal, sie geben nur Extras. Nachkaufen im Feierabend unter Einkauf.</div>
        <ul class="wparts">
          <li><span>🫘 Premium-Bohnen (+25 % je Kaffee)</span><b>${d.beans} Portionen</b></li>
          <li><span>🍰 Kuchen (hält nur einen Tag)</span><b>${d.cake} Stück</b></li>
          <li><span>🦴 Futtersack (statt ${$(Zu.food)} je Mahlzeit)</span><b>${d.food} Portionen</b></li>
        </ul></div>
      <div class="wblock"><div class="whead"><span>🧑‍🍳 Personal und Öffnungszeit</span><b>${$(e.wages())} / Tag</b></div>
        <div class="muted small">Geöffnet ${String(iu.openHour).padStart(2,`0`)}:00 bis ${String(iu.closeHour).padStart(2,`0`)}:00 Uhr (${iu.hours} h). Löhne zählen anteilig zur Öffnungszeit.</div>
        <ul class="wparts">${f.length?f.map(([,e])=>`<li><span>${e.icon} ${e.name}</span><b>${$(e.wage*iu.hours/8)}</b></li>`).join(``):`<li><span>Noch kein Personal</span><b></b></li>`}</ul></div>`}dogAction(e){let t=this.game.dogs,[n,r]=e.split(`:`),i=Number(r);n===`tab`?this.dogTab=r:n===`feed`?t.feed(i):n===`pet`?t.pet(i):n===`list`?t.list_(i):n===`selw`?this.breedSel.w=this.breedSel.w===i?null:i:n===`selm`?this.breedSel.m=this.breedSel.m===i?null:i:n===`breed`?t.breed(this.breedSel.w,this.breedSel.m)&&(this.breedSel={w:null,m:null}):n===`buy`?t.buyOffer(i):n===`accept`?t.acceptBid(i):n===`decline`&&t.declineBid(i),this.game.save()}dogSwatch(e){return`<i class="dogdot" style="background:${e.traits.fur};border-color:${e.traits.dark}"></i>`}sexTag(e){return e.sex===`w`?`<span class="sex" style="color:#d6457a">♀ Hündin</span>`:`<span class="sex" style="color:#2f7fc4">♂ Rüde</span>`}dogMeta(e){let t=e.stage===`puppy`?`Welpe, Tag ${e.growth}/${Zu.growDays}`:`erwachsen`,n=e.traits.rare?` · <span class="rare">✨ ${e.traits.rare}</span>`:``;return`${ag(e.mix)} · ${t} · ${Kh[e.temper].name}${n}`}needBar(e,t){let n=Math.round(t*20)*5;return`<div class="need"><span>${e}</span><div class="pbar"><i class="${n<30?`low`:n<60?`mid`:``}" style="width:${n}%"></i></div></div>`}dogsHtml(){let e=this.game.state,t=this.game.dogs,n=`<div class="dogtabs">${[[`mine`,`Meine Hunde`],[`zucht`,`Zucht`],[`markt`,`Pfotenmarkt`]].map(([e,t])=>`<button class="dogtab${this.dogTab===e?` on`:``}" data-dog="tab:${e}">${t}</button>`).join(``)}</div>`;if(this.dogTab===`mine`){let r=Math.round(t.tipBonus()*100);n+=`<p class="muted">Plätze ${t.list.length}/${t.slots()}${e.litter?` (+${e.litter.size} Welpen unterwegs)`:``} · Trinkgeld-Bonus +${r} %. Jedes Hundebett gibt einen Platz mehr.</p>`,n+=t.list.map(n=>{let r=!n.mascot&&n.stage===`adult`,i=e.market.bids.filter(e=>e.dogId===n.id).length;return`<div class="card-item dog">
            <div class="ci-ico">${this.dogSwatch(n)}</div>
            <div class="ci-main"><b>${n.name} ${this.sexTag(n)}</b>${n.mascot?` <span class="tag">Maskottchen</span>`:``}${n.listed?` <span class="tag sell">inseriert${i?`, ${i} Gebot${i>1?`e`:``}`:``}</span>`:``}
              <div class="muted">${this.dogMeta(n)}</div>
              ${this.needBar(`Hunger`,n.hunger)}${this.needBar(`Laune`,n.mood)}
              <div class="dog-btns">
                <button class="btn buy" data-dog="feed:${n.id}">🍖 Füttern ${t.feedCost()}</button>
                <button class="btn buy" data-dog="pet:${n.id}">💕 Streicheln</button>
                ${r&&t.marketOpen()?`<button class="btn buy" data-dog="list:${n.id}">${n.listed?`Zurückziehen`:`📮 Inserieren`}</button>`:``}
              </div>
              <div class="effect">Wert ca. ${$(ug(n))}</div>
            </div>
          </div>`}).join(``)}else if(this.dogTab===`zucht`){let r=(e,t)=>`<button class="dogchip${this.breedSel[t]===e.id?` on`:``}" data-dog="sel${t}:${e.id}">${this.dogSwatch(e)}${e.name}<small>${ag(e.mix)}</small></button>`,i=t.list.filter(e=>e.sex===`w`&&e.stage===`adult`),a=t.list.filter(e=>e.sex===`m`&&e.stage===`adult`),o=t.byId(this.breedSel.w),s=t.byId(this.breedSel.m),c=t.canBreed(o,s),l=``;if(o&&s){let e={};for(let t of[o,s])for(let[n,r]of Object.entries(t.mix))e[n]=(e[n]||0)+r/2;l=`<p class="effect">Welpen werden ${ag(e)} (1 bis 3 Welpen, Merkmale gemischt, selten eine besondere Fellfarbe).</p>`}n+=`<p class="muted">Wähle eine erwachsene Hündin und einen Rüden. Beide müssen satt und gut gelaunt sein. Der Wurf kommt am nächsten Morgen.</p>
        <h3>Hündinnen</h3><div class="chips">${i.map(e=>r(e,`w`)).join(``)||`<span class="muted">Keine erwachsene Hündin</span>`}</div>
        <h3>Rüden</h3><div class="chips">${a.map(e=>r(e,`m`)).join(``)||`<span class="muted">Kein erwachsener Rüde${t.marketOpen()?`. Schau auf den Pfotenmarkt.`:`. Ab Level ${Zu.marketLevel} gibt es den Pfotenmarkt.`}</span>`}</div>
        ${l}
        ${c?`<p class="warn">${c}</p>`:``}
        <button class="btn primary" data-dog="breed" ${c?`disabled`:``}>💞 Verpaaren</button>
        ${e.litter?`<p class="effect">Ein Wurf mit ${e.litter.size} Welpen kommt morgen früh.</p>`:``}`}else if(!t.marketOpen())n+=`<p class="lock">🔒 Der Pfotenmarkt öffnet ab Level ${Zu.marketLevel}.</p><p class="muted">Dort kannst du Hunde kaufen und eigene Hunde an nette Familien vermitteln.</p>`;else{n+=`<h3>Angebote heute</h3>`,n+=e.market.offers.length?e.market.offers.map(n=>`<div class="card-item dog">
            <div class="ci-ico">${this.dogSwatch(n.dog)}</div>
            <div class="ci-main"><b>${n.dog.name} ${this.sexTag(n.dog)}</b><div class="muted">${this.dogMeta(n.dog)}</div><div class="muted">von ${n.seller}</div></div>
            <button class="btn buy" data-dog="buy:${n.dog.id}" ${e.money<n.price||t.freeSlots()<1?`disabled`:``}>${$(n.price)}</button>
          </div>`).join(``):`<p class="muted">Heute keine Angebote mehr. Morgen gibt es neue.</p>`,t.freeSlots()<1&&(n+=`<p class="warn">Kein freier Platz. Stell ein Hundebett auf.</p>`);let r=t.list.filter(e=>e.listed);n+=`<h3>Deine Inserate</h3>`,r.length||(n+=`<p class="muted">Inseriere erwachsene Hunde unter „Meine Hunde“. Dann melden sich Interessenten.</p>`);for(let t of r){let r=e.market.bids.filter(e=>e.dogId===t.id);n+=`<div class="listing"><b>${this.dogSwatch(t)}${t.name}</b> <span class="muted">Wert ca. ${$(ug(t))}</span>`,n+=r.length?r.map(e=>`<div class="bid"><div><b>${e.buyer}</b> bietet <b>${$(e.amount)}</b><div class="muted">„${e.msg}“ · noch ${Math.max(10,Math.ceil(e.ttl/10)*10)} s</div></div>
              <div class="bid-btns"><button class="btn buy primary" data-dog="accept:${e.id}">Annehmen</button><button class="btn buy" data-dog="decline:${e.id}">Nein</button></div></div>`).join(``):`<div class="muted">Noch keine Gebote, bitte etwas Geduld.</div>`,n+=`</div>`}}return n}refreshButtons(){this.root.querySelectorAll(`.drawer-body button[data-action]`).forEach(e=>{e.disabled=!this.game.canBuy(e.dataset.action)}),this.game.furniture&&this.updatePaints(),this.root.querySelectorAll(`.shop-item[data-pic]`).forEach(e=>{let t=Ou[e.dataset.pic],n=this.game.state.level<(t.level||1);e.disabled=n||this.game.state.money<t.cost,e.classList.toggle(`active`,this.game.pictures?.pending===e.dataset.pic);let r=n?`🔒 Level ${t.level}`:`Wandbild, Geduld +${Math.round(t.cozy*100)} %`,i=e.querySelector(`.si-lock`);i.textContent!==r&&(i.textContent=r)}),this.root.querySelectorAll(`.shop-item[data-buy]`).forEach(e=>{let t=Du[e.dataset.buy],n=t.season!==void 0&&this.game.seasons.index()!==t.season,r=n||this.game.state.level<(t.level||1),i=Ru(e.dataset.buy,this.game.furniture.paint,this.game.furniture.style);e.disabled=r||this.game.state.money<i;let a=e.querySelector(`b`),o=`${i} €`;a.textContent!==o&&(a.textContent=o),e.classList.toggle(`unpaintable`,this.game.furniture.paint!==`natur`&&!Nu(e.dataset.buy)&&!Lu(e.dataset.buy)),e.classList.toggle(`hidden`,n);let s=r?`🔒 Level ${t.level}`:t.season===void 0?t.cozy?`Geduld +${Math.round(t.cozy*100)} %`:t.toy?`Hunde froh`:``:`nur im ${zu[t.season]}`,c=e.querySelector(`.si-lock`);c.textContent!==s&&(c.textContent=s)})}updatePaints(){let e=this.game.furniture.paint;this.root.querySelectorAll(`.paint`).forEach(t=>t.classList.toggle(`active`,t.dataset.paint===e));let t=ju(e);this.$(`#paintName`).textContent=t.extra?`${t.name} +${Math.round(t.extra*100)} %`:t.name;let n=this.game.state.level,r=this.game.furniture.style;this.root.querySelectorAll(`.stylebtn`).forEach(e=>{let t=Iu(e.dataset.style);e.classList.toggle(`active`,t.id===r),e.disabled=n<(t.level||1),e.title=e.disabled?`${t.name}: ab Level ${t.level}`:`${t.name}${t.extra?` (+${Math.round(t.extra*100)} %)`:``}`});let i=Iu(r);this.$(`#styleName`).textContent=i.extra?`${i.name} +${Math.round(i.extra*100)} %`:i.name}updateEditBar(){let e=this.game.furniture;this.$(`.editbar`).classList.toggle(`hidden`,!e.edit),this.$(`#btnEdit`).classList.toggle(`active`,e.edit);let t=e.moving,n=this.game.pictures?.moving,r=n?.isNew?n.motif:null;this.$(`#btnWalls`).classList.toggle(`active`,!!e.wallsPref),this.$(`#btnRotate`).disabled=!t,this.$(`#btnSell`).disabled=!t&&!n,this.$(`#btnSell`).textContent=Pf(r||t&&t.isNew?`Abbrechen (Esc)`:`Verkaufen (Entf)`),this.root.querySelectorAll(`.shop-item[data-pic]`).forEach(e=>e.classList.toggle(`active`,r===e.dataset.pic)),this.$(`.edit-hint`).textContent=Pf(n?n.isNew?`${Ou[n.motif].name} aufhängen, ${Ou[n.motif].cost} € beim Aufhängen`:`${Ou[n.motif].name} umhängen, Klick auf eine freie Stelle an der Wand`:t?t.isNew?`${t.it.def.name} platzieren, ${e.costOf(t.it)} € beim Abstellen`:`${t.it.def.name} verschieben, Klick auf ein freies Feld`:`Möbelstück anklicken oder im Shop kaufen`)}showNight(){this.nightTab=`bilanz`,this.nightHtml=``,this.$(`.night`).classList.remove(`hidden`,`min`),this.renderNight()}forecast(){let e=this.game,t=(iu.dayMs-iu.dayMs/iu.hours/12)/1e3,n=e.state.evening.planned&&mg[e.state.evening.planned],r=1+e.bonus(`spawn`)+(n?n.boost*(1+e.bonus(`marketing`)):0),i=Math.round(t*r/Hu(e.state.level)),a=0;for(let t of e.furniture.items.values())t.def.seat&&a++;let o=25+14*(e.seasons?.drinkMult?.()||1);return{expected:i,seats:a,capacity:Math.round(a*t/o)}}hideNight(){this.$(`.night`).classList.add(`hidden`),this.$(`.night`).classList.remove(`min`)}nightAction(e){let t=this.game.evening,[n,r]=e.split(`:`);if(n===`tab`)this.nightTab=r;else if(n===`camp`)t.plan(r);else if(n===`sup`)t.supply(r);else if(n===`base`)this.lab.base=this.lab.base===r?null:r;else if(n===`aroma`)this.lab.aroma=this.lab.aroma===r?null:r;else if(n===`brew`){let e=t.experiment(this.lab.base,this.lab.aroma);e&&(this.lab={base:null,aroma:null,result:e})}else n===`res`?t.research(r):n===`analyse`?t.analyse():n===`xmas`?this.game.seasons.xmasMarket():n===`sdrink`&&this.game.seasons.unlockDrink(r);this.game.save(),this.renderNight()}renderNight(){let e=this.game.state,t=this.game.evening,n=e.evening,r=this.nightTab||`bilanz`;this.$(`#nightAp`).innerHTML=`⚡ Energie <b>${n.ap}/${t.apMax()}</b>`;let i=[[`bilanz`,`📒 Bilanz`],[`marketing`,`📣 Marketing`],[`einkauf`,`🧺 Einkauf`],[`rezepte`,`🧪 Rezepte`],[`forschung`,`🔬 Forschung`],[`markt`,`📊 Markt`]].map(([e,t])=>`<button class="dogtab${r===e?` on`:``}" data-eve="tab:${e}">${t}</button>`).join(``),a=n.ap<1,o=(e,t,n,r=`buy`)=>`<button class="btn ${r}" data-eve="${e}" ${n?``:`disabled`}>${t}</button>`,s=`<div class="dogtabs nighttabs">${i}</div>`;if(r===`bilanz`){let r=e.lastDay;if(r){let e={kaffee:`☕ Kaffee`,trinkgeld:`🫙 Trinkgeld`,kuchen:`🍰 Kuchen`,hunde:`🐶 Hunde`,tagesziele:`📋 Tagesziele`,stammgaeste:`💛 Stammgäste`,sammeln:`🃏 Sammelkarten`,abzeichen:`🏅 Abzeichen`,filialen:`🏪 Filialen`,markt:`🎄 Weihnachtsmarkt`,moebelverkauf:`🪑 Möbelverkauf`,offline:`🌙 Während du weg warst`,loehne:`🧑‍🍳 Löhne`,ausbau:`🛠️ Ausbau und Personal`,einrichtung:`🪑 Einrichtung`,futter:`🦴 Hundefutter`,abend:`🌙 Abendaktionen`,debug:`🛠️ Debug`},t=r.income&&Object.keys(r.income).length?r.income:{kaffee:r.earned-r.tips,trinkgeld:r.tips,filialen:r.branch||0},n=r.spent&&Object.keys(r.spent).length?r.spent:{loehne:r.wages||0},i=(t,n)=>Object.entries(t).filter(([,e])=>e>.004).sort((e,t)=>t[1]-e[1]).map(([t,r])=>`<span>${e[t]||t}</span><b>${n}${$(r)}</b>`).join(``),a=e=>Object.values(e).reduce((e,t)=>e+t,0),o=a(t)-a(n);s+=`<div class="night-stats"><span class="hd">Einnahmen</span><b class="hd">${$(a(t))}</b>${i(t,``)}
          <span class="hd">Ausgaben</span><b class="hd">${a(n)>0?`−`:``}${$(a(n))}</b>${i(n,`−`)}
          <span class="hd">Ergebnis Tag ${r.day}</span><b class="hd ${o>=0?`pos`:`neg`}">${o<0?`−`:``}${$(Math.abs(o))}</b></div>
          <div class="night-stats small"><span>Gäste bedient</span><b>${r.served}</b><span>Gäste verloren</span><b>${r.lost}</b>
          ${r.cakes?`<span>Kuchen verkauft</span><b>${r.cakes}</b>`:``}</div>
          <p class="muted">Abendaktionen und Verkäufe von heute Abend zählen noch zu diesem Tag.</p>`}else s+=`<p class="muted">Noch keine Tagesbilanz.</p>`;s+=`<p class="muted">Jeden Abend hast du ${t.apMax()} Aktionen Energie für Marketing, Rezepte, Forschung und Marktanalyse. Einkaufen kostet keine Energie. Was du heute planst, wirkt morgen.</p>`;let i=[];n.planned&&i.push(`${mg[n.planned].icon} ${mg[n.planned].name}`),n.next?.known&&i.push(`📈 Trend ${vu(n.next.coffee).name}`),n.research.cur&&i.push(`🔬 ${_g[n.research.cur.id].name} (noch ${n.research.cur.left} ${n.research.cur.left>1?`Nächte`:`Nacht`})`),e.litter&&i.push(`🐾 Wurf mit ${e.litter.size} Welpen`),i.length&&(s+=`<h3>Morgen</h3><div class="soon">${i.map(e=>`<span>${e}</span>`).join(``)}</div>`);let a=this.forecast();s+=`<h3>Platz im Café</h3><div class="night-stats"><span>👥 Erwartete Gäste morgen</span><b>ca. ${a.expected}</b>
        <span>🪑 So viele Gäste schaffen deine ${a.seats} Plätze am Tag</span><b>ca. ${a.capacity}</b></div>
        ${a.expected>a.capacity*.85?`<p class="warn">Es wird eng. Stell mehr Tische und Stühle auf, sonst gehen Gäste an der Tür vorbei.</p>`:`<p class="muted">Deine Plätze reichen für morgen.</p>`}`}else if(r===`marketing`)s+=`<p class="muted">Eine Kampagne pro Abend. Sie bringt morgen mehr Gäste${t.has(`influencer`)?` (Influencer-Kontakte: +50 % Wirkung)`:``}.</p>`,s+=Object.entries(mg).filter(([,t])=>t.level<=e.level+3).map(([t,r])=>{let i;return i=n.planned===t?`<span class="done">Geplant</span>`:e.level<r.level?`<span class="lock">🔒 Level ${r.level}</span>`:o(`camp:${t}`,$(r.cost),!n.planned&&!a&&e.money>=r.cost),`<div class="card-item"><div class="ci-ico">${r.icon}</div>
            <div class="ci-main"><b>${r.name}</b><div class="muted">${this.game.dogs.story(r.desc)}</div><div class="effect">+${Math.round(r.boost*100)} % Gäste morgen · 1 Aktion</div></div>${i}</div>`}).join(``);else if(r===`einkauf`)s+=`<p class="muted">Vorräte sind freiwillig. Ohne sie läuft das Café ganz normal, Kaffee braucht keine Zutaten. Premium-Bohnen geben +25 % auf jeden Kaffee, Kuchen bringt Zusatzumsatz, der Futtersack spart Futtergeld. Einkaufen kostet keine Energie, verbraucht wird automatisch. Deinen Vorrat siehst du links unter den Tageszielen.</p>`,s+=Object.entries(hg).map(([t,r])=>`<div class="card-item"><div class="ci-ico">${r.icon}</div>
            <div class="ci-main"><b>${r.name}</b> <span class="muted">Vorrat ${n.stock[t]}</span><div class="muted">${r.desc}</div><div class="effect">${r.amount} ${r.unit}</div></div>
            ${o(`sup:${t}`,$(r.cost),e.money>=r.cost)}</div>`).join(``);else if(r===`rezepte`){this.lab=this.lab||{base:null,aroma:null,result:null};let t=this.lab,r=cu.filter(t=>_u(t)&&e.coffees.includes(t.id)),i=vg().filter(t=>e.coffees.includes(t.id)),c=t.base&&t.aroma&&n.tried.includes(`${t.base}+${t.aroma}`);s+=`<p class="muted">Kombiniere eine Sorte von deiner Karte mit einem Aroma. Jede Mischung ergibt ein neues Getränk, nur wie selten es ist, siehst du erst, wenn das Labor fertig ist. Frühestens in der nächsten Nacht, seltene Mischungen brauchen länger. Es läuft eine Mischung zur Zeit. Ein Versuch kostet ${$(pg.recipeCost)} und 1 Aktion.</p>
        <h3>Sorte</h3><div class="chips">${r.map(e=>`<button class="dogchip${t.base===e.id?` on`:``}" data-eve="base:${e.id}"><i class="cdot" style="background:${e.color}"></i>${e.name}</button>`).join(``)}</div>
        <h3>Aroma</h3><div class="chips">${Object.entries(ou).map(([e,n])=>`<button class="dogchip${t.aroma===e?` on`:``}" data-eve="aroma:${e}">${n.icon} ${n.name}</button>`).join(``)}</div>
        ${c?`<p class="warn">Diese Mischung hast du schon probiert.</p>`:``}
        <p>${o(`brew`,`🧪 Ausprobieren`,t.base&&t.aroma&&!c&&!n.lab&&!a&&e.money>=pg.recipeCost,`primary`)}</p>
        ${t.result?`<p class="${t.result.ok?`effect`:`muted`}">${t.result.ok?`🧪`:`🤔`} ${t.result.text}</p>`:``}
        ${n.lab?`<p class="effect">🧪 Im Labor reift eine Mischung.</p>`:``}
        <h3>Entdeckte Rezepte ${i.length}/${vg().length}</h3>
        ${Object.entries(su).reverse().map(([t,n])=>{let r=vg().filter(e=>e.rarity===t),i=r.filter(t=>e.coffees.includes(t.id));return`<h3 style="color:${n.color}">${`★`.repeat(n.stars)} ${n.name} · ${i.length} von ${r.length} entdeckt</h3>
            <div class="soon">${i.map(e=>`<span>${e.name} · ${$(e.price)}</span>`).join(``)||`<span>noch nichts</span>`}</div>`}).join(``)}`}else if(r===`forschung`){let r=n.research.cur;s+=`<p class="muted">Ein Projekt zur Zeit. Start kostet 1 Aktion, danach forscht es über Nacht weiter. Wirkt dauerhaft.</p>`,r&&(s+=`<p class="effect">🔬 Läuft: ${_g[r.id].name}, fertig in ${r.left} ${r.left>1?`Nächten`:`Nacht`}.</p>`);let i=n.research.done.length;s+=`<p class="muted">Erforscht ${i}/${Object.keys(_g).length}. Projekte ab Level ${e.level+4} sind noch verborgen.</p>`,s+=Object.entries(_g).filter(([,t])=>t.level<=e.level+3).sort(([e],[n])=>+!!t.has(e)-!!t.has(n)).map(([n,i])=>{let s;return s=t.has(n)?`<span class="done">Erforscht</span>`:r?.id===n?`<span class="done">Läuft</span>`:e.level<i.level?`<span class="lock">🔒 Level ${i.level}</span>`:i.req&&!t.has(i.req)?`<span class="lock">🔒 erst ${_g[i.req].name}</span>`:o(`res:${n}`,$(i.cost),!r&&!a&&e.money>=i.cost),`<div class="card-item"><div class="ci-ico">${i.icon}</div>
            <div class="ci-main"><b>${i.name}</b><div class="effect">${i.desc}</div><div class="muted">${i.nights} ${i.nights>1?`Nächte`:`Nacht`} · 1 Aktion</div></div>${s}</div>`}).join(``)}else if(r===`markt`){let t=n.next,r=this.game.seasons.index();if(s+=`<h3>${mp[r].icon} Saisongetränke</h3><p class="muted">Nur im ${zu[r]} freischaltbar, danach bleiben sie auf der Karte. Im ${zu[r]} werden sie öfter bestellt, sonst eher selten.</p>`,s+=hp(r).map(t=>{let n=e.coffees.includes(t.id)?`<span class="done">Freigeschaltet</span>`:o(`sdrink:${t.id}`,`${$(gp(t))} · 1 Aktion`,!a&&e.money>=gp(t));return`<div class="card-item"><div class="ci-ico"><i class="cdot" style="background:${t.color}"></i></div>
          <div class="ci-main"><b>${t.name}</b><div class="muted">Verkaufspreis ${$(t.price)}</div></div>${n}</div>`}).join(``),r===3&&(s+=`<div class="card-item"><div class="ci-ico">🎄</div><div class="ci-main"><b>Stand auf dem Weihnachtsmarkt</b>
          <div class="muted">Nur im Winter, einmal pro Abend. Bringt Geld und beim ersten Mal ein Sonderrezept.</div></div>
          ${this.game.seasons.xmasOpen()?o(`xmas`,`1 Aktion`,!a,`buy`):`<span class="done">Heute erledigt</span>`}</div>`),s+=`<p class="muted">Eine Marktanalyse verrät, was morgen gefragt ist. Nur wenn du den Trend kennst, stellst du ein Schild auf: Der Trend-Kaffee wird öfter bestellt und bringt +25 %, Hunde der Trend-Rasse bekommen höhere Gebote.</p>`,t?.known){let n=vu(t.coffee),r=e.coffees.includes(n.id);s+=`<div class="card-item"><div class="ci-ico">📈</div><div class="ci-main"><b>Trend morgen: ${n.name}</b>
          <div class="${r?`effect`:`warn`}">${r?`Steht auf deiner Karte.`:`Steht noch nicht auf deiner Karte. In den Upgrades kaufen.`}</div>
          <div class="muted">Gefragte Rasse: ${Wh[t.breed].name}</div></div></div>`}else s+=`<p>${o(`analyse`,`📊 Analyse starten · ${$(pg.analysisCost)}`,t&&!a&&e.money>=pg.analysisCost,`primary`)}</p>`}s!==this.nightHtml&&(this.$(`.night-body`).innerHTML=s,this.nightHtml=s)}updateCollectDot(){let e=this.game.collect,t=e.c.packs>0||e.claimableCount()>0;this.$(`#colDot`).classList.toggle(`hidden`,!t)}colAction(e){let t=this.game.collect,[n,r]=e.split(`:`);if(n===`tab`)this.colTab=r;else if(n===`buypack`)t.buyPack();else if(n===`open`){let e=t.openPack();e&&this.showPack(e)}else if(n===`openall`){let e={cards:[],dupMoney:0,sets:[],packs:0},n;for(;n=t.openPack();)e.packs++,e.cards.push(...n.cards),e.dupMoney+=n.dupMoney,e.sets.push(...n.sets);e.packs&&this.showPack(e)}else if(n===`claim`)t.claim(r);else if(n===`branch`)t.buyBranch(r);else if(n===`map`)return this.game.citymap.show();else if(n===`go`)return this.game.switchSite(r);this.updateCollectDot(),this.game.save()}cardHtml(e,t=1,n=!1,r=0){let i=Cg[e.rarity];if(!t)return`<div class="tcard empty"><span class="tc-ico">❓</span><small>${i.name}</small></div>`;let a=Hv[e.id],o=a?`<span class="tc-img" style="background-image:url(${a})"></span>`:`<span class="tc-ico">${e.icon}</span>`;return`<div class="tcard ${e.rarity}${a?` has-img`:``}" data-card="${e.id}" style="--rc:${i.color};--d:${r*.35}s">
      ${n?`<span class="tc-new">NEU</span>`:``}${t>1?`<span class="tc-n">×${t}</span>`:``}
      ${o}<b>${e.name}</b><small>${e.text}</small><i>${i.name}</i></div>`}showCard(e){let t=Dg.find(t=>t.id===e);if(!t)return;let n=Cg[t.rarity],r=Hv[e],i=this.$(`.packview`);i.querySelector(`.pack-inner`).innerHTML=`<div class="bigcard ${t.rarity}" style="--rc:${n.color}">
      ${r?`<img src="${r}" alt="">`:`<div class="bc-ico">${t.icon}</div>`}
      <div class="bc-text"><b>${t.name}</b><span>${t.text}</span><i>${n.name} · ${wg[t.set]?.name||``}</i></div></div>
      <p class="muted">${Pf(`Klicken zum Schließen`)}</p>`,i.classList.remove(`hidden`)}showRecipe(e){let t=su[e.rarity]||su.common,n=ou[e.recipe?.aroma],r=vu(e.recipe?.base),i=this.$(`.packview`);i.querySelector(`.pack-inner`).innerHTML=`<h2>🧪 Neues Rezept entdeckt!</h2>
      <div class="recipecard ${e.rarity}" style="--rc:${t.color};--cup:${e.color||`#8a5a3c`}">
        <div class="rc-cup"><span class="rc-drink"></span><span class="rc-aroma">${n?.icon||`☕`}</span></div>
        <b>${e.name}</b><span class="muted">${e.desc||(r&&n?`${r.name} mit ${n.name}`:``)}</span>
        <span class="rc-stars">${`★`.repeat(t.stars)}${`☆`.repeat(4-t.stars)}</span>
        <i>${t.name}</i><span class="rc-price">${$(e.price)}</span>
      </div>
      <p class="muted">${Pf(`Steht ab morgen auf deiner Karte. Klicken zum Schließen`)}</p>`,i.classList.remove(`hidden`)}showPack(e){let t=this.$(`.packview`),n=e.sets.map(e=>`<p class="effect">${wg[e].icon} Set „${wg[e].name}“ komplett: ${wg[e].desc}</p>`).join(``),r=e.cards.map(e=>({...e,n:1}));if(e.packs>1){let t=new Map;for(let n of e.cards){let e=t.get(n.card.id);e?e.n++:t.set(n.card.id,{...n,n:1})}r=[...t.values()].sort((e,t)=>t.isNew-e.isNew)}let i=e.packs>1?.08:1,a=e.packs>1?`🎁 ${e.packs} Päckchen, ${e.cards.length} Karten`:`🎁 Dein Päckchen`;t.querySelector(`.pack-inner`).innerHTML=`<h2>${a}</h2>
      <div class="pack-cards${e.packs>1?` many`:``}">${r.map((e,t)=>this.cardHtml(e.card,e.n,e.isNew,t*i)).join(``)}</div>
      ${e.dupMoney?`<p class="muted">Doppelte Karten verkauft: +${$(e.dupMoney)}</p>`:``}${n}
      <p class="muted">${Pf(`Klicken zum Schließen`)}</p>`,t.classList.remove(`hidden`)}collectHtml(){let e=this.game.state,t=this.game.collect,n=e.collect,r=t.claimableCount(),i=`<div class="dogtabs coltabs">${[[`karten`,`🃏 Karten${n.packs?` (${n.packs})`:``}`],[`abzeichen`,`🏅 Abzeichen${r?` (${r})`:``}`],[`filialen`,`🏢 Filialen`],[`gaeste`,`💛 Stammgäste`]].map(([e,t])=>`<button class="dogtab${this.colTab===e?` on`:``}" data-col="tab:${e}">${t}</button>`).join(``)}</div>`;if(this.colTab===`karten`){i+=`<p class="muted">Einmal pro Woche liegt ein Päckchen gratis bereit. Ein vollständiges Set wirkt dauerhaft. Doppelte Karten werden automatisch verkauft.</p>
        <div class="pack-row">
          <button class="btn primary" data-col="open" ${n.packs?``:`disabled`}>🎁 Päckchen öffnen${n.packs?` (${n.packs})`:``}</button>
          ${n.packs>1?`<button class="btn" data-col="openall">🎁 Alle öffnen (${n.packs})</button>`:``}
          <button class="btn buy" data-col="buypack" ${e.money>=Og.cost?``:`disabled`}>Päckchen kaufen · ${$(Og.cost)}</button>
        </div>
        <p class="muted">Gesammelt ${t.uniqueCards()}/${Dg.length}</p>`;for(let[e,r]of Object.entries(wg)){let a=Dg.filter(t=>t.set===e),o=a.filter(e=>n.cards[e.id]>0).length;i+=`<h3>${r.icon} ${r.name} ${o}/${a.length} <span class="${t.setDone(e)?`done`:`muted`}">${r.desc}${t.setDone(e)?` ✓`:``}</span></h3>
          <div class="card-grid">${a.map(e=>this.cardHtml(e,n.cards[e.id]||0)).join(``)}</div>`}}else if(this.colTab===`abzeichen`)i+=`<p class="muted">Jedes Abzeichen hat drei Stufen. Die Belohnung holst du hier ab: Geld, Kartenpäckchen und XP.</p>`,i+=Object.entries(Mg).map(([e,r])=>{let i=t.badgeTier(e),a=n.claimed[e]||0,o=r.val(this.game),s=r.goals[Math.min(i,r.goals.length-1)],c=i>=r.goals.length?100:Math.min(100,Math.round(o/s*100)),l=kg.map((e,t)=>`<span class="${t<i?``:`dim`}">${e.icon}</span>`).join(``),u;u=t.claimable(e)?`<button class="btn buy primary" data-col="claim:${e}">Abholen</button>`:a>=r.goals.length?`<span class="done">Alles</span>`:`<span class="muted">${kg[i]?.name||``}</span>`;let d=e===`earned`?$(o):Math.floor(o);return`<div class="card-item"><div class="ci-ico">${r.icon}</div>
            <div class="ci-main"><b>${r.name}</b> <span class="medals">${l}</span>
              <div class="muted">${d} / ${e===`earned`?$(s):s} ${e===`earned`?``:r.unit}</div>
              <div class="pbar"><i style="width:${c}%"></i></div></div>${u}</div>`}).join(``);else if(this.colTab===`gaeste`)i+=`<p class="muted">Stammgäste kommen immer wieder. Bedien sie schnell mit ihrer Lieblingssorte, dann wächst die Freundschaft.</p>`,i+=Object.entries(Cp).map(([t,n])=>{let r=e.regulars[t];if(e.level<n.level)return`<div class="card-item locked"><div class="ci-ico">❔</div><div class="ci-main"><b>Unbekannter Gast</b><div class="muted">Kommt ab Level ${n.level}</div></div></div>`;let i=xp[r.lvl],a=r.lvl?xp[r.lvl-1]:0,o=i?Math.round((r.xp-a)/(i-a)*100):100,s=xp.map((e,t)=>t<r.lvl?`💛`:`🤍`).join(``),c=vu(n.fav),l=e.coffees.includes(n.fav);return`<div class="card-item"><div class="ci-ico">${n.icon}</div>
            <div class="ci-main"><b>${n.name}</b> <span class="medals">${s}</span>
              <div class="${l?`muted`:`warn`}">Liebt ${c.name}${l?``:` (noch nicht auf deiner Karte)`} · ${r.visits} Besuche</div>
              <div class="pbar"><i style="width:${o}%"></i></div>
              <div class="effect">${i?`Nächste Stufe: ${Sp[r.lvl]}`:`Beste Freunde!`}</div></div></div>`}).join(``);else{let n=t.branchIncome(),r=Gm(e);i+=`<p class="muted">Global bleiben Geld, Level und Welpen. Jede voll spielbare Filiale hat eigenes Gebäude, eigene Upgrades und Möbel. Filialen, in denen du gerade nicht spielst, bringen jeden Abend Geld. Jede Filiale macht dein Café bekannter: +5 % Gäste.</p>
        <p><button class="btn primary" data-col="map">🗺️ Stadtkarte öffnen</button></p>
        <p class="effect">Ertrag pro Tag im Hintergrund: ${$(n)}</p>`;let a=1+this.game.bonus(`branch`),o=Qu.stammhaus;i+=`<div class="card-item"><div class="ci-ico">${o.icon}</div><div class="ci-main"><b>${o.name}</b> <span class="muted">${r===`stammhaus`?`hier spielst du`:`${$(Ym(e,`stammhaus`)*a)} pro Tag`}</span><div class="muted">${o.desc}</div></div>${Qm(e,`stammhaus`)?`<button class="btn" data-col="go:stammhaus">Wechseln</button>`:``}</div>`,i+=Object.entries(Ng).map(([n,i])=>{let o=t.branchLevel(n),s=t.branchCost(n),c;c=e.level<i.level?`<span class="lock">🔒 Level ${i.level}</span>`:o>=Pg?`<span class="done">Max</span>`:`<button class="btn buy" data-col="branch:${n}" ${t.canBranch(n)?``:`disabled`}>${o?`Ausbau `:``}${$(s)}</button>`,Qm(e,n)&&(c=`<button class="btn" data-col="go:${n}">Wechseln</button>${c}`);let l=r===n,u=l?0:Ym(e,n)*a;return`<div class="card-item${o?``:` locked`}"><div class="ci-ico">${i.icon}</div>
            <div class="ci-main"><b>Filiale ${i.name}</b> ${o?`<span class="muted">Stufe ${o}/${Pg}</span>`:``} ${i.full?`<span class="muted">· voll spielbar</span>`:``}
              <div class="muted">${i.desc}</div>
              <div class="effect">${l?`hier spielst du gerade`:o?`${$(u)} pro Tag`:`${$(i.income*a)} pro Tag`}</div></div>${c}</div>`}).join(``)}return i}frame(e){this.positionBubbles(),this.hudT-=e,this.hudT<=0&&(this.hudT=.2,this.updateHud(),this.updateOrders(),this.updateHint(),this.updateOnboard(),this.updateSeason(),this.updateQuests()),this.btnT-=e,this.btnT<=0&&(this.btnT=.5,this.refreshButtons()),this.dogT-=e,this.dogT<=0&&(this.dogT=1,this.panel!==`hunde`&&this.panel!==`sammeln`||this.pressing||this.renderPanel(),this.game.state.clock.phase===`night`&&!this.pressing&&this.renderNight())}},qv=`welpencafe.options.v1`,Jv={music:null,sfx:!0,fullscreen:!1,quality:`hoch`,hours:8},Yv=typeof window<`u`?window.wcApp:null;function Xv(e){if(Yv)return Yv.setFullscreen(e);e&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{}),!e&&document.fullscreenElement&&document.exitFullscreen().catch(()=>{})}function Zv(){return Yv?Yv.isFullscreen():!!document.fullscreenElement}function Qv(){let e={};try{e=JSON.parse(localStorage.getItem(qv)||`{}`)}catch{}try{let t=Yv?.loadOptions();t&&(e={...e,...t})}catch{}return{...Jv,...e}}function $v(e){try{localStorage.setItem(qv,JSON.stringify(e))}catch{}try{Yv?.saveOptions(e)}catch{}}function ey(){try{let e=yh();return!e||typeof e.day!=`number`?null:{day:e.day,level:e.level||1,money:e.money||0,lastSeen:e.lastSeen||0,expansion:e.expansion||0,name:e.cafeName||`Welpen-Café`}}catch{return null}}var ty=[{x:Ql.x,z:Z.d},{x:Ql.x,z:Z.d+1},{x:Ql.x,z:Z.d+2}],ny=(e,t)=>e+Math.random()*(t-e),ry=nu*1.5,iy=class{constructor(e,t){this.world=e,this.audio=t,this.state=Oh();let n=Qv();au(n.hours),n.music&&(this.state.music={...this.state.music,...n.music}),Z.w=12+3*(this.state.expansion||0),e.setScenario(this.state.scenario||`klassisch`,this.state.cafeName||`Welpen-Café`),e.applyUpgrades(this.state.upgrades,!1),this.time=0,this.uid=1,this.guests=[],this.orders=[],this.machines=[],this.syncMachines(),this.counterCups=[],this.spawnT=3,this.saveT=10,this.petCooldown=0,this.baristaT=0,this.sitterT=4,this.furniture=new av(this),this.pictures=new K_(this),this.ui=new Kv(this),this.evening=new Sg(this),this.collect=new Ig(this),this.ambience=e.ambience,this.ambience.bind(this),this.seasons=new bp(this),this.regulars=new Tp(this),this.quests=new Ap(this),this.dogs=new fg(this),this.action=new zh(this),this.citymap=new R_(this),Vg(this.state),this.barista=null,this.waiter=null,this.state.staff.barista&&this.spawnBarista(),this.state.staff.kellner&&this.spawnWaiter(),t.setVolume(this.state.music.vol),this.applyOffline(),this.loadNotice(),this.state.clock.phase===`night`&&this.ui.showNight(),this.ui.updateHud()}save(e=!1){this.noSave||kh(this.state,e)}isWalkable(e,t){return e<0||e>=Z.w||t<0||t>=Z.d||t===0||t===eu.z&&e>=eu.x0&&e<=eu.x1?!1:!this.furniture.solidAt(e,t)}path(e,t){return V_(e,t,(e,t)=>this.isWalkable(e,t))}patienceMult(){return 1+.12*bu(this.state.upgrades.ambience)+this.furniture.decoBonus()+this.bonus(`patience`)}bonus(e){return this.bonusParts(e).reduce((e,[,t])=>e+t,0)}bonusParts(e){let t=this.state,n=[[`🔬 Forschung`,this.evening.fx(e)],[`🃏 Karten, Abzeichen, Filialen`,this.collect.fx(e)],[`🌸 Saison und Events`,this.seasons.fx(e)],[`💛 Stammgäste`,this.regulars.fx(e)],[`🎡 Stoßzeit und Goldene Knochen`,this.action?this.action.fx(e):0]];e===`mood`&&t.expansion>=3&&n.push([`🌳 Hundewiese`,.2]);for(let[r,i]of Object.entries(yu))i.fx&&t.upgrades[r]&&n.push([`${i.icon} ${i.name}`,i.fx(bu(t.upgrades[r]))[e]||0]);return e===`mood`&&n.push([`🧸 Spielzeug`,.1*this.furniture.toyCount()]),n.filter(([,e])=>Math.abs(e)>1e-4)}ledger(){let e=this.state,t=e.clock.phase===`night`&&e.lastDay&&e.lastDay.day===e.day?e.lastDay:e.today;return t.income=t.income||{},t.spent=t.spent||{},t}earn(e,t){if(!(e>0))return;this.state.money+=e;let n=this.ledger();n.income[t]=Math.round(((n.income[t]||0)+e)*100)/100}pay(e,t){if(!(e>0))return;this.state.money-=e;let n=this.ledger();n.spent[t]=Math.round(((n.spent[t]||0)+e)*100)/100}wages(){let e=Mm(this.state);return Math.round(e*(iu.hours/8)*100)/100}trySpawn(){let e=pp(this.furniture.freeChairs());for(let t of e){let e=this.path(Ql,(e,n)=>e===t.data.x&&n===t.data.z);if(e)return this.createGuest(t,e),!0}return!1}pickCoffee(e){return this.action?.pickCategory(e)||this.seasons.pickCoffee(e,e=>this.evening.pickCoffee(e))}createGuest(e,t){let n=this.regulars.maybePick(),r=n?null:this.seasons.takeCritic(),i=this.state.coffees,a=om({regular:n,critic:r,vipDue:this.action.vipDue(),menu:i,priceOf:e=>vu(e)?.price||0,pick:()=>this.pickCoffee(i)});a.vip&&this.action.markVip();let o=a.vip,s=n?{...n.look}:r?{skin:`#f1c9a5`,hair:`#1a1a1a`,hairStyle:`bun`,shirt:`#1d1d1d`,pants:`#1d1d1d`,glasses:!0}:hd(),c=gd(s);c.group.scale.setScalar(.95*(s.height||1));let l={id:this.uid++,rig:c,walker:new Uh(this.world,c,1.6),chair:e,regular:n?.id||null,critic:!!r,vip:o,coffee:a.coffee,patienceF:a.patience,state:`enter`,patience:1,patienceMax:1,drinkT:0,happyT:0,order:null,cup:null,waiterTarget:!1};c.group.userData.guestId=l.id,e.occupant=l,this.world.scene.add(c.group),l.walker.setTile(ty[2]),l.walker.walkTiles([ty[1],ty[0],Ql,...t],()=>this.guestSit(l)),this.guests.push(l),this.dogs?.greet()}guestSit(e){let t=e.chair;e.walker.setTile({x:t.data.x,z:t.data.z}),e.walker.sitting=!0,e.rig.sit(!0);let n=t.data.rot*Math.PI/2;e.walker.face(n),e.rig.group.rotation.y=n,e.state=`waitOrder`,e.rushMult=this.action.patienceMult(),e.patienceMax=cm(Uu.order,e.patienceF||1,this.patienceMult(),e.rushMult),e.patience=e.patienceMax,this.audio.blip(520,.1,.06),e.vip&&e.regular?this.ui.toast(`👑 ${Cp[e.regular].name} kommt heute als VIP! Das Beste der Karte, perfekt zubereitet gibt es ein Extra-Päckchen.`,`big`,5e3):e.vip&&this.ui.toast(`👑 Ein VIP-Gast ist da! Er will das Beste der Karte. Perfekt zubereitet gibt es ein Extra-Päckchen.`,`big`,5e3)}syncMachines(){let e=1+(this.state.upgrades.kitchen||0);for(;this.machines.length<e;)this.machines.push({order:null,t:0,dur:0})}takeOrder(e){if(e.state!==`waitOrder`)return;e.state=`waitCoffee`,e.patienceMax=cm(Uu.coffee,e.patienceF||1,this.patienceMult(),e.rushMult||1),e.patience=e.patienceMax;let t={id:this.uid++,guest:e,coffee:e.coffee,status:`queued`,cake:this.evening.reserveCake()?`wanted`:null};e.order=t,this.orders.push(t),this.audio.blip(740)}brew(e=0,t=!1){if(this.action.mini||!(this.machines[e]&&!this.machines[e].order?this.machines[e]:this.machines.find(e=>!e.order)))return;let n=this.orders.find(e=>e.status===`queued`);if(!n)return;if(!t){n.status=`mini`,this.action.startMini(n,t=>{this.orders.includes(n)&&(n.q=t,n.status=`queued`,this.startBrew(e,n))});return}let r=vu(n.coffee).cat||`kaffee`,i=Am(this.state,`barista`,r);n.q=km(i,r),this.pupXp(i),this.startBrew(e,n)}pupXp(e,t){let n=Tm(e,t);if(!n)return;let r=Em(e)?` Wähle im Personal eine Spezialisierung.`:``;this.ui.toast(`🐶 ${e.name} ist jetzt Stufe ${n}.${r}`)}startBrew(e,t){let n=this.machines[e]&&!this.machines[e].order?this.machines[e]:this.machines.find(e=>!e.order);n&&(t.status=`brewing`,n.order=t,n.t=0,n.dur=vu(t.coffee).brew*Su(this.state.upgrades.machine)*this.evening.brewMult()*Nm(this.state,`barista`),this.audio.blip(330,.2,.08))}machineBusy(){return this.machines.some(e=>e.order)}cakeWanted(){return this.orders.filter(e=>e.cake===`wanted`)}fetchCake(){if(this.action.mini)return;let e=this.cakeWanted()[0];e&&e.cake!==`slicing`&&(e.cake=`slicing`,this.action.startCakeMini(e,t=>{e.cake===`slicing`&&(e.cake=`ready`,e.cakeQ=t,this.audio.blip(880,.1,.06))}))}serve(e,t=!1){if(e.state!==`waitCoffee`||e.order?.status!==`ready`||(e.order.cake===`wanted`&&t&&(e.order.cake=`ready`),e.order.cake===`wanted`||e.order.cake===`slicing`))return;let n=e.order;this.orders=this.orders.filter(e=>e!==n),e.order=null;let r=vu(n.coffee),i=Math.max(0,e.patience/e.patienceMax),a=Lg(r.price,this.state.upgrades.grinder,this.evening.priceMult(r.id)+this.seasons.priceBonus(r.id)),o=this.action.onServe(e,n),s=a;a*=o.priceMult;let c=Rg(a,i,(1+this.dogs.tipBonus())*this.evening.tipMult()*this.regulars.tipMult(e)*o.tipMult*(1+Rm(this.state))),l=n.cake===`ready`?Math.round(this.evening.cakePrice()*(1+Ph[n.cakeQ||1])*100)/100:0;l&&(this.state.today.cakes=(this.state.today.cakes||0)+1);let u=this.quests;if(u.track(`serve`),u.track(`serve_coffee`,1,r.id),u.track(`tips`,c),u.track(`earn`,a+c+l),l&&u.track(`cake`),e.regular&&(this.regulars.onServe(e,i),u.track(`regular`)),e.critic&&this.seasons.criticServed(i),e.vip&&this.action.vipReward(e,s,n.q||1),t){let e=gm(this.state,`kellner`);e.length&&this.pupXp(e[this.state.totals.served%e.length])}let d=Math.round((a+c+l)*100)/100,f=this.state;this.earn(a,`kaffee`),this.earn(c,`trinkgeld`),l&&this.earn(l,`kuchen`),f.today.earned+=d;let p=o.tipMult>0?c/o.tipMult:0;f.today.auto=Math.round(((f.today.auto||0)+s+p+l)*100)/100,f.today.tips+=c,f.today.served++,f.totals.served++,f.totals.earned+=d,this.addXP(zg(a,c)),this.ui.floatText(this.headPos(e),`+${$(d)}`,`money`),this.audio.coin(),e.state=`drinking`,e.drinkT=ny(10,18)*this.seasons.drinkMult(),e.happyT=2.5;let m=rf(r.color),h=e.chair.data.rot*Math.PI/2,g=this.world.tileToWorld(e.chair.data.x,e.chair.data.z);m.position.set(g.x+Math.sin(h)*.55,.8,g.z+Math.cos(h)*.55),this.world.scene.add(m),e.cup=m,this.updateCounterCups()}guestLeave(e,t){if(e.order){for(let t of this.machines)t.order===e.order&&(t.order=null);e.order.cake&&this.evening.returnCake(),this.orders=this.orders.filter(t=>t!==e.order),e.order=null,this.updateCounterCups()}e.cup&&=(this.world.scene.remove(e.cup),null);let n=e.state===`enter`?{...e.walker.tile}:{x:e.chair.data.x,z:e.chair.data.z};e.chair.occupant=null,e.state=`leaving`,e.walker.sitting=!1,e.rig.sit(!1),t&&e.critic&&this.seasons.criticLost(),t&&(this.action.onAngry(),this.state.today.lost++,this.state.totals.lost++,this.addXP(-6),this.ui.floatText(this.headPos(e),`😤`,`angry`));let r=this.path(n,(e,t)=>e===Ql.x&&t===Ql.z)||[];e.walker.walkTiles([...r,...ty],()=>this.removeGuest(e))}removeGuest(e){this.world.scene.remove(e.rig.group),this.guests=this.guests.filter(t=>t!==e)}headDy(e){return e.walker.sitting?1.85:2}headPos(e){let t=e.rig.group.position.clone();return t.y+=this.headDy(e),t}updateGuests(e){for(let t of[...this.guests])t.walker.update(e),t.happyT>0&&(t.happyT-=e),t.state===`waitOrder`||t.state===`waitCoffee`?(t.patience-=e,t.patience<=0&&this.guestLeave(t,!0)):t.state===`drinking`&&(t.drinkT-=e,t.drinkT<=0&&this.guestLeave(t,!1))}updateCounterCups(){for(let e of this.counterCups)this.world.scene.remove(e);this.counterCups=[];let e=this.orders.filter(e=>e.status===`ready`),t=this.world.tileToWorld($l.x,eu.z);e.forEach((e,n)=>{let r=rf(vu(e.coffee).color);r.position.set(t.x-.6+n%6*.25,this.world.counterTop,t.z+.2-Math.floor(n/6)*.2),this.world.scene.add(r),this.counterCups.push(r)})}updateMachine(e){for(let t of this.machines)t.order&&(t.t+=e,t.t>=t.dur&&(t.order.status=`ready`,t.order=null,this.updateCounterCups(),this.audio.blip(1046,.15,.08)));this.barista&&this.machines.some(e=>!e.order)&&this.orders.some(e=>e.status===`queued`)&&(this.baristaT+=e,this.baristaT>.6&&(this.baristaT=0,this.brew(0,!0)))}staffRig(e,t){let n=Wh[t?.breed]||Wh.golden;return yd({breed:Wh[t?.breed]?t.breed:`golden`,fur:n.fur,dark:n.dark,size:n.size,apron:wu[e].look.apron,role:e})}spawnBarista(){let e=this.staffRig(`barista`,gm(this.state,`barista`)[0]),t=this.world.tileToWorld(tu.x,0);e.group.position.copy(t),this.world.scene.add(e.group),this.barista={rig:e,pups:[]},this.syncCrewDogs()}syncCrewDogs(){let e=this.barista;if(!e)return;let t=gm(this.state,`barista`),n=e.rig.group.position.clone();this.world.scene.remove(e.rig.group);for(let t of e.pups)this.world.scene.remove(t.group);e.rig=this.staffRig(`barista`,t[0]),e.rig.group.position.copy(n),this.world.scene.add(e.rig.group),e.pups=t.slice(1).map(e=>{let t=this.staffRig(`barista`,e),n=this.world.tileToWorld(tu.x-1,0);return t.group.position.set(n.x,0,n.z+.6),this.world.scene.add(t.group),t})}spawnWaiter(){let e=this.staffRig(`kellner`,gm(this.state,`kellner`)[0]),t=new Uh(this.world,e,2.3*Pm(this.state));t.setTile($l),this.world.scene.add(e.group),this.waiter={rig:e,walker:t,busyT:0,after:null,task:!1}}updateBarista(){let e=this.barista;if(e){this.machineBusy()?e.rig.work(this.time):e.rig.animate(0,0);for(let t of e.pups)this.machineBusy()?t.work(this.time):t.animate(0,0);e.rig.group.rotation.y=0}}updateWaiter(e){let t=this.waiter;if(!t)return;if(t.walker.update(e),t.busyT>0){if(t.busyT-=e,t.busyT<=0){let e=t.after;t.after=null,e&&e()}return}if(t.walker.moving||t.task)return;let n=this.guests.find(e=>e.state===`waitOrder`&&!e.waiterTarget);if(n){this.waiterGoTo(n,()=>this.takeOrder(n));return}let r=this.orders.find(e=>e.status===`ready`&&!e.guest.waiterTarget);if(r){let e=r.guest;e.waiterTarget=!0,t.task=!0;let n=this.path(t.walker.tile,(e,t)=>e===$l.x&&t===$l.z);n===null?(t.task=!1,e.waiterTarget=!1):t.walker.walkTiles(n,()=>{t.walker.face(Math.PI),t.busyT=.4,t.after=()=>{t.task=!1,e.waiterTarget=!1,this.guests.includes(e)&&e.order?.status===`ready`&&this.waiterGoTo(e,()=>this.serve(e,!0))}});return}let i=t.walker.tile;if(i.x!==$l.x||i.z!==$l.z){let e=this.path(i,(e,t)=>e===$l.x&&t===$l.z);e&&t.walker.walkTiles(e,()=>t.walker.face(Math.PI))}}waiterGoTo(e,t){let n=this.waiter,r=e.chair.data;e.waiterTarget=!0,n.task=!0;let i=this.path(n.walker.tile,(e,t)=>Math.abs(e-r.x)+Math.abs(t-r.z)===1&&this.isWalkable(e,t));i===null?(e.waiterTarget=!1,n.task=!1):n.walker.walkTiles(i,()=>{n.walker.face(Math.atan2(r.x-n.walker.tile.x,r.z-n.walker.tile.z)),n.busyT=.6,n.after=()=>{e.waiterTarget=!1,n.task=!1,this.guests.includes(e)&&t()}})}addXP(e){let t=this.state;for(e>0&&(e=Math.round(e*(1+this.bonus(`xp`)))),t.xp=Math.max(0,t.xp+e);t.xp>=Vu(t.level);)t.xp-=Vu(t.level),t.level++,this.ui.toast(`⭐ Level ${t.level}! Es kommen öfter Gäste.`,`big`,4500),this.action?.confetti(),this.audio.coin(),this.dogs?.onLevel(t.level),this.collect?.onLevel(t.level),this.ui.panel&&this.ui.renderPanel()}canBuy(e){let[t,n]=e.split(`:`),r=this.state;if(t===`upgrade`){let e=yu[n],t=r.upgrades[n]||0;return r.level>=(e.level||1)&&t<e.max&&r.money>=e.cost(t)}if(t===`coffee`){let e=vu(n);return _u(e)&&!r.coffees.includes(n)&&r.level>=e.level&&r.money>=e.cost}if(t===`expand`){let e=Zl[Number(n)];return e&&Number(n)===(r.expansion||0)&&r.level>=e.level&&r.money>=e.cost}if(t===`hire`)return ym(r,n);if(t===`spec`){let[,t,n]=e.split(`:`);return Em(r.crew.find(e=>String(e.id)===t))&&!!pu[n]}return!1}buy(e){if(!this.canBuy(e))return!1;let[t,n]=e.split(`:`),r=this.state;if(t===`upgrade`)this.pay(yu[n].cost(r.upgrades[n]||0),`ausbau`),r.upgrades[n]=(r.upgrades[n]||0)+1,this.ui.toast(`${yu[n].icon} ${yu[n].name} auf Stufe ${r.upgrades[n]}`),this.world.applyUpgrades(r.upgrades),this.syncMachines();else if(t===`coffee`){let e=vu(n);this.pay(e.cost,`ausbau`),r.coffees.push(n),this.ui.toast(`☕ ${e.name} steht jetzt auf der Karte`)}else if(t===`expand`){let e=Zl[Number(n)];this.pay(e.cost,`ausbau`),r.expansion=(r.expansion||0)+1,Z.w=12+3*r.expansion,this.world.rebuildRoom(),this.seasons.applyVisuals(),this.addXP(150*r.expansion),this.ui.toast(`${e.icon} Anbau fertig: ${e.name}! Richte die neue Fläche im Einrichten-Modus ein.`,`big`,6e3)}else if(t===`hire`){let e=wu[n],t=Sm(r,n);this.pay(t.cost,`ausbau`),n===`barista`&&(this.barista?this.syncCrewDogs():this.spawnBarista()),n===`kellner`&&(this.waiter?this.waiter.walker.speed=2.3*Pm(r):this.spawnWaiter());let i=Eu.personalities[t.pup.pers];this.ui.toast(`${e.icon} ${t.pup.name} (${i.icon} ${i.name}) ist jetzt ${e.name} im Team`,`big`)}else if(t===`spec`){let[,t,n]=e.split(`:`),i=r.crew.find(e=>String(e.id)===t);Dm(i,n,pu),this.ui.toast(`${pu[n].icon} ${i.name} ist jetzt auf ${pu[n].name} spezialisiert`)}return this.audio.coin(),this.save(),!0}loadNotice(){let e=Dh;if(!e)return;let t=``;e.broken?t=`⚠️ Der Spielstand war beschädigt und wurde gesichert. Es startet ein neues Café.`:e.repairs.length&&(t=`🛠️ Spielstand geprüft: ${e.repairs.length} ungültige Werte korrigiert, das Original ist gesichert.`),t&&setTimeout(()=>this.ui.toast(t,`big`,8e3),1200)}applyOffline(){let e=this.state,{amount:t,branch:n,minutes:r}=Vh({now:Date.now(),lastSeen:e.lastSeen,maxSeen:e.maxSeen,lastDay:e.lastDay,today:e.today,clock:e.clock,dayMs:iu.dayMs,nightMs:iu.nightMs,auto:Hh(e.staff,Xu.auto),share:Xu.share+this.bonus(`offline`),branchIncome:this.collect.branchIncome(),capHours:Xu.capHours,minMinutes:Xu.minMinutes,branchShare:Xu.branchShare});if(!t)return;this.earn(t,`offline`),this.save();let i=r>=90?`${Math.round(r/6)/10} h`:`${Math.round(r)} min`,a=n>0?`, davon ${$(n)} aus deinen Filialen`:``;setTimeout(()=>this.ui.toast(`🫙 In ${i} ohne dich hat das Café ${$(t)} verdient${a}.`,`big`,7e3),600)}closeCafe(){let e=this.state;for(let e of[...this.guests])(e.state===`waitOrder`||e.state===`waitCoffee`||e.state===`enter`)&&this.guestLeave(e,!1);this.orders=[];for(let e of this.machines)e.order=null;this.updateCounterCups();let t=this.wages();Zm(e,e.today.earned||0);let n=Math.round(this.collect.branchIncome());this.earn(n,`filialen`),this.pay(t,`loehne`),e.lastDay={...e.today,wages:t,branch:n,day:e.day,hours:iu.hours},e.today.lost===0&&e.today.served>=30&&(e.totals.perfect=(e.totals.perfect||0)+1),this.checkGoals(),e.clock={phase:`night`,t:0},this.dogs.onClose(),this.evening.onClose(),this.seasons.onClose(),this.ui.showNight(),this.audio.blip(392,.4,.08),this.save()}openCafe(){let e=this.state;if(e.clock.phase===`night`){if(au(Qv().hours),e.day++,e.today=wh(),e.clock={phase:`day`,t:0},this.spawnT=3,this.ui.hideNight(),this.ui.toast(`☀️ Tag ${e.day}. Das Café hat geöffnet.`),this.evening.onOpen(),this.action.onOpen(),this.dogs.onOpen(),this.collect.onOpen(),this.seasons.onOpen(),this.quests.onOpen(),e.staff.konditor){let t=Im(e);e.evening.stock.cake+=t;for(let t of gm(e,`konditor`))this.pupXp(t,5);setTimeout(()=>this.ui.toast(`🧁 Die Konditorei hat ${t} Stück Kuchen gebacken.`),3500)}if(this.collect.branchCount())for(let t of gm(e,`manager`))this.pupXp(t,5);this.ui.panel&&this.ui.renderPanel(),this.save()}}updateClock(e){let t=this.state.clock;if(t.t+=e*1e3,t.phase===`day`){let e=Yg(t.t,iu.dayMs,this.guests,ry);e===`serving`&&!this.closing&&(this.closing=!0,this.ui.toast(`🔒 Ladenschluss. Es kommt niemand mehr, bediene noch die letzten Gäste.`,`big`,5e3)),e===`close`&&(this.closing=!1,this.closeCafe())}let n=this.state.clock,r=this.world.setTime(n.phase,n.phase===`day`?Math.min(1,n.t/iu.dayMs):Math.min(1,n.t/iu.nightMs));this.furniture.setLampIntensity(.4+r*2.2)}click(e){if(this.furniture.edit)return this.furniture.click(e);let t=[...this.guests.map(e=>e.rig.group),...this.world.machineGroups(),...this.dogs.roots(),...this.ambience.roots()],n=this.world.pick(e,t);if(!n)return this.ambience.clickGround(e);let r=n;for(;r&&r.userData.guestId===void 0&&!r.userData.machine&&r.userData.dogId===void 0&&!r.userData.amb;)r=r.parent;if(r){if(r.userData.amb)return this.ambience.clickObj(r);if(r.userData.machine)this.brew(r.userData.machineIdx||0);else if(r.userData.dogId!==void 0)this.dogs.pet(r.userData.dogId);else{let e=this.guests.find(e=>e.id===r.userData.guestId);if(!e)return;e.state===`waitOrder`?this.takeOrder(e):e.order?.status===`ready`&&this.serve(e)}}}hover(e){this.furniture.edit&&(this.pictures.moving?this.pictures.hover(e):this.furniture.hover(e))}togglePhoto(e=!document.body.classList.contains(`photo`)){document.body.classList.toggle(`photo`,e),e&&this.ui.toast(`📷 Fotomodus: P speichert ein Bild, F oder Esc beendet.`)}savePhoto(){this.world.render();let e=document.createElement(`a`);e.href=this.world.renderer.domElement.toDataURL(`image/png`),e.download=`welpen-cafe-tag-${this.state.day}.png`,e.click()}openLayers(){let e=[];return this.action.mini&&e.push(`mini`),this.citymap?.open&&e.push(`map`),document.querySelector(`.packview:not(.hidden)`)&&e.push(`pack`),this.action.modal&&!this.action.modal.classList.contains(`hidden`)&&e.push(`modal`),this.ui.panel&&e.push(`drawer`),e}closeLayer(e){e===`map`?this.citymap.close():e===`pack`?document.querySelector(`.packview:not(.hidden)`)?.classList.add(`hidden`):e===`modal`?this.action.closeModal():e===`drawer`&&this.ui.closePanel()}key(e){let t=this.furniture,n=$g(e.code,{open:this.openLayers(),photo:document.body.classList.contains(`photo`),edit:t.edit,moving:!!t.moving||!!this.pictures.moving,repeat:e.repeat});n.prevent&&e.preventDefault(),{pressMini:()=>this.action.pressMini(),togglePhoto:()=>this.togglePhoto(),savePhoto:()=>this.savePhoto(),closePhoto:()=>this.togglePhoto(!1),close:()=>this.closeLayer(n.arg),brew:()=>this.brew(),rotate:()=>t.rotate(),cancelMove:()=>this.pictures.cancel()||t.cancel(),exitEdit:()=>this.pictures.cancel()||this.toggleEdit(!1),sell:()=>this.pictures.sell()||t.sell(),pause:()=>this.menu?.showPause()}[n.act]?.()}checkGoals(){let e=this.state;for(let t of ch(e))e.collect.packs=(e.collect.packs||0)+(t.reward.packs||0),t.reward.xp&&this.addXP(t.reward.xp),this.ui.toast(`🏁 Langzeitziel geschafft: ${t.icon} ${t.name}! +${t.reward.packs} Kartenpäckchen, +${t.reward.xp} XP`,`big`,6e3)}switchSite(e){let t=this.state;if(t.clock.phase!==`night`&&this.guests.length)return this.ui.toast(`Wechseln geht, sobald keine Gäste mehr im Café sind, oder am Feierabend.`),!1;if(!$m(t,e,e=>eh(Eh(),e)))return!1;t.lastSeen=Date.now(),bh(t,!0),this.noSave=!0;try{sessionStorage.setItem(`welpencafe.autostart`,`1`)}catch{}return location.reload(),!0}onboardEv(e){let t=Kg(this.state,e);t.length&&this.onboardDone(t)}onboardDone(e){this.ui.updateOnboard(),Hg(this.state)&&e.includes(`goal`)&&this.ui.toast(`🎓 Einführung abgeschlossen. Viel Spaß im Café!`,`big`),this.save()}toggleEdit(e=!this.furniture.edit){this.furniture.setEdit(e)}toggleMusic(){let e=this.state.music;e.on=!e.on,e.on?this.audio.start():this.audio.stop(),this.ui.updateMusicButton(),this.storeMusic(),this.save()}setMusicStyle(e){this.audio.style!==e&&(this.audio.select(e,0),this.state.music.on||this.toggleMusic())}nextSong(e=1){this.audio.next(e),this.state.music.on||this.toggleMusic()}storeMusic(){let e=Qv();e.music={...this.state.music},$v(e)}setVolume(e){this.state.music.vol=e,this.audio.setVolume(e),e>0&&!this.state.music.on?this.toggleMusic():this.storeMusic()}updateSitter(e){if(!this.state.staff.sitter||(this.sitterT-=e,this.sitterT>0))return;this.sitterT=Fm(this.state);let t=gm(this.state,`sitter`)[0],n=this.dogs.list,r=n.find(e=>e.hunger<.35);r&&(this.dogs.feed(r.id),this.pupXp(t)),this.sitterPetT=(this.sitterPetT||0)-5;let i=n.find(e=>e.mood<.5);i&&this.sitterPetT<=0&&(this.sitterPetT=30,this.dogs.pet(i.id))}bubbles(){let e=[],t=e=>{let t=Math.max(0,Math.round(e.patience/e.patienceMax*20)*5);return`<div class="pbar"><i class="${t<30?`low`:t<60?`mid`:``}" style="width:${t}%"></i></div>`},n=e=>e.regular?`<b class="gname${e.vip?` vip`:``}">${e.vip?`👑`:`💛`} ${Cp[e.regular].name}</b>`:e.critic?`<b class="gname critic">🧐 Kritikerin</b>`:e.vip?`<b class="gname vip">👑 VIP</b>`:``;for(let r of this.guests){let i=`g${r.id}`,a=r.rig.group.position,o=this.headDy(r);if(r.state===`waitOrder`)e.push({key:i,anchor:a,dy:o,cls:`order`,html:`${n(r)}<span>💬 Bestellen</span>${t(r)}`,onClick:()=>this.takeOrder(r)});else if(r.state===`waitCoffee`){let s=vu(r.coffee);if(r.order.status===`ready`)r.order.cake===`wanted`||r.order.cake===`slicing`?e.push({key:i,anchor:a,dy:o,cls:`wait`,html:`${n(r)}<span>☕ fertig, 🍰 fehlt</span>${t(r)}`}):e.push({key:i,anchor:a,dy:o,cls:`ready`,html:`${n(r)}<span>☕${r.order.cake?` + 🍰`:``} Servieren</span>${t(r)}`,onClick:()=>this.serve(r)});else{let c=r.order.status===`brewing`?` ⏳`:r.order.status===`mini`?` 🎯`:``;e.push({key:i,anchor:a,dy:o,cls:`wait`,html:`${n(r)}<span><i class="cdot" style="background:${s.color}"></i>${s.name}${r.order.cake?` + 🍰`:``}${c}</span>${t(r)}`})}}else r.state===`drinking`&&r.happyT>0&&e.push({key:i,anchor:a,dy:o,cls:`happy`,html:`<span>😊</span>`})}let r=this.world.machineGroups(),i=this.orders.filter(e=>e.status===`queued`).length;this.machines.forEach((t,n)=>{let a=(r[n]||r[0]).position,o=.95,s=n?`machine${n}`:`machine`;if(t.order){let n=Math.min(100,Math.round(t.t/t.dur*100));e.push({key:s,anchor:a,dy:o,cls:`machine`,html:`<span>⏳ ${vu(t.order.coffee).name}</span><div class="pbar brew"><i style="width:${n}%"></i></div>`})}else i>0&&(this.barista?e.push({key:s,anchor:a,dy:o,cls:`machine`,html:`<span>🧑‍🍳 legt los</span>`}):e.push({key:s,anchor:a,dy:o,cls:`machine go`,html:`<span>▶ Brühen${i>1?` (${i})`:``}</span>`,onClick:()=>this.brew(n)}),i--)});let a=this.cakeWanted().length;return a&&this.world.cakeDisplay&&e.push({key:`cake`,anchor:this.world.cakeDisplay.position,dy:.75,cls:`machine go`,html:`<span>🍰 holen (${a})</span>`,onClick:()=>this.fetchCake()}),e.push(...this.dogs.bubbles()),e}update(e){this.time+=e,this.petCooldown=Math.max(0,this.petCooldown-e),this.updateClock(e);let t=this.state.clock;if(t.phase===`day`&&Xg(t.t,iu.dayMs)&&(this.spawnT-=e,this.spawnT<=0&&(this.spawnT=this.trySpawn()?Hu(this.state.level)*ny(.7,1.3)/this.evening.spawnMult():2)),t.phase===`day`){let t=Wg(this.state,e);t.length&&this.onboardDone(t)}if(this.updateGuests(e),this.updateMachine(e),this.updateBarista(),this.updateWaiter(e),this.updateSitter(e),this.dogs.update(e),this.ambience.update(e),this.pictures.update(),this.collect.update(e),this.action.update(e),this.propT=(this.propT||0)-e,this.propT<=0){this.propT=.5;let e=this.evening.e.stock;this.world.setStock(e.cake,e.beans);let t=this.state.coffees.join(`,`);t!==this.world.menuKey&&this.world.drawMenu(this.state.coffees.map(e=>vu(e)?.name).filter(Boolean),t)}this.bubbleT=(this.bubbleT||0)-e,this.bubbleT<=0&&(this.bubbleT=.1,this.ui.syncBubbles(this.bubbles())),this.ui.frame(e),this.saveT-=e,this.saveT<=0&&(this.saveT=10,this.save())}},ay=new URL(`title-M2ejQ2h2.jpg`,import.meta.url).href,oy={name:`welpen-cafe`,productName:`Welpen-Café`,version:`1.4.0`,description:`3D Idle-Game im Block-Stil: ein Hipster-Café mit Welpen`,private:!0,main:`electron/main.cjs`,scripts:{dev:`concurrently -k "vite" "wait-on tcp:5173 && cross-env VITE_DEV_SERVER_URL=http://localhost:5173 electron ."`,web:`vite`,build:`vite build`,start:`vite build && electron .`,dist:`vite build && electron-builder --win`,test:`node --test "tests/**/*.test.mjs"`,"deploy-web":`node scripts/deploy-web.mjs`},build:{appId:`de.thj20.welpencafe`,productName:`Welpen-Café`,electronLanguages:[`de`,`en-US`],directories:{output:`release`},files:[`dist/**`,`electron/**`,`build/icon.png`],win:{target:`nsis`,icon:`build/icon.png`},nsis:{oneClick:!1,allowToChangeInstallationDirectory:!0,createDesktopShortcut:!0}},dependencies:{"@fontsource/nunito":`^5.3.0`,three:`^0.187.0`},devDependencies:{concurrently:`^10.0.7`,"cross-env":`^10.1.0`,electron:`^45.2.3`,"electron-builder":`^26.18.0`,vite:`^8.3.6`,"wait-on":`^9.5.1`}},sy=new URL(`scene-klassisch-B1OnIn83.jpg`,import.meta.url).href,cy=new URL(`scene-japan-_A1Pct25.jpg`,import.meta.url).href,ly=new URL(`scene-strand-B98dI9gV.jpg`,import.meta.url).href;function uy(e){let t=new Dl({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});t.setSize(300,220),t.setPixelRatio(1.5);let n=e.map(e=>{let n=new Pn;n.add(new Ea(`#fff6e8`,`#8a6a52`,1.4));let r=new Ua(`#ffffff`,1.8);r.position.set(3,5,4),n.add(r);let i=bd(e.traits);i.group.scale.setScalar(e.traits.size),i.group.rotation.y=.65,n.add(i.group);let a=new Ra(32,300/220,.1,20);return a.position.set(0,.85,2.3),a.lookAt(0,.42,0),t.render(n,a),t.domElement.toDataURL(`image/png`)});return t.dispose(),t.forceContextLoss(),n}var dy=[{id:`klassisch`,name:`Klassisch`,icon:`🏙️`,img:sy,desc:`Gemütliches Stadtcafé an der Straße, mit Bänken und Laubbäumen.`},{id:`japan`,name:`Japanisch`,icon:`🌸`,img:cy,desc:`Kirschbäume, Torii, Steinlaternen und ein Koi-Teich.`},{id:`strand`,name:`Strand`,icon:`🏖️`,img:ly,desc:`Sand, Meer und Palmen, mit Holzpromenade und Sonnenschirmen.`}],fy=e=>String(e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),py=!!window.wcApp||navigator.userAgent.includes(`Electron`),my=e=>new Date(e).toLocaleString(`de-DE`,{day:`2-digit`,month:`2-digit`,year:`numeric`,hour:`2-digit`,minute:`2-digit`}),hy=class{constructor({world:e,audio:t,start:n,getGame:r}){this.world=e,this.audio=t,this.start=n,this.getGame=r,this.opt=Qv(),this.paused=!1,this.view=null,this.back=null,this.el=document.createElement(`div`),this.el.id=`menu`,document.body.appendChild(this.el),this.el.addEventListener(`click`,e=>{let t=e.target.closest(`[data-m]`);t&&!t.disabled&&this.action(t.dataset.m)}),this.el.addEventListener(`input`,e=>{e.target.id===`optVol`&&this.setVolume(parseFloat(e.target.value))}),window.addEventListener(`keydown`,e=>{e.code===`Escape`&&this.view&&(e.stopImmediatePropagation(),this.view===`pause`?this.resume():(this.view===`options`||this.view===`confirm`)&&this.back())},!0),this.applyOptions()}showTitle(){this.view=`title`;let e=ey(),t=e?`<button class="mbtn primary" data-m="continue">▶️ Fortsetzen<small>${fy(e.name)} · Tag ${e.day} · Level ${e.level} · ${$(e.money)}${e.lastSeen?` · zuletzt ${my(e.lastSeen)}`:``}</small></button>`:`<button class="mbtn" disabled>▶️ Fortsetzen<small>Noch kein Spielstand</small></button>`;this.el.className=`title`,this.el.innerHTML=`
      <div class="tbg" style="background-image:url(${ay})"></div>
      <div class="tshade"></div>
      <div class="tpanel">
        <div class="logo"><span>🐾</span>Welpen-Café</div>
        <p class="claim">Kaffee, Kuchen und ganz viele Welpen</p>
        <nav>
          ${e?t:``}
          <button class="mbtn ${e?``:`primary`}" data-m="new">✨ Neues Spiel</button>
          ${e?``:t}
          <button class="mbtn" data-m="options">⚙️ Optionen</button>
          ${py?`<button class="mbtn" data-m="quit">🚪 Beenden</button>`:``}
        </nav>
        <div class="ver">Version ${oy.version}</div>
      </div>`}showPause(){this.getGame()&&!this.view&&(document.body.classList.remove(`photo`),this.paused=!0,this.view=`pause`,this.el.className=`pause`,this.el.innerHTML=`
      <div class="mcard">
        <h2>⏸️ Pause</h2>
        <nav>
          <button class="mbtn primary" data-m="resume">▶️ Weiterspielen</button>
          <button class="mbtn" data-m="save">💾 Speichern</button>
          <button class="mbtn" data-m="options">⚙️ Optionen</button>
          <button class="mbtn" data-m="title">🏠 Hauptmenü</button>
          ${py?`<button class="mbtn" data-m="quit">🚪 Spiel beenden</button>`:``}
        </nav>
        <p class="hint">Das Spiel speichert auch automatisch alle 10 Sekunden.</p>
      </div>`)}showOptions(){let e=this.view;this.back=()=>e===`title`?this.showTitle():(this.view=null,this.showPause()),this.view=`options`,this.el.className=e===`title`?`title dim`:`pause`;let t=e===`title`?`<div class="tbg" style="background-image:url(${ay})"></div><div class="tshade full"></div>`:``,n=this.musicState(),r=(e,t)=>`<button class="switch ${t?`on`:``}" data-m="${e}"><i></i></button>`;this.el.innerHTML=`${t}
      <div class="mcard">
        <h2>⚙️ Optionen</h2>
        <div class="orow"><span>🎵 Musik</span>${r(`optMusic`,n.on)}</div>
        <div class="orow"><span>🔊 Lautstärke Musik</span><input type="range" id="optVol" min="0" max="1" step="0.05" value="${n.vol}"></div>
        <div class="orow"><span>🎼 Musikstil</span>
          <div class="seg">${Object.entries(ap).map(([e,t])=>`<button class="${this.audio.style===e?`on`:``}" data-m="ms:${e}">${t.icon} ${t.name}</button>`).join(``)}</div>
        </div>
        <div class="orow"><span>💿 Song</span>
          <div class="seg"><button data-m="song:-1" title="Vorheriger Song">⏮</button><button class="on" disabled>${this.audio.info().name}</button><button data-m="song:1" title="Nächster Song">⏭</button></div>
        </div>
        <div class="orow"><span>🔔 Soundeffekte</span>${r(`optSfx`,this.opt.sfx)}</div>
        <div class="orow opt-full"><span>🖥️ Vollbild</span>${r(`optFull`,Zv())}</div>
        <div class="orow"><span>✨ Grafik</span>
          <div class="seg">
            <button class="${this.opt.quality===`hoch`?`on`:``}" data-m="qHoch">Hoch</button>
            <button class="${this.opt.quality===`niedrig`?`on`:``}" data-m="qNiedrig">Niedrig</button>
          </div>
        </div>
        <div class="orow"><span>🕗 Öffnungszeit</span>
          <div class="seg">${[6,7,8,9,10].map(e=>`<button class="${this.opt.hours===e?`on`:``}" data-m="h${e}">${e} h</button>`).join(``)}</div>
        </div>
        <p class="hint">Geöffnet von 08:00 bis ${String(8+this.opt.hours).padStart(2,`0`)}:00 Uhr, ein Spieltag dauert ${Math.round(this.opt.hours*1.25)} Minuten.
        Länger offen heißt mehr Gäste und mehr Umsatz pro Tag, Löhne zählen anteilig. Gilt ab dem nächsten Tag.</p>
        <p class="hint">Grafik "Niedrig" schaltet die Schatten aus und hilft auf schwächeren Rechnern.</p>
        <nav><button class="mbtn primary" data-m="back">← Zurück</button></nav>
      </div>`}showSetup(){this.setup=this.setup||{scenario:`klassisch`,name:`Welpen-Café`},this.back=()=>this.showTitle(),this.view=`confirm`,this.el.className=`title dim`;let e=this.setup;this.el.innerHTML=`
      <div class="tbg" style="background-image:url(${ay})"></div><div class="tshade full"></div>
      <div class="mcard setup">
        <h2>✨ Dein neues Café</h2>
        <label class="lbl">Wie heißt dein Café?</label>
        <input id="cafeName" maxlength="24" value="${fy(e.name)}" spellcheck="false" autocomplete="off">
        <label class="lbl">Wo steht es?</label>
        <div class="scns">${dy.map(t=>`
          <button class="scn ${e.scenario===t.id?`on`:``}" data-m="scn:${t.id}">
            <div class="scn-img" style="background-image:url(${t.img})"></div>
            <b>${t.icon} ${t.name}</b><span>${t.desc}</span>
          </button>`).join(``)}</div>
        <nav class="row">
          <button class="mbtn" data-m="back">Zurück</button>
          <button class="mbtn primary" data-m="setupGo">Weiter: Hund wählen 🐾</button>
        </nav>
      </div>`;let t=this.el.querySelector(`#cafeName`);t.addEventListener(`input`,()=>e.name=t.value);let n=Mf();n&&(t.enterKeyHint=`done`),t.addEventListener(`keydown`,e=>{e.key===`Enter`&&(n?t.blur():this.action(`setupGo`))}),n||setTimeout(()=>t.focus(),50)}showStarter(){let e=this.setup;if(!e.starters){e.starters=cg();try{e.portraits=uy(e.starters)}catch{e.portraits=[]}e.pick=null}this.back=()=>this.showSetup(),this.view=`confirm`,this.el.className=`title dim`;let t=e=>e===`w`?`♀ Hündin`:`♂ Rüde`;this.el.innerHTML=`
      <div class="tbg" style="background-image:url(${ay})"></div><div class="tshade full"></div>
      <div class="mcard setup">
        <h2>🐾 Wähle deinen ersten Hund</h2>
        <p class="sub">Dein Starterhund wird das Maskottchen von ${fy(e.name)} und bleibt für immer bei dir.</p>
        <div class="scns">${e.starters.map((n,r)=>`
          <button class="scn starter ${e.pick===r?`on`:``}" data-m="dog:${r}">
            <div class="dog-img">${e.portraits[r]?`<img src="${e.portraits[r]}" alt="">`:`🐶`}</div>
            <b>${fy(n.name)}</b>
            <span class="breed">${Wh[Object.keys(n.mix)[0]].name} · ${t(n.sex)}</span>
            <span>Wesen: <b class="inl">${Kh[n.temper].name}</b>, ${Kh[n.temper].desc}</span>
          </button>`).join(``)}</div>
        <nav class="row">
          <button class="mbtn" data-m="back">Zurück</button>
          <button class="mbtn primary" data-m="starterGo" ${e.pick===null?`disabled`:``}>Café eröffnen ☕</button>
        </nav>
      </div>`}confirmNew(){let e=ey();this.back=()=>this.showTitle(),this.view=`confirm`,this.el.className=`title dim`,this.el.innerHTML=`
      <div class="tbg" style="background-image:url(${ay})"></div><div class="tshade full"></div>
      <div class="mcard">
        <h2>✨ Neues Spiel?</h2>
        <p>${fy(e.name)} von Tag ${e.day} (Level ${e.level}, ${$(e.money)}) wird ersetzt.
        Eine Sicherung des alten Spielstands bleibt im Spiel gespeichert.</p>
        <nav>
          <button class="mbtn primary" data-m="newGo">Ja, neu anfangen</button>
          <button class="mbtn" data-m="back">Abbrechen</button>
        </nav>
      </div>`}hide(){this.view=null,this.paused=!1,this.el.className=`hidden`,this.el.innerHTML=``}resume(){this.hide()}action(e){if(e===`continue`)return this.launch(!1);if(e===`new`)return ey()?this.confirmNew():this.showSetup();if(e===`newGo`)return this.showSetup();if(e.startsWith(`scn:`))return this.setup.scenario=e.slice(4),this.setup.name=this.el.querySelector(`#cafeName`)?.value??this.setup.name,this.showSetup();if(e===`setupGo`)return this.setup.name=(this.el.querySelector(`#cafeName`)?.value||``).trim().slice(0,24)||`Welpen-Café`,this.showStarter();if(e.startsWith(`dog:`))return this.setup.pick=Number(e.slice(4)),this.showStarter();if(e===`starterGo`){let e=this.setup;if(e.pick===null)return;let t={...Eh(),scenario:e.scenario,cafeName:e.name,lastSeen:Date.now()};return t.dogs=[{...e.starters[e.pick],id:t.nextId++,born:t.day}],Ch(),bh(t,!0),this.setup=null,this.launch(!0)}if(e===`options`)return this.showOptions();if(e===`back`)return this.back();if(e===`resume`)return this.resume();if(e===`save`)return this.getGame().save(),this.getGame().ui.toast(`💾 Gespeichert.`),this.resume();if(e===`title`)return this.getGame().save(!0),location.reload();if(e===`quit`)return this.getGame()?.save(!0),window.wcApp?window.wcApp.quit():window.close();if(e.startsWith(`ms:`)||e.startsWith(`song:`)){let t=this.getGame(),[n,r]=e.split(`:`);return n===`ms`?t?t.setMusicStyle(r):this.audio.select(r,0):t?t.nextSong(parseInt(r,10)):this.audio.next(parseInt(r,10)),this.musicState().on||this.setMusic(!0,this.musicState().vol),this.showOptionsKeep()}if(e===`optMusic`){let e=this.musicState();return this.setMusic(!e.on,e.vol),this.showOptionsKeep()}if(e===`optSfx`)return this.opt.sfx=!this.opt.sfx,this.persist(),this.showOptionsKeep();if(e===`optFull`)return this.opt.fullscreen=!Zv(),Xv(this.opt.fullscreen),this.persist(),setTimeout(()=>this.showOptionsKeep(),250);if(/^h\d+$/.test(e))return this.opt.hours=Number(e.slice(1)),this.persist(),this.showOptionsKeep();if(e===`qHoch`||e===`qNiedrig`)return this.opt.quality=e===`qHoch`?`hoch`:`niedrig`,this.persist(),this.showOptionsKeep()}showOptionsKeep(){let e=this.back;this.view=this.el.classList.contains(`title`)?`title`:`pause`,this.showOptions(),this.back=e}launch(e){this.opt.fullscreen&&!Zv()&&Xv(!0),this.hide(),this.start(e),this.musicState().on&&this.audio.start()}musicState(){let e=this.getGame();return e?e.state.music:this.opt.music||{on:!0,vol:.5}}setMusic(e,t){let n=this.getGame();if(n){n.state.music.vol=t,this.audio.setVolume(t),n.state.music.on===e?n.storeMusic():n.toggleMusic();let r=document.querySelector(`#vol`);r&&(r.value=t)}else this.opt.music={on:e,vol:t},this.persist(),this.audio.setVolume(t),e?this.audio.start():this.audio.stop()}setVolume(e){this.setMusic(e>0||this.musicState().on,e)}persist(){let e=this.getGame()?{...this.getGame().state.music}:this.opt.music;this.opt={...Qv(),sfx:this.opt.sfx,fullscreen:this.opt.fullscreen,quality:this.opt.quality,hours:this.opt.hours,music:e},$v(this.opt),this.applyOptions()}applyOptions(){this.audio.setSfx(this.opt.sfx),this.world.quality!==this.opt.quality&&this.world.setQuality(this.opt.quality),!this.getGame()&&this.opt.music&&this.audio.setVolume(this.opt.music.vol)}},gy=typeof location<`u`&&/[?&]debug(=|&|$)/.test(location.search||``),_y={speed:1};function vy(){return gy?Math.max(1,Math.min(Gu.maxSpeed,Math.floor(_y.speed))):1}function yy(e,t){if(!gy)return;let n=document.createElement(`div`);n.className=`debugbar`,n.innerHTML=`<b>🛠 Debug</b>
    ${Gu.speeds.map(e=>`<button data-d="speed:${e}">×${e}</button>`).join(``)}
    <button data-d="money">+${Gu.money.toLocaleString(`de-DE`)} €</button>
    <button data-d="level">+1 Level</button>
    <button data-d="day">Feierabend</button>
    <button data-d="offline">1 h offline</button>
    <button data-d="season">Jahreszeit ▶</button>
    <button data-d="storm">Gewitter</button>
    <span class="dbg-info"></span>`,document.body.appendChild(n);let r=n.querySelector(`.dbg-info`),i=()=>n.querySelectorAll(`[data-d^="speed:"]`).forEach(e=>e.classList.toggle(`on`,e.dataset.d===`speed:${_y.speed}`));i(),n.addEventListener(`click`,t=>{let n=t.target.closest(`[data-d]`),r=e();if(!n||!r)return;let[a,o]=n.dataset.d.split(`:`),s=r.state;a===`speed`&&(_y.speed=Number(o),i()),a===`money`&&r.earn(Gu.money,`debug`),a===`level`&&r.addXP(Math.max(1,Vu(s.level)-s.xp)),a===`day`&&s.clock.phase===`day`&&r.closeCafe(),a===`offline`&&(s.lastSeen=Date.now()-36e5,s.maxSeen=s.lastSeen,r.applyOffline()),a===`season`&&(s.day=Math.floor((s.day-1)/14)*14+15,r.seasons.applyVisuals()),a===`storm`&&(r.ambience.storm=40,r.ambience.flashCd=1),r.ui.updateHud()}),setInterval(()=>{let e=t.renderer.info,n=nd();r.textContent=`Mat ${n.materials} · Geo ${n.geometries} · GPU-Geo ${e.memory.geometries} · Tex ${e.memory.textures} · Draws ${e.render.calls}`},1e3)}function by(e){let t=()=>e()?.save(!0);document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&t()}),window.addEventListener(`pagehide`,t),document.addEventListener(`dblclick`,e=>e.preventDefault(),{passive:!1}),document.addEventListener(`gesturestart`,e=>e.preventDefault(),{passive:!1}),window.wcApp||navigator.userAgent.includes(`Electron`)||!(`serviceWorker`in navigator)||(location.protocol===`https:`||location.hostname===`localhost`)&&(navigator.serviceWorker.controller&&navigator.serviceWorker.addEventListener(`controllerchange`,()=>{e()||location.reload()},{once:!0}),navigator.serviceWorker.register(`./sw.js`).catch(()=>{}),navigator.storage?.persist?.().catch(()=>{}))}var xy=new rp(document.getElementById(`scene`)),Sy=new dp;Promise.all([document.fonts.load(`700 64px Nunito`,`Café…`),document.fonts.load(`400 32px Nunito`,`Café…`)]).then(()=>xy.redrawText()).catch(()=>{});var Cy=null,wy=new hy({world:xy,audio:Sy,getGame:()=>Cy,start:()=>{Cy=new iy(xy,Sy),Cy.menu=wy,window.__game=Cy,Nf(Cy)}});wy.showTitle();{let e=document.getElementById(`boot`);e&&(requestAnimationFrame(()=>e.classList.add(`gone`)),setTimeout(()=>e.remove(),600))}try{sessionStorage.getItem(`welpencafe.autostart`)&&(sessionStorage.removeItem(`welpencafe.autostart`),wy.launch(!1))}catch{}var Ty=xy.renderer.domElement,Ey=e=>new U(e.clientX/window.innerWidth*2-1,-(e.clientY/window.innerHeight)*2+1),Dy=null;Ty.addEventListener(`pointerdown`,e=>{Dy={x:e.clientX,y:e.clientY}}),Ty.addEventListener(`pointerup`,e=>{Cy&&Dy&&Math.hypot(e.clientX-Dy.x,e.clientY-Dy.y)<6&&Cy.click(Ey(e)),Dy=null}),Ty.addEventListener(`pointermove`,e=>Cy?.hover(Ey(e))),window.addEventListener(`keydown`,e=>Cy?.key(e));{let e=wy.musicState();Sy.select(e.style||`lofi`,e.song||0,!1)}Sy.onSong=({style:e,song:t})=>{Cy?(Object.assign(Cy.state.music,{style:e,song:t}),Cy.storeMusic(),Cy.ui.updateMusicButton()):(wy.opt.music={...wy.musicState(),style:e,song:t},wy.persist()),wy.onSong?.()};var Oy=()=>{wy.musicState().on&&Sy.start()};Oy(),window.addEventListener(`pointerdown`,Oy,{once:!0}),window.addEventListener(`beforeunload`,()=>Cy?.save(!0)),by(()=>Cy),yy(()=>Cy,xy);var ky=new Ja;ky.connect(document);function Ay(e){ky.update(e);let t=Math.min(ky.getDelta(),.1);if(Cy){if(!wy.paused)for(let e=vy();e>0;e--)Cy.update(t);xy.update(t),xy.render()}requestAnimationFrame(Ay)}Ay();