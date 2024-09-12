import { Observable, of, filter as filterPipe, map, tap } from 'rxjs';
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
import { AsyncPipe, NgIf } from '@angular/common';
import { TASK_STATUS, ToDo } from '../../types/tasks';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TaskListComponent,
    TitleComponent,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    NgIf,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  tasks: Observable<ToDo[]> = of<ToDo[]>([]);
  constructor(private store: Store<AppState>) {
    this.tasks = store.select(selectAllTasks);
  }

  newTask = new FormControl('', [Validators.required, Validators.minLength(3)]);

  createNewTask(task: string) {
    this.store.dispatch(addTask({ title: task }));
  }

  filterTasks(filter: TASK_STATUS | 'all') {
    if (filter !== 'all')
      this.tasks = this.store
        .select(selectAllTasks)
        .pipe(map((tasks) => tasks.filter((task) => task.status === filter)));
    else this.tasks = this.store.select(selectAllTasks);
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
