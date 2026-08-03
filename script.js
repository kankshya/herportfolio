const landing = document.querySelector(".landing");
const landingButton = document.getElementById("landingButton");
const menuLinks = document.querySelectorAll(".landing-menu-inner a");

const aboutTrigger = document.getElementById("aboutTrigger");
const aboutPanel = document.getElementById("aboutPanel");
const aboutBack = document.getElementById("aboutBack");

const postersTrigger = document.getElementById("postersTrigger");
const postersPanel = document.getElementById("postersPanel");
const postersBack = document.getElementById("postersBack");

const funTrigger = document.getElementById("funTrigger");
const funPanel = document.getElementById("funPanel");
const funBack = document.getElementById("funBack");

function showPanel(panel) {
  if (!panel) return;
  panel.classList.add("is-visible");
  panel.setAttribute("aria-hidden", "false");
}

function hidePanel(panel) {
  if (!panel) return;
  panel.classList.remove("is-visible");
  panel.setAttribute("aria-hidden", "true");
}

function hideAllPanels() {
  hidePanel(aboutPanel);
  hidePanel(postersPanel);
  hidePanel(funPanel);
}

function openOverlay(panel, name) {
  hideAllPanels();
  showPanel(panel);
  history.pushState({ overlay: name }, "", `#${name}`);
}

if (landing && landingButton) {
  landingButton.addEventListener("click", function (e) {
    if (e.target.tagName.toLowerCase() === "a") return;

    const isOpen = landing.classList.toggle("open");
    landingButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (landing) landing.classList.add("open");
    if (landingButton) landingButton.setAttribute("aria-expanded", "true");
  });
});

if (aboutTrigger && aboutPanel) {
  aboutTrigger.addEventListener("click", function (e) {
    e.preventDefault();
    openOverlay(aboutPanel, "about");
  });
}

if (postersTrigger && postersPanel) {
  postersTrigger.addEventListener("click", function (e) {
    e.preventDefault();
    openOverlay(postersPanel, "posters");
  });
}

if (funTrigger && funPanel) {
  funTrigger.addEventListener("click", function (e) {
    e.preventDefault();
    openOverlay(funPanel, "fun");
  });
}

if (aboutBack) {
  aboutBack.addEventListener("click", function () {
    history.back();
  });
}

if (postersBack) {
  postersBack.addEventListener("click", function () {
    history.back();
  });
}

if (funBack) {
  funBack.addEventListener("click", function () {
    history.back();
  });
}

window.addEventListener("popstate", function (event) {
  hideAllPanels();

  if (event.state?.overlay === "about") {
    showPanel(aboutPanel);
  }

  if (event.state?.overlay === "posters") {
    showPanel(postersPanel);
  }

  if (event.state?.overlay === "fun") {
    showPanel(funPanel);
  }
});

window.addEventListener("load", function () {
  hideAllPanels();

  if (window.location.hash === "#about") {
    showPanel(aboutPanel);
  }

  if (window.location.hash === "#posters") {
    showPanel(postersPanel);
  }

  if (window.location.hash === "#fun") {
    showPanel(funPanel);
  }
});