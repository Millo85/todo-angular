import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Il Mio Titolo';

  //dichiaro una variabile false boolean
  changed: boolean = false;

  //dichiaro va variabile che prende valore null
  newTask: string;

  name: string;

  constructor(public todoService: TodoService) { }

  ngOnInit() {
    console.log('Sono init');
    console.log(this.todoService.todoTasks);
    //assegno alla variabile una stringa vuota
    this.newTask = '';
    this.name = 'COSIMO COSTANTINI';
  }

  addTask() {
    if (this.newTask.trim().length > 0) {
      this.todoService.addTask(this.newTask);
      this.newTask = '';
      console.log(this.newTask);
    }
  }

  //cambio titilo con il click del button
  public changeTitle() {
    if (this.changed) {
      this.title = 'Il Mio Titolo';
      this.changed = false;
    } else {
      this.changed = true;
      this.title = 'paperino'
    }
  }




}
