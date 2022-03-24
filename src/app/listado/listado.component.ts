import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent{
  @Output() usuarioSelecionadoRespuesta : EventEmitter<any> = new EventEmitter;
  @Input () usuarios:any;
  valorBuscador='';

  buscar(){
    if(!this.valorBuscador){
      this.valorBuscador='';
    }
    for (var val of this.usuarios) {   
      if (val.nombre.toLowerCase().indexOf(this.valorBuscador.toLowerCase())>=0){

      }
    }
  }

  muestraUsuario(index:number){
    this.usuarioSelecionadoRespuesta.emit(index);
  }
}
