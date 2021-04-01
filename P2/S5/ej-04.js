/* Variable almacena valor
Objeto almacena valores y funciones -> pares de cosas con nombre y valor */
/* Objetos sirven para estructurar las cosas -> se 
utilizan cuando existen proyectos complicados -> permite 
que los programas sean escalables */

/* Contador a traves de objetos literales */

console.log("ejecutando")
/* Son elementos interfaz grafica : gui -> agrupo en objeto  */
const gui = {
    display: document.getElementById("display"),
    boton_inc: document.getElementById("boton_inc"),
    boton_dec: document.getElementById("boton_dec")
}
 /* Contador inicialmente es 0 + propiedad inc que es una funcion que 
 deseo que incremente en la unidad que le pase en parametro value -> si paso 1 incrementa 1 si paso 
 -1 se desincrementara 
 this -> la propiedad valor de este objeto deseo que la incremente
 deseo que me la actualize en el display que se encuentra en interfaz grafica*/
const counter = {
    valor:0,
    inc: function(value){
        this.valor += value;
        gui.display.innerHTML = this.valor;
    }
}
/* Asociamos al boton definido la funcion */
gui.boton.onclick = () => {
    counter.inc(1) /* incrementar en 1 */
}
/* Decrementar contador */
gui.boton.onclick = () => {
    counter.inc(-1) /* decrementar en -1 */
}


