console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
const start = document.getElementById("start");
const izq = document.getElementById("izq");
const dch = document.getElementById("dch");

//-- Definir el tamaño del canvas
canvas.width = 230;
canvas.height = 400;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

// funcion dibujar 

function draw() {
  let xr = 150;
  let yr = 250;

/* Si deseamos dibujar figuras geometricas se ha de realizar
entre beginPath - closePath */

ctx.beginPath();
  //-- Definir un rectangulo de dimensiones 100x50,
  //-- cuya esquina superior izquierda está en (5,5)
  ctx.rect(xr,yr, 20, 10); /* RAQUETA */


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

function finalizar(){
  x=0;
  y=0; /* No valido */
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
    finalizar();
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

start.onclick = () => {
  console.log("Click!");
  update();
}

/* No se donde implementar para que funcione */

izq.onclick = () => {
    console.log("Click!");
    xr = xr - 1;
      }
dch.onclick = () => {
    console.log("Click!");
    xr = xr + 1;
      }

/* No se como indicar que bajo, por tanto, no posible */







  


