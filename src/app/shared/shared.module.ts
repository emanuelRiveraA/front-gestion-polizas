import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule
    ],
    exports: [
        HomePageComponent,
        AboutPageComponent,
        SidebarComponent
    ],
    declarations: [
      HomePageComponent,
      AboutPageComponent,
      SidebarComponent
    ],
})
export class SharedModule { }
