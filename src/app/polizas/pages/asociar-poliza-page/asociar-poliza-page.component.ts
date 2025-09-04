import { Component } from '@angular/core';
import { Poliza } from '../../interfaces/Poliza.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PolizasService } from '../../services/polizas.service';
import { switchMap } from 'rxjs';
import { Cliente } from 'src/app/clientes/interfaces/Cliente.interface';
import { ClientesService } from 'src/app/clientes/services/clientes.service';

@Component({
  selector: 'app-asociar-poliza-page',
  templateUrl: './asociar-poliza-page.component.html'
})
export class AsociarPolizaPageComponent {

  poliza?: Poliza;
  clientes?: Cliente[];

  constructor(
    private activatedRoute: ActivatedRoute,
      private router: Router,
      private polizasService: PolizasService,
      private clienteService: ClientesService
    ) { }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.polizasService.consultarPolizaById(id))
      )
      .subscribe(poliza => {

        if (!poliza) {
          return this.router.navigateByUrl('');
        }

        console.log(poliza);
        return this.poliza = poliza;
      });
  }

  buscarPorFiltro( input: string): void {
     this.clienteService.buscarPorFiltro(input)
      .subscribe( clientes => {
        this.clientes = clientes;
      });
  }

  asociarClienteAPoliza( clienteId: number) {
    this.clienteService.asociarClienteAPoliza(clienteId, this.poliza?.id)
      .subscribe({
          next: (cliente) => {
            if (cliente && cliente.id) {
              console.log("Registro exitoso:", cliente);
              // reedireccionar
            } else {
              console.error("Registro fallido: respuesta inválida");
            }
          },
          error: (err) => {
            console.error("Error al registrar cliente:", err);
          }
        });
  }



}
