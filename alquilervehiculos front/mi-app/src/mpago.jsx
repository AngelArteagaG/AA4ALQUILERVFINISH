import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importar useNavigate
import './mpago.css';

const Mpago = () => {
  const [formData, setFormData] = useState({
    numero_tarjeta: '',
    nombre_titular: '',
    fecha_expiracion: '',
    codigo_cvv: '',
    tipo_tarjeta: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const navigate = useNavigate();  // Crear instancia de useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de campos
    if (
      !formData.numero_tarjeta ||
      !formData.nombre_titular ||
      !formData.fecha_expiracion ||
      !formData.codigo_cvv ||
      !formData.tipo_tarjeta
    ) {
      setError('Todos los campos son obligatorios.');
      setSuccess('');
      return;
    }

    if (formData.numero_tarjeta.length !== 16 || !/^\d+$/.test(formData.numero_tarjeta)) {
      setError('El número de tarjeta debe contener solo 16 dígitos.');
      setSuccess('');
      return;
    }

    if (!/^\d{2}\/\d{2}$/.test(formData.fecha_expiracion)) {
      setError('La fecha de expiración debe estar en formato MM/AA.');
      setSuccess('');
      return;
    }

    if (formData.codigo_cvv.length !== 3 || !/^\d+$/.test(formData.codigo_cvv)) {
      setError('El código CVV debe contener solo 3 dígitos.');
      setSuccess('');
      return;
    }

    // Limpiar mensajes de error
    setError('');

    // Preparar datos para el backend
    const dataToSend = {
      numeroTarjeta: formData.numero_tarjeta,
      nombreTitular: formData.nombre_titular,
      fechaExpiracion: formData.fecha_expiracion, // Se envía como está (MM/YY)
      codigoCCV: formData.codigo_cvv,
      tipoTarjeta: formData.tipo_tarjeta,
      idUsuario: 1, // Aquí puedes reemplazar con el ID del usuario actual si está disponible
    };

    try {
      const response = await fetch('http://localhost:8080/api/infopago', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        setSuccess('Pago procesado exitosamente.');
        setFormData({
          numero_tarjeta: '',
          nombre_titular: '',
          fecha_expiracion: '',
          codigo_cvv: '',
          tipo_tarjeta: '',
        });

        // Mostrar alerta antes de redirigir
        alert('Su pago se realizó con éxito.');
        
        // Redirigir al componente de recogida de devolución
        navigate('/recogida_devolucion');
      } else {
        const errorData = await response.json();
        setError(`Error: ${errorData.message || 'Algo salió mal al procesar el pago.'}`);
        setSuccess('');
      }
    } catch {
      setError('Error de conexión con el servidor.');
      setSuccess('');
    }
  };

  return (
    <div className="bodyP">
      <div className="paform">
        <img src="./img/Logo.jpeg" alt="Logo de pago" className="payment-logo" />
        <h2>Formulario de Pago</h2>
        <form onSubmit={handleSubmit} className="contenidoform">
          {error && <p className="error">{error}</p>} {/* Mostrar el error */}
          {success && <p className="success">{success}</p>}

          <div className="campos">
            <label htmlFor="tipo_tarjeta">Tipo de Tarjeta:</label>
            <select
              id="tipo_tarjeta"
              name="tipo_tarjeta"
              value={formData.tipo_tarjeta}
              onChange={handleChange}
            >
              <option value="" className="selecttarjet">Selecciona una tarjeta</option>
              <option value="VISA">VISA</option>
              <option value="Mastercard">Mastercard</option>
            </select>
          </div>

          <div className="campos">
            <label htmlFor="numero_tarjeta">Número de Tarjeta:</label>
            <input
              className="input"
              type="text"
              id="numero_tarjeta"
              name="numero_tarjeta"
              value={formData.numero_tarjeta}
              onChange={handleChange}
              placeholder="1234 5678 1234 5678"
            />
          </div>

          <div className="campos">
            <label htmlFor="nombre_titular">Nombre del Titular:</label>
            <input
              className="input"
              type="text"
              id="nombre_titular"
              name="nombre_titular"
              value={formData.nombre_titular}
              onChange={handleChange}
              placeholder="Nombre del titular"
            />
          </div>

          <div className="campos">
            <label htmlFor="fecha_expiracion">Fecha de Expiración (MM/AA):</label>
            <input
              className="input"
              type="text"
              id="fecha_expiracion"
              name="fecha_expiracion"
              value={formData.fecha_expiracion}
              onChange={handleChange}
              placeholder="MM/AA"
            />
          </div>

          <div className="campos">
            <label htmlFor="codigo_cvv">Código CVV:</label>
            <input
              className="input"
              type="text"
              id="codigo_cvv"
              name="codigo_cvv"
              value={formData.codigo_cvv}
              onChange={handleChange}
              placeholder="123"
            />
          </div>

          <button type="submit">Pagar Ahora</button>
        </form>
      </div>
    </div>
  );
};

export default Mpago;
