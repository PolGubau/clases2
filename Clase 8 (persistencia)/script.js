const input = document.getElementById("inputNota");
const botonAnadir = document.getElementById("botonAnadir");
const pizarraNotas = document.getElementById("pizarraNotas");

const notas_llave = "notas"

let notas= JSON.parse(localStorage.getItem(notas_llave)) || []

function agregarNota ()
{
    const textoDeLaNota = input.value;
    if(textoDeLaNota){
        notas.push(textoDeLaNota);
        localStorage.setItem(notas_llave,JSON.stringify(notas))
        input.value="";
        renderizarNotas();
    }
}

function renderizarNotas ()
{
    pizarraNotas.innerHTML="";

    notas.forEach(nota=>{
        const li = document.createElement("li");
        li.textContent = nota;
        pizarraNotas.appendChild(li);
    })
    
}

botonAnadir.addEventListener("click", agregarNota);


renderizarNotas()