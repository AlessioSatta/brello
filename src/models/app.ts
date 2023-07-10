import { IDataProvider } from "../dataProvider/index";
import { IApp, IBoard } from "../interfaces/index";
import { Board } from "./board";

export class App implements IApp {
  private readonly _dataProvider: IDataProvider;

  public constructor(dataProvider: IDataProvider) {
    this._dataProvider = dataProvider;
  }

  public createBoard(title: string): IBoard {
    const dbBoard = this._dataProvider.createBoard(title);
    return new Board(dbBoard, this._dataProvider);
  }

  public getBoards(): IBoard[] {
    const dbBoards = this._dataProvider.getBoards();
    return dbBoards.map((a) => new Board(a, this._dataProvider));
  }
}
