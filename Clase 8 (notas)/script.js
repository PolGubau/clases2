const campoNotas = document.getElementById("campoNotas");
const formulario = document.getElementById("formulario");
const listaDeNotas = document.getElementById("listaDeNotas");

let notas = ["Llamar a pepe","revision ITV"];

function anadirNota(){
    if(campoNotas.value == ""){
        alert("Error, debes introducir al menos una nota");
        return
    }
        
    notas.push(campoNotas.value);  
}

function vaciarInput() {
        campoNotas.value = "";
}

function render(){ //Funcion para mostrar las notas en el HTML
    
    listaDeNotas.innerHTML = "";
    
    notas.forEach(nota => {
        const li = document.createElement("li");
        li.textContent = nota;
        listaDeNotas.appendChild(li);
    })
}

function handleClick (event){ //También se puede llamar la función con el nombre onCLick
    event.preventDefault(); //Evita que actúe por defecto refrescando la página y esto ocurre porque estamos escuchando el formulario.
    anadirNota();
    vaciarInput();
    render();
}

formulario.addEventListener("submit", handleClick);

render();