// const RUTA_PELICULAS = "https://jsonfakery.com/movies/paginated";
const RUTA_PELICULAS = "./peliculas.json";


const listadoPeliculas = document.getElementById("listadoPeliculas");
const checkbox_filtrar_ingles = document.getElementById("checkbox_filtrar_ingles");
const checkboxFiltrar2016 = document.getElementById("checkbox_filtrar_2016");
const principal = document.getElementById("principal")

let peliculas = [];


function cargarPeliculas(directorio) {
    fetch(directorio)
        .then(data => data.json())
        .then(dataPeliculas => {
            peliculas = dataPeliculas.data;
            renderizaPeliculas();
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


function renderizaPeliculas() {
    listadoPeliculas.innerHTML = "";
    const peliculasFiltradas = filtraPeliculas();
    peliculasFiltradas.forEach(pelicula => {
        renderizarUnaPelicula(pelicula);
    });
}


function renderizarUnaPelicula(pelicula) {
    const nodoPelicula = document.createElement("li");

    const caratula = document.createElement("img")
    caratula.src = pelicula.poster_path;
    caratula.classList.add("pelicula_poster")
    caratula.alt = "Portada de: " + pelicula.original_title;
    nodoPelicula.appendChild(caratula)


    const peliculaHeader = document.createElement("header")
    peliculaHeader.classList.add("pelicula_header")


    const nombrePelicula = document.createElement("h2");
    nombrePelicula.textContent = pelicula.original_title;
    peliculaHeader.appendChild(nombrePelicula)


    const mediaPelicula = document.createElement("strong");
    mediaPelicula.textContent = pelicula.vote_average;
    peliculaHeader.appendChild(mediaPelicula)


    nodoPelicula.appendChild(peliculaHeader)


    listadoPeliculas.appendChild(nodoPelicula)
}


function filtraPeliculas() {
    const tieneFiltroIngles = checkbox_filtrar_ingles.checked;
    const tieneFiltro2016 = checkboxFiltrar2016.checked;
    let peliculasFiltradas = peliculas;

    if (tieneFiltroIngles) {
        peliculasFiltradas = peliculasFiltradas.filter(pelicula => pelicula.original_language = "en");
    }

    if (tieneFiltro2016) {
        peliculasFiltradas = peliculasFiltradas.filter(pelicula => (pelicula.fecha > 2016));
    }

    return peliculasFiltradas;
}

checkbox_filtrar_ingles.addEventListener("change", renderizaPeliculas)
checkboxFiltrar2016.addEventListener("change", renderizaPeliculas)


cargarPeliculas(RUTA_PELICULAS);