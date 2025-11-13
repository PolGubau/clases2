import { arrayEntradas } from "../entradasApi.js";

export function renderCasilla(casilla, fechaIso){
    const fecha = new Date(fechaIso);
    const anioDeLaFecha = fecha.getFullYear();
    const mesDeLaFecha = fecha.getMonth();
    const diaDeLaFecha = fecha.getDate();

    const entradasDelDia = arrayEntradas.filter(entrada => {
        const fechaEntrada = new Date(entrada.fecha);
        const anioEntrada = fechaEntrada.getFullYear();
        const mesEntrada= fechaEntrada.getMonth();
        const diaEntrada= fechaEntrada.getDate();
        
        const elAnioEsElMismo = anioDeLaFecha === anioEntrada;
        const elMesEsElMismo = mesDeLaFecha === mesEntrada;
        const elDiaEsElMismo = diaDeLaFecha === diaEntrada;

        return elAnioEsElMismo && elMesEsElMismo && elDiaEsElMismo;  
    });
    
    casilla.textContent = diaDeLaFecha;

    const ulNodo = document.createElement("ul");

    entradasDelDia.forEach(entrada => {
        const liNodo = document.createElement("li");
        liNodo.textContent = entrada.texto;
        ulNodo.appendChild(liNodo);
    });
    
    casilla.appendChild(ulNodo);
}