import "./style.css";
import homeContent from "./modules/home";
import menuContent from "./modules/menu";
import contactContent from "./modules/contact";
import makeNav from "./modules/nav";

makeNav();
homeContent();

let displayed = "home";

const contentDIV = document.querySelector("#content");
const homeBTN = document.querySelector(".homeBtn");
const menuBTN = document.querySelector(".menuBtn");
const contactBTN = document.querySelector(".contactBtn");

const homePage = document.querySelector(".home");
const menuPage = document.querySelector(".menu");
const contactPage = document.querySelector(".contact");

homeBTN.addEventListener("click", () => {
  if (!homeBTN.disabled && displayed !== "home") {
    homeContent();
    displayed = "home";
    homeBTN.disabled = true;
    contactPage.classList.add("hide");
    menuPage.classList.add("hide");
    homePage.style.display = "block";
  }
});

menuBTN.addEventListener("click", () => {
  if (!menuBTN.disabled && displayed !== "menu") {
    menuContent();
    displayed = "menu";
    menuBTN.disabled = true;
    homeBTN.disabled = false;
    contactBTN.disabled = false;
    homePage.classList.add("hide");
    contactPage.classList.add("hide");
    menuPage.style.display = "block";
  }
});

contactBTN.addEventListener("click", () => {
  if (!contactBTN.disabled && displayed !== "contact") {
    contactContent();
    displayed = "contact";
    contactBTN.disabled = true;
    homeBTN.disabled = false;
    menuBTN.disabled = false;
    homePage.classList.add("hide");
    menuPage.classList.add("hide");
    contactPage.style.disabled = "block"
  }
});
