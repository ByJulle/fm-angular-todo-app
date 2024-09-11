import { Component, Input } from '@angular/core';
import TaskComponent from '../task/task.component';
import { NgFor } from '@angular/common';
import { ToDoList } from '../../types/tasks';
@Component({
  selector: 'task-list',
  standalone: true,
  imports: [TaskComponent, NgFor],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  // Component props
  @Input() tasks: ToDoList = [];

  // Internal logic
  updateStatus(id: string) {
    console.log('update:', id);
  }
}
