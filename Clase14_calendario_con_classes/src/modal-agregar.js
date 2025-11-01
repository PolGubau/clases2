const dialogElem = document.getElementById("modalAgregarEntrada");

export function closeModal() {
  dialogElem.close();
}
export function openModal() {
  dialogElem.showModal();
}