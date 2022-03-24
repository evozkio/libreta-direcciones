import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contenido-datos',
  templateUrl: './contenido-datos.component.html',
  styleUrls: ['./contenido-datos.component.scss']
})
export class ContenidoDatosComponent {
 

  @Input ()usuarioSeleccionadoPadre:any;
  @Input ()UsuarioModificarInput:any;

  @Output () UsuarioModificarOutput: EventEmitter<any> = new EventEmitter;


  inputNombre(nombre:any):void{
    this.UsuarioModificarInput.nombre = nombre.value;
    this.UsuarioModificarOutput.emit(this.UsuarioModificarInput);
  }
  inputApellidos(apellidos:any):void{
    this.UsuarioModificarInput.apellidos = apellidos.value;
    this.UsuarioModificarOutput.emit(this.UsuarioModificarInput);
  }
  inputEmail(email:any):void{
    this.UsuarioModificarInput.email = email.value;
    this.UsuarioModificarOutput.emit(this.UsuarioModificarInput);
  }
  inputTelefono(telefono:any):void{
    this.UsuarioModificarInput.telefono = telefono.value;
    this.UsuarioModificarOutput.emit(this.UsuarioModificarInput);
  }
  inputDireccion(direccion:any):void{
    this.UsuarioModificarInput.direccion = direccion.value;
    this.UsuarioModificarOutput.emit(this.UsuarioModificarInput);
  }
  inputCodigoPostal(codigo_postal:any):void{
    this.UsuarioModificarInput.codigo_postal = codigo_postal.value;
    this.UsuarioModificarOutput.emit(this.UsuarioModificarInput);
  }
  inputPoblacion(poblacion:any):void{
    this.UsuarioModificarInput.poblacion = poblacion.value;
    this.UsuarioModificarOutput.emit(this.UsuarioModificarInput);
  }
  inputProvincia(provincia:any):void{
    this.UsuarioModificarInput.provincia = provincia.value;
    this.UsuarioModificarOutput.emit(this.UsuarioModificarInput);
  }
  inputProfesion(profesion:any):void{
    this.UsuarioModificarInput.profesion = profesion.value;
    this.UsuarioModificarOutput.emit(this.UsuarioModificarInput);
  }
  inputNotas(notas:any):void{
    this.UsuarioModificarInput.notas = notas.value;
    this.UsuarioModificarOutput.emit(this.UsuarioModificarInput);
  }
}
