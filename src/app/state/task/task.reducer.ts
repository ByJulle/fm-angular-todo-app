import { TASK_STATUS, ToDo } from './../../types/tasks';
import { createReducer, on } from '@ngrx/store';
import {
  addTask,
  removeTask,
  updateTasksArray,
  updateTaskStatus,
} from './task.actions';
import { v4 as uuid } from 'uuid';
export interface TasksState {
  tasks: ToDo[];
}
const initialState: TasksState = {
  tasks: [],
};

export const tasksReducer = createReducer(
  initialState,
  on(addTask, (state, { title }) => ({
    ...state,
    tasks: [
      ...state.tasks,
      { id: uuid(), title: title, status: TASK_STATUS.ACTIVE },
    ],
  })),
  on(removeTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== id),
  })),
  on(updateTaskStatus, (state, { id, newStatus }) => ({
    ...state,
    tasks: state.tasks.map((task) => {
      let tmp = task.status;
      if (task.id === id) {
        tmp = newStatus;
      }
      return { ...task, status: tmp };
    }),
  })),
  on(updateTasksArray, (state, { tasks }) => ({
    ...state,
    tasks,
  })),
);
