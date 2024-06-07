"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[7167],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>d});var r=a(96540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=r.createContext({}),s=function(e){var n=r.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(a),g=t,d=p["".concat(l,".").concat(g)]||p[g]||f[g]||o;return a?r.createElement(d,i(i({ref:n},u),{},{components:a})):r.createElement(d,i({ref:n},u))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=g;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:t,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},55607:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=a(58168),t=(a(96540),a(15680));const o={id:"sandboxing",title:"Sandboxing",sidebar_label:"6. Sandboxing"},i=void 0,c={unversionedId:"reference/error-management/recovering/sandboxing",id:"reference/error-management/recovering/sandboxing",title:"Sandboxing",description:"We know that a ZIO effect may fail due to a failure, a defect, a fiber interruption, or a combination of these causes. So a ZIO effect may contain more than one cause. Using the ZIO#sandbox operator, we can sandbox all errors of a ZIO application, whether the cause is a failure, defect, or a fiber interruption or combination of these. This operator exposes the full cause of a ZIO effect into the error channel:",source:"@site/docs/reference/error-management/recovering/sandboxing.md",sourceDirName:"reference/error-management/recovering",slug:"/reference/error-management/recovering/sandboxing",permalink:"/reference/error-management/recovering/sandboxing",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/error-management/recovering/sandboxing.md",tags:[],version:"current",frontMatter:{id:"sandboxing",title:"Sandboxing",sidebar_label:"6. Sandboxing"},sidebar:"reference-sidebar",previous:{title:"5. Timing out",permalink:"/reference/error-management/recovering/timing-out"},next:{title:"Error Accumulation",permalink:"/reference/error-management/error-accumulation"}},l={},s=[],u={toc:s},p="wrapper";function f(e){let{components:n,...a}=e;return(0,t.yg)(p,(0,r.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"We know that a ZIO effect may fail due to a failure, a defect, a fiber interruption, or a combination of these causes. So a ZIO effect may contain more than one cause. Using the ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO#sandbox")," operator, we can sandbox all errors of a ZIO application, whether the cause is a failure, defect, or a fiber interruption or combination of these. This operator exposes the full cause of a ZIO effect into the error channel:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def sandbox: ZIO[R, Cause[E], A]\n}\n")),(0,t.yg)("p",null,"We can use the ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO#sandbox")," operator to uncover the full causes of an ",(0,t.yg)("em",{parentName:"p"},"exceptional effect"),". So we can see all the errors that occurred as a type of ",(0,t.yg)("inlineCode",{parentName:"p"},"Cause[E]")," at the error channel of the ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO")," data type. So then we can use normal error-handling operators such as ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO#catchSome")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO#catchAll")," operators:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  val effect: ZIO[Any, String, String] =\n    ZIO.succeed("primary result") *> ZIO.fail("Oh uh!")\n\n  val myApp: ZIO[Any, Cause[String], String] =\n    effect.sandbox.catchSome {\n      case Cause.Interrupt(fiberId, _) =>\n        ZIO.debug(s"Caught interruption of a fiber with id: $fiberId") *>\n          ZIO.succeed("fallback result on fiber interruption")\n      case Cause.Die(value, _) =>\n        ZIO.debug(s"Caught a defect: $value") *>\n          ZIO.succeed("fallback result on defect")\n      case Cause.Fail(value, _) =>\n        ZIO.debug(s"Caught a failure: $value") *>\n          ZIO.succeed("fallback result on failure")\n    }\n\n  val finalApp: ZIO[Any, String, String] = myApp.unsandbox.debug("final result")\n\n  def run = finalApp\n}\n\n// Output:\n// Caught a failure: Oh uh!\n// final result: fallback result on failure\n')),(0,t.yg)("p",null,"Using the ",(0,t.yg)("inlineCode",{parentName:"p"},"sandbox")," operation we are exposing the full cause of an effect. So then we have access to the underlying cause in more detail. After handling exposed causes using ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO#catch*")," operators, we can undo the ",(0,t.yg)("inlineCode",{parentName:"p"},"sandbox")," operation using the ",(0,t.yg)("inlineCode",{parentName:"p"},"unsandbox")," operation. It will submerge the full cause (",(0,t.yg)("inlineCode",{parentName:"p"},"Cause[E]"),") again:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval effect: ZIO[Any, String, String] =\n  ZIO.succeed("primary result") *> ZIO.fail("Oh uh!")\n\neffect            // ZIO[Any, String, String]\n  .sandbox        // ZIO[Any, Cause[String], String]\n  .catchSome(???) // ZIO[Any, Cause[String], String]\n  .unsandbox      // ZIO[Any, String, String]\n')),(0,t.yg)("p",null,"There is another version of sandbox called ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO#sandboxWith"),". This operator helps us to sandbox, then catch all causes, and then unsandbox back:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def sandboxWith[R1 <: R, E2, B](f: ZIO[R1, Cause[E], A] => ZIO[R1, Cause[E2], B])\n}\n")),(0,t.yg)("p",null,"Let's try the previous example using this operator:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  val effect: ZIO[Any, String, String] =\n    ZIO.succeed("primary result") *> ZIO.fail("Oh uh!")\n\n  val myApp =\n    effect.sandboxWith[Any, String, String] { e =>\n      e.catchSome {\n        case Cause.Interrupt(fiberId, _) =>\n          ZIO.debug(s"Caught interruption of a fiber with id: $fiberId") *>\n            ZIO.succeed("fallback result on fiber interruption")\n        case Cause.Die(value, _) =>\n          ZIO.debug(s"Caught a defect: $value") *>\n            ZIO.succeed("fallback result on defect")\n        case Cause.Fail(value, _) =>\n          ZIO.debug(s"Caught a failure: $value") *>\n            ZIO.succeed("fallback result on failure")\n      }\n    }\n  def run = myApp.debug\n}\n\n// Output:\n// Caught a failure: Oh uh!\n// fallback result on failure\n')))}f.isMDXComponent=!0}}]);