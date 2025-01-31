import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: loadTodos(),
};

function loadTodos() {
  const todosJSON = localStorage.getItem("todos");
  if (!todosJSON) return [];
  const todos = JSON.parse(todosJSON);
  if (!todos || !Array.isArray(todos)) return [];
  return todos;
}

function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (!action.payload.task) return;
      const todo = {
        id: nanoid(),
        task: action.payload.task,
        isCompleted: false,
        createdAt: action.payload.createdAt,
      };
      state.todos.push(todo);
      saveTodos(state.todos);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
      saveTodos(state.todos);
    },
    updateTodo: (state, action) => {
      const { id, newTask } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      );
      saveTodos(state.todos);
    },
    toggleComplete: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ?
          { ...todo, isCompleted: !todo.isCompleted }
        : todo
      );
      saveTodos(state.todos);
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleComplete } =
  todoSlice.actions;

export const todoReducer = todoSlice.reducer;
