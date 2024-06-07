"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[16172],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),s=o(n),y=r,m=s["".concat(d,".").concat(y)]||s[y]||u[y]||l;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var g={};for(var d in t)hasOwnProperty.call(t,d)&&(g[d]=t[d]);g.originalType=e,g[s]="string"==typeof e?e:r,i[1]=g;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},60534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>g,toc:()=>o});var a=n(58168),r=(n(96540),n(15680));const l={id:"status",title:"Status Codes"},i=void 0,g={unversionedId:"zio-http/reference/response/status",id:"zio-http/reference/response/status",title:"Status Codes",description:"HTTP status codes are standard response codes given by web services on the Internet. The codes help identify the cause of the problem when a web page or other resource does not load properly.",source:"@site/docs/zio-http/reference/response/status.md",sourceDirName:"zio-http/reference/response",slug:"/zio-http/reference/response/status",permalink:"/zio-http/reference/response/status",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/reference/response/status.md",tags:[],version:"current",frontMatter:{id:"status",title:"Status Codes"},sidebar:"ecosystem-sidebar",previous:{title:"Response",permalink:"/zio-http/reference/response/"},next:{title:"Headers",permalink:"/zio-http/reference/headers/"}},d={},o=[],p={toc:o},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(s,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"HTTP status codes are standard response codes given by web services on the Internet. The codes help identify the cause of the problem when a web page or other resource does not load properly."),(0,r.yg)("p",null,"In ZIO HTTP, ",(0,r.yg)("inlineCode",{parentName:"p"},"Status")," is a sealed trait that represents the status code of an HTTP response. It is designed to encode HTTP status codes and headers along with custom methods and headers (as defined in ",(0,r.yg)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc2616"},"RFC2615"),")."),(0,r.yg)("p",null,"The ZIO HTTP has a predefined set of constructors for ",(0,r.yg)("inlineCode",{parentName:"p"},"Response")," for the most common status codes.\nTo create a ",(0,r.yg)("inlineCode",{parentName:"p"},"Response")," with a status code, we can use the predefined constructors for the most common status codes, like ",(0,r.yg)("inlineCode",{parentName:"p"},"Response.ok"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Response.notFound"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Response.forbidden"),", etc."),(0,r.yg)("p",null,"But, if we need a specific status code, we can pass one of the following status codes to the ",(0,r.yg)("inlineCode",{parentName:"p"},"Response.status")," constructor:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.http._\n\nResponse.status(Status.PermanentRedirect)\n// res0: Response = Response(\n//   status = PermanentRedirect,\n//   headers = Iterable(),\n//   body = Body.empty\n// )\n")),(0,r.yg)("p",null,"Here is a list of status codes and their descriptions:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Category"),(0,r.yg)("th",{parentName:"tr",align:null},"Status Class Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Code Range"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Informational"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Continue")),(0,r.yg)("td",{parentName:"tr",align:null},"The server has received the request headers, and the client should proceed to send the request body."),(0,r.yg)("td",{parentName:"tr",align:null},"100")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"SwitchingProtocols")),(0,r.yg)("td",{parentName:"tr",align:null},"The server is switching protocols according to the client's request."),(0,r.yg)("td",{parentName:"tr",align:null},"101")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Processing")),(0,r.yg)("td",{parentName:"tr",align:null},"The server is processing the request but has not completed it yet."),(0,r.yg)("td",{parentName:"tr",align:null},"102")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Success"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Ok")),(0,r.yg)("td",{parentName:"tr",align:null},"The request has succeeded."),(0,r.yg)("td",{parentName:"tr",align:null},"200")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Created")),(0,r.yg)("td",{parentName:"tr",align:null},"The request has been fulfilled and resulted in a new resource being created."),(0,r.yg)("td",{parentName:"tr",align:null},"201")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Accepted")),(0,r.yg)("td",{parentName:"tr",align:null},"The request has been accepted for processing but has not been completed."),(0,r.yg)("td",{parentName:"tr",align:null},"202")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"NonAuthoritativeInformation")),(0,r.yg)("td",{parentName:"tr",align:null},"The returned meta-information in the entity-header is not the definitive set available from the origin server."),(0,r.yg)("td",{parentName:"tr",align:null},"203")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"NoContent")),(0,r.yg)("td",{parentName:"tr",align:null},"The server successfully processed the request and is not returning any content."),(0,r.yg)("td",{parentName:"tr",align:null},"204")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ResetContent")),(0,r.yg)("td",{parentName:"tr",align:null},"The server successfully processed the request but is not returning any content."),(0,r.yg)("td",{parentName:"tr",align:null},"205")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PartialContent")),(0,r.yg)("td",{parentName:"tr",align:null},"The server successfully processed only part of the request."),(0,r.yg)("td",{parentName:"tr",align:null},"206")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"MultiStatus")),(0,r.yg)("td",{parentName:"tr",align:null},"The server has multiple status codes for different independent operations."),(0,r.yg)("td",{parentName:"tr",align:null},"207")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Redirection"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"MultipleChoices")),(0,r.yg)("td",{parentName:"tr",align:null},"The request has multiple possible responses and the user or user agent can choose the correct one."),(0,r.yg)("td",{parentName:"tr",align:null},"300")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"MovedPermanently")),(0,r.yg)("td",{parentName:"tr",align:null},"The requested page has been permanently moved to a new location."),(0,r.yg)("td",{parentName:"tr",align:null},"301")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Found")),(0,r.yg)("td",{parentName:"tr",align:null},"The requested page has been found but is temporarily located at another URI."),(0,r.yg)("td",{parentName:"tr",align:null},"302")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"SeeOther")),(0,r.yg)("td",{parentName:"tr",align:null},"The response to the request can be found under another URI using a GET method."),(0,r.yg)("td",{parentName:"tr",align:null},"303")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"NotModified")),(0,r.yg)("td",{parentName:"tr",align:null},"The resource has not been modified since the last request."),(0,r.yg)("td",{parentName:"tr",align:null},"304")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"UseProxy")),(0,r.yg)("td",{parentName:"tr",align:null},"The requested resource is available only through a proxy, whose address is provided in the response."),(0,r.yg)("td",{parentName:"tr",align:null},"305")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"TemporaryRedirect")),(0,r.yg)("td",{parentName:"tr",align:null},"The requested resource has been temporarily moved to a different URI."),(0,r.yg)("td",{parentName:"tr",align:null},"307")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PermanentRedirect")),(0,r.yg)("td",{parentName:"tr",align:null},"The requested resource has been permanently moved to a different URI."),(0,r.yg)("td",{parentName:"tr",align:null},"308")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Client Error"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"BadRequest")),(0,r.yg)("td",{parentName:"tr",align:null},"The request cannot be fulfilled due to bad syntax."),(0,r.yg)("td",{parentName:"tr",align:null},"400")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Unauthorized")),(0,r.yg)("td",{parentName:"tr",align:null},"The request requires user authentication."),(0,r.yg)("td",{parentName:"tr",align:null},"401")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PaymentRequired")),(0,r.yg)("td",{parentName:"tr",align:null},"Reserved for future use."),(0,r.yg)("td",{parentName:"tr",align:null},"402")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Forbidden")),(0,r.yg)("td",{parentName:"tr",align:null},"The server understood the request, but is refusing to fulfill it."),(0,r.yg)("td",{parentName:"tr",align:null},"403")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"NotFound")),(0,r.yg)("td",{parentName:"tr",align:null},"The requested resource could not be found but may be available again in the future."),(0,r.yg)("td",{parentName:"tr",align:null},"404")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"MethodNotAllowed")),(0,r.yg)("td",{parentName:"tr",align:null},"The method specified in the request is not allowed for the resource identified by the request URI."),(0,r.yg)("td",{parentName:"tr",align:null},"405")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"NotAcceptable")),(0,r.yg)("td",{parentName:"tr",align:null},"The resource identified by the request is only capable of generating response entities that have content characteristics not acceptable according to the accept headers sent in the request."),(0,r.yg)("td",{parentName:"tr",align:null},"406")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ProxyAuthenticationRequired")),(0,r.yg)("td",{parentName:"tr",align:null},"Similar to 401 but authentication is needed for accessing the proxy."),(0,r.yg)("td",{parentName:"tr",align:null},"407")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"RequestTimeout")),(0,r.yg)("td",{parentName:"tr",align:null},"The server timed out waiting for the request."),(0,r.yg)("td",{parentName:"tr",align:null},"408")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Conflict")),(0,r.yg)("td",{parentName:"tr",align:null},"Indicates that the request could not be processed because of conflict in the request."),(0,r.yg)("td",{parentName:"tr",align:null},"409")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Gone")),(0,r.yg)("td",{parentName:"tr",align:null},"The requested resource is no longer available at the server and no forwarding address is known."),(0,r.yg)("td",{parentName:"tr",align:null},"410")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"LengthRequired")),(0,r.yg)("td",{parentName:"tr",align:null},"The server refuses to accept the request without a defined Content-Length."),(0,r.yg)("td",{parentName:"tr",align:null},"411")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PreconditionFailed")),(0,r.yg)("td",{parentName:"tr",align:null},"The precondition given in one or more of the request-header fields evaluated to false when it was tested on the server."),(0,r.yg)("td",{parentName:"tr",align:null},"412")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"RequestEntityTooLarge")),(0,r.yg)("td",{parentName:"tr",align:null},"The server is refusing to service the request because the request entity is larger than the server is willing or able to process."),(0,r.yg)("td",{parentName:"tr",align:null},"413")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"RequestUriTooLong")),(0,r.yg)("td",{parentName:"tr",align:null},"The server is refusing to interpret the request because the Request-URI is longer than the server is willing to interpret."),(0,r.yg)("td",{parentName:"tr",align:null},"414")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"UnsupportedMediaType")),(0,r.yg)("td",{parentName:"tr",align:null},"The request entity has a media type that the server or resource does not support."),(0,r.yg)("td",{parentName:"tr",align:null},"415")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"RequestedRangeNotSatisfiable")),(0,r.yg)("td",{parentName:"tr",align:null},"The client has asked for a portion of the file, but the server cannot supply that portion."),(0,r.yg)("td",{parentName:"tr",align:null},"416")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ExpectationFailed")),(0,r.yg)("td",{parentName:"tr",align:null},"The server cannot meet the requirements of the Expect request-header field."),(0,r.yg)("td",{parentName:"tr",align:null},"417")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"MisdirectedRequest")),(0,r.yg)("td",{parentName:"tr",align:null},"The request was directed at a server that is not able to produce a response."),(0,r.yg)("td",{parentName:"tr",align:null},"421")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"UnprocessableEntity")),(0,r.yg)("td",{parentName:"tr",align:null},"The request was well-formed but was unable to be followed due to semantic errors."),(0,r.yg)("td",{parentName:"tr",align:null},"422")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Locked")),(0,r.yg)("td",{parentName:"tr",align:null},"The resource that is being accessed is locked."),(0,r.yg)("td",{parentName:"tr",align:null},"423")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"FailedDependency")),(0,r.yg)("td",{parentName:"tr",align:null},"The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request."),(0,r.yg)("td",{parentName:"tr",align:null},"424")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"UnorderedCollection")),(0,r.yg)("td",{parentName:"tr",align:null},"The server is not able to produce a response representing the current state of the target resource due to some internal error."),(0,r.yg)("td",{parentName:"tr",align:null},"425")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"UpgradeRequired")),(0,r.yg)("td",{parentName:"tr",align:null},"The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol."),(0,r.yg)("td",{parentName:"tr",align:null},"426")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PreconditionRequired")),(0,r.yg)("td",{parentName:"tr",align:null},"The origin server requires the request to be conditional."),(0,r.yg)("td",{parentName:"tr",align:null},"428")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"TooManyRequests")),(0,r.yg)("td",{parentName:"tr",align:null},'The user has sent too many requests in a given amount of time ("rate limiting").'),(0,r.yg)("td",{parentName:"tr",align:null},"429")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"RequestHeaderFieldsTooLarge")),(0,r.yg)("td",{parentName:"tr",align:null},"The server is unwilling to process the request because either an individual header field or all the header fields collectively are too large."),(0,r.yg)("td",{parentName:"tr",align:null},"431")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Server Error"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"InternalServerError")),(0,r.yg)("td",{parentName:"tr",align:null},"A generic error message, given when an unexpected condition was encountered and no more specific message is suitable."),(0,r.yg)("td",{parentName:"tr",align:null},"500")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"NotImplemented")),(0,r.yg)("td",{parentName:"tr",align:null},"The server either does not recognize the request method, or it lacks the ability to fulfill the request."),(0,r.yg)("td",{parentName:"tr",align:null},"501")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"BadGateway")),(0,r.yg)("td",{parentName:"tr",align:null},"The server was acting as a gateway or proxy and received an invalid response from the upstream server."),(0,r.yg)("td",{parentName:"tr",align:null},"502")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ServiceUnavailable")),(0,r.yg)("td",{parentName:"tr",align:null},"The server is currently unable to handle the request due to a temporary overload or maintenance of the server."),(0,r.yg)("td",{parentName:"tr",align:null},"503")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"GatewayTimeout")),(0,r.yg)("td",{parentName:"tr",align:null},"The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server specified by the URI."),(0,r.yg)("td",{parentName:"tr",align:null},"504")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"HttpVersionNotSupported")),(0,r.yg)("td",{parentName:"tr",align:null},"The server does not support the HTTP protocol version that was used in the request."),(0,r.yg)("td",{parentName:"tr",align:null},"505")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"VariantAlsoNegotiates")),(0,r.yg)("td",{parentName:"tr",align:null},"Transparent content negotiation for the request results in a circular reference."),(0,r.yg)("td",{parentName:"tr",align:null},"506")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"InsufficientStorage")),(0,r.yg)("td",{parentName:"tr",align:null},"The server is unable to store the representation needed to complete the request."),(0,r.yg)("td",{parentName:"tr",align:null},"507")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"NotExtended")),(0,r.yg)("td",{parentName:"tr",align:null},"Further extensions to the request are required for the server to fulfill it."),(0,r.yg)("td",{parentName:"tr",align:null},"510")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"NetworkAuthenticationRequired")),(0,r.yg)("td",{parentName:"tr",align:null},"The client needs to authenticate to gain network access."),(0,r.yg)("td",{parentName:"tr",align:null},"511")))))}u.isMDXComponent=!0}}]);