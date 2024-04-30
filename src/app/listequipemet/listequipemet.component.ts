import { Component } from '@angular/core';
import { Equipement } from '../equipement';
import { EquipementService } from '../messervices/equipement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listequipemet',
  templateUrl: './listequipemet.component.html',
  styleUrls: ['./listequipemet.component.css']
})
export class ListequipemetComponent {
  equip: Equipement=new Equipement();
  mybolean: boolean=false;
  equipement?: Equipement[];
  newequipe: Equipement=new  Equipement();
  constructor(private mesusers: EquipementService, private router: Router){}
  ngOnInit(): void{
   
    this.mesusers.getAllequipement().subscribe(data=>{
      this.equipement = data;
    }, err=>{
        console.log(err);

    });
  }
  deletequipementbyid(id?:number) {

      this.mesusers.deletequipementbyid(id).subscribe(
        () => {
          console.log('Equipement deleted successfully');
          this.ngOnInit();
        },
        (error) => {
          console.error('Error deleting Equipement:', error);
        }
      );
    }

  
  updateUser(id?:number){
  }

  addequipe() {
    console.log(this.newequipe);
    this.mesusers.ajouterequipement(this.newequipe).subscribe(

      () => {
        console.log('Equipement added successfully');
        alert("Equipement added successfully");

        this.mybolean = !this.mybolean;
        this.ngOnInit();
      },
      (error) => {
        console.error('Error adding Equipement:', error);
        alert("Error adding Equipement");
      }
    );
  }

  evaluatebolean(){
    this.mybolean=!this.mybolean;
  }
}
