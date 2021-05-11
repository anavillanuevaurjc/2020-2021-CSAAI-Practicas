/* Ana Villanueva Ortiz */
function main() {
  console.log("EJECUTANDO JS....");

  //-- Acceso imagen

  var img = document.getElementById('imagen');

  //-- Acceso al objeto con el canvas

  var canvas = document.getElementById('display');

  //-- Deslizadores

  const deslizadorR = document.getElementById('deslizadorR');
  const deslizadorG = document.getElementById('deslizadorG');
  const deslizadorB = document.getElementById('deslizadorB');
  const deslizadores = document.getElementsByClassName('deslizadores');
  
  

  //-- Valores de deslizadores

  const range_valueR = document.getElementById('range_valueR');
  const range_valueG = document.getElementById('range_valueG');
  const range_valueB = document.getElementById('range_valueB');

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

  grey.onclick = () => {
    pulsargris();
    console.log('Boton gris')
    deslizadorR.oninput = () => {
      norgb()
    }
    deslizadorG.oninput = () => {
      norgb()
    }
    deslizadorB.oninput = () => {
      norgb()
    }
  }

  function pulsargris(){
    
    ctx.drawImage(img, 0,0);

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

  negativo = document.getElementById('negativo');

  negativo.onclick = () => {

    deslizadorR.oninput = () => {
      norgb()
    }
    deslizadorG.oninput = () => {
      norgb()
    }
    deslizadorB.oninput = () => {
      norgb()
    }
    
    ctx.drawImage(img, 0,0);
    let imgData = ctx.getImageData(0,0,canvas.width, canvas.height);
    let data = imgData.data;
    for (let i = 0; i < data.length; i+=4) {
      DER = 255 - data[i];
      NEERG = 255 - data[i+1];
      EUBL = 255 - data[i+2];
  
      data[i] = DER;
      data[i+1] = NEERG;
      data[i+2] = EUBL ;
    }
    //--Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0,0);
  }


  function rgb(){

    ctx.drawImage(img, 0,0);

    range_valueR.innerHTML = deslizadorR.value;
    range_valueG.innerHTML = deslizadorG.value;
    range_valueB.innerHTML = deslizadorB.value;

    //-- Obtener la imagen del canvas en pixeles

    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles

    let data = imgData.data

    //-- Obtener los umbrales

    let umbralR = deslizadorR.value
    let umbralG = deslizadorG.value
    let umbralB = deslizadorB.value

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
}
  //Evita que al usar version gris afecten los deslizadores
  function norgb(){
      range_valueR.innerHTML = 255;
      range_valueG.innerHTML = 255;
      range_valueB.innerHTML = 255;
  }
