import {createReducer, on} from "@ngrx/store";
import * as TaskActions from "./list.actions"
import {initialState} from "./list.state";


export const listReducer = createReducer(
  initialState,
  on(TaskActions.addTask, (state, { task, checked }) => {
    if (task.trim() !== '' && task !== '') {
      return [...state, { task: task, checked: checked }];
    } else {
      return state;
    }
  }),
  on(TaskActions.removeTask, (state, {index}) => state.filter((_, i) => i !== index)),
  on(TaskActions.checked, (state, { index }) => {
    return state.map((item, i) => {
      if (i === index) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
  }),
);
