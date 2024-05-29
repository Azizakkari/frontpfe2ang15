import { Component, OnInit } from '@angular/core';
import { Demande } from '../demande';
import { EquipementService } from '../messervices/equipement.service';
import { Equipement } from '../equipement';
import { Router } from '@angular/router';
import { UtilisateursService } from '../messervices/utilisateurs.service';
import { DemandeService } from '../messervices/demande.service';
import { Utilisateur } from '../Utilisateur';

@Component({
  selector: 'app-demande-equipement',
  templateUrl: './demande-equipement.component.html',
  styleUrls: ['./demande-equipement.component.css']
})


export class DemandeEquipementComponent  implements OnInit{

  newdemande: Demande = new Demande();
  lesutilisateurs: Utilisateur[] = [];
  equipement?: Equipement[];
  
  demande: Demande = {
    id: 0,
    date_demande: undefined,
    objet_demande: '',
    configuration: '',
    etat_demande: '',
    utilisateur: {
      id: 0,
      nom: '',
      prenom: '',
    },

  };
  constructor(private mesusers: EquipementService , private utilisateurservice: UtilisateursService ,private demandeservice: DemandeService, private router: Router  ){}
  ngOnInit(): void{
    this.utilisateurservice.getallUsers().subscribe(data => {
      this.lesutilisateurs = data;
      console.log(this.lesutilisateurs);
    }, err => {
      console.log(err);
    });
  }
  
  addequip() {
    console.log(this.newdemande);
    this.demandeservice.ajouterdemande(this.newdemande).subscribe(

      () => {
        console.log('Demande added successfully');
        alert("Demande added successfully");

     
        this.ngOnInit();
      },
      (error) => {
        console.error('Error adding Demande:', error);
        alert("Error adding Demande");
      }
    );
  }
}
