import { Component } from '@angular/core';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
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
      id: uuidv4(),
      title: 'Throw out trash',
      status: 'active',
    },
    {
      id: uuidv4(),
      title: 'Make dinner',
      status: 'completed',
    },
  ];
  newTask = new FormControl('', [Validators.required, Validators.minLength(3)]);

  createNewTask(task: string) {
    this.tasks.push({
      id: uuidv4(),
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
