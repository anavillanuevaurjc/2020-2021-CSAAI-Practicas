/* Uso de funciones constructoras */
/* Deseo meter dos contadores -> en HTML tengo 2 interfaces */

console.log("ejecutando")
/* Son elementos interfaz grafica : gui -> agrupo en objeto  */
const gui = {
    display1: document.getElementById("display1"),
    boton_inc1: document.getElementById("boton_inc1"),
    boton_dec1: document.getElementById("boton_dec1"),

    display2: document.getElementById("display2"),
    boton_inc2: document.getElementById("boton_inc2"),
    boton_dec2: document.getElementById("boton_dec2"),
}
/* Es mejor generalizar para evitar copias -> Uso de funciones constructoras 

 const counter1 = {
    valor:0,
    inc: function(value){
        this.valor += value;
        gui.display.innerHTML = this.valor;
    }
}

const counter2 = {
    valor:0,
    inc: function(value){
        this.valor += value;
        gui.display.innerHTML = this.valor;
    }
} */

function counter(display){
    this.valor = 0; /* Objeto tiene valor */

    this.display = display; /* Objeto tenga propiedad interna display */
/* funcion constructora */
    this.inc = (value) => {
        this.valor += value;
        this.display.innerHTML = this.valor;
    }
}

/* Creamos los objetos con la palabra new */
const c1 = new counter(gui.display1); /* deseo que se visualice en display 1 */
const c2 = new counter(gui.display2); /* deseo que se visualice en display 2 */


/* Asociamos al boton definido la funcion */
gui.boton_inc1.onclick = () => {
    c1.inc(1) /* incrementar en 1 */
}
/* Decrementar contador */
gui.boton_inc2.onclick = () => {
    c2.inc(-1) /* decrementar en -1 */
}
