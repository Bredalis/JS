
// Elementos del DOM para mostar la fecha y la hora
const mostrarFecha = document.getElementById("fecha");
const mostrarHora = document.getElementById("hora");

// Arreglos para nombres de los días y los meses
const dias = [
    "Domingo", "Lunes", "Martes", "Miércoles", "Jueves",
    "Viernes", "Sábado"
];

const meses = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Noviembre", "Diciembre"
];

// Función para actualizar la fecha y la hora
function actualizarFechaYHora() {
    const fechaActual = new Date();

    mostrarFecha.textContent = `${dias[fechaActual.getDay()]}, 
    ${fechaActual.getDate()} de ${meses[fechaActual.getMonth() - 1]}
    de ${fechaActual.getFullYear()}`;
    
    mostrarHora.textContent = fechaActual.toLocaleTimeString();
}

// Inicializar y actualizar cada segundo
actualizarFechaYHora();
setInterval(actualizarFechaYHora, 1000);