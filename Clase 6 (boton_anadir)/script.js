const input = document.getElementById("inputNota");
const botonAnadir = document.getElementById("botonAnadir");
const pizarraNotas = document.getElementById("pizarraNotas");
let notas=[];



function agregarNota ()
{
    const textoDeLaNota = input.value;
    if(textoDeLaNota){
        notas.push(textoDeLaNota);
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

botonAnadir.addEventListener("click",agregarNota);