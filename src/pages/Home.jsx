
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <span className="tag">REACT • GITHUB • TEAMWORK</span>

          <h1>
            Vítejte na našem
            <span> společném projektu.</span>
          </h1>

          <p>
            Vytváříme moderní webovou aplikaci pomocí
            Reactu. Každý člen našeho týmu pracuje na
            vlastní části a společně tvoříme jeden projekt.
          </p>

          <div className="hero-buttons">
            <Link to="/about" className="primary-button">
              O našem projektu →
            </Link>

            <Link to="/contact" className="secondary-button">
              Kontakt
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="code-symbol">{"</>"}</div>
          <h2>VejkaKa</h2>
          <p>Společně tvoříme budoucnost webu.</p>

          <div className="tech-tags">
            <span>React</span>
            <span>JavaScript</span>
            <span>GitHub</span>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Na čem pracujeme?</h2>
        <p className="section-description">
          Naše aplikace vzniká díky společné práci.
        </p>

        <div className="feature-grid">
          <article className="feature-card">
            <div className="feature-icon">💻</div>
            <h3>Vývoj aplikace</h3>
            <p>
              Tvoříme webové stránky a komponenty
              pomocí moderních technologií.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Moderní design</h3>
            <p>
              Zaměřujeme se na přehledný vzhled
              a jednoduché používání.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Týmová spolupráce</h3>
            <p>
              Pomocí GitHubu propojujeme práci
              jednotlivých členů týmu.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Home;

