package com.alquiler.vehiculos.alquilervehiculps.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alquiler.vehiculos.alquilervehiculps.model.RecogidaDevolucion;

public interface RecogidaDevolucionRepository extends JpaRepository<RecogidaDevolucion, Integer> {
    List<RecogidaDevolucion> findByReservaIdReserva(int idReserva);

}
