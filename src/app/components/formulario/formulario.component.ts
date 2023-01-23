import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor(private router:Router)
  {  }

    nombre:any
    apellido:any
    direccion:any
    celular:any
    edad:any

  ngOnInit():void
  { 
    this.nombre
    this.apellido
    this.direccion
    this.celular
    this.edad
    this.pas
    
  }

    navegar()
    {
      this.router.navigate(['2'])
    }

    pas(datos:any)
    {
      localStorage.setItem('dat1', this.nombre)
      localStorage.setItem('dat2', this.apellido)
      localStorage.setItem('dat3', this.direccion)
      localStorage.setItem('dat4', this.celular)
      localStorage.setItem('dat5', this.edad)
    }
}
