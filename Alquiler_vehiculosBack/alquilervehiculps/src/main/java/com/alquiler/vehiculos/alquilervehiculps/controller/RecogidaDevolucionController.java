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

import com.alquiler.vehiculos.alquilervehiculps.model.RecogidaDevolucion;
import com.alquiler.vehiculos.alquilervehiculps.service.RecogidaDevolucionService;

@RestController
@RequestMapping("/api/recogida-devolucion")
public class RecogidaDevolucionController {
     private final RecogidaDevolucionService recogidaDevolucionService;

    public RecogidaDevolucionController(RecogidaDevolucionService recogidaDevolucionService) {
        this.recogidaDevolucionService = recogidaDevolucionService;
    }

    @PostMapping
    public ResponseEntity<RecogidaDevolucion> registrarRecogidaDevolucion(@RequestBody RecogidaDevolucion recogidaDevolucion) {
        // Validar fechas (fecha de recogida debe ser antes de la de devolución)
        if (recogidaDevolucion.getFechaRecogida().isAfter(recogidaDevolucion.getFechaDevolucion())) {
            return ResponseEntity.badRequest().body(null); // Fecha de recogida incorrecta
        }

        RecogidaDevolucion nuevaRecogidaDevolucion = recogidaDevolucionService.crearOActualizar(recogidaDevolucion);
        return ResponseEntity.ok(nuevaRecogidaDevolucion);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RecogidaDevolucion> obtenerRecogidaDevolucion(@PathVariable int id) {
        return recogidaDevolucionService.obtenerPorId(id)
            .map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<RecogidaDevolucion> listarRecogidasDevoluciones() {
        return recogidaDevolucionService.listarTodos();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarRecogidaDevolucion(@PathVariable int id) {
        recogidaDevolucionService.eliminar(id);
        return ResponseEntity.noContent().build();
    }

}
