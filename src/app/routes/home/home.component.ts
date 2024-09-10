import { Component } from '@angular/core';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskListComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  tasks = [
    {
      id: '0',
      title: 'Throw out trash',
      status: '',
    },
    {
      id: '1',
      title: 'Make dinner',
      status: '',
    },
  ];
  newTask = new FormControl('', [Validators.required, Validators.minLength(3)]);

  createNewTask(task: string) {
    this.tasks.push({
      id: '0',
      title: task,
      status: 'active',
    });
  }

  submitTodo(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      if (this.newTask.value !== null && !this.newTask.invalid)
        this.createNewTask(this.newTask.value);
    }
  }
}
