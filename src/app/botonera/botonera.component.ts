import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.scss']
})
export class BotoneraComponent {
  @Input ()usuariosPadre:any;

  crear(){
     let usuario = {
      "nombre" : "Cesar",
      "apellidos" : "Mesa",
      "email": "cesarcomando@gmail.com",
      "telefono": "222222222",
      "direccion": "pepino nº24",
      "codigo_postal": "23456",
      "poblacion": "Espartinas",
      "provincia": "Sevilla",
      "profesion": "fontanero",
      "notas": "amigo"
    }
    this.usuariosPadre.push(usuario);

  }
  modificar(){

  }
  borrar(){

  }
}
