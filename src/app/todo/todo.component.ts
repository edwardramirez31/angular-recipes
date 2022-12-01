import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  tasks: { title: string; text: string }[] = [];
  constructor() {}

  ngOnInit(): void {}

  addNewTask(task: { title: string; text: string }) {
    this.tasks.push(task);
  }

  editTaskText({ newText, index }: { newText: string; index: number }) {
    this.tasks = this.tasks.map((task, taskIndex) => {
      if (taskIndex === index) {
        return { ...task, text: newText };
      }
      return { ...task };
    });
  }

  deleteTask(index: number) {
    this.tasks = this.tasks.filter((_, taskIndex) => taskIndex !== index);
  }
}
