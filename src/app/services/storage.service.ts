import { Injectable } from "@angular/core";
import { Task } from "../models/task.model";

@Injectable()
export class StorageService {

    constructor() { }

    storeTask(type: string, tasks: Array<Task>) {
        const data = JSON.stringify(tasks);
        localStorage.setItem(type, data);
        console.log(data);
    }


    /**
     * Recupera una listadi Task dal Local Storage
     * se è presente ritorna la lista dei dati salvati
     * altrimenti ritorna una lista vuota
     * @param type 
     */
    getTask(type: string): Array<Task> {
        const data = localStorage.getItem(type);
        if (data) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }
}