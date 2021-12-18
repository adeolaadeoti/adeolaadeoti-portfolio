import "./sass/main.scss";

// preloader
const preloaderTL = gsap.timeline();
preloaderTL.to("#logo", { yPercent: -20, opacity: 0, delay: 4 });
preloaderTL.to(".preloader", {
  transform: "scaleY(0)",
  transformOrigin: "top",
  delay: "-=3",
});

// open all social links in new tab
let socialLinks = document.querySelectorAll(".social-links--box a");
socialLinks.forEach((link) => {
  link.target = "_blank";
});

// custom cursor
const cursor = document.querySelector(".cursor");
window.onmousemove = ({ pageY, pageX }) => {
  cursor.setAttribute(
    "style",
    `top: ${pageY}px; left: ${pageX}px; z-index: 2;`,
  );
};

// navigation
const tl = gsap.timeline({ paused: true, reversed: true });
tl.to(".box", {
  height: "100vh",
  duration: 0.5,
  transformOrigin: "bottom",
  stagger: 0.3,
});
tl.to(".mobile-logo", { opacity: "1" });
tl.to(".nav-main__content", {
  opacity: "1",
  visibility: "visible",
  yPercent: -5,
  duration: 0.5,
  transformOrigin: "bottom",
  stagger: 0.3,
});

const navIcon = document.querySelector(".nav-icon");
navIcon.addEventListener("click", () => {
  if (tl.reversed()) {
    navIcon.classList.add("nav-anim");
    tl.play();
    document.body.classList.add("noScroll");
  } else {
    navIcon.classList.remove("nav-anim");
    tl.reverse();
    document.body.classList.remove("noScroll");
  }
});

const allLinks = document.querySelectorAll(".list__item a");
allLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("noScroll");
    tl.reverse();
    navIcon.classList.remove("nav-anim");
  });
});
