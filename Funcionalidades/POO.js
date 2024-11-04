
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Instancia de la clase Persona
const persona = new Persona("Bredalis", 15); 
persona.saludar();

// Manipulación del DOM
const elemento = document.querySelector("#parrafo");

function cambiarTexto() {
  if (elemento) {
    elemento.textContent = "¡El texto ha sido cambiado con JavaScript!";
  } else {
    console.error("El elemento con id 'parrafo' no se encontró en el DOM.");
  }
}