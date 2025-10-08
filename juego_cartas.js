const btn_comenzar = document.querySelector(".btn_comenzar");

const oros = ["🟡1", "🟡2", "🟡3", "🟡4", "🟡5", "🟡1", "🟡2", "🟡3", "🟡4", "🟡5", ];
const copas = ["🍷1", "🍷2", "🍷3", "🍷4", "🍷5", "🍷6", "🍷7", "🍷🧍", "🍷🐎", "🍷👑"];
const espadas = ["🗡️1", "🗡️2", "🗡️3", "🗡️4", "🗡️5", "🗡️6", "🗡️7", "🗡️🧍", "🗡️🐎", "🗡️👑"];
const bastos = ["🌳1", "🌳2", "🌳3", "🌳4", "🌳5", "🌳6", "🌳7", "🌳🧍", "🌳🐎", "🌳👑"];
const cartas = oros.concat(oros);

const btn_repartir = document.querySelector(".btn_repartir");

const tablero = document.querySelector(".tablero");
const zona_maquina = document.querySelector(".zona_maquina");
const zona_centro = document.querySelector(".zona_cartas");
const zona_humano = document.querySelector(".zona_humano");

let player_humano = { nombre: "Humano", puntaje: 0, mano: [] };
let player_maquina = { nombre: "Máquina", puntaje: 0, mano: [] };

btn_comenzar.addEventListener ("click", () => {
    btn_comenzar.style.display = "none";
    btn_repartir.style.display = "block"
    tablero.style.display = "flex";

}); 

btn_repartir.addEventListener("click", () => {
    repartir();
});

verificarPuntaje();

let puntos;

if (puntos >= 3) {
    console.log("Game over");
}

function barajar(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function repartir() {
    barajar(cartas);

    let manoHumano = cartas.splice(0, 2);
    let manoMaquina = cartas.splice(0, 2);

    mostrarMano(manoMaquina, ".zona_maquina", true);
    mostrarMano(cartas, ".zona_cartas", true);                   
    mostrarMano(manoHumano, ".zona_humano", false);  
    
};

function mostrarMano(mano, selectorZona, dorso = false) {
    const contenedor = document.querySelector(selectorZona);
    contenedor.innerHTML= " ";

    for (let i = 0; i < mano.length; i++) {
        let carta = document.createElement("div");
        carta.textContent = mano[i];
        carta.dataset.valor = mano[i];
        
        if (dorso) {
                carta.classList.add("cartas_dorso");
            } else {
                carta.classList.add("cartas");
            }
        
        contenedor.appendChild(carta);
    }
};

function verificarPuntaje() {
    const humano = document.querySelectorAll(".zona_humano [data-valor]");
    const maquina = document.querySelectorAll(".zona_maquina [data-valor]");

    if (humano.length >= 2) {
        const v1 = humano[0].dataset.valor;
        const v2 = humano[1].dataset.valor;
        if (v1 === v2) {
            player_humano.puntaje++;
            alert("Punto para el Humano 🧍");
        }
    }

    if (maquina.length >= 2) {
        const v1 = maquina[0].dataset.valor;
        const v2 = maquina[1].dataset.valor;
        if (v1 === v2) {
            player_maquina.puntaje++;
            alert("Punto para la Máquina 🤖");
        }
    }

    console.log(`Humano: ${player_humano.puntaje} | Máquina: ${player_maquina.puntaje}`);
}