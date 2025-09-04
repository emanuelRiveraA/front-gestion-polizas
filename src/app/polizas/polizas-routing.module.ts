import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolizasPageComponent } from './pages/polizas-page/polizas-page.component';
import { AsociarPolizaPageComponent } from './pages/asociar-poliza-page/asociar-poliza-page.component';

const routes: Routes = [
    {
        path: 'polizas',
        component: PolizasPageComponent
    },
    {
        path: 'by/:id',
        component: AsociarPolizaPageComponent
    },
    {
        path: '**',
        redirectTo: "polizas"
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ],
})
export class PolizasRoutingModule { }
