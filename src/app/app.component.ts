import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.usuarioSeleccionado = this.usuarios[0];
    this.usuarioModificar = Object.assign({},this.usuarios[0]);
  }

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



  title = 'libreta-direcciones';
  sePuedeModificar:boolean = true;
  usuarioSeleccionado :any ;
  usuarioModificar:any;
  posicion:any;

  
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

  datosUsuarioModificar(usuario:any){
    this.usuarioModificar = usuario;
    this.sePuedeModificar=true;
  }
  
  seleccionaUsuario(usuario:any){
    this.usuarioSeleccionado = usuario;
    this.posicion = this.usuarios.indexOf(this.usuarioSeleccionado);
    this.sePuedeModificar=false;
    this.usuarioModificar = Object.assign({},this.usuarioSeleccionado);
  }

  crear(){
    this.usuarios.push(this.usuarioModificar);
  }

  eliminar(){
   this.usuarios.splice(this.usuarios.indexOf(this.usuarioSeleccionado),1)
  }
  
  modificar(){
    if(this.sePuedeModificar)
    this.usuarios[this.posicion]=this.usuarioModificar;
  }
    

 
}
