function Skills() {
  return (
    <section id="skills">
      <div className="title3">
        <h2>tableau</h2>
        <h3>DES MATIERES</h3>
      </div>
      <div className="dev2">
        <p>
          Une développeuse web créative qui transforme des idées en réalité
          numérique
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
    </section>
  );
}

export default Skills;
