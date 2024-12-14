import { useState } from "react";
import { Link } from "react-router-dom";
import "./registro.css";
import logo from "./assets/logo.png";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
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
    <div className="form-container-register">
      <div className="form-card">
        <div className="logo">
          <img src={logo} alt="" className="car-logo" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Nombre"
            />
          </div>

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
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Teléfono"
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
            REGISTRARSE
          </button>

          <div className="login-link">
            <Link to="/login">Ya tengo una cuenta</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
