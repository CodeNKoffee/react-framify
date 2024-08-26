!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.ReactFramify=t(require("react")):e.ReactFramify=t(e.react)}(this,(e=>(()=>{"use strict";var t={159:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(601),o=r.n(n),a=r(314),i=r.n(a)()(o());i.push([e.id,"* {\n  box-sizing: border-box;\n}\n\n.preview__phone--mockup {\n  margin-top: 380px;\n}\n\n/* Phone Frameset Styling */\n.phone__frameset--wrapper {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  width: 256px;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.phone__frameset {\n  position: relative;\n  width: 100%;\n  z-index: 1;\n}\n\n.phone__frameset:hover {\n  cursor: grab;\n}\n\n.phone__frameset--img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  opacity: 1;\n  transition: opacity 1.5s ease;\n}\n\n/* Image scrolling animation */\n.phone__frameset--img.fade-out {\n  opacity: 0;\n}\n\n.preview__scroll--btns {\n  position: relative;\n  width: 100%;\n  margin-top: 24px;\n  z-index: 1000;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n}\n\n.preview__scroll--btn {\n  position: relative; \n  z-index: 1000; \n  display: flex;\n  flex: 1;\n  justify-content: center;\n}\n\n.preview__scroll--btn:hover {\n  cursor: pointer;\n}\n\n.preview__scroll {\n  position: absolute;\n  bottom: 5%;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n}\n\n/* New iPad styles */\n.preview__ipad--mockup {\n  margin-top: 200px; /* Adjusted for larger iPad size */\n}\n\n.ipad__frameset--wrapper {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  width: 512px; /* Doubled size for iPad */\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.ipad__frameset {\n  position: relative;\n  width: 100%;\n  z-index: 1;\n}\n\n.ipad__frameset:hover {\n  cursor: grab;\n}\n\n.ipad__frameset--img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  opacity: 1;\n  transition: opacity 1.5s ease;\n}\n\n/* Image scrolling animation */\n.ipad__frameset--img.fade-out {\n  opacity: 0;\n}",""]);const l=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var l=0;l<this.length;l++){var u=this[l][0];null!=u&&(i[u]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);n&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},323:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var n=r(72),o=r.n(n),a=r(825),i=r.n(a),l=r(659),u=r.n(l),c=r(56),d=r.n(c),s=r(540),f=r.n(s),p=r(113),m=r.n(p),h=r(159),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=u().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=f(),o()(h.A,v);const b=h.A&&h.A.locals?h.A.locals:void 0},72:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],l=0;l<e.length;l++){var u=e[l],c=n.base?u[0]+n.base:u[0],d=a[c]||0,s="".concat(c," ").concat(d);a[c]=d+1;var f=r(s),p={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var m=o(p,n);n.byIndex=l,t.splice(l,0,{identifier:s,updater:m,references:1})}i.push(s)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=r(a[i]);t[l].references--}for(var u=n(e,o),c=0;c<a.length;c++){var d=r(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=u}}},659:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},213:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0});var u=a(r(155));r(323);var c=i(r(897)),d=i(r(709)),s=i(r(564)),f=i(r(362)),p=i(r(480)),m=i(r(757));t.default=function(e){var t,r,n=e.screenshotList,o=e.deviceColor,a=e.buttonStyles,i=void 0===a?{}:a,h=e.orientation,v=void 0===h?"portrait":h,b=e.statusBar,y=(t=(0,u.useState)(0),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(t,r)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),g=y[0],_=y[1],x="light"===b.mode?"#FFF":"#000";return u.default.createElement("figure",{className:"phone__frameset--wrapper preview__phone--mockup"},u.default.createElement("div",{style:{boxSizing:"border-box",position:"relative",border:"3px solid ".concat(o||"#4A5568"),borderRadius:"3rem",width:"portrait"===v?"250.38px":"507.5px",height:"portrait"===v?"507.5px":"250.38px",zIndex:10}},u.default.createElement("div",{style:{border:"9px solid #000000",borderRadius:"2.8rem",width:"100%",height:"100%",zIndex:100}},u.default.createElement("img",{src:n[g],className:"phone__frameset--img",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",borderRadius:"2.8rem",zIndex:-1}}),"portrait"===v&&u.default.createElement(p.default,{indicatorColor:x}),u.default.createElement(c.default,{orientation:v}),"portrait"===v&&u.default.createElement("div",{style:{position:"absolute",top:"1.2rem",right:"1.6rem",display:"flex",alignItems:"center",gap:"5px",color:x}},u.default.createElement(d.default,{indicatorColor:x}),u.default.createElement(s.default,{indicatorColor:x}),u.default.createElement(f.default,{indicatorColor:x})))),u.default.createElement(m.default,{screenshotList:n,buttonStyles:i,currentImageIndex:g,setCurrentImageIndex:function(e){setTimeout((function(){_(e)}),300)}}))}},118:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0});var u=a(r(155));r(323);var c=i(r(480)),d=i(r(709)),s=i(r(564)),f=i(r(362)),p=i(r(757));t.default=function(e){var t,r,n=e.screenshotList,o=e.deviceColor,a=e.buttonStyles,i=void 0===a?{}:a,m=e.orientation,h=void 0===m?"portrait":m,v=e.statusBar,b=(t=(0,u.useState)(0),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(t,r)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),y=b[0],g=b[1],_="light"===v.mode?"#FFF":"#000";return u.default.createElement("figure",{className:"phone__frameset--wrapper preview__phone--mockup"},u.default.createElement("div",{style:{boxSizing:"border-box",position:"relative",border:"3px solid ".concat(o||"#4A5568"),borderRadius:"1.5rem",width:"portrait"===h?"400px":"533.33px",height:"portrait"===h?"533.33px":"400px"}},u.default.createElement("div",{style:{border:"9px solid #000000",borderRadius:"1.3rem",width:"100%",height:"100%",zIndex:100}},u.default.createElement("img",{src:n[y],className:"phone__frameset--img",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",borderRadius:"1.1rem",zIndex:-1}}),u.default.createElement(c.default,{indicatorColor:_}),u.default.createElement("div",{style:{position:"absolute",top:"1.2rem",right:"1.6rem",display:"flex",alignItems:"center",gap:"5px",color:_}},u.default.createElement(d.default,{indicatorColor:_}),u.default.createElement(s.default,{indicatorColor:_}),u.default.createElement(f.default,{indicatorColor:_})))),u.default.createElement(p.default,{screenshotList:n,buttonStyles:i,currentImageIndex:y,setCurrentImageIndex:function(e){setTimeout((function(){g(e)}),300)}}))}},359:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0});var u=a(r(155));r(323);var c=i(r(480)),d=i(r(709)),s=i(r(564)),f=i(r(362)),p=i(r(706)),m=i(r(757));t.default=function(e){var t,r,n=e.screenshotList,o=e.deviceColor,a=e.buttonStyles,i=void 0===a?{}:a,h=e.orientation,v=void 0===h?"portrait":h,b=e.statusBar,y=(t=(0,u.useState)(0),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(t,r)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),g=y[0],_=y[1],x="light"===b.mode?"#FFF":"#000";return u.default.createElement("figure",{className:"phone__frameset--wrapper preview__phone--mockup"},u.default.createElement("div",{style:{boxSizing:"border-box",position:"relative",border:"3px solid ".concat(o||"#4A5568"),borderRadius:"2.4rem",width:"portrait"===v?"250.38px":"507.5px",height:"portrait"===v?"507.5px":"250.38px",zIndex:10}},u.default.createElement("div",{style:{border:"9px solid #000000",borderRadius:"2.2rem",width:"100%",height:"100%",zIndex:100}},u.default.createElement("img",{src:n[g],className:"phone__frameset--img",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",borderRadius:"2.2rem",zIndex:-1}}),"portrait"===v&&u.default.createElement(c.default,{indicatorColor:x}),u.default.createElement(p.default,{orientation:v}),"portrait"===v&&u.default.createElement("div",{style:{position:"absolute",top:"1.2rem",right:"1.6rem",display:"flex",alignItems:"center",gap:"5px",color:x}},u.default.createElement(d.default,{indicatorColor:x}),u.default.createElement(s.default,{indicatorColor:x}),u.default.createElement(f.default,{indicatorColor:x})))),u.default.createElement(m.default,{screenshotList:n,buttonStyles:i,currentImageIndex:g,setCurrentImageIndex:function(e){setTimeout((function(){_(e)}),300)}}))}},66:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.IPadFrame=t.AndroidFrame=t.IPhoneFrame=void 0;var o=n(r(359));t.IPhoneFrame=o.default;var a=n(r(213));t.AndroidFrame=a.default;var i=n(r(118));t.IPadFrame=i.default},362:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(155));t.default=function(e){var t=e.indicatorColor;return o.default.createElement(o.default.Fragment,null,o.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 12",width:"16.6",height:"8",fill:"none",stroke:t,strokeWidth:"1"},o.default.createElement("rect",{x:"0.5",y:"0.5",width:"21",height:"11",rx:"2",ry:"2"}),o.default.createElement("path",{d:"M23 4V8",strokeWidth:"1.5",strokeLinecap:"round"}),o.default.createElement("rect",{x:"2",y:"2",width:"18",height:"8",fill:t})))}},480:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(155));t.default=function(e){var t=e.indicatorColor,r=(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1});return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{style:{position:"absolute",top:"1.1rem",left:"2rem",color:t,fontSize:"10px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'}},r))}},706:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(155));t.default=function(e){var t=e.orientation;return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{style:{position:"absolute",top:"portrait"===t?"1rem":"50%",left:"portrait"===t?"50%":"0.01rem",borderRadius:"9999px",backgroundColor:"#000",width:"portrait"===t?"30.33%":"16%",padding:"0.4rem",transform:"portrait"===t?"translateX(-50%)":"translateY(-50%) rotate(-90deg)"}},o.default.createElement("div",{style:{borderRadius:"9999px",backgroundColor:"#1A202C",float:"right",width:"20%",padding:"0.25rem"}})))}},757:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0});var l=a(r(155));t.default=function(e){var t,r,n=e.screenshotList,o=e.buttonStyles,a=e.currentImageIndex,u=e.setCurrentImageIndex,c=(t=(0,l.useState)(null),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(t,r)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=c[0],s=c[1],f=function(){setTimeout((function(){var e=0===a?n.length-1:a-1;u(e)}),300)},p=function(){setTimeout((function(){var e=a===n.length-1?0:a+1;u(e)}),300)},m=o||{},h=m.backgroundColor,v=void 0===h?"#004F98":h,b=m.color,y=void 0===b?"#FFF":b,g=m.border,_=void 0===g?"none":g,x=m.borderRadius,w=void 0===x?"16px":x,j=m.fontSize,E=void 0===j?"16px":j,O=m.fontFamily,S=void 0===O?"Verdana, Geneva, Tahoma, sans-serif":O,M=m.fontWeight,I=void 0===M?"700":M,C=m.padding,P=void 0===C?"8px 16px":C;return l.default.createElement("div",{className:"preview__scroll--btns",onTouchStart:function(e){var t=e.touches[0];s(t.clientX)},onTouchMove:function(e){if(null!==d){var t=e.touches[0].clientX-d;t>50?f():t<-50&&p()}},onTouchEnd:function(){s(null)}},l.default.createElement("button",{className:"preview__scroll--btn btn",style:{backgroundColor:v,color:y,border:_,borderRadius:w,fontSize:E,fontFamily:S,fontWeight:I,padding:P},onClick:f},"Previous"),l.default.createElement("button",{className:"preview__scroll--btn btn",style:{backgroundColor:v,color:y,border:_,borderRadius:w,fontSize:E,fontFamily:S,fontWeight:I,padding:P},onClick:p},"Next"))}},897:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(155));t.default=function(e){var t=e.orientation;return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{style:{position:"absolute",top:"portrait"===t?"1.25rem":"50%",left:"portrait"===t?"50%":"1.25rem",borderRadius:"9999px",backgroundColor:"#000",width:"10px",height:"10px",padding:"0.4rem",transform:"portrait"===t?"translateX(-50%)":"translateY(-50%)"}}))}},709:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(155));t.default=function(e){var t=e.indicatorColor;return o.default.createElement(o.default.Fragment,null,o.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:t,strokeWidth:"3",width:"14px",height:"14px"},o.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.default.createElement("path",{d:"M6 16.5h2v2h-2zM10 12.5h2v6h-2zM14 9.5h2v9h-2zM18 5.5h2v13h-2z"})))}},564:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(155));t.default=function(e){var t=e.indicatorColor;return o.default.createElement(o.default.Fragment,null,o.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"3",width:"12px",height:"12px"},o.default.createElement("path",{d:"M3 9C7 4 17 4 21 9"}),o.default.createElement("path",{d:"M6 13C9 9.5 15 9.5 18 13"}),o.default.createElement("circle",{cx:"12",cy:"17",r:"1",fill:t})))}},155:t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={id:e,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.exports}return n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,n(66)})()));