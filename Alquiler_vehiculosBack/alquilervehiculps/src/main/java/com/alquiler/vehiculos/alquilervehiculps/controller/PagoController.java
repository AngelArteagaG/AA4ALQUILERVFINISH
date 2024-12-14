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

import com.alquiler.vehiculos.alquilervehiculps.model.Pago;
import com.alquiler.vehiculos.alquilervehiculps.service.PagoService;

@RestController
@RequestMapping("/api/pagos")
public class PagoController {
     private final PagoService pagoService;

    public PagoController(PagoService pagoService) {
        this.pagoService = pagoService;
    }

    @PostMapping
    public ResponseEntity<Pago> realizarPago(@RequestBody Pago pago) {
        // Validación de la reserva asociada
        if (pago.getReserva() == null || pago.getReserva().getIdReserva() <= 0) {
            return ResponseEntity.badRequest().body(null); // No se ha indicado una reserva válida
        }
        Pago nuevoPago = pagoService.crearOActualizar(pago);
        return ResponseEntity.ok(nuevoPago);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pago> obtenerPago(@PathVariable int id) {
        return pagoService.obtenerPorId(id)
            .map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<Pago> listarPagos() {
        return pagoService.listarTodos();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarPago(@PathVariable int id) {
        pagoService.eliminar(id);
        return ResponseEntity.noContent().build();
    }

}
