import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() task: { index: number; title: string; text: string };
  @Output() taskChanged = new EventEmitter<{
    newText: string;
    index: number;
  }>();
  @Output() taskDeleted = new EventEmitter<number>();
  isEditing = false;
  taskEditingText: string;

  constructor() {}

  ngOnInit(): void {
    if (!this.taskEditingText) {
      this.taskEditingText = this.task.text;
    }
  }

  onEditClicked() {
    this.isEditing = !this.isEditing;
  }

  onTaskTextModified() {
    this.taskChanged.emit({
      newText: this.taskEditingText,
      index: this.task.index,
    });
  }

  onTaskDeleted() {
    this.taskDeleted.emit(this.task.index);
  }
}
