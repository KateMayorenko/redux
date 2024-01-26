
export interface TaskState {
  task: string;
  checked: boolean;
}

export const initialState: TaskState[] = [];

export interface AppState {
  list: TaskState[]
}
