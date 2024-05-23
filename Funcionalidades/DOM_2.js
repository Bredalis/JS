
// Lectura de nodos

// querySelector - ID
let parrafo1 = document.querySelector("#parrafo1");
parrafo1.innerHTML = "POR QUERYSELECTOR - ID";

// querySelectorAll - Clases
let parrafos = document.querySelectorAll(".parrafos");
console.log(parrafos);

const arregloParrafos = [...parrafos];
console.log(arregloParrafos);

arregloParrafos[1].innerHTML = "POR QUERYSELECTORALL - CLASES";

// Por etiquetas
let etiquetas = document.querySelectorAll("p");
etiquetas[2].innerHTML = "POR QUERYSELECTORALL - ETIQUETAS";