export type BoardInfo = {
  id: string;
  title: string;
};

export type ColumnInfo = {
  id: string;
  title: string;
  boardId: string;
};

export type TaskInfo = {
  id: string;
  title: string;
  boardId: string;
  columnId: string;
};
