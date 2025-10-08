// menu de navegacion //
let btn_mainMenu = document.querySelector("#btn_mainmenu");
let mainMenu = document.querySelector("#main_menu");
let btn_juegos = document.querySelector("#btn_juego");
let list_juegos = document.querySelector(".list_juegos");

mainMenu.style.display = "none";
list_juegos.style.display = "none";

btn_mainMenu.addEventListener("click", () => {
  if (mainMenu.style.display === "none") {
    mainMenu.style.display = "block";
  } else {
    mainMenu.style.display = "none";
  }
});


btn_juegos.addEventListener("click", () => {
  if (list_juegos.style.display === "none") {
    list_juegos.style.display = "block";
  } else {
    list_juegos.style.display = "none";
  }
});

