
// Manejo Básico
try {
    let resultado = 10 / 0;
    console.log("Resultado:", resultado);

} catch (error) {
    console.log("Error:", error.message);

} finally {
    console.log("Esto siempre se ejecuta.");
}

// Lanzar Excepciones con throw
function validarValor(valor) {
    if (valor < 0) throw new Error("El valor no puede ser negativo");
    return valor;
}

try {
    console.log(validarValor(-5));

} catch (error) {
    console.log("Error:", error.message);
}