let segundos = 0;
let minutos = 0;
let intervalo;

function timerStart() {

    if (intervalo) { return };
    const timer = document.querySelector(".timer")

    intervalo = setInterval(() => {
        segundos++
        
        if (segundos === 20) {
        minutos ++
        segundos = 0;
        }

        timer.innerText = `${String(minutos).padStart(2,"0")}:${String(segundos).padStart(2,"0")}`;

    }, 1000);   
};

function stopTimer() {
    clearInterval(intervalo);
    intervalo = null;
}

function resetTimer() {
    stopTimer();
    segundos = 0;
    minutos = 0;
    const timer = document.querySelector(".timer")
    timer.innerText = "00:00";

}

