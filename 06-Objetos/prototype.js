function Persona(nombre = "desconocido", apellido, edad = "desconocido") {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.email = "generic@";
  this.nombreCompleto = this.nombre + " " + this.apellido;
  this.familiaReal = function () {
    if (this.apellido == "prieto") {
      return true;
    } else {
      return false;
    }
  };
}

let padre = new Persona("carlos", "alvarez", 18);
let madre = new Persona("lulu", "caridad", 16);

//prototype se usa para annadir atributos o metodos dinamicamente a los objetos
Persona.prototype.tel = "sin phone";

console.log(padre.tel);
padre.tel = "32285585";
console.log(padre.tel);
console.log(madre.tel);
