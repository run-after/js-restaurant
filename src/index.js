import Header from "./modules/header.js";
import Home from "./modules/home.js";
import Menu from "./modules/menu.js";
import Contact from "./modules/contact.js";

const home = document.getElementById("home-link");
home.addEventListener("click", function() {
  Home.Home();
});

const menu = document.getElementById("menu-link");
menu.addEventListener("click", function() {
  Menu.Menu();
});

const contact = document.getElementById("contact-link");
contact.addEventListener("click", function() {
  Contact.Contact();
});