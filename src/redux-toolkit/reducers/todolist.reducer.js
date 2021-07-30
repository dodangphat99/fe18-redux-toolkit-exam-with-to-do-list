import { createReducer } from "@reduxjs/toolkit";
import { TODOLIST_ACTION } from "../constants";

const initialState = {
  taskList: [],
};

const toDoListReducer = createReducer(initialState, {
  [TODOLIST_ACTION.CREATE_TASK]: (state, action) => {
    return {
      ...state,
      taskList: [action.payload, ...state.taskList],
    };
  },

  [TODOLIST_ACTION.EDIT_TASK]: (state, action) => {
    const newTaskList = [...state.taskList];
    newTaskList.splice(action.payload.index, 1, action.payload.values);
    return {
      ...state,
      taskList: [...newTaskList],
    };
  },

  [TODOLIST_ACTION.DELETE_TASK]: (state, action) => {
    const newTaskList = [...state.taskList];
    newTaskList.splice(action.payload, 1);
    return {
      ...state,
      taskList: [...newTaskList],
    };
  },
});

export default toDoListReducer;
