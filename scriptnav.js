// script.js

// Seleccionar el botón de tres barras y el menú de navegación
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const navLinkItems = document.querySelectorAll('#nav-links li a');

// Función para alternar la visibilidad del menú
const toggleMenu = () => {
  navLinks.classList.toggle('active');
};

// Evento de clic para el botón de tres barras
navToggle.addEventListener('click', toggleMenu);

// Evento de clic para cada enlace en el menú
navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    // Solo cierra el menú si está activo en modo móvil
    if (navLinks.classList.contains('active')) {
      toggleMenu();
    }
  });
});