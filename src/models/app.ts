import { IApp, IBoard } from "../interfaces";
import { Board } from "./board";
import { IDataProvider } from "./data-provider";

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
