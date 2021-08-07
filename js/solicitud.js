//creamos una funcion para el cotizador, el cual segun los datos ingresados devolvera un costo distinto
function solicitudPaciente() {
  //defino variables con la informacion ingresada por el usuario en cada input
  let testIngresado = $("#miTest").val();
  let localidadIngresada = $("#miLocalidad").val();

  //la funcion se crea con los objetos del array creados en producto.js
  $("#solicitud").html("");
  if (
    testIngresado === productosCABA[0].test &&
    localidadIngresada === productosCABA[0].localidad
  ) {
    $("#solicitud").prepend(`<p> $ ${productosCABA[0].precio}</p>`);
  }
  if (
    testIngresado === productosGBA[0].test &&
    localidadIngresada === productosGBA[0].localidad
  ) {
    $("#solicitud").prepend(`<p> $ ${productosGBA[0].precio}</p>`);
  }
  if (
    testIngresado === productosCABA[1].test &&
    localidadIngresada === productosCABA[1].localidad
  ) {
    $("#solicitud").prepend(`<p> $ ${productosCABA[1].precio}</p>`);
  }
  if (
    testIngresado === productosGBA[1].test &&
    localidadIngresada === productosGBA[1].localidad
  ) {
    $("#solicitud").prepend(`<p> $ ${productosGBA[1].precio}</p>`);
  }
  if (
    testIngresado === productosCABA[2].test &&
    localidadIngresada === productosCABA[2].localidad
  ) {
    $("#solicitud").prepend(`<p> $ ${productosCABA[2].precio}</p>`);
  }
  if (
    testIngresado === productosGBA[2].test &&
    localidadIngresada === productosGBA[2].localidad
  ) {
    $("#solicitud").prepend(`<p> $ ${productosGBA[2].precio}</p>`);
  }

  //creamos una funcion para animar la respuesta del cotizador
  $("#solicitud").fadeOut("slow", function () {
    //cuando termina de ocultarse el elemento lo mostramos nuevamente
    $("#solicitud").fadeIn(1000);
  });

  //creamos una funcion para animar el menu navbar cuando el cotizador responde

  //ocultamos las paginas del menu, excepto Contacto
  $(".hide").fadeOut("slow", function () {
    //le aplicamos un estilo distinto a Contacto
    $("#paginaContacto").css("background-color", "#a3e1e4");

    //cuando termina de ocultarse el resto del menu, lo mostramos nuevamente
    $(".hide").fadeIn(1000);
  });
}
