function pntjTime(tiempoTotal) {
  switch (true) {
    case (tiempoTotal < 30): return 1000;
    case (tiempoTotal < 40): return 500;
    case (tiempoTotal < 50): return 450;
    case (tiempoTotal < 60): return 400;
    case (tiempoTotal < 70): return 310;
    case (tiempoTotal < 80): return 250;
    case (tiempoTotal < 90): return 150;
    case (tiempoTotal < 100): return 75;
    case (tiempoTotal < 200): return 10;
    default: return 0;
  }
}

function pntjClick(conteo) {
  switch (true) {
    case (conteo <= 20): return 500;
    case (conteo <= 30): return 400;
    case (conteo <= 40): return 300;
    case (conteo <= 50): return 200;
    default: return 0;
  }
}

function getFinalPntj(tiempoTotal, conteo) {
  return pntjTime(tiempoTotal) + pntjClick(conteo);
}

function mostrarTablaPuntajes() {

  const tablaPosiciones = document.getElementById("tabla_posiciones");
  if (!tablaPosiciones) return;

  const puntajes = JSON.parse(localStorage.getItem("puntajesMemo")) || [];

  tablaPosiciones.innerHTML = "";
  
  puntajes.sort((a, b) => b.puntaje - a.puntaje);
  let tablaScore = `
    <table class="tabla_puntajes">
      <tr>
        <th>Jugador</th>
        <th>Puntaje</th>
      </tr>
  `;

  puntajes.forEach(p => {
    tablaScore += `
      <tr>
        <td>${p.nombre}</td>
        <td>${p.puntaje}</td>
        <td>Memory Game</td>
      </tr>
    `;
  });

  tablaScore+= `</table>`;

 
  tablaPosiciones.innerHTML = tablaScore;
  
}

document.addEventListener("DOMContentLoaded", mostrarTablaPuntajes);