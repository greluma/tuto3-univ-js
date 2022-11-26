async function miFuncion() {
  console.log("Inicio Funcion");
  let miPromesa = new Promise((resolver) => {
    setTimeout(() => resolver("promesa con await y timeOut"), 3000);
  });
  console.log(await miPromesa);
  console.log("Fin Funcion");
}

miFuncion();
