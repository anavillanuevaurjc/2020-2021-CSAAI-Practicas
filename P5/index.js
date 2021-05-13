/* Ana Villanueva Ortiz */

//----- Obtener elemento de video y configurarlo
let directo = document.getElementById("directo");
//-----Lectura video 1 
const video1 = document.getElementById("video1");
const btn_video1 = document.getElementById("btn_video1");
//-----Lectura video 2
const video2 = document.getElementById("video2");
const btn_video2 = document.getElementById("btn_video2");
//-----Lectura imagen de test
const btn_test = document.getElementById("btn_test");
//-----ON
const btn_src_on = document.getElementById("btn_src_on");
//-----OFF
const btn_src_off = document.getElementById("btn_src_off");


//-- Establecer las dimensiones de los vídeos
directo.width=620;
directo.height=400;
video1.width=300;  
video1.height=300;
video2.width=300;  
video2.height=200;


//-- Imagen de Test usada
const TEST_IMAGE_URL = "test.jpg";

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
directo.poster = TEST_IMAGE_URL;
video1.poster = TEST_IMAGE_URL;
video2.poster = TEST_IMAGE_URL;

//-- Boton de FUENTES-ON
btn_src_on.onclick = () => {
 
  //-- Establecer la fuente de la cámara 1
  video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";

  //-- Reprodeucimos un vídeo, desde el comienzo
  video1.currentTime = 0;
  video1.play();

  //-- Y en silencio...
  video1.muted = true;

  //-- Establecer la fuente de la cámara 2
  video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4";

  //-- Reprodeucimos un vídeo, desde el comienzo
  video2.currentTime = 0;
  video2.play();
  
  //-- Y en silencio...
  video2.muted = true;

  //-- En la emisión en directo ponemos la imagen de prueba
  directo.poster = TEST_IMAGE_URL;

  //Al pulsar estos dos botones solo surtira efecto si estamos en ON

  //-- Botón de Selección de la cámara 1
  btn_video1.onclick = () => {
      directo.src = video1.src;
      directo.currentTime = video1.currentTime;
      directo.play();
      directo.poster=null;
    };

    //-- Botón de Selección de la cámara 2
  btn_video2.onclick = () => {
      directo.src = video2.src;
      directo.currentTime = video2.currentTime;
      directo.play();
      directo.poster=null;
    };
};

//-- Boton de FUENTES-OFF
btn_src_off.onclick = () => { 
    //-- Comprobamos si notifica su pulsacion 
    console.log("Pulsando boton OFF"); 
    //Pasamos imagen de Test
    video1.src = "https://github.com/anavillanuevaurjc/2020-2021-CSAAI-Practicas/blob/main/P5/test.jpg";
    video2.src = "https://github.com/anavillanuevaurjc/2020-2021-CSAAI-Practicas/blob/main/P5/test.jpg";
    

    //-- En la emisión en directo ponemos la imagen de prueba
    directo.poster = TEST_IMAGE_URL;
    directo.src = "https://github.com/anavillanuevaurjc/2020-2021-CSAAI-Practicas/blob/main/P5/test.jpg";
      //-- Botón de Selección de la cámara 1
    btn_video1.onclick = () => {
        video1.src = "https://github.com/anavillanuevaurjc/2020-2021-CSAAI-Practicas/blob/main/P5/test.jpg";
        directo.poster = TEST_IMAGE_URL;
        directo.src = "https://github.com/anavillanuevaurjc/2020-2021-CSAAI-Practicas/blob/main/P5/test.jpg";
    };

    //-- Botón de Selección de la cámara 2
    btn_video2.onclick = () => {
        video2.src = "https://github.com/anavillanuevaurjc/2020-2021-CSAAI-Practicas/blob/main/P5/test.jpg";
        directo.poster = TEST_IMAGE_URL;
        directo.src = "https://github.com/anavillanuevaurjc/2020-2021-CSAAI-Practicas/blob/main/P5/test.jpg";

    };
  };

//-- Botón de Test
btn_test.onclick = () => {
    //Al pulsar el boton TEST se eliminan los videos y se pone la imagen de test
    directo.poster = TEST_IMAGE_URL;
    directo.src = "https://github.com/anavillanuevaurjc/2020-2021-CSAAI-Practicas/blob/main/P5/test.jpg";
    //Pasamos imagen de Test
    video1.src = "https://github.com/anavillanuevaurjc/2020-2021-CSAAI-Practicas/blob/main/P5/test.jpg";
    video2.src = "https://github.com/anavillanuevaurjc/2020-2021-CSAAI-Practicas/blob/main/P5/test.jpg";
};


