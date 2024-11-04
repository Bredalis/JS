
// Seleccionar el nodo padre 
const elementoPadre = document.querySelector(".contenedor-parrafos");

// Crear un nuevo párrafo
const parrafoCuatro = document.createElement("p");
parrafoCuatro.textContent = "Párrafo 4";

// Eliminar nodos
document.querySelector("#parrafo1").remove();
document.querySelector("#parrafo2").remove();

// Reemplazar el nodo seleccionado
const parrafoTres = document.querySelector("#parrafo3");
elementoPadre.replaceChild(parrafoCuatro, parrafoTres);