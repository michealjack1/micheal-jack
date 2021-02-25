// onscroll behavior
AOS.init();


const navbar = document.querySelector('.navbar');

window.onscroll = function() {
    navbar.classList.toggle('bg-light')
}

