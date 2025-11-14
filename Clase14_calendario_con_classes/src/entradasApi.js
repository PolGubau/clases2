const entradasProvisionales = document.getElementById("entradasProvisionales");

export let arrayEntradas = JSON.parse(localStorage.getItem("entradas-manuales")) || []

/*
DECONSTRUCCIÓN
Útil cuando tienes que tratar con arrays y objetos.
Se crean asi:
const nombres = ["pol","andrés"]
const entrada = {nombre:"hola",fecha:"hoy"}

->
const [nombre1,nombre2]=nombres
const {nombre,fecha}=entrada
*/


export function agregarEntrada(entrada) {
  console.log("Añadiendo nueva entrada")
  arrayEntradas.push(entrada)

  localStorage.setItem("entradas-manuales", JSON.stringify(arrayEntradas))

  //renderEntradasProvisionales()
}


/*
FUNCIÓN PARA CREAR Y MOSTRAR LA LISTA DEBAJO DEL CALENDARIO
export function renderEntradasProvisionales() {
  entradasProvisionales.innerHTML = "";
  arrayEntradas.forEach(entrada => {
    const li = document.createElement("li")
    li.textContent = entrada.texto;
    entradasProvisionales.appendChild(li)
  });
}
*/