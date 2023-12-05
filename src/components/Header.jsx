function Header() {
  return (
    <>
      <section id="header">
        <div className="bg">
          <h1>DEVELOPPEUR FULL STACK</h1>
          <button className="btn">
            <a href="#contact">Contact</a>
          </button>
        </div>
        <div className="title">
          <h2>Portfolio</h2>
          <h3>TUGBA BAYRAM</h3>
          <div className="trait-horizontal"></div>
          <div className="dev">
            <p>
              En tant que développeur web, je fusionne le design artistique et
              le développement technique pour créer des sites web innovants et
              captivants
            </p>
          </div>
          <div className="trait-horizontal"></div>
          <div className="buttons">
            <button className="button1">
              <a
                href="#education"
                className="button-link"
                style={{ color: "#dfd8ca" }}
              >
                A PROPOS
              </a>
            </button>
            <button className="button2">
              <a
                href="#competence"
                className="button-link"
                style={{ color: "black" }}
              >
                COMPETENCES
              </a>
            </button>
            <button className="button5">
              <a
                href="#projects"
                className="button-link"
                style={{ color: "black" }}
              >
                PORTFOLIO
              </a>
            </button>
            <button className="button6">
              <a
                href="#contact"
                className="button-link"
                style={{ color: "#dfd8ca" }}
              >
                CONTACT
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
