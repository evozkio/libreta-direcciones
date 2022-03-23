import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contenido-datos',
  templateUrl: './contenido-datos.component.html',
  styleUrls: ['./contenido-datos.component.scss']
})
export class ContenidoDatosComponent {
 

  @Input ()usuarioSeleccionadoPadre:any;
  @Output () datosModificar : EventEmitter<any> = new EventEmitter;
  usuario = {
    "nombre" : "",
    "apellidos" : "",
    "email": "",
    "telefono": "",
    "direccion": "",
    "codigo_postal": "",
    "poblacion": "",
    "provincia": "",
    "profesion": "",
    "notas": ""
  };



  inputNombre(nombre:any):void{
    this.usuario.nombre = nombre.value;
    this.datosModificar.emit(this.usuario);
  }
  inputApellidos(apellidos:string){
    this.usuario.apellidos = apellidos;
    this.datosModificar.emit(this.usuario);
  }
  inputEmail(email:string){
    this.usuario.email = email;
    this.datosModificar.emit(this.usuario);
  }
  inputTelefono(telefono:string){
    this.usuario.telefono = telefono;
    this.datosModificar.emit(this.usuario);
  }
  inputDireccion(direccion:string){
    this.usuario.direccion = direccion;
    this.datosModificar.emit(this.usuario);
  }
  inputCodigoPostal(codigo_postal:string){
    this.usuario.codigo_postal = codigo_postal;
    this.datosModificar.emit(this.usuario);
  }
  inputPoblacion(poblacion:string){
    this.usuario.poblacion = poblacion;
    this.datosModificar.emit(this.usuario);
  }
  inputProvincia(provincia:string){
    this.usuario.provincia = provincia;
    this.datosModificar.emit(this.usuario);
  }
  inputProfesion(profesion:string){
    this.usuario.profesion = profesion;
    this.datosModificar.emit(this.usuario);
  }
  inputNotas(notas:string){
    this.usuario.notas = notas;
    this.datosModificar.emit(this.usuario);
  }
}
