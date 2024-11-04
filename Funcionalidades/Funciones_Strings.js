
const palabra = "JavaScript";
document.write(`La palabra es: ${palabra}<br><br>`);

// Tamaño de texto
document.write(`Cantidad de letras: ${palabra.length}<br><br>`);

// Primeros 4 caracteres usando slice
document.write(`Primeras 4 letras: ${palabra.slice(0, 4)}<br><br>`);

// Primeros 4 caracteres usando substring
document.write(`Primeras 4 letras: ${palabra.substring(0, 4)}<br><br>`);

// Reemplazo de texto
const saludo = "Hola Mundo".replace("Hola", "Adios");
document.write(`${saludo}<br><br>`);

// Texto en mayúsculas y minúsculas
document.write(`En mayúsculas: ${palabra.toUpperCase()}<br><br>`);
document.write(`En minúsculas: ${palabra.toLowerCase()}<br><br>`);

// Concatenación de textos
const palabra2 = "Curso de ";
document.write(`Concatenar textos: ${palabra2.concat(palabra)}<br><br>`);

// Eliminar espacios al inicio
const palabra3 = "   Hola   ";
document.write(`${palabra3.trimStart()}<br><br>`);

// Dividir texto
document.write(palabra.split("Script"));