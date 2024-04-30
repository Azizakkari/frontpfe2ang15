import { Component } from '@angular/core';
import { Salle } from '../salle';
import { SalleService } from '../messervices/salle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listesalle',
  templateUrl: './listesalle.component.html',
  styleUrls: ['./listesalle.component.css']
})
export class ListesalleComponent {
  monsal: Salle=new Salle();
  mybolean: boolean=false;
  messalle?: Salle[];
  newsalle: Salle=new  Salle();
  constructor(private messalles: SalleService, private router: Router){}
  ngOnInit(): void{
   
    this.messalles.getAllsalle().subscribe(data=>{
      this.messalle = data;
    }, err=>{
        console.log(err);

    });
  }


  deletsallebyid(id?:number) {

    this.messalles.deletsallebyid(id).subscribe(
      () => {
        console.log('Salle deleted successfully');
       

        this.ngOnInit();
      },
      (error) => {
        console.error('Error deleting Salle:', error);
        alert("Error adding Salle:");
      }
    );
  }


  updatesalle(id?:number){
  }

  adduser() {
    console.log(this.newsalle);
    this.messalles.ajoutersalle(this.newsalle).subscribe(
      () => {
        console.log('Salle added successfully');
        alert("Salle added successfully");
        this.mybolean = !this.mybolean;
        this.ngOnInit();
      },
      (error) => {
        console.error('Error adding Salle:', error);
      }
    );
  }

  evaluatebolean(){
    this.mybolean=!this.mybolean;
  }

}
