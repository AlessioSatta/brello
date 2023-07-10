export interface ITask {
  readonly title: string;
  updateTaskColumn(targetColumnId: string): void;
  delete(): void;
  updateTitle(title: string): void;
}
