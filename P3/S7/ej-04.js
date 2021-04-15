//-- Acceder al cuerpo del documento HTML
//-- Es el primer elemento, porque sólo hay un cuerpo

/* obtencion del cuerpo - mediante la propia etiqueta 
devuelve coleccion de elementos y pide un unico elemento -
en este caso cuerpo solo un elemento, por tanto, 0*/
body = document.getElementsByTagName('body')[0]

//-- Funcion de retrollamada de tecla pulsada
/* evento al apretar tecla - e - elemento HTML asociado a tecla
exite atributo key que contiene valor */
window.onkeydown = (e) => {
  
  //-- Comprobar si la tecla es un espacio
  if (e.key == ' ') {

    //-- Cambiar la activación de la clase color
    /* al elemento body queremos añadirle a la clase color 
    de definida en css - toggle permite añadirlo a una clase 
    y si ya esta añadido lo quita */
    body.classList.toggle("color");
  }
}