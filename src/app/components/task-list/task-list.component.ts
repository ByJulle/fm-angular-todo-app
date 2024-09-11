import { Component, Input } from '@angular/core';
import TaskComponent from '../task/task.component';
import { NgFor } from '@angular/common';
import { ToDo, ToDoList } from '../../types/tasks';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'task-list',
  standalone: true,
  imports: [TaskComponent, NgFor, CdkDrag, CdkDropList],
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
  removeTask(id: string) {
    console.log('delete', id);
  }
  // DragnDrop logic
  drop(event: CdkDragDrop<ToDoList>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
}
