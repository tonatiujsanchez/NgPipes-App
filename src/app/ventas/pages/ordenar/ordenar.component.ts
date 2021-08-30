import { Component } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = false;

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Wonder Woman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Flash',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Aquaman',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Cyborg',
      vuela: true,
      color: Color.negro
    },
    {
      nombre: 'Green Arrow',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.rojo
    }
  ];

  colorOptions = {
    '0': 'Rojo',
    '1': 'Negro',
    '2': 'Azul',
    '3': 'Verde'
  }




  toggleMayusculas(){
    this.enMayusculas = !this.enMayusculas;
  }

}
