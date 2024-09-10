import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { TaskListComponent } from './components/task-list/task-list.component';

const ROUTES = [HomeComponent];
const COMPONENTS = [TaskListComponent];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...COMPONENTS, ...ROUTES, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-todo-app';
}
