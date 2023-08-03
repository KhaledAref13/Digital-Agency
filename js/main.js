let navLink = document.querySelectorAll(".nav-link");
navLink.forEach(function (el) {
  el.onclick = function () {
    navLink.forEach(function (el) {
      el.classList.remove("active");
    });
    el.classList.add("active");
  };
});

let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

let scrollUp = document.querySelector(".scroll-up");

window.addEventListener("scroll", function () {
  scrollUp.classList.toggle("scroll-up-visible", window.scrollY > 100);
});
scrollUp.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
