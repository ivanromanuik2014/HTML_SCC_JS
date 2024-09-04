const body = document.querySelector("body");
const header = document.querySelector(".header-nav");
const btnSub = document.querySelector(".header__menu-btn");
const navLinks = document.querySelector(".header-nav__menu");

btnSub.addEventListener("click", () => {
    body.classList.toggle("overflow-hidden");
    header.classList.toggle("nav-visible");
})

navLinks.addEventListener("click", () => {
    body.classList.remove("overflow-hidden");
    header.classList.remove("nav-visible");
})