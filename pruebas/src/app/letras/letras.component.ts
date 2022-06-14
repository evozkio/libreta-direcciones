import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letras',
  templateUrl: './letras.component.html',
  styleUrls: ['./letras.component.scss']
})
export class LetrasComponent implements OnInit {

  palabra:string= "Hola Mundo";
  array_palabra: string[] = [];
  activo:boolean = true;

  ngOnInit(): void {
    this.array_palabra = this.palabra.split('');
    console.log(this.array_palabra)
  }

}
