/*
 *LLamadas asincronas con uso de setTimeOut: llama la funcion una sola vez cuando halla pasado el tiempo especificado*/

function callBack() {
  console.log("Saludo luego de 5 segundos");
}

setTimeout(callBack, 5000);
console.log("Otra cosa");

let m = 3;
setTimeout(() => console.log(`Saludo luego de 3 segundos`), 3000);
