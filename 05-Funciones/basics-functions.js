//**concepto d hoisting: llamar a la funcion antes de declararla ya q el hoisting mueve siempre la declaracion al inicio */
miFuncion(3, 2);

//**declaracion de funcion */
function miFuncion(a, b) {
  console.log(a + b);
}

//**llaamda dde la funcion */
miFuncion(5, 7);

//palabra return
function ejReturn(a, b) {
  return a + b;
}

let resultado = ejReturn(5, 5);
console.log(resultado);
