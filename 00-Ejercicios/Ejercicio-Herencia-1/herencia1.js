//**Persona */
class Persona {
  //static atributos y metodos
  static contadorPersonas = 0;
  static get MAX_OBJ() {
    return 5;
  }
  constructor(nombre, apellido, edad) {
    if (Persona.contadorPersonas < Persona.MAX_OBJ) {
      this._idPersona = ++Persona.contadorPersonas;
    } else {
      console.log("Se ha superado el # Maximo de Personas: " + Persona.MAX_OBJ);
    }
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }

  toString() {
    return `La persona con
    Id de Persona: ${this._idPersona} 
    Nombre Completo: ${this._nombre} ${this._apellido} 
    Edad: ${this._edad}`;
  }

  ejemplo = "Ejemplo";

  //getters and setters
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
  get edad() {
    return this._edad;
  }
  set edad(edad) {
    this._edad = edad;
  }
}

//**Empleado */
class Empleado extends Persona {
  static contadorEmpleados = 0;
  static get MAX_OBJ() {
    return 2;
  }
  constructor(nombre, apellido, edad, sueldo) {
    super(nombre, apellido, edad);
    if (Empleado.contadorEmpleados < Empleado.MAX_OBJ) {
      this._idEmpleado = ++Empleado.contadorEmpleados;
    } else {
      console.log(
        "Se ha superado el # Maximo de Empleados: " + Empleado.MAX_OBJ
      );
    }
    this._sueldo = sueldo;
  }

  toString() {
    return `${super.toString()}
    Id Empleado: ${this._idEmpleado}, 
    Sueldo: ${this._sueldo}`;
  }

  //getters and setters
  get idEmpleado() {
    return this._idEmpleado;
  }

  get sueldo() {
    return this._sueldo;
  }
  set sueldo(sueldo) {
    this._nombre = sueldo;
  }
}

//**Cliente */
class Cliente extends Persona {
  static contadorCliente = 0;
  static get MAX_OBJ() {
    return 2;
  }
  constructor(nombre, apellido, edad, fechaRegistro) {
    super(nombre, apellido, edad);
    this._fechaRegistro = fechaRegistro;
    if (Cliente.contadorCliente < Cliente.MAX_OBJ) {
      this._idCliente = ++Cliente.contadorCliente;
    } else {
      console.log("Se ha superado el # Maximo de Clientes: " + Cliente.MAX_OBJ);
    }
  }

  toString() {
    return `${super.toString()}
    Id Cliente: ${this._idCliente}, 
    Fecha Registro: ${this._fechaRegistro}`;
  }

  //getters and setters
  get idCliente() {
    return this._idCliente;
  }

  get fechaRegistro() {
    return this._fechaRegistro;
  }
  set fechaRegistro(fechaRegistro) {
    this._fechaRegistro = fechaRegistro;
  }
}

//**Pruebas de clases
//Pruebas clase Persona
let persona1 = new Persona("Lulu", "Prieto", 56);
console.log(persona1.toString());

//Pruebas clase Empleado
let empleado1 = new Empleado("Gato", "Perez", 23, 2000);
console.log(empleado1.toString());
let empleado2 = new Empleado("Gato", "Perez", 23, 2000);
console.log(empleado2.toString());

//Pruebas clase Cliente
let cliente1 = new Cliente("Leg", "Rios", 23, new Date().getFullYear());
console.log(cliente1.toString());
let cliente2 = new Cliente("Pacho", "Prieto", 54, new Date().getFullYear());
console.log(cliente2.toString());

//**Contadores */
//conatador Empleado
console.log(Empleado.contadorEmpleados);

//contador Cliente
console.log(Cliente.contadorCliente);

//contador personas
console.log(Persona.contadorPersonas);
