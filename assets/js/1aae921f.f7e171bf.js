"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[30423],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>h});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=m(t),u=r,h=l["".concat(s,".").concat(u)]||l[u]||p[u]||o;return t?a.createElement(h,c(c({ref:n},d),{},{components:t})):a.createElement(h,c({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[l]="string"==typeof e?e:r,c[1]=i;for(var m=2;m<o;m++)c[m]=t[m];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},68173:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=t(58168),r=(t(96540),t(15680));const o={id:"manual-schema-construction",title:"Manual Schema Construction"},c=void 0,i={unversionedId:"zio-schema/manual-schema-construction",id:"zio-schema/manual-schema-construction",title:"Manual Schema Construction",description:"Assume we have a domain containing following models:",source:"@site/docs/zio-schema/manual-schema-construction.md",sourceDirName:"zio-schema",slug:"/zio-schema/manual-schema-construction",permalink:"/zio-schema/manual-schema-construction",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-schema/manual-schema-construction.md",tags:[],version:"current",frontMatter:{id:"manual-schema-construction",title:"Manual Schema Construction"},sidebar:"ecosystem-sidebar",previous:{title:"Basic Building Blocks",permalink:"/zio-schema/basic-building-blocks"},next:{title:"Automatic Schema Derivation",permalink:"/zio-schema/automatic-schema-derivation"}},s={},m=[],d={toc:m},l="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(l,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Assume we have a domain containing following models:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"object Domain {\n  final case class Person(name: String, age: Int)\n\n  sealed trait PaymentMethod\n\n  object PaymentMethod {\n    final case class CreditCard(number: String, expirationMonth: Int, expirationYear: Int) extends PaymentMethod\n    final case class WireTransfer(accountNumber: String, bankCode: String) extends PaymentMethod\n  }\n\n  final case class Customer(person: Person, paymentMethod: PaymentMethod)\n  \n}\n")),(0,r.yg)("p",null,"Let's begin by creating a schema for the ",(0,r.yg)("inlineCode",{parentName:"p"},"Person")," data type:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.schema._\n\nfinal case class Person(name: String, age: Int)\n\nobject Person {\n  implicit val schema: Schema[Person] =\n    Schema.CaseClass2[String, Int, Person](\n      id0 = TypeId.fromTypeName("Person"),\n      field01 = Schema.Field(name0 = "name", schema0 = Schema[String], get0 = _.name, set0 = (p, x) => p.copy(name = x)),\n      field02 = Schema.Field(name0 = "age", schema0 = Schema[Int], get0 = _.age, set0 = (person, age) => person.copy(age = age)),\n      construct0 = (name, age) => Person(name, age),\n    )\n}\n')),(0,r.yg)("p",null,"The next step is writing schema for ",(0,r.yg)("inlineCode",{parentName:"p"},"PaymentMethod"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.schema._\n\nsealed trait PaymentMethod\n\nobject PaymentMethod {\n  implicit val schema: Schema[PaymentMethod] =\n    Schema.Enum2[CreditCard, WireTransfer, PaymentMethod](\n      id = TypeId.fromTypeName("PaymentMethod"),\n      case1 = Schema.Case[PaymentMethod, CreditCard](\n        id = "CreditCard",\n        schema = CreditCard.schema,\n        unsafeDeconstruct = pm => pm.asInstanceOf[PaymentMethod.CreditCard],\n        construct = cc => cc.asInstanceOf[PaymentMethod],\n        isCase = _.isInstanceOf[PaymentMethod.CreditCard],\n        annotations = Chunk.empty\n      ),\n      case2 = Schema.Case[PaymentMethod, WireTransfer](\n        id = "WireTransfer",\n        schema = WireTransfer.schema,\n        unsafeDeconstruct = pm => pm.asInstanceOf[PaymentMethod.WireTransfer],\n        construct = wt => wt.asInstanceOf[PaymentMethod],\n        isCase = _.isInstanceOf[PaymentMethod.WireTransfer],\n        annotations = Chunk.empty\n      )\n    )\n\n  final case class CreditCard(\n      number: String,\n      expirationMonth: Int,\n      expirationYear: Int\n  ) extends PaymentMethod\n\n  object CreditCard {\n    implicit val schema: Schema[CreditCard] =\n      Schema.CaseClass3[String, Int, Int, CreditCard](\n        id0 = TypeId.fromTypeName("CreditCard"),\n        field01 = Schema.Field[CreditCard, String](\n          name0 = "number",\n          schema0 = Schema.primitive[String],\n          get0 = _.number,\n          set0 = (cc, n) => cc.copy(number = n)\n        ),\n        field02 = Schema.Field[CreditCard, Int](\n          name0 = "expirationMonth",\n          schema0 = Schema.primitive[Int],\n          get0 = _.expirationMonth,\n          set0 = (cc, em) => cc.copy(expirationMonth = em)\n        ),\n        field03 = Schema.Field[CreditCard, Int](\n          name0 = "expirationYear",\n          schema0 = Schema.primitive[Int],\n          get0 = _.expirationYear,\n          set0 = (cc, ey) => cc.copy(expirationYear = ey)\n        ),\n        construct0 = (n, em, ey) => CreditCard(n, em, ey)\n      )\n  }\n\n  final case class WireTransfer(accountNumber: String, bankCode: String)\n      extends PaymentMethod\n\n  object WireTransfer {\n    implicit val schema: Schema[WireTransfer] =\n      Schema.CaseClass2[String, String, WireTransfer](\n        id0 = TypeId.fromTypeName("WireTransfer"),\n        field01 = Schema.Field[WireTransfer, String](\n          name0 = "accountNumber",\n          schema0 = Schema.primitive[String],\n          get0 = _.accountNumber,\n          set0 = (wt, an) => wt.copy(accountNumber = an)\n        ),\n        field02 = Schema.Field[WireTransfer, String](\n          name0 = "bankCode",\n          schema0 = Schema.primitive[String],\n          get0 = _.bankCode,\n          set0 = (wt, bc) => wt.copy(bankCode = bc)\n        ),\n        construct0 = (ac, bc) => WireTransfer(ac, bc)\n      )\n  }\n}\n')),(0,r.yg)("p",null,"And finally, we need to define the schema for the ",(0,r.yg)("inlineCode",{parentName:"p"},"Customer")," data type:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.schema._\n\nfinal case class Customer(person: Person, paymentMethod: PaymentMethod)\n\nobject Customer {\n  implicit val schema: Schema[Customer] =\n    Schema.CaseClass2[Person, PaymentMethod, Customer](\n      id0 = TypeId.fromTypeName("Customer"),\n      field01 = Schema.Field[Customer, Person](\n        name0 = "person",\n        schema0 = Person.schema,\n        get0 = _.person,\n        set0 = (c, p) => c.copy(person = p)\n      ),\n      field02 = Schema.Field[Customer, PaymentMethod](\n        name0 = "paymentMethod",\n        schema0 = Schema[PaymentMethod],\n        get0 = _.paymentMethod,\n        set0 = (c, pm) => c.copy(paymentMethod = pm)\n      ),\n      construct0 = (p, pm) => Customer(p, pm)\n    )\n}\n')),(0,r.yg)("p",null,"Now that we have written all the required schemas, we can proceed to create encoders and decoders (codecs) for each of our domain models. "),(0,r.yg)("p",null,"Let's start with writing protobuf codecs. We need to add the following line to our ",(0,r.yg)("inlineCode",{parentName:"p"},"build.sbt"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-schema-protobuf" % 1.1.0\n')),(0,r.yg)("p",null,"Here's an example that demonstrates a roundtrip test for protobuf codecs:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.schema._\nimport zio.schema.codec._\nimport zio.schema.codec.ProtobufCodec._\n\n// Create a customer instance\nval customer =\n  Customer(\n    person = Person("John Doe", 42),\n    paymentMethod = PaymentMethod.CreditCard("1000100010001000", 6, 2024)\n  )\n\n// Create binary codec from customer \nval customerCodec: BinaryCodec[Customer] =\n  ProtobufCodec.protobufCodec[Customer]\n\n// Encode the customer object\nval encodedCustomer: Chunk[Byte] = customerCodec.encode(customer)\n\n// Decode the byte array back to the person instance\nval decodedCustomer: Either[DecodeError, Customer] =\n  customerCodec.decode(encodedCustomer)\n\nassert(Right(customer) == decodedCustomer)\n')))}p.isMDXComponent=!0}}]);