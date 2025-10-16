const RUTA_PELICULAS = "./peliculas.json";
const listadoPeliculas = document.getElementById("listadoPeliculas");
const checkboxFiltrarFinalizadas = document.getElementById("checkbox_filtrar_finalizadas");

let peliculas = [];


function cargarPeliculas(directorio){
    fetch(directorio)
    .then(data => data.json())
    .then(dataPeliculas => {
    peliculas = dataPeliculas;
    renderizaPeliculas();
    })
}


function renderizaPeliculas(){
    listadoPeliculas.innerHTML = "";
    const peliculasFiltradas = filtraPeliculas();
    peliculasFiltradas.forEach(pelicula => {
        renderizarUnaPelicula(pelicula);
    });
}


function renderizarUnaPelicula(pelicula){
    const li = document.createElement("li");
    li.textContent = pelicula.titulo;
    li.classList.add("pelicula_item")
    if(pelicula.isFinalizada){
        const nodoFinalizada = document.createElement("p")
        nodoFinalizada.textContent = "Pelicula Finalizada";
        nodoFinalizada.classList.add("isFinalizada_item")
        li.appendChild(nodoFinalizada)
    }
    listadoPeliculas.appendChild(li)
}


function filtraPeliculas(){
    const tieneFiltroFinalizadas = checkboxFiltrarFinalizadas.checked;
    let peliculasFiltradas = peliculas;
    if(tieneFiltroFinalizadas){
        peliculasFiltradas = peliculas.filter(pelicula => pelicula.isFinalizada)
    }

    return peliculasFiltradas;
}

checkboxFiltrarFinalizadas.addEventListener("change", renderizaPeliculas)


cargarPeliculas(RUTA_PELICULAS);