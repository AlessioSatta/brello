import { IBoard } from "./board.interface";

export interface IApp {
  createBoard(title: string): IBoard;
  getBoards(): IBoard[];
}
