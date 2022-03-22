import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'libreta-direcciones';

  usuarios :any[] = [
    {
      "nombre" : "Cesar",
      "apellidos" : "de la Cruz",
      "email": "cesar@gmail.com",
      "telefono": "666666666",
      "direccion": "pepino nº4",
      "codigo_postal": "54321",
      "poblacion": "Jerez",
      "provincia": "Cádiz",
      "profesion": "panadero",
      "notas": "amigo del amigo"
    },
    {
      "nombre" : "Raquel",
      "apellidos" : "Mesa",
      "email": "raquel@gmail.com",
      "telefono": "777777777",
      "direccion": "papata nº14",
      "codigo_postal": "23456",
      "poblacion": "Constantina",
      "provincia": "Sevilla",
      "profesion": "fontanero",
      "notas": "no se"
    },
    {
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
    },
    {
      "nombre" : "Fatima",
      "apellidos" : "de la Cruz",
      "email": "fatima@gmail.com",
      "telefono": "111111111",
      "direccion": "patata nº12",
      "codigo_postal": "54321",
      "poblacion": "Espartinas",
      "provincia": "Sevilla",
      "profesion": "camionero",
      "notas": "amigo"
    }
  ]

  usuarioSeleccionado :any;
  
  seleccionaUsuario(usuario:any){
    this.usuarioSeleccionado = usuario;
  }
}
