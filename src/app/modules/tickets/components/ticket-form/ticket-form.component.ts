import { Component, OnInit } from '@angular/core';
import { TicketService, Ticket } from '../../services/ticket.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {
  ticketForm!: FormGroup;
  isEditMode = false;
  ticketId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ticketForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      prioridad: [0, Validators.required]
    });

    this.ticketId = this.route.snapshot.paramMap.get('id');
    if (this.ticketId) {
      this.isEditMode = true;
      this.ticketService.getTicketById(this.ticketId).subscribe(ticket => {
        this.ticketForm.patchValue({
          titulo: ticket.titulo,
          descripcion: ticket.descripcion,
          prioridad: ticket.prioridad
        });
      });
    }
  }

  onSubmit(): void {
    if (this.ticketForm.invalid) return;
    const ticketData = this.ticketForm.value as Ticket;
    if (this.isEditMode && this.ticketId) {
      ticketData.id = this.ticketId;
      this.ticketService.updateTicket(ticketData).subscribe(() => {
        this.router.navigate(['/tickets']);
      });
    } else {
      this.ticketService.createTicket(ticketData).subscribe(() => {
        this.router.navigate(['/tickets']);
      });
    }
  }
}
