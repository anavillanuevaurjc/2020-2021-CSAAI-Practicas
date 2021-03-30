console.log("Ejecutando JS...");

display = document.getElementById("display")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

//-- Obtener una colección con todos los elementos
//-- de la clase digito
/* Devuelve especie de array con todos los elementos que pertenecen
a la clase digito que se pueden recorrer con bucle for */
digitos = document.getElementsByClassName("digito")

//-- Establecer la misma función de retrollamada
//-- para todos los botones de tipo dígito
for (let boton of digitos) {

    //-- Se ejecuta cuando se pulsa un boton
    //-- que es un dígito
    /* A cada boton le asociamos una funcion de
    retrollamada y solo sirve para aquellos que 
    forman parte de la clase digito */
    boton.onclick = (ev) => {
        display.innerHTML += ev.target.value;
        console.log("DIGITO!!!");
    }
}

//-------- Resto de funciones de retrollamada

//-- Insertar simbolo de sumar
suma.onclick = (ev) => {
  display.innerHTML += ev.target.value;
}

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}