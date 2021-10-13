import { fromEvent, map, takeWhile } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(map((event) => ({ x: event.x, y: event.y })),
    takeWhile((coordenadas) => coordenadas.y <= 150, true)
)
.subscribe({
  next: (coordenadas) => {
    console.log(coordenadas.x, coordenadas.y);
  },
  complete: () => console.warn(`Se completa observable`),
});
