import react from "../assets/react1.png";
import html from "../assets/html1.png";
import node from "../assets/node1.png";
import mysql from "../assets/mySql1.png";
import express from "../assets/express1.png";
import competence from "../assets/competence1.png";

function Competence() {
  return (
    <section id="competence">
      <h1>DEVELOPPEUR FULL STACK</h1>
      <div className="title">
        <h2>compétences</h2>
        <h3>PERSONNELLES</h3>
        <div className="picture2">
          <div className="frame1">
            <div className="front-back">FRONTEND</div>
            <div className="frontend">
              <div className="image-container">
                <img src={html} alt="html" className="html" />
              </div>
              <div className="image-container">
                <img src={react} alt="react" className="react" />
              </div>
              {/* <div className="image-container">
                <img src={node} alt="node" className="node" />
              </div> */}
            </div>
          </div>
          <div className="frame2">
            <div className="front-back">BACKEND</div>
            <div className="backend">
              <div className="image-container">
                <img src={mysql} alt="html" className="mysql" />
              </div>
              <div className="image-container">
                <img src={express} alt="node" className="express" />
              </div>
              <div className="image-container">
                <img src={node} alt="node" className="node" />
              </div>
              <img
                src={competence}
                alt="competence-img"
                className="competence-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Competence;
