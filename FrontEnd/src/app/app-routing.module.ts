import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { EditPerfilComponent } from './components/acerca-de/edit-perfil.component';
import { NewHabilidadComponent } from './components/habilidades/new-habilidad.component';
import { EditHabilidadComponent } from './components/habilidades/edit-habilidad.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaExp', component: NewExperienciaComponent},
  {path: 'editExp/:id', component: EditExperienciaComponent},
  {path: 'nuevaEdu', component: NeweducacionComponent},
  {path: 'editEdu/:id', component: EditeducacionComponent},
  {path: 'nuevoProyecto', component: NewProyectosComponent},
  {path: 'editProyectos/:id', component:EditProyectosComponent},
  {path: 'editPerfil/:id', component:EditPerfilComponent},
  {path: 'nuevaHabilidad', component:NewHabilidadComponent},
  {path: 'editarHabilidad/:id', component: EditHabilidadComponent}
  
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
