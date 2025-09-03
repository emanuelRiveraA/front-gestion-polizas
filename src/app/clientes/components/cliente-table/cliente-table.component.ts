import { Component, Input } from '@angular/core';
import { Cliente } from '../../interfaces/Cliente.interface';

@Component({
  selector: 'clientes-cliente-table',
  templateUrl: './cliente-table.component.html'
})
export class ClienteTableComponent {

  // recibimos el arreglo
  @Input()
  public clientes: Cliente[] = [];
}
