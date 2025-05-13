const cargarDatos = document.getElementById("cargar-datos");
const cuerpoTabla = document.getElementById("cuerpo-tabla");

function llenarTabla(datos) {
	// biome-ignore lint/complexity/noForEach: <explanation>
	datos.forEach((dato) => {
		const tr = document.createElement("tr");

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
	const data = await fetch(
		"https://api.thingspeak.com/channels/2959181/feeds.json?api_key=WNINQHWETFWU00BF",
	);
	const json = await data.json();

	llenarTabla(json.feeds);
}

cargarDatos.addEventListener("click", llenarTablaOnClick);


