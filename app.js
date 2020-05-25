"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  fetchLines();
  sideMenu();
  aside();
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

function aside() {
  document.querySelector("aside").addEventListener("click", () => {
    document.querySelector("main").classList.remove("revealAside");
    document.querySelector("main").classList.add("showMain");
  });
}

async function fetchLines() {
  let response = await fetch("images/Lines.svg");
  let mySVGData = await response.text();

  document.querySelector(".intro-section").innerHTML += mySVGData;

  // animateArrow();
  for (let i = 1; i <= 10; i++) {
    gsap.fromTo(`#Line${i}`, 10, { opacity: 1, transformOrigin: "left", strokeDashoffset: -2000, strokeDasharray: 1000 }, { opacity: 1, transformOrigin: "left", ease: "none", yoyo: true, repeat: -1, strokeDashoffset: 2000, delay: i });
    console.log(`#Line${i}`);
  }
}
