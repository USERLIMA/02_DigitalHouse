let show = true;
            const menuContainer = document.querySelector("#menu-container");
            const hamburguer = menuContainer.querySelector("#hamburger");

            // Adicionando um evento no elemento hamburguer
            hamburguer.addEventListener("click", () => {
                document.body.style.overflow = show ? "hidden" : "initial";
        
                menuContainer.classList.toggle("on", show)
                show = !show
            })