//convencion: los nombres de calses comienzan con mayusculas
class Persona {
  constructor(nombre, apellido) {
    /*para comodidad a la hora de crear los emtodos set y get
    se recomienda q los nombres de los atributos comiencen con _ */
    this._nombre = nombre;
    this._apellido = apellido;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
}
let persona1 = new Persona("manolo", "rodriguez");
console.log(Persona);

let persona2 = new Persona("hachi", "rodriguez");
console.log(persona2);

console.log(persona2.nombre);
persona2.nombre = "juan";
console.log(persona2.nombre);
