let miPromesa = new Promise((resolver, rechazar) => {
  let expresion = true;
  if (expresion) {
    resolver("Resolvio Correcto");
  } else {
    rechazar("Se produjo un error");
  }
});

//forma clasica de ejecutar la promesa: then, catch
miPromesa
  .then((valor) => console.log(valor)) //funcion resolver en caso de que se halla resuelto
  .catch((error) => console.log(error)); //funcion rechazar en caso de que no se halla resuelto

//forma simplificada: then, catch dentro del then
miPromesa.then(
  (valor) => console.log(valor),
  (error) => console.log(error)
);
