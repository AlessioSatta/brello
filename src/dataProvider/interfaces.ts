import { BoardInfo, ColumnInfo, TaskInfo } from "./types";

export interface IDataProvider {
  createBoard(title: string): BoardInfo;
  createColum(boardId: string, title: string): ColumnInfo;
  createTask(boardId: string, columnId: string, title: string): TaskInfo;
  deleteBoard(boardId: string): void;
  deleteColumn(columnId: string): void;
  deleteTask(taskId: string): void;
  getBoards(): BoardInfo[];
  getColumns(boardId: string): ColumnInfo[];
  getColumnTasks(columnId: string): TaskInfo[];
  upateBoardTitle(boardId: string, title: string): void;
  updateColumnTitle(columnId: string, title: string): void;
  updateTaskColumn(taskId: string, targetColumnId: string): void;
  updateTaskTitle(taskId: string, title: string): void;
}
