let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
    navbar.classList.toggle('fa-times');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    navbar.classList.remove('fa-times');
}

