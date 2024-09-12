import { Component, EventEmitter, Input, Output } from '@angular/core';
import TaskComponent from '../task/task.component';
import { NgFor, NgIf } from '@angular/common';
import { TASK_STATUS, ToDo } from '../../types/tasks';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { AppState } from '../../state/app.state';
import { Store } from '@ngrx/store';
import {
  removeTask as removeTaskAction,
  updateTaskStatus,
  updateTasksArray,
  clearCompletedTasks,
} from '../../state/task/task.actions';
@Component({
  selector: 'task-list',
  standalone: true,
  imports: [TaskComponent, NgFor, NgIf, CdkDrag, CdkDropList],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  // Component props
  @Input() tasks: ToDo[] = [];

  @Output() filterTasks = new EventEmitter(true);

  TASK_STATUS = TASK_STATUS;
  constructor(private store: Store<AppState>) {}

  // Internal logic variables

  // Internal logic
  updateStatus(id: string, currentStatus: TASK_STATUS) {
    let updatedStatus;
    if (currentStatus === TASK_STATUS.ACTIVE) {
      updatedStatus = TASK_STATUS.COMPLETED;
    } else {
      updatedStatus = TASK_STATUS.ACTIVE;
    }
    this.store.dispatch(updateTaskStatus({ id, newStatus: updatedStatus }));
  }
  removeTask(id: string) {
    this.store.dispatch(removeTaskAction({ id }));
  }

  clearCompletedTasks() {
    this.store.dispatch(clearCompletedTasks());
  }

  // DragnDrop logic
  drop(event: CdkDragDrop<ToDo[]>) {
    let tmp_tasks = [...this.tasks];
    if (tmp_tasks !== null) {
      moveItemInArray(tmp_tasks, event.previousIndex, event.currentIndex);
    }
    this.store.dispatch(updateTasksArray({ tasks: tmp_tasks }));
  }
}
