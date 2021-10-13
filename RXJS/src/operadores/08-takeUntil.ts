import { fromEvent, interval, map, skip, takeUntil, tap } from "rxjs";

const divBigNumber: HTMLDivElement = document.createElement("div");

const pBigNumber: HTMLParagraphElement = document.createElement("p");

pBigNumber.setAttribute("class", "number fadeIn");

document.querySelector("body")?.append(divBigNumber);

divBigNumber.append(pBigNumber);

const boton = document.createElement("button");
boton.innerHTML = "Detener cronometro";

document.querySelector("body")?.append(boton);

//observables
const click$ = fromEvent<MouseEvent>(boton, "click").pipe(
  tap({
    next: () => console.log("Se ejecutó click"),
  }),
  skip(1)
);
const interval$ = interval(1000);

interval$
  .pipe(
    takeUntil(click$) //Toma hasta que el observable click$ se ejecute
  )
  .subscribe({
    next: (numero) => {
      pBigNumber.innerText = numero.toString();
    },
    complete: () => console.log("Se completó"),
  });
