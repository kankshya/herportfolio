const landing = document.querySelector('.landing');
const landingButton = document.getElementById('landingButton');
const menuLinks = document.querySelectorAll('.landing-menu-inner a');

landingButton.addEventListener('click', function (e) {
  if (e.target.tagName.toLowerCase() === 'a') return;

  const isOpen = landing.classList.toggle('open');
  landingButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    landing.classList.add('open');
    landingButton.setAttribute('aria-expanded', 'true');
  });
});