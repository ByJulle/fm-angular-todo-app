import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { Store } from '@ngrx/store';
import { selectTheme } from './state/theme/theme.selectors';
import { Observable } from 'rxjs';
import { THEME } from './types/theme';
import { AppState } from './state/app.state';
import { AsyncPipe } from '@angular/common';

const ROUTES = [HomeComponent];
const COMPONENTS = [TaskListComponent];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...COMPONENTS, ...ROUTES, RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-todo-app';

  currentTheme$: Observable<THEME> = new Observable<THEME>();

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.currentTheme$ = this.store.select(selectTheme);
  }
}
