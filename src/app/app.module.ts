import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 // Asegura que este módulo importa RouterModule.forRoot(...)
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Declaración del componente global (Navbar)
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent // Asegúrate de declararlo aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Este módulo debe haber importado RouterModule.forRoot(routes)
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
