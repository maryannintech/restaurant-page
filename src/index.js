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
    displayContent();
    displayed = "home";
    homeBTN.disabled = true;
  }
});

menuBTN.addEventListener("click", () => {
  displayed = "menu";
  displayContent();
  homeBTN.disabled = false;
});

contactBTN.addEventListener("click", () => {
  displayed = "contact";
  displayContent();
  homeBTN.disabled = false;
});

function displayContent() {
  if (displayed === "home") {
    homeContent();
  } else if (displayed === "menu") {
    menuContent();
  } else if (displayed === "contact") {
    contactContent();
  }
}
