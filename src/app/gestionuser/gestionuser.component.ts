import { Component } from '@angular/core';
import { Utilisateur } from '../Utilisateur';
import { UtilisateursService } from '../messervices/utilisateurs.service';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-gestionuser',
  templateUrl: './gestionuser.component.html',
  styleUrls: ['./gestionuser.component.css']
})
export class GestionuserComponent {
  selectedUser: Utilisateur  = new Utilisateur();

  utilisateurupdate: Utilisateur = { id: 0, nom: '', prenom: '', cin: 0, matricule: '', poste: '', email: '', adresse: '', telephone: 0 };

  newuser: Utilisateur=new  Utilisateur();

  utilisateur?: Utilisateur[];
  mybolean: boolean=false;
  mybolean2: boolean=false;
  constructor(private utilisateurserv: UtilisateursService, private router: Router, private route: ActivatedRoute){}
  ngOnInit(): void{
    this.utilisateurserv.getallUsers().subscribe(data=>{
      this.utilisateur=data;
      console.log(this.utilisateur);
    }, err=>{
        console.log(err);

    });
  }
  deletuserbyid(id?: number) {
    this.utilisateurserv.deletuserbyid(id).subscribe(
      () => {
        console.log('User deleted successfully');
        this.ngOnInit();
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }

  adduser() {
    console.log(this.newuser);
    this.utilisateurserv.ajoutuser(this.newuser).subscribe(
      () => {
        console.log('Utilisateur added successfully');
        alert(  this.newuser.nom + ' ' + this.newuser.prenom + " added successfully");
        this.mybolean = !this.mybolean;
        this.ngOnInit();
      },
      (error) => {
        console.error('Error adding Utilisateur:', error);
        alert("Error adding Utilisateur");
        
      }
    );
  }


  userDetails(id?: number){
    this.mybolean2=true;
    this.utilisateurserv.getemployeeById(id).subscribe((data: any) => {
      console.log(data);
      this.utilisateurupdate=data;
      
    });
  
  }
  Update() {
    if (this.utilisateurupdate?.id) { // check if id has a value
      this.utilisateurserv.updateemployee(this.utilisateurupdate.id, this.utilisateurupdate).subscribe(() => {
        this.mybolean2 = !this.mybolean2;
        alert("Votre mise a jour a été effectuée avec succées")
        this.ngOnInit();
      });
    }
  }
 
  
  evaluatebolean(){
    this.mybolean=!this.mybolean;
    
  }
  evaluatebolean2(){
    
    this.mybolean2 = !this.mybolean2;
  }
  
}
