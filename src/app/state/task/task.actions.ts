import { createAction, props } from '@ngrx/store';
import { ToDo } from '../../types/tasks';

export const addTask = createAction(
  '[Tasks] Add task',
  props<{ title: string }>(),
);
export const removeTask = createAction(
  '[Tasks] Remove task',
  props<{ id: string }>(),
);
export const updateTaskStatus = createAction(
  '[Tasks] Update task status',
  props<{ id: string; newStatus: string }>(),
);

export const updateTasksArray = createAction(
  '[Tasks] Update tasks array',
  props<{ tasks: ToDo[] }>(),
);
