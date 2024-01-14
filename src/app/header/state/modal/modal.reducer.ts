import {createReducer, on} from "@ngrx/store";
import {initialState} from './modal.state'
import * as ModalActions from "./modal.actions";

export const modalReducer = createReducer(
  initialState,
  on(ModalActions.toggleModal, state => ({ ...state, showModal: !state.showModal }))
);
