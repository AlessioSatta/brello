import { IColumn, ITask } from "../interfaces";
import { ColumnInfo, IDataProvider } from "./data-provider";
import { Task } from "./task";

export class Column implements IColumn {
  private readonly _columnInfo: ColumnInfo;
  private readonly _dataProvider: IDataProvider;

  public constructor(columnInfo: ColumnInfo, dataProvider: IDataProvider) {
    this._columnInfo = columnInfo;
    this._dataProvider = dataProvider;
  }

  public get id(): string {
    return this._columnInfo.id;
  }
  public get title(): string {
    return this._columnInfo.title;
  }

  createTask(title: string): ITask {
    const dbTask = this._dataProvider.createTask(
      this._columnInfo.boardId,
      this._columnInfo.id,
      title
    );
    return new Task(dbTask, this._dataProvider);
  }

  delete(): void {
    this._dataProvider.deleteColumn(this._columnInfo.id);
  }

  getTasks(): ITask[] {
    const dbTasks = this._dataProvider.getColumnTasks(this._columnInfo.id);
    return dbTasks.map((a) => new Task(a, this._dataProvider));
  }
  updateTitle(title: string): void {
    this._columnInfo.title = title;
    this._dataProvider.updateColumnTitle(this._columnInfo.id, title);
  }
}
