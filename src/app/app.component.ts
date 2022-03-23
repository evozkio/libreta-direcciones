import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.usuarioSeleccionado = this.usuarios[0];
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
  ];

  title = 'libreta-direcciones';
  
  usuarioSeleccionado :any ;
  datosUsuarioCambiar:any;
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
    this.datosUsuarioCambiar = usuario;
  }
  
  seleccionaUsuario(usuario:any){
    this.usuarioSeleccionado = usuario;
    this.posicion = this.usuarios.indexOf(this.usuarioSeleccionado);
    console.log(this.posicion);
  }

  crear(){
    let nuevo_usuario = {
     "nombre" : "Cesar",
     "apellidos" : "Gómez",
     "email": "cesargomez@gmail.com",
     "telefono": "222222222",
     "direccion": "pepino nº24",
     "codigo_postal": "23456",
     "poblacion": "Espartinas",
     "provincia": "Sevilla",
     "profesion": "fontanero",
     "notas": "amigo"
   }
   this.usuarios.push(nuevo_usuario);
 }

 eliminar(){
  this.usuarios.splice(this.usuarios.indexOf(this.usuarioSeleccionado),1)

 }

 modificar(){
   console.log(this.usuarioSeleccionado);
   console.log(this.datosUsuarioCambiar)
  //  this.usuarios[this.usuarios.indexOf(this.usuarioSeleccionado)]=this.datosUsuarioCambiar;
   let nuevo_usuario = {
    "nombre" : this.datosUsuarioCambiar.nombre,
    "apellidos" : this.datosUsuarioCambiar.apellidos,
    "email": this.datosUsuarioCambiar.email,
    "telefono": this.datosUsuarioCambiar.telefono,
    "direccion": this.datosUsuarioCambiar.direccion,
    "codigo_postal": this.datosUsuarioCambiar.codigo_postal,
    "poblacion": this.datosUsuarioCambiar.poblacion,
    "provincia": this.datosUsuarioCambiar.provincia,
    "profesion": this.datosUsuarioCambiar.profesion,
    "notas": this.datosUsuarioCambiar.notas
  }
  this.usuarios[this.posicion]=nuevo_usuario;
 }
  

 
}
