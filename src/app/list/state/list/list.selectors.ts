import {TaskState} from "./list.state";
export const selectTasks = (state: {list: TaskState[]}) => state.list;
