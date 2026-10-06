// Fechar o menu do Bootstrap depois de clicar em um link
document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        const menu = document.querySelector("#menu");

        if (menu.classList.contains("show")) {

            const button = document.querySelector(".navbar-toggler");

            button.click();

        }

    });

});


// Formulário

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "🍰 Obrigado pelo contato!\n\n" +
        "Recebemos seu pedido e entraremos em contato em breve."
    );

});