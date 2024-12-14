package com.alquiler.vehiculos.alquilervehiculps.service;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

import com.alquiler.vehiculos.alquilervehiculps.model.InfoPago;
import com.alquiler.vehiculos.alquilervehiculps.repository.InfoPagoRepository;

@Service
public class InfoPagoService {

    private final InfoPagoRepository infoPagoRepository;

    public InfoPagoService(InfoPagoRepository infoPagoRepository) {
        this.infoPagoRepository = infoPagoRepository;
    }

    public InfoPago guardarOActualizar(InfoPago infoPago) {
        return infoPagoRepository.save(infoPago);
    }

    public List<InfoPago> listarTodos() {
        return infoPagoRepository.findAll();
    }

    public Optional<InfoPago> obtenerPorId(Integer id) {
        return infoPagoRepository.findById(id);
    }

    public void eliminar(Integer id) {
        infoPagoRepository.deleteById(id);
    }
}
