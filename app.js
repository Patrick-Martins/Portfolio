"use strict";

window.addEventListener("DOMContentLoaded", init);

let hamburguerOpen = false;
let asideStatus = "hidden";

function init() {
  initialAnimation();
  setTimeout(fetchLines, 4000);
  sideMenu();
  aside();
}

function initialAnimation() {
  gsap.fromTo("#helloText", 2, { opacity: 0 }, { opacity: 1, delay: 0.2 });
  gsap.fromTo("#myName", 2, { opacity: 0 }, { opacity: 1, delay: 1 });
  gsap.fromTo("#frontendText", 2, { opacity: 0 }, { opacity: 1, delay: 2 });
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
  // const topBar = document.querySelector(".ham_top");
  // const bottomBar = document.querySelector(".ham_bottom");
  const hamburger = document.querySelector(".hamburguerIcon");

  hamburger.style.display = "block";
  if (hamburguerOpen === false) {
    hamburger.classList.add("open");
    hamburguerOpen = true;

    //add event listener to each a tag

    document.querySelectorAll(".navMenu").forEach((el) => {
      el.addEventListener("click", () => {
        const menuContainer = document.querySelector(".navMenu");
        menuContainer.style.height = "0px";
        hamburger.classList.remove("open");
        hamburguerOpen = false;

        //hideaside
        if (asideStatus === "showing") {
          document.querySelector("aside").classList.remove("revealAside");
          document.querySelector("aside").classList.add("revealMain");
          document.querySelector("html").classList.remove("noScroll");
          asideStatus = "hidden";
        }
      });
    });
  } else {
    hamburger.classList.remove("open");
    hamburguerOpen = false;
  }
  // topBar.classList.add("x-top");
  // bottomBar.classList.add("x-bottom");
}

function aside() {
  document.querySelectorAll(".project-container").forEach((project) => {
    project.addEventListener("click", () => {
      asideStatus = "showing";
      //append template
      const template = document.querySelector(`#${project.dataset.projecttitle}`).content;
      const clone = template.cloneNode(true);

      //create back arrow
      const back = document.createElement("p");
      back.classList.add("backArrow");
      back.innerHTML = "&#8592;";

      //reset html text content
      console.log(project.dataset.projecttitle);
      document.querySelector("#aside").innerHTML = "";

      document.querySelector("#aside").appendChild(back);
      //add event to back arrow
      document.querySelector(".backArrow").addEventListener("click", () => {
        asideStatus = "hidden";
        document.querySelector("aside").classList.remove("revealAside");
        document.querySelector("aside").classList.add("revealMain");
        document.querySelector("html").classList.remove("noScroll");
      });
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
    gsap.fromTo("#Lines", 2, { opacity: 0 }, { opacity: 1, delay: 0 });
    console.log(5 * Math.random() * 3 + 2);
    gsap.fromTo(
      `#Line${i}`,
      5 * Math.random() * 3 + 5,
      { opacity: 1, transformOrigin: "left", strokeDashoffset: -2000, strokeDasharray: 1000, delay: i * Math.random() * 5 },
      { opacity: 1, transformOrigin: "left", ease: "none", yoyo: true, repeat: -1, strokeDashoffset: 2000 }
    );
    console.log(`#Line${i}`);

    //FACTS ANIMATION

    gsap.fromTo("#funFacts", 1, { color: "black" }, { color: "yellow", yoyo: true, repeat: -1 });
  }
}
