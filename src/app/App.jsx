// Dependencies
// import { useEffect, useContext } from "react";
import "./App.scss";
import AppBar from "../components/Common/AppBar/AppBar";
import SideBar from "../components/SideBar/SideBar";
import TodoHeader from "../components/Todo/TodoHeader";
import TodoCreate from "../components/Todo/TodoCreate";
import TodoLists from "../components/Todo/TodoLists";
// import useTodo from "../hooks/useTodo";
// import { TodoContext } from "../../src/context/TodoContext";

function App() {
  // const { allTodos, addTodo, fetchAllTodo, editTodo, deleteTodo } = useTodo();
  // const sharedObj = useContext(TodoContext);
  // console.log(sharedObj);

  return (
    <div className="todo">
      <div className="todo__header">
        <AppBar />
      </div>
      <div className="todo__sidebar">
        <SideBar />
      </div>
      <div className="todo__content">
        <main className="todo__container">
          <TodoHeader />
          <TodoCreate />
          <TodoLists />
        </main>
      </div>
    </div>
  );
}

export default App;
