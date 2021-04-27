//Comprobacion JS en uso
console.log("Ejecutando JS 5...");

//Lectura objetos
const canvas = document.getElementById("canvas");

//Tamaño canvas 
canvas.width = 230;
canvas.height = 400;

//Elementos de audio
const raqueta_sound = new Audio('raqueta.mp3');
const rebote_sound = new Audio('rebote.mp3');

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
  var velxraqueta = 4;
    //Velocidad rebote bola en raqueta
  var velrebote = 3;

  //Dibujar en el canvas 
  function draw(){
      //Tenemos 3 elementos - bola + raqueta + bloque
    //Bola
    ctx.beginPath();

    //funcion usada arc(x,y,radio,angulo inicial,angulo final) 
    ctx.arc(xbola, ybola, 5, 0, 2 * Math.PI); 

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

    //-- Constantes de los ladrillos
const LADRILLO = {
    F: 9,  // Filas
    C: 9,  // Columnas
    w: 20,
    h: 5,
    origen_x: 0, //Cambio sus valores y no pasa nada
    origen_y: 0, //Cambio sus valores y no pasa nada
    padding: 6.5, //Cambio el padding para que esten centrados
    visible: true
};

//-- Estructura de los ladrillos
const ladrillos = [];

for (let i = 0; i < LADRILLO.F; i++) {
    ladrillos[i] = [];
    for (let j = 0; j < LADRILLO.C; j++) {
      ladrillos[i][j] = {
          x: (LADRILLO.w + LADRILLO.padding) * j,
          y: (LADRILLO.h + LADRILLO.padding) * i,
          w: LADRILLO.w,
          h: LADRILLO.h,
          padding: LADRILLO.padding,
          visible: LADRILLO.visible
        };
    }
}

//-- Dibujar ladrillos
for (let i = 0; i < LADRILLO.F; i++) {
    for (let j = 0; j < LADRILLO.C; j++) {

      //-- Si el ladrillo es visible se pinta
      if (ladrillos[i][j].visible) {
        ctx.beginPath();
        ctx.rect(ladrillos[i][j].x, ladrillos[i][j].y, LADRILLO.w, LADRILLO.h);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.closePath();
      }
    }
}
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
    if(xbola < 0 || xbola >= (canvas.width - 20)) {
        velxbola = -velxbola;
        rebote_sound.currentTime = 0;
        rebote_sound.play();

        
    }else if (ybola < 0) {
        velybola = -velybola;
        rebote_sound.currentTime = 0;
        rebote_sound.play();
      }else if ((ybola >=240) && (xbola == xraqueta)){
        console.log("rebote raqueta");
        velxbola = -velxbola;
        velybola = -velybola;
        raqueta_sound.currentTime = 0;
        raqueta_sound.play();
      }else{

      }

    xbola = xbola + velxbola;
    ybola = ybola - velybola;

    //Borrar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //Dibujar
    draw();
    //Volver a ejecutar update - aqui podemos pararlo - 130
    if (ybola <= (canvas.height - 130) ){
        requestAnimationFrame(update);
    }else{
        console.log("fin");
        window.onkeydown = (e) => {
  
            //-- Comprobar si la tecla es un espacio
            if (e.key == ' ') {
          
              //-- Cambiar la activación de la clase color
              console.log("espacio");
              update();
            }
          }

    }
    
}

