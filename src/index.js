import "./style.css";
import homeContent from "./modules/home";
import menuContent from "./modules/menu";

homeContent();

let homeDisplayed = false;
let menuDisplayed = false;

const homeSection = document.querySelector(".home");
const homeBtn = document.querySelector(".homeBtn");
homeBtn.addEventListener("click", () => {
  homeSection.classList.remove("hide");
  if (homeDisplayed === false) {
    homeContent();
    homeDisplayed = true;
  }
});

const menuSection = document.querySelector(".menu");
const menuBtn = document.querySelector(".menuBtn");
menuBtn.addEventListener("click", () => {
  homeSection.classList.add("hide");
  menuSection.classList.remove("hide");
  if (!menuDisplayed) {
    menuContent();
    menuDisplayed = true;
  }
});
