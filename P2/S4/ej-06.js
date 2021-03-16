/* Creamos funcion que cuando corra
hara que en la consola aparezca la frase */
function manejador_parrafo()
{
    console.log("Click sobre párrafo")
}

/* Nos informa que se ejecuta el js */
console.log("Ejecutando js..")

/* Tomamos la informacion del elemento id */
const test = document.getElementById('test')

/* Cuando se haga click sobre test(id) correra
la funcion definida */
test.onclick = manejador_parrafo;
