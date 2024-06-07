"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[24548],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>u});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),v=o,u=m["".concat(s,".").concat(v)]||m[v]||d[v]||i;return n?r.createElement(u,a(a({ref:t},c),{},{components:n})):r.createElement(u,a({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=v;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},38117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(58168),o=(n(96540),n(15680));const i={id:"server-sent-events-in-endpoints",title:"Server Sent Events in Endpoints Example",sidebar_label:"Server Sent Events in Endpoints"},a=void 0,p={unversionedId:"zio-http/examples/server-sent-events-in-endpoints",id:"zio-http/examples/server-sent-events-in-endpoints",title:"Server Sent Events in Endpoints Example",description:"",source:"@site/docs/zio-http/examples/server-sent-events-in-endpoints.md",sourceDirName:"zio-http/examples",slug:"/zio-http/examples/server-sent-events-in-endpoints",permalink:"/zio-http/examples/server-sent-events-in-endpoints",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/examples/server-sent-events-in-endpoints.md",tags:[],version:"current",frontMatter:{id:"server-sent-events-in-endpoints",title:"Server Sent Events in Endpoints Example",sidebar_label:"Server Sent Events in Endpoints"},sidebar:"ecosystem-sidebar",previous:{title:"Multipart Form Data",permalink:"/zio-http/examples/multipart-form-data"},next:{title:"FAQ",permalink:"/zio-http/faq"}},s={},l=[],c={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(m,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala",metastring:'title="zio-http-example/src/main/scala/example/ServerSentEventEndpoint.scala"',title:'"zio-http-example/src/main/scala/example/ServerSentEventEndpoint.scala"'},'package example\n\nimport java.time.LocalDateTime\nimport java.time.format.DateTimeFormatter.ISO_LOCAL_TIME\n\nimport zio._\n\nimport zio.stream.ZStream\n\nimport zio.http._\nimport zio.http.codec.HttpCodec\nimport zio.http.endpoint.Endpoint\nimport zio.http.endpoint.EndpointMiddleware.None\n\nobject ServerSentEventEndpoint extends ZIOAppDefault {\n  import HttpCodec._\n\n  val stream: ZStream[Any, Nothing, ServerSentEvent] =\n    ZStream.repeatWithSchedule(ServerSentEvent(ISO_LOCAL_TIME.format(LocalDateTime.now)), Schedule.spaced(1.second))\n\n  val sseEndpoint: Endpoint[Unit, Unit, ZNothing, ZStream[Any, Nothing, ServerSentEvent], None] =\n    Endpoint(Method.GET / "sse").outStream[ServerSentEvent]\n\n  val sseRoute = sseEndpoint.implement(Handler.succeed(stream))\n\n  val routes: Routes[Any, Response] = sseRoute.toRoutes\n\n  override def run: ZIO[Any with ZIOAppArgs with Scope, Any, Any] = {\n    Server.serve(routes).provide(Server.default).exitCode\n  }\n\n}\n')))}d.isMDXComponent=!0}}]);