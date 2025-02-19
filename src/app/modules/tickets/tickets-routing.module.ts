import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';

const routes: Routes = [
  { path: '', component: TicketListComponent },
  { path: 'create', component: TicketFormComponent },
  { path: 'edit/:id', component: TicketFormComponent },
  { path: ':id', component: TicketDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
