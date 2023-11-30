function Contact() {
  return (
    <section id="contact">
      <div className="trait-horizontal2"></div>
      <h2>travaillons</h2>
      <h3>ENSEMBLE</h3>
      <p>
        Pour toute question, proposition de projet ou simplement pour discuter
        de vos besoins en matière de développement web, n&apos;hésitez pas à me
        contacter. Je suis toujours ouverte aux nouvelles opportunités et je
        serais ravie de travailler avec vous pour créer des solutions web
        exceptionnelles
        <br />
        <br />
        Je répondrai rapidement à tous les messages que vous m&apos;envoyez.
        Votre satisfaction est ma priorité, et je suis impatiente de collaborer
        avec vous pour réaliser vos projets en ligne
      </p>
      <div className="trait-horizontal"></div>
      <ul className="call">

        <div className="container-icone">
          <div className="contact-item">
            <a href="mailto:tugbabayram69@gmail.com">
              <img
                src="https://img.icons8.com/ios-filled/50/circled-envelope.png"
                alt="circled-envelope"
                className="icones"
              />
            </a>
            <li>tugbabayram69@gmail.com</li>
          </div>

          <div className="contact-item">
            <a
              href="https://github.com/bayram-69"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/glyph-neue/64/github.png"
                alt="github"
                className="icones"
              />
            </a>
            <li>https://github.com/bayram-69</li>
          </div>

          <div className="contact-item">
            <a
              href="https://www.instagram.com/tugbaabayraam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-glyphs/30/instagram-new.png"
                alt="instagram-new"
                className="icones"
              />
            </a>
            <li>tugbaabayraam</li>
          </div>

          <div className="contact-item">
            <a href="tel:+33666834938">
              <img
                src="https://img.icons8.com/sf-black-filled/64/phone.png"
                alt="phone"
                className="icones"
              />
            </a>
            <li>+33 6 66 83 49 38</li>
          </div>
        </div>
      </ul>
    </section>
  );
}

export default Contact;
