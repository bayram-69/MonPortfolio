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
          <h2>Créative</h2>
          <h3>PORTFOLIO</h3>
          <div className="trait-horizontal"></div>
          <div className="dev">
            <p>
              En tant que développeur web, je fusionne le design artistique et
              le développement technique pour créer des sites web innovants et
              captivants
            </p>
          </div>
          <div className="trait-horizontal"></div>
          <button className="button">BY TUGBA BAYRAM</button>
        </div>
      </section>
    </>
  );
}

export default Header;
