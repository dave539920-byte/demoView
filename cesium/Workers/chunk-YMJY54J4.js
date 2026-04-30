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
import{a as k}from"./chunk-GSMLTRAL.js";import{a as T}from"./chunk-2YWR3G22.js";import{a as d}from"./chunk-HTSQLHXI.js";import{e as E}from"./chunk-JDAHMWM5.js";function a(){d.throwInstantiationError()}Object.defineProperties(a.prototype,{errorEvent:{get:d.throwInstantiationError},credit:{get:d.throwInstantiationError},tilingScheme:{get:d.throwInstantiationError},hasWaterMask:{get:d.throwInstantiationError},hasVertexNormals:{get:d.throwInstantiationError},availability:{get:d.throwInstantiationError}});var b=[];a.getRegularGridIndices=function(t,e){if(t*e>=T.FOUR_GIGABYTES)throw new d("The total number of vertices (width * height) must be less than 4,294,967,296.");let r=b[t];E(r)||(b[t]=r=[]);let n=r[e];return E(n)||(n=t*e<T.SIXTY_FOUR_KILOBYTES?r[e]=new Uint16Array((t-1)*(e-1)*6):r[e]=new Uint32Array((t-1)*(e-1)*6),v(t,e,n,0)),n};var N=[];a.getRegularGridIndicesAndEdgeIndices=function(t,e){if(t*e>=T.FOUR_GIGABYTES)throw new d("The total number of vertices (width * height) must be less than 4,294,967,296.");let r=N[t];E(r)||(N[t]=r=[]);let n=r[e];if(!E(n)){let o=a.getRegularGridIndices(t,e),i=w(t,e),s=i.westIndicesSouthToNorth,h=i.southIndicesEastToWest,d=i.eastIndicesNorthToSouth,u=i.northIndicesWestToEast;n=r[e]={indices:o,westIndicesSouthToNorth:s,southIndicesEastToWest:h,eastIndicesNorthToSouth:d,northIndicesWestToEast:u}}return n};var R=[];function w(t,e){let r,n=new Array(e),o=new Array(t),i=new Array(e),a=new Array(t);for(r=0;r<t;++r)a[r]=r,o[r]=t*e-1-r;for(r=0;r<e;++r)i[r]=(r+1)*t-1,n[r]=(e-r-1)*t;return{westIndicesSouthToNorth:n,southIndicesEastToWest:o,eastIndicesNorthToSouth:i,northIndicesWestToEast:a}}function v(t,e,r,n){let o=0;for(let i=0;i<e-1;++i){for(let e=0;e<t-1;++e){let e=o,i=e+t,a=i+1,s=e+1;r[n++]=e,r[n++]=i,r[n++]=s,r[n++]=s,r[n++]=i,r[n++]=a,++o}++o}}function p(t,e,r,n){let o=t[0],i=t.length;for(let a=1;a<i;++a){let i=t[a];r[n++]=o,r[n++]=i,r[n++]=e,r[n++]=e,r[n++]=i,r[n++]=e+1,o=i,++e}return n}a.getRegularGridAndSkirtIndicesAndEdgeIndices=function(t,e){if(t*e>=T.FOUR_GIGABYTES)throw new d("The total number of vertices (width * height) must be less than 4,294,967,296.");let r=R[t];E(r)||(R[t]=r=[]);let n=r[e];if(!E(n)){let o=t*e,i=(t-1)*(e-1)*6,s=2*t+2*e,h=6*Math.max(0,s-4),d=o+s,u=i+h,l=w(t,e),c=l.westIndicesSouthToNorth,I=l.southIndicesEastToWest,g=l.eastIndicesNorthToSouth,T=l.northIndicesWestToEast,E=k.createTypedArray(d,u);v(t,e,E,0),a.addSkirtIndices(c,I,g,T,o,E,i),n=r[e]={indices:E,westIndicesSouthToNorth:c,southIndicesEastToWest:I,eastIndicesNorthToSouth:g,northIndicesWestToEast:T,indexCountWithoutSkirts:i}}return n},a.getSkirtVertexCount=function(t,e,r,n){return t.length+e.length+r.length+n.length},a.getSkirtIndexCount=function(t){return 2*(t-4)*3},a.getSkirtIndexCountWithFilledCorners=function(t){return 3*(2*(t-4)+4)},a.addSkirtIndices=function(t,e,r,n,o,i,a){let s=o;a=p(t,s,i,a),s+=t.length,a=p(e,s,i,a),s+=e.length,a=p(r,s,i,a),s+=r.length,p(n,s,i,a)},a.addSkirtIndicesWithFilledCorners=function(t,e,r,n,o,i,s){a.addSkirtIndices(t,e,r,n,o,i,s);let h=a.getSkirtVertexCount(t,e,r,n),d=a.getSkirtIndexCount(h),u=s+d,l=t[0],c=n[0],I=r[0],g=e[0],T=o,E=T+t.length-1,w=E+1,f=w+e.length-1,m=f+1,S=m+r.length-1,p=S+1,k=p+n.length-1;i[u+0]=l,i[u+1]=T,i[u+2]=f,i[u+3]=g,i[u+4]=w,i[u+5]=S,i[u+6]=I,i[u+7]=m,i[u+8]=k,i[u+9]=c,i[u+10]=p,i[u+11]=E},a.heightmapTerrainQuality=.25,a.getEstimatedLevelZeroGeometricErrorForAHeightmap=function(t,e,r){return 2*t.maximumRadius*Math.PI*a.heightmapTerrainQuality/(e*r)},a.prototype.requestTileGeometry=d.throwInstantiationError,a.prototype.getLevelMaximumGeometricError=d.throwInstantiationError,a.prototype.getTileDataAvailable=d.throwInstantiationError,a.prototype.loadTileDataAvailability=d.throwInstantiationError;var M=a;export{M as a};