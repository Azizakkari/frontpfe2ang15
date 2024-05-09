import { Component } from '@angular/core';
import { AuthService } from '../messervices/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admintemplate',
  templateUrl: './admintemplate.component.html',
  styleUrls: ['./admintemplate.component.css']
})
export class AdmintemplateComponent {
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  

  handleLogout() {
    console.log("testtttttttttttttttttttttt");
    this.authService.logout();
        this.router.navigateByUrl("/login");
  
  

}
}