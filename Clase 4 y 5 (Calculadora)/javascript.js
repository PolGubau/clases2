// Imports
const numerosId = [
	"num0",
	"num1",
	"num2",
	"num3",
	"num4",
	"num5",
	"num6",
	"num7",
	"num8",
	"num9",
];
const customAlert = document.getElementById("alert")

const simbolosId = ["multiplica", "divide", "suma", "resta"];

const pantalla = document.getElementById("pantalla");

const cerrarAlert = document.getElementById("cerrar-alert")
const alertMessage = document.getElementById("alert-msg")

const igual = document.getElementById("igual");

// Nodos del resumen
const operador1 = document.getElementById("resumen_operador1");
const resumenSimbolo = document.getElementById("resumen_simbolo");
const operador2 = document.getElementById("resumen_operador2");
const resumenResultado = document.getElementById("resumen_resultado");

// Lógica (funciones)

function showError(mensajeDelError){
		alertMessage.textContent = mensajeDelError
	customAlert.classList.remove("d_none");
}
function hideError(){
		customAlert.classList.add("d_none");
}


cerrarAlert.addEventListener("click",hideError)

function startingNumbers() {
	operador1.textContent = "";
	resumenSimbolo.textContent = "+";
	operador2.textContent = "";
	resumenResultado.textContent = 0;
}

// // Este trozo usa cada numero del array de IDs
// numerosId.forEach(numId =>{

//   // Almacena en la variable boton el nodo desde su id
//   const boton = document.getElementById(numId)
//   // a ese nodo le escuchamos el evento de click
//   boton.addEventListener("click", ()=>{

//     // callback (funcion dentro de funcion que hace logica)
//     const num = boton.textContent
//     ponValorEnPantalla(num)
//   })
// })

// Este bucle es lo mismo que el foreach de arriba
// numerosId.forEach(numId =>{

for (const numId of numerosId) {
	const boton = document.getElementById(numId);

	// Esta funcion equivale al callback (()=>{})
	function ponEsteValorEnPantalla() {
		const num = boton.textContent;
		ponValorEnPantalla(num);
	}
	boton.addEventListener("click", ponEsteValorEnPantalla);
}

for (const simboloId of simbolosId) {
	const simbolo = document.getElementById(simboloId);

	function heHechoClickEnUnSimbolo() {
		if (pantalla.value !== "") {
			resumenSimbolo.textContent = simbolo.textContent;
			operador1.textContent = pantalla.value;
			pantalla.value = "";
		} else {
			alert("Tienes que introducir un valor antes");
		}
	}
	simbolo.addEventListener("click", heHechoClickEnUnSimbolo);
}

function heClickadoAlIgual() {
	// 1. se copia los numeros al operador 2
	operador2.textContent = pantalla.value;

	// 2. calcular el resultado

	let resultado = 0;

	switch (resumenSimbolo.textContent) {
		case "+":
			resultado = Number(operador1.textContent)+ Number(operador2.textContent);
			break;
		case "-":
			resultado = operador1.textContent - operador2.textContent;

			break;
		case "*":
			resultado = operador1.textContent * operador2.textContent;

			break;
		case "/":
			resultado = operador1.textContent / operador2.textContent;
			break;

		default:
			alert("Este símbolo no está soportado");
			break;
	}

	resumenResultado.textContent = resultado;

	// 3. vaciar la pantalla

	pantalla.value = "";
}

function clickAlIgualValidado(){

  // casos de error

  if(operador1.textContent === ""){
		showError("Debes introducir la primera cifra")
 		} else if(pantalla.value === ""){
      alert("Debes introducir la segunda cifra");
    } else{
    // en caso ok
    heClickadoAlIgual()
  }
}

igual.addEventListener("click", clickAlIgualValidado);

function ponValorEnPantalla(num) {
	pantalla.value = pantalla.value + num;
}

// Renders
startingNumbers();
