import React from "react";
import Header from "src/Components/Header";
import s from "./Main.module.scss";
import { TodoListContext } from "src/App.jsx";

export default function Main() {

  const { todoList, setTodoList, todoTarget, setTodoTarget, points, setPoints } = React.useContext(TodoListContext);

  function addTodo() {
    setTodoList(prev => [...prev, {todo: todoTarget, points: points}]);
  }

  return (
    <>
      <Header />
      <main className={s.main}>
        <input
          className={`${s.input} ${s.todo__target}`}
          type="text"
          placeholder="Цель"
          value={todoTarget}
          onChange={e => setTodoTarget(e.target.value)}
        />
        <input
          className={`${s.input} ${s.todo__points}`}
          type="number"
          placeholder="Очки"
          value={points}
          onChange={e => setPoints(e.target.value)}
        />
        <button className={s.button} type="submit" onClick={addTodo}>
          Добавить
        </button>
      </main>
    </>
  );
}
