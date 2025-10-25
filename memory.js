const memory_img = [
                    "https://images.metmuseum.org/CRDImages/as/web-large/DP211819.jpg",
                    "https://collectionapi.metmuseum.org/api/collection/v1/iiif/37823/1964596/main-image",
                    "https://collectionapi.metmuseum.org/api/collection/v1/iiif/54694/169412/main-image",
                    "https://www.singulart.com/blog/wp-content/uploads/2023/08/image-66-1024x771.png",
                    "https://portlandartmuseum.org/wp-content/uploads/2024/08/Monet-Waterlillies-unframed-1894x1080.jpg",
                    "https://www.artmajeur.com/medias/ultra_quality/b/a/bastien-alleaume/blog/caravaggio-bacchus-1592-1597.jpg",
                    "https://cinependienterd.com/wp-content/uploads/2018/02/pinturas.webp",
                    "https://media.newyorker.com/photos/5909683c019dfc3494ea0f6d/master/w_2560%2Cc_limit/110926_r21316_g2048.jpg"
                    ];
                    
let grup_memory_img = memory_img.concat(memory_img);
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
    barajar(grup_memory_img);

    for (let i = 0; i < grup_memory_img.length; i++) {
        let tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta");
        tarjeta.dataset.valor = grup_memory_img[i];
        tarjeta.innerHTML = 
        `<section class='tarjeta_frente emoji' data-valor="${grup_memory_img[i]}">
            <img src="${grup_memory_img[i]}" alt="obra de arte" />
        </section>`;

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
    }, 1800);
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



