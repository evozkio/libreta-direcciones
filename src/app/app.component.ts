import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

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
  ];

  sePuedeEliminar:boolean = true;
  usuarioSeleccionado :any ;
  usuarioModificar:any;

  ngOnInit(): void {
    this.usuarioSeleccionado = [0];
    this.usuarioModificar = Object.assign({},this.usuarios[0]);
    this.sePuedeEliminar = true;
  }
  
  cambiosLista(cambio:any){
    switch(cambio) { 
      case 'crear': { 
        this.crear();
        break; 
      } 
      case 'borrar': { 
        this.eliminar();
        break; 
      } 
      case 'modificar': { 
        this.modificar();
        break; 
      }  
    }   
  }
  
  seleccionaUsuario(posicion:any){
    this.usuarioSeleccionado = posicion;
    this.usuarioModificar = Object.assign({},this.usuarios[this.usuarioSeleccionado]);
    this.sePuedeEliminar = true;
  }

  crear(){
    this.usuarios.push(this.usuarioModificar);
  }

  eliminar(){
    if(this.sePuedeEliminar)
    this.usuarios.splice(this.usuarios[this.usuarioSeleccionado],1)
    this.sePuedeEliminar = false;
  }
  
  modificar(){
    this.usuarios[this.usuarioSeleccionado]=this.usuarioModificar;
  }
}
