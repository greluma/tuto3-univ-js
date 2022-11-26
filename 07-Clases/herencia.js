class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
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
}

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido); //llamar al constructor de la clase padre
    this._departamento = departamento;
  }
  get departamento() {
    return this._departamento;
  }
  set departamento(departamento) {
    this._departamento = departamento;
  }
  //**Sobreeescritura concepto */
  //sobreescribiendo el metodo mostrarDatos de la clase padre(Persona)
  mostrarDatos() {
    return super.mostrarDatos() + this._departamento + "/ ";
  }
}

let empleado1 = new Empleado("carlos", "rodriguez", "contabilidad");
console.log(empleado1);
console.log(empleado1.claseReal());
console.log(empleado1.mostrarDatos());
