import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo, toggleComplete } from "../feature/todo/todoSlice";
import { showDeleteMessage } from "../feature/popup/deleteMessageSlice";

export function Todo({ todo }) {
  const [isEditable, setIsEditable] = useState(false);
  const [input, setInput] = useState(todo.task);
  const isNewTodo = true;
  const dispatch = useDispatch();

  return (
    <>
      <li
        className={`mb-4 px-4 flex justify-between items-center rounded-lg bg-amber-400 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 z-0 ${isNewTodo ? "new-todo" : ""}`}
      >
        <div className="flex flex-row items-center justify-center w-full">
          <input
            className={`checkbox transition-all duration-500 ease-in-out ${isEditable ? "hidden" : "block"}`}
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => dispatch(toggleComplete(todo.id))}
          />
          <input
            className={`w-full p-1.5 m-2 my-1.5 font-semibold text-blue-900 outline-none rounded-lg ${
              isEditable ? "border-amber-200 border-2 ml-7" : ""
            } ${todo.isCompleted ? "line-through" : ""}`}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={!isEditable}
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          {!todo.isCompleted && (
            <button
              className="m-2 flex-1 bg-blue-400 w-12 rounded-lg shadow-md hover:bg-blue-300 transition duration-500 ease-in-out transform hover:scale-105"
              onClick={() => {
                setIsEditable(!isEditable);
                if (isEditable) {
                  dispatch(updateTodo({ id: todo.id, newTask: input }));
                }
              }}
            >
              {isEditable ?
                <img className="w-6" src="./save-light.svg" alt="Save" />
              : <img className="w-6" src="./edit.svg" alt="Edit" />}
            </button>
          )}
          <button
            className="m-2 p-0 px-0 flex-1 bg-amber-300 w-12 rounded-lg shadow-md hover:bg-amber-200 transition duration-500 ease-in-out transform hover:scale-105"
            onClick={() => dispatch(showDeleteMessage(todo.id))}
          >
            <img className="w-6" src="./trash.svg" alt="Remove" />
          </button>
        </div>
      </li>
    </>
  );
}
