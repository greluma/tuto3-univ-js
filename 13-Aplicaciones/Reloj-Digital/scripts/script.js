/**
 ** Variables
 */
let spanH = document.getElementById("spanH");
let spanF = document.getElementById("spanF");
let relojContainer = document.getElementById("reloj-container");
let divReloj = document.querySelectorAll("#reloj-container div");
const dias = ["Dom", "Lun", "Mar", "Mier", "Jue", "Vier", "Sab"];
const mes = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sept",
  "Oct",
  "Nov",
  "Dic",
];

/**
 ** Funciones
 */
const cambioBorde = (tamanno) => {
  for (const iterator of divReloj) {
    iterator.style.border = `white solid ${tamanno}px`;
  }
};

let cont = 0;
let llamadaReloj = () => {
  let reloj = new Date();
  let foramtoHora = `${reloj.getHours()}:${reloj.getMinutes()}:${reloj.getSeconds()}`;
  let foramtoFecha = `${dias[reloj.getDay()]}, ${reloj.getDate()} ${
    mes[reloj.getMonth()]
  } ${reloj.getFullYear()} `;
  spanH.innerHTML = foramtoHora;
  spanF.innerHTML = foramtoFecha;
  if (cont == 0) {
    cont = 1;
    relojContainer.style.transform = "scale(1.1)";
    cambioBorde(6);
  } else {
    cont = 0;
    relojContainer.style.transform = "scale(1)";
    cambioBorde(3);
  }
};

/**
 ** Llamada a la Funcion Principal
 */
setInterval(llamadaReloj, 1000);
