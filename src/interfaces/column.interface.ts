import { ITask } from "./task.interface";

export interface IColumn {
  readonly title: string;
  createTask(title: string): ITask;
  getTasks(): ITask[];
  deleteTask(id: string): void;
  updateTitle(title: string): void;
}
