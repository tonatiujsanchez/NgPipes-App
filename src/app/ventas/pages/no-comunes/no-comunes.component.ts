import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelectPipe
  empleados = [
    {
      nombre: 'Nataly',
      genero: 'femenino'
    },
    {
      nombre: 'Brandon',
      genero: 'masculino'
    },
    {
      nombre: 'Tonatiuj',
      genero: 'masculino'
    }
  ];

  saludoOptions = {
    'masculino': 'saludarlo',
    'femenino': 'saludarla'
  }

  // i18nPluralPipe

  clientes: string[] = ['Maria','Nath', 'Juan', 'Fernanda', 'Paco'];

  clinetesOption = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando'
  }
  borrarCliente(){
    this.clientes.pop();
  }

  // KeyValuePipe
  persona = {
    nombre: 'Brandon',
    edad: 27,
    direccion: 'Tlapa de Comonfort, Gro.'
  }

  updateName(){
    this.persona.nombre = 'Santiago';
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Wonder Woman',
      vuela: true
    },
    {
      nombre: 'Flash',
      vuela: false
    }
  ];

  // AsyncPipe
  miObservable = interval(5000);

  valorPromesa = new Promise( ( resolve, reject ) =>{
    setTimeout( ()=>{
      resolve('Se recibió el valor de la promesa.');
    },2000);
  });

}
