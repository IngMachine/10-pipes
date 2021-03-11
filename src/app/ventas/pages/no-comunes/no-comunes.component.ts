import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  // i18nSelect
  nombre: string = 'Fredy';
  genero: string = 'masculino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla'
  };

  // i18nPlural
  clientes: string[] = ['maria', 'camilo', 'fredy'];
  clienteMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    other: 'tenemos # clientes esperando.'
  };

  cambiarPersona(): void{
    if ( this.nombre === 'Fredy' ){
      this.nombre = 'Maria';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Fredy';
      this.genero = 'masculino';
    }
  }
  borrarCliente(): void{
    if( this.clientes.length < 0 ){
      return ;
    }
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona: any = {
    nombre: 'Fredy',
    edad: 35,
    direccion: 'santa marta'
  };


  // Josn Pipe
  heroes: any[] = [
    {
      nombre: 'Superman',
      edad:30
    },
    {
      nombre: 'Superman',
      edad:30
    },
    {
      nombre: 'Superman',
      edad:30
    },
    {
      nombre: 'Superman',
      edad:30
    },
    {
      nombre: 'Superman',
      edad:30
    },
    {
      nombre: 'Superman',
      edad:30
    }
  ]

  // Async pipe
  miObservable = interval(2000);

  valorPromesa = new Promise( (resolve, react) => {
    setTimeout( () => {
      resolve('Tenemos data de promesa')
    }, 3500);
  });

}
