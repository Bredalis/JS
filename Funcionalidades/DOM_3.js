
// Crear nodo
const parrafoCuatro = document.createElement("p");
const textoParrafoCuatro = document.createTextNode("Parrafo 4");

const parrafoCinco = document.createElement("p");
parrafoCinco.innerHTML = "Parrafo 5";

// Seleccionar elemento padre
const elementoPadre = document.querySelector(".padre");

// Insertar nodo
elementoPadre.appendChild(parrafoCuatro);
elementoPadre.appendChild(textoParrafoCuatro);
elementoPadre.appendChild(parrafoCinco);

// Insertar varios nodos
elementoPadre.append(parrafoCuatro, parrafoCinco);