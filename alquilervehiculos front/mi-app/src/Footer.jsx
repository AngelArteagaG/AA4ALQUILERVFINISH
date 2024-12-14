import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img
            src="/src/assets/logo.png"
            alt="TailGrids Logo"
            className="footer-logo"
          />
          <li>
            <img
              src="https://img.icons8.com/ios-filled/50/incoming-call.png"
              alt="incoming-call"
              className="location-icon"
            />
            +51 953792657
          </li>
          <li>
            <img
              src="https://img.icons8.com/ios-filled/50/place-marker--v1.png"
              alt="place-marker--v1"
              className="location-icon"
            />
            C. Bajada Balta 135, Miraflores 18
          </li>
        </div>
        <div className="footer-section">
          <p className="footer-title">Vehiculos</p>
          <ul>
            <li>Autos</li>
            <li>Camionetas</li>
            <li>Disponibles</li>
            <li>Agotados</li>
            <li>Ver todoss</li>
          </ul>
        </div>
        <div className="footer-section">
          <p className="footer-title">Conocenos</p>
          <ul>
            <li>Quienes somos</li>
            <li>Oficinas</li>
            <li>Novedades</li>
            <li>Imegenes</li>
            <li>Sedes</li>
          </ul>
        </div>
        <div className="footer-section">
          <p className="footer-title">Info</p>
          <p>
            Ingresa a tu correo electronico para recibir nuestras ultimas
            actualizaciones sobre nuestros servicios.
          </p>
          <form>
            <input
              type="email"
              placeholder="Ingrese Correo Electronico"
              className="footer-input"
            />
            <button type="submit" className="footer-button">
              Suscribirse
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 TailGrids. Todo los derechos reservados.</p>
        <div className="footer-payment">
          <img src="/src/assets/master (2).png" alt="PayPal" />
          <img src="/src/assets/mater.1.png" alt="Visa" />
          <img src="/src/assets/master3.png" alt="MasterCard" />
          <img src="/src/assets/master (4).png" alt="Discover" />
        </div>
        <div className="footer-social">
          <img src="/src/assets/Facebook.png" alt="" />
          <img src="/src/assets/instagram.png" alt="" />
          <img src="/src/assets/twiter.png" alt="" />
          <img src="/src/assets/tiktok.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
