//**Funcion constructor de objetos tipo persona
///**es recomendable q el nombre de la funcion comience con mayuscula */
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

let manolo = new Persona("manolo", "prieto", 18);
let ulada = new Persona("ulada", "sosa", 19);
console.log(manolo);
console.log(manolo.nombreCompleto);
console.log(ulada.nombreCompleto);
console.log(manolo.familiaReal());
console.log(ulada.familiaReal());
