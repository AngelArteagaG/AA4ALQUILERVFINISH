import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="logo">
          <img
            src="/src/assets/logo.png"
            alt="Logo de PREMIUM"
            className="logo-image"
          />
        </h1>
        <nav className="nav">
          <Link to="/inicio">INICIO</Link>
          <Link to="/vehiculos">VEHÍCULOS</Link>
          <Link to="#reservas">RESERVAR</Link>
          <Link to="/contacto">CONTACTO</Link>
          <Link to="/login">
            <button className="login-btn">INICIAR SESIÓN</button>
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
