import { IDataProvider, TaskInfo } from "../dataProvider/index";
import { ITask } from "../interfaces/index";
import { Column } from "./column";

export class Task implements ITask {
  private readonly _taskInfo: TaskInfo;
  private readonly _dataProvider: IDataProvider;

  public constructor(taskInfo: TaskInfo, dataProvider: IDataProvider) {
    this._taskInfo = taskInfo;
    this._dataProvider = dataProvider;
  }

  public get title(): string {
    return this._taskInfo.title;
  }
  delete(): void {
    this._dataProvider.deleteTask(this._taskInfo.id);
  }

  moveToColumn(column: Column): void {
    this._dataProvider.updateTaskColumn(this._taskInfo.id, column.id);
  }

  updateTitle(title: string): void {
    this._dataProvider.updateTaskTitle(this._taskInfo.id, title);
  }
}
