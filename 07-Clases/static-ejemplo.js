class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    if (Persona.contadorPersonas + 1 < Persona.MAX_OBJ) {
      this._idPersona = ++Persona.contadorPersonas;
    } else {
      console.log("se ha sueprado el maximo de personas permitidas");
    }
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
  get idPersona() {
    return this._idPersona;
  }
  set idPersona(idPersona) {
    this._idPersona = idPersona;
  }

  claseReal() {
    const respuesta = " Es de clase alta: ";
    if (this._apellido == "rodriguez") {
      return respuesta + true;
    } else {
      return respuesta + false;
    }
  }
  mostrarDatos() {
    return (
      this._nombre + "/ " + this._apellido + "/ " + this.claseReal() + "/ "
    );
  }
  static contadorPersonas = 0;

  //constante estatica
  static get MAX_OBJ() {
    return 5;
  }
}

let persona1 = new Persona("carlos", "rodriguez");
let persona2 = new Persona("mano", "prieto");

let persona3 = new Persona("mano", "prieto");
let persona4 = new Persona("mano", "prieto");
let persona5 = new Persona("mano", "prieto");

console.log(Persona.contadorPersonas);
console.log(persona1.idPersona);
console.log(persona2.idPersona);
console.log(persona3.idPersona);
console.log(persona4.idPersona);
console.log(persona5.idPersona);

console.log(Persona.MAX_OBJ);
