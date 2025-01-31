import { AddTodo } from "./components/AddTodo";
import { Todo } from "./components/Todo";
import { DeleteMessage } from "./components/DeleteMessage";
import { useSelector, useDispatch } from "react-redux";
import { hideDeleteMessage } from "./feature/popup/deleteMessageSlice";
import { removeTodo } from "./feature/todo/todoSlice";

function App() {
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos);
  const sortedTodos = [...todos].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  const deletableTodo = useSelector((state) => state.deleteMessage.todoId);
  const isDeleteMessageVisible = useSelector(
    (state) => state.deleteMessage.isVisible
  );
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="p-8 text-center font-bold text-blue-950 sm:text-4xl">
        Manage Your Tasks
      </h1>
      {isDeleteMessageVisible && (
        <DeleteMessage
          cancelFunction={() => dispatch(hideDeleteMessage())}
          okFunction={() => {
            dispatch(hideDeleteMessage());
            dispatch(removeTodo(deletableTodo));
          }}
        />
      )}
      <AddTodo />
      <ul className="list-none sm:w-150 mt-10">
        {sortedTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}

export default App;
