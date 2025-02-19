import { Routes } from '@angular/router';
import { TicketsModule } from './modules/tickets/components/tickets/tickets.module';

export const routes: Routes = [
  // Ejemplo:
  { path: 'tickets', loadChildren: () => import('./modules/tickets/components/tickets/tickets.module').then(m => m.TicketsModule) },
  { path: '**', redirectTo: 'tickets' }
];

//Exporta routes para que puedan ser importadas en app.module.ts
export default routes;