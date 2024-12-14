import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Vehiculos.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Vehiculos = () => {
  const location = useLocation();
  const [selectedType, setSelectedType] = useState(location.state?.type || "");

  const cars = [
    {
      title: "Toyota Yaris",
      price: 390,
      imgSrc: "/src/assets/auto1.jpg",
      transmission: "Automático",
      fuel: "Gasolina",
      capacity: 5,
      category: "Design",
      type: "Autos",
    },
    {
      title: "Toyota Yaris",
      price: 140,
      imgSrc: "/src/assets/auto2.jpg",
      transmission: "Mecánico",
      fuel: "Gasolina",
      capacity: 5,
      category: "Compacto",
      type: "Autos",
    },
    {
      title: "VOLKSWAGEN VIRTUS 2023",
      price: 140,
      imgSrc: "/src/assets/auto3.jpg",
      transmission: "Mecánico",
      fuel: "Gasolina",
      capacity: 5,
      category: "Compacto",
      type: "Autos",
    },
    {
      title: "VOLKSWAGEN VIRTUS 2023",
      price: 140,
      imgSrc: "/src/assets/auto4.jpg",
      transmission: "Mecánico",
      fuel: "Gasolina",
      capacity: 5,
      category: "Compacto",
      type: "Autos",
    },
    {
      title: "VOLKSWAGEN VIRTUS 2023",
      price: 140,
      imgSrc: "/src/assets/auto5.jpg",
      transmission: "Mecánico",
      fuel: "Gasolina",
      capacity: 5,
      category: "Compacto",
      type: "Autos",
    },
    {
      title: "VOLVO S60",
      price: 390,
      imgSrc: "/src/assets/auto6.jpg",
      transmission: "Automático",
      fuel: "Gasolina",
      capacity: 5,
      category: "Design",
      type: "Autos",
    },
    {
      title: "Nissan Frontier",
      price: 490,
      imgSrc: "/src/assets/camioneta1.jpg",
      transmission: "Automático",
      fuel: "Diesel",
      capacity: 5,
      category: "Design",
      type: "Camionetas",
    },
    {
      title: "Nissan Frontier",
      price: 490,
      imgSrc: "/src/assets/camioneta2.jpg",
      transmission: "Automático",
      fuel: "Diesel",
      capacity: 5,
      category: "Design",
      type: "Camionetas",
    },
    {
      title: "Nissan Frontier",
      price: 490,
      imgSrc: "/src/assets/camioneta3.jpg",
      transmission: "Automático",
      fuel: "Diesel",
      capacity: 5,
      category: "Design",
      type: "Camionetas",
    },
    {
      title: "Nissan Frontier",
      price: 490,
      imgSrc: "/src/assets/camioneta4.jpg",
      transmission: "Automático",
      fuel: "Diesel",
      capacity: 5,
      category: "Design",
      type: "Camionetas",
    },
    {
      title: "Nissan Frontier",
      price: 490,
      imgSrc: "/src/assets/camioneta5.jpg",
      transmission: "Automático",
      fuel: "Diesel",
      capacity: 5,
      category: "Design",
      type: "Camionetas",
    },
    {
      title: "Nissan Frontier",
      price: 490,
      imgSrc: "/src/assets/camioneta6.jpg",
      transmission: "Automático",
      fuel: "Diesel",
      capacity: 5,
      category: "Design",
      type: "Camionetas",
    },
  ];

  const filteredCars = selectedType
    ? cars.filter((car) => car.type === selectedType)
    : cars;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="vehiculo" className="app">
      <Navbar />
      <div className="main-container">
        <div className="container">
          <div className="vehicle-type">
            <h3>Tipo de Auto</h3>
            <ul>
              <li
                onClick={() => setSelectedType("Autos")}
                className={selectedType === "Autos" ? "selected" : ""}
              >
                Autos
              </li>
              <li
                onClick={() => setSelectedType("Camionetas")}
                className={selectedType === "Camionetas" ? "selected" : ""}
              >
                Camionetas
              </li>
            </ul>
          </div>
          <div className="car-list">
            {filteredCars.map((car, index) => (
              <div key={index} className="card">
                <div className="card-price-container">
                  <p className="card-price">S/ {car.price}.00/24hr</p>
                </div>
                <img src={car.imgSrc} alt={car.title} className="card-img" />
                <h2 className="card-title">{car.title}</h2>
                <div className="card-details">
                  <div className="card-detail-item">
                    <img
                      src="https://www.luxuryrentacarperu.com/wp-content/themes/luxury/images/caja-de-cambios.svg"
                      alt="Transmisión"
                      className="card-icon"
                    />
                    <span>{car.transmission}</span>
                  </div>
                  <div className="card-detail-item">
                    <img
                      src="https://www.luxuryrentacarperu.com/wp-content/themes/luxury/images/petrol-station.svg"
                      alt="Combustible"
                      className="card-icon"
                    />
                    <span>{car.fuel}</span>
                  </div>
                  <div className="card-detail-item">
                    <img
                      src="https://www.luxuryrentacarperu.com/wp-content/themes/luxury/images/car-seat.png"
                      alt="Capacidad"
                      className="card-icon"
                    />
                    <span>{car.capacity}</span>
                  </div>
                  <div className="card-detail-item">
                    <img
                      src="https://www.luxuryrentacarperu.com/wp-content/themes/luxury/images/car.png"
                      alt="Categoría"
                      className="card-icon"
                    />
                    <span>{car.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Vehiculos;
