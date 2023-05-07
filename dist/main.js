(()=>{"use strict";var e,r,n,t,o,a,i,s,c,u,l,p,f,d,v={426:(e,r,n)=>{n.d(r,{Z:()=>s});var t=n(81),o=n.n(t),a=n(645),i=n.n(a)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap);"]),i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap);"]),i.push([e.id,"* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  font-family: 'Abril Fatface', cursive;\r\n  font-size: 1.4rem;\r\n  background-color: #997b66;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 20px;\r\n  font-family: 'Playfair Display', serif;\r\n}\r\n\r\nli:hover {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n",""]);const s=i},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],u=t.base?c[0]+t.base:c[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var f=n(p),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)r[f].references++,r[f].updater(d);else{var v=o(d,t);t.byIndex=s,r.splice(s,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function o(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);r[s].references--}for(var c=t(e,o),u=0;u<a.length;u++){var l=n(a[u]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=c}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},m={};function y(e){var r=m[e];if(void 0!==r)return r.exports;var n=m[e]={id:e,exports:{}};return v[e](n,n.exports,y),n.exports}y.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return y.d(r,{a:r}),r},y.d=(e,r)=>{for(var n in r)y.o(r,n)&&!y.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},y.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),y.nc=void 0,e=y(379),r=y.n(e),n=y(795),t=y.n(n),o=y(569),a=y.n(o),i=y(565),s=y.n(i),c=y(216),u=y.n(c),l=y(589),p=y.n(l),f=y(426),(d={}).styleTagTransform=p(),d.setAttributes=s(),d.insert=a().bind(null,"head"),d.domAPI=t(),d.insertStyleElement=u(),r()(f.Z,d),f.Z&&f.Z.locals&&f.Z.locals})();