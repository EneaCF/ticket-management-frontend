import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService, Ticket } from '../../services/ticket.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit {
  ticket: Ticket | null = null;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const ticketId = this.route.snapshot.paramMap.get('id');
    if (ticketId) {
      this.ticketService.getTicketById(ticketId).subscribe(data => {
        this.ticket = data;
      });
    }
  }

  editTicket(): void {
    if (this.ticket && this.ticket.id) {
      this.router.navigate(['/tickets/edit', this.ticket.id]);
    }
  }
}
