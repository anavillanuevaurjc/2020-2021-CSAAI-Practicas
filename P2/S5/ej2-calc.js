/* Sacar factor comun y agrupar todos los
botones que son similares */
console.log("Ejecutando JS...");


//-- Elementos de la interfaz de la calculadora
/* Declaramos variables para leer los botones */
display = document.getElementById("display")
boton1 = document.getElementById("boton1")
boton2 = document.getElementById("boton2")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

//-- Funciones de retrollamada de los botones
//-- Cada vez que se aprieta un boton se actua
//-- sobre la cadena: añadiendo digito, operador +
//-- poniendo a cero o evaluando la expresión

// -- Insertar digito 1
/* Establecemos funciones de retrollamada ->
Si le damos a un boton nos sale el indicado */
boton1.onclick = () => {
  display.innerHTML += "1";
}


//-- Insertar digito 2
boton2.onclick = () => {
  display.innerHTML += "2";
}

//-- Insertar simbolo de sumar
suma.onclick = () => {
  display.innerHTML += "+";
}

//-- Evaluar la expresion
/* Evalua si la expresion es correcta */
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}