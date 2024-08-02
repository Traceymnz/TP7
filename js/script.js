// cambiar a tema claro u oscuro
function tema(){
    //el tema actual
    modito = document.body.getAttribute("data-bs-theme")
     // Cambia el tema a "dark" si es "light", o a "light" si es "dark"
    mode = modito === "light" ? "dark" : "light"
     // Establece el nuevo tema
    document.body.setAttribute("data-bs-theme",mode)
    //Guardar el tema de forma local
    localStorage.setItem("modo",mode)
}
// Cuando se cargue la página, establece el tema que guardo
window.addEventListener("load", () => {
    mode = localStorage.getItem("modo")
    document.body.setAttribute("data-bs-theme",mode)
})

// Se ejecuta cuando el contenido de la pagina se carga por completo y el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
     // Obtiene el elemento con id de cada uno
    const cafe = document.getElementById('cafe');
    const loader = document.getElementById('loader');
    const contenido = document.getElementById('contenido');
    const navbar = document.getElementById('navbar');

    // Simula llenar la taza
    setTimeout(function() {
        cafe.style.height = '80px'; // Llena la taza
    }, 100); // tiempo que tarda en iniciar la animación

    // Oculta el loader y muestra el contenido después de la animacion de carga
    setTimeout(function() {
        loader.style.display ='none'; // Oculta el loader
        contenido.classList.remove('oculto'); // Muestra el contenido
        navbar.classList.remove('oculto'); // Muestra la barra de navegación
        document.body.style.overflow = 'auto'; // Restaura el scroll del cuerpo
    }, 2100);
});

// Configura el carrusel de imágenes
document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.getElementById('anterior');
    const nextButton = document.getElementById('siguiente');
    const carruselContenido = document.querySelector('.carrusel-contenido');
    const images = carruselContenido.querySelectorAll('img');
    flecha = 0;

    // Muestra la imagen en el índice dado
    function showImage(index) {
        const offset = -index * 100;
        carruselContenido.style.transform = `translateX(${offset}%)`;
    }

    // Mueve al carrusel a la imagen anterior
    prevButton.addEventListener('click', () => {
        flecha = (flecha > 0) ? flecha - 1 : images.length - 1;
        showImage(flecha);
    });
    // Mueve al carrusel a la siguiente imagen
    nextButton.addEventListener('click', () => {
        flecha = (flecha < images.length - 1) ? flecha + 1 : 0;
        showImage(flecha);
    });

    // Deslizamiento de imagenes
    setInterval(() => {
        flecha = (flecha < images.length - 1) ? flecha + 1 : 0;
        showImage(flecha);
    }, 5000); // Cambia la imagen cada 5 segundos
});
