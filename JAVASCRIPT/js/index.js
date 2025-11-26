console.log('Prueba');

console.log(typeof document.patata, document.patata);
console.log(typeof 5, 5);
console.log(typeof true, true);
console.log(typeof 'texto', 'texto');
console.log(typeof console.log, console.log);
console.log(typeof console, console);

console.log('5' == 5);
console.log('5' === 5);

console.log(!!console.log);
console.log(!!console.patata);

'use strict';

const numeroRecibido = '5';

const numero = +numeroRecibido;

console.log(numero + 2);

const arr = Array(3);

arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[10] = 5;

arr['casa'] = 'alksdjflkasd';
arr.yepa = 'gigidi';

arr.push(10);

console.log(arr, arr.length);

console.log(arr['yepa']);
console.log(arr.casa);

const [primero, segundo] = arr;

console.log(primero, segundo);

console.log(typeof arr);

const coleccion = ['primero', 'segundo'];

coleccion.push('uno');
coleccion.push('dos');

console.log(coleccion);

function sumar(a, b) {
    return a + b;
}

console.log(typeof sumar, sumar, sumar(1, 2));

let operacion = sumar;

console.log(operacion(5, 6));

const restar = function (a, b) { return a - b; }; // Función anónima

console.log(typeof restar, restar, restar(6, 4));

const multiplicar = (a, b) => a * b; // Arrow function

function calculadora(a, operacion, b) {
    return operacion(a, b);
}

console.log(calculadora(5, sumar, 3));