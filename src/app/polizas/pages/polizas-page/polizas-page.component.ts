import { Component } from '@angular/core';
import { Poliza } from '../../interfaces/Poliza.interface';
import { PolizasService } from '../../services/polizas.service';

@Component({
  selector: 'app-polizas-page',
  templateUrl: './polizas-page.component.html'
})
export class PolizasPageComponent {

  public polizas: Poliza[] = [];

  constructor(private polizaService: PolizasService) { }

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(): void {
    this.polizaService.listarClientes()
      .subscribe(polizas => {
        this.polizas = polizas;
      });
  }
}
