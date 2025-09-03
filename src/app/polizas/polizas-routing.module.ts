import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolizasPageComponent } from './pages/polizas-page/polizas-page.component';

const routes: Routes = [
    {
        path: '',
        component: PolizasPageComponent
    },
    {
        path: 'by/:id',
        component: PolizasPageComponent
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
