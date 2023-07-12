import { describe, expect, jest, test } from "@jest/globals";
import { Column } from "../src/models/column";
import { TaskInfo, IDataProvider } from "../src/dataProvider";

describe("Column", () => {
  test("getTasks", () => {
    const dataProvider: IDataProvider = {
      getColumnTasks: jest.fn(() => []) as IDataProvider["getColumnTasks"],
    } as IDataProvider;
    const column = new Column(
      { id: "1", boardId: "1", title: "Colonna 1" },
      dataProvider
    );
    column.getTasks();
    expect(dataProvider.getColumnTasks).toBeCalled();
  });

  test("createTask", () => {
    const tasks: TaskInfo[] = [];
    const dataProvider: IDataProvider = {
      getColumnTasks(columnId) {
        return tasks;
      },
      createTask(boardId, columnId, title) {
        const task: TaskInfo = {
          id: "1",
          boardId: "1",
          columnId: "1",
          title: title,
        };
        tasks.push(task);
        return task;
      },
    } as IDataProvider;
    const column = new Column(
      { id: "1", boardId: "1", title: "Colonna 1" },
      dataProvider
    );
    const prevColumnTask = column.getTasks().length;
    const taskTitle = "Nuovo task";
    column.createTask(taskTitle);
    const columnTasks = column.getTasks();
    expect(columnTasks.length).toBe(prevColumnTask + 1);
    expect(columnTasks[0].title).toBe(taskTitle);
  });

  test("updateColumnTitle", () => {
    const dataProvider: IDataProvider = {
      updateColumnTitle: jest.fn() as IDataProvider["updateColumnTitle"],
    } as IDataProvider;
    const column = new Column(
      { id: "1", boardId: "1", title: "Colonna 1" },
      dataProvider
    );
    expect(column.title).toBe("Colonna 1");
    const newColumnTitle = "Nuovo titolo colonna";
    column.updateTitle(newColumnTitle);
    expect(dataProvider.updateColumnTitle).toBeCalled();
    expect(column.title).toBe(newColumnTitle);
  });

  test("deleteColumn", () => {
    const dataProvider: IDataProvider = {
      deleteColumn: jest.fn() as IDataProvider["deleteColumn"],
    } as IDataProvider;
    const column = new Column(
      { id: "1", boardId: "1", title: "Colonna 1" },
      dataProvider
    );
    expect(column).toBeInstanceOf;
    column.delete();
    expect(dataProvider.deleteColumn).toBeCalled();
  });
});
