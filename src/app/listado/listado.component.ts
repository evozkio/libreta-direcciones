import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Input ()usuariosPadre:any;
  @Output() usuarioSelecionadoRespuesta : EventEmitter<any> = new EventEmitter;
  valorBuscador='';
  filtro_Productos:any;

  ngOnInit(): void {
    this.usuarioSelecionadoRespuesta.emit(this.usuariosPadre[0])
    this.filtro_Productos= this.usuariosPadre;
  }

  buscar(){
    let palabra: string = this.valorBuscador;
    this.filtro_Productos= [];

    if(palabra){
      for (var val of this.usuariosPadre) {   
        if (val.nombre.toLowerCase().indexOf(palabra.toLowerCase())>=0){
          this.filtro_Productos.push(val)
        }
      }
    }
    else{
      this.filtro_Productos=this.usuariosPadre;
    }
  }

  muestraUsuario(index:number){
    this.usuarioSelecionadoRespuesta.emit(this.usuariosPadre[index]);
  }

}
