
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="logo">
        Vejka<span>Ka.</span>
      </NavLink>

      <nav className="navigation">
        <NavLink to="/" end>Domů</NavLink>
        <NavLink to="/about">O nás</NavLink>
        <NavLink to="/contact">Kontakt</NavLink>
      </nav>

      <a
        href="https://github.com/SOLCIKCZ/-vejka-ka"
        target="_blank"
        rel="noopener noreferrer"
        className="github-button"
      >
        GitHub ↗
      </a>
    </header>
  );
}

export default Header;
