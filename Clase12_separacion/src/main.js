import { constantes } from "./constants.js"
import { renderizaPeliculas } from "./renderizar.js";

const checkbox_filtrar_ingles = document.getElementById("checkbox_filtrar_ingles");
const checkboxFiltrar2016 = document.getElementById("checkbox_filtrar_2016");
const formularioFiltroMinimoAnios = document.getElementById("formulario_filtro_minimo_anios");

let peliculas = [];


function main(){
    cargarPeliculas(constantes.ruta_peliculas).then(peliculasCargadas => {
        renderizaPeliculas(peliculasCargadas);
        peliculas = peliculasCargadas;
    });
}


function triggerRenderizaPeliculas(){
    renderizaPeliculas(peliculas);
}


checkbox_filtrar_ingles.addEventListener("change", triggerRenderizaPeliculas)
checkboxFiltrar2016.addEventListener("change", triggerRenderizaPeliculas)
formularioFiltroMinimoAnios.addEventListener("submit", function (event) {
    event.preventDefault();
    triggerRenderizaPeliculas();
});


main();