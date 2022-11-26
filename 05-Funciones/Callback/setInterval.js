/*
 *LLamadas asincronas con uso de setTimeOut: llama la funcion cada vez q halla pasado el tiempo especificado*/

//tuto ejemplo
const reloj = () => {
  let fecha = new Date();
  console.log(
    `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
  );
};

setInterval(reloj, 1000);

//mi ejemplo
/*let cont = 0;
function mensaje() {
  if (cont <= 5) {
    cont++;
    console.log(`Mensaje 5 seg. #: ${cont}`);
  } else {
    cont++;
    console.log(cont);
  }
}
setInterval(mensaje, 1000);*/
