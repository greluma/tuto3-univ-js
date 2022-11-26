//**Necesarios*/
const ERROR = "No se puede agregar";

function menorQue(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}

//**Clase DispositivoEntrada*/
class DispositivoEntrada {
  constructor(tipoEntrada, marca, precio) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
    this._precio = precio;
  }

  get marca() {
    return this._marca;
  }
  set marca(marca) {
    this._marca = marca;
  }
  get tipoEntrada() {
    return this._tipoEntrada;
  }
  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }
  get precio() {
    return this._precio;
  }
  set precio(precio) {
    this._precio = precio;
  }
}

//**Clase Raton*/
class Raton extends DispositivoEntrada {
  static contadorRatones = 0;
  constructor(tipoEntrada, marca, precio) {
    super(tipoEntrada, marca, precio);
    this._idRaton = ++Raton.contadorRatones;
  }
  get idRaton() {
    return this._idRaton;
  }

  toString() {
    return `Tipo Entrada: ${super.tipoEntrada}\nID: ${this._idRaton}\nMarca: ${
      super.marca
    }\nPrecio: ${super.precio}`;
  }
}

//**Clase Teclado*/
class Teclado extends DispositivoEntrada {
  static contadorTeclado = 0;
  constructor(tipoEntrada, marca, precio) {
    super(tipoEntrada, marca, precio);
    this._idTeclado = ++Teclado.contadorTeclado;
  }
  get idTeclado() {
    return this._idTeclado;
  }
  toString() {
    return `Tipo Entrada: ${super.tipoEntrada}\nID: ${
      this._idTeclado
    }\nMarca: ${super.marca}\nPrecio: ${super.precio}`;
  }
}

//**Clase Monitor*/
class Monitor {
  static contadorMonitor = 0;
  constructor(marca, tamanno, precio) {
    this._marca = marca;
    this._tamanno = tamanno;
    this._idMonitor = ++Monitor.contadorMonitor;
    this._precio = precio;
  }

  get idMonitor() {
    return this._idMonitor;
  }

  get marca() {
    return this._marca;
  }

  set marca(marca) {
    this._marca = marca;
  }

  get tamanno() {
    return this._tamanno;
  }

  set tamanno(tamanno) {
    this._tamanno = tamanno;
  }

  get precio() {
    return this._precio;
  }
  set precio(precio) {
    this._precio = precio;
  }

  toString() {
    return `Monitor:\nID: ${this._idMonitor}\nMarca: ${this._marca}\nTamaño: ${this._tamanno}\nPrecio: ${this._precio}`;
  }
}

//**Clase Computadora*/
class Computadora {
  static contadorComputadoras = 0;
  constructor(nombre, monitor, teclado, raton) {
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._precioPc = monitor.precio + teclado.precio + raton.precio;
  }

  get idComputadora() {
    return this._idComputadora;
  }

  get precioPc() {
    return this._precioPc;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }
  get monitor() {
    return this._monitor;
  }

  set monitor(monitor) {
    this._monitor = monitor;
  }
  get teclado() {
    return this._teclado;
  }

  set teclado(teclado) {
    this._teclado = teclado;
  }
  get raton() {
    return this._raton;
  }

  set raton(raton) {
    this._raton = raton;
  }

  toString() {
    return `--------------------\nComputadora ${this._idComputadora}\nNombre: ${this._nombre}\n***{${this._monitor}}\n***{${this._teclado}}\n***{${this._raton}}\nPrecioPC: ${this._precioPc}\n--------------------`;
  }
}

class Orden {
  static contadorOrdenes = 0;
  static get MAX_X_ORD() {
    return 4;
  }
  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._computadoras = [];
  }

  get idOrden() {
    return this._idOrden;
  }
  set idOrden(newId) {
    this._idOrden = newId;
  }
  get listaComputadoras() {
    return this._computadoras;
  }

  precioTotal() {
    let total = 0;
    for (const pc of this._computadoras) {
      total += pc.precioPc;
    }
    return total;
  }

  agregarPC(pc) {
    if (menorQue(this._computadoras.length, Orden.MAX_X_ORD)) {
      this._computadoras.push(pc);
    } else {
      console.log(ERROR);
    }
  }

  mostrarOrden() {
    let texto = "";
    for (const i of this._computadoras) {
      texto += i.toString();
    }
    return `----------\nOrden: ${
      this._idOrden
    }\nPrecio Orden: ${this.precioTotal()}\nComputadoras:\n${texto}\n----------`;
  }
}

//**Pruebas de clases */
//raton
let raton1 = new Raton("Raton", "ISLIP", 20);
// console.log(raton1.toString());
let raton2 = new Raton("Raton", "LG", 30);
// console.log(raton2.toString());

//teclado
let teclado1 = new Teclado("Teclado", "HP", 20);
// console.log(teclado1.toString());
let teclado2 = new Teclado("Teclado", "Samsung", 40);
// console.log(teclado2.toString());

//monitor
let monitor1 = new Monitor("Asus", "17''", 100);
// console.log(monitor1.toString());
let monitor2 = new Monitor("Huawei", "19''", 80);
// console.log(monitor2.toString());

//computadora
let computadora1 = new Computadora("Asus", monitor1, teclado1, raton1);
// console.log(computadora1.toString());
let computadora2 = new Computadora("Armada", monitor2, teclado2, raton2);
// console.log(computadora1.toString());
// console.log(computadora2.toString());

//Cambiando Teclado a la computadora 1
/*computadora1.teclado = teclado2;
console.log(computadora1.toString());*/

//Cambiando monitor a la computadora 1
/*computadora1.monitor = monitor2;
console.log(computadora1.toString());*/

//orden
let orden1 = new Orden();
orden1.agregarPC(computadora1);
orden1.agregarPC(computadora2);
orden1.agregarPC(computadora1);
orden1.agregarPC(computadora2);
// console.log(orden1.precioTotal());
console.log(orden1.mostrarOrden());
