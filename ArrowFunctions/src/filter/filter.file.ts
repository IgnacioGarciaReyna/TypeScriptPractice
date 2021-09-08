interface Iuser {
    nombre: string;
    apellido: string;
    edad: number;
    email: string;
}

const userListFilter: Iuser[] = [
    {
        nombre: "Nacho",
        apellido: "Reyna",
        edad: 27,
        email: "nacho@live.com"
    },
    {
        nombre: "Peter",
        apellido: "Parker",
        edad: 21,
        email: "parker@live"
    },
    {
        nombre: "El",
        apellido: "Bromas",
        edad: 52,
        email: "bromas@live"
    },
    {
        nombre: "Banana",
        apellido: "en Pijama",
        edad: 10,
        email: "banana@live.com"
    },
];

//función anonima
// let filterElements = userListFilter.filter(function (valor,index) {
//     if(valor.edad >= 26) {
//         return true;
//     }
// });


//ArrowFunction
let filterElements = userListFilter.filter( (valor,index) => valor.edad >= 26);

let filterElementsByMail = filterElements.filter( (valor,index) => valor.email.indexOf(".") != -1);

console.log(filterElementsByMail);