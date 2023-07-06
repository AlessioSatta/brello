import { IDataProvider } from "../dataProvider/interfaces";
import { BoardInfo, ColumnInfo, TaskInfo } from "../dataProvider/types";
import { IBoard, IColumn } from "../interfaces/index";
import { Column } from "./column";

export class Board implements IBoard {
  private readonly _boardInfo: BoardInfo;
  private readonly _dataProvider: IDataProvider;

  public constructor(boardInfo: BoardInfo, dataProvider: IDataProvider) {
    this._boardInfo = boardInfo;
    this._dataProvider = dataProvider;
  }
  deleteColumn(id: string): void {
    throw new Error("Method not implemented.");
  }

  public get title(): string {
    return this._boardInfo.title;
  }

  createColum(title: string): IColumn {
    const dbColumn = this._dataProvider.createColum(title, this._boardInfo.id);
    return new Column(dbColumn, this._dataProvider);
  }
  getColumns(): IColumn[] {
    const dbColumns = this._dataProvider.getColumns(this._boardInfo.id);
    return dbColumns.map((a) => new Column(a, this._dataProvider));
  }

  updateTitle(title: string): void {
    this._dataProvider.upateBoardTitle(this._boardInfo.id, title);
  }
}
