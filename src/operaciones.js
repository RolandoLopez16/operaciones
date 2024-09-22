const sumar = require('./suma');
const restar = require('./resta');
const multiplicar = require('./multiplicacion');
const dividir = require('./division');

// Extraer argumentos desde la línea de comandos
const args = process.argv.slice(2);

if (args.length < 2) {
    console.log('Por favor, proporciona dos números.');
    process.exit(1);
}

const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);

if (isNaN(num1) || isNaN(num2)) {
    console.log('Ambos argumentos deben ser números.');
    process.exit(1);
}

console.log(`Suma: ${sumar(num1, num2)}`);
console.log(`Resta: ${restar(num1, num2)}`);
console.log(`Multiplicación: ${multiplicar(num1, num2)}`);
console.log(`División: ${dividir(num1, num2)}`);
