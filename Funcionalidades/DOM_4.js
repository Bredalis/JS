
// Crear nodos con contenido
const parrafoCero = document.createElement("p");
parrafoCero.textContent = "Parrafo 0";

// Agregar atributos
parrafoCero.setAttribute("class", "parrafos");
parrafoCero.setAttribute("id", "parrafo0");

// Seleccionar el primer párrafo existente
const parrafoUno = document.querySelector("p");

// Seleccionar elemento padre
const elementoPadre = document.querySelector(".contenedor-parrafos");

// Agregar nodo antes del primer párrafo
elementoPadre.insertBefore(parrafoCero, parrafoUno);