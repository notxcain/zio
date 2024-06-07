"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[98284],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,y=s["".concat(u,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const o={id:"other-supported-monads",title:"Other Supported Monads",sidebar_label:"Other Supported Monads"},i=void 0,l={unversionedId:"zio-direct/other-supported-monads",id:"zio-direct/other-supported-monads",title:"Other Supported Monads",description:"As of RC5, zio-direct now supports ZStream and ZPure as well as scala.concurrent.Future and scala.List. The latter two are largely fully functional but largely for demonstration purposes.",source:"@site/docs/zio-direct/other-supported-monads.md",sourceDirName:"zio-direct",slug:"/zio-direct/other-supported-monads",permalink:"/zio-direct/other-supported-monads",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-direct/other-supported-monads.md",tags:[],version:"current",frontMatter:{id:"other-supported-monads",title:"Other Supported Monads",sidebar_label:"Other Supported Monads"},sidebar:"ecosystem-sidebar",previous:{title:"IntelliJ Support",permalink:"/zio-direct/intellij-support"},next:{title:"Introduction to ZIO DynamoDB",permalink:"/zio-dynamodb/"}},u={},c=[{value:"ZStream",id:"zstream",level:2},{value:"ZPure",id:"zpure",level:2},{value:"List and Future",id:"list-and-future",level:2}],p={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(s,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"As of RC5, zio-direct now supports ZStream and ZPure as well as ",(0,a.yg)("inlineCode",{parentName:"p"},"scala.concurrent.Future")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"scala.List"),". The latter two are largely fully functional but largely for demonstration purposes."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Note that all of these are currently only supported in Scala 3.")),(0,a.yg)("h2",{id:"zstream"},"ZStream"),(0,a.yg)("p",null,"To use zio-direct with ZStream, add the following to your ",(0,a.yg)("inlineCode",{parentName:"p"},"build.sbt")," file."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-direct-streams" % "1.0.0-RC7"\n')),(0,a.yg)("p",null,"You can then use zio-direct with ZStream:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.direct.stream._\n\nval out =\n  defer {\n    val a = ZStream(1, 2, 3).each\n    val b = ZStream("foo", "bar").each\n    (a, b)\n  }\n\nout.runCollect\n// ZIO.succeed(Chunk((1,"foo"),(1,"bar"),(2,"foo"),(2,"bar"),(3,"foo"),(3,"bar")))\n')),(0,a.yg)("p",null,"Note that if you are also using zio-direct with ZIO, you should rename the ",(0,a.yg)("inlineCode",{parentName:"p"},"defer")," function to avoid conflicts:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.direct.stream.{ defer => deferStream, _ }\nimport zio.direct._\n\n// The `run` function of ZStream is called `each`\nval outStream: ZStream[Any, Nothing, (Int, String)] =\n  deferStream {\n    val a = ZStream(1, 2, 3).each\n    val b = ZStream("foo", "bar").each\n    (a, b)\n  }\n\nval outZio: ZIO[Any, Nothing, Chunk[(Int, String)]] =\n  defer {\n    val a: Chunk[(Int, String)] = outStream.runCollect.run\n    val b = ZIO.succeed((123, "baz")).run\n    a :+ b\n  }\n\n// Yields:\n// ZIO.succeed(Chunk((1,"foo"),(1,"bar"),(2,"foo"),(2,"bar"),(3,"foo"),(3,"bar"),(123, "baz")))\n')),(0,a.yg)("h2",{id:"zpure"},"ZPure"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},'Note that Metals auto-complete/type-info popups may be sluggish when using ZPure, especially when try/catch constructs are being used.\nIn some cases, you may need to wait for a "Loading..." popup message for 20-30 seconds although the actual (bloop) compile time\nwill just be a few seconds.')),(0,a.yg)("p",null,"To use zio-direct with ZPure, add the following to your ",(0,a.yg)("inlineCode",{parentName:"p"},"build.sbt")," file."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-direct-pure" % "1.0.0-RC7"\n')),(0,a.yg)("p",null,"In order to use zio-direct with ZPure, you first need to define a ",(0,a.yg)("inlineCode",{parentName:"p"},"deferWith[W, S]")," context which will define the Logging (",(0,a.yg)("inlineCode",{parentName:"p"},"W"),") and State (",(0,a.yg)("inlineCode",{parentName:"p"},"S"),") types for your ZPure computation."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Due to limitations of Scala 3, you may need to create the state object type in a separate file (or you may get cyclical-dependency compile-time errors)."),(0,a.yg)("pre",{parentName:"blockquote"},(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"val dc = deferWith[String, MyState]\nimport dc._\n"))),(0,a.yg)("p",null,"// The ",(0,a.yg)("inlineCode",{parentName:"p"},"run")," function of ZStream is called ",(0,a.yg)("inlineCode",{parentName:"p"},"eval"),"\nval out =\ndefer {\nval s1 = ZPure.get","[MyState]",'.eval.value\nZPure.set(MyState("bar")).eval\nval s2 = ZPure.get',"[MyState]",".eval.value\n(s1, s2)\n}"),(0,a.yg)("p",null,'out.provideState(MyState("foo")).run\n// ("foo", "bar")'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'\nIn order to avoid having to specify the state-type over and over again, several helpers are provided (they are imported from `dc._`).\n```scala\nval dc = deferWith[String, MyState]\nimport dc._\n\n// The `run` function of ZStream is called `eval`\nval out =\n  defer {\n    val s1 = getState().value\n    setState(MyState("bar"))\n    val s2 = getState().value\n    (s1, s2)\n  }\n\nout.provideState(MyState("foo")).run\n// ("foo", "bar")\n')),(0,a.yg)("h2",{id:"list-and-future"},"List and Future"),(0,a.yg)("p",null,"Support for Scala's ",(0,a.yg)("inlineCode",{parentName:"p"},"List")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Future")," objects is provided from zio-direct."),(0,a.yg)("p",null,"To use zio-direct with ",(0,a.yg)("inlineCode",{parentName:"p"},"List")," do the following:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.direct.list._\n\nval out =\n  defer {\n    val a = List(1, 2, 3)\n    val b = List("foo", "bar")\n    (a, b)\n  }\n\n// Yields:\n// List((1,"foo"),(1,"bar"),(2,"foo"),(2,"bar"),(3,"foo"),(3,"bar"))\n')),(0,a.yg)("p",null,"To use zio-direct with ",(0,a.yg)("inlineCode",{parentName:"p"},"Future")," do the following:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.direct.future._\nimport scala.concurrent.ExecutionContext.Implicits.global\n\nval out =\n  defer {\n    Future("a").run match {\n      case "a" => Future(1).run\n      case "b" => Future(2).run\n    }\n  }\n\n// Yields: Future(1)\n')),(0,a.yg)("p",null,"Note that it is not necessary to implement ExecutionContext.Implicits.global. You can\nimplicitly pass in any ExecutionContext you want. It just needs to be in-scope when you\ncall the ",(0,a.yg)("inlineCode",{parentName:"p"},"defer")," function (i.e. ",(0,a.yg)("inlineCode",{parentName:"p"},"zio.direct.future.defer"),")."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.direct.future._\n\ndef out(implicit ctx: ExecutionContext) =\n  defer {\n    Future("a").run match {\n      case "a" => Future(1).run\n      case "b" => Future(2).run\n    }\n  }\n\nout(scala.concurrent.ExecutionContext.global)\n// Yields: Future(1)\n')))}d.isMDXComponent=!0}}]);