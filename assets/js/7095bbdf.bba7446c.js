"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[80402],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),h=a,g=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},49325:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const o={id:"overview",title:"Overview"},i=void 0,s={unversionedId:"zio-http/reference/overview",id:"zio-http/reference/overview",title:"Overview",description:"ZIO HTTP offers an expressive API for creating HTTP applications. It uses a domain-specific language (DSL) to define routes and handlers. Both server and client are designed in terms of HTTP as a function, so they are functions from Request to Response.",source:"@site/docs/zio-http/reference/overview.md",sourceDirName:"zio-http/reference",slug:"/zio-http/reference/overview",permalink:"/zio-http/reference/overview",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/reference/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Overview"},sidebar:"ecosystem-sidebar",previous:{title:"Reference",permalink:"/zio-http/reference/"},next:{title:"Server",permalink:"/zio-http/reference/server"}},l={},p=[{value:"Core Concepts",id:"core-concepts",level:2},{value:"1.Routes",id:"1routes",level:3},{value:"2. Route",id:"2-route",level:3},{value:"3. Handler",id:"3-handler",level:3},{value:"Accessing the Request",id:"accessing-the-request",level:2},{value:"Accessing Services from The Environment",id:"accessing-services-from-the-environment",level:2},{value:"WebSocket Connection",id:"websocket-connection",level:2},{value:"Server",id:"server",level:2},{value:"Client",id:"client",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"ZIO HTTP offers an expressive API for creating HTTP applications. It uses a domain-specific language (DSL) to define routes and handlers. Both server and client are designed in terms of ",(0,a.yg)("strong",{parentName:"p"},"HTTP as a function"),", so they are functions from ",(0,a.yg)("inlineCode",{parentName:"p"},"Request")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"Response"),"."),(0,a.yg)("h2",{id:"core-concepts"},"Core Concepts"),(0,a.yg)("p",null,"ZIO HTTP has powerful functional domains that help in creating, modifying, and composing apps easily. Let's take a look at the core domain:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Routes")," - A collection of ",(0,a.yg)("inlineCode",{parentName:"li"},"Route"),"s. If the error type of the routes is ",(0,a.yg)("inlineCode",{parentName:"li"},"Response"),", then they can be served."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Route")," - A single route that can be matched against an HTTP ",(0,a.yg)("inlineCode",{parentName:"li"},"Request")," and produce a ",(0,a.yg)("inlineCode",{parentName:"li"},"Response"),". It comprises a ",(0,a.yg)("inlineCode",{parentName:"li"},"RoutePattern")," and a ",(0,a.yg)("inlineCode",{parentName:"li"},"Handler"),":",(0,a.yg)("ol",{parentName:"li"},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"RoutePattern")," - A pattern that can be matched against an HTTP ",(0,a.yg)("inlineCode",{parentName:"li"},"Request"),". It is a combination of ",(0,a.yg)("inlineCode",{parentName:"li"},"Method")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"PathCodec")," which can be used to match the ",(0,a.yg)("inlineCode",{parentName:"li"},"Method")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"Path")," of the ",(0,a.yg)("inlineCode",{parentName:"li"},"Request"),"."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"Handler")," - A function that can convert a ",(0,a.yg)("inlineCode",{parentName:"li"},"Request")," into a ",(0,a.yg)("inlineCode",{parentName:"li"},"Response"),".")))),(0,a.yg)("p",null,"Let's see each of these concepts inside a simple example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.http._\n\nobject ExampleServer extends ZIOAppDefault {\n\n  // A route that matches GET requests to /greet\n  // It doesn\'t require any service from the ZIO environment \n  // so the first type parameter is Any\n  // All its errors are handled so the second type parameter is Nothing\n  val greetRoute: Route[Any, Nothing] =\n    // The whole Method.GET / "greet" is a RoutePattern\n    Method.GET / "greet" ->\n            // The handler is a function that takes a Request and returns a Response\n            handler { (req: Request) =>\n              val name = req.queryParamToOrElse("name", "World")\n              Response.text(s"Hello $name!")\n            }\n\n  // A route that matches POST requests to /echo\n  // It doesn\'t require any service from the ZIO environment\n  // It is an unhandled route so the second type parameter is something other than Nothing\n  val echoRoute: Route[Any, Throwable] =\n    Method.POST / "echo" -> handler { (req: Request) =>\n      req.body.asString.map(Response.text(_))\n    }\n\n  // The Routes that don\'t require any service from the ZIO environment,\n  // so the first type parameter is Any.\n  // All the errors are handled by turning them into a Response.\n  val routes: Routes[Any, Response] =\n    // List of all the routes\n    Routes(greetRoute, echoRoute)\n            // Handle all unhandled errors\n            .handleError(e => Response.internalServerError(e.getMessage))\n\n  // Serving the routes using the default server layer on port 8080\n  def run = Server.serve(routes).provide(Server.default)\n}\n')),(0,a.yg)("h3",{id:"1routes"},"1.Routes"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"Routes")," is a collection of ",(0,a.yg)("inlineCode",{parentName:"p"},"Route")," values. It can be created using its default constructor:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.http._\n\nval app: Routes[Any, Response] =\n  Routes(greetRoute, echoRoute)\n    .handleError(e => Response.internalServerError(e.getMessage))\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"Handler")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Route")," can be transformed to ",(0,a.yg)("inlineCode",{parentName:"p"},"Routes")," by the ",(0,a.yg)("inlineCode",{parentName:"p"},".toRoutes")," method. To serve the routes, all errors should be handled by converting them into a ",(0,a.yg)("inlineCode",{parentName:"p"},"Response")," using for example the ",(0,a.yg)("inlineCode",{parentName:"p"},".handleError")," method."),(0,a.yg)("p",null,"For handling routes, ZIO HTTP has a ",(0,a.yg)("a",{parentName:"p",href:"/zio-http/reference/routing/routes"},(0,a.yg)("inlineCode",{parentName:"a"},"Routes"))," value, which allows us to aggregate a collection of individual routes. Behind the scenes, ZIO HTTP builds an efficient prefix-tree whenever needed to optimize dispatch."),(0,a.yg)("h3",{id:"2-route"},"2. Route"),(0,a.yg)("p",null,"Each ",(0,a.yg)("inlineCode",{parentName:"p"},"Route")," is a combination of a ",(0,a.yg)("a",{parentName:"p",href:"/zio-http/reference/routing/route_pattern"},(0,a.yg)("inlineCode",{parentName:"a"},"RoutePattern"))," and a ",(0,a.yg)("a",{parentName:"p",href:"/zio-http/reference/handler"},(0,a.yg)("inlineCode",{parentName:"a"},"Handler")),". The ",(0,a.yg)("inlineCode",{parentName:"p"},"RoutePattern")," is a combination of a ",(0,a.yg)("inlineCode",{parentName:"p"},"Method")," and a ",(0,a.yg)("a",{parentName:"p",href:"/zio-http/reference/routing/path_codec"},(0,a.yg)("inlineCode",{parentName:"a"},"PathCodec"))," that can be used to match the method and path of the request. The ",(0,a.yg)("inlineCode",{parentName:"p"},"Handler")," is a function that can convert a ",(0,a.yg)("inlineCode",{parentName:"p"},"Request")," into a ",(0,a.yg)("inlineCode",{parentName:"p"},"Response"),"."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"PathCodec")," can be parameterized to extract values from the path. In such cases, the ",(0,a.yg)("inlineCode",{parentName:"p"},"Handler")," should be a function that accepts the extracted values besides the ",(0,a.yg)("inlineCode",{parentName:"p"},"Request"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\n\nval routes = Routes(\n  Method.GET / "user" / int("id") ->\n    handler { (id: Int, req: Request) =>\n      Response.text(s"Requested User ID: $id")\n    }\n)\n')),(0,a.yg)("p",null,"To learn more about routes, see the ",(0,a.yg)("a",{parentName:"p",href:"/zio-http/reference/routing/routes"},"Routes")," page."),(0,a.yg)("h3",{id:"3-handler"},"3. Handler"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"Handler")," describes the transformation from an incoming ",(0,a.yg)("inlineCode",{parentName:"p"},"Request")," to an outgoing ",(0,a.yg)("inlineCode",{parentName:"p"},"Response"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'val helloHandler =\n  handler { (_: Request) =>\n    Response.text("Hello World!")\n  }\n')),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"Handler")," can be effectful, in which case it should be a function that returns a ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO")," effect, e.g.:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"val randomGeneratorHandler = \n  handler { (_: Request) =>\n    Random.nextIntBounded(100).map(_.toString).map(Response.text(_))\n  }\n")),(0,a.yg)("p",null,"There are several ways to create a ",(0,a.yg)("inlineCode",{parentName:"p"},"Handler"),", to learn more about handlers, see the ",(0,a.yg)("a",{parentName:"p",href:"reference/handler.md"},"Handlers")," page."),(0,a.yg)("h2",{id:"accessing-the-request"},"Accessing the Request"),(0,a.yg)("p",null,"To access the request, just create a handler that accepts the request:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\nimport zio._\n\nval routes = Routes(\n  Method.GET / "fruits" / "a" -> handler { (req: Request) =>\n    Response.text("URL:" + req.url.path.toString + " Headers: " + req.headers)\n  },\n\n  Method.POST / "fruits" / "a" -> handler { (req: Request) =>\n    req.body.asString.map(Response.text(_))\n  }\n)\n')),(0,a.yg)("p",null,"To learn more about the request, see the ",(0,a.yg)("a",{parentName:"p",href:"/zio-http/reference/request"},"Request")," page."),(0,a.yg)("h2",{id:"accessing-services-from-the-environment"},"Accessing Services from The Environment"),(0,a.yg)("p",null,"ZIO HTTP is built on top of ZIO, which means that we can access services from the environment in our handlers. For example, we can access a ",(0,a.yg)("inlineCode",{parentName:"p"},"Ref[Int]")," service to create a simple counter:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.http._\n\nobject CounterExample extends ZIOAppDefault {\n  val routes: Routes[Ref[Int], Response] =\n    Routes(\n      Method.GET / "count" / int("n") ->\n              handler { (n: Int, _: Request) =>\n                for {\n                  ref <- ZIO.service[Ref[Int]]\n                  res <- ref.updateAndGet(_ + n)\n                } yield Response.text(s"Counter: $res")\n              },\n      )\n\n  def run = Server.serve(routes).provide(Server.default, ZLayer.fromZIO(Ref.make(0)))\n}\n')),(0,a.yg)("p",null,"Finally, we should provide the required services to the server using the ",(0,a.yg)("inlineCode",{parentName:"p"},"provide")," method. In the above example, we provided the ",(0,a.yg)("inlineCode",{parentName:"p"},"Ref[Int]")," service using the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZLayer.fromZIO")," method."),(0,a.yg)("h2",{id:"websocket-connection"},"WebSocket Connection"),(0,a.yg)("p",null,"To handle WebSocket connections, we can use ",(0,a.yg)("inlineCode",{parentName:"p"},"Handler.webSocket")," to create a socket app. To create a socket app, we need to create a socket that accepts ",(0,a.yg)("inlineCode",{parentName:"p"},"WebSocketChannel")," and produces ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO"),". Finally, we need to convert socketApp to ",(0,a.yg)("inlineCode",{parentName:"p"},"Response")," using ",(0,a.yg)("inlineCode",{parentName:"p"},"toResponse"),", so that we can run it like any other HTTP app."),(0,a.yg)("p",null,"The below example shows a simple socket app, which sends ",(0,a.yg)("inlineCode",{parentName:"p"},"WebsSocketTextFrame"),' "BAR" on receiving ',(0,a.yg)("inlineCode",{parentName:"p"},"WebsSocketTextFrame"),' "FOO":'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\nimport zio.stream._\nimport zio._\n\nval socket =\n  Handler.webSocket { channel =>\n    channel.receiveAll {\n      case ChannelEvent.Read(WebSocketFrame.Text("FOO")) =>\n        channel.send(ChannelEvent.Read(WebSocketFrame.text("BAR")))\n      case _ =>\n        ZIO.unit\n    }\n  }\n\nval routes = \n  Routes(\n    Method.GET / "greet" / string("name") -> handler { (name: String, req: Request) => \n      Response.text(s"Greetings {$name}!")\n    },\n    Method.GET / "ws" -> handler(socket.toResponse)\n  )\n')),(0,a.yg)("p",null,"We have a more detailed explanation of the WebSocket connection on the ",(0,a.yg)("a",{parentName:"p",href:"/zio-http/reference/socket/"},"Socket")," page."),(0,a.yg)("h2",{id:"server"},"Server"),(0,a.yg)("p",null,"As we have seen how to create HTTP apps, the only thing left is to run an HTTP server and serve requests."),(0,a.yg)("p",null,"ZIO HTTP provides a way to set configurations for our server. The server can be configured according to the leak detection level, request size, address etc."),(0,a.yg)("p",null,"To launch our app, we need to start the server on a port. The below example shows a simple HTTP app that responds with empty content and a ",(0,a.yg)("inlineCode",{parentName:"p"},"200")," status code, deployed on port ",(0,a.yg)("inlineCode",{parentName:"p"},"8090")," using ",(0,a.yg)("inlineCode",{parentName:"p"},"Server.start"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.http._\nimport zio._\n\nobject HelloWorld extends ZIOAppDefault {\n  val routes = Handler.ok.toRoutes\n\n  override def run =\n    Server.serve(routes).provide(Server.defaultWithPort(8090))\n}\n")),(0,a.yg)("p",null,"Finally, we provided the default server with the port ",(0,a.yg)("inlineCode",{parentName:"p"},"8090")," to the app. To learn more about the server, see the ",(0,a.yg)("a",{parentName:"p",href:"/zio-http/reference/server"},"Server")," page."),(0,a.yg)("h2",{id:"client"},"Client"),(0,a.yg)("p",null,"Besides creating HTTP apps, ZIO HTTP also provides a way to create HTTP clients. The client can be used to send requests to the server and receive responses:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.http._\n\nobject ClientExample extends ZIOAppDefault {\n\n  val app =\n    for {\n      client   <- ZIO.serviceWith[Client](_.host("localhost").port(8090))\n      response <- client.request(Request.get("/"))\n      _        <- ZIO.debug("Response Status: " + response.status)\n    } yield ()\n\n  def run = app.provide(Client.default, Scope.default)\n}\n')),(0,a.yg)("p",null,"In the above example, we obtained the ",(0,a.yg)("inlineCode",{parentName:"p"},"Client")," service from the environment and sent a ",(0,a.yg)("inlineCode",{parentName:"p"},"GET")," request to the server. Finally, to run the client app, we provided the default ",(0,a.yg)("inlineCode",{parentName:"p"},"Client")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Scope")," services to the app. For more information about the client, see the ",(0,a.yg)("a",{parentName:"p",href:"/zio-http/reference/client"},"Client")," page."))}u.isMDXComponent=!0}}]);