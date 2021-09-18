import axios, { AxiosRequestConfig } from "axios";
import { getManager } from "typeorm";
import { Phrases } from "../entity/Phrases";



export class getPhrasesFromApi {
    axiosConfiguration: AxiosRequestConfig = {
        method: "GET",
        url: "https://game-of-thrones-quotes.herokuapp.com/v1/random/20"
    };

    savePhrase(){
        try {
            getManager()
            .createQueryBuilder()
            .insert()
            .into(Phrases)
            .values([
                {
                    sentence: "He was no dragon. Fire cannot kill a dragon.",
                    characterName:"Daenerys Targaryen",
                    characterSlug: "daenerys",
                    characterHouseName: "House Targaryen of King's Landing",
                    characterHouseSlug: "targaryen"
                }     
            ])
            .execute;
        } catch (error) {
            console.log(error);
        }
    }

    
    
}