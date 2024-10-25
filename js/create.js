import { conectaAPI } from "./API.js";

const formulario = document.querySelector("[data-create]")

async function createVideo(evento) {
    await evento.preventDefault()
    const nombre= document.querySelector("[data-nombre]").value
    const descripcion = document.querySelector("[data-descripcion]").value
    const precio= document.querySelector("[data-precio]").value
    const imagen = document.querySelector("[data-imagen]").value
    const categoria= document.querySelector("[data-categoria]").value

    console.log({nombre,descripcion,precio,imagen,categoria})

    try {
        await conectaAPI.create(nombre,descripcion,precio,imagen,categoria)
        window.location.href="../index.html"
    } catch (error) {
        alert(error)
    }


}

formulario.addEventListener("submit", evento=>createVideo(evento))