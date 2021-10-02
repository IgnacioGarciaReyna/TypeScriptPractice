import { map, range, tap } from "rxjs";


const numeros$ = range(1,5);

let subs1 = numeros$.pipe(
    tap((valor) => console.log(`Valor inicial =>`, valor)),
    map(numero => numero *5),
    tap((valor) => console.log(`Valor final =>`, valor))
)

subs1.subscribe();