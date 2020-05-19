"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  sideMenu();
}

function sideMenu() {
  const hamburguer = document.querySelector(".hamburguerIcon");

  hamburguer.addEventListener("click", changeStatus);
}

function changeStatus(evt) {
  console.log(evt.target);
  const menuContainer = document.querySelector(".navMenu");
  console.log("left is " + menuContainer.style.left);
  menuContainer.style.left == "0vw" ? ((menuContainer.style.left = "100vw"), (menuContainer.style.borderRadius = "50%")) : ((menuContainer.style.left = "0vw"), (menuContainer.style.borderRadius = "0"));
  console.log("left is " + menuContainer.style.left);

  //change to cross
  const topBar = document.querySelector(".ham_top");
  const bottomBar = document.querySelector(".ham_bottom");
  const hamburger = document.querySelector(".hamburguerIcon");

  hamburger.style.display = "block";
  topBar.style.transform = "rotate(-45deg)";
  bottomBar.style.transform = "rotate(45deg)";
}
