package com.alquiler.vehiculos.alquilervehiculps.service;

import java.util.List;
import java.util.Optional;


import org.springframework.stereotype.Service;

import com.alquiler.vehiculos.alquilervehiculps.model.Usuario;
import com.alquiler.vehiculos.alquilervehiculps.repository.UsuarioRepository;

@Service
public class UsuarioService {
    private final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public Usuario crearOActualizar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public List<Usuario> listarTodos() {
        return usuarioRepository.findAll();
    }

    public Optional<Usuario> obtenerPorId(int id) {
        return usuarioRepository.findById(id);
    }
    public Optional<Usuario> obtenerPorDni(String dni) {
        return usuarioRepository.findByDni(dni);
    }

    public void eliminar(int id) {
        usuarioRepository.deleteById(id);
    }

}
