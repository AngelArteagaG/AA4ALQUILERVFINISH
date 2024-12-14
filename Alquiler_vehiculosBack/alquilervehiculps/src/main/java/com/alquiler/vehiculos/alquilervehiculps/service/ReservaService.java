package com.alquiler.vehiculos.alquilervehiculps.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.alquiler.vehiculos.alquilervehiculps.model.Reserva;
import com.alquiler.vehiculos.alquilervehiculps.repository.ReservaRepository;

@Service
public class ReservaService {
    private final ReservaRepository reservaRepository;

    public ReservaService(ReservaRepository reservaRepository) {
        this.reservaRepository = reservaRepository;
    }

    public Reserva crearOActualizar(Reserva reserva) {
        return reservaRepository.save(reserva);
    }

    public List<Reserva> listarTodas() {
        return reservaRepository.findAll();
    }

    public Optional<Reserva> obtenerPorId(int id) {
        return reservaRepository.findById(id);
    }

    public void eliminar(int id) {
        reservaRepository.deleteById(id);
    }

}
