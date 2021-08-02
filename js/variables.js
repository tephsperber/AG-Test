//ready
$(() => {
    console.log('El DOM esta listo');
  });

//establecemos los precios del pcr y anticuerpos, y un adicional cuando esten en gba
let adicionalGba = 1000;
let costoPcr = 7000;
let costoAnticuerpos = 4000;
let costoAntigenos = 4000;

//establecemos la funcion flecha para sumar el adicional al test elegido, cuando el usuario se encuentre en GBA
const suma = (a, b) => a + b;
