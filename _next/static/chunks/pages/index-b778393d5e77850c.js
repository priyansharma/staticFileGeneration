(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4369)}])},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l=(a=n(7294))&&a.__esModule?a:{default:a},i=n(1003),c=n(880),s=n(9246);function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u={};function d(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var p=l.default.forwardRef((function(e,t){var n,r=e.legacyBehavior,a=void 0===r?!0!==Boolean(!1):r,p=e.href,b=e.as,x=e.children,h=e.prefetch,m=e.passHref,g=e.replace,v=e.shallow,y=e.scroll,j=e.locale,w=e.onClick,k=e.onMouseEnter,N=f(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=x,a&&"string"===typeof n&&(n=l.default.createElement("a",null,n));var O,S=!1!==h,C=c.useRouter(),E=l.default.useMemo((function(){var e=o(i.resolveHref(C,p,!0),2),t=e[0],n=e[1];return{href:t,as:b?i.resolveHref(C,b):n||t}}),[C,p,b]),_=E.href,M=E.as,P=l.default.useRef(_),I=l.default.useRef(M);a&&(O=l.default.Children.only(n));var z=a?O&&"object"===typeof O&&O.ref:t,A=o(s.useIntersection({rootMargin:"200px"}),3),L=A[0],B=A[1],R=A[2],D=l.default.useCallback((function(e){I.current===M&&P.current===_||(R(),I.current=M,P.current=_),L(e),z&&("function"===typeof z?z(e):"object"===typeof z&&(z.current=e))}),[M,z,_,R,L]);l.default.useEffect((function(){var e=B&&S&&i.isLocalURL(_),t="undefined"!==typeof j?j:C&&C.locale,n=u[_+"%"+M+(t?"%"+t:"")];e&&!n&&d(C,_,M,{locale:t})}),[M,_,B,j,S,C]);var H={ref:D,onClick:function(e){a||"function"!==typeof w||w(e),a&&O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,l,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:l}))}(e,C,_,M,g,v,y,j)},onMouseEnter:function(e){a||"function"!==typeof k||k(e),a&&O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),i.isLocalURL(_)&&d(C,_,M,{priority:!0})}};if(!a||m||"a"===O.type&&!("href"in O.props)){var T="undefined"!==typeof j?j:C&&C.locale,U=C&&C.isLocaleDomain&&i.getDomainLocale(M,T,C&&C.locales,C&&C.domainLocales);H.href=U||i.addBasePath(i.addLocale(M,T,C&&C.defaultLocale))}return a?l.default.cloneElement(O,H):l.default.createElement("a",Object.assign({},N,H),n)}));t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!i,f=a.useRef(),u=o(a.useState(!1),2),d=u[0],p=u[1],b=o(a.useState(t?t.current:null),2),x=b[0],h=b[1],m=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),r||d||e&&e.tagName&&(f.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),s.push(n));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:a,elements:o}),t}(n),o=r.id,a=r.observer,l=r.elements;return l.set(e,t),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),c.delete(o);var t=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:x,rootMargin:n}))}),[r,x,n,d]),g=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!i&&!d){var e=l.requestIdleCallback((function(){return p(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&h(t.current)}),[t]),[m,d,g]};var a=n(7294),l=n(4686),i="undefined"!==typeof IntersectionObserver;var c=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},4369:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return h}});var r=n(4051),o=n.n(r),a=n(5893),l=n(9547),i=n.n(l),c=n(1664),s=n.n(c),f=n(7294),u=n(9008),d=n.n(u);function p(e,t,n,r,o,a,l){try{var i=e[a](l),c=i.value}catch(s){return void n(s)}i.done?t(c):Promise.resolve(c).then(r,o)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){b(e,t,n[t])}))}return e}var h=!0;t.default=function(e){var t,n,r=(0,f.useState)(e.getData),l=r[0],c=r[1],u=(0,f.useState)({travel:!1,food:!1,health:!1}),h=u[0],m=u[1],g=function(){var e,t=(e=o().mark((function e(t,n){var r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(x({},h,b({},t.target.name,t.target.checked))),e.next=4,fetch("".concat("http://localhost:1337","/api/categories/").concat(n,"/?&populate=blogs"));case 4:return r=e.sent,e.next=7,r.json();case 7:a=e.sent,c(a.data.attributes.blogs),console.log("dsfsdf",l),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("Error while use filter",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function l(e){p(a,r,o,l,i,"next",e)}function i(e){p(a,r,o,l,i,"throw",e)}l(void 0)}))});return function(e,n){return t.apply(this,arguments)}}();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(d(),{children:[(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com",className:"jsx-2c7e15764e98d1bf"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",className:"jsx-2c7e15764e98d1bf"}),(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800&display=swap",rel:"stylesheet",className:"jsx-2c7e15764e98d1bf"})]}),(0,a.jsx)(i(),{id:"2c7e15764e98d1bf",children:'*{font-family:"Mulish",sans-serif}body{background:#eee}.HeadingHomePage{text-align:center}.blogsSections{margin:auto;width:75%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.blogCard{-webkit-box-flex:1;-webkit-flex:1 1 470px;-moz-box-flex:1;-ms-flex:1 1 470px;flex:1 1 470px;max-width:30%;background:#fff;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;overflow:hidden;-webkit-box-shadow:1px 1px 18px rgb(0 0 0/10%);-moz-box-shadow:1px 1px 18px rgb(0 0 0/10%);box-shadow:1px 1px 18px rgb(0 0 0/10%);margin:25px 0;cursor:pointer;-webkit-transition:all 500ms;-moz-transition:all 500ms;-o-transition:all 500ms;transition:all 500ms}.blogCard:hover{-webkit-transform:scale(1.05);-moz-transform:scale(1.05);-ms-transform:scale(1.05);-o-transform:scale(1.05);transform:scale(1.05)}.blogCard img{max-width:100%}.blogCard p{padding:0 16px}.BlogTitle{font-weight:700;font-size:20px}p.cretationDate{color:#808080;font-size:14px;text-align:end}.filtersSection{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;width:75%;margin:auto}.filtersSection div label{font-size:18px;font-weight:600}.resetBtn{color:darkblue;font-weight:700;cursor:pointer}@media only screen and (max-width:600px){.blogsSections{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.blogCard{max-width:100%;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;padding-bottom:10px}}'}),(0,a.jsxs)("div",{className:"jsx-2c7e15764e98d1bf filtersSection",children:[(0,a.jsxs)("div",{className:"jsx-2c7e15764e98d1bf filterBox",children:[(0,a.jsx)("label",{className:"jsx-2c7e15764e98d1bf",children:"Travel blogs"}),(0,a.jsx)("input",{type:"checkbox",checked:h.travel,name:"travel",onChange:function(e){return g(e,1)},className:"jsx-2c7e15764e98d1bf"})]}),(0,a.jsxs)("div",{className:"jsx-2c7e15764e98d1bf filterBox",children:[(0,a.jsx)("label",{className:"jsx-2c7e15764e98d1bf",children:"Food blogs"}),(0,a.jsx)("input",{type:"checkbox",checked:h.food,name:"food",onChange:function(e){return g(e,2)},className:"jsx-2c7e15764e98d1bf"})]}),(0,a.jsxs)("div",{className:"jsx-2c7e15764e98d1bf filterBox",children:[(0,a.jsx)("label",{className:"jsx-2c7e15764e98d1bf",children:"health blogs"}),(0,a.jsx)("input",{type:"checkbox",value:"3",checked:h.health,name:"health",onChange:function(e){return g(e,3)},className:"jsx-2c7e15764e98d1bf"})]}),(0,a.jsx)("div",{className:"jsx-2c7e15764e98d1bf filterBox",children:(0,a.jsx)("label",{onClick:function(){return getBlogsData(),void m((function(e){return{health:!1,food:!1,travel:!1}}))},className:"jsx-2c7e15764e98d1bf resetBtn",children:"Reset"})})]}),(0,a.jsx)("h1",{className:"jsx-2c7e15764e98d1bf HeadingHomePage",children:"Here are some blogs"}),(0,a.jsx)("div",{className:"jsx-2c7e15764e98d1bf blogsSections",children:(null===l||void 0===l||null===(t=l.data)||void 0===t?void 0:t.length)>0?null===l||void 0===l||null===(n=l.data)||void 0===n?void 0:n.map((function(e,t){var n=new Date(e.attributes.createdAt);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s(),{href:{pathname:"blog/".concat(e.id)},children:(0,a.jsxs)("div",{className:"jsx-2c7e15764e98d1bf blogCard",children:[(0,a.jsxs)("p",{className:"jsx-2c7e15764e98d1bf BlogTitle",children:[" ",e.attributes.title," "]}),(0,a.jsxs)("p",{className:"jsx-2c7e15764e98d1bf cretationDate",children:[" Posted on- ",n.toLocaleDateString()," "]})]},t)},t)})})):(0,a.jsx)("h5",{className:"jsx-2c7e15764e98d1bf",children:"Data is loading..."})})]})}},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)}},function(e){e.O(0,[774,547,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);