import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-u',
  templateUrl: './datos-u.component.html',
  styleUrls: ['./datos-u.component.css']
})
export class DatosUComponent {

  constructor(private router:Router)
  {}

  nombre:any
  apellido:any
  direccion:any
  celular:any
  edad:any
  ngOnInit():void
  { 
    
  }
    trar(){
      localStorage.getItem('dat1')
      localStorage.getItem('dat2')
      localStorage.getItem('dat3')
      localStorage.getItem('dat4')
      localStorage.getItem('dat5')
    } 
}
