
const num1 = 2
const num2 = 5



const string = "texto";
const number = 2;
const boolean = true;


const object = {
  clave1:"valor1",
  clave2:"valor2",
  "clave-3": "valor3"
}

const valorDeLaLlave1 = object.clave1
const valorDeLaLlave3ConCorchete = object["clave-3"]
const valorDeLaLlave2 = object.clave2



const array = ["usuario1", "usuario2"]

const valor1= array[0]


// CONDICIONALES

const login = true
const nombre = "marcos"

const longitudDelNombre = nombre.length()


// validando si te llamas marcos, lucia o otra cosa
if(nombre === "marcos"){
 console.log("Te llamas marcos")
} else if (nombre === "lucia"){
 console.log("Te llamas lucia")
} else{
  console.log("No te llamas marcos")
}

// comprobar muchos nombres
switch (nombre) {
  case "marcos":
     console.log("Te llamas marcos")
    break;
  case "lucia":
     console.log("Te llamas marcos")
    break;
  case "eduardo":
     console.log("Te llamas marcos")
    break;
  default:
      console.log("No te llamas marcos")
    break;
}




// BUCLES


// FOR

const usuarios = ["user1","user2","user3"]

for (let index = 0; index < usuarios.length(); index++) {
  console.log(usuarios[index])
}

// recorriendo arrays 

// usuarios.forEach(user => {
//   console.log(user)
// });

const nums = [1,2,3,4,5]

// const numsMultiplados = []

// for (const num of nums){
//      const numeroMultiplicado = user * 2
//      console.log(numeroMultiplicado)
//      numsMultiplados.push(numeroMultiplicado)
// }

// ejemplo de map
const numsMultiplados = nums.map((num)=> num*2)
const users =[{name:"juan",age:16},{name:"paula",age:35}]
const nombresDeUsuarios = users.map(user=>user.name)



// WHILE

let isRunning = true 
while (isRunning) {
  console.log("se ha repetido")
  isRunning=false
}