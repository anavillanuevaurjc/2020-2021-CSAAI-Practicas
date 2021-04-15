console.log("Ejecutando JS...");

const display = document.getElementById("display");

//-- Tecla pulsada: Mostrar su información

/* Conectamos a dos eventos */

/* Apretamos tecla */
window.onkeydown = (e)=> {
  display.innerHTML = `Tecla: ${e.key}. Código: ${e.keyCode}`
  /* Aparecera informacion de la tecla en el parrafo */
}

//-- Tecla liberada: Borrar el párrafo
/* Dejamos de apretar tecla */
window.onkeyup = (e) => {
  display.innerHTML = ""
}