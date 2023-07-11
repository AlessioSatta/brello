import { describe, expect, test } from "@jest/globals";
import { Board } from "../src/models/board";
import { BoardInfo, ColumnInfo, IDataProvider } from "../src/dataProvider";

describe("Board", () => {
  test("getColumns", () => {
    const columns: ColumnInfo[] = [
      { id: "1", boardId: "1", title: "Column 1" },
    ];
    const dataProvider: IDataProvider = {
      getColumns(boardId) {
        return columns;
      },
    } as IDataProvider;
    const boardInfo: BoardInfo = { id: "1", title: "Board 1" };
    const board = new Board(boardInfo, dataProvider);
    const boardColumns = board.getColumns();
    expect(boardColumns).toHaveLength(1);
    expect(boardColumns[0].title).toBe("Column 1");
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
    const boardInfo: BoardInfo = { id: "1", title: "Board 1" };
    const board = new Board(boardInfo, dataProvider);
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
});
