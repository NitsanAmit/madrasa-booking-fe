import { AvailableSlot } from "../types";
import fetch from 'unfetch';

export class DataAccess{

    baseUrl:string;

    constructor(baseUrl:string){
        this.baseUrl = baseUrl;
    }

    async getAvailableEvents(startDate: Date):Promise<AvailableSlot[]>{
        const url = `${this.baseUrl}/get_available_events?start_datetime=${startDate.toISOString()}`;
        const obj = await (await fetch(url)).json();
        return obj;
    }

    
}