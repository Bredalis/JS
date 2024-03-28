
let mostrar_fecha = document.getElementById('fecha');
let mostrar_reloj = document.getElementById('reloj');

let fecha_actual = new Date();
let dias = [
	'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves',
	'Viernes', 'Sabado'
];

let meses = [
	'Enero', 'Febrero', 'Marzo', 'Abril',
	'Mayo', 'Junio', 'Julio', 'Agosto',
	'Septiembre', 'Noviembre', 'Diciembre'
];

// Mostrar fecha en la pagina

mostrar_fecha.innerHTML = `${dias[fecha_actual.getDay()]}, 
${fecha_actual.getDate()} de ${meses[fecha_actual.getMonth()]}
de ${fecha_actual.getFullYear()}`

// Mostrar reloj en la pagina
setInterval(() => {
	mostrar_reloj.innerHTML = fecha_actual.toLocaleTimeString();
}, 1000);