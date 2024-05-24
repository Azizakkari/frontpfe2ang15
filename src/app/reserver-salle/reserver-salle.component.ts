import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation';
import { ReservationService } from '../messervices/reservation.service';
import { Router } from '@angular/router';
import { Salle } from '../salle';
import { Utilisateur } from '../Utilisateur';
import { UtilisateursService } from '../messervices/utilisateurs.service';
import { SalleService } from '../messervices/salle.service';

@Component({
  selector: 'app-reserver-salle',
  templateUrl: './reserver-salle.component.html',
  styleUrls: ['./reserver-salle.component.css']
})
export class ReserverSalleComponent implements OnInit {

  newres: Reservation = new Reservation();
  messalles: Salle[] = [];
  lesutilisateurs: Utilisateur[] = [];
  
  reserv: Reservation = {
    id: 0,
    typemeeting: '',
    date_du_resrvation: undefined,
    date_fin: undefined,
    salle: {
      id: 0,
      nom: '',
      nombre_des_places: 0,
    },
    utilisateur: {
      id: 0,
      nom: '',
      prenom: '',
    },
  };
  errorMessage: string | null = null;

  constructor(private mesusers: ReservationService, private salleservice: SalleService, private utilisateurservice: UtilisateursService, private router: Router) { }

  ngOnInit(): void {
    this.salleservice.getAllsalle().subscribe(data => {
      this.messalles = data;
      console.log(this.messalles);
    }, err => {
      console.log(err);
    });

    this.utilisateurservice.getallUsers().subscribe(data => {
      this.lesutilisateurs = data;
      console.log(this.lesutilisateurs);
    }, err => {
      console.log(err);
    });
  }

  addRes() {
    console.log(this.reserv);
    this.mesusers.ajouterreservation(this.reserv).subscribe(
      (response) => {
        if (response.message) {
          this.errorMessage = response.message; // Set the error message from the response
          alert(this.errorMessage); // Display the error message
        } else {
          console.log('Réservation added successfully');
          alert('Réservation added successfully');
          this.errorMessage = null; // Clear any previous error message
          this.ngOnInit();
        }
      },
      (error) => {
        console.error('Error adding Réservation:', error);
        this.errorMessage = 'Une erreur s\'est produite. Veuillez réessayer plus tard.';
        alert(this.errorMessage); // Display a generic error message
      }
    );
  }

}
