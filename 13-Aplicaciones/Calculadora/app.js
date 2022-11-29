let operandoA = document.getElementById("operandoA");
let operandoB = document.getElementById("operandoB");
let resultado = document.getElementById("resultado");

function sumar() {
  if (operandoA.value == "" || operandoB.value == "") {
    resultado.innerHTML = "ERROR";
  } else {
    resultado.innerHTML = parseInt(operandoA.value) + parseInt(operandoB.value);
  }
}
