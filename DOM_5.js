
// Seleccionar al nodo padre 
const elemento_padre = document.querySelector('.padre');

// Crear nodo
const parrafo_cuatro = document.createElement('p');
parrafo_cuatro.innerHTML = 'Parrafo 4';

// Eliminar nodo
const parrafo_uno = document.querySelector('#parrafo1');
const parrafo_dos = document.querySelector('#parrafo2');
const parrafo_tres = document.querySelector('#parrafo3');

elemento_padre.removeChild(parrafo_uno);
parrafo_dos.remove();

// Reemplazar valor
elemento_padre.replaceChild(parrafo_cuatro, parrafo_tres);