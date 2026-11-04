document.addEventListener("DOMContentLoaded", () => {

    // DESTACAR PAGINA ATUAL NO MENU

    const paginaAtual = decodeURIComponent(
        window.location.pathname.split("/").pop()
    ).toLowerCase();

    document.querySelectorAll(".menu a").forEach(link => {
        const destino = decodeURIComponent(
            link.getAttribute("href").split("/").pop()
        ).toLowerCase();

        if (destino === paginaAtual) {
            link.classList.add("ativo");
        }
    });

    // ANIMACAO DE APARECIMENTO

    const elementos = document.querySelectorAll(
        "header, main, section, .sobre"
    );

    elementos.forEach(elemento => {
        elemento.classList.add("revelar");
    });

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visivel");
                observador.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elementos.forEach(elemento => {
        observador.observe(elemento);
    });

    // ORGANIZAR OS HEROIS EM CARDS

    const titulo = document.querySelector("h1");

    if (titulo && titulo.textContent.toLowerCase().includes("heróis")) {

        const galeria = document.createElement("div");
        galeria.className = "herois-grid";

        const paragrafos = document.querySelectorAll("body > p");

        paragrafos.forEach(paragrafo => {

            const imagem = paragrafo.nextElementSibling;

            if (
                paragrafo.querySelector("strong") &&
                imagem &&
                imagem.tagName === "IMG"
            ) {
                const card = document.createElement("article");
                card.className = "heroi-card";

                card.appendChild(paragrafo);
                card.appendChild(imagem);

                galeria.appendChild(card);
            }
        });

        titulo.insertAdjacentElement("afterend", galeria);
    }

});