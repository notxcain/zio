"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[19099],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),g=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=g(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=g(t),d=o,m=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return t?a.createElement(m,r(r({ref:n},p),{},{components:t})):a.createElement(m,r({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var g=2;g<i;g++)r[g]=t[g];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},67775:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var a=t(58168),o=(t(96540),t(15680));const i={id:"logging",title:"Introduction to Logging in ZIO",sidebar_label:"Logging"},r=void 0,l={unversionedId:"reference/observability/logging",id:"reference/observability/logging",title:"Introduction to Logging in ZIO",description:"ZIO supports a lightweight built-in logging facade that standardizes the interface to logging functionality. So it doesn't replace existing logging libraries, but also we can plug it into one of the existing logging backends.",source:"@site/docs/reference/observability/logging.md",sourceDirName:"reference/observability",slug:"/reference/observability/logging",permalink:"/reference/observability/logging",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/observability/logging.md",tags:[],version:"current",frontMatter:{id:"logging",title:"Introduction to Logging in ZIO",sidebar_label:"Logging"},sidebar:"reference-sidebar",previous:{title:"SubscriptionRef",permalink:"/reference/stream/subscription-ref"},next:{title:"Introduction to ZIO Metrics",permalink:"/reference/observability/metrics/"}},s={},g=[{value:"Logging Levels",id:"logging-levels",level:2},{value:"Spans",id:"spans",level:2},{value:"Log Annotations",id:"log-annotations",level:2},{value:"ZIO&#39;s Built-in Log Annotation",id:"zios-built-in-log-annotation",level:3},{value:"Typed Log Annotations",id:"typed-log-annotations",level:3},{value:"Further Reading",id:"further-reading",level:2}],p={toc:g},c="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"ZIO supports a lightweight built-in logging facade that standardizes the interface to logging functionality. So it doesn't replace existing logging libraries, but also we can plug it into one of the existing logging backends."),(0,o.yg)("p",null,"We can easily log using the ",(0,o.yg)("inlineCode",{parentName:"p"},"ZIO.log")," function:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval app =\n  for {\n    _ <- ZIO.log("Application started!")\n    name <- Console.readLine("Please enter your name: ")\n    _ <- ZIO.log("User entered its name: $name")\n    _ <- Console.printLine("Hello, $name")\n  } yield ()\n')),(0,o.yg)("h2",{id:"logging-levels"},"Logging Levels"),(0,o.yg)("p",null,"To log with a specific log-level, we can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"ZIO.logLevel")," combinator:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'ZIO.logLevel(LogLevel.Warning) {\n  ZIO.log("The response time exceeded its threshold!")\n}\n')),(0,o.yg)("p",null,"Or we can use the following functions directly:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"ZIO.logDebug")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"ZIO.logError")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"ZIO.logFatal")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"ZIO.logInfo")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"ZIO.logWarning"))),(0,o.yg)("p",null,"For example, for log with the error level, we can use ",(0,o.yg)("inlineCode",{parentName:"p"},"ZIO.logError")," like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'ZIO.logError("File does not exist: ~/var/www/favicon.ico")\n')),(0,o.yg)("h2",{id:"spans"},"Spans"),(0,o.yg)("p",null,"It also supports spans:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'ZIO.logSpan("myspan") {\n  ZIO.sleep(1.second) *> ZIO.log("The job is finished!")\n}\n')),(0,o.yg)("p",null,"ZIO Logging calculates the running duration of that span and includes that in the logging data corresponding to its span\nlabel."),(0,o.yg)("h2",{id:"log-annotations"},"Log Annotations"),(0,o.yg)("p",null,"ZIO by default adds some contextual information to the log messages, like the timestamp, log level, fiber ID, and source location. Sometimes these default contextual information are not sufficient to understand the circumstances under which they were generated. In such cases, we need to add custom contextual information to the log messages. We can do this using log annotations."),(0,o.yg)("h3",{id:"zios-built-in-log-annotation"},"ZIO's Built-in Log Annotation"),(0,o.yg)("p",null,"For example, in microservice environments, we might have several services that are communicating with each other. In such cases, we might want to correlate the logs generated by different services. We can do this by adding a log annotation called ",(0,o.yg)("inlineCode",{parentName:"p"},"correlation_id"),". This log annotation can be very simple, just a string, that is passed along with requests and responses. So, when we log a message, we know which request or response it is related to. ZIO has a built-in log annotation API that allows us to add such custom contextual information to the log messages:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  def randomDelay = Random.nextIntBounded(1000).flatMap(t => ZIO.sleep(t.millis))\n\n  def run =\n    ZIO.foreachParDiscard(Chunk("UserA", "UserB", "UserC")) { user =>\n      ZIO.logAnnotate("correlation_id", user) {\n        for {\n          _ <- ZIO.log("fetching user from database") *> randomDelay\n          _ <- ZIO.log("downloading user\'s profile picture") *> randomDelay\n        } yield ()\n      }\n    }\n}\n')),(0,o.yg)("p",null,"Here is an example of the log messages generated by the above code, each log message contains the ",(0,o.yg)("inlineCode",{parentName:"p"},"correlation_id")," log annotation:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'timestamp=2024-05-14T15:44:50.734129Z level=INFO thread=#zio-fiber-851563977 message="fetching user from database" location=zio.examples.MainApp.run file=MainApp.scala line=12 correlation_id=UserC\ntimestamp=2024-05-14T15:44:50.734127Z level=INFO thread=#zio-fiber-41969365 message="fetching user from database" location=zio.examples.MainApp.run file=MainApp.scala line=12 correlation_id=UserA\ntimestamp=2024-05-14T15:44:50.734123Z level=INFO thread=#zio-fiber-1775966732 message="fetching user from database" location=zio.examples.MainApp.run file=MainApp.scala line=12 correlation_id=UserB\ntimestamp=2024-05-14T15:44:50.928248Z level=INFO thread=#zio-fiber-851563977 message="downloading user\'s profile picture" location=zio.examples.MainApp.run file=MainApp.scala line=13 correlation_id=UserC\ntimestamp=2024-05-14T15:44:51.054287Z level=INFO thread=#zio-fiber-41969365 message="downloading user\'s profile picture" location=zio.examples.MainApp.run file=MainApp.scala line=13 correlation_id=UserA\ntimestamp=2024-05-14T15:44:51.534263Z level=INFO thread=#zio-fiber-1775966732 message="downloading user\'s profile picture" location=zio.examples.MainApp.run file=MainApp.scala line=13 correlation_id=UserB\n')),(0,o.yg)("h3",{id:"typed-log-annotations"},"Typed Log Annotations"),(0,o.yg)("p",null,"In more complex scenarios, we might want to add more structured information to the log messages. For example, we might want to add the user information to the log messages. In such cases, we need a typed log annotation that supports structured information, e.g. a ",(0,o.yg)("inlineCode",{parentName:"p"},"User")," case class that contains the user's id, name, email, etc. "),(0,o.yg)("p",null,"Using ",(0,o.yg)("a",{parentName:"p",href:"https://zio.dev/zio-logging"},"ZIO Logging"),", we can define typed log annotations using the ",(0,o.yg)("inlineCode",{parentName:"p"},"LogAnnotation")," class. So let's add required dependencies to the ",(0,o.yg)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  "dev.zio" %% "zio-logging" % "4.0.2",\n  "dev.zio" %% "zio-json"    % "0.6.2"\n)\n')),(0,o.yg)("p",null,"Now, let's assume we have a ",(0,o.yg)("inlineCode",{parentName:"p"},"User")," case class:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"case class User(firstName: String, lastName: String)\n")),(0,o.yg)("p",null,"We can define a typed log annotation for the ",(0,o.yg)("inlineCode",{parentName:"p"},"User")," case class like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.json.{DeriveJsonEncoder, EncoderOps}\nimport zio.logging.{LogAnnotation, LogFormat, consoleJson}\nimport zio._\n\nobject TypedLogAnnotationExample extends ZIOAppDefault {\n\n  case class User(firstName: String, lastName: String)\n\n  object User {\n    implicit val encoder = DeriveJsonEncoder.gen[User]\n  }\n\n  private val userLogAnnotation = LogAnnotation[User]("user", (_, u) => u, _.toJson)\n\n  override val bootstrap: ZLayer[ZIOAppArgs, Any, Any] =\n    Runtime.removeDefaultLoggers >>> consoleJson(\n      LogFormat.default + LogFormat.annotation(LogAnnotation.TraceId) +\n        LogFormat.annotation(userLogAnnotation)\n    )\n\n  def run =\n    for {\n      _ <- ZIO.foreachPar(List(User("John", "Doe"), User("Jane", "Doe"))) { user =>\n        {\n          ZIO.logInfo("Starting operation") *>\n            ZIO.sleep(500.millis) *>\n            ZIO.logInfo("Stopping operation")\n        } @@ userLogAnnotation(user)\n      }\n      _ <- ZIO.logInfo("Done")\n    } yield ()\n\n}\n')),(0,o.yg)("p",null,"The log messages generated by the above code will contain the ",(0,o.yg)("inlineCode",{parentName:"p"},"user")," log annotation:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{"timestamp":"2024-05-14T20:37:33.744171+04:30","level":"INFO","thread":"zio-fiber-6","message":"Starting operation","user":{"firstName":"Jane","lastName":"Doe"}}\n{"timestamp":"2024-05-14T20:37:33.744166+04:30","level":"INFO","thread":"zio-fiber-5","message":"Starting operation","user":{"firstName":"John","lastName":"Doe"}}\n{"timestamp":"2024-05-14T20:37:34.334837+04:30","level":"INFO","thread":"zio-fiber-5","message":"Stopping operation","user":{"firstName":"John","lastName":"Doe"}}\n{"timestamp":"2024-05-14T20:37:34.334848+04:30","level":"INFO","thread":"zio-fiber-6","message":"Stopping operation","user":{"firstName":"Jane","lastName":"Doe"}}\n{"timestamp":"2024-05-14T20:37:34.337953+04:30","level":"INFO","thread":"zio-fiber-4","message":"Done"}\n')),(0,o.yg)("h2",{id:"further-reading"},"Further Reading"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://zio.dev/zio-logging"},"ZIO Logging")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/guides/tutorials/enable-logging-in-a-zio-application"},"How to Enable Logging in a ZIO Application")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/guides/tutorials/create-custom-logger-for-a-zio-application"},"How to Create a Custom Logger for a ZIO Application?"))))}u.isMDXComponent=!0}}]);