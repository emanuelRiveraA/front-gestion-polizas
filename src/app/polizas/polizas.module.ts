import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolizasPageComponent } from './pages/polizas-page/polizas-page.component';
import { RegistrarPolizaPageComponent } from './pages/registrar-poliza-page/registrar-poliza-page.component';
import { EditarPolizaPageComponent } from './pages/editar-poliza-page/editar-poliza-page.component';
import { PolizasRoutingModule } from './polizas-routing.module';



@NgModule({
  declarations: [
    PolizasPageComponent,
    RegistrarPolizaPageComponent,
    EditarPolizaPageComponent
  ],
  imports: [
    CommonModule,
    PolizasRoutingModule
  ]
})
export class PolizasModule { }
