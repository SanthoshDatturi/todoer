import React from "react";

export function DeleteMessage({ cancelFunction, okFunction }) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-opacity-50 z-50 flex justify-center items-center"
      id="delete-message"
    >
      <div className="bg-amber-100 p-4 rounded-lg shadow-xl flex flex-col items-center">
        <p className="text-lg font-bold">Are you sure?</p>
        <p className="mt-2 text-sm">This action will delete your task.</p>
        <div className="mt-4 flex flex-row justify-between gap-2">
          <button
            className="m-2 bg-amber-700 rounded-lg shadow-md hover:bg-amber-600 transition duration-500 ease-in-out transform hover:scale-105"
            onClick={() => cancelFunction()}
          >
            Cancel
          </button>
          <button
            className="m-2 bg-blue-400 rounded-lg shadow-md hover:bg-blue-300 transition duration-500 ease-in-out transform hover:scale-105"
            onClick={() => okFunction()}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
