
// Variables y tipo de datos
const nombre = "Bredalis";
const edad = 15;
let femenina = true;

// Cambiar temporalmente el valor de 'femenina' dentro del bloque 'if'
if (true) {
	let femenina = false;
	console.log(femenina);
}

// Mostrar datos de las variables
console.log("Datos:");
alert(`Hola ${nombre}`);
console.log("Edad:", edad);
console.log("Femenina:", femenina);

// Mostrar tipos de datos de cada variable
console.log("Tipos de datos:");
console.log("Nombre:", typeof(nombre));
console.log("Edad:", typeof(edad));
console.log("Femenina:", typeof(femenina));