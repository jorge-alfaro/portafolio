import { NgModule, Component } from '@angular/core';



import { Routes, RouterModule } from '@angular/router';
import { PortaforlioComponent } from './pages/portaforlio/portaforlio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

const app_routes: Routes = [
  { path: 'home', component: PortaforlioComponent},
  { path: 'about', component: AboutComponent},
  { path: 'item', component: ItemComponent},
  { path: '**',pathMatch: 'full', redirectTo: 'home' },

];







@NgModule({
  imports: [
    RouterModule.forRoot(app_routes, {useHash: true} )
  ],
  exports:[
    RouterModule
  ]
})
 export class AppRoutingModule {

 }
