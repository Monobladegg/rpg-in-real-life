import React, { createContext, useEffect } from "react";
import "./App.scss";
import Main from "./Pages/Main";
import Docs from "./Pages/Docs/";
import { Routes, Route } from "react-router-dom";

export const TodoListContext = createContext([]);

export default function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [todoTarget, setTodoTarget] = React.useState("");
  const [points, setPoints] = React.useState(0);

  useEffect(() => {
    console.log(todoList);
    console.log(points);
    console.log(todoTarget);
  }, [points, todoList, todoTarget]);

  useEffect(() => {
    if (points < 0) {
      setPoints(0);
    }
  }, [points])
  return (
        <TodoListContext.Provider
          value={{
            todoList,
            setTodoList,
            todoTarget,
            setTodoTarget,
            points,
            setPoints,
          }}
        >
      <Routes>
          <Route path="/" element={<Main />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
        </TodoListContext.Provider>
  );
}
