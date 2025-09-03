import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: 'clientes',
        loadChildren: () => import('./clientes/clientes.module').then( modulo => modulo.ClientesModule)
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot( routes ),
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }
