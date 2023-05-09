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
  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "OUR MENU";
  menuBG.appendChild(menuTitle);

  const menuContent = document.createElement("div");
  menuContent.className = "menuContent";

  const menuContent1 = document.createElement("div");
  menuContent1.className = "card";
  const menuImg1 = document.createElement("img");
  menuImg1.src =
    "https://images.pexels.com/photos/5594491/pexels-photo-5594491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  menuImg1.alt = "Sliced Carrot Cake on a White Plate";
  const menuTitle1 = document.createElement("p");
  menuTitle1.className = "menuTitle";
  menuTitle1.textContent = "Carrot Cake";
  const menuDetail1 = document.createElement("p");
  menuDetail1.className = "menuDetail";
  menuDetail1.textContent =
    "A moist and flavorful cake loaded with shredded carrots, chopped walnuts, and warm spices, finished with cream cheese frosting.";
  menuContent1.append(menuImg1, menuTitle1, menuDetail1);

  const menuSection = document.createElement("section");
  menuSection.className = "menu";
  menuSection.appendChild(mainElement);
  menuSection.appendChild(menuBG);
  const contentDIV = document.querySelector("#content");
  contentDIV.appendChild(menuSection);
}

export default menuContent;
