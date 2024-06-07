"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[18500],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,y=u["".concat(p,".").concat(d)]||u[d]||g[d]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(58168),a=(n(96540),n(15680));const o={id:"index",title:"ZIO FTP"},i=void 0,s={unversionedId:"zio-ftp/index",id:"zio-ftp/index",title:"ZIO FTP",description:"ZIO FTP is a thin wrapper over (s)Ftp client for ZIO.",source:"@site/docs/zio-ftp/index.md",sourceDirName:"zio-ftp",slug:"/zio-ftp/",permalink:"/zio-ftp/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-ftp/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"ZIO FTP"},sidebar:"ecosystem-sidebar",previous:{title:"Transactions",permalink:"/zio-dynamodb/transactions"},next:{title:"Environment",permalink:"/zio-ftp/environment"}},p={},l=[{value:"Installation",id:"installation",level:2},{value:"How to use it?",id:"how-to-use-it",level:2},{value:"Example",id:"example",level:2},{value:"Support any commands?",id:"support-any-commands",level:2}],c={toc:l},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://zio.dev"},"ZIO FTP")," is a thin wrapper over (s)Ftp client for ",(0,a.yg)("a",{parentName:"p",href:"https://zio.dev"},"ZIO"),"."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/zio/zio/wiki/Project-Stages"},(0,a.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Project%20Stage-Production%20Ready-brightgreen.svg",alt:"Production Ready"}))," ",(0,a.yg)("img",{parentName:"p",src:"https://github.com/zio/zio-ftp/workflows/CI/badge.svg",alt:"CI Badge"})," ",(0,a.yg)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/releases/dev/zio/zio-ftp_2.13/"},(0,a.yg)("img",{parentName:"a",src:"https://img.shields.io/nexus/r/https/oss.sonatype.org/dev.zio/zio-ftp_2.13.svg?label=Sonatype%20Release",alt:"Sonatype Releases"}))," ",(0,a.yg)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/dev/zio/zio-ftp_2.13/"},(0,a.yg)("img",{parentName:"a",src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/dev.zio/zio-ftp_2.13.svg?label=Sonatype%20Snapshot",alt:"Sonatype Snapshots"}))," ",(0,a.yg)("a",{parentName:"p",href:"https://javadoc.io/doc/dev.zio/zio-ftp-docs_2.13"},(0,a.yg)("img",{parentName:"a",src:"https://javadoc.io/badge2/dev.zio/zio-ftp-docs_2.13/javadoc.svg",alt:"javadoc"}))," ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/zio/zio-ftp"},(0,a.yg)("img",{parentName:"a",src:"https://img.shields.io/github/stars/zio/zio-ftp?style=social",alt:"ZIO FTP"}))),(0,a.yg)("h2",{id:"installation"},"Installation"),(0,a.yg)("p",null,"In order to use this library, we need to add the following line in our ",(0,a.yg)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-ftp" % "0.4.2" \n')),(0,a.yg)("h2",{id:"how-to-use-it"},"How to use it?"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Imports")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.ftp._\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"FTP")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'// FTP\nval unsecureSettings = UnsecureFtpSettings("127.0.0.1", 21, FtpCredentials("foo", "bar"))\n\n//listing files\nFtp.ls("/").runCollect.provideLayer(unsecure(unsecureSettings))\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"FTPS")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'// FTPS\nval secureSettings = SecureFtpSettings("127.0.0.1", 21, FtpCredentials("foo", "bar"))\n\n//listing files\nSFtp.ls("/").runCollect.provideLayer(secure(secureSettings))\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"SFTP (support ssh key)")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'val sftpSettings = SecureFtpSettings("127.0.0.1", 22, FtpCredentials("foo", "bar"))\n\n//listing files\nSFtp.ls("/").runCollect.provideLayer(secure(sftpSettings))\n')),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("p",null,"First we need an FTP server, so let's create one:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'docker run -d \\\n    -p 21:21 \\\n    -p 21000-21010:21000-21010 \\\n    -e USERS="one|1234" \\\n    -e ADDRESS=localhost \\\n    delfer/alpine-ftp-server\n')),(0,a.yg)("p",null,"Now we can run the example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stream._\nimport zio.ftp._\nimport zio.ftp.Ftp._\n\nimport java.io.IOException\n\nobject ZIOFTPExample extends ZIOAppDefault {\n\n  private val settings =\n    UnsecureFtpSettings("127.0.0.1", 21, FtpCredentials("one", "1234"))\n\n  private val myApp: ZIO[Ftp, IOException, Unit] =\n    for {\n      _        <- Console.printLine("List of files at root directory:")\n      resource <- ls("/").runCollect\n      _        <- ZIO.foreach(resource)(e => Console.printLine(e.path))\n      path      = "~/file.txt"\n      _        <- upload(\n                    path,\n                    ZStream.fromChunk(\n                      Chunk.fromArray("Hello, ZIO FTP!\\nHello, World!".getBytes)\n                    )\n                  )\n      file     <- readFile(path)\n                    .via(ZPipeline.utf8Decode)\n                    .runCollect\n      _        <- Console.printLine(s"Content of $path file:")\n      _        <- Console.printLine(file.mkString)\n    } yield ()\n\n  override def run = myApp.provideSomeLayer(unsecure(settings))\n}\n')),(0,a.yg)("h2",{id:"support-any-commands"},"Support any commands?"),(0,a.yg)("p",null,"If you need a method which is not wrapped by the library, you can have access to underlying FTP client in a safe manner by using"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\ntrait FtpAccessors[+A] {\n  def execute[T](f: A => T): ZIO[Any, IOException, T]\n} \n")))}g.isMDXComponent=!0}}]);