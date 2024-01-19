const localStorageInitialState = JSON.parse(localStorage.getItem('tasks') || '[]');

export interface Task {
  task: string;
  checked: boolean;
}
export const initialState: Task[] = localStorageInitialState;
