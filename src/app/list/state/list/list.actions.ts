import {createAction, props} from "@ngrx/store";

export const addTask = createAction('[Task List] Add Task', props<{task: string, checked: boolean}>());
export const removeTask = createAction('[Task List] Remove Task', props<{index: number}>());
export const checked = createAction('[Task List] Checkbox Checked', props<{index: number}>());
