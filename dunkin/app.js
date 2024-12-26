// app.js

// Detectar elementos en el viewport
const revealElements = document.querySelectorAll(".reveal");

// Función para mostrar elementos al hacer scroll
function revealOnScroll() {
    revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 50) {
            el.classList.add("visible");
        } else {
            el.classList.remove("visible");
        }
    });
}

// Llamar a la función al cargar y al hacer scroll
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
