import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';

const ROUTES = [HomeComponent];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...ROUTES, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-todo-app';
}
