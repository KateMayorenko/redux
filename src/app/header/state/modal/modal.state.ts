export interface ModalState {
  showModal: boolean
}

export interface AppState {
  modal: ModalState;
}

export const initialState: ModalState = {
  showModal: false
}
