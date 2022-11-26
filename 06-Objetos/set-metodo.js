let persona = {
  nombre: "manolo",
  apellido: "rodriguez",
  email: "manoro@gmail.com",
  edad: 28,
  hetero: false,
  anno: "2018",
  idioma: "es",
  get lang() {
    return this.idioma.toUpperCase();
  },
  set lang(lang) {
    this.idioma = lang.toUpperCase();
  },
  get nombreCompleto() {
    return this.nombre + " " + this.apellido;
  },
};

for (let i in persona) {
  console.log(persona[i]);
}

console.log(persona.nombreCompleto);
console.log(persona.lang);
persona.lang = "eng";
console.log(persona.lang);
console.log(persona.idioma);
