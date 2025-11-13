import { renderCasilla } from "./calendario/casilla.js"

const calendar = document.getElementById("calendar")

// Query selector nos permite seleccionar elementos igual que css desde un nodo concreto (puede ser document pero también otros nodos).
// Puedes usar la nodo directo (tbody), pero también .clases y #ids
const tablaContenido = calendar.querySelector("tbody")



export function renderizarCalendario(fecha) {
  const year = fecha.getFullYear()
  const mes = fecha.getMonth()

  const firstDay = new Date(year, mes, 1)
  const diaDeLaSemanaDelPrimerDia = firstDay.getDay()

  // Fórmula que no hace falta que te sepas, que te da el primer dia de la semana que empieza ese mes
  const startingDay = (diaDeLaSemanaDelPrimerDia + 6) % 7;

  const diasEnElMes = new Date(year, mes + 1, 0).getDate()

  const cantidadSemanas = 5
  const cantidadDiasEnSemana = 7

  tablaContenido.innerHTML = "";

  let dia = 1

  // CASO 1 = Dia está en ese mes
  // CASO 2 = Ese día es de otro mes

  for (let i = 0; i < cantidadSemanas; i++) {
    const fila = document.createElement("tr")
    for (let j = 0; j < cantidadDiasEnSemana; j++) {
      const casilla = document.createElement("td")


      const previoAlMes = i === 0 && j < startingDay
      const posteriorAlMes = dia > diasEnElMes

      if (previoAlMes || posteriorAlMes) {
        casilla.classList.add("fuera_mes")
      } else {
        // 
        const fecha = new Date(year, mes, dia).toISOString();
        renderCasilla(casilla, fecha);
        
        dia++;
      }
      fila.appendChild(casilla)
    }
    tablaContenido.appendChild(fila)
  }
}