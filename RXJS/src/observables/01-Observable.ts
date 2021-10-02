import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next:(value) => console.log(`siguiente [next]:`, value),
  error:(error) => console.log(`error [obs]:`, error),
  complete:() => console.info(`completado [obs]`),
}

const numberList = [10, 20, 30];

const obs$ = new Observable<number>((sub) => {
    numberList.forEach((numero) => {
        sub.next(numero);
    })

  //Forzar un error
  //   const a: any = undefined;

  //   a!.nombre = "Carlos";

  sub.complete();
});

obs$.subscribe(observer);
