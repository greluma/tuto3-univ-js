//**Utilizadas para llamadas asincronas (rompiendo el flujo de linea a linea: flojo sincrono) */
//mi ejemplo
function funcion1() {
  return "|mi funcion 1|";
}
function funcion2() {
  return "|mi funcion 2|";
}

function funcion3(a, b) {
  return `${a} ${b}`;
}

console.log(funcion1());
console.log(funcion2());
console.log(funcion3(funcion1(), funcion2()));

//tuto ejemplo
function imprimir(mensaje) {
  console.log(mensaje);
}

function sumar(a, b, callback) {
  let res = a + b;
  callback(`El resultado es ${res}`);
}

sumar(2, 3, imprimir);
