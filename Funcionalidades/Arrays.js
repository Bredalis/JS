
// Vectores y matrices
const vector = [1, 2, 3, 4, 5];
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const vectorModerno = ["Lisa", "Perla"];
const matrizModerna = Array.from({ length: 3 }, () => Array(3));

// Mostrar datos
console.log("Vector:", vector);
console.log("Elemento del vector:", vector[2]);
console.log("Matriz:", matriz);
console.log("Elemento de la matriz:", matriz[1][1]);
console.log("Vector moderno:", vectorModerno);
console.log("Matriz moderna:", matrizModerna);

// Recorrer vectores
const paises = ["Chile", "México", "Brasil"];
paises.forEach(pais => {
  console.log(pais);
  
  if (pais === "Chile") {
    console.log("Este país es picante");
  }
});

// Recorrer matrices
matriz.forEach(fila => {
  fila.forEach(elemento => {
    console.log(elemento);
  });
});

// Métodos de manipulación de arrays
const frutas = ["Limón", "Piña"];

// Insertar
frutas.push("Manzana");
console.log("Después de push:", frutas);

// Eliminar el último elemento
frutas.pop();
console.log("Después de pop:", frutas);

// Eliminar el primer elemento
frutas.shift();
console.log("Después de shift:", frutas);

// Agregar un elemento al inicio
frutas.unshift("Sandía");
console.log("Después de unshift:", frutas);

// Filtrar
const frutasConA = frutas.filter(fruta => fruta.includes("a"));
console.log("Frutas con 'a':", frutasConA);

// Concatenar
const concatenacion = frutas.concat(frutasConA);
console.log("Concatenación:", concatenacion);

// Revertir
concatenacion.reverse();
console.log("Reversión:", concatenacion);

// Ordenar
concatenacion.sort();
console.log("Ordenación:", concatenacion);