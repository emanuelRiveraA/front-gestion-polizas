import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../interfaces/Cliente.interface';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-clientes-page',
  templateUrl: './clientes-page.component.html'
})
export class ClientesPageComponent implements OnInit{

  public clientes: Cliente[] = [];

  constructor(private clienteService: ClientesService){}

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(): void{
    this.clienteService.listarClientes()
      .subscribe( clientes => {
        this.clientes = clientes;
      });
  }

}
