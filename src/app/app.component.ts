import { Component, OnInit } from '@angular/core';


import { MesusersService } from './mesusers.service';
import { AuthService } from './messervices/auth.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private authserv: AuthService){

  }
  title = 'intranetcnstn';

  ngOnInit(): void {
    this.authserv.loadUserfromLocalStorage();

  }
  
  
 

 
}
