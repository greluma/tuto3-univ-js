// console.log("script.js");

//**Algoritmos */
let listaPersonas = [];

function crear() {
  let nombreInput = document.getElementById("nombre");
  let apellidoInput = document.getElementById("apellido");
  if (nombreInput.value == "") {
    alert("Introduce Nombre");
  } else if (apellidoInput.value == "") {
    alert("Introduce Apellido");
  } else {
    listaPersonas.push(new Persona(nombreInput.value, apellidoInput.value));
    mostrar();
    nombreInput.value = "";
    apellidoInput.value = "";
  }
}

function mostrar() {
  let lista = document.getElementById("lista");
  lista.innerHTML += `<li>${
    listaPersonas[Persona.contadorPersonas - 1].nombre
  } ${listaPersonas[Persona.contadorPersonas - 1].apellido}</li>`;
  //   console.log(lista.innerHTML);
  //   console.log(Persona.contadorPersonas);
}
