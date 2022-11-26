"use strict";
let num = -1;

try {
  if (isNaN(num)) throw "No es un #";
  else if (num === "") throw "Cadena vacia";
  else if (num >= 0) throw "Valor Positivo";
  else if (num < 0) throw "Valor Negativo";
} catch (error) {
  console.log(error);
} finally {
  console.log("Termina revision de errores");
}
