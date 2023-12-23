import {createReducer, on} from "@ngrx/store";
import {initialState} from './modal.state'
import {toggleModal} from "./modal.actions";

export const modalReducer = createReducer(
  initialState,
  on(toggleModal, (state) => ({
    ...state,
    showModal: !state.showModal
  })),
);

