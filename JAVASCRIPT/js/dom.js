// function domCargado() {
//     console.log('DOM cargado');
// }

console.log('Antes de la asignación del listener');

// window.addEventListener('DOMContentLoaded', domCargado);

// window.addEventListener('DOMContentLoaded', function() {
//     console.log('Dentro de función anónima');
// });

window.addEventListener('DOMContentLoaded', () => {
    console.log('Dentro de arrow function');
})

console.log('Después de la asignación del listener');
