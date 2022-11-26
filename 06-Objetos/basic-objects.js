//**creando un objeto
let persona = {
  //**creando atributos o propiedades del objeto persona
  nombre: "manolo",
  apellido: "rodriguez",
  email: "manoro@gmail.com",
  edad: 28,
  hetero: false,
  //**creando metodos o funciones del objeto persona
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
  anno: "2018",
};

//**annadiendo propiedades al objeto persona
persona.direccion = "jaime 12";
console.log(persona.direccion);

//**accediendo a un atributo del objeto persona
persona.nombre = "ulada";

//**accediendo a un metodo de el obejto persona
console.log(persona.nombreCompleto());

//**otra forma de crear objetos
let carro = new Object();
(carro.marca = "Audi"), (carro.anno = 2018);
console.log(carro.marca);
console.log(carro.anno);

//**otras formas de acceder a las propiedades
console.log(carro["marca"]);

//**for in para recorrer todas las propiedades
//el basico
for (let nombrePropiedad in persona) {
  console.log(nombrePropiedad);
  console.log(persona[nombrePropiedad]);
}

//el q construye visual estudio
for (const nombrePropiedad in persona) {
  if (Object.hasOwnProperty.call(persona, nombrePropiedad)) {
    const element = persona[nombrePropiedad];
    console.log(nombrePropiedad);
    console.log(element);
  }
}
