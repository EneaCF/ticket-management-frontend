import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';

// Importar módulos de Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent  // Declarado aquí, no en imports
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([]), // Configura las rutas aquí o en un AppRoutingModule
    MatToolbarModule,        // Para <mat-toolbar>
    MatButtonModule          // Para <button mat-button>
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
