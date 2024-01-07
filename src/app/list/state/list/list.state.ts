const sessionStorageInitialState = JSON.parse(sessionStorage.getItem('tasks') || '[]');

export interface Task {
  task: string;
  checked: boolean;
}
export const initialState: Task[] = sessionStorageInitialState;
