import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
  
  
})

export class NavbarComponent {
  constructor(private router: Router) {}

  logout() {
    // Lógica de logout, por ejemplo, limpiar token y redirigir a login
    // Por ahora, simplemente redirige a la raíz
    this.router.navigate(['/']);
  }
}
