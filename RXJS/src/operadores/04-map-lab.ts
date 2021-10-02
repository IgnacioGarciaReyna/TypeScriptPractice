import { fromEvent, map, pluck, tap } from "rxjs";

const texto = document.createElement("div");

texto.innerHTML = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, ut eaque cum nostrum nam expedita sunt asperiores, similique reiciendis non odio aperiam voluptatibus voluptatum, explicabo repellendus! Laborum harum mollitia voluptatum corrupti pariatur? Aliquam laborum harum commodi, aperiam eius culpa, natus debitis minus sunt ad, modi sequi incidunt odio nisi.`;

const body = document.querySelector("body");

body?.append(texto); //Existe body? entonces aplicale la función. no existe? entonces no apliques pero no des error.

const progressbar = document.createElement("div");
progressbar.setAttribute("class", "progress-bar");
body?.append(progressbar);

const calcularPorcentajeScroll = (docElem: any) => {
  let scrollTop = docElem.scrollTop;
  let scrollHeight = docElem.scrollHeight;
  let clientHeight = docElem.clientHeight;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

//streams

const scroll$ = fromEvent<MouseEvent>(document, "scroll");

scroll$
  .pipe(
    pluck("target", "documentElement"),
    map((docElem) => calcularPorcentajeScroll(docElem)),
    tap(console.log)
  )
  .subscribe({
    next: (porcentaje: number) => {
      progressbar.style.width = `${porcentaje}%`;
    },
  });
