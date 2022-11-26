function miFuncion(a, b) {
  console.log(arguments.length); //para saber la cant de argumentos de una funcion
  return a + b;
}

console.log(miFuncion(2, 3));
console.log(typeof miFuncion);
console.log(miFuncion.toString());
