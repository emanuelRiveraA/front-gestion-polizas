import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesPageComponent } from './pages/clientes-page/clientes-page.component';
import { RegistrarClientePageComponent } from './pages/registrar-cliente-page/registrar-cliente-page.component';
import { EditarClientePageComponent } from './pages/editar-cliente-page/editar-cliente-page.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteTableComponent } from './components/cliente-table/cliente-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ClientesPageComponent,
    RegistrarClientePageComponent,
    EditarClientePageComponent,
    ClienteTableComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ReactiveFormsModule,
    SharedModule
    
  ],
  exports: [
    ClienteTableComponent
  ]
})
export class ClientesModule { }
