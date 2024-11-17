// Toggle class active
document.addEventListener("DOMContentLoaded", () => {
  const navbarNav = document.querySelector(".navbar-nav");
  document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
  };
});



const hamburger = document.querySelector("#hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

if (hamburger && navbarNav) {
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });
}