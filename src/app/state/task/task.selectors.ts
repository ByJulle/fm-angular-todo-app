import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { TasksState } from './task.reducer';

export const selectTasks = (state: AppState) => state.tasks;
export const selectAllTasks = createSelector(
  selectTasks,
  (state: TasksState) => state.tasks,
);
