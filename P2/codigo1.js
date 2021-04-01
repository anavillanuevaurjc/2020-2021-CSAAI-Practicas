console.log("Ejecutando JS...");

//-- Elementos de la interfaz de la calculadora
const digitos = document.getElementsByClassName("digito");
const display = document.getElementById("resultado");
const operadores = document.getElementsByClassName("operador");
const igual = document.getElementById("igual");
const del = document.getElementById("delete");
const clear = document.getElementById("clear");

//-- Estados de la calculadora
const ESTADO = {
  INIT: 0, /* inicial */
  OP1: 1, /* digito 1 */
  OPERATION: 2, /* operador */
  OP2: 3, /* digito 2 */
}

//-- Variable de estado
//-- Por defecto su valor será el del estado inicial
let estado = ESTADO.INIT;

//-- Función de retrollamada de los botones
//-- botones de la clase dígito
function digit(dig)
{
  if (estado == ESTADO.INIT) { /* si estado inicial */
    estado = ESTADO.OP1; /* pasamos al siguiente estado */
    display.innerHTML = dig; /* añadimo al display el primer digito */
    console.log("Valor: " + dig);
    console.log("Estado: " + estado);
  } else if(estado == ESTADO.OP1 || estado == ESTADO.OP2 ){
    display.innerHTML += dig;
    console.log("Valor: " + dig);
    console.log("Estado: " + estado);
  } else if (estado == ESTADO.OPERATION){ /* si estado operacion */
    estado = ESTADO.OP2; /* pasamos al siguiente estado */
    display.innerHTML += dig; /* ponemos  en display digito */
    console.log("Valor: " + dig);
    console.log("Estado: " + estado);
  } 
}
  
for (let number of digitos) {
  //-- El parámetro ev.target contiene el boton
  //-- que ha recibido el click
  number.onclick = (ev) => {
    digit(ev.target.value)
    //display.innerHTML +=ev.target.value;
  }
}

for (let operator of operadores) {
  operator.onclick = (ev) => {
    if(estado == ESTADO.OP1){
      digit(ev.target.value);
      //display.innerHTML += (ev.target.value);
      estado = ESTADO.OPERATION;
      console.log("Estado: " + estado);
    }
  }
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = " ";
  estado = ESTADO.INIT;
  console.log("Valor: " + "clear");
  console.log("Estado: " + estado);
}

//-- Borrar el último número de la expresión
del.onclick = () =>{
  display.innerHTML = display.innerHTML.slice(0,-1) // Slice coge elemento inicial y final a extraer en pantalla
}


//-- Evaluar la expresion
igual.onclick = () => {
  if(estado == ESTADO.OP2){
    display.innerHTML = eval(display.innerHTML);
    estado = ESTADO.OP1;
    console.log("Valor: " + "equal");
    console.log("Estado: " + estado);
  }
}