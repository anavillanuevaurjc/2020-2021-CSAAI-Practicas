function main() {
  console.log("EJECUTANDO JS....");

  //-- Acceso imagen

  var img = document.getElementById('imagen');

  //-- Acceso al objeto con el canvas

  var canvas = document.getElementById('display');

  //-- Deslizadores

  deslizadorR = document.getElementById('deslizadorR');
  deslizadorG = document.getElementById('deslizadorG');
  deslizadorB = document.getElementById('deslizadorB');

  //-- Valores de deslizadores

  range_valueR = document.getElementById('range_valueR');
  range_valueG = document.getElementById('range_valueG');
  range_valueB = document.getElementById('range_valueB');

  //-- Canciones

  const song1 = new Audio('Song1.mp3');

  //-- Boton cancion

  botonsong1 = document.getElementById('botonsong1');

  //-- Pulsacion boton 

  botonsong1.onclick = () => {
    song1.currentTime = 0;
    song1.play();
  }


  //-- Mostramos la imagen original

  original = document.getElementById('botonoriginal');
    original.onclick = () => {
        ctx.drawImage(img, 0,0);
    }

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original

  canvas.width = img.width;
  canvas.height = img.height;

  //-- Obtener el contexto del canvas para trabajar con el

  var ctx = canvas.getContext("2d");

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia

  ctx.drawImage(img, 0,0);

  grey = document.getElementById('botongris');
  grey.onclick=()=>{
    var imagGrey = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
    //-- Obtener el array con todos los píxeles

    var data = imagGrey.data

    //-- Filtra la imagen segun el nuevo umbral

    for (var i = 0; i < data.length; i++) {
      var promedio =Math.round((imagGrey.data[i*4]
        +imagGrey.data[i*4 + 1]
        +imagGrey.data[i*4 + 2])/3);
        imagGrey.data[i*4] = promedio;
        imagGrey.data[i*4 +1] = promedio;
        imagGrey.data[i*4+2] = promedio;
      }
      ctx.putImageData(imagGrey, 0, 0);
  }


  function rgb(){

    ctx.drawImage(img, 0,0);
    range_valueR.innerHTML = deslizadorR.value;
    range_valueG.innerHTML = deslizadorG.value;
    range_valueB.innerHTML = deslizadorB.value;

    //-- Obtener la imagen del canvas en pixeles

    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles

    var data = imgData.data

    //-- Obtener los umbrales

    var umbralR = deslizadorR.value
    var umbralG = deslizadorG.value
    var umbralB = deslizadorB.value

    //-- Filtrar la imagen según los nuevos umbrales

    for (var i = 0; i < data.length; i+=4) {
      if (data[i] > umbralR)
          data[i] = umbralR;
      if (data[i+1] > umbralG)
          data[i+1] = umbralG;
      if (data[i+2] > umbralB)
          data[i+2] = umbralB;
    }
    //-- Poner la imagen modificada en el canvas

    ctx.putImageData(imgData, 0, 0);
  }

  //-- Funcion de retrollamada de los deslizadores

  deslizadorR.oninput = () => {
    rgb()
  }

  deslizadorG.oninput = () => {
    rgb()
  }

  deslizadorB.oninput = () => {
    rgb()
  }
}