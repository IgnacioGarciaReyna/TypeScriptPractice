import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import { Phrases } from "./entity/User";

createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "WalterWhite",
  password: "Codellege.",
  database: "gameofthronesquotes",
  entities: [Phrases],
  synchronize: false,
  logging: true,
})
  .then((connection) => {(
    console.log("La conexión funciona correctamente"),
    console.log(Phrases)
    )})
  .catch((error) => console.log(`Error creado por ${error}`));
