"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[74653],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>s});var n=t(96540);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),f=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=f(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=f(t),b=i,s=d["".concat(l,".").concat(b)]||d[b]||p[b]||a;return t?n.createElement(s,o(o({ref:r},u),{},{components:t})):n.createElement(s,o({ref:r},u))}));function s(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=b;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[d]="string"==typeof e?e:i,o[1]=c;for(var f=2;f<a;f++)o[f]=t[f];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},4410:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>f});var n=t(58168),i=(t(96540),t(15680));const a={id:"fiberid",title:"FiberId"},o=void 0,c={unversionedId:"reference/fiber/fiberid",id:"reference/fiber/fiberid",title:"FiberId",description:"FiberId is the identity of a Fiber, described by a globally unique sequence number and the time when it began life:",source:"@site/docs/reference/fiber/fiberid.md",sourceDirName:"reference/fiber",slug:"/reference/fiber/fiberid",permalink:"/reference/fiber/fiberid",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/fiber/fiberid.md",tags:[],version:"current",frontMatter:{id:"fiberid",title:"FiberId"},sidebar:"reference-sidebar",previous:{title:"Fiber",permalink:"/reference/fiber/fiber.md"},next:{title:"Fiber.Status",permalink:"/reference/fiber/fiberstatus"}},l={},f=[],u={toc:f},d="wrapper";function p(e){let{components:r,...t}=e;return(0,i.yg)(d,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"FiberId")," is the identity of a ",(0,i.yg)("a",{parentName:"p",href:"/reference/fiber/fiber.md"},"Fiber"),", described by a globally unique sequence number and the time when it began life:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"id")," \u2014 unique monotonically increasing sequence number ",(0,i.yg)("inlineCode",{parentName:"li"},"0,1,2,..."),", derived from an atomic counter"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"startTimeSeconds")," \u2014 UTC time seconds, derived from ",(0,i.yg)("inlineCode",{parentName:"li"},"java.lang.System.currentTimeMillis / 1000"))))}p.isMDXComponent=!0}}]);