console.log("Ejecutando js...")

button1 = document.getElementById("button1")
button2 = document.getElementById("button2")
display = document.getElementById("display")

let x = 0;

button1.onclick = () => {
    console.log("Has clickeado")
    display.innerHTML = ("Has clickeado") + (" ") + (x = x + 1)
}

button2.onclick = () => {
    console.log("Has clickeado")
    display.innerHTML = ("Has clickeado") + (" ") + (x = x + 2)
}

/* Resultado aparece en el mismo display */