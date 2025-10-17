const principal = document.getElementById("principal");

export function cargarPeliculas(directorio) {
    fetch(directorio)
        .then(data => data.json())
        .then(dataPeliculas => {
            return dataPeliculas.data;

        }).catch(e => {
            const mensajeError = document.createElement("p")
            mensajeError.textContent = "Ha ocurrido un error, prueba de nuevo :("
            mensajeError.classList.add("mensaje_error")
            principal.appendChild(mensajeError)

            console.log("Ha pasado algo")
        }).finally(
            () => {
                console.log("Operación terminada")
            }
        )
}