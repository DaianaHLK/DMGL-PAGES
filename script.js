// Script para el carrusel
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Mostrar el primer slide al cargar la página
showSlide(currentIndex);

// Agregar eventos a los botones de siguiente y anterior
document.querySelector('.carrusel').addEventListener('click', (event) => {
    if (event.target.classList.contains('next')) {
        nextSlide();
    } else if (event.target.classList.contains('prev')) {
        prevSlide();
    }
});