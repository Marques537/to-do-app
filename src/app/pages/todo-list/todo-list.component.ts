import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
@Component({
  selector: 'pages-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  taskList: Task[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
