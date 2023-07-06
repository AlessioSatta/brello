export interface ITask {
  readonly title: string;
  updateTitle(title: string): void;
}
