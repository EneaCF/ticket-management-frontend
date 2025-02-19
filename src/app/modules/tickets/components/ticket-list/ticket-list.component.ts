
import { Router } from '@angular/router';
import { Ticket, TicketService } from '../../services/ticket.service';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];
  displayedColumns: string[] = ['titulo', 'prioridad', 'acciones'];

  constructor(private ticketService: TicketService, private router: Router) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.ticketService.getTickets().subscribe(data => this.tickets = data);
  }

  viewTicket(ticket: Ticket): void {
    this.router.navigate(['/tickets', ticket.id]);
  }

  createTicket(): void {
    this.router.navigate(['/tickets/create']);
  }
}
