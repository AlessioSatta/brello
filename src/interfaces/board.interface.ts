import { IColumn } from "./column.interface";

export interface IBoard {
  readonly title: string;
  createColum(title: string): IColumn;
  delete(): void;
  getColumns(): IColumn[];
  updateTitle(title: string): void;
}
