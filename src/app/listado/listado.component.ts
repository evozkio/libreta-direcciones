import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() usuarioSelecionadoRespuesta : EventEmitter<any> = new EventEmitter;
  @Input () usuarios:any;
  valorBuscador='';
  filtro_Usuarios:any;

  ngOnInit(): void {
    this.filtro_Usuarios= this.usuarios;
  }

  buscar(){
    let palabra: string = this.valorBuscador;
    this.filtro_Usuarios= [];

    if(palabra){
      for (var val of this.usuarios) {   
        if (val.nombre.toLowerCase().indexOf(palabra.toLowerCase())>=0){
          this.filtro_Usuarios.push(val)
        }
      }
    }
    else{
      this.filtro_Usuarios=this.usuarios;
    }
  }

  muestraUsuario(index:number){
    this.usuarioSelecionadoRespuesta.emit(this.filtro_Usuarios[index]);
  }
}
