import "./style.css";
import homeContent from "./modules/home";
import menuContent from "./modules/menu";
import contactContent from "./modules/contact";

let homeClicked = false;
let menuClicked = false;
let contactClicked = false;

const contentDIV = document.querySelector("#content");

homeContent();

const homePage = document.querySelector(".home");
const menuPage = document.querySelector(".menu");
const contactPage = document.querySelector(".contact");

const homeBtn = document.querySelector(".homeBtn");
homeBtn.addEventListener("click", () => {
  contentDIV.appendChild(homePage);
  if (homeClicked === false) {
    homeContent();
    homeClicked = true;
  } else {
  }
  menuClicked = false;
  contactClicked = false;
});

const menuBtn = document.querySelector(".menuBtn");
menuBtn.addEventListener("click", () => {
  contentDIV.removeChild(homePage);
  if (menuClicked === false) {
    menuContent();
    menuClicked = true;
  } else {
  }
  homeClicked = false;
  contactClicked = false;
});

const contactBtn = document.querySelector(".contactBtn");
contactBtn.addEventListener("click", () => {
  contentDIV.removeChild(homePage);
  if (contactClicked === false) {
    contactContent();
    contactClicked = true;
  } else {
  }
  homeClicked = false;
  menuClicked = false;
});
