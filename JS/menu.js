const menuButton = document.getElementById("menuButton");
const overlay = document.getElementById("myNav");

// Función para abrir/cerrar el menú con el botón de hamburguesa
menuButton.addEventListener("click", () => {
    const isOpen = overlay.style.width === "100%";

    if (isOpen) {
        overlay.style.width = "0%";
    } else {
        overlay.style.width = "100%";
    }

    // Agregar o quitar la clase de animación del botón
    menuButton.classList.toggle("active");
});