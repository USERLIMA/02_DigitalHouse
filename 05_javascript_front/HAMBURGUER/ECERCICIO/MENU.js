const menuContainer = document.querySelector('#menu-container');
const hamburguer = document.getElementById("hamburguer");
const nav = menuContainer.querySelector('#menu-container > nav');

//adicionando um evento no elemento hamburguer
hamburguer.addEventListener('click', () => {
    menuContainer.classList.toggle('on')
})