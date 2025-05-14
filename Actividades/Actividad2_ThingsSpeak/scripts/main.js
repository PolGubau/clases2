const cargarDatos = document.getElementById("cargar-datos");
const cuerpoTabla = document.getElementById("cuerpo-tabla");
const formulario = document.getElementById("form-crear");

const inputs = [
	document.getElementById("co2"),
	document.getElementById("ruido"),
	document.getElementById("luminosidad"),
	document.getElementById("presion"),
	document.getElementById("viento"),
];

function llenarTabla(datos) {
	cuerpoTabla.innerHTML = "";

	// biome-ignore lint/complexity/noForEach: <explanation>
	datos.forEach((dato) => {
		const tr = document.createElement("tr");
		tr.classList.add("table_row_centrada");
		tr.innerHTML = `
      <td>${dato.field1}</td> 
      <td>${dato.field2}</td> 
      <td>${dato.field3}</td> 
      <td>${dato.field4}</td> 
      <td>${dato.field5}</td> 
      `;
		cuerpoTabla.appendChild(tr);
	});
}

async function llenarTablaOnClick() {
	const data = await fetch(API.READ);
	const json = await data.json();
	llenarTabla(json.feeds);
}

cargarDatos.addEventListener("click", llenarTablaOnClick);

function validarCampo(valor) {
	let correcto = true;
	if (valor.value < 0) {
		alert(`El valor del ${valor.id} no puede ser negativo`);
		correcto = false;
	} else if (valor.value === "") {
		alert(`El valor del ${valor.id} no puede estar vacío`);
		correcto = false;
	}
	return correcto;
}
function validarCampos() {
	// biome-ignore lint/complexity/noForEach: <explanation>
	inputs.forEach((input) => {
		correcto = validarCampo(input);
	});

	return correcto;
}

async function onSubmitFormulario(e) {
	e.preventDefault();
	const camposCorrectos = validarCampos();

	if (camposCorrectos) {
		const valores = `&field1=${inputs[0].value}&field2=${inputs[1].value}&field3=${inputs[2].value}&field4=${inputs[3].value}&field5=${inputs[4].value}`;

		const url = API.WRITE + valores;

		const res = await fetch(url);
		const texto = await res.text(); // esto nos da un numero, si es 0 es error

		if (texto === 0) {
			alert("Ha ocurrido un error, prueba de nuevo");
		} else {
			alert("Datos guardados correctamente");
			//
		}
	}
}

formulario.addEventListener("submit", onSubmitFormulario);
