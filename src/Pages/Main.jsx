import React from "react";
import Header from "src/Components/Header";
import s from "./Main.module.scss";
import { TodoListContext } from "src/App.jsx";

export default function Main() {
  const {
    todoList,
    setTodoList,
    todoTarget,
    setTodoTarget,
    todoPoints,
    setTodoPoints,
    todoPointsValue,
    setTodoPointsValue,
  } = React.useContext(TodoListContext);

  function addTodo() {
    if (todoTarget && todoPoints) {
      setTodoList((prev) => [
        ...prev,
        { todoTarget: todoTarget, todoPoints: todoPoints, index: prev.length+1 },
      ]);
    }
  }

  function deleteTodo(index) {
    setTodoList((prev) => prev.filter((todo) => todo.index !== index));
  }

  function doneTodo(index) {
    setTodoPointsValue(Number(todoPointsValue) + Number(todoPoints));
    deleteTodo(index);
  }

  return (
    <>
      <Header />
      <main className={s.main}>
        <section className={s.todo__form}>
          <input
            type="text"
            placeholder="Цель"
            value={todoTarget}
            onChange={(e) => setTodoTarget(e.target.value)}
          />
          <input
            type="number"
            placeholder="Очки"
            value={todoPoints}
            onChange={(e) => setTodoPoints(e.target.value)}
          />
          <button className={s.submit} type="submit" onClick={addTodo}>
            Добавить
          </button>
          <h2>
            Очков: {todoPointsValue}
          </h2>
        </section>
        <section className={s.todo__list__container}>
          {todoList.map(({ todoTarget, todoPoints, index }) => (
            <p className={s.todo__list} key={index}>
              <span className={s.todo__target}>Цель {index}: {todoTarget}</span>
              <button className={s.todo__done} onClick={() => doneTodo(index)}>Выполнено</button>
              <span className={s.todo__points}>Награда: {todoPoints}</span>
              <button className={s.todo__delete} onClick={() => deleteTodo(index)}>Удалить</button>
            </p>
          ))}
        </section>
      </main>
    </>
  );
}