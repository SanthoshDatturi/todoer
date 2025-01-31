import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../feature/todo/todoSlice";
import { deleteMessageReducer } from "../feature/popup/deleteMessageSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    deleteMessage: deleteMessageReducer,
  },
});
