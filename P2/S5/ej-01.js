/* Creacion de variables */
/* Aplicacion cuenta clicks */

console.log("Ejecutando js...");

/* Acceder a los elementos del DOM */
const display = document.getElementById("display");

const boton = document.getElementById("boton");
/* uso de const indica que elemento de lectura */

/* contador de clicks */

let cont = 0; /* let indica que variable de escritura y lectura */

/* configurar retrollamada del boton */

boton.onclick = () => {
    console.log("click");


/* incrementar contador */

cont += 1;

/* Actualizar dis */

display.innerHTML  = cont; 
}
