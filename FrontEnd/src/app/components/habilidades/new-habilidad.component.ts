import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})
export class NewHabilidadComponent implements OnInit {
  nombreH: string = '';
  porcentajeH: number = null;

  constructor(private sHabilidades: HabilidadesService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    if(this.porcentajeH < 0 || this.porcentajeH > 100){
      alert("El porcentaje debe estar entre 0 y 100");
    }else{
      const habilidad = new Habilidades(this.nombreH, this.porcentajeH);
      this.sHabilidades.save(habilidad).subscribe(
        data=>{
          this.router.navigate(['']);
        }, err=>{
          alert("Error al añadir la habilidad");
          this.router.navigate(['']);
        }
      )
    }
  }

}
