
//CODIGO ScrollToTop
document.getElementById("scroll-to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const navLinkItems = document.querySelectorAll('#nav-links li a');

const toggleMenu = () => {
  navLinks.classList.toggle('active');
};
navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      toggleMenu();
    }
  });
});


