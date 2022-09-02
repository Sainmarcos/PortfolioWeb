import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = 'https://backend-portfolio-ms.herokuapp.com/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{//Observable es para hacer peticiones asincronas
    return this.http.get<persona>(this.URL + 'traer/perfil');
  }

  public update(id:number , perfil: persona): Observable<any>{
    return this.http.put<any>(this.URL + `editar/${id}`, perfil);
  }
}
