/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.ms.Dto;

import javax.validation.constraints.NotBlank;

/**
 *
 * @author marco
 */
public class dtoHabilidades {
    @NotBlank
    private String nombreH;
    @NotBlank
    private int porcentajeH;

    public dtoHabilidades() {
    }

    public dtoHabilidades(String nombreH, int porcentajeH) {
        this.nombreH = nombreH;
        this.porcentajeH = porcentajeH;
    }

    public String getNombreH() {
        return nombreH;
    }

    public void setNombreH(String nombreH) {
        this.nombreH = nombreH;
    }

    public int getPorcentajeH() {
        return porcentajeH;
    }

    public void setPorcentajeH(int porcentajeH) {
        this.porcentajeH = porcentajeH;
    }
    
    
}
