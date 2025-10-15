const emoji_list = ["🌐", "🎵"];
let grup_emoji_list = emoji_list.concat(emoji_list);
let conteo = 0;
let timerActivo = false;

const mesa = document.querySelector(".mesa");
const contador = document.querySelector(".contador");
const btnReiniciar = document.querySelector(".reiniciar_juego");

function  barajar(e) {
    for(let i = e.length - 1; i > 0; i-- ) { 
        const j = Math.floor(Math.random() * (i + 1));
        [e[i], e[j]] = [e[j], e[i]];
    }
};

function tarjetasMesa() {
    mesa.innerHTML = "";
    barajar(grup_emoji_list);

    for (let i = 0; i < grup_emoji_list.length; i++) {
        let tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta");
        tarjeta.dataset.valor = grup_emoji_list[i];
        tarjeta.innerHTML = `<section class='tarjeta_frente emoji' data-valor="${grup_emoji_list[i]}">${grup_emoji_list[i]}</section>`;

        mesa.appendChild(tarjeta);    
    } 
};

function descubrir() {
    if (!timerActivo) { timerStart(); timerActivo = true;}
    let totalDescubiertas = document.querySelectorAll(".voltear");

    if (totalDescubiertas.length >= 2 || this.classList.contains("tarjeta_acertada") || this.classList.contains("voltear")) {
        return;
    }

    this.classList.add("voltear");
    const descubiertas = document.querySelectorAll(".voltear");

    conteo++;
    contador.innerHTML = `<p class="n_click_contador">${String(conteo).padStart(2,0)}<p>`;
    if (descubiertas.length === 2) {
        comparar(descubiertas);
    };
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

    const totalCartas = document.querySelectorAll(".tarjeta");
    const acertadas = document.querySelectorAll(".tarjeta_acertada")
        if (totalCartas.length === acertadas.length){
            setTimeout(finDeJuego, 200);
        }

    setTimeout(() => {
        descubiertas[0].classList.remove("voltear");
        descubiertas[1].classList.remove("voltear");
        descubiertas[0].style.pointerEvents = "none";
        descubiertas[1].style.pointerEvents = "none";
    }, 1000);
  }, 1000);
};

function error(descubiertas) {
    setTimeout(() => {
        descubiertas[0].classList.remove("voltear");
        descubiertas[1].classList.remove("voltear");
    }, 1200);
};

function finDeJuego() {
    stopTimer();
    mesa.classList.add = ("final_juego");
    mesa.innerHTML = "<p class='mensaje_final'>Juego terminado</p>";
    acertadas.style.pointerEvents = "none";
};

function initJuego() {
    conteo = 0;
    timerActivo = false;
    resetTimer();
    tarjetasMesa();
    contador.innerHTML = `<p class="n_click_contador">${String(conteo).padStart(2,0)}</p>`;

    const tarjetas = document.querySelectorAll(".tarjeta");
    tarjetas.forEach(t => t.addEventListener("click", descubrir));    
}

btnReiniciar.addEventListener("click", initJuego);
initJuego();



