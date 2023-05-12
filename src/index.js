import "./style.css";
import { homeContent } from "./modules/home";
import { menuContent } from "./modules/menu";
import { contactContent } from "./modules/contact";
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

console.log(homePage);
console.log(menuPage);
console.log(contactPage);


// Add event listeners to the home, menu, and contact buttons
homeBTN.addEventListener("click", () => {
  // If the home button is not disabled and the current page is not home
  if (!homeBTN.disabled && displayed !== "home") {
    // Show the home content
    homeContent();
    // Set the displayed variable to home
    displayed = "home";
    // Disable the home button
    homeBTN.disabled = true;
    // Enable the menu and contact buttons
    menuBTN.disabled = false;
    contactBTN.disabled = false;
    // Hide the menu and contact pages
    menuPage.classList.add = "hide";
    contactPage.classList.add = "hide";
    // Show the home page
    homePage.classList.remove = "hide";
  }
});

menuBTN.addEventListener("click", () => {
  // If the menu button is not disabled and the current page is not menu
  if (!menuBTN.disabled && displayed !== "menu") {
    // Show the menu content
    menuContent();
    // Set the displayed variable to menu
    displayed = "menu";
    // Disable the menu button
    menuBTN.disabled = true;
    // Enable the home and contact buttons
    homeBTN.disabled = false;
    contactBTN.disabled = false;
    // Hide the home and contact pages
    homePage.classList.add = "hide";
    contactPage.classList.add = "hide";
    // Show the menu page
    menuPage.classList.remove = "hide";
  }
});

contactBTN.addEventListener("click", () => {
  // If the contact button is not disabled and the current page is not contact
  if (!contactBTN.disabled && displayed !== "contact") {
    // Show the contact content
    contactContent();
    // Set the displayed variable to contact
    displayed = "contact";
    // Disable the contact button
    contactBTN.disabled = true;
    // Enable the home and menu buttons
    homeBTN.disabled = false;
    menuBTN.disabled = false;
    // Hide the home and menu pages
    homePage.classList.add = "hide";
    menuPage.classList.add = "hide";
    // Show the contact page
    contactPage.classList.remove = "hide";
  }
});
