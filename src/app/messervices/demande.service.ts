import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Demande } from '../demande';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  id  ?: number;
  baseURL16 = "http://localhost:8080/demande";
  baseURL17 = "http://localhost:8080/demande/id";
  constructor(private httpClient: HttpClient) { }
  getAllDemande(): Observable<Demande[]> {
    return this.httpClient.get<Demande[]>(`${this.baseURL16}`);
  }

  
  getId(getId?: number) {
    this.id = getId;


  }
  ajouterdemande(Demande: Demande): Observable<Demande> {
    return this.httpClient.post<Demande>(`${this.baseURL16}`, Demande);
  }
  getequipbyId(id?: number){
    const url='http://localhost:8080/demande/'
    return this.httpClient.get( url+id);
  }
}
