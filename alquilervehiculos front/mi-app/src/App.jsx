import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./Inicio";
import Vehiculos from "./Vehiculos";
import Navbar from "./Navbar";
import LoginForm from "./login";
import RegistrationForm from "./register";
import Contacto from "./Contacto";
import ReservarVehiculo from "./ReservarVehiculo";
import Mpago from "./mpago";
import RecogidaDevolucion from './recogida_devolucion'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/vehiculos" element={<Vehiculos />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/reservarVehiculo" element={<ReservarVehiculo />} />
        <Route path="/mpago" element={<Mpago/>} />
        <Route path="/recogida_devolucion" element={<RecogidaDevolucion/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
