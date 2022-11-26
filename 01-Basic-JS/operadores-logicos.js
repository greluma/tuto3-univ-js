//&& and
// Ejemplo &&
let a = -1;
let valMin = 0,
  valMax = 10;
if (a >= valMin && a <= valMax) {
  console.log("Dentro del rango");
} else {
  console.log("Fuera del rango");
}

// || or
// Ejemplo ||
let diaDescanso = false,
  vacaciones = true;

if (diaDescanso || vacaciones) {
  console.log("Puede ir");
} else {
  console.log("No puede ir");
}

// operador ternario
let resulatdo = 1 > 2 ? "verdadero" : "falso";
console.log(resulatdo);

// Ejemplo
let numero = 7;
let ejemploPAr = numero % 2 == 0 ? "es par" : "es impar";
console.log(ejemploPAr);
