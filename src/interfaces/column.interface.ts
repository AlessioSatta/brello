import { ITask } from "./task.interface";

export interface IColumn {
  readonly title: string;
  createTask(title: string): ITask;
  delete(): void;
  getTasks(): ITask[];
  updateTitle(title: string): void;
}
