import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolizasPageComponent } from './pages/polizas-page/polizas-page.component';
import { RegistrarPolizaPageComponent } from './pages/registrar-poliza-page/registrar-poliza-page.component';
import { PolizasRoutingModule } from './polizas-routing.module';
import { PolizaTableComponent } from './components/poliza-table/poliza-table.component';
import { SharedModule } from '../shared/shared.module';
import { AsociarPolizaPageComponent } from './pages/asociar-poliza-page/asociar-poliza-page.component';
import { ClientesModule } from '../clientes/clientes.module';
import { ɵInternalFormsSharedModule } from "@angular/forms";



@NgModule({
  declarations: [
    PolizasPageComponent,
    RegistrarPolizaPageComponent,
    PolizaTableComponent,
    AsociarPolizaPageComponent
  ],
  imports: [
    CommonModule,
    PolizasRoutingModule,
    SharedModule,
    ClientesModule,
    ɵInternalFormsSharedModule
]
})
export class PolizasModule { }
