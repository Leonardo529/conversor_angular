import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {

  real: number = 0;
  real_dolar: number = 0;
  real_euro: number = 0;
  real_libra: number = 0;
  resultado: any;

  convertermoeda() {
    this.resultado = {
      dolar: (this.real / this.real_dolar).toFixed(2),
      euro: (this.real / this.real_euro).toFixed(2),
      libra: (this.real / this.real_libra).toFixed(2)
    }
  }

  }
