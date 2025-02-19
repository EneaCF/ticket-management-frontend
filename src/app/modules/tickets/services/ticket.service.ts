import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../enviroments/enviroment';

export interface Ticket {
  id?: string;
  titulo: string;
  descripcion: string;
  prioridad: number;  // Ejemplo: 0 - Baja, 1 - Media, 2 - Alta, 3 - Crítica
  estado?: number;    // Ejemplo: 0 - Abierto, 1 - En progreso, etc.
  fechaCreacion?: Date;
  fechaActualizacion?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private baseUrl = `${environment.apiUrl}/Tickets`;

  constructor(private http: HttpClient) { }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.baseUrl);
  }

  getTicketById(id: string): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.baseUrl}/${id}`);
  }

  createTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.baseUrl, ticket);
  }

  updateTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.put<Ticket>(`${this.baseUrl}/${ticket.id}`, ticket);
  }

  deleteTicket(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

