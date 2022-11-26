let persona1 = {
  nombre: "manolo",
  apellido: "rodriguez",
  nombreCompleto: function (titulo, tel) {
    return titulo + ": " + this.nombre + " " + this.apellido + ", " + tel;
  },
};
let persona2 = {
  nombre: "legny",
  apellido: "rios",
};

console.log(persona1.nombreCompleto("Ing. Informatico", 52596243));

//**call se usa para llamar los metododos de un objeto externo
//uso de call para llamar a la funcion nombreCompleto de persona1 pero con los atributos de persona2
//los valores se le pasan separados x coma a la funcion call
console.log(persona1.nombreCompleto.call(persona2, "Ing. Quimica", 54660022));
