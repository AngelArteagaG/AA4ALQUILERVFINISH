package com.alquiler.vehiculos.alquilervehiculps.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alquiler.vehiculos.alquilervehiculps.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    Optional<Usuario> findByDni(String dni);

}

