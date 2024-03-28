
// Crear nodo
const parrafo_cuatro = document.createElement('p');
const texto_parrafo_cuatro = document.createTextNode('Parrafo 4');

const parrafo_cinco = document.createElement('p');
parrafo_cinco.innerHTML = 'Parrafo 5';

// Seleccionar elemento padre
const elemento_padre = document.querySelector('.padre');

// Insertar nodo
elemento_padre.appendChild(parrafo_cuatro);
elemento_padre.appendChild(texto_parrafo_cuatro);
elemento_padre.appendChild(parrafo_cinco);

// Insertar varios nodos
elemento_padre.append(parrafo_cuatro, parrafo_cinco);