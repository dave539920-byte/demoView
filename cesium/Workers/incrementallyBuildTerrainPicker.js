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
import{a as f}from"./chunk-ILB4KG4E.js";import{a as c}from"./chunk-X2JOWFTB.js";import"./chunk-CM5O7VPK.js";import{b as i}from"./chunk-RGFEE67W.js";import"./chunk-SY2GINYP.js";import{a as n}from"./chunk-QDJTHWTA.js";import"./chunk-2YWR3G22.js";import"./chunk-HTSQLHXI.js";import"./chunk-JDAHMWM5.js";var w=new n,T=new n,a=[new n,new n,new n],d=new c;function b(r,t){let e=new Float64Array(r.aabbs),o=Array.from({length:4},(r,t)=>{let a=n.unpack(e,6*t,w),i=n.unpack(e,6*t+3,T);return c.fromCorners(a,i,new c)}),u=new Float64Array(r.inverseTransform),s=i.unpack(u,0,new i),l=new Uint32Array(r.triangleIndices),m=new Float32Array(r.trianglePositions),p=Array.from({length:4},()=>[]);for(let i=0;i<l.length;i++){n.unpack(m,9*i,a[0]),n.unpack(m,9*i+3,a[1]),n.unpack(m,9*i+6,a[2]);let r=h(s,a);for(let n=0;n<4;n++)o[n].intersectAxisAlignedBoundingBox(r)&&p[n].push(l[i])}return{intersectingTrianglesArrays:p.map(n=>{let r=new Uint32Array(n);return t.push(r.buffer),r.buffer})}}function h(n,r){return i.multiplyByPoint(n,r[0],r[0]),i.multiplyByPoint(n,r[1],r[1]),i.multiplyByPoint(n,r[2],r[2]),c.fromPoints(r,d)}var M=f(b);export{M as default};