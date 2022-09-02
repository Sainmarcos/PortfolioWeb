import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyectos[] = [];
  autorities: string[];

  constructor(private proyectosS: ProyectosService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
    this.autorities = this.tokenService.getAuthorities();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarProyectos():void{
    this.proyectosS.lista().subscribe(
      data=>{
        this.proyectos = data;
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.proyectosS.delete(id).subscribe(
        data=>{
          this.cargarProyectos();
        },err =>{
          alert("Error al eliminar el proyecto");
        }
      )
    }
  }

  isAdmin(): boolean{
    let admin = false;
    for(let i = 0; i<this.autorities.length; i++){
      if(this.autorities[i]=="ROLE_ADMIN")
      admin= true;
    }
    return admin;
  }

}
