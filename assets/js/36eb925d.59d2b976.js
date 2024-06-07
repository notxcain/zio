"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[76663],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),y=a,d=u["".concat(p,".").concat(y)]||u[y]||m[y]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},81437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const o={id:"concrete-entity",title:"Concrete Entity Example",sidebar_label:"Concrete Entity"},i=void 0,c={unversionedId:"zio-http/examples/concrete-entity",id:"zio-http/examples/concrete-entity",title:"Concrete Entity Example",description:"",source:"@site/docs/zio-http/examples/concrete-entity.md",sourceDirName:"zio-http/examples",slug:"/zio-http/examples/concrete-entity",permalink:"/zio-http/examples/concrete-entity",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/examples/concrete-entity.md",tags:[],version:"current",frontMatter:{id:"concrete-entity",title:"Concrete Entity Example",sidebar_label:"Concrete Entity"},sidebar:"ecosystem-sidebar",previous:{title:"CLI",permalink:"/zio-http/examples/cli"},next:{title:"Multipart Form Data",permalink:"/zio-http/examples/multipart-form-data"}},p={},s=[],l={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala",metastring:'title="zio-http-example/src/main/scala/example/ConcreteEntity.scala"',title:'"zio-http-example/src/main/scala/example/ConcreteEntity.scala"'},"package example\n\nimport zio._\n\nimport zio.http._\n\n/**\n * Example to build app on concrete entity\n */\nobject ConcreteEntity extends ZIOAppDefault {\n  // Request\n  case class CreateUser(name: String)\n\n  // Response\n  case class UserCreated(id: Long)\n\n  val user: Handler[Any, Nothing, CreateUser, UserCreated] =\n    Handler.fromFunction[CreateUser] { case CreateUser(_) =>\n      UserCreated(2)\n    }\n\n  val app: Routes[Any, Response] =\n    user\n      .contramap[Request](req => CreateUser(req.path.encode))     // Http[Any, Nothing, Request, UserCreated]\n      .map(userCreated => Response.text(userCreated.id.toString)) // Http[Any, Nothing, Request, Response]\n      .toRoutes\n\n  // Run it like any simple app\n  val run =\n    Server.serve(app).provide(Server.default)\n}\n")))}m.isMDXComponent=!0}}]);