import { Component } from '@angular/core';
import { MesusersService } from '../mesusers.service';
import { Router } from '@angular/router';
import { Direction } from '../direction';

@Component({
  selector: 'app-listdirection',
  templateUrl: './listdirection.component.html',
  styleUrls: ['./listdirection.component.css']
})
export class ListdirectionComponent {
  mondirec: Direction=new Direction();
  mybolean: boolean=false;
  mesdirections?: Direction[];
  newdirec: Direction=new  Direction();
  constructor( private mesusers: MesusersService, private router: Router){

  }
  ngOnInit(): void{
   
    this.mesusers.getAlldirection().subscribe(data=>{
      this.mesdirections = data;
      console.log(this.mesdirections);
    }, err=>{
        console.log(err);

    });
  }
  
  deletdirecbyid(id?:number) {

    this.mesusers.deletdirecbyid(id).subscribe(
      () => {
        console.log('Direction deleted successfully');
        this.ngOnInit();
      },
      (error) => {
        console.error('Error deleting Direction:', error);
        alert("Error adding Direction");
      }
    );
  }


updatedirec(id?:number){
}

adddirec() {
  console.log(this.newdirec);
  this.mesusers.ajouterdirec(this.newdirec).subscribe(
    () => {
      console.log('Direction added successfully');
      alert("Direction added successfully");
      this.mybolean = !this.mybolean;
      this.ngOnInit();
    },
    (error) => {
      console.error('Error adding Direction:', error);
    }
  );
}

evaluatebolean(){
  this.mybolean=!this.mybolean;
}


}
