import { first, fromEvent, map, range, tap } from "rxjs";

const obs$1 = range(1, 10).pipe(first((value) => value == 7));

// obs$1.subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log(`Completado`),
// });

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    tap<MouseEvent>(console.log),
    map((event) => ({
      
        x: event.clientX,
        y: event.clientY,
      
    })),
    first((coordenadas) => coordenadas.x >= 175)
  )
  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log(`se completó`),
  });
