import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  cambiarEstadoMayus: boolean = true;

  ordenarPor: string = '';
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
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Aquaman',
      vuela: false,
      color: Color.blanco
    },
    {
      nombre: 'Ironman',
      vuela: true,
      color: Color.verde
    }
  ]


  cambiarMayuscula(): void{
    this.cambiarEstadoMayus = !this.cambiarEstadoMayus;
  }

  cambiarOrden( valor: string ): void{
    console.log(valor);
    this.ordenarPor = valor;
  }
}
