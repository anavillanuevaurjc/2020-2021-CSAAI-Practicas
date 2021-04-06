console.log("Ejecutando JS..."); /* comprobacion de inicializacion */

const canvas = document.getElementById("canvas"); /* creacion del objeto canvas */

//-- Definir el tamaño del convas
canvas.width = 200; /* anchura canvas */
canvas.height = 100; /* altura canvas */

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d"); /* permite dibujar en 2D */


ctx.beginPath();
    //-- Línea horizontal
    ctx.moveTo(10, 20); /* moveTo no pinta */
    ctx.lineTo(100, 20); /* lineTo pinta desde el moveTo hasta el lineTo 
    - coordenadas x,y*/

    //-- Línea horizontal y vertical, unidas
    ctx.moveTo(10, 80); /* no pinta */
    ctx.lineTo(150,80); /* pinta */
    ctx.lineTo(150,20); /* pinta */

    ctx.strokeStyle = 'blue'; /* no pinta interior, sino lineas */
    //-- Cambiar el tamaño de la linea del trazo
    ctx.lineWidth = 4;

    //-- Dibujar el trazo
    ctx.stroke()
    
ctx.closePath()
