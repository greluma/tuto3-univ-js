let persona1 = {
  nombre: "manolo",
  apellido: "rodriguez",
  nombreCompleto: function (tit, tel) {
    return tit + " " + this.nombre + " " + this.apellido + ", " + tel;
  },
};
let persona2 = {
  nombre: "legny",
  apellido: "rios",
};

console.log(persona1.nombreCompleto("Ing. Inf", 52596243));

//**apply se usa para llamar los metododos de un objeto externo
//uso de apply para llamar a la funcion nombreCompleto de persona1 pero con los atributos de persona2
//los valores se le pasan a la funcion apply dentro de un arreglo
let arreglo = ["Ing. Quimica", 54660022];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));
