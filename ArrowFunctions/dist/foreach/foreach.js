"use strict";
const MainList = [
    {
        nombre: "Nacho",
        apellido: "Reyna"
    },
    {
        nombre: "Ignacio",
        apellido: "Garcia"
    },
    {
        nombre: "El",
        apellido: "Bromas"
    },
];
MainList.forEach(imprimirDato);
function imprimirDato(value, index) {
    let nombreCompleto = `${index + 1}.-${value.nombre} ${value.apellido}`;
    console.log(nombreCompleto);
}
// const MainList: number[] = [1, 2, 3, 4, 5];
// MainList.forEach(imprimirDato);
// function imprimirDato(value:number , index:number) {
//     let resultado = value * 5;
//     console.log(resultado);
// }
// TAMBIÉN SE PUEDE ESCRIBIR ASÍ
// MainList.forEach(function(valor){
//     console.log("imprimiendo un valor nuevo");
//     console.log(valor);
// });
// CallBack
// function imprimirDato(numero: number) {
//     console.log(numero);
// }
// function calcularValor(num1:number,num2:number,callback:Function){
//     let resultado = num1 + num2;
//     callback(resultado);
// }
// calcularValor(1, 2, imprimirDato);
//# sourceMappingURL=foreach.js.map