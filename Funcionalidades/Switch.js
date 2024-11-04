
// Solicitar un color al usuario
const color = prompt("Ingrese un color").toLowerCase();

// Mostrar un mensaje dependiendo del color ingresado por el usuario
switch (color) {
	case "rojo":
		console.log("Es rojo");
		break;

	case "azul":
		console.log("Es azul");
		break;

	case "amarillo":
		console.log("Es amarillo");
		break;

	default:
		console.log("El color ingresado no es válido");
}