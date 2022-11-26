//estableciendo parametros por defecto
let sumatoria = function (a = 4, b = 5) {
  //para conocer el valor de los argumentos
  /*for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }*/
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  return a + b + arguments[2];
};

console.log(sumatoria(1, 4, 2));
