package com.alquiler.vehiculos.alquilervehiculps.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alquiler.vehiculos.alquilervehiculps.model.Pago;

public interface PagoRepository extends JpaRepository<Pago, Integer>{
    List<Pago> findByReservaIdReserva(int idReserva);

}
