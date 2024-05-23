
function mostrarImagen() {
    const input = document.getElementById("inputImagen");
    const contenedorImagen = document.getElementById("contenedor-imagen");

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const imagen = new Image();
        imagen.src = event.target.result;
        contenedorImagen.innerHTML = "";
        contenedorImagen.appendChild(imagen);
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}