import { describe, expect, test } from "@jest/globals";
import { App } from "../src/models/app";
import { BoardInfo, IDataProvider } from "../src/dataProvider";

describe("App", () => {
  test("getBoards", () => {
    const boards: BoardInfo[] = [{ id: "1", title: "Board 1" }];
    const dataProvider: IDataProvider = {
      getBoards() {
        return boards;
      },
    } as IDataProvider;
    const app = new App(dataProvider);
    const appBoards = app.getBoards();
    expect(appBoards).toHaveLength;
    expect(appBoards.find((a) => a.title == boards[0].title)).toBeDefined();
  });

  test("createBorad", () => {
    const boards: BoardInfo[] = [];
    const dataProvider: IDataProvider = {
      createBoard(title) {
        const board: BoardInfo = { id: "1", title };
        boards.push(board);
        return board;
      },
      getBoards() {
        return boards;
      },
    } as IDataProvider;
    const app = new App(dataProvider);
    const prevBoardsLength = app.getBoards().length;
    const boardTitle = "New Board";
    app.createBoard(boardTitle);
    const appBoards = app.getBoards();
    expect(appBoards.length).toBe(prevBoardsLength + 1);
    expect(appBoards.find((a) => a.title == boardTitle)).toBeDefined();
  });
});
