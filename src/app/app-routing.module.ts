import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { RoutingComponent } from './home/routing/routing.component';
import { DefinitionsComponent } from './definitions/definitions.component';
import {MatButtonModule} from '@angular/material/button'

const routes : Routes = [
  {path: '', component:HomeComponent},
  {path: 'routing', component:RoutingComponent},
  {path: 'definitions', component:DefinitionsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes),MatButtonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
