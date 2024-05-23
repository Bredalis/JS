
// Crear nodo

const parrafoCero = document.createElement("p");
parrafoCero.innerHTML = "Parrafo 0";

const parrafoUno = document.querySelector("p");

// Seleccionar elemento padre
const elementoPadre = document.querySelector(".padre");

// Agregar nodos
elementoPadre.insertBefore(parrafoCero, parrafoUno);

// Agregar atributos
parrafoCero.setAttibute("class", "parrafos");