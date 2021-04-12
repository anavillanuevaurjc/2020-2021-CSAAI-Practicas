console.log("Ejecutando js...")

button = document.getElementById("button")
display = document.getElementById("display")

let x = 0;

button.onclick = () => {
    console.log("Has clickeado")
    display.innerHTML = ("Has clickeado") + (" ") + (x = x + 1)
}