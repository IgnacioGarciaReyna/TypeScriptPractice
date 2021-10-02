import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next:(value) => console.log(`siguiente [next]:`, value),
  error:(error) => console.log(`error [obs]:`, error),
  complete:() => console.info(`completado [obs]`),
};

const intervalo$ = new Observable <number> ((subscriber) => {
    let count = 0;

    setInterval(() =>{
        count++
        subscriber.next(count);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 10000);
});

const subs1 = intervalo$.subscribe(observer);

setTimeout(() => {
    subs1.unsubscribe();
}, 10000);


