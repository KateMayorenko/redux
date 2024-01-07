import {createReducer, on} from "@ngrx/store";
import * as TaskActions from "./list.actions"
import {initialState} from "./list.state";


export const listReducer = createReducer(
  initialState,
  on(TaskActions.addTask, (state, {task}) => [...state, task]),
  on(TaskActions.removeTask, (state, {index}) => state.filter((_, i) => i !== index))
);
