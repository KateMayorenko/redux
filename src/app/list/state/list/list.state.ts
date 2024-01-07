const sessionStorageInitialState = JSON.parse(sessionStorage.getItem('tasks') || '[]');
export const initialState: string[] = sessionStorageInitialState;
