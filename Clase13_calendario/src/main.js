import { guardarEntrada } from "./agregarEntradaFormulario.js"
import { renderEntradasProvisionales } from "./entradasApi.js";
import { cargarColores } from "./cargarColores.js"
import { colors } from "./constants.js"
import { closeModal, openModal } from "./modal-agregar.js";
const agregarForm = document.getElementById("agregarForm");




const showBtn = document.getElementById("botonAgregarEntrada");
const closeBtn = document.getElementById("close");




showBtn.addEventListener("click", () => {
  openModal()
});

closeBtn.addEventListener("click", () => {
  closeModal()
});


agregarForm.addEventListener("submit", (e) => {
  guardarEntrada(e)
  closeModal()
})

// Funciones que se ejecutan al cargar directamente
cargarColores(colors)
renderEntradasProvisionales()