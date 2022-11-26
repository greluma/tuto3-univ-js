//**Producto
class Producto {
  static contadorProductos = 0;
  constructor(nombre, precio) {
    this._nombre = nombre;
    this._precio = precio;
    this._idProducto = ++Producto.contadorProductos;
  }

  //**getters and setters*/
  get idProducto() {
    return this._idProducto;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get precio() {
    return this._precio;
  }
  set precio(precio) {
    this._precio = precio;
  }

  toSring() {
    return `
    Id: ${this._idProducto}
    Nombre: ${this._nombre}
    Precio: $${this._precio}`;
  }
}

//**Orden
class Orden {
  static contadorOrdenes = 0;
  static get MAX_PRODUCTOS() {
    return 5;
  }
  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._productos = [];
    this._contProducAgreg = 0;
  }

  get idOrden() {
    return this._idOrden;
  }

  get contProducAgreg() {
    return this._contProducAgreg;
  }

  agregarProducto(producto) {
    if (this._productos.length < Orden.MAX_PRODUCTOS) {
      this._productos.push(producto);
      ++this._contProducAgreg;
      //otra forma
      // this._productos[this._contProducAgreg++] = producto;
    } else {
      console.log("No se pueden agregar mas productos");
    }
  }

  calcularTotal() {
    let totalVenta = 0;
    for (const producto of this._productos) {
      totalVenta += producto.precio;
      console.log(producto.nombre);
    }
    return totalVenta;
  }

  mostrarOrden() {
    let primeraParte = `Numero de Orden ${this._idOrden}:`;
    let segundaParte = "";
    let terceraParte = `\nCantidad de productos: ${
      this._contProducAgreg
    }\nPrecio Total: $${this.calcularTotal()}`;
    for (const producto of this._productos) {
      segundaParte += `
      Producto: ${producto.nombre}, Precio: $${producto.precio}`;
    }
    return primeraParte + segundaParte + terceraParte;
  }
}

//**Prueba de clases */
//Producto
let producto1 = new Producto("jabon", 2);
console.log(producto1.toSring());
let producto2 = new Producto("toalla", 10);
console.log(producto2.toSring());
let producto3 = new Producto("pilas", 5);
console.log(producto3.toSring());

let orden1 = new Orden();
console.log(orden1.idOrden);
console.log(orden1.contProducAgreg);
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto3);
console.log(orden1.contProducAgreg);
console.log(orden1.calcularTotal());
console.log(orden1.mostrarOrden());

let orden2 = new Orden();
console.log(orden2.idOrden);
console.log(orden2.contProducAgreg);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
console.log(orden2.contProducAgreg);
console.log(orden2.calcularTotal());
console.log(orden2.mostrarOrden());
