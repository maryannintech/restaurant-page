function menuContent() {
  // hero section
  const mainElement = document.createElement("main");
  const homeText = document.createElement("div");
  homeText.className = "home-text";
  mainElement.appendChild(homeText);

  const homeTitle = document.createElement("h1");
  homeTitle.className = "title";
  homeTitle.textContent = "VINTAGE DELIGHTS";
  homeText.appendChild(homeTitle);

  const homeNav = document.createElement("nav");
  const homeUL = document.createElement("ul");
  homeUL.className = "nav-ul";
  homeNav.appendChild(homeUL);
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  li1.className = "homeBtn";
  li2.className = "menuBtn";
  li3.className = "contactBtn";
  li1.textContent = "home";
  li2.textContent = "menu";
  li3.textContent = "contact";
  homeUL.append(li1, li2, li3);
  homeText.appendChild(homeNav);

  // menu
  const menuBG = document.createElement("div");
  menuBG.className = "menu-page";
  const menuTitle = document.createElement("p");
  menuTitle.className = "menu-title";
  menuTitle.textContent = "OUR MENU";
  menuBG.appendChild(menuTitle);

  const menuContent = document.createElement("div");
  menuContent.className = "menuContent";
  menuBG.appendChild(menuContent);

  const menuContent1 = document.createElement("div");
  menuContent1.className = "menu-card";
  const menuImg1 = document.createElement("img");
  menuImg1.src =
    "https://images.pexels.com/photos/5594491/pexels-photo-5594491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  menuImg1.alt = "Sliced Carrot Cake on a White Plate";
  menuImg1.draggable = false;
  const menuTitle1 = document.createElement("p");
  menuTitle1.className = "menuTitle";
  menuTitle1.textContent = "Carrot Cake";
  const menuDetail1 = document.createElement("p");
  menuDetail1.className = "menuDetail";
  menuDetail1.textContent =
    "A moist and flavorful cake loaded with shredded carrots, chopped walnuts, and warm spices, finished with cream cheese frosting.";
  menuContent1.append(menuImg1, menuTitle1, menuDetail1);

  const menuContent2 = document.createElement("div");
  menuContent2.className = "menu-card";
  const menuImg2 = document.createElement("img");
  menuImg2.src =
    "https://images.pexels.com/photos/8443294/pexels-photo-8443294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  menuImg2.alt = "Cup Cakes with Strawberries on Top";
  menuImg2.draggable = false;
  const menuTitle2 = document.createElement("p");
  menuTitle2.className = "menuTitle";
  menuTitle2.textContent = "Strawberry Shortcake";
  const menuDetail2 = document.createElement("p");
  menuDetail2.className = "menuDetail";
  menuDetail2.textContent =
    "Layers of tender sponge cake with whipped cream and fresh strawberries, a quintessential summer dessert.";
  menuContent2.append(menuImg2, menuTitle2, menuDetail2);

  const menuContent3 = document.createElement("div");
  menuContent3.className = "menu-card";
  const menuImg3 = document.createElement("img");
  menuImg3.src =
    "https://images.unsplash.com/photo-1620490448382-d2f51a08596f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
  menuImg3.alt = "Black forest cake on a plate";
  menuImg3.draggable = false;
  const menuTitle3 = document.createElement("p");
  menuTitle3.className = "menuTitle";
  menuTitle3.textContent = "Black Forest Cake";
  const menuDetail3 = document.createElement("p");
  menuDetail3.className = "menuDetail";
  menuDetail3.textContent =
    "A classic German chocolate cake layered with tart cherries and topped with whipped cream and chocolate shavings.";
  menuContent3.append(menuImg3, menuTitle3, menuDetail3);

  const menuContent4 = document.createElement("div");
  menuContent4.className = "menu-card";
  const menuImg4 = document.createElement("img");
  menuImg4.src =
    "https://images.pexels.com/photos/15071192/pexels-photo-15071192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  menuImg4.alt = "Close-Up Shot of a Slice of Yummy Cake";
  menuImg4.draggable = false;
  const menuTitle4 = document.createElement("p");
  menuTitle4.className = "menuTitle";
  menuTitle4.textContent = "Red Velvet Cake";
  const menuDetail4 = document.createElement("p");
  menuDetail4.className = "menuDetail";
  menuDetail4.textContent =
    "A Southern staple, this bright red cake is moist and tender with a subtle cocoa flavor, topped with tangy cream cheese frosting.";
  menuContent4.append(menuImg4, menuTitle4, menuDetail4);

  const menuContent5 = document.createElement("div");
  menuContent5.className = "menu-card";
  const menuImg5 = document.createElement("img");
  menuImg5.src =
    "https://images.pexels.com/photos/12035555/pexels-photo-12035555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  menuImg5.alt = "A Piece of Lemon Cake on a Ceramic Plate";
  menuImg5.draggable = false;
  const menuTitle5 = document.createElement("p");
  menuTitle5.className = "menuTitle";
  menuTitle5.textContent = "Lemon Chiffon Cake";
  const menuDetail5 = document.createElement("p");
  menuDetail5.className = "menuDetail";
  menuDetail5.textContent =
    "A light and airy cake with a bright lemon flavor, made with a blend of cake flour and whipped egg whites. Perfect for any season";
  menuContent5.append(menuImg5, menuTitle5, menuDetail5);

  menuContent.append(
    menuContent1,
    menuContent2,
    menuContent3,
    menuContent4,
    menuContent5
  );

  const menuSection = document.createElement("section");
  menuSection.className = "menu";
  menuSection.appendChild(mainElement);
  menuSection.appendChild(menuBG);
  const contentDIV = document.querySelector("#content");
  contentDIV.appendChild(menuSection);
}

export default menuContent;
