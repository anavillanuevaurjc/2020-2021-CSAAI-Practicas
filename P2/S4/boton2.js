console.log("Ejecutando js...")

button = document.getElementById("button")
display = document.getElementById("display")

button.onclick = () => {
    console.log("Has clickeado")
    display.innerHTML = ("Has clickeado")
}