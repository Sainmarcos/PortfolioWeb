import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit {
  habilidad: Habilidades = null;

  constructor(private sHabilidades: HabilidadesService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidades.detail(id).subscribe(
      data=>{
        this.habilidad = data;
      }, err=>{
        alert("error al obtener informacion de habilidad");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    if(this.habilidad.porcentajeH <0 || this.habilidad.porcentajeH > 100){
      alert("El porcentaje debe estar entre 0 y 100");
    }else{
      const id = this.activatedRouter.snapshot.params['id'];
      this.sHabilidades.update(id, this.habilidad).subscribe(
        data=>{
          this.router.navigate(['']);
        },err=>{
          alert("Error al modificar la habilidad");
          this.router.navigate(['']);
        }
      )
    }
  }

}
