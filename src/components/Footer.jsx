
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h2>Vejka<span>Ka.</span></h2>
          <p>Společný React projekt.</p>
        </div>

        <nav className="footer-links">
          <Link to="/">Domů</Link>
          <Link to="/about">O nás</Link>
          <Link to="/contact">Kontakt</Link>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>© 2026 VejkaKa. Všechna práva vyhrazena.</p>
        <p>Vytvořeno pomocí Reactu</p>
      </div>
    </footer>
  );
}

export default Footer;
