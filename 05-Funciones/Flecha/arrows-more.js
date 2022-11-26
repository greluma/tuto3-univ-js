"use strict";
/*const funcionFlecha = () => {
  console.log("Saludos desde mi funcion Flecha");
};*/

// const funcionFlecha = () => console.log("Saludos desde mi funcion Flecha");

// funcionFlecha();

/*const saludar = () => {
  return "Saludos desde mi funcion Flecha";
};*/

const saludar = () => "Saludos desde mi funcion Flecha";
console.log(saludar());

//**Variacion para devolver un objeto
const regresaObjeto = () => ({ nombre: "Juan", apellido: "Lara" });
console.log(regresaObjeto());

//**con parametro */
// const conParametro = (mensaje) => mensaje;
const conParametro = (mensaje) => mensaje;
console.log(conParametro("Luna es bella"));
