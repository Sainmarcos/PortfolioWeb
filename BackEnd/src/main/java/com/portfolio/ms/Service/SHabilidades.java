package com.portfolio.ms.Service;

import com.portfolio.ms.Entity.Habilidades;
import com.portfolio.ms.Repository.RHabilidades;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author marco
 */
@Service
@Transactional
public class SHabilidades {
    @Autowired
    RHabilidades rHabilidades;
    
    public List<Habilidades> list(){
        return rHabilidades.findAll();
    }
    
    public Optional<Habilidades> getOne(int id){
        return rHabilidades.findById(id);
    }
    
    public Optional<Habilidades> getByNombreH(String nombreH){
        return rHabilidades.findByNombreH(nombreH);
    }
    
    public void save(Habilidades habilidades){
        rHabilidades.save(habilidades);
    }
    
    public void delete(int id){
        rHabilidades.deleteById(id);
    }
    
    public boolean existsById(int id){
        return rHabilidades.existsById(id);
    }
    
    public boolean existsByNombreH(String nombreH){
        return rHabilidades.existsByNombreH(nombreH);
    }
}
