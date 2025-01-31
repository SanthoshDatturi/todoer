import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: false,
  todoId: null,
};

export const deleteMessageSlice = createSlice({
  name: "deleteMessage",
  initialState,
  reducers: {
    showDeleteMessage: (state, action) => {
      state.isVisible = true;
      state.todoId = action.payload;
    },
    hideDeleteMessage: (state) => {
      state.isVisible = false;
      state.todoId = null;
    },
  },
});

export const { showDeleteMessage, hideDeleteMessage } =
  deleteMessageSlice.actions;

export const deleteMessageReducer = deleteMessageSlice.reducer;
