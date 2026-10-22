
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h2>VejkaKa</h2>

      <nav>
        <NavLink to="/">Domů</NavLink>
        <NavLink to="/about">O nás</NavLink>
        <NavLink to="/contact">Kontakt</NavLink>
      </nav>
    </header>
  );
}

export default Header;
