import { TasksState } from './task/task.reducer';
import { ThemeState } from './theme/theme.reducer';

export interface AppState {
  tasks: TasksState;
  theme: ThemeState;
}
