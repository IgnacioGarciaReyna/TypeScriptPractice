import axios, { AxiosRequestConfig } from "axios";


let axiosConfiguracion : AxiosRequestConfig = {
    method: 'GET',
    url: "https://www.breakingbadapi.com/api/quotes",
};

axios(axiosConfiguracion).then(QuotesList => {
    console.log(QuotesList.data);
}).catch(error => {
    console.log(`Hubo un error en getAllQuotes`);
});