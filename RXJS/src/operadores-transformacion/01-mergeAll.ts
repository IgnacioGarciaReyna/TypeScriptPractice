// import { fromEvent, interval, map, mergeAll, tap } from "rxjs";

import {
  debounceTime,
  filter,
  fromEvent,
  map,
  mergeAll,
  Observable,
  pluck,
} from "rxjs";

import { ajax } from "rxjs/ajax";
import {
  GithubUser,
  GithubUsersResp,
} from "../interfaces/github-users.interface";

// let numeroClicks: number = 0;

// const click$ = fromEvent(document, "click");

// const highOrder = click$.pipe(
//     tap((_) => numeroClicks++),
//     map((ev) => interval(3000)),
//     mergeAll()
// );

// highOrder.subscribe(console.log);

const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");
body?.append(textInput, orderList);

//helpers

const mostrarUsuarios = (usuarios: GithubUser[]) => {
  orderList.innerHTML = "";
  for (const usuario of usuarios) {
    const li = document.createElement("li");
    const img = document.createElement("img");

    img.src = usuario.avatar_url;

    const anchor = document.createElement("a");
    anchor.href = usuario.html_url;
    anchor.text = "Ver página";
    anchor.target = "_blank";

    li.append(img);
    li.append(usuario.login + " ");
    li.append(anchor);

    orderList.append(li);
  }
};

//streams

const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$
  .pipe(
    debounceTime<KeyboardEvent>(500),
    pluck("target", "value"),
    filter((valor) => valor !== ""),
    map<any, Observable<GithubUsersResp>>((valor) =>
      ajax.getJSON(`https://api.github.com/search/users?q=${valor}`)
    ),
    mergeAll(),
    pluck("items")
  )
  .subscribe({
    next: mostrarUsuarios,
  });
