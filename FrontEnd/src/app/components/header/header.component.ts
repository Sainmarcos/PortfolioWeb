import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged = false;

  constructor(private router : Router, private tokenService:TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }

    let hola = document.getElementsByClassName('hola-mundo').item(0);
    // let nombre = document.getElementsByClassName('mi-nombre').item(0);

    this.escribir(hola);
    // this.escribir(nombre);
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login']);
  }

  escribir(elemento:Element){
    // let elemento = document.getElementsByClassName('hola-mundo').item(0);
    let saludo = elemento.textContent;
    saludo += '  ';
    elemento.innerHTML = '';
    let arreglo = saludo.split('');
    let i=0;
    let j=arreglo.length;
    let escribir = setInterval(function(){
      if (i === arreglo.length){
        elemento.innerHTML = saludo.substring(0,j);
        if(j===0){
          elemento.innerHTML = '';
          i=0;
          j= saludo.length;
        }
        j--;
      }else{
        elemento.innerHTML += arreglo[i];
        i++;
      }
    },300)
  }

}
