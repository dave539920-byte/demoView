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
import{a as T}from"./chunk-BLHXNU6V.js";import"./chunk-RNCQLKJ3.js";import{a as l}from"./chunk-UILVE4UW.js";import"./chunk-MCM3P7ZC.js";import{a as G}from"./chunk-3QPLNPJT.js";import{a as C}from"./chunk-UPV7RDUS.js";import"./chunk-NPKIHRIX.js";import"./chunk-MUKCYY2X.js";import"./chunk-33M5C4LG.js";import"./chunk-X2JOWFTB.js";import"./chunk-TN2BIDXM.js";import{a as L}from"./chunk-KF74ULE7.js";import"./chunk-4EHG4BFI.js";import"./chunk-KIJM7B3H.js";import"./chunk-P44F6KLE.js";import{a as w}from"./chunk-GSMLTRAL.js";import{a as O}from"./chunk-IUX576XK.js";import{b,c as d,d as k}from"./chunk-UIGT6VOJ.js";import{c as P}from"./chunk-XO2FNJZK.js";import"./chunk-CM5O7VPK.js";import"./chunk-IB27QQGF.js";import"./chunk-RGFEE67W.js";import{a as H}from"./chunk-KXT7EZPS.js";import"./chunk-ZIOQOCPQ.js";import"./chunk-SY2GINYP.js";import{c as g}from"./chunk-KCR7AORG.js";import{a as y,c as u}from"./chunk-QDJTHWTA.js";import"./chunk-2YWR3G22.js";import{b as m}from"./chunk-HTSQLHXI.js";import{e as f}from"./chunk-JDAHMWM5.js";function E(r){let t=r.length,e=new Float64Array(3*t),o=w.createTypedArray(t,2*t),n=0,i=0;for(let c=0;c<t;c++){let s=r[c];e[n++]=s.x,e[n++]=s.y,e[n++]=s.z,o[i++]=c,o[i++]=(c+1)%t}let s=new O({position:new k({componentDatatype:H.DOUBLE,componentsPerAttribute:3,values:e})});return new d({attributes:s,indices:o,primitiveType:b.LINES})}function c(r){r=r??u.EMPTY_OBJECT;let t=r.polygonHierarchy;m.defined("options.polygonHierarchy",t),this._polygonHierarchy=t,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=l.computeHierarchyPackedLength(t,y)+1}c.fromPositions=function(r){r=r??u.EMPTY_OBJECT,m.defined("options.positions",r.positions);let t={polygonHierarchy:{positions:r.positions}};return new c(t)},c.pack=function(r,t,e){return m.typeOf.object("value",r),m.defined("array",t),e=e??0,e=l.packPolygonHierarchy(r._polygonHierarchy,t,e,y),t[e]=r.packedLength,t};var v={polygonHierarchy:{}};c.unpack=function(r,t,e){m.defined("array",r),t=t??0;let o=l.unpackPolygonHierarchy(r,t,y);t=o.startingIndex,delete o.startingIndex;let n=r[t];return f(e)||(e=new c(v)),e._polygonHierarchy=o,e.packedLength=n,e},c.createGeometry=function(r){let t=r._polygonHierarchy,e=t.positions;if(e=L(e,y.equalsEpsilon,!0),e.length<3||!T.validOutline(e))return;let o=l.polygonOutlinesFromHierarchy(t,!1);if(0===o.length)return;let n=[];for(let c=0;c<o.length;c++){let r=new G({geometry:E(o[c])});n.push(r)}let i=C.combineInstances(n)[0],s=P.fromPoints(t.positions);return new d({attributes:i.attributes,indices:i.indices,primitiveType:i.primitiveType,boundingSphere:s})};var h=c;function A(r,t){return f(t)&&(r=h.unpack(r,t)),r._ellipsoid=g.clone(r._ellipsoid),h.createGeometry(r)}var Z=A;export{Z as default};