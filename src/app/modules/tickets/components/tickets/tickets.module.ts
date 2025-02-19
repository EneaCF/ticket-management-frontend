import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsRoutingModule } from '../../tickets-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

// Componentes del módulo Tickets


// Angular Material Modules
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TicketDetailComponent } from '../ticket-detail/ticket-detail.component';
import { TicketFormComponent } from '../ticket-form/ticket-form.component';
import { TicketListComponent } from '../ticket-list/ticket-list.component';

@NgModule({
  declarations: [
    TicketListComponent,
    TicketDetailComponent,
    TicketFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TicketsRoutingModule,
    MatTableModule,        // para <table mat-table> y [dataSource]
    MatButtonModule,
    MatFormFieldModule,    // para <mat-form-field>
    MatInputModule,        // para <mat-input> en formularios
    MatSelectModule        // para <mat-select> y <mat-option>
  ]
})
export class TicketsModule { }
