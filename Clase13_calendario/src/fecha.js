import { renderizarCalendario } from "./calendario.js";

const mes = document.getElementById("mes")
const anio = document.getElementById("anio")


const mesAnteriorNodo = document.getElementById("mesAnterior");

const mesSiguienteNodo = document.getElementById("mesSiguiente");

let fechaHoy = new Date() // fecha actual sin formato


// Formateadores, les pasas un idioma y un formato, luego se aplica a las fechas
const formatoMes = new Intl.DateTimeFormat("es-ES", {
  month: "long"
})
const formatoAnio = new Intl.DateTimeFormat("es-ES", {
  year: "numeric"
})


function renderizarFecha() {
  const mesFormateado = formatoMes.format(fechaHoy)
  const anioFormateado = formatoAnio.format(fechaHoy)
  mes.textContent = mesFormateado
  anio.textContent = anioFormateado

  renderizarCalendario(fechaHoy)
}

function mesSiguiente() {
  fechaHoy.setMonth(fechaHoy.getMonth() + 1);
  renderizarFecha()

}

function mesAnterior() {
  fechaHoy.setMonth(fechaHoy.getMonth() - 1);
  renderizarFecha()
}

mesAnteriorNodo.addEventListener("click", mesAnterior)
mesSiguienteNodo.addEventListener("click", mesSiguiente)

renderizarFecha();