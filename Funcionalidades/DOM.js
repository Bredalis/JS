
// Selección de elementos

// Selección por ID
const parrafo1 = document.getElementById("parrafo1");
parrafo1.innerHTML = "SELECCIONADO POR ID";
parrafo1.style.backgroundColor = "black";
parrafo1.style.color = "white";
parrafo1.style.borderRadius = "8px";
parrafo1.style.width = "250px";
parrafo1.style.textAlign = "center";

// Selección por clase
const parrafos = document.getElementsByClassName("parrafos");
console.log("Número de elementos con clase 'parrafos':", parrafos.length);
parrafos[1].innerHTML = "SELECCIONADO POR CLASE";

// Selección por etiqueta
const etiquetas = document.getElementsByTagName("p");
console.log("Número de elementos <p>:", etiquetas.length);
etiquetas[2].innerHTML = "POR ETIQUETA";