//Comprobacion JS en uso
console.log("Ejecutando JS 5...");

//Lectura objetos
const canvas = document.getElementById("canvas");
const diplayVIDAS = document.getElementById("diplayVIDAS");
const prueba = document.getElementById("prueba");
const boton = document.getElementById("boton");


//Tamaño canvas 
canvas.width = 230;
canvas.height = 400;

//Elementos de audio
const raqueta_sound = new Audio('raqueta.mp3');
const rebote_sound = new Audio('rebote.mp3');

//Contexto canvas - permite dibujar
const ctx = canvas.getContext("2d");

//Variable 

vidasiniciales = 3;

//Lectura por teclado 
window.onkeydown = (e) => {
  
    //-- Comprobar si la tecla es un espacio
    if (e.key == ' ') {
  
      //-- Cambiar la activación de la clase color
      console.log("espacio");
      prueba.innerHTML = vidasiniciales;
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
    //Variable inicial del display


  //Dibujar en el canvas 
  function draw(){
      //Tenemos 3 elementos - bola + raqueta + bloque
    //Bola
    ctx.beginPath();

    //funcion usada arc(x,y,radio,angulo inicial,angulo final) 
    ctx.arc(xbola, ybola, 5, 0, 2 * Math.PI); 

    ctx.strokeStyle = 'black'; /* líneas  */
    ctx.lineWidth = 3; /* anchura lineas */
    ctx.fillStyle = 'black'; /* relleno */

    //-- Mostrar el trazo del rectángulo
    ctx.stroke();
    ctx.fill();

    //Raqueta
    ctx.beginPath();

    //ctx.rect(x,y, anchura, altura); 
    ctx.rect(xraqueta,yraqueta, 30, 6);

    //-- Color de relleno del rectángulo
    ctx.strokeStyle = 'black'; /* líneas  */
    ctx.fillStyle = 'black';

    //-- Mostrar el relleno
    ctx.fill();

    //-- Mostrar el trazo del rectángulo


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
    ctx.fillStyle = 'black';

    //-- Mostrar el relleno
    ctx.fill();

    //-- Mostrar el trazo del rectángulo


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

    let vidas = 1;
    if (ybola >= (canvas.height - 130)) {
      vidas = vidas - 1;
      if (vidas > 0){
        console.log(vidas);
        velxbola = -velxbola;
        velybola = -velybola;
      }else if(vidas < 0){
        console.log("PARTIDA PERDIDA");

      }else{
        console.log("NO posible evita infinito")
      }

    }


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
    }else if (ybola >= (canvas.height - 130) ){
      boton.onclick = () => {
        console.log("Click!");
        update();
      }

/*         vidas = vidasiniciales - 1;
        prueba.innerHTML = vidas;  *///funciona, pero no se puede reiniciar
        //Si ocurre esto se reducira una vida y se indicara en el
        //contador - bola a de volver a la posicion inical o no para de moverse hasta
        //que las vidas sean 0
    }else{
      console.log("No posible llegar");
    }
    
}


