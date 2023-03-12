// Pregunta al usuario por su nombre
var nombre = prompt("¿Cuál es tu nombre?");

// Inserta el nombre del usuario en el header h1
document.querySelector("h1").innerHTML = nombre;

// Escribe "Mucho gusto" en el párrafo p
document.querySelector("p").innerHTML = "Mucho gusto";

// Escribe en la consola "Acabo de insertar tu nombre en un header"
console.log("Acabo de insertar tu nombre en un header");

// Muestra una ventana de alerta con el mensaje "Programa Terminado"
alert("Programa Terminado");
