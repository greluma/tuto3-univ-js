// console.log("persona.js");

//**Calse Persona
class Persona {
  static contadorPersonas = 0;
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._idPersona = ++Persona.contadorPersonas;
  }
  get idPersona() {
    return this._idPersona;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }

  toString() {
    return `Persona ${this._idPersona}: ${this._nombre} ${this._apellido}`;
  }
}
