// Lógica de llenar el formulario de agregar
import { agregarEntrada } from "./entradasApi.js"

const inputFechaAgregarEntrada = document.getElementById("inputFechaAgregarEntrada");
const inputTextoAgregarEntrada = document.getElementById("inputTextoAgregarEntrada");
const inputColorAgregarEntrada = document.getElementById("inputColorAgregarEntrada");

const agregarForm = document.getElementById("agregarForm");

export function guardarEntrada(e) {
  e.preventDefault()
  const texto = inputTextoAgregarEntrada.value;
  const color = inputColorAgregarEntrada.value;
  const fecha = inputFechaAgregarEntrada.value;

  const entrada = { texto, color, fecha }
  agregarEntrada(entrada)
  agregarForm.reset()
}