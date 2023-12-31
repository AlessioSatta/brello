import { IBoard, IColumn } from "../interfaces";
import { Column } from "./column";
import { BoardInfo, IDataProvider } from "./data-provider";

export class Board implements IBoard {
  private readonly _boardInfo: BoardInfo;
  private readonly _dataProvider: IDataProvider;

  public constructor(boardInfo: BoardInfo, dataProvider: IDataProvider) {
    this._boardInfo = boardInfo;
    this._dataProvider = dataProvider;
  }
  public get title(): string {
    return this._boardInfo.title;
  }

  createColum(title: string): IColumn {
    const dbColumn = this._dataProvider.createColum(this._boardInfo.id, title);
    return new Column(dbColumn, this._dataProvider);
  }

  delete(): void {
    this._dataProvider.deleteBoard(this._boardInfo.id);
  }

  getColumns(): IColumn[] {
    const dbColumns = this._dataProvider.getColumns(this._boardInfo.id);
    return dbColumns.map((a) => new Column(a, this._dataProvider));
  }

  updateTitle(title: string): void {
    this._boardInfo.title = title;
    this._dataProvider.upateBoardTitle(this._boardInfo.id, title);
  }
}
