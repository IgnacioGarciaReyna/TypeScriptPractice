import { filter, from, take, tap } from "rxjs";

let numberList: number[] = [1, 2, 3, 4, 5];

const subs1 = from(numberList).pipe(
//   tap((t) => console.log(t)),
filter((valor) => valor %2 == 0),
  take(numberList.length)
);

subs1.subscribe({
    next: (valor) => console.log(valor),
    complete: () => console.log(`Se completo`),
});
