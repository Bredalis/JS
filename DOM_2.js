
// Lectura de nodos

// querySelector - ID
let parrafo_1 = document.querySelector('#parrafo1');
parrafo_1.innerHTML = 'POR QUERYSELECTOR - ID';

// querySelectorAll - Clases
let parrafos = document.querySelectorAll('.parrafos');
console.log(parrafos);

const arreglo = [...parrafos];
console.log(arreglo);

arreglo[1].innerHTML = 'POR QUERYSELECTORALL - CLASES';

// Por etiquetas
let etiquetas = document.querySelectorAll('p');
etiquetas[2].innerHTML = 'POR QUERYSELECTORALL - ETIQUETAS';