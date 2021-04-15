//-- Boton normal
const button = document.getElementById("button"); /* leemos elementos asociados al boton normal */
const button_test = document.getElementById("button-test"); /* leemos texto asociado al boton */

//-- Checkbox
const c1 = document.getElementById("checkbox1"); /* leemos check */
const c2 = document.getElementById("checkbox2"); /* leemos check */
const c1_test = document.getElementById("c1_test");
const c2_test = document.getElementById("c2_test");

//-- Botones radio
const r1 = document.getElementById("radio1"); 
const r2 = document.getElementById("radio2");
const r3 = document.getElementById("radio3");
const r4 = document.getElementById("radio4");
const r_disp = document.getElementById("radio_display"); /* leemos el display */

//-- Boton normal  
button.onclick = () => { /* Evento de botones normales */
    //-- Cambiar de color el texto
    if (button_test.style.color == "") {
        button_test.style.color = "green";
    } else {
        button_test.style.color = ""; /* Si no he metido estilo a la etiqueta
        que se lo ponga verde y si tiene que se lo quite */
    }
}

//---- Botones checkbox
c1.onchange = () => { /* evento que cada vez que cambia de estado el pulsado cambiamos
    color a su etiqueta asociada */
    if (c1.checked) { /* comprueba que esta pulsado mediante checked */
        c1_test.style.color = "red"; 
    } else {
        c1_test.style.color = "";
    }
}

c2.onchange = () => {
    if (c2.checked) {
        c2_test.style.color = "red";
    } else {
        c2_test.style.color = "";
    }
}

//-- Botones radio

r1.onchange = () => { /* onchange - se llama cada vez que se activa
    el pulsador y solo cuando se activa se hace la accion deseada */
    r_disp.innerHTML = "b1";   
}

r2.onchange = () => {
    r_disp.innerHTML = "b2";   
}

r3.onchange = () => {
    r_disp.innerHTML = "b3";   
}

r4.onchange = () => {
    r_disp.innerHTML = "b4";   
}