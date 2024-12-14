import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para redirección
import './recogida_devolucion.css';

const RecogidaDevolucion = () => {
  const navigate = useNavigate(); // Inicializa el hook de navegación
  const lugares = [
    'Agencia SJM',
    'Agencia VMT',
    'Agencia SURCO',
    'Agencia MIRAFLORES',
    'Agencia ATE',
  ];

  const [formData, setFormData] = useState({
    lugarRecogida: '',
    lugarDevolucion: '',
    fechaRecogida: '',
    fechaDevolucion: '',
  });

  const [mensaje, setMensaje] = useState('');

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación básica
    if (
      !formData.lugarRecogida ||
      !formData.lugarDevolucion ||
      !formData.fechaRecogida ||
      !formData.fechaDevolucion
    ) {
      setMensaje('Por favor, completa todos los campos.');
      return;
    }

    // Validación de fechas: La fecha de recogida debe ser anterior a la de devolución
    if (new Date(formData.fechaRecogida) > new Date(formData.fechaDevolucion)) {
      setMensaje('La fecha de recogida debe ser anterior a la fecha de devolución.');
      return;
    }

    // Enviar datos al backend
    try {
      const response = await fetch('http://localhost:8080/api/recogida-devolucion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setMensaje('¡Datos guardados exitosamente!');
        console.log('Respuesta del backend:', data);

        // Mostrar el anuncio con "reservación exitosa"
        alert('Tu reservación se realizó con éxito.');

        // Redirigir al componente Inicio.jsx
        navigate('/inicio'); // Ajusta la ruta según la configuración de tu router
      } else {
        setMensaje('Error al guardar los datos. Verifica los campos.');
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      setMensaje('Error al conectar con el servidor.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="bodyP">
      <div className="paform">
        <h2>Recogida y Devolución</h2>
        <form className="contenidoform" onSubmit={handleSubmit}>
          <div className="campos">
            <label htmlFor="lugarRecogida">Lugar de Recogida:</label>
            <select
              id="lugarRecogida"
              name="lugarRecogida"
              value={formData.lugarRecogida}
              onChange={handleChange}
            >
              <option value="">Selecciona un lugar</option>
              {lugares.map((lugar, index) => (
                <option key={index} value={lugar}>
                  {lugar}
                </option>
              ))}
            </select>
          </div>

          <div className="campos">
            <label htmlFor="lugarDevolucion">Lugar de Devolución:</label>
            <select
              id="lugarDevolucion"
              name="lugarDevolucion"
              value={formData.lugarDevolucion}
              onChange={handleChange}
            >
              <option value="">Selecciona un lugar</option>
              {lugares.map((lugar, index) => (
                <option key={index} value={lugar}>
                  {lugar}
                </option>
              ))}
            </select>
          </div>

          <div className="campos">
            <label htmlFor="fechaRecogida">Fecha de Recogida:</label>
            <input
              type="date"
              id="fechaRecogida"
              name="fechaRecogida"
              value={formData.fechaRecogida}
              onChange={handleChange}
            />
          </div>

          <div className="campos">
            <label htmlFor="fechaDevolucion">Fecha de Devolución:</label>
            <input
              type="date"
              id="fechaDevolucion"
              name="fechaDevolucion"
              value={formData.fechaDevolucion}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Guardar cambios</button>
        </form>
        {mensaje && <p className="mensaje">{mensaje}</p>}
      </div>
    </div>
  );
};

export default RecogidaDevolucion;
