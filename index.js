const body = document.querySelector("body");
const btn = document.querySelector(".bmbtn");
const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector(".nav");

console.log(btn);

btn.addEventListener("click", function () {
  burgerMenu.classList.toggle("burger-menu-open");
  body.classList.toggle("scroll-hidden");
});

if (burgerMenu.classList === "burger-menu-open") {
  nav.style.dispaly = "flex";
}
