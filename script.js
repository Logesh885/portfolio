const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
menu?.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "" : "flex";
  if (nav.style.display === "flex") {
    nav.style.position = "absolute";
    nav.style.top = "78px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.padding = "18px 24px";
    nav.style.background = "rgba(7,7,11,.98)";
    nav.style.flexDirection = "column";
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold: 0.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
document.getElementById("year").textContent = new Date().getFullYear();
