"use strict";

window.addEventListener("DOMContentLoaded", init);

let hamburguerOpen = false;

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
  menuContainer.style.height === "500px" ? (menuContainer.style.height = "0px") : (menuContainer.style.height = "500px");
  console.log("left is " + menuContainer.style.left);

  //change to cross
  const topBar = document.querySelector(".ham_top");
  const bottomBar = document.querySelector(".ham_bottom");
  const hamburger = document.querySelector(".hamburguerIcon");

  hamburger.style.display = "block";
  if (hamburguerOpen === false) {
    hamburger.classList.add("open");
    hamburguerOpen = true;
  } else {
    hamburger.classList.remove("open");
    hamburguerOpen = false;
  }
  // topBar.classList.add("x-top");
  // bottomBar.classList.add("x-bottom");
}

function aside() {
  document.querySelector("aside").addEventListener("click", () => {
    document.querySelector("aside").classList.remove("revealAside");
    document.querySelector("aside").classList.add("revealMain");
    document.querySelector("html").classList.remove("noScroll");
  });
  document.querySelectorAll(".project-container").forEach((project) => {
    project.addEventListener("click", () => {
      //append template
      const template = document.querySelector(`#${project.dataset.projecttitle}`).content;
      const clone = template.cloneNode(true);

      //reset html text content
      console.log(project.dataset.projecttitle);
      document.querySelector("#aside").innerHTML = "";
      document.querySelector("#aside").appendChild(clone);

      document.querySelector("aside").classList.remove("revealMain");
      document.querySelector("aside").classList.add("revealAside");
      document.querySelector("html").classList.add("noScroll");
    });
  });
}

async function fetchLines() {
  let response = await fetch("images/Lines.svg");
  let mySVGData = await response.text();

  document.querySelector(".intro-section").innerHTML += mySVGData;

  // animateArrow();
  for (let i = 1; i <= 10; i++) {
    gsap.fromTo(
      `#Line${i}`,
      5 * Math.random() * 3 + 2,
      { opacity: 1, transformOrigin: "left", strokeDashoffset: -2000, strokeDasharray: 1000, delay: i * Math.random() * 5 },
      { opacity: 1, transformOrigin: "left", ease: "none", yoyo: true, repeat: -1, strokeDashoffset: 2000 }
    );
    console.log(`#Line${i}`);

    //FACTS ANIMATION

    gsap.fromTo("#funFacts", 1, { color: "black" }, { color: "yellow", yoyo: true, repeat: -1 });
  }
}
