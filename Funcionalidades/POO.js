
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Instancia
var persona = new Persona("Bredalis", 15);
persona.saludar();

// Manipulando el DOM
var elemento = document.getElementById("parrafo");

function cambiar_texto() {
  elemento.innerHTML = "¡El texto ha sido cambiado con JavaScript!";
}