package com.portfolio.ms.Controller;

import com.portfolio.ms.Dto.dtoHabilidades;
import com.portfolio.ms.Entity.Habilidades;
import com.portfolio.ms.Security.Controller.Mensaje;
import com.portfolio.ms.Service.SHabilidades;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author marco
 */

@RestController
@RequestMapping("/habilidades")
@CrossOrigin (origins = "http://localhost:4200")
public class CHabilidades {
    @Autowired
    SHabilidades sHabilidades;
    
    @GetMapping("/lista")
    public ResponseEntity<List<Habilidades>> list(){
        List<Habilidades> list = sHabilidades.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    //@PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoHabilidades dtohabilidades){
        if(StringUtils.isBlank(dtohabilidades.getNombreH()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        if(StringUtils.isBlank(""+dtohabilidades.getPorcentajeH()))
            return new ResponseEntity(new Mensaje("El porcentaje es obligatorio"), HttpStatus.BAD_REQUEST);
        if(sHabilidades.existsByNombreH(dtohabilidades.getNombreH()))
            return new ResponseEntity(new Mensaje("El nombre ya existe"), HttpStatus.BAD_REQUEST);
        
        Habilidades habilidades = new Habilidades(dtohabilidades.getNombreH(), dtohabilidades.getPorcentajeH());
        sHabilidades.save(habilidades);
        
        return new ResponseEntity(new Mensaje("Habilidad agregada con exito"), HttpStatus.OK);
        
    }
    
    //@PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoHabilidades dtoH){
        if(!sHabilidades.existsById(id))
            return new ResponseEntity(new Mensaje("El id no existe"), HttpStatus.BAD_REQUEST);
        if(sHabilidades.existsByNombreH(dtoH.getNombreH()) && sHabilidades.getByNombreH(dtoH.getNombreH()).get().getId() != id)
            return new ResponseEntity(new Mensaje("Esa experiencia ya existe"), HttpStatus.BAD_REQUEST);
        if(StringUtils.isBlank(dtoH.getNombreH()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        if(StringUtils.isBlank(""+dtoH.getPorcentajeH()))
            return new ResponseEntity(new Mensaje("El porcentaje es obligatorio"), HttpStatus.BAD_REQUEST);
        
        Habilidades habilidad = sHabilidades.getOne(id).get();
        habilidad.setNombreH(dtoH.getNombreH());
        habilidad.setPorcentajeH(dtoH.getPorcentajeH());
        
        sHabilidades.save(habilidad);
        return new ResponseEntity(new Mensaje("Habilidad actualizada con exito"), HttpStatus.OK);
    }
    
    //@PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id){
        if(!sHabilidades.existsById(id))
          return new ResponseEntity(new Mensaje("Id inexistente"), HttpStatus.BAD_REQUEST);
        
        sHabilidades.delete(id);
        return new ResponseEntity(new Mensaje("Habilidad eliminada con exito"), HttpStatus.OK);
    }
    
    //@PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/detail/{id}")
    public ResponseEntity<Habilidades> getById(@PathVariable("id") int id){
        if(!sHabilidades.existsById(id))
            return new ResponseEntity(new Mensaje("Id inexistente"), HttpStatus.BAD_REQUEST);
        
        Habilidades habilidad = sHabilidades.getOne(id).get();
        return new ResponseEntity(habilidad, HttpStatus.OK);
    }
}
