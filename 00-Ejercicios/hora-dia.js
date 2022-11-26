let hora = "75",
  error = "Introduzca un formato de hora valida";
if (isNaN(hora)) {
  console.log(error);
} else {
  if (hora >= 0 && hora <= 6) {
    console.log("Durmiendo");
  } else if (hora >= 7 && hora <= 11) {
    console.log("Buenos Dias");
  } else if (hora >= 12 && hora <= 18) {
    console.log("Buenas Tardes");
  } else if (hora >= 19 && hora <= 23) {
    console.log("Buenas Noches");
  } else {
    console.log(error);
  }
}
