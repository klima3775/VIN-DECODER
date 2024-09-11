import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Головна сторінка</Link>
          </li>
          <li>
            <Link to="/variables">Список змінних</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
