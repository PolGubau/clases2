const RUTA_PELICULAS = "./peliculas.json";
const listadoPeliculas = document.getElementById("listadoPeliculas");
const checkboxFiltrarFinalizadas = document.getElementById("checkbox_filtrar_finalizadas");
const checkboxFiltrar2016 = document.getElementById("checkbox_filtrar_2016");

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
    if(pelicula.fecha > 2016){
        const nodoMayor2016 = document.createElement("p");
        nodoMayor2016.textContent = "Moderna";
        nodoMayor2016.classList.add("pelicula_moderna_item");
        li.appendChild(nodoMayor2016);
    }
    listadoPeliculas.appendChild(li)
}


function filtraPeliculas(){
    const tieneFiltroFinalizadas = checkboxFiltrarFinalizadas.checked;
    const tieneFiltro2016 = checkboxFiltrar2016.checked;
    let peliculasFiltradas = peliculas;
    
    if(tieneFiltroFinalizadas){
        peliculasFiltradas = peliculasFiltradas.filter(pelicula => pelicula.isFinalizada);
    }

    if(tieneFiltro2016){
        peliculasFiltradas = peliculasFiltradas.filter(pelicula => (pelicula.fecha > 2016));
    }

    return peliculasFiltradas;
}

checkboxFiltrarFinalizadas.addEventListener("change", renderizaPeliculas)
checkboxFiltrar2016.addEventListener("change", renderizaPeliculas)


cargarPeliculas(RUTA_PELICULAS);