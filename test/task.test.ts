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
      { id: "1", boardId: "1", columnId: "1", title: "Task 1" },
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
    const task = new Task(
      { id: "1", boardId: "1", columnId: "1", title: "Task 1" },
      dataProvider
    );
    expect(task).toBeInstanceOf;
    task.delete();
    expect(dataProvider.deleteTask).toBeCalled();
  });

  test("moveToColumn", () => {
    const taskInfo: TaskInfo = {
      id: "1",
      boardId: "1",
      columnId: "2",
      title: "Task 1",
    };
    const columnInfo: ColumnInfo = { id: "1", boardId: "1", title: "Column 1" };
    const dataProvider: IDataProvider = {
      updateTaskColumn: jest.fn() as IDataProvider["updateTaskColumn"],
      getColumns: jest.fn() as IDataProvider["getColumns"],
    } as IDataProvider;

    const column = new Column(columnInfo, dataProvider);
    const task = new Task(taskInfo, dataProvider);
    expect(column).toBeInstanceOf;
    expect(task).toBeInstanceOf;
    const task1 = taskInfo.columnId;
    const column1 = columnInfo.id;
    expect(task1).not.toBe(column1);
    task.moveToColumn(column);
    expect(dataProvider.updateTaskColumn).toBeCalled();
  });
});
