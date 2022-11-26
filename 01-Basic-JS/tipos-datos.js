// **Tipos de datos js
// tipo String
var nombre = "carlos";
console.log(typeof nombre);

// cambiando tipo de dato de variable
nombre = 10;
console.log(nombre);
console.log(typeof nombre);

// numerico
var edad = 18;
console.log(edad);

// boolean
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

// funcion
function miFuncion() {}
console.log(typeof miFuncion);

// simbolo(symbol)
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

// objetos
var objeto = {
  nombre: "manolo",
  apellido: "rodriguez",
  telefono: "52596243",
};
console.log(objeto);
console.log(typeof objeto);

//clase
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

console.log(Persona);
console.log(typeof Persona);

//indefinido
var x;
console.log(x);
console.log(typeof x);
x = undefined;
console.log(x);

//null = ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);

// arreglos
var autos = ["bmw", "audi", "volvo"];
console.log(autos);
console.log(typeof autos);

//candenas vacias
var z = "";
console.log(z);
console.log(typeof z);
