export interface UserState {
  user: string,
  isCreated: boolean
}

export const initialState = {
  user: 'Default user',
  isCreated: false
}
