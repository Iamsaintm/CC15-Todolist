import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";

import styles from "./TodoCreate.module.scss";
import TodoForm from "./TodoForm";

/*
Condition Rendering
- Default : Show Button & Text
- Active : Show TodoForm

Concept : true ? <AddTask /> : <TodoForm />
*/

/*
CC2 - EVENT HANDLING
- เอาฟังก์ชันไปผูกกับ UI เพื่อให้ USER เป็นคนเรียกใช้ฟังก์ชันเอง
- onClick : ต้อง Click ก่อน FN ถึงจะ run
  - User ทำการคลิก
  - Browser จะเป็นคนเรียกใช้ฟังก์ชัน โดยส่ง parameter มา 1 ตัว handleClick(eventObject)
*/

/*
CC3 - JS Value ไม่สามารถทำให้ React Rerender ได้
ต้องช้ State
*/

/*
CC4 - React State
  const [state,setState] = useState(initialState:any)
  // element 1: current State
  // element 2: Fn สำหรับ setState
*/

// #1 : FC Function Component (Render)
function TodoCreate() {
  const [isOpenForm, setIsOpenForm] = useState(true);
  // #2 : JS Function (Logic)
  const handleClick = function () {
    setIsOpenForm(!isOpenForm);
  };
  return (
    <>
      {!isOpenForm ? (
        <TodoForm textSubmit="Add Task" />
      ) : (
        <div className={styles.todo__create} onClick={handleClick}>
          <div className={styles.todo__create__button}>
            <HiPlus />
          </div>
          <h3 className={styles.todo__create__text}>Add Task</h3>
        </div>
      )}
    </>
  );
}

export default TodoCreate;
