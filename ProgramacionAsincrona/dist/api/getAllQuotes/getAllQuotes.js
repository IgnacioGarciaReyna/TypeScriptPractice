"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
let axiosConfiguracion = {
    method: 'GET',
    url: "https://www.breakingbadapi.com/api/quotes",
};
axios_1.default(axiosConfiguracion).then(QuotesList => {
    console.log(QuotesList.data);
}).catch(error => {
    console.log(`Hubo un error en getAllQuotes`);
});
//# sourceMappingURL=getAllQuotes.js.map