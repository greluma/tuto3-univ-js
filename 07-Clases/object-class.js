class Persona {
  //**static atributos: son atributos asociados directamente a la clase, no a los objetos
  static contadorObjetosPersona = 0;
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    Persona.contadorObjetosPersona++;
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

  //**sobreescribiendo el metodo toString de la clase padre Object
  toString() {
    return this.mostrarDatos();
  }
  //**static metodos: son metodos asociados directamente a la clase, no con los objetos
  static saludar() {
    console.log("saludo desde mi primer metodo static");
  }
  static saludar2(persona) {
    console.log("saludos desde el metodo estatico para: " + persona.nombre);
  }
}

let persona1 = new Persona("carlos", "rodriguez");
let persona2 = new Persona("mano", "prieto");
console.log(persona1.mostrarDatos());
console.log(persona1.toString());
console.log(persona1.nombre);

/*persona1.saludar(); //no es posible llamar un metodo estatico desde un objeto */
Persona.saludar();
Persona.saludar2(persona1);
console.log(Persona.contadorObjetosPersona);
