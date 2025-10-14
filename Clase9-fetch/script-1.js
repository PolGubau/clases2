



// function ensenaData(data) {
//   console.log(data)
// }
// fetch("prueba.json").then(ensenaData)

// // Es lo mismo

// fetch("prueba.json").then(data => {
//   console.log(data)
// })

// Vamos a coger un JSON externo

//fetch busca data externa, pero no sabe qué tipo es, como es asíncrono deberemos esperarlo con el .then()

fetch("./prueba.json")

  // esperamos al fetch y transformamos a json, también debemos esperarlo
  .then(data => data.json())

  // ahora ya tenemos el json y podemos hacer lo que queramos
  .then(json => console.log(json))


 