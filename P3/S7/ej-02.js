//-- Entradas de texto 1,2 y 3 con sus párrafos de visualización
const text1 = document.getElementById("text1"); /* caja texto - entrada normal */
const text1_disp = document.getElementById("text1_disp"); /* display entrada normal */
const text2 = document.getElementById("text2"); /* caja texto - entrada normal */
const text2_disp = document.getElementById("text2_disp"); /* display entrada normal */
const text3 = document.getElementById("text3"); /* caja texto - entrada lista */
const text3_disp = document.getElementById("text3_disp"); /* display lista */

//-- Entrada de texto tipo password y su display asociado
const passw = document.getElementById("passw"); /* entrada oculta */
const passw_disp = document.getElementById("passw_disp"); /* display oculta */

//-- Retrollamadas de la entrada 1
text1.oninput = () => { /* cada vez que haya un cambio */
    text1_disp.innerHTML = "Escribiendo..."
}

text1.onchange = () => { /* cuando ha cambiado entrada de forma definitiva */
    text1_disp.innerHTML=text1.value;
}

//-- Retrollamada de la entrada 2
text2.onchange = () => {
    text2_disp.innerHTML = text2.value; 
}

//-- Retrollamada de la entrada 3
text3.onchange = () => {
    text3_disp.innerHTML = text3.value; 
}

//-- Retrollamada de la entrada 4
passw.onchange = () => {
    passw_disp.innerHTML = passw.value;
}