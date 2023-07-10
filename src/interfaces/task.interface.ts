import { IColumn } from "./column.interface";

export interface ITask {
  readonly title: string;
  moveToColumn(column: IColumn): void;
  delete(): void;
  updateTitle(title: string): void;
}
