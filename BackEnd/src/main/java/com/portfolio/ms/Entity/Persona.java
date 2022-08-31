package com.portfolio.ms.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter //Estas dos anotaciones vienen de Lombok y son para evitar escribir 
                //Todos los setter y getters de cada atributo
@Entity
public class Persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotNull
    @Size(min = 1, max = 50, message = "No cumple con la longitud")
    private String nombre;
    
    @NotNull
    @Size(min = 1, max = 50, message = "No cumple con la longitud")
    private String apellido;
    
    @NotNull
    @Size(min = 1, max = 50, message = "No cumple con la longitud")
    private String tituloProf;
    
    @NotNull
    @Size(min = 1, max = 1000, message = "No cumple con la longitud")
    private String descripcion;
    
    @Size(min = 1, max = 50, message = "No cumple con la longitud")
    private String img;
}
