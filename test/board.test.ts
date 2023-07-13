import { describe, expect, jest, test } from "@jest/globals";
import { Board } from "../src/models/board";
import { BoardInfo, ColumnInfo, IDataProvider } from "../src/dataProvider";

describe("Board", () => {
  test("getColumns", () => {
    const dataProvider: IDataProvider = {
      getColumns: jest.fn(() => []) as IDataProvider["getColumns"],
    } as IDataProvider;
    const board = new Board({ id: "1", title: "Board 1" }, dataProvider);
    board.getColumns();
    expect(dataProvider.getColumns).toBeCalled();
  });

  test("createColumn", () => {
    const columns: ColumnInfo[] = [];
    const dataProvider: IDataProvider = {
      getColumns(boardId) {
        return columns;
      },
      createColum(boardId, title) {
        const column: ColumnInfo = { boardId: boardId, id: "1", title };
        columns.push(column);
        return column;
      },
    } as IDataProvider;
    const board = new Board({ id: "1", title: "Board 1" }, dataProvider);
    const prevBoardColumns = board.getColumns().length;
    const columnTitle = "Nuova colonna";
    board.createColum(columnTitle);
    const boardColumns = board.getColumns();
    expect(boardColumns.length).toBe(prevBoardColumns + 1);
    expect(boardColumns.find((a) => a.title == columnTitle)).toBeDefined();
  });

  test("updateBoardTitle", () => {
    const dataProvider: IDataProvider = {
      upateBoardTitle: jest.fn() as IDataProvider["upateBoardTitle"], // as (boardId: string, title: string) => void
    } as IDataProvider;
    const board = new Board({ id: "1", title: "Board 1" }, dataProvider);
    expect(board.title).toBe("Board 1");
    const newBoardTitle = "New board Title";
    board.updateTitle(newBoardTitle);
    expect(dataProvider.upateBoardTitle).toBeCalled();
    expect(board.title).toBe(newBoardTitle);
  });

  test("deleteBoard", () => {
    const dataProvider: IDataProvider = {
      deleteBoard: jest.fn() as IDataProvider["deleteBoard"],
    } as IDataProvider;
    const board = new Board({ id: "1" } as BoardInfo, dataProvider);
    expect(board).toBeInstanceOf;
    board.delete();
    expect(dataProvider.deleteBoard).toBeCalled();
  });
});
