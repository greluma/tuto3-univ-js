let mes = 1,
  estacion,
  error = "introduzca numero del 1 al 12";

switch (mes) {
  case 1:
  case 2:
  case 12:
    estacion = "invierno";
    break;
  case 3:
  case 4:
  case 5:
    estacion = "primavera";
    break;
  case 6:
  case 7:
  case 8:
    estacion = "verano";
    break;
  case 9:
  case 10:
  case 11:
    estacion = "otonno";
    break;
  default:
    estacion = error;
}
console.log(estacion);
