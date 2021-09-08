"use strict";
function funcionUno(numero1, numero2) {
    let resultado = numero1 + numero2;
    return resultado;
}
let resultadoFuncionUno = funcionUno(5, 6);
console.log(resultadoFuncionUno);
let funcionDos = (numero1, numero2) => numero1 + numero2;
console.log(funcionDos(7, 8));
// let funcionTres = (saludo: string) => {
//     let saludoNuevo = saludo.toLowerCase();
//     return saludoNuevo;
// }
// Es igual a :
let funcionTres = (saludo) => saludo.toLowerCase();
console.log(funcionTres("Hola Mundo"));
let palabra1 = 'Hola Mundo';
let palabra2 = 'odnuM aloH';
let validarPalabraIgual = (palabra1, palabra2) => palabra1.split('').reverse().join() == palabra2 ? "Es igual la palabra" : "La palabra no es igual";
//# sourceMappingURL=arrowFuncion.js.map