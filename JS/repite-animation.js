const icono = document.querySelector('#iconoAnimado');

    // Crear el observador de intersección
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Forzamos el reinicio del GIF cambiando su 'src'
          const src = icono.src;
          icono.src = ''; // Vaciar la URL
          icono.src = src; // Asignar nuevamente la URL
        }
      });
    }, { threshold: 0.5 });

    observer.observe(icono);