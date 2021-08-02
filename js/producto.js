//agrupamos las posibles elecciones del usuario con clase
class Producto {
  constructor(test, localidad, precio) {
    this.test = test;
    this.localidad = localidad;
    this.precio = parseFloat(precio);
  }
  suma() {
    this.precio = this.precio + adicionalGba;
  }
}
//guardamos en un array de objetos las distintas combinaciones de los productos que puede seleccionar el usuario
//primero almacenamos los test en CABA
const productosCABA = [];
productosCABA.push(new Producto("PCR", "CABA", costoPcr));
productosCABA.push(new Producto("Anticuerpos", "CABA", costoAnticuerpos));
productosCABA.push(new Producto("Antigenos", "CABA", costoAntigenos));

//luego almacenamos los test en GBA
const productosGBA = [];
productosGBA.push(new Producto("PCR", "GBA", suma(costoPcr, adicionalGba)));
productosGBA.push(
  new Producto("Anticuerpos", "GBA", suma(costoAnticuerpos, adicionalGba))
);
productosGBA.push(
  new Producto("Antigenos", "GBA", suma(costoAntigenos, adicionalGba))
);
