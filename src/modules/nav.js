function makeNav() {
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

  const homeAbout = document.createElement("p");
  homeAbout.className = "home-p";
  homeAbout.textContent = `The Vintage Delights is a charming cafe and bakery dedicated to
  preserving the timeless art of baking vintage cakes. Our menu
  features a variety of classic cake flavors from different eras, all
  made with the finest ingredients and baked fresh daily. Whether
  you\'re in the mood for a rich and decadent chocolate cake from the
  1920s, a light and airy chiffon cake from the 1950s, or a buttery
  pound cake from the 1970s, we\'ve got you covered.`;
  homeText.appendChild(homeAbout);

  const contentDIV = document.querySelector("#content");
  contentDIV.appendChild(mainElement)
}

export default makeNav;