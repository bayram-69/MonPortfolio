import eating from "../assets/eating.png";

function Projets3() {
  return (
    <section id="Projects3">
      <h2>Projet 3</h2>
      <h3>EATING NAM NAM</h3>
      <p>
        Le projet 3 a représenté un défi stimulant où j&apos;ai fait partie
        d&apos;une équipe de cinq personnes travaillant sur un sujet imposé,
        avec l&apos;intégration backend comme composante clé. L&apos;utilisation
        de la méthodologie Scrum a été cruciale dans l&apos;organisation
        itérative de notre travail.
        <br />
        <br />
        Au sein de l&apos;équipe, ma collaboration a mis en évidence ma capacité
        à m&apos;adapter et à résoudre activement les problèmes. Mon rôle dans
        l&apos;intégration du backend démontrent ma capacité à offrir des
        solutions concrètes, soulignant ainsi mon engagement envers
        l&apos;efficacité et la résolution de problèmes dans un contexte
        professionnel.
      </p>
      <div className="picture-project3">
        <div className="pictureProjet3">
          <a href="index.html">
            <img src={eating} alt="Image du projet" className="projet3" />
          </a>
          <ul className="line3">
            <li>SUJET IMPOSE</li>
            <li>BACKEND/ FRONTEND</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projets3;
