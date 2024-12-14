package com.alquiler.vehiculos.alquilervehiculps.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.alquiler.vehiculos.alquilervehiculps.model.Pago;
import com.alquiler.vehiculos.alquilervehiculps.repository.PagoRepository;

@Service
public class PagoService {
    
    private final PagoRepository pagoRepository;

    public PagoService(PagoRepository pagoRepository) {
        this.pagoRepository = pagoRepository;
    }

    public Pago crearOActualizar(Pago pago) {
        return pagoRepository.save(pago);
    }

    public List<Pago> listarTodos() {
        return pagoRepository.findAll();
    }

    public Optional<Pago> obtenerPorId(int id) {
        return pagoRepository.findById(id);
    }

    public void eliminar(int id) {
        pagoRepository.deleteById(id);
    }

}
