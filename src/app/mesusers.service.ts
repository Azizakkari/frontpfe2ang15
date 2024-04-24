import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Leservice } from './Leservice';
import { Direction } from './direction';


@Injectable({
  providedIn: 'root'
})
export class MesusersService {
  id?: number;
  baseURL = "http://localhost:8080/users";
  baseURL2 = "http://localhost:8080/users/id";
  baseURL3 = "http://localhost:8080/services";
  baseURL4 = "http://localhost:8080/directions";
  baseURL5 = "http://localhost:8080/directions/id";
  baseURL6 = "http://localhost:8080/services/id";
  baseURL7 = "http://localhost:8080/salles";
  baseURL8 = "http://localhost:8080/salles/id";
  baseURL9 = "http://localhost:8080/categorie";
  baseURL10 = "http://localhost:8080/categorie/id";
  baseURL11 = "http://localhost:8080/equipement";
  baseURL12 = "http://localhost:8080/equipement/id";
  baseURL13 = "http://localhost:8080/reservation";
  baseURL14 = "http://localhost:8080/reservation/id";
  
  

  constructor(private httpClient: HttpClient) { }
  getAllServices(): Observable<Leservice[]> {
    return this.httpClient.get<Leservice[]>(`${this.baseURL3}`);

  }
  ajouterservice(Leservice: Leservice): Observable<Leservice> {
    return this.httpClient.post<Leservice>(`${this.baseURL3}`, Leservice);
  }
  deletservicebyid(id?: number): Observable<object> {
    if (confirm('Voulez vous vraiement supprimer cet Service?')) {

    return this.httpClient.delete<object>(`${this.baseURL6}/${id}`);
    console.log('Thing was saved to the database.');
  } else {
    // Do nothing!
    return this.httpClient.get('baseURL3');
        console.log('Thing was not saved to the database.');
        } 
  }
  getAlldirection(): Observable<Direction[]> {
    return this.httpClient.get<Direction[]>(`${this.baseURL4}`);
  }

  ajouterdirec(direction: Direction): Observable<Direction> {
    return this.httpClient.post<Direction>(`${this.baseURL4}`, direction);
  }

  deletdirecbyid(id?: number): Observable<object> {
    if (confirm('Voulez vous vraiement supprimer cet Direction?')) {
    return this.httpClient.delete<object>(`${this.baseURL5}/${id}`);
    console.log('Thing was saved to the database.');
  } else {
    // Do nothing!
    return this.httpClient.get('baseURL4');
        console.log('Thing was not saved to the database.');
        } 
  }
  
}
