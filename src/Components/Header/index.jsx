import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import s from "./Header.module.scss";
import { TodoListContext } from "../../App";

function Header() {
  const { todoPointsValue } = React.useContext(TodoListContext);

  return (
    <header className={s.header}>
      <div className={s.left}>
        <Link to="/rpg-in-real-life/">
          <div className={s.title}>
            <span>RPG In</span>
            <br />
            <p className={s.hearts}>
              <FaHeart />
              <FaHeart />
              <FaHeart />
            </p>
            <span>Real life</span>
          </div>
        </Link>
      </div>
      <div className={s.center}>
        <div className={s.progressBarBorder}>
          <div
            className={s.progressBar}
            style={{ width: `${todoPointsValue}%` }}
          ></div>
        </div>
        <h2>{todoPointsValue} очков</h2>
      </div>
      <div className={s.right}>
        <h1>
          <Link to="/rpg-in-real-life/docs" className={s.link}>
            <h2 className={s.docs}>Docs</h2>
          </Link>
        </h1>
      </div>
    </header>
  );
}

export default Header;
