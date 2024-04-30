import { Component } from '@angular/core';
import { Reservation } from '../reservation';
import { ReservationService } from '../messervices/reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listereservation',
  templateUrl: './listereservation.component.html',
  styleUrls: ['./listereservation.component.css']
})
export class ListereservationComponent {
  monreserv: Reservation=new Reservation();
  mybolean: boolean=false;
  mesreservation?: Reservation[];
  newres: Reservation=new  Reservation();

  constructor(private mesusers: ReservationService, private router: Router){}
  ngOnInit(): void{
   
    this.mesusers.getAllreservation().subscribe(data=>{
      this.mesreservation = data;
    }, err=>{
        console.log(err);

    });
  }
  deletreservationbyid(id?:number) {

      this.mesusers.deletreservationbyid(id).subscribe(
        () => {
          console.log('Reservation deleted successfully');
          this.ngOnInit();
        },
        (error) => {
          console.error('Error deleting Reservation:', error);
        }
      );
    }

  
  updateRes(id?:number){
  }

  addRes() {
    console.log(this.newres);
    this.mesusers.ajouterreservation(this.newres).subscribe(
      () => {
        console.log('Réservation added successfully');
        alert("Réservation added successfully");
        this.mybolean = !this.mybolean;
      
        this.ngOnInit();
      },
      (error) => {
        console.error('Error adding Réservation:', error);
        alert("Error adding Réservation");
      }
    );
  }

  evaluatebolean(){
    this.mybolean=!this.mybolean;
  }
}
