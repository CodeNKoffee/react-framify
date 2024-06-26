!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define(["react"],n):"object"==typeof exports?exports.ReactFramify=n(require("react")):e.ReactFramify=n(e.react)}(this,(e=>(()=>{"use strict";var n={159:(e,n,t)=>{t.d(n,{A:()=>l});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n.preview__phone--mockup {\n  margin-top: 380px;\n}\n\n.phone__frameset--wrapper {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 250.375px;\n  height: 507.5px;\n}\n\n.phone__frameset {\n  position: relative;\n  width: 100%;\n  z-index: 1;\n}\n\n.phone__frameset:hover {\n  cursor: grab;\n}\n\n.phone__frameset--img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  border-radius: 32px;\n  width: 92%;\n  height: 97%;\n  transform: translate(-50%, -50%);\n  opacity: 1;\n  transition: opacity 1.5s ease;\n}\n\n.phone__frameset--img.fade-out {\n  opacity: 0;\n}\n\n.preview__scroll--btns {\n  margin-top: 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n}\n\n.preview__scroll--btn {\n  border-radius: 16px;\n  border: none;\n  /* background-color: #004F98; */\n  color: #FFF;\n  font-size: 16px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-weight: 700;\n  padding: 8px 16px;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n}\n\n.preview__scroll--btn:hover {\n  color: #FFF;\n  transform: scale(1.08);\n}\n\n.preview__scroll {\n  position: absolute;\n  bottom: 5%;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n}\n\n/* \n\nTEMP STLYING\n\n*/\n.div1 {\n  width: 250.38px;\n  height: 507.5px;\n  border: 3px solid #4B5563; /* Dynamic color or fallback to gray-600 */\n  border-radius: 2.4rem;\n  z-index: 10;\n  position: relative;\n}\n\n.div2 {\n  width: 100%;\n  height: 100%;\n  min-height: 492px;\n  border: 9px solid black;\n  padding: 2px;\n  border-radius: 2.2rem;\n}\n\n.div3 {\n  background-color: transparent;\n  border-radius: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: start;\n}\n\n.div4 {\n  width: 33.333%;\n  height: 50%;\n  background-color: black;\n  border-radius: 9999px; /* Tailwind's rounded-full */\n  padding: 0.4rem;\n}\n\n.div5 {\n  float: right;\n  width: 10%;\n  border-radius: 9999px; /* Tailwind's rounded-full */\n  background-color: #1F2937; /* Tailwind's gray-900 */\n  padding: 0.25rem;\n}",""]);const l=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},601:e=>{e.exports=function(e){return e[1]}},323:(e,n,t)=>{t.r(n),t.d(n,{default:()=>b});var r=t(72),o=t.n(r),a=t(825),i=t.n(a),l=t(659),c=t.n(l),u=t(56),s=t.n(u),d=t(540),f=t.n(d),p=t(113),m=t.n(p),v=t(159),h={};h.styleTagTransform=m(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=f(),o()(v.A,h);const b=v.A&&v.A.locals?v.A.locals:void 0},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],l=0;l<e.length;l++){var c=e[l],u=r.base?c[0]+r.base:c[0],s=a[u]||0,d="".concat(u," ").concat(s);a[u]=s+1;var f=t(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var m=o(p,r);r.byIndex=l,n.splice(l,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=t(a[i]);n[l].references--}for(var c=r(e,o),u=0;u<a.length;u++){var s=t(a[u]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=c}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},162:function(e,n,t){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t);var o=Object.getOwnPropertyDescriptor(n,t);o&&!("get"in o?!n.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,r,o)}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),o=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return o(n,e),n};function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=a.call(t)).done)&&(l.push(r.value),l.length!==n);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,n)||function(e,n){if(e){if("string"==typeof e)return l(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}Object.defineProperty(n,"__esModule",{value:!0});var c=a(t(155));t(323),n.default=function(e){var n=e.screenshotList,t=(e.color,e.buttonColor,i((0,c.useState)(0),2)),r=t[0],o=t[1],a=i((0,c.useState)(null),2),l=a[0],u=a[1],s=i((0,c.useState)(!1),2),d=s[0],f=s[1];(0,c.useEffect)((function(){o(0)}),[n]);var p=function(){f(!0),setTimeout((function(){o((function(e){return 0===e?n.length-1:e-1})),f(!1)}),300)},m=function(){f(!0),setTimeout((function(){o((function(e){return e===n.length-1?0:e+1})),f(!1)}),300)};return c.default.createElement("figure",{className:"phone__frameset--wrapper preview__phone--mockup",onTouchStart:function(e){var n=e.touches[0];u(n.clientX)},onTouchMove:function(e){if(null!==l){var n=e.touches[0].clientX-l;n>50?p():n<-50&&m()}},onTouchEnd:function(){u(null)}},c.default.createElement("div",{className:"w-[250.38px] h-[507.5px] border-[3px] border-gray-600 rounded-[2.4rem] z-10 relative"},c.default.createElement("div",{className:"w-full h-full border-[9px] border-black p-2 rounded-[2.2rem]"},c.default.createElement("div",{className:"bg-transparent rounded-lg flex justify-center items-start"},c.default.createElement("div",{className:"w-1/3 h-4/12 bg-black rounded-full p-[0.4rem]"},c.default.createElement("div",{className:"float-right w-1/5 rounded-full bg-gray-900 p-[0.25rem]"}))))),c.default.createElement("img",{src:n[r],className:"phone__frameset--img ".concat(d?"fade-out":"")}),c.default.createElement("div",{className:"preview__scroll--btns"},c.default.createElement("button",{className:"preview__scroll--btn btn bg-[#004F98]",onClick:p},"Previous"),c.default.createElement("button",{className:"preview__scroll--btn btn bg-[#004F98]",onClick:m},"Next")))}},66:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var o=r(t(162));n.default=o.default},155:n=>{n.exports=e}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={id:e,exports:{}};return n[e].call(a.exports,a,a.exports,r),a.exports}return r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0,r(66)})()));