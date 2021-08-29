import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  
  nombreLower: string = 'Tonatiuj Sanchez';
  nombreUpper: string = 'Tonatiuj Sanchez';
  nombreTitle: string = 'tOnaTiuJ SAnCheZ';

  fecha: Date = new Date(); //Fecha actual
  constructor() { }

  ngOnInit(): void {
  }

}
