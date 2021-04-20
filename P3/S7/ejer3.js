//Comprobacion JS en uso
console.log("Ejecutando JS 5...");

//Lectura objetos
const canvas = document.getElementById("canvas");

//Tamaño canvas 
canvas.width = 230;
canvas.height = 400;

//Elementos de audio
const click_sound = new Audio('raqueta.mp3');
const what_sound = new Audio('rebote.mp3');

//Contexto canvas - permite dibujar
const ctx = canvas.getContext("2d");

//Lectura por teclado 
window.onkeydown = (e) => {
  
    //-- Comprobar si la tecla es un espacio
    if (e.key == ' ') {
  
      //-- Cambiar la activación de la clase color
      console.log("espacio");
      update();
    }
  }

  //Coordenadas iniciales
    //Bola
  var xbola = 0;
  var ybola = 230;
    //Raqueta
  var xraqueta = 150;
  var yraqueta = 250;
  //Velocidades elementos
    //Bola - movimiento eje x e y 
  var velxbola = 3;
  var velybola = 2;
    //Raqueta - solo movimiento eje x
  var velxraqueta = 2;

  //Dibujar en el canvas 
  function draw(){
      //Tenemos 3 elementos - bola + raqueta + bloque
    //Bola
    ctx.beginPath();

    //funcion usada arc(x,y,radio,angulo inicial,angulo final) 
    ctx.arc(xbola, ybola, 10, 0, 2 * Math.PI); 

    ctx.strokeStyle = 'yellow'; /* líneas  */
    ctx.lineWidth = 3; /* anchura lineas */
    ctx.fillStyle = 'blue'; /* relleno */

    //-- Mostrar el trazo del rectángulo
    ctx.stroke();
    ctx.fill();

    //Raqueta
    ctx.beginPath();

    //ctx.rect(x,y, anchura, altura); 
    ctx.rect(xraqueta,yraqueta, 20, 10);

    //-- Color de relleno del rectángulo
    ctx.fillStyle = 'green';

    //-- Mostrar el relleno
    ctx.fill();

    //-- Mostrar el trazo del rectángulo
    ctx.stroke();

    ctx.beginPath();

    ctx.rect(6,5, 20, 10);
    ctx.rect(30,5, 20, 10);
    ctx.rect(54,5, 20, 10);
    ctx.rect(78,5, 20, 10);
    ctx.rect(102,5, 20, 10);
    ctx.rect(126,5, 20, 10);
    ctx.rect(150,5, 20, 10);
    ctx.rect(174,5, 20, 10);
    ctx.rect(198,5, 20, 10); 

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
    ctx.rect(198,65, 20, 10);

    //-- Color de relleno del rectángulo
    ctx.fillStyle = 'blue';

    //-- Mostrar el relleno
    ctx.fill();

    //-- Mostrar el trazo del rectángulo
    ctx.stroke();

ctx.closePath();

}

//Funcion principal de animacion
function update(){
    window.onkeydown = (e) => {
  
        //-- Comprobar si la tecla es un espacio
        if (e.key == 'a') {
            xraqueta += velxraqueta; //izquierda
            console.log("Movimiento izquierda");
        }else if(e.key == 'b') {
            xraqueta -= velxraqueta; //derecha
            console.log("Movimiento derecha");
        }

      }
    // Fisica
    if(xbola < 0 || xbola >= (canvas.width - 20) ) {
        velxbola = -velxbola;
    }
    if (ybola < 0) {
        velybola = -velybola;
      }

    xbola = xbola + velxbola;
    ybola = ybola - velybola;

    //Borrar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //Dibujar
    draw();
    //Volver a ejecutar update - aqui podemos pararlo
    if (ybola <= (canvas.height - 130) ){
        requestAnimationFrame(update);
    }else{
        console.log("fin");
    }
    
}
