import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {
  perfil: persona = null;

  constructor(private personaS: PersonaService, private activatedRoute: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.personaS.getPersona().subscribe(
      data=>{
        this.perfil = data;
      },err=>{
        alert("Error al modificar el perfil");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaS.update(id, this.perfil).subscribe(
      data=>{
        this.router.navigate(['']);
      },err=>{
        alert("Error al actualizar el perfil");
        this.router.navigate(['']);
      }
    )
  }

}
