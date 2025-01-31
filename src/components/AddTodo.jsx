import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice";

export function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleDispatch = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        task: input,
        createdAt: new Date().toISOString(),
      })
    );
    setInput("");
  };

  return (
    <form
      onSubmit={handleDispatch}
      className="p-4 flex flex-row items-center justify-center bg-amber-400 rounded-lg shadow-xl z-10"
    >
      <input
        className="p-2 m-2 sm:w-120 rounded-lg font-semibold bg-amber-200 outline-none hover:ring-2 ring-amber-100 shadow-md transition duration-300 ease-in-out transform hover:scale-102"
        value={input}
        type="text"
        placeholder="Write task..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="p-2 pr-4 pl-4 m-2 bg-blue-800 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}
