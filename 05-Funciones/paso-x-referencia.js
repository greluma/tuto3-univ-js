// persona: almacena una referencia a un objeto
const persona = {
  nombre: "Manolo",
  apellido: "Rodriguez",
};

function cambiarValorObjeto(p) {
  p.nombre = "Hachi";
  p.apellido = "Rios";
}

//Paso x Referencia
cambiarValorObjeto(persona);
console.log(persona);
