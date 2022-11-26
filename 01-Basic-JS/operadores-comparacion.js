let a = 3,
  b = 2,
  c = "3";

//igual
let result = a == c; //se revisa sin importar el tipo de datos
console.log(result);

//igual estricto
result = a === c; //se revisa importando el tipo de datos
console.log(result);

//distinto
result = a != c;
console.log(result);

//distinto estricto
result = a !== c;
console.log(result);

// < menor q
result = a < b;
console.log(result);

// <= menor o igual q
result = a <= b;
console.log(result);

// > mayor q
result = a > b;
console.log(result);

// >= mayoro igual q
result = a >= b;
console.log(result);
