function HtmlContent() {
  return (
    <>
      <section className="section-one">
        <div>
          <h1>Excursio</h1>
          <p>Liberá tu mente del stress</p>
        </div>
      </section>

      <section className="section-two">
        <div className="section-two-description">
          <p> Organizamos excursiones </p>
          <p>All inclusive, no tenés que ocuparte de nada</p>
          <p>Sesiones de entrenamiento previo según tu plan</p>
        </div>
        <div className="cards-container">
          <div className="card">
            <img src="/surf.jpg" />
            <h3>Surf en Hawai</h3>
          </div>

          <div className="card">
            <img src="/buceo.jpg" />
            <h3>Buceo en Bahamas</h3>
          </div>

          <div className="card">
            <img src="/moto-tour.jpg" />
            <h3>Moto Tour</h3>
          </div>
        </div>
      </section>

      <section>
        <div className="section-three">
          <footer className="footer">
            <div className="footer-col">
              <h4>compañía</h4>
              <ul>
                <li>
                  <a href="#">Nosotros</a>
                </li>
                <li>
                  <a href="#">Programa de afiliados</a>
                </li>
                <li>
                  <a href="#">Contacto</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Dudas</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Opciones de pago</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Redes</h4>
              <div className="social-links">
                <a href="#">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/twitter--v4.png"
                    alt="twitter--v4"
                  />
                </a>
                <a href="#">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/fluency/48/instagram-new.png"
                    alt="instagram-new"
                  />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </>
  )
}

export default HtmlContent
