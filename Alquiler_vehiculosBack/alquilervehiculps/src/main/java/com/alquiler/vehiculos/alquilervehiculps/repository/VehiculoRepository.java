package com.alquiler.vehiculos.alquilervehiculps.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alquiler.vehiculos.alquilervehiculps.model.Vehiculo;

public interface VehiculoRepository extends JpaRepository<Vehiculo, Integer> {
    Optional<Vehiculo> findByMatricula(String matricula);

}
