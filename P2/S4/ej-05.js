//-- Tenemos acceso al documento html mediante  
//-- el objeto document

//-- Leer el párrafo identificado como test
const test = document.getElementById('test') /* Localizar 
mediante identificador */

//-- Mostrar en la consola el contenido del párrafo
//-- (es la propiedad innerHTML)
console.log("Párrafo test leido. Dice:")
console.log(test.innerHTML) /* imprimir texto  */