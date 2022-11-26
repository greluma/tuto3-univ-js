let persona = {
  nombre: "manolo",
  apellido: "rodriguez",
  email: "manoro@gmail.com",
  edad: 28,
  hetero: false,
  anno: "2018",
  //crear metodo con get (recomendado)
  get nombreCompleto() {
    return this.nombre + " " + this.apellido;
  },
};

//acceder a un atributo forma clasica (no recomendadas)
// console.log(persona["nombreCompleto"]());
console.log(persona.nombre);

//acceder a un emtodo establecio con get
console.log(persona.nombreCompleto);
