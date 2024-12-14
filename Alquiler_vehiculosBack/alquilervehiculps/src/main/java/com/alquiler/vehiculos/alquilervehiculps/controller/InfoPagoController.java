package com.alquiler.vehiculos.alquilervehiculps.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.List;

import com.alquiler.vehiculos.alquilervehiculps.model.InfoPago;
import com.alquiler.vehiculos.alquilervehiculps.service.InfoPagoService;

@RestController
@RequestMapping("/api/infopago")
public class InfoPagoController {

    private final InfoPagoService infoPagoService;

    public InfoPagoController(InfoPagoService infoPagoService) {
        this.infoPagoService = infoPagoService;
    }

    @PostMapping
    public ResponseEntity<?> crearInfoPago(@RequestBody InfoPago infoPago) {
        try {
            // La fecha llega como String en formato MM/YY
            String fechaExpiracionOriginal = infoPago.getFechaExpiracion(); // Recibe la fecha como String
    
            // Validar que la fecha de expiración tenga el formato MM/YY
            if (!fechaExpiracionOriginal.matches("\\d{2}/\\d{2}")) {
                return ResponseEntity.badRequest().body("Formato de fecha de expiración inválido. Use MM/YY.");
            }
    
            // Transformar MM/YY a LocalDate (primer día del mes)
            String fechaTransformada = "01/" + fechaExpiracionOriginal; // Añadir el día ficticio
            String fechaExpiracionTransformada = fechaTransformada;// Fecha con día ficticio
                DateTimeFormatter.ofPattern("dd/MM/yy");// Formato de entrada
            
    
            // Establecer la fecha transformada en el objeto
            infoPago.setFechaExpiracion(fechaExpiracionTransformada);
    
            // Guardar o actualizar la entidad en el servicio
            return ResponseEntity.ok(infoPagoService.guardarOActualizar(infoPago));
        } catch (DateTimeParseException ex) {
            return ResponseEntity.badRequest().body("Formato de fecha de expiración inválido. Use MM/YY.");
        } catch (Exception ex) {
            return ResponseEntity.status(500).body("Error al procesar la solicitud: " + ex.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<InfoPago> obtenerInfoPago(@PathVariable Integer id) {
        return infoPagoService.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<InfoPago> listarInfoPagos() {
        return infoPagoService.listarTodos();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarInfoPago(@PathVariable Integer id) {
        infoPagoService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
