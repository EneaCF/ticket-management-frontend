import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // Lazy load del módulo de tickets
  { 
    path: 'tickets', 
    loadChildren: () => import('./modules/tickets/tickets-routing.module').then(m => m.TicketsRoutingModule)
  },
  { path: '', redirectTo: 'tickets', pathMatch: 'full' },
  { path: '**', redirectTo: 'tickets' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
