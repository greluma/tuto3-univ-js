let persona = {
  nombre: "manolo",
  apellido: "rodriguez",
  email: "manoro@gmail.com",
  edad: 28,
  hetero: false,
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
  anno: "2018",
};

//**eliminando aributos del objeto
delete persona.anno;
console.log(persona);

//**otras formas de imprimir un objeto
//concatenando atribuatos
console.log(persona.nombre + " " + persona.apellido);
//for in
for (nombrePropiedad in persona) {
  console.log(persona[nombrePropiedad]);
}
//otra
let personaArray = Object.values(persona);
console.log(personaArray);
//otra
let personaString = JSON.stringify(persona);
console.log(personaString);
