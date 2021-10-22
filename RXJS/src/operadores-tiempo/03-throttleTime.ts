import { asyncScheduler, fromEvent, throttleTime } from "rxjs";

const click$ = fromEvent(document, "click");

click$.pipe(throttleTime(3000)).subscribe(console.log);

const throttleConfig = {
  leading: false,
  trailing: true,
};

click$.pipe(throttleTime(1000, asyncScheduler, throttleConfig)).subscribe({
  next(tv: Event) {
    console.log(`double-clicked! Timestamp ${tv.timeStamp}`);
  },
});
