import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../reservation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  id  ?: number;
  baseURL13 = "http://localhost:8080/reservation";
  baseURL14 = "http://localhost:8080/reservation/id";
  constructor(private httpClient: HttpClient) { }

  getAllreservation(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(`${this.baseURL13}`);
  }
  getId(getId?: number) {
    this.id = getId;

  }
  ajouterreservation(Reservation: Reservation): Observable<Reservation> {
    return this.httpClient.post<Reservation>(`${this.baseURL13}`, Reservation);


  }

  deletreservationbyid(id?: number): Observable<object> {
    if (confirm('Voulez vous vraiement supprimer cet Reservation?')) {
      return this.httpClient.delete<object>(`${this.baseURL14}/${id}`);
      console.log('Thing was saved to the database.');
    } else {
      // Do nothing!
      return this.httpClient.get('baseURL13');
      console.log('Thing was not saved to the database.');
    }
  }
  getreservationbyid(id?: number){
    const url='http://localhost:8080/reservation/'
    return this.httpClient.get( url+id);
  }
  updatereservation(id:number , reservation : Reservation): Observable<Reservation>{
    const url='http://localhost:8080/reservation/majres/'
    console.log("service updatedirection contacté  ");
  
    return this.httpClient.put<Reservation>(url+id, reservation);
  
  }
}
