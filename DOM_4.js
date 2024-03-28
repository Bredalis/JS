
// Crear nodo

const parrafo_cero = document.createElement('p');
parrafo_cero.innerHTML = 'Parrafo 0';

const parrafo_uno = document.querySelector('p');

// Seleccionar elemento padre
const elemento_padre = document.querySelector('.padre');

// Agregar nodos
elemento_padre.insertBefore(parrafo_cero, parrafo_uno);

// Agregar atributos
parrafo_cero.setAttibute('class', 'parrafos');