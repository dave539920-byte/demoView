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
import{a as z}from"./chunk-XO2FNJZK.js";import{j as I,k as b}from"./chunk-IB27QQGF.js";import{a as O,c as L}from"./chunk-KCR7AORG.js";import{a as W}from"./chunk-QDJTHWTA.js";import{a as m}from"./chunk-2YWR3G22.js";import{a as v}from"./chunk-HTSQLHXI.js";import{e as k}from"./chunk-JDAHMWM5.js";var Z=Math.cos,B=Math.sin,p=Math.sqrt,N={computePosition:function(t,n,a,r,o,s,e){let i=n.radiiSquared,l=t.nwCorner,h=t.boundingRectangle,u=l.latitude-t.granYCos*r+o*t.granXSin,g=Z(u),c=B(u),m=i.z*c,C=l.longitude+r*t.granYSin+o*t.granXCos,S=g*Z(C),d=g*B(C),w=i.x*S,O=i.y*d,W=p(w*S+O*d+m*c);if(s.x=w/W,s.y=O/W,s.z=m/W,a){let n=t.stNwCorner;k(n)?(u=n.latitude-t.stGranYCos*r+o*t.stGranXSin,C=n.longitude+r*t.stGranYSin+o*t.stGranXCos,e.x=(C-t.stWest)*t.lonScalar,e.y=(u-t.stSouth)*t.latScalar):(e.x=(C-h.west)*t.lonScalar,e.y=(u-h.south)*t.latScalar)}}},A=new b,l=new W,F=new O,j=new W,y=new z;function D(t,n,a,r,o,s,e){let i=Math.cos(n),h=r*i,u=a*i,g=Math.sin(n),c=r*g,m=a*g;y._ellipsoid=L.default,l=y.project(t,l),l=W.subtract(l,j,l);let C=b.fromRotation(n,A);l=b.multiplyByVector(C,l,l),l=W.add(l,j,l),t=y.unproject(l,t),s-=1,e-=1;let S=t.latitude,d=S+s*m,p=S-h*e,w=S-h*e+s*m,O=Math.max(S,d,p,w),X=Math.min(S,d,p,w),f=t.longitude,Y=f+s*u,I=f+e*c,_=f+e*c+s*u,M=Math.max(f,Y,I,_),R=Math.min(f,Y,I,_);return{north:O,south:X,east:M,west:R,granYCos:h,granYSin:c,granXCos:u,granXSin:m,nwCorner:t}}N.computeOptions=function(t,n,a,r,o,s,e){let i=t.east,l=t.west,h=t.north,u=t.south,g=!1,c=!1;h===m.PI_OVER_TWO&&(g=!0),u===-m.PI_OVER_TWO&&(c=!0);let C,S=h-u;C=l>i?m.TWO_PI-l+i:i-l;let d=Math.ceil(C/n)+1,p=Math.ceil(S/n)+1,w=C/(d-1),O=S/(p-1),W=I.northwest(t,s),X=I.center(t,F);(0!==a||0!==r)&&(X.longitude<W.longitude&&(X.longitude+=m.TWO_PI),y._ellipsoid=L.default,j=y.project(X,j));let f=O,Y=w,_=0,M=0,R=I.clone(t,o),G={granYCos:f,granYSin:_,granXCos:Y,granXSin:M,nwCorner:W,boundingRectangle:R,width:d,height:p,northCap:g,southCap:c};if(0!==a){let t=D(W,a,w,O,X,d,p);if(h=t.north,u=t.south,i=t.east,l=t.west,h<-m.PI_OVER_TWO||h>m.PI_OVER_TWO||u<-m.PI_OVER_TWO||u>m.PI_OVER_TWO)throw new v("Rotated rectangle is invalid.  It crosses over either the north or south pole.");G.granYCos=t.granYCos,G.granYSin=t.granYSin,G.granXCos=t.granXCos,G.granXSin=t.granXSin,R.north=h,R.south=u,R.east=i,R.west=l}if(0!==r){a-=r;let t=I.northwest(R,e),n=D(t,a,w,O,X,d,p);G.stGranYCos=n.granYCos,G.stGranXCos=n.granXCos,G.stGranYSin=n.granYSin,G.stGranXSin=n.granXSin,G.stNwCorner=t,G.stWest=n.west,G.stSouth=n.south}return G};var st=N;export{st as a};