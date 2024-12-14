package com.alquiler.vehiculos.alquilervehiculps.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alquiler.vehiculos.alquilervehiculps.model.Reserva;
import com.alquiler.vehiculos.alquilervehiculps.model.Usuario;
import com.alquiler.vehiculos.alquilervehiculps.model.Vehiculo;
import com.alquiler.vehiculos.alquilervehiculps.service.ReservaService;
import com.alquiler.vehiculos.alquilervehiculps.service.UsuarioService;
import com.alquiler.vehiculos.alquilervehiculps.service.VehiculoService;

@RestController
@RequestMapping("/api/reservas")
public class ReservaController {
    private final ReservaService reservaService;
    private final VehiculoService vehiculoService;
    private final UsuarioService usuarioService;

    public ReservaController(ReservaService reservaService, VehiculoService vehiculoService, UsuarioService usuarioService) {
        this.reservaService = reservaService;
        this.vehiculoService = vehiculoService;
        this.usuarioService = usuarioService;
    }

    @PostMapping
    public ResponseEntity<Reserva> crearReserva(@RequestBody Map<String, String> reservaData) {
        // Extraer datos del cuerpo de la solicitud
        String dniUsuario = reservaData.get("dniUsuario");
        String matriculaVehiculo = reservaData.get("matriculaVehiculo");
        LocalDate fechaInicio = LocalDate.parse(reservaData.get("fechaInicio"));
        LocalDate fechaFin = LocalDate.parse(reservaData.get("fechaFin"));

        // Validar que las fechas sean correctas
        if (fechaInicio.isAfter(fechaFin)) {
            return ResponseEntity.badRequest().body(null); // Fecha de inicio incorrecta
        }

        // Buscar usuario por DNI
        Usuario usuario = usuarioService.obtenerPorDni(dniUsuario)
            .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        // Buscar vehículo por matrícula
        Vehiculo vehiculo = vehiculoService.obtenerPorMatricula(matriculaVehiculo)
            .orElseThrow(() -> new RuntimeException("Vehículo no encontrado o no disponible"));

        if (!vehiculo.isEstado()) {
            return ResponseEntity.badRequest().body(null); // Vehículo no disponible
        }

        // Crear la reserva
        Reserva reserva = new Reserva();
        reserva.setUsuario(usuario);
        reserva.setVehiculo(vehiculo);
        reserva.setFechaInicio(fechaInicio);
        reserva.setFechaFin(fechaFin);
        reserva.setEstado(true);

        Reserva nuevaReserva = reservaService.crearOActualizar(reserva);

        // Actualizar el estado del vehículo
        vehiculo.setEstado(false); // El vehículo ya no está disponible
        vehiculoService.crearOActualizar(vehiculo);

        return ResponseEntity.ok(nuevaReserva);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reserva> obtenerReserva(@PathVariable int id) {
        return reservaService.obtenerPorId(id)
            .map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<Reserva> listarReservas() {
        return reservaService.listarTodas();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarReserva(@PathVariable int id) {
        reservaService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
