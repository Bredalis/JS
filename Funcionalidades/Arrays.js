
// Vectores y matrices
let vector = [1, 2, 3, 4, 5];
let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let vectorModerno = new Array(3);
vectorModerno[0] = "Lisa";
vectorModerno[1] = "Perla";

let matrizModerna = new Array(3);

for(let i = 0; i < 3; i++) {
	matrizModerna[i] = new Array(3);
}

// Mostrar datos
console.log("Vector:", vector);
console.log("Vector elemento:", vector[2]);
console.log("Matriz:", matriz);
console.log("Matriz elemento:", matriz[1][1]);
console.log("Vector moderno:", vectorModerno);
console.log("Matriz moderna:", matrizModerna);

// Recorrer vectores
let paises = ["Chile", "Mexico", "Brasil"];

let i;
for (i = 0; i < paises.length; i++) {
	console.log(paises[i]);

	if(paises[i] == "Chile") {
		console.log("Este pais es picante");
	}
}

// Recorrer matrices

let f;
for (f = 0; f < matriz.length; f++) {
	for(let c = 0; c < matriz[f].length; c++) {
		console.log(matriz[f][c]);
	}
}

// Metodos
let frutas = ["Limon", "Piña"];

// Ingresar
frutas.push("Manzana");
console.log(frutas);

// Borrar el ultimo elemento 
frutas.pop();
console.log(frutas);

// Borrar el primer elemento
frutas.shift();
console.log(frutas);

// Agregar elemento de primero
frutas.unshift("Sandia");
console.log(frutas);

// Filtro
let frutasConA = frutas.filter(fruta => fruta.includes("a"));
console.log(frutasConA);

// Concatenar
let concatenacion = frutas.concat(frutasConA);
console.log(concatenacion);

// Revertir
concatenacion.reverse();
console.log(concatenacion);

// Ordenar
concatenacion.sort();
console.log(concatenacion)