const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const videos = track.querySelectorAll('video'); // Selecciona todos los videos en el carrusel
let currentIndex = 0;

function moveCarousel() {
    // Reinicia cualquier video visible antes de mover el carrusel
    const currentVideo = items[currentIndex].querySelector('video');
    if (currentVideo) {
        currentVideo.pause();
        currentVideo.currentTime = 0;
    }

    // Reinicia la animación del texto en la diapositiva actual
    const currentTitle = items[currentIndex].querySelector('.carousel-titulos');
    if (currentTitle) {
        // Reinicia la animación eliminando y volviendo a aplicar la animación a cada span
        const spans = currentTitle.querySelectorAll('span');
        spans.forEach(span => {
            span.style.animation = 'none'; // Elimina la animación
            span.offsetHeight; // Forza el reflow
            span.style.animation = ''; // Vuelve a aplicar la animación
        });
    }

    // Mueve al siguiente elemento
    currentIndex = (currentIndex + 1) % items.length;
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;

    // Reproduce el video si está en el nuevo elemento visible
    const nextVideo = items[currentIndex].querySelector('video');
    if (nextVideo) {
    nextVideo.muted = true; // Asegura que está silenciado
    nextVideo.play().catch(error => console.log('Error al reproducir:', error));
}


    // Reinicia la animación del texto en la nueva diapositiva
    const nextTitle = items[currentIndex].querySelector('.carousel-titulos');
    if (nextTitle) {
        const spans = nextTitle.querySelectorAll('span');
        spans.forEach(span => {
            span.style.animation = 'none';
            span.offsetHeight; // Forza el reflow
            span.style.animation = ''; // Vuelve a aplicar la animación
        });
    }
}

// Cambia cada 6 segundos 
setInterval(moveCarousel, 6000);
