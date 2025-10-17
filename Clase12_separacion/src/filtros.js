
const checkbox_filtrar_ingles = document.getElementById("checkbox_filtrar_ingles");
const checkboxFiltrar2016 = document.getElementById("checkbox_filtrar_2016");
const inputFiltrarAnios = document.getElementById("input_filtrar_anios");

export function filtraPeliculas(todasLasPeliculas) {
    const tieneFiltroIngles = checkbox_filtrar_ingles.checked;
    const tieneFiltro2016 = checkboxFiltrar2016.checked;
    let peliculasFiltradas = todasLasPeliculas;

    if (tieneFiltroIngles) {
        peliculasFiltradas = peliculasFiltradas.filter(pelicula => pelicula.original_language === "en");
    }

    if (tieneFiltro2016) {
        peliculasFiltradas = peliculasFiltradas.filter(pelicula => {
            let releaseDate = new Date(pelicula.release_date);
            let year = releaseDate.getFullYear();
            return year >= 2016;
        });
    }

    if (inputFiltrarAnios.value !== "") {
        const valorInputFiltrarAnios = Number(inputFiltrarAnios.value);
        peliculasFiltradas = peliculasFiltradas.filter(pelicula => {
            let releaseDate = new Date(pelicula.release_date);
            let year = releaseDate.getFullYear();
            return year >= valorInputFiltrarAnios;
        });
    }

    return peliculasFiltradas;
}