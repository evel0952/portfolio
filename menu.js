const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  bar1.classList.toggle("active");
  bar2.classList.toggle("active");
  bar3.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);


