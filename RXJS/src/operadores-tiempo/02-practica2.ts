import { debounceTime, from, fromEvent, map, pluck } from "rxjs";

let heroesLists: { name: string; type: string }[] = [
  {
    name: "Batman",
    type: "Heroe",
  },
  {
    name: "Robin",
    type: "Heroe",
  },
  {
    name: "Linterna Verde",
    type: "Heroe",
  },
  {
    name: "SpiderMan",
    type: "Heroe",
  },
  {
    name: "Rhino",
    type: "Villano",
  },
  {
    name: "Joker",
    type: "Villano",
  },
  {
    name: "El camaleon",
    type: "Villano",
  },
  {
    name: "El pingüino",
    type: "Heroe",
  },
  {
    name: "Hiedra venenosa",
    type: "Villano",
  },
];

//1.- Mostrar en una lista los personajes del array
//2.- Filtrar por nombre asemejado al personaje -> "El"
//3.- Filtrar busqueda por heroes, villanos o todos.

//Creación de elementos HTML
const body = document.querySelector("body");

const divPrincipal = document.createElement("div");
const listaPrincipal = document.createElement("ul");

const input = document.createElement("input");
const select = document.createElement("select");

input.id = "inpSearch";
select.id = "SelectType";

const option1 = document.createElement("option");
const option2 = document.createElement("option");

option2.innerText = "Villano";
option2.setAttribute("value", "villano");

option1.innerText = "Heroe";
option1.setAttribute("value", "heroe");

select.appendChild(option1);
select.appendChild(option2);

divPrincipal?.appendChild(input);
divPrincipal?.appendChild(select);

body?.appendChild(divPrincipal);

//Función
const createListElements: Function = () => {
  heroesLists.forEach((personaje) => {
    let li = document.createElement("li");
    li.innerText = personaje.name;
    listaPrincipal.appendChild(li);
  });
  body?.appendChild(listaPrincipal);
};

createListElements();

const inputSearch$ = fromEvent(input, "keyup").pipe(
  debounceTime(1500),
  pluck("target", "value"),
  map((termino) =>{

    heroesLists.filter(personaje => personaje.name.toLowerCase().includes((termino as string).toLowerCase()))

  })
);

inputSearch$.subscribe({
  next: (value) => {
    console.log(value);
  },
});

//delay => transmitir cada evento o letra con un retraso de 1 segundo
//debounce => hasta que mi observable termine de transmitir información
//por el tiempo determinado me comparte el último evento

//variable + as + datatype => infiredTypes