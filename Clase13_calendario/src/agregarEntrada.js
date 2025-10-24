const dialogElem = document.getElementById("modalAgregarEntrada");


const showBtn = document.getElementById("botonAgregarEntrada");
const closeBtn = document.getElementById("close");
const colorRojoAgregar = document.getElementById("colorRojoAgregar");

let colorSeleccionado = "blanco";


colorRojoAgregar.addEventListener("click", () => {
  colorSeleccionado="rojo"
});

showBtn.addEventListener("click", () => {
  dialogElem.showModal();
});

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});
