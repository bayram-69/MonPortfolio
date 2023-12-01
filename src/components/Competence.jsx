import react from "../assets/react1.png";
import html from "../assets/html1.png";
import node from "../assets/node1.png";
import mysql from "../assets/mySql1.png";

function Competence() {
  return (
    <section id="competence">
      <h1>DEVELOPPEUR WEB- FULL STACK</h1>
      <h2>compétences</h2>
      <h3>PERSONNELS</h3>
      <div className="picture2">
        <div className="frame1">
          <span>FRONTEND</span>
          <div className="frontend">
            <div className="image-container">
              <img src={html} alt="html" className="html" />
            </div>
            <div className="image-container">
              <img src={react} alt="react" className="react" />
            </div>
            <div className="image-container">
              <img src={node} alt="node" className="node" />
            </div>
          </div>
        </div>
        <div className="frame2">
          <span>BACKEND</span>
          <div className="backend">
            <div className="image-container">
              <img src={mysql} alt="html" className="mysql" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Competence;
