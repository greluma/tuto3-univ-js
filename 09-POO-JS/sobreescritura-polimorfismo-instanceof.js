"use strict";
class Madre {
  constructor(nombre, edad, generoMusical) {
    this._nombre = nombre;
    this._edad = edad;
    this._generoMusical = generoMusical;
  }

  toString() {
    return `Nombre: ${this._nombre}\nEdad: ${this._edad}\nGenero Musical: ${this._generoMusical}`;
  }
}

class Hija extends Madre {
  constructor(nombre, edad, generoMusical, signo) {
    super(nombre, edad, generoMusical);
    this._signo = signo;
  }
  get signo() {
    return this._signo;
  }

  toString() {
    return `${super.toString()} Signo: ${this._signo}`;
  }
}

function determinarTipo(tipo) {
  let respuesta = "";
  if (tipo instanceof Hija) {
    respuesta += `|Instancia de clase Hija. Signo: ${tipo.signo}|`;
  }
  if (tipo instanceof Madre) {
    respuesta += `|Instancia de clase Madre|`;
  }
  return respuesta;
}

let madre1 = new Madre("Lulu", 56, "Pop");
let hija1 = new Hija("Gre", 33, "Rock", "Leo");
console.log(madre1.toString());
console.log(hija1.toString());
console.log(determinarTipo(madre1));
console.log(determinarTipo(hija1));

// console.log(madre1.toString());
// console.log(hija1.toString());
