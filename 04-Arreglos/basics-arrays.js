//**forma clasica: ya no tan recomendada actualmente
let autos = new Array("BMW", "Mercedes Benz", "Bolvo");

//**forma moderna
const cars = ["Ferrari", "Porshe", "Laborguini"];
// console.log(cars);

//**acceder a un indice */
console.log(cars[2]);

//**recorrer arreglo */
for (let index = 0; index < cars.length; index++) {
  console.log(index + ":" + cars[index]);
}

//**modif element de un arreglo */
cars[1] = "BMW";
console.log(cars);

//**annadir elementos al arreglo*/
cars.push("Audi");
console.log(cars);

console.log(cars.length);
cars[cars.length] = "Cadillac";
console.log(cars);

cars[cars.length + 1] = "Lada";
console.log(cars);

console.log(cars[cars.length - 2]);

//**para saber si es un arreglo */
console.log(typeof cars); // no sirve, no dice si es un arreglo o no
//las siguientes son las q sirven
console.log(Array.isArray(cars));
console.log(cars instanceof Array);
