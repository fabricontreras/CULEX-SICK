document.querySelector('.menu-btn').addEventListener('click',() => {
    document.querySelector('.nav-menu').classList.toggle('show');
});
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.News-Cards', {delay:500});
ScrollReveal().reveal('.banner-one', {delay:500});