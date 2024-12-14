package com.alquiler.vehiculos.alquilervehiculps.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.alquiler.vehiculos.alquilervehiculps.model.RecogidaDevolucion;
import com.alquiler.vehiculos.alquilervehiculps.repository.RecogidaDevolucionRepository;

@Service
public class RecogidaDevolucionService {
    private final RecogidaDevolucionRepository recogidaDevolucionRepository;

    public RecogidaDevolucionService(RecogidaDevolucionRepository recogidaDevolucionRepository) {
        this.recogidaDevolucionRepository = recogidaDevolucionRepository;
    }

    public RecogidaDevolucion crearOActualizar(RecogidaDevolucion recogidaDevolucion) {
        return recogidaDevolucionRepository.save(recogidaDevolucion);
    }

    public List<RecogidaDevolucion> listarTodos() {
        return recogidaDevolucionRepository.findAll();
    }

    public Optional<RecogidaDevolucion> obtenerPorId(int id) {
        return recogidaDevolucionRepository.findById(id);
    }

    public void eliminar(int id) {
        recogidaDevolucionRepository.deleteById(id);
    }

}
