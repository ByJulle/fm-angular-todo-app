export type ToDo = {
  id: string;
  title: string;
  status: string;
};

export type ToDoList = ToDo[];

export enum TASK_STATUS {
  ACTIVE = 'active',
  COMPLETED = 'completed',
}
