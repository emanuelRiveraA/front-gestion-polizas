import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesPageComponent } from './pages/clientes-page/clientes-page.component';
import { RegistrarClientePageComponent } from './pages/registrar-cliente-page/registrar-cliente-page.component';
import { EditarClientePageComponent } from './pages/editar-cliente-page/editar-cliente-page.component';

const routes: Routes = [
    {
        path: 'clientes',
        component: ClientesPageComponent
    },
    {
        path: 'registrar',
        component: RegistrarClientePageComponent
    },
    {
        path: 'by/:id',
        component: EditarClientePageComponent
    },
    {
        path: '**',
        redirectTo: "clientes"
    }
]

@NgModule({
    imports: [
        RouterModule.forChild( routes ),
    ],
    exports: [
        RouterModule
    ],
})
export class ClientesRoutingModule { }
