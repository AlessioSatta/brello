import { App, BoardInfo, IDataProvider } from "../src";

describe("App", () => {
  test("getBoards", () => {
    const dataProvider: IDataProvider = {
      getBoards: jest.fn(() => []) as IDataProvider["getBoards"],
    } as IDataProvider;
    const app = new App(dataProvider);
    app.getBoards();
    expect(dataProvider.getBoards).toBeCalled();
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
