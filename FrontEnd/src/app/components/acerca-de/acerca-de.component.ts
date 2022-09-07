import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona = new persona("","","","","");
  isLogged = false;
  autorities: string[];

  constructor(public personaService: PersonaService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
    this.autorities = this.tokenService.getAuthorities();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
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

