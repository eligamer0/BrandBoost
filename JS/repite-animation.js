const iconos = document.querySelectorAll('.iconoAnimado');

// Crear el observador de intersección
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Forzar el reinicio del GIF cambiando su 'src'
      const icono = entry.target;
      const src = icono.src;
      icono.src = ''; // Vaciar la URL
      icono.src = src; // Asignar nuevamente la URL
    }
  });
}, { threshold: 0.0 });

// Observar cada ícono
iconos.forEach(icono => {
  observer.observe(icono);
});
