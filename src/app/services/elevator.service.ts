import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Elevator } from '../models/elevator';

@Injectable({
  providedIn: 'root'
})
export class ElevatorService {
  private apiUrl = 'http://localhost:8080/api/elevators';

  constructor(private http: HttpClient) { }

  getElevators(): Observable<Elevator[]> {
    return this.http.get<Elevator[]>(`${this.apiUrl}`);
  }

  requestElevator(floor: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/request`, { floor });
  }


  selectFloor(elevatorId: number, floor: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${elevatorId}/select`, floor);
  }
}
