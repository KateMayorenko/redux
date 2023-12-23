import {createAction, props} from "@ngrx/store";

export const updateTimeLeft = createAction('[App] Update Time Left', props<{ timeLeftFormatted: string }>());
