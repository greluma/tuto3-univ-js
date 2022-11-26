//**async: indica que una funcion va a regresar una promesa
//!Hace la promesa mucho mas facil de usar,  te quita lo q no entendias mongolico

async function mifuncionConPromesa() {
  return "saludos con promesa y async";
}

//llamada a la promesa
mifuncionConPromesa().then((valor) => console.log(valor));
