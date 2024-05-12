import React, { createContext, useEffect, useState } from "react";
import "./App.scss";
import Main from "./Pages/Main";
import Docs from "./Pages/Docs/";
import { Routes, Route } from "react-router-dom";

export const TodoListContext = createContext([]);

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoTarget, setTodoTarget] = useState("");
  const [todoPoints, setTodoPoints] = useState(1);
  const [todoPointsValue, setTodoPointsValue] = useState(localStorage.getItem("points") || 0);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    console.log(todoList);
    console.log(todoPoints);
    console.log(todoTarget);
  }, [todoPoints, todoList, todoTarget]);

  return (
        <TodoListContext.Provider
          value={{
            todoList,
            setTodoList,
            todoTarget,
            setTodoTarget,
            todoPoints,
            setTodoPoints,
            todoPointsValue,
            setTodoPointsValue,
          }}
        >
      <Routes>
        <Route path="/rpg-in-real-life/" element={<Main />} />
        <Route path="/rpg-in-real-life/docs" element={<Docs />} />
      </Routes>
        </TodoListContext.Provider>
  );
}
