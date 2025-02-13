const menuInput = document.getElementById("menu-input");
const header = document.querySelector("header");

menuInput.addEventListener("change", () => {
    if (menuInput.checked) {
        header.style.position = "fixed"; // Fija el header
    } else {
        header.style.position = "relative"; // Devuelve el comportamiento normal
    }
});

// Ajustes del desplazamiento imnecesario del menu
menuInput.addEventListener("change", () => {
    if (menuInput.checked) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
});
