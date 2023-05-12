(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),a=n.n(r),o=n(645),c=n.n(o)()(a());c.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap);"]),c.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap);"]),c.push([e.id,'* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n:root {\r\n  --bg-color: #87986a;\r\n  --pink-color: #d9ae94;\r\n  --brown-color: #846552;\r\n  --yellow-color: #f1dca7;\r\n  --detail-font: "Playfair Display", serif;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/* HOME */\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 0;\r\n  font-family: var(--detail-font);\r\n}\r\n\r\n.nav-ul {\r\n  display: flex;\r\n  gap: 20px;\r\n  margin: 0;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: black;\r\n  padding: 0;\r\n}\r\n\r\n.nav-ul li:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-ul li:active {\r\n  background-color: var(--yellow-color);\r\n}\r\n\r\nmain {\r\n  font-family: var(--detail-font);\r\n  background-color: var(--yellow-color);\r\n  margin: 0;\r\n}\r\n\r\n.home-text {\r\n  text-align: center;\r\n  font-size: 1.3rem;\r\n  margin: 0;\r\n  padding: 80px;\r\n  background-image: url(https://images.pexels.com/photos/10390463/pexels-photo-10390463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  color: white;\r\n}\r\n\r\n.home-p {\r\n  color: white;\r\n  background-color: var(--bg-color);\r\n  padding: 10px;\r\n}\r\n\r\n.title {\r\n  font-family: "Abril Fatface", cursive;\r\n  color: var(--pink-color);\r\n  text-shadow: 1px 1px 1px black;\r\n  letter-spacing: 20px;\r\n}\r\n\r\n.schedule {\r\n  background-color: var(--pink-color);\r\n  margin: 0;\r\n  padding: 50px 80px;\r\n  font-size: 1.3rem;\r\n  text-align: center;\r\n}\r\n\r\n.schedule-ul {\r\n  font-weight: 600;\r\n  background-color: var(--bg-color);\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  width: fit-content;\r\n  color: white;\r\n  padding: 10px;\r\n  border: 10px solid var(--brown-color);\r\n  border-radius: 20px;\r\n}\r\n\r\nh2 {\r\n  margin: 0;\r\n}\r\n\r\n.schedule-title {\r\n  color: #956b4b;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.reviews {\r\n  color: white;\r\n  background-color: var(--bg-color);\r\n  margin: 0;\r\n  padding: 50px 80px;\r\n  text-align: center;\r\n  font-family: var(--detail-font);\r\n}\r\n\r\n.reviews h2 {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.customers {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 40px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\nimg {\r\n  width: 200px;\r\n  height: 200px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.card {\r\n  width: 200px;\r\n}\r\n\r\n.name {\r\n  text-align: end;\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  background-color: var(--brown-color);\r\n}\r\n\r\nfooter p {\r\n  margin: 0;\r\n  font-family: var(--detail-font);\r\n  color: white;\r\n}\r\n\r\n/* MENU */\r\n.menu-page {\r\n  background-color: #956b4b;\r\n  font-family: var(--detail-font);\r\n  color: var(--yellow-color);\r\n  text-align: center;\r\n  padding: 50px 80px;\r\n}\r\n\r\n.menu-title {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  letter-spacing: 10px;\r\n}\r\n\r\n.menuTitle {\r\n  font-size: 1.4rem;\r\n  font-weight: 600;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.menuDetail {\r\n  text-align: left;\r\n  color: white;\r\n  font-size: 1rem;\r\n}\r\n\r\n.menuContent img {\r\n  width: 100%;\r\n  height: 200px;\r\n}\r\n\r\n.menuContent {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 50px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.menu-card {\r\n  width: 300px;\r\n  height: 100%;\r\n  background-color: var(--bg-color);\r\n  border-radius: 10px;\r\n  padding: 10px 20px;\r\n  transition: all ease 1s;\r\n}\r\n\r\n.menu-card:hover {\r\n  background-color: #c2977d;\r\n}\r\n\r\n/* CONTACT */\r\n\r\n.contact-page {\r\n  background-color: var(--bg-color);\r\n  padding: 50px 80px;\r\n  font-family: var(--detail-font);\r\n}\r\n\r\n.contact-title,\r\n.location-title {\r\n  color: var(--yellow-color);\r\n  text-align: center;\r\n  letter-spacing: 10px;\r\n}\r\n\r\n.contact-ul {\r\n  background-color: var(--pink-color);\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  width: fit-content;\r\n  color: black;\r\n  padding: 10px;\r\n  border: 10px solid var(--yellow-color);\r\n  border-radius: 20px;\r\n}\r\n\r\n.contact-ul > li {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.contact-location {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.contact-location img {\r\n  width: 100%;\r\n  height: 300px;\r\n  border-radius: 20px;\r\n  border: 10px solid var(--yellow-color);\r\n  margin-top: 20px;\r\n}\r\n\r\n.location-title {\r\n  margin-top: 50px;\r\n}\r\n\r\n.location-address {\r\n  font-size: 1.5rem;\r\n  color: white;\r\n  text-decoration: underline;\r\n  text-decoration-color: var(--yellow-color);\r\n  text-decoration-thickness: 3px;\r\n}\r\n',""]);const s=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(c[l]=!0)}for(var i=0;i<e.length;i++){var d=[].concat(e[i]);r&&c[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},c=[],s=0;s<e.length;s++){var l=e[s],i=r.base?l[0]+r.base:l[0],d=o[i]||0,m="".concat(i," ").concat(d);o[i]=d+1;var p=n(m),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var h=a(u,r);r.byIndex=s,t.splice(s,0,{identifier:m,updater:h,references:1})}c.push(m)}return c}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var s=n(o[c]);t[s].references--}for(var l=r(e,a),i=0;i<o.length;i++){var d=n(o[i]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),c=n.n(o),s=n(565),l=n.n(s),i=n(216),d=n.n(i),m=n(589),p=n.n(m),u=n(426),h={};function g(){const e=document.createElement("div");e.className="schedule";const t=document.createElement("h2");t.className="schedule-title",t.textContent="OUR SCHEDULE FROM \n MONDAY TO SATURDAY",e.appendChild(t);const n=document.createElement("ul");n.className="schedule-ul",e.appendChild(n);const r=document.createElement("li"),a=document.createElement("li"),o=document.createElement("li"),c=document.createElement("li");r.textContent="Breakfast: 8:00am - 11:00am",a.textContent="Lunch: 11:30am - 2:30pm",o.textContent="Afternoon Tea: 3:00pm - 5:00pm",c.textContent="Dinner: 5:30pm - 9:00pm",n.append(r,a,o,c);const s=document.createElement("div");s.className="reviews";const l=document.createElement("h2");l.textContent="WHAT OUR CUSTOMERS ARE SAYING",s.appendChild(l);const i=document.createElement("div");i.className="customers",s.appendChild(i);const d=document.createElement("div");d.className="card";const m=document.createElement("img");m.src="https://images.pexels.com/photos/9395560/pexels-photo-9395560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",m.alt="Red Velvet Cake Served with Coffee",m.draggable=!1;const p=document.createElement("p");p.className="card-text",p.textContent='"The cakes at Vintage Delights are simply divine! Every bite was\n  pure bliss. I can\'t wait to try more. The red velvet cake was my\n  favorite!"';const u=document.createElement("p");u.className="name",u.textContent="Lisa T.",d.append(m,p,u);const h=document.createElement("div");h.className="card";const g=document.createElement("img");g.src="https://images.pexels.com/photos/3968058/pexels-photo-3968058.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",g.alt="Brown Wooden Table and Chairs Near Window",g.draggable=!1;const f=document.createElement("p");f.className="card-text",f.textContent='"The atmosphere at Vintage Delights is charming and cozy. It\'s the\n  perfect place to indulge in a delicious slice of cake and a cup of\n  coffee."';const x=document.createElement("p");x.className="name",x.textContent="Sarah W.",h.append(g,f,x);const v=document.createElement("div");v.className="card";const b=document.createElement("img");b.src="https://images.pexels.com/photos/6631965/pexels-photo-6631965.jpeg?auto=compress&cs=tinysrgb&w=600",b.alt="Lemon Cake on Round Ceramic Plate",b.draggable=!1;const y=document.createElement("p");y.className="card-text",y.textContent=" \"I don't usually have a sweet tooth, but the cakes at Vintage\n  Delights are so delicious that I can't resist. The lemon cake is a\n  personal favorite.\"";const E=document.createElement("p");E.className="name",E.textContent="Julia P.",v.append(b,y,E);const w=document.createElement("div");w.className="card";const C=document.createElement("img");C.src="https://images.pexels.com/photos/10581380/pexels-photo-10581380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",C.alt="Strawberry Shortcake in a Glass Jar",C.draggable=!1;const k=document.createElement("p");k.className="card-text",k.textContent='"I discovered Vintage Delights by chance and I\'m so glad I did.\n  The cakes are made with love and you can taste it in every bite.\n  It has become my go-to spot"';const N=document.createElement("p");N.className="name",N.textContent="Michael C.",w.append(C,k,N),i.append(d,h,v,w);const S=document.createElement("footer"),T=document.createElement("p");T.textContent="All photos are from Pexels.com",S.appendChild(T);const A=document.createElement("section");A.className="home",A.appendChild(e),A.appendChild(s),A.appendChild(S),document.querySelector("#content").appendChild(A)}h.styleTagTransform=p(),h.setAttributes=l(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=d(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals,function(){const e=document.createElement("main"),t=document.createElement("div");t.className="home-text",e.appendChild(t);const n=document.createElement("h1");n.className="title",n.textContent="VINTAGE DELIGHTS",t.appendChild(n);const r=document.createElement("nav"),a=document.createElement("ul");a.className="nav-ul",r.appendChild(a);const o=document.createElement("li"),c=document.createElement("li"),s=document.createElement("li");o.className="homeBtn",c.className="menuBtn",s.className="contactBtn",o.textContent="home",c.textContent="menu",s.textContent="contact",a.append(o,c,s),t.appendChild(r);const l=document.createElement("p");l.className="home-p",l.textContent="The Vintage Delights is a charming cafe and bakery dedicated to\n  preserving the timeless art of baking vintage cakes. Our menu\n  features a variety of classic cake flavors from different eras, all\n  made with the finest ingredients and baked fresh daily. Whether\n  you're in the mood for a rich and decadent chocolate cake from the\n  1920s, a light and airy chiffon cake from the 1950s, or a buttery\n  pound cake from the 1970s, we've got you covered.",t.appendChild(l),document.querySelector("#content").appendChild(e)}(),g();let f="home";document.querySelector("#content");const x=document.querySelector(".homeBtn"),v=document.querySelector(".menuBtn"),b=document.querySelector(".contactBtn"),y=document.createElement("div");y.classList.add("home");const E=document.createElement("div");E.classList.add("menu");const w=document.createElement("div");w.classList.add("contact"),x.addEventListener("click",(()=>{x.disabled||"home"===f||(g(),f="home",x.disabled=!0,v.disabled=!1,b.disabled=!1,E.classList.add("hide"),w.classList.add("hide"),y.classList.remove("hide"))})),v.addEventListener("click",(()=>{v.disabled||"menu"===f||(function(){const e=document.createElement("div");e.className="menu-page";const t=document.createElement("p");t.className="menu-title",t.textContent="OUR MENU",e.appendChild(t);const n=document.createElement("div");n.className="menuContent",e.appendChild(n);const r=document.createElement("div");r.className="menu-card";const a=document.createElement("img");a.src="https://images.pexels.com/photos/5594491/pexels-photo-5594491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",a.alt="Sliced Carrot Cake on a White Plate",a.draggable=!1;const o=document.createElement("p");o.className="menuTitle",o.textContent="Carrot Cake";const c=document.createElement("p");c.className="menuDetail",c.textContent="A moist and flavorful cake loaded with shredded carrots, chopped walnuts, and warm spices, finished with cream cheese frosting.",r.append(a,o,c);const s=document.createElement("div");s.className="menu-card";const l=document.createElement("img");l.src="https://images.pexels.com/photos/8443294/pexels-photo-8443294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",l.alt="Cup Cakes with Strawberries on Top",l.draggable=!1;const i=document.createElement("p");i.className="menuTitle",i.textContent="Strawberry Shortcake";const d=document.createElement("p");d.className="menuDetail",d.textContent="Layers of tender sponge cake with whipped cream and fresh strawberries, a quintessential summer dessert.",s.append(l,i,d);const m=document.createElement("div");m.className="menu-card";const p=document.createElement("img");p.src="https://images.unsplash.com/photo-1620490448382-d2f51a08596f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",p.alt="Black forest cake on a plate",p.draggable=!1;const u=document.createElement("p");u.className="menuTitle",u.textContent="Black Forest Cake";const h=document.createElement("p");h.className="menuDetail",h.textContent="A classic German chocolate cake layered with tart cherries and topped with whipped cream and chocolate shavings.",m.append(p,u,h);const g=document.createElement("div");g.className="menu-card";const f=document.createElement("img");f.src="https://images.pexels.com/photos/15071192/pexels-photo-15071192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",f.alt="Close-Up Shot of a Slice of Yummy Cake",f.draggable=!1;const x=document.createElement("p");x.className="menuTitle",x.textContent="Red Velvet Cake";const v=document.createElement("p");v.className="menuDetail",v.textContent="A Southern staple, this bright red cake is moist and tender with a subtle cocoa flavor, topped with tangy cream cheese frosting.",g.append(f,x,v);const b=document.createElement("div");b.className="menu-card";const y=document.createElement("img");y.src="https://images.pexels.com/photos/12035555/pexels-photo-12035555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",y.alt="A Piece of Lemon Cake on a Ceramic Plate",y.draggable=!1;const E=document.createElement("p");E.className="menuTitle",E.textContent="Lemon Chiffon Cake";const w=document.createElement("p");w.className="menuDetail",w.textContent="A light and airy cake with a bright lemon flavor, made with a blend of cake flour and whipped egg whites. Perfect for any season",b.append(y,E,w),n.append(r,s,m,g,b);const C=document.createElement("section");C.className="menu",C.appendChild(e),document.querySelector("#content").appendChild(C)}(),f="menu",v.disabled=!0,x.disabled=!1,b.disabled=!1,y.classList.add("hide"),w.classList.add("hide"),E.classList.remove("hide"))})),b.addEventListener("click",(()=>{b.disabled||"contact"===f||(function(){const e=document.createElement("div");e.className="contact-page";const t=document.createElement("h1");t.className="contact-title",t.textContent="CONTACT US";const n=document.createElement("ul");n.className="contact-ul";const r=document.createElement("li");r.textContent="Email: contact@fakecompany.com";const a=document.createElement("li");a.textContent="Phone: +1 (555) 123-4567";const o=document.createElement("li");o.textContent="Facebook: https://www.facebook.com/fakecompany",n.append(r,a,o);const c=document.createElement("div");c.className="contact-location";const s=document.createElement("h2");s.textContent="VISIT US",s.className="location-title";const l=document.createElement("p");l.className="location-address",l.textContent="Address: 123 Main Street, Anytown, USA";const i=document.createElement("img");i.src="https://images.pexels.com/photos/3262277/pexels-photo-3262277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",i.alt="Brown Bar Stools in Front of a big mirror",i.draggable=!1,c.append(s,l,i),e.append(t,n,c);const d=document.createElement("section");d.className="contact",d.appendChild(e),document.querySelector("#content").appendChild(d)}(),f="contact",b.disabled=!0,x.disabled=!1,v.disabled=!1,y.classList.add("hide"),E.classList.add("hide"),w.classList.remove("hide"))}))})()})();