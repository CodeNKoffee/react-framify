!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.ReactFramify=t(require("react")):e.ReactFramify=t(e.react)}(this,(e=>(()=>{"use strict";var t={159:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,"* {\n  box-sizing: border-box;\n}\n\n.preview__phone--mockup {\n  margin-top: 380px;\n}\n\n/* Phone frameset & Buttons wrapper */\n.phone__frameset--wrapper {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  width: 256px;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.phone__frameset {\n  position: relative;\n  width: 100%;\n  z-index: 1;\n}\n\n.phone__frameset:hover {\n  cursor: grab;\n}\n\n/* .phone__frameset--img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  border-radius: 32px;\n  width: 92%;\n  height: 97%;\n  transform: translate(-50%, -50%);\n  opacity: 1;\n  transition: opacity 1.5s ease;\n} */\n\n.phone__frameset--img {\n  height: 100%;\n  min-height: 245.5px;\n  object-fit: cover;\n  opacity: 1;\n  transition: opacity 1.5s ease;\n}\n\n/* Image scrolling animation */\n.phone__frameset--img.fade-out {\n  opacity: 0;\n}\n\n.preview__scroll--btns {\n  position: relative;\n  width: 100%;\n  margin-top: 24px;\n  z-index: 1000;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n}\n\n.preview__scroll--btn {\n  position: relative; \n  border: none;\n  border-radius: 16px;\n  font-size: 16px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-weight: 700;\n  padding: 8px 16px;;\n  z-index: 1000; \n  display: flex;\n  flex: 1;\n  justify-content: center;\n}\n\n.preview__scroll--btn:hover {\n  cursor: pointer;\n}\n\n.preview__scroll {\n  position: absolute;\n  bottom: 5%;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n}",""]);const l=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},601:e=>{e.exports=function(e){return e[1]}},323:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var r=n(72),o=n.n(r),a=n(825),i=n.n(a),l=n(659),s=n.n(l),c=n(56),u=n.n(c),f=n(540),d=n.n(f),p=n(113),m=n.n(p),h=n(159),v={};v.styleTagTransform=m(),v.setAttributes=u(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=d(),o()(h.A,v);const y=h.A&&h.A.locals?h.A.locals:void 0},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],l=0;l<e.length;l++){var s=e[l],c=r.base?s[0]+r.base:s[0],u=a[c]||0,f="".concat(c," ").concat(u);a[c]=u+1;var d=n(f),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var m=o(p,r);r.byIndex=l,t.splice(l,0,{identifier:f,updater:m,references:1})}i.push(f)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=n(a[i]);t[l].references--}for(var s=r(e,o),c=0;c<a.length;c++){var u=n(a[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},162:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],s=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0});var s=a(n(155));n(323),t.default=function(e){var t=e.screenshotList,n=e.phoneColor,r=e.buttonColor,o=e.buttonTextColor,a=e.statusBar,l=i((0,s.useState)(0),2),c=l[0],u=l[1],f=i((0,s.useState)(null),2),d=f[0],p=f[1],m=i((0,s.useState)(!1),2),h=m[0],v=m[1];(0,s.useEffect)((function(){u(0)}),[t]);var y=function(){v(!0),setTimeout((function(){u((function(e){return 0===e?t.length-1:e-1})),v(!1)}),300)},b=function(){v(!0),setTimeout((function(){u((function(e){return e===t.length-1?0:e+1})),v(!1)}),300)},g=(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1}),x="light"===a?"#FFF":"#000";return s.default.createElement("figure",{className:"phone__frameset--wrapper preview__phone--mockup",onTouchStart:function(e){var t=e.touches[0];p(t.clientX)},onTouchMove:function(e){if(null!==d){var t=e.touches[0].clientX-d;t>50?y():t<-50&&b()}},onTouchEnd:function(){p(null)}},s.default.createElement("div",{style:{boxSizing:"border-box",position:"relative",border:"3px solid ".concat(n||"#4A5568"),borderRadius:"2.4rem",width:"250.38px",height:"507.5px",zIndex:10}},s.default.createElement("div",{style:{border:"9px solid #000000",borderRadius:"2.2rem",width:"100%",height:"100%",zIndex:100}},s.default.createElement("img",{src:t[c],className:"phone__frameset--img ".concat(h?"fade-out":""),style:{position:"relative",borderRadius:"1.5rem",width:"100%",height:"102%",zIndex:-1}}),s.default.createElement("div",{style:{position:"absolute",top:"1.1rem",left:"2rem",color:x,fontSize:"10px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'}},g),s.default.createElement("div",{style:{position:"absolute",top:"1rem",left:"50%",borderRadius:"9999px",backgroundColor:"#000",width:"30.33%",padding:"0.4rem",transform:"translateX(-50%)"}},s.default.createElement("div",{style:{borderRadius:"9999px",backgroundColor:"#1A202C",float:"right",width:"20%",padding:"0.25rem"}})),s.default.createElement("div",{style:{position:"absolute",top:"1.2rem",right:"2rem",display:"flex",alignItems:"center",gap:"4px",color:x}},s.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:x,width:"14px",height:"14px"},s.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),s.default.createElement("path",{d:"M6 16.5h2v2h-2zM10 12.5h2v6h-2zM14 9.5h2v9h-2zM18 5.5h2v13h-2z"})),s.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:x,strokeWidth:"2",width:"12px",height:"12px"},s.default.createElement("path",{d:"M1.5 12C6.5 7 17.5 7 22.5 12"}),s.default.createElement("path",{d:"M5 16C8.5 12.5 15.5 12.5 19 16"}),s.default.createElement("circle",{cx:"12",cy:"20",r:"1",fill:x}))))),s.default.createElement("div",{className:"preview__scroll--btns"},s.default.createElement("button",{className:"preview__scroll--btn btn",style:{backgroundColor:r||"#004F98",color:o||"#FFF"},onClick:y},"Previous"),s.default.createElement("button",{className:"preview__scroll--btn btn",style:{backgroundColor:r||"#004F98",color:o||"#FFF"},onClick:b},"Next")))}},66:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(162));t.default=o.default},155:t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={id:e,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.exports}return r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0,r(66)})()));