/**
 * Un callback (llamada de vuelta) es una función que recibe como argumento otra función y la ejecuta. En el siguiente ejemplo, la función foo recibe por parámetro otra función, que es el callback. La función foo es la encargada de ejecutar el callback
 */




function foo2(callback: Function) {
    console.log(2+2);
    callback();
}

foo2(function(){
    console.log("Termino código");
});


//FOREACH CREADO POR NOSOTROS

let numberList: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

numberList.forEach((value, index) => {
    console.log(value * 2);
});

function porcada(numberList2:any[], callback: Function) {
    for (let index = 0; index < numberList2.length; index++) {
        const element = numberList2[index];

        callback(element, index)
    }
}

// porcada(numberList, (element: number, index: number) => {
//     console.log(`${index + 1} -> ${element * 2}`);
// });

// numberList.filter((value, index) => value > 3 );


function filtro(numberList: any[], callback: Function) {
    let filterList: any [] = [];
    for (let index = 0; index < numberList.length; index++) {
        const element = numberList[index];
        if(callback(element, index) == true){
            filterList.push(element);
        };
    }

    return filterList;
}

let filtroNuevo = filtro(numberList, (element: any, index: any)=> {
    return element > 3;
})

console.log(filtroNuevo);


function mapa2(numberLis: any[], callback: Function) {
    let newList = [];
    for (let index = 0; index < numberList.length; index++) {
        const element = numberList[index];
        newList.push(callback(element, index));
    }
    return newList;
}

let y = mapa2(numberList, (valor: any, index: any) => {
    return `numero ${index}`;
})

console.log(y);