console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del convas
canvas.width = 200;
canvas.height = 100;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");


ctx.beginPath();
    //-- Dibujar un circulo: coordenadas x,y del centro
    //-- Radio, Angulo inicial y angulo final
    ctx.arc(100, 50, 40, 0, 2 * Math.PI); 
    /* funcion usada arc(x,y,radio,angulo inicial,angulo final) */
    ctx.strokeStyle = 'blue'; /* líneas  */
    ctx.lineWidth = 3; /* anchura lineas */
    ctx.fillStyle = 'yellow'; /* relleno */

    //-- Dibujar el trazo
    ctx.stroke()

    //-- Dibujar el relleno
    ctx.fill()
    
ctx.closePath()