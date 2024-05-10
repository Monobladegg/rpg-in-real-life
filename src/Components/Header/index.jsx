import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import s from "./Header.module.scss";


function Header() {
  return (
    <header className={s.header}>
      <div className={s.left}>
        <Link to="/">
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
      <div className={s.right}>
        <h1>
          <Link to="/docs" className={s.link}>
            Docs
          </Link>
        </h1>
      </div>
    </header>
  );
}

export default Header;
