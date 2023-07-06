import { IColumn } from "./column.interface";

export interface IBoard {
  readonly title: string;
  createColum(title: string): IColumn;
  getColumns(): IColumn[];
  deleteColumn(id: string): void;
  updateTitle(title: string): void;
}
