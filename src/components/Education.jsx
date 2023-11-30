import Image from "../assets/Photo.png";

function Education() {
  return (
    <section id="education">
      <div className="bg">
        <h1>DEVELOPPEUR FULL STACK</h1>
        <button className="btn">
          <a href="#contact">Contact</a>
        </button>
      </div>
      <div className="title4">
        <h2>introduction</h2>
        <h3>A PROPOS</h3>
      </div>
      <div className="dev">
        <p>
          Je suis une mordue de code, une exploratrice numérique et une
          amoureuse de l&apos;innovation. Mon terrain de jeu préféré ? Le vaste
          univers du développement web. J&apos;ai une relation passionnée avec
          la créativité, une allergie à l&apos;ennui et un penchant
          irrépressible pour tout ce qui est nouveau et excitant.
          <br />
          <br />
          Pour moi, chaque projet web est une toile vierge où je mets en œuvre
          mes compétences pour créer des expériences uniques, à la fois belles
          et fonctionnelles. Je suis une chercheuse de solutions qui ne recule
          devant aucun défi technique.
        </p>
        <div className="card">
          <img src={Image} alt="logo" className="picture1" />
        </div>
      </div>
    </section>
  );
}

export default Education;
