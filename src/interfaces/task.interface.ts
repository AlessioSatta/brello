export interface ITask {
  readonly title: string;
  delete(): void;
  updateTitle(title: string): void;
}
