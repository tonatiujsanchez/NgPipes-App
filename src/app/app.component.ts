import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'toNatIuj sAnCheZ';
  ocupacion: string = 'Frontend developer';
  valor:number = 10000000;

  mostrarNombre(){
    console.log( this.nombre );
    console.log( this.valor );
  }


}
