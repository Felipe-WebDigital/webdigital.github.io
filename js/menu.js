/* Funcion para quitar el preloader al momento de que la pagina cargue al 100% */
window.addEventListener('load', function(){
    $('#onload').fadeOut(1300);
    $('body').removeClass('hidden');
});

/* Auto llamo a una funcion para que haga las acciones del menu cuando se ejecute en un dispositivo movil */
(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
    const navs = document.querySelectorAll('.nav__links');

    const toggleNav = ()=>{
        menu.classList.toggle('nav__link--show');
    }

    openButton.addEventListener('click', ()=> {
        toggleNav();
    });

    closeMenu.addEventListener('click', ()=>{
        toggleNav();
    });

    navs.forEach(links => {
        links.addEventListener('click', ()=>{
            toggleNav();
        })
    }); 

})();

/* Funcion que cambia de color al menu cuando baja la página */
function menus(){
    let nav = document.querySelector('.nav');
    let Desplazamiento_Actual = window.pageYOffset;

    if (Desplazamiento_Actual <= 40) {
        nav.classList.remove('nav--02');
        nav.style.transition = '0.5s';
    }

    else {
        nav.classList.add('nav--02');
        nav.style.transition = '0.5s';
    }
}

window.addEventListener('load', function(){
    menus();
});

window.addEventListener('scroll', function(){
    menus();
});