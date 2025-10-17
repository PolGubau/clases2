const listadoPeliculas = document.getElementById("listadoPeliculas");
import { filtraPeliculas} from "./filtros.js"

export function renderizaPeliculas(peliculas) {
    listadoPeliculas.innerHTML = "";
    const peliculasFiltradas = filtraPeliculas(peliculas);
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