import "./style.css";
import { homeContent } from "./modules/home";
import { menuContent } from "./modules/menu";
import { contactContent } from "./modules/contact";
import makeNav from "./modules/nav";

makeNav();
homeContent();

let displayed = "home";

const contentDIV = document.querySelector("#content");
const homeBTN = document.querySelector(".homeBtn");
const menuBTN = document.querySelector(".menuBtn");
const contactBTN = document.querySelector(".contactBtn");

const homePage = document.createElement("div");
homePage.classList.add("home");

const menuPage = document.createElement("div");
menuPage.classList.add("menu");

const contactPage = document.createElement("div");
contactPage.classList.add("contact");

homeBTN.addEventListener("click", () => {
  if (!homeBTN.disabled && displayed !== "home") {
    homeContent();
    displayed = "home";
    homeBTN.disabled = true;
    contactPage.classList.add("hide");
    menuPage.classList.add("hide");
    homePage.classList.remove("hide");
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
    menuPage.classList.remove("hide");;
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
    contactPage.classList.remove("hide");
  }
});