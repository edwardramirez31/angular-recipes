import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  @Output() taskAdded = new EventEmitter<{ title: string; text: string }>();
  @ViewChild('taskTextInput', { static: true }) taskTextInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onTaskAdded(titleInput: HTMLInputElement) {
    this.taskAdded.emit({
      title: titleInput.value,
      text: this.taskTextInput.nativeElement.value,
    });
  }
}
