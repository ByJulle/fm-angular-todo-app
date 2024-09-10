import { Component, Input } from '@angular/core';

interface ToDo {
  id: string;
  task: string;
  status: string;
}
@Component({
  selector: 'task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export default class TaskComponent {
  @Input() id: string = '';
  @Input() task: string = '';
}
