import { Component } from '@angular/core';


import { MesusersService } from './mesusers.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private mesusersserv: MesusersService){

  }
  title = 'intranetcnstn';

 
  
  
 

 
}
