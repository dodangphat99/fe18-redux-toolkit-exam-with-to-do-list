import { TODOLIST_ACTION } from "../constants";
import { createAction } from "@reduxjs/toolkit";

export const createToDoListAction = createAction(TODOLIST_ACTION.CREATE_TASK);
export const deleteToDoListAction = createAction(TODOLIST_ACTION.DELETE_TASK);
export const editToDoListAction = createAction(TODOLIST_ACTION.EDIT_TASK);

