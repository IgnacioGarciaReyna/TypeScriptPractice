import { distinct, from } from "rxjs";

let numberlist: any [] = [1, 1, 2, 3, 2, 4, 3, 4, '1', 1, '2'];

from(numberlist)
  .pipe(distinct())
  .subscribe({
    next: (numero) => console.log(numero),
  });
