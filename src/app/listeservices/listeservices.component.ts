import { Component } from '@angular/core';
import { Leservice } from '../Leservice';
import { Direction } from '../direction';
import { MesusersService } from '../mesusers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listeservices',
  templateUrl: './listeservices.component.html',
  styleUrls: ['./listeservices.component.css']
})
export class ListservicesComponent {
  monservice: Leservice = {
    nom: '',
    description: '',
    direction: {
      id: 0,
      nom: '',
      description: '',
    },
  };
  mesdirections: Direction[]=[];
  mybolean: boolean=false;
  messerv: Leservice=new Leservice();
  messervices?: Leservice[];
  constructor(private mesusers: MesusersService, private router: Router){}
  ngOnInit(): void{
    this.mesusers.getAlldirection().subscribe(data=>{
      this.mesdirections = data;
      console.log(this.mesdirections);
    }, err=>{
        console.log(err);

    });
   
    this.mesusers.getAllServices().subscribe(data=>{
      this.messervices=data;
      
    }, err=>{
        console.log(err);

    });
    
  }
  


  updateservice(id?:number){
  }
  deletservicebyid(id?:number) {

    this.mesusers.deletservicebyid(id).subscribe(
   () => {
     console.log('Service deleted successfully');
     this.ngOnInit();
   },
   (error) => {
     console.error('Error deleting Service:', error);
   }
 );
}




  onSubmit() {
    console.log(this.monservice);
    this.mesusers.ajouterservice(this.monservice).subscribe(
      () => {
        console.log('Service added successfully');
        alert("Service added successfully");

        this.mybolean = !this.mybolean;
        this.ngOnInit();
      },
      (error) => {
        console.error('Error adding Service:', error);
        alert("Error adding Service:");
      }
    );
  }

  evaluateboleann(){
    this.mybolean=!this.mybolean;
  }

}
