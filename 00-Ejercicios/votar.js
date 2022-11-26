let edad = Number("18");
votar = edad >= 18 ? "Puede Votar" : "No vota";
console.log(votar);

// isNan (not a number) function
let dia = "13z";
console.log(isNaN(dia));

//ejemplo complejo
edad = "19";
if (isNaN(edad)) {
  console.log("introduzca un numero valido");
} else {
  votar = edad >= 18 ? "Puede Votar" : "No vota";
  console.log(votar);
}
