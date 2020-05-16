"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  sideMenu();
  projects();
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

function projects() {
  // document.querySelector(".description-container").addEventListener("click", expand);
  document.querySelectorAll(".project-container").forEach((project) => {
    console.log(project.id);
    project.querySelector(".description-container").addEventListener("click", () => {
      expand();
    });
  });
}
function expand() {
  //REMOVE PREV CLASSES

  document.querySelector(".project-container").classList.remove("closeAnimation");
  document.querySelector(".hidden_content").classList.remove("closeTextAnimation");
  document.querySelector(".description-container").classList.remove("showDescription");

  const desc = document.querySelector(".description-container");
  const project = document.querySelector(".project-container");
  const content = document.querySelector(".hidden_content");

  // project.style.width = "100%";
  // project.style.height = "calc(100vh - var(--navHeight) )";
  // project.style.padding = "10px";
  // project.style.overflow = "scroll";

  // project.style.top = "var(--navHeight)";

  // project.style.borderRadius = "0";
  // project.style.margin = "0 auto";

  project.classList.add("projectAnimation");

  // desc.style.opacity = "0";
  desc.classList.add("hideDescription");

  //scroll to that container id and then expand the text

  content.classList.add("textAnimation");

  //CLOSE THE PROJECT
  content.addEventListener("click", closeProject);

  //STOP SCROLL IN HTML
  document.querySelector("html").style.overflow = "hidden";
}

function closeProject() {
  document.querySelector(".project-container").classList.remove("projectAnimation");
  document.querySelector(".project-container").classList.add("closeAnimation");
  document.querySelector(".hidden_content").classList.remove("textAnimation");
  document.querySelector(".hidden_content").classList.add("closeTextAnimation");
  document.querySelector(".description-container").classList.remove("hideDescription");
  document.querySelector(".description-container").classList.add("showDescription");

  //LET SCROLL IN HTML
  document.querySelector("html").style.overflow = "auto";
}
