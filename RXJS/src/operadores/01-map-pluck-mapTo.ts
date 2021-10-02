import { from, fromEvent, map, mapTo, pluck, range } from "rxjs";

// const obs1$ = range(1, 5).pipe(
//   map((valor: number) => {
//     return valor * Math.random();
//   })
// );

// obs1$.subscribe({
//     next:(valor) =>console.log(valor),
// });

let numberList = [1, 2, 3, 4, 5, 6];

//observable global
const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
const click$ = fromEvent<MouseEvent>(document, "click");

//observable global con operadores
const sub1$ = keyup$.pipe(map((kbEvent: KeyboardEvent) => kbEvent.code));

let listaElementos: string[] = ["target", "baseURI"];

const subs2$ = keyup$.pipe(pluck(...listaElementos));

const subs3$ = click$.pipe(mapTo("Hola mundo"));

const listNumber$= from(numberList).pipe(mapTo("Ejemplo 2"));

keyup$.subscribe(console.log);
// sub1$.subscribe({
//     next: (valor) => console.log(valor),
// });

// subs2$.subscribe({
//     next: (valor) => console.log(valor),
// });

subs3$.subscribe({
  next: (valor) => alert(valor),
});

listNumber$.subscribe({
    next: (valor) => console.log(valor),
});