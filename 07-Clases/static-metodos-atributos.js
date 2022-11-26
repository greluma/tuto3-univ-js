class Persona {
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

  //**non static atributos: son atributos asociados directamente a los objetos, no a la clase;
  email = "email por defecto";

  //**static atributos: son atributos asociados directamente a la clase, no a los objetos
  static contadorObjetosPersona = 0;

  //**static metodos: son metodos asociados directamente a la clase, no con los objetos
  static saludar() {
    console.log("saludo desde mi primer metodo static");
  }
  static saludar2(persona) {
    console.log("saludos desde el metodo estatico para: " + persona.nombre);
  }

  //**los metodos y los atributos estaticos son heredados por los hijos de la clase y solo pueden acceder a ellos haciendo referencia a la clase
}

let persona1 = new Persona("carlos", "rodriguez");
let persona2 = new Persona("mano", "prieto");

/*persona1.saludar(); //no es posible llamar a un metodo o un atributo estatico desde un objeto */
Persona.saludar();
Persona.saludar2(persona1);
console.log(Persona.contadorObjetosPersona);
console.log(persona1.email);
