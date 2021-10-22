import {
  debounceTime,
  filter,
  fromEvent,
  map,
  merge,
  mergeAll,
  mergeMap,
  pluck,
  tap,
} from "rxjs";
import { ajax } from "rxjs/ajax";
import { Iquote } from "../interfaces/breakingBd-quote.interface";

//Authors

interface Author {
  name: string;
  url: string;
}

const authors: Author[] = [
  {
    name: "Seleccione dato",
    url: "",
  },
  {
    name: "Walter White",
    url: "quote?author=Walter+White",
  },
  {
    name: "Jesse Pinkman",
    url: "quote?author=Jesse+Pinkman",
  },
];

//Elementos HTML

const body = document.querySelector("body");
const select = document.createElement("select");

const lista = document.createElement("ul");

for (const author of authors) {
  const option = document.createElement("option");
  option.innerText = author.name;
  option.value = author.url;
  select.append(option);
}

body?.append(select, lista);

//función
const mostrarQuotes = (quotes: Iquote[]) => {
  lista.innerHTML = "";
  for (const quote of quotes) {
    const li = document.createElement("li");
    const frase = document.createElement("a");
    const br = document.createElement("br");
    const autor = document.createElement("a");
    const hr = document.createElement("hr");

    frase.innerText = `Quote: ${quote.quote} `;
    autor.innerText = `Author: ${quote.author} `;

    li.append(frase, br, autor, hr);
    lista.append(li);
  }
};

//observable
const input$ = fromEvent(select, "change");

input$
  .pipe(
    debounceTime(450),
    pluck("target", "value"),
    filter((termino) => termino != ""),
    mergeMap((valor) => ajax.getJSON(`https://www.breakingbadapi.com/api/${valor}`)),
    filter((quotes) => quotes != null)
  )
  .subscribe({
    next: (valor: any) => mostrarQuotes(valor),
  });
