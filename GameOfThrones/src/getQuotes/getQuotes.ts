import axios, { AxiosRequestConfig } from "axios";



export class getPhrasesFromApi {
    axiosConfiguration: AxiosRequestConfig = {
        method: "GET",
        url: "https://game-of-thrones-quotes.herokuapp.com/v1/random/20"
    };
    
}