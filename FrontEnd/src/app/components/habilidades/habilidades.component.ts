import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidades: Habilidades[] = [];
  autorities: string[];

  constructor(private sHabilidades: HabilidadesService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarHabilidades();
    this.autorities = this.tokenService.getAuthorities();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarHabilidades():void{
    this.sHabilidades.list().subscribe(
      data =>{
        this.habilidades = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.sHabilidades.delete(id).subscribe(
        data=>{
          this.cargarHabilidades();
        },err=>{
          alert("No se pudo eliminar la habilidad");
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
