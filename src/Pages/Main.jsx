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
    console.log(todoList)
    setTodoPointsValue(Number(todoPointsValue) + Number(todoPoints));

    localStorage.setItem("points", Number(todoPointsValue) + Number(todoList[index].todoPoints));
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
          <button className={s.submit} type="submit" onClick={() => setTodoPointsValue(0)}>
            Сброс очков
          </button>
          <h2>
            Очков: {todoPointsValue}
          </h2>
        </section>
        <section className={s.todo__list__container}>
          {todoList.map(({ todoTarget, todoPoints, index }) => (
            <div key={index} className={s.todo__list}>
              <span className={s.todo__target}>Цель {index}: {todoTarget}</span>
              <span className={s.todo__points}>Награда: {todoPoints}</span>
              <button className={s.todo__done} onClick={() => doneTodo(index)}>Выполнено</button>
              <button className={s.todo__delete} onClick={() => deleteTodo(index)}>Удалить</button>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}