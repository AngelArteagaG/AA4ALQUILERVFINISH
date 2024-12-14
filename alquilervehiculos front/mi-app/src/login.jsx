import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import logo from "./assets/logo.png";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    correo: "",
    contraseña: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  return (
    <div className="form-container-login">
      <div className="form-card">
        <div className="logo">
          <img src={logo} alt="Logo" className="car-logo" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="Correo"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleChange}
              placeholder="Contraseña"
            />
          </div>

          <button type="submit" className="submit-button">
            INICIAR SESIÓN
          </button>

          <div className="register-link">
            <Link to="/register">Crear una cuenta</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
