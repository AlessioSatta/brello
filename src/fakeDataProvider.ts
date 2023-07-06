import {
  BoardInfo,
  ColumnInfo,
  IDataProvider,
  TaskInfo,
} from "./dataProvider/index";

const Boards: BoardInfo[] = [
  { id: "1", title: "Board 1" },
  { id: "2", title: "Board 2" },
];

const Columns: ColumnInfo[] = [
  { boardId: "1", id: "1", title: "Column 1" },
  { boardId: "2", id: "2", title: "Column 1" },
];

const Tasks: TaskInfo[] = [
  { id: "1", title: "Task 1", boardId: "1", columnId: "1" },
  { id: "2", title: "Task 2", boardId: "1", columnId: "1" },
  { id: "3", title: "Task 3", boardId: "1", columnId: "1" },
];

export class FakeDataProvider implements IDataProvider {
  deleteTask(taskId: string): void {}

  deleteBoard(boardId: string): void {
    throw new Error("Method not implemented.");
  }
  deleteColumn(columnId: string): void {
    throw new Error("Method not implemented.");
  }
  public createBoard(title: string): BoardInfo {
    const board: BoardInfo = {
      id: this._generateId(),
      title,
    };
    Boards.push(board);
    return board;
  }

  public createColum(boardId: string, title: string): ColumnInfo {
    const column: ColumnInfo = {
      id: this._generateId(),
      boardId,
      title,
    };
    Columns.push(column);
    return column;
  }

  public createTask(
    boardId: string,
    columnId: string,
    title: string
  ): TaskInfo {
    const task: TaskInfo = {
      id: this._generateId(),
      boardId,
      columnId,
      title,
    };

    Tasks.push(task);
    return task;
  }

  public getBoards(): BoardInfo[] {
    return Boards;
  }

  public getColumns(columnId: string): ColumnInfo[] {
    return Columns.filter((a) => a.id == columnId);
  }

  public getColumnTasks(columnId: string): TaskInfo[] {
    return Tasks.filter((a) => a.columnId == columnId);
  }

  public upateBoardTitle(boardId: string, title: string): void {
    const board = Boards.find((a) => a.id == boardId);
    if (board) board.title = title;
  }

  public updateColumnTitle(columnId: string, title: string): void {
    const column = Columns.find((a) => a.id == columnId);
    if (column) column.title = title;
  }

  public updateTaskTitle(taskId: string, title: string): void {
    const task = Tasks.find((a) => a.id == taskId);
    if (task) task.title = title;
  }

  private _generateId(): string {
    return Math.floor(Math.random() * 1000).toString();
  }
}
