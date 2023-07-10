import { IDataProvider, TaskInfo } from "../dataProvider/index";
import { ITask } from "../interfaces/index";

export class Task implements ITask {
  private readonly _taskInfo: TaskInfo;
  private readonly _dataProvider: IDataProvider;

  public constructor(taskInfo: TaskInfo, dataProvider: IDataProvider) {
    this._taskInfo = taskInfo;
    this._dataProvider = dataProvider;
  }
  delete(): void {
    this._dataProvider.deleteTask(this._taskInfo.id);
  }

  public get title(): string {
    return this._taskInfo.title;
  }

  updateTitle(title: string): void {
    this._dataProvider.updateTaskTitle(this._taskInfo.id, title);
  }
}
