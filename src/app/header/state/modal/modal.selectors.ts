import { createSelector } from '@ngrx/store';
import {AppState, ModalState} from "./modal.state";

export const selectModal = (state: AppState) => state.modal;

export const selectToggle = createSelector(
  selectModal,
  (state: ModalState) => state.showModal
);
