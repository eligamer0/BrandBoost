
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

    // Mueve al siguiente elemento
    currentIndex = (currentIndex + 1) % items.length;
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;

    // Reproduce el video si está en el nuevo elemento visible
    const nextVideo = items[currentIndex].querySelector('video');
    if (nextVideo) {
        nextVideo.play();
    }
}

// Cambia cada 5 segundos (ajusta el tiempo según tus necesidades)
setInterval(moveCarousel, 6000);
