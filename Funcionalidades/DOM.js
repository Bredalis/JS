
// Selecionado Elementos

// Por ID
let parrafo1 = document.getElementById("parrafo1");
parrafo1.innerHTML = "SELECCIONADO POR ID";

// Por clase
let parrafos = document.getElementsByClassName("parrafos");
console.log(parrafos.length);
parrafos[1].innerHTML = "SELECCIONADO POR CLASE";

// Por etiqueta

let etiquetas = document.getElementsByTagName("p");
console.log(etiquetas.length);
etiquetas[2].innerHTML = "POR ETIQUETA";

// Modificando estilos

parrafo1.style.background = "black";
parrafo1.style.color = "white";
parrafo1.style.borderRadius = "8px";
parrafo1.style.width = "250px";
parrafo1.style.textAlign = "center";