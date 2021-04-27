//Resetear

//Comprobacion JS en uso
console.log("Ejecutando JS 5...");

//Lectura objetos
const canvas = document.getElementById("canvas");
const vidas = document.getElementById("vidas");
const bloques = document.getElementById("bloques");

//Tamaño canvas 
canvas.width = 230;
canvas.height = 400;

//Elementos de audio
const raqueta_sound = new Audio('raqueta.mp3');
const rebote_sound = new Audio('rebote.mp3');
const tanto_sound = new Audio('tanto.mp3');

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
        //Vidas iniciales
    var numVidas = 3;
        //Ladrillos iniciales
    var numLadrillos = 0;
    //-- Constantes de los ladrillos
    const LADRILLO = {
    F: 5,  // Filas
    C: 9,  // Columnas
    w: 20,
    h: 5,
    origen_x: 0, //Cambio sus valores y no pasa nada
    origen_y: 0, //Cambio sus valores y no pasa nada
    padding: 5, //Cambio el padding para que esten centrados
    visible: true
};

//-- Estructura de los ladrillos
const ladrillos = [];

for (let i = 0; i < LADRILLO.F; i++) {
    ladrillos[i] = [];
    for (let j = 0; j < LADRILLO.C; j++) {
      ladrillos[i][j] = {
          x: 5 + (LADRILLO.w + LADRILLO.padding) * j,
          y: 40 + (LADRILLO.h + LADRILLO.padding) * i, //Con el valor int movemos los ladrillos
          w: LADRILLO.w,
          h: LADRILLO.h,
          padding: LADRILLO.padding,
          visible: LADRILLO.visible
        };
    }
}

  //Dibujar en el canvas 
  function draw(){
    //VIDAS 
    ctx.beginPath();
    ctx.font = "10px Lazer84";
    ctx.fillStyle = 'black'
    ctx.fillText("LIVES", 10, 20);
    ctx.fillText(numVidas, 10, 30); 

    //PUNTUACION 

    ctx.beginPath();
    ctx.font = "10px Lazer84";
    ctx.fillStyle = 'black'
    ctx.fillText("SCORE", 190, 20);
    ctx.fillText(numLadrillos, 190, 30); 

    
      
    //Tenemos 3 elementos - bola + raqueta + bloque
    //Bola
    var img = new Image();
    img.src = "bola.jpg";

    ctx.beginPath();

    //funcion usada arc(x,y,radio,angulo inicial,angulo final) 
    ctx.arc(xbola, ybola, 2, 0, 2 * Math.PI); 

    ctx.fillStyle = ctx.createPattern(img,"repeat");
    ctx.fill();

    /* ctx.strokeStyle = 'red'; */ /* líneas  */
   /*  ctx.lineWidth = 3;  *//* anchura lineas */
  /*   ctx.fillStyle = 'black'; */ /* relleno */

    //-- Mostrar el trazo del rectángulo
/*     ctx.stroke();
    ctx.fill(); */

    //Raqueta
    ctx.beginPath();

    //ctx.rect(x,y, anchura, altura); 
    ctx.rect(xraqueta,yraqueta, 20, 10);

    //-- Color de relleno del rectángulo
    ctx.fillStyle = 'red';

    //-- Mostrar el relleno
    ctx.fill();


    ctx.beginPath();


//-- Dibujar ladrillos
for (let i = 0; i < LADRILLO.F; i++) {
    for (let j = 0; j < LADRILLO.C; j++) {

      //-- Si el ladrillo es visible se pinta
      if (ladrillos[i][j].visible) {
        ctx.beginPath();
        ctx.rect(ladrillos[i][j].x, ladrillos[i][j].y, LADRILLO.w, LADRILLO.h);
        ctx.fillStyle = 'red';
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
  
        // Uso flechas
        if (e.keyCode == 39) {
            xraqueta += velxraqueta; //izquierda
            console.log("Movimiento izquierda");
        }else if(e.keyCode == 37) {
            xraqueta -= velxraqueta; //derecha
            console.log("Movimiento derecha");
            

        }

      }
    // Fisica

    //--Contador de VIDAS

    if (ybola >= (canvas.height - 130) ){
        numVidas -=1;
        if (numVidas == 2){
            velybola = -velybola;
            velxbola = -velxbola;
            console.log(numVidas);
        }else if (numVidas ==1){
            velybola = -velybola;
            velxbola = -velxbola;
            console.log(numVidas);
        }else{
            numVidas = 0;
            velybola = 0;
            velxbola = 0;
            console.log(0);
/*             window.onkeydown = (e) => {
                // Uso flechas
                if (e.keyCode == 32) {
                    numLadrillos = 0;
                    numVidas = 3;
                }
            } */
        }
    }


    //Raqueta choca con lateral

    if (xraqueta <= 0){
        xraqueta = xraqueta + velxraqueta;
        console.log("HAS DADO CON LATERAL RAQUETA");
    }

    if (xraqueta >= 210){
        xraqueta = xraqueta - velxraqueta;
        console.log("HAS DADO CON LATERAL RAQUETA");
    }
    
    //-- Rebote de la pelota con el canvas

    if(xbola < 0 || xbola >= (canvas.width - 20)) {
        velxbola = -velxbola;
        rebote_sound.currentTime = 0;
        rebote_sound.play();

        
    }else if (ybola < 0) {
        velybola = -velybola;
        rebote_sound.currentTime = 0;
        rebote_sound.play();
    }

    //--Rebote raqueta 

    if (((ybola >=240) && (xbola == xraqueta)) || ((ybola >=240) && (xbola == (xraqueta + 10))) || ((ybola >=240) && (xbola == (xraqueta - 10))) ){
        console.log("rebote raqueta");
        velxbola = -velxbola;
        velybola = -velybola;
        raqueta_sound.currentTime = 0;
        raqueta_sound.play();
    }


    //Bucle romper ladrillos 
    for (let i = 0; i < LADRILLO.F; i++) {
        for (let j = 0; j < LADRILLO.C; j++) {
          if (ladrillos[i][j].visible) {
            if ((ybola >= ladrillos[i][j].y) && (ybola <= (ladrillos[i][j].y + 5))){
              if ((xbola >= ladrillos[i][j].x) && (xbola <= (ladrillos[i][j].x + 20))){
                ladrillos[i][j].visible = false;
                velybola = -velybola;
                velxbola = -velxbola;
                //Contador de LADRILLOS
                numLadrillos += 1;
                bloques.innerHTML = numLadrillos;
                console.log("CONTADOR LADRILLOS");
                console.log(numLadrillos);
                //Sonido
                tanto_sound.currentTime = 0;
                tanto_sound.play();

              }
            }
          }
        }
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
    }
    
}


