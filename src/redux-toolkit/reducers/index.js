import toDoListReducer from './todolist.reducer';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    toDoListReducer:toDoListReducer,
  },
});