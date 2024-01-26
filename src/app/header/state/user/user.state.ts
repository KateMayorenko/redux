export interface UserState {
  user: string,
  isCreated: boolean,
  isModalShown: boolean
}

export const initialState = {
  user: 'Default user',
  isCreated: true,
  isModalShown: false
}

export interface AppState  {
  user: UserState
}
