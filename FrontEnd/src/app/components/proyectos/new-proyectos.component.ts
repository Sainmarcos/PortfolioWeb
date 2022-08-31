import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {
  nombreP: string;
  descripcionP: string;

  constructor(private proyectosS: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const proyectos = new Proyectos(this.nombreP, this.descripcionP);
    this.proyectosS.save(proyectos).subscribe(
      data=>{
        this.router.navigate(['']);
      },err=>{
        alert("Error al añadir el proyecto :'(");
      }
    )
  }
}
