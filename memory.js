const emoji_list = ["🌐", "🎵", "💾", "📓", "🎥", "🎫"];
let grup_emoji_list = emoji_list.concat(emoji_list);

function  barajar(e) {
    for(let i = e.length - 1; i > 0; i-- ) { 
        const j = Math.floor(Math.random() * (i + 1));
        [e[i], e[j]] = [e[j], e[i]];
    }
}

function tarjetas_mesa() {
    const mesa = document.querySelector(".mesa");
    mesa.innerHTML = "";
    barajar(grup_emoji_list);

    for (let i = 0; i < grup_emoji_list.length; i++) {
        let tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta");
        tarjeta.dataset.valor = grup_emoji_list[i];
        tarjeta.innerHTML = `<section class='tarjeta_frente emoji' data-valor="${grup_emoji_list[i]}">${grup_emoji_list[i]}</section>`;

        mesa.appendChild(tarjeta);    
    } 
}

function descubrir() {
    let descubiertas;
    let totalDescubiertas = document.querySelectorAll(".voltear");

    if (totalDescubiertas.length > 1 ) {
        return
    };

    this.classList.add("voltear");
    descubiertas = document.querySelectorAll(".voltear");
    
    if (descubiertas.length < 2 ) {
        return
    };
    comparar(descubiertas);
};

function comparar(descubiertas) {
    if (descubiertas[0].dataset.valor === descubiertas[1].dataset.valor) {
        acierto(descubiertas);
    } else {
        error(descubiertas);  
    };
}

function acierto(descubiertas) {
  setTimeout(() => {
    descubiertas[0].classList.add("tarjeta_acertada");
    descubiertas[1].classList.add("tarjeta_acertada");

    setTimeout(() => {
      descubiertas[0].remove();
      descubiertas[1].remove();
    }, 800);
  }, 1000);
}

function error(descubiertas) {
    setTimeout(() => {
        descubiertas[0].classList.remove("voltear");
        descubiertas[1].classList.remove("voltear");
    }, 1000);
}

tarjetas_mesa();

const tarjetas = document.querySelectorAll(".tarjeta");
for (let i = 0; i < tarjetas.length; i++ ) {
    tarjetas[i].addEventListener("click", descubrir);
};