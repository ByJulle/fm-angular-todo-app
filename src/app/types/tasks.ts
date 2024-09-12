export type ToDo = {
  id: string;
  title: string;
  status: TASK_STATUS;
};

export enum TASK_STATUS {
  ACTIVE = 'active',
  COMPLETED = 'completed',
}
