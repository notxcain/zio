"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[33658],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var i=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,g=d["".concat(l,".").concat(h)]||d[h]||u[h]||n;return r?i.createElement(g,o(o({ref:t},p),{},{components:r})):i.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<n;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},45190:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=r(58168),a=(r(96540),r(15680));const n={id:"faq",title:"Frequently Asked Questions",sidebar_label:"FAQ"},o=void 0,s={unversionedId:"zio-http/faq",id:"zio-http/faq",title:"Frequently Asked Questions",description:"I'm New to ZIO! How Can I Get Started with ZIO HTTP?",source:"@site/docs/zio-http/faq.md",sourceDirName:"zio-http",slug:"/zio-http/faq",permalink:"/zio-http/faq",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/faq.md",tags:[],version:"current",frontMatter:{id:"faq",title:"Frequently Asked Questions",sidebar_label:"FAQ"},sidebar:"ecosystem-sidebar",previous:{title:"Integration with ZIO Config",permalink:"/zio-http/guides/integration-with-zio-config"},next:{title:"Testing HTTP Applications",permalink:"/zio-http/tutorials/testing-http-apps"}},l={},c=[{value:"I&#39;m New to ZIO! How Can I Get Started with ZIO HTTP?",id:"im-new-to-zio-how-can-i-get-started-with-zio-http",level:3},{value:"What Libraries Does ZIO HTTP Rely On?",id:"what-libraries-does-zio-http-rely-on",level:3},{value:"I Love ZIO\u200c, But Don&#39;t Want to Use ZIO HTTP. What Alternatives Do I Have?",id:"i-love-zio-but-dont-want-to-use-zio-http-what-alternatives-do-i-have",level:3},{value:"How Can I Serialize/Deserialize Data to/from JSON in Requests and Responses?",id:"how-can-i-serializedeserialize-data-tofrom-json-in-requests-and-responses",level:3},{value:"How Can I Handle CORS Requests in ZIO HTTP?",id:"how-can-i-handle-cors-requests-in-zio-http",level:3},{value:"How Does ZIO HTTP Handle Errors?",id:"how-does-zio-http-handle-errors",level:3},{value:"Is ZIO HTTP Suitable for Building High-performance HTTP Servers?",id:"is-zio-http-suitable-for-building-high-performance-http-servers",level:3},{value:"Can I integrate ZIO HTTP with Existing Scala/Java Libraries?",id:"can-i-integrate-zio-http-with-existing-scalajava-libraries",level:3},{value:"Is ZIO HTTP Suitable for Building Microservices?",id:"is-zio-http-suitable-for-building-microservices",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,i.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"im-new-to-zio-how-can-i-get-started-with-zio-http"},"I'm New to ZIO! How Can I Get Started with ZIO HTTP?"),(0,a.yg)("p",null,"If you are new to ZIO, you can start by reading the ",(0,a.yg)("a",{parentName:"p",href:"https://zio.dev/overview/getting-started"},"ZIO documentation")," to understand the core concepts of ZIO. Once you are comfortable with ZIO, you can explore the ZIO HTTP documentation to learn how to build HTTP applications using ZIO. There are also several ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/zio/zio-http/tree/main/zio-http-example/src/main/scala/example"},"examples")," available in the ZIO HTTP repository that help you get started quickly."),(0,a.yg)("h3",{id:"what-libraries-does-zio-http-rely-on"},"What Libraries Does ZIO HTTP Rely On?"),(0,a.yg)("p",null,"ZIO HTTP is built on top of ",(0,a.yg)("a",{parentName:"p",href:"https://netty.io/"},"Netty")," for networking operations. It also leverages ",(0,a.yg)("a",{parentName:"p",href:"https://zio.dev/reference/core/zio/"},"ZIO Core"),", ",(0,a.yg)("a",{parentName:"p",href:"https://zio.dev/zio-schema/"},"ZIO Schema"),", and ",(0,a.yg)("a",{parentName:"p",href:"https://zio.dev/reference/stream/"},"ZIO Stream")," for concurrency, encoding/decoding, and streaming, respectively."),(0,a.yg)("h3",{id:"i-love-zio-but-dont-want-to-use-zio-http-what-alternatives-do-i-have"},"I Love ZIO\u200c, But Don't Want to Use ZIO HTTP. What Alternatives Do I Have?"),(0,a.yg)("p",null,"If you prefer not to use ZIO HTTP but still want to build HTTP applications using ZIO, you can consider using ",(0,a.yg)("a",{parentName:"p",href:"https://http4s.org/"},"Http4s"),", a functional HTTP library for Scala that can be integrated with ZIO effects (",(0,a.yg)("a",{parentName:"p",href:"https://github.com/zio/zio-json/tree/series/2.x/examples/interop-http4s"},"link"),"). Additionally, if you are looking for a declarative approach to building HTTP applications, similar to ZIO HTTP's ",(0,a.yg)("inlineCode",{parentName:"p"},"Endpoint")," API, you can explore ",(0,a.yg)("a",{parentName:"p",href:"https://tapir.softwaremill.com/"},"Tapir"),". It's easy to integrate Tapir with ZIO using ",(0,a.yg)("a",{parentName:"p",href:"https://tapir.softwaremill.com/en/latest/server/ziohttp.html"},"tapir-zio-http-server")," module."),(0,a.yg)("h3",{id:"how-can-i-serializedeserialize-data-tofrom-json-in-requests-and-responses"},"How Can I Serialize/Deserialize Data to/from JSON in Requests and Responses?"),(0,a.yg)("p",null,"ZIO HTTP provides built-in support for JSON serialization and deserialization using ",(0,a.yg)("a",{parentName:"p",href:"https://zio.dev/zio-schema/"},"ZIO Schema"),". You can derive JSON codecs for your custom data types using ZIO Schema and use them to encode/decode data to/from request/response bodies. Check out the ",(0,a.yg)("a",{parentName:"p",href:"/zio-http/reference/body/binary_codecs"},"BinaryCodecs")," section in the documentation for more details."),(0,a.yg)("h3",{id:"how-can-i-handle-cors-requests-in-zio-http"},"How Can I Handle CORS Requests in ZIO HTTP?"),(0,a.yg)("p",null,"ZIO has several middlewares including ",(0,a.yg)("inlineCode",{parentName:"p"},"CORS")," that can be used to handle cross-origin resource sharing requests. Check out the ",(0,a.yg)("a",{parentName:"p",href:"/zio-http/reference/aop/middleware"},"Middleware")," section in the documentation for more details."),(0,a.yg)("h3",{id:"how-does-zio-http-handle-errors"},"How Does ZIO HTTP Handle Errors?"),(0,a.yg)("p",null,"As a ZIO-based library, ZIO HTTP leverages ZIO's error-handling capabilities to handle errors in HTTP applications. You can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO#catch**")," methods to handle errors at various levels in your application. If you are not familiar with error handling in ZIO, we recommend reading the ",(0,a.yg)("a",{parentName:"p",href:"https://zio.dev/reference/error-management/"},"ZIO documentation"),"."),(0,a.yg)("p",null,"Besides ZIO's error handling, ZIO HTTP has built-in support for handling errors. It has a notion of handled and unhandled errors at the HTTP layer. Let's say we have a ",(0,a.yg)("inlineCode",{parentName:"p"},"Handler[-R, +Err, Request, Response]"),", if the error channel is ",(0,a.yg)("inlineCode",{parentName:"p"},"Response")," or a sub-type of it, it is considered as handled error, otherwise, it is considered as a handler with the unhandled error."),(0,a.yg)("p",null,"We have the same thing at the route level. Let's say we have a ",(0,a.yg)("inlineCode",{parentName:"p"},"Routes[-Env, +Err]"),", if the error channel is ",(0,a.yg)("inlineCode",{parentName:"p"},"Response")," or a sub-type of it, it is considered as a collection of routes with all the errors handled, otherwise, it is considered as a collection of routes with unhandled errors. Before we can serve all routes, we should convert all unhandled errors to handled errors, using the ",(0,a.yg)("inlineCode",{parentName:"p"},"Routes#handlerError")," method."),(0,a.yg)("h3",{id:"is-zio-http-suitable-for-building-high-performance-http-servers"},"Is ZIO HTTP Suitable for Building High-performance HTTP Servers?"),(0,a.yg)("p",null,"Yes, ZIO HTTP is designed for performance, leveraging non-blocking I/O and asynchronous concurrency to handle high loads efficiently."),(0,a.yg)("h3",{id:"can-i-integrate-zio-http-with-existing-scalajava-libraries"},"Can I integrate ZIO HTTP with Existing Scala/Java Libraries?"),(0,a.yg)("p",null,"Yes, ZIO HTTP provides interoperability with existing libraries, allowing you to leverage functionality from the Scala/Java ecosystem seamlessly by importing blocking and non-blocking operations."),(0,a.yg)("h3",{id:"is-zio-http-suitable-for-building-microservices"},"Is ZIO HTTP Suitable for Building Microservices?"),(0,a.yg)("p",null,"Yes, ZIO HTTP along with the ZIO ecosystem is well-suited for building microservices, which provides many aspects that are essential for building cloud-native applications:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Configuration"),"- ZIO has a ",(0,a.yg)("a",{parentName:"li",href:"https://zio.dev/reference/configuration/"},"built-in configuration system")," that allows you to manage different configurations for different environments. It also has ",(0,a.yg)("a",{parentName:"li",href:"https://zio.dev/zio-config/"},"ZIO Config")," that provides various config providers to load configurations from different sources, such as HOCON, JSON, YAML, and environment variables."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Logging and LogAnnotations"),"- ZIO provides a ",(0,a.yg)("a",{parentName:"li",href:"https://zio.dev/reference/observability/logging"},"structured logging system")," that allows you to log messages with different log levels. You can also use log annotations to add additional context to log messages which can be useful for debugging and tracing in distributed systems. We can use any of the backend logging supported by ",(0,a.yg)("a",{parentName:"li",href:"https://zio.dev/zio-logging/"},"ZIO Logging"),", such as Log4j, Logback, and more."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Distributed Tracing"),"- In microservice architectures, distributed tracing is essential for monitoring the flow of requests across different services. ",(0,a.yg)("a",{parentName:"li",href:"https://zio.dev/zio-telemetry/"},"ZIO Telemetry")," supports distributed tracing using OpenTelemetry, OpenTracing, and OpenCensus."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Instrumenting Metrics"),"- ZIO has ",(0,a.yg)("a",{parentName:"li",href:"https://zio.dev/reference/observability/metrics/"},"built-in support for metrics instrumentation"),", with popular ",(0,a.yg)("a",{parentName:"li",href:"https://zio.dev/zio-metrics-connectors/"},"metrics backends")," such as Prometheus, Datadog, New Relic, and more."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Resilience to failures"),"- When building microservices, it is essential to handle failures gracefully. There is a project called ",(0,a.yg)("a",{parentName:"li",href:"https://zio.dev/ecosystem/community/"},"Rezilience")," that provides various resilience patterns such as retries, timeouts, circuit breakers, rate limiting, and more to build robust and resilient microservices."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Concurrency and Parallelism"),"- ZIO provides a powerful concurrency model that allows you to write highly concurrent and parallel applications. With ",(0,a.yg)("a",{parentName:"li",href:"https://zio.dev/reference/concurrency/fiber/"},"ZIO Fiber"),", and its ",(0,a.yg)("a",{parentName:"li",href:"https://zio.dev/reference/concurrency/#concurrency-primitives"},"Concurrency Primitives"),", you can write highly concurrent applications."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Resource-safety")," - ZIO provides a resource system that ensures resources are acquired and released safely. With ",(0,a.yg)("a",{parentName:"li",href:"https://zio.dev/reference/resource/scope/"},"ZIO Scopes")," and also ",(0,a.yg)("a",{parentName:"li",href:"https://zio.dev/reference/resource/scope/#converting-resources-into-other-zio-data-types"},"scoped Layers"),", we can manage resources in a structured way."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"ZIO Aspect and Middlewares"),"- Both ZIO and ZIO HTTP support the idea of aspects and middlewares, which can be used to add cross-cutting concerns such as logging, metrics, authentication, and more to your services."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Modularity"),"- With ",(0,a.yg)("a",{parentName:"li",href:"https://zio.dev/reference/service-pattern/"},"service pattern")," in ZIO, we can define our services along with their dependencies, and finally, we can start the service with its dependencies. This pattern is useful for building modular and testable services.")))}u.isMDXComponent=!0}}]);