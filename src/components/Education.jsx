import image from "../../src/assets/photo1.png";
import introduction from "../../src/assets/introduction.png";
import introduction1 from "../assets/introduction1.png";

function Education() {
  return (
    <section id="education">
      <h1>DEVELOPPEUR FULL STACK</h1>
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
          <img src={image} alt="logo" className="picture1" />
          <img src={introduction} alt="logo" className="education-img" />
          <img src={introduction1} alt="logo" className="education1-img" />
        </div>
      </div>
    </section>
  );
}

export default Education;
