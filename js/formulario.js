//definimos la clase Paciente para reunir los datos ingresados por el usuario
class Paciente {
  constructor(nombre, mail, telefono) {
    this.nombre = nombre.value;
    this.mail = mail.value;
    this.telefono = parseFloat(telefono.value);
  }
}

const pacientes = [];

//creamos una funcion para obtener una respuesta del formulario
$("#formulario").submit(function (e) {
  //prevenimos el comportamiento por default de submit
  e.preventDefault();

  //creamos un array de los pacientes con sus datos ingresados
  pacientes.push({
    nombre: nombre.value,
    mail: mail.value,
    telefono: telefono.value,
  });

  //creamos una constante para Ajax
  const infoAjax = pacientes[pacientes.length - 1];

  $.ajax({
    method: "POST",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: JSON.stringify(infoAjax),
    success: function (data) {
      console.log("informacion recibida por AJAX", data);
    },
  });

  //recorremos el array con el for
  for (const paciente of pacientes) {
    //creamos el texto que devolverá el formulario una vez que se envía
    $("#gracias").html("");
    $("#gracias").append(`<div>
    <h3>Gracias ${paciente.nombre} por su consulta.</h3>
    <p> Nos comunicaremos con Ud. a la brevedad. </p>
    </div>`);
  }

  //creamos el texto que devolverá el formulario una vez que se envía
  $("#gracias").fadeOut("slow", function () {
    //creamos una funcion para animar la respuesta del formulario
    $("#gracias").fadeIn(1000).delay(1000);
    $("input").val("");
  });

  //almacenamos el array en el storage convirtiendolo de string a formato JSON
  localStorage.setItem("datospacientes", JSON.stringify(pacientes));

  //devuelve por consola lo que esta en el array, convirtiendolo de JSON a String
  console.log(JSON.parse(localStorage.getItem("datospacientes")));
});

  //creamos una funcion para que desaparezca el texto que devolvió el formulario, cuando se apreta el boton limpiar
$("#botonLimpiar").click(function (e) {
  $("#gracias").fadeOut(500);
});
