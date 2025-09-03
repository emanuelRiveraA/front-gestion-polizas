import { Component, Input } from '@angular/core';
import { Poliza } from '../../interfaces/Poliza.interface';

@Component({
  selector: 'app-poliza-table',
  templateUrl: './poliza-table.component.html'
})
export class PolizaTableComponent {

    // recibimos el arreglo
    @Input()
    public polizas: Poliza[] = [];
}
