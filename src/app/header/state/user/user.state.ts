export interface UserState {
  user: string,
  isCreated: boolean,
  showModal: boolean
}

export const initialState = {
  user: 'Default user',
  isCreated: true,
  showModal: false
}

export interface AppState  {
  user: UserState
}
