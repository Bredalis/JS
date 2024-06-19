
let mostrarFecha = document.getElementById("fecha");
let mostrarReloj = document.getElementById("reloj");

// Datos para traducir los dias y meses
let dias = [
    "Domingo", "Lunes", "Martes", "Miércoles", "Jueves",
    "Viernes", "Sábado"
];

let meses = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Noviembre", "Diciembre"
];

// Función para actualizar la fecha y el reloj
function actualizarFechaYHora() {
    let fechaActual = new Date();

    mostrarFecha.innerHTML = `${dias[fechaActual.getDay()]}, 
    ${fechaActual.getDate()} de ${meses[fechaActual.getMonth()]}
    de ${fechaActual.getFullYear()}`;
    
    mostrarReloj.innerHTML = fechaActual.toLocaleTimeString();
}

actualizarFechaYHora();

// Actualizar la fecha y el reloj cada segundo
setInterval(actualizarFechaYHora, 1000);