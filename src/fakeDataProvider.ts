import {
  BoardInfo,
  ColumnInfo,
  IDataProvider,
  TaskInfo,
} from "./dataProvider/index";

let Boards: BoardInfo[] = [
  { id: "1", title: "Board 1" },
  { id: "2", title: "Board 2" },
];

let Columns: ColumnInfo[] = [
  { boardId: "1", id: "1", title: "Column 1" },
  { boardId: "2", id: "2", title: "Column 1" },
];

let Tasks: TaskInfo[] = [
  { id: "1", title: "Task 1", boardId: "1", columnId: "1" },
  { id: "2", title: "Task 2", boardId: "1", columnId: "1" },
  { id: "3", title: "Task 3", boardId: "1", columnId: "1" },
];

export class FakeDataProvider implements IDataProvider {
  deleteColumn(columnId: string): void {
    const columnToDelete = Columns.find((a) => a.id == columnId);
    if (columnToDelete) Columns.splice(Columns.indexOf(columnToDelete), 1);
  }
  deleteTask(taskId: string): void {
    const taskToDelete = Tasks.find((a) => a.id == taskId);
    if (taskToDelete) Tasks.splice(Tasks.indexOf(taskToDelete), 1);
  }

  deleteBoard(boardId: string): void {
    const boardToDelete = Boards.find((a) => a.id == boardId);
    if (boardToDelete) Boards.splice(Boards.indexOf(boardToDelete), 1);
    Columns = Columns.filter((a) => a.boardId != boardId);
    Tasks = Tasks.filter((a) => a.boardId != boardId);
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
      boardId,
      id: this._generateId(),
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
      boardId,
      columnId,
      id: this._generateId(),
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
