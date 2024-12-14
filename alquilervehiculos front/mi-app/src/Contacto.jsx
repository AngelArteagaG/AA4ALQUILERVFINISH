import { useState } from "react";
import emailjs from "emailjs-com";
import "./Contacto.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Contacto() {
  window.scrollTo(0, 0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Reemplaza con tu Service ID
        "YOUR_TEMPLATE_ID", // Reemplaza con tu Template ID
        formData,
        "YOUR_USER_ID" // Reemplaza con tu User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitted(true);
          setErrorMessage("");
          setFormData({ name: "", email: "", message: "" }); // Reinicia el formulario
        },
        (err) => {
          console.error("FAILED...", err);
          setErrorMessage(
            "Hubo un error al enviar el mensaje. Inténtalo de nuevo."
          );
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-container">
        {/* Banner con imagen a la izquierda */}
        <div className="banner">
          <div className="banner-content">
            <h1>Contáctanos</h1>
            <p>
              Estamos aquí para ayudarte. Completa el formulario para ponerte en
              contacto con nosotros.
            </p>
          </div>
        </div>

        {/* Formulario debajo del banner */}
        <div className="form-container-content">
          <h2 className="tittleform">Formulario de Contacto</h2>
          {isSubmitted ? (
            <p>
              Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.
            </p>
          ) : (
            <form onSubmit={sendEmail}>
              <div>
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Correo:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Mensaje:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
              <button type="submit">Enviar</button>
            </form>
          )}
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="social-media-container">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-square-instagram"></i>
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-tiktok"></i>
        </a>
      </div>
    </div>
  );
}

export default Contacto;
