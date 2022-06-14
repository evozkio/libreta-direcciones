import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-letras-fondo',
  templateUrl: './letras-fondo.component.html',
  styleUrls: ['./letras-fondo.component.scss']
})
export class LetrasFondoComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() fondo:string = "'https://i.gifer.com/origin/d9/d9dd657cfef3fb5188596ace989a7dd7_w200.webp'";


  getURL():string{
    return "url( "+this.fondo+" )"
  }
}
