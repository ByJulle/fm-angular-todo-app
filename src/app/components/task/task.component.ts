import { Component } from '@angular/core';

@Component({
  selector: 'task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export default class TaskComponent {
  task = 'Take out trash';
}
