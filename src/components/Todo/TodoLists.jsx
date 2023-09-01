import TodoItem from "./TodoItem";
import styles from "./TodoLists.module.scss";

/*
data = Array<{id:numer, task:string, status:boolean, due_date:string}

dataRender = Array[]<TodoItem task=... done=... date=.../>
*/

function TodoLists(props) {
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
      {props.data.map((todoObj) => (
        <TodoItem
          key={todoObj.id}
          id={todoObj.id}
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
