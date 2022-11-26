"use strict";
//** Error sin procesar
// y = 10;

//** Error procesado (envuelto en bloque try catch)
try {
  //**throw lanza un error
  //throw "Mi error personalizado";

  y = 10;
} catch (error) {
  console.log(error);
  //**los errores tienen 2 partes: name , message
  console.log(error.name);
  console.log(error.message);
} finally {
  //**finally se ejecuta siempre */
  console.log("Termina la revision de errores");
}

console.log("Continuamos...");
