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

    async bookSlot(startDate: Date, student_id: string, teacher_id: string, recurrences: number, interval_days: number): Promise<any>{
        const url = `${this.baseUrl}/book_event_bundle`;
        const body = {
            start_datetime: startDate.toISOString(),
            student_ids: [student_id],
            teacher_ids: [teacher_id],
            recurrences,
            interval_days
        };
        const ops = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        const obj = await (await fetch(url, ops)).json();
        return obj;
    }
    
}