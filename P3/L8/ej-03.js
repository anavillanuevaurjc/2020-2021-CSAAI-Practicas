console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
const start = document.getElementById("start");

//-- Definir el tamaño del canvas
canvas.width = 230;
canvas.height = 400;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

// funcion dibujar 

function draw() {
  ctx.beginPath();
  //-- Definir un rectangulo de dimensiones 100x50,
  //-- cuya esquina superior izquierda está en (5,5)
  ctx.rect(6,5, 20, 10);
  ctx.rect(30,5, 20, 10);
  ctx.rect(54,5, 20, 10);
  ctx.rect(78,5, 20, 10);
  ctx.rect(102,5, 20, 10);
  ctx.rect(126,5, 20, 10);
  ctx.rect(150,5, 20, 10);
  ctx.rect(174,5, 20, 10);
  ctx.rect(198,5, 20, 10); /* 9 columnas */

  ctx.rect(6,20, 20, 10);
  ctx.rect(30,20, 20, 10);
  ctx.rect(54,20, 20, 10);
  ctx.rect(78,20, 20, 10);
  ctx.rect(102,20, 20, 10);
  ctx.rect(126,20, 20, 10);
  ctx.rect(150,20, 20, 10);
  ctx.rect(174,20, 20, 10);
  ctx.rect(198,20, 20, 10); 

  ctx.rect(6,35, 20, 10);
  ctx.rect(30,35, 20, 10);
  ctx.rect(54,35, 20, 10);
  ctx.rect(78,35, 20, 10);
  ctx.rect(102,35, 20, 10);
  ctx.rect(126,35, 20, 10);
  ctx.rect(150,35, 20, 10);
  ctx.rect(174,35, 20, 10);
  ctx.rect(198,35, 20, 10); 

  ctx.rect(6,50, 20, 10);
  ctx.rect(30,50, 20, 10);
  ctx.rect(54,50, 20, 10);
  ctx.rect(78,50, 20, 10);
  ctx.rect(102,50, 20, 10);
  ctx.rect(126,50, 20, 10);
  ctx.rect(150,50, 20, 10);
  ctx.rect(174,50, 20, 10);
  ctx.rect(198,50, 20, 10); 

  ctx.rect(6,65, 20, 10);
  ctx.rect(30,65, 20, 10);
  ctx.rect(54,65, 20, 10);
  ctx.rect(78,65, 20, 10);
  ctx.rect(102,65, 20, 10);
  ctx.rect(126,65, 20, 10);
  ctx.rect(150,65, 20, 10);
  ctx.rect(174,65, 20, 10);
  ctx.rect(198,65, 20, 10); /* LADRILLOS */


  /* ctx.rect(x,y, anchura, altura); */

  //-- Color de relleno del rectángulo
  ctx.fillStyle = 'blue';

  //-- Mostrar el relleno
  ctx.fill();

  //-- Mostrar el trazo del rectángulo
  ctx.stroke();
/* ctx.closePath(); */

/* Si deseamos dibujar figuras geometricas se ha de realizar
entre beginPath - closePath */

ctx.beginPath();
  //-- Definir un rectangulo de dimensiones 100x50,
  //-- cuya esquina superior izquierda está en (5,5)
  ctx.rect(150,250, 20, 10); /* RAQUETA */


  /* ctx.rect(x,y, anchura, altura); */

  //-- Color de relleno del rectángulo
  ctx.fillStyle = 'green';

  //-- Mostrar el relleno
  ctx.fill();

  //-- Mostrar el trazo del rectángulo
  ctx.stroke();
/* ctx.closePath(); */

  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI); 
  /* funcion usada arc(x,y,radio,angulo inicial,angulo final) */
  ctx.strokeStyle = 'yellow'; /* líneas  */
  ctx.lineWidth = 3; /* anchura lineas */
  ctx.fillStyle = 'blue'; /* relleno */

  //-- Mostrar el trazo del rectángulo
  ctx.stroke();
  ctx.fill();
ctx.closePath();

}

//-- Coordenadas del objeto
let x = 0;
let y = 230;

//-- Velocidad horizontal del objeto
let velx = 3;
let vely = 2;

//-- Funcion principal de animacion
function update() 
{
  console.log("test");
  //-- Algoritmo de animacion:
  //-- 1) Actualizar posicion del  elemento
  //-- (física del movimiento rectilineo uniforme)

   //-- Condicion de rebote en extremos del canvas
   if (x < 0 || x >= (canvas.width - 20) ) {
    velx = -velx;
  } /* si x < 0 o x >= (anchura del canvas - 20) cambiar
  sentido */
  if (y < 0) {
    vely = -vely;
  }

  if (y >= (canvas.height - 20) ) {
    /* ventana emergente informando de que ha perdido */
    /* ¿posibilidad de darle a start todas las veces deseadas */
  }
  


  //-- Actualizar la posición
  x = x + velx;
  y = y - vely; /* de este modo empieza hacia arriba */

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  draw();
  console.log("FASE 3 - Update")

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
}

//-- ¡Que empiece la función!
/* update(); */

//-- Pulsacion del boton start

start.onclick = update;

  
  



