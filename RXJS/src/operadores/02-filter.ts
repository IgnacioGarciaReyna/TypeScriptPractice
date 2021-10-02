//obtener todos los personajes de tipo heroe
//obtener el villano llamado joker
//obtener los personajes que su nombre contengan una "a"
//consolear la palabra "enviado" cuando el usuario presione enter,
//no se puede consolear las otras teclas consoleadas

import { filter, from, fromEvent, map, mapTo, pluck, range } from "rxjs";

const evenNumber$ = range(1, 30).pipe(
  filter((valor, indice) => valor % 2 == 0) //Operador ternario
);

evenNumber$.subscribe(console.log);

interface Personaje {
  tipo: string;
  nombre: string;
}

const personajes: Personaje[] = [
  {
    tipo: "heroe",
    nombre: "Batman",
  },
  {
    tipo: "heroe",
    nombre: "Robin",
  },
  {
    tipo: "villano",
    nombre: "Joker",
  },
];

//ENCONTRAR HEROES
const heroes$ = from(personajes).pipe(
  filter((_personaje) => _personaje.tipo == "heroe"),
  pluck("nombre"),
      map((_nombreHeroe: string) => `El personaje ${_nombreHeroe} es un heroe`)
);

// const heroes$ = from(personajes).pipe(
//   filter((_personaje) => {
//     if (_personaje.tipo == "heroe") {
//       return true;
//     } else {
//       return false;
//     }
//   })
// );

// console.log(personaje[0]);
// const heroes$ = personaje[0].tipo;

// console.log(heroes$);

// let heroesList = heroes$.subscribe(console.log);

heroes$.subscribe({
  next: (valor) => {
    console.log(valor);
  },
});

//----------------------------------------------------------

//ENCONTRAR VILLANO JOKER

const villanojoker$ = from(personajes).pipe(
  filter(
    (_personaje) => _personaje.tipo == "villano" && _personaje.nombre == "Joker"
  ),
  pluck("nombre")
);

villanojoker$.subscribe(console.log);

//----------------------------------------------------------

//ENCONTRAR PERSONAJES CON LETRA "A"

const letraA$ = from(personajes).pipe(
  filter((_personaje) => _personaje.nombre.indexOf("a") != -1),
  pluck("nombre")
);

letraA$.subscribe(console.log);

//CONSOLAR ENVIADO PARA TECLA ENTER

const teclapresionada$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  filter((_tecla) => _tecla.code == "Enter"),
  mapTo("Enviado")
);

teclapresionada$.subscribe(console.log);
