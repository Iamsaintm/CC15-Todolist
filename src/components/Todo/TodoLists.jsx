import { useState } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoLists.module.scss";

/*
data = Array<{id:numer, task:string, status:boolean, due_date:string}

dataRender = Array[]<TodoItem task=... done=... date=.../>
*/

const data = [
  {
    id: 1,
    task: "Suspendisse potenti.",
    status: false,
    due_date: "2023-04-26",
  },
  {
    id: 2,
    task: "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    status: false,
    due_date: "2023-05-08",
  },
  {
    id: 3,
    task: "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    status: false,
    due_date: "2023-04-30",
  },
];

function TodoLists() {
  // const [allTodos,setAllTodos]=useState[data]

  // const dataRender = data.map((todoObj) => (
  //   <TodoItem
  //     key={todoObj.id}
  //     task={todoObj.task}
  //     done={todoObj.status}
  //     date={todoObj.due_date}
  //   />
  // ));
  return (
    <ul className={styles.todo__lists}>
      {data.map((todoObj) => (
        <TodoItem
          key={todoObj.id}
          task={todoObj.task}
          done={todoObj.status}
          date={todoObj.due_date}
        />
      ))}
      {/* <TodoItem task="Do HW" done={true} date="31 Aug" />
      <TodoItem task="Drink" done={false} date="1 Oct" /> */}
    </ul>
  );
}

export default TodoLists;
