const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");
if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".main-nav a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) link.classList.add("active");
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

