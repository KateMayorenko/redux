import {Task} from "./list.state";
export const selectTasks = (state: {list: Task[]}) => state.list;
