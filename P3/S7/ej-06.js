console.log("Ejecutando JS...");

//--Obtener los botones
const click = document.getElementById("click"); /* Leemos objetos botones */
const what = document.getElementById("what");

//-- Crear los elementos de sonido - mismo directorio que el HTML y JS
const click_sound = new Audio('click.mp3');
const what_sound = new Audio('what.mp3');

click.onclick = () => {
    /* al apretar click primero currentTime a 0
    y llamo al metodo play */
  click_sound.currentTime = 0;
  click_sound.play();
}

what.onclick = () => {
  what_sound.currentTime = 0;
  what_sound.play();
}