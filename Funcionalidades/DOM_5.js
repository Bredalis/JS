
// Seleccionar al nodo padre 
const elementoPadre = document.querySelector(".padre");

// Crear nodo
const parrafoCuatro = document.createElement("p");
parrafoCuatro.innerHTML = "Parrafo 4";

// Eliminar nodo
const parrafoUno = document.querySelector("#parrafo1");
const parrafoDos = document.querySelector("#parrafo2");
const parrafoTres = document.querySelector("#parrafo3");

elementoPadre.removeChild(parrafoUno);
parrafoDos.remove();

// Reemplazar valor
elementoPadre.replaceChild(parrafoCuatro, parrafoTres);