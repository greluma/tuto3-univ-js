let x = 10; //Tipos Primitivos: no tienen propiedades ni metodos

function cambiarValor(a) {
  a = 20;
  return a;
}

// Paso por Valor
console.log(cambiarValor(x));
console.log(x);
