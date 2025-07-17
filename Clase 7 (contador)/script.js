const resta1 = document.getElementById("resta")
const resta5 = document.getElementById("resta5")
const resultado = document.getElementById("resultado")
const suma1 = document.getElementById("suma")
const suma5 = document.getElementById("suma5")


function getResultado() {
  const resultadoCrudo = resultado.textContent
  const resultadoAsNumber = Number(resultadoCrudo)
  return resultadoAsNumber
}

function opera(numeroAOperar, operacion) {
  if (operacion == "resta") {
    resta(numeroAOperar)
  }
  else if(operacion == "suma") {
    suma(numeroAOperar)
  } else {
    alert("Esta operación no existe")
  }
}

function suma(numeroASumar) {
  resultado.textContent = getResultado()+numeroASumar
}
function resta(numeroARestar) {
  // tenemos que usar number() porque el textContext siempre es un texto
    resultado.textContent = getResultado()-numeroARestar
}

// se suele usar on + evento (en inglés) + elemento que lo ha causado
// También se puede usar handle + evento + elemento
// por ejemplo: onHoverNavbar onClickResultado
function onClickResta() {
  opera(1,"resta")
}
function onClickSuma() {
  opera(1,"suma")
}
function onClickResta5() {
  opera(5,"resta")
}
function onClickSuma5() {
  opera(5,"suma")
}


resta1.addEventListener("click", onClickResta)
suma1.addEventListener("click", onClickSuma)
resta5.addEventListener("click", onClickResta5)
suma5.addEventListener("click", onClickSuma5)




