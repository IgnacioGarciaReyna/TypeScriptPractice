import {
  debounceTime,
  filter,
  from,
  fromEvent,
  mergeMap,
  pipe,
  pluck,
  tap,
} from "rxjs";
import { ajax } from "rxjs/ajax";

//interface

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

// HTML
const body = document.querySelector("body");

const mostrarPokemons = (pokemons: Pokemon) => {
  console.log(pokemons);
  const container = document.createElement("div");
  body?.append(container);

  const div = document.createElement("div");
  const h5 = document.createElement("h5");
  const img = document.createElement("img");

  h5.innerText = pokemons.name;
  console.log(pokemons.sprites.front_default);
  img.setAttribute("src", pokemons.sprites.front_default);

  div.append(img, h5);
  container.append(div);
};

ajax
  .getJSON(`https://pokeapi.co/api/v2/pokemon-form/`)
  .pipe(
    pluck("results"),
    mergeMap((results: any) =>
      from(results).pipe(
        pluck("url"),
        mergeMap((url: any) => ajax.getJSON(url))
      )
    )
  )
  .subscribe({
    next: (valor: any) => mostrarPokemons(valor),
  });
