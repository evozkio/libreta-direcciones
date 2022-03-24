import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contenido-datos',
  templateUrl: './contenido-datos.component.html',
  styleUrls: ['./contenido-datos.component.scss']
})
export class ContenidoDatosComponent {
 

  @Input ()usuarioModificarInput:any;


  inputNombre(nombre:any):void{
    this.usuarioModificarInput.nombre = nombre.value;
  }
  inputApellidos(apellidos:any):void{
    this.usuarioModificarInput.apellidos = apellidos.value;
  }
  inputEmail(email:any):void{
    this.usuarioModificarInput.email = email.value;
  }
  inputTelefono(telefono:any):void{
    this.usuarioModificarInput.telefono = telefono.value;
  }
  inputDireccion(direccion:any):void{
    this.usuarioModificarInput.direccion = direccion.value;
  }
  inputCodigoPostal(codigo_postal:any):void{
    this.usuarioModificarInput.codigo_postal = codigo_postal.value;
  }
  inputPoblacion(poblacion:any):void{
    this.usuarioModificarInput.poblacion = poblacion.value;
  }
  inputProvincia(provincia:any):void{
    this.usuarioModificarInput.provincia = provincia.value;
  }
  inputProfesion(profesion:any):void{
    this.usuarioModificarInput.profesion = profesion.value;
  }
  inputNotas(notas:any):void{
    this.usuarioModificarInput.notas = notas.value;
  }
}
