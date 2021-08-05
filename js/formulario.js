

//definimos la clase Paciente para reunir los datos ingresados
class Paciente {
  constructor(nombre, mail, telefono) {
    this.nombre = nombre.value;
    this.mail = mail.value;
    this.telefono = parseFloat (telefono.value);
  }
}
const pacientes = [];

$("#formulario").submit(function (e) {
  //Prevenimos el comportamiento de submit 
  e.preventDefault();
  
  //creamos un array de los pacientes con sus datos ingresados
  pacientes.push({
    nombre: nombre.value,
    mail: mail.value,
    telefono: telefono.value,
  });

  const infoAjax = pacientes [pacientes.length-1];;

  $.ajax ({
    method: "POST",
    url: "https://jsonplaceholder.typicode.com/posts", 
    data: JSON.stringify(infoAjax),
    success: function (data) {
      console.log ( "informacion recibida por AJAX", data);
    }
  });

  //recorremos el array con el for
  for (const paciente of pacientes) {

    $("#gracias").html("");

    $("#gracias").append(`<div>
    <h3>Gracias ${paciente.nombre} por su consulta.</h3>
    <p> Nos comunicaremos con Ud. a la brevedad. </p>
    </div>`);
  

    }
	
$("#gracias").fadeOut("slow", function(){
    //Cuando termina de ocultarse el elemento lo mostramos nuevamente
    $("#gracias").fadeIn(1000)
    .delay(1000);
    $("input").val('');
    
}); 

  

  //almacenamos el array en el storage convirtiendolo de string a formato JSON
  localStorage.setItem("datospacientes", JSON.stringify(pacientes));

  //devuelve por consola lo que esta en el array, convirtiendolo de JSON a String
  console.log(JSON.parse(localStorage.getItem("datospacientes")));
});

$("#botonLimpiar").click(function (e) { 
  $("#gracias").fadeOut(500);  

});
