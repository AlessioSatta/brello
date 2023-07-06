import { BoardInfo, ColumnInfo, TaskInfo } from "./types";

export interface IDataProvider {
  createBoard(title: string): BoardInfo;
  createColum(boardId: string, title: string): ColumnInfo;
  createTask(boardId: string, columnId: string, title: string): TaskInfo;
  getBoards(): BoardInfo[];
  getColumns(columnId: string): ColumnInfo[];
  getColumnTasks(columnId: string): TaskInfo[];
  upateBoardTitle(boardId: string, title: string): void;
  updateColumnTitle(columnId: string, title: string): void;
  updateTaskTitle(taskId: string, title: string): void;
  deleteBoard(boardId: string): void;
  deleteColumn(columnId: string): void;
  deleteTask(taskId: string): void;
}
