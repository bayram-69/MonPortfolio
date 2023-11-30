import Pokedek from "../assets/Pokedek.png";

function Projets2() {
  return (
    <section id="Projects2">
      <h2>Projet 2</h2>
      <h3>POKEKWAK</h3>
      <p>
        Dans le deuxième projet, j&apos;ai joué un rôle clé au sein d&apos;une
        équipe de quatre personnes. Nous avons développé une application
        d&apos;achat de cartes en utilisant React, le rooter, le contexte, et
        les props, tout en intégrant une API.
        <br />
        <br />
        En suivant la méthodologie Agile, le Scrum, j&apos;ai dirigé
        l&apos;équipe pendant une semaine, contribuant activement à la
        planification et à l&apos;exécution du projet. Cette expérience met en
        lumière ma capacité à m&apos;adapter rapidement et à jouer un rôle
        stratégique dans des projets de développement dynamiques
      </p>
      <div className="pictureProjet2">
        <div className="picture-project2">
          <a href="https://projet2-sigma.vercel.app/">
            <img src={Pokedek} alt="Image du projet" className="projet2" />
          </a>
          <ul className="line2">
            <li>SUJET LIBRE</li>
            <li>React/ Context/ API</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projets2;
