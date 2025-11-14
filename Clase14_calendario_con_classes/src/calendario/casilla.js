import { arrayEntradas } from "../entradasApi.js";

function getDayMonthYearFromIso(fechaIso){
    const fecha = new Date(fechaIso);
    const anio = fecha.getFullYear();
    const mes = fecha.getMonth();
    const dia = fecha.getDate();

    return {anio, mes, dia}
}

function compararFechas (fecha1Iso, fecha2Iso){
    const fecha1 = getDayMonthYearFromIso(fecha1Iso);
    const fecha2 = getDayMonthYearFromIso(fecha2Iso);
    
    const elAnioEsElMismo = fecha1.anio === fecha2.anio;
    const elMesEsElMismo = fecha1.mes === fecha2.mes;
    const elDiaEsElMismo = fecha1.dia === fecha2.dia;
    
    return elAnioEsElMismo && elMesEsElMismo && elDiaEsElMismo;  
}

export function renderCasilla(casilla, fechaIso){
    
    //const fecha = getDayMonthYearFromIso(fechaIso);
    //La siguiente sentencia es equivalente a la anterior. Se llama Deconstrucción.
    const {dia} = getDayMonthYearFromIso(fechaIso);
    
    const entradasDelDia = arrayEntradas.filter(entrada => compararFechas(fechaIso, entrada.fecha));
    

    
    const headerCasilla = document.createElement("header");
    const diaDeLaCasilla = document.createElement("h2");
    const botonAnadirDeLaCasilla = document.createElement("button");
    
        diaDeLaCasilla.textContent = dia;
        botonAnadirDeLaCasilla.textContent = "+"
        
        headerCasilla.appendChild(diaDeLaCasilla);
        headerCasilla.appendChild(botonAnadirDeLaCasilla);
        
        casilla.appendChild(headerCasilla);
    

    const ulNodo = document.createElement("ul");

    entradasDelDia.forEach(entrada => {
        const liNodo = document.createElement("li");
        liNodo.textContent = entrada.texto;
        liNodo.style.color = entrada.color || "#000000";
        ulNodo.appendChild(liNodo);
    });
    
    casilla.appendChild(ulNodo);
}