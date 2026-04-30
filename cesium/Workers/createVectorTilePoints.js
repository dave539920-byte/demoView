/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.136.0
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */
import{a as x}from"./chunk-ILB4KG4E.js";import{a as w}from"./chunk-NPKIHRIX.js";import{j as c}from"./chunk-IB27QQGF.js";import"./chunk-RGFEE67W.js";import"./chunk-KXT7EZPS.js";import"./chunk-ZIOQOCPQ.js";import"./chunk-SY2GINYP.js";import{a as l,c as p}from"./chunk-KCR7AORG.js";import{a as h}from"./chunk-QDJTHWTA.js";import{a as i}from"./chunk-2YWR3G22.js";import"./chunk-HTSQLHXI.js";import"./chunk-JDAHMWM5.js";var u=32767,F=new l,L=new h,b=new c,y=new p,a={min:void 0,max:void 0};function V(r){r=new Float64Array(r);let n=0;a.min=r[n++],a.max=r[n++],c.unpack(r,n,b),n+=c.packedLength,p.unpack(r,n,y)}function z(r,n){let t=new Uint16Array(r.positions);V(r.packedBuffer);let o=b,e=y,s=a.min,p=a.max,c=t.length/3,m=t.subarray(0,c),f=t.subarray(c,2*c),k=t.subarray(2*c,3*c);w.zigZagDeltaDecode(m,f,k);let j=new Float64Array(t.length);for(let a=0;a<c;++a){let r=m[a],n=f[a],t=k[a],c=i.lerp(o.west,o.east,r/u),w=i.lerp(o.south,o.north,n/u),y=i.lerp(s,p,t/u),b=l.fromRadians(c,w,y,F),G=e.cartographicToCartesian(b,L);h.pack(G,j,3*a)}return n.push(j.buffer),{positions:j.buffer}}var G=x(z);export{G as default};