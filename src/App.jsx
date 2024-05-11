import React, { createContext, useEffect } from "react";
import "./App.scss";
import Main from "./Pages/Main";
import Docs from "./Pages/Docs/";
import { Routes, Route } from "react-router-dom";

export const TodoListContext = createContext([]);

export default function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [todoListHistory, setTodoListHistory] = React.useState([]);
  const [todoTarget, setTodoTarget] = React.useState("");
  const [todoPoints, setTodoPoints] = React.useState(1);
  const [todoPointsValue, setTodoPointsValue] = React.useState(localStorage.getItem("points") || 0);

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
