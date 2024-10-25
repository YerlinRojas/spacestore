

async function list() {
    const conexion = await fetch("http://localhost:4000/list",{
        method: "GET",
        headers:{
            "Content-type":"application/json"
        }
    }
)
    const conexionConvertida= await conexion.json()
    if(!conexion.ok){
        throw new Error("Ha ocurrio un error en la conexion con le SERVER")
    }

    return conexionConvertida

}

async function create(nombre,descripcion,precio,imagen,categoria) {
    console.log("Llamando a API")
    const conexion = await fetch("http://localhost:4000/list",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            descripcion:descripcion,
            precio: `${precio} USD`,
            imagen:imagen,
            categoria:categoria
        })
    })
    const conexionConvertida= await conexion.json()
    if(!conexion.ok){
        throw new Error("Ha ocurrio un error en la conexion con le SERVER")
    }
    console.log("Juego creado Exitosamente:", conexionConvertida)

    return conexionConvertida;
}

export const conectaAPI={
    list,
    create
}