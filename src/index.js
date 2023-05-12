import "./style.css";
import homeContent from "./modules/home";
import menuContent from "./modules/menu";
import contactContent from "./modules/contact";
import makeNav from "./modules/nav";

makeNav();
homeContent();

let displayed = "home";

const homeBTN = document.querySelector(".homeBtn");
const menuBTN = document.querySelector(".menuBtn");
const contactBTN = document.querySelector(".contactBtn");

const homePage = document.createElement("div");
homePage.className = "homeLoad";
homePage.classList.add("home");

const menuPage = document.createElement("div");
menuPage.className = "menuLoad";
menuPage.classList.add("menu");

const contactPage = document.createElement("div");
contactPage.className = "contactLoad";
contactPage.classList.add("contact");

// for debugging
console.log(homePage);
console.log(menuPage);
console.log(contactPage);
console.log(displayed)

homeBTN.addEventListener("click", () => {
  if (!homeBTN.disabled && displayed !== "home") {
    // hide the currently displayed content
    document.querySelector("." + displayed).classList.add("hide");

    // show the home content
    homeContent();
    displayed = "home";
    homeBTN.disabled = true;
    menuBTN.disabled = false;
    contactBTN.disabled = false;
    // remove the "hide" class from the home page element
    homePage.classList.remove("hide");
    console.log(displayed);
    window.location.reload();
  }
});

menuBTN.addEventListener("click", () => {
  if (!menuBTN.disabled && displayed !== "menu") {
    // hide the currently displayed content
    document.querySelector("." + displayed).classList.add("hide");

    // show the menu content
    menuContent();
    displayed = "menu";
    menuBTN.disabled = true;
    homeBTN.disabled = false;
    contactBTN.disabled = false;
    // remove the "hide" class from the menu page element
    menuPage.classList.remove("hide");
    console.log(displayed);
  }
});

contactBTN.addEventListener("click", () => {
  if (!contactBTN.disabled && displayed !== "contact") {
    // hide the currently displayed content
    document.querySelector("." + displayed).classList.add("hide");

    // show the contact content
    contactContent();
    displayed = "contact";
    contactBTN.disabled = true;
    homeBTN.disabled = false;
    menuBTN.disabled = false;
    // remove the "hide" class from the contact page element
    contactPage.classList.remove("hide");
    console.log(displayed);
  }
});









