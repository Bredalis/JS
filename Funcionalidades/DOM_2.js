
// Lectura de nodos

// Seleccionar elemento por ID
const parrafo1 = document.querySelector("#parrafo1");
parrafo1.innerHTML = "POR QUERYSELECTOR - ID";

// Seleccionar todos los elementos con la clase 'parrafos'
const parrafos = document.querySelectorAll(".parrafos");
console.log("Nodos seleccionados por clase:", parrafos);

// Convertir NodeList a array para facilitar la manipulación
const arregloParrafos = Array.from(parrafos);
console.log("Array de párrafos:", arregloParrafos);

// Modificar contenido del segundo elemento de la clase 'parrafos'
arregloParrafos[1].innerHTML = "POR QUERYSELECTORALL - CLASES";

// Seleccionar todos los elementos de tipo <p>
const etiquetas = document.querySelectorAll("p");

// Modificar contenido del tercer elemento <p>
etiquetas[2].innerHTML = "POR QUERYSELECTORALL - ETIQUETAS";