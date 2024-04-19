import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes, withComponentInputBinding } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { RoutingComponent } from './home/routing/routing.component';
import { DefinitionsComponent } from './definitions/definitions.component';
import { MatButtonModule } from '@angular/material/button'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
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
  {path: 'authentication/localstorage', component: AuthLocalStorageComponent},
  {path: 'authentication/api', component: AuthApiComponent},
  {path: 'authentication/api-token', component: AuthApiTokenComponent},
  { path: '**', component: PagenotfoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), MatButtonModule,

  ],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding())
  ]
})
export class AppRoutingModule {

}
