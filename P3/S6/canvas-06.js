console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del convas
canvas.width = 200;
canvas.height = 100;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Texto solido
ctx.font = "25px Arial"; /* fuente del texto.
En caso de que no este disponible se pone otro */
ctx.fillStyle = 'yellow'/* color relleno texto */
ctx.fillText("Texo sólido", 10, 30); /* ctx.fillText("Tipo", x, y) */

//-- Texto trazo
ctx.strokeStyle = 'blue'; /* color del contorno del texto */
ctx.font = "35px Arial"; /* fuente y tipo de letra */
ctx.strokeText("Texto trazo", 5, 80); /* ctx.strokeText("Tipo", x, y) */