"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[67691],{15680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>s});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),d=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},y=function(e){var t=d(e.components);return a.createElement(g.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,s=p["".concat(g,".").concat(u)]||p[u]||m[u]||l;return n?a.createElement(s,i(i({ref:t},y),{},{components:n})):a.createElement(s,i({ref:t},y))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(58168),r=(n(96540),n(15680));const l={id:"concurrentSet",title:"ConcurrentSet"},i=void 0,o={unversionedId:"reference/sync/concurrentSet",id:"version-1.0.18/reference/sync/concurrentSet",title:"ConcurrentSet",description:"A ConcurrentSet is a Set wrapper over java.util.concurrent.ConcurrentHashMap.",source:"@site/versioned_docs/version-1.0.18/reference/sync/concurrentset.md",sourceDirName:"reference/sync",slug:"/reference/sync/concurrentSet",permalink:"/1.0.18/reference/sync/concurrentSet",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.0.18/reference/sync/concurrentset.md",tags:[],version:"1.0.18",frontMatter:{id:"concurrentSet",title:"ConcurrentSet"}},g={},d=[{value:"Operations",id:"operations",level:2},{value:"Creation",id:"creation",level:3},{value:"Use",id:"use",level:3},{value:"Example Usage",id:"example-usage",level:2}],y={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"A ",(0,r.yg)("inlineCode",{parentName:"p"},"ConcurrentSet")," is a Set wrapper over ",(0,r.yg)("inlineCode",{parentName:"p"},"java.util.concurrent.ConcurrentHashMap"),"."),(0,r.yg)("h2",{id:"operations"},"Operations"),(0,r.yg)("h3",{id:"creation"},"Creation"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Method"),(0,r.yg)("th",{parentName:"tr",align:null},"Definition"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"empty[A]: UIO[ConcurrentSet[A]]")),(0,r.yg)("td",{parentName:"tr",align:null},"Makes an empty ",(0,r.yg)("inlineCode",{parentName:"td"},"ConcurrentSet"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"empty[A](initialCapacity: Int): UIO[ConcurrentSet[A]]")),(0,r.yg)("td",{parentName:"tr",align:null},"Makes an empty ",(0,r.yg)("inlineCode",{parentName:"td"},"ConcurrentSet")," with \xecnitial capacity")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"fromIterable[A](as: Iterable[(A)]): UIO[ConcurrentSet[A]]")),(0,r.yg)("td",{parentName:"tr",align:null},"Makes a new ",(0,r.yg)("inlineCode",{parentName:"td"},"ConcurrentSet")," initialized with the provided collection")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"make[A](as: A*): UIO[ConcurrentSet[A]]")),(0,r.yg)("td",{parentName:"tr",align:null},"Makes a new ",(0,r.yg)("inlineCode",{parentName:"td"},"ConcurrentSet")," initialized with the provided elements")))),(0,r.yg)("h3",{id:"use"},"Use"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Method"),(0,r.yg)("th",{parentName:"tr",align:null},"Definition"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"add(x: A): UIO[Boolean]")),(0,r.yg)("td",{parentName:"tr",align:null},"Adds a new value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"addAll(xs: Iterable[A]): UIO[Boolean]")),(0,r.yg)("td",{parentName:"tr",align:null},"Adds all new values.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"collectFirst[B](pf: PartialFunction[(A, B)): UIO[Option[B]]")),(0,r.yg)("td",{parentName:"tr",align:null},"Finds the first element of a set for which the partial function is defined and applies the function to it.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"exists(p: A => Boolean): UIO[Boolean]")),(0,r.yg)("td",{parentName:"tr",align:null},"Tests whether a given predicate holds true for at least one element in the set.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"fold[R, E, S](zero: S)(f: (S, A) => S): UIO[S]")),(0,r.yg)("td",{parentName:"tr",align:null},"Folds the elements of a set using the given binary operator.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"forall(p: A => Boolean): UIO[Boolean]")),(0,r.yg)("td",{parentName:"tr",align:null},"Tests whether a predicate is satisfied by all elements of a set.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"find[B](p: A => Boolean): UIO[Option[A]]")),(0,r.yg)("td",{parentName:"tr",align:null},"Retrieves the elements in which predicate is satisfied.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"remove(x: A): UIO[Boolean]")),(0,r.yg)("td",{parentName:"tr",align:null},"Removes the entry for the given value if it is mapped to an existing element.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"removeAll(xs: Iterable[A]): UIO[Boolean]")),(0,r.yg)("td",{parentName:"tr",align:null},"Removes all the entries for the given values if they are mapped to an existing element.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"removeIf(p: A => Boolean): UIO[Boolean]")),(0,r.yg)("td",{parentName:"tr",align:null},"Removes all elements which satisfy the given predicate.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"retainAll(xs: Iterable[A]): UIO[Boolean]")),(0,r.yg)("td",{parentName:"tr",align:null},"Retain all the entries for the given values if they are mapped to an existing element.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"retainIf(p: A => Boolean): UIO[Boolean]")),(0,r.yg)("td",{parentName:"tr",align:null},"Removes all elements which do not satisfy the given predicate.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"clear: UIO[Unit]")),(0,r.yg)("td",{parentName:"tr",align:null},"Removes all elements.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"contains(x: A): UIO[Boolean]")),(0,r.yg)("td",{parentName:"tr",align:null},"Tests whether if the element is in the set.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"containsAll(xs: Iterable[A]): UIO[Boolean]")),(0,r.yg)("td",{parentName:"tr",align:null},"Tests if the elements in the collection are a subset of the set.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"size: UIO[Int]")),(0,r.yg)("td",{parentName:"tr",align:null},"Number of elements in the set.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"isEmpty: UIO[Boolean]")),(0,r.yg)("td",{parentName:"tr",align:null},"True if there are no elements in the set.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"toSet: UIO[Set[A]]")),(0,r.yg)("td",{parentName:"tr",align:null},"Create a concurrent set from a set.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"transform(f: A => A): UIO[Unit]")),(0,r.yg)("td",{parentName:"tr",align:null},"Create a concurrent set from a collection.")))),(0,r.yg)("h2",{id:"example-usage"},"Example Usage"),(0,r.yg)("p",null,"Given:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.concurrent.ConcurrentSet\n\nfor {\n  emptySet  <- ConcurrentSet.empty[Int] \n  setA      <- ConcurrentSet.make[Int](1, 2, 3, 4)\n} yield ()\n")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Operation"),(0,r.yg)("th",{parentName:"tr",align:null},"Result"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"emptySet.add(1).toSet")),(0,r.yg)("td",{parentName:"tr",align:null},"Set(1)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"setA.addAll(Chunk(5, 6).toSet)")),(0,r.yg)("td",{parentName:"tr",align:null},"Set(1, 2, 3, 4, 5, 6)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"setA.remove(1).toSet")),(0,r.yg)("td",{parentName:"tr",align:null},"Set(2, 3, 4)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"setA.removeAll(1, 3).toSet")),(0,r.yg)("td",{parentName:"tr",align:null},"Set(2, 4)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"setA.retainAll(List(1, 3, 5, 6)).toSet")),(0,r.yg)("td",{parentName:"tr",align:null},"Set(1, 3)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"setA.clear.isEmpty")),(0,r.yg)("td",{parentName:"tr",align:null},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"setA.contains(5)")),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"setA.containsAll(Chunk(1, 2, 3))")),(0,r.yg)("td",{parentName:"tr",align:null},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"setA.exists(_ > 4)")),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"setA.forAll(_ < 5)")),(0,r.yg)("td",{parentName:"tr",align:null},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"setA.removeIf(_ % 2 == 0)")),(0,r.yg)("td",{parentName:"tr",align:null},"Set(2, 4)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"setA.retainIf(_ % 2 == 0)")),(0,r.yg)("td",{parentName:"tr",align:null},"Set(1, 3)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"setA.find(_ > 2)")),(0,r.yg)("td",{parentName:"tr",align:null},"Set(3, 4)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'setA.collectFirst { case 3 => "Three" }')),(0,r.yg)("td",{parentName:"tr",align:null},"Set(3)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"setA.size")),(0,r.yg)("td",{parentName:"tr",align:null},"4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"setA.transform(_ + 10)")),(0,r.yg)("td",{parentName:"tr",align:null},"Set(11, 12, 13, 14)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"setA.fold(0)(_ + _)")),(0,r.yg)("td",{parentName:"tr",align:null},"10")))))}m.isMDXComponent=!0}}]);