const boton = document.getElementById("boton")

const parrafo = document.getElementById("parrafo")

boton.onclick = () => {
    console.log("Click sobre boton")

    parrafo.innerHTML = "Texto cambiado al pulsar"
}