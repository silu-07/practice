import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes, withComponentInputBinding } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { RoutingComponent } from './home/routing/routing.component';
import { DefinitionsComponent } from './definitions/definitions.component';
import {MatButtonModule} from '@angular/material/button'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes : Routes = [
  {path: '', component:HomeComponent, title:'Home Page'},
  {path: 'routing', component:RoutingComponent, title: 'Ruting Page'},
  {path: 'definitions', component:DefinitionsComponent},
  {path: '**', component: PagenotfoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes),MatButtonModule],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding())
  ] 
})
export class AppRoutingModule {
  
 }
