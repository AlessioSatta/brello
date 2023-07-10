import { FakeDataProvider } from "./fakeDataProvider";
import { App } from "./models/index";

// MAIN

const fakeDataProvider = new FakeDataProvider();
const myApp = new App(fakeDataProvider);
console.log("App is running...");
// aggiorno il titolo della prima board
let myBoards = myApp.getBoards();
console.log("List of boards:", myBoards.map((a) => a.title).join(", "));
let myFirstBoard = myBoards[0];

myFirstBoard.updateTitle("Nuovo titolo board");
console.log("Selected board:", myFirstBoard.title);
myFirstBoard.createColum("Column 3");

let myColumns = myFirstBoard.getColumns();
console.log("List of columns:", myColumns.map((a) => a.title).join(", "));
let myFirstColumn = myColumns[0];
console.log("Update column title:", myFirstColumn.title);
myFirstColumn.updateTitle("Nuovo Titolo Colonna");
console.log("New column title:", myFirstColumn.title);
myColumns = myFirstBoard.getColumns();
console.log("List of columns:", myColumns.map((a) => a.title).join(", "));

let myTasks = myFirstColumn.getTasks();
console.log("List of tasks:", myTasks.map((a) => a.title).join(", "));
let myFirstTask = myTasks[0];
console.log("Update task title:", myFirstTask.title);
myFirstTask.updateTitle("Nuovo titolo task");
console.log("New task title:", myFirstTask.title);
myTasks = myFirstColumn.getTasks();
let taskToDelete = myTasks[0];
taskToDelete.delete();
myTasks = myFirstColumn.getTasks();
console.log("List of tasks:", myTasks.map((a) => a.title).join(", "));
let taskToUpdateColumn = myTasks[0];
taskToUpdateColumn.moveToColumn(myColumns[1]);
console.log("task status updated", taskToUpdateColumn);

console.log("----");

myFirstBoard.delete();
myBoards = myApp.getBoards();
console.log(
  "List of boards after delete:",
  myBoards.map((a) => a.title).join(", ")
);
myColumns = myFirstBoard.getColumns();
console.log(
  "List of columns after delete board:",
  myColumns.map((a) => a.title).join(", ")
);
myTasks = myFirstColumn.getTasks();
console.log(
  "List of tasks after delete board:",
  myTasks.map((a) => a.title).join(", ")
);
myBoards = myApp.getBoards();
console.log("List of boards:", myBoards.map((a) => a.title).join(", "));
const mySecondBoard = myBoards[0];
myColumns = mySecondBoard.getColumns();
console.log("List of columns:", myColumns.map((a) => a.title).join(", "));
// const columnToDelete = myColumns[0];
// myFirstBoard.deleteColumn(columnToDelete);
// let newColumnList = myFirstBoard.getColumns();
// console.log("new column list 1:", newColumnList.map((a) => a.title).join(", "));

// let newTasksList = myFirstColumn.getTasks();
// console.log("new tasks list:", newTasksList.map((a) => a.title).join(", "));
// const boardToDelete = myBoards[0];
// myApp.deleteBoard(boardToDelete);
// // let newBoardsList = myApp.getBoards();
// console.log("new boards list:", newBoardsList.map((a) => a.title).join(", "));
// // creao una board
// myApp.createBoard("Questa è nuova");
// newBoardsList = myApp.getBoards();
// console.log("new boards list:", newBoardsList.map((a) => a.title).join(", "));
