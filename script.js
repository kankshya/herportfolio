const landing = document.querySelector(".landing");
const landingButton = document.getElementById("landingButton");
const menuLinks = document.querySelectorAll(".landing-menu-inner a");
const aboutTrigger = document.getElementById("aboutTrigger");
const aboutPanel = document.getElementById("aboutPanel");
const aboutBack = document.getElementById("aboutBack");

landingButton.addEventListener("click", function (e) {
  if (e.target.tagName.toLowerCase() === "a") return;

  const isOpen = landing.classList.toggle("open");
  landingButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    landing.classList.add("open");
    landingButton.setAttribute("aria-expanded", "true");
  });
});

if (aboutTrigger && aboutPanel && aboutBack) {
  aboutTrigger.addEventListener("click", function (e) {
    e.preventDefault();
    aboutPanel.classList.add("is-visible");
    aboutPanel.setAttribute("aria-hidden", "false");
  });

  aboutBack.addEventListener("click", function () {
    aboutPanel.classList.remove("is-visible");
    aboutPanel.setAttribute("aria-hidden", "true");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}