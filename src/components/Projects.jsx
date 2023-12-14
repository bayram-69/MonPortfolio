import projet from "../assets/projet1.png";

function Projets() {
  return (
    <section id="projects">
      <div className="title8">
        <h1>DEVELOPPEUR WEB- FULL STACK</h1>
        <div className="gif3">
          <div className="titre">
            <h2>projets</h2>
            <h3>PROFESSIONNELS</h3>
          </div>
          <div className="mon-projet">
            <a href="#contact">
              <img src={projet} alt="html" className="projet-img" />
              <div className="hover-message">Contactez moi</div>
            </a>
          </div>
        </div>
        <div className="trait-horizontal"></div>
        <p>
          Voici quelques exemples de projets sur lesquels j&apos;ai eu le
          privilège de travailler, chacun reflétant mon engagement envers la
          création d&apos;expériences web exceptionnelles
        </p>
        <div className="trait-horizontal"></div>
        <div className="picture2">
          <button className="button3">
            <a
              href="#Projects1"
              className="button-link"
              style={{ color: "#dfd8ca" }}
            >
              PROJET 1
            </a>
          </button>
          <button className="button4">
            <a
              href="#Projects2"
              className="button-link"
              style={{ color: "#dfd8ca" }}
            >
              PROJET 2
            </a>
          </button>
          <button className="button5">
            <a
              href="#Projects3"
              className="button-link"
              style={{ color: "black" }}
            >
              PROJET 3
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projets;
