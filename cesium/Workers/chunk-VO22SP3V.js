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
import{h as C}from"./chunk-IB27QQGF.js";import{a as n,b}from"./chunk-QDJTHWTA.js";import{a as w}from"./chunk-2YWR3G22.js";var j={},q=new n,L=new n,Q=new C,G=new b;function W(t,e,r,a,o,i,l,s,y,c){let m=t+e;n.multiplyByScalar(a,Math.cos(m),q),n.multiplyByScalar(r,Math.sin(m),L),n.add(q,L,q);let u=Math.cos(t);u*=u;let w=Math.sin(t);w*=w;let h=i/Math.sqrt(l*u+o*w)/s;return C.fromAxisAngle(q,h,Q),b.fromQuaternion(Q,G),b.multiplyByVector(G,y,c),n.normalize(c,c),n.multiplyByScalar(c,s,c),c}var U=new n,Z=new n,N=new n,v=new n;j.raisePositionsToHeight=function(t,e,r){let a=e.ellipsoid,o=e.height,i=e.extrudedHeight,l=r?t.length/3*2:t.length/3,s=new Float64Array(3*l),y=t.length,c=r?y:0;for(let m=0;m<y;m+=3){let e=m+1,l=m+2,y=n.fromArray(t,m,U);a.scaleToGeodeticSurface(y,y);let u=n.clone(y,Z),w=a.geodeticSurfaceNormal(y,v),h=n.multiplyByScalar(w,o,N);n.add(y,h,y),r&&(n.multiplyByScalar(w,i,h),n.add(u,h,u),s[m+c]=u.x,s[e+c]=u.y,s[l+c]=u.z),s[m]=y.x,s[e]=y.y,s[l]=y.z}return s};var D=new n,J=new n,K=new n;j.computeEllipsePositions=function(t,e,r){let a=t.semiMinorAxis,o=t.semiMajorAxis,i=t.rotation,l=t.center,s=8*t.granularity,y=a*a,c=o*o,m=o*a,u=n.magnitude(l),h=n.normalize(l,D),x=n.cross(n.UNIT_Z,l,J);x=n.normalize(x,x);let z=n.cross(h,x,K),f=1+Math.ceil(w.PI_OVER_TWO/s),_=w.PI_OVER_TWO/(f-1),p=w.PI_OVER_TWO-f*_;p<0&&(f-=Math.ceil(Math.abs(p)/_));let O,d,P,T,I,M=f*(f+2)*2,g=e?new Array(3*M):void 0,A=0,E=U,R=Z,V=4*f*3,j=V-1,v=0,B=r?new Array(V):void 0;for(p=w.PI_OVER_TWO,E=W(p,i,z,x,y,m,c,u,h,E),e&&(g[A++]=E.x,g[A++]=E.y,g[A++]=E.z),r&&(B[j--]=E.z,B[j--]=E.y,B[j--]=E.x),p=w.PI_OVER_TWO-_,O=1;O<f+1;++O){if(E=W(p,i,z,x,y,m,c,u,h,E),R=W(Math.PI-p,i,z,x,y,m,c,u,h,R),e){for(g[A++]=E.x,g[A++]=E.y,g[A++]=E.z,P=2*O+2,d=1;d<P-1;++d)T=d/(P-1),I=n.lerp(E,R,T,N),g[A++]=I.x,g[A++]=I.y,g[A++]=I.z;g[A++]=R.x,g[A++]=R.y,g[A++]=R.z}r&&(B[j--]=E.z,B[j--]=E.y,B[j--]=E.x,B[v++]=R.x,B[v++]=R.y,B[v++]=R.z),p=w.PI_OVER_TWO-(O+1)*_}for(O=f;O>1;--O){if(p=w.PI_OVER_TWO-(O-1)*_,E=W(-p,i,z,x,y,m,c,u,h,E),R=W(p+Math.PI,i,z,x,y,m,c,u,h,R),e){for(g[A++]=E.x,g[A++]=E.y,g[A++]=E.z,P=2*(O-1)+2,d=1;d<P-1;++d)T=d/(P-1),I=n.lerp(E,R,T,N),g[A++]=I.x,g[A++]=I.y,g[A++]=I.z;g[A++]=R.x,g[A++]=R.y,g[A++]=R.z}r&&(B[j--]=E.z,B[j--]=E.y,B[j--]=E.x,B[v++]=R.x,B[v++]=R.y,B[v++]=R.z)}p=w.PI_OVER_TWO,E=W(-p,i,z,x,y,m,c,u,h,E);let Q={};return e&&(g[A++]=E.x,g[A++]=E.y,g[A++]=E.z,Q.positions=g,Q.numPts=f),r&&(B[j--]=E.z,B[j--]=E.y,B[j--]=E.x,Q.outerPositions=B),Q};var tt=j;export{tt as a};