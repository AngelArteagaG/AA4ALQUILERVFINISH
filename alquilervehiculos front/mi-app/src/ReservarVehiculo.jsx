import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "./ReservarVehiculo.css";
import Navbar from "./Navbar";

function ReservarVehiculo() {
  const [formData, setFormData] = useState({
    dniUsuario: "",
    matriculaVehiculo: "",
    fechaInicio: "",
    fechaFin: "",
    estado: "",
  });

  const navigate = useNavigate(); // Crea el hook navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/reservas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Reserva creada exitosamente.");
        setFormData({
          dniUsuario: "",
          matriculaVehiculo: "",
          fechaInicio: "",
          fechaFin: "",
          estado: "",
        });

        // Redirige a la página de pago después de la reserva exitosa
        navigate("/mpago");
      } else {
        alert("Error al crear la reserva. Verifique los datos e intente nuevamente.");
      }
    } catch (error) {
      console.error("Error al conectar con el backend:", error);
      alert("Error al realizar la reserva.");
    }
  };

  return (
    <div className="appR">
      <Navbar />
      <section className="form-section">
        <h2>Reserva tu Vehículo</h2>
        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="dniUsuario">DNI del Usuario:</label>
            <input
              type="text"
              id="dniUsuario"
              name="dniUsuario"
              placeholder="Ingrese su DNI"
              value={formData.dniUsuario}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="matriculaVehiculo">Matrícula del Vehículo:</label>
            <input
              type="text"
              id="matriculaVehiculo"
              name="matriculaVehiculo"
              placeholder="Ingrese la matrícula del vehículo"
              value={formData.matriculaVehiculo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="fechaInicio">Fecha de Inicio:</label>
            <input
              type="date"
              id="fechaInicio"
              name="fechaInicio"
              value={formData.fechaInicio}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="fechaFin">Fecha de Fin:</label>
            <input
              type="date"
              id="fechaFin"
              name="fechaFin"
              value={formData.fechaFin}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="estado">Estado de Reserva:</label>
            <select
              id="estado"
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione...</option>
              <option value="true">Confirmada</option>
              <option value="false">Pendiente</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Reservar
          </button>
        </form>
      </section>
    </div>
  );
}

export default ReservarVehiculo;
