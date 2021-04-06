console.log("Ejecutando JS..."); /* Poner para observar que se 
ha inicializado el js */

const canvas = document.getElementById("canvas"); /* Obtener el objeto del canvas */

//-- Definir el tamaño del convas
canvas.width = 200; /* anchura */
canvas.height = 100; /* altura */

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d"); /* permite dibujar en el canvas en 2D */

/* Si deseamos dibujar figuras geometricas se ha de realizar
entre beginPath - closePath */

ctx.beginPath();
  //-- Definir un rectangulo de dimensiones 100x50,
  //-- cuya esquina superior izquierda está en (5,5)
  ctx.rect(5,5, 150, 50);
  /* ctx.rect(x,y, anchura, altura); */

  //-- Color de relleno del rectángulo
  ctx.fillStyle = 'blue';

  //-- Mostrar el relleno
  ctx.fill();

  //-- Mostrar el trazo del rectángulo
  ctx.stroke();
ctx.closePath();