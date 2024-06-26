import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes, withComponentInputBinding } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoutingComponent } from './topics/routing/routing.component';
import { DefinitionsComponent } from './definitions/definitions.component'; 
import { PagenotfoundComponent } from './dialogs/pagenotfound/pagenotfound.component';
import { AuthLocalStorageComponent } from './topics/authentication/auth-local-storage/auth-local-storage.component';
import { AuthApiComponent } from './topics/authentication/auth-api/auth-api.component';
import { AuthApiTokenComponent } from './topics/authentication/auth-api-token/auth-api-token.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page' },
  { path: 'routing/:id', component: RoutingComponent, title: 'Routing Page' },
  {
    path: 'definitions', pathMatch: 'full', loadComponent: async () => {
      const m = await import('./definitions/definitions.component');
      return m.DefinitionsComponent;
    }
  },
  { path: 'authentication/localstorage', component: AuthLocalStorageComponent, title: 'Auth - Local Storage' },
  { path: 'authentication/api', component: AuthApiComponent, title: 'Auth - Real API' },
  { path: 'authentication/api-token', component: AuthApiTokenComponent, title: 'Auth - API + Token' },
  { path: '**', component: PagenotfoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding())
  ]
})
export class AppRoutingModule {

}
