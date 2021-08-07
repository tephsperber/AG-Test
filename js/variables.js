//aplicamos un document ready
$(() => {
    console.log('El DOM esta listo');
  });

//establecemos los precios de los test PCR, Antigenos y Anticuerpos. 

//luego aplicamos un adicional al precio para cuando sean test en GBA
let adicionalGba = 1000;
let costoPcr = 7000;
let costoAnticuerpos = 4000;
let costoAntigenos = 4000;

//establecemos la funcion flecha para sumar el adicional al test elegido, cuando el usuario se encuentre en GBA
const suma = (a, b) => a + b;
