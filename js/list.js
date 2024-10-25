import {conectaAPI} from "./API.js"


const list=document.querySelector("[data-list]")

function crearCard(nombre,descripcion,precio,imagen,categoria){
    const card=document.createElement("li")
    card.className="card__item"
    card.innerHTML=`
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="${imagen}" alt="Producto 1" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-sm ">${nombre}</h3>
                    <p class="text-gray-600 mt-2">${descripcion}</p>
                    <div class="mt-4 flex justify-between items-center">
                        <span class="text-lg font-bold text-blue-600">${precio}</span>
                        <a href="#" class="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Comprar</a>
                    </div>
                </div>
            </div>
    `
    return card
}


async function listCard() {
    try {
        const listaAPI= await conectaAPI.list()
        listaAPI.forEach(card =>list.appendChild(crearCard(card.nombre,card.descripcion,card.precio,card.imagen)))
    } catch (error) {
        list.innerHTML=`<h2> Ha ocurrido un error </h2>`
    }
    
}

listCard()

export default crearCard





