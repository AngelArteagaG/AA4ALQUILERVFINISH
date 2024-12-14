package com.alquiler.vehiculos.alquilervehiculps.model;



import jakarta.persistence.*;

@Entity
@Table(name = "infopago")
public class InfoPago {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_infopago")
    private Integer idInfoPago;

    @Column(name = "id_usuario")
    private Integer idUsuario;

    @Column(name = "tipo_tarjeta", length = 40, nullable = false)
    private String tipoTarjeta;

    @Column(name = "numero_tarjeta", length = 19, nullable = false)
    private String numeroTarjeta;

    @Column(name = "nombre_titular", length = 100, nullable = false)
    private String nombreTitular;

    @Column(name = "fecha_expiracion")
    private String fechaExpiracion;

    @Column(name = "codigo_ccv", length = 3, nullable = false)
    private String codigoCCV;

    // Getters y Setters
    public Integer getIdInfoPago() {
        return idInfoPago;
    }

    public void setIdInfoPago(Integer idInfoPago) {
        this.idInfoPago = idInfoPago;
    }

    public Integer getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Integer idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getTipoTarjeta() {
        return tipoTarjeta;
    }

    public void setTipoTarjeta(String tipoTarjeta) {
        this.tipoTarjeta = tipoTarjeta;
    }

    public String getNumeroTarjeta() {
        return numeroTarjeta;
    }

    public void setNumeroTarjeta(String numeroTarjeta) {
        this.numeroTarjeta = numeroTarjeta;
    }

    public String getNombreTitular() {
        return nombreTitular;
    }

    public void setNombreTitular(String nombreTitular) {
        this.nombreTitular = nombreTitular;
    }

    public String getFechaExpiracion() {
        return fechaExpiracion;
    }

    public void setFechaExpiracion(String fechaExpiracion) {
        this.fechaExpiracion = fechaExpiracion;
    }

    public String getCodigoCCV() {
        return codigoCCV;
    }

    public void setCodigoCCV(String codigoCCV) {
        this.codigoCCV = codigoCCV;
    }
 
}
