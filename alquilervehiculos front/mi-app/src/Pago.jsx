import PropTypes from "prop-types";
import "./Pago.css"; // Ensure this file contains the updated styles below.

const Pago = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="overlay">
      <div className="floating-form">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="logo-pago">
          <img
            src="/src/assets/logo.png" // Replace with the Budget logo URL
            alt="Budget"
          />
        </div>
        <p className="notice">
          Recuerda activar las compras por internet con tu banco
        </p>
        <form className="form-pago">
          <input type="text" placeholder="Número de Tarjeta" required />
          <div className="inline-inputs">
            <input type="text" placeholder="MM/AA" required />
            <input type="text" placeholder="CVV" required />
          </div>
          <input type="text" placeholder="Nombre" required />
          <input type="text" placeholder="Apellido" required />
          <input type="email" placeholder="Email" required />
          <button type="submit" className="pay-btn">
            Pagar S/3,162.67
          </button>
        </form>
        <p className="data-notice">
          Infórmate sobre el tratamiento de tus datos personales{" "}
          <a href="#">aquí</a>.
        </p>
      </div>
    </div>
  );
};

Pago.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Pago;
