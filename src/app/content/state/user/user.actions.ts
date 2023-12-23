import {createAction} from "@ngrx/store";

export const createUserName = createAction('[App] Create User name', props<{ user: string }>());
export const createToken = createAction('[App] Create token', props<{ token: string }>());
