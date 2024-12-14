package com.alquiler.vehiculos.alquilervehiculps.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alquiler.vehiculos.alquilervehiculps.model.Vehiculo;
import com.alquiler.vehiculos.alquilervehiculps.service.VehiculoService;

@RestController
@RequestMapping("/api/vehiculos")
public class VehiculoController {
     private final VehiculoService vehiculoService;

    public VehiculoController(VehiculoService vehiculoService) {
        this.vehiculoService = vehiculoService;
    }

    @PostMapping
    public ResponseEntity<Vehiculo> crearOActualizarVehiculo(@RequestBody Vehiculo vehiculo) {
        Vehiculo nuevoVehiculo = vehiculoService.crearOActualizar(vehiculo);
        return ResponseEntity.ok(nuevoVehiculo);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Vehiculo> obtenerVehiculo(@PathVariable int id) {
        return vehiculoService.obtenerPorId(id)
            .map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<Vehiculo> listarVehiculos() {
        return vehiculoService.listarTodos();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarVehiculo(@PathVariable int id) {
        vehiculoService.eliminar(id);
        return ResponseEntity.noContent().build();
    }

}
