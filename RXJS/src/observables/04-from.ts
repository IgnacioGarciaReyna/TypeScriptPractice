import { from, Observer, of } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log(`siguiente [next]:`, value),
  error: (error) => console.log(`error [obs]:`, error),
  complete: () => console.info(`completado [obs]`),
};

let nombre: string = "Nacho";

let numeroAleatorio = .3;

let numberList: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

const promesa1 = new Promise<boolean>((resolve, reject) => {
  if(numeroAleatorio > 0.5){
    resolve(true);
  } else {
    reject(false);
  }
})

const obs$ = from(promesa1);

obs$.subscribe(observer);