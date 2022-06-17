import { Component} from '@angular/core';

@Component({
  selector: 'app-tres-en-raya',
  templateUrl: './tres-en-raya.component.html',
  styleUrls: ['./tres-en-raya.component.scss']
})
export class TresEnRayaComponent  {
  turno:boolean = true;
  listaGanadores:Array<Array<number>> = [[1, 2, 3],[4, 5, 6],[7, 8, 9],[1, 4, 7],[2, 5, 8],[3, 6, 9],[1, 5, 9],[3, 5, 7]];
  tablero:Array<Array<string>> = [["","",""],["","",""],["","",""]];
  primerJugador:Array<number> = [];
  segundoJugador:Array<number> = [];
  ganador:string = "";
  finJuego:boolean = false;


  pulsarCuadrado(numero:number, fila:number){
    if( this.tablero[fila][numero] == "" && !this.finJuego) {
      this.tablero[fila][numero] = (this.turno) ? "X" : "O";
      if(this.turno){
        this.primerJugador.push(numero+1);
      }else{
        this.segundoJugador.push(numero+1);
      }  
      if(this.revisarLista(this.turno ? this.primerJugador : this.segundoJugador)){
        this.ganador = (this.turno) ?  "Primer Jugador" : "Segundo Jugador";
        this.finJuego = true;
      }
      this.turno = !this.turno;
    }
    if(this.primerJugador.length == 5 && this.ganador == ''){
      this.ganador =  "Empate";
    }
  }

  revisarLista(jugador:Array<number>):boolean{


    for (let i = 0; i < this.listaGanadores.length; i++) {
      let ganador  = false;
      for (let j = 0; j < this.listaGanadores[i].length; j++) {
        if(jugador.indexOf(this.listaGanadores[i][j]) == -1){
          ganador = false;
          break;
        }
        ganador = true;
      }
      if(ganador){
        return true;
      }
    }

    return false;

  }

  hasGanado(valor:boolean,fila:number,columna:number){
    let simbolo = (valor) ? "X":"O";
    let valores = [0,0,0,0,0,0,0,0]

    if(simbolo == this.tablero[fila-1][columna-1]){
      valores[0]=1
      if(simbolo == this.tablero[fila-2][columna-2]){
        return true;
      }
    }
    
    if(simbolo == this.tablero[fila+1][columna+1]){
      valores[1]=1
      if(simbolo == this.tablero[fila+2][columna+2]){
        return true;
      }
    }

    if(valores[0] == 1 && valores[1] == 1) return true;

    if(simbolo == this.tablero[fila][columna-1]){
      valores[2]=1
      if(simbolo == this.tablero[fila][columna-2]){
        return true;
      }
    }

    if(simbolo == this.tablero[fila][columna+1]){
      valores[3]=1
      if(simbolo == this.tablero[fila][columna+2]){
        return true;
      }
    }

    if(valores[2] == 1 && valores[3] == 1) return true;

    if(simbolo == this.tablero[fila-1][columna+1]){
      valores[4]=1
      if(simbolo == this.tablero[fila-2][columna+2]){
        return true;
      }
    }

    if(simbolo == this.tablero[fila+1][columna-1]){
      valores[5]=1
      if(simbolo == this.tablero[fila+2][columna-2]){
        return true;
      }
    }

    if(valores[4] == 1 && valores[5] == 1) return true;

    if(simbolo == this.tablero[fila-1][columna]){
      valores[6]=1
      if(simbolo == this.tablero[fila-2][columna]){
        return true;
      }
    }

    if(simbolo == this.tablero[fila+1][columna]){
      valores[7]=1
      if(simbolo == this.tablero[fila+2][columna]){
        return true;
      }
    }

    if(valores[4] == 1 && valores[5] == 1) return true;


    return false;
    
  }

  reiniciar(){
    this.ganador = "";
    this.tablero = [["","",""],["","",""],["","",""]];
    this.primerJugador = [];
    this.segundoJugador= [];
    this.turno= true;
    this.finJuego = false;
  }

  color(numero:number, fila:number):string{
    return this.tablero[fila][numero - 1] == "O" ? "white" : "black";
  }

}
