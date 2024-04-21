import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './dialogs/navbar/navbar.component'; 
import { HomeComponent } from './home/home.component'; 
import { DefinitionsComponent } from "./definitions/definitions.component";
import { CloudsComponent } from './dialogs/clouds/clouds.component'; 
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent],
    imports: [  
        BrowserModule,
        AppRoutingModule,
        NavbarComponent,
        HomeComponent,
        DefinitionsComponent,
        CloudsComponent,
        FormsModule,
    ]
})
export class AppModule { }
