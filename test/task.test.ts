import { describe, expect, jest, test } from "@jest/globals";
import { Task } from "../src/models/task";
import { ColumnInfo, IDataProvider, TaskInfo } from "../src/dataProvider";
import { Column } from "../src/models/column";

describe("Task", () => {
  test("updateTitle", () => {
    const dataProvider: IDataProvider = {
      updateTaskTitle: jest.fn() as IDataProvider["updateTaskTitle"],
    } as IDataProvider;
    const task = new Task(
      { id: "1", title: "Task 1" } as TaskInfo,
      dataProvider
    );
    expect(task.title).toBe("Task 1");
    const newTaskTitle = "New Task Title";
    task.updateTitle(newTaskTitle);
    expect(dataProvider.updateTaskTitle).toBeCalled();
    expect(task.title).toBe(newTaskTitle);
  });

  test("deleteTask", () => {
    const dataProvider: IDataProvider = {
      deleteTask: jest.fn() as IDataProvider["deleteTask"],
    } as IDataProvider;
    const task = new Task({ id: "1" } as TaskInfo, dataProvider);
    expect(task).toBeInstanceOf;
    task.delete();
    expect(dataProvider.deleteTask).toBeCalled();
  });

  test("moveToColumn", () => {
    const dataProvider: IDataProvider = {
      updateTaskColumn: jest.fn() as IDataProvider["updateTaskColumn"],
    } as IDataProvider;
    const columnInfo = { id: "1" } as ColumnInfo;
    const column = new Column(columnInfo as ColumnInfo, dataProvider);
    const taskInfo = { id: "1" } as TaskInfo;
    const task = new Task(taskInfo as TaskInfo, dataProvider);
    task.moveToColumn(column);
    expect(dataProvider.updateTaskColumn).toBeCalledWith(
      taskInfo.id,
      columnInfo.id
    );
  });
});
