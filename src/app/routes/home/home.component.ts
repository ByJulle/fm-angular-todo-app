import { Observable } from 'rxjs';
import { TitleComponent } from './../../components/title/title.component';
import { Component } from '@angular/core';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectAllTasks } from '../../state/task/task.selectors';
import { addTask } from '../../state/task/task.actions';
import { AppState } from '../../state/app.state';
import { AsyncPipe } from '@angular/common';
import { ToDo } from '../../types/tasks';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TaskListComponent,
    TitleComponent,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  tasks: Observable<ToDo[]>;
  constructor(private store: Store<AppState>) {
    this.tasks = store.select(selectAllTasks);
  }

  ngOnInit() {
    this.tasks.subscribe((data) => console.log(data));
  }

  newTask = new FormControl('', [Validators.required, Validators.minLength(3)]);

  createNewTask(task: string) {
    this.store.dispatch(addTask({ title: task }));
  }

  submitTodo(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      if (this.newTask.value !== null && !this.newTask.invalid) {
        this.createNewTask(this.newTask.value);
        this.newTask.reset();
      }
    }
  }
}
