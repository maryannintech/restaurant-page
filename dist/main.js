(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap);"]),c.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap);"]),c.push([e.id,'* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n:root {\r\n  --bg-color: #87986a;\r\n  --pink-color: #d9ae94;\r\n  --brown-color: #846552;\r\n  --yellow-color: #f1dca7;\r\n  --detail-font: "Playfair Display", serif;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/* HOME */\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 0;\r\n  font-family: var(--detail-font);\r\n}\r\n\r\n.nav-ul {\r\n  display: flex;\r\n  gap: 20px;\r\n  margin: 0;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: black;\r\n  padding: 0;\r\n}\r\n\r\n.nav-ul li:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-ul li:active {\r\n  background-color: var(--yellow-color);\r\n}\r\n\r\nmain {\r\n  font-family: var(--detail-font);\r\n  background-color: var(--yellow-color);\r\n  margin: 0;\r\n}\r\n\r\n.home-text {\r\n  text-align: center;\r\n  font-size: 1.3rem;\r\n  margin: 0;\r\n  padding: 80px;\r\n  background-image: url(https://images.pexels.com/photos/10390463/pexels-photo-10390463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  color: white;\r\n}\r\n\r\n.home-p {\r\n  color: white;\r\n  background-color: var(--bg-color);\r\n  padding: 10px;\r\n}\r\n\r\n.title {\r\n  font-family: "Abril Fatface", cursive;\r\n  color: var(--pink-color);\r\n  text-shadow: 1px 1px 1px black;\r\n  letter-spacing: 20px;\r\n}\r\n\r\n.schedule {\r\n  background-color: var(--pink-color);\r\n  margin: 0;\r\n  padding: 50px 80px;\r\n  font-size: 1.3rem;\r\n  text-align: center;\r\n}\r\n\r\n.schedule-ul {\r\n  font-weight: 600;\r\n  background-color: var(--bg-color);\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  width: fit-content;\r\n  color: white;\r\n  padding: 10px;\r\n  border: 10px solid var(--brown-color);\r\n  border-radius: 20px;\r\n}\r\n\r\nh2 {\r\n  margin: 0;\r\n}\r\n\r\n.schedule-title {\r\n  color: #956b4b;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.reviews {\r\n  color: white;\r\n  background-color: var(--bg-color);\r\n  margin: 0;\r\n  padding: 50px 80px;\r\n  text-align: center;\r\n  font-family: var(--detail-font);\r\n}\r\n\r\n.reviews h2 {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.customers {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 40px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\nimg {\r\n  width: 200px;\r\n  height: 200px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.card {\r\n  width: 200px;\r\n}\r\n\r\n.name {\r\n  text-align: end;\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  background-color: var(--brown-color);\r\n}\r\n\r\nfooter p {\r\n  margin: 0;\r\n  font-family: var(--detail-font);\r\n  color: white;\r\n}\r\n\r\n/* MENU */\r\n.menu-page {\r\n  background-color: #956b4b;\r\n  font-family: var(--detail-font);\r\n  color: var(--yellow-color);\r\n  text-align: center;\r\n  padding: 50px 80px;\r\n}\r\n\r\n.menu-title {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  letter-spacing: 10px;\r\n}\r\n\r\n.menuTitle {\r\n  font-size: 1.4rem;\r\n  font-weight: 600;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.menuDetail {\r\n  text-align: left;\r\n  color: white;\r\n  font-size: 1rem;\r\n}\r\n\r\n.menuContent img {\r\n  width: 100%;\r\n  height: 200px;\r\n}\r\n\r\n.menuContent {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 50px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.menu-card {\r\n  width: 300px;\r\n  height: 100%;\r\n  background-color: var(--bg-color);\r\n  border-radius: 10px;\r\n  padding: 10px 20px;\r\n  transition: all ease 1s;\r\n}\r\n\r\n.menu-card:hover {\r\n  background-color: #c2977d;\r\n}\r\n\r\n/* CONTACT */\r\n\r\n.contact-page {\r\n  background-color: var(--bg-color);\r\n  padding: 50px 80px;\r\n  font-family: var(--detail-font);\r\n}\r\n\r\n.contact-title,\r\n.location-title {\r\n  color: var(--yellow-color);\r\n  text-align: center;\r\n  letter-spacing: 10px;\r\n}\r\n\r\n.contact-ul {\r\n  background-color: var(--pink-color);\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  width: fit-content;\r\n  color: black;\r\n  padding: 10px;\r\n  border: 10px solid var(--yellow-color);\r\n  border-radius: 20px;\r\n}\r\n\r\n.contact-ul > li {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.contact-location {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.contact-location img {\r\n  width: 100%;\r\n  height: 300px;\r\n  border-radius: 20px;\r\n  border: 10px solid var(--yellow-color);\r\n  margin-top: 20px;\r\n}\r\n\r\n.location-title {\r\n  margin-top: 50px;\r\n}\r\n\r\n.location-address {\r\n  font-size: 1.5rem;\r\n  color: white;\r\n  text-decoration: underline;\r\n  text-decoration-color: var(--yellow-color);\r\n  text-decoration-thickness: 3px;\r\n}\r\n',""]);const s=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(c[l]=!0)}for(var i=0;i<e.length;i++){var d=[].concat(e[i]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],s=0;s<e.length;s++){var l=e[s],i=r.base?l[0]+r.base:l[0],d=a[i]||0,m="".concat(i," ").concat(d);a[i]=d+1;var p=t(m),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)n[p].references++,n[p].updater(u);else{var h=o(u,r);r.byIndex=s,n.splice(s,0,{identifier:m,updater:h,references:1})}c.push(m)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var s=t(a[c]);n[s].references--}for(var l=r(e,o),i=0;i<a.length;i++){var d=t(a[i]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=l}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),c=t.n(a),s=t(565),l=t.n(s),i=t(216),d=t.n(i),m=t(589),p=t.n(m),u=t(426),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),n()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;let g=!0,f=!1,x=!1;const v=document.querySelector("#content"),b=document.querySelector(".home");document.querySelector(".menu"),document.querySelector(".contact"),document.querySelector(".homeBtn").addEventListener("click",(()=>{!1===g&&(function(){const e=document.createElement("div");e.className="schedule";const n=document.createElement("h2");n.className="schedule-title",n.textContent="OUR SCHEDULE FROM \n MONDAY TO SATURDAY",e.appendChild(n);const t=document.createElement("ul");t.className="schedule-ul",e.appendChild(t);const r=document.createElement("li"),o=document.createElement("li"),a=document.createElement("li"),c=document.createElement("li");r.textContent="Breakfast: 8:00am - 11:00am",o.textContent="Lunch: 11:30am - 2:30pm",a.textContent="Afternoon Tea: 3:00pm - 5:00pm",c.textContent="Dinner: 5:30pm - 9:00pm",t.append(r,o,a,c);const s=document.createElement("div");s.className="reviews";const l=document.createElement("h2");l.textContent="WHAT OUR CUSTOMERS ARE SAYING",s.appendChild(l);const i=document.createElement("div");i.className="customers",s.appendChild(i);const d=document.createElement("div");d.className="card";const m=document.createElement("img");m.src="https://images.pexels.com/photos/9395560/pexels-photo-9395560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",m.alt="Red Velvet Cake Served with Coffee",m.draggable=!1;const p=document.createElement("p");p.className="card-text",p.textContent='"The cakes at Vintage Delights are simply divine! Every bite was\n  pure bliss. I can\'t wait to try more. The red velvet cake was my\n  favorite!"';const u=document.createElement("p");u.className="name",u.textContent="Lisa T.",d.append(m,p,u);const h=document.createElement("div");h.className="card";const g=document.createElement("img");g.src="https://images.pexels.com/photos/3968058/pexels-photo-3968058.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",g.alt="Brown Wooden Table and Chairs Near Window",g.draggable=!1;const f=document.createElement("p");f.className="card-text",f.textContent='"The atmosphere at Vintage Delights is charming and cozy. It\'s the\n  perfect place to indulge in a delicious slice of cake and a cup of\n  coffee."';const x=document.createElement("p");x.className="name",x.textContent="Sarah W.",h.append(g,f,x);const v=document.createElement("div");v.className="card";const b=document.createElement("img");b.src="https://images.pexels.com/photos/6631965/pexels-photo-6631965.jpeg?auto=compress&cs=tinysrgb&w=600",b.alt="Lemon Cake on Round Ceramic Plate",b.draggable=!1;const y=document.createElement("p");y.className="card-text",y.textContent=" \"I don't usually have a sweet tooth, but the cakes at Vintage\n  Delights are so delicious that I can't resist. The lemon cake is a\n  personal favorite.\"";const w=document.createElement("p");w.className="name",w.textContent="Julia P.",v.append(b,y,w);const C=document.createElement("div");C.className="card";const E=document.createElement("img");E.src="https://images.pexels.com/photos/10581380/pexels-photo-10581380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",E.alt="Strawberry Shortcake in a Glass Jar",E.draggable=!1;const k=document.createElement("p");k.className="card-text",k.textContent='"I discovered Vintage Delights by chance and I\'m so glad I did.\n  The cakes are made with love and you can taste it in every bite.\n  It has become my go-to spot"';const N=document.createElement("p");N.className="name",N.textContent="Michael C.",C.append(E,k,N),i.append(d,h,v,C);const S=document.createElement("footer"),T=document.createElement("p");T.textContent="All photos are from Pexels.com",S.appendChild(T);const A=document.createElement("section");A.className="home",A.appendChild(e),A.appendChild(s),A.appendChild(S),document.querySelector("#content").appendChild(A)}(),g=!1),f=!1,x=!1})),document.querySelector(".menuBtn").addEventListener("click",(()=>{v.removeChild(b),!1===f&&(function(){const e=document.createElement("div");e.className="menu-page";const n=document.createElement("p");n.className="menu-title",n.textContent="OUR MENU",e.appendChild(n);const t=document.createElement("div");t.className="menuContent",e.appendChild(t);const r=document.createElement("div");r.className="menu-card";const o=document.createElement("img");o.src="https://images.pexels.com/photos/5594491/pexels-photo-5594491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",o.alt="Sliced Carrot Cake on a White Plate",o.draggable=!1;const a=document.createElement("p");a.className="menuTitle",a.textContent="Carrot Cake";const c=document.createElement("p");c.className="menuDetail",c.textContent="A moist and flavorful cake loaded with shredded carrots, chopped walnuts, and warm spices, finished with cream cheese frosting.",r.append(o,a,c);const s=document.createElement("div");s.className="menu-card";const l=document.createElement("img");l.src="https://images.pexels.com/photos/8443294/pexels-photo-8443294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",l.alt="Cup Cakes with Strawberries on Top",l.draggable=!1;const i=document.createElement("p");i.className="menuTitle",i.textContent="Strawberry Shortcake";const d=document.createElement("p");d.className="menuDetail",d.textContent="Layers of tender sponge cake with whipped cream and fresh strawberries, a quintessential summer dessert.",s.append(l,i,d);const m=document.createElement("div");m.className="menu-card";const p=document.createElement("img");p.src="https://images.unsplash.com/photo-1620490448382-d2f51a08596f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",p.alt="Black forest cake on a plate",p.draggable=!1;const u=document.createElement("p");u.className="menuTitle",u.textContent="Black Forest Cake";const h=document.createElement("p");h.className="menuDetail",h.textContent="A classic German chocolate cake layered with tart cherries and topped with whipped cream and chocolate shavings.",m.append(p,u,h);const g=document.createElement("div");g.className="menu-card";const f=document.createElement("img");f.src="https://images.pexels.com/photos/15071192/pexels-photo-15071192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",f.alt="Close-Up Shot of a Slice of Yummy Cake",f.draggable=!1;const x=document.createElement("p");x.className="menuTitle",x.textContent="Red Velvet Cake";const v=document.createElement("p");v.className="menuDetail",v.textContent="A Southern staple, this bright red cake is moist and tender with a subtle cocoa flavor, topped with tangy cream cheese frosting.",g.append(f,x,v);const b=document.createElement("div");b.className="menu-card";const y=document.createElement("img");y.src="https://images.pexels.com/photos/12035555/pexels-photo-12035555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",y.alt="A Piece of Lemon Cake on a Ceramic Plate",y.draggable=!1;const w=document.createElement("p");w.className="menuTitle",w.textContent="Lemon Chiffon Cake";const C=document.createElement("p");C.className="menuDetail",C.textContent="A light and airy cake with a bright lemon flavor, made with a blend of cake flour and whipped egg whites. Perfect for any season",b.append(y,w,C),t.append(r,s,m,g,b);const E=document.createElement("section");E.className="menu",E.appendChild(e),document.querySelector("#content").appendChild(E)}(),f=!0),g=!1,x=!1})),document.querySelector(".contactBtn").addEventListener("click",(()=>{v.removeChild(b),!1===x&&(function(){const e=document.createElement("div");e.className="contact-page";const n=document.createElement("h1");n.className="contact-title",n.textContent="CONTACT US";const t=document.createElement("ul");t.className="contact-ul";const r=document.createElement("li");r.textContent="Email: contact@fakecompany.com";const o=document.createElement("li");o.textContent="Phone: +1 (555) 123-4567";const a=document.createElement("li");a.textContent="Facebook: https://www.facebook.com/fakecompany",t.append(r,o,a);const c=document.createElement("div");c.className="contact-location";const s=document.createElement("h2");s.textContent="VISIT US",s.className="location-title";const l=document.createElement("p");l.className="location-address",l.textContent="Address: 123 Main Street, Anytown, USA";const i=document.createElement("img");i.src="https://images.pexels.com/photos/3262277/pexels-photo-3262277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",i.alt="Brown Bar Stools in Front of a big mirror",c.append(s,l,i),e.append(n,t,c);const d=document.createElement("section");d.className="contact",d.appendChild(e),document.querySelector("#content").appendChild(d)}(),x=!0),g=!1,f=!1}))})()})();