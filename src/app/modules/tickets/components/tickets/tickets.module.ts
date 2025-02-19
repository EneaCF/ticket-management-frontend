
import { CommonModule } from '@angular/common';
import { TicketListComponent } from '../ticket-list/ticket-list.component';
import { TicketDetailComponent } from '../ticket-detail/ticket-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material Modules
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { TicketsRoutingModule } from '../../tickets-routing.module';
import { TicketFormComponent } from '../ticket-form/ticket-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    TicketListComponent,
    TicketDetailComponent,
    TicketFormComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class TicketsModule { }
