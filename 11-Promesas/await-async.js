//**await: espera el resultado de la promesa, sustituye la llamada (al final)*/
//! await solo se puede usar dentro de una promesa declarada con async

async function funcionPromesaAsyncAwait() {
  let miPromesa = new Promise((resolver) => {
    resolver("promesa con await");
  });
  console.log(await miPromesa);
}

funcionPromesaAsyncAwait();
