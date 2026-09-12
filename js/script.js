// Portfolio Andie Eileen Cruz — comportamiento compartido entre vistas

document.addEventListener("DOMContentLoaded", () => {
  // Marca el enlace de navegación activo según la URL actual
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  // Año dinámico en el footer
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Validación accesible del formulario de contacto
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      if (!contactForm.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      contactForm.classList.add("was-validated");
    });
  }
});
