"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[67247],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>m});var t=r(96540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return r?t.createElement(m,a(a({ref:n},c),{},{components:r})):t.createElement(m,a({ref:n},c))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},39457:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=r(58168),o=(r(96540),r(15680));const i={id:"refined",title:"Refined Interop"},a=void 0,s={unversionedId:"zio-json/interop/refined",id:"zio-json/interop/refined",title:"Refined Interop",description:"Installation",source:"@site/docs/zio-json/interop/refined.md",sourceDirName:"zio-json/interop",slug:"/zio-json/interop/refined",permalink:"/zio-json/interop/refined",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-json/interop/refined.md",tags:[],version:"current",frontMatter:{id:"refined",title:"Refined Interop"},sidebar:"ecosystem-sidebar",previous:{title:"HTTP4s Interop",permalink:"/zio-json/interop/http4s"},next:{title:"Scalaz 7.x Interop",permalink:"/zio-json/interop/scalaz-7x"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...r}=e;return(0,o.yg)(u,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"installation"},"Installation"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  "dev.zio" % "zio-json-interop-refined" % "0.7.0"\n)\n')),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.json._\nimport zio.json.interop.refined._\n\nimport eu.timepit.refined.api.Refined\nimport eu.timepit.refined.collection.NonEmpty\n\ncase class Person(name: String Refined NonEmpty)\n\nobject Person {\n  implicit val decoder: JsonDecoder[Person] = DeriveJsonDecoder.gen\n}\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'"""{ "name": "" }""".fromJson[Person]\n// res0: Either[String, Person] = Left(\n//   value = ".name(Predicate isEmpty() did not fail.)"\n// )\n')),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'"""{ "name": "Aurora" }""".fromJson[Person]\n// res1: Either[String, Person] = Right(value = Person(name = Aurora))\n')))}d.isMDXComponent=!0}}]);