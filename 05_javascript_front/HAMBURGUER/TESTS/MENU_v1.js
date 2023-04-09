const menuContainer = document.querySelector('#menu-container');
const hamburguer = document.getElementById("hamburger");
const nav = menuContainer.querySelector('#menu-container > nav');

//adicionando um evento no elemento hamburguer
hamburguer.addEventListener('click', () => {
    menuContainer.classList.toggle('on')
})