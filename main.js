// esto es para el menu desplegable
document.querySelector('.menu-btn').addEventListener('click',() => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

// esto es para que cargue las infomacion cuando hace scrol abajo cuando esta mas cargada de datos se nota más
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.News-Cards', {delay:500});
ScrollReveal().reveal('.banner-one', {delay:500});

function numEmergencia(event){
    event.preventDefault();
    alert("NUMERO TELEFONICO DE HOSPITALES CERCANOS :\n03465 42-6500\n03465 42-3528")
}

function numEmergencia(event){
    event.preventDefault();
    alert("NUMERO TELEFONICO DE HOSPITALES CERCANOS :\nSanatorio Firmat : 03465 42-6500\nGral. San Martín : 03465 42-3528")
}
