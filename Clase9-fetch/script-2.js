

const userList = document.getElementById("users-list")
const test = document.getElementById("test")



fetch("./prueba.json")
  .then(data => data.json())
  .then(users => {
    users.forEach(user => {
      // crear el li
      const li = document.createElement("li")
      // ponemos la data
      li.textContent = user.nombre
      
      // añadirlo a la lista
      userList.appendChild(li)
    });
  })

