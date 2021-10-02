//Forma anterior:
// let cont = 0;
// document.addEventListener("click", () => {
//   console.log(cont++);
// });

import { fromEvent } from "rxjs";

const obs$ = fromEvent<MouseEvent>(document, "click");
const obs1$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
  next: (val: any) => console.log("next=>", val),
};

obs$.subscribe({
  next:(value) => console.log(value.x, value.y),
});

obs1$.subscribe({
  next: (value) => console.log(value.key),
});