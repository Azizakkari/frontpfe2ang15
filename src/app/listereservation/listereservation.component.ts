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

  reservationupdate: Reservation = { id: 0, typemeeting: '', date_du_resrvation:undefined ,date_fin:undefined };

  mybolean2: boolean=false;

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
  reservationDetails(id?: number){
    this.mybolean2=true;
    this.mesusers.getreservationbyid(id).subscribe((data: any) => {
      console.log(data);
      this.reservationupdate=data;
      
    });
  
  }
  Update() {
    console.log(this.reservationupdate);
    if (this.reservationupdate?.id) { // check if id has a value
      this.mesusers.updatereservation(this.reservationupdate.id, this.reservationupdate).subscribe(() => {
        this.mybolean2 = !this.mybolean2;
        alert("Votre mise a jour a été effectuée avec succées")
        this.ngOnInit();
      });
    }
  }
  evaluatebolean2(){
    
    this.mybolean2 = !this.mybolean2;
  }
}
