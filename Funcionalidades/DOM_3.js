
// Crear nodos con contenido
const parrafoCuatro = document.createElement("p");
parrafoCuatro.textContent = "Párrafo 4";

const parrafoCinco = document.createElement("p");
parrafoCinco.textContent = "Párrafo 5";

// Seleccionar elemento padre
const elementoPadre = document.querySelector(".contenedor-parrafos");

// Insertar nodos al elemento padre
elementoPadre.append(parrafoCuatro, parrafoCinco);