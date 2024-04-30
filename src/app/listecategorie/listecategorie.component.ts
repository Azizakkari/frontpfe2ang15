import { Component } from '@angular/core';
import { Categorie } from '../categorie';
import { CategorieService } from '../messervices/categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listecategorie',
  templateUrl: './listecategorie.component.html',
  styleUrls: ['./listecategorie.component.css']
})
export class ListecategorieComponent {
  moncat: Categorie=new Categorie();
  mybolean: boolean=false;
  mescategorie?: Categorie[];
  newcategorie: Categorie=new  Categorie();

  constructor(private mesusers: CategorieService, private router: Router){}
  ngOnInit(): void{
   
    this.mesusers.getAllcategorie().subscribe(data=>{
      this.mescategorie = data;
    }, err=>{
        console.log(err);

    });
  }
  deletcategoriebyid(id?:number) {

      this.mesusers.deletcategoriebyid(id).subscribe(
        () => {
          console.log('Categorie deleted successfully');
          this.ngOnInit();
        },
        (error) => {
          console.error('Error deleting Categorie:', error);
        }
      );
    }

  
  updatecat(id?:number){
  }

  addcat() {
    console.log(this.newcategorie);
    this.mesusers.ajoutercategorie(this.newcategorie).subscribe(
      () => {
        console.log('Catégorie added successfully');
        alert("Catégorie added successfully");
        this.mybolean = !this.mybolean;
        this.ngOnInit();
      },
      (error) => {
        console.error('Error adding Catégorie:', error);
        alert("Error adding Catégorie");
      }
    );
  }

  evaluatebolean(){
    this.mybolean=!this.mybolean;
  }
}
