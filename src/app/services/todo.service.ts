import { Injectable } from "@angular/core";
import { Task } from "../models/task.model";
import { StorageService } from "./storage.service";

@Injectable()
export class TodoService {

    public todoTasks: Array<Task>;
    public completedTasks: Array<Task>;

    constructor(private storageService: StorageService) {
        this.todoTasks = this.storageService.getTask('todo');
        this.completedTasks = this.storageService.getTask('completed');
    }

    removeCompletedTask(task: Task, index: number) {
        this.completedTasks.splice(index, 1);
        this.storageService.storeTask('completed', this.completedTasks);
        console.log(task);
    }

    /**
     * Rimuove un task
     * @param task
     */
    removeTask(task: Task, index: number) {
        this.todoTasks.splice(index, 1);
        this.storageService.storeTask('todo', this.todoTasks);
        console.log(task);
    }

    /**
     * Rimuove un task dalla lista delle cose da fare
     * e lo aggiunge a quelle completate
     * @param task
     * @param index
     */
    completedTask(task: Task, index: number) {
        this.todoTasks.splice(index, 1);
        task.completed = true;
        this.completedTasks.push(task);
        this.storageService.storeTask('todo', this.todoTasks);
        this.storageService.storeTask('completed', this.completedTasks);
        console.log(task);

    }

    /**
     * Aggiunge un task
     * @param task
     */
    addTask(task: string) {
        this.todoTasks.push({
            title: task,
            completed: false
        });
        this.storageService.storeTask('todo', this.todoTasks);
    }
}