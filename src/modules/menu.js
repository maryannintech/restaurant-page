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
  li1.className = "homeBtn"
  li2.className = "menuBtn"
  li3.className = "contactBtn"
  li1.textContent = "home";
  li2.textContent = "menu";
  li3.textContent = "contact";
  homeUL.append(li1, li2, li3);
  homeText.appendChild(homeNav);

  // menu
  
}

export default menuContent;
