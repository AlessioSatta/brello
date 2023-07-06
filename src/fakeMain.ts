import { FakeDataProvider } from "./fakeDataProvider";
import { App } from "./models/index";

// MAIN

const fakeDataProvider = new FakeDataProvider();
const myApp = new App(fakeDataProvider);
console.log("App is running...");
// aggiorno il titolo della prima board
const myBoards = myApp.getBoards();
console.log("List of boards:", myBoards.map((a) => a.title).join(", "));
const myFirstBoard = myBoards[0];
myFirstBoard.updateTitle("Nuovo titolo board");
console.log("Selected board:", myFirstBoard.title);
myFirstBoard.createColum("Column 2");

let myColumns = myFirstBoard.getColumns();
console.log("List of columns:", myColumns.map((a) => a.title).join(", "));
const myFirstColumn = myColumns[0];
console.log("Update column title:", myFirstColumn.title);
myFirstColumn.updateTitle("Nuovo Titolo Colonna");
console.log("New column title:", myFirstColumn.title);
myColumns = myFirstBoard.getColumns();
console.log("List of columns:", myColumns.map((a) => a.title).join(", "));

let myTasks = myFirstColumn.getTasks();
console.log("List of tasks:", myTasks.map((a) => a.title).join(", "));
const myFirstTask = myTasks[0];
console.log("Update task title:", myFirstTask.title);
myFirstTask.updateTitle("Nuovo titolo task");
console.log("New task title:", myFirstTask.title);
myTasks = myFirstColumn.getTasks();
myFirstColumn.deleteTask("1");
myTasks = myFirstColumn.getTasks();
console.log("List of tasks:", myTasks.map((a) => a.title).join(", "));
// creao una board
const newBoard = myApp.createBoard("Questa è nuova");
