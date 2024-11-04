
// Redondear al entero más cercano
const año = Math.round(365.5);
document.write(`Año redondeado: ${año}<br><br>`);

// Redondear hacia arriba (independientemente del decimal)
const dineroArriba = Math.ceil(400.2);
document.write(`Dinero redondeado hacia arriba: ${dineroArriba}<br><br>`);

// Redondear hacia abajo (independientemente del decimal)
const dineroAbajo = Math.floor(450.9);
document.write(`Dinero redondeado hacia abajo: ${dineroAbajo}<br><br>`);

// Calcular el seno de un ángulo (en radianes)
const seno = Math.sin(45 * Math.PI / 180);
document.write(`Seno de 45°: ${seno}<br><br>`);

// Exponencial de un número
const exp = Math.exp(9);
document.write(`Exponencial de 9: ${exp}<br><br>`);

// Logaritmo natural de un número
const logaritmo = Math.log(10);
document.write(`Logaritmo de 10: ${logaritmo}<br><br>`);

// Valor absoluto
const absoluto = Math.abs(-10);
document.write(`Valor absoluto de -10: ${absoluto}<br><br>`);

// Valor máximo de una secuencia
const maximo = Math.max(10, 50, 30, 28, 100);
document.write(`Valor máximo de una secuencia: ${maximo}<br><br>`);

// Valor mínimo de una secuencia
const minimo = Math.min(10, 50, 30, 28, 100);
document.write(`Valor mínimo de una secuencia: ${minimo}<br><br>`);

// Valor aleatorio entre 0 y 10
const aleatorio = Math.round(Math.random() * 10);
document.write(`Valor aleatorio: ${aleatorio}<br><br>`);

// Raíz cuadrada
const raizCuadrada = Math.sqrt(50);
document.write(`Raíz cuadrada de 50: ${raizCuadrada}<br><br>`);

// Potencia (4 elevado a la 2)
const exponente = Math.pow(4, 2);
document.write(`4 elevado a la 2: ${exponente}<br><br>`);