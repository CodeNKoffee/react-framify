!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define(["react"],n):"object"==typeof exports?exports.ReactFramify=n(require("react")):e.ReactFramify=n(e.react)}(this,(e=>(()=>{"use strict";var n={159:(e,n,t)=>{t.d(n,{A:()=>l});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([e.id,"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n* {\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n.preview__phone--mockup {\n  margin-top: 380px;\n}\n\n.phone__frameset--wrapper {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 250.375px;\n}\n\n.phone__frameset {\n  position: relative;\n  width: 100%;\n  z-index: 1;\n}\n\n.phone__frameset:hover {\n  cursor: grab;\n}\n\n/* .phone__frameset--img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  border-radius: 32px;\n  width: 92%;\n  height: 97%;\n  transform: translate(-50%, -50%);\n  opacity: 1;\n  transition: opacity 1.5s ease;\n} */\n\n.phone__frameset--img {\n  opacity: 1;\n  transition: opacity 1.5s ease;\n}\n\n.phone__frameset--img.fade-out {\n  opacity: 0;\n}\n\n.preview__scroll--btns {\n  margin-top: 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n  z-index: 1000;\n  position: relative;\n}\n\n.preview__scroll--btn {\n  z-index: 1000; \n  position: relative; \n  border-radius: 16px;\n  border: none;\n  background-color: #004F98;\n  color: #FFF;\n  font-size: 16px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-weight: 700;\n  padding: 8px 16px;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n}\n\n.preview__scroll--btn:hover {\n  color: #FFF;\n  transform: scale(1.08);\n}\n\n.preview__scroll {\n  position: absolute;\n  bottom: 5%;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n}\n\n/* \n\nTEMP STLYING\n\n*/\n.div1 {\n  width: 250.38px;\n  height: 507.5px;\n  border: 3px solid #4B5563; /* Dynamic color or fallback to gray-600 */\n  border-radius: 2.4rem;\n  z-index: 10;\n  position: relative;\n}\n\n.div2 {\n  width: 100%;\n  height: 100%;\n  min-height: 492px;\n  border: 9px solid black;\n  padding: 2px;\n  border-radius: 2.2rem;\n}\n\n.div3 {\n  background-color: transparent;\n  border-radius: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: start;\n}\n\n.div4 {\n  width: 33.333%;\n  height: 50%;\n  background-color: black;\n  border-radius: 9999px; /* Tailwind's rounded-full */\n  padding: 0.4rem;\n}\n\n.div5 {\n  float: right;\n  width: 10%;\n  border-radius: 9999px; /* Tailwind's rounded-full */\n  background-color: #1F2937; /* Tailwind's gray-900 */\n  padding: 0.25rem;\n}",""]);const l=a},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},601:e=>{e.exports=function(e){return e[1]}},323:(e,n,t)=>{t.r(n),t.d(n,{default:()=>b});var r=t(72),o=t.n(r),i=t(825),a=t.n(i),l=t(659),s=t.n(l),c=t(56),u=t.n(c),d=t(540),f=t.n(d),p=t(113),m=t.n(p),v=t(159),h={};h.styleTagTransform=m(),h.setAttributes=u(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=f(),o()(v.A,h);const b=v.A&&v.A.locals?v.A.locals:void 0},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],l=0;l<e.length;l++){var s=e[l],c=r.base?s[0]+r.base:s[0],u=i[c]||0,d="".concat(c," ").concat(u);i[c]=u+1;var f=t(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var m=o(p,r);r.byIndex=l,n.splice(l,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var l=t(i[a]);n[l].references--}for(var s=r(e,o),c=0;c<i.length;c++){var u=t(i[c]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},162:function(e,n,t){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t);var o=Object.getOwnPropertyDescriptor(n,t);o&&!("get"in o?!n.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,r,o)}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),o=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return o(n,e),n};function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i,a,l=[],s=!0,c=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=i.call(t)).done)&&(l.push(r.value),l.length!==n);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(e,n)||function(e,n){if(e){if("string"==typeof e)return l(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}Object.defineProperty(n,"__esModule",{value:!0});var s=i(t(155));t(323),n.default=function(e){var n=e.screenshotList,t=(e.color,e.buttonColor,a((0,s.useState)(0),2)),r=t[0],o=t[1],i=a((0,s.useState)(null),2),l=i[0],c=i[1],u=a((0,s.useState)(!1),2),d=u[0],f=u[1];(0,s.useEffect)((function(){o(0)}),[n]);var p=function(){f(!0),setTimeout((function(){o((function(e){return 0===e?n.length-1:e-1})),f(!1)}),300)},m=function(){f(!0),setTimeout((function(){o((function(e){return e===n.length-1?0:e+1})),f(!1)}),300)};return s.default.createElement("figure",{className:"phone__frameset--wrapper preview__phone--mockup",onTouchStart:function(e){var n=e.touches[0];c(n.clientX)},onTouchMove:function(e){if(null!==l){var n=e.touches[0].clientX-l;n>50?p():n<-50&&m()}},onTouchEnd:function(){c(null)}},s.default.createElement("div",{style:{width:"250.38px",height:"507.5px",border:"3px solid #4A5568",borderRadius:"2.4rem",zIndex:10,position:"relative",boxSizing:"border-box"}},s.default.createElement("div",{style:{width:"100%",height:"100%",border:"9px solid #000000",borderRadius:"2.2rem",zIndex:100}},s.default.createElement("img",{src:n[r],className:"phone__frameset--img ".concat(d?"fade-out":""),style:{position:"relative",borderRadius:"1.5rem",width:"100%",objectFit:"cover",zIndex:-1}}),s.default.createElement("div",{style:{width:"33.33%",backgroundColor:"#000000",borderRadius:"9999px",padding:"0.4rem",position:"absolute",top:"1rem",left:"50%",transform:"translateX(-50%)"}},s.default.createElement("div",{style:{float:"right",width:"20%",borderRadius:"9999px",backgroundColor:"#1A202C",padding:"0.25rem"}})))),s.default.createElement("div",{className:"preview__scroll--btns"},s.default.createElement("button",{className:"preview__scroll--btn btn",onClick:p},"Previous"),s.default.createElement("button",{className:"preview__scroll--btn btn",onClick:m},"Next")))}},66:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var o=r(t(162));n.default=o.default},155:n=>{n.exports=e}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={id:e,exports:{}};return n[e].call(i.exports,i,i.exports,r),i.exports}return r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0,r(66)})()));