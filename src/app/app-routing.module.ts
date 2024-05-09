import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PresentationComponent } from './presentation/presentation.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AcceuilcnstnComponent } from './acceuilcnstn/acceuilcnstn.component';
import { GestionuserComponent } from './gestionuser/gestionuser.component';
import { LienutileComponent } from './lienutile/lienutile.component';
import { ListservicesComponent } from './listeservices/listeservices.component';
import { ListdirectionComponent } from './listdirection/listdirection.component';
import { Forms2Component } from './forms2/forms2.component';
import { ListesalleComponent } from './listesalle/listesalle.component';
import { ListecategorieComponent } from './listecategorie/listecategorie.component';
import { ListereservationComponent } from './listereservation/listereservation.component';
import { ListequipemetComponent } from './listequipemet/listequipemet.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdmintemplateComponent } from './admintemplate/admintemplate.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthorizationGuard } from './guards/authorization.guard';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: "login", pathMatch: "full" },
  {
    path: 'admin', component: AdmintemplateComponent,canActivate: [AuthenticationGuard],
 
     children: [
      { path: 'acceuil', component: AcceuilcnstnComponent },
      { path: 'presentation', component: PresentationComponent },
      { path: 'mesforms', component: Forms2Component },
      { path: 'contact', component: ContactComponent },
      { path: 'gallerie', component: GallerieComponent },
      { path: 'acceuilcnstn', component: AcceuilcnstnComponent },
    
      { path: 'gestionusers', component: GestionuserComponent ,canActivate :[AuthorizationGuard], data :{role:"ADMIN"} },
      { path: 'lienutile', component: LienutileComponent },
      { path: 'gestionservices', component: ListservicesComponent ,canActivate :[AuthorizationGuard], data :{role:"ADMIN"} },
      { path: 'gestiondirections', component: ListdirectionComponent,canActivate :[AuthorizationGuard], data :{role:"ADMIN"}  },
      { path: 'gestionsalles', component: ListesalleComponent,canActivate :[AuthorizationGuard], data :{role:"ADMIN"}  },
      { path: 'gestioncategorie', component: ListecategorieComponent,canActivate :[AuthorizationGuard], data :{role:"ADMIN"}  },
      { path: 'gestionequipement', component: ListequipemetComponent ,canActivate :[AuthorizationGuard], data :{role:"ADMIN"} },
      { path: 'gestionreservation', component: ListereservationComponent,canActivate :[AuthorizationGuard], data :{role:"ADMIN"}  },
      {path : 'notauthorized' , component :NotauthorizedComponent}
    ]
  },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
