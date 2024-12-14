package com.alquiler.vehiculos.alquilervehiculps.model;

import java.time.LocalDate;




import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="recogida_devolucion")
public class RecogidaDevolucion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_recogida_devolucion")
    private int idRecogidaDevolucion;
    
    @ManyToOne
    @JoinColumn(name = "id_reserva")
    private Reserva reserva;

    @Column(name = "lugar_recogida", nullable = false)
    private String lugarRecogida;

    @Column(name = "lugar_devolucion", nullable = false)
    private String lugarDevolucion;

    @Column(name = "fecha_recogida")
    private LocalDate fechaRecogida;

    @Column(name = "fecha_devolucion")
    private LocalDate fechaDevolucion;

    public int getIdRecogidaDevolucion() {
        return idRecogidaDevolucion;
    }

    public void setIdRecogidaDevolucion(int idRecogidaDevolucion) {
        this.idRecogidaDevolucion = idRecogidaDevolucion;
    }

    public Reserva getReserva() {
        return reserva;
    }

    public void setReserva(Reserva reserva) {
        this.reserva = reserva;
    }

    public String getLugarRecogida() {
        return lugarRecogida;
    }

    public void setLugarRecogida(String lugarRecogida) {
        this.lugarRecogida = lugarRecogida;
    }

    public String getLugarDevolucion() {
        return lugarDevolucion;
    }

    public void setLugarDevolucion(String lugarDevolucion) {
        this.lugarDevolucion = lugarDevolucion;
    }

    public LocalDate getFechaRecogida() {
        return fechaRecogida;
    }

    public void setFechaRecogida(LocalDate fechaRecogida) {
        this.fechaRecogida = fechaRecogida;
    }

    public LocalDate getFechaDevolucion() {
        return fechaDevolucion;
    }

    public void setFechaDevolucion(LocalDate fechaDevolucion) {
        this.fechaDevolucion = fechaDevolucion;
    }


    

}
