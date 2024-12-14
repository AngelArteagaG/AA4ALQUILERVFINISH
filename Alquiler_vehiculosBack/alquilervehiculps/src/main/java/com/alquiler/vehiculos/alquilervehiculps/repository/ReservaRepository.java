package com.alquiler.vehiculos.alquilervehiculps.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alquiler.vehiculos.alquilervehiculps.model.Reserva;

public interface ReservaRepository extends JpaRepository<Reserva, Integer> {
    List<Reserva> findByUsuarioIdUsuario(int idUsuario);
    List<Reserva> findByVehiculoIdVehiculo(int idVehiculo);

}
