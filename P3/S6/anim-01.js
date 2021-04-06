console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas"); /* creacion objeto canvas */

//-- Definir el tamaño del canvas
canvas.width = 300; /* anchura */
canvas.height = 100; /* altura */

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d"); /* dibujar en 2D */

//-- Posición del elemento a animar
let x = 0; /* posicion inicial */
let y = 0; /* posicion inicial */

//-- Funcion principal de animacion
function update() 
{
  console.log("test");
  //-- Algoritmo de animacion:
  //-- 1) Actualizar posiciones de los elementos
  //-- No se realiza debido a que este ejemplo no tiene movimiento

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height); /* realizar siempre para borrar */

  //-- 3) Dibujar los elementos visibles
  ctx.beginPath();
    ctx.rect(x, y, 80, 60); /* dibujar en x, y, anchura, altura */

    //-- Dibujar
    ctx.fillStyle = 'blue';

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
  ctx.closePath();

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update); /* permite que se ejecute el interior
  infinitamente */
}

//-- ¡Que empiece la función!
update(); /* se introduce por primera vez en la funcion */