const listaColores = document.getElementById("listaColores")

export function cargarColores(colors) {
  colors.forEach(color => {
    const option = document.createElement("option")
    option.value = color.value;
    option.textContent = color.label;
    listaColores.appendChild(option)
  })
}
 

