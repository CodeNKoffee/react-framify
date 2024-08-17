!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.ReactFramify=t(require("react")):e.ReactFramify=t(e.react)}(this,(e=>(()=>{"use strict";var t={159:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(601),o=n.n(r),i=n(314),a=n.n(i)()(o());a.push([e.id,"* {\n  box-sizing: border-box;\n}\n\n.preview__phone--mockup {\n  margin-top: 380px;\n}\n\n/* Phone Frameset Styling */\n.phone__frameset--wrapper {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  width: 256px;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.phone__frameset {\n  position: relative;\n  width: 100%;\n  z-index: 1;\n}\n\n.phone__frameset:hover {\n  cursor: grab;\n}\n\n.phone__frameset--img {\n  height: 100%;\n  min-height: 245.5px;\n  object-fit: cover;\n  opacity: 1;\n  transition: opacity 1.5s ease;\n}\n\n/* Image scrolling animation */\n.phone__frameset--img.fade-out {\n  opacity: 0;\n}\n\n.preview__scroll--btns {\n  position: relative;\n  width: 100%;\n  margin-top: 24px;\n  z-index: 1000;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n}\n\n.preview__scroll--btn {\n  position: relative; \n  border: none;\n  border-radius: 16px;\n  font-size: 16px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-weight: 700;\n  padding: 8px 16px;;\n  z-index: 1000; \n  display: flex;\n  flex: 1;\n  justify-content: center;\n}\n\n.preview__scroll--btn:hover {\n  cursor: pointer;\n}\n\n.preview__scroll {\n  position: absolute;\n  bottom: 5%;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n}\n\n/* New iPad styles */\n.preview__ipad--mockup {\n  margin-top: 200px; /* Adjusted for larger iPad size */\n}\n\n.ipad__frameset--wrapper {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  width: 512px; /* Doubled size for iPad */\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.ipad__frameset {\n  position: relative;\n  width: 100%;\n  z-index: 1;\n}\n\n.ipad__frameset:hover {\n  cursor: grab;\n}\n\n.ipad__frameset--img {\n  height: 100%;\n  min-height: 682.67px; /* Adjusted for 4:3 aspect ratio */\n  object-fit: cover;\n  opacity: 1;\n  transition: opacity 1.5s ease;\n}\n\n/* Image scrolling animation */\n.ipad__frameset--img.fade-out {\n  opacity: 0;\n}",""]);const l=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var u=this[l][0];null!=u&&(a[u]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},601:e=>{e.exports=function(e){return e[1]}},323:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(72),o=n.n(r),i=n(825),a=n.n(i),l=n(659),u=n.n(l),c=n(56),s=n.n(c),d=n(540),f=n.n(d),p=n(113),h=n.n(p),m=n(159),v={};v.styleTagTransform=h(),v.setAttributes=s(),v.insert=u().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=f(),o()(m.A,v);const g=m.A&&m.A.locals?m.A.locals:void 0},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],l=0;l<e.length;l++){var u=e[l],c=r.base?u[0]+r.base:u[0],s=i[c]||0,d="".concat(c," ").concat(s);i[c]=s+1;var f=n(d),p={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var h=o(p,r);r.byIndex=l,t.splice(l,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var l=n(i[a]);t[l].references--}for(var u=r(e,o),c=0;c<i.length;c++){var s=n(i[c]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=u}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},213:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],u=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0});var u=i(n(155));n(323),t.default=function(e){var t=e.screenshotList,n=e.phoneColor,r=e.buttonColor,o=e.buttonTextColor,i=e.statusBar,l=a((0,u.useState)(0),2),c=l[0],s=l[1],d=a((0,u.useState)(null),2),f=d[0],p=d[1],h=a((0,u.useState)(!1),2),m=h[0],v=h[1];(0,u.useEffect)((function(){s(0)}),[t]);var g=function(){v(!0),setTimeout((function(){s((function(e){return 0===e?t.length-1:e-1})),v(!1)}),300)},b=function(){v(!0),setTimeout((function(){s((function(e){return e===t.length-1?0:e+1})),v(!1)}),300)},y=(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1}),x="light"===i?"#FFF":"#000";return u.default.createElement("figure",{className:"phone__frameset--wrapper preview__phone--mockup",onTouchStart:function(e){var t=e.touches[0];p(t.clientX)},onTouchMove:function(e){if(null!==f){var t=e.touches[0].clientX-f;t>50?g():t<-50&&b()}},onTouchEnd:function(){p(null)}},u.default.createElement("div",{style:{boxSizing:"border-box",position:"relative",border:"3px solid ".concat(n||"#4A5568"),borderRadius:"3rem",width:"250.38px",height:"507.5px",zIndex:10}},u.default.createElement("div",{style:{border:"9px solid #000000",borderRadius:"2.8rem",width:"100%",height:"100%",zIndex:100}},u.default.createElement("img",{src:t[c],className:"phone__frameset--img ".concat(m?"fade-out":""),style:{position:"relative",borderRadius:"1.5rem",width:"100%",height:"102%",zIndex:-1}}),u.default.createElement("div",{style:{position:"absolute",top:"1.1rem",left:"2rem",color:x,fontSize:"10px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'}},y),u.default.createElement("div",{style:{position:"absolute",top:"0.5rem",right:"1rem",width:"10px",height:"10px",borderRadius:"50%",backgroundColor:"#000"}}),u.default.createElement("div",{style:{position:"absolute",top:"1.2rem",right:"1.6rem",display:"flex",alignItems:"center",gap:"5px",color:x}},u.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:x,strokeWidth:"3",width:"14px",height:"14px"},u.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),u.default.createElement("path",{d:"M6 16.5h2v2h-2zM10 12.5h2v6h-2zM14 9.5h2v9h-2zM18 5.5h2v13h-2z"})),u.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:x,strokeWidth:"3",width:"12px",height:"12px"},u.default.createElement("path",{d:"M3 9C7 4 17 4 21 9"}),u.default.createElement("path",{d:"M6 13C9 9.5 15 9.5 18 13"}),u.default.createElement("circle",{cx:"12",cy:"17",r:"1",fill:x})),u.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 12",width:"16.6",height:"8",fill:"none",stroke:x,strokeWidth:"1"},u.default.createElement("rect",{x:"0.5",y:"0.5",width:"21",height:"11",rx:"2",ry:"2"}),u.default.createElement("path",{d:"M23 4V8",strokeWidth:"1.5",strokeLinecap:"round"}),u.default.createElement("rect",{x:"2",y:"2",width:"18",height:"8",fill:x}))))),u.default.createElement("div",{className:"preview__scroll--btns"},u.default.createElement("button",{className:"preview__scroll--btn btn",style:{backgroundColor:r||"#004F98",color:o||"#FFF"},onClick:g},"Previous"),u.default.createElement("button",{className:"preview__scroll--btn btn",style:{backgroundColor:r||"#004F98",color:o||"#FFF"},onClick:b},"Next")))}},814:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],u=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0});var u=i(n(155));n(323),t.default=function(e){var t=e.screenshotList,n=e.phoneColor,r=e.buttonColor,o=e.buttonTextColor,i=e.statusBar,l=a((0,u.useState)(0),2),c=l[0],s=l[1],d=a((0,u.useState)(null),2),f=d[0],p=d[1],h=a((0,u.useState)(!1),2),m=h[0],v=h[1];(0,u.useEffect)((function(){s(0)}),[t]);var g=function(){v(!0),setTimeout((function(){s((function(e){return 0===e?t.length-1:e-1})),v(!1)}),300)},b=function(){v(!0),setTimeout((function(){s((function(e){return e===t.length-1?0:e+1})),v(!1)}),300)},y=(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1}),x="light"===i?"#FFF":"#000";return u.default.createElement("figure",{className:"phone__frameset--wrapper preview__phone--mockup",onTouchStart:function(e){var t=e.touches[0];p(t.clientX)},onTouchMove:function(e){if(null!==f){var t=e.touches[0].clientX-f;t>50?g():t<-50&&b()}},onTouchEnd:function(){p(null)}},u.default.createElement("div",{style:{boxSizing:"border-box",position:"relative",border:"3px solid ".concat(n||"#4A5568"),borderRadius:"1.5rem",width:"400px",height:"533.33px"}},u.default.createElement("div",{style:{border:"9px solid #000000",borderRadius:"1.3rem",width:"100%",height:"100%",zIndex:100}},u.default.createElement("img",{src:t[c],className:"phone__frameset--img ".concat(m?"fade-out":""),style:{position:"relative",borderRadius:"1.5rem",width:"100%",height:"102%",zIndex:-1}}),u.default.createElement("div",{style:{position:"absolute",top:"1.1rem",left:"2rem",color:x,fontSize:"10px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'}},y),u.default.createElement("div",{style:{position:"absolute",top:"1rem",left:"50%",borderRadius:"9999px",backgroundColor:"#000",width:"30.33%",padding:"0.4rem",transform:"translateX(-50%)"}},u.default.createElement("div",{style:{borderRadius:"9999px",backgroundColor:"#1A202C",float:"right",width:"20%",padding:"0.25rem"}})),u.default.createElement("div",{style:{position:"absolute",top:"1.2rem",right:"1.6rem",display:"flex",alignItems:"center",gap:"5px",color:x}},u.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:x,strokeWidth:"3",width:"14px",height:"14px"},u.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),u.default.createElement("path",{d:"M6 16.5h2v2h-2zM10 12.5h2v6h-2zM14 9.5h2v9h-2zM18 5.5h2v13h-2z"})),u.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:x,strokeWidth:"3",width:"12px",height:"12px"},u.default.createElement("path",{d:"M3 9C7 4 17 4 21 9"}),u.default.createElement("path",{d:"M6 13C9 9.5 15 9.5 18 13"}),u.default.createElement("circle",{cx:"12",cy:"17",r:"1",fill:x})),u.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 12",width:"16.6",height:"8",fill:"none",stroke:x,strokeWidth:"1"},u.default.createElement("rect",{x:"0.5",y:"0.5",width:"21",height:"11",rx:"2",ry:"2"}),u.default.createElement("path",{d:"M23 4V8",strokeWidth:"1.5",strokeLinecap:"round"}),u.default.createElement("rect",{x:"2",y:"2",width:"18",height:"8",fill:x}))))),u.default.createElement("div",{className:"preview__scroll--btns"},u.default.createElement("button",{className:"preview__scroll--btn btn",style:{backgroundColor:r||"#004F98",color:o||"#FFF"},onClick:g},"Previous"),u.default.createElement("button",{className:"preview__scroll--btn btn",style:{backgroundColor:r||"#004F98",color:o||"#FFF"},onClick:b},"Next")))}},671:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],u=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0});var u=i(n(155));n(323),t.default=function(e){var t=e.screenshotList,n=e.phoneColor,r=e.buttonColor,o=e.buttonTextColor,i=e.statusBar,l=a((0,u.useState)(0),2),c=l[0],s=l[1],d=a((0,u.useState)(null),2),f=d[0],p=d[1],h=a((0,u.useState)(!1),2),m=h[0],v=h[1];(0,u.useEffect)((function(){s(0)}),[t]);var g=function(){v(!0),setTimeout((function(){s((function(e){return 0===e?t.length-1:e-1})),v(!1)}),300)},b=function(){v(!0),setTimeout((function(){s((function(e){return e===t.length-1?0:e+1})),v(!1)}),300)},y=(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1}),x="light"===i?"#FFF":"#000";return u.default.createElement("figure",{className:"phone__frameset--wrapper preview__phone--mockup",onTouchStart:function(e){var t=e.touches[0];p(t.clientX)},onTouchMove:function(e){if(null!==f){var t=e.touches[0].clientX-f;t>50?g():t<-50&&b()}},onTouchEnd:function(){p(null)}},u.default.createElement("div",{style:{boxSizing:"border-box",position:"relative",border:"3px solid ".concat(n||"#4A5568"),borderRadius:"2.4rem",width:"250.38px",height:"507.5px",zIndex:10}},u.default.createElement("div",{style:{border:"9px solid #000000",borderRadius:"2.2rem",width:"100%",height:"100%",zIndex:100}},u.default.createElement("img",{src:t[c],className:"phone__frameset--img ".concat(m?"fade-out":""),style:{position:"relative",borderRadius:"1.5rem",width:"100%",height:"102%",zIndex:-1}}),u.default.createElement("div",{style:{position:"absolute",top:"1.1rem",left:"2rem",color:x,fontSize:"10px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'}},y),u.default.createElement("div",{style:{position:"absolute",top:"1rem",left:"50%",borderRadius:"9999px",backgroundColor:"#000",width:"30.33%",padding:"0.4rem",transform:"translateX(-50%)"}},u.default.createElement("div",{style:{borderRadius:"9999px",backgroundColor:"#1A202C",float:"right",width:"20%",padding:"0.25rem"}})),u.default.createElement("div",{style:{position:"absolute",top:"1.2rem",right:"1.6rem",display:"flex",alignItems:"center",gap:"5px",color:x}},u.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:x,strokeWidth:"3",width:"14px",height:"14px"},u.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),u.default.createElement("path",{d:"M6 16.5h2v2h-2zM10 12.5h2v6h-2zM14 9.5h2v9h-2zM18 5.5h2v13h-2z"})),u.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:x,strokeWidth:"3",width:"12px",height:"12px"},u.default.createElement("path",{d:"M3 9C7 4 17 4 21 9"}),u.default.createElement("path",{d:"M6 13C9 9.5 15 9.5 18 13"}),u.default.createElement("circle",{cx:"12",cy:"17",r:"1",fill:x})),u.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 12",width:"16.6",height:"8",fill:"none",stroke:x,strokeWidth:"1"},u.default.createElement("rect",{x:"0.5",y:"0.5",width:"21",height:"11",rx:"2",ry:"2"}),u.default.createElement("path",{d:"M23 4V8",strokeWidth:"1.5",strokeLinecap:"round"}),u.default.createElement("rect",{x:"2",y:"2",width:"18",height:"8",fill:x}))))),u.default.createElement("div",{className:"preview__scroll--btns"},u.default.createElement("button",{className:"preview__scroll--btn btn",style:{backgroundColor:r||"#004F98",color:o||"#FFF"},onClick:g},"Previous"),u.default.createElement("button",{className:"preview__scroll--btn btn",style:{backgroundColor:r||"#004F98",color:o||"#FFF"},onClick:b},"Next")))}},66:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.iPadFrame=t.AndroidFrame=t.iPhoneFrame=void 0;var o=r(n(671));t.iPhoneFrame=o.default;var i=r(n(213));t.AndroidFrame=i.default;var a=r(n(814));t.iPadFrame=a.default},155:t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0,r(66)})()));