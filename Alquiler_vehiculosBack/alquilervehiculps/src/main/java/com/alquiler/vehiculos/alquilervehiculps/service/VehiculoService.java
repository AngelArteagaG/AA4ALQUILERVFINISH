package com.alquiler.vehiculos.alquilervehiculps.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.alquiler.vehiculos.alquilervehiculps.model.Vehiculo;
import com.alquiler.vehiculos.alquilervehiculps.repository.VehiculoRepository;

@Service
public class VehiculoService {
     private final VehiculoRepository vehiculoRepository;

    public VehiculoService(VehiculoRepository vehiculoRepository) {
        this.vehiculoRepository = vehiculoRepository;
    }

    public Vehiculo crearOActualizar(Vehiculo vehiculo) {
        return vehiculoRepository.save(vehiculo);
    }

    public List<Vehiculo> listarTodos() {
        return vehiculoRepository.findAll();
    }

    public Optional<Vehiculo> obtenerPorId(int id) {
        return vehiculoRepository.findById(id);
    }
    public Optional<Vehiculo> obtenerPorMatricula(String matricula) {
        return vehiculoRepository.findByMatricula(matricula);
    }

    public void eliminar(int id) {
        vehiculoRepository.deleteById(id);
    }

}
