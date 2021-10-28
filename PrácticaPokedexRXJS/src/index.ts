//Importa las clases de bootstrap.
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../css/index.css";

import { debounceTime, filter, from, fromEvent, map, mergeAll, mergeMap, pluck, tap } from "rxjs";
import { ajax } from "rxjs/ajax";



//Indice paginación

let indicePokemon = 0;

const cambiarIndice = (id: any) => {
  if (id == "previousButton") {
    indicePokemon = indicePokemon - 20;
  } else if (id == "nextButton") {
    indicePokemon = indicePokemon + 20;
  }

  cardGroup.innerHTML = "";

  ejecutarAjax();
};



//Observable
const button = document.querySelectorAll("a");
const button$ = fromEvent(button, "click")
  .pipe(pluck("target", "id"))
  .subscribe({
    next: (id) => cambiarIndice(id),
  });



//Interface

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}


// HTML
const cardGroup: any = document.getElementById("cardGroup");
const pagina : any = document.getElementById("pagina");

const mostrarPokemons = (pokemons: Pokemon) => {
  const div = document.createElement("div");
  div.setAttribute("class", "card");
  div.setAttribute("id", "card");

  const img = document.createElement("img");
  img.setAttribute("class", "card-img-top");

  const divSmall = document.createElement("div");
  divSmall.setAttribute("class", "card-body");

  const h5 = document.createElement("h5");
  h5.setAttribute("class", "card-title");

  h5.innerText = pokemons.name;
  img.setAttribute("src", pokemons.sprites.front_default);

  divSmall.append(h5);
  div.append(img, divSmall);
  cardGroup?.append(div);

  
  pagina.innerText = `Pokemons del ${indicePokemon} al ${indicePokemon + 20}`;
};



//AJAX
const ejecutarAjax = () =>
  ajax
    .getJSON(
      `https://pokeapi.co/api/v2/pokemon-form/?offset=${indicePokemon}&limit=20`
    )
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

ejecutarAjax();


//Busqueda
const inputSearch :any = document.getElementById("inputSearch");
const input$ = fromEvent<KeyboardEvent>(inputSearch, "keyup")

input$
  .pipe(
    debounceTime<KeyboardEvent>(500),
    tap(console.log),
    // pluck("target", "value"),
    // filter((valor) => valor !== ""),
    // map((valor) =>
    //   ajax.getJSON(`https://api.github.com/search/users?q=${valor}`)
    // ),
    // mergeAll(),
    // pluck("items")
  )
  .subscribe({
    // next: (valor : any) => mostrarPokemons(valor),
  });
