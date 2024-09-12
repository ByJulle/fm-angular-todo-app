import { TASK_STATUS, ToDo } from './../../types/tasks.d';
import { createReducer, on } from '@ngrx/store';
import { addTask, removeTask, updateTaskStatus } from './task.actions';
import { v4 as uuid } from 'uuid';
export interface TasksState {
  tasks: ToDo[];
}
const initialState: TasksState = {
  tasks: [],
};

export const tasksReducer = createReducer(
  initialState,
  on(addTask, (state, { title }) => {
    console.log(title);
    return {
      ...state,
      tasks: [...state.tasks, { id: uuid(), title: title, status: 'active' }],
    };
  }),
  on(removeTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== id),
  })),
  on(updateTaskStatus, (state, { id, newStatus }) => {
    return {
      ...state,
    };
  }),
);
