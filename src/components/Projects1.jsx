import maestro from "../assets/maestrotask1.png";

function Projets1() {
  return (
    <section id="Projects1">
      <h2>Projet 1</h2>
      <h3>MAESTRO TASK</h3>
      <p>
        Mon premier projet ? La conception captivante d&apos;un site de post-it
        numérique. Cette immersion m&apos; permis de démontrer ma détermination
        à apprendre et à innover dans le domaine du développement.
        <br />
        <br />
        Un parcours initial qui a consolidé mes compétences en programmation
        web, reflétant ma passion pour la création de solutions technologiques
        percutantes.
      </p>
      <div className="projet1-container">
        <div className="pictureProjet1">
          <a href="https://youns28100.github.io/MAESTRO-TASK/index.html">
            <img src={maestro} alt="Image du projet" className="projet1" />
          </a>
          <ul className="line">
            <li>SUJET LIBRE</li>
            <li>HTML/ CSS/ JS</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projets1;
