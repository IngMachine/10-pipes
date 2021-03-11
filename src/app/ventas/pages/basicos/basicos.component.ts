import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'fredy';
  nombreUpper: string = 'FREDY';
  nombreCompleto: string = 'FreDY jesÚs';

  fecha: Date = new Date(); // el día de hoy

}
