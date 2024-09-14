import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
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
