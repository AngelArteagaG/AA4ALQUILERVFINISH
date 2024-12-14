import { useNavigate } from "react-router-dom";
import "./Inicio.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Inicio() {
  window.scrollTo(0, 0);
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/vehiculos", { state: { type: "" } });
    window.scrollTo(0, 0);
  };

  const handleViewMoreAutos = () => {
    navigate("/vehiculos", { state: { type: "Autos" } });
    window.scrollTo(0, 0);
  };

  const handleViewMoreCamionetas = () => {
    navigate("/vehiculos", { state: { type: "Camionetas" } });
    window.scrollTo(0, 0);
  };

  const handleReserveNow = () => {
    navigate("/ReservarVehiculo");
  };

  return (
    <div className="app">
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <h2>
            Reserva tu <span>vehículo</span> ideal al mejor precio
          </h2>
          <p>
            Explora nuestra amplia gama de vehículos disponibles para cualquier
            ocasión. Reserva y paga en línea en solo unos minutos.
          </p>
          <button className="reserve-btn" onClick={handleReserveNow}>
            Reserva ahora
          </button>
        </div>
        <img src="/src/assets/car.png" alt="Vehículo" className="hero-image" />
      </section>

      <section className="vehicle-types">
        <h3>Conoce nuestra variedad de vehículos disponibles</h3>
        <button className="view-all-btn" onClick={handleViewAll}>
          Ver todos los vehículos
        </button>

        <div className="vehicle-cards">
          <div className="vehicle-card">
            <img
              src="/src/assets/car1.png"
              alt="Autos"
              className="vehicle-image"
            />
            <div className="texto">
              <h4 className="texto2">Autos</h4>
              <p className="texto3">
                Económicos en rendimiento y precio y con capacidad de hasta 5
                pasajeros. Trasládese bien y sin preocupaciones.
              </p>
              <p className="price">Desde:</p>
              <p className="precio">
                <strong>S/299.13/día</strong>
              </p>
              <button className="view-more-btn" onClick={handleViewMoreAutos}>
                Ver más autos
              </button>
            </div>
          </div>

          <div className="vehicle-card">
            <img
              src="/src/assets/car2.png"
              alt="Camionetas"
              className="vehicle-image"
            />
            <div className="texto1">
              <h4 className="texto2">Camionetas</h4>
              <p className="texto3">
                Viaje por todo el Perú junto a tu familia, amigos y mascotas.
                Tenemos camionetas con capacidad de hasta 7 pasajeros.
              </p>
              <p className="price">Desde:</p>
              <p className="precio">
                <strong>S/299.13/día</strong>
              </p>
              <button
                className="view-more-btn1"
                onClick={handleViewMoreCamionetas}
              >
                Ver más camionetas
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Inicio;
