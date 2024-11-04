
// Seleccionar elementos del DOM
const inputImagen = document.getElementById("input-imagen");
const contenedorImagen = document.getElementById("contenedor-imagen");

// Función para mostrar la imagen seleccionada
function mostrarImagen() {
    const archivo = inputImagen.files[0];

    // Verificar que el archivo exista y sea una imagen
    if (archivo && archivo.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.onload = function (event) {
            actualizarImagen(event.target.result);
        };

        reader.onerror = function () {
            console.error("Error al leer el archivo.");
        };

        reader.readAsDataURL(archivo);
    } else {
        console.warn("Por favor, selecciona un archivo de imagen válido.")
    }
}

// Función para actualizar el contenedor con la imagen
function actualizarImagen(src = "") {
    const imagen = new Image();
    imagen.src = src;
    imagen.style.paddingTop = "30px";
    contenedorImagen.textContent = ""; // Limpiar el contenedor
    contenedorImagen.appendChild(imagen);
}